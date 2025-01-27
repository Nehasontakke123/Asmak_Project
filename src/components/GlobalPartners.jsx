import React from 'react';
import GlobalCard from './GlobalCard';
import GlobalImg1 from '../assets/images/img1_files/oman-DmBl-M2i.png';
import GlobalImg2 from '../assets/images/img1_files/uae-BU_rNwB9.png';
import GlobalImg3 from '../assets/images/img1_files/qatar-Dm7ivAI1.png';
import GlobalImg4 from '../assets/images/img1_files/bahrain-Qwkh1CYC.jpg';
import GlobalImg5 from '../assets/images/img1_files/iraq-3uOwN5Ul.png';
import GlobalImg6 from '../assets/images/img1_files/egypt-CMOTWkbb.png';
import GlobalImg7 from '../assets/images/img1_files/india-BSvfRG_c.png';
import GlobalImg8 from '../assets/images/img1_files/bangladesh-BMu4hbSF.png';
import GlobalImg9 from '../assets/images/img1_files/thailand-C925TTZI.png';
import GlobalImg10 from '../assets/images/img1_files/malaysia-hsuLDz1q.png';
import GlobalImg11 from '../assets/images/img1_files/ghana-LBmin5Z2.png';
import GlobalImg12 from '../assets/images/img1_files/benin-D_ANhv-D.png';
import GlobalImg13 from '../assets/images/img1_files/togo-UkylenYq.png';
import GlobalImg14 from '../assets/images/img1_files/uae-BU_rNwB9.png';
import GlobalImg15 from '../assets/images/img1_files/senegal-Bwp5oWz5.png';
import GlobalImg16 from '../assets/images/img1_files/mozambique-COuFF27_.png';
import GlobalImg17 from '../assets/images/img1_files/haiti-0Q1fvo4F.png';
import GlobalImg18 from '../assets/images/img1_files/cameroon-DMD6wvdI.png';
import GlobalImg19 from '../assets/images/img1_files/guinea-D1IIoaF3.png';
import GlobalImg20 from '../assets/images/img1_files/congo-CMM32akk.png';
import GlobalImg21 from '../assets/images/img1_files/liberia-DNTfqSII.png';
import GlobalImg22 from '../assets/images/img1_files/southafrica-Nf4EaZ4F.png';



const GlobalPartners = () => {
  
  
  const Global = [
    { id: 1, heading: 'Oman', image: GlobalImg1 },
    { id: 2, heading: 'UAE', image: GlobalImg2 },
    { id: 3, heading: 'Qatar', image: GlobalImg3 },
    { id: 4, heading: 'Bahrain', image: GlobalImg4 },
    { id: 5, heading: 'Iraq', image: GlobalImg5 },
    { id: 6, heading: 'Egypt', image: GlobalImg6 },
    { id: 7, heading: 'India', image: GlobalImg7 },
    { id: 8, heading: 'Bangladesh', image: GlobalImg8 },
    { id: 9, heading: 'Thailand', image: GlobalImg9 },
    { id: 10, heading: 'Malaysia', image: GlobalImg10 },
    { id: 11, heading: 'Ghana', image: GlobalImg11 },
    { id: 12, heading: 'Benin', image: GlobalImg12 },
    { id: 13, heading: 'Togo', image: GlobalImg13 },
    { id: 14, heading: 'Cote Ivory', image: GlobalImg14 },
    { id: 15, heading: 'Senegal', image: GlobalImg15 },
    { id: 16, heading: 'Mozambique', image: GlobalImg16 },
    { id: 17, heading: 'Haiti', image: GlobalImg17 },
    { id: 18, heading: 'Cameroon', image: GlobalImg18 },
    { id: 19, heading: 'Guinea', image: GlobalImg19 },
    { id: 20, heading: 'Congo', image: GlobalImg20 },
    { id: 21, heading: 'Liberia', image: GlobalImg21 },
    { id: 22, heading: 'South Africa', image: GlobalImg22 },
  ];
  

  return (
    <>
    <h1 className='our_global'>Our Global Partners</h1>
    <div className="global-cards">
      {Global.map((val) => (
        <GlobalCard key={val.id} heading={val.heading} image={val.image} />
      ))}
    </div>
    </>
  );
};

export default GlobalPartners;
