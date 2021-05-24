import React from 'react';

import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({ img, imgAlt, title, subtitle }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={img} alt={imgAlt} />
    <div className='carousel-item__details'>
      <div className='carousel-item__details--buttons'>
        <img src={playIcon} alt='Play icon' />
        <img src={plusIcon} alt='Plus icon' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>{subtitle}</p>
    </div>
  </div>
);

export default CarouselItem;
