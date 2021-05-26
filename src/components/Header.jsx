import React from 'react';

import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.scss';
import logoPlatziVideo from '../assets/static/logo-platzi-video.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={logoPlatziVideo} alt='Platzi video' className='header__img' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={userIcon} alt='user-icon' />
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href='/'>Cuenta</a></li>
          <li><Link to='/login'>Iniciar sesión</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
