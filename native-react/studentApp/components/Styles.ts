import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const cardWidth = width * 0.9;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    card: {
        width: cardWidth,
        backgroundColor: "white",
        borderRadius: 10,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    header: {
        padding: 15,
        alignItems: "center",
    },
    headerText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
    adminText: {
        color: "red",
        fontWeight: "bold",
    },
    content: {
        padding: 20,
        alignItems: "center",
    },
    imageContainer: {
        position: "relative",
        marginBottom: 20,
        alignItems: "center",
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
    },
    roleTag: {
        position: "absolute",
        bottom: 0,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    },
    roleText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 12,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 15,
    },
    infoBox: {
        backgroundColor: "#f9f9f9",
        width: "100%",
        padding: 15,
        borderRadius: 5,
        marginVertical: 10,
    },
    infoRow: {
        position: "relative",
        flexDirection: "row",
        marginBottom: 8,
    },
    label: {
        width: 80,
        fontWeight: "bold",
        fontSize: 14,
    },
    value: {
        flex: 1,
        fontSize: 14,
    },
    footer: {
        padding: 15,
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#eee",
    },
    barcode: {
        height: 30,
        width: "70%",
        backgroundColor: "#333",
        marginBottom: 10,
    },
    idText: {
        fontSize: 12,
        color: "#666",
    },
    containerPressed: {
        backgroundColor: "#f0f0f0",
        opacity: 0.9,
    },
    inactiveContainer: {
        opacity: 0.7,
    },
    inactiveLabel: {
        backgroundColor: "#bb583fff",
    },
});

export default styles;
