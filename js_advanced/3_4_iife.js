// IIFE(Immediately Invoked Function Expression)立即呼叫的函式表示式
// 在定義後立即執行的function
// 語法 : (function(){.....})();
// 可以用function expression(函式表達式)、arrow function expression(箭頭函式表達式)來做IIFE，因為我們只會執行此function一次而已，所以給他名字沒有意義，引此我們通常會用這兩種方法
// function declaration(函式宣告)也式可以做IIFE，但因為是IIFE，所以執行後function_name()這個函式就不存在了，所以後面也無法用function_name()的方式呼叫他，因此沒什麼人用此方法執行IIFE

// =====================================================================================================================================================

// 用function expression(函式表達式)做IIFE
// 立刻執行console印出Use function expression
(function () {
  console.log("Use function expression");
})();

// =====================================================================================================================================================

// 用Arrow function expression(箭頭函式表達式)做IIFE
// 立刻執行console印出Use arrow function expression
(() => {
  console.log("Use arrow function expression");
})();

// =====================================================================================================================================================

// 用function declaration(函式宣告)做IIFE
// 立刻執行console印出Use function declaration
// 因為是IIFE，所以執行後function_declaration就不存在了，所以後面也無法用function_declaration()的方式呼叫他
// 因此通常做IIFE並不會使用function declaration的方式，因為沒意義
(function function_declaration() {
  console.log("Use function declaration");
})();

// function_declaration();  ==>>ReferenceError: function_declaration is not defined

let function_declaration = "函式宣告";
console.log(function_declaration); // console印出函式宣告，代表使用IIFE內定義的function_declaration已不存在

// =====================================================================================================================================================

// 最普通的函式宣告，後面還可以繼續呼叫hello()函式
function hello() {
  console.log("hello");
}

hello(); // console印出hello

// let hello = 30;
// console.log(hello)  ==>>Identifier 'hello' has already been declared(hello已被聲明)
