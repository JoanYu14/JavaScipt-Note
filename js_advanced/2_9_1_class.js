// Class
// Class是JavaScript基於現有的prototype inheritance的語法糖(Class語法與constructor function語法可以完全互換)

// class寫法，替代下面的contructor function寫法
// class名稱與constructor function的名稱取的一樣
// class的名稱開頭要用大寫
class Person {
  // 設定Person裡面要有一個constrctor function
  // 這個constructor的功能就是要讓用Student這個class(constructor function)創造的物件的this.name要等於傳入的name argument，以此類推
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 這裡就代表讓Person這個constructor function的prototype中新增sayHi這個method
  sayHi() {
    console.log(this.name + "說你好");
  }
}

// extends Person的意思就是把Person裡的屬性和prototype裡的東西都包好了
// super是從離散數學中的superset(超集)來的
// 設A和B是兩個集合，如果A的任意一個元素都是B的元素，則稱A為B的子集（subset），稱B為A的超集（superset）
// super在class的constructor中出現的話，它就會去找現在這個class是extend哪個constructor function
// 所以super會去看Person的constructor，然後就會執行它
class Student extends Person {
  // 使用Student constractor function(class)時傳入的name與age引數就會帶入Person的constructor function中使用
  // 使用Student constractor function(class)時傳入的major與grade引數會直接帶入major與grade，所以創建出來的物件的major屬性與grade屬性就會是這兩引數
  constructor(name, age, major, grade) {
    super(name, age); // 這個super代表的就是Person的constructor function，所以裡面要放入name跟age
    this.major = major;
    this.grade = grade;
  }

  // sayHi()這個在Person的prototype中的method此時已經繼承了

  // 讓Student這個constructor function的prototype中新增study()這個method
  study() {
    console.log(this.name + "正在讀" + this.major);
  }
}

let joan = new Student("Joan Yu", 22, "Finance", 4);
joan.sayHi(); // Joan Yu說你好
joan.study(); // Joan Yu正在讀Finance

// =====================================================================================================================================================

// constructor function寫法
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.sayHi = function () {
//   console.log(this.name + "說你好");
// };

// function Student(name, age, major, grade) {
//   Person.call(this, name, age);
//   this.major = major;
//   this.grade = grade;
// }
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.study = function () {
//   console.log(this.name + "正在讀" + this.major);
// };
// let joan = new Student("Joan Yu", 22, "Finance", 4);
// joan.sayHi(); // Joan Yu說你好
// joan.study(); // Joan Yu正在讀Finance

// =====================================================================================================================================================

// Static
// Static關鍵字在class上定義attributes與methods。
// 我們可以透過class本身來訪問static variable(attributes)或執行static method
// Static關鍵字所設定的attribute與method屬於class本身(也就是說並不在prototype中，而是在constructor function這個物件本身上面)
// 所以由class製作的物件也不會繼承這些static attributes和static methods
// instance propety與instance method就是設定給Class製作的物件的
// 在JS內建的Class(constructor function)中有許多static屬性與函式
// 只要看到.屬性或.函式前面的那個詞的開頭是大寫就能知道它是Class，所以一個class直接使用屬性或函式就代表該屬性或函式為Static的
// 例子:Array.isArray()、Math.E、Math.floor()

class Car {
  // 用了static代表exampleProperty這個屬性是設定給Car這個constructor function本身的屬性，不會繼承給用Car製作的物件
  static exampleProperty = 10;

  // 用了static代表exampleFunction這個屬性是設定給Car這個constructor function本身的method，不會繼承給用Car製作的物件
  static exampleFunction() {
    console.log("這是一個沒有特別功能的函式");
  }

  constructor(year, color, brand) {
    this.year = year; // instance propety
    this.color = color; // instance propety
    this.brand = brand; // instance propety
  }

  // instance method
  say() {
    console.log("這是一台" + this.year + "出產的車");
  }
}

let myCar = new Car(2020, "white", "TOYOTA");
myCar.say(); // 這是一台2020出產的車
console.log(myCar.exampleProperty); // undefined，因為exampleProperty這個屬性是設定在Car這個constructor function本身的，所以myCar這個物件並不會繼承這個屬性
//myCar.exampleFunction();   ==>>myCar.exampleFunction is not a function，因為exampleFunction這個method是設定在Car這個Contructor function本身的，所以myCar這個物件並不會繼承這個method
//
Car.exampleFunction(); // 這是一個沒有特別功能的函式
console.log(Car.exampleProperty); // 10

// =====================================================================================================================================================

// Static的constructor function寫法

// function Car(year, color, brand) {
//   this.year = year;
//   this.color = color;
//   this.brand = brand;
// }

// // 讓Car新增一個叫做exampleProperty的屬性，值為10
// Car.exampleProperty = 10;

// // exampleFunction這個Method是直接設定在Car這個物件上而非prototype中
// // 所以使用Car這個constructor function所製作的物件並不會繼承這個method
// Car.exampleFunction = function () {
//   console.log("這是一個沒有特別功能的函式");
// };

// Car.prototype.say = function () {
//   console.log("這是一台" + this.year + "出產的車");
// };

// Car.exampleFunction(); // 這是一個沒有特別功能的函式

// let myCar = new Car(2020, "white", "TOYOTA");
// myCar.say(); // 這是一台2020出產的車

// // exampleFunction()並不在Car的prototype中，所以它是專屬於Car這個物件的，Car所創建的物件並沒有繼承這個method所以不能使用
// // myCar.exampleFunction();  ==>>myCar.exampleFunction is not a function
