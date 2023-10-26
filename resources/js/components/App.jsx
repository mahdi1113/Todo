import ReactDOM from "react-dom";
import React from "react";
// import PostList from "./Post/PostList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../index.css";
import { Provider } from "react-redux";

/* اضافه کردن فونت IRANSans از طریق CDN */

import Header from "./Header/Header";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import TodoRouter from "./Todo/TodoRouter";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import store from "../redux/loginAction";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
            <div className="container mt-5">
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/posts" element={<PostList />} /> */}
                    {/* <Provider store={store}> */}
                    <Route
                        path="/todos/*"
                        element={
                            <Provider store={store}>
                                {" "}
                                <TodoRouter />{" "}
                            </Provider>
                        }
                    />
                    {/* </Provider> */}
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/login"
                        element={
                            <Provider store={store}>
                                {" "}
                                <Login />{" "}
                            </Provider>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
