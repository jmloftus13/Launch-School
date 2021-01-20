console.clear;
//exercise 20 Type Error
/* 
The TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.<br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length<br>
length is a proprty of a string not a function and is called without ()<br>
his code minus () works <br>
*/
let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
} else {
  console.log('Tweet is just right');
}