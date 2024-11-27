export const ADD_SLIDE = "ADD_SLIDE";
export const REMOVE_SLIDE = "REMOVE_SLIDE";
export const SET_SLIDE = 'SET_SLIDE';

export function addSlide(payload) {
  return { type: ADD_SLIDE, payload };
}

export function removeSlide(payload) {
  return { type: REMOVE_SLIDE, payload };
}

export function setSlide(index, propagate = true) {
  return { 
    type: SET_SLIDE, 
    payload: index,
    meta: { propagate }
  };
}

export const ADD_DRAW_POINTS = 'ADD_DRAW_POINTS';
export const CLEAR_DRAWING = 'CLEAR_DRAWING';
export const UNDO_DRAWING = 'UNDO_DRAWING';
export const REDO_DRAWING = 'REDO_DRAWING';

export const addDrawPoints = (points, color) => ({
  type: ADD_DRAW_POINTS,
  payload: { points, color },
  meta: { propagate: true }
});

export const clearDrawing = () => ({
  type: CLEAR_DRAWING,
  meta: { propagate: true }
});

export const undoDrawing = () => ({
  type: UNDO_DRAWING,
  meta: { propagate: true }
});

export const redoDrawing = () => ({
  type: REDO_DRAWING,
  meta: { propagate: true }
});