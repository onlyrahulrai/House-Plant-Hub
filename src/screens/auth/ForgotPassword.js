import * as React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackArrow from "../../assets/backArrow.png";
import { COLORS, ROUTES } from "../../constants";
import tw from "twrnc";

function ForgotPassword({ navigation }) {
  return (
    <KeyboardAwareScrollView>
      <View style={tw`flex-1`}>
        <TouchableOpacity
          style={tw`self-start`}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[
              tw`w-6 h-6 ml-3 ${Platform.OS === "ios" ? "mt-12" : "mt-5"}`,
              { resizeMode: "contain", tintColor: COLORS.primary },
            ]}
            source={BackArrow}
          />
        </TouchableOpacity>

        <Text
          style={[
            tw`mt-6 mb-8 self-stretch text-left ml-11 font-bold text-3xl`,
            { color: COLORS.primary },
          ]}
        >
          Reset Password
        </Text>

        <View style={tw`items-center`}>
          <Text style={tw`text-center text-2xl font-bold my-5`}>
            Enter Email{" "}
          </Text>

          <Text style={tw`text-center`}>
            Enter the email associated with your account {"\n"} and we'll send
            an email or message with instructions {"\n"} to reset your password
          </Text>

          <TextInput
            style={tw`h-11 border border-gray-300 pl-5 w-5/6 self-center mt-5 rounded-3xl`}
            placeholder={"E-mail"}
            keyboardType="email-address"
            placeholderTextColor="#aaaaaa"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={[
              tw`w-5/6 rounded-3xl p-2.5 mt-8 self-center`,
              { backgroundColor: COLORS.primary },
            ]}
          >
            <Text
              style={tw`text-center text-white`}
              onPress={() => navigation.navigate(ROUTES.VERIFYOTP)}
            >
              Send Code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default ForgotPassword;
