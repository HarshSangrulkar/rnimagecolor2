import React, { useRef } from 'react';
import { View, Dimensions, StyleSheet, Image, Text } from 'react-native';
import Carousel, { TCarouselProps } from 'react-native-reanimated-carousel';
import ParallaxImage from 'react-native-reanimated-carousel'
import Animated, { useAnimatedStyle, interpolate, withTiming } from 'react-native-reanimated';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const data = [
    { id: '1', image: 'https://placeimg.com/640/480/nature', title: 'Nature 1', description: 'Description for nature 1' },
    { id: '2', image: 'https://placeimg.com/640/480/animals', title: 'Animals 1', description: 'Description for animals 1' },
    { id: '3', image: 'https://placeimg.com/640/480/people', title: 'People 1', description: 'Description for people 1' },
];

const BlurParallaxCarousel = () => {
    const carouselRef = useRef(null);

    const renderItem = ({ item, index }: any, parallaxProps: React.JSX.IntrinsicAttributes & React.PropsWithChildren<TCarouselProps<unknown>>) => {
        return (
            <View style={styles.itemContainer}>
                <ParallaxImage
                    source={{ uri: item.image }}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        );
    };

    const animatedBlurStyle = (index, animatedValue) => {
        const inputRange = [(index - 2), (index - 1), index, (index + 1), (index + 2)];
        const outputRange = [20, 10, 0, 10, 20];

        const blurRadius = useAnimatedStyle(() => {
            const animatedBlur = interpolate(animatedValue.value, inputRange, outputRange);
            return {
                blurRadius: withTiming(animatedBlur, { duration: 300 }),
            };
        });

        return blurRadius;
    };

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                data={data}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                itemWidth={screenWidth - 80}
                containerWidth={screenWidth}
                inactiveSlideShift={0}
                useScrollView={true}
                loop
                autoplay
                autoplayInterval={3000}
                parallaxConfig={{
                    scale: 0.8,
                    opacity: 0.8,
                }}
                animated={true}
                onSnapToItem={(index) => {
                    if (carouselRef.current) {
                        const animatedValue = carouselRef.current.getScrollPosition();
                        return animatedBlurStyle(index, animatedValue);
                    }
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemContainer: {
        width: screenWidth - 80,
        height: screenHeight / 2,
        borderRadius: 20,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    textContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    description: {
        fontSize: 16,
        color: '#fff',
    },
});

export default BlurParallaxCarousel;