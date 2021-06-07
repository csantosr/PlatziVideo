import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { loginRequest } from '../actions';

import GoogleIcon from '../assets/static/google-icon.png';
import TwitterIcon from '../assets/static/twitter-icon.png';

import '../assets/styles/containers/Login.scss';
import '../assets/styles/components/Input.scss';

const Login = (props) => {
  const { loginRequest, history } = props;

  const [form, setValues] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginRequest(form);
    history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            className='input input-form'
            type='text'
            placeholder='Correo'
            name='email'
            onChange={handleInput}
          />
          <input
            className='input input-form'
            type='password'
            placeholder='Contraseña'
            name='password'
            onChange={handleInput}
          />
          <button className='button' type='submit'>Iniciar sesión</button>
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
          <Link to='register'>
            Regístrate
          </Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
