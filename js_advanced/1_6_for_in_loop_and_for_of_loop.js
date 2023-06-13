// for of loop 與 for in loop

// 1. for of loop
// for (i of interable){ 程式碼 }
// 就是interable中的第1個元素就會被叫做i然後套用到{}內的程式碼。然後interable中的第2個元素就會被叫做i然後套用到{}內的程式碼…以此類推

let numbers = [10, 20, 30];

// 之前的for loop作法
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 之前的forEach作法，只能用在陣列中!!!(numbers的每一個元素依序帶入n執行程式碼)
numbers.forEach((n) => {
  console.log(n);
});

// for in loop寫法
for (let n of numbers) {
  console.log(n);
}

// =====================================================================================================================================================

// 2. for...in Loop
// 創建一個迴圈，去循環一個JS物件中所有的可枚舉屬性(enumerable properties)
// 對於object來說enumerable properties就是keys
// 對於array來說enumerable properties就是indices(index複數的英文)
// 對於String來說enumerable properties也是indices(index複數的英文)

// 對object使用for in loop =========================
let Joan = {
  name: "Joan Yu",
  age: 22,
  height: 153,
  hello() {
    console.log(this.name + "say hi");
  },
};
// 對於物件來說可枚舉屬性就是keys
for (let property in Joan) {
  console.log(property); // 依序印出name age height hello
}
for (let propety in Joan) {
  // 要在for in loop中用key取得value一定要用中括號[]，它才會去看這個propety是in Joan的可枚舉屬性
  console.log(Joan[propety]); // 依序印出Joan Yu  22 153 [Function: hello]
}
for (let propety in Joan) {
  // 在for in loop用.的方式的話沒有辦法取得屬性的值，因為它會變成從Joan物件內找有沒有叫做propety的屬性，因為沒有所以會是undefined
  console.log(Joan.propety); // 依序印出undefined undefined undefined undefined
}

// 對array和string使用for in loop ============================

let num = [100, 44, 22];

// 對於陣列來說可枚舉屬性就是index
for (let i in num) {
  //console.log(i); // 依序印出0 1 2 (就是index)
  console.log(num[i]); // 依序印出100 44 22
}

// 對於字串來說可枚舉屬性也是index
let name = "Joan";
for (let i in name) {
  console.log(i); // 依序印出0 1 2 3 (就是index)
}

// =====================================================================================================================================================

// object物件不是interable(可迭代對象)
// 所以object不能用於for of loop

/*
Joan是上面創建的一個object
TypeError: Joan is not iterable
for (i of Joan) {
}
*/
