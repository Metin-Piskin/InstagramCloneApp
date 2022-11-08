import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const Post = () => {
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <PostImage url={'https://instagram.fyei4-1.fna.fbcdn.net/v/t51.2885-15/240944323_803270773684782_8489434234958949743_n.jpg?stp=dst-jpg_e35_s480x480&_nc_ht=instagram.fyei4-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=4MgZ1HzRB_wAX-QZkEX&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjY1MTc3NjE0OTQ2MjMyMTUwNw%3D%3D.2-ccb7-5&oh=00_AfBAVHFabLj3mgwm5dJqcrrwrOc49G74Y7yorUxbu2M__A&oe=636E79B5&_nc_sid=30a2ef'} />
                <PostImage url={'https://instagram.fyei4-1.fna.fbcdn.net/v/t51.2885-15/292352148_361415656106443_472191054206497830_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fyei4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=sf773v4pTC4AX_71Tok&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg3NzEyNzMxNzU5ODgwMjY0Mw%3D%3D.2-ccb7-5&oh=00_AfBEU9ulUriIM3YDT4j6hs7bplA0vfQtyZxIOmRC9FqI5Q&oe=636F0AA2&_nc_sid=30a2ef'} />
                <PostImage url={'https://instagram.fyei4-1.fna.fbcdn.net/v/t51.2885-15/111452598_283169402911546_3692131001987941364_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fyei4-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=sFpnxXwztl8AX9z9lGO&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjM2MTA2MTQ0NjM0MDY5MzYxOQ%3D%3D.2-ccb7-5&oh=00_AfAeLcEJra2_fcpkhT7nZaU8bjgFy1mfANl3JjAW8xAebQ&oe=636DF044&_nc_sid=30a2ef'} />
                <PostImage url={'https://instagram.fyei4-1.fna.fbcdn.net/v/t51.2885-15/103130328_285564029470836_6683956514547721406_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fyei4-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=lzCl7pTAincAX-XbD2p&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjMzMDU0ODI2NzExMDMwMjczMg%3D%3D.2-ccb7-5&oh=00_AfCgjh6b0pFtIls-2OGHIwWZzbY7Vi5xS98upl1y2Hgf8w&oe=636D9D7A&_nc_sid=30a2ef'} />
                <PostImage url={'https://instagram.fyei4-1.fna.fbcdn.net/v/t51.2885-15/72278841_106263960755832_7365130343859792245_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fyei4-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=xqQw3BS_FIsAX-qcui8&tn=MUbj9ScTYCtYn7Y5&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjE4MzQ3NzI2MTU1MzA5NTYxNQ%3D%3D.2-ccb7-5&oh=00_AfCP5jANjPqAr-gk4KHum2DaaS0v4vM_-bDhMz1zNz1czg&oe=636DE3FA&_nc_sid=30a2ef'} />
                <PostImage url={'https://instagram.fyei4-1.fna.fbcdn.net/v/t51.2885-15/75545993_701005637060601_24639554573677188_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fyei4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=5j5SjkiE1TMAX-nA-pU&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjE2NTMxMzg3MDk3MjA1ODg3MA%3D%3D.2-ccb7-5&oh=00_AfBREhpT2eMJoafcE7fBEGvTGoj1eOEZdI4b7nk-pylQCw&oe=636EDA00&_nc_sid=30a2ef'} />
                <PostImage url={'https://instagram.fyei4-1.fna.fbcdn.net/v/t51.2885-15/71102862_426188291340373_5674858821678506346_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.fyei4-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=262tr0mtDLcAX-aFp-S&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjEzMDU4OTAwNDk1MTc2MDE3MA%3D%3D.2-ccb7-5&oh=00_AfD6VTyZeqqQkP-8oHIC8ngchhT-fS-j-vhrcq1R1K2lsQ&oe=636EF15D&_nc_sid=30a2ef'} />
                <PostImage url={'https://instagram.fyei4-1.fna.fbcdn.net/v/t51.2885-15/51940795_334346333854330_3589007978282211727_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fyei4-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=2pPoTJ2c1vIAX8-1UUb&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MTk5MTUwNzY2MzQxMTUzMjA5Mg%3D%3D.2-ccb7-5&oh=00_AfDGXtNZqnD8FQje9lBCYZRk6RW-UYpaF4Edzz7NPEnFsQ&oe=636EF5E3&_nc_sid=30a2ef'} />
                <PostImage url={'https://instagram.fyei4-1.fna.fbcdn.net/v/t51.2885-15/41869642_470198756801638_4107854492156162416_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fyei4-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=JMrqzsGGmugAX93mOUe&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MTg3ODk0MzkxNDYyNTA4NDExMA%3D%3D.2-ccb7-5&oh=00_AfCkyqKtcqy1KjkL9DzJWjx01FQ_wSoPQGTIhyv3xDujoQ&oe=636EA872&_nc_sid=30a2ef'} />
            </View>
        </ScrollView>
    )
}

export default Post;

const PostImage = ({ url }) => {
    return (
        <TouchableOpacity
            style={{
                paddingBottom: 2
            }}
        >
            <Image
                source={{ uri: url }}
                style={{
                    width: 129,
                    height: 120
                }}
            />
        </TouchableOpacity>
    )
}