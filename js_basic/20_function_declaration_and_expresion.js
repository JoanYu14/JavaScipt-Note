// Function Declaration and Expression ， 還有介紹addEventListener
// 兩種定義函式的方法

// 1.Function Declaration
// 我們熟悉的定義函式的方法，此方法需要定義函式名稱，例 : function hello ( ){ statement }，hello就是此函式的名稱。
// 如果我們是用Declaration的方式定義函式，那即使我們在定義函式的程式碼上方就要執行此函式，一樣能執行成功(原因要再進階課程才會講)

console.log(addition_de(10, 15)); // 此時還沒出現定義函式的程式碼卻還是可以順利執行

function addition_de(a, b) {
  return a + b;
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Function Expresion
// 另一種定義函式的方法，此方法可以省略函式名稱創建匿名函數
// 如果我們是用Expresion的方式定義函式，那如果我們在定義函式的程式碼上方就要執行此函式，是無法成功執行的
// 主要用途為:
// 1. 創建一個未命名的Function，再把這個Function存入一個變數中，之後這個變數就可以直接等於這個Function了，讓程式碼更有彈性
// 2. 當作higher order function的callback function使用，例如，forEach或是addEventListener。A函式中還有B函式，那A函式就是higher order function，B函式就是callback function
// 3. 使用IIFE(Immediately立即地 Invokied執行 Function Expression)的功能

// console.log(addition_ex);  ==>>Cannot access 'addition_ex' before initialization (我們無法再addition_ex被宣告前使用它)

// 1. 用途1範例:
let addition_ex = function (a, b) {
  return a + b;
};
console.log(addition_ex(3, 5)); // 8

let Joan = {
  name: "Yu",

  // 用Function Declaration定義Joan這個物件的名為greet的Method
  greet() {
    console.log(this.name + "說嗨");
  },

  // 雖然我們一開始定義walk是Joan這個物件的Properties(屬性)，但因為這個Properties放進了用Function Expresion定義的函示，所以其實walk已經變成是Joan的Method了
  walk: function () {
    console.log(this.name + "正在走路");
  },
};

Joan.greet();
Joan.walk(); // 雖然一開始定義是屬性，但因為放進了函式所以變成Method，所以使用時要加()

// ===================================================================================================================

// 用途2

// 先介紹addEventListener
// addEventListener()
// 事件監聽器

// 第一個parameter(參數) : 我們要監聽的事件
// 第一個parameter(參數) : 事件發生後，我們要執行的Function
function react() {
  alert("有人正在點擊畫面");
}

// 如果有人點擊畫面(click)，就執行react函式
// addEventListener本身是一個higher order function
// react是一個callback function
window.addEventListener("click", react);

// 這個就是用Function Expresion創建匿名函式，當作higher order function的callback function使用
window.addEventListener("click", function () {
  alert("有人正在點擊畫面");
});

// 用Function Expression當作callback function的好處:
// 第一點 : 果我們程式碼有許多callback function都是用function declaration的方式
//          以後我們命名變數時都要避開這些function declaration。
// 第二點 : callback function的名稱其實沒有意義，因為她只有在事件發生時就會自動執行函式(唯一有用的地方)，所以它有沒有名字對於程式碼並不重要
//          如果是像addtion函式它並不是callback function，所以會取一個讓我們一看就知道他是做甚麼用的名稱
// 第三點 : 使程式碼變乾淨

// ===================================================================================================================

// 用途3
// 如果我們要立即使用一個函式，並且這個函式以後都不會再用到了，那就可以使用IIFE(立即執行地Function Expression)
// 立即執行這個匿名函式
(function (a, b) {
  console.log(a - b);
})(10, 5); // 5
