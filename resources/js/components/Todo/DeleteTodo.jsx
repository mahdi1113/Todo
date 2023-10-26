import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function DeleteTodo({ todos , id , setTodos }) {
    const style = { fontSize: "1rem", cursor: "pointer" };
    // const [todos, setTodos] = useState();

    const Delete = function (id) {
        Swal.fire({
            title: "آیا مطمئنی می‌خوای این فعالیت رو حذف کنی؟",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "بله، حذف کن",
            cancelButtonText: "لغو",
        }).then((result) => {
            if (result.isConfirmed) {
                // setLoading(true);
                axios.delete(`api/todos/delete/${id}`).then((res) => {
                    Swal.fire({
                        title: `${res.data.msg}`,
                        icon: "success",
                        confirmButtonColor: "green",
                        confirmButtonText: "ممنون",
                    });
                });
                setTodos(todos.filter((todos) => todos.id !== id));
                // setLoading(false);
            }
        });
    }
    return (
        <>
            <i
                onClick={() => Delete(id)}
                style={style}
                className="bi bi-trash ms-2 text-danger"
            ></i>
        </>
    );
}

export default DeleteTodo;
