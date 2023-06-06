const regexForNames = /^[a-zA-Z]{2,25}$/;

const config = {
  isSMSAuthEnabled: true,
  isGoogleAuthEnabled: true,
  isAppleAuthEnabled: true,
  isFacebookAuthEnabled: true,
  forgotPasswordEnabled: true,
  shouldShowOnboardingFlow:'shouldShowOnboardingFlow',
  onboardingConfig: {
    welcomeTitle: "House Plant Hub",
    welcomeCaption:
      "Embrace the green revolution join the house plant hub \n and let nature flourish within your walls.",
    walkthroughScreens: [
      {
        title: "House Plant Hub",
        text:
          "Embrace the green revolution, join the house plant hub and let nature flourish within your walls.",
        image: require("../assets/icons/plant.png"),
        bg: "#59b2ab",
      },
      {
        title: "Plant Disese Detector",
        text: "Empowering plant health with cutting-edge detection technology.",
        image: require("../assets/icons/plant-disease.png"),
        bg: "#f9a8d4",
      },
      {
        title: "Lifetime Support",
        text:
          "We help you grow your garden for lifetime.",
        image: require("../assets/icons/support.png"),
        bg: "#38bdf8",
      },
      {
        title: "SMS Authentication",
        text: "End-to-end SMS OTP verification for your users.",
        image: require("../assets/icons/sms-icon.png"),
        bg: "#22bcb5",
      },
      {
        title: "Country Picker",
        text: "Country picker for phone numbers.",
        image: require("../assets/icons/country-picker-icon.png"),
        bg: "#fda4af",
      },
      {
        title: "Reset Password",
        text: "Fully coded ability to reset password via e-mail.",
        image: require("../assets/icons/reset-password-icon.png"),
        bg: "#22bcb5",
      },
      {
        title: "Profile Photo Upload",
        text: "Ability to upload profile photos to Firebase Storage.",
        image: require("../assets/icons/instagram.png"),
        bg: "#a3e635",
      },
      {
        title: "Geolocation",
        text:
          "Automatically store user location to Firestore \n via Geolocation API.",
        image: require("../assets/icons/pin.png"),
        bg: "#fdba74",
      },
      {
        title: "Notifications",
        text:
          "Automatically update and store push notification tokens into Firestore.",
        image: require("../assets/icons/notification.png"),
        bg: "#22bcb5",
      },
    ],
  },
  isUsernameFieldEnabled: false,
  signupByMobileNumberFields: [
    {
      displayName: "First Name",
      type: "ascii-capable",
      editable: true,
      regex: regexForNames,
      key: "firstName",
      placeholder: "First Name",
    },
    {
      displayName: "Last Name",
      type: "ascii-capable",
      editable: true,
      regex: regexForNames,
      key: "lastName",
      placeholder: "Last Name",
    },
    {
      displayName: "Username",
      type: "default",
      editable: true,
      regex: regexForNames,
      key: "username",
      placeholder: "Username",
      autoCapitalize: "none",
    },
  ],
  signupByEmailFields: [
    {
      displayName: "First Name",
      type: "ascii-capable",
      editable: true,
      regex: regexForNames,
      key: "firstName",
      placeholder: "First Name",
    },
    {
      displayName: "Last Name",
      type: "ascii-capable",
      editable: true,
      regex: regexForNames,
      key: "lastName",
      placeholder: "Last Name",
    },
    {
      displayName: "Username",
      type: "default",
      editable: true,
      regex: regexForNames,
      key: "username",
      placeholder: "Username",
      autoCapitalize: "none",
    },
    {
      displayName: "E-mail Address",
      type: "email-address",
      editable: true,
      regex: regexForNames,
      key: "email",
      placeholder: "E-mail Address",
      autoCapitalize: "none",
    },
    {
      displayName: "Password",
      type: "default",
      secureTextEntry: true,
      editable: true,
      regex: regexForNames,
      key: "password",
      placeholder: "Password",
      autoCapitalize: "none",
    },
  ],
};

export default config;
