var book = {
  topic: "anything",
  fat: true
};
console.log(book.topic);
// --
function sum(x, y) {
  return x*y;
}
var result = sum(1,2);
// like unit test:
if(result === 2) {
  console.log("OK")
} else {
  console.log("NOT OK")
}
var result2 = sum(4,4);
console.log (result2)