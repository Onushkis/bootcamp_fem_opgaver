document.addEventListener("DOMContentLoaded", () => {
 

const btn = document.getElementById("my-button");

const colorArray = [
        "#f7d45e", 
        "##e0faf7", 
        "#E6E6FA"
]

let countColor = 0; 

btn.addEventListener("click", () => {
  countColor++;


  if(countColor === colorArray.length){
    countColor = 0; 
  }

btn.style.background = colorArray[countColor];
})







}); // Afslutter: DOMContentLoaded
