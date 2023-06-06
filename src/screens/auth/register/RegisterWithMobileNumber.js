import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { COLORS, CONFIG, ROUTES } from "../../../constants";
import {TermsOfUseView,ProfilePictureSelector} from "../../../components";
import BackArrow from "../../../assets/backArrow.png";
import tw from "twrnc";
import CountryPicker from "react-native-country-picker-modal";


const RegiterWithMobileNumber = ({ navigation }) => {
  const [profilePictureURL, setProfilePictureURL] = useState("");
  const [inputFields, setInputFields] = useState({});
  const [countryCode, setCountryCode] = useState("IN");

  const goBack = () => {
    try {
      navigation.goBack();
    } catch (error) {
      console.log(" Error ", error);
    }
  };

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <KeyboardAwareScrollView style={tw`w-full flex-1`}>
        <View>
          <TouchableOpacity style={tw`self-start`} onPress={goBack}>
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
            Create new account
          </Text>

          <ProfilePictureSelector 
            onProfilePictureURLChange={(url) => setProfilePictureURL(url)}
          />
        </View>

        <View style={tw`items-center`}>
          {CONFIG.signupByMobileNumberFields.map((field, key) => (
            <TextInput
              key={key}
              style={tw`h-11 border border-gray-300 pl-5 w-5/6 self-center mt-5 rounded-3xl`}
              placeholder={field.placeholder}
              placeholderTextColor="#aaaaaa"
              secureTextEntry={field.secureTextEntry}
              onChangeText={(text) =>
                setInputFields((prevState) => ({
                  ...prevState,
                  [field.key]: text,
                }))
              }
              value={inputFields[field.key]}
              keyboardType={field.type}
              underlineColorAndroid="transparent"
              autoCapitalize={field.autoCapitalize}
            />
          ))}

          <View style={tw`items-center mt-5`}>
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
          </View>

          <TouchableOpacity
            style={[
              tw`w-5/6 p-3 mt-9 rounded-3xl`,
              { backgroundColor: COLORS.primary },
            ]}
          >
            <Text style={tw`text-center text-white`}>Send Code</Text>
          </TouchableOpacity>
        </View>

        <Text style={tw`my-6 text-black self-center`}>OR</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.REGISTER_WITH_EMAIL)}
        >
          <Text style={[tw`text-center`, { color: COLORS.primary }]}>
            Sign up with Email address
          </Text>
        </TouchableOpacity>

        <TermsOfUseView />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default RegiterWithMobileNumber;
