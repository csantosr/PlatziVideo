import React from 'react';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {
  const initialState = useInitialState(API);

  const renderCarouselItem = ({ id, cover, title, year, contentRating, duration }) => (
    <CarouselItem
      key={id}
      img={cover}
      imgAlt={title}
      title={title}
      year={year}
      contentRating={contentRating}
      duration={duration}
    />
  );

  return (
    <>
      <Search />
      {initialState.myList?.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {initialState.myList.map((item) => renderCarouselItem(item))}
          </Carousel>
        </Categories>
      )}
      {initialState.trends?.length > 0 && (
        <Categories title='Tendencias'>
          <Carousel>
            {initialState.trends.map((item) => renderCarouselItem(item))}
          </Carousel>
        </Categories>
      )}
      {initialState.originals?.length > 0 && (
        <Categories title='Originales de Platzi'>
          <Carousel>
            {initialState.originals.map((item) => renderCarouselItem(item))}
          </Carousel>
        </Categories>
      )}
    </>
  );
};

export default Home;
