// Hoisting [Execution Context(執行環境)中的creation phase(創造階段)會發生的事情]Hoisting [Execution Context(執行環境)中的creation phase(創造階段)會發生的事情

// hoisting發生時function、variable或class的declaration(宣言)就會被移至頂部，assignment(賦值)並不在hoisting內
// hoisting的優點就是允許我們在code中declarate(宣告)這個function前就能使用這個function
// 但是只對function declaration(函式宣告)有用，對Function Expression(函式表達式)與Arrow Function Expression沒有用，因為assignment(賦值)並不在hoisting裡面

// function hello{...stament..}，這個function declaration被移至頂部了，所以才能在程式碼中把定義function的程式碼寫在調用function後
// var x = undefined; 先在記憶體中留位子給x並賦予它undefined這個初始值(initialization)，只有var有，let與const並不會被賦予undefined
// let y; 先在記憶體中留位子給y，並沒有initialization值
// const z; 先在記憶體中留位子給z，並沒有initialization值
// let i; 先在記憶體中留位子給y，並沒有initialization值
// let myFunc; 在hoisting只知道有myFunc這個東西，assignment(賦值)並不在hoisting裡面所以myFunc後面的 = ....(Function Expression)是在執行階段才會知道的，所以這種函式並不能寫在調用函式前

// =====================================================================================================================================================
// =====================================================================================================================================================

// 變數let , const , var 在hoisting中的差異
// var
console.log(x); // undefined，因為在hoisting時我們只把var x;就是variable的declaration(宣言)放至頂端，assignment(賦值)並不在hoisting裡面
var x = 5;

//let
//console.log(y);  ===>>>Cannot access 'y' before initialization(初始化前無法訪問“y”)
let y = 10;
console.log(y); // 印出10，此時y已被賦予10(被initialization了)

//console.log(i);  ===>>>Cannot access 'i' before initialization(初始化前無法訪問“i”)
let i; // 執行階段執行到此行時會賦予undefined這個值給i
console.log(i); // 印出undefined，就可以知道let變數自動initialization undefined這個動作是在"執行階段(第24行)"才被賦予的，而var變數是在"創建階段"就被賦予

const z = 6;

//console.log(h);  ===>>>因為這個程式中都沒有宣告過h這個變數，所以會出現h is not defined，與y,i,x這些有在程式碼內宣告的變數是完全不同的

// =====================================================================================================================================================

// function declaration(函式宣告)與Function Expression(函式表達式)在hoisting中的差異

// function declaration
// 此種定義函式的方式是能在declarate function就調用function的，因為這個function在hoisting時就已被存在RAM中了
hello();

function hello() {
  console.log("hello");
}

// Function Expression(函式表達式) or Arrow Function Expression
// 由於hoisting是把declaration(宣言)放至頂端並分配至RAM中，所以在執行到52行前，myFunc都還只是以let myFunc;這個declaration放在頂端並沒有assignment(賦值)
// 也就是說在執行階段執行到53前let myFunc 後面=()=>{...}都還沒被存到myFunc中，所以此種定義函式的方式並不能寫在調用函式前
// myFunc(); 會出現Cannot access 'myFuncResult' before initialization

let myFunc = () => {
  console.log("this is my function");
};
