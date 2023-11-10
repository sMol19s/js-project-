const s = require('lodash');
const a = 'xxx';
const mass = [a, 'b', 'c', 'd', '2', 'h', 'k', 'i', 't'];
const chunked = s.chunk(mass, 3);

console.log(chunked); // [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11]]