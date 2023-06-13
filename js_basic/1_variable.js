let x = 3;
let y = 2;
console.log(x % y); // 1
console.log(x ** y); // 9

// x = x+1 與 x+=1 與x++ 是一樣的意思
// x = x-1 與 x-=1 與x-- 是一樣的意思
// x = x*1 與 x*=1 一樣， x = x*4 與 x*=4 一樣 (/同理)
console.log((x *= 4)); // 12 ，此時x=12了
console.log(x / 2); // 6 ， 因為12/2=6
console.log((x /= 2)); // 6，此時x=6了
