import { StatusBar, StyleSheet, Dimensions } from "react-native";
import { Button } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

import * as S from "./styles";
import theme from "../../styles/theme";

const WIDTH = Dimensions.get("window").width;

export const Splash = () => {
  const animation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(animation.value, {
            duration: 500,
            easing: Easing.bezier(1, -0.07, 1, 0.67),
          }),
        },
      ],
    };
  });

  const handleAnimationPosition = () => {
    animation.value = Math.random() * WIDTH - 100;
  };

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={theme.colors.header}
      />
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button title="Mover" onPress={handleAnimationPosition} />
    </S.Container>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});
