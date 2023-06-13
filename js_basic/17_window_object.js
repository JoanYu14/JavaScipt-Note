// Window Object (Window物件)

// ===================================================================================================================

// window object常見method

// 1.window.alert()
// 在視窗顯示對話框
// window.alert()就是我們常用的alert，但因為window object實在是太常見了，所以我們會省略他
// alert是window object的一個method
// window.alert("Hello");

// 2.window.prompt()
// return用戶再提式對話框輸入的文字，type是string
// window.prompt();

// 3.window.addEventListener()
// EventListener就是事件監聽器
// 將事件監聽程式碼附加到window object，事件例如:我們點擊一個地方、我們滾動滾輪...

// 4.window.setInterval()
// 每次經過給定毫秒數時安排一個函數執行
function sayHello() {
  alert("三秒過了");
}

// 每三秒就執行sayHello這個函式
let stop_function = window.setInterval(sayHello, 3000);

// 5.window.clearInterval()
// 將window.setInterval()所重複執行的程式暫停
// 將stop_function這個重複執行的程式暫停
window.clearInterval(stop_function);

// ===================================================================================================================

// 物件導向的概念 : 一個物件可以是另一個物件的attribute

// 這裡建立一個名為Grace的物件
let Grace = {
  name: "Grace",
  age: 27,
};

// 這裡建立一個名為Jaon的物件
let Joan = {
  name: "Joan",
  age: 26,
  spouse: Grace, // Joan的spouse這個屬性指向了Grace物件
};

// 會印出27，意思就是物件Joan他有一個屬性叫spouse，這個spouse又是一個物件，然後他有一個屬性叫name
console.log(Joan.spouse.age);
console.log(Joan.spouse); // 會印出{name: 'Grace', age: 27}(就是Grace這個物件)
console.log(Grace); // 與上一行結果相同

// ===================================================================================================================

// window object常見的propertices(屬性)

// 1.window.console
// console是window object的一個屬性，本身也是一個object
// return一個console object。console object可以對瀏覽器的debugging console(主控台)進行控制與訪問

window.console.log("Hello world"); // 在console印出訊息(樣式是一般)
console.error("Hello world"); // 在console印出訊息(樣式是error)

// window.console.log(window.Array.isArray(Joan));

// ===================================================================================================================

// 2.window.document
// document是window object的一個屬性，本身也是一個object
// return window所包含的文檔，也就是HTML文件
// DOM意味著HTML中的每個元素都是object，所以每個HTML標籤也都有自己的屬性和方法(Method)
console.log(window.document); // 印出HTMLDocument的object的形式
