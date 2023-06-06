import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import {
  SliderComponent,
  CategoriesComponent,
  IndoorPlantsComponent,
  OutdoorPlantsComponent,
  TrendingPlantsComponent,
  PlantsForYouComponent,
} from "../../components";
import { Divider } from "@rneui/themed";
import tw from "twrnc";

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <SliderComponent />
      <CategoriesComponent />
      <Divider style={tw`mt-5`} width={3} />
      <IndoorPlantsComponent />
      <Divider style={tw`mt-5`} width={3} />
      <OutdoorPlantsComponent />
      <Divider style={tw`mt-5`} width={3} />
      <TrendingPlantsComponent />
      <Divider style={tw`mt-5`} width={3} />
      <PlantsForYouComponent />
    </ScrollView>
  );
}

export default HomeScreen;
