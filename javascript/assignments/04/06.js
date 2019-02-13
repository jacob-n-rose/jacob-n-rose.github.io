window.onload = function() {

var nature = "forest";
var degree = "Forestry";
var passCode = 7;
var x = 0;
var el = document.getElementById("answer");

if(nature === "forest"){
  while (x < 3) {
    el.textContent += "You now have access.  ";
    x++;
  }
} else {
  while(x < 10) {
    el.textContent += "Jacob, you messed up...   ";
    x++;
  }
}
};
