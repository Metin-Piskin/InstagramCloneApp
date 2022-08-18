import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./home.style";
import HomeHeader from "../../Component/HomeComponent/HomeHeader";
import HomeStories from "../../Component/HomeComponent/HomeStories";
import Post from "../../Component/PostCopmponent";
import { POSTS } from "../../Data/Post.Data";
import Divider from "../../Component/HomeComponent/HomeDivider/HomeDivider";
import PlusModal from "../../Component/ModalComponent/HomePlusModal";

const HomePage = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleInputToggle = () => {
        setModalVisible(!modalVisible);
    };
    function handlePress() {
        setModalVisible(!modalVisible);
    };

    const handlePaylasPress = () => {
        setModalVisible(!modalVisible);
        navigation.navigate("UploadFotoScreen");
    };

    const handlStoryPress = () => {
        setModalVisible(!modalVisible);
        navigation.navigate("StoryScreen");
    };

    return (
        <>
            <HomeHeader onPres={handlePress} />
            <PlusModal
                visible={modalVisible}
                onClose={handleInputToggle}
                PaylasPress={handlePaylasPress}
                StoryPress={handlStoryPress}
            />
            <ScrollView style={styles.container} >
                <HomeStories />
                {POSTS.map((post, index) => <Post key={index} post={post} />)}
            </ScrollView>
        </>
    );
}
export default HomePage;