import { redirect } from "react-router-dom"
import "./notfound.scss"
import { BsArrowLeft } from "react-icons/bs";

const NotFound = () => {
    return (
        <>

            <div className="error-msg">
                <h1>404</h1>
                <h3>Page Not Found!!!!</h3>
                <p>The page you are searching for does not exist.</p>
                <button onClick={redirect("/")}><BsArrowLeft />Go back to home</button>
                <p><blockquote>Help is always available at Hogwarts to those who need it</blockquote> ~ <i>Albus Dumbledore</i><br />Harry Potter</p>
            </div>
        </>
    )
}

export default NotFound;