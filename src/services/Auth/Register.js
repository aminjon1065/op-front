import axios from "axios";

import {API_URL} from "../../VARIABLE";

class RegisterClass {
    registerUser(formData) {
        return axios({
            url: `${API_URL}/register`,
            method: "POST",
            header: {'Content-Type': 'multipart/form-data'},
            data: formData
        }).then((res) => {
            return res
        }).catch((err) => {
            return err
        })
    }

}

export default new RegisterClass();