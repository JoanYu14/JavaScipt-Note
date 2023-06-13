// 編寫一個名為mySort的函式，參數為一個array of numbers，回傳值為一個將元素由小到大排序的array。
// 氣泡排序

function mySort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        // 因為[j + 1]比較小，所以與array[j]交換
        array[j] = array[j + 1];
        // array[j + 1]  = temp(比較大的)
        // 所以下一圈還是用此數比較
        array[j + 1] = temp;
        console.log(array);
      }
    }
  }
  return array;
}

console.log(mySort([17, 0, -3, 2, 1, 0.5])); // returns [-3, 0, 0.5, 1, 2, 17]
