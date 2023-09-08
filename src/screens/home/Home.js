import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import {
  SliderComponent,
  CategoriesComponent,
  IndoorPlantsComponent,
  OutdoorPlantsComponent,
  PlantsForYouComponent,
} from "../../components";
import { Divider } from "@rneui/themed";
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

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <FlatList
        data={slides}
        ListHeaderComponent={() => (
          <React.Fragment>
            <SliderComponent />
            <CategoriesComponent  />
            <Divider style={tw`mt-5`} width={3} />
            <IndoorPlantsComponent />
            <Divider style={tw`mt-5`} width={3} />
            <OutdoorPlantsComponent />
            <Divider style={tw`mt-5`} width={3} />

            <View style={tw`py-5 items-center`}>
              <Text style={tw`text-2xl font-bold`}>Trending Plants</Text>
            </View>
          </React.Fragment>
        )}
        renderItem={({ item }) => (
          <View style={tw`mx-3 my-3 items-center w-28`}>
            <TouchableOpacity>
              <Image
                source={item.image}
                style={tw`h-28 w-28 rounded-full`}
                resizeMode="cover"
              />
            </TouchableOpacity>

            <Text style={tw`text-center`}>{item.title.substring(0, 22)}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`mt-5`}
        numColumns={3}
        ListFooterComponent={() => (
          <React.Fragment>
            <Divider style={tw`mt-5`} width={3} />
            <PlantsForYouComponent />
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
