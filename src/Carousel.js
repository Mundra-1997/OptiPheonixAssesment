import React, { useState, useRef } from 'react';
import './Carousel.css';

const Carousel = ({  smallImages, closeModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const slideWidth = 100;
  let startPosX = 0;
  let currentPosX = 0;

  const handleMouseDown = (e) => {
    e.preventDefault();
    startPosX = e.clientX;
    currentPosX = currentIndex * slideWidth;
    carouselRef.current.style.transition = 'none';
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    const offsetX = e.clientX - startPosX;
    carouselRef.current.style.transform = `translateX(${currentPosX + offsetX}px)`;
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'default';

    const offsetX = currentPosX - currentIndex * slideWidth;
    if (Math.abs(offsetX) > slideWidth / 3) {
      if (offsetX > 0) {
        setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
      } else {
        setCurrentIndex((prevIndex) => Math.min(smallImages.length - 1, prevIndex + 1));
      }
    }

    carouselRef.current.style.transition = 'transform 0.3s ease-in-out';
    carouselRef.current.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Join now to unlock our 7-day meal plans and thousands of recipes</h2>
        <button onClick={closeModal} className="close-btn">Close</button>
        <h3>Start your 7-day Free Trial today</h3>
        <div className="carousel-container">
          <div
            ref={carouselRef}
            className="carousel-slider"
            style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
            onMouseDown={handleMouseDown}
          >
            {smallImages.map((smallImage, index) => (
              <img key={index} src={smallImage} alt={`Small Image ${index}`} />
            ))}
          </div>
        </div>
        <button className="try-for-free-btn">TRY FOR FREE</button>
        <p>See all recipes in The Locker when you join</p>
        
      </div>
    </div>
  );
};

export default Carousel;
