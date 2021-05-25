import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState({ myList: [], trends: [], originals: [] });

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setVideos(response);
      });
  }, []);

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
    <div className='app'>
      <Header />
      <Search />
      {videos.myList?.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {videos.myList.map((item) => renderCarouselItem(item))}
          </Carousel>
        </Categories>
      )}
      {videos.trends?.length > 0 && (
        <Categories title='Tendencias'>
          <Carousel>
            {videos.trends.map((item) => renderCarouselItem(item))}
          </Carousel>
        </Categories>
      )}
      {videos.originals?.length > 0 && (
        <Categories title='Originales de Platzi'>
          <Carousel>
            {videos.originals.map((item) => renderCarouselItem(item))}
          </Carousel>
        </Categories>
      )}
      <Footer />
    </div>
  );
};

export default App;
