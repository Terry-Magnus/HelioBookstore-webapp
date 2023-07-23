import { Col, Row, NavLink } from "react-bootstrap"
import { Logo } from "../nav/nav"
import "./footer.scss"
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"

export default function Footer() {
    return (
        <footer>
            <Row>
                <Col className="social">
                    <Logo />
                    <p>We're here to serve you a plethora of books of your choosing.</p>
                    <BsFacebook />
                    <BsTwitter />
                    <BsInstagram />
                    <BsLinkedin />
                </Col>
                <Col>
                    <h5>Support</h5>
                    <NavLink>About</NavLink>
                    <NavLink>Contact</NavLink>
                    <NavLink>Services</NavLink>
                </Col>
                <Col>
                    <p>Address: 24A Kingston St, Los Vegas NC 28202, USA.</p>
                    <p>Mail: support@helio.com</p>
                    <p>Phone: (+22) 123 - 4567 - 900</p>
                </Col>
            </Row>

        </footer>
    )
}
