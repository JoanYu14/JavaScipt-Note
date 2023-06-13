// array陣列

// 建立一個空陣列，建立array的語法是[]
let array0 = [];
console.log(array0);

// 製造一個存放成績的陣列，裡面有5個element
// array中的東西被稱為element(元素)
let scores = [80, 60, 20, 30, 50];
let socre1 = 80;
let socre2 = 60;
let socre3 = 20;
let socre4 = 30;
let socre5 = 50;

//array中的element可以用"非負整數"的index(從0開始)來訪問
console.log(scores);
console.log(scores[0]);
scores[0] = 20; //把陣列中第0個改成20
console.log("更改後的成績為:" + scores[0]);

let students = ["小黑", "小黃", "小紅"];
console.log(students);

// array中可以包含不同的資料類型
let array1 = ["小黑", 3, null, undefined, false, true, NaN];
console.log(array1);

//計算陣列長度
console.log("陣列array1的長度為:" + array1.length);

// ============================================================================================================

// primitive types(基本類型資料型別)在javasript中有七個 :
// 1.Number(整數與帶小數點的數字) 2.BigInt(任意長度的整數) 3.String 4.Boolean 5.null 6.undefined 7.symbol
// primitive types都是value type，就是copy by value
// 在RAM中發生的事:
// let deposit = 500; =>一格存了500這個值，deposit就是指向這個格子。
// let anotherDeposit = deposit; =>因為是copy by value，所以RAM是把500這個值複製後再存到其他格子，然後anotherDeposit指向這個新格子
// anotherDeposit = 600; =>會改變anotherDeposit指向的格子的值，而不會改變deposit指向的格子
let deposit = 500;
let anotherDeposit = deposit;
anotherDeposit = 600;
console.log("deposit為:", deposit, "anotherDeposit為", anotherDeposit); //會為500與600，跟認知一樣

// array陣列是Object資料類型的(非基本類型)，Reference Types(引用類型，Reference就是RAM指向的地方)，而不是primitive types(基本類型)
// Reference Types是copy by Reference，就是讓新的Object指向複製的位置，而不是複製value放到新格子
// 在RAM中發生的事
// let num_array = ["a", "b", "c"]; =>在RAM中的3個連續格子分別存入"a" "b" "c"，然後num_array指向a這格(index:0)
// let another_num_array = num_array; =>因為array是copy by Reference，所以是讓another_num_arra指向num_array這個位子，而不是把num_array的值複製後存到新格子
// another_num_array[0] = "d"; =>是把another_num_array指向的地方index為0的那格改成"d"
// 由於another_num_array與num_array指向的是同一個地方，所以改變了another_num_array等於改變了num_array。

let num_array = ["a", "b", "c"];
let another_num_array = num_array; // copy by Reference，讓another_num_array指向與num_array一樣的位置
another_num_array[0] = "d"; // 此時num_array也被改變了
console.log("num_array為:", num_array, "another_num_array", another_num_array);

// ============================================================================================================
// primitive types做比較
// primitive types做比較是以值做==比較，所以只要值一樣就好。
let num1 = 10;
let num2 = 10;
console.log(num1 == num2);

// Reference Types做比較
// Reference Types做==比較是以Reference來做的，就是說他是比較object指向的位子是否相同而不是他們的值是否相同
// 因為a和b指向同一個位子所以會做==會為true，c雖然內容跟a一樣，但因為他是指向別的1,2,3所以與a做==比較會為false

let a = [1, 2, 3];
let b = a;
let c = [1, 2, 3];
console.log(a == b); // true
console.log(a == c); // false
