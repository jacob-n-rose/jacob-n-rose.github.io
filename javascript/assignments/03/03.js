( function() {
   var Math = new Object();
     Math.xen = 100;
     Math.yen = 222;
     Math.fen = 999;
     Math.doMath = function() {
       return Math.fen / Math.xen;
     };
   var el = document.getElementById('math');
   el.textContent = Math.doMath();
} )();
