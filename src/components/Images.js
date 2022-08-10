import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';
import ImageExtractor from "./ImageExtractor";
import ImageLoader from "./ImageLoader";
import ImageContext from '../context/ImageContext';

const Images = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);
  return (
    <>
      <View>
        <Text style={tw `text-center mt-6 underline text-2xl`}>
          Results for Computer
        </Text>
      </View>
      <View
      style={tw `md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 my-7`}
      >
        {isLoading ? <ImageLoader item={20} /> : response.map((data, key) => <ImageExtractor key={key} data={data} />)}
      </View>
    </>
  )
}

export default Images;
