import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';


import styles from "./ProfileFollow.style";
import Foto from "../../../Assets/Metin.png";

const ProfileFollow = () => {
    return (
        <View style={styles.container}>
            <View style={styles.story}>
                <LinearGradient
                    colors={['#DE0046', '#F7A34B']}
                    style={styles.cover}
                >
                    <Image
                        style={styles.stavatar}
                        source={require('../../../Assets/Metin.png')}
                    />
                </LinearGradient>
            </View>
            <View style={styles.follow}>
                <View style={styles.text}>
                    <Text style={styles.followText}>0000</Text>
                    <Text style={styles.followText}>Posts</Text>
                </View>
                <TouchableOpacity style={styles.text}>
                    <Text style={styles.followText}>0000</Text>
                    <Text style={styles.followText}>Followers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.text}>
                    <Text style={styles.followText}>0000</Text>
                    <Text style={styles.followText}>Following</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default ProfileFollow;