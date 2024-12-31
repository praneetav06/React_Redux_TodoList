import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";
export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();
    const clickHandler = (id) => {
        console.log("delete", id);
        dispatch(deleteTodo(id));
    }
    const markAsDoneHandler = (id) => {
        console.log("Marked As Done!", id);
        if (todos.isDone === true) {
            dispatch(markAsDone(id));
        }
    }
    return (
        <>
            <AddForm/>
            <h2>Todo List App</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.task} &nbsp;&nbsp;<button onClick={() => clickHandler(todo.id)}>Delete</button>&nbsp;&nbsp;
                    <button onClick={() => markAsDoneHandler(todo.id)}>Mark As Done</button>
                    </li>
                ))}
            </ul>
        </>
    )
}