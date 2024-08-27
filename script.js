console.log("hitesh");

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const textElements = document.querySelectorAll('h1, h2');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    let color;
    if (e.target.id === 'random') {
      color = getRandomColor();
    } else {
      color = e.target.id;
    }

    body.style.backgroundColor = color;

    // Adjust text color for better readability
    if (color === 'black' || color === 'blue' || color === 'grey') {
      textElements.forEach(element => element.style.color = 'white');
    } else {
      textElements.forEach(element => element.style.color = 'black');
    }
  });
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
