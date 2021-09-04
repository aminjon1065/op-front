import axios from "axios";
import {API_URL} from "../../VARIABLE";

class LoginService {
    login(email, password) {
        return axios.post(`${API_URL}/login`, {email, password}).then((response) => {
            if (response.data.access_token) {
                localStorage.setItem('jwt', response.data.access_token)
                return response.data
            }
            return 'error'
        }).catch((err) => {
            return err
        })
    }

    authorization(token) {
        return axios({
            method: "post",
            baseURL: `${API_URL}/me`,
            headers: {Authorization: `Bearer ${token}`},
        }).then((response) => {
            return response.data
        })
    }
}


export default new LoginService();