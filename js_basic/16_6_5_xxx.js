// 編寫一個名為pyramid的函式，功能為按以下模式打印出星星層：

function printStar(space, star) {
  let result = "";
  for (let i = 0; i < space; i++) {
    result += " ";
  }
  for (let i = 0; i < star; i++) {
    result += "*";
  }
  console.log(result);
}

function pyramid(n) {
  let star = 1; // 四層星星第一行的星數是1，第二層是1+2=3，第三層是3+2=5
  let space = n - 1; // 四層星星第一行的空格是4-1=3，第二行的空格是3-1=2
  while (space >= 0) {
    printStar(space, star);
    star += 2;
    space -= 1;
  }
}

// console.log(pyramid(1));
//*
// console.log(pyramid(2));
//  *
// ***
console.log(pyramid(4));
//    *
//   ***
//  *****
// *******
