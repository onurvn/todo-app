import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm"
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (todo.length === 0) {
            alert("Please enter todo")
        } else {
            setTodos([...todos,
            {
                id: uuidv4(),
                task: todo,
                completed: false,
                isEditing: false,
            }])
            localStorage.setItem("todos",JSON.stringify());
        }
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center mt-5">
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, index) => (
                    todo.isEditing ? (
                        <EditTodoForm key={index} editTodo={editTask} task={todo} />
                    ) : (
                        < Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                    )
                ))}
            </div>
        </>
    )
}

export default TodoWrapper