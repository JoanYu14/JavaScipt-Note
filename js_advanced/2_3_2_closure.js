// Closure(閉包)
// 發現不在function scope中的變數，JS將往其他地方查找。
// 每次function execution context(函式執行環境)，都會在creation phase(創造階段)建立scope(依照Closure的規則)
// 也就是說它會遵循closure的規則來找到函式中沒有被定義的東西(沒有被傳入引數的參數)
// Closure規則
// 1.從Argument Obeject以及Local Variable去尋找
// 2.若從1找不到，則從記憶體被分配給函數的位置開始找
// 3.若在目前的execution context(執行環境)找不到就往外層，往全域一層一層的去找

// =====================================================================================================================================================

// 1-1.因為在呼叫add1的時候就會進入function execution context(函式執行環境)，然後在creation phase(創造階段)會先建立Argument Obeject
//   (規則1)因為只有傳入3,4這兩個argument(引數)，所以Argument Obeject只有說a的值為3，b的值為4，c的值不在Argument Obeject
//   (規則1)所以就會依照閉包的規則先往Local Variable尋找，add1裡面有宣告let c = 10;所以此次調用add1，add1內的變數c就會是10，就不會再往外找了。
function add1(a, b) {
  let c = 10;
  return a + b + c; // 3+4+10 = 17
}
console.log(add1(3, 4)); // 17

// 1-2.因為在呼叫add2的時候就會進入function execution context(函式執行環境)，然後在creation phase(創造階段)會先建立Argument Obeject
//   因為只有傳入3,4這兩個argument(引數)，所以Argument Obeject只有說a的值為3，b的值為4，c的值不在Argument Obeject
//   (規則1)所以就會依照閉包的規則先往Local Variable尋找，而Local Variable也沒有
//   (規則2)所以它就會根據規則2，若從1找不到，則從記憶體被分配給函數的位置開始找，此時就會找到跟他同個時候被分配到RAM的let c=100，他們都是在global execution context(全域環境)的創造階段的Hoisting時就被分配給記憶體了
//   所以此次調用add2，add2裡的c就會是100 (下次在調用此函式時就會再創造一個新的函式執行環境，就與此函式執行環境無關了)
let c = 100;
function add2(a, b) {
  return a + b + c; // 3+4+100 = 107
}
console.log(add2(3, 4));

// =====================================================================================================================================================

// 2.若從1找不到，則從記憶體被分配給函數的位置開始找

let myName = "小紋";

function sayHi() {
  let myName = "小余";
  console.log(myName + "說你好"); // (規則1)會印出小余說你好，因為有Local Variable，let myName = "小余"
  sayHi2(); // 會印出小紋說你好，因為sayHi執行到這裡時，會在sayHi2那裡產生一個函式執行環境

  sayHi3(); // 會印出小余說你好，因為sayHi執行到這裡時，會在定義sayHi3的地方產生一個函式執行環境(sayHi3是在sayHi中定義的)

  // 當sayHi執行到sayHi3那行時，在這裡又會產生一個函式執行環境
  // 因為此時sayHi3的區域變數與引數物件都找不到myName所以會根據規則2尋找
  // 在呼叫sayHi這個程式前RAM都不會分配位置給sayHi3
  // sayHi3是在sayHi的function execution context(函式環境)的creation phase(創造階段)的Hoisting時才被分配到RAM
  // 所以sayHi中的let myName = "小余";是跟sayHi3在同一個位置被分配給RAM的
  // 因此sayHi3中的myName就會為小余
  function sayHi3() {
    console.log(myName + "說你好");
  }
}

// 當sayHi執行到sayHi2()時，在這裡又會產生一個函式執行環境
// (規則1)sayHi2的Argument Obeject以及Local Variable都找不到myName
// (規則2)若從1找不到，則從記憶體被分配給函數的位置開始找的規則
// (規則2)因為sayHi2是在global execution context(全域環境)的創造階段的Hoisting時就被分配給記憶體了
// (規則2)所以它就會找到同樣在全域環境的hoisting時就被RAM分配位子的let myName = "小紋";
function sayHi2() {
  console.log(myName + "說你好");
}

sayHi(); // 會在sayHi產生一個函式執行環境

// =====================================================================================================================================================

// 3.若在目前的execution context(執行環境)找不到就往外層，往全域一層一層的去找

let num = 7;

function number1() {
  // (規則1)因為argument object與local variable都沒有num
  // (規則2)所以往2.記憶體被分配給函數的位置開始找
  // (規則2)因為number1是在global execution context(全域環境)的創造階段的Hoisting時就被分配給記憶體了
  // (規則2)它就會找到同樣在全域環境的創造階段的hoisting時就被RAM分配位子的let num = 7;
  console.log("數字為" + num); // 印出數字為7

  number2(); // number1被調用後執行到此行時會在定義number2的地方創造一個函式執行環境

  // 當numner1執行到number2()時，在這裡又會產生一個函式執行環境
  // (規則1)因為argument object與local variable都沒有num
  // (規則2)所以往2.記憶體被分配給函數的位置開始找
  // (規則2)number2是在numner1的function execution context(函式環境)的creation phase(創造階段)的Hoisting時才被分配到RAM
  // (規則2)所以它會在number1中(跟number2同一個被分配到RAM的位置)尋找有沒有num
  // (規則3)number1中也沒有num，此時它就會根據第3個規則尋找num，3:若在目前的execution context(執行環境)找不到就往外層，往全域一層一層的去找
  // (規則3)所以它往number1的外面一層找到全域範圍的let num = 7;，此時number2中的num才被定義為7，所以雖然跟number1的執行結果一樣，但過程並不同
  function number2() {
    console.log("數字為" + num);
  }
}

number1(); // 會在number1創造一個函式執行環境
