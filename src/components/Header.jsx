import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { logoutRequest } from '../actions';

import gravatar from '../utils/gravatar';

import '../assets/styles/components/Header.scss';
import logoPlatziVideo from '../assets/static/logo-platzi-video.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user, logoutRequest } = props;

  const hasUser = Object.keys(user).length > 0;

  const handleLogout = logoutRequest;

  return (
    <header className='header'>
      <Link to='/'>
        <img src={logoPlatziVideo} alt='Platzi video' className='header__img' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt='user-icon' />}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser && <li><a href='/'>{user.name}</a></li>}
          {hasUser ?
            <li><a href='#logout' onClick={handleLogout}>Cerrar sesión</a></li> :
            <li><Link to='/login'>Iniciar sesión</Link></li>}
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = ({
  logoutRequest,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
