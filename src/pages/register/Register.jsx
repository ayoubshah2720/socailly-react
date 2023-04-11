import './Register.css'

const Register = () => {
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
                    <input placeholder='User Name' type="text" className="loginInput" />
                    <input placeholder='Email' type="email" className="loginInput" />
                    <input placeholder='Password' type="password" className="loginInput" />
                    <input placeholder='Password Again' type="password" className="loginInput" />
                    <button className="loginButton"> Sign Up </button>
                    {/* <span className="loginForgot"> Forgot Password? </span> */}
                    <button className="loginRegisterButton">
                        Login into Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register