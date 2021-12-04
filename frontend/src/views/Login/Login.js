import "./Login.css"
import {Login as LoginFunction} from '../../services/auth.service' 
import { useContext, useEffect, useRef } from "react"
import UserContext from "../../context/user.context"
import { Redirect } from "react-router"


const Login = () => {
    const userRef = useRef(null)
    const passwordRef = useRef(null)
    const {userContext, setUserContext} = useContext(UserContext)

    useEffect(() => {
        if(userContext !== null){
            return(
                <Redirect to="/"/>
            )
        }
    }, [userContext])
    return(
        <section className="login">
            <div className="form-field">
                <span>Username/email</span>
                <input type="text" ref={userRef}/>
            </div>
            <div className="form-field">
                <span>Password</span>
                <input type="password" ref={passwordRef}/>
            </div>
            <button onClick={() => {LoginFunction(userRef.current.value, passwordRef.current.value, setUserContext)}}>Send</button>
        </section>
    )
}

export default Login