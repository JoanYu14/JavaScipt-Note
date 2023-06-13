// 首幾個費波那契數是：0、1、 1、 2、 3、 5、 8、 13、 21、 34、 55、 89、 144、 233、 377、 610、 987、…。編寫一個名為fib的函式，唯一的參數是個整數n，回傳值為斐波那契數列的第n項。

function fib(n) {
  // F0和F1是一開始就預設好的
  let fibarr = [0, 1];

  // 因為一開始fibarr就有至少index1，所以如果i<n的話就繼續，就是如果n=2的話此時fibarr就要再push1個值，n=8的話就要push7個
  // 如果只要找fib(1)或fib(0)的話condition(i<n)就不會為true，不需要push值進去
  for (let i = 1; i < n; i++) {
    // 每圈都push fibarr[i - 0] 加上 fibarr[i - 1]到fibarr的最後面
    // 例:第一圈 i=1那就是push fibarr[1]加上fibarr[0]進去
    //    第二圈 i=2那就是push fibarr[2]加上fibarr[1]進去
    fibarr.push(fibarr[i - 0] + fibarr[i - 1]);
    console.log("此時fibarr有" + fibarr);
  }
  return fibarr[n];
}

function fib1(n) {
  let array = [0, 1];

  // 因為迴圈內每次push陣列長度都會增加，所以用array.length當計數器
  // 如果n=1,陣列長度原本就為2那就不執行迴圈。如果n=2,陣列長度原本為2那就要執行迴圈。
  while (array.length <= n) {
    array.push(array[array.length - 2] + array[array.length - 1]);
  }
  return array[n];
}

console.log(fib1(0)); // returns 0
console.log(fib1(1)); // returns 1
console.log(fib1(2)); // returns 1
console.log(fib1(3)); // returns 2
console.log(fib1(8)); // returns 21
console.log(fib1(12)); // returns 144
