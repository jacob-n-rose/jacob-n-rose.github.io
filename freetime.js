function passCheck(){
  var el = document.getElementById('password').value;
  if(el == 'i'){
    alert('Access Granted');
    var secret = document.getElementById('access');
    var x = 0;
    secret.textContent="";
    while(x < 10){
      secret.textContent += "This is going to be a lot of text.  What? I said ";
      x++;
    }


  }
  else{
    alert('Wrong answer');
    var secret = document.getElementById('access');
    secret.textContent += " Try Again ";
  }
}

function calc(){
  var el = document.getElementById('x').value;
  var el2 = document.getElementById('y').value;
  var answer;

  if(el == '' || el2 == ''){
    alert('Must enter numbers');
    document.getElementById('x').value = "";
    document.getElementById('y').value = "";
    var el3 = document.getElementById('answer');
    el3.textContent = "";
    document.getElementById('x').focus();
  }
  else{
    answer = el * el2;
    var el3 = document.getElementById('answer');
    el3.textContent = answer;
  }
}

function refresh(){
   document.getElementById('x').value = "";
   document.getElementById('y').value = "";
   var el3 = document.getElementById('answer');
   el3.textContent = "";
   document.getElementById('x').focus();
}

function scissors(){
  var s = 's';
  game(s);
}

function rock(){
  var r = 'r';
  game(r);
}

function paper(){
  var p = 'p';
  game(p);
}

var array;
array = ['s', 'r', 'p'];

//Score keeping variables ouside range of game function
var humanScore = 0;
var computerScore = 0;

function game(x){

  //Random num generator from 0 to 2
  var rand = Math.floor(Math.random() * 3);

  var human = document.getElementById('human');

  var computer = document.getElementById('computer');
  // var wlt = document.getElementById('wlt');
  var winlose;
  //Comp holds the randomly generated array from the first array list
  var comp = array[rand];

  //comparing comp to user clicks
  if(comp == 's'){
    document.getElementById('generate').src = 'https://images-na.ssl-images-amazon.com/images/I/71baCLK2M1L._SL1500_.jpg';
    if(x == 's'){
      winlose = 'Tie';
    }
    else if(x == 'p'){
      computerScore += 1;
      winlose = 'Loser';
    }
    else{
      humanScore += 1;
      winlose = 'Winner';
    }

  }

  else if (comp == 'r') {
    document.getElementById('generate').src = 'http://outdoordesignbylucas.files.wordpress.com/2011/01/1-10-11-charcter-rocks.jpg';
    if(x == 'r'){
      winlose = 'Tie';
    }
    else if(x == 's'){
      computerScore += 1;
      winlose = 'Loser';
    }
    else{
      humanScore += 1;
      winlose = 'Winner';
    }
  }
  else {
    document.getElementById('generate').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMgIxpLjexCdkSFKOd58Wl87Z5UdT85tI15ORnC7yatEH1weElQ';
    if(x == 'p'){
      winlose = 'Tie';
    }
    else if(x == 's' ){
      winlose = 'Winner'
      humanScore += 1;
    }
    else if (x == 'r'){
      winlose = 'Loser';
      computerScore += 1;
    }
    else{
      alert('error');
    }
  }
  human.textContent = humanScore;
  computer.textContent = computerScore;
  wlt.textContent = winlose;
}
