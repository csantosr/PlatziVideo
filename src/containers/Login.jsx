import React from 'react';

import GoogleIcon from '../assets/static/google-icon.png';
import TwitterIcon from '../assets/static/twitter-icon.png';

import '../assets/styles/containers/Login.scss';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button' type='button'>Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <label htmlFor='rememberme-cbox'>
            <input type='checkbox' name='rememberme-cbox' id='rememberme-cbox' value='rememberme-cbox' />
            {' '}
            Recuérdame
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div className=''>
          <img src={GoogleIcon} alt='Google' />
          Inicia sesión con Google
        </div>
        <div className=''>
          <img src={TwitterIcon} alt='Twitter' />
          Inicia sesión con Twitter
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta cuenta
        <a href='/'>Regístrate</a>
      </p>
    </section>
  </section>
);

export default Login;
