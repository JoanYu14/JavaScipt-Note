// Ternary Operator
// 是唯一一個需要3個運算元的運算子，被用來當if的簡潔寫法
// 如果condition為true就執行:前的表達式，如果condition為false就執行:後面的表達式
// 語法:condition ? expressionIfTrue : expressionIfFalse

// if else

let age = 20;

// 如果age小於18的話price就為50，大於18的話price就為150
let price = age < 18 ? 50 : 150;

// if (age < 18) {
//   price = 50;
// } else {
//   price = 150;
// }

// =====================================================================================================================================================

// if ... elseif ... else

let score = 75;
// if score大於等於80的話grade為"優異"，else if score大於等於60的話grade為"及格"，else grade為不及格
let grade = score >= 80 ? "優異" : score >= 60 ? "及格" : "不及格";
console.log(grade); // 及格

// if (score >= 80) {
//   grade = "優異";
// } else if (score >= 60) {
//   grade = "及格";
// } else {
//   grade = "不及格";
// }
// console.log(grade);
