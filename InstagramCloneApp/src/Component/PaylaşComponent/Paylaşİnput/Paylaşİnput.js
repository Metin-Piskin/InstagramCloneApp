import React from "react";
import { View, TextInput } from "react-native";

import styles from "./Paylaşİnput.style";

const Paylaşİnput = () => {
    return (
        <View style={styles.container}>
        <TextInput
            placeholder="Açıklama Ekle..."
            style={styles.input}
            multiline={true}
        />
        </View>
    );
};
export default Paylaşİnput;