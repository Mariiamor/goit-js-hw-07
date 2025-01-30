const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const greeting = document.querySelector("h1");

nameInput.style.fontFamily = "Montserrat, sans-serif";
nameInput.style.width = "360px";
nameInput.style.height = "40px";
nameInput.style.border = "1px solid #2E2F42";
nameInput.style.borderRadius = "4px";
nameInput.style.color = "#808080";
nameInput.style.padding = "18px"; 

[greeting, nameOutput].forEach((el) => {
  el.style.fontFamily = "Montserrat, sans-serif";
  el.style.fontWeight = "600";
  el.style.fontSize = "24px";
  el.style.lineHeight = "1.33333";
  el.style.letterSpacing = "0.04em";
  el.style.color = "#2E2F42";
});

nameOutput.style.fontFamily = "Montserrat, sans-serif";
nameOutput.style.fontWeight = "600";
nameOutput.style.fontSize = "24px";
nameOutput.style.lineHeight = "1.33333";
nameOutput.style.letterSpacing = "0.04em";
nameOutput.style.color = "#2E2F42";

nameInput.addEventListener("input", () => {
  const trimmedValue = nameInput.value.trim();
  nameOutput.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});