// 編寫一個名為"shuffle()”的函數，唯一的參數為一個array of integers，return type也是array of integers，返回的array與參數array的元素相同，但元素順序為隨機排序的結果。
function shuffle(arr) {
  let currentIndex = arr.length - 1; // 從最後一個開始，讓currentIndex與0~currentIndex間隨機的某個index互換
  let randomIndex;

  while (currentIndex != 0) {
    // 選定一個0~currentIndex的隨機整數
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--; // 每次結束currentIndex都要往前一格

    let temp = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  console.log(arr);
  return arr;
}

shuffle([2, 11, 37, 42]); // 可能是[42, 11, 37, 2]
