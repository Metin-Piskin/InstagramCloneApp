import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        paddingVertical: 10,
        flexDirection: "row",
        backgroundColor: "#fff",
    },
    story: {
        width: 68,
        marginHorizontal: 8,
        left: 10,
    },
    cover: {
        width: 57,
        height: 57,
        borderRadius: 28.5,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,
    },
    stavatar: {
        width: 52,
        height: 52,
        borderRadius: 52,
        borderWidth: 3,
        borderColor: "#fff",
    },
    den: {
        borderWidth: 3,
        borderColor: "#DCDCDC",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        borderRadius: 28.5,
    },
    name: {
        marginLeft: -10,
        textAlign: "center",
    }
});