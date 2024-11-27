const initialState = {
  points: [],
  color: '#000000',
  size: 2
};

export default function drawingReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_DRAW_POINTS':
      return {
        ...state,
        points: [...state.points, action.payload]
      };
    case 'CLEAR_DRAWING':
      return {
        ...state,
        points: []
      };
    default:
      return state;
  }
}
