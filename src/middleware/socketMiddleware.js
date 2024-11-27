import io from 'socket.io-client';
import { ADD_DRAW_POINTS } from '../actions';
import store from '../store';

const socket = io('http://localhost:3001');

const socketMiddleware = () => next => action => {
  if (action.type === ADD_DRAW_POINTS && action.meta?.propagate) {
    socket.emit('draw', {
      points: action.payload,
      color: action.payload.color,
      size: action.payload.size
    });
  }
  return next(action);
};

socket.on('draw', (drawData) => {
  store.dispatch({
    type: ADD_DRAW_POINTS,
    payload: drawData,
    meta: { propagate: false }
  });
});

export default socketMiddleware;

socket.on('connect_error', (error) => {
  console.error('WebSocket connection error:', error);
  // Implement reconnection logic
  setTimeout(() => {
    socket.connect();
  }, 1000);
});

socket.on('disconnect', (reason) => {
  if (reason === 'io server disconnect') {
    socket.connect();
  }
});
