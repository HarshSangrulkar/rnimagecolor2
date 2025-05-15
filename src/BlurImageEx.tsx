import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { BlurView } from "@react-native-community/blur";

const resortImage = require('../assets/TrendingSeason1.png')

const BlurImageEx = () => {
    return (
        // <SafeAreaView style={styles.container}>
        //     <View style={styles.imageContainer}>
        //         {/* <Text>BlurImage</Text> */}

        //         <View>
        //             <Image source={resortImage} style={{ width: 350, height: 400, }} />
        //         </View>
        //         <View style={{ width: 350, height: 200 }}>
        //             <Image source={resortImage} style={{ width: 350, height: 200 }} />
        //             <BlurView
        //                 style={[{ position: 'absolute', width: '100%', height: '100%' }]}
        //                 blurType="light"
        //                 blurAmount={100}
        //                 reducedTransparencyFallbackColor="white"
        //             />

        //         </View>
        //     </View>

        // </SafeAreaView>
        <SafeAreaView>
            <View>
                <View>
                    {/* image */}
                    <Image source={resortImage} width={300} height={500} />
                    <BlurView blurType='dark' style={{ position: 'absolute', bottom: 10, width: 300, height: 100 }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BlurImageEx

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        margin: 50,
        alignSelf: 'center',
        // borderBlockColor: 'black',
        // borderWidth: 1,
        borderRadius: 10,
        // padding: 10,
        // flex: 1,
        overflow: 'hidden',
    }
})