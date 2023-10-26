import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function UpdateTodo(){

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [title,setTitle] = useState("");
    const [errors, setErrors] = useState({});
    let navigate = useNavigate();

    const style = {
        height: "30vh",
    };

    useEffect(() => {
        axios.get(`/api/todos/show/${id}`).then( (res) => {
            console.log(res.data)
            setTitle(res.data.title);
            setLoading(false);
        })
    },[])

    const handleSubmit = function(e){
        e.preventDefault();
        axios.put(`/api/todos/update/${id}`,{
            title: title,
        }).then(res => {
            Swal.fire({
                title: `${res.data.msg}`,
                icon: "success",
                confirmButtonColor: "blue",
                confirmButtonText: "باشه",
            }).then( () => {
                return navigate("/todos");
            });
        }) .catch((error) => {
            setErrors(error.response.data.errors);
            if (error) {
                console.log(error.response);
            }});
    }


    console.log(id);

    if(loading){
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
    }else{
        return(
            <>
                 <div className="d-flex justify-content-center align-items-center">
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
                            value={title}
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
                        آپدیت فعالیت
                    </button>
                </form>
            </div>
            </>
        );
    }

}


export default UpdateTodo;
