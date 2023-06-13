// Arrow(箭頭) Function Expression
// 是Function Expression的一種簡化語法
// !!! Arrow Function Expression沒有yhis關鍵字的綁定，不應用作Object的methods
// 如果有0或2個以上的parament(參數)的話括號()是必要的
// 如果只有1個parament的話，括號可加可不加

// 第1個語法
// () => expression
// 省略了function這段，變成()=>
let hello = () => {
  console.log("hello world");
};

hello();

let Joan = {
  name: "Yu",

  // Arrow Function Expression沒有this關鍵字的綁定
  // 所以我們不應該用Arrow Function Expression的寫法來當作Object的Methods
  walk: () => {
    console.log("Yu正在走路");
    console.log(this); // {}，瀏覽器中是window object
    console.log(this.name + "正在走路"); // undefined正在走路
  },

  // 以下walk1或walk2是適合當作Object Method的寫法

  // 用Function Declaration定義Joan這個物件的名為walk1的Method
  walk1() {
    console.log("Yu正在走路");
    console.log(this.name + "正在走路"); // undefined正在走路
  },

  // 雖然我們一開始定義walk2是Joan這個物件的Properties(屬性)，但因為這個Properties放進了用Function Expresion定義的函示，所以其實walk已經變成是Joan的Method了
  walk2: function () {
    console.log("Yu正在走路");
    console.log(this.name + "正在走路"); // undefined正在走路
  },
};

Joan.walk();
Joan.walk1();
Joan.walk2();

// 使用Arrow Function Expression來寫callback function
// 在VS Code中無法直接執行window.addEventListener，因為VS Code沒有window物件，要在瀏覽器執行
window.addEventListener("click", () => {
  alert("有人正在點擊螢幕");
});

// ===================================================================================================================

// 第2,3個語法(一個參數與多個參數)
// 如果我們有一個parament(參數)的話，()可加可不加，沒加的話prettier會自動補上
// param => expression
// 如果我們有0個或多個參數的話，()是一定要加的
// (param1,param2) => expression

let one_number = (num) => {
  return num;
};

let addtion = (a, b) => {
  return a + b;
};

console.log(one_number(3)); // 3
console.log(addtion(4, 5)); // 9

// ===================================================================================================================

// 第4個語法
// param => {return expression}
// 前面三種語法在文字介紹時都沒有使用{}，就是說在Arrow Function Expression如果你沒有加{}的話它會自動return後面expression算出的東西
// 如果函式程式碼不只一行的話也必須用{}
// 如果有用{}的話Arrow Function Expression要回傳結果就必須用return

let num15 = () => 15; // 自動return 15
console.log(num15()); // console印出15

// 有用{}的話Arrow Function Expression就不會自動return結果了
let num15_with_curly_brackets = () => {
  15;
};
console.log(num15_with_curly_brackets()); // console印出undefined

// 有用{}的話Arrow Function Expression要回傳結果就必須用return
let num15_with_curly_brackets_and_return = () => {
  return 15;
};
console.log(num15_with_curly_brackets_and_return()); // console印出15

// 沒有用{}，所以自動returna+b的結果
let addtion_no_curly_brackets = (a, b) => a + b;
console.log(addtion_no_curly_brackets(3, 5)); // console印出8
