import "./Home.css";
import image from "./image/collection.avif";

function Home() {
    return (
        <section id="Home" className="home">

            <div className="hero-content">
                <p className="subtitle">
                    NEW COLLECTION — 2026
                </p>

                <h1>
                    Elevate Your Style,
                    <br />
                    Embrace Elegance.
                </h1>

                <p className="hero-description">
                    Discover timeless fashion pieces crafted
                    for the modern woman.
                </p>

                <a href="#Product" className="hero-btn">
                    Explore Collection 
                </a>

                <p className="hero-note">
                    TIMELESS DESIGN. EFFORTLESS STYLE.
                </p>
            </div>

            <div className="hero-image">
                <img
                    src={image}
                    alt="Lumora fashion collection"
                />

                <div className="image-label">
                    <span>THE NEW EDIT</span>
                    <p>Elegance in every detail.</p>
                </div>
            </div>

        </section>
    );
}

export default Home;