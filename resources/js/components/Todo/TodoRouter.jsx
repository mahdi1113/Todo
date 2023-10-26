import { Route, Routes } from "react-router-dom";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import UpdateTodo from "./UpdateTodo";
import store from "../../redux/loginAction";
// import { Provider } from "react-redux";

function TodoRouter() {
    return (
        <Routes>

            <Route path="/" element={ <TodoList /> } />
            <Route path="/create" element={<CreateTodo />} />
            <Route path="/update/:id" element={<UpdateTodo />} />
        </Routes>
    );
}

export default TodoRouter;
