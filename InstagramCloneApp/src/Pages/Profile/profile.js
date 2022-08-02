import React from "react";
import { View, Text, ScrollView } from "react-native";

import ProfileHeader from "../../Component/ProfileComponent/ProfileHeader";
import ProfileFollow from "../../Component/ProfileComponent/ProfileFollow";
import ProfileHug from "../../Component/ProfileComponent/ProfileHug";
import ProfileStories from "../../Component/ProfileComponent/ProfileStories";
import ProfileTab from "../../Component/ProfileComponent/ProfileTab";
import ProfilePosts from "../../Component/ProfileComponent/ProfilePosts";

const Profile = () => {
    return (
        <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
            <ProfileHeader />
            <ProfileFollow />
            <ProfileHug />
            <ProfileStories />
            <ProfileTab />
            <ProfilePosts />
        </ScrollView>
    );
}
export default Profile;