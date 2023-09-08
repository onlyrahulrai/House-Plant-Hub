import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { ROUTES } from "../../constants";

const slides = [
  {
    id: "4yXLFzNaDraFVgxa",
    title: "Air Plant, Tillandsia ionantha var. ionantha",
    image: require("../../assets/images/plants-for-you/1.jpg"),
    actual_price: 449,
    sale_price: 359,
  },
  {
    id: "TiXaWm4CgZlNXWMt",
    title: "Loving Touch - Air Plant",
    image: require("../../assets/images/plants-for-you/2.jpg"),
    actual_price: 1048,
    sale_price: 859,
  },
  {
    id: "zWlBFCMKirY2f5dL",
    title: "Combo of 2 Air Plants with Mesmerizing Elements",
    image: require("../../assets/images/plants-for-you/3.jpg"),
    actual_price: 3609,
    sale_price: 2849,
  },
  {
    id: "mllzsCK1dE2c5IZx",
    title: "Gladiolus Interpret (Red, Black) - Bulbs",
    image: require("../../assets/images/plants-for-you/4.jpg"),
    actual_price: 257,
    sale_price: 167,
  },
  {
    id: "n8Qr9JEujFPy8KnI",
    title: "Tulip Queen of the night (Black) - Bulbs",
    image: require("../../assets/images/plants-for-you/5.jpg"),
    actual_price: 989,
    sale_price: 529,
  },
  {
    id: "kdUBoIPoqLW5oUnD",
    title: "Calla Lily (Black) - Bulbs",
    image: require("../../assets/images/plants-for-you/6.jpg"),
    actual_price: 1119,
    sale_price: 929,
  },
];

const PlantsForYou = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`px-4 mt-2`}>
      <Text style={tw`text-lg font-bold`}>Plants For You</Text>

      <FlatList
        data={slides}
        renderItem={({ item }) => (
          <View style={tw`mx-3 my-3 items-center w-40`}>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.PRODUCT,{title:item.title})}>
              <Image
                source={item.image}
                style={tw`h-32 w-40 rounded-lg`}
                resizeMode="cover"
              />
            </TouchableOpacity>

            <Text style={tw`text-center`}>{item.title.substring(0, 36)}..</Text>

            <View style={tw`flex-row gap-3`}>
              <Text>₹{item.sale_price}</Text>
              <Text style={tw`line-through text-slate-400`}>
                ₹{item.actual_price}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`mt-5 items-center`}
        numColumns={2}
      />
    </View>
  );
};

export default PlantsForYou;
