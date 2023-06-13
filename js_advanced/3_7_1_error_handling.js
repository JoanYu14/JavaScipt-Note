// error handling(錯誤處理)
// 在JS中如果要執行一段可能會出錯的程式碼，則可以將程式碼放入try...catch...語句中。
// try(試試看)...catch(抓到錯誤)...語句經常在後端腳本中使用。
/* 語法為: 
tryStatements:要執行的語句。 exceptionVar:一個變數，用於保存catch當中已捕獲的錯誤，這個變數只能在catch statement中使用。 catchStatements:如果try中引發異常則執行的語句。
finallyStatements:在完成try...catch...語句時，一定會執行的語句，無論是否發生異常，finallyStatements都會執行。
try{
    tryStatements
}catch(exceptionVar){
    catchStatements
}finally{
    finallyStatements
}
*/

// =====================================================================================================================================================

// 有三種可用語法: 1.try...catch... 。 2.try...finally...。 3.try...catch...finally...

// 1.try...catch...
console.log("1.try...catch....=============================");

// 因為a不存在，所以有錯誤，因此會執行catch statement，console會印出此程式有問題，且錯誤訊息會被存在errorMessage變數內(不寫也可以)，此變數只能在catch statement中使用
try {
  console.log(a);
} catch (errorMessage) {
  console.log("此程式有問題");
  // console.log(errorMessage);   ==>>ReferenceError: errorMessage is not defined.........
}

// 因為try statement並沒有問題，所以只會執行try statement，catch statement就不會執行了
try {
  console.log("此程式並沒有問題");
} catch {
  console.log("此程式有問題");
}

// =====================================================================================================================================================
// 2.try...finally...
console.log("2.try...finally...=============================");

// console會印出程式執行中與程式執行完畢
// 注意!!!此語句因為沒有catch，所以try執行會出錯的程式的話，整個程式還是會中斷並報錯，因此下方的finally statement就不會執行了
try {
  // console.log(a);
  console.log("程式執行中");
} finally {
  console.log("程式執行完畢");
}

// =====================================================================================================================================================
// 3.try...catch...finally...
console.log("3.try...catch...finally...=============================");

// console會印出此程式有問題 & 程式執行完畢，因為try statement會出現錯誤(a is not defined)
// 所以會執行catch statement，並且try stament報錯的訊息會被存在err中，最後再執行finally statement
// 因為有catch語句所以finally statement才能執行，沒有catch的話會在try那裡整個程式就中斷並報錯了
try {
  console.log(a);
} catch (err) {
  console.log("此程式有問題");
} finally {
  console.log("程式執行完畢");
}

// console會印出正在執行此程式 & 程式執行完畢，因為try statement沒有問題，所以catch statement就不會執行，最後再執行finally stament
try {
  console.log("正在執行此程式");
} catch (err) {
  console.log("此程式有問題");
} finally {
  console.log("程式執行完畢");
}

// =====================================================================================================================================================
// 用instanceof檢查是哪種類別的錯誤(有三種)
// JS發生的錯誤會自動被做成一個Error Object(在JS中有一個內建的class(constructor)就叫做Error)
// 還有很多種Error(可以到搜尋mdn Error)
// 例如:1.TypeError 2.ReferenceError 3.SyntaxError

// console印出發生ReferenceError和不管有無錯誤都會被執行的程式碼
try {
  whatever();
} catch (err) {
  if (err instanceof TypeError) {
    console.log("發生TypeError");
  } else if (err instanceof ReferenceError) {
    console.log("發生ReferenceError");
  } else {
    console.log("發生其他種類的Error");
  }
} finally {
  console.log("不管有無錯誤都會被執行的程式碼");
}

// =====================================================================================================================================================

// instanceof
// 就是測試物件a的原型鍊(prototype chain)中有沒有b這個construcot function
console.log("instanceof==========================================");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
joan = new Person();
//true，因為joan就是用Person這個constructor function製作出來的物件，它的__proto__是指向Person的prototype
console.log(joan instanceof Person);
// true，所有的constructor function本身也是一個object，Person的__proto__又會指向Object這個constructor function的prototype，Object是prototype chain的終點
console.log(Person instanceof Object);
// Person的__proto__指向Object，所以Object也會在joan的prototype chain中
console.log(joan instanceof Object);

arr1 = [];
// true，arr就是Array這個constructor function製作出來的物件，所以arr的__proto__屬性的值就是指向Array的prototype屬性
console.log(arr1 instanceof Array);
// true，所有object的prototype chain終點就是Object的prototype屬性，所以Object當然也在arr的instance chain中
console.log(arr1 instanceof Object);
// false，arr的prototype chain中並沒有Number這個constructor function
console.log(arr1 instanceof Number);
