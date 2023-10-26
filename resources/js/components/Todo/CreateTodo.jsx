import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function CreateTodo() {
    const style = {
        height: "30vh",
    };
    let navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [errors, setErrors] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post("/api/todos/store", {
                title: title,
            })
            .then((res) => {
                Swal.fire({
                    title: `${res.data.msg}`,
                    icon: "success",
                    confirmButtonColor: "blue",
                    confirmButtonText: "باشه",
                }).then( () => {
                    return navigate("/todos");
                });
            })
            .catch((error) => {
                // setErrors(error.response.data.errors);
                if (error.response) {
                    setErrors(error.response.data.errors);
                    console.log(errors);
                }
            });
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                {/* {redir ? <Redirect to="/"></Redirect> : ''} */}
                <form
                    className="border p-4 rounded shadow"
                    onSubmit={handleSubmit}
                >
                    <img
                        src="/picture/20762219_6294768.jpg"
                        style={style}
                        className="img-fluid"
                        alt="Your Image"
                    />
                    <h2 className="mb-4 text-center mt-3">ساخت فعالیت جدید</h2>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            نام فعالیت
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            // value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                                setErrors("");
                            }}
                            // required
                        />
                        {errors.title ? (
                            <span className="text-danger font-size-error">
                                {errors.title[0]}
                            </span>
                        ) : (
                            ""
                        )}
                    </div>
                    <button type="submit" className="btn btn-primary">
                        ایجاد فعالیت
                    </button>
                </form>
            </div>
        </>
    );
}

export default CreateTodo;

// onSubmit={handleSubmit}
