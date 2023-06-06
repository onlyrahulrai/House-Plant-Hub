import React, { useRef, useState } from "react";
import {
  Animated,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from "react-native";
import ActionSheet from "react-native-actionsheet";
import ImageView from "react-native-image-viewing";
import * as ImagePicker from "expo-image-picker";
import tw from "twrnc";

const ProfilePictureSelector = ({ onProfilePictureURLChange }) => {
  const actionSheet = useRef(null);
  const [tappedImage, setTappedImage] = useState([]);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [isImageViewerVisible, setIsImageViewerVisible] = useState(false);
  const [profilePictureURL, setProfilePictureURL] = useState("");

  const showActionSheet = (index) => {
    actionSheet.current.show();
  };

  const getPermissionAsync = async () => {
    if (Platform.OS === "ios") {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync(
        false
      );

      if (permissionResult.granted === false) {
        alert("Sorry, we need camera roll permissions to make this work.");
      }
    }
  };

  const onPressAddPhotoBtn = async () => {
    await getPermissionAsync();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePictureURL(result.assets[0].uri);
      onProfilePictureURLChange(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  const onActionDone = (index) => {
    if (index == 0) {
      onPressAddPhotoBtn();
    } else if (index == 2) {
      if (profilePictureURL) {
        setProfilePictureURL(null);
      }
    }
  };

  const handleProfilePictureClick = () => {
    if (profilePictureURL) {
      const image = [
        {
          id: 1,
          uri: profilePictureURL,
        },
      ];
      setTappedImage(image);
      setIsImageViewerVisible(true);
    } else {
      showActionSheet();
    }
  };

  return (
    <React.Fragment>
      <View style={tw`flex-1 w-full justify-center items-center mt-5 flex-row`}>
        <TouchableHighlight
          style={[
            tw`h-24 w-24 rounded-full overflow-hidden shadow-[#006]`,
            {
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.1,
            },
          ]}
          onPress={handleProfilePictureClick}
        >
          <Image
            style={tw`w-full h-full ${
              profilePictureURL ? "opacity-100" : "opacity-30"
            }`}
            source={
              profilePictureURL
                ? { uri: profilePictureURL }
                : require("../../assets/icons/default-avatar.jpg")
            }
            resizeMode="cover"
            onError={(error) => console.log(" Error ", error)}
          />
        </TouchableHighlight>

        <TouchableOpacity
          onPress={showActionSheet}
          style={[
            tw`items-center justify-center opacity-80 z-10 w-6 h-6 rounded-3xl mt-12 -ml-4 bg-slate-200`,
          ]}
        >
          <Image
            style={[tw`w-5 h-5`, { tintColor: "white" }]}
            source={require("../../assets/icons/camera-filled.png")}
          />
        </TouchableOpacity>
      </View>

      <View>
        <ActionSheet
          ref={actionSheet}
          title={"Confirm action"}
          options={["Change Profile Photo", "Cancel", "Remove Profile Photo"]}
          cancelButtonIndex={1}
          destructiveButtonIndex={2}
          onPress={onActionDone}
          style={{ opacity: fadeAnim }}
        />

        <ImageView
          images={tappedImage}
          imageIndex={0}
          visible={isImageViewerVisible}
          onRequestClose={() => setIsImageViewerVisible(false)}
          keyExtractor={(image) => image.id}
        />
      </View>
    </React.Fragment>
  );
};

export default ProfilePictureSelector;
