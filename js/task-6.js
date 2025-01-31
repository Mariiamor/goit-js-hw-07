
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = ''; 

  const fragment = document.createDocumentFragment(); 

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10; 

    Object.assign(box.style, {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: getRandomHexColor(),
      marginBottom: "10px"
    });

    fragment.appendChild(box);
  }

  boxesContainer.appendChild(fragment); 
}

function destroyBoxes() {
  document.getElementById("boxes").innerHTML = '';
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const inputElement = document.querySelector('input[type="number"]');

createButton.addEventListener('click', () => {
  const amount = parseInt(inputElement.value, 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputElement.value = ''; 
  } else {
    alert('Please enter a value between 1 and 100');
  }
});

destroyButton.addEventListener('click', destroyBoxes);