import React from 'react';

import { connect } from 'react-redux';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';

import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  const renderCarouselItem = (
    { id, cover, title, year, contentRating, duration },
    isList = false,
  ) => (
    <CarouselItem
      key={id}
      id={id}
      cover={cover}
      title={title}
      year={year}
      contentRating={contentRating}
      duration={duration}
      isList={isList}
    />
  );

  return (
    <>
      <Header />
      <Search />
      {myList?.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {myList.map((item) => renderCarouselItem(item, true))}
          </Carousel>
        </Categories>
      )}
      {trends?.length > 0 && (
        <Categories title='Tendencias'>
          <Carousel>
            {trends.map((item) => renderCarouselItem(item))}
          </Carousel>
        </Categories>
      )}
      {originals?.length > 0 && (
        <Categories title='Originales de Platzi'>
          <Carousel>
            {originals.map((item) => renderCarouselItem(item))}
          </Carousel>
        </Categories>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  myList: state.myList,
  trends: state.trends,
  originals: state.originals,
});

export default connect(mapStateToProps, null)(Home);
