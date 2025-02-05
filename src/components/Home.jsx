import React from "react";
import "../assets/css/Home.css";
import firstImg2 from "../assets/images/img1_files/slidernew-CnnBlHk3.png";
import firstImg3 from "../assets/images/img1_files/bannerNew55-CObybNzw.png";
import firstImg1 from "../assets/images/img1_files/factorynew2-Dd2a2PGz.jpg";
import Carousel from "react-bootstrap/Carousel";
import Card from "./Card";
import fishImg1 from "../assets/images/img1_files/bg_feature1-BLh1ptny.jpg";
import fishImg2 from "../assets/images/img1_files/partner-DI8T2LlB.jpg";
import fishImg3 from "../assets/images/img1_files/productnew-tCA8faOT.jpg";
import fishImg4 from "../assets/images/img1_files/qualitynew-CnRWI0ow.jpg";
import "../assets/css/SeaFood.css";
import CardAdv from "./CardAdv";
import Strengths from "./Strengths";
import CountdownSection from "./CountdownSection";
import Products from "./Products";
import DiscoverProducts from "./DiscoverProducts";
import OurQuality from "./OurQuality";
import GlobalPartners from "./GlobalPartners";
import  GoogleMap  from "./GoogleMap";
import FloatingIcons from "./FloatingIcons";


const Home = () => {
  const sliderData = [
    {
      id: 1,
      image: firstImg1,
      title: "Welcome To Asmak Muscat Int'l.",
      description: "",
    },
    {
      id: 2,
      image: firstImg2,
      title: "Processor and Exporteof Frozen Fish",
      description: `We specialize in processing and exporting, proudly delivering
            top-quality products to wholesale customers worldwide.`,
    },
    {
      id: 3,
      image: firstImg3,
      title: "Building Long-Term Relationships",
      description: `Oman, UAE, Qatar, Bahrain, Iraq, Egypt, India, Bangladesh, Thailand,
            Malaysia, Ghana, Benin, Togo, Cote d'Ivoire, Senegal, Mozambique,
            Haiti, Cameroon, Guinea, Congo, Liberia, South Africa and many more.`,
    },
  ];

  const cardData = [
    {
      id: 1,
      image: fishImg1,
      title: "Leader",
    },
    {
      id: 2,
      image: fishImg2,
      title: "Partner",
    },
    {
      id: 3,
      image: fishImg3,
      title: "Product",
    },
    {
      id: 4,
      image: fishImg4,
      title: "Quality",
    },
  ];

 

  return (
    <>
<Carousel
      className="home_slider"
      interval={5000}
      controls={false}
      indicators={false}
      pause={false}
    >
      {sliderData.map((data) => (
        <Carousel.Item key={data.id}>
          <img src={data.image} alt={`Slide ${data.id}`} className="slider_image" />
          <Carousel.Caption className="slider_text">
            <h3 className="scrolling_title">{data.title}</h3>
            {data.description && <p className="scrolling_description">{data.description}</p>}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>

<div className="seafood">
  <div className="text-container">
    <h1 className="heading">Seafood Excellence Since Inception</h1>
    <p>
      Asmak Muscat Int'l has been a cornerstone in the seafood industry,
      committed to delivering the highest quality seafood sourced directly
      from Oman’s pristine waters. Our journey began with a vision to
      provide freshly frozen fish, and expertly handled seafood to global
      markets, adhering to sustainability and quality at every step.
    </p>
  </div>
  <img className="seafood-img" src={fishImg4} alt="Seafood Workers" />
</div>

 {/* Additional Components */}
      <CardAdv />
      <Strengths />
      <CountdownSection />
      <Products />
      <DiscoverProducts />
      <FloatingIcons/>

      {/* Contact Us Section */}
      {/* <ContactUs /> */}

      <OurQuality />
      <GlobalPartners />
      <GoogleMap />
    </>
  );
};

export default Home;
