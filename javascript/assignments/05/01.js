window.onload = function() {
var divPage = document.getElementById('page');
var para = document.getElementsByTagName('p');
var ul = document.createElement('ul');
var cool = 0;
var index = 0

for(var x = 0; x < para.length; x++){
  var li = document.createElement('li');
  li.append(para[x].textContent);

  if(index == 0 || index == (para.length - 1)){
    li.setAttribute('class', 'complete');
    index++;
  } else {
    li.setAttribute("class", 'cool');
    cool++;
    index++;
  }
  ul.append(li);
}

var p = document.getElementsByTagName('p');
divPage.append(ul);
var length = para.length;

for(var i = 0; i < length; i++){
  divPage.removeChild(para[0]);
}

var text = document.querySelector("h2").textContent;
document.querySelector("h2").textContent = text + ": " + cool + "-Items Remaining";

var title = document.querySelector('title').textContent;
document.querySelector('title').textContent = cool + "--Items Remaining  " + title;
};
