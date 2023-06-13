// function(函式)

// declaration(宣告) , definition(定義)
//定義名為hello的函式
function hello() {
  console.log("你好");
  return "Hey";
}

// ======================================================================================================================

// execution(執行) , invoke(調用) , invocation(調用)
// 調用(呼叫)函是 call a function

// console.log(呼叫hello())，會先執行hello函式裡的console.log("你好");，然後才會console會再出現Hey(就是return的值)
// 所以第一個出現在console裡的"你好"是由hello()來的，第二個出現在console裡的"Hey"是hello()回傳的值，如果hello()沒有return值的話會出現undefined在console
// 沒有設定return的話預設就式undefined

console.log(hello());

// ======================================================================================================================

// parameter(參數)
// 定義名為hello_name的函式，name是函式的參數

function hello_name(name) {
  console.log("你好" + name);
}
// 把Joan傳入函式內取代name，如果沒有給他要傳入的參數的話，name在執行的時候就是undefined，所以會出現 你好undefined
hello_name("Joan");

// 定義名為hello_name的函式，name和age是函式的參數
function you(name, age) {
  console.log("你好，我的名字是" + name);
  console.log("我今年" + age + "歲");
}
// 把余傳入函式取代name，22傳入函式取代age
you("余", 22);

// ======================================================================================================================

// return
// 函式回傳的值，如果沒有設定return的value的話，預設就是回傳undefined

// circle function的參數為圓的半徑，功能為算出圓面積，沒有return的
function circle_no_return(r) {
  console.log(3.14 * r * r);
}

console.log("沒有return的");
// 此時雖然有console有print 314出來，但那是發生在函式內的
// 現在circle_no_return(10) = undefined，因為circle_no_return沒有return值
circle_no_return(10);

// circle_no_return(10) return的值為undefined，存到a1裡
let a1 = circle_no_return(10);
let a2 = circle_no_return(5);
console.log(a1); // console會印出undefined
console.log(a1 + a2); // console會印出NaN，因為a1和a2都是undefined，所以相加Not a Number

// circle function的參數為圓的半徑，功能為算出圓面積，有return的
function circle(r) {
  return 3.14 * r * r; // return下方如果有程式碼，都不會被執行
}

console.log("有return的");

// circle函式return回來的314就放進circle(10)
// circle(10) = 314，所以console會印出314而不是undefined
console.log(circle(10));

// ======================================================================================================================

// 攝氏溫度轉華氏溫度
function covertor(c) {
  return c * 1.8 + 32;
}

let input = Number(prompt("請輸入攝氏溫度")); // prompt輸入的資料都為string型別
alert("華氏溫度為:" + covertor(input) + "度");
