// Element Object
// 每個HTML元素(可能)有自己獨特的properties(屬性)和methods(方法)
// 以下為每個Element Object都可以使用的properties(屬性)和methods(方法)

// ===================================================================================================================

// Element Object都可以用的methods(方法)與properties(屬性)
// 1.2.3.這種是method，(1)(2)(3)這種是properties

// 1.addEventListener()

let myButton = document.querySelector("#my-btn"); //先把id為my-btn的button選取並存到myButton中

// 監聽myButton元素的點擊事件(click)，如果被點擊了就執行callback function(使用arrow funciotn)
myButton.addEventListener("click", () => {
  alert("button被點了一下");
});

// ===================================================================================================================

// 2.appendChild(element)
// 可以在Element object底部再新增一個child element

let body = document.querySelector("body");

// createElement(tagName)，就是用來創建一個新的element
// 創建一個h1 element並把它存入myH1
// 創建一個h1 element並把它存入myH2
let myH1 = document.createElement("h1");
let myH2 = document.createElement("h1");

// (1) innerText
// 定義這個element的text是甚麼
// innerHTML定義時所輸入的字串只會被當作純文字來理解
// 設定myH1的文字為"<a href='#'>這是一個新增的h1標籤</a>"
myH1.innerText = "<a href='#'>這是一個新增的h1標籤</a>";

// (2) innerHTML
// innerHTML定義時所輸入的字串會被當作HTML的程式碼來理解
// 設定myH2的"內容"為"<a href=#>這是一個新增的h1標籤</a>"
// 裡面的<a href='#'></a>會變成程式碼而不是直接當成文字印出
myH2.innerHTML = "<a href='#'>這是一個新增的h1標籤</a>";

// 以創建但還沒新增到body中
console.log("已用createElement創建但還沒新增到body中=================");
console.log(body.childNodes); // NodeList(10) [text, button#my-btn, text, p.hello, text, p.hello, text, p.hello, text, script]
console.log(body.children); // HTMLCollection(5) [button#my-btn, p.hello, p.hello, p.hello, script, my-btn: button#my-btn]

// 再把myH1和myH2新增到body
body.appendChild(myH1);
body.appendChild(myH2);

// 可以看到body中的element object增加了
console.log("已用appendChild把新創建的兩個h1新增到body中================");
console.log(body.childNodes); // NodeList(12) [text, button#my-btn, text, p.hello, text, p.hello, text, p.hello, text, script, h1, h1]
console.log(body.childNodes[10]); // <h1><a href='#'>這是一個新增的h1標籤</a></h1>
console.log(body.children); // HTMLCollection(7) [button#my-btn, p.hello, p.hello, p.hello, script, h1, h1, my-btn: button#my-btn]

// ===================================================================================================================

console.log(
  "parentElement==================================================================="
);
// (3) parentElement
// return此element object的父節點
// 用querySelector選取第一個標籤為p的element object，並用p_element存起來
let p_element = document.querySelector("p");
console.log(p_element); // <p class="Hey Aloha">Lorem ipsum dolor sit amet.</p>，就是第一個p。原本是<p class="hello">Lorem ipsum dolor sit amet.</p>，但因下面的程式碼對他做更改了
console.log("p的父節點為:" + p_element.parentElement); // p的父節點為:[object HTMLBodyElement]
console.log(p_element.parentElement); // <body>...</body>，p_element的往上一層的父節點就是body
console.log("body的父節點為:" + p_element.parentElement.parentElement); // body的父節點為:[object HTMLHtmlElement]
console.log(p_element.parentElement.parentElement); // 整個html object，body的往上一層的父節點就是整個html
let body2 = p_element.parentElement;

// ===================================================================================================================

console.log(
  "classList==================================================================="
);

// (4) classList
// return 裡面包含此element object所有class的DOMTokenList
// DOMTokenList是一個物件

// 用querySelector選取第一個標籤為p的element object，並用p1存起來
let p1 = document.querySelector("p");
console.log(p1.classList); // DOMTokenList(2) ['hello', 'hi', value: 'hello hi']，p1裡有兩個class : hello和hi
console.log("p1的class為:" + p1.classList);
console.log(p1.classList[0]); // hello，p1的第一個class是hello
console.log("p1的第1個class為:" + p1.classList[0]);

// (4-1) add()
// add()是classList的method，用來對此element object增加class
p1.classList.add("Hey"); // 對p1這個element object增加Hey這個class
console.log(p1.classList); // DOMTokenList(3) ['hello', 'hi', 'Hey', value: 'hello hi Hey']
console.log("p1的class為:" + p1.classList); // p1的class為:hello hi Hey

// (4-2) remove()
// remove()是classList的method，用來對此element object刪除class
p1.classList.remove("hello"); // 刪除p1這個element object的hello這個class
console.log(p1.classList); // DOMTokenList(2) ['hi', 'Hey', value: 'hi Hey']
console.log("p1的class為:" + p1.classList);

// (4-3) toggle()
// toggle(class_name)是classList的method，如果此element object有class_name這個class的話就刪除，如果沒有的話就加進去
p1.classList.toggle("hi"); // 因為p1這個element object本來就有hi這個class，所以這個class會被刪除
console.log(p1.classList); // DOMTokenList ['Hey', value: 'Hey']
console.log("p1的class為:" + p1.classList);
p1.classList.toggle("Aloha"); // 因為因為p1這個element object本來沒有Aloha這個class，所以這個class會增加到p1裡
console.log(p1.classList); // DOMTokenList(2) ['Hey', 'Aloha', value: 'Hey Aloha']
console.log("p1的class為:" + p1.classList);
// 當我們點擊p1時如果它有click-this這個class的話就刪掉此class，如果沒有的話就增加此class。所以一直點擊的話就會加刪加刪
p1.addEventListener("click", () => {
  p1.classList.toggle("click-this");
});

// (4-4) contains()
// contains()是classList的method，用來看這個element object有沒有包含此class，所以是return一個布林值
console.log(p1.classList.contains("Aloha")); // true，p1有Aloha這個class
console.log(p1.classList.contains("ooo")); // flase，p1沒有ooo這個class

// ===================================================================================================================

console.log(
  "getAttribute(attributeName)==================================================================="
);

// 3. getAttribute(attributeName)
// return這個element object的attributeName這個屬性的值

// 用querySelector選取第一個標籤為meta的element object，並用meta_1存起來
let meta_1 = document.querySelector("meta");
console.log(meta_1); // <meta http-equiv="X-UA-Compatible" content="IE=edge">，第一個標籤為meta的element object
console.log(meta_1.getAttribute("content")); // IE=edge，meta_1的content這個Attribute(屬性)就是IE=edge

// ===================================================================================================================

console.log(
  "remove()==================================================================="
);

// 4. remove()
// 刪除此element object

let p2 = document.querySelector(".hello,hi"); // 選取class有hello和hi的第一個element object，會選到第2個p，因為第1個p的class在上面的程式碼中被更改了
console.log(p2); // <p class="hello hi">Lorem ipsum dolor sit amet consectetur.</p>，就是第2個p

//如果p2被點擊的話，就把first_h1這個element object刪除
p2.addEventListener("click", () => {
  let first_h1 = document.querySelector("h1"); // 選取第一個標籤為h1的element object並把它存入first_h1
  first_h1.remove(); // 點擊過一次後first_h1就會變成下一個標籤為h1的element object，因為之前那個已經被刪掉了
});

// (5) style
// 用來改變element object的inline styling，因為JS中部允許使用hyphen(-，因為在JS中被用來當作減法)，所以JS中的CSS屬性都被改為camelCase

// 如果我們要直接更改style這個物件的屬性的話就要用camelCase寫法
// p2.style.backgroundColor = "rgb(200,200,200)";
// p2.style.color = "tomato";

// 如果我們直接讓style等於後面這條string，就可以直接用CSS寫法，結果與上面2個一樣
p2.style = "background-color:rgb(200,200,200);color:tomato";
// <p class="hello hi" style="background-color: rgb(200, 200, 200); color: tomato;">Lorem ipsum dolor sit amet consectetur.</p>
