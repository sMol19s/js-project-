function swap(items) {
  //1
  var temp = items[0];
 console.log(temp);
 //2
 items[0] = items[1];
 console.log(items);
 //3
 items[1] = temp;
 return items;
}

const result2 = swap([1,2]);

console.log(result2)
