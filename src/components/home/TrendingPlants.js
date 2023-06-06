import React from "react";
import { Text, View,FlatList,TouchableOpacity,Image } from "react-native";
import tw from "twrnc";

const slides = [
  {
    id: "4yXLFzNaDraFVgxa",
    title: "Bonsai Plants",
    image: require("../../assets/images/trending-plants/1.jpg"),
  },
  {
    id: "TiXaWm4CgZlNXWMt",
    title: "Kokedama Plants",
    image: require("../../assets/images/trending-plants/2.jpg"),
  },
  {
    id: "zWlBFCMKirY2f5dL",
    title: "Concrete Planters",
    image: require("../../assets/images/trending-plants/3.jpg"),
  },
  {
    id: "mllzsCK1dE2c5IZx",
    title: "Ceramic Planters",
    image: require("../../assets/images/trending-plants/4.jpg"),
  },
  {
    id: "n8Qr9JEujFPy8KnI",
    title: "Birthday Gifts",
    image: require("../../assets/images/trending-plants/5.jpg"),
  },
  {
    id: "kdUBoIPoqLW5oUnD",
    title: "Month Wise Gardening",
    image: require("../../assets/images/trending-plants/6.jpg"),
  },
];

const TrendingPlants = () => {
  return (
    <View>
      <View style={tw`py-5 items-center`}>
        <Text style={tw`text-2xl font-bold`}>Trending Plants</Text>
      </View>
      <FlatList
        data={slides}
        renderItem={({ item }) => (
          <View style={tw`mx-3 my-3 items-center w-28`}>
            <TouchableOpacity>
              <Image
                source={item.image}
                style={tw`h-28 w-28 rounded-full`}
                resizeMode="cover"
              />
            </TouchableOpacity>

            <Text style={tw`text-center`}>
              {item.title.substring(0, 22)}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`mt-5`}
        numColumns={3}
      />
      </View>
  );
};

export default TrendingPlants;
