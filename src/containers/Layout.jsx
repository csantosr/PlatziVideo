import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({ children }) => (
  <div className='app'>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
