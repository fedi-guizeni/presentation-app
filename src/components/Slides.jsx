import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Slide from './Slide';
import { setSlide } from '../actions';

const Slides = ({ slides, currentSlide, dispatch }) => {
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

  return (
    <div className="slides-container">
      {slides.map((slide, index) => (
        <Slide 
          key={index} 
          slide={slide} 
          isActive={index === currentSlide}
        />
      ))}
    </div>
  );
};

export default connect(state => ({
  currentSlide: state.currentSlide,
  slides: state.slides
}))(Slides);
