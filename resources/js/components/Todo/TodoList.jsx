import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteTodo from "./DeleteTodo";
import StatusTodo from "./StatusTodo";
import { login , logout } from "../../redux/loginAction";
import { useDispatch, useSelector } from "react-redux";



function TodoList() {
    const isLoggedIn =  useSelector(state => state.isLoggedIn);
    console.log(isLoggedIn);
    const dispatch = useDispatch();


    console.log(isLoggedIn);
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [vUnauthorized, setvUnauthorized] = useState(true);
    const style = { fontSize: "1rem", cursor: "pointer" };

    const yourToken = localStorage.getItem("accessToken");
    // console.log(isLoggedIn);

    useEffect(() => {
        GetTodo();
    }, []);

    const GetTodo = function () {
        axios
            .get("/api/todos/", {
                headers: {
                    Authorization: `Bearer ${yourToken}`,
                    Accept: "application/json",
                },
            })
            .then((res) => {
                setLoading(false);
                console.log(res.data);
                // setvUnauthorized(false);
                setTodos(res.data);
                // console.log(res);
            })
            .catch((error) => {
                // console.log(error);
                error.response.status === 401
                    // ? (setvUnauthorized(true), setLoading(false))
                    // : "";
            });
    };

    if (loading) {
        return (
            <>

                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div
                        className="spinner-border text-primary"
                        role="status"
                    ></div>
                </div>
            </>
        );
    } else {
        // if (vUnauthorized) {
        //     return (
        //         <>
        //             <h1>
        //                 برای مشاهده این صفحه ابتدا باید ثبت نام کنید با تشکر
        //             </h1>
        //         </>
        //     );
        // } else {
            return (
                <>
                {/* <h3>Counter : {isLoggedIn}</h3>
            <button className="btn btn-primary me-2" onClick={() => dispatch(login())}>Increase</button>
            <button className="btn btn-warning me-2" onClick={() => dispatch(logout())}>Decrease</button>
                 {isLoggedIn ? <h1>hi</h1> : <h1>by</h1>} */}
                    <div className="container mt-5">
                        <Link
                            to="/todos/create"
                            className="btn btn-success mb-3"
                        >
                            ایجاد فعالیت جدید
                            <i class="bi bi-plus"></i>
                        </Link>
                        <div class="row">
                            {todos.map((todo, key) => {
                                return (
                                    <div class="col-md-4 mb-3" key={todo.id}>
                                        <div className="card custom-card">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {todo.title}
                                                </h5>
                                                <StatusTodo
                                                    todos={todos}
                                                    todo={todo}
                                                    setTodos={setTodos}
                                                    GetTodo={GetTodo}
                                                />
                                                <DeleteTodo
                                                    todos={todos}
                                                    id={todo.id}
                                                    setTodos={setTodos}
                                                />
                                                <Link
                                                    to={`/todos/update/${todo.id}`}
                                                    style={style}
                                                    className="bi bi-pencil-square ms-2 text-info"
                                                ></Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </>
            );
        }
    }
// }

export default TodoList;

// AuthenticatedRoute.js
// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// const AuthenticatedRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = /* Check if user is authenticated, e.g., using a global state or API call */ false;

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };

// export default AuthenticatedRoute;
