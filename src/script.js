//Function for insert the numbers e operators in the calculator
function insert(atribute) {
  var values = document.querySelector(".numbers").innerHTML;
  document.querySelector(".numbers").innerHTML = values + atribute;
}
//Realize the clean of the fields
function clean() {
  document.querySelector(".numbers").innerHTML = "";
  document.querySelector('.Calcs').innerHTML = "";
}

//Delete a number of the field
function deleteNum() {
  var result = document.querySelector(".numbers").innerHTML;
  document.querySelector(".numbers").innerHTML = result.substring(
    0,
    result.length - 1
  );
}

//Insert the minus sign in the number start
function insertMinus() {
    var result = document.querySelector(".numbers").innerHTML;
    document.querySelector(".numbers").innerHTML = '-' + result;
}

//Make the calculation of the operation
function calc() {
  var result = document.querySelector(".numbers").innerHTML;
  if (result) {
    document.querySelector('.Calcs').innerHTML = result;
    var endResult = result.replace(/x/g, "*");
    document.querySelector('.numbers').innerHTML = eval(endResult);
  }
  else { 
    document.querySelector('.numbers').innerHTML = 'Sem valores...';
  }
}
