import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";

import Header from '../../Component/MessageComponent/Header';
import İnput from '../../Component/SearchHeader';
import Not from '../../Component/MessageComponent/Not';
import MessageCom from '../../Component/MessageComponent/Message';

const Message = ({ navigation }) => {
    const [CurrentLoggedInUser, setCurrentLoggedInUser] = useState(true)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = auth().currentUser
        firestore()
            .collection('users')
            .where('owner_uid', '==', user.uid)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    setCurrentLoggedInUser(documentSnapshot.data());
                });
            });
        if (!!CurrentLoggedInUser) {
            setLoading(false);
        }
    }, [])
    return (
        <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
            <Header post={CurrentLoggedInUser} back={() => navigation.goBack()} />
            <İnput />
            <ScrollView horizontal >
                <Not profil={true} />
                <Not text={'kachow'} name={'mcqueen'} url={'https://www.rekoroyun.com/resim/simsek-mekkuin.jpg'} />
                <Not text={'8 Mile'} name={'Eminem'} url={'https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b'} />
                <Not text={'Iron Man'} name={'Tony Stark'} url={'https://img.joomcdn.net/dace9a3da47d7d748e13af43f96344a4449c7688_original.jpeg'} />
                <Not text={'Deneme 123'} name={'tony stark'} url={'https://img.joomcdn.net/dace9a3da47d7d748e13af43f96344a4449c7688_original.jpeg'} />
            </ScrollView>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 15,
                    marginVertical: 10,
                }}
            >
                <Text
                    style={{
                        color: '#000',
                        fontSize: 18,
                        fontWeight: '600'
                    }}
                >
                    Mesajlar
                </Text>
                <Text
                    style={{
                        color: 'gray',
                        fontSize: 18,
                        fontWeight: '600'
                    }}
                >
                    İstekler
                </Text>
            </View>
            <MessageCom name={'Eminem'} mess={'Az önce göderildi'} url={'https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b'} />
            <MessageCom name={'Tony Stark'} mess={'Görüldü'} url={'https://img.joomcdn.net/dace9a3da47d7d748e13af43f96344a4449c7688_original.jpeg'} />
            <MessageCom name={'mcqueen'} mess={'Az önce göderildi'} url={'https://www.rekoroyun.com/resim/simsek-mekkuin.jpg'} />
            <MessageCom name={'Walter White'} mess={'Görüldü'} url={'https://uploads-ssl.webflow.com/5fa452663d18a6699f11aa07/62b46638bedf9aabc6b3c121_Walter%20white.jpg'} />
            <MessageCom name={'Rick Sanchez'} mess={'Az önce göderildi'} url={'https://i.pinimg.com/736x/74/20/12/742012090a42ce8d32e620e7109e7614.jpg'} />
            <MessageCom name={'Bill Gates'} mess={'Az önce göderildi'} url={'https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg'} />
            <MessageCom name={'Lemmy Kilmister'} mess={'Az önce göderildi'} url={'https://townsquare.media/site/366/files/2016/01/Lemmy-Kilmister.jpg'} />
            <MessageCom name={'Freddie Mercury'} mess={'Görüldü'} url={'https://www.biography.com/.image/t_share/MTc5OTQ5ODk3MTMzMzM1ODk2/gettyimages-1176816280.jpg'} />
        </ScrollView>
    )
}

export default Message;