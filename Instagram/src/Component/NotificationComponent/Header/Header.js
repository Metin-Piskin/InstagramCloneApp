import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { LeftDrop } from '../../İcons/icons';

const Header = ({ GoBack }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity onPress={GoBack}>
                <LeftDrop size={25} />
            </TouchableOpacity>
            <Text
                style={{
                    fontSize: 25,
                    color: '#000',
                    fontWeight: '700',
                    marginLeft: 10,
                    paddingVertical: 10
                }}
            >
                Bildirimler
            </Text>
        </View>
    )
}

export default Header;