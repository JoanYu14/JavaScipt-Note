let first_name = "Joan";
let last_name = "Yu";

console.log(first_name + last_name); //JoanYu
console.log(first_name + " " + last_name); //John Yu
console.log(first_name + "\n" + last_name); // \n是換行 = John 換行 Yu

//字串與數字相加
let x = 10;
let y = "10";

console.log(x + x); // 20
console.log(y + y); // 1010
console.log(x + y); // 1010，如果字串與數字相加，數字會被轉成字串型態

//字串與數字相加(考慮順序)
let n1 = 20;
let n2 = 30;
let n3 = "Joan";
let n4 = 10;
let n5 = 15;

// 50Joan，因為程式是由是照順序執行的所以會線進行n1+n2=50後再進行50+n3(Joan)，此時50會變成字串型別再加上n3
console.log(n1 + n2 + n3);

// 50Joan1015，因為執行到+n3時就已經變成50Joan是字串型別了，所以後面都會變成字串+數字(數字轉成字串)
console.log(n1 + n2 + n3 + n4 + n5);
