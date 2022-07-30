import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import ReadMore from '@fawazahmed/react-native-read-more';
import { formatDistance, parseISO } from "date-fns";
import { tr } from 'date-fns/locale'

import styles from "./PostCopmponent.style";
import { Dots, Heart, Comment, Share, BookMark } from "../İcons/icons";
import Fitİmage from "../Fitİmage";

function Post({ post }) {
    const formattedDate = formatDistance(parseISO(post.date), new Date(),
        { addSuffix: true });

    return (
        <View style={styles.post}>
            <View style={styles.header}>
                <View style={styles.username}>
                    <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
                    <Text style={styles.usertext}>{post.user.name}</Text>
                </View>
                <Dots size={16} fill="#262626" />
            </View>
            <Fitİmage src={post.image} />
            <View style={styles.content}>
                <View style={styles.actions}>
                    <View style={styles.left_actions}>
                        <TouchableOpacity style={styles.action}>
                            <Heart size={24} fill="#222" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action}>
                            <Comment size={24} fill="#222" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action}>
                            <Share size={24} fill="#222" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <BookMark size={22} fill="#222" />
                    </TouchableOpacity>
                </View>
                <View style={styles.likes}>
                    <Text style={styles.likestext}>{post.likes} Likes</Text>
                </View>
                <ReadMore numberOfLines={2} seeMoreStyle={{
                    color: '#999',
                }}
                    expandOnly={true}
                    seeMoreText="More"
                    wrapperStyle={{
                        marginBottom: 7,
                    }}
                >
                    <Text style={styles.name}>{post.user.name}</Text>
                    {'  '}
                    {post.description}
                </ReadMore >
                {post.comments > 0 && (
                    <TouchableOpacity style={{ paddingBottom: 7 }}>
                        <Text style={styles.commenttext}>View all {post.comments} Comments</Text>
                    </TouchableOpacity>
                )}
                <View style={styles.dt}>
                    <Text style={styles.date}>{formattedDate}</Text>
                    <Text style={styles.translation}>See Translation</Text>
                </View>
            </View>
        </View>
    )
}
export default Post;