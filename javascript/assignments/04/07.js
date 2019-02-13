window.onload = function() {

var printer = "paper";
var cup = 0;
var pencil = "";
var el = document.getElementById('answer');

if (cup) {
  el.textContent = "This is not supposed to run..."
} else if (printer) {
  el.textContent = "A printer needs its " + printer;
} else {
  el.textContent = "I had turkey for lunch.";
}

};
