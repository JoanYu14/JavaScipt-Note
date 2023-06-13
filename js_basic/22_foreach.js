// forEach() Method
// 為每個陣列元素執行一次提供的函式
// forEach()本身是一個high order function，所以()裡面的argument(引數)要給的就是function(callback function)
// Array.forEach(callBack function)
// 請用18_22_document_object這個HTML連接此JS檔

let myLuckyNumbers = [1, 2, 3, 4, 5, 6, 7];

// 之前對array中每個元素都加3的方法是用迴圈
for (let i = 0; i < myLuckyNumbers.length; i++) {
  myLuckyNumbers[i] = myLuckyNumbers[i] + 3;
}

console.log(myLuckyNumbers); // [4,5,6,7,8,9,10]

// ===================================================================================================================

// 用forEach()對陣列元素做加3的方法
// 此時function的n就是陣列中的element
// Function Declaration寫法
console.log("用Function Declaration");
function plus3(n) {
  console.log(n + 3);
}

// forEach裡面的引數plus3會被執行非常多次(myLuckyNumbers.length次)
// 就是forEach會對myLuckyNumbers的所有元素都執行一次plus函式
myLuckyNumbers.forEach(plus3); // 7 8 9 10 11 12 13

// 用Function Expression
console.log("用Function Expression");
myLuckyNumbers.forEach(function (n) {
  console.log(n + 3);
});

// ===================================================================================================================

// 用forEach()與arrow function(Expression)協作
console.log("用Arrow Function Expression");
myLuckyNumbers.forEach((n) => {
  console.log(n + 3);
});

// arrow function還可以放進index參數(第一個是陣列的元素，第二個是陣列元素的index)
// index參數就是會把forEach每次對於陣列裡的元素的index
// 即使第二個參數不叫index，但它帶的值還是一樣會是元素的index
myLuckyNumbers.forEach((n, index) => {
  console.log(n + "的index為" + index);
});

// ===================================================================================================================

// NodeList用forEach()
let helloss = document.querySelectorAll(".hello");
console.log(helloss); // NodeList(3) [p.hello, p.hello, p.hello]

helloss.forEach((class_is_hello) => {
  console.log(class_is_hello); // 會依序印出三個calss為hello的元素(就是在helloss這個NodeList內的三個)
});

// HTMLCollection不能使用forEach()
/*
let hellos = document.getElementsByClassName("hello");
hellos.forEach((class_is_hello) => {
  console.log(class_is_hello);   >>>>hellos.forEach is not a function，代表hellos這個物件(HTMLCollection)不能使用forEach這個Method
});
*/
