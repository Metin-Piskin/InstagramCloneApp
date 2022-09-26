import React, { useState, useEffect } from "react";
import { ScrollView, View, Image, Text } from "react-native";
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";
import LinearGradient from 'react-native-linear-gradient';

import styles from "./home.style";
import HomeHeader from "../../Component/HomeComponent/HomeHeader";
import HomeStories from "../../Component/HomeComponent/HomeStories";
import Post from "../../Component/PostCopmponent";
import PlusModal from "../../Component/ModalComponent/HomePlusModal";
import styless from '../../Component/HomeComponent/HomeStories/HomeStories.style'

const HomePage = ({ navigation }) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        firestore().collectionGroup('posts')
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(post => (
                    { id: post.id, ...post.data() })))
            })
    }, [])

    const [modalVisible, setModalVisible] = useState(false);

    const handleInputToggle = () => {
        setModalVisible(!modalVisible);
    };
    function handlePress() {
        setModalVisible(!modalVisible);
    };

    const handlePaylasPress = () => {
        navigation.navigate("UploadFotoScreen");
        setModalVisible(!modalVisible);
    };

    const handlStoryPress = () => {
        navigation.navigate("StoryScreen");
        setModalVisible(!modalVisible);
    };

    const handleLike = (post) => {
        const currentLikeStatus = !post.likes_by_users.includes(
            auth().currentUser.email
        )
        firestore().collection('users')
            .doc(post.owner_email)
            .collection('posts')
            .doc(post.id)
            .update({
                likes_by_users: currentLikeStatus ?
                    firestore.FieldValue.arrayUnion(
                        auth().currentUser.email
                    )
                    : firestore.FieldValue.arrayRemove(
                        auth().currentUser.email
                    )
            })
            .then(() => {
                console.log('like updated')
            })
            .catch(error => {
                console.log("error: ")
            })
    }

    return (
        <>
            <HomeHeader onPres={handlePress} />
            <PlusModal
                visible={modalVisible}
                onClose={handleInputToggle}
                PaylasPress={handlePaylasPress}
                StoryPress={handlStoryPress}
            />
            <ScrollView style={styless.container} >
                <View style={styless.stories}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {posts.map((post, index) => (
                            <View key={index} style={styless.story}>
                                <LinearGradient
                                    colors={['#DE0046', '#F7A34B']}
                                    style={styless.cover}
                                >
                                    <Image
                                        style={styless.stavatar}
                                        source={{
                                            uri: post.profile_picture,
                                        }}
                                    />
                                </LinearGradient>
                                <Text numberOfLines={1} style={styless.username}>{post.user}</Text>
                            </View>

                        ))}
                    </ScrollView>
                </View>
                {posts.map((post, index) => <Post key={index} post={post} handleLike={handleLike} />)}
            </ScrollView>
        </>
    );
}
export default HomePage;