import React from "react";
import factoryImg from "../assets/images/img1_files/factorynew2-Dd2a2PGz.jpg";
import officeImg from "../assets/images/img1_files/officeImg.png";
import shippingImg from "../assets/images/img1_files/ship-img.png";
import deliveryImg from "../assets/images/img1_files/product-one-Cm_eG1HT.png";

// import "../assets/css/About.css";
import CardAdv from "./CardAdv";
import Strengths from "./Strengths";

import "../assets/css/About.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-images">
        <img src={factoryImg} alt="Factory" className="about-image" />
        <img src={officeImg} alt="Office" className="about-image" />
        <img src={shippingImg} alt="Shipping" className="about-image" />
        <img src={deliveryImg} alt="Delivery Truck" className="about-image" />
      </div>
      <div className="about-content">
        <h1>Asmak Muscat Int'l LLC</h1>
        <p>
          Established in 2018, <strong>Asmak Muscat Int'l LLC</strong> is led by
          a founder with over 22 years of experience in the seafood industry.
          Operating from the pristine waters of Oman in the Indian Ocean
          (FAO51), we specialize in sourcing high-quality seafood products while
          maintaining sustainable and eco-friendly practices.
        </p>
        <p>
          Our commitment extends beyond sourcing premium quality fish. We aim to
          develop long-term relationships with our clients across Oman, UAE,
          Qatar, Bahrain, Iraq, Egypt, India, Bangladesh, Thailand, Malaysia,
          Ghana, Benin, Togo, Côte d'Ivoire, Senegal, Mozambique, Haiti,
          Cameroon, Guinea, Congo, Liberia, South Africa, and numerous other
          countries by supplying high-quality products tailored to their needs.
        </p>
        <p>
          With a wide range of seafood, including pelagic fish, we cater to
          global demands while ensuring our products meet the highest quality
          standards.
        </p>
      </div>
       <CardAdv/>
       <Strengths/>
    </div>
   
  );
};

export default AboutUs;


