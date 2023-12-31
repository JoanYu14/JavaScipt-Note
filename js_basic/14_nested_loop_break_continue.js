// Nested Loop(巢狀迴圈)、continue、break、巢狀迴圈搭配多維陣列
// 最內部的loop執行完才會執行往外一層的loop

let counter = 0;
for (let i = 0; i < 4; i++) {
  for (let j = 10; j < 13; j++) {
    for (let x = 20; x < 22; x++) {
      console.log("i=" + i + " , j=" + j + " , x=" + x);
      counter++;
    }
    // console.log("第三層迴圈結束");
  }
  //   console.log("第二層迴圈結束");
}
console.log("全部三層迴圈執行結束");
// 執行了24次(2(第三層) * 3(第二層) * 4(第一層) = 24)
console.log("全部三層迴圈總共執行:" + counter + "次");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// count = 500*100(內乘上外)
let count = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 500; j++) {
    count++;
  }
}
console.log("這個兩層迴圈執行了:" + count + "次");

// ===================================================================================================================

// 終止迴圈
// break
// break只會終止它那層的迴圈

console.log("break");
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 5; j++) {
    if (j == 2) {
      break; //這個break終止的是第二層迴圈(此層)，不會終止第一層
    }
    console.log("i=" + i + ", j=" + j); // 會發現j只會印出0,1，因為當j=2時，在此行上面的if就會執行break了
  }
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// return結束迴圈
// return會終止所有巢狀迴圈

console.log("用return結束迴圈");

// return只能出現在function裡面
function use_return_stop_loop() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
      if (j == 2) {
        return; // return會把所有迴圈都終止，不只此層
      }
      console.log("i=" + i + ", j=" + j); // 會發現i只會印出0，j只會印出0,1，因為當j=2時，在此行上面的if就會執行return了
    }
  }
}
use_return_stop_loop();

// ===================================================================================================================

// continue
// 用來強制循環執行下一次的迭代
// 它會使迴圈中continue以下的程式碼都不會執行，直接跳到下一次循環

console.log("使用continue");
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 5; j++) {
    if (j == 2) {
      continue; //這個continue是讓j=2時的第二層迴圈(此層)強制跳到下一次循環，所以會直接跳到j==3的循環
    }
    console.log("i=" + i + ", j=" + j); // 會發現j只會印出0,1,3,4，因為當j=2時，在此行上面的if就會執行continue了
  }
}

// ===================================================================================================================

// 多維陣列搭配巢狀迴圈

console.log("多維陣列搭配巢狀迴圈");

//第一層:for(i=0; 如果i<arr1_num陣列的長度迴圈就繼續; 每次迴圈最後i+1)

let arr1_num = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];
for (let i = 0; i < arr1_num.length; i++) {
  //第二層:for(j=0; 如果j<number陣列第[i]個陣列(也就是arr1_num第i行)的長度迴圈就繼續; 每次迴圈最後j+1)
  for (let j = 0; j < arr1_num[i].length; j++) {
    console.log(arr1_num[i][j]); //印出arr1_num陣列中第[i]行第[j]列
  }
  //第二層跳出後印出換行後第一層迴圈才會開始下一次
  console.log("換行");
}
