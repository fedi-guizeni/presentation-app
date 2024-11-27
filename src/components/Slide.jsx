  import React, { useState } from 'react';
  import { connect } from 'react-redux';
  import { setSlide } from '../actions';

  const Slide = ({ slide, currentSlide, dispatch }) => {
    const [gesturePoints, setGesturePoints] = useState([]);

    const renderContent = () => {
      switch (slide.type) {
        case 'title':
          return (
            <div className="slide-title">
              <h1>{slide.title}</h1>
            </div>
          );
        case 'content':
          return (
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <div>{slide.text}</div>
              {slide.image && <img src={slide.image} alt={slide.title} />}
            </div>
          );
        default:
          return null;
      }
    };

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      setGesturePoints([[touch.clientX, touch.clientY]]);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      setGesturePoints([...gesturePoints, [touch.clientX, touch.clientY]]);
    };

    const handleTouchEnd = () => {
      if (gesturePoints.length < 2) return;
    
      const dx = gesturePoints[gesturePoints.length - 1][0] - gesturePoints[0][0];
      if (Math.abs(dx) > 50) {
        if (dx > 0) {
          dispatch(setSlide(currentSlide - 1));
        } else {
          dispatch(setSlide(currentSlide + 1));
        }
      }
      setGesturePoints([]);
    };

    return (
      <div 
        className={`slide ${slide.visible ? 'visible' : 'hidden'}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {renderContent()}
      </div>
    );
  };

  const mapStateToProps = state => ({
    currentSlide: state.currentSlide
  });

  export default connect(mapStateToProps)(Slide);