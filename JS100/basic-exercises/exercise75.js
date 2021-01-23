console.clear;
//exercise 75 Filter
/* 
Count the number of elements in scores that are 100 or above.
*/ 

let scores = [96, 47, 113, 89, 100, 102];

let results = scores.filter(scores => {
 return scores >= 100;
});

console.log(results);
