import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';

const NavBar = ({children}) => {
  return (
    <View style={tw`bg-gray-800 flex items-center py-10`}>
      <View style={tw`max-w-md mx-auto w-full`}>
        <Text style={tw`text-white text-center text-5xl font-bold mb-9`}>
          Search Images
        </Text>
        {children}
      </View>
    </View>
  );
};

export default NavBar;
