// 回文是指，正著讀或反著讀都一樣的句子。例如:【上海自來水來自海上】是迴文。寫一個名為palindrome的函式，它接受一個String作為參數，回傳值為一個boolean，告訴我們參數是否為回文。

function palindrome(word) {
  // 因為會有回文的字串長度都是奇數，並且是以字串長度/2(有小數點無條件捨去)的index來做切割的
  let slice_index = Math.floor(word.length / 2);
  console.log(slice_index);

  // 把word以0到slice_index(不包括)做提取並存到word_1裡
  let word_1 = word.slice(0, slice_index);

  // 把word以slice_index+1(因為是以此為分界基準)到word.length(不包括)做提取並存到word_2裡
  let word_2 = word.slice(slice_index + 1, word.length);
  console.log(word_1);
  console.log(word_2);

  // 宣告計數器i為0，如果i<word_2的長度的話就繼續
  for (let i = 0; i < word_2.length; i++) {
    // 因為word_1的第1個要與word_2的最後一個相同，word_1的第1個要與word_2的最後減一個相同
    // 所以如果word_1的第[i]個字與word_2中的第(word_2長度-1-i)不同，第一圈i=0，最後一個的index就是長度-1
    // 就回傳false結束函式
    if (word_1[i] != word_2[word_2.length - 1 - i]) {
      return false;
    }
  }

  // 如果迴圈循環結束就會跳到這行，代表word是回文
  return true;
}

console.log(palindrome("bearaeb")); // true
console.log(palindrome("whatever revetahw")); // true
console.log(palindrome("Aloha, how are you today?")); // false
