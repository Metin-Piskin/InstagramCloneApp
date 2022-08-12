import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
    modal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    container: {
        backgroundColor: "white",
        padding: 15,
        marginHorizontal: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: deviceSize.height / 1.7,
    },
    çizgi: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginVertical: 3,
        opacity: 0.2,
        width: 321,
        left: 35,
    },
    inner_container: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 10,
    },
    yazı: {
        color: "black",
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    gg: {
        borderBottomColor: "black",
        borderBottomWidth: 5,
        width: 50,
        alignSelf: "center",
        opacity: 0.2,
        borderRadius: 10,
    },
});