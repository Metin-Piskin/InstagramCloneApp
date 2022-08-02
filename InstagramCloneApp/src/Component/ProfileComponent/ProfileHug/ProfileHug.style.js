import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        marginHorizontal: 15,
        backgroundColor: "#fff",
    },
    text_container: {},
    name: {
        fontWeight: "bold",
        color: "#000",
    },
    explanation: {
        color: "#000",
    },
    button_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
    },
    edit_button: {
        backgroundColor: "#EBEBEB",
        paddingHorizontal: 45,
        paddingVertical: 5,
        borderRadius: 10,
    },
    library_button: {
        backgroundColor: "#EBEBEB",
        paddingHorizontal: 45,
        paddingVertical: 5,
        borderRadius: 10,
    },
    drop_button: {
        backgroundColor: "#EBEBEB",
        paddingHorizontal: 10,
        paddingVertical: 5,
        justifyContent: "center",
        borderRadius: 10,
    },
    button_text: {
        color: "#000",
        fontWeight: "bold",
    },
});