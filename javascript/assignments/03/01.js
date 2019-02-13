(function() {

  var elName = document.getElementById('yards');
  var yards = elName.textContent;

  converter = function(yards)
  {
    var meters = (yards * 0.9144);
    return meters;
  }
  var elMtrs = document.getElementById('meters');
  elMtrs.textContent = converter(yards);
})();
