// Function Methods(函式物件可用的函式)
// 所有function都有繼承Object prototype，所以function也是object的一種

// 1.function.bind(obj)
// 將function的this關鍵字綁定(bind)為指定的object
function hello() {
  console.log(this.name + "說你好");
}
hello(); // 印出undefined，不在object內部的function(就是object的method)的this會綁定到global object，而global object並沒有name這個屬性

let Joan = {
  name: "Joan Yu",
  age: 22,
};
let newHello = hello.bind(Joan); // 創建一個跟hello有相同程式碼的函式，this綁訂到Joan物件上的函式並存到newHello中
hello(); // 印出undefined，代表bind並不會直接更改調用bind這個method的function hello
newHello(); // 印出Joan Yu說你好

// =====================================================================================================================================================

// 2.function.call(obj,arg1,...,argN)
// 使用給的object來當this綁定的物件來調用此函式，arg..可給可不給

function person(country, height) {
  console.log(this.name + "來自" + country + "，身高為" + height + "cm");
}

// 讓person這個function的this綁定Joan這個物件，並傳入"Pingtung"代替country參數，傳入153代替height參數
person.call(Joan, "Pingtung", 153); // Joan Yu來自Pingtung，身高為153cm

// =====================================================================================================================================================

// 3.function.apply(obj,argsArray)
// 與call相同，只是arguments是使用argument array的方式傳入

person.apply(Joan, ["Pingtung", 153]); // Joan Yu來自Pingtung，身高為153cm
