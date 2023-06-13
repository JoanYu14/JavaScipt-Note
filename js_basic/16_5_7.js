// 編寫一個名為findSmallerTotal的函式，其參數為一個整數的array以及另一個整數，回傳值為array中小於第二個參數的所有元素的總和。

function findSmallerTotal(arr, number) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log("被檢查中的值為:" + arr[i]);
    // console.log("拿來當基準被比較的值為" + number);
    if (arr[i] < number) {
      // 如果被arr中index為i的值小於number的話sum就等於sum+這個值
      sum += arr[i];
    }
  }
  return sum;
}

console.log(findSmallerTotal([1, 2, 3], 3)); // returns 3
console.log(findSmallerTotal([1, 2, 3], 1)); // returns 0
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999)); // returns 25
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0)); // returns 0
