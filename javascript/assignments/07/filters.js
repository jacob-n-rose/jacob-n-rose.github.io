$(function() {
    //var $li = $('li');
    $('ol li:odd')
        .css({
        'background-color': 'grey'
        });
    $('ol li:even')
        .css({
        'background-color': '#873232',
        'color': 'blue'
        });
    $('ol li:last')
        .css({
        'opacity': '.5'
        });
    $('h2:first')
        .css({
        'color': 'green'
        });
    $('ol li:contains(Kong)')
        .css({
        'background-color': 'blue'
        });
});
