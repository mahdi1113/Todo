import axios from "axios";
import Swal from "sweetalert2";

function StatusTodo({ todo, setTodos, GetTodo , todos}) {
    const style = { fontSize: "1rem", cursor: "pointer" };

    const changeStatus = function (id) {

        axios.post(`api/todos/status/${id}`).then(res => {
            console.log(res);
            Swal.fire({
                title: `${res.data.msg}`,
                icon: "success",
                confirmButtonColor: "blue",
                confirmButtonText: "باشه",
                })
            GetTodo();



        });
    };

    return (
        <>
            {todo.complated ? (
                <i
                    onClick={() => changeStatus(todo.id)}
                    style={style}
                    className="bi bi-check2-circle text-success"
                ></i>
            ) : (
                <i
                    onClick={() => changeStatus(todo.id)}
                    style={style}
                    className="bi bi-x-circle-fill text-warning"
                ></i>
            )}
        </>
    );
}

export default StatusTodo;
