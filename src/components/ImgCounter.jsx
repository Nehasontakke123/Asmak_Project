import React from 'react';
import CounterImg from '../assets/images/img1_files/bannerNew55-CObybNzw.png';
import Counter from './Counter';
import '../assets/css/ImageCount.css'
const ImgCounter = () => {
  const CounterData = [
    {
      id: 1,
      image: CounterImg,
      description: "Responsibly-sourced seafood is the key to the modern, safe and profitable seafood industry.",
    },
  ];

  return (
    <>
      
      {CounterData.map(item => (
  <Counter key={item.id} image={item.image} description={item.description} />
))}
    </>
  );
};

export default ImgCounter;
