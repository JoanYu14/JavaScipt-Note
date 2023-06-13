// 電腦科學中String的subsequence是指，可以通過刪除零個或多個元素而不改變剩餘元素的順序，從而產生的新的String，就是原先String的subsequence。例如: book是brooklyn的subsequence。
// 寫出能夠給定任兩個String，請判斷第一個string是不是第二個string的subsequence。

function isSubsequence(str1, str2) {
  // 空字串也是subsequence，因為str2最後會變成空字串
  if (str1.length == 0) {
    return true;
  }

  let i = 0;
  let j = 0;
  while (j < str2.length) {
    // 如果str2還沒全部比對完的話就繼續
    if (str1[i] == str2[j]) {
      // 如果str1[i]與str[2]一樣的話i+1,j+1
      i++;
    }
    if (i >= str1.length) {
      // 如果i全部都比對完了那就回傳true
      return true;
    }
    j++; // 如果str[i]不等於str[j]的話，j就+1
  }
  return false; // 如果j全部都比對完了i還沒比對完就代表不是subsequence
}

console.log(isSubsequence("book", "brooklyn")); // true
console.log(isSubsequence("CAATCGA", "TCAATCAGGATCCGCTGA")); // true
console.log(isSubsequence("AATTAA", "TCAATCAGGATCCGCTGA")); // false
