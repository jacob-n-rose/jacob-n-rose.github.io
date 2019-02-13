window.onload = function() {

var lightbulbWatts = 60;
var fixtureSize = 3.5;
var el = document.getElementById("answer");

if ((lightbulbWatts = 60) && (fixtureSize = 3.5)) {
  el.textContent = "This light bulb should work.";
} else {
  el.textContent = "This will not work well.";
}

};
