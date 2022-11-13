import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const NotificationPost = ({ nick, takip, url }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                marginTop:10
            }}
        >
            <Image
                source={{uri: url}}
                style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'contain',
                    borderRadius: 25,
                }}
            />
            <View
                style={{
                    justifyContent: 'center',
                    marginLeft: 15,
                    flex: 1
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Text
                        style={{
                            color: '#000',
                            fontWeight: '500',
                        }}
                    >
                        {nick}
                    </Text>
                    <Text>
                        seni takip
                    </Text>
                </View>
                <View>
                    <Text>etmeye başladı.</Text>
                </View>
            </View>
            {
                takip ? (
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#1877F2",
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginVertical: 8
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontWeight: '600',
                                paddingHorizontal: 25,
                            }}
                        >
                            Takip Et
                        </Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#EBEBEB",
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginVertical: 8
                        }}
                    >
                        <Text
                            style={{
                                color: '#000',
                                fontWeight: '600',
                                paddingHorizontal: 25,
                            }}
                        >
                            Takiptesin
                        </Text>
                    </TouchableOpacity>
                )

            }
        </View>
    )
}

export default NotificationPost;