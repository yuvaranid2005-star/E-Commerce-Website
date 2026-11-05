import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <a href="#Home" className="logo">LUMORA</a>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/Shop">Shop</Link>
                <Link to="/Collection">Collection</Link>
                <Link to="/Contact_us">Contact_us</Link>
            </div>

            <a href="#Shop" className="nav-button">
                Shop Now 
            </a>
        </nav>
    );
}

export default Navbar;