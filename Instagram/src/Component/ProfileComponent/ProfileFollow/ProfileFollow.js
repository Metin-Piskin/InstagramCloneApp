import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";


import styles from "./ProfileFollow.style";
import Foto from "../../../Assets/Metin.png";

const ProfileFollow = () => {
    const [CurrentLoggedInUser, setCurrentLoggedInUser] = useState(true)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = auth().currentUser
        firestore()
            .collection('users')
            .where('owner_uid', '==', user.uid)
            .get()
            .then(querySnapshot => {
                //console.log('Total users: ', querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                    setCurrentLoggedInUser(documentSnapshot.data());
                });
            });
        if (!!CurrentLoggedInUser) {
            setLoading(false);
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.story}>
                <LinearGradient
                    colors={['#DE0046', '#F7A34B']}
                    style={styles.cover}
                >
                    <Image
                        style={styles.stavatar}
                        source={{ uri: CurrentLoggedInUser.profile_picture }}
                    />
                </LinearGradient>
            </View>
            <View style={styles.follow}>
                <View style={styles.text}>
                    <Text style={styles.followText}>9</Text>
                    <Text style={styles.followText}>Posts</Text>
                </View>
                <TouchableOpacity style={styles.text}>
                    <Text style={styles.followText}>328</Text>
                    <Text style={styles.followText}>Followers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.text}>
                    <Text style={styles.followText}>207</Text>
                    <Text style={styles.followText}>Following</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default ProfileFollow;