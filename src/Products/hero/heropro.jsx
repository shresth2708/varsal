import React from 'react';
import './heropro.css';

const ProductHero = () => {
  const products = [
    {
      id: 1,
      name: "Pain Relief Tablets",
      image: "pain-relief.jpg",
      description: "Fast-acting pain relief medication",
      usage: "Take 1 tablet every 6 hours as needed",
      category: "Medicine"
    },
    {
      id: 2,
      name: "Vitamin C Supplements",
      image: "vitamin-c.jpg",
      description: "Immune system boost",
      usage: "One tablet daily with meals",
      category: "Supplements"
    },
    {
      id: 3,
      name: "First Aid Kit",
      image: "first-aid.jpg",
      description: "Complete emergency care kit",
      usage: "For emergency medical care",
      category: "Healthcare"
    },
    // Add more products as needed
  ];

  return (
    <div className="products-page">
      <div className="products-hero">
        <div className="hero-content">
          <h1>Our Healthcare Products</h1>
          <p>
            Discover our comprehensive range of pharmaceutical products, 
            from essential medicines to wellness supplements. We ensure 
            the highest quality standards and authenticity in every product.
          </p>
        </div>
        <div className="hero-image">
          <img src="/products-collage.jpg" alt="Product Collection" />
        </div>
      </div>

      <div className="products-grid">
        <h2>Featured Products</h2>
        <div className="products-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="description">{product.description}</p>
              <div className="usage-info">
                <h4>Usage:</h4>
                <p>{product.usage}</p>
              </div>
              <span className="category-tag">{product.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductHero;