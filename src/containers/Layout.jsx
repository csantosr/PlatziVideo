import React from 'react';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <div className='app'>
    {children}
    <Footer />
  </div>
);

export default Layout;
