import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import * as Yup from "yup";
import Toast from "react-native-toast-message";

import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import * as S from "./styles";

export const SignUpFirstStep = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [driverLicense, setDriverLicense] = useState("");

  const handleNextStep = async () => {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required("CNH é obrigatória 😉"),

        email: Yup.string()
          .required("E-mail é obrigatório 😉")
          .email("Digite um e-mail válido! 😉"),

        name: Yup.string().required("Nome é obrigatório 😉"),
      });

      const data = { name, email, driverLicense };
      await schema.validate(data);

      navigation.navigate("SignUpSecondStep", { user: data });
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
          text1: "Não foi possível realizar a primeira etapa do cadastro! 😞",
          text2: "Verifique as credenciais e tente novamente.",
        });
      }
    }
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.Header>
            <BackButton />
            <S.Bullets>
              <Bullet active={true} />
              <Bullet active={false} />
            </S.Bullets>
          </S.Header>

          <S.Title>Crie sua {"\n"}conta</S.Title>
          <S.Subtitle>
            Faça seu cadastro de forma {"\n"}rápida e fácil.
          </S.Subtitle>

          <S.Form>
            <S.FormTitle>1. Dados</S.FormTitle>
            <Input
              iconName="user"
              placeholder="Nome"
              autoCorrect={false}
              onChangeText={setName}
              value={name}
            />
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
              onChangeText={setDriverLicense}
              value={String(driverLicense)}
            />
            <Button
              title="Próximo"
              style={{ marginTop: 8 }}
              onPress={handleNextStep}
            />
          </S.Form>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
