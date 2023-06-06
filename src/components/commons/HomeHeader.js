import React from "react";
import { Text,Image ,View } from "react-native";
import tw from "twrnc";
import { COLORS } from "../../constants";
import shortWhiteLogo from "../../assets/short-white-logo.png"

const HomeHeader = () => {
  return (
    <View style={[tw`p-3 w-full`,{backgroundColor:COLORS.primary}]}>
      <View style={tw`flex-row items-center`}>
        <Text style={tw`text-2xl text-white`}>House Plant Hub</Text>
      </View>
    </View>
  );
};

export default HomeHeader;
