export const importDrawing = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });
};
