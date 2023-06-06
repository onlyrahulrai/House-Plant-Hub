import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { COLORS, CONFIG, ROUTES } from "../../constants";

const Welcome = ({navigation}) => {

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <View style={tw`h-64 justify-center items-center`}>
        <Image
          source={require("../../assets/logo.png")}
          style={[tw`w-96 h-96`, { resizeMode: "contain" }]}
        />
      </View>

      <Text style={[tw`font-bold text-2xl my-3`, { color: COLORS.primary }]}>
        {CONFIG?.onboardingConfig?.welcomeTitle}
      </Text>

      <Text style={tw`text-center my-3`}>
        {CONFIG?.onboardingConfig?.welcomeCaption}
      </Text>

      <View style={tw`w-full items-center mt-9 gap-5`}>
        <TouchableOpacity
          style={[
            tw` w-5/6 p-2 rounded-2xl`,
            { backgroundColor: COLORS.primary },
          ]}
          onPress={() => navigation.navigate(ROUTES.LOGIN_WITH_EMAIL)}
        >
          <Text style={tw`text-center text-white`}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`w-5/6 p-2 rounded-2xl bg-slate-100`} onPress={() => navigation.navigate(ROUTES.REGISTER_WITH_EMAIL)}>
          <Text style={tw`text-center`}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
