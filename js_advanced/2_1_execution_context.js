// Execution Context(執行環境)

let a = 3;

let result = area(a);
console.log(result);

var c = 5;

function area(s) {
  // 調用此Function時(第5行)
  // 創建Function Execution Contex(函式執行環境)
  // 1、 進入creation phase(創造階段)
  //  1-1、 創建argument object，這個argument object就會告訴你這個s的值是a，然後a=3，所以s的值就是3。argument object的key就是parameters(參數)，value就是argument(引數)
  //  1-2、 建立scope
  //  1-3、 this關鍵字被製作好，因為area一個不在物件中的function所以這個this指向global object，但是當這個function是一個物件的method時，這個this就會指向這個物件
  //  1-4、 (hoisting步驟)看這個area函式內有沒有甚麼變數或function，因為這裡沒有所以這個步驟就不用管他

  // 2 、 進入execution phase(執行階段)
  //   2-1、 逐行執行程式碼
  //    2-1-1、 執行s*s，因為argument object所以我們知道s=3，所以就是執行3*3=9，然後把9 return出來
  //    然後就會回到Global Execution Contex(全域執行環境)第5行，就會知道result是9
  return s * s;
}

// 算出result結果前的步驟
// 初次執行JS程式碼時:
// 一定會創建Global Execution Contex(全域執行環境)然後進行以下步驟:
//  1 、 進入creation phase(創造階段)
//   執行程式碼前就做了以下1-1-1 ~ 1-1-4
//   1-1、 global object製作完成 (此時才有window物件(瀏覽器執行))
//   1-2、 建立scope
//   1-3、 this關鍵字被製作好且綁定到global object上(瀏覽器的global object就是window物件)
//   1-4、 (hoisting步驟)a被宣告(沒有任何值)、area定義為一個function、result被宣告(沒有任何值)、c被宣告(因為是var，所以還賦予undefined這個值)，這四個(function內部也是)都已經在記憶體中預留位置

//  2 、 進入execution phase(執行階段)
//   2-1、 逐行執行程式碼
//    2-1-1、 3被放入a
//    2-1-2、 執行area這個函式(此時area函式會創建Function Execution Contex)，a套進去算出9，再把result的值存成9
//    在創造階段階段(1-1-4)就已經知道area函式是甚麼了，所以即使我們把area這個函式的定義寫在呼叫area函式後也可以成功執行，原因就是它是在creation phase就已經被存在RAM中了。
//    2-1-3、 執行console.log(result);
//    2-1-4、 5被放入c取代undefined

//   2-2、 遇到遞迴時，則使用call stack來排定工作順序(之後學到遞迴再詳細說明)
// =====================================================================================================================================================

console.log(this); // 這個this就是gobal object，在瀏覽器執行的話是印出window，在Node.js是{}
console.log(typeof this); // gobal object是object
