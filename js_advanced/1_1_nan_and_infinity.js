// NaN
// Not A Number的意思
// 當我們嘗試用string或者其他資料型態進行數學計算時，若無法計數值，就會出現NaN
console.log(3 / [1, 2, 3]); // NaN

// Infinity
// 正無窮大，任何數乘以Infinity = Infinity，任何數除以Infinity = 0
// 負無窮大就是-Infinity
// 任何數除以0就會是Infinity

console.log(Infinity > 1000000000); // true
console.log(-Infinity > -100000000); // false
console.log("1 X infinity = " + 1 * Infinity); // 1 X infinity = Infinity
console.log("10000 / infinity = " + 10000 / Infinity); // 10000 / infinity = 0
console.log("5 / 0 = " + 5 / 0); // 5 / 0 = Infinity，因為JS會去找甚麼數乘上0會變成5，一直往上找都找不到所以為Infinity

// 如何把陣列串在一起
// 1. concat()
// array1.concat(array2)，就可以把兩個array合併
let num1 = [[1, 2], [3]];
let num2 = [4, 5, 6];
let result = num1 + num2; // 直接把array相加會變成string
console.log(result); // 1,2,34,5,6
console.log(typeof result); // string
console.log(num1.concat(num2)); // [ [ 1, 2 ], [ 3 ], 4, 5, 6 ]
