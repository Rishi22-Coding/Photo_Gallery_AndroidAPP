import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import tw from 'twrnc';
import ImageExtractor from './ImageExtractor';
import ImageLoader from './ImageLoader';
import ImageContext from '../context/ImageContext';

const Images = () => {
  const {response, isLoading, searchImage} = useContext(ImageContext);
  return (
    <>
      <ScrollView>
        <View>
          <Text style={tw`text-center mt-6 underline text-2xl`}>
            Results for Computer
          </Text>
        </View>
        <View
          style={tw`flex`}>
          {isLoading ? (
            <ImageLoader item={20} />
          ) : (
            response.map((data, key) => (
              <ImageExtractor key={key} data={data} />
            ))
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default Images;
