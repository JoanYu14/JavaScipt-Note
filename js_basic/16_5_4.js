// 編寫一個名為isAllUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的所有字母是否為大寫。

function isAllUpperCase(word) {
  let all_up = true; // 這裡先預設最後用來判斷的all_up為true
  console.log(word.length);

  // 如果是空字串的話all_up就變成false
  if (word.length == 0) {
    all_up = false;
  }

  // 空字串因為長度為0所以一開始就不會執行loop
  for (let i = 0; i < word.length; i++) {
    // 把word中index為i的字元他的編碼存到number裡
    let number = word[i].charCodeAt();
    console.log("此時檢查的字為:" + word[i] + "，此字元的編碼為:" + number);

    // A~Z的編碼為65~90，所以如果number不在這之間，all_up就為false
    if (number < 65 || number > 90) {
      all_up = false;
    }
  }

  // 最後如果all_up都沒變成false的話就回傳true回去
  if (all_up) {
    return true;
  } else {
    return false;
  }
}

console.log(isAllUpperCase("ABCD")); // returns true
console.log(isAllUpperCase("")); // returns false
console.log(isAllUpperCase("ABCDEFGHIJKLm")); // returns false
