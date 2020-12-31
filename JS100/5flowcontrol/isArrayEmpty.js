function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
} //end isArrayEmpty
isArrayEmpty([]);

//return not empty.
//despite nothing being passed it the length proprty is 0 and evaluates to true.