import { FaRegEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <>
            <div className="flex bg-indigo-400 mt-5 p-4 w-[30rem] rounded-lg">
                <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
                <div className="flex ml-auto gap-x-2 cursor-pointer">
                    <FaRegEdit onClick={() => editTodo(task.id)} />
                    <FaTrashAlt onClick={() => deleteTodo(task.id)} />
                </div>
            </div>
        </>
    )
}

export default Todo