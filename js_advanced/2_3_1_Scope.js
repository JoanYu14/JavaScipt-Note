// Scope(變數的可訪問(有效)範圍)

// Global Scope(全域範圍)
// Global Variable(全域變數)就是全域範圍

let x = "hello wolrd"; // x寫在所有{}區塊外，就是Global Variable(全域變數)

function hello1() {
  function hello2() {
    console.log(x);
  }
  // function declaration也有functoin scope
  hello2();
}

hello1(); // hello1()可以抓到x，就代表Global Variable的scope非常大

// =====================================================================================================================================================

// Function Scope(函式範圍)
// 變數只有在該Function中可訪問(只有在該Function中有效)
// 在該Function外使用的話會得到variable_name is not defined
// let const var都適用
// function declaration也有functoin scope

function num() {
  // a寫在num這個function中，所以a為num的Local Variable(區域變數)，而這個a是Function Scope(函式範圍)，也就是說a只有在num中是可訪問的(有效的)
  let a = 10;
}
//console.log(a);   ===>>> a is not defined

function fun1() {
  console.log("is function1");
  fun2();

  // function declaration也有functoin scope，所以fun2只能在fun1中呼叫
  function fun2() {
    console.log("is function2");
  }
}
console.log(fun1()); // 印出is function1還有is function2
//fun2();  ===>>>fun2 is not defined，fun2只能在fun1中呼叫

// =====================================================================================================================================================

// Block Scope(區塊範圍)
// 用大括號{}包住的地方我們會稱為block(區塊)
// 在block中用let或const宣告的變數就屬於Block scope(區塊範圍)
// 最常見就是在loop或if裡面
// 只有let何const有這個scope，var是沒有Block Scope的

if (true) {
  let myName = "Joan"; // myName這個變數就屬於Block Scope(區塊範圍)，在此if stament外就沒有效了
}
// console.log(myName);  ===>>>myName is not defined

for (let i = 0; i < 5; i++) {}
// console.log(i);  ===>>>i is not defined

let LuckyNumber = 7; // 這個LuckyNumber是Global Scope

// 這個loop中的LuckyNumber是Block Scope，所以他只在這個loop中有效，所以雖然它跟60行宣告的LuckyNumber是一樣的名字，但並且不是redeclaration(重複宣告)
// let本來就不能重複宣告，所以這個loop外的LuckyNumber還是7(就是60行全域範圍的那個)
for (let LuckyNumber = 0; LuckyNumber < 2; LuckyNumber++) {
  console.log(LuckyNumber); // 依序印出0 1
}
console.log(LuckyNumber); // 印出7，因為loop中的LuckyNumber是Block Scope，所以此行訪問到的還是60行宣告的那個擁有Global Scope的LuckyNumber

// =====================================================================================================================================================

// var沒有block scope，所以不要用var定義變數

if (true) {
  var friend = "Kevin"; // var並沒有Block scope，所以整個程式碼都可以訪問friend
}
console.log(friend); // 印出Kevin

var q = 100;
// 發生redeclaration(重複宣告),reassignment(重複賦值)
for (var q = 0; q < 10; q++) {}
console.log(q); // 印出10
