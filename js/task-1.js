const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
const categoryTitle = item.querySelector("h2").textContent;
const categoryElementsCount = item.querySelectorAll("ul li").length;


  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElementsCount}`);

 
  item.style.display = "flex";
  item.style.alignItems = "flex-start";
  item.style.borderRadius = "8px";
  item.style.padding = "16px";
  item.style.width = "392px";
  item.style.height = "auto";
  item.style.justifyContent = "flex-start";
  item.style.flexDirection = "column";
  item.style.gap = "16px";
  item.style.backgroundColor = "#f6f6fe";
  item.style.margin = "24px";


  const title = item.querySelector("h2");
  title.style.fontFamily = '"Montserrat", sans-serif';
  title.style.fontWeight = "600";
  title.style.fontSize = "24px";
  title.style.margin = "0";

 
  const categoryItemsList = item.querySelectorAll("ul li");
  categoryItemsList.forEach((li) => {
    li.style.width = "100%";
    li.style.display = "flex";
    li.style.justifyContent = "flex-start";
    li.style.alignItems = "center"; 
    li.style.height = "40px"; 
    li.style.paddingLeft = '16px';
    li.style.border = "1px solid #2E2F42";
    li.style.borderRadius = "4px";
    li.style.marginBottom = "8px";
    li.style.fontFamily = '"Montserrat", sans-serif';
    li.style.fontWeight = "400";
    li.style.fontSize = "16px";
    li.style.lineHeight = "1.33333";
    li.style.letterSpacing = "0.04em";
    li.style.color = "#2e2f42";
    li.style.listStyleType = "none"; 
  });

  
  const categoryList = item.querySelector("ul");
  categoryList.style.paddingLeft = "0";
  categoryList.style.border = "none";
  categoryList.style.width = "100%"; 
});
