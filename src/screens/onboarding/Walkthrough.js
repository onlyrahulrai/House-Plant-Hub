import React from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { ROUTES } from "../../constants";
import { CONFIG } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Walkthrough = ({ navigation }) => {
  const _renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const _keyExtractor = (item) => item.title;

  const onDone = async () => {
    await AsyncStorage.setItem(
      "shouldShowOnboardingFlow",
      JSON.stringify(false)
    )
      .then(() => navigation.navigate("Welcome"))
      .catch((error) => Alert.alert(error));
  };

  return (
    <View style={{ flex: 1 }}>
      <AppIntroSlider
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        data={CONFIG.onboardingConfig.walkthroughScreens}
        showSkipButton={true}
        onDone={onDone}
        onSkip={onDone}
      />
    </View>
  );
};

export default Walkthrough;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  image: {
    width: 298,
    height: 298,
    marginVertical: 32,
    objectFit: "contain",
  },
  text: {
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
  title: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
});
