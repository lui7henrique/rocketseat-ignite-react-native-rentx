import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { api } from "../../services/api";

import { Car } from "../../components/Car";
import { Loading } from "../../components/Loading";

import { CarType } from "../../types/car";

import Logo from "../../assets/logo.svg";
import * as S from "./styles";
import theme from "../../styles/theme";

export const Home = () => {
  const [cars, setCars] = useState([] as CarType[]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const { data } = await api.get<CarType[]>("/cars");
        setCars(data);
      } catch (err: unknown) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const handleCarDetails = (car: CarType) => {
    navigation.navigate("CarDetails", { car });
  };

  const handleOpenMyCars = () => {
    navigation.navigate("MyCars");
  };

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <S.Header>
        <S.HeaderContent>
          <Logo width={RFValue(118)} height={RFValue(12)} />
          <S.TotalCars>Total de {cars.length} Carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>

      {loading ? (
        <Loading />
      ) : (
        <S.CarList
          data={cars}
          keyExtractor={() => String(uuid.v4())}
          renderItem={({ item }) => (
            <Car
              data={item as CarType}
              onPress={() => handleCarDetails(item as CarType)}
            />
          )}
        />
      )}
      <S.MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons
          name="ios-car-sport"
          size={32}
          color={theme.colors.background_primary}
        />
      </S.MyCarsButton>
    </S.Container>
  );
};
