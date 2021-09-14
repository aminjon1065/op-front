import axios from "axios";

import {API_URL, REGISTER_SUCCESS} from "../../VARIABLE";

class RegisterClass {
    registerUser(name, email, password, avatar) {
        let formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("avatar", avatar.file);
        return axios({
            method: "post",
            baseURL: `${API_URL}/register`,
            config: {headers: {'Content-Type': 'application/x-www-form-urlencoded'}},
            data: {
                name,
                email,
                password,
                avatar
            }
        }).then((res) => {
            return res
        })
    }

}

export default new RegisterClass();