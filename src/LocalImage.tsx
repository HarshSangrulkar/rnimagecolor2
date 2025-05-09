import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
import { getColors, ImageColorsResult } from 'react-native-image-colors'
import LinearGradient from 'react-native-linear-gradient';

// const catImg = require('../assets/catImage.jpeg')
const imageUrl = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6b/16/b9/caption.jpg';
const mImage = require('../assets/mImage.jpg')

const LocalImage = () => {
    const [colors, setColors] = useState<ImageColorsResult>();

    useEffect(() => {
        const fetchColors = async () => {
            try {
                const result: ImageColorsResult = await getColors(mImage, {
                    fallback: '#000000',
                    cache: true,
                    key: mImage,
                });
                console.warn(result);
                console.log(result);
                setColors(result);
            } catch (error) {
                console.error('Error fetching colors:', error);
            }
        };
        fetchColors();
    }, []);

    return (
        <ScrollView style={styles.container}>
            {colors?.platform === 'android' && (
                <View>
                    <View>
                        <Image source={mImage} style={{ width: Dimensions.get('screen').width, height: 400 }} />
                        <LinearGradient
                            colors={[colors.average, 'rgba(0, 0, 0, 0)', 'transparent', colors.average]}
                            locations={[0, 0.2, 0.7, 1]}
                            style={[StyleSheet.absoluteFillObject]}
                        />
                        {/* <LinearGradient
                            colors={['#FFFFFF', '#000000']} 
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }}
                        style={[StyleSheet.absoluteFillObject]}
                        /> */}
                    </View>
                    <View style={{ height: 100, borderWidth: 1, borderColor: 'black', marginTop: 10 }}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors.lightVibrant, colors.dominant]} style={[StyleSheet.absoluteFillObject]} />
                    </View>
                    {/* style={{ paddingTop: 30 }} */}
                    <View style={{ marginTop: 10 }}>
                        <View style={{ backgroundColor: colors.vibrant, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Vibrant</Text>
                        </View>
                        <View style={{ backgroundColor: colors.muted, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Muted</Text>
                        </View>
                        <View style={{ backgroundColor: colors.dominant, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Dominant</Text>
                        </View>
                        <View style={{ backgroundColor: colors.average, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Average</Text>
                        </View>
                        <View style={{ backgroundColor: colors.darkMuted, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Dark Muted</Text>
                        </View>
                        <View style={{ backgroundColor: colors.darkVibrant, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Dark Vibrant</Text>
                        </View>
                        <View style={{ backgroundColor: colors.lightMuted, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Light Muted</Text>
                        </View>
                        <View style={{ backgroundColor: colors.lightVibrant, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Light Vibrant</Text>
                        </View>
                    </View>
                </View>
            )}
            {/* <View>
                {colors?.platform === 'android' && (
                    <View>
                        <View style={{ backgroundColor: colors.vibrant, padding: 10 }}>
                            <Text>Vibrant</Text>
                        </View>
                        <View style={{ backgroundColor: colors.muted, padding: 10 }}>
                            <Text>Muted</Text>
                        </View>
                    </View>
                )}
            </View> */}
        </ScrollView>
    )
}

export default LocalImage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 40,
        marginBottom: 50,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
})