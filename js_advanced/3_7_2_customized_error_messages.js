// Customized Error Messages(客製化錯誤訊息)
// throw(丟)後catch(接)

function sumArray(arr) {
  // Array Class static method(專屬Array這個class(or constructor)的method，不會被她製作的物件繼承)
  // 如果arr不是傳入array的話就觸發這個if條件式
  if (!Array.isArray(arr)) {
    // 執行TypeError這個constructor製作一個TypeError物件，並且TypeErrorConstructor是可以傳入一個messege的(型別要是string)
    // 把這個新制做的TypeError object丟出去
    throw new TypeError("參數並非array!!");
  }
  let result = 0;
  arr.forEach((element) => {
    result += element;
  });
  return result;
}

try {
  sumArray("hello");
} catch (e) {
  // 如果傳入的不是array的話就會觸發sumArray()中的if判斷式
  // 然後就會throw(丟)出新製作的TypeError，並且會被傳入catch的e參數(被接住)
  console.log(e); // console印出: TypeError: 參數並非array!! 下面還有其他詳細的資料(TypeErrorConstructor製作的)
}

// =====================================================================================================================================================
// 客製化不屬於JS內建的Error物件

// super在class的constructor中出現的話，它就會去找現在這個class是extend哪個constructor function
// 所以super會去看TyperError的constructor，然後就會執行它
class NotArrayError extends TypeError {
  constructor(message) {
    super(message); // 這個super代表的就是TyperError的constructor function，裡面要放入message
  }

  printSolution() {
    return "請確定參數為array，再執行程式碼";
  }
}

function sumArray2(arr) {
  // Array Class static method(專屬Array這個class(or constructor)的method，不會被她製作的物件繼承)
  // 如果arr不是傳入array的話就觸發這個if條件式
  if (!Array.isArray(arr)) {
    // 執行NotArrayError這個constructor製作一個NotArrayError物件，並且NotArrayErrorConstructor是可以傳入一個messege的(型別要是string)
    // 把這個新制做的NotArrayError object丟出去
    throw new NotArrayError("參數並非array!!");
  }
  let result = 0;
  arr.forEach((element) => {
    result += element;
  });
  return result;
}

try {
  sumArray2("hello");
} catch (e) {
  // 如果傳入的不是array的話就會觸發sumArray2()中的if判斷式
  // 然後就會throw(丟)出新製作的NotArrayError，並且會被傳入catch的e參數(被接住)
  console.log(e); // console印出: NotArrayError [TypeError]: 參數並非array!! 下面還有其他詳細的資料(NotArrayError使用從TypeError繼承的屬性與函式製作的)
  console.log(e.printSolution()); // console印出請確定參數為array，再執行程式碼
}
