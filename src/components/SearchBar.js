import React, {useState, useContext} from 'react';
import {SafeAreaView, View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import ImageContext from "../context/ImageContext";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const  {fetchData, setSearchImage}  = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e);
  }

  const handleSearchButton = () => {
    console.log("Test Image " + JSON.stringify(searchValue));
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=eNh31naV2uUDatoVFeZqZa508T_YujG9_4i6uUIyow0&per_page=30`);
    setSearchValue("");
    setSearchImage(searchValue);
  }

  return (
    <SafeAreaView style={{flexDirection: 'row', display: 'flex', justifyContent: "center"}}>
      <TextInput
        style={tw`bg-gray-50 border border-gray-300 text-sm w-70 p-2.5 focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl `}
        placeholder="Search Any Keywords..."
        value={searchValue}
        onChangeText={handleInputChange}
      />
      {/* <Button
        title="Search"
        onPress={handleSearchButton}
       /> */}
      <TouchableOpacity
        style={tw `bg-blue-500 hover:bg-blue-700 px-2 py-3.5 text-white rounded-tr rounded-br focus:ring-4 focus:ring-blue-500 disabled:bg-gray-400 `}
        // disabled={!searchValue}
        onPressIn={handleSearchButton}
      >
        <Text>Search</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SearchBar;
