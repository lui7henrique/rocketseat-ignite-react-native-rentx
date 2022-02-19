import { StatusBar, View } from "react-native";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import * as S from "./styles";

export const SignIn = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Header>
        <S.Title>Estamos {"\n"}quase lá</S.Title>
        <S.Subtitle>Faça seu cadastro{"\n"}de forma rápida e fácil.</S.Subtitle>
      </S.Header>

      <S.Form>
        <Input
          iconName="mail"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCorrect={false}
        />
        <Input iconName="lock" placeholder="Senha" isPassword />
      </S.Form>
      <S.Footer>
        <Button title="Login" onPress={() => {}} isLoading={false} />
        <Button
          color={theme.colors.background_secondary}
          textColor={theme.colors.title}
          title="Criar conta gratuita"
          onPress={() => {}}
          isLoading={false}
        />
      </S.Footer>
    </S.Container>
  );
};
