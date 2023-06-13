// 編寫一個名為swap的函式，參數為一個String，回傳值為大小寫反轉的String。

function swap(word) {
  let swap_word = "";
  console.log(word.length);

  // 空字串因為長度為0所以一開始就不會執行loop
  for (let i = 0; i < word.length; i++) {
    // 把word中index為i的字元他的編碼存到number裡
    let number = word[i].charCodeAt();
    console.log("此時檢查的字為:" + word[i] + "，此字元的編碼為:" + number);

    // A~Z的編碼為65~90，a~z的編碼為97~122，大小寫相差32
    if (number >= 65 && number <= 90) {
      // 如果判斷number為大寫的話，那就把number+32再利用String.fromCharCode()把這個數字從編碼轉成字元並加到swap_word中
      swap_word += String.fromCharCode(number + 32);
    } else if (number >= 97 && number <= 122) {
      // 如果判斷number為小寫的話，那就把number-32再利用String.fromCharCode()把這個數字從編碼轉成字元並加到swap_word中
      swap_word += String.fromCharCode(number - 32);
    } else {
      // 如果不是小寫也不是大寫的話就直接number轉成字元加進swap_word裡面就好了
      swap_word += String.fromCharCode(number);
    }
  }

  return swap_word;
}

console.log(swap("Aloha")); // returns "aLOHA"
console.log(swap("Love you.")); // returns "lOVE YOU."
