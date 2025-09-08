import React, { useEffect, useState } from "react";

const images = [
  "/images/carousel/image1.jpg",
  "/images/carousel/image2.jpg",
  "/images/carousel/image3.jpg"
];

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex(i => (i + 1) % images.length);
  }
  function prev() {
    setIndex(i => (i - 1 + images.length) % images.length);
  }

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, []);

  if (images.length === 0) return null;

  return (
    <div className="carousel">
      <button className="carousel-btn prev" onClick={prev} aria-label="Previous slide">‹</button>
      <img src={images[index]} alt={`Slide ${index + 1}`} className="carousel-img" />
      <button className="carousel-btn next" onClick={next} aria-label="Next slide">›</button>
      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;