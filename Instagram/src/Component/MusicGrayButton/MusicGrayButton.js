import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./MusicGrayButton.style";
import { Music } from '../İcons/icons';

const MusicGrayButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Music fill={"#000"} size={20} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
export default MusicGrayButton;