import { ScrollView, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getColors, ImageColorsResult } from 'react-native-image-colors';


const resortImage = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/05/c1/fb/resort-rio.jpg'
const MyComponent = () => {
    useEffect(() => {
        const [colors, setColors] = useState<ImageColorsResult>();
        const fetchColors = async () => {
            try {
                const result: ImageColorsResult = await getColors(resortImage, {
                    fallback: '#000000',
                    cache: true,
                    key: resortImage,
                });
                // console.warn(result);
                // console.log(result);
                setColors(result);
            } catch (error) {
                console.error('Error fetching colors:', error);
            }
        };
        fetchColors();
    }, []);
    return (
        <ScrollView>
            {colors?.platform === 'android' && (
                <View>
                    <Image source={{ uri: resortImage }} style={{ width: Dimensions.get('screen').width, height: 400 }} />
                </View>
            )}
        </ScrollView>
    )
}

export default MyComponent

const styles = StyleSheet.create({})