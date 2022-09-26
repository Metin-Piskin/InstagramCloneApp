import React, { useState, useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from "@react-native-firebase/auth";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import HomeScreen from "./Pages/Home";
import SearchScreen from "./Pages/Search";
import ReelScreen from "./Pages/Reel";
import ShopScreen from "./Pages/Shop";
import ProfileScreen from "./Pages/Profile";
import Login from "./Pages/Auth/Login";
import Sign from "./Pages/Auth/Sign";
import UploadFoto from "./Pages/UploadFoto";
import StoryScreen from "./Pages/Story";
import Metin from "./Assets/Metin.png";
import YazıButton from "./Component/YazıButton/YazıButton";

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
    const [userSession, setUserSession] = useState();

    useEffect(() => {
        auth().onAuthStateChanged(user => {
            setUserSession(!!user);
        })
    }, []);

    const AuthStack = () => {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Sign" component={Sign} />
            </Stack.Navigator>
        )
    }

    const HomeStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="UploadFotoScreen" component={UploadFoto}
                    options={{
                        headerTitleStyle: {
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#000",
                        },
                        headerTitleAlign: "center",
                        headerTitle: "Yeni Gönderi",
                    }}
                />
                <Stack.Screen name="StoryScreen" component={StoryScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        )
    }



    return (
        <NavigationContainer>
            {
                !userSession ? (
                    <Stack.Navigator>
                        <Stack.Screen
                            name="AuthStack"
                            component={AuthStack}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                ) : (
                    <>  
                        <Tab.Navigator
                            screenOptions={{
                                tabBarShowLabel: false,
                                headerShown: false,
                                tabBarActiveTintColor: "#000",
                                tabBarInactiveTintColor: "#262626",
                            }}
                        >
                            <Tab.Screen
                                name="HomeStack"
                                component={HomeStack}
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
                    </>
                )
            }
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