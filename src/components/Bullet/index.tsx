import * as S from "./styles";

type BulletProps = {
  active?: boolean;
};

export const Bullet = ({ active }: BulletProps) => {
  return <S.Container active={active} />;
};
