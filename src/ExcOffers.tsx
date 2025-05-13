import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-vector-icons/Icon';

export interface ExcOffersProps {
    name: string;
    desc: string;
    icon: React.ReactNode
    bgColor: string;
}
const ExcOffers = ({ name, desc, icon, bgColor }: ExcOffersProps) => {
    return (
        <View>
            <View style={styles.box}>
                {/* <View style={styles.iconBorderContainer}> */}
                <View style={styles.iconContainer}>
                    {icon}
                </View>
                {/* </View> */}
                <View style={[styles.cardContainer, { backgroundColor: bgColor }]}>
                    <Text style={styles.text}>{name}</Text>
                    <View style={styles.btnContainer}>
                        <Text style={styles.btnText}>{desc}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ExcOffers

const styles = StyleSheet.create({
    box: {
        // borderBlockColor: 'black',
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        borderRadius: 25,
        // borderWidth: 1,
        // borderBlockColor: 'black',
        padding: 10,
        margin: 10,
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:
    },
    iconBorderContainer: {
    },
    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -30,
        zIndex: 1,
        padding: 10,
        borderBlockColor: 'black',
        borderWidth: 1,
    },
    text: {
        fontSize: 18,
        flexWrap: 'wrap',
        flexShrink: 1,
        color: 'white',
        fontWeight: '600',
        marginHorizontal: 20,
        padding: 5,
        textAlign: 'center',
    },
    btnContainer: {
        backgroundColor: 'white',
        padding: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
        position: 'absolute',
        bottom: 10,
    },
    btnText: {
        fontSize: 16,
        flexWrap: 'wrap',
        flexShrink: 1,
        color: 'black',
        fontWeight: '400',
        textAlign: 'center',
    }
})