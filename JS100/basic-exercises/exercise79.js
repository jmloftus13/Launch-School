console.clear;
//exercise 79 Passcode
/* 
We generated parts of a passcode and now want to combine them into a string. Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).
*/ 

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

console.log(passcode.join('-'));


// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

/*
array of elements (alphnum & symbols)
put segemets together witha hyphen (array method?)
return string with each segment separated by a hyphen
*/