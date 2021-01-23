console.clear;
//exercise 77 Equality
/* 
Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?
*/ 

// predict false
let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

/* arrays are objects and not primitives so JS checks if they are strictly equaly 
by whether they are the same object, reference the same location  in memory */