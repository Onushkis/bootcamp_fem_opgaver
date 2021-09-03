document.addEventListener("DOMContentLoaded", () => {
   /* const result = document.getElementById("result");

  function beregnForhold(a, b) {
    let r = a / b;
    result.innerHTML = r;
  }

  beregnForhold(4, 3); */


const result = document.getElementById("result");

beregnForhold(4,3)

function beregnForhold ( a, b){

    // creating a ne variable r thats is the result of the devision
    let r = a / b


    //Sending back the value to DOM
    result.innerHTML = r;
}



});
 