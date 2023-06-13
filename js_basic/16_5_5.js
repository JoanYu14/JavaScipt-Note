// 編寫一個名為position的函式，唯一的參數是一個String，其功能為找到參數String當中的第一個大寫字母，並且回傳大寫字母的值以及其index位置。

function position(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i].toUpperCase()) {
      return word[i] + " " + [i];
    }
  }
  return -1;
}

// function position(word) {
//   for (let i = 0; i < word.length; i++) {
//     // 把word中index為i的字元他的編碼存到number裡
//     let number = word[i].charCodeAt();
//     console.log("此時檢查的字為:" + word[i] + "，此字元的編碼為:" + number);

//     // A~Z的編碼為65~90，所以如果number在這之間，就return這個字和其index結束函式
//     if (number >= 65 && number <= 90) {
//       // return後整個迴圈和function都會結束，所以只要找到第一個大寫就會結束函式了，後面的不會再判斷了
//       return "第一個大寫的字為" + word[i] + "，他的index為" + i;
//     }
//   }

//   // 如果迴圈結束都沒return的話就會跳到這行
//   return -1;
// }

console.log(position("abcd")); // prints -1
console.log(position("AbcD")); // prints A 0
console.log(position("abCD")); // prints C 2
