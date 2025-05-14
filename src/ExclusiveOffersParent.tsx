import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import BookingOffersBG from '../assets/BookingOffersBG.svg'
import FreeNights from '../assets/Free Nights BG.svg'
import ResortServices from '../assets/Resort Services.svg'
import ExclusiveOffers from './ExclusiveOffers'
import { ExclusiveOffersProps } from './ExclusiveOffers'

// const width = Dimensions.get('window').width * 0.6;
let Data = [
    {
        name: 'Free Nights Offers',
        desc: '2 Active Offers >',
        svgImage: <FreeNights width={148} height={165} />
    },
    {
        name: 'Booking Offers',
        desc: '50 Active Offers >',
        svgImage: <BookingOffersBG width={148} height={165} />
    },
    {
        name: 'Resort Services & Offers',
        desc: '100+ Resorts >',
        svgImage: <ResortServices width={148} height={165} />
    },
    {
        name: 'Resort Services & Offer',
        desc: '100+ Resorts >',
        svgImage: <ResortServices width={148} height={165} />
    },
]

const renderElement = (item: ExclusiveOffersProps) => {
    console.log('item', item)
    return (
        <View style={styles.scrollViewContainer}>
            <ExclusiveOffers name={item.name} desc={item.desc} svgImage={item.svgImage}></ExclusiveOffers>
        </View>
    )
}
const ExclusiveOffersParent = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={Data}
                renderItem={({ item }) => renderElement(item)}
                keyExtractor={(item) => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default ExclusiveOffersParent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    scrollViewContainer: {
        alignSelf: 'center',
        // padding: 5,
        // margin: 5,
    }
})