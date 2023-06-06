import React from "react";
import { View ,Text, Button} from "react-native";
import styles from "../../styles";

const SettingsDetail = ({route,navigation}) => {
  console.log(" Route ",route)
  return (
    <View style={styles.container}>
      <Text> Settings Detail Screen</Text>
      <Button 
        title="Go Back To Setting"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
export default SettingsDetail;
