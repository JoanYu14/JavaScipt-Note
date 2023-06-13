// 用class來製作circle
class Circle {
  // static proprty
  // 定義一個名為allCircles的屬性，裡面會存放所有用Circle製作過的物件
  static allCircles = [];

  // 用Circle製作的物件的radius屬性就會為製作時傳入的代替radius的agument
  constructor(radius) {
    this.radius = radius;

    // 當我們每製作一個圓時，就把這個圓加進allCircles這個屬性的值裡，這個屬性的值是一個矩陣
    Circle.allCircles.push(this);
  }

  // instance method
  // 計算園面積
  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  // instance method
  // 計算圓周長
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  // static method
  // 取得園面積的公式
  static getAreaFormula() {
    return "圓面積公式為: pi * r * r";
  }

  //   static method
  //   取得所有圓的面積的總和
  static getAllCirclesAreaTotal() {
    let total = 0;
    // Circle.allCircles這個屬性的值(陣列)內存著每個用Circle Class製作出來的物件
    // 每加一個物件Circle.allCircles的長度就加1，代表一個物件就存在陣列中的一個元素
    // 所以我用forEach去瀏覽Circle.allCircles陣列中的每個元素(就是每個製作出來的圓)
    // n就代表現在循環到的陣列元素(製作的物件)
    // 所以每循環一次我就做對total增加每個n(製作的物件)去執行getArea()，getArea()裡的this就會綁定在目前forEach輪到的n(Circle製作的物件)上
    // forEach對Circle.allCircles陣列內每個元素都執行完callbacjFn的程式碼後就會停止
    // 最後我在把加總過的total return回getAllCirclesAreaTotal
    Circle.allCircles.forEach((n) => {
      total += n.getArea();
    });
    return total;
  }
}

let c1 = new Circle(10);
console.log(c1.getArea()); // 314.1592653589793
console.log(Circle.getAreaFormula()); // 圓面積公式為: pi * r * r
let c2 = new Circle(10);
let c3 = new Circle(10);
console.log(Circle.allCircles); // [ Circle { radius: 10 }, Circle { radius: 10 }, Circle { radius: 10 } ]，製作過的圓會以陣列的一個個元素儲存在Circle.allCircles屬性內
console.log(Circle.allCircles[0].radius); // 取得製作的第一個圓的radius屬性的值
console.log(Circle.getAllCirclesAreaTotal()); // 取得所有製作過的圓的圓面積總和
