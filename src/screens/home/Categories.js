import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import tw from "twrnc";
import { ROUTES } from "../../constants";

const slides = [
  {
    id: "M9gNjppiwvJ7C5mP",
    image: require("../../assets/images/categories/1.jpg"),
    title: "Gardening",
  },
  {
    id: "2IaASK5ht2EiaOA9",
    image: require("../../assets/images/categories/2.jpg"),
    title: "Plants",
  },
  {
    id: "uy7w8FERLNbJOcra",
    image: require("../../assets/images/categories/3.jpg"),
    title: "Flower Bulbs",
  },
  {
    id: "zFgw3qTPsZ2yA4Ju",
    image: require("../../assets/images/categories/4.jpg"),
    title: "Pots",
  },
  {
    id: "PJ9Ek3ewGyeVroiz",
    image: require("../../assets/images/categories/5.jpg"),
    title: "Pebbles",
  },
  {
    id: "SbfdFNpZa4XLldgh",
    image: require("../../assets/images/categories/6.jpeg"),
    title: "Soil & Add Ons",
  },
];

const Categories = ({ navigation }) => {
  return (
    <View style={tw`items-center`}>
      <FlatList
        data={slides}
        renderItem={({ item }) => (
          <View style={tw`mx-3 my-3 items-center w-18`}>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.CATEGORY_DETAIL,{
                id:item.id,
                name:item.title
              })}
            >
              <Image
                source={item.image}
                style={tw`h-18 w-18 rounded-full`}
                resizeMode="cover"
              />
            </TouchableOpacity>

            <Text style={tw`text-center`}>{item.title.substring(0, 22)}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`mt-5`}
        numColumns={4}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
