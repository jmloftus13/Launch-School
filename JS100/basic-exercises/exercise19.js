console.clear;
//exercise 19 Syntax Error
/* 
The below code raises a SyntaxError. If you run the code, you'll see the following error message: SyntaxError: Unexpected token &&
Find and read the documentation about this error on MDN. Then, fix the code
MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_token<br>
The JavaScript exceptions "unexpected token" occur when a specific language construct was expected, but something else was provided. <br>
in the example the && is not included in the expression that is being evaluated<br>
correct code: <br>
*/
let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}