// Destructuring Assignment(解構賦值)
// 可以將array中的值或object中的屬性unpack(拆開)賦予不同的變量中
// 常見語法
// 1. const(or let) [a,b] = array;
// 2. const(or let) [a,b,...rest] = array; ， rest就是rest parameter語法
// 3. const(or let) {a,b} = obj;

let arr = [1, 2, 3, 4, 5, 6, 7];
let a1 = arr[0];
let a2 = arr[1];
console.log(a1, a2); // 1 2

// =====================================================================================================================================================
// Array相關的Destructuring Assignment語法

// 第一種Destructuring Assignment語法
// const(or let) [a,b] = array;
let [b1, b2] = arr;
console.log(b1, b2); // 1 2，會得到與a1,a2一樣的效果

// 第二種Destructuring Assignment語法(rest parameter)
// const(or let) [a,b,...rest] = array;
// ...everything就是把除了arr前兩個元素(已存到c1,c2)以外的其他元素用陣列的方式存到everything變數裡(不一定要叫everything)
let [c1, c2, ...everything] = arr;
console.log(c1, c2, everything); // 1 2 [ 3, 4, 5, 6, 7 ]

// =====================================================================================================================================================
// object的Destructuring Assignment語法
// 在後端中非常常見
// const(or let) {a,b} = obj;
// 從object中取得property或method
// let {想要在x物件取得的屬性y或函式y} = x物件
// 找到x物件中的y屬性或函式，並存到y這個變數裡

let Joan = {
  name: "Joan Yu",
  age: 22,
  address: "屏東",
  height: 153,
  weight: 40,
  sayhi() {
    console.log(this.name + "說你好");
  },
};

// 從Joan物件中找到名為address的屬性，並把這個屬性的值存到名為address的變數中(把Joan物件中的address property解構出來)
let { address } = Joan; // Destructuring Assignment(解構賦值)
console.log(address); // 屏東

// // 從Joan物件中找到名為sayhi的函式，並把這個函式的程式存到名為sayhi的變數中(把Joan物件中的sayhi method解構出來)
let { sayhi } = Joan; // Destructuring Assignment(解構賦值)
console.log(sayhi()); // undefined說你好

// 一次解構物件中的多個屬性並存到變數內
let { name, height, weight } = Joan;
console.log(name, height, weight); // Joan Yu 153 40
