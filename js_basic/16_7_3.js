// 打印出所有的"水仙花數"。所謂"水仙花數"是指一個三位數，其各位數字立方和等於該數本身。例如：153是一個"水仙花數"，因為$153=1^3+5^3+3^3$，或370也是水仙花數，因為$370=3^3+7^3+0^3$。

function PPDI() {
  for (let i = 100; i < 1000; i++) {
    // 讓number = i(因為要取各位數)
    let number = i;
    // 讓n1(百位數) = 無條件捨去number/100
    let n1 = Math.floor(number / 100);

    // number = number - n1(在百位的那個數)*100
    number -= n1 * 100;
    let n2 = Math.floor(number / 10);
    number -= n2 * 10;
    let n3 = Math.floor(number / 1);
    if (n1 ** 3 + n2 ** 3 + n3 ** 3 == i) {
      console.log(i);
    }
  }
}

PPDI(); // 153, 370, 371, 407
