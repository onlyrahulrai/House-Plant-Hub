import React from "react";
import { View,Text } from "react-native";
import { COLORS } from "../../constants";
import tw from "twrnc";

const TermsOfUseView = () => {
  return (
    <View style={tw`items-center justify-center my-6`}>
      <Text
        style={tw`text-sm text-black`}
      >
        By creating an account you agree with our
      </Text>

      <Text style={[tw`text-sm`,{color:COLORS.primary}]}>Terms of Use</Text>
    </View>
  );
};

export default TermsOfUseView;
