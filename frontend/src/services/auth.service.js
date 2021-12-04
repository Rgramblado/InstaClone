import axios from "axios"

const URL = "http://localhost:5000"

export const Login = (username, password, setUserContext) => {
    axios.post(URL + "/login", {
        headers: {
            "content-type": "application/json"
        },
        data: {
            username: username,
            password: password
        }
    }).then((res) => {
        axios.defaults.headers['authorization'] = res.data.token
        console.log(res)
        setUserContext({
            username: res.data.username,
            email: res.data.email,
            profileImage: res.data.profileImage,
            token: res.data.token,
        })
    }).catch((err) => {
        console.log(err.message)
    })
}

export const Me = async () => {
    return await axios.get(URL + "/me")
}