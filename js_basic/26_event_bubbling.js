// Event Bubbling
// 請使用26_event_bubbling.html連接此JS檔
// 概念就是當事件發生在一個元素上時，他會先執行此元素的event handler
// 然後再運行它的parent element(父元素)的event handler
// 然後一直往上往上運行其他祖先的event handler
// 由於此過程像冒泡一樣故而得名

// red為blue的父元素，blue又為yellow的父元素
// 並且都對這3監聽點擊事件
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let yellow = document.querySelector(".yellow");

// 監聽red的點擊事件，如果被點擊了就彈出"紅色方塊被點擊"的訊息
red.addEventListener("click", () => {
  alert("紅色方塊被點擊");
});

// 監聽blue的點擊事件，如果被點擊了就彈出"藍色方塊被點擊"的訊息
// 因為Event Bubbling，所以如果我們點擊了藍色的方塊的話會發生先彈出"藍色方塊被點擊"的訊息後，又發生"紅色方塊被點擊"的訊息
blue.addEventListener("click", () => {
  alert("藍色方塊被點擊");
  // 即使我們設定了preventDefault，依然會出現"藍色方塊被點擊"和"紅色方塊被點擊"，所以preventDefault和Event Bubbling是無關的
  // preventDefault()並不會影響事件的傳遞
  e.preventDefault();
});

// 監聽yellow的點擊事件，如果被點擊了就彈出"黃色方塊被點擊"的訊息
// 這裡對yellow所發生的點擊事件做了stopPropagation()，就是阻止了這個泡泡往上
// 所以不會跳出"藍色方塊被點擊"和"紅色方塊被點擊"
yellow.addEventListener("click", (e) => {
  alert("黃色方塊被點擊");
  e.stopPropagation();
});
