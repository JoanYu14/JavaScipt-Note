// Primitive Coercion(強制轉型)
// 把primitive data裝進這個primitive型別專屬的wrapper(包裝) object
// 當我們要用method或properties時，JS就會把這個原始型別的資料裝進wrapper object中，執行完再拿出來並消滅這個wrapper object
let primitiveMyName = "Joan";
console.log(typeof primitiveMyName); // string

// 我們也可以在創建Primitive Data時就使用wrapper object製作
// new的意思是我們接下來要創建一個物件，所以希望電腦的記憶體可以先空出一個位子
// 把string("Joan")放進String的wrapper object
let objectMyName = new String("Joan");
// object，製作時就把 length, toUperCase()...放進來，所以製作時間較久也會占用較多RAM
console.log(typeof objectMyName);

const { performance } = require("perf_hooks"); // node.js，performance可以監測程式所需要的時間

let startTime = performance.now(); // 目前時間
// 製作10萬的string wrapper object
for (let i = 0; i < 100000; i++) {
  let a = new String("kokokokokook");
}
let endTime = performance.now(); // 製作完後的時間
console.log(
  // 10.59......
  "10萬次的string wrapper object製作所需的時間為:" + (endTime - startTime)
);

startTime = performance.now(); // 目前時間
for (let i = 0; i < 100000; i++) {
  let a = "kokokokokook";
}
endTime = performance.now();
// 2.45....
console.log("10萬次string宣告所需的時間為:" + (endTime - startTime));
