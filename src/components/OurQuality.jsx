import React from "react";
import QualityCard from "./QualityCard";
import QualityImg1 from '../assets/images/img1_files/product-one-Cm_eG1HT.png';
import QualityImg2 from '../assets/images/img1_files/qualitynew-CnRWI0ow.jpg';
import QualityImg3 from '../assets/images/img1_files/barracudaModel11-CbJcae_B.png';

const OurQuality = () => {
  const quality = [
    {
      id: 1,
      heading: 'SEAFOOD QUALITY',
      title: 'Sourced with care, delivered with excellence.',
      image: QualityImg1,
    },
    {
      id: 2,
      heading: 'FROZEN FRESHNESS',
      title: 'Ensuring freshness from ocean to plate.',
      image: QualityImg2,
    },
    {
      id: 3,
      heading: 'QUALITY CONTROL',
      title: 'Stringent quality standards in every product.',
      image: QualityImg3,
    },
  ];

  return (
    <>
      <h1>Our Quality</h1>
      <p>
        Consumers today demand high-quality seafood year-round, and we ensure this at every step with sustainable methods aimed at a better tomorrow.
        ASMAK is extremely cautious about hygiene and the meticulous processing of marine products. Every item undergoes strict quality control, so our
        customers enjoy only the finest, whether fresh or frozen. All products from our facility are handled with care and transported under optimal
        conditions to clients across the globe.
      </p>

      <div className="quality-cards">
        {quality.map((val) => (
          <QualityCard
            key={val.id}
            heading={val.heading}
            title={val.title}
            image={val.image}
          />
        ))}
      </div>
      
    </>
  );
};
export default OurQuality;

