

//frontend but we can't use this one 

// function sumCalculate() {
//   const num1 = parseInt(document.getElementById("firstNumber").value);
//   const num2 = parseInt(document.getElementById("secondNumber").value);
//   document.getElementById("finalAnswer").innerHTML = "The sum is " + (num1 + num2);
  
// }

// Add event listener to the button
// const button = document.getElementById("btn");
// button.addEventListener("click", sumCalculate); // Call the function on click


function sumCalculate() {
  const num1 = parseInt(document.getElementById("firstNumber").value);
  const num2 = parseInt(document.getElementById("secondNumber").value);
  //const element = document.getElementById("finalAnswer");
  fetch("http://localhost:3000/sum?a=" + num1 + "&b=" + num2).
      then(function(response) {
        console.log(response);
        response.text()
          .then(function(ans) {
            console.log(ans);
            document.getElementById("finalAnswer").innerHTML = ans;
          })
      })
  
} 



 