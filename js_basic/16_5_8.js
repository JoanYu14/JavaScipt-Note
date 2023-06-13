// 編寫一個名為stars的函式，功能為按以下模式打印出星星層：

function stars(n) {
  for (let i = 1; i < n + 1; i++) {
    let total_star = "";
    //total_star += "*";
    for (let j = 0; j < i; j++) {
      total_star += "*";
    }
    console.log(total_star);
  }
}

function stars1(n) {
  let total_star = "";
  for (let i = 1; i <= n; i++) {
    total_star += "*";
    console.log(total_star);
  }
}

// stars(1);
stars1(4);
//console.log(stars(1));
// *
//console.log(stars(4));
// * i=1
// ** i=2
// *** i=3
// **** i=4

// function stars(n) {
//   // 第一圈i=0
//   for (let i = 0; i < n; i++) {
//     // 因為j=-1，所以第一圈會執行1次(<0)，然後外層再循環一次，外層(i=1)第二圈時，j這層就會循環2次(j=-1,j=1)，所以印出兩個**，以此類推
//     for (let j = -1; j < i; j++) {
//       document.write("*");
//     }
//     document.write("</br>");
//   }
//   document.write("</br>");
// }
