import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./Welcome.style"

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To dukkan App</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProductsPage")}>
          <Text style={styles.button_text}>Let's take a look at the products!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome