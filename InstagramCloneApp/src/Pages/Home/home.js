import React from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./home.style";
import HomeHeader from "../../Component/HomeComponent/HomeHeader";
import HomeStories from "../../Component/HomeComponent/HomeStories";
import Post from "../../Component/PostCopmponent";
import PostData from "../../Data/Post.Data";
import Divider from "../../Component/HomeComponent/HomeDivider/HomeDivider";

const HomePage = ({navigation}) => {
    function handlePress() {
        return(
            navigation.navigate('UploadFotoScreen')
        )
    };
    return (
        <>
            <HomeHeader onPres={handlePress}/>
            <ScrollView style={styles.container} stickyHeaderIndices={[1]}>
                <HomeStories />
                <Divider />
                {PostData.map(post => <Post key={post.id} post={post} />)}
            </ScrollView>
        </>
    );
}
export default HomePage;