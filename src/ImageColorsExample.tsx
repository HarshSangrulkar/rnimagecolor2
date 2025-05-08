import React from 'react';
import { getColors, ImageColorsResult } from 'react-native-image-colors';
import { View, Text, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { AndroidImageColors } from 'react-native-image-colors/build/types';
const ImageColorsExample = () => {
    const [colors, setColors] = useState<AndroidImageColors>();
    const imageUrl = 'https://i.imgur.com/68jyjZT.jpg';
    // React.useEffect(() => {
    //     getColors(imageUrl, {
    //         fallback: '#228B22',
    //         cache: true,
    //         key: imageUrl,
    //     }).then(setColors);
    // }, []);
    useEffect(() => {
        const fetchImageColors = async () => {
            try {
                const result = await getColors(imageUrl, {
                    fallback: '#228B22',
                    cache: true,
                    key: imageUrl,
                });
                setColors(result);
            } catch (error) {
                console.error('Error fetching image colors:', error);
            }
        };

        fetchImageColors();
    }, []);

    console.warn(colors);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>RN Image Color</Text>
            <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
            {colors?.platform === 'android' && (
                <View>
                    <View style={{ backgroundColor: colors.vibrant, flex: 1, padding: 10 }}>
                        <Text>Vibrant</Text>
                    </View>
                    <View style={{ backgroundColor: colors.muted, flex: 1, padding: 10 }}>
                        <Text>Muted</Text>
                    </View>
                </View>
            )}
        </View>
    );
};

export default ImageColorsExample;


/* 
upload image via url
extract colors from image using getColors function, return type of getColors is ImageColorsResult, it is a union type of AndroidImageColors and IosImageColors
getColors function takes url, options as parameter, options is an object with fallback, cache and key as properties 
getColors function returns a promise of ImageColorsResult, it is a union type of AndroidImageColors and IosImageColors
getColors function is used to extract colors from image, it is a async function, so we need to use await keyword to get the result of promise
now, for android, we will use AndroidImageColors type, for ios we will use IosImageColors type
AndroidImageColors has properties like vibrant, muted, lightVibrant, darkVibrant, dominant, average, etc.
write a function to extract colors from image using getColors function, it will take url as parameter and return a promise of ImageColorsResult and use AndroidImageColors only as i want it specifically for android. 
*/