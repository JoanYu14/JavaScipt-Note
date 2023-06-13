// Truthy and Falsy Values
// 值是指每個資料型態，JS會把每個在布林上下文的資料型別做type coercion(強制變成true or false)
// 常見的Boolean context有1. if statement 2.logical operator

// Truthy : 在Boolean context被視為true
// Falsy : 在Boolean context被視為false

if ("我今天心情不錯") {
  console.log("這個string是true");
} // 回傳"這個string是true"，這個字串在Boolean context被視為true

if ("") {
  console.log("這個string是true");
} // 沒執行，因為""在Boolean context被視為false

let x = 10;
if (x) {
  console.log("x是true");
} else {
  console.log("x是false");
} // 回傳"x是true"，代表x在Boolean context被視為true

let y = 0;
if (y) {
  console.log("y是true");
} else {
  console.log("y是false");
} // 回傳"y是false"，代表x在Boolean context被視為false

// ======================================================================================================================

// logical operator對Truthy and Falsy Values的處理
console.log("&& 對Truthy and Falsy Values的處理");

// && 對Truthy and Falsy Values的處理
// 如果左邊是Truthy Values的話，那結果就會回傳右邊的值
console.log(3 && 10); // 回傳10，因為3是Truthy Value

// 如果左邊是Falsy Values的話，那結果就會回傳左邊的值
console.log(0 && 10); // 回傳0，因為0是Falsy Value

// ======================================================================================================================

console.log("|| 對Truthy and Falsy Values的處理");
// || 對Truthy and Falsy Values的處理
// 如果左邊是Truthy Values的話，那結果就會回傳左邊的值
console.log(3 || 10); // 回傳3，因為3是Truthy Value

// 如果左邊是Falsy Values的話，那結果就會回傳右邊的值
console.log(0 || 10); // 回傳10，因為0是Falsy Value

// ======================================================================================================================

console.log("因為我們在後端常常會用到這個判斷，例:我們在後端取得一筆資料");

// 因為我們在後端常常會用到這個判斷，例:我們在後端取得一筆資料

// 如果資料不是空的(左邊)，那就是Truthy Value，會回傳左邊的值(data1)
let data1 = "Joan";
console.log(data1 || "如果data是空的那就顯示這段字");

// 如果資料是空的(左邊)，那就是Falsy Value，會回傳右邊的值(自己設定的)
let data2 = "";
console.log(data2 || "如果data是空的那就顯示這段字");

// ======================================================================================================================

// if比較好的寫法
// 因為我們已經知道isPremium裡面會放的是布林值(true or false)，所以我們就不用再寫if(isPremium == true)，直接用isPremium自己做判斷就好
let isPremium = true;
if (isPremium) {
  console.log("請在這裡放置跳過廣告的程式碼");
} else {
  console.log("請在這裡放置跳過廣告的程式碼");
}
