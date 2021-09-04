import {LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS} from "../../VARIABLE";

const authActions = {
    login(data) {
        return {
            type: LOGIN_SUCCESS,
            payload: data
        }
    },
    logout() {
        return {
            type: LOGOUT
        }
    },
    register(data) {
        return {
            type: REGISTER_SUCCESS,
            payload: data
        }
    }

}

export default authActions;