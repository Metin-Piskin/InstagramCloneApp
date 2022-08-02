import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./ProfileTab.style";

import { Vector, Union } from "../../İcons/icons";

const ProfileTab = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.tab}>
                <Vector fill="#000" size={30} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabs}>
                <Union fill="#000" size={30} />
            </TouchableOpacity>
        </View>
    );
}
export default ProfileTab;