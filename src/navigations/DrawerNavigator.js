import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NotificationsScreen, WalletScreen } from "../screens";
import { COLORS, ROUTES } from "../constants";
import BottomTabNavigator from "./BottomTabNavigator";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import CustomDrawer from "../components/navigation/CustomDrawer";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { Avatar, Stack } from "@rneui/themed";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={BottomTabNavigator}
        options={{
          title: "Home",
          headerTitleStyle:{display:"none"},
          drawerIcon: ({ focused, color, size }) => (
            <IoniconsIcon name="home" size={18} color={color} />
          ),
          headerStyle:{
            backgroundColor:COLORS.primary
          },
          headerLeft: () => (
            <View style={tw`flex-row items-center pl-2`}>
              <Avatar
                size={32}
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/36.jpg",
                }}
              />
              <Text style={tw`pl-2 text-lg text-white`}>John</Text>
            </View>
          ),
          headerRight: () => (
            <View style={tw`flex-row pl-2`}>
              <TouchableOpacity>
                <EvilIconsIcon
                  name="heart"
                  size={32}
                  style={tw`pr-2 text-white`}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <EvilIconsIcon
                  name="cart"
                  size={32}
                  style={tw`pr-2 text-white`}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS}
        component={NotificationsScreen}
        options={{
          title: "Notifications",
          drawerIcon: ({ focused, color, size }) => (
            <IoniconsIcon name="notifications" size={18} color={color} />
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
