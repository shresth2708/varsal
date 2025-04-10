import React from 'react';
import './gallery.css';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: "store-front.jpg",
      title: "Modern Pharmacy Store",
      description: "State-of-the-art facility with comprehensive healthcare solutions"
    },
    {
      id: 2,
      image: "consultation.jpg",
      title: "Professional Consultation",
      description: "Expert pharmacists providing personalized care"
    },
    {
      id: 3,
      image: "lab.jpg",
      title: "Advanced Laboratory",
      description: "Quality testing and medication management"
    },
    {
      id: 4,
      image: "products.jpg",
      title: "Healthcare Products",
      description: "Wide range of medicines and wellness products"
    }
  ];

  return (
    <section className="gallery-section">
      <h2>Our Facility & Services</h2>
      <div className="gallery-container">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <div className="gallery-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="gallery-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;