window.onload = function() {

var lizard = "Frilled Dragon";
var msg;

switch (lizard) {
  case "Blue Tongued Skink":
      msg = "Australia";
      break;

  case "Argentine Tegu":
      msg = "South America";
      break;

  case "Frilled Dragon":
      msg = "Australia";
      break;

  case "Uromastyx":
      msg = "Egypt";
      break;

  default:
      msg = "Unknown";
      break;
}

var el = document.getElementById("answer");
el.textContent = (lizard + "s come from " + msg);

};
