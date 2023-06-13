// 反轉陣列，並且時間複雜度要為O(n)

const friends = ["Harry", "Ron", "Snap", "Mike", "Grace", "Joan"];
const reversed_friends = [];
const use_func_reversed = [];

// 直接用函式.reverse()
// use_func_reversed = friends.reverse();  ==>>>這樣寫會錯:Assignment to constant variable.，因為=代表賦值，而const是不能重複賦值的
const use_func_reversed_111 = friends.reverse();
console.log(use_func_reversed_111);

// 這裡要先算好原本friends有幾個，如果再迴圈設定condition時用friends.length會只執行兩次
// 因為每次回圈內friends都會被刪掉一個element，所以每次判斷時friend.length都-1，i則是+1
let count = friends.length;

for (let i = 0; i < count; i++) {
  // 每次迴圈都把friends的最後一個element刪除並回傳到num裡
  let num = friends.pop();

  // 把num加到reversed_friends的最後一個位子
  reversed_friends.push(num);
}
console.log(friends); // 變成空陣列了
console.log(reversed_friends);

// 鏡像的概念就是index[0]對上index[length-1(最後一個index)]，index[1]對上index[length-1-1]，index[2]對上index[length-1-2]
// 直到前面往後的index與後面往前的index相同
function reverse_array(array) {
  let n = 0; // 第一個index
  while (n != array.length - 1 - n) {
    // 只要前面往後的index(n)與後面往前的index(length-1-n)不相同就繼續
    let temp = array[n]; // 先把array[n]的值存起來，因為array[n]要先被換掉
    array[n] = array[array.length - 1 - n]; // array[n]被跟他鏡像的index的值換掉
    array[array.length - 1 - n] = temp; // 此時與array[n]鏡像的值被提前存好的temp(原array[n]地值)換掉
    n++; // n+1(前面往後一個index)
  }
  console.log(array);
}

reverse_array(friends);
