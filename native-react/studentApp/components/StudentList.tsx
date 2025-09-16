import { FlatList, ScrollView } from "react-native";
import { Student, Theme } from "../types";
import Card from "./Card";
import StudentID from "./StudentID";

type StudentListProps = {
    students: Student[];
    theme: Theme;
};

export default function StudentList(props: StudentListProps) {
    const { students, theme } = props;

    const onPressFunction = (id: string) => {
        console.log(`id pressed: ${id}`);
    };
    return (
        // <ScrollView
        //     style={{ flex: 1, backgroundColor: theme.background }}
        //     contentContainerStyle={{ gap: 25 }}
        // >
        //     {students.map((student) => (
        //         <Card key={student.id} theme={theme} title={student.name}>
        //             <StudentID student={student} theme={theme} />
        //         </Card>
        //     ))}
        // </ScrollView>

        <FlatList
            data={students}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Card key={item.id} theme={theme} title={item.name}>
                    <StudentID
                        onPress={onPressFunction}
                        student={item}
                        theme={theme}
                    />
                </Card>
            )}
            contentContainerStyle={{ gap: 25 }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{ flex: 1 }}
        />
    );
}
