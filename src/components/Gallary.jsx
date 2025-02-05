import React from 'react';
import '../assets/css/Gallery.css';

// Import images
import img1 from '../assets/images/img1_files/GallaryImg1.png';
import img2 from '../assets/images/img1_files/Gallaryimage2.png';
import img3 from '../assets/images/img1_files/Gallaryimage3.png';
import img4 from '../assets/images/img1_files/Gallaryimage4.png';
import img5 from '../assets/images/img1_files/Gallaryimage5.png';
import img6 from '../assets/images/img1_files/Gallaryimage6.png';
import img7 from '../assets/images/img1_files/Gallaryimage7.png';
import img8 from '../assets/images/img1_files/Gallaryimage8.png';
import img9 from '../assets/images/img1_files/product-one-Cm_eG1HT.png';

const Gallery = () => {
  // Array of images with alt text
  const images = [
    { id: 1, src: img1},
    { id: 2, src: img2},
    { id: 3, src: img3},
    { id: 4, src: img4},
    { id: 5, src: img5},
    { id: 6, src: img6},
    { id: 7, src: img7},
    { id: 8, src: img8},
    { id: 9, src: img9},
  ];

  return (
    <div className="gallery-section">
      <h1 className="gallery-title">Our Gallery</h1>
      <div className="gallery-container">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
            <p className="gallery-text">{image.alt}</p> {/* Image name below */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

