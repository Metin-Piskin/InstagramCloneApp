import React, { useState } from "react";
import { View, Text, Dimensions, ScrollView, Image, TouchableOpacity } from "react-native";

import { Dots, Heart, Comment, Share, Kalp, Drop, Music, Camera } from '../../Component/İcons/icons';

const Reel = () => {
    const [like, setLike] = useState(false);
    const handleLike = () => {
        {
            like ? (
                setLike(false)
            ) : (
                setLike(true)
            )
        }
    }
    return (
        <>
            <View
                style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    marginHorizontal: 15,
                    marginVertical: 15,
                    zIndex: 5
                }}
            >

                <Text
                    style={{
                        flex: 1,
                        color: '#fff',
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}
                >
                    Reels
                </Text>
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 15
                    }}
                >
                    <Drop size={30} fill="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Camera size={35} fill={'#fff'} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <ReelsUi like={like} handleLike={handleLike} likeNum={8.463} CommentNum={89} />
                <ReelsUi like={like} handleLike={handleLike} likeNum={8.463} CommentNum={89} />
                <ReelsUi like={like} handleLike={handleLike} likeNum={8.463} CommentNum={89} />
            </ScrollView>
        </>

    );
}
export default Reel;

const ReelsUi = ({ like, handleLike, likeNum, CommentNum }) => {
    return (
        <View>
            <Image
                source={{ uri: 'https://www.itl.cat/pngfile/big/296-2961703_motorhead-wallpaper-phone.jpg' }}
                style={{
                    width: Dimensions.get('screen').width,
                    height: Dimensions.get('screen').height - 120,
                }}
            />
            <View
                style={{
                    position: 'absolute',
                    bottom: 30,
                    marginLeft: 15
                }}
            >
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/tr/3/39/Motörhead_-_Motörhead_%281977%29.jpg' }}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            borderWidth: 1,
                            borderColor: '#fff'
                        }}
                    />
                    <Text
                        style={{
                            color: '#fff',
                            alignSelf: "center",
                            fontWeight: '500',
                            fontSize: 15,
                            marginLeft: 10
                        }}
                    >
                        Motörhead
                    </Text>
                    <TouchableOpacity
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            borderWidth: 1,
                            borderRadius: 5,
                            marginLeft: 10,
                            borderColor: "#f4f3f4"
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                paddingHorizontal: 15,
                                paddingVertical: -5,
                                fontWeight: '500',
                            }}
                        >
                            Takip Et
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ color: '#fff', marginBottom: 10 }}>God Was Never On Your Side</Text>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        justifyContent: "space-between"
                    }}
                >
                    <Music size={18} fill="#fff" />
                    <Text style={{ color: '#fff' }}>Motörhead</Text>
                    <Text style={{ color: '#fff' }}>Orijinal Ses İçeriği</Text>
                </TouchableOpacity>
            </View>

            <View
                style={{
                    position: 'absolute',
                    right: 10,
                    bottom: 10,
                }}
            >
                <TouchableOpacity
                    onPress={() => handleLike()}
                    style={{ marginBottom: 15, alignItems: "center" }}
                >
                    {
                        like ?
                            <Kalp size={30} fill="#FF005C" />
                            : <Heart size={30} fill="#fff" />
                    }
                    <Text style={{ color: '#fff' }}>{likeNum}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginBottom: 15, alignItems: "center" }}>
                    <Comment fill={'#fff'} size={30} />
                    <Text style={{ color: '#fff' }}>{CommentNum}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginBottom: 15 }}>
                    <Share fill={'#fff'} size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginBottom: 15 }}>
                    <Dots fill={'#fff'} size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginBottom: 15 }}>
                    <Image
                        source={{ uri: 'https://www.itl.cat/pngfile/big/296-2961703_motorhead-wallpaper-phone.jpg' }}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 8,
                            borderWidth: 2,
                            borderColor: '#fff',
                            resizeMode: 'contain'
                        }}
                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}