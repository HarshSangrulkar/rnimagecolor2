import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { getColors, ImageColorsResult } from 'react-native-image-colors';
import { ImageSourcePropType } from 'react-native';

type Config = {
    fallback?: string;
    cache?: boolean;
    key?: string;
    // Add other configuration options as needed
};

type Colors = {
    platform: 'android' | 'ios' | 'web';
    primary?: string; // Add primary color property
    dominant?: string; // Add dominant color property
    average?: string; // Add average color property
};

const Colors: React.FC = () => {
    const [colors, setColors] = useState<Colors | null>(null);
    const imageUri: ImageSourcePropType = { uri: 'https://i.imgur.com/68jyjZT.jpg' };


    const getImageColors = async (uri: ImageSourcePropType, config?: Config): Promise<Colors | null> => {
        try {
            const result: ImageColorsResult = await getColors((uri as { uri: string }).uri, config);

            return result as Colors;
        } catch (error) {
            console.error("Error getting image colors:", error);
            return null;
        }
    };

    useEffect(() => {
        const fetchImageColors = async () => {
            const imageColors = await getImageColors(imageUri, {
                fallback: '#FFFFFF', // Default color if extraction fails
                cache: true,
                key: 'my-image', // Unique key for caching
            });
            setColors(imageColors);
        };

        fetchImageColors();
    }, [imageUri]);

    return (
        <View>
            <Image source={imageUri} style={styles.image} />
            {colors && (
                <View style={[styles.colorPalette, { backgroundColor: colors.average }]}>
                    <Text style={styles.textColor}>
                        {colors.platform === 'ios' ? colors.primary : colors.dominant}
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    },
    colorPalette: {
        padding: 10,
        marginTop: 10,
    },
    textColor: {
        color: '#000',
    }
});

export default Colors;