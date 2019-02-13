console.log('here is my LOG of todays happenings: ');
console.info('Found INFO on how to not trip while walking in walmart.')
console.warn('Was WARNed to not look into the sun.')
console.error('Found an ERROR in my C# program after I turned it in.')

console.group("Here is a GROUP of things");
console.log('here is my LOG of todays happenings: ');
console.info('Found INFO on how to not trip while walking in walmart.')
console.warn('Was WARNed to not look into the sun.')
console.groupEnd();

var lizardCare = {
  "Argentine Tegu": {
    "Diet" : "Leafy Greens, fruits, large insects, small rodents",
    "Enclosure size" : "6 by 4 feet"},
  "Green Iguana": {
    "Diet" : "Leafy Greens, fruits, Veggies",
    "Enclosure size" : "8 by 6 feet"},
  "Leopard Gecko": {
    "Diet" : "Meal worms, crickets, small mice",
    "Enclosure size" : "2 by 2 feet"}
}
console.table(lizardCare);

console.assert(10 > 245, "This is my ASSERTion that I can juggle.")

console.log('%c THIS IS HARD TO READ!!!!!', 'background: red; color: blue');

function passCheck(){
  var notTen = 7;
  var notSeven = 10;

  if(notTen > notSeven)
  {
    // NOTHING
  } else {
    debugger;
  }
}
