import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AccountScreen,
  HomeScreen,
  MyOrdersScreen,
  WishlistScreen,
} from "../screens";
import { ROUTES } from "../constants";
import { Ionicons } from "react-native-vector-icons";
import CategoryNavigator from "./CategoryNavigator";
import { TouchableOpacity, View, Text } from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import tw from "twrnc";
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === ROUTES.HOME_NAVIGATOR) {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === ROUTES.WALLET) {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === ROUTES.ACCOUNT) {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === ROUTES.MY_ORDERS) {
            iconName = focused ? "shopping" : "shopping-outline";
          } else if (route.name === ROUTES.CATEGORIES_NAVIGATOR) {
            iconName = focused ? "md-grid" : "md-grid-outline";
          } else if (route.name === ROUTES.WISHLIST) {
            iconName = focused ? "ios-heart" : "ios-heart-outline";
          }

          // You can return any component that you like here!
          return route.name === ROUTES.MY_ORDERS ? (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          ) : (
            <Ionicons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "#59b2ab",
        tabBarInactiveTintColor: "gray",
        headerRight: () => {
          let icons = [];

          if (route.name === ROUTES.WISHLIST) {
            icons = ["search", "bell", "cart"];
          } else if ([ROUTES.MY_ORDERS, ROUTES.ACCOUNT].includes(route.name)) {
            icons = ["search", "cart"];
          } else if (route.name === ROUTES.HOME_NAVIGATOR) {
            icons = ["heart", "bell", "cart"];
          }

          return (
            <View style={tw`flex-row px-2`}>
              {icons.map((icon, key) => (
                <TouchableOpacity key={key}>
                  <EvilIconsIcon name={icon} size={32} style={tw`pr-2`} />
                </TouchableOpacity>
              ))}
            </View>
          );
        },
        headerStyle:{
          borderBottomWidth:1
        }
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME_NAVIGATOR}
        component={HomeNavigator}
        options={({route}) => ({
          headerShown:false,
          title:"Home"
        })}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate(ROUTES.HOME_NAVIGATOR, {
              screen: ROUTES.HOME_TAB,
            });
          },
        })}
      />
      <Tab.Screen
        name={ROUTES.CATEGORIES_NAVIGATOR}
        component={CategoryNavigator}
        options={{ headerShown: false }}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate(ROUTES.CATEGORIES_NAVIGATOR, {
              screen: ROUTES.CATEGORIES,
            });
          },
        })}
      />
      <Tab.Screen name={ROUTES.WISHLIST} component={WishlistScreen} />
      <Tab.Screen name={ROUTES.MY_ORDERS} component={MyOrdersScreen} />
      <Tab.Screen name={ROUTES.ACCOUNT} component={AccountScreen} />
    </Tab.Navigator>
  );
}
