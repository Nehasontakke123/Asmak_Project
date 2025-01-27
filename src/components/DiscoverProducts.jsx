import React from 'react';
import DiscoverCard from './DiscoverCard';
import Discoverimg1 from '../assets/images/img1_files/newfish4-DY-WTlwm.jpg';
import Discoverimg2 from '../assets/images/img1_files/Kawa-Kawa-Tuna-scaled-Dbt-8Oap.jpg';
import Discoverimg3 from '../assets/images/img1_files/newfish1-DHRCeSkJ.jpg';
import Discoverimg4 from '../assets/images/img1_files/newfish2-beuUJnzN.jpg';
import Discoverimg5 from '../assets/images/img1_files/arabian-DuwNZJCw.jpg';
import Discoverimg6 from '../assets/images/img1_files/fish-red-bream-B1QLCwlq.jpg';
import Discoverimg7 from '../assets/images/img1_files/newfish3-C3FkVfFP.jpg';
import Discoverimg8 from '../assets/images/img1_files/koffer-bTsNAeq2.jpg';
import Discoverimg9 from '../assets/images/img1_files/treadfin-DoOqmjfn.jpg';
import Discoverimg10 from '../assets/images/img1_files/blueline-BRpyFJ8k.jpg';


const DiscoverProducts = () => {
  const Discovercard = [
    {
      id: 1,
      heading: 'Yellow Fin Tuna',
      title: '(Thunnus Albacares)',
      image: Discoverimg1,
    },
    {
      id: 2,
      heading: 'Kawa Kawa Tuna',
      title: '(Euthynnus Affinis)',
      image: Discoverimg2,
    },
    {
      id: 3,
      heading: 'Bonito Tuna',
      title: '(Sarda Orientalis)',
      image: Discoverimg3,
    },
    {
      id: 4,
      heading: 'Emperor',
      title: '(Lethrinus Spp)',
      image: Discoverimg4,
    },
    {
      id: 5,
      heading: 'Arebian Pandora',
      title: '(Pegellus Affinis)',
      image: Discoverimg5,
    },
    {
      id: 6,
      heading: 'Red SeaBream',
      title: '(Pagarus Pagarus)',
      image: Discoverimg6,
    },
    {
      id: 7,
      heading: 'Trevelly',
      title: '(Caranax Spp)',
      image: Discoverimg7,
    },
    {
      id: 8,
      heading: 'Koffer',
      title: '(Evynnis Ehrenbejri)',
      image: Discoverimg8,
    },
    {
      id: 9,
      heading: 'ThreadFin Bream',
      title: '(Nepiterus Japonicus)',
      image: Discoverimg9,
    },
    {
      id: 10,
      heading: 'Blue Line Snapper',
      title: '(Lujanus Coeruelineatus)',
      image: Discoverimg10,
    },
  ];

  return (
    <>
      <h1>Discover Our Products</h1>
      <div className="discover-container">
        {Discovercard.map((val) => (
          <DiscoverCard
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

export default DiscoverProducts;