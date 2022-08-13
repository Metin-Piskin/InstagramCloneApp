import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./GrayButton.style";

const GrayButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
export default GrayButton;