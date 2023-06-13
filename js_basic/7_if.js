// if statement(if語句)

if (true) {
  console.log("Hello");
} // 回傳Hello

if (false) {
  console.log("Hello");
} // 不執行

if (5 > 3 && 6 > 10) {
  console.log("大於");
} // 不執行，因為6不大於10

//if else

// 如果(5>3且6>10)是true的話console.log("都大於")，否則console.log("沒有都大於");
if (5 > 3 && 6 > 10) {
  console.log("都大於");
} else {
  console.log("沒有都大於");
} // 回傳"沒有都大於"，因為6不大於10

// if ,else if.. else (多個條件式)
//如果第一個條件不符合，那就看第二個條件符不符合，如果第二個還是不符合那就看第三個(else if沒有數量限制)...
//，如果都不符合，就執行else的程式區塊，else可有可無

let x = 70;
if (x > 90) {
  console.log("大於90分");
} else if (x >= 60) {
  console.log("介於60~90分");
} else {
  console.log("小於60分");
} // 回傳"介於60~90分"

let y = 99;
if (y > 90) {
  console.log("大於90分");
} else if (y >= 60) {
  console.log("介於60~90分");
} else {
  console.log("小於60分");
} // 回傳"大於90分"，因為第一個if就符合了，所以不會再看else if了

// ================================================================================================================
// 製作判斷票價

// prompt是讓瀏覽器出現輸入區域，括號裡面放訊息，輸入的值可以用變數存起來，注意!prompy輸入的內容會變成字串
let age = prompt("請輸入阿拉伯年齡");
console.log(typeof age); // 回傳string，prompy輸入的內容會資料型別為string
age = Number(age); // 使用Number()讓age的資料型別變成number
console.log(typeof age); // 回傳number

// alert(警示)，使用alert會在瀏覽器彈出對話視窗
if (age >= 0 && age <= 12) {
  alert("兒童票，票價為100元");
} else if (age > 12 && age <= 65) {
  alert("成人票，票價為250元");
} else if (age > 65 && age < 125) {
  alert("敬老票，票價為150元");
} //如果沒有設定(age > 65 && age < 125)的判斷式的而是直接用else的話，輸入的年齡為負數也會出現敬老票的訊息，因為前面的判斷都為false

console.log(Number("我今年20歲")); // 回傳NaN，NaN = Not a Number

//  document.write是讓頁面印出文字
// if (age <= 12) {
//   document.write("兒童票，票價為100元");
// } else if (age > 12 && age <= 65) {
//   document.write("成人票，票價為250元");
// } else {
//   document.write("敬老票，票價為150元");
// }
