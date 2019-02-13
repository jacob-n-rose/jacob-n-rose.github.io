function checker(string, size, feedback){
  var nameSize = string.length;
  if(nameSize < size ){
    feedback.textContent = ("Must have " + size + " characters or more.");
  } else {
    feedback.textContent = "";
  }
}

function clear() {
  pw.value = "";
  un.value = "";
}


var un = document.getElementById('username');
var unFB = document.getElementById('UNfeedback');
un.addEventListener("blur", function() {checker(un.value, 5, unFB)}, false);

var pw = document.getElementById('password');
var pwFB = document.getElementById('PWfeedback');
pw.addEventListener("blur", function() {checker(pw.value, 10, pwFB)}, false);

var btn = document.getElementById('button');
btn.addEventListener('click', clear, false);
