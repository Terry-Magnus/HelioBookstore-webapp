import { useState } from "react"
import { social } from "../../utils/api"
import "./nav.scss"
import { NavLink } from "react-router-dom"

const Nav = () => {
    const [toggleNav, setToggleNav] = useState(false)

    const showMobileNav = () => {
        setToggleNav(!toggleNav)
    }

    return (
        <>
            <nav>
                <div className="logo">
                    <img src={process.env.PUBLIC_URL + "/logo.png"} width={32} alt="logo" />
                    <span>Helio</span>
                </div>
                <div className="social">
                    {social.map((link, index) => {
                        return (
                            <button key={index}>
                                <img src={require(`../images/${link}.png`)} alt={link} />
                            </button>
                        )
                    })}
                </div>
                <div className="nav-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink>About</NavLink>
                    <NavLink>Contact</NavLink>
                </div>

                <button className={`hamburger ${toggleNav ? "active" : null}`} onClick={showMobileNav}>
                    <div className="bar"></div>
                </button>
            </nav>


            <div className={`mobile-nav ${toggleNav ? "active" : null}`}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </>
    )
}

export default Nav