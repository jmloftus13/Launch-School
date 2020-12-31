function evenOrOdd(num) {
  if (Number.isInteger(num)) { 
    if (num % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
      }; //end else
  } else {
    console.log('Please use a number');
  }; // end is it a number
  }; //end function
  
  evenOrOdd('hi');