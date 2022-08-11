import React from 'react';
import {View, Text} from 'react-native';
import NavBar from './src/components/NavBar';
import SearchBar from './src/components/SearchBar';
import Images from './src/components/Images';
import ImageState from './src/context/ImageState';
import {REACT_APP_ACCESS_KEY} from "react-native-dotenv";
const {plugin} = require('twrnc');

const App = () => {
  // const postURL = process.env.REACT_APP_ACCESS_KEY;
  // console.log(postURL);

  return (
    <ImageState>
      <View style={{height: "100%", plugin}}>
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
