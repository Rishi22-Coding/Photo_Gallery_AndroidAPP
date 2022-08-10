import React from "react";
import { View } from "react-native";
import tw from "twrnc"

const ImageLoader = ({item}) => {
    return [...Array(item).keys()].map((data, i) =>(
        <View key={i}>
            <View style={tw `bg-gray-300 rounded-lg h-72`}></View>
        </View>
    ))
}

export default ImageLoader;