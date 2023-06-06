import React, { useState, useRef } from "react";
import { Image, View, TouchableOpacity, Text, TextInput } from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { COLORS, ROUTES } from "../../../constants";
import BackArrow from "../../../assets/backArrow.png";
import tw from "twrnc";

const LoginWithMobileNumber = ({ navigation }) => {
  const [countryCode, setCountryCode] = useState("IN");

  return (
    <React.Fragment>
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
                tw`mt-8 mb-8 self-stretch text-left ml-11 font-bold text-3xl`,
                { color: COLORS.primary },
              ]}
            >
              Sign In
            </Text>

            <View style={tw`items-center mt-10`}>
              <View
                style={tw`flex-row items-center justify-center border h-11 border-gray-300 rounded-3xl w-5/6`}
              >
                <View>
                  <CountryPicker
                    {...{
                      countryCode,
                      withFlag:true,
                      withFilter:true,
                      withCallingCodeButton: true,
                    }}
                    onSelect={(data) => setCountryCode(data.cca2)}
                    visible={false}
                    containerButtonStyle={tw`w-1/4 w-auto pr-2`}
                  />
                </View>
                <View>
                  <TextInput placeholder="Mobile No..." style={tw`w-64 pl-2`} />
                </View>
              </View>

              <TouchableOpacity
                style={[
                  tw`w-5/6 rounded-3xl p-2.5 mt-8 self-center`,
                  { backgroundColor: COLORS.primary },
                ]}
              >
                <Text style={tw`text-center text-white`}>Send Code</Text>
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
                onPress={() => navigation.navigate(ROUTES.LOGIN_WITH_EMAIL)}
              >
                <Text style={[tw`text-center`, { color: COLORS.primary }]}>
                  Login with phone number
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </React.Fragment>
  );
};

export default LoginWithMobileNumber;
