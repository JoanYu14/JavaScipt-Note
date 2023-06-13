// Prototype Inheritance in Constructors
// 在Constructor function中繼承另一個Constructor function的Prototype
// 可透過兩個設定讓constructor A來繼承constructor B的prototype物件

// 1.在constructor function A的內部執行B.call(this,args1,...,argsN)。
//   可透過這段程式碼將B所設定的"屬性"套給A做使用

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// prototype內要使用的this.屬性要在constructor函式內就有設定，不然會出現undefined
Person.prototype.sayHi = function () {
  console.log(this.name + "說你好");
};

function Student(name, age, major, grade) {
  // 這裡的this都是指向使用Student這個constructor function所製作出來的物件

  // 這個name就會被我們等下用執行Student construtor function時傳入的引數代替，age也是
  // 然後Person.call就會執行上面的Person constructor function，然後Person內的this指向的就是Student製作出來的物件
  // 所以Person裡的this.name就會等於Student製作出來的物件的name屬性為name(執行Student constructor function時傳入的那個argument)
  Person.call(this, name, age);
  this.major = major;
  this.grade = grade;
}

let joan = new Student("Joan Yu", 22, "Finance", 4);
console.log(joan); // Student { name: 'Joan Yu', age: 22, major: 'Finance', grade: 4 }
//joan.sayHi();   ===>>>joan.sayHi is not a function，因為我們目前是用function.call的方式來擁有name跟age的屬性，並沒有Person的prototype中的sayHi()這個method

// =====================================================================================================================================================

// 2.設定A.prototype = Object.create(B.prototype)
//   Object.create()可以創建一個全新的物件(在RAM中位置不同)
//   這樣一來，所有B.prototype內部的attributes與methods都可以套用給A.prototype
//   所有A.prototype所設定的"額外的"attributes與methods都需要寫在A.prototype = Object.create(B.prototype)這行程式碼的下方
//   因為A.prototype = Object.create(B.prototype)是直接把B的prototype複製一份一樣的，並覆寫在a.prototype中，所以如果設定A.prototype的額外屬性或函式寫在上面的話，會被蓋過，等於沒寫

//   不能直接寫A.prototype = B.prototype的原因是constructor.prototype是object，所以是reference data type
//   如果我們想只在A的prototype中添加A.prototype.add=function(){...}時
//   因為A,B兩個prototype指向RAM中相同的位置，所以會變成A和B的prototype都有add這個method了

// 製作一個與Person.prototype這個屬性的物件一樣的物件(全新的物件而非複製位置而已)，並賦予給Student.prototype這個屬性
Student.prototype = Object.create(Person.prototype);

// 額外設定讓Student的prototype這個物件的study屬性要等於一個function(所以變成method)
// 因為Student的prototype跟Person的prototype在RAM中是完全不同的東西，所以在Student的prototype中新增的method並不會新增到Person的prototype中
// 如果在45行寫的是Student.prototype = Person.prototype的話就會變成Person的prototype也新增了studey這個method，因為這種寫法是copy by reference，在RAM中a和b的prototype會指向同個位置
Student.prototype.study = function () {
  console.log(this.name + "正在讀" + this.major);
};
let mike = new Student("Mike Lin", 25, "English", 3.7);

// 能使用sayHi這個method是因為45行那邊把Person.prototype複製了一樣的物件然後放到Student的prototype中
// 所以mike這個由Student constructor function製作出來的物件，它的__proto__就會指向Student的prototype，因此可以用sayHi()這個method
mike.sayHi(); // 印出Mike Lin說你好
mike.study(); // Mike Lin正在讀English，
console.log(Student.prototype);
console.log(mike); // Person { name: 'Mike Lin', age: 25, major: 'English', grade: 3.7 }
console.log(mike.__proto__);
