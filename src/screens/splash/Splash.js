import { Alert, View, Image } from "react-native";
import React, { useEffect } from "react";
import { ROUTES } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../styles";
import logo from "../../assets/logo-white.png";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      getWalkthroughStatus();
    }, 1000);
  }, []);

  const getWalkthroughStatus = async () => {
    try {
      const walkthrough = JSON.parse(await AsyncStorage.getItem("shouldShowOnboardingFlow"))

      if (walkthrough === null) {
        navigation.navigate(ROUTES.WALKTHROUGH);
      } else {
        navigation.navigate(ROUTES.WELCOME);
      }
    } catch (e) {
      Alert.alert(e);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: "#59b2ab" }]}>
      <Image source={logo} style={styles.image} />
    </View>
  );
};

export default Splash;
