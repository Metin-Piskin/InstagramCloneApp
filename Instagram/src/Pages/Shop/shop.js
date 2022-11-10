import React from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import { Burger, BookMark, Search } from '../../Component/İcons/icons';

const Shop = () => {
    return (
        <>
            <ScrollView>
                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: 15,
                        marginVertical: 5
                    }}
                >
                    <Text
                        style={{
                            color: '#000',
                            fontWeight: '800',
                            fontSize: 25,
                            flex: 1
                        }}
                    >
                        Mağaza
                    </Text>
                    <TouchableOpacity
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            marginHorizontal: 20
                        }}
                    >
                        <BookMark fill={'#000'} size={23} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Burger fill={'#000'} size={23} />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        backgroundColor: "#EBEBEB",
                        margin: 10,
                        alignItems: 'center',
                        borderRadius: 12,
                        marginHorizontal: 15,
                    }}
                >
                    <View
                        style={{
                            paddingHorizontal: 5
                        }}
                    >
                        <Search fill={'gray'} size={18} />
                    </View>
                    <TextInput
                        placeholder='Ara'
                        placeholderTextColor={'gray'}
                        style={{
                            paddingVertical: 5
                        }}
                    />
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#EBEBEB",
                        marginHorizontal: 15,
                        alignItems: "center",
                        borderRadius: 8,
                        marginBottom: 10
                    }}
                >
                    <Text
                        style={{
                            color: '#000',
                            paddingVertical: 8,
                            fontWeight: '500'
                        }}
                    >
                        Videolar
                    </Text>
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}
                >

                    <Image
                        source={{ uri: 'https://cdn.shopify.com/s/files/1/1202/6102/products/polar-default-sweatshirt-black-1_1300x1500_crop_center.progressive.jpg?v=1631716958' }}
                        style={{
                            width: 196,
                            height: 195,
                            marginBottom: 2
                        }}
                    />

                    <Image
                        source={{ uri: 'https://ilkerreklam.com.tr/photos/uploads/2022/1/default(82).jpg' }}
                        style={{
                            width: 196,
                            height: 195,
                            marginBottom: 2
                        }}
                    />
                    <Image
                        source={{ uri: 'https://cdn.vox-cdn.com/thumbor/ayNWYbz27_UER6cS4Uhp1JNFbj4=/0x0:2040x1360/1400x1400/filters:focal(947x1064:948x1065)/cdn.vox-cdn.com/uploads/chorus_asset/file/13681416/fshivakumar_181109_3078_0001.jpg' }}
                        style={{
                            width: 196,
                            height: 195,
                            marginBottom: 2
                        }}
                    />
                    <Image
                        source={{ uri: 'https://www.grimelange.com.tr/Uploads/UrunResimleri/buyuk/frida-kadin-mint-yesili-duz-renk-kapus-9-4e2f.jpg' }}
                        style={{
                            width: 196,
                            height: 195,
                            marginBottom: 2
                        }}
                    />
                    <Image
                        source={{ uri: 'https://www.catofashions.com/prodimages/124188-DEFAULT-l.jpg' }}
                        style={{
                            width: 196,
                            height: 195,
                            marginBottom: 2
                        }}
                    />
                    <Image
                        source={{ uri: 'https://cdn.shopify.com/s/files/1/0042/9126/4584/products/wild-and-free-hoodie-size-chart-video-spo-default-disabled-sweatshirt-mountain-moverz-clothing-hood-608_300x.jpg?v=1649359603' }}
                        style={{
                            width: 196,
                            height: 195,
                            marginBottom: 2
                        }}
                    />
                    <Image
                        source={{ uri: 'https://www.zepplingiyim.com/85144-thickbox_default/php-tags-oversize-siyah-tisoert.jpg' }}
                        style={{
                            width: 196,
                            height: 195,
                            marginBottom: 2
                        }}
                    />
                    <Image
                        source={{ uri: 'https://cdn.shopify.com/s/files/1/0063/0757/7971/products/Kuniyoshi-Sweatshirt_400x.jpg?v=1655319326' }}
                        style={{
                            width: 196,
                            height: 195,
                            marginBottom: 2
                        }}
                    />
                </View>
            </ScrollView>
        </>
    );
}
export default Shop;