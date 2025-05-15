import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyComponent from './src/MyComponent'
import MyCompJs from './src/MyCompJs'
import UseImageColors from './src/useImageColors'
import ImageColorsExample from './src/BlurImageEx'
import Colors from './src/Colors'
import Page from './src/ColorsEx'
import ImgClr from './src/ImgClr'
import LocalImage from './src/LocalImage'
import BlurImageEx from './src/BlurImageEx'
import ExcOffers from './src/ExcOffers'
import ExcOfferParent from './src/ExcOfferParent'
import ExclusiveOffersParent from './src/ExclusiveOffersParent'
import Index from './src/Index';
import ParallaxEx from './src/ParallaxEx';
import HorizantalTransacation from './src/HorizantalTransaction';
import SimpleCarousel from './src/SimpleCarousel';
import ParallaxCarousel from './src/Index';
import CuratedCard from './src/CuratedCard';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView>
        {/* <ExclusiveOffersParent></ExclusiveOffersParent> */}
        {/* <Index></Index> */}
        {/* <ParallaxEx></ParallaxEx> */}
        {/* <HorizantalTransacation></HorizantalTransacation> */}
        {/* <SimpleCarousel></SimpleCarousel> */}
        {/* <ParallaxEx></ParallaxEx> */}
        <ParallaxCarousel></ParallaxCarousel>
        <CuratedCard></CuratedCard>
      </ScrollView>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})