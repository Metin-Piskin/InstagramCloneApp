import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './HomeHeader.style';
import { Logo, Plus, Heart, Messengers } from '../../İcons/icons';

function Header({ onPres }) {
    return (
        <View style={styles.header}>
            <Logo fill="#000" />
            <View style={styles.actions}>
                <TouchableOpacity style={styles.icons} onPress={onPres}>
                    <Plus fill="#000" size={24} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.icons} activeOpacity="0.5">
                    <View style={styles.dotContainer}>
                        <View style={styles.dot} />
                    </View>
                    <Heart fill="#000" size={24} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.icons} activeOpacity="0.5">
                    <Messengers fill="#000" size={24} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Header;