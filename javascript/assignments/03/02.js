(function ()
{
    var mathPro = {
      xen: 40,
      yen: 20,
      z: null,
      multiply: function()
      {
        return this.xen * this.yen;
      }
    }
    var elid = document.getElementById('math');
    elid.textContent = mathPro.multiply();
} )();
