import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./home.style";
import HomeHeader from "../../Component/HomeComponent/HomeHeader";
import HomeStories from "../../Component/HomeComponent/HomeStories";
import Post from "../../Component/PostCopmponent";
import PostData from "../../Data/Post.Data";
import Divider from "../../Component/HomeComponent/HomeDivider/HomeDivider";
import PlusModal from "../../Component/ModalComponent/HomePlusModal";

const HomePage = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const handleInputToggle = () => {
        setModalVisible(!modalVisible);
    };
    function handlePress() {
        return (
            setModalVisible(!modalVisible)
        )
    };

    const handlePaylasPress = () => {
        navigation.navigate("UploadFotoScreen");
    };

    return (
        <>
            <HomeHeader onPres={handlePress} />
            <PlusModal
                visible={modalVisible}
                onClose={handleInputToggle}
                PaylasPress={handlePaylasPress}
            />
            <ScrollView style={styles.container} stickyHeaderIndices={[1]}>
                <HomeStories />
                <Divider />
                {PostData.map(post => <Post key={post.id} post={post} />)}
            </ScrollView>
        </>
    );
}
export default HomePage;