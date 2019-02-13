window.onload = function() {

var book = "A Guide to SQL";
var cupColor = "Orange";
var strZero = "0";
var zero = 0;
var canIDunk = false;
var hairColor = "Orange";

var el = document.getElementById("answer");

if (strZero === zero) {
  el.textContent = "Whoops, better try again...  ";
} else if (cupColor === hairColor){
  el.textContent = "How do you measure wind chill?";
} else {
  el.textContent = "Wrong";
}

};
