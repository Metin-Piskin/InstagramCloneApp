import React from 'react';
import { View, Text, Image } from 'react-native';

import { Camera } from '../../İcons/icons';

const Message = ({ name, mess, url }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 12,
                marginTop: 12
            }}
        >
            <Image
                source={{uri: url}}
                style={{
                    width: 65,
                    height: 65,
                    resizeMode: 'contain',
                    borderRadius: 40
                }}
            />
            <View style={{ justifyContent: 'center', marginLeft: 10, flex: 1 }}>
                <Text style={{ color: '#000', fontWeight: '400' }}>{name}</Text>
                <Text>{mess}</Text>
            </View>
            <Camera size={25} fill={'#000'} />
        </View>
    )
}

export default Message;