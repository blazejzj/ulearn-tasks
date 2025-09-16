import { Dimensions, Text, View } from "react-native";
import { Theme } from "../types";
import styles from "./Styles";

export type CardProps = {
    children: React.ReactNode;
    theme: Theme;
    title?: string;
};

export default function Card({ children, theme, title }: CardProps) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View
                    style={[styles.header, { backgroundColor: theme.primary }]}
                >
                    <Text style={styles.headerText}>{title}</Text>
                </View>
                {children}
            </View>
        </View>
    );
}

const { width } = Dimensions.get("window");
const cardWidth = width * 0.9;
