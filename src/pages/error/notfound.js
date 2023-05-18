import { Link } from "react-router-dom"
import "./notfound.scss"

const NotFound = () => {
    return (
        <>
            <div className="error-banner">
                <h1>Page Error</h1>
                <p><blockquote>A small man can cast a very large shadow</blockquote> - <i>Lord Varys - A Song of Ice and Fire</i></p>
            </div>
            <div className="error-msg">
                <h1>404</h1>
                <h3>Page Not Found!!!!</h3>
                <p>The page you are searching for does not exist. <br />Kindly search for some other page or go back to the website's homepage</p>
                <Link to="/">Go back to home</Link>
            </div>
        </>
    )
}

export default NotFound;