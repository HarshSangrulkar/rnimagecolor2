import * as React from "react";
import { Dimensions, Text, View, Image } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";

const data = [
    require("../assets/TrendingSeason1.png"),
    require("../assets/TrendingSeason2.png"),
    require("../assets/TrendingSeason4.png"),
    require("../assets/TrendingSeason1.png"),
    require("../assets/TrendingSeason2.png"),
    require("../assets/TrendingSeason4.png"),
];
const width = Dimensions.get("window").width;

function SimpleCarousel() {
    const ref = React.useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);

    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({
            /**
             * Calculate the difference between the current index and the target index
             * to ensure that the carousel scrolls to the nearest index
             */
            count: index - progress.value,
            animated: true,
        });
    };

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 30 }}>
            <Carousel
                ref={ref}
                loop
                width={Dimensions.get('screen').width}
                height={312}
                // autoPlay
                // autoPlayInterval={2000}
                style={{
                    width: Dimensions.get('screen').width * 0.9,
                    // backgroundColor: 'yellow',
                    // paddingHorizontal: 10,
                    // marginHorizontal: 10,
                    borderRadius: 20,
                    overflow: 'visible',
                    // height: 300,
                    // flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    // alignSelf: 'center',
                    // borderColor: 'black',
                    // borderWidth: 1,
                }}
                data={data}
                onProgressChange={progress}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9, // Center card scaling
                    parallaxScrollingOffset: 230, // Space between cards
                    parallaxAdjacentItemScale: 0.7,
                }}
                renderItem={({ item }) => (
                    <View style={{
                        borderRadius: 20,
                        backgroundColor: '#fff',
                        overflow: 'hidden',
                        elevation: 5,
                        shadowColor: '#000',
                        shadowOpacity: 0.15,
                        shadowOffset: { width: 0, height: 5 },
                        shadowRadius: 10,
                        marginHorizontal: 38,
                        flex: 1,
                        height: 300,
                        borderColor: 'black',
                        borderWidth: 1,
                    }}>
                        <Image
                            source={item}
                            style={{ width: '100%', height: '100%', resizeMode: 'cover', }}
                        />
                    </View>
                )}
            />

            {/* <Pagination.Basic
                progress={progress}
                data={data}
                dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
                containerStyle={{ gap: 5, marginTop: 10 }}
                onPress={onPressPagination}
            /> */}
        </View>
    );
}

export default SimpleCarousel;