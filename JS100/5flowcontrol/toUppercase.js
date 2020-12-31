console.clear();
function convertString(words) {
  if (words.length >= 10) {
    console.log(words.toUpperCase());
  } else {
    console.log(words);
  } //end if-else stmt

} // end convertString function
convertString('hello world');
convertString('hi');
convertString('Jeannine Loftus');