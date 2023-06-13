// 選取element object下的節點的補充
// 請使用19_childnodes_and_children.html連結此JS檔
// NodeList裡面可以包含所有三種節點
// HTMLCollection裡面只有包含Element Object(元素節點)

// 1.childNodes
// Return type為NodeList，內部包含此節點在DOM Tree之下的"第一層"的所有節點(三種都有)
let myBody = document.querySelector("body");
console.log(myBody.childNodes); // NodeList(6) [text, h1, text, div, text, script]，因為是第一層，所以div裡的4個p和5個text都沒在此NodeList裡
console.log(myBody.childNodes[3].childNodes); // NodeList(9) [text, p, text, p, text, p, text, p, text]，myBody.childNodes[3]就是div，所以對這個div再做.childNodes，裡面就包含了div內所有Node
console.log(myBody.childNodes[3].childNodes[1]); // <p class="hello">Lorem ipsum dolor sit amet.</p>，myBody.childNodes[3].childNodes[1]就是div內第一個p
console.log(myBody.childNodes[1]);

// ===================================================================================================================

// 2.children
// 只有element object可以使用這個，text node和comment node只能使用chlidren
// return type為HTMLCollection，內部包含此節點在DOM Tree之下的第一層的所有Element Object(只有標籤(element object))

console.log(myBody.children); // HTMLCollection(3) [h1, div, script]，HTMLCollection裡面只有包含Element Object沒有text和comment
console.log(myBody.children[1].children); // HTMLCollection(4) [p, p, p, p]，myBody.children[1]就是div，對div再做children回傳div內的Element Object
console.log(myBody.children[1].children[0].children); // HTMLCollection []，對p再做children裡面已經沒element object了
