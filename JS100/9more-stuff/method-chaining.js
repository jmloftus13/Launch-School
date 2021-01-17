console.clear;
function doSOmething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}
console.log(doSOmething("I love JavaScript"));