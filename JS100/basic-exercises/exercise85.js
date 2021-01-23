console.clear;
/* exercise 85 Calculate BMI
Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's height (in cm) and weight (in kg)
*/ 

function calculateBMI(heightInCentimeters, weightInKilograms){
  let heightInMeters = heightInCentimeters /100;
  let bmi = weightInKilograms / heightInMeters**2;
  console.log(bmi);
}

calculateBMI(180, 80); // "24.69"


/* official solution used this inside the funtion
return bmi.toFixed(2);
The method Number.prototype.toFixed() returns a string that represents a number 
rounded to a fixed number of decimals.
*/