import React from 'react';
import {Text, Linking, Image, View, ImageBackground, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

const ImageExtractor = ({data}) => {
  // console.log("URL HIT:-  " +data.urls.small);
  const handleOnPress = () => {
    Linking.openURL(data.urls.regular);
  }
  return (
    <View style={tw `mt-2`}>
      <TouchableOpacity onPress={handleOnPress}>
        <Image
          style={tw`h-70 w-full rounded-lg shadow-md mb-2`}
          source={{uri: `${data.urls.small}`}}
          // accessibilityLabel={data.alt_description}
          // onAccessibilityTap={{uri: `${data.urls.regular}`}}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ImageExtractor;
