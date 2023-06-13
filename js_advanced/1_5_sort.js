// sort排序
// sort()因為是就地排序，所以會永久改變這個array(JS絕大多數內建函式式不會改變調用此函式的變數的值)
// 例:toUpperCase()這個method就不會改變調用此函式的變數的值
myName = "Joan";
console.log(myName.toUpperCase());
console.log(myName); // myName使用過toUpperCase()後還是Joan

let myArray = [1, 5, 3, 2, 4, 7, 8, 0];
// 如果想保有原來的myArray的話就用spread syntax的方式複製一個跟myArray一樣的陣列，對此陣列做排序就不會影響myArray了
let mySortArray = [...myArray];
// 如果不是用spread syntax而是直接用=的話會是copy by reference，這裡sortArray是會指向mySortArray而不是製作全新的array
let sortArray = mySortArray;
mySortArray.sort(); // mySortArray被就地排序了，所以裡面的值被變成排序好的了
console.log(mySortArray); // [1, 5, 3, 2, 4, 7, 8, 0]，被永久改變了
console.log(sortArray); //  [1, 5, 3, 2, 4, 7, 8, 0]，因為sortArray是指向跟mySortArray一樣的儲存空間，所以即使我們沒對sortArray執行sort()但它還是被更改了
console.log(myArray); //  [1, 5, 3, 2, 4, 7, 8, 0]，myArray還是原本的值
console.log(mySortArray.reverse()); // 讓原本由小到大排序變成由大到小，reverse()也會把調用此函式的array永久改變

// =====================================================================================================================================================

// sort(compareFn)
// compareFn是定義排序順序的函數，如果省略，那array將會照JS預設的方式排序(由小到大)
// 會根據return的值來做排序>0的話就是由大到小，<0就是由小到大，===0就是按原來排序

let num = [8, 4, 3, 5, 6, 1, 0];
num.sort((a, b) => {
  return b - a; // 由大到小
});

console.log(num); // [8,6,5,4,3,1,0]

let fruits = ["Watermaelon", "Apple", "Banana"];
fruits.sort((a, b) => {
  if (a.length > b.length) {
    return 1; // 如果a的長度大於b的長度，return 1(a會放在b後面，就是長度較長(a)的放後面)
  } else {
    return -1; // 如果a的長度小於b的長度，return -1(a會放在b前面，也還是長度較長(b)的放後面)
  }
});
console.log(fruits); // [ 'Apple', 'Banana', 'Watermaelon' ]
