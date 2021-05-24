import React from 'react';

import '../assets/styles/components/Header.scss';

const Header = () => {
  const logoPlatziVideo = '../assets/img/logo-platzi-video.png';
  const userIcon = '../assets/img/user-icon.png';
  return (
    <header className='header'>
      <img src={logoPlatziVideo} alt='Platzi video' className='header__img' />
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={userIcon} alt='user-icon' />
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href='/'>Cuenta</a></li>
          <li><a href='/'>Cerrar sesión</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
