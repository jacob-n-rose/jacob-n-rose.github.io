window.onload = function() {
var myCar = "honda";
var neighorsCar = "ford";
var sisterCar = "honda";
var el = document.getElementById("answer");

if(myCar === sisterCar){
  displayCarName(myCar);
}

function displayCarName(value) {
  el.textContent = "My car is a " + value + ", just like my sisters.";
}

};
