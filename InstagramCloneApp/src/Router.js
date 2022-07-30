import React from "react";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import HomeScreen from "./Pages/Home";
import SearchScreen from "./Pages/Search";
import ReelScreen from "./Pages/Reel";
import ShopScreen from "./Pages/Shop";
import ProfileScreen from "./Pages/Profile";
import Metin from "./Assets/Metin.png";

import {
    Home,
    HomeFilled,
    Search,
    SearchFilled,
    Reel,
    ReelFilled,
    Shop,
    ShopFilled,
    Profile,
} from "./Component/İcons/icons";

const Router = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: "#000",
                    tabBarInactiveTintColor: "#262626",
                }}
            >
                <Tab.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, focused }) => {
                            if (focused) {
                                return <HomeFilled size={30} fill={color} />
                            }
                            return <Home size={30} fill={color} />
                        }
                    }}
                />
                <Tab.Screen
                    name="SearchScreen"
                    component={SearchScreen}
                    options={{
                        tabBarIcon: ({ color, focused }) => {
                            if (focused) {
                                return <SearchFilled size={30} fill={color} />
                            }
                            return <Search size={30} fill={color} />
                        }
                    }}
                />
                <Tab.Screen
                    name="ReelScreen"
                    component={ReelScreen}
                    options={{
                        tabBarIcon: ({ color, focused }) => {
                            if (focused) {
                                return <ReelFilled size={30} fill={color} />
                            }
                            return <Reel size={30} fill={color} />
                        }
                    }}
                />
                <Tab.Screen
                    name="ShopScreen"
                    component={ShopScreen}
                    options={{
                        tabBarIcon: ({ color, focused }) => {
                            if (focused) {
                                return <ShopFilled size={30} fill={color} />
                            }
                            return <Shop size={30} fill={color} />
                        }
                    }}
                />
                <Tab.Screen
                    name="ProfileScreen"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color, focused }) => {
                            return (
                                <Image
                                    source={Metin}
                                    style={[styles.avatar, {
                                        borderColor: focused ? '#000' : 'transparent',
                                    }]}
                                />
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default Router;

const styles = StyleSheet.create({
    avatar: {
        width: 25,
        height: 25,
        borderRadius: 21,
        borderWidth: 2,
    },
});