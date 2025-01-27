import React from 'react';
import '../assets/css/Global.css'

const GlobalCard = (props) => {
  return (
    <>
   
    <div className="global-card">
        
      <img src={props.image} alt={props.heading} />
      <h4>{props.heading}</h4>
    </div>
    </>
  );
};

export default GlobalCard;
