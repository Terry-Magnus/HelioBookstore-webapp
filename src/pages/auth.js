import Login from "../components/userauth/signin"
import Signup from "../components/userauth/signup"

const Auth = () => {
    return (
        <div className="auth-container">
            <div className="signin"><Login /></div>
            <div className="signup"><Signup /></div>
        </div>
    )
}

export default Auth