import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import ToDo from "./components/ToDo";

function App() {
    const [toDos, setToDos] = useState([]);

    const addNewTodo = ({ title, content }) => {
        const newTodo = {
            id: crypto.randomUUID(),
            title,
            content,
        };
        console.log(newTodo);
        setToDos((prev) => [...prev, newTodo]);
    };

    const completeToDo = (id) => {
        const newTodos = toDos.filter((todo) => todo.id !== id);
        setToDos(newTodos);
    };

    return (
        <>
            <Header />
            <main className="p-5 flex justify-center flex-col max-w-7xl mx-auto mt-15">
                <TodoForm addNewTodo={addNewTodo} />
                <section className="flex flex-col gap-5">
                    <h2 className="font-extrabold text-2xl">My Todos</h2>
                    <div className="flex gap-5 flex-wrap">
                        {toDos.length > 0 ? (
                            toDos.map((todo) => (
                                <ToDo
                                    key={todo.id}
                                    title={todo.title}
                                    content={todo.content}
                                    completeToDo={() => completeToDo(todo.id)}
                                />
                            ))
                        ) : (
                            <p>No todos!</p>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
}

export default App;
