import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Dimensions,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { COLORS, IMGS } from "../../constants";
import tw from 'twrnc'

const { width } = Dimensions.get("screen");

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props} style={tw`-mt-1`}>
      <View style={{height: 140,backgroundColor:COLORS.primary }}>
        <Image source={IMGS.user} style={styles.userImg} />
      </View>
      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: "absolute",
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: COLORS.white,
  },
  drawerListWrapper: {
    marginTop: 65,
  },
});
