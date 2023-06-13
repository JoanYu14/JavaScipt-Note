// 編寫一個名為inversePyramid的函式，功能為按以下模式打印出星星層：

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

function inversePyramid(n) {
  let space = 0;
  let star = 2 * n - 1;
  while (space < n) {
    // 最後一層的space就是n-1個
    printStar(space, star);
    space += 1;
    star -= 2;
  }
}

inversePyramid(4);
// *******
//  *****
//   ***
//    *
