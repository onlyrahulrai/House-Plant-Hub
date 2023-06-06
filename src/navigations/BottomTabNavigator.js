import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, NotificationsScreen, WalletScreen } from "../screens";
import { ROUTES } from "../constants";
import SettingsNavigator from "./SettingsNavigator";
import { Ionicons } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === ROUTES.WALLET) {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === ROUTES.NOTIFICATIONS) {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            iconName = focused ? "settings" : "settings-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#59b2ab",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home Tab" component={HomeScreen} />
      <Tab.Screen name={ROUTES.WALLET} component={WalletScreen} />
      <Tab.Screen name={ROUTES.NOTIFICATIONS} component={NotificationsScreen} />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
      />
    </Tab.Navigator>
  );
}

