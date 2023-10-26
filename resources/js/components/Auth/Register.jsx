import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    let navigate = useNavigate();
    const handleSubmit = function (e) {
        e.preventDefault();

        axios
            .post("/api/register", {
                name: name,
                email: email,
                password: password,
                password_confirmation: confirmPassword,
            })
            .then((res) => {
                // const accessToken = response.data.token;
                // localStorage.setItem('accessToken',accessToken);
                // console.log(accessToken);
                Swal.fire({
                    title: `${res.data.msg}`,
                    icon: "success",
                    confirmButtonColor: "blue",
                    confirmButtonText: "باشه",
                }).then(() => {
                    return navigate("/");
                });
            })
            .catch((error) => {
                setErrors(error.response.data.errors);
                console.log(error.response);
            });
    };

    const style = {
        // height: "50vh",
        width: "50vh",
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <form
                    className="border p-4 rounded shadow"
                    onSubmit={handleSubmit}
                >
                    <img
                        src="/picture/user_166260.png"
                        style={style}
                        className="img-fluid"
                        alt="Your Image"
                    />
                    <h2 className="mb-4 text-center mt-3">فرم ثبت نام</h2>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            نام
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            // value={title}
                            onChange={(e) => {
                                setName(e.target.value);
                                // setErrors("");
                            }}
                            // required
                        />
                        {errors.name ? (
                            <span className="text-danger font-size-error">
                                {errors.name}
                            </span>
                        ) : (
                            ""
                        )}
                    </div>

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

                    <div className="mb-3">
                        <label
                            htmlFor="password_confirmation"
                            className="form-label"
                        >
                            تکرار رمز عبور
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password_confirmation"
                            name="password_confirmation"
                            // value={title}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                // setErrors("");
                            }}
                            // required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        ثبت نام
                    </button>
                </form>
            </div>
        </>
    );
}

export default Register;
