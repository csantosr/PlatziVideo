import React from 'react';

import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = ({ img, imgAlt, title, subtitle }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={img} alt={imgAlt} />
    <div className='carousel-item__details'>
      <div className='carousel-item__details--buttons'>
        <img src='./assets/img/play-icon.png' alt='Play icon' />
        <img src='./assets/img/plus-icon.png' alt='Plus icon' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>{subtitle}</p>
    </div>
  </div>
);

export default CarouselItem;
