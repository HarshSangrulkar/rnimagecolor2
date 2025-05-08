import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
// import {} from 'react-native-image-colors';
import { AndroidImageColors } from 'react-native-image-colors/build/types'
import ImageColors, { ImageColorsResult, getColors } from 'react-native-image-colors';
const imageUrl = 'https://i.imgur.com/68jyjZT.jpg';

const ImgClr = () => {
    const [colors, setColors] = useState<AndroidImageColors|null>(null);

    useEffect(() => {
        const fetchColors = async () => {

            try {
                const result: ImageColorsResult = await ImageColors.getColors(imageUrl, {
                    fallback: '#228B22',
                    cache: true,
                    key: 'imageUrl',
                });
                if (result.platform === 'android') {
                    const androidColors = result as AndroidImageColors;
                    setColors(androidColors);
                } else {
                    console.warn('Error setting platform');
                }
            } catch (error) {
                console.error('Error fetching image colors:', error);
            }

            // if (result.platform === 'android') {
            //     const androidColors = result as AndroidImageColors;
            //     setColors(androidColors);
            // }
        };

        fetchColors();
    }, []);

    // const result: ImageColorsResult = await ImageColors.getColors(imageUrl, {
    //     fallback: '#228B22',
    //     cache: true,
    //     key: 'imageUrl',
    // });
    // if (result.platform === 'android') {
    //     const androidColors = result as AndroidImageColors;
    //     setColors(androidColors);
    // }

    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            {colors && (
                <View style={styles.colorPreviewContainer}>
                    <Text>Dominant: {colors.dominant}</Text>
                    <Text>Average: {colors.average}</Text>
                    <Text>Vibrant: {colors.vibrant}</Text>
                    <Text>Dark Vibrant: {colors.darkVibrant}</Text>
                    <Text>Muted: {colors.muted}</Text>
                    <Text>Dark Muted: {colors.darkMuted}</Text>
                </View>
            )}
        </View>
    );
};

export default ImgClr;

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 12,
    },
    colorPreviewContainer: {
        marginTop: 16,
    },
});