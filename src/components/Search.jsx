import React from 'react';
import { connect } from 'react-redux';
import { searchVideos } from '../actions';

import '../assets/styles/components/Search.scss';
import '../assets/styles/components/Input.scss';

const Search = (props) => {
  const handleChangeSearchTerm = (event) => {
    props.searchVideos(event.target.value);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        className='input input-search'
        type='text'
        placeholder='Buscar...'
        onChange={handleChangeSearchTerm}
      />
    </section>
  );
};

const mapDispatchToProps = {
  searchVideos,
};

export default connect(null, mapDispatchToProps)(Search);
