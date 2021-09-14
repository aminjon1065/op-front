import React, {useState} from 'react';
import axios from "axios";
import {API_URL} from "../../../VARIABLE";

const Reg = () => {
    const [img, setImg] = useState(null)

    const handleFile = (e) => {
        let file = e.target.files[0]
        setImg(file)
    }
    const handleUpload = (e) => {
        e.preventDefault()
        let file = img
        let formData = new FormData();
        formData.append("avatar", file)
        formData.append("name", "Aminjon")
        formData.append("email", "test1@test.com")
        formData.append("password", "11111111")

        axios({
            url: `${API_URL}/register`,
            method: "POST",
            header: {'Content-Type': 'multipart/form-data'},
            data: formData
        }).then((res) => {
            return res
        })
        console.log(img)
    }
    return (
        <>
            <form>
                <input type="file" name="img" onChange={handleFile}/>
                <br/>
                <button className="btn btn-primary" type="submit" onClick={handleUpload}>Submit</button>
            </form>

            <img src={img} alt="img"/>

        </>
    );
};

export default Reg;