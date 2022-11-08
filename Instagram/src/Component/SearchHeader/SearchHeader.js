import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { Search } from '../İcons/icons';

const SearchHeader = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: "#EBEBEB",
                margin: 10,
                alignItems: 'center',
                borderRadius: 12
            }}
        >
            <View
                style={{
                    paddingHorizontal: 5
                }}
            >
                <Search fill={'gray'} size={18} />
            </View>
            <TextInput
                placeholder='Ara'
                placeholderTextColor={'gray'}
                style={{
                    paddingVertical: 5
                }}
            />
        </View>
    )
}

export default SearchHeader;