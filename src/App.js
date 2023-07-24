import React, { useState } from 'react';
import './App.css';
import image1 from './images/img1.png';
import image2 from './images/img2.png';
import image3 from './images/img3.png';
import image4 from './images/img4.png';
import image5 from './images/img5.png';
import image6 from './images/img6.png';
import smallImage1 from './images/smallimg1.png'
import smallImage2 from './images/smallimg2.png'
import smallImage3 from './images/smallimg3.png'
import smallImage4 from './images/smallimg4.png'
import Carousel from './Carousel'

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

 const smallImages = [
    smallImage1,
    smallImage2,
    smallImage3,
    smallImage4,
    
  ];

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <div className="img1" onClick={() => handleImageClick(image1)}>
        <img src={image1} alt="imagee" /><h3>KOREAN CHILLI CHIKEN NACHOS</h3>
      </div>
      <div className="img2" onClick={() => handleImageClick(image2)}>
        <img src={image2} alt="imagee" /><h3>GREEN PB SMOOTHIE</h3>
      </div>
      <div className="img3" onClick={() => handleImageClick(image3)}>
        <img src={image3} alt="imagee" /><h3>A Family Favourite: Sam’s Sticky Chicken</h3>
      </div>
      <div className="img4" onClick={() => handleImageClick(image4)}>
        <img src={image4} alt="imagee" /><h3>low carb gluten free lasagne</h3>
      </div>
      <div className="img5" onClick={() => handleImageClick(image5)}>
        <img src={image5} alt="imagee" /><h3>mother’s day pancakes</h3>
      </div>
      <div className="img6" onClick={() => handleImageClick(image6)}>
        <img src={image6} alt="imagee" /><h3>Green pb smoothie</h3>
      </div>
        <div className="centered-btn">
        <button>TRY FOR FREE</button>
      </div>
      {selectedImage && (
        <Carousel
          
          smallImages={smallImages}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;
