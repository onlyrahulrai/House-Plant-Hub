import React from "react";
import {
  FlatList,
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";
import { COLORS } from "../../constants";
import tw from "twrnc";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Air Purifying Plants",
    image: require("../../assets/sliders/1.jpg"),
    description:
      "Air purifying houseplants are known for their ability to filter and improve indoor air quality by removing toxins and releasing oxygen.",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Flowering Plants",
    image: require("../../assets/sliders/2.jpg"),
    description:
      "Flowering houseplants are valued for their colorful and often fragrant flowers.",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Foliage Plants",
    image: require("../../assets/sliders/3.jpg"),
    description:
      "Foliage plants are known for their attractive leaves and are primarily grown for their foliage rather than their flowers.",
  },
];

const Slider = () => {
  return (
    <FlatList
      data={slides}
      renderItem={({ item }) => (
        <View style={[tw`mt-4`, { width}]}>
          <View style={tw`items-center justify-center mx-4 relative`}>
            <Image
              source={item.image}
              style={[tw`w-full rounded-xl`, { height: 200 }]}
              resizeMode="cover"
            />

            <View
              style={[
                tw`opacity-35 rounded-xl`,
                {
                  ...StyleSheet.absoluteFillObject,
                  backgroundColor: COLORS.primary,
                },
              ]}
            />

            <View style={tw`absolute left-6 right-6 top-15`}>
              <Text style={tw`text-2xl text-white`}>{item.title}</Text>

              <Text style={tw`text-white text-base mt-3`}>
                {item.description}
              </Text>
            </View>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id}
      horizontal
      contentContainerStyle={{ height: 232 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Slider;
