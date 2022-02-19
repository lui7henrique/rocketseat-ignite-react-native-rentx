import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import * as S from "./styles";

export const SignUpFirstStep = () => {
  return (
    <S.Container>
      <S.Header>
        <BackButton />
        <S.Bullets>
          <Bullet active={true} />
          <Bullet active={false} />
        </S.Bullets>
      </S.Header>
      <S.Title>Crie sua {"\n"}conta</S.Title>
      <S.Subtitle>Faça seu cadastro de forma {"\n"}rápida e fácil.</S.Subtitle>
      <S.Form>
        <S.FormTitle>1. Dados</S.FormTitle>
        <Input iconName="user" placeholder="Nome" autoCorrect={false} />
        <Input
          iconName="mail"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Input
          iconName="credit-card"
          placeholder="CNH"
          keyboardType="numeric"
        />
        <Button title="Próximo" style={{ marginTop: 8 }} />
      </S.Form>
    </S.Container>
  );
};
