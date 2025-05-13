import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
import { getColors, ImageColorsResult } from 'react-native-image-colors'
import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';

const catImg = require('../assets/catImage.jpeg')
const imageUrl = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6b/16/b9/caption.jpg';
const mImage = require('../assets/mImage.jpg')
const resortImage = require('../assets/resortImage.jpg')

const LocalImage = () => {
    const [colors, setColors] = useState<ImageColorsResult>();
    const [colors2, setColors2] = useState<ImageColorsResult>();
    const [colors3, setColors3] = useState<ImageColorsResult>();
    const [colors4, setColors4] = useState<ImageColorsResult>();

    useEffect(() => {
        const fetchColors = async () => {
            try {
                const result: ImageColorsResult = await getColors(mImage, {
                    fallback: '#000000',
                    cache: true,
                    key: mImage,
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
    useEffect(() => {
        const fetchColors = async () => {
            try {
                const result2: ImageColorsResult = await getColors(imageUrl, {
                    fallback: '#000000',
                    cache: true,
                    key: imageUrl,
                });
                // console.warn(result2);
                // console.log(result2);
                setColors2(result2);
            } catch (error) {
                console.error('Error fetching colors:', error);
            }
        };
        fetchColors();
    }, []);
    useEffect(() => {
        const fetchColors = async () => {
            try {
                const result3: ImageColorsResult = await getColors(catImg, {
                    fallback: '#000000',
                    cache: true,
                    key: catImg,
                });
                // console.warn(result);
                // console.log(result);
                setColors3(result3);
            } catch (error) {
                console.error('Error fetching colors:', error);
            }
        };
        fetchColors();
    }, []);
    useEffect(() => {
        const fetchColors = async () => {
            try {
                const result4: ImageColorsResult = await getColors(resortImage, {
                    fallback: '#000000',
                    cache: true,
                    key: resortImage,
                });
                // console.warn(result);
                // console.log(result);
                setColors4(result4);
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
                    </View>
                    <View style={{ height: 150, borderWidth: 1, borderColor: 'black', marginVertical: 10 }}>
                        <LinearGradient locations={[0.2, 0.66, 1]} colors={[colors.lightVibrant, colors.dominant, colors.lightMuted]} style={[StyleSheet.absoluteFillObject]} />
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
            {colors2?.platform === 'android' && (
                <View>
                    {/* new image */}
                    <View>
                        <Image source={{ uri: imageUrl }} style={{ width: Dimensions.get('screen').width, height: 400 }} />
                        <LinearGradient
                            colors={[colors2.muted, 'rgba(0, 0, 0, 0)', 'transparent', colors2.lightVibrant]}
                            locations={[0, 0.2, 0.7, 1]}
                            style={[StyleSheet.absoluteFillObject]}
                        />
                    </View>
                    <View style={{ height: 150, borderWidth: 1, borderColor: 'black', marginVertical: 10 }}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} locations={[0.3, 0.6, 1]} colors={[colors2.dominant, colors2.lightMuted, colors2.lightVibrant]} style={[StyleSheet.absoluteFillObject]} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <View style={{ backgroundColor: colors2.vibrant, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Vibrant</Text>
                        </View>
                        <View style={{ backgroundColor: colors2.muted, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Muted</Text>
                        </View>
                        <View style={{ backgroundColor: colors2.dominant, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Dominant</Text>
                        </View>
                        <View style={{ backgroundColor: colors2.average, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Average</Text>
                        </View>
                        <View style={{ backgroundColor: colors2.darkMuted, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Dark Muted</Text>
                        </View>
                        <View style={{ backgroundColor: colors2.darkVibrant, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Dark Vibrant</Text>
                        </View>
                        <View style={{ backgroundColor: colors2.lightMuted, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Light Muted</Text>
                        </View>
                        <View style={{ backgroundColor: colors2.lightVibrant, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Light Vibrant</Text>
                        </View>
                    </View>
                </View>

            )}
            {colors3?.platform === 'android' && (
                <View>
                    <View>
                        <Image source={catImg} style={{ width: Dimensions.get('screen').width, height: 400 }} />
                        <LinearGradient
                            colors={[colors3.average, 'rgba(0, 0, 0, 0)', 'transparent', colors3.average]}
                            locations={[0, 0.2, 0.7, 1]}
                            style={[StyleSheet.absoluteFillObject]}
                        />
                    </View>
                    <View style={{ height: 150, borderWidth: 1, borderColor: 'black', marginVertical: 10 }}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} locations={[0.2, 0.6, 1]} colors={[colors3.vibrant, colors3.dominant, colors3.lightMuted]} style={[StyleSheet.absoluteFillObject]} />
                    </View>
                    {/* style={{ paddingTop: 30 }} */}
                    <View style={{ marginTop: 10 }}>
                        <View style={{ backgroundColor: colors3.vibrant, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Vibrant</Text>
                        </View>
                        <View style={{ backgroundColor: colors3.muted, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Muted</Text>
                        </View>
                        <View style={{ backgroundColor: colors3.dominant, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Dominant</Text>
                        </View>
                        <View style={{ backgroundColor: colors3.average, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Average</Text>
                        </View>
                        <View style={{ backgroundColor: colors3.darkMuted, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Dark Muted</Text>
                        </View>
                        <View style={{ backgroundColor: colors3.darkVibrant, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Dark Vibrant</Text>
                        </View>
                        <View style={{ backgroundColor: colors3.lightMuted, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Light Muted</Text>
                        </View>
                        <View style={{ backgroundColor: colors3.lightVibrant, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Light Vibrant</Text>
                        </View>
                    </View>
                </View>
            )}
            {colors4?.platform === 'android' && (
                <View>
                    <View>
                        <Image source={resortImage} style={{ width: Dimensions.get('screen').width, height: 400 }} />
                        <LinearGradient
                            colors={[colors4.average, 'rgba(0, 0, 0, 0)', 'transparent', colors4.average]}
                            locations={[0, 0.2, 0.7, 1]}
                            style={[StyleSheet.absoluteFillObject]}
                        />
                    </View>
                    <View style={{ height: 150, borderWidth: 1, borderColor: 'black', marginVertical: 10 }}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} locations={[0.2, 0.6, 1]} colors={[colors4.vibrant, colors4.dominant, colors4.lightMuted]} style={[StyleSheet.absoluteFillObject]} />
                    </View>
                    {/* style={{ paddingTop: 30 }} */}
                    <View style={{ marginTop: 10 }}>
                        <View style={{ backgroundColor: colors4.vibrant, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Vibrant</Text>
                        </View>
                        <View style={{ backgroundColor: colors4.muted, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Muted</Text>
                        </View>
                        <View style={{ backgroundColor: colors4.dominant, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Dominant</Text>
                        </View>
                        <View style={{ backgroundColor: colors4.average, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Average</Text>
                        </View>
                        <View style={{ backgroundColor: colors4.darkMuted, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Dark Muted</Text>
                        </View>
                        <View style={{ backgroundColor: colors4.darkVibrant, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Dark Vibrant</Text>
                        </View>
                        <View style={{ backgroundColor: colors4.lightMuted, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Light Muted</Text>
                        </View>
                        <View style={{ backgroundColor: colors4.lightVibrant, padding: 10 }}>
                            <Text style={{ color: 'white' }}>Light Vibrant</Text>
                        </View>
                    </View>
                </View>
            )}
            <View style={styles.imageContainer}>
                {colors4?.platform === 'android' && (
                    <View>
                        <Image source={resortImage} style={{ width: 'auto', height: 300 }} />
                        <View style={{ height: 150 }}>
                            {/* start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} */}
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={[colors4.average, colors4.vibrant]} style={[StyleSheet.absoluteFillObject]} />
                        </View>
                    </View>
                )}
            </View>
            <View style={styles.imageContainer}>
                {colors4?.platform === 'android' && (
                    <View>
                        <Image source={resortImage} style={{ width: 'auto', height: 300 }} />
                        <View style={{ height: 150 }}>
                            {/* start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} */}
                            <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} useAngle={true} colors={[colors4.average, colors4.vibrant]} style={[StyleSheet.absoluteFillObject]} />
                        </View>
                        {/* <View >
                            <RadialGradient style={[{ width: '100%', height: 200 }, StyleSheet.absoluteFillObject]}
                                colors={[colors4.average, colors4.darkMuted, colors4.darkVibrant, colors4.average]}
                                center={[100, 100]}
                                radius={200}>

                            </RadialGradient>
                            <RadialGradient style={{ width: '100%', height: 200, }}
                                colors={[colors4.average, colors4.darkMuted, colors4.darkVibrant, colors4.average]}
                                center={[150, 150]}
                                radius={200}>
                            </RadialGradient>
                        </View> */}
                    </View>
                )}
            </View>
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
    imageContainer: {
        borderRadius: 10,
        margin: 15,
        overflow: 'hidden',
    }
})