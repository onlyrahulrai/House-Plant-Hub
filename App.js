import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AuthNavigator from "./src/navigations/AuthNavigator";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
    color: "white",
  },
};

export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./src/assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./src/assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./src/assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./src/assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./src/assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
