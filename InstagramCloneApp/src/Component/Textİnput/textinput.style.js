import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "#E0DDDD",
        borderRadius: 10,
        marginVertical: 8,
    },
    input: {
        flex: 1,
        backgroundColor: "#E8E6E6",
        borderRadius: 10,
        color: "black",
        padding: Platform.OS === "android" ? 4 : 8,
    },
});