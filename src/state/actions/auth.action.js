import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS} from "../../VARIABLE";

const authActions = {
    login(data) {
        return {
            type: LOGIN_SUCCESS,
            payload: data
        }
    },

    loginFail(){
      return {
          type:LOGIN_FAIL
      }
    },
    logout() {
        return {
            type: LOGOUT
        }
    },
    registerSuccess(data) {
        return {
            type: REGISTER_SUCCESS,
            payload: data
        }
    },
    registerFail(){
        return {
            type: REGISTER_FAIL
        }
    }

}

export default authActions;