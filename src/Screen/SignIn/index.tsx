import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useTheme } from "styled-components";
import * as Yup from "yup";
import Toast from "react-native-toast-message";

import { useState } from "react";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();
  const navigation = useNavigation();

  const handleSignIn = async () => {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().required("Senha obrigatória 😉"),
        email: Yup.string()
          .required("E-mail obrigatório 😉")
          .email("Digite um e-mail válido! 😉"),
      });

      await schema.validate({ email, password });

      if (
        email === "luizhenrique@fodao.com" &&
        password === "luizhenriquefodao"
      ) {
        navigation.navigate("Home");
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        return Toast.show({
          type: "error",
          text1: "Faltam algumas informações!",
          text2: err.message,
        });
      } else {
        return Toast.show({
          type: "error",
          text1: "Não foi possível realizar o login! 😞",
          text2: "Verifique as credenciais e tente novamente.",
        });
      }
    }
  };

  const handleRedirectToCreateAccount = () => {
    navigation.navigate("SignUpFirstStep");
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <S.Header>
            <S.Title>Estamos {"\n"}quase lá</S.Title>
            <S.Subtitle>
              Faça seu login para começar{"\n"}
              uma experiência incrível.
            </S.Subtitle>
          </S.Header>

          <S.Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <Input
              iconName="lock"
              placeholder="Senha"
              isPassword
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </S.Form>
          <S.Footer>
            <Button title="Login" onPress={handleSignIn} isLoading={false} />
            <Button
              color={theme.colors.background_secondary}
              textColor={theme.colors.title}
              title="Criar conta gratuita"
              isLoading={false}
              onPress={handleRedirectToCreateAccount}
            />
          </S.Footer>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
