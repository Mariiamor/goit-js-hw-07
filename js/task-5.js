function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const style = document.createElement('style');
style.innerHTML = `
  .widget {
    margin: 100px 0 0 88px;
  }
  .widget p {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #2e2f42;
  }
  .change-color {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    border-radius: 8px;
    padding: 8px 16px;
    width: 148px;
    height: 40px;
    background: #4e75ff;
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }
  .change-color:hover {
    background: #375ce6;
  }
`;
document.head.appendChild(style);


document.querySelector('.change-color').addEventListener('click', () => {
  
  const randomColor = getRandomHexColor();

 
  document.body.style.backgroundColor = randomColor;

 
  document.querySelector('.color').textContent = randomColor;
});