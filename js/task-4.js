document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");


  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.gap = "8px";
  form.style.margin = "24px";

  const labels = form.querySelectorAll("label");
  const inputs = form.querySelectorAll("input");
  const button = form.querySelector("button");

  
  labels.forEach((label) => {
    label.style.fontFamily = '"Montserrat", sans-serif';
    label.style.fontWeight = "400";
    label.style.fontSize = "16px";
    label.style.lineHeight = "1.5";
    label.style.letterSpacing = "0.04em";
    label.style.color = "#2e2f42";
    label.style.display = "flex";
    label.style.flexDirection = "column";
    label.style.gap = "8px"; 
  });

  
  inputs.forEach((input) => {
    input.style.width = "360px";
    input.style.height = "40px";
    input.style.color = "#808080";
    input.style.border = "1px solid #2E2F42";
    input.style.borderRadius = "4px";
    input.style.padding = "8px";
  });

 
  button.style.display = "flex";
  button.style.alignItems = "center";
  button.style.justifyContent = "center";
  button.style.flexDirection = "row";
  button.style.gap = "10px";
  button.style.borderRadius = "8px";
  button.style.padding = "8px 16px";
  button.style.width = "86px";
  button.style.height = "40px";
  button.style.background = "#4e75ff";
  button.style.color = "#ffffff";
  button.style.fontFamily = '"Montserrat", sans-serif';
  button.style.fontSize = "16px";
  button.style.fontWeight = "600";
  button.style.border = "none";
  button.style.cursor = "pointer";

 
  button.addEventListener("mouseover", () => {
    button.style.background = "#375ce6";
  });

  button.addEventListener("mouseout", () => {
    button.style.background = "#4e75ff";
  });

 
  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
      data[key] = value.trim(); 
    }

    
    if (!data.email || !data.password) {
      alert("All form fields must be filled in");
      return;
    }

    console.log(data); 
    form.reset(); 
  });
});