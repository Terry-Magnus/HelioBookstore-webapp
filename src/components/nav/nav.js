import { useState } from "react"
import "./nav.scss"
import { NavLink } from "react-router-dom"
import { SecondaryBtn } from "../buttons/custom-buttons"
import { logOut } from "../../firebase/firebase.utils"
import { Dropdown } from "react-bootstrap"

export const Logo = () => {
    return (
        <div className="logo">
            <img src={process.env.PUBLIC_URL + "/logo.png"} width={32} alt="logo" />
            <NavLink to="/">HELIO</NavLink>
        </div>
    )
}

const Nav = ({ currentUser }) => {
    const [toggleNav, setToggleNav] = useState(false)

    console.log(currentUser)

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
                    {currentUser === null ?
                        <NavLink role="button" className="secondary-btn" to="/auth">Login</NavLink> :
                        <Dropdown>
                            <Dropdown.Toggle className="secondary-btn" id="dropdown-basic">
                                User
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    }
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