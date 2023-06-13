// Constructor Function(製作物件函式)
// 如果function在被呼叫時使用了"new"這個關鍵字的話，會出現以下幾個特質
// 1. 此function會被當成Constructor Function
// 2. RAM會預留位子給Constructor Function製作出來的新物件{ }
// 3. this關鍵字會指向這個被新{ }
// 4. 這個被新製作出來的物件會自動被return
// 在JavaScript中Constructor Function通常以大寫當作開頭，不是Constructor Function通常以小寫開頭
// 透過使用Constructor Function，我們可以大量製造attributes與methods相似的物件

// 會被用來當Constructor Function通常以大寫當作開頭
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(this.name + "說你好");
  };
}

// 快速建立三個非常類似的物件，都是用Person這個Constructor Function製作出來的物件
let wilson = new Person("Wilson Ren", 26); // Person { name: 'Wilson Ren', age: 26, sayHi: [Function (anonymous)] }
let mike = new Person("Mike Huang", 26); // Person { name: 'Mike Huang', age: 26, sayHi: [Function (anonymous)] }
let grace = new Person("Grace Xie", 26); // Person { name: 'Grace Xie', age: 26, sayHi: [Function (anonymous)] }
mike.sayHi(); // Mike Huang說你好

// sayHi是一個function，function是reference data type
// 所以兩個function在比較時，比的是他們在RAM中的位置是否相同
console.log(wilson.sayHi == mike.sayHi); // false，因為這兩個sayHi在RAM所占用的位子並不同，每個物件是獨立佔據RAM的

// 如果寫這樣代表是比較wilson物件和mike物件的sayHi函式return的值，因為sayHi這個函式並不會return任何值，所以都是undefined
// undefined是primitive data type，他們做比較時是看value的，所以會印出true
console.log(wilson.sayHi() == mike.sayHi()); //印出Wilson Ren說你好和Mike Huang說你好(表示執行了這兩個物件的sayHi函式)

// =====================================================================================================================================================

// Constructor Function自我的詳細理解

console.log(
  "Constructor Function自我的詳細理解==========================================="
);

// 此時function NPC還不是Constructor Function，他是要被呼叫時前面加上new才會變成Constructor Function
// 所以如果直接目前裡面的this還是指向global object的
function NPC(name, age) {
  // Constructor Function內的this會被指向新製作的物件(new + 呼叫函式就=Constructor Function)
  this.name = name; // 新製作的物件(this)的name屬性的value就要等於傳進此Constructor Function中name參數的引數
  this.age = age; // 新製作的物件(this)的age屬性的value就要等於傳進此Constructor Function中age參數的引數
  this.height = 153;
  return name;
}

// 呼叫函式前加了new，所以function NPC會被當成Constructor Function(創建物件函式)，這個函式所製作出來的物件會被return，所以我們把這個物件存進joan裡面
// 雖然函式內有寫return name，但因為是Constructor Function，所以他return的會是用this賦予屬性值的那個新物件。
let joan = new NPC("Joan", 22); // NPC { name: 'Joan', age: 22, height: 153 }

console.log("下面是沒有加new的==========");

// 因為這段程式指的是呼叫NPC函式，並傳入Kevin與22兩個引數去替代name參數與age參數，然後把NPC函式return的值存入kevin_whithout_new中
// 因為NPC函式中並沒有return name，所以會return "Kevin"，所以"Kevin"就會被存到kevin_without_new中
// 如果NPC函式中並沒有return任何值的話，kevin_whithout_new就會是undefined
let kevin_whithout_new = NPC("Kevin", 22);

console.log(joan); // NPC { name: 'Joan', age: 22, height: 153 }
console.log("joan的資料型別為:" + typeof joan); // joan的資料型別為:object
console.log("joan物件的name屬性為:" + joan.name); // joan物件的name屬性為:Joan
console.log(kevin_whithout_new); // (沒寫return的話=undefined)，NPC函式內有寫return name;，所以Kevin_whithout_new就會等於代替name的引數(Kevin)
console.log(typeof kevin_whithout_new); // string
