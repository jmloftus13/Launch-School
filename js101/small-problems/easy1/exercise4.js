/*PEDAC
small problems Easy 1 #4  How big is the room
Problem: 
-input: ask for 2 integers in meters
-output: integer in meters then integer in sq feet
-identify rules/requirements: convert meters to sq feet, use readlineSync prompt
-clarifying questions: 
--what is the formula to convert meters to sq feet?
--how to round the result to 2 digits after the decimal point
--refresh myself with readlinesync
Examples/Test Cases:
Data Structure: 
--use readline to ask for the length & width in meters
--calculate the area and outpt to the console
convert are to sq feet and output that at the end
Algorithm:
*/

let squareMeters = 10.7639;
let rlSync = require('readline-sync');
let length = rlSync.question("Enter the length of the room in meters: ");
let width = rlSync.question("Enter the width of the room in meters: ");
console.log(`The area of the room is ${length * width} square meters (${Math.floor(length * width * squareMeters * 100)/100} square feet).`);
