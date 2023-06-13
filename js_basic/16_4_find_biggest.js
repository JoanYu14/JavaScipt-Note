// 找陣列中最大的數

function findBiggest(arr) {
  // 一開始就預設讓max = 傳入的陣列的第一個element
  // 空陣列的話因為沒有index[0]的項目，所以就會是undefined
  let max = arr[0];

  // 讓i執行陣列的長度次-1次，因為如果剛好執行=長度次的話會發生，陣列有5個元素那index就只到4。
  // 那會發生arr[4+1=5]，那就超過index了(b會等於undefined)
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(
      "目前的max為:" +
        max +
        "，目前做比較的值為arr的index為" +
        (i + 1) +
        "的項目:" +
        arr[i + 1]
    );

    // 每圈都讓b跟arr[i + 1]做比較，如果b>max，那max更新成b
    if (arr[i + 1] > max) {
      max = arr[i + 1];
      console.log("max更新為:" + arr[i + 1]);
    }
  }
  console.log("比較完成");
  // 回傳比較後的max
  return max;
}

console.log(findBiggest([15, 20, 22, 16, 7])); // return 22
console.log(findBiggest([1, 2, 3, 4, 5, 999])); // return 999
console.log(findBiggest([-11, 0, -3, -4, -5, -999])); // return 0
console.log(findBiggest([])); // return undefined
