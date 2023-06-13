// 編寫一個名為reverse的函式，參數為一個String，回傳值為順序反轉的String。

function reverse(word) {
  // 先宣告一個名為reverse_word的空字串
  let reverse_word = "";

  // 宣告計數器i為0，如果i<字串長度的話就繼續(總共執行word.length次)
  for (let i = 0; i < word.length; i++) {
    // 每次循環都讓reverse_word加上word中index為(word.length - 1 - i)的字，-1是因為index是從0開始的沒減1的話第一圈會是(word.length-0(i))，沒有這個index
    // 就是鏡像的概念
    reverse_word += word[word.length - 1 - i];
  }
  return reverse_word;
}

console.log(reverse("abcd")); // returns "dcba"
console.log(reverse("I am a good guy.")); // returns ".yug doog a ma I"
