import React from 'react';
import { connect } from 'react-redux';
import { addSlide, removeSlide } from '../actions';
import Slides from '../components/Slides';

const EditView = ({ dispatch }) => {
  return (
    <div className="edit-view">
      <Slides />
      <div className="edit-controls">
        <button onClick={() => dispatch(addSlide({ 
          type: 'content',
          title: 'New Slide',
          text: '',
          visible: true,
          notes: ''
        }))}>
          Add Slide
        </button>
      </div>
    </div>
  );
};

export default connect()(EditView);