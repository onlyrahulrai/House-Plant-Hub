import React from "react";
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";

const slides = [
  {
    id: "TM0wLPxEAMLPadmP",
    title:
      "Elephant bush, Portulacaria afra, Jade plant (Green) - Succulent Plant",
    image: require("../../assets/images/indoor-plants/1.jpg"),
    actual_price:129,
    sale_price:99
  },
  {
    id: "HnnyBYc3lcUv1RHh",
    title: "Chlorophytum, Spider Plant - Plant",
    image: require("../../assets/images/indoor-plants/2.jpg"),
    actual_price:189,
    sale_price:149
  },
  {
    id: "iiaEsj6SVFc2Vf1w",
    title: "Plant Pack For Healthy Home-Office",
    image: require("../../assets/images/indoor-plants/3.jpg"),
    actual_price:219,
    sale_price:183
  },
  {
    id: "YJuzlPyGymQtXuXQ",
    title: "5 Best Indoor Plants Pack",
    image: require("../../assets/images/indoor-plants/4.jpg"),
    actual_price:749,
    sale_price:509
  },
  {
    id: "IEjwEtQbHIbE5jhH",
    title: "Peace Lily, Spathiphyllum - Plant",
    image: require("../../assets/images/indoor-plants/5.jpg"),
    actual_price:1054,
    sale_price:559
  },
  {
    id: "tSKr81QSQZ8BIARo",
    title: "5 Best Fragrant Plants",
    image: require("../../assets/images/indoor-plants/6.jpg"),
    actual_price:1459,
    sale_price:999
  },
  {
    id: "dc0z6B9AfQUUpWKH",
    title: "Areca Palm (Small) - Plant",
    image: require("../../assets/images/indoor-plants/7.jpg"),
    actual_price:1939,
    sale_price:1199
  },
  {
    id: "4umNd7sQCYUj7eJ8",
    title: "Money Plant, Scindapsus (Green) - Plant",
    image: require("../../assets/images/indoor-plants/8.jpg"),
    actual_price:299,
    sale_price:49
  },
];

const IndoorPlants = () => {
  return (
    <View style={tw`px-4 mt-2`}>
      <Text style={tw`text-lg font-bold`}>Indoor Plants</Text>

      <FlatList
        data={slides}
        renderItem={({ item }) => (
          <View style={tw`mx-3 items-center w-44`}>
            <TouchableOpacity>
              <Image
                source={item.image}
                style={tw`h-32 w-44 rounded-lg`}
                resizeMode="cover"
              />
            </TouchableOpacity>

            <Text style={tw`text-center`}>{item.title.substring(0,22)}...</Text>

            <View style={tw`flex-row gap-3`}>
                <Text>₹{item.sale_price}</Text>
                <Text style={tw`line-through text-slate-400`}>₹{item.actual_price}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`mt-2`}
      />
    </View>
  );
};

export default IndoorPlants;
