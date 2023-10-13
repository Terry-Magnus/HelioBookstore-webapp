import { useState } from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { SecondaryBtn } from "../buttons/custom-buttons"
import CartIcon from "../cart-icon/cart-icon"
import { logOut } from "../../firebase/firebase.utils"
import { Dropdown } from "react-bootstrap"
import "./nav.scss"
import Cart from "../cart/cart"

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

    const showMobileNav = () => {
        setToggleNav(!toggleNav)
    }
    const isCartHidden = useSelector((state) => state.cart.hidden)

    return (
        <>
            <nav>
                <Logo />
                <div className="nav-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink>About</NavLink>
                    <NavLink>Contact</NavLink>
                    <CartIcon />
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
                {isCartHidden ? null : <Cart />}
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