import { useState } from "react"

const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex p-5 w-[32rem] gap-x-1 rounded-lg">
                    <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="text-gray-900 text-sm rounded-lg block w-96 p-2.5 dark:bg-gray-700 dark:text-white outline-none" placeholder="Update Todo" />
                    <button className="bg-gray-700  rounded-lg" type="submit">Update Task</button>
                </div>
            </form>
        </>
    )
}

export default EditTodoForm