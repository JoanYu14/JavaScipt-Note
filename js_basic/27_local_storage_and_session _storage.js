// Local Storage(本機儲存空間) and Session Storage(工作階段儲存空間) 與 JSON
// Local Storage 與 Session Storage都是window object的屬性，他們本身也是object，所以他們也有自己的properties和methods
// 資料都要是string型別，不是的話也會被強制轉換

// methods(兩者一樣)

// 1. setItem(key,value)
// 把key-value pair存進給定的storage中，如果key已經存在，那就會更新該key的value
window.localStorage.setItem("name", "Joan");
localStorage.setItem("age", 21); // 21會被強制轉成"21"再存入
sessionStorage.setItem("name", "Yu");
sessionStorage.setItem("age", 22);

// 2. getItem(key)
// 從給定的Storage中return該key的value，如果該key不存在則回傳null
console.log(localStorage.getItem("name")); // console印出Joan
console.log(localStorage.getItem("address")); // console印出null，因為沒有叫做address的key
console.log(typeof localStorage.getItem("age")); // console印出string，原本是number別，但被強制轉換為string型別了

// 3. removeItem(key)
// 從給定的Storage中刪除該key-value pair(如果該key-value pair存在的話)
// 如果該key-value pair不存在的話它就不會管它，不會有錯誤訊息
localStorage.removeItem("name");
console.log(localStorage.getItem("name")); // console印出null而不是Joan，因為"name":"Joan"這對key-value pair已經被刪除

// 4. clear()
// 清除存儲在給定的Storage中的所有key-value pair
localStorage.clear(); // 清空目前這個網址的localStorage

// (1) length
// Storage只有.length一個屬性，就是return給定的Storage中有多少對key-value pair
console.log(sessionStorage.length); // console印出2
sessionStorage.setItem("noValue", ""); // 即使value為空字串，還是可以儲存
console.log(sessionStorage.getItem("noValue")); // console印出空字串(甚麼都沒有)
console.log(sessionStorage.length); // console印出3
sessionStorage.setItem("", "noKey"); // 即使key為空字串，還是可以儲存
console.log(sessionStorage.getItem("")); // console印出noKey
console.log(sessionStorage.length); // console印出4
sessionStorage.setItem("", ""); // 即使key和value皆為空字串，還是可以儲存(這裡因為key""用過了，所以是把noKey這個原本的value更改為空字串)
console.log(sessionStorage.length); // console印出4
console.log(sessionStorage.getItem("")); // console印出空字串(甚麼都沒有)

// ===================================================================================================================

console.log(
  "JSON==================================================================="
);

// JSON
// 我們儲存的東西很多並不是string型別，這時就需要把這個東西先轉成JOSN string再儲存
// JavaScript Object Notation是指JSON是把JavaScript Object當成它的語法，所以JSON他的文件長得跟JavaScript的Object幾乎一模一樣
// JSON只有兩個method，沒有屬性

// 先創建一個[1, 2, 3, 4, 5, 6, 7]的陣列，並存到myLuckyNumbers
let myLuckyNumbers = [1, 2, 3, 4, 5, 6, 7];

// 沒用JSON String儲存myLuckyNumbers的結果
localStorage.setItem("myLuckyNumberNoJson", myLuckyNumbers);
console.log(localStorage.getItem("myLuckyNumberNoJson")); // console印出1,2,3,4,5,6,7
console.log(typeof localStorage.getItem("myLuckyNumberNoJson")); // console印出string，就是說陣列還是被轉成string了

// ===================================================================================================================

console.log(
  "有用JSON==================================================================="
);

// 用JOSN儲存myLuckyNumbers的結果
// 1. JSON.stringify(value)  :  把要儲存的value用JSON.stringify()轉成JSON string
// 把myLuckyNumbers也就是[1, 2, 3, 4, 5, 6, 7]先轉成JSON string再存進localStorage
localStorage.setItem("myLuckyNumberUseJson", JSON.stringify(myLuckyNumbers));

// 2. JSON.stringify(value)  :  解析JOSN string，製做出JOSN string描述的JavaScript值或object
// 取得key為myLuckyNumberUseJson的值(JOSN string)，再用JSON.parse()解析後存到myLuckyNumbers_array中(已是array)
let myLuckyNumbers_array = JSON.parse(
  localStorage.getItem("myLuckyNumberUseJson")
);

console.log(myLuckyNumbers_array); // console印出(7) [1, 2, 3, 4, 5, 6, 7]
console.log(typeof myLuckyNumbers_array); // console印出object
console.log(Array.isArray(myLuckyNumbers_array)); // console印出true，代表拿回來的東西確實還是原本的array
