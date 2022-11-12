import React from 'react';
import { View, Text, Image } from 'react-native';

import { PlusProf } from '../../İcons/icons';

const Not = ({ profil, text, name, url }) => {
    return (
        <View
            style={{
                paddingVertical: 5,
                marginLeft: 10
            }}
        >
            {
                profil ? (
                    <View>
                        <Image
                            source={require('../../../Assets/Metin.png')}
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain',
                                borderRadius: 50
                            }}
                        />
                        <Text style={{ alignSelf: 'center' }}>Bir Not Bırak</Text>
                        <View
                            style={{
                                position: 'absolute',
                                backgroundColor: '#fff',
                                right: 2,
                                padding: 5,
                                borderRadius: 20,
                            }}
                        >
                            <PlusProf size={16} fill={'#000'} />
                        </View>
                    </View>
                ) : (
                    <View>

                        <Image
                            source={{ uri: url }}
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain',
                                borderRadius: 50
                            }}
                        />
                        <Text style={{ alignSelf: 'center' }}>{name}</Text>
                        <View
                            style={{
                                position: 'absolute',
                                backgroundColor: '#fff',
                                right: 9,
                                borderRadius: 20,
                            }}
                        >
                            <Text style={{ color: '#000', paddingHorizontal: 3 }}>{text}</Text>
                        </View>
                    </View>
                )
            }
        </View>
    )
}

export default Not;