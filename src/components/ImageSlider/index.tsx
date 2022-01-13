import * as S from "./styles";

type ImageSliderProps = {
  images: string[];
};

export const ImageSlider = ({ images }: ImageSliderProps) => {
  return (
    <S.Container>
      <S.ImageIndexes>
        <S.ImageIndex active />
        <S.ImageIndex />
        <S.ImageIndex />
        <S.ImageIndex />
        <S.ImageIndex />
      </S.ImageIndexes>

      <S.CarImageWrapper>
        <S.CarImage
          source={{
            uri: images[0],
          }}
          resizeMode="contain"
        />
      </S.CarImageWrapper>
    </S.Container>
  );
};
