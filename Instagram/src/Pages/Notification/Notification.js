import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Header from '../../Component/NotificationComponent/Header';
import NotificationPost from '../../Component/NotificationComponent/NotificationPost';

const Notification = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: '#fff', marginBottom:10}}>
            <Header GoBack={() => navigation.goBack()} />
            <Text
                style={{
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: 18,
                    marginHorizontal: 15,
                    marginVertical: 10
                }}
            >
                Bu Ay
            </Text>
            <NotificationPost
                nick={'Eminem '}
                takip={true}
                url={'https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b'}
            />
            <NotificationPost
                nick={'Tony Stark '}
                url={'https://img.joomcdn.net/dace9a3da47d7d748e13af43f96344a4449c7688_original.jpeg'}
            />
            <Text
                style={{
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: 18,
                    paddingHorizontal: 10,
                    marginVertical: 10,
                    borderTopWidth: 2,
                    borderColor: "#EBEBEB",
                    paddingTop: 10
                }}
            >
                Daha Öncekiler
            </Text>
            <NotificationPost
                nick={'mcqueen '}
                takip={true}
                url={'https://www.rekoroyun.com/resim/simsek-mekkuin.jpg'} 
            />
            <NotificationPost
                nick={'Walter White '}
                url={'https://uploads-ssl.webflow.com/5fa452663d18a6699f11aa07/62b46638bedf9aabc6b3c121_Walter%20white.jpg'}
            />
            <NotificationPost
                nick={'Rick Sanchez '}
                url={'https://i.pinimg.com/736x/74/20/12/742012090a42ce8d32e620e7109e7614.jpg'} 
            />
            <NotificationPost
                nick={'Bill Gates '}
                takip={true}
                url={'https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg'}
            />
            <NotificationPost
                nick={'Lemmy Kilmister '}
                url={'https://townsquare.media/site/366/files/2016/01/Lemmy-Kilmister.jpg'} 
            />
            <NotificationPost
                nick={'Freddie Mercury '}
                takip={true}
                url={'https://www.biography.com/.image/t_share/MTc5OTQ5ODk3MTMzMzM1ODk2/gettyimages-1176816280.jpg'} 
            />
            <NotificationPost
                nick={'React Native '}
                url={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png'}
            />
            <NotificationPost
                nick={'Abcdefhsadfas '}
                takip={true}
                url={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png'}

            />
            <NotificationPost
                nick={'Abcdefhsadfas '}
                url={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png'}
            />
        </ScrollView>
    )
}

export default Notification;