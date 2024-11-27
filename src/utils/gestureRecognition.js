const GESTURE_THRESHOLD = 0.8;

export const recognizeGesture = (points) => {
  const dx = points[points.length - 1][0] - points[0][0];
  const dy = points[points.length - 1][1] - points[0][1];
  
  if (Math.abs(dx) > Math.abs(dy)) {
    // Horizontal gesture
    if (dx > 0) return 'next';
    return 'previous';
  }
  
  // Vertical gesture
  if (dy > 0) return 'down';
  return 'up';
};
