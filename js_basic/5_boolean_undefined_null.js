// boolean(布林值) : true,false

console.log(1 + 1 == 2); // 回傳true，就是問1+1是否等於2
console.log(!true); // 回傳false，!會將布林值反轉
console.log(!false); // 回傳true，!會將布林值反轉
console.log(1 + 1 != 2); // 回傳false，就是問就是問1+1是否"不"等於2
console.log(1 + 2 == 2); // 回傳false，就是問1+2是否等於2
console.log(1 + 2 != 2); // 回傳true，就是問1+2是否"不"等於2

// ======================================================================================================================

// undefined: 宣告變數但沒賦值的話，變數的值就會是undefined
// null: 用來代表"故意不存在"的值

let x;
console.log(x); // 回傳undefined，因為宣告變數x的時候沒有給他值，這時x正在等待賦值

let y = null;
console.log(y); // 回傳null，這個意思是這個y就是故意沒有東西的，並沒有在等待賦值
