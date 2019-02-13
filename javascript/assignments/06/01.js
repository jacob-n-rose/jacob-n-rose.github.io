var count = 1;
function image() {
  if(count == 1){
    var img = document.createElement('img');
    var el = document.getElementById('iguana');
    var picInfo = el.getAttribute('href');
    var mainSpace = document.querySelector('main');
    img.setAttribute('src', picInfo);
    mainSpace.appendChild(img);
    count--;
  } else {
  }

};
