import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, View,Text } from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { ROUTES } from "../constants";
import tw from "twrnc";
import { HomeScreen, ProductScreen } from "../screens";
import { Avatar } from "@rneui/themed";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME_TAB}
      screenOptions={{
        headerRight: () => (
          <View style={tw`flex-row`}>
            <TouchableOpacity>
              <EvilIconsIcon name="search" size={32} style={tw`pr-2`} />
            </TouchableOpacity>
            <TouchableOpacity>
              <EvilIconsIcon name="heart" size={32} style={tw`pr-2`} />
            </TouchableOpacity>
            <TouchableOpacity>
              <EvilIconsIcon name="cart" size={32} />
            </TouchableOpacity>
          </View>
        ),
      }}
    >
      <Stack.Screen
        name={ROUTES.HOME_TAB}
        component={HomeScreen}
        options={({ route }) => ({
          headerLeft: () => (
            <View style={tw`flex-row items-center`}>
              <Avatar
                size={32}
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/36.jpg",
                }}
              />
              <Text style={tw`pl-2 text-lg`}>John</Text>
            </View>
          ),
          headerTitle:""
        })}
      />
      <Stack.Screen
        name={ROUTES.PRODUCT}
        component={ProductScreen}
        options={({ route }) => ({
          title: route?.params?.title
        })}
      />
    </Stack.Navigator>
  );
}
