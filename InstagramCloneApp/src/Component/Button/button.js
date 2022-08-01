import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./button.style";

const button = ({ onPress, text }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}
export default button;