// Defult Parameter(預設參數)
// 當呼叫了function但沒有給定足夠的arguments(引數)時，parmeter會被設定為undefined
// 如果我們有在function設定Defult Parameter時，沒有傳入引數的參數就會等於設定的預設值

// 設定multiply的參數a預設值為2，參數b預設值為5
function multiply(a = 2, b = 5) {
  return a * b;
}

console.log(multiply()); // 10，因為沒傳入任何argument，所以2*5=10(我們設定的defult parameter)
console.log(multiply(3)); // 15，因為只傳入1個argument，所以參數a會被3取代，但參數b還是我們給的預設值5，所以3*5=15
