// 編寫一個名為isUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的第一個字母是否為大寫。
function isUpperCase(word) {
  if (word.length == 0) {
    return false;
  }
  return word[0] == word[0].toUpperCase();
}

// function isUpperCase(word) {
//   // 用charCodeAt(0)取得word中index為0的字元他的Unicode編碼
//   let number = word.charCodeAt(0);
//   //   console.log(number);

//   // A~Z的編碼為65~90
//   if (number >= 65 && number <= 90) {
//     return true;
//   } else {
//     return false;
//   }
// }

console.log(isUpperCase("ABCD")); // returns true
console.log(isUpperCase("")); // returns false
console.log(isUpperCase("aBCD")); // returns false
