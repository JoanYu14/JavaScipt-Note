// 數值加總

// for迴圈做法:時間複雜度=O(n)線性增長，因為n越大迴圈就要越多次
function addUpTo(n) {
  // 先宣告sum=0
  let sum = 0;
  // 宣告計數器i=1(為了加總方便)，如果i小於n+1的話就會繼續執行(如果是n的話會少加n(最後一個))
  for (let i = 1; i < n + 1; i++) {
    sum += i;
  }

  return sum;
}

// 等差級數公式:時間複雜度=O(1)
function Arithmetic_sequence(n) {
  // 等差級數公式
  return ((1 + n) * n) / 2;
}

console.log(addUpTo(5)); // 15
console.log(addUpTo(100)); // 5050
console.log(addUpTo(5000)); // 12502500
console.log(addUpTo(100000)); // 5000050000

console.log("使用等差級數");

console.log(Arithmetic_sequence(5)); // 15
console.log(Arithmetic_sequence(100)); // 5050
console.log(Arithmetic_sequence(5000)); // 12502500
console.log(Arithmetic_sequence(100000)); // 5000050000

console.log("時間差異:");
let startTime1 = performance.now();
console.log(addUpTo(1000000));
let endTime1 = performance.now();
console.log("使用addUpTo(10000000000)執行時間為:" + (endTime1 - startTime1));

let startTime2 = performance.now();
console.log(Arithmetic_sequence(1000000));
let endTime2 = performance.now();
console.log(
  "使用Arithmetic_sequence(1000000)執行時間為:" + (endTime2 - startTime2)
);
