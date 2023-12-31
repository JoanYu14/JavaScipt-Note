// Operators(運算符)
// comparison operator(比較運算符)

// 1. ==(等於) : 就是比較兩個運算元是否相同，是的話就回傳true
console.log(1 + 1 == 2); // 回傳true，就是問1+1是否等於2
console.log(1 + 2 == 2); // 回傳false，就是問1+2是否等於2

// 2. !=(不等於) : 就是比較兩個運算元是否"不"相同，是的話就回傳true
console.log(1 + 1 != 2); // 回傳false，就是問就是問1+1是否"不"等於2
console.log(1 + 2 != 2); // 回傳true，就是問1+2是否"不"等於2

// 3. ===(值相同並且資料型態也相同) : 就是比較兩個運算元內容是否相同外，還要比較資料型態是否相同，都相同的話就回傳true
console.log(1 == "1"); // 回傳true，因為==是比較兩個運算元的值的部分而已
console.log(1 === "1"); // 回傳false，因為===除了比較兩個運算元的值還比較資料型態

// 4. !==(值和資料型態都不相同或其中一個不相同就會回傳true)
console.log(1 !== "1"); // 回傳true
console.log(1 !== 1); // 回傳false
console.log(1 !== 2); // 回傳true

// 5.>    6.<    7.>=    8.<=
console.log(2 > 2); // 回傳false
console.log(2 < 2); // 回傳false
console.log(2 >= 2); // 回傳true
console.log(2 <= 2); // 回傳true

// ======================================================================================================================

// logical operator(邏輯運算符) : &&(且and)，||(或or)，兩個運算元可以為任意資料型態
console.log("logical operator");
let x1 = true;
let x2 = true;
let x3 = false;
let x4 = false;

// &&要兩個皆為true，才會回傳true
console.log(x1 && x2); // 回傳true
console.log(x1 && x3); // 回傳false
console.log(x3 && x4); // 回傳false，雖然x3和x4一樣，但他們都是false

// ||只要其中一個為true，就回傳true(只有兩個都為false，才會回傳false)
console.log(x1 || x2); // 回傳true
console.log(x1 || x3); // 回傳true
console.log(x3 || x4); // 回傳false，因為兩個都是false

// ======================================================================================================================

// bitwise operator(位元運算符)
// Bitwise，Bit就是Binary digit(二進制中的每個數字)，Bitwise就是二進制中的每個數字每兩個每兩個拿來做Operation，把1看成true，0看成false
console.log("bitwise operator");
let a = 10; // 1010
let b = 9; // 1001

// 1.& : 兩個運算元的二進制的對應位置都為1的位置回傳1，否則回傳0，跟&&相同，1為true，0為false，所以&就是要兩個都是1才會回傳1
console.log(a & b);
/*用這個註解區來做計算(由上而下對應):
a      = 1 0 1 0
b      = 1 0 0 1
計算得 = 1 0 0 0
答     = 8(1000由二進制轉十進制就是8)
*/

//#######################################################################################################

// 2.| : 兩個運算元的二進制的對應位置都為0的位置回傳0，否則回傳1，跟||相同，1為true，0為false，所以|就是要兩個都是0才會回傳0
console.log(a | b);
/*用這個註解區來做計算(由上而下對應):
a      = 1 0 1 0
b      = 1 0 0 1
計算得 = 1 0 1 1
答     = 11(1011由二進制轉十進制就是11)
*/

//#######################################################################################################

// 3.^ : 兩個運算元的二進制的對應位置都相同的位置回傳0(XOR)，否則回傳1，與一般的邏輯或不同，當兩兩數值相同時為否，而數值不同時為真。
console.log(a ^ b);
/*用這個註解區來做計算(由上而下對應):
a      = 1 0 1 0
b      = 1 0 0 1
計算得 = 0 0 1 1
答     = 3(0011由二進制轉十進制就是3)
*/

//#######################################################################################################

// 4.~a : 翻轉a這個運算元的每個bit
console.log(~a);
/*用這個註解區來做計算(由上而下對應):
a      = 1 0 1 0
計算得 = 0 1 0 1
答     = 5(0101由二進制轉十進制就是5) 電腦會顯示11是因為CPU的一個blabla問題，但正確答案為5
*/

//#######################################################################################################

// 5.a<<n : 將二進制中的a向左移動n位，向左移動後右邊空出來的補0，丟棄任何被移出的bit
console.log(a << 2);
/*用這個註解區來做計算(由上而下對應):
a      = 1 0 1 0
計算得 = 1 0 1 0 0 0
答     = 40(10100由二進制轉十進制就是40)
*/

//#######################################################################################################

// 6.a>>n : 將二進制中的a向右移動n位，向右移動後左邊空出來的補0，丟棄任何被移出的bit
console.log(a >> 2);
/*用這個註解區來做計算(由上而下對應):
a      = 1 0 1 0
計算得 = 0 0 1 0 
答     = 2(0010由二進制轉十進制就是2)
*/

//#######################################################################################################
let c = 10;
let d = 17;
console.log(c & d);
// a      = 0 1 0 1 0
// b      = 1 0 0 0 1
// 計算得 = 0 0 0 0 0
// 答     = 0(0011由二進制轉十進制就是3)

console.log(c | d);
// a      = 0 1 0 1 0
// b      = 1 0 0 0 1
// 計算得 = 1 1 0 1 1
// 答     = 27(0011由二進制轉十進制就是3)
