import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExcOffers from './ExcOffers'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ExcOffersProps } from './ExcOffers';
let Data = [
    {
        name: 'Free Nights Offers',
        desc: '2 Active Offers >',
        bgColor: '#17b6eb',
        icon: <Icon name="gift" size={50} color="#4cbfe6" />
    },
    {
        name: 'Name 1',
        desc: 'Desc 1',
        bgColor: '#fc6f17',
        icon: <Icon name="gift" size={50} color="#900" />
    },
    {
        name: 'Name 2',
        desc: 'Desc 2',
        bgColor: '#039e15',
        icon: <Icon name="gift" size={50} color="#900" />
    },
]

const renderElement = (item: ExcOffersProps) => {
    console.log('item', item)
    return (
        <View style={styles.scrollViewContainer}>
            <ExcOffers name={item.name} desc={item.desc} bgColor={item.bgColor} icon={item.icon}></ExcOffers>
        </View>
    )
}

const ExcOfferParent = () => {
    return (
        <View style={styles.container}>
            {/* <Icon name="rocket" size={30} color="#900" /> */}
            {/* <View style={styles.scrollViewContainer}>
                <ExcOffers name={'Free Nights Offers'} desc={'2 Active Offers >'} bgColor='lightblue' icon={<Icon name="gift" size={40} color="#900" />}></ExcOffers>
                <ExcOffers name={'Name 1'} desc={'Desc 1'} bgColor='lightblue' icon={<Icon name="gift" size={40} color="#900" />}></ExcOffers>
                <ExcOffers name={'Name 2'} desc={'Desc 2'} bgColor='lightblue' icon={<Icon name="gift" size={40} color="#900" />}></ExcOffers>
            </View> */}
            <View>
                <FlatList
                    data={Data}
                    renderItem={({ item }) => renderElement(item)}
                    keyExtractor={(item) => item.name}
                    horizontal
                />
            </View>
        </View>
    )
}

export default ExcOfferParent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        alignContent: 'center',
    },
    scrollViewContainer: {
        alignSelf: 'center',
    }
})