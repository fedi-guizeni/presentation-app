import React from 'react';
import { connect } from 'react-redux';
import { setSlide } from '../actions';

const Toolbar = ({ currentSlide, totalSlides, dispatch }) => {
  const handlePrevious = () => {
    if (currentSlide > 0) {
      dispatch(setSlide(currentSlide - 1));
    }
  };

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      dispatch(setSlide(currentSlide + 1));
    }
  };

  return (
    <div className="toolbar">
      <button 
        onClick={handlePrevious}
        disabled={currentSlide <= 0}
      >
        Previous
      </button>
      <button 
        onClick={handleNext}
        disabled={currentSlide >= totalSlides - 1}
      >
        Next
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  currentSlide: state.currentSlide,
  totalSlides: state.slides.length
});

export default connect(mapStateToProps)(Toolbar);