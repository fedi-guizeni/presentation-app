import React from 'react';
import { connect } from 'react-redux';
import Toolbar from '../components/Toolbar';

const ControlView = ({ currentSlide, slides }) => {
  return (
    <div className="control-view">
      <div className="current-slide-info">
        <h3>{slides[currentSlide].title}</h3>
        <p>Notes: {slides[currentSlide].notes}</p>
      </div>
      <Toolbar />
    </div>
  );
};

export default connect(state => ({
  currentSlide: state.currentSlide,
  slides: state.slides
}))(ControlView);