import React, { useEffect, useState } from 'react';
import { Animated, View, TouchableOpacity, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import Post from '../ProileTopBarScreens/Post';
import Etiket from '../ProileTopBarScreens/Etiket';
import { Vector, Union } from "../../İcons/icons";

const { width } = Dimensions.get('screen');

const CAMERA_TAB_ITEM_WIDTH = width * 0.5;
const NORMAL_TAB_ITEM_WIDTH = width * 0.5;


const MyTabBar = ({ state, descriptors, navigation, position }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;
                const tabBarItemWidth = route.name === "Post" ? CAMERA_TAB_ITEM_WIDTH : NORMAL_TAB_ITEM_WIDTH;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const inputRange = state.routes.map((_, i) => i);
                const opacity = position.interpolate({
                    inputRange,
                    outputRange: inputRange.map(i => (i === index ? 1 : 0)),
                });

                return (
                    <TouchableOpacity
                        key={route.name}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            width: tabBarItemWidth,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingBottom: 5,
                            height: 40
                        }}
                    >

                        {
                            route.name === "Post" ? (
                                <Animated.View>
                                    <Vector fill="#000" size={28} />
                                </Animated.View>
                            ) : (
                                <Animated.View>
                                    <Union fill="#000" size={30} />
                                </Animated.View>
                            )
                        }


                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='Post'
            tabBar={props => <MyTabBar {...props} />

            }
        >
            <Tab.Screen
                name="Post"
                component={Post}
            />
            <Tab.Screen
                name="Etiket"
                component={Etiket}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;