// 進階的array method
// 1. arr.map(callbackFn)
// 創建一個新的空array，arr這個陣列中的每個元素執行callback function後return的值就會添加到這個新array中

let friends = ["Joan", "Kevin", "Jessica", "Dora"];

// map會把friends中的每個元素都執行callback function，所以是每個元素都執行toUpperCase()並把return的值給到map_result中
// 第一次:"Joan"取代lang，執行.toUpperCase()，然後return的值傳給map_result。依序四次
// 因為callback function只有一行程式碼，所以即使不寫{}和return，它也會自動return執行結果
let map_result = friends.map((friend_name) => friend_name.toUpperCase());
console.log(map_result); // [ 'JOAN', 'KEVIN', 'JESSICA', 'DORA' ]

// map對包著物件的array
const languages = [
  { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
  { name: "Java", rating: 9.4, popularity: 8.5, trending: "hot" },
  { name: "C++", rating: 9.2, popularity: 7.7, trending: "hot" },
  { name: "PHP", rating: 9.0, popularity: 5.7, trending: "decreasing" },
  { name: "JS", rating: 8.5, popularity: 8.7, trending: "hot" },
];

// map會把languages陣列中的每個元素(這次是物件)都執行callback function
// 所以第一次就是把languages陣列中的第一個元素(物件)中的name屬性的value(name的值是string型別)做.toUpperCase()然後return到languages_result這個map製作的array中
let languages_result = languages.map((lang) => lang.name.toUpperCase());
console.log(languages_result); // [ 'PYTHON', 'JAVA', 'C++', 'PHP', 'JS' ]

// =====================================================================================================================================================

// 2. arr.find(callbackFn)
// 返回arr中滿足callback function的第一個元素(也就是第一個使callbackFn做return true的元素)，沒有滿足callbackFn條件的元素的話就回傳undefined

// find會把languages陣列中的每個元素都執行callbkFn然後找到第一個使callbackFn return true的元素並回傳
// 此callbackFn就是如果lang物件中的trending屬性為"hot"就return true，不是就return false
// 所以第一個trending為"hot"的就是屬性name為"Java"的那個元素
console.log(languages.find((lang) => lang.trending == "hot")); // { name: 'Java', rating: 9.4, popularity: 8.5, trending: 'hot' }
console.log(languages.find((lang) => lang.trending == "cold")); // undefined，languages中沒有元素的trending屬性為cold

// =====================================================================================================================================================

// 3. arr.filter(callbackFn)
// 過濾出在給定arr中通過在callbackFn會return true的元素
// 創建一個新的空array，arr這個陣列中的每個元素執行callback function後return為true的元素就會被添加到這個新array中
// 如果沒有滿足callbackFn條件的元素的話就回傳空陣列[]

// filter會把languages陣列中的每個元素都執行callbkFn然後如果使callbackFn return為true的元素就會被添加到它創建的filter_result這個array中
filter_result = languages.filter((lang) => lang.trending == "hot");
console.log(filter_result);
/* languages中有三個元素符合物件的屬性trending等於"hot"的條件
[
  { name: 'Java', rating: 9.4, popularity: 8.5, trending: 'hot' },
  { name: 'C++', rating: 9.2, popularity: 7.7, trending: 'hot' },
  { name: 'JS', rating: 8.5, popularity: 8.7, trending: 'hot' }
]
*/
console.log(languages.filter((lang) => lang.trending == "cold")); // []，空陣列，因為languages中沒有元素的trending屬性為cold

// =====================================================================================================================================================

// 4. arr.some(callbackFn)
// 給定callbackFn，測試arr中是否"至少"有一個元素會通過callbackFn的測試(是否至少有一個元素會return true)
// some()回傳的值是boolean( true or false)
console.log(languages.some((lang) => lang.popularity > 9.5)); // ture ， 因為name屬性為Python的那個元素它的popularity屬性為9.7
console.log(languages.some((lang) => lang.trending == "cold")); // flase，因為languages中沒有元素的trending屬性為cold

// =====================================================================================================================================================

// 5. arr.every(callbackFn)
// 給定callbackFn，測試arr中是否"所有"元素都會通過callbackFn的測試(如果有一個元素return是false那every()就會return false)
console.log(languages.every((lang) => lang.popularity > 9.5)); // false， 因為只有name屬性為Python的那個元素它的popularity屬性的值為9.7
console.log(languages.every((lang) => lang.popularity > 5)); // true，因為所有元素的popularity屬性的值都有大魚5

// =====================================================================================================================================================

// map與forEach差異
// arr.map(callbackFn)和arr.forEach(callbackFn)的差別是map會回傳包含每個元素執行callbackFn後return的值的array，所以map()的return value為array。
// 但是forEach並不會return任何東西，它只是對每個元素都執行callbackFn而已，所以forEach() return的值為undefined
let word = ["hello", "hi", "hey"];
let mapResulet = word.map((a) => a.toUpperCase());
let forEachResult = word.forEach((a) => {
  return a.toUpperCase(); // 這個return的值並不會被放到任何地方
});
console.log(mapResulet); // [ 'HELLO', 'HI', 'HEY' ]
console.log(forEachResult); // undefined
