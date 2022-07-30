import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import StoriesData from "../../../Data/StoriesData";
import styles from "./HomeStories.style";

function HomeStories() {
    return (
        <View style={styles.stories}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {StoriesData.map(story => (
                    <View key={story.id} style={styles.story}>
                        <LinearGradient
                            colors={['#DE0046', '#F7A34B']}
                            style={styles.cover}
                        >
                            <Image
                                style={styles.stavatar}
                                source={{
                                    uri: story.user.avatar
                                }}
                            />
                        </LinearGradient>
                        <Text numberOfLines={1} style={styles.username}>{story.user.name}</Text>
                    </View>

                ))}
            </ScrollView>
        </View>
    );
}
export default HomeStories;