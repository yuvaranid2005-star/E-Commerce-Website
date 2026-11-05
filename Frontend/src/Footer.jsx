
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-brand">
                    <a href="#Home" className="footer-logo">
                        LUMORA
                    </a>

                    <p>
                        Timeless fashion for the modern woman.
                        Discover your style with elegance.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>EXPLORE</h4>
                    <a href="#Home">Home</a>
                    <a href="#Shop">Shop</a>
                    <a href="#Product">Product</a>
                    <a href="#Contact_us">Contact</a>
                </div>

                <div className="footer-links">
                    <h4>OUR PROMISE</h4>
                    <p>Timeless Design</p>
                    <p>Thoughtful Style</p>
                    <p>Everyday Elegance</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} LUMORA.
                    All rights reserved.
                </p>

                <a href="#Home">Back to top ↑</a>
            </div>
        </footer>
    );
}

export default Footer;
