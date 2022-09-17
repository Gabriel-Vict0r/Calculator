//Function for insert the numbers e operators in the calculator

function verifyLenghField(values) {
  if (values.length > 5) { 
    document.querySelector('.numbers').style.background = 'white';
  }
  else { 
    document.querySelector('.numbers').style.background = 'orange';
  }
}


var semValores = 'Sem valores...';
function insert(atribute) {
  document.querySelector('.numbers').style.webkitLineClamp = 2;
  var values = document.querySelector(".numbers").innerHTML;
  if (document.querySelector('.numbers').innerHTML === semValores) {
    values = '';
  }
  document.querySelector(".numbers").innerHTML = values + atribute;
  var lengthField = document.querySelector(`.numbers`).length;
  verifyLenghField(lengthField);
}
//Realize the clean of the fields
function clean() {
  document.querySelector('.numbers').style.webkitLineClamp = 1;
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
  document.querySelector('.numbers').style.webkitLineClamp = 1;
  if (result) {
    document.querySelector('.Calcs').innerHTML = result;
    var endResult = result.replace(/x/g, "*");
    document.querySelector('.numbers').innerHTML = eval(endResult);
  }
  else {
    document.querySelector('.numbers').innerHTML = semValores;
  }
}
