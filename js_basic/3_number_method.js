let x = 27;

//toString()就是會回傳數字轉成字串型態

console.log(x.toString()); // 回傳"27"，注意!!這裡x裡並沒有變成"27"
console.log(typeof x); // 還是number
console.log((x = x.toString())); // "27"，此時x.toString()前面有x=，所以回傳的"27"才會被賦予給x
console.log(typeof x); // 變成string了

let y = typeof x; // 宣告y的值為typeof x回傳的值
console.log(y); //變成string了，因為y已經被重複賦值了

//toFixed(n)，就是return被轉換後的數字，到小數點第n位，n為參數
//注意!!!回傳的值會變成字串

let pi = 3.14159;
console.log(pi.toFixed(2)); // 回傳"3.14"(是字串型別)，注意!!這裡x裡並沒有變成"3.14"
console.log(typeof pi); // 還是number
console.log((pi = pi.toFixed(2))); // "3.14"，此時pi.toFixed(2)前面有pi=，所以回傳的"3.14"才會被賦予給pi
console.log(typeof pi); //變成string了，因為pi已經被重複賦值了

//如果toString()或toFixed()忘記加()

let n = 12; //x是一個數字x也是一個物件
console.log(n.toString);
// 1.google chrome: ƒ toString() { [native code] }  2.fire fox: function toString()
// 對x來說toString是一個Method或Function，所以console.log(n.toString)，他就會以為你在問它toString是甚麼東西，它就回答是一個function
// 所以要加()他才知道是要用n來執行toString
