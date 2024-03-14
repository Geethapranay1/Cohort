

//frontend but we can't use this one 

// function sumCalculate() {
//   const num1 = parseInt(document.getElementById("firstNumber").value);
//   const num2 = parseInt(document.getElementById("secondNumber").value);
//   document.getElementById("finalAnswer").innerHTML = "The sum is " + (num1 + num2);
  
// }

// Add event listener to the button
// const button = document.getElementById("btn");
// button.addEventListener("click", sumCalculate); // Call the function on click



//debouncing, throtlling

let timeout;
function debounceSum() {
  //delay the call to sumcalculate until it have not been called for 100ms
  // and I've been called at least once

  //how do you cancel a clock?

  clearTimeout(timeout);
  timeout = setTimeout(function() {
    sumCalculate();
  }, 100)

  
}


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
            document.getElementById("finalAnswer").innerHTML = "The sum of the two numbers is " + ans;
          })
      })
  
} 

//another way to calculate the sum using async, await

// async function calculateSum() {
//   const a = parseInt(document.getElementById("firstNumber").value);
//   const b = parseInt(document.getElementById("secondNumber").value);

//   const response = await fetch("http://localhost:3000/sum?a=" + num1 + "&b=" + num2);
//   const ans = await response.text();
//   document.getElementById("finalAnswer").innerHTML = "The sum of the two numbers is " + ans;

// }



//debouncing, throtlling

 