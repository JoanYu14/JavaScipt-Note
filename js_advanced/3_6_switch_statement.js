// Switch Statement
// 它是if statement的另一種寫法，兩者功能性完全相同
// switch(要判斷的東西){case 1... : statement1 ; break;  case 2... : statement2 ; break; defult:else stament...;}

let day = prompt("請輸入今天是星期幾?");

// 在Switch Statement中，如果省略break則將執行下一個case的statement，甚至到defult(if中的else)的statement，而不管case的值是否匹配
// 例:如果我們輸入為星期三，且星期三與以下的case都沒有break的話，會發生星期三四五六日的statement還有defult statement都被執行
// 這種情形就被稱為fall-through
// 如果day等於case的值，就執行此case的statement，break後就不會在判斷往下的case了
switch (day) {
  case "星期一":
    alert("Today is Monday.");
    break;
  case "星期二":
    alert("Today is Tuesday.");
    break;
  case "星期三":
    alert("Today is Wednesday.");
    break;
  case "星期四":
    alert("Today is Thursday.");
    break;
  case "星期五":
    alert("Today is Friday.");
    break;
  case "星期六":
    alert("Today is Saturday.");
    break;
  case "星期日":
    alert("Today is Sunday.");
    break;

  default:
    alert("Cannot determine your day.");
}

// if (day == "星期一") {
//   alert("Today is Monday.");
// } else if (day == "星期二") {
//   alert("Today is Tuesday.");
// } else if (day == "星期三") {
//   alert("Today is Wednesday.");
// } else if (day == "星期四") {
//   alert("Today is Thursay.");
// } else if (day == "星期五") {
//   alert("Today is Friday.");
// } else if (day == "星期六") {
//   alert("Today is Saturday.");
// } else if (day == "星期日") {
//   alert("Today is Sunday.");
// } else {
//   alert("Cannot determine your day.");
// }
