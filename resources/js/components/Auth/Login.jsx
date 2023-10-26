import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../redux/loginAction";

// import Login from "../Auth/Login";

function Login() {
    // const isLoggedIn = useSelector((state) => state.isLoggedIn);

    const dispatch = useDispatch();

    // console.log(isLoggedIn);

    const cursorP = {
        cursor: 'pointer',
      };

    // console.log(isLoggedIn);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [NotF, setNotF] = useState(false);

    let navigate = useNavigate();


    // if(isLoggedIn){
    //     return navigate("/");
    // }

    const handleSubmit = function (e) {
        e.preventDefault();

        axios
            .post("/api/login", {
                email: email,
                password: password,
            })
            .then((res) => {
                const accessToken = res.data.token;
                const user = res.data.user;
                localStorage.setItem("accessToken", accessToken);
                console.log(accessToken,user);
                dispatch(login())
                Swal.fire({
                    title: `${res.data.msg}`,
                    icon: "success",
                    confirmButtonColor: "blue",
                    confirmButtonText: "باشه",
                }).then(() => {
                    // return navigate("/");
                });
            })
            .catch((error) => {
                console.log(error.response);
                error.response.data.errors
                    ? setErrors(error.response.data.errors)
                    : "";
                error.response.status === 401
                    ? setNotF(error.response.data.msg)
                    : "";
            });
    };

    const style = {
        // height: "50vh",
        width: "50vh",
    };

    return (
        <>

            {NotF ? (
                <div className="alert alert-danger w-100" role="alert">
                    {NotF}
                    <i className="bi bi-x" style={cursorP} onClick={() => setNotF(false)}></i>

                </div>


             ) : (
                ""
            )}
            <div className="d-flex justify-content-center align-items-center">
                <form
                    className="border p-4 rounded shadow"
                    onSubmit={handleSubmit}
                >
                    <img
                        src="/picture/login_295128.png"
                        style={style}
                        className="img-fluid"
                        alt="Your Image"
                    />
                    <h2 className="mb-4 text-center mt-3">فرم ورود</h2>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            ایمیل
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            // value={title}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                // setErrors("");
                            }}
                            // required
                        />
                        {errors.email ? (
                            <span className="text-danger font-size-error">
                                {errors.email}
                            </span>
                        ) : (
                            ""
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            رمز عبور
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            // value={title}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                // setErrors("");
                            }}
                            // required
                        />
                        {errors.password ? (
                            <span className="text-danger font-size-error">
                                {errors.password}
                            </span>
                        ) : (
                            ""
                        )}
                    </div>

                    <button type="submit" className="btn btn-primary">
                        ورود
                    </button>
                </form>
            </div>
        </>
    );
}

export default Login;

// import React, { useState } from "react";

// function NotificationComponent() {
//     const [showNotification, setShowNotification] = useState(true);

//     return (
//         <div>
//             {showNotification && (
//                 <div className="notification">
//                     این اطلاعات فقط یکبار نمایش داده می‌شوند.
//                     <button onClick={() => setShowNotification(false)}>
//                         بستن
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }
