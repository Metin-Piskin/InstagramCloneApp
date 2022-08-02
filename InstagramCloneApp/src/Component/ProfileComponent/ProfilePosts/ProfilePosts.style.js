import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
    post: {
        flexDirection: "row",
        marginTop: 1,
        marginBottom: 1,
        marginRight: 1,
    },
    avatar: {
        width: width / 3.03,
        height: width / 3.03,
    },
});