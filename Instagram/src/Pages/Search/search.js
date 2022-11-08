import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Video from 'react-native-video';
import FastImage from 'react-native-fast-image';

import SearchHeader from "../../Component/SearchHeader";
import { Reel } from '../../Component/İcons/icons';

const Search = () => {
    return (
        <View style={{ flex: 1 }}>
            <SearchHeader />
            <ScrollView>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Image
                            style={{
                                width: 129.5,
                                height: 125,
                                marginRight: 2,
                                marginBottom: 2
                            }}
                            source={{ uri: 'https://unsplash.it/400/400?image=331' }}
                        />
                        <Image
                            style={{
                                width: 129.5,
                                height: 125,
                                marginRight: 2,
                                marginBottom: 2
                            }}
                            source={{ uri: 'https://unsplash.it/400/400?image=11' }}
                        />
                        <Image
                            style={{
                                width: 129.5,
                                height: 125,
                                marginRight: 2,
                                marginBottom: 2
                            }}
                            source={{ uri: 'https://unsplash.it/400/400?image=12' }}
                        />
                        <Image
                            style={{
                                width: 129.5,
                                height: 125,
                                marginRight: 2,
                                marginBottom: 2
                            }}
                            source={{ uri: 'https://unsplash.it/400/400?image=3' }}
                        />
                    </View>
                    <View
                        style={{
                            position: "absolute",
                            right: 0
                        }}
                    >
                        <Video
                            source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}
                            style={{
                                width: 129.5,
                                height: 252
                            }}
                            volume={0}
                        />
                        <View
                            style={{
                                position: "absolute",
                                bottom: 5
                            }}
                        >
                            <Reel size={28} fill='#fff' />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Image
                        style={{
                            width: 129.5,
                            height: 125,
                            marginRight: 2,
                            marginBottom: 2
                        }}
                        source={{ uri: 'https://unsplash.it/400/400?image=15' }}
                    />
                    <Image
                        style={{
                            width: 129.5,
                            height: 125,
                            marginRight: 2,
                            marginBottom: 2
                        }}
                        source={{ uri: 'https://unsplash.it/400/400?image=36' }}
                    />
                    <Image
                        style={{
                            width: 129.5,
                            height: 125,
                            marginBottom: 2
                        }}
                        source={{ uri: 'https://unsplash.it/400/400?image=27' }}
                    />
                    <Image
                        style={{
                            width: 129.5,
                            height: 125,
                            marginRight: 2,
                            marginBottom: 2
                        }}
                        source={{ uri: 'https://unsplash.it/400/400?image=55' }}
                    />
                    <Image
                        style={{
                            width: 129.5,
                            height: 125,
                            marginRight: 2,
                            marginBottom: 2
                        }}
                        source={{ uri: 'https://unsplash.it/400/400?image=66' }}
                    />
                    <Image
                        style={{
                            width: 129.5,
                            height: 125,
                            marginBottom: 2
                        }}
                        source={{ uri: 'https://unsplash.it/400/400?image=37' }}
                    />
                </View>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    <Video
                        source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}
                        style={{
                            width: 260,
                            height: 252
                        }}
                        volume={0}
                    />
                    <View style={{ flexDirection: "column", flexWrap: "wrap" }}>

                        <Image
                            style={{
                                width: 129.5,
                                height: 125,
                                marginLeft: 3,
                                marginBottom: 2
                            }}
                            source={{ uri: 'https://unsplash.it/400/400?image=100' }}
                        />

                        <Image
                            style={{
                                width: 129.5,
                                height: 125,
                                marginLeft: 3,
                                marginBottom: 2
                            }}
                            source={{ uri: 'https://unsplash.it/400/400?image=31' }}
                        />

                    </View>

                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Image
                        style={{
                            width: 129.5,
                            height: 125,
                            marginRight: 2,
                            marginBottom: 2
                        }}
                        source={{ uri: 'https://unsplash.it/400/400?image=45' }}
                    />
                    <Image
                        style={{
                            width: 129.5,
                            height: 125,
                            marginRight: 2,
                            marginBottom: 2
                        }}
                        source={{ uri: 'https://unsplash.it/400/400?image=96' }}
                    />
                    <Image
                        style={{
                            width: 129.5,
                            height: 125,
                            marginBottom: 2
                        }}
                        source={{ uri: 'https://unsplash.it/400/400?image=117' }}
                    />
                    <Image
                        style={{
                            width: 129.5,
                            height: 125,
                            marginRight: 2,
                            marginBottom: 2
                        }}
                        source={{ uri: 'https://unsplash.it/400/400?image=955' }}
                    />
                    <Image
                        style={{
                            width: 129.5,
                            height: 125,
                            marginRight: 2,
                            marginBottom: 2
                        }}
                        source={{ uri: 'https://unsplash.it/400/400?image=666' }}
                    />
                    <Image
                        style={{
                            width: 129.5,
                            height: 125,
                            marginBottom: 2
                        }}
                        source={{ uri: 'https://unsplash.it/400/400?image=997' }}
                    />
                    <Image
                        style={{
                            width: 129.5,
                            height: 125,
                            marginRight: 2,
                            marginBottom: 2
                        }}
                        source={{ uri: 'https://unsplash.it/400/400?image=475' }}
                    />
                    <Image
                        style={{
                            width: 129.5,
                            height: 125,
                            marginRight: 2,
                            marginBottom: 2
                        }}
                        source={{ uri: 'https://unsplash.it/400/400?image=698' }}
                    />
                    <Image
                        style={{
                            width: 129.5,
                            height: 125,
                            marginBottom: 2
                        }}
                        source={{ uri: 'https://unsplash.it/400/400?image=744' }}
                    />
                    <Image
                        style={{
                            width: 129.5,
                            height: 125,
                            marginRight: 2,
                            marginBottom: 2
                        }}
                        source={{ uri: 'https://unsplash.it/400/400?image=655' }}
                    />
                    <Image
                        style={{
                            width: 129.5,
                            height: 125,
                            marginRight: 2,
                            marginBottom: 2
                        }}
                        source={{ uri: 'https://unsplash.it/400/400?image=831' }}
                    />
                    <Image
                        style={{
                            width: 129.5,
                            height: 125,
                            marginBottom: 2
                        }}
                        source={{ uri: 'https://unsplash.it/400/400?image=560' }}
                    />
                </View>
            </ScrollView>
        </View>
    );
}
export default Search;