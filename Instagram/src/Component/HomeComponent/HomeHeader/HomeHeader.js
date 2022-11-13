import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './HomeHeader.style';
import { Logo, Plus, Heart, Messengers } from '../../İcons/icons';

function Header({ onPres, MessagePress, NotificationPress }) {
    return (
        <View style={styles.header}>
            <Logo fill="#000" />
            <View style={styles.actions}>
                <TouchableOpacity style={styles.icons} onPress={onPres}>
                    <Plus fill="#000" size={24} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.icons} activeOpacity="0.5" onPress={NotificationPress}>
                    <View style={styles.dotContainer}>
                        <View style={styles.dot} />
                    </View>
                    <Heart fill="#000" size={24} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.icons} activeOpacity="0.5" onPress={MessagePress}>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>3</Text>
                    </View>
                    <Messengers fill="#000" size={24} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Header;