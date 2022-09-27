import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import {
    StoryClose,
    StoryAddLink,
    StoryDownloadContent,
    StoryFilters,
    StoryStickers,
    StoryDraw,
    StoryText,
    StorySendTo
} from '../../Component/İcons/icons';


const Story = (props) => {

    const [imageCamera, setImageCamera] = useState(null)

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    useEffect(() => {
        const option = {
            mediaType: 'photo',
            quality: 1
        }
        launchCamera(option, (res) => {
            if (res.didCancel) {
                console.log('User Cancelled image picker')
            } else if (res.errorCode) {
                console.log(res.errorCode)
            } else {
                const data = res.assets[0]
                setImageCamera(data)
                console.log(data)
            }
        })
    }, [])

    const StoryBack = () => {
        props.navigation.goBack();
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#222222' }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: "space-around",
                alignItems: "center",
                zIndex: 1,
                position: "absolute",
                marginVertical: 20,

            }}>
                <TouchableOpacity style={{ marginLeft:40 ,marginHorizontal: 15 }} onPress={StoryBack} >
                    <StoryClose fill={'#fff'} size={15} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 15 }}>
                    <StoryAddLink fill={'#fff'} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 15 }}>
                    <StoryDownloadContent fill={'#fff'} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 15 }}>
                    <StoryFilters fill={'#fff'} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 15 }}>
                    <StoryStickers fill={'#fff'} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 15 }}>
                    <StoryDraw fill={'#fff'} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 15 }}>
                    <StoryText fill={'#fff'} />
                </TouchableOpacity>
            </View>
            {
                imageCamera != null &&
                <Image
                    source={{ uri: imageCamera.uri }}
                    style={{ height: windowHeight, width: windowWidth, resizeMode: 'contain' }}
                />
            }
            <TouchableOpacity
                style={{
                    backgroundColor: '#fff',
                    flexDirection: "row",
                    zIndex: 1,
                    position: "absolute",
                    bottom: 15,
                    right: 30,
                    paddingHorizontal: 40,
                    paddingVertical: 20,
                    borderRadius: 40,
                }}
            >
                <Text style={{ color: '#000', fontSize: 16 }} >Send to</Text>
                <StorySendTo size={24} />
            </TouchableOpacity>
        </View>
    )
}
export default Story;
