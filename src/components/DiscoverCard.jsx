import React from 'react';
import '../assets/css/ProductDiscover.css'

const DiscoverCard = (props) => {
  return (
    <div className='discover-card'>
      <img src={props.image} alt={props.heading} />
      <h4>{props.heading}</h4>
      <p>{props.title}</p>
    </div>
  );
};

export default DiscoverCard;