import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import auth from "@react-native-firebase/auth";

import styles from './ProfileHeader.style';
import { Plus, Burger, Drop } from '../../İcons/icons';

const ProfileHeader = () => {
    return (
        <View style={styles.header}>
            <View style={styles.name}>
                <Text style={styles.username}>Metin Pişkin</Text>
                <TouchableOpacity style={styles.Dicon} onPress={null}>
                    <Drop fill="#000" size={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.actions}>

                <TouchableOpacity style={styles.icons} onPress={null}>
                    <Plus fill="#000" size={24} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.icons}  onPress={() => auth().signOut()}>
                    <Burger fill="#000" size={24} />
                </TouchableOpacity>

            </View>
        </View>
    );
}
export default ProfileHeader;