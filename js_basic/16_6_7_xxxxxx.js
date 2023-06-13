// 編寫一個名為factorPrime的函式，唯一的參數是個整數n，回傳值是一個String，表示n的質因數分解結果。
// 短除法
function factorPrime(n) {
  let answer = n + " = ";
  let p = 2; // 先由最小質數2開始除
  while (p <= n) {
    // 如果p小於或等於n就繼續
    if (n % p == 0) {
      // 短除法
      n /= p;
      answer += p + " x ";
    } else {
      p++; // 如果p不能整除n的話p就+1
    }
  }

  let answer2 = "";
  for (let i = 0; i < answer.length - 3; i++) {
    //answer.length - 3是要把最後的 x 刪掉
    answer2 += answer[i]; // 一個個加進answer2裡，除了 x
  }
  console.log(answer2);
}

factorPrime(120); // returns "2 x 2 x 2 x 3 x 5"
