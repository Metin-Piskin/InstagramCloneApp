import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import { PlusProf } from "../../İcons/icons";

import styles from "./ProfileStories.style";

const ProfileStories = () => {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.story}>
                <LinearGradient
                    colors={['#DCDCDC', '#DCDCDC']}
                    style={styles.cover}
                >
                    <Image
                        style={styles.stavatar}
                        source={require('../../../Assets/Metin.png')}
                    />
                </LinearGradient>
                <Text style={styles.name}>Story 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.story}>
                <LinearGradient
                    colors={['#DCDCDC', '#DCDCDC']}
                    style={styles.cover}
                >
                    <Image
                        style={styles.stavatar}
                        source={require('../../../Assets/Metin.png')}
                    />
                </LinearGradient>
                <Text style={styles.name}>Story 2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.story}>
                <LinearGradient
                    colors={['white', 'white']}
                    style={styles.cover}
                >
                    <View style={styles.den}>
                        <PlusProf fill="#000" size="20" />
                    </View>
                </LinearGradient>
                <Text style={styles.name}>New</Text>
            </TouchableOpacity>

        </View>
    );
}
export default ProfileStories;