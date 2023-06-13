// Object(物件)

// 建立物件用{}大括號
// 建立一個叫Joan的物件
let Joan = {
  // properties屬性(key-value pair)
  first_name: "Joan", // 意思是Joan這個物件(object)有一個叫做first_name(key)的屬性(properties)，這個屬性的值(value)為"Joan"
  last_name: "Yu", // 意思是Joan這個物件(object)有一個叫做last_name(key)的屬性(properties)，這個屬性的值(value)為"Yu"
  age: 22, // 意思是Joan這個物件(object)有一個叫做age(key)的屬性(properties)，這個屬性的值(value)為22
  is_married: false, //意思是Joan這個物件(object)有一個叫做s_married(key)的屬性(properties)，這個屬性的值(value)為false
  24: 23, // 意思是Joan這個物件(object)有一個叫做24(key)的屬性(properties)，這個屬性的值(value)為23

  // Method(方法,屬於這個joan的函式)
  // 建立一個名為sayHi的Method，執行console.log("Joan say Hi!");，return因為沒定義所以是undefined(預設)
  sayHi() {
    console.log("Joan say Hi!");
  },

  sayName() {
    // this的意思是正在調用這個sayName方法的物件(Joan)，this=Joan
    console.log("My name is " + this.first_name + " " + this.last_name);
  },

  // 建立一個名為sayHi的Method，回傳值為"Joan feel tired"
  wlak() {
    console.log("Joan is walking");
    return "Joan feel tired";
  },

  // 建立一個名為speak的Method，可傳入參數代替words
  speak(words) {
    console.log("Joan says " + words);
  },
};

// =================================================================================================================================================

// 要取得object屬性的value可以用 1.dot notation(.) 2.[]裡面要加如果key是字串的話要加""，通常都是字串

console.log(Joan.last_name); // console印出"Yu"(value)
console.log(Joan["last_name"]); // console印出"Yu"(value)
console.log(Joan[24]); // console印出23(value)，因為key是數字所以只能用[]獲取

// =================================================================================================================================================

// 執行object的Method用dot notation(.)，記得函式都要加()
Joan.sayHi(); // console印出"Joan say Hi!"
console.log(Joan.wlak()); // console印出"Joan is walking"(Method內執行的)，再印出"Joan feel tired"(Method回傳的值在此行用console.log印出)
Joan.speak("How are you"); // 把"How are you"傳入Joan物件中的speak函式取代words，沒傳參數的話就words就=undefined

// =================================================================================================================================================

// 如果function沒有指向的物件(function就是不屬於任何object的函式)，那this就會指向window這個物件
function hello() {
  console.log("hello");
  console.log(this); // this會是window object
}

hello();

// =================================================================================================================================================

// array和function其實都是object，他們是特殊物件

let array1 = [1, 2, 3, 4, 5];
console.log(typeof hello); // console會印出function，要檢查function的資料型別記得function名稱後不能加括號，不然會執行此function
console.log(typeof array1); // console會印出object，其實是一個bug，因為function和array都是object但function能檢查出但array不行
console.log(Array.isArray(array1)); // console會印出true，要檢查是不是array型別就要用Array.isArray()
