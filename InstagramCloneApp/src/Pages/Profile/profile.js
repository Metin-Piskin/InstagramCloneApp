import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import auth from "@react-native-firebase/auth";

import ProfileHeader from "../../Component/ProfileComponent/ProfileHeader";
import ProfileFollow from "../../Component/ProfileComponent/ProfileFollow";
import ProfileHug from "../../Component/ProfileComponent/ProfileHug";
import ProfileStories from "../../Component/ProfileComponent/ProfileStories";
import ProfileTab from "../../Component/ProfileComponent/ProfileTab";
import ProfilePosts from "../../Component/ProfileComponent/ProfilePosts";

import ProfilePlusModal from "../../Component/ModalComponent/ProfilePlusModal";
import ProfileBurgerModal from "../../Component/ModalComponent/ProfileBurgerModal";

const Profile = () => {
    const [modalPlusVisible, setModalPlusVisible] = useState(false);
    const handlePlusToggle = () => {
        setModalPlusVisible(!modalPlusVisible);
    };
    function handlePlusPress() {
        return (
            setModalPlusVisible(!modalPlusVisible)
        )
    };

    const [modalBurgerVisible, setModalBurgerVisible] = useState(false);
    const handleBurgerToggle = () => {
        setModalBurgerVisible(!modalBurgerVisible);
    };
    function handleBurgerPress() {
        return (
            setModalBurgerVisible(!modalBurgerVisible)
        )
    };


    return (
        <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
            <ProfileHeader
                onPressPlus={handlePlusPress}
                onPressBurger={handleBurgerPress}
            />
            <ProfilePlusModal
                visible={modalPlusVisible}
                onClose={handlePlusToggle}
            />
            <ProfileBurgerModal
                visible={modalBurgerVisible}
                onClose={handleBurgerToggle}
                exit={() => auth().signOut()}
            />

            <ProfileFollow />
            <ProfileHug />
            <ProfileStories />
            <ProfileTab />
            <ProfilePosts />
        </ScrollView>
    );
}
export default Profile;