console.clear;
//exercise 83 Greet 2
/* 
Now we are going to outsource the greeting and recipient to functions. Change the function greet from the previous exercise, so that it doesn't take any arguments, and instead calls the functions greeting and recipient defined below.
*/ 

function greet() {

  function greeting() {
      return 'Good morning';
  }

  function recipient() {
    return 'Launch School';
  }

  console.log(`${greeting()}, ${recipient()}!`)
}

greet();