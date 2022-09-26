import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    onecontainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imagecontainer: {
        position: 'absolute',
    },
    oneimage: {
        height: 120,
        width: 140,
        resizeMode: 'contain'
    },
    image: {
        height: 120,
        width: 150,
        backgroundColor: "white",

        borderColor: "gray",
        marginHorizontal: 5,
        marginVertical: 10,
    },
    açıklama: {
        height: 120,
        width: 220,
        backgroundColor: "white",
        marginHorizontal: 5,
        marginVertical: 10,
    },
    twocontainer: {
        height: 35,
        marginVertical: 3,
    },
    çizgi: {
        height: 1,
        width: 400,
        backgroundColor: "black",
        opacity: 0.3,
        marginVertical: 7,
    },
    cat: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 4,
        marginVertical: 2,
    },
    konum: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 3,
    },
    yazı: {
        color: "#000",
        fontWeight: "400",
    },
    mçizgi: {
        height: 1,
        width: 400,
        backgroundColor: "black",
        opacity: 0.3,
        marginTop: 18,
    },
});