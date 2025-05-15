import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ParallaxEx = () => {
    return (
        <View style={styles.container}>
            <Text> parallaxEx</ Text>
        </View>
    )
}

export default ParallaxEx

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '100%'
    }
})