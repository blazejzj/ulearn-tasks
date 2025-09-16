import { Image, Text, View } from "react-native";
import { Student, Theme } from "../types";
import styles from "./Styles";

export default function StudentID({
    student,
    theme,
}: {
    student: Student;
    theme: Theme;
}) {
    const { id, isActive, role, name, program, expireAt } = student;
    const { primary, secondary } = theme;
    const isAdmin = role === "Admin";

    return (
        <View>
            {!isActive && <Text>Inaktiv</Text>}
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: "https://placehold.co/100/jpg" }}
                        style={[styles.image, { borderColor: secondary }]}
                    />
                    <View
                        style={[styles.roleTag, { backgroundColor: secondary }]}
                    >
                        <Text style={styles.roleText}>{role}</Text>
                    </View>
                </View>
                <Text style={[styles.title, { color: primary }]}>
                    STUDENT ID
                </Text>
                <Text style={styles.name}>{name}</Text>

                <View style={styles.infoBox}>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Studentnr:</Text>
                        <Text style={styles.value}>{id}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Program:</Text>
                        <Text style={styles.value}>{program}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Gyldig til:</Text>
                        <Text
                            style={[
                                styles.value,
                                isAdmin && styles.adminText,
                                { fontWeight: isActive ? "bold" : "normal" },
                            ]}
                        >
                            {expireAt}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.barcode} />
                <Text style={styles.idText}>ID: {id}</Text>
            </View>
        </View>
    );
}
