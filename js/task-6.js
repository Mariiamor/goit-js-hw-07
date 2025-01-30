function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    
    const size = 30 + i * 10; 
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    
    box.style.backgroundColor = getRandomHexColor();
    
    box.style.marginBottom = "10px";
    
    boxesContainer.appendChild(box); 
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = '';
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