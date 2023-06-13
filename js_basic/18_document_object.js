// Document Object
// 請使用18_22_document_object.html連結此JS檔

// 常用的method

// ===================================================================================================================

// 1.window.document.addEventListener
// 事件監聽器
// 後面會專門介紹

// ===================================================================================================================

console.log("window.document.createElement==================================");

// 2.window.document.createElement(tagName)
// 建立新的element node，裡面放的是想要創建的標籤，但創建完還看不到他，直到透過 appendChild()、insertBefore() 或 replaceChild() 等方法將新元素加入至指定的位置之後才會顯示。
let myh3 = document.createElement("h3"); // 創建一個h3標籤
console.log(myh3); // h3這個物件

// ===================================================================================================================

console.log("window.document.getElementById===============================");

// 3.window.document.getElementById(id)
// return第一個id相符合的element object (element node)裡面的text node與comment node也都有
console.log(document.getElementById("myHeading1")); // <h1 id="myHeading1">我的標題1</h1>
let myHead1 = document.getElementById("myHeading1"); // 如果我們之後要用myHeading1所對應到的物件就用這個變數就好了
console.log(myHead1);

// ===================================================================================================================

console.log("getElementsByClassName====================================");

// 4. document.getElementsByClassName(className)
// return一個動態的HTMLCollection，內部元素包含所有具有給定className的元素
// 就是return一個nodes的集合，HTMLCollection只會給我們element object(node)，所以就只會給我們標籤而已，文字節點與註解節點不包含在內
let class1ElemetNode = document.getElementsByClassName("getByClass1");
console.log(class1ElemetNode); // HTMLCollection(4) [p.getByClass1, p.getByClass1, p.getByClass1, h2.getByClass1]

// ===================================================================================================================

console.log("document.querySelector===================================");

// 5.document.querySelector(selectors)
// query = 查詢，selector = 選擇器
// selectors就是CSS的語法
// return 第一個符合特定選擇器群組的element object。採用深度優先搜尋法(DFS)

// 選取第一個class為getByClass1的元素
let first_found = document.querySelector(".getByClass1"); //CSS選取語法
console.log(first_found);

// 選取h2標籤中第一個class為getByClass1的元素
let h2_found = document.querySelector("h2.getByClass1");
console.log(h2_found);

// 選取第一個ID為myHeading1的元素
let h1_found_byId = document.querySelector("#myHeading1");
console.log(h1_found_byId);

// ===================================================================================================================

// NodeList與HTMLCollection雖然看起來很像array但他們並不是array
// 他們是array-like object(類似陣列的物件)

console.log(
  "document.querySelectorAll========================================="
);

// 6.document.querySelectorAll(selectors)
// return一個靜態(not live)NodeList，因為一次選取很多東西，所以是給你一個節點的集合，表示與指定選擇器匹配的元素列表
// 如果要用NodeList選取所有三種結點就要用.childNodes，querySelectorAll()是用NodeList給標籤

// return長度為4的NodeList
let found_elements = document.querySelectorAll(".getByClass1");
console.log(found_elements); // NodeList(4) [p.getByClass1, p.getByClass1, p.getByClass1, h2.getByClass1]
console.log(found_elements[0]); // 可以拿到NodeList中index為0的元素
console.log(Array.isArray(found_elements)); // 雖然NodeList很像array但它並不是array，HTMLCollection也不是

// return長度為1的NodeList，因為h2標籤中class為getByClass1只有一個
let found_elements_a = document.querySelectorAll("h2.getByClass1");
console.log(found_elements_a);

// ===================================================================================================================

console.log("動態與靜態差異=========================================");

// HTMLCollection 動態 dynamic
// NodeList 靜態 static
// 如果我們在網頁新增一個項目

let hellos = document.getElementsByClassName("hello"); // HTMLCollection是動態，代表我們之後改變了DOM，他會跟著改變
let helloss = document.querySelectorAll(".hello"); //  NodeList是靜態，代表即使我們之後改變了DOM，他也不會改變
console.log(hellos.length); // 3
console.log(helloss.length); // 3

// let body為我們選取的body標籤的這個元素
let body = document.querySelector("body");
// 創建新的標籤p元素，名為new_p
let new_p = document.createElement("p");
new_p.innerText = "this is a new p";
// 讓new_p加上新的class，class為hello
new_p.classList.add("hello");
// 將new_p作為最後一個子元素添加到body元素中。
body.appendChild(new_p);

console.log("改變DOM之後.....");
console.log(hellos.length); // 4，HTMLCollection跟著改變
console.log(helloss.length); // 3，NodeList並沒有跟著改變

console.log("NodeList重新全部選取後");
helloss = document.querySelectorAll(".hello"); // 所以每當對DOM進行更動後，NodeList都要重新選取一次
console.log(helloss.length); // 4

// ===================================================================================================================

// 選取element object下的節點

// 1.  .childNodes
// Return type為NodeList，內部包含此節點在DOM Tree之下的第一層的所有節點(三種都有)

let body_node = document.querySelector("body");

// [text, comment, text, h1#myHeading1, text, p.getByClass1, text, p.getByClass1, text, p.getByClass1, text, h2.getByClass1, text, p.hello, text, p.hello, text, p.hello, text, script, p.hello]0: text1: comment2: text3: h1#myHeading14: text5: p.getByClass16: text7: p.getByClass18: text9: p.getByClass110: text11: h2.getByClass112: text13: p.hello14: text15: p.hello16: text17: p.hello18: text19: script20: p.hello21: textlength: 22[[Prototype]]: NodeList
// 可以看到有body之下的所有element node, text node, comment node
console.log(body_node.childNodes);

console.log(body_node.childNodes[3]); // body_node.childNodes的index為3是h1#myHeading1，所以是h1#myHeading1這個element object
console.log(body_node.childNodes[3].childNodes); // h1#myHeading1這個element object中的NodeList長度為1，只有h1標籤內的text node

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2.   .children
// 只有element node可以使用這個，text node和comment node只能使用chlidren
// return type為HTMLCollection，內部包含此節點在DOM Tree之下的第一層的所有Element Object(只有標籤)
// HTMLCollection(10) [h1#myHeading1, p.getByClass1, p.getByClass1, p.getByClass1, h2.getByClass1, p.hello, p.hello, p.hello, script, p.hello, myHeading1: h1#myHeading1]
console.log(body_node.children);
