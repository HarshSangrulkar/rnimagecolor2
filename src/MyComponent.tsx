import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { getColors, ImageColorsResult } from 'react-native-image-colors';

const MyComponent = () => {
    const imageUrl = 'https://i.imgur.com/68jyjZT.jpg';
    const [colors, setColors] = useState<ImageColorsResult>();

    useEffect(() => {
        const fetchImageColors = async () => {
            try {
                const result = await getColors(imageUrl, {
                    fallback: '#000000',
                    cache: true,
                    key: imageUrl,
                });
                console.warn(result);
                setColors(result);
            } catch (error) {
                console.error('Error fetching image colors:', error);
            }
        };

        fetchImageColors();
    }, [imageUrl]);

    return (
        <View>
            <Image source={{ uri: imageUrl }} />
            <View>
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
        </View>
    );
};

const styles = StyleSheet.create({
});

export default MyComponent;