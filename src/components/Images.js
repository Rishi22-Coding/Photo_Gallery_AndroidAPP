import React, {useContext} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import tw from 'twrnc';
import ImageExtractor from './ImageExtractor';
import ImageLoader from './ImageLoader';
import ImageContext from '../context/ImageContext';

const Images = () => {
  const {response, isLoading, searchImage} = useContext(ImageContext);
  return (
    <>
      <ScrollView style={tw `bg-gray-700`}>
        <View>
          <Text style={tw.style({fontSize: 30}, 'text-white', 'text-center', 'my-2')}>
            Results for {searchImage || "computer"}
          </Text>
        </View>
        <View
          style={tw `md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 my-1`}>
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
