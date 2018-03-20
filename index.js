const canvas = document.querySelector('#c');
const context = canvas.getContext('2d');

const image = new Image();
image.src = '../hollow-knight.jpg';

image.onload = () => {
  console.log('Image loaded');
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
};

document.querySelector('#save').addEventListener('click', () => {
  console.log(canvas.toDataURL());
});
