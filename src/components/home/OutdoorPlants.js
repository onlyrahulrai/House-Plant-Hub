import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { ROUTES } from "../../constants";

const slides = [
  {
    id: "E3eyTRhyP98hLyU7",
    title:
      "Damascus Rose, Scented Rose (Any Color) - Plant",
    image: require("../../assets/images/outdoor-plants/1.jpg"),
    actual_price:229,
    sale_price:149
  },
  {
    id: "PvJ9w0tV6kSa5Bma",
    title: "Krishna Tulsi Plant, Holy Basil, Ocimum tenuiflorum (Black) - Plant",
    image: require("../../assets/images/outdoor-plants/2.jpg"),
    actual_price:49,
    sale_price:29
  },
  {
    id: "PU5pfTOwG8Dycdjc",
    title: "Raat Rani Night Blooming Jasmine - Plant",
    image: require("../../assets/images/outdoor-plants/3.jpg"),
    actual_price:179,
    sale_price:139
  },
  {
    id: "cqXsULeHbxyBVkCP",
    title: "Piper Betel, Maghai Paan - Plant",
    image: require("../../assets/images/outdoor-plants/4.jpg"),
    actual_price:305,
    sale_price:249
  },
  {
    id: "7hIFEwdfAz3qwoWr",
    title: "Citronella, Odomas - Plant",
    image: require("../../assets/images/outdoor-plants/5.jpg"),
    actual_price:298,
    sale_price:159
  },
  {
    id: "lsFoXcsgpo6311Jq",
    title: "Krishna Kamal, Passion flower, Passiflora incarnata (Purple) - Plant",
    image: require("../../assets/images/outdoor-plants/6.jpg"),
    actual_price:349,
    sale_price:299
  },
  {
    id: "EbqeTTEv57qfIcOW",
    title: "Rose (Peach) - Plant",
    image: require("../../assets/images/outdoor-plants/7.jpg"),
    actual_price:369,
    sale_price:237
  },
  {
    id: "asUPyLZ9usLZ4n3l",
    title: "Parijat Tree, Parijatak, Night Flowering Jasmine - Plant",
    image: require("../../assets/images/outdoor-plants/8.jpg"),
    actual_price:417,
    sale_price:379
  },
];

const IndoorPlants = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`px-4 mt-2`}>
      <Text style={tw`text-lg font-bold`}>Outdoor Plants</Text>

      <FlatList
        data={slides}
        renderItem={({ item }) => (
          <View style={tw`mx-3 items-center w-44`}>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.PRODUCT,{title:item.title})}>
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
