window.onload = function() {
var big = 999;
var small = 9;
var el = document.getElementById('answer');
var msg = "";

if(small > big){
  el.textContent = "What is going on in this place?";
} else {
  msg += (small + " is not bigger than " + big + ". ");
  msg += "   This is true."
  el.textContent = msg;
}



};
