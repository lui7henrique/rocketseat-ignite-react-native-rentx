import { useState, useEffect } from "react";
import { FlatList, StatusBar } from "react-native";

import { BackButton } from "../../components/BackButton";
import { Loading } from "../../components/Loading";

import { api } from "../../services/api";
import theme from "../../styles/theme";
import * as S from "./styles";

import { CarType } from "../../types/car";
import { Car } from "../../components/Car";

type CarProps = {
  car: CarType;
  user_id: number;
  id: string;
  start_date: string;
  end_date: string;
};

export const MyCars = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCars = async () => {
      setLoading(true);
      try {
        const { data } = await api.get("/schedules_by_user?user_id=1");

        console.log(data);
        setCars(data);
      } catch (err: unknown) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    loadCars();
  }, []);

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.main}
        translucent
      />
      <S.Header>
        <BackButton color={theme.colors.background_secondary} />
        <S.Title>Seus agendamentos, estão aqui.</S.Title>
        <S.Subtitle>Conforto, segurança e praticidade.</S.Subtitle>
      </S.Header>
      <S.Content>
        <S.ContentHeader>
          <S.ContentHeaderTitle>Agendamentos feitos</S.ContentHeaderTitle>
          <S.ContentHeaderValue>{cars.length}</S.ContentHeaderValue>
        </S.ContentHeader>
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Car
                data={item.car as CarType}
                startDate={item.start_date}
                endDate={item.end_date}
              />
            )}
          />
        )}
      </S.Content>
    </S.Container>
  );
};
