import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";



function FitImage({ src }) {
    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height / 2.8;

    return (
        <Image source={{ uri: src }} style={{
            width: width,
            height: height,
            resizeMode: "contain"
        }} />
    );
}
export default FitImage;
