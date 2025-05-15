import * as React from "react";
import type { ImageSourcePropType } from "react-native";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import Animated, {
    interpolate,
    useAnimatedStyle,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

import { BlurView as _BlurView } from "expo-blur";

import { parallaxLayout } from "./parallax";

const BlurView = Animated.createAnimatedComponent(_BlurView);

const PAGE_WIDTH = Dimensions.get('window').width / 2;
const Data = [
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6b/16/b9/caption.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/05/c1/fb/resort-rio.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/47/f5/9b/property-overview-2.jpg',
];
function Index() {
    return (
        <View
            id="carousel-component"
            dataSet={{ kind: "custom-animations", name: "blur-parallax" }}
        >
            <Carousel
                loop={true}
                style={{
                    width: Dimensions.get('window').width,
                    height: 240,
                    justifyContent: "center",
                    alignItems: "center",
                }}
                width={PAGE_WIDTH}
                data={Data}
                renderItem={({ item, index, animationValue }) => {
                    return (
                        <CustomItem
                            key={index}
                            index={index}
                            animationValue={animationValue}
                        />
                    );
                }}
                customAnimation={parallaxLayout(
                    {
                        size: PAGE_WIDTH,
                        vertical: false,
                    },
                    {
                        parallaxScrollingScale: 1,
                        parallaxAdjacentItemScale: 0.5,
                        parallaxScrollingOffset: 40,
                    },
                )}
                scrollAnimationDuration={1200}
            />
        </View>
    );
}

interface ItemProps {
    index: number;
    animationValue: Animated.SharedValue<number>;
}
const CustomItem: React.FC<ItemProps> = ({ index, animationValue }) => {
    const maskStyle = useAnimatedStyle(() => {
        const opacity = interpolate(animationValue.value, [-1, 0, 1], [1, 0, 1]);

        return {
            opacity,
        };
    }, [animationValue]);

    return (
        <View
            style={{
                flex: 1,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
            }}
        >
            <View style={{ flex: 1, width: "100%" }}>
                <SlideItem index={index} rounded />
            </View>
            <BlurView
                intensity={50}
                pointerEvents="none"
                style={[StyleSheet.absoluteFill, maskStyle]}
            />
        </View>
    );
};

export default Index;
