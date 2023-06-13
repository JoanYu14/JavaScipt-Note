// backtick
// 就是鍵盤左上角esc下方的那個鍵(跟~同一格)，用``包住的東西都會變成字串
// 選取程式碼按shift加上tab的話所有選取的程式碼會往前一個tab
// 在backtick中可以用$加上{}構成佔位符號，裡面可以傳入變數的值或return的值
// 讓我們可以在普通字串內嵌運算式

let first_name = "Joan";
let last_name = "YU";
let height = 153;
let age = 22;
let a = 100;
let b = 25;
function ab(num1, num2) {
  return num1 - num2;
}

short_string = `
我的名字是${(first_name, last_name)}
我的身高是${height}公分
我的年紀是${age}歲
a+b的值為${a + b}
a-b的值為${ab(a, b)}
`;

console.log(short_string);

long_string = `
<form>
<div class="grader">
  <input
    type="text"
    placeholder="class category"
    class="class-type"
    list="opt"
    value=${name}
  /><!--
  --><input
    type="text"
    placeholder="class number"
    class="class-number"
  /><!--
  --><input
    type="number"
    placeholder="credits"
    min="0"
    max="6"
    class="class-credit"
  /><!--
  --><select name="select" class="select">
    <option value=""></option>
    <option value="A">A</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B">B</option>
    <option value="B-">B-</option>
    <option value="C+">C+</option>
    <option value="C">C</option>
    <option value="C-">C-</option>
    <option value="D+">D+</option>
    <option value="D">D</option>
    <option value="D-">D-</option>
    <option value="F">F</option></select
  ><!--
  --><button class="trash-button">
    <i class="fas fa-trash"></i>
  </button>
</div>
</form>`;

// console.log(long_string);
