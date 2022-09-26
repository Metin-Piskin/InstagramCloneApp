import React from "react";
import { View, TextInput } from "react-native";

import styles from "./Paylaşİnput.style";

const Paylaşİnput = ({title, onChangeText, onBlur, value, onChange, multiline}) => {
    return (
        <View style={styles.container}>
        <TextInput
            placeholder={title}
            style={styles.input}
            multiline={multiline}
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
            onChange={onChange}
        />
        </View>
    );
};
export default Paylaşİnput;