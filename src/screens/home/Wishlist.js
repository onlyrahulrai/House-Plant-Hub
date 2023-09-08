import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons"
import tw from 'twrnc';

function  NotificationsScreen() {
  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center`}>
      <View style={tw`items-center`}>
        <IoniconsIcon name="heart-outline" size={56} />
        <Text style={tw`text-center mt-2`}>You currently do not have any items added {"\n"} to Favourites</Text>
      </View>
    </SafeAreaView>
  );
}

export default  NotificationsScreen;

