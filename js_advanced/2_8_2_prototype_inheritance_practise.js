// 人類

// 第一個constructor function為Person，參數有name,age,city，函式內也會設定Person創造的物件的name,age,city屬性就等於呼叫Person函式時傳入的引數
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

// Person的prototype屬性的物件中有isHuman這個屬性，還有sleep和from兩個method
// prototype內要使用的this.屬性要在constructor函式內就有設定，不然會出現undefined
Person.prototype.isHuman = true;
Person.prototype.sleep = function () {
  console.log(this.name + "正在睡覺");
};
Person.prototype.from = function () {
  console.log(this.name + "來自" + this.city);
};

// =====================================================================================================================================================

// 第二個constructor function為Student，參數有name,age,city,major,score
function Student(name, age, city, major, score) {
  // 這裡的this都是指向使用Student這個constructor function所製作出來的物件

  // 這個name就會被我們等下用執行Student construtor function時傳入的引數代替，age也是
  // 然後Person.call就會執行上面的Person constructor function，然後Person內的this指向的就是Student製作出來的物件
  // 所以Person裡的this.name就會等於Student製作出來的物件的name屬性為name(執行Student constructor function時傳入的那個argument)
  Person.call(this, name, age, city);

  // 這個物件的major屬性為Student constructor function時傳入的那個代替major的argument
  this.major = major;
  // 這個物件的score屬性為Student constructor function時傳入的那個代替score的argument
  this.score = score;
}

// 製作一個與Person.prototype這個屬性的物件一樣的物件(全新的物件而非複製位置而已)，並賦予給Student.prototype這個屬性
Student.prototype = Object.create(Person.prototype);
// 額外設定讓Student的prototype這個物件的study屬性要等於一個function(所以變成method)
Student.prototype.study = function () {
  console.log(this.name + "正在讀" + this.major);
};

// =====================================================================================================================================================

// 第三個constructor function為Student，參數有name,age,city,major,score
function Grade(name, age, city, major, score, grade) {
  // 這裡的this都是指向使用Grade這個constructor function所製作出來的物件

  // 這個name就會被我們等下用執行Grade construtor function時傳入的引數代替，age,city,major,score也都是
  // 然後Student.call就會執行上面的Student constructor function，然後Student內的this指向的就是Grade製作出來的物件
  // 所以Student裡的this.major就會等於Student製作出來的物件的major屬性為major(執行Grade constructor function時傳入的那個argument)
  Student.call(this, name, age, city, major, score);

  // 這個物件的grade屬性為Grade constructor function時傳入的那個代替grade的argument
  this.grade = grade;
}

// 製作一個與Student.prototype這個屬性的物件一樣的物件(全新的物件而非複製位置而已)，並賦予給Grade.prototype這個屬性
// 因為Student.prototype是跟Person一樣的但又新增了一個method，所以Grade就是擁有了Person和Student的prototype內的所有屬性與method
Grade.prototype = Object.create(Student.prototype);
Grade.prototype.sayGrade = function () {
  console.log(this.name + "是" + this.major + "學系的大" + this.grade + "生");
};

// =====================================================================================================================================================

let joan = new Grade("Joan", 22, "Pingtung", "Finance", 4, "四"); // 它的__proto__其實繼承了三個constructor function的prototype
console.log(joan);
/*
Person {
  name: 'Joan',
  age: 22,
  city: 'Pingtung',
  major: 'Finance',
  score: 4,
  grade: '四'
}
*/
console.log(joan.isHuman); // true，isHuman屬性是從Person的prototype來的
console.log(joan.major); // Finance
joan.sleep(); // Joan正在睡覺
joan.study(); // Joan正在讀Finance
joan.sayGrade(); // Joan是Finance學系的大四生
