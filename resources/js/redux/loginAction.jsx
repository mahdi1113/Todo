import { createStore } from "redux";

const LOGIN = 'LOG_IN';
const LOGOUT = 'LOG_OUT';

export const login = function(){
    return {
        type: LOGIN
    }
}

export const logout = function(){
    return {
        type: LOGOUT
    }
}

const initialState = {
    isLoggedIn: false
};





const authReducer = function(state = initialState , action){
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                isLoggedIn: true
            }
        case LOGOUT:
            return{
                ...state,
                isLoggedIn: false
            }
        default:
            return state
    }

}


const store = createStore(authReducer);

export default store;

// function loginAction(){
//     return(
//         <h1>hi this page is login</h1>
//     )
// }

// export default loginAction;
