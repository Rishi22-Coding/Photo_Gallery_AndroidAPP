import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

const SearchBar = () => {
  return (
    <View style={tw`flex`}>
      <TextInput
        style={tw`bg-gray-50 border border-gray-300 text-sm w-full p-2.5 focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl`}
        placeholder="Search Any Keywords..."
      />
      {/* <Button
        title="Search"
       /> */}
      <TouchableOpacity
        style={tw `bg-blue-500 hover:bg-blue-700 px-2 py-2.5 text-white rounded-tr rounded-br focus:ring-4 focus:ring-blue-500 disabled:bg-gray-400`}
      >
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar;
