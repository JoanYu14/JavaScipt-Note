// Inheritance and the Prototype Chain
// Object-Oriented Programming(物件導向程式設計)的精隨
// Inheritance(繼承)
// 在JS中，每個object都有一個private attribute(原始屬性)叫做__proto__
// __proto__屬性放的值是另一個object。
// 如果A的__proto__的值設定成另一個物件B，則物件A就會繼承物件B的所有attributes與methods

let joan = {
  name: "Joan",
  age: 22,
  sayHi() {
    console.log(this.name + "你好");
  },
};
console.log(joan.__proto__); // [Object: null prototype] {}，代表joan沒有繼承任何物件

// jessica會繼承joan所有的attributes與methods
let jessica = {
  __proto__: joan,
};

console.log(jessica.name); // Joan
jessica.sayHi(); // Joan你好
console.log(typeof jessica); // object

// 因為syaHi是function，function是reference data type所以做比較時是看在RAM中的位子是否相同
// true，代表這個繼承是指把jessica的__proto__指向joan這個物件
console.log(jessica.sayHi == joan.sayHi);

// =====================================================================================================================================================

// 每個constructor function都可以設定prototype屬性(prototype屬性本質來說就是一個空的object)
// 所有從constructor function製作出來的物件，其__proto__屬性都是自動"指向"constructor function的prototype屬性

console.log("prototype========================");

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = () => {
    console.log(this.name + "說你好");
  };
}

console.log(Person.prototype); // {}，代表Person內部本身自動帶有prototype這個屬性，prototype這個屬性是一個空的object

let wilson = new Person("Wilson Ren", 26); // wilson.__proto__=>Person.prototype
let mike = new Person("Mike Huang", 26); // mike.__proto__=>Person.prototype
console.log(wilson.prototype); // {}，這個empty object是Person的prototype屬性的值

//

console.log(
  "constructor function製作出來的物件，其__proto__屬性都是自動'指向'constructor function的prototype屬性，所以他們在記憶體中是指向同一個東西"
);
// 因為wilson.__proto__與Person.prototype都是資料型別都是object
// object是reference data type，所以true代表兩者指向同一個記憶體位置(完全是同一個東西，不是value相同而已)
console.log(wilson.__proto__ == Person.prototype); // true

// =====================================================================================================================================================

console.log(
  "利用其__proto__屬性與constructor function的prototype屬性在RAM中是指向同一個位置的特性，節省RAM的空間"
);

// 從constructor function製作出來的物件，其__proto__屬性都是自動"指向"constructor function的prototype屬性
// 所以所有物件都會自動繼承所有在constructor function的prototype屬性內定義的attributes and methods原理，就稱為「Prototype Inheritance」
// 我們可以根據這個特性來節省記憶體空間，可以把methods全部移動到constructor function的prototype屬性裡面，而不是在個別物件中重複定義

// 這裡設定Person的prototype這個屬性(值是一個{})的hello這個method為功能是...的function
Person.prototype.hello = function () {
  console.log(this.name + "說哈囉!!");
};
console.log(Person.prototype); // { hello: [Function (anonymous)] }，此時Person的prototype就不再是一個空物件了
console.log(wilson.__proto__); // { hello: [Function (anonymous)] }，這跟Person.prototype是完全一模一樣的東西(在RAM中位置也相同)
wilson.hello(); // Wilson Ren說哈囉!!
mike.hello(); // Mike Huang說哈囉!!

// 所有從constructor function製作出來的物件，其__proto__屬性都是一樣指向constructor function的prototype屬性
// 因為wilson.hello和mike.hello都是從constructor function的prototype屬性繼承來的，所以他們是完全一模一樣的東西(在RAM中的位置相同)
// 因為是指向同一個method而非另外在物件中個別設定method，所以可以節省RAM的空間
console.log(wilson.hello == mike.hello); // true

// 每個從constructor function製作出來的物件是獨立佔據RAM的，所以這兩個sayHi在RAM所占用的位子並不同，占用兩個RAM的空間，所以用繼承prototype屬性的方式會更好
console.log(wilson.sayHi == mike.sayHi); // false

// 這裡設定Person的prototype這個屬性的type這個屬性為人類
Person.prototype.type = "人類";
// Person這個constructor function製作出來的物件的__proto__屬性會指向Person的prototype屬性的這個物件，所以他們都會繼承type這個屬性
console.log(wilson.type); // 印出人類
console.log(mike.type); // 印出人類

// =====================================================================================================================================================

// Prototype Chain(原型鍊)

// 在JS中有內建一個叫做Array的constructor function
// 其實這行的寫法就是去執行了Array的constructor function製作出一個array物件，並return出來
let arr = [1, 2, 3];
// 這個方法也可以製作一個array，並且與上面創建arr的方式是一模一樣的
let arr1 = new Array(1, 2, 3);
console.log(typeof Array); // function

// 在瀏覽器主控台看到Array(3)，展開可以看到[[Prototype]] : Array(0)，代表arr的__proto__指向Array這個constructor function的Prototype屬性，就代表他繼承了Array的屬性和函式(method)
// 再展開可以看到[[Prototype]]: Object，代表Array又是繼承Object這個constructor function的Prototype屬性
console.log(arr); // 在瀏覽器主控台看到Array(3)，展開可以看到[[Prototype]] : Array(0)，再展開可以看到[[Prototype]]: Object

// arr之所以可以用push()這個method是因為他從Array這個constructor function中繼承了Prototype屬性，而這個Prototype屬性裡面就有設定push這個method
// 從mdn查詢push時，它會寫Array.prototype.push()就是因為push是Array這個constructor function的Prototype屬性裡設定的
arr.push(4);
console.log(arr);

// JS中所有物件的Prototype Chain最後都會連結到名為Object Prototype的地方
// 所以Object Prototype是Prototype Chain的終點
function hey() {}

// hey的prototype chain會先連到function，然後再連接到Object，所以我們才會說function is a special type of object
// 就是因為function最後也會連接到Object的prototype，所以我們才說function也是一種object
console.log(hey);

// =====================================================================================================================================================

// primitive data type也有自己的constructor function
// 像string的constructor function就是String
// 但對於primitive data來說我們不要用constructor function會比較好(詳見Primitive Coercion這章的筆記)
// string專屬的wrapper object讓他能使用Srting這個constructor functionmethod和properties執行完再拿出來並消滅這個wrapper object

let primitiveName = "Kelly";
// 因為Primitive Coercion所以他會把primitiveName包進String constructor function內了，所以會自動做prototype inheritance
// 因此primitiveName此時繼承了String constructor function的prototype中的屬性與函式，所以就可以用toUpperCase()
// 等用完後再把primitiveName從wrapper object丟出來
primitiveName.toUpperCase();
console.log(primitiveName);

// 使用String constructor function製作的，會繼承String constructor function的prototype裡的屬性與method
let objectName = new String("Kelly");
// object，製作時間較久也會占用較多RAM
console.log(typeof objectName); // object
console.log(objectName); // [String: 'Kelly']
