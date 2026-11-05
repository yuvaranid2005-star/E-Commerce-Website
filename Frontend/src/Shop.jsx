import "./Shop.css";

import jean from "./image/jean.jpeg";
import elegant from "./image/elegant_dress.jpeg";
import bag from "./image/hand_bag.jpeg";
import top from "./image/stylish_top.jpeg";
function Shop() {
    return (
        <section className="shop" id="Shop">
            <div className="shop-heading">
                <p>OUR COLLECTION</p>
                <h2>Shop Our Products</h2>
                <span>Discover your perfect style with LUMORA</span>
            </div>
            <div className="shop-container">

                <div className="product-card">
                    <img src= {elegant} alt="Elegant Dress" />
                    <h3>Elegant Dress</h3>
                    <p>₹1,499</p>
                    <button>Shop Now</button>
                </div>
                 <div className="product-card">
            <img src= {top}alt="Stylish"/>
            <h3>Stylish Top</h3>
            <p>₹899</p>
            <button>Shop Now</button>
        </div>

        <div className="product-card">
            <img src={jean} alt="jean"/>
            <h3>Classic Jeans</h3>
            <p>₹1,199</p>
            <button>Shop Now</button>
        </div>
              <div className="product-card">
            <img src= {bag} alt="Handbag"/>
            <h3>Fashion Handbag</h3>
            <p>₹1,799</p>
            <button>Shop Now</button>
        </div>
            </div>
        </section>

    )
}
export default Shop;