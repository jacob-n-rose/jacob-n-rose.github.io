window.onload = function() {
var bigNum = 500;
var littleNum = 1;
var msg = (bigNum <= littleNum);

var el = document.getElementById("answer");
el.textContent = "Is 1 greater than or equal to 500? " + msg;
};
