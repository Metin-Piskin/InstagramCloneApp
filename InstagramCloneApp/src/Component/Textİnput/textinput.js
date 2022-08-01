import React from "react";
import { View, TextInput } from "react-native";

import styles from "./textinput.style";

const Input = ({ placeholder, onChangeText, value }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
}
export default Input;