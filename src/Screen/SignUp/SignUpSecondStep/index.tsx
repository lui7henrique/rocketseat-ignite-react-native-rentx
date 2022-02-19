import { useRoute } from "@react-navigation/native";
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

type Params = {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
};

export const SignUpSecondStep = () => {
  const route = useRoute();
  const { user } = route.params as Params;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    try {
      const schema = Yup.object().shape({
        password_confirmation: Yup.string().oneOf(
          [null, Yup.ref("password")],
          "As senhas precisam coincidir 😉"
        ),
        password: Yup.string()
          .required("Senha obrigatória.")
          .min(6, "No mínimo, 6 caracteres 😉"),
      });

      await schema.validate({
        password,
        password_confirmation: confirmPassword,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        return Toast.show({
          type: "error",
          text1: "Algo deu errado!",
          text2: err.message,
        });
      } else {
        return Toast.show({
          type: "error",
          text1: "Não foi possível realizar a segunda etapa do cadastro! 😞",
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
              <Bullet active={false} />
              <Bullet active={true} />
            </S.Bullets>
          </S.Header>

          <S.Title>Crie sua {"\n"}senha</S.Title>
          <S.Subtitle>Insira sua melhor e{"\n"}mais segura senha!</S.Subtitle>

          <S.Form>
            <S.FormTitle>02. Senha</S.FormTitle>
            <Input
              iconName="lock"
              placeholder="Senha"
              isPassword
              onChangeText={setPassword}
              value={password}
            />
            <Input
              iconName="lock"
              placeholder="Repetir senha"
              isPassword
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
            <Button
              title="Cadastrar"
              style={{ marginTop: 8 }}
              onPress={handleRegister}
            />
          </S.Form>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
