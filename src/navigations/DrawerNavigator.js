import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  WalletScreen,
} from "../screens";
import { COLORS, ROUTES } from "../constants";
import BottomTabNavigator from "./BottomTabNavigator";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import CustomDrawer from "../components/navigation/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{
        drawerActiveTintColor:COLORS.primary
      }}
    >
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={BottomTabNavigator}
        options={{
          headerShown:false,
          title:"Home",
          drawerIcon: ({ focused, color, size }) => (
            <IoniconsIcon name="home" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: "Wallet",
          drawerIcon: ({ focused, color, size }) => (
            <IoniconsIcon name="wallet" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
