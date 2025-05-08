import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
import { getColors, ImageColorsResult } from 'react-native-image-colors'

/*
1. load image
2. use npm package
3. extract colors
*/
// const catImg = require('./assets/cat.jpg')
const catImg = require('../assets/catImage.jpeg')
const LocalImage = () => {
    const [colors, setColors] = useState<ImageColorsResult>();
    useEffect(() => {
        const fetchColors = async () => {
            try {
                const result: ImageColorsResult = await getColors(catImg, {
                    fallback: '#000000',
                    cache: true,
                    key: catImg,
                });
                console.warn(result);
                setColors(result);
            } catch (error) {
                console.error('Error fetching colors:', error);
            }
        };
        fetchColors();
    }, []);

    return (
        <View>
            <Text>LocalImage</Text>
            <Image source={catImg} style={{ width: 200, height: 200 }} />
            <View>
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
            </View>
        </View>
    )
}

export default LocalImage

const styles = StyleSheet.create({})