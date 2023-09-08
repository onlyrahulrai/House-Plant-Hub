import React from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { COLORS, ROUTES } from "../../constants";

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

const Categories = () => {
  const navigation = useNavigation()
  
  return (
    <View style={tw`px-4`}>
      <View style={tw`items-start flex-row`}>
        <View style={tw`items-center mr-4`}>
          <View
            style={[
              tw`w-16 h-16 items-center justify-center rounded-full`,
              { backgroundColor: COLORS.primary },
            ]}
          >
            <IoniconsIcon
              name="grid-outline"
              size={32}
              style={tw`text-white`}
            />
          </View>
          <Text>Categories</Text>
        </View>

        <FlatList
          data={slides}
          renderItem={({ item }) => (
            <View style={tw`mx-2 items-center`}>
              <TouchableOpacity
                style={tw`w-16 h-16 items-center justify-center`}
                onPress={() => navigation.navigate(ROUTES.CATEGORIES_NAVIGATOR,{screen:ROUTES.CATEGORY_DETAIL,params:{id:item.id,name:item.title}})}
              >
                <Image
                  source={item.image}
                  style={tw`h-full w-full rounded-full`}
                  resizeMode="cover"
                />
              </TouchableOpacity>

              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Categories;
