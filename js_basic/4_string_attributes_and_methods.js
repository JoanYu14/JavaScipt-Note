// string的屬性與方法
str = "Joan Yu";

// length是屬性所以不用加括號()
console.log(str.length); // 7，空白也算一個字

// ======================================================================================================================

// [n]，return字串中第n項的字(index索引從0開始)

console.log(str[0]); // 回傳J
console.log(str[4]); // 回傳一個空白
console.log(str[6]); // 回傳u(最後一個字)
console.log(str[7]); // 回傳undefined，因為雖然有7個字，但由於索引是從0開始，所以最後一個字的索引是6，沒有索引7
console.log(str[-1]); // undefined
console.log(str[str.length - 1]); //回傳u，所以我們要找最後一個字可以用str.length找出長度後再減1就會是最後一個字的index

// =======================================================================================================================

// silce(indexStart[,indexEnd])，slice就是片，就是提取字串的一部份做為新的string回傳，並且不會改變原本的string
// indexEnd是一個optional(可選擇的)的意思是可選可不選，不選就是從indexStart直接到最後，還是一個exclusive(排除的)
// 就是從indexStart到indexEnd，但不包括indexEnd

console.log(str.slice(2)); // 回傳"an Yu"，就是包括從index為2(a)的字開始往後的全部都提取
console.log(str.slice(2, 6)); // 回傳"an Y"，包括從index為2(a)的字開始往後到不包括index為6的提取，所以是提取index 2~5
console.log(str.slice(2, 7)); // 回傳"an Yu"
console.log(str.slice(2, str.length)); // 回傳"an Yu"，str.length=7

// ======================================================================================================================

// indexOf(substring)
// return substring的位置，如果找不到則return -1
console.log(str.indexOf("a")); //回傳2
console.log(str.indexOf("an")); // 回傳2，因為an是從index=2(a)開始的
console.log(str.indexOf("anY")); // 雖然字串內有an也有Y，但是沒有anY，所以會回傳-1
let str2 = "abab";
console.log(str2.indexOf("b")); // 字串內有兩個b，他會回傳第一個b的index

// ======================================================================================================================

// toUpperCase()，return轉換為大寫的string，不會影響本身
// toLowerCase()，return轉換為小寫的string，不會影響本身

console.log(str.toUpperCase()); // return "JOAN YU"
console.log(str.toLowerCase()); // return "joan yu"

// ======================================================================================================================

// split(pattern)
// 接受一個pattern並通過搜索將一個字串分成一個有序的array(陣列)，並return這個Array

let sentence = "Today is a good day";
let sentence001 = "Today is a good day\nHow are you? ";
console.log(sentence.split()); // 回傳['Today is a good day']
console.log(sentence.split(" ")); // 回傳['T', 'o', 'd', 'a', 'y', ' ', 'i', 's', ' ', 'a', ' ', 'g', 'o', 'o', 'd', ' ', 'd', 'a', 'y']
console.log(sentence.split("")); // 回傳['Today', 'is', 'a', 'good', 'day']
console.log(sentence.split("a")); // 回傳['Tod', 'y is ', ' good d', 'y']，以a為分割對象
console.log(sentence001.split("\n")); // 回傳['Today is a good day', 'How are you? ']，以\n(換行)來分割
console.log(sentence001.split("ay")); // 回傳['Tod', ' is a good d', '\nHow are you? ']

// ======================================================================================================================

// startsWith(s): 確定字串是否以指定字串s開頭，回傳ture或false
// endsWith(s): 確定字串是否以指定字串s結尾，回傳ture或false

console.log(sentence.startsWith("Today")); // 回傳ture
console.log(sentence.startsWith("today")); // 回傳false
console.log(sentence.endsWith("day")); // 回傳true

// ======================================================================================================================

// includes(str): 如果字串內部包含str的話就回傳true

console.log(sentence.includes("good")); // 回傳true
console.log(sentence.includes("god")); // 回傳flase

// ======================================================================================================================

// charCodeAt(n): 返回一個介於0~65535之間的整數，表示給定索引處的那個字元的UTF-16 code unit

console.log(sentence.charCodeAt(3)); // 回傳97，97就是字串中索引為3(a)的字元它的UTF-16 code unit
