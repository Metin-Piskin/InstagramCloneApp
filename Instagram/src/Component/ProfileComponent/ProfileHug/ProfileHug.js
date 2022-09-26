import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Drop } from "../../İcons/icons";

import styles from "./ProfileHug.style";

const ProfileHug = () => {
    return (
        <View style={styles.container}>
            <View style={styles.text_container}>
                <Text style={styles.name}>Metin Pişkin</Text>
                <Text style={styles.explanation}>
                    Bury all your secrets in my skin
                    Come away with innocence and leave me with my sins
                    The air around me still feels like a cage
                </Text>
            </View>
            <View style={styles.button_container}>
                <TouchableOpacity style={styles.edit_button}>
                    <Text style={styles.button_text}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.library_button}>
                    <Text style={styles.button_text}>View Library</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.drop_button}>
                    <Drop fill="#000" size="15" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default ProfileHug;