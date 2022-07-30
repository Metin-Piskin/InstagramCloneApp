import { StyleSheet } from "react-native";

export default StyleSheet.create({
    post: {
        marginBottom: 10,
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 49,
        paddingHorizontal: 15,
    },
    avatar:{
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 10,
    },
    username:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    usertext:{
        fontSize: 14,
        fontWeight: '600',
        color: '#262626',
    },
    content:{
        paddingHorizontal: 15,
    },
    actions:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
    },
    left_actions:{
        flexDirection: 'row',

    },
    action:{
        marginRight: 12,
    },
    likestext:{
        fontWeight: '600',
        color: '#262626',
    },
    name:{
        fontWeight: '600',
        color: '#262626',
    },
    commenttext:{
        opacity: 0.5,
        color: '#262626',
    },
    dt:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    date:{
        fontSize: 12,
        opacity: 0.5,
        color: '#262626',
    },
    translation:{
        fontSize: 12,
        fontWeight: '600',
        color: '#262626',
        marginLeft: 10,
    },
});
