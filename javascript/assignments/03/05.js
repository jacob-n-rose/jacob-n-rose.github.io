( function () {

var months = ["January", "February", "March", "April", "May",
              "June", "July", "August", "September",
              "October", "November", "December"];

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thurday', 'Friday', 'Saturday'];

var today = new Date();
var day = today.getDay();
var month = today.getMonth();
var date = today.getDate();
var year = today.getFullYear();

var Xday = days[day];
var Xmonth = months[month];

var message = Xday + ', ' + Xmonth + ' ' + date + ', ' + year;

var el = document.getElementById('date');
el.textContent = message;

})();
