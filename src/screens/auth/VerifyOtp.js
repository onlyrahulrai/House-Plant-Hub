import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackArrow from "../../assets/backArrow.png";
import { COLORS, ROUTES } from "../../constants";
import tw from "twrnc";

function VerifyOtp({ navigation }) {
  const [countDown, setCountDown] = useState(35);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countDown > 0) {
        setCountDown((prevState) => prevState - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown]);

  const onResendOTP = () => {
    setCountDown(35);
  };
  
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
          Verify OTP
        </Text>

        <View style={tw`items-center`}>
          <Text style={tw`text-center text-2xl font-bold my-5`}>Enter OTP</Text>

          <Text style={tw`text-center`}>
            Please enter the OTP sent {"\n"} to your registered mobile number or
            email address
          </Text>

          <TextInput
            style={tw`h-11 w-5/6 border border-gray-300 pl-5  self-center mt-5 rounded-3xl`}
            placeholder={"OTP"}
            keyboardType="numeric"
            placeholderTextColor="#aaaaaa"
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <View style={tw`w-5/6 items-end mt-2`}>
            {countDown > 0 ? (
              <Text>Resend OTP in {countDown} seconds</Text>
            ) : (
              <TouchableOpacity onPress={onResendOTP}>
                <Text style={{ color: COLORS.primary }}>Resend OTP</Text>
              </TouchableOpacity>
            )}
          </View>

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
              Verify Otp
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default VerifyOtp;
