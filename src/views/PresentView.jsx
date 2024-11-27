import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import Slides from '../components/Slides';

const PresentView = () => {
  const presentationRef = useRef(null);

  const enterFullscreen = async () => {
    try {
      if (presentationRef.current) {
        if (presentationRef.current.requestFullscreen) {
          await presentationRef.current.requestFullscreen();
        } else if (presentationRef.current.webkitRequestFullscreen) {
          await presentationRef.current.webkitRequestFullscreen();
        } else if (presentationRef.current.msRequestFullscreen) {
          await presentationRef.current.msRequestFullscreen();
        }
      }
    } catch (error) {
      console.log('Fullscreen not available');
    }
  };

  return (
    <div ref={presentationRef} className="present-view">
      <Slides />
      <button onClick={enterFullscreen}>Enter Fullscreen</button>
    </div>
  );
};

export default connect()(PresentView);