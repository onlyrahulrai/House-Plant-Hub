import React from "react";
import { useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesScreen, CategoryDetail } from "../screens";
import { TouchableOpacity, View } from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { ROUTES } from "../constants";
import tw from "twrnc";

const Stack = createNativeStackNavigator();

export default function CategoryNavigator() {

  return (
    <Stack.Navigator
      initialRouteName={ROUTES.CATEGORIES}
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
      <Stack.Screen name={ROUTES.CATEGORIES} component={CategoriesScreen} options={{title:"All Categories"}} />
      <Stack.Screen name={ROUTES.CATEGORY_DETAIL} component={CategoryDetail} options={({route}) => ({
        title:route?.params?.name
      })} />
    </Stack.Navigator>
  );
}
