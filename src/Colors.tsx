import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const Colors = () => {
    return (
        <View style={styles.container}>
            <BlurView
                style={styles.blurView}
                blurType="dark"
                blurAmount={5}
                reducedTransparencyFallbackColor="white"
            >
                <Text style={styles.text}>Flexible Blur</Text>
                <Text style={styles.text}>More Content</Text>
            </BlurView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    blurView: {
        flexDirection: 'column',
        padding: 20,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
    },
});

export default Colors;