import * as React from 'react';
import { Dimensions, Text, View, Image } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

const data = [
    {
        image: 'https://i.sstatic.net/GsDIl.jpg',
        title: 'Club Mahindra, Coorg',
    },
    {
        image:
            'https://spotpet.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fm5ehn3s5t7ec%2FKtxCRW7y0LXNYcn6BHPPD%2F065b05bda2e516ea6a5887ce9856d1db%2FGolden_Retriever__Price.webp&w=3840&q=75',
        title: 'Club Mahindra, Shimla',
    },
    {
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1hZxkl7aLUy170veFH3FI9uDbkqoSBjMY2A&s',
        title: 'Club Mahindra, Ooty',
    },
    {
        image:
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6b/16/b9/caption.jpg',
        title: 'Club Mahindra, Ooty',
    },
    {
        image:
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/05/c1/fb/resort-rio.jpg',
        title: 'Club Mahindra, Ooty',
    },
    {
        image:
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/47/f5/9b/property-overview-2.jpg',
        title: 'Club Mahindra, Ooty',
    },
    {
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1hZxkl7aLUy170veFH3FI9uDbkqoSBjMY2A&s',
        title: 'Club Mahindra, Ooty',
    },

];

const { width } = Dimensions.get('window');

function ParallaxCarousel() {
    const ref = React.useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Carousel
                ref={ref}
                loop
                width={width * 0.7}
                height={350}
                autoPlay={false}
                data={data}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 100,
                    parallaxAdjacentItemScale: 0.7,
                }}
                style={{
                    overflow: 'visible',
                    // marginHorizontal: 30, paddingHorizontal: 30,
                }}
                onProgressChange={progress}
                renderItem={({ item }) => (
                    <View
                        style={{
                            borderRadius: 24,
                            backgroundColor: '#fff',
                            shadowColor: '#000',
                            shadowOpacity: 0.15,
                            shadowOffset: { width: 0, height: 5 },
                            shadowRadius: 10,
                            height: 350,
                            width: '100%',
                        }}
                    >
                        <Image
                            source={{ uri: item.image }}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 24,
                            }}
                        />
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: 16,
                                borderBottomLeftRadius: 24,
                                borderBottomRightRadius: 24,
                                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
                            <View
                                style={{
                                    backgroundColor: '#2E90FA',
                                    borderRadius: 50,
                                    width: 30,
                                    height: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={{ color: '#fff', fontSize: 16 }}>➔</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

export default ParallaxCarousel;

