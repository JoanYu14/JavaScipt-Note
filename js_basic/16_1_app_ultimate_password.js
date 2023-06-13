// 終極密碼

// 使用Math.random()製作密碼
// 因為random是製作0~1不包括1的小數，所以*100就是前進兩位。
// 再用Math.ceil()無條件進位，這樣如果等於99.999之類的就會變成100
let password = Math.ceil(Math.random() * 99);

// 這裡先宣告最小與最大，讓迴圈第一圈就可以判斷輸入數字是否有效
let min = 0;
let max = 99;

// 這裡先宣告input但不賦值，因此while迴圈至少一定會執行一次
let input;

// 如果input與password不同就繼續迴圈
while (input != password) {
  // 每次迴圈一開始都讓使用者輸入數字，第一圈min和max都是之前就宣告好的
  // 隨著每次的判斷，如果輸入與password不同的話，min或max就會變動
  input = Number(prompt("請輸入介於" + min + "~" + max + "之間的數字"));

  // 先判斷如果輸入的數字比min或比max大那就是無效的數字，如果這個if成立的話下面的else if就不會再判斷，而是直接進行下一圈
  if (input < min || input > max) {
    alert("無效數字，請重新輸入");
  }
  // 如果前面為false代表這個數字是有效的，那再判斷這個數字如果大於password的話，那max就改成input的數字
  else if (input > password) {
    max = input;
  }
  // 如果前面又為false就判斷這個數字如果小於password的話，那min就改成input的數字
  else if (input < password) {
    min = input;
  }
  // 如果前面的if都沒達成，那也不用做else了，因為沒達成代表input=password，那迴圈就會結束
}

// 迴圈結束後就會跳到這裡執行下面的程式
alert("正確答案!你輸入的為" + input + "，密碼也是" + password);
