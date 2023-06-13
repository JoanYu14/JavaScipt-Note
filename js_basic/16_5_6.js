// 編寫一個名為findSmallCount的函式，其參數為一個整數的array以及另一個整數，功能是回傳一個整數，來表示array中有多少元素小於第二個參數。

function findSmallCount(arr, number) {
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log("被檢查中的值為:" + arr[i]);
    // console.log("拿來當基準被比較的值為" + number);
    if (arr[i] < number) {
      count += 1;
      console.log(arr[i] + "小於" + number);
    }
  }
  return count;
}

console.log(findSmallCount([1, 2, 3], 2)); // returns 1
console.log(findSmallCount([1, 2, 3, 4, 5], 0)); // returns 0
console.log(findSmallCount([1, 2, 3, 4, 5], 5)); // returns 4
