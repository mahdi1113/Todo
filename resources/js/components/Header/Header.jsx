import { Link } from "react-router-dom";
import store, { login, logout } from "../../redux/loginAction";
import { useSelector, useDispatch, Provider } from "react-redux";
import Logout from "../Auth/Logout";
import { useEffect } from "react";
const Header = () => {
    // const getLog = function () {
    //     const isLoggedIn = useSelector((state) => state.isLoggedIn);
    //     console.log(isLoggedIn);
    //     const dispatch = useDispatch();
    // };

    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const dispatch = useDispatch();

    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container-fluid">
        //         <a href="#" className="navbar-brand">WebProg.io</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <Link to="/posts"> Posts </Link>
        //                     <i class="bi bi-bank"></i>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container">
                <a className="navbar-brand" href="#">
                    MME
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                {" "}
                                خانه{" "}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/todos">
                                {" "}
                                لیست کارها{" "}
                            </Link>
                        </li>
                        {isLoggedIn === false ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        {" "}
                                        ورود{" "}
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">
                                        {" "}
                                        ثبت نام{" "}
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <Provider store={store}>
                                <Logout logout={logout} dispatch={dispatch} />
                            </Provider>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
