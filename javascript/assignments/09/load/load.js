$('ol a').on('click', function(e) {
  e.preventDefault();
  var url = this.href;

  $('#container').remove();
  $('#content').load(url + ' #container').hide().fadeIn('slow');
});
