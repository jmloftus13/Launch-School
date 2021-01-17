console.clear;
/*Create a new object named myObj that uses myProtoObj as its prototype.*/

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;
//console.log(myObj);

//snippet 1
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

//snippet 2
for (let key in myObj) {
  console.log(key);
}