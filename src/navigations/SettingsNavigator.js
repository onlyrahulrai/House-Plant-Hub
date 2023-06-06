import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../constants";
import { SettingsDetailScreen, SettingsScreen } from "../screens";

const Stack = createNativeStackNavigator();

export default function SettingsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.SETTINGS}
    >
      <Stack.Screen name={ROUTES.SETTINGS} component={SettingsScreen} />
      <Stack.Screen name={ROUTES.SETTINGS_DETAIL} component={SettingsDetailScreen} />
    </Stack.Navigator>
  );
}
