window.onload = function() {
var numbers = new Array();
var el = document.getElementById('answer');
var msg;

for(var i = 0; i < 10; i++){
  numbers[i] = i;
}

for(var x = 0; x < 10; x++){
  var msg = numbers[x];
  el.textContent += msg + "   ";
}


};
