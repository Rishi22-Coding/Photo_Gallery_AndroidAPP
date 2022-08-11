import React from 'react';
import {View, Text} from 'react-native';
import NavBar from './src/components/NavBar';
import SearchBar from './src/components/SearchBar';
import Images from './src/components/Images';
import ImageState from './src/context/ImageState';
import {REACT_APP_ACCESS_KEY} from "react-native-dotenv";
import tw from 'twrnc';

const App = () => {
  // const postURL = process.env.REACT_APP_ACCESS_KEY;
  // console.log(postURL);

  return (
    <ImageState>
      <View style={tw `h-full`}>
        <NavBar>
          <SearchBar />
        </NavBar>
        <Images/>
      </View>
    </ImageState>
    // <View>
    // <Text> ENV URL:  {REACT_APP_ACCESS_KEY} </Text>
    // </View>
  );
};

export default App;
