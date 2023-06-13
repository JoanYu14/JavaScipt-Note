// Math Object
// Math是JavaScript中的一個物件

// 常見的properties(屬性)
// 因為Pi和e都是常數，按照我們coding的習慣const(不能更改的變數=>常數)會全部用大寫表示，Math也遵循這個習慣
console.log(Math.PI); // PI=3.14....
console.log(Math.E); // 數學常數e= 2.71...

// 常見的Method
// 1.Math.pow(x,y) = power(x,y) = x的y次方
console.log(Math.pow(3, 2)); // 印出9

// 2.Math.random()
// 會回傳給我們一個介於0~1之間的數(不包括1)
// Returns a pseudorandom(偽隨機) number between 0 and 1.
console.log(Math.random());

// 3.Math.sqrt(x)
// sqrt是square root(平方根)的意思，所以Math.sqrt(x)就是對x開根號
console.log(Math.sqrt(9)); // 印出3

// 4.Math.abs()
// abs是absolute value(絕對值)的意思，所以Math.abs()就是取絕對值
console.log(Math.abs(-9.5)); // 印出9.5

// 5.Math.floor()
// floor是地板的意思，所以Math.floor()是向下取整數 = 無條件捨去
console.log(Math.floor(9.6)); // 印出9

// 6.Math.ceil()
// ceil是天花板的意思，所以Math.ceil()是向上取整數 = 無條件進位
console.log(Math.ceil(9.6)); // 印出10
