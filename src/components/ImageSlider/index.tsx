import * as S from "./styles";
import { FlatList, ViewToken } from "react-native";
import { useState, useRef } from "react";
import { Bullet } from "../Bullet";

type ImageSliderProps = {
  images: string[];
};

type ChangeImageProps = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

export const ImageSlider = ({ images }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <S.Container>
      <S.ImageIndexes>
        {images.map((_, index) => (
          <Bullet active={index === imageIndex} key={String(index)} />
        ))}
      </S.ImageIndexes>

      <FlatList
        data={images}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          <S.CarImageWrapper>
            <S.CarImage
              source={{
                uri: item,
              }}
              resizeMode="contain"
            />
          </S.CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </S.Container>
  );
};
