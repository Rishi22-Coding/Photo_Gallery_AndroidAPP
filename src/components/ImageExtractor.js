import React from 'react';
import {Text, Linking, Image, View} from 'react-native';
import tw from 'twrnc';

const ImageExtractor = ({data}) => {
  console.log("URL HIT:-  " +data.urls.small);
  return (
    <View>
      {/* <ImageBackground onPress={() => Linking.openURL(data.urls.regular)}> */}
        <Image
          style={tw`h-72 w-full rounded-lg shadow-md`}
          source={{uri: `${data.urls.small}`}}
          // accessibilityLabel={data.alt_description}
        />
      {/* </ImageBackground> */}
    </View>
  )
}

export default ImageExtractor;
