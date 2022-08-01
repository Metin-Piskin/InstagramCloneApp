import React from "react";
import { View, Text } from "react-native";
import auth from "@react-native-firebase/auth";

import TextButton from "../../Component/TextButton";

const Profile = () => {
    return (
        <View>
            <Text>Profile</Text>
            <TextButton text="Çıkış" onPress={() => auth().signOut()}/>
        </View>
    );
}
export default Profile;