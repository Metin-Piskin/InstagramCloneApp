import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const YazıButton = ({ text, onPress, disabled }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} disabled={disabled}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
};
export default YazıButton;

const styles = StyleSheet.create({
    container: {},
    text: {
        color: "#1877F2",
        fontWeight: "bold",
        fontSize: 16,
    },
});