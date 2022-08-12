import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
    modal: {
        position: "absolute",
        right: 0,
        left: 175,
        top: 40,
        margin: 0,  
    },
    container: {
        backgroundColor: "white",
        padding: 15,
        marginHorizontal: 10,
        borderRadius: 10,
        height: deviceSize.height / 4.5,
        width: deviceSize.width / 2.2,
    },
    çizgi: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginVertical: 3,
        opacity: 0.2,
    },
    paylaş: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginVertical: 5,
    },
    hikaye: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginVertical: 5,
    },
    reels: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginVertical: 5,
    },
    canlı: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginVertical: 5,
    },
    yazı: {
        color: "black",
    },
});