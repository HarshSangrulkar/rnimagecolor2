import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Svg, { SvgProps } from 'react-native-svg';
import { getFontFamily } from './utils/fontFamily';

export interface ExclusiveOffersProps {
    svgImage: React.ReactNode
    name: string;
    desc: string;
}
const ExclusiveOffers = ({ svgImage, name, desc }: ExclusiveOffersProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.svgContainer}>
                {svgImage}
                <Text style={styles.text}>{name}</Text>
                <View style={styles.btnContainer}>
                    <Text style={styles.btnText}>{desc}</Text>
                </View>
            </View>
        </View>
    )
}

export default ExclusiveOffers

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    svgContainer: {
        // margin: 5,
        padding: 5,
        // borderColor: 'black',
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
        width: '90%'
    },
    text: {
        position: 'absolute',
        textAlign: 'center',
        fontSize: 14,
        fontFamily: getFontFamily(true, "normal"),
        color: '#FEFFFF',
        padding: 5,
        margin: 5,
    },
    btnContainer: {
        position: 'absolute',
        bottom: 15,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 5,
        paddingHorizontal: 10,
        width: '95%'
    },
    btnText: {
        fontSize: 12,
        color: "#333333",
        fontFamily: getFontFamily(true, "medium"),
        textAlign: 'center'
    }
})