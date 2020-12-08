let greetingMessage = "Good Morning!";

function greetPeople() {
console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage('Good Evening!');
greetPeople(); //goes right to the function but why doesn't it read in the variable assigned above the function call.
//at what point