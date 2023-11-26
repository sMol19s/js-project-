function findMax(ages) {
  var max = ages[0]; // ....
  for(i=1; i < ages.length; i++) {
      var nextValue = ages[i];
      if (max < nextValue) {
          max = nextValue;
      }
  }
  return max;
}
// --
var ageValues = [];
var result = findMax(ageValues);
console.log("Max value of ageValues is: " + result);