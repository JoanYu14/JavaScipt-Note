// Spread Syntax(擴展語法) and Rest Parameters

// Spared Syntax(擴展語法)
// myFunction(a,...iterableObj,b)
// interableObj : 指它可以做interation(迭代)，例:for loop轉一次就是一次的迭代
// 可以做interation的東西就叫做interable，object就是一種interable，array也是
// 用於Array與function invocation(函式調用)時就是Spared Syntax

const parts = ["肩膀", "膝蓋"];
// 要在頭和身體間加入parts的元素，所以我們可以在要加入的位置寫... 3個dot然後加上interableObj(就是parts)
const otherParts = ["頭", ...parts, "身體", "腳"];

console.log(otherParts); // [ '頭', '肩膀', '膝蓋', '身體', '腳' ]

// =====================================================================================================================================================

// 用於array
// 複製array
// 如果直接用=的話會是copy by reference(就是指向同個位置而非創造一個一模一樣的全新的array)
const arr1 = [1, 2, 3];
const arr2 = arr1; // 此時只是讓arr2指向arr1
arr2.push(4, 5, 6);
console.log("arr1為:" + arr1 + "，arr2為" + arr2); // arr1為:1,2,3,4,5,6，arr2為1,2,3,4,5,6。兩個arr都會被更改因為arr2和arr1指向同一個儲存空間

console.log("用Spared Syntax複製array==============");
// 用Spared Syntax複製array
// 不會是copy by reference
const arr01 = [8, 9, 10];
const arr02 = [...arr01];
console.log("arr01為:" + arr01 + "，arr02為" + arr02);
arr02.push(1, 2, 3);
console.log("arr02被push了1,2,3後為" + arr02 + "，但arr01仍然是:" + arr01); // 即使arr02有新增了值，arr01也不會被更改

// 如何串接array
// 1. concat()
// array1.concat(array2)，就可以把兩個array合併
let num1 = [[1, 2], [3]];
let num2 = [4, 5, 6];
let result = num1 + num2; // 直接把array相加會變成string
console.log(result); // 1,2,34,5,6
console.log(typeof result); // string
console.log(num1.concat(num2)); // [ [ 1, 2 ], [ 3 ], 4, 5, 6 ]

// 2. Spared Syntax
// 此寫法與用concat得到一樣的效果
console.log([...num1, ...num2]); // [ [ 1, 2 ], [ 3 ], 4, 5, 6 ]

// =====================================================================================================================================================

console.log("用Spared Syntax傳入argument到function==============");

// Spared Syntax用於function的argument

function sum(x, y, z) {
  return x + y + z;
}
let number = [1, 2, 3];

console.log(sum(number[0], number[1], number[2])); //6
console.log(sum(...number)); // 6

function sum2(a, b, c, d, e) {
  return a + b + c + d + e;
}
console.log(sum2(10, 1, 2, 3, 5)); // 21
console.log(sum2(10, ...number, 5)); // 21，等於sum2函式中的a用10帶入，b,c,d用number中的值代入，e用5代入

// 假如帶入的鎮列為為[1,2,3,4]的話，結果會變成20
let number2 = [1, 2, 3, 4];
console.log(sum2(10, ...number2, 5)); // 20，等於sum2函式中的a用10帶入，b,c,d,"e"都用number中的值代入，最後的5沒有用到

// =====================================================================================================================================================
// =====================================================================================================================================================
// =====================================================================================================================================================

// Rest Parameters(其餘參數)
// 用在function definition(函式定義)時就是Rest Paramenters
// Rest Paramenters是收集多個元素並將他們壓縮成單個JS Array
// 讓我們的function可以接受任何數量的argument

// theArgs就是rest parameters
// 利用rest parameters製作可以加總無數個argument的function
function sum_rest_parameters(...theArgs) {
  console.log(theArgs); // [1,2,3,4,5,6,7]
  let total = 0;
  for (let i = 0; i < theArgs.length; i++) {
    total += theArgs[i];
  }
  return total;
}
// 當我們執行sum_rest_parameters這個函式時，1, 2, 3, 4, 5, 6, 7會變壓縮成單一個array傳入theArgs
sum_rest_parameters(1, 2, 3, 4, 5, 6, 7);
console.log(sum_rest_parameters(1, 2, 3, 4, 5, 6, 7)); // 28

// 利用Spread Syntax(擴展語法): ...a_lot_number 把a_lot_number傳到rest parameters語法壓縮成單個array:theArgs當成argument
let a_lot_number = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
console.log(sum_rest_parameters(...a_lot_number)); // 100
