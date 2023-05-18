import banner from "../../components/images/hero-banner.png"
import { Link } from "react-router-dom"

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-text">
                <i>Welcome to Helio Bookstore</i>
                <h1>Books are uniquely portable magic</h1>
                <p> "Discover your next great read at our online bookstore.<br />
                    Browse our collection today and find your next literary adventure!"
                </p>
                <div className="links">
                    <Link to="/signup">Signup</Link>
                    <Link to="/">Login</Link>
                </div>


            </div>
            <div className="hero-banner">
                <img src={banner} alt="hero-banner" />
            </div>
        </div>
    )
}