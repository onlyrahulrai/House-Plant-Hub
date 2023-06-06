import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackArrow from "../../../assets/backArrow.png";
import { COLORS, ROUTES } from "../../../constants";
import tw from "twrnc";

function LoginWithEmailScreen({ navigation }) {
  return (
    <KeyboardAwareScrollView>
      <View style={tw`flex-1`}>
        <View>
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
            Sign In
          </Text>
          <TextInput
            style={tw`h-11 border border-gray-300 pl-5 w-5/6 self-center mt-5 rounded-3xl`}
            placeholder={"E-mail"}
            keyboardType="email-address"
            placeholderTextColor="#aaaaaa"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          
          <TextInput
            style={tw`h-11 border border-gray-300 pl-5 w-5/6 self-center mt-5 rounded-3xl`}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder={"Password"}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={tw`self-center items-end w-5/6 mt-1.5`}
            onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}
          >
            <Text style={[tw`text-base font-bold`, { color: COLORS.primary }]}>
              {" "}
              Forgot password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              tw`w-5/6 rounded-3xl p-2.5 mt-12 self-center`,
              { backgroundColor: COLORS.primary },
            ]}
            onPress={() => navigation.navigate(ROUTES.HOME)}
          >
            <Text style={tw`text-center text-white`}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View>
          <>
            <Text style={tw`self-center my-6 text-black`}> OR</Text>

            <TouchableOpacity
              style={tw`w-5/6 rounded-3xl p-2.5 self-center bg-slate-100`}
            >
              <Text style={tw`text-base text-center text-black`}>
                Login With Facebook
              </Text>
            </TouchableOpacity>
          </>

          <TouchableOpacity
            style={[tw`self-center p-1.5 mt-4`, { elevation: 0 }]}
          >
            <Image
              source={require("../../../assets/icons/googlebutton.png")}
              style={tw`w-10 h-10`}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`mt-5`}
            onPress={() => navigation.navigate(ROUTES.LOGIN_WITH_MOBILE_NUMBER)}
          >
            <Text style={[tw`text-center`, { color: COLORS.primary }]}>
              Login with phone number
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default LoginWithEmailScreen;
