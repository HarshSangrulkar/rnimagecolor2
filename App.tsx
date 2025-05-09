import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyComponent from './src/MyComponent'
import MyCompJs from './src/MyCompJs'
import UseImageColors from './src/useImageColors'
import ImageColorsExample from './src/ImageColorsExample'
import Colors from './src/Colors'
import Page from './src/ColorsEx'
import ImgClr from './src/ImgClr'
import LocalImage from './src/LocalImage'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>App</Text> */}
      {/* <MyComponent></MyComponent> */}
      {/* <MyCompJs></MyCompJs> */}
      {/* <UseImageColors></UseImageColors> */}
      {/* <ImageColorsExample></ImageColorsExample> */}
      {/* <Colors></Colors> */}
      {/* <Page></Page> */}
      {/* <ImgClr></ImgClr> */}
      <LocalImage></LocalImage>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  }
})