// 求s=a+aa+aaa+aaaa+aa...a的值，其中a是小於10的數字，相加的項數為n。例如，當a = 2，n=5時，s=2+22+222+2222+22222。若a  =2, n = 3，則輸出結果的形式如：2+22+222 = 246。編寫一個名為calc的函式，參數為a與n，回傳值為

function calc(n1, n2) {
  total = 0;
  // i就是要執行n2次(幾個a/aa/aaa...)
  for (let i = 0; i < n2; i++) {
    // num是要算a/aa/aaa用的
    let num = 0;

    // 可以得知例:222就是 2*10的0次=2 加上 2*10的1次=20 加上2*10的2次=200，
    // 2就是 2*10的0次=2
    // 22就是 2*10的0次=2 加上 2*10的1次=20
    // 222就是 2*10的0次=2 加上 2*10的1次=20 加上2*10的2次=200，
    // 所以用j這個迴圈算出每次i的num，let j = 0(第一次10的0次方)，j<i+1(因為至少用i的話i第一圈=0，會少執行一次)
    // j就等於每圈的次方
    for (let j = 0; j < i + 1; j++) {
      num += n1 * 10 ** j;
    }
    // 得到a or aa or aaa
    console.log(num);
    // total加上num，就是第i+1個加完了
    total += num;
  }
  return total;
}
console.log(calc(5, 1)); // 5
console.log(calc(2, 3)); // 246
console.log(calc(8, 5)); // 98760
