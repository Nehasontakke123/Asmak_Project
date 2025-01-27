import React, { useState } from 'react';
import Form from './Form';
import '../assets/css/Products.css';

const ProductsCard = ({ heading, title, image }) => {
  const [showForm, setShowForm] = useState(false);

  const handleViewDetails = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className='products_card'>
        <img src={image} alt={heading} />
        <h4>{heading}</h4>
        <p>{title}</p>
        <button onClick={handleViewDetails}>View Details</button>
      </div>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseForm}>&times;</span>
            <Form />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsCard;

