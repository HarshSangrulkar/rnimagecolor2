import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text, Platform} from 'react-native';
import {getColors, ImageColorsResult} from 'react-native-image-colors';

const MyCompJs = () => {
  const imageUrl = 'https://i.imgur.com/68jyjZT.jpg';

  Platform.OS === 'android';
  const [colors, setColors] =
    useState < ImageColorsResult > ImageColorsResult.platform.android;
  // const [plt,setPlt] = useState<ImageColorsResult>(ImageColorsResult.platform.android);

  useEffect(() => {
    const fetchColors = async () => {
      const result = await getColors(imageUrl, {
        fallback: '#000',
        cache: true,
        key: imageUrl,
      });
      setColors(result);
    };

    fetchColors();
  }, [imageUrl]);
  return (
    <View>
      <Image source={{uri: imageUrl}} style={{width: 200, height: 200}} />
      {/* const plt = colors.platform === 'android'  */}
      <View>
        {/* {colors?.platform === 'android' && (
                    <View>
                        <View style={{ backgroundColor: colors.vibrant, borderBlockColor: 'black', borderWidth: 1 }}><Text>Vibrant</Text></View>
                        <View style={{ backgroundColor: colors.muted, borderBlockColor: 'black', borderWidth: 1 }}><Text>Muted</Text></View>
                    </View>
                )} */}
        <View
          style={{
            backgroundColor: colors.vibrant,
            borderBlockColor: 'black',
            borderWidth: 1,
          }}>
          <Text>Vibrant</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.muted,
            borderBlockColor: 'black',
            borderWidth: 1,
          }}>
          <Text>Muted</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'colors?.average',
  },
});

export default MyCompJs;
