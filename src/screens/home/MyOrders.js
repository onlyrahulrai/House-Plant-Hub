import React, { useEffect, useRef } from "react";
import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { Entypo } from "react-native-vector-icons";
import { Divider } from "@rneui/themed";
import tw from "twrnc";
import GlowingDot from "../../components/commons/GlowingDot";

const statuses = [
  "All",
  "Ordered",
  "Shipped",
  "Delivered",
  "Cancelled",
  "Exchange",
  "Return",
  "Others",
];

const MyOrders = () => {
  return (
    <ScrollView style={tw`flex-1`}>
      <View style={tw`mx-4 my-2`}>
        <Text style={tw`text-lg font-semibold`}>Your Orders</Text>

        <View style={tw`flex-row mt-3 border p-1 rounded items-center`}>
          <IoniconsIcon name="search-outline" size={24} style={tw`mr-2.5`} />
          <TextInput
            placeholder="Search By Customer, Product, or Order ID"
            style={tw`flex-1`}
          />
        </View>

        <View style={tw`gap-2 flex-1 my-3 flex-wrap flex-row	`}>
          {statuses.map((status, key) => (
            <TouchableOpacity
              key={key}
              style={tw`border p-2 rounded-lg ${
                status === "All" ? "border-amber-600" : null
              }`}
            >
              <Text key={key}>{status}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Divider width={5} />

      <View style={tw`mb-16`}>
        <View>
          <View style={tw`mx-4 p-2`}>
            <Text>7th May</Text>
          </View>
          <Divider width={1} />

          <View style={tw`flex-row justify-between mx-4 p-2`}>
            <Text>Order ID: 867037148364</Text>
            <Text>Sold To Rahul Rai</Text>
          </View>
          <Divider width={1} />
          <View style={tw`mx-4 p-3 flex-row`}>
            <Text>Supplier : </Text>
            <Text style={tw`font-bold`}>Poonam Synthetics</Text>
          </View>
          <Divider width={1} />

          <View style={tw`p-3 flex-row flex-wrap justify-center`}>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/gardening/1.jpg")}
                style={tw`h-18 w-18 rounded-full`}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View style={tw`flex-1 mx-3 justify-evenly`}>
              <Text>
                Parijat Tree, Parijatak, Night Flowering Jasmine - Plant
              </Text>

              <View style={tw`flex-row items-center`}>
                <GlowingDot style={tw`bg-red-500`} />
                <Text>Cancelled</Text>
              </View>
            </View>
            <TouchableOpacity style={tw`justify-center`}>
              <IoniconsIcon name="ios-chevron-forward-sharp" size={32} />
            </TouchableOpacity>
          </View>
        </View>

        <Divider width={5} />

        <View>
          <View style={tw`mx-4 p-2`}>
            <Text>6th May</Text>
          </View>
          <Divider width={1} />

          <View style={tw`flex-row justify-between mx-4 p-2`}>
            <Text>Order ID: 591937230418</Text>
            <Text>Sold To Rahul Rai</Text>
          </View>
          <Divider width={1} />
          <View style={tw`mx-4 p-3 flex-row`}>
            <Text>Supplier : </Text>
            <Text style={tw`font-bold`}>Samrat & co.</Text>
          </View>
          <Divider width={1} />

          <View>
            <View style={tw`flex-row p-3 flex-wrap justify-center`}>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/gardening/2.jpg")}
                  style={tw`h-18 w-18 rounded-full`}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <View style={tw`flex-1 mx-3 justify-evenly`}>
                <Text>Top 5 air purifier and oxygen enriching plant pack</Text>

                <View style={tw`flex-row items-center`}>
                  <GlowingDot style={tw`bg-green-400`} />
                  <Text>Delivered on 13 May, 2023</Text>
                </View>
              </View>
              <TouchableOpacity style={tw`justify-center`}>
                <IoniconsIcon name="ios-chevron-forward-sharp" size={32} />
              </TouchableOpacity>
            </View>

            <View style={tw`px-3`}>
              <Divider width={1} />

              <TouchableOpacity>
                <Text style={tw`text-red-500 font-bold py-3`}>ADD FEEDBACK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyOrders;
