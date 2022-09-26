import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const Story = () => {

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


    return (
        <View style={{ flex: 1 }}>
            {
                imageCamera != null &&
                <Image
                    source={{ uri: imageCamera.uri }}
                    style={{ height: windowHeight, width: windowWidth, resizeMode: 'contain' }}
                />
            }
        </View>
    )
}
export default Story;