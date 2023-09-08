import React from "react";
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";

const slides = [
  {
    id: "oCwEY5P6vn0SUoA8",
    title: "5 Best Fragrant Plants",
    image: require("../../assets/images/gardening/1.jpg"),
    actual_price: 1655,
    sale_price: 1459,
  },
  {
    id: "9gkF04DbS0e4uVMR",
    title: "5 Best Indoor Plants Pack",
    image: require("../../assets/images/gardening/2.jpg"),
    actual_price: 1470,
    sale_price: 1159,
  },
  {
    id: "8kUZ4AaJgKBFtTbz",
    title: "Top 5 air purifier and oxygen enriching plant pack",
    image: require("../../assets/images/gardening/3.jpg"),
    actual_price: 1620,
    sale_price: 1299,
  },
  {
    id: "5PKu60qbwMiT3ihB",
    title: "Plant Pack For Healthy Home-Office",
    image: require("../../assets/images/gardening/4.jpg"),
    actual_price: 1255,
    sale_price: 1059,
  },
  {
    id: "tKsBLwm1iJw9Ujt7",
    title: "Pack of 3 Good Luck Jade Plants in Ceramic Pots",
    image: require("../../assets/images/gardening/5.jpg"),
    actual_price: 897,
    sale_price: 699,
  },
  {
    id: "e2kQ0fxFUPTAO0rg",
    title: "Set of 3 Outdoor Flowering Plants for Beautiful Garden",
    image: require("../../assets/images/gardening/6.jpg"),
    actual_price: 888,
    sale_price: 799,
  },
  {
    id: "V4rw77bcOnZ0QEm5",
    title: "Top 5 Plants for Healthy and Prosperous New Year",
    image: require("../../assets/images/gardening/7.jpg"),
    actual_price: 1255,
    sale_price: 1059,
  },
  {
    id: "oaewopMcvMg6WQpF",
    title: "Top 5 Pollution Killer Plants Pack",
    image: require("../../assets/images/gardening/8.jpg"),
    actual_price: 1359,
    sale_price: 849,
  },
];

const CategoryDetail = ({ navigation }) => {

  return (
    <FlatList
      data={slides}
      renderItem={({ item }) => (
        <View style={tw`mx-3 my-3 items-center w-40`}>
          <TouchableOpacity>
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
  );
};

export default CategoryDetail;
