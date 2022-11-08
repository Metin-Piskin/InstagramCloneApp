import React from 'react';
import { View, Text } from 'react-native';

import { Union } from "../../../İcons/icons";

const Etiket = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Union size={80} fill='#000' />
            <Text>Etiket</Text>

        </View>
    )
}

export default Etiket;