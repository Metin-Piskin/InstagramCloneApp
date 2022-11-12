import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Drop, NewMessage, LeftDrop, MessageCamera } from '../../İcons/icons';

const Header = ({ post, back }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: '#fff'
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    flex: 1,
                    alignItems: 'center',
                    paddingVertical: 5
                }}
            >
                <TouchableOpacity onPress={back}>
                    <LeftDrop size={20} />
                </TouchableOpacity>
                <Text
                    style={{
                        fontSize: 20,
                        color: '#000',
                        fontWeight: 'bold',
                        marginLeft: 5
                    }}
                >
                    {post.username}
                </Text>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Drop fill={'#000'} size={15} />
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <View
                    style={{
                        marginRight: 10
                    }}
                >
                    <MessageCamera size={25} />
                </View>
                <View
                    style={{
                        marginRight: 10
                    }}
                >
                    <NewMessage size={25} />
                </View>
            </View>
        </View>
    )
}

export default Header;