import { useState } from "react"
import "./nav.scss"
import { NavLink } from "react-router-dom"
import { SecondaryBtn } from "../buttons/custom-buttons"

export const Logo = () => {
    return (
        <div className="logo">
            <img src={process.env.PUBLIC_URL + "/logo.png"} width={32} alt="logo" />
            <NavLink to="/">HELIO</NavLink>
        </div>
    )
}

const Nav = () => {
    const [toggleNav, setToggleNav] = useState(false)

    const showMobileNav = () => {
        setToggleNav(!toggleNav)
    }

    return (
        <>
            <nav>
                <Logo />
                <div className="nav-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink>About</NavLink>
                    <NavLink>Contact</NavLink>
                    <NavLink role="button" className="secondary-btn" to="/login">Login</NavLink>
                </div>

                <button className={`hamburger ${toggleNav ? "active" : ""}`} onClick={showMobileNav}>
                    <div className="bar"></div>
                </button>
            </nav>


            <div className={`mobile-nav ${toggleNav ? "active" : ""}`}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <SecondaryBtn><NavLink role="button" to="/login">Login</NavLink></SecondaryBtn>
            </div>
        </>
    )
}

export default Nav