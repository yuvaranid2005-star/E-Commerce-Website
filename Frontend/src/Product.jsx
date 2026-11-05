import "./Product.css";
import shirt from "./image/classic_bazar.jpg";
function Product(){
    return(
        <section id="Product" className="product-section">

    <div className="product-heading">
        <p>THE LUMORA EDIT</p>
        <h2>Designed to Be Timeless</h2>
    </div>

    <div className="product-detail">

        <div className="product-detail-image">
            <img
                src={shirt}
                alt="Classic blazer"
            />
        </div>

        <div className="product-detail-content">

            <p className="detail-category">
                WOMEN'S COLLECTION / NEW ARRIVAL
            </p>

            <h2>Classic Blazer</h2>

            <p className="detail-price">₹2,499</p>

            <p className="detail-description">
                A timeless wardrobe essential designed
                for effortless sophistication. Style it
                for work, occasions, or everyday elegance.
            </p>

            <div className="size-section">
                <p>Select Size</p>

                <div className="size-options">
                    <button className="size-btn">S</button>
                    <button className="size-btn active">M</button>
                    <button className="size-btn">L</button>
                    <button className="size-btn">XL</button>
                </div>
            </div>

            <div className="quantity-section">
                <p>Quantity</p>

                <div className="quantity-control">
                    <button>−</button>
                    <span>1</span>
                    <button>+</button>
                </div>
            </div>

            <button className="add-cart-btn">
                ADD TO CART — ₹2,499
            </button>

            <div className="product-benefits">
                <p>✓ Premium-inspired design</p>
                <p>✓ Easy styling for every occasion</p>
                <p>✓ Timeless wardrobe essential</p>
            </div>

        </div>

    </div>

</section>
    );
}
export default Product;