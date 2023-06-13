// 編寫一個名為isPrime的函式，它接受一個整數作為參數，回傳值為一個boolean，告訴我們參數是否為一個質數。

function isPrime(n) {
  // 如果n=1就直接return false結束函式
  if (n == 1) {
    return false;
  }

  // 因為質數的定義是除了1和自己外沒有其他因數，所以i從2開始，如果i<n的話就繼續
  for (let i = 2; i < n; i++) {
    // console.log(i);

    // 如果n除以i取餘數為0就代表i是n的因數(回圈內i就是2~n-1)，此時就return false結束函式
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1)); // returns false
console.log(isPrime(5)); // returns true
console.log(isPrime(91)); // returns false
onsole.log(isPrime(1000000)); // returns false
