import { StatusBar } from "react-native";
import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";
import Toast from "react-native-toast-message";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";

import AccelerationSvg from "../../assets/acceleration.svg";
import SpeedSvg from "../../assets/speed.svg";
import ForceSvg from "../../assets/force.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import EnergySvg from "../../assets/energy.svg";
import HybridSvg from "../../assets/hybrid.svg";
import CarSvg from "../../assets/car.svg";

import * as S from "./styles";
import { SvgProps } from "react-native-svg";
import theme from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { CarType } from "../../types/car";
import { getPlatformDate } from "../../utils/getPlatformDate";
import { api } from "../../services/api";

type RentalPeriod = {
  start: string;
  end: string;
};

type SchedulesByCars = {
  id: string;
  unavailable_dates: Array<string>;
};

export const SchedulingDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { car, dates } = route.params as { car: CarType; dates: string[] };

  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );
  const [isLoading, setIsLoading] = useState(false);

  const iconByType: { [key: string]: React.FC<SvgProps> } = {
    acceleration: AccelerationSvg,
    speed: SpeedSvg,
    force: ForceSvg,
    turning_diameter: ExchangeSvg,
    electric_motor: EnergySvg,
    gasoline_motor: GasolineSvg,
    hybrid_motor: HybridSvg,
    gasoline: GasolineSvg,
    exchange: ExchangeSvg,
    seats: PeopleSvg,
  };

  const handleConfirmRental = async () => {
    setIsLoading(true);

    try {
      const { data } = await api.get<SchedulesByCars>(
        `/schedules_by_car/${car.id}`
      );

      const unavailableDates = [...data.unavailable_dates, ...dates];

      await api.put(`/schedules_by_car/${car.id}`, {
        id: car.id,
        unavailable_dates: unavailableDates,
      });

      navigation.navigate("SchedulingComplete");
    } catch (err: unknown) {
      Toast.show({
        type: "error",
        text1: "Não foi possível alugar o carro 😿",
        text2: `Tente novamente mais tarde.`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), "dd/MM/yyyy"),
      end: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        "dd/MM/yyyy"
      ),
    });
  }, []);

  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <S.Header>
        <BackButton />
      </S.Header>

      <S.CarImages>
        <ImageSlider images={car.photos} />
      </S.CarImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Name>{car.name}</S.Name>
          </S.Description>
          <S.Rent>
            <S.Period>{car.rent.period}</S.Period>
            <S.Price>R$ {car.rent.price}</S.Price>
          </S.Rent>
        </S.Details>

        <S.Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              icon={iconByType[accessory.type] || CarSvg}
              name={accessory.name}
              key={JSON.stringify(accessory)}
            />
          ))}
        </S.Accessories>

        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather
              name="calendar"
              color={theme.colors.background_primary}
              size={30}
            />
          </S.CalendarIcon>

          <S.DateInfo>
            <S.DateTitle>De</S.DateTitle>
            <S.DateValue>{rentalPeriod.start}</S.DateValue>
          </S.DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <S.DateInfo>
            <S.DateTitle>Ao dia</S.DateTitle>
            <S.DateValue>{rentalPeriod.end}</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.RentalPriceDetails>
            <S.RentalPriceLabel>Total</S.RentalPriceLabel>
            <S.RentalPriceQuota>
              R$ {car.rent.price} x{dates.length} diárias
            </S.RentalPriceQuota>
          </S.RentalPriceDetails>
          <S.RentalPriceTotal>
            R$ {car.rent.price * dates.length}
          </S.RentalPriceTotal>
        </S.RentalPrice>
      </S.Content>

      <S.Footer>
        <Button
          title="Confirmar"
          onPress={handleConfirmRental}
          isLoading={isLoading}
        />
      </S.Footer>
    </S.Container>
  );
};
