var count = 1;
function image(e) {
  if(count == 1){
    var img = document.createElement('img');
    var picInfo = el.getAttribute('href');
    var mainSpace = document.querySelector('main');
    img.setAttribute('src', picInfo);
    mainSpace.appendChild(img);
    count--;
  } else {
  }
  e.preventDefault();
}

var el = document.getElementById('iguana');
el.addEventListener("click", function(e) {image(e)}, false);
