import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/loginAction";
import { useDispatch } from "react-redux";
// import { logout } from "../../redux/loginAction";

function Logout() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const yourToken = localStorage.getItem("accessToken");
    console.log(yourToken);
    const logoutUser = function(e){
        e.preventDefault();
        axios
        .get("/api/logout/" , {
            headers: {
                Authorization: `Bearer ${yourToken}`,
                Accept: "application/json",
            },
        })
        .then((res) => {
            dispatch(logout())
            return navigate("/");
            console.log(res.data);
        })
        .catch((error) => {
            console.log(e.response);
        });

    }


    return (
        <li className="nav-item">
            <Link className="nav-link" onClick={(e) => logoutUser(e)}>
                خروج
            </Link>
        </li>
    );
}

export default Logout;
