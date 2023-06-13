// 編寫一個名為stars2的函式，功能為按以下模式打印出星星層：

function stars2(n) {
  let star = "";
  for (let i = 1; i <= n * 2 - 1; i++) {
    if (i <= n) {
      star += "*";
      console.log(star);
    } else {
      let star_down = star.slice(0, n - i); // 提取star中從0到n-i(負數，-1,-2,-3)，所以每次提取的星星都會少一個
      console.log(star_down);
    }
  }
  console.log("========================");
}

stars2(1);
// *
stars2(2);
// *
// **
// *
stars2(3);
// *
// **
// ***
// **
// *
stars2(4);
// *
// **
// ***
// ****
// ***
// **
// *

// function stars2(n) {
//   // 第一圈i=0
//   for (let i = 0; i < n; i++) {
//     // 因為j=-1，所以第一圈會執行1次(<0)，然後外層再循環一次，外層(i=1)第二圈時，j這層就會循環2次(j=-1,j=1)，所以印出兩個**，以此類推
//     for (let j = -1; j < i; j++) {
//       document.write("*");
//     }
//     document.write("</br>");
//   }

//   // 讓a為n，如果n>1的話就繼續，每次a-1
//   for (let a = n; a > 1; a--) {
//     // 讓b為a，如果b<a的話就繼續，每次b+1，例:外面a=4，b這層就會執行3次(b=1,b=2,b=3)，所以會印出3個*
//     for (let b = 1; b < a; b++) {
//       document.write("*");
//     }
//     document.write("</br>");
//   }
//   document.write("</br>");
// }
