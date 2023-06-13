// 常見的 Array Method 陣列的方法(函式)

let array1 = ["小黑", 3, null, undefined, false, true, NaN];

// 計算長度(這個不是Method是Properties(屬性))
console.log("陣列array1的長度為:" + array1.length);

// =====================================================================================================================
// Method
// 對陣列尾端進行操作的

// 1. push(element)
// 將一個或多個元素添加到陣列的尾端，並return陣列的新長度。

console.log(array1.push("Joan")); // console印出8(回傳的陣列新長度)
console.log(array1); // ["小黑", 3, null, undefined, false, true, NaN, "Joan"]

// 2. pop()
// 從陣列中刪除最後一個element，並return該element
console.log(array1.pop()); // console印出"Joan"(pop回傳的刪掉的那個最後一個element)
console.log(array1); // ['小黑', 3, null, undefined, false, true, NaN]，最後一個已經被刪除

// =====================================================================================================================

// 對陣列開頭進行操作的

// 3. unshift(element)
// 將一個或多個元素添加到陣列的開頭(index=0的位子)，並return陣列的新長度。
console.log(array1.unshift("Yu", "Joan")); // console印出9(回傳的陣列新長度)
console.log(array1); // ['Yu', 'Joan', '小黑', 3, null, undefined, false, true, NaN]

// 4. shift()
// 從陣列中刪除第一個(index為0的)element，並return該element
console.log(array1.shift()); // console印出"Yu" (shift回傳的刪掉的那個第一個(index為0的)element)
console.log(array1); // ['Joan', '小黑', 3, null, undefined, false, true, NaN]

// =====================================================================================================================

// array of array(陣列中還有陣列)
// 要選取的話就是先選row(橫)再選column(直)

let myArr = [
  ["name", "address", "age"],
  ["Mike", "台灣", 35],
  ["Grace", "美國", 26],
];

console.log(myArr[1][0]); // Mike
console.log(myArr[2][2]); // 26

// 陣列中有四個element，youArr[1]又是一個陣列裡面有3個element，youArr[1][2]又是一個陣列裡面有3個element。
let youArr = ["Joan", ["Harry", "Snap", [[], [2], ["Benson"]]], false, []];
console.log(youArr[1][2][2]); // "Benson"
