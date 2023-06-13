// Inheritance 繼承
// 請用24_inheritance.html連接此JS檔

// 選取第一個標籤為button的element object並存到btn裡
let btn = document.querySelector("button");

// 對btn的點擊事件做監聽，如果btn被點級，那就執行
btn.addEventListener("click", () => {
  // 選取第一個標籤為form的element object並存到form裡
  let form = document.querySelector("form");

  // form這個object除了從element object中繼承的attributes和methods外還有一個獨特的method叫做reset
  // reset就是重置表單的意思
  form.reset();
});

// ===================================================================================================================

// 選取第一個標籤為input且type為password的element object，並存到password中
let password = document.querySelector("input[type=password]");

// 對password做監聽，如果我們在這個password區塊內按鍵盤的話會執行callback function，參數就是這個事件會製作的event object
// keydown事件會製作名為KeyboardEvent的event object
password.addEventListener("keydown", (e) => {
  // 按下a會出現KeyboardEvent {isTrusted: true, key: 'a', code: 'KeyA', location: 0, ctrlKey: false, …}
  console.log(e);
});

window.addEventListener("keydown", (e) => {
  console.log(e.target);
});
