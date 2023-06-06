import React from 'react'
import { View,Text,Button } from 'react-native'
import styles from '../../styles'
import { ROUTES } from '../../constants'

const Settings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text> Settings Screen</Text>
      <Button
        title='Go To Settings Detail'
        onPress={() => navigation.navigate(ROUTES.SETTINGS_DETAIL,{name:"John Doe"})}
      />
    </View>
  )
}

export default Settings;