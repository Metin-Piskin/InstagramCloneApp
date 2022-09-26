import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    logoyazi_container: {
        marginTop: 100,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
    },
    logoyazi: {
        width: 194,
        height: 50,
        resizeMode: "contain"
    },
    imputs: {
        marginTop: 20,
        marginHorizontal: 10,
    },
    şifre: {
        marginHorizontal: 10,
        alignItems: "flex-end",
    },
    giriş: {
        marginTop: 20,
    },
    kayıtol: {
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: 10,
        marginTop: 20,
    },
    ppcontainer: {
        flexDirection: "row",
    },
    ppfoto: {
        width: 150,
        height: 100,
        resizeMode: "contain",
        marginLeft: -2,
    },
    ppinput_container: {
        flex: 1,
        alignItems: "flex-start",
        borderColor: "#E0DDDD",
        backgroundColor: "#E8E6E6",
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 5,
        marginVertical: 10,
        marginRight: 10,
    },
    ppinput: {
        backgroundColor: "#E8E6E6",
        borderRadius: 8,
        color: "black",
        padding: Platform.OS === "android" ? 4 : 8,
    },
});