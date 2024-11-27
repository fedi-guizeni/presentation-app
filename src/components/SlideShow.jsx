import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSlide } from '../actions';
import Slides from './Slides';
import Toolbar from './Toolbar';

const SlideShow = ({ currentSlide, totalSlides, dispatch }) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      switch(e.key) {
        case 'ArrowRight':
          dispatch(setSlide(currentSlide + 1));
          break;
        case 'ArrowLeft':
          dispatch(setSlide(currentSlide - 1));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, dispatch]);

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
    <div className="slideshow">
      <Slides />
      <div className="navigation-buttons">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentSlide: state.currentSlide,
  totalSlides: state.slides ? state.slides.length : 0
});

export default connect(mapStateToProps)(SlideShow);