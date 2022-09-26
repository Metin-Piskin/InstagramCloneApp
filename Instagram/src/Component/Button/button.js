import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./button.style";

const button = ({ onPress, text, disabled }) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}
export default button;