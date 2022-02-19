import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useTheme } from "styled-components";

import { useState } from "react";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import * as S from "./styles";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();

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
              Faça seu cadastro{"\n"}de forma rápida e fácil.
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
            <Button
              title="Login"
              onPress={() => Alert.alert(`${email} e ${password}`)}
              isLoading={false}
            />
            <Button
              color={theme.colors.background_secondary}
              textColor={theme.colors.title}
              title="Criar conta gratuita"
              onPress={() => {}}
              isLoading={false}
            />
          </S.Footer>
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
