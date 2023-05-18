import { social } from "../../utils/api"
import "./footer.scss"

export default function Footer() {
    return (
        <footer>
            <div className="footer-left">
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
            </div>
            <div className="footer-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-right">
                <h3>Keep In Touch</h3>
                <p>Address: 24A Kingston St, Los Vegas NC 28202, USA.</p>
                <p>Mail: support@helio.com</p>
                <p>Phone: (+22) 123 - 4567 - 900</p>
            </div>
        </footer>
    )
}