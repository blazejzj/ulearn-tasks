import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import styles from "./Styles";

const student = {
    id: "123456",
    name: "Ola Nordmann",
    program: "Informatikk",
    expireAt: "31.07.2026",
    role: "Student",
    isActive: true,
};

const colors = {
    primary: "#002266",
    secondary: "#004499",
    text: "#333333",
    background: "#ffffff",
};

export default function StudentIDCardExpanded() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View
                    style={[styles.header, { backgroundColor: colors.primary }]}
                >
                    <Text style={styles.headerText}>HIOF</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: "https://placehold.co/100/jpg" }}
                            style={[
                                styles.image,
                                { borderColor: colors.secondary },
                            ]}
                        />
                        <View
                            style={[
                                styles.roleTag,
                                { backgroundColor: colors.secondary },
                            ]}
                        >
                            <Text style={styles.roleText}>{student.role}</Text>
                        </View>
                    </View>
                    <Text style={[styles.title, { color: colors.primary }]}>
                        STUDENT ID
                    </Text>
                    <Text style={styles.name}>{student.name}</Text>

                    <View style={styles.infoBox}>
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>Studentnr:</Text>
                            <Text style={styles.value}>{student.id}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>Program:</Text>
                            <Text style={styles.value}>{student.program}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.label}>Gyldig til:</Text>
                            <Text
                                style={[
                                    styles.value,
                                    student.role === "Admin" &&
                                        styles.adminText,
                                    {
                                        fontWeight: student.isActive
                                            ? "bold"
                                            : "normal",
                                    },
                                ]}
                            >
                                {student.expireAt}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.barcode} />
                    <Text style={styles.idText}>ID: {student.id}</Text>
                </View>
            </View>
        </View>
    );
}

const { width } = Dimensions.get("window");
const cardWidth = width * 0.9;
