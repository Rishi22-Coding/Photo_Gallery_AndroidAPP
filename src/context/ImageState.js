import ImageContext from "./ImageContext";
import Axios from "../components/Axios";
import { useState } from "react";
import React from "react";
// import {ACCESS_KEY} from "react-native-dotenv"

const ImageState = (props) => {
    console.log(process.env.REACT_APP_ACCESS_KEY);
    const [searchImage, setSearchImage] = useState('');
    const { response, isLoading, error, fetchData } = Axios(
        `search/photos?page=1&query=computer&client_id=eNh31naV2uUDatoVFeZqZa508T_YujG9_4i6uUIyow0&per_page=30`
    );
    console.log(response);
    const state = {
        response,
        isLoading,
        error,
        fetchData,
        searchImage,
        setSearchImage
    }
    return (
        <ImageContext.Provider value={state}>
            {props.children}
        </ImageContext.Provider>
    )
}

export default ImageState;
