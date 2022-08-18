import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import { USERS } from "../../../Data/StoriesData";
import styles from "./HomeStories.style";

function HomeStories() {
    return (
        <View style={styles.stories}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {USERS.map((story, index) => (
                    <View key={index} style={styles.story}>
                        <LinearGradient
                            colors={['#DE0046', '#F7A34B']}
                            style={styles.cover}
                        >
                            <Image
                                style={styles.stavatar}
                                source={{
                                    uri: story.image,
                                }}
                            />
                        </LinearGradient>
                        <Text numberOfLines={1} style={styles.username}>{story.user}</Text>
                    </View>

                ))}
            </ScrollView>
        </View>
    );
}
export default HomeStories;