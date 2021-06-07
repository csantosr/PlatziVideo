import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';

import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { history, playing } = props;
  const hasPlaying = Object.keys(playing).length > 0;

  useLayoutEffect(() => {
    props.getVideoSource(props.match.params.id);
  }, []);
  return hasPlaying ? (
    <div className='player'>
      <video controls autoPlay>
        <source src={playing.source || ''} type='video/mp4' />
      </video>
      <div className='player-back'>
        <button type='button' onClick={history.goBack}>Regresar</button>
      </div>
    </div>
  ) : (
    setTimeout(<Redirect to='/404/' />, 1000)
  );
};

const mapStateToProps = (state) => ({
  playing: state.playing,
});

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
