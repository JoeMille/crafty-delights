import React from "react";

const FeaturedProducts: React.FC = () => (
    <section className="featured-products-section">
        <h2>Featured Products</h2>
        <div className="product-grid">
            <div className="product-card">
                <h3>Crocheted Bags</h3>
                <p>Natural, handmade tote bags</p>
            </div>
            <div className="product-card">
                <h3>Woven Coasters</h3>
                <p>Hand woven, durable and stylish drink matts</p>
            </div>
            <div className="product-card">
                <h3>Artisanal Jewellery</h3>
                <p>Sustainably sourced materials</p>
            </div>
        </div>
    </section>
);

export default FeaturedProducts;