import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const App = () => (
  <div className='app'>
    <Header />
    <Search />
    <Categories title='Mi lista'>
      <Carousel>
        <CarouselItem
          img='https://images.pexels.com/photos/1589908/pexels-photo-1589908.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
          imgAlt='coffee'
          title='Título descriptivo'
          subtitle='2019 16+ 114min'
        />
        <CarouselItem
          img='https://images.pexels.com/photos/1589908/pexels-photo-1589908.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
          imgAlt='coffee'
          title='Título descriptivo'
          subtitle='2019 16+ 114min'
        />
        <CarouselItem
          img='https://images.pexels.com/photos/1589908/pexels-photo-1589908.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
          imgAlt='coffee'
          title='Título descriptivo'
          subtitle='2019 16+ 114min'
        />
        <CarouselItem
          img='https://images.pexels.com/photos/1589908/pexels-photo-1589908.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
          imgAlt='coffee'
          title='Título descriptivo'
          subtitle='2019 16+ 114min'
        />
      </Carousel>
    </Categories>
  </div>
);

export default App;
