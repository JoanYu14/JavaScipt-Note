// JavaSript Event (JavaScript中的事件)
// 請用25_javascript_event.html連接此JS檔

// 例子
// 監聽使用者是否有按下鍵盤上的任何東西
// e的意思是只要在window區塊內有監聽到任何keydown事件發生的話
// 他就會立刻製做一個名為KeyboardEvent的event object(e)，e會記錄你按的是甚麼...所有相關的資訊(屬性)
window.addEventListener("keydown", (e) => {
  // 按下a會出現KeyboardEvent {isTrusted: true, key: 'a', code: 'KeyA', location: 0, ctrlKey: false, …}
  console.log(e);
  // keyCode是我們鍵盤上每個按鍵都有自己的code像是a就是65，A也是65
  console.log(e.keyCode);
  // keyCode已經被淘汰了，現在大部分使用key，key就是你按的鍵是甚麼
  // 如果你按的是A的話會為false，a才會是true
  console.log(e.key == "a");
});

// ===================================================================================================================

// Events Objects常用的properties(屬性)與methods(方法)

// 這3個都是從Event這個object來的，JavaScript Events Objects繼承關係可以得知JavaScript中所有其他Event object都會繼承Event這個object，所以都會繼承到這3個properties(屬性)與methods(方法)

console.log(
  "target==================================================================="
);

// 1.target
// 指向最初發生事件的DOM物件
// // 選取第一個標籤為button且id為btn-2的element object，並存到button2中
let button2 = document.querySelector("button#btn-2");

// 對button2做監聽，如果我們在這個button2被點擊的話執行callback function，參數就是這個事件會製作的event object
button2.addEventListener("click", (e) => {
  console.log(e.target); // 點擊button2，console會印出<button id="btn-2">按紐2</button>
});

// 如果我們是對整個window的click事件做監聽的話，就是你點擊哪個element object它就印出
window.addEventListener("click", (e) => {
  // 點擊按紐1，console印出<button id="btn-1">按紐1</button>
  // 點擊密碼的輸入區塊，console印出<input type="password" id="password">
  // 點擊瀏覽器空白區塊，console印出<html>....太多</html>
  console.log(e.target);
});

// ===================================================================================================================

console.log(
  "preventDefault()==================================================================="
);

// 2. preventDefault()
// 如果事件可以被取消，就取消事件(即取消事件的預設行為)。但不會影響事件的傳遞

let form = document.querySelector("form");

// 監聽form的submit(送出表單)事件，如果form要被submit的話就會製作一個名為SubmitEvent的event object
form.addEventListener("submit", (e) => {
  e.preventDefault(); // 取消submit事件，也就是說這個表單不會被傳遞出去
  console.log(e); // 即使被取消這個事件，依然會製做並傳遞SubmitEvent {isTrusted: true, submitter: button#submit_btn, type: 'submit', target: form, currentTarget: form, …}作為引數
});

/*  如果我們對的keydown事件做監聽，並取消事件的話，表單內的所有input的變得會無法輸入內容，因為keydown這個事件被取消了
form.addEventListener("keydown", (e) => {
  e.preventDefault(); //
});
*/

/*
如果我們對表單與表單中的text同樣監聽"keydown"事件，那當text發生keydown的時候除了會跳出"文字格正在被輸入"外也會跳出"表單正在被輸入"
因為Event Bubbling，text的父元素就是form，所以會往上運行form的event handler

form.addEventListener("keydown", (e) => {
  alert("表單正在被輸入");
});

let text = document.querySelector("#text");
text.addEventListener("keydown", (e) => {
  alert("文字格正在被輸入");
});
*/
