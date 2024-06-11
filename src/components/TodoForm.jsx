import { useState } from "react"

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-x-1">
                    <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="text-gray-900 text-sm rounded-lg block w-96 p-2.5 dark:bg-gray-700 dark:text-white outline-none" placeholder="Add Todo" />
                    <button className="bg-gray-700 px-2.5 rounded-lg" type="submit">Add Todo</button>
                </div>
            </form>
        </>
    )
}

export default TodoForm