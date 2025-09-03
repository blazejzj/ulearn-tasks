import { useState } from "react";

export default function TodoForm({ addNewTodo }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const isValid = title.trim() !== "" && content.trim() !== "";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid) return;
        addNewTodo({ title: title.trim(), content: content.trim() });
        setTitle("");
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-2">
                <label htmlFor="title" className="font-bold">
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Gym"
                    required
                    className="outline-none focus:ring-2 focus:border-teal-500 ring-teal-500 w-1/2 border-1 border-gray-500 p-3 rounded-md bg-gray-50"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="content" className="font-bold">
                    Content
                </label>
                <textarea
                    name="content"
                    id="content"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    required
                    placeholder="What type of session?"
                    className="outline-none focus:ring-2 focus:border-teal-500  ring-teal-500 h-40 border-1 border-gray-500 p-3 rounded-md bg-gray-50"
                ></textarea>
            </div>
            <button
                className="cursor-pointer self-end px-15 py-2 rounded-md bg-teal-500 text-white font-bold text-2xl"
                disabled={!isValid}
            >
                Add
            </button>
        </form>
    );
}
