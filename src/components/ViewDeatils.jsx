import React, { useState } from 'react';
import Form from './Form';

const ProductsCard = ({ heading, title, image }) => {
  const [showForm, setShowForm] = useState(false);

  const handleViewDetails = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="product-card">
      <img src={image} alt={heading} className="product-image" />
      <h3>{heading}</h3>
      <p>{title}</p>
      <button onClick={handleViewDetails}>View Details</button>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseForm}>
              &times;
            </span>
            <Form />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsCard;
