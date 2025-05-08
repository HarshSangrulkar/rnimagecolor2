import React from 'react';
import {getColors, ImageColorsResult} from 'react-native-image-colors';
import {View, Text, Image} from 'react-native';
import {useState} from 'react';
const UseImageColors = () => {
  const [colors, setColors] = useState < ImageColorsResult > null;
  const imageUrl = 'https://i.imgur.com/68jyjZT.jpg';
  React.useEffect(() => {
    getColors(imageUrl, {
      fallback: '#228B22',
      cache: true,
      key: imageUrl,
    }).then(setColors);
  }, []);

  console.log(colors);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>RN Image Color</Text>
      <Image source={{uri: imageUrl}} style={{width: 200, height: 200}} />
      {colors?.platform === 'android' && (
        <View>
          <View style={{backgroundColor: colors.vibrant, flex: 1, padding: 10}}>
            <Text>Vibrant</Text>
          </View>
          <View style={{backgroundColor: colors.muted, flex: 1, padding: 10}}>
            <Text>Muted</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default UseImageColors;
