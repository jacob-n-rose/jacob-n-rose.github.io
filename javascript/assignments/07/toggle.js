$(function() {
  var $h2 = $('h2');
  $h2.append('<a class="show">show</a>');
  $('ol').hide();
  $("h2 a").click(function(){
        $('ol').toggle();
        $h2.find('a').hide();
        if($h2.find('a').text() == 'show'){
          $h2.find('a').text("hide");
        } else {
          $h2.find('a').text("show");
        }
        $h2.find('a').fadeIn();
    });
});
