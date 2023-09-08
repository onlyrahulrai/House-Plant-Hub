// In App.js in a new project

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ForgotPasswordScreen,
  LoginWithEmailScreen,
  LoginWithMobileNumberScreen,
  RegisterWithEmailScreen,
  RegisterWithMobileNumberScreen,
  SplashScreen,
  VerifyOtpScreen,
  WalkthroughScreen,
  WelcomeScreen
} from "../screens";
import DrawerNavigation from "./DrawerNavigator";
import { COLORS, ROUTES } from "../constants";

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: COLORS.primary,
        headerTintColor: COLORS.white,
      }}
      initialRouteName={ROUTES.SPLASH}
    >
      <Stack.Screen
        name={ROUTES.SPLASH}
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.WELCOME}
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.WALKTHROUGH}
        component={WalkthroughScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={ROUTES.LOGIN_WITH_EMAIL}
        component={LoginWithEmailScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={ROUTES.LOGIN_WITH_MOBILE_NUMBER}
        component={LoginWithMobileNumberScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={ROUTES.REGISTER_WITH_EMAIL}
        component={RegisterWithEmailScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={ROUTES.REGISTER_WITH_MOBILE_NUMBER}
        component={RegisterWithMobileNumberScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
        options={{headerShown:false}}
      />

      <Stack.Screen
        name={ROUTES.VERIFYOTP}
        component={VerifyOtpScreen}
        options={{headerShown:false}}
      />

      <Stack.Screen
        name={ROUTES.HOME}
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
