import React from 'react';
import '../assets/css/Quality.css';

const QualityCard = (props) => {
  return (
    <div className='quality-card'>
      <img src={props.image} alt={props.heading} />
      <div className="overlay">
        <h4>{props.heading}</h4>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default QualityCard;
