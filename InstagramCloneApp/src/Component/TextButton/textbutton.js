import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./textbutton.style"; 

const textbutton = ({ onPress, text }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}
export default textbutton;