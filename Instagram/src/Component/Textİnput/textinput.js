import React from "react";
import { View, TextInput } from "react-native";

import styles from "./textinput.style";

const Input = ({ placeholder, onChangeText, value, autoCapitalize, keyboardType, textContentType, autoFocus, autoCorrect, secureTextEntry, onBlur}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                textContentType={textContentType}
                autoFocus={autoFocus}
                autoCorrect={autoCorrect}
                secureTextEntry={secureTextEntry}
                onBlur={onBlur}
            />
        </View>
    );
}
export default Input;