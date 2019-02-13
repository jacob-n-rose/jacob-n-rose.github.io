function message() {
  var x = selectW.options[this.selectedIndex].value
  if(x == 205){
    feedback.textContent = "You are correct!";
  } else if (x == 294){
    feedback.textContent = "That's not nice";
  } else if (x == 180) {
    feedback.textContent = "";
  } else {
    feedback.textContent = "Have you ever even seen me?"
  }
}

function checker() {
  if(cb.checked == true)
  {
    feedback2.textContent = "";
  } else {
    feedback2.textContent = "You must check the Box.";
  }
}

var feedback = document.getElementById('feedback');
var btn = document.getElementById('button');
var selectW = document.getElementById('weight');
var cb = document.getElementById('checkBox');

selectW.addEventListener('change', message, false);
btn.addEventListener('click', checker, false);
