import React, { useEffect, useState } from 'react';
import { Animated, View, TouchableOpacity, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import Post from '../ProileTopBarScreens/Post';
import Etiket from '../ProileTopBarScreens/Etiket';
import { Vector, Union } from "../../İcons/icons";


const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='Post'
        >
            <Tab.Screen
                name="Post"
                component={Post}
                options={{
                    title: ({ color, focused }) => (
                        <Vector
                            size={28}
                            fill={focused ? 'black' : 'gray'}
                        />
                    ),
                    tabBarIndicatorStyle: {
                        backgroundColor: '#000'
                    }
                }}
            />
            <Tab.Screen
                name="Etiket"
                component={Etiket}
                options={{
                    title: ({ color, focused }) => (
                        <Union
                            size={30}
                            fill={focused ? '#000' : 'gray'}
                        />
                    ),
                    tabBarIndicatorStyle: {
                        backgroundColor: '#000'
                    }
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;