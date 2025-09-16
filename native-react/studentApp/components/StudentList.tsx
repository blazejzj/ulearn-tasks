import { ScrollView } from "react-native";
import { Student, Theme } from "../types";
import Card from "./Card";
import StudentID from "./StudentID";

type StudentListProps = {
    students: Student[];
    theme: Theme;
};

export default function StudentList(props: StudentListProps) {
    const { students, theme } = props;
    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: theme.background }}
            contentContainerStyle={{ gap: 25 }}
        >
            {students.map((student) => (
                <Card key={student.id} theme={theme} title={student.name}>
                    <StudentID student={student} theme={theme} />
                </Card>
            ))}
        </ScrollView>
    );
}
