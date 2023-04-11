import './Login.css'

const Login = () => {
  return (
    <div className='loginContainer'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo"> Socially! </h3>
                <span className="loginDesc">
                    Let's connect with the friends and the world around you on Socailly!.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' type="email" className="loginInput" />
                    <input placeholder='Password' type="password" className="loginInput" />
                    <button className="loginButton"> Log In </button>
                    <span className="loginForgot"> Forgot Password? </span>
                    <button className="loginRegisterButton">
                        Create a New Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login