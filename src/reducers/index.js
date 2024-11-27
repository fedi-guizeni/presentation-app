import { ADD_SLIDE, REMOVE_SLIDE, SET_SLIDE, ADD_DRAW_POINTS, CLEAR_DRAWING, UNDO_DRAWING, REDO_DRAWING } from '../actions';

const initialState = {
  currentSlide: 1,
  slides: [
    {type: 'title', title: 'TIW 8', visible: true, notes: ""},
    {type: 'content', title: 'TP 1', text: "Le TP porte sur des rappels de developpement Web", visible: false, notes: "ce transparent est caché"},
    {type: 'content', title: 'TP 2', text: "Le TP porte sur la creation d'un outil de presentation HTML", visible: true, notes: ""},
    {type: 'content', title: 'TP 3', text: "Le TP 3", visible: true, notes: ""},
    {type: 'content', title: 'TP 4', text: "Le TP 4", visible: true, notes: ""},
    {type: 'title', title: 'Question ?', visible: true, notes: ""}
  ],
  drawing: {
    current: [],
    history: [],
    future: []
  }
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SLIDE:
      return {
        ...state,
        slides: [...state.slides, action.payload]
      };
    case REMOVE_SLIDE:
      return {
        ...state,
        slides: state.slides.filter((_, index) => index !== action.payload)
      };
    case SET_SLIDE:
      return {
        ...state,
        currentSlide: action.payload
      };
    case ADD_DRAW_POINTS:
      return {
        ...state,
        drawing: {
          ...state.drawing,
          current: [...state.drawing.current, action.payload.points],
          history: [...state.drawing.history, state.drawing.current],
          future: []
        }
      };
    case CLEAR_DRAWING:
      return {
        ...state,
        drawing: {
          current: [],
          history: [],
          future: []
        }
      };
    case UNDO_DRAWING:
      const previous = state.drawing.history[state.drawing.history.length - 1];
      return {
        ...state,
        drawing: {
          current: previous,
          history: state.drawing.history.slice(0, -1),
          future: [state.drawing.current, ...state.drawing.future]
        }
      };
    case REDO_DRAWING:
      const next = state.drawing.future[0];
      return {
        ...state,
        drawing: {
          current: next,
          history: [...state.drawing.history, state.drawing.current],
          future: state.drawing.future.slice(1)
        }
      };
    default:
      return state;
  }
}export default rootReducer;