import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        paddingVertical: 10,
        flexDirection: "row",
        backgroundColor: "#fff",
    },
    story: {
        width: 67,
        marginHorizontal: 8,
        marginLeft: 20,
        flex: 1,
    },
    cover: {
        width: 83,
        height: 83,
        borderRadius: 41.5,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,
    },
    stavatar: {
        width: 78,
        height: 78,
        borderRadius: 78,
        borderWidth: 3,
        borderColor: "#fff",
    },
    follow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 25,
    },
    text: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 15,
    },
    followText: {
        fontSize: 15,
        color: "#000",
        fontWeight: "bold",
    },
});