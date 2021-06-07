import React, { useState } from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { registerRequest } from '../actions';

import '../assets/styles/components/Input.scss';
import '../assets/styles/containers/Register.scss';

const Register = (props) => {
  const { registerRequest, history } = props;

  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleUpdateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerRequest(form);
    history.push('/');
  };
  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            className='input input-form'
            type='text'
            placeholder='Nombre'
            name='name'
            onChange={handleUpdateInput}
          />
          <input
            className='input input-form'
            type='text'
            placeholder='Correo'
            name='email'
            onChange={handleUpdateInput}
          />
          <input
            className='input input-form'
            type='password'
            placeholder='Contraseña'
            name='password'
            onChange={handleUpdateInput}
          />
          <button className='button' type='submit'>Registrarme</button>
        </form>
        <section className='register__container--login'>
          <Link to='/login'>Iniciar sesión</Link>
        </section>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
