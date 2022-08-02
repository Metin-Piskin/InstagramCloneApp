import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import styles from "./ProfilePosts.style";
import Datam from "../../../Data/ProfilePostData";

const ProfilePosts = () => {


    const renderpost = ({ item }) => {
        return (
            <TouchableOpacity style={styles.post}>
                <Image source={{
                    uri: item.user.avatar
                }}
                    style={styles.avatar}
                />
            </TouchableOpacity>
        );
    }


    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={Datam}
                renderItem={renderpost}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={false}

                contentContainerStyle={{
                    justifyContent: "flex-start",
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            />
        </View>
    );
}
export default ProfilePosts;