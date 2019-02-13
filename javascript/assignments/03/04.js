( function() {
   function Math(xen, yen, fen) {
     this.xen = xen;
     this.yen = yen;
     this.fen = fen;
     this.doMath = function() {
       return this.fen / this.xen;
     };
   }

   //Declaring the new objects and setting their arguments
   var testaroo = new Math(200, 66, 333);
   var secondtestaroo = new Math(183490, 12439, 193243);

   //
   var el = document.getElementById('math');
   el.textContent = testaroo.doMath();

   var el = document.getElementById('math2');
   el.textContent = secondtestaroo.doMath().toFixed(3);
} )();
