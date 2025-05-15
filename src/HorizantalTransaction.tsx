import { Image, Text, View, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const HorizantalTransacation = () => {
    const data: number[] = [...new Array(6).keys()];
    const Data = [
        require("../assets/TrendingSeason1.png"),
        require("../assets/catImage.jpeg"),
        require("../assets/resortImage.jpg"),
        require("../assets/TrendingSeason1.png"),
        require("../assets/catImage.jpeg"),
        require("../assets/resortImage.jpg"),
        // 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6b/16/b9/caption.jpg',
        // 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/05/c1/fb/resort-rio.jpg',
        // 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/47/f5/9b/property-overview-2.jpg',
        // 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6b/16/b9/caption.jpg',
        // 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/05/c1/fb/resort-rio.jpg',
        // 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/47/f5/9b/property-overview-2.jpg',
    ]
    // const colors = [
    //     '#ff0000',
    //     '#00ff00',
    //     '#0000ff',
    //     '#ffff00',
    //     '#ff00ff',
    //     '#00ffff',
    // ];
    // const renderItem = ({ item }: { item: number }) => {
    //     return (
    //         <View
    //             style={{
    //                 flex: 1,
    //                 borderWidth: 1,
    //                 justifyContent: 'center',
    //                 backgroundColor: colors[item],
    //                 height: 250,
    //             }}>
    //             <Text style={{ textAlign: 'center', fontSize: 30 }}>{item}</Text>
    //         </View>
    //     );
    // };

    const newWidth = Dimensions.get('screen').width * 0.9;
    const newHeight = Dimensions.get('screen').height * 0.3;
    return (
        <Carousel
            loop
            width={Dimensions.get('screen').width}
            height={312}
            data={Data}
            autoPlay
            autoPlayInterval={2000}
            style={{
                width: Dimensions.get('screen').width,
                // height: 300,
                flex: 1,
                // alignItems: 'center',
                // justifyContent: 'center',
                alignSelf: 'center'
            }}
            scrollAnimationDuration={1500}
            mode="parallax"
            modeConfig={{
                parallaxScrollingScale: 0.9, // Center card scaling
                parallaxScrollingOffset: 230, // Space between cards
                parallaxAdjacentItemScale: 0.7,
            }}
            // onSnapToItem={(index: number) => console.log('current index:', index)}
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
                }}>
                    <Image
                        source={item}
                        style={[{ width: '100%', height: '100%' }]}
                    />
                </View>
            )}
        />
    );
};

export default HorizantalTransacation;