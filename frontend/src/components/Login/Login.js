import "./Login.css"

const Login = () => {
    return(
        <section className="login">
            <div className="form-field">
                <span>Username/email</span>
                <input type="text"/>
            </div>
            <div className="form-field">
                <span>password</span>
                <input type="password"/>
            </div>
            <button>Send</button>
        </section>
    )
}

export default Login