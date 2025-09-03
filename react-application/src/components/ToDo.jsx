export default function ToDo({ completeToDo, title, content }) {
    return (
        <article className="flex gap-8 flex-col p-8 w-100 min-w-80 shadow-md shadow-teal-100 ">
            <div className="flex flex-col gap-2">
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="text-gray-700">{content}</p>
            </div>
            <button
                className="mt-auto self-end cursor-pointer px-5 py-1 rounded-md bg-teal-500 text-white font-bold text-md"
                onClick={completeToDo}
            >
                Complete
            </button>
        </article>
    );
}
