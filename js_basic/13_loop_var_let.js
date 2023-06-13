// Loop(迴圈)

// 1. For Loop(For迴圈)
// 如果我們已經知道我們想要程式要執行幾次的話，就用for loop
// initialization: 循環開始之前的計數器變量聲明(就是宣告一個變數，這個變數就是計數器)，例:let i=0，i就是initialization
// condition: 循環迭代前要評估的表達數，如果表達式計算結果為true就執行statement。如果結果為false，那就退出循環，然後回到for loop後的第一行程式。例:i<10，如果i小於10那迴圈就繼續。如果i>=10那就跳出迴圈。
// final expression: 是在每次循環迭代結束時要執行的程式碼，一般用於更新或遞增計數器變量。例:i++，就是每次循環結束i就要+1。
// 結合以上: 設定計數器為i=0，如果i<10則繼續循環，每循環一次loop，i就+1
// 所以當i=10時，loop就結束了，此loop執行10次。
/* for(initialization; condition; final expression){
     statement
 }
*/

// i = 0，i < 10為true，i值被更新為1
// i = 1，i < 10為true，i值被更新為2
// ...
// i = 10，i < 10為false，迴圈結束
for (let i = 0; i < 10; i++) {
  console.log(i); // console會印出0 1 2 3 4 5 6 7 8 9，迴圈總共循環10次
}
console.log("for loop執行完畢"); // 迴圈執行完畢後跳到此行

// i = 0，i < 10為true，i值被更新為3
// i = 3，i < 10為true，i值被更新為6
// i = 6，i < 10為true，i值被更新為9
// i = 9，i < 10為true，i值被更新為12
// i = 12，i < 10為false，迴圈結束
for (let i = 0; i < 10; i += 3) {
  console.log(i); // console會印出0 3 6 9，迴圈總共循環4次
}
console.log("for loop執行完畢"); // 迴圈執行完畢後跳到此行

// ===================================================================================================================

// 2. While Loop(While迴圈)
// condition就是布林值，condition為true就繼續執行，condition為false就結束迴圈
// 所以如果你忘記增加計數器導致condition一直為true的話，迴圈就永遠不會停止。有可能會癱瘓電腦CPU，所以請小心使用
/* while(condition){
      statement
  }
  */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* while (true) {
     console.log("此迴圈永遠不會停止...");
   }
  */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 雖然上面的for loop也有宣告i，但那個i只在那個迴圈中存在(因為let是區塊作用域，區塊={})，所以要再重新宣告i
// 例子: console.log(i); // console會印出Cannot access 'i' before initialization(初始化前無法訪問“i”)

let i = 0;
console.log(i); // 此時console就能印出0
// 總共會執行10次
while (i < 10) {
  console.log("while loop執行中...，" + "i=" + i);
  i++; // 如果我們忘記讓i增加的話i<10就會一直為true，所以永遠不會停止
}
// while loop的計數器let變數是在loop外就已經宣告了(也就是區塊{}外)，所以是可以在while loop外繼續使用的
console.log(i); // 印出10

// ===================================================================================================================

// Do while Loop(Do while迴圈)
// 先執行指定statement，在評估條件
/*
do{
    statement
}while(condition);
*/

// do while迴圈是先執行再判斷condition是否為true
// 所以即使一開始j=10就不小於10了，但loop還是先執行程式
// 循環結束後他才判斷condition，此時j=11所以condition為false，結束迴圈
let j = 10;
do {
  console.log("do while loop執行中"); // 會印出
  j++;
} while (j < 10);

// while迴圈因為在循環開始前就會檢查condition是否為true
// 一開始k=10就已經不小於10了，condition=false，所以此迴圈完全沒執行
let k = 10;
while (k < 10) {
  console.log("while loop執行中"); // 不會印出，因為迴圈根本沒開始過
}

// ===================================================================================================================

// return
// 如果把return放到loop或function裡面，只要執行到return那他就會把值回傳然後迴圈或函式就會立刻結束。
console.log("執行到return那他就會把值回傳然後迴圈或函式就會立刻結束。");

function print100() {
  // 這邊照理來說應該執行100次
  for (let v = 0; v < 100; v++) {
    console.log("總共執行" + (v + 1) + "次");
    // 因為執行了5次後，這裡condition為true，它就return undefined回去，所以執行6次迴圈就結束了
    if (v == 5) {
      return;
    }
    // 在return下的程式return後不會再被執行了
    console.log("因為在return下所以只執行" + (v + 1) + "次");
  }
}
print100();

// ===================================================================================================================

// let 與 var 區別
console.log("let 與 var 區別");

// let
// let(const也是)具有「區塊作用域」，亦即在區塊中宣告的變數，有效作用範圍會被限制在該區塊中。區塊指的是{}大括號內
// 所以出了區塊就無法作用了
// 不可重複宣告

console.log("let:");

for (let loop_variable_let = 0; loop_variable_let < 3; loop_variable_let++) {
  console.log(loop_variable_let);

  // 因為in_loop_let是let，let變數是區塊作用域，區塊就是{}，所以我們在這個區塊內只有宣告並賦值卻沒有再用到in_loop_let
  // 因此in_loop_let會變得有點透明，並且VS CODE提示'in_loop_let' 已宣告但從未讀取其值
  // in_loop_let在區塊外是不存在的，要重新宣告
  let in_loop_let = "區塊內let變數";
}
// console.log(loop_variable_let);  ===>>會出現loop_variable_let is not defined，因為它是let變數，只在剛剛的for loop中存在
let loop_variable_let = "在區塊外重新定義了";
console.log(loop_variable_let); // 此時因為重新宣告了所以可以印出，注意!!這時就不能再宣告一個let loop_variable_let，let變數是不能重複宣告的

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var
// var 具有「函式作用域」，亦即在函式中宣告的變數，有效作用範圍會被限制在該函式中。
// 但不具有區塊作用域，所以在區塊中宣告的變數，依然會作用到區塊之外，並不會被區塊限制住。
// 可重複宣告

console.log("var:");
for (var loop_variable_var = 0; loop_variable_var < 4; loop_variable_var++) {
  console.log(loop_variable_var); // 印出0,1,2,3，結束時loop_variable_var為4
  var in_loop_var = "區塊內var變數，var變數不受區塊限制";
}
console.log(
  "loop中的var變數loop_variable_var還是可以用，並且值為:" + loop_variable_var // 與loop結束時的值相同
);
console.log(in_loop_var); // var變數不受區塊限制
var in_loop_var = "var是可以重複宣告的"; // var可以重複宣告
console.log(in_loop_var);
