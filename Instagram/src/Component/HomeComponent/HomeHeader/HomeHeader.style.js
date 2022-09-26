import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header: {
        flexDirection: "row",
        height: 44,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingTop: 10,
        backgroundColor: "#fff",
        paddingBottom: 8,
    },
    actions: {
        flexDirection: "row",
    },
    icons: {
        marginLeft: 20,
    },
    dot: {
        backgroundColor: "#FE3650",
        width: 8,
        height: 8,
        borderRadius: 10,
    },
    dotContainer: {
        zIndex: 2,
        width: 11,
        height: 11,
        backgroundColor: "#fff",
        borderRadius: 13,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        right: 0,
    },
    unreadBadge: {
        backgroundColor: "#FE3650",
        position: "absolute",
        left: 13,
        bottom: 14,
        width: 17,
        height: 17,
        borderRadius: 17,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
    },
    unreadBadgeText: {
        fontSize: 13,
        color: "#fff",
        fontWeight: "600",
    }
});