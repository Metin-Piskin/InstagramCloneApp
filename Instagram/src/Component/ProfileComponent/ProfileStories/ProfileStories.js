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
                        source={{ uri: 'https://instagram.fyei4-1.fna.fbcdn.net/v/t51.2885-15/139019243_168736168376840_2948204169737282521_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fyei4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=JflCnH_gvgQAX_usa1v&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfCYTOnNqssVRtZFzD8WggJEVTlAGZyihNR9IrLM0E_iIQ&oe=636E1854&_nc_sid=acd11b' }}
                    />
                </LinearGradient>
                <Text style={styles.name}>🎶</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.story}>
                <LinearGradient
                    colors={['#DCDCDC', '#DCDCDC']}
                    style={styles.cover}
                >
                    <Image
                        style={styles.stavatar}
                        source={{ uri: 'https://instagram.fyei4-1.fna.fbcdn.net/v/t51.2885-15/258631662_4852885644773349_3591907096459566937_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fyei4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=YhfqYdYXaq4AX_xm7D8&tn=MUbj9ScTYCtYn7Y5&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfCtTIYyzB24z0oxyQ_jvdH5zXgNU5cI0Tl8sAyPHG22qw&oe=636E7885&_nc_sid=acd11b' }}
                    />
                </LinearGradient>
                <Text style={styles.name}>🖤</Text>
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