import { Animated, Easing} from "react-native";
import React, { useEffect, useRef } from "react";
import tw from "twrnc";

const GlowingDot = ({ style }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
  };

  return (
    <Animated.View
      style={[
        tw`w-3 h-3 rounded-full bg-blue-500 shadow mx-2`,
        animatedStyle,
        style,
      ]}
    >
    </Animated.View>
  );
};

export default GlowingDot;
