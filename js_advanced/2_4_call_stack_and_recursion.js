// Call Stack and Recursion
// Call Stack : call是function call(調用函式)的意思，所以Call Stack就是你調用函式時JS引擎在背後所使用的Stack
// Stack(堆疊、棧、堆棧) : 後進先出(LIFO)
// Call Stack是JS引擎追蹤本身在訂用多個函數的程式碼中位置的機制，可以幫助我們知道JS木情在運行甚麼函式，還有該函示又調用了哪些函式

function f1() {
  console.log("開始執行f1...");

  // 執行到f2時，JS引擎會把function f2放到call stack裡面，此時在call stack裡面f2在f1上，stack有後進先出的規則(LIFO)，所以要把f2執行完畢並把f2從call stack中取出才會繼續進行f1
  f2();
  console.log("結束執行f1..."); // f2被取出後才會接著執行f1的此行程式碼，執行結束後把f1從call stack中取出，call stack為空的就代表沒有function需要執行了
}

function f2() {
  console.log("開始執行f2...");

  console.log("結束執行f2...");
}
f1(); // 開始執行時，JS引擎就會把function f1放到call stack裡面，結束時再把function f1從call stack拿出來

// =====================================================================================================================================================

// 當Call Stack堆疊過高，高出RAM分配給Call Stack的最大空間時，就會導致stack overflow(溢出)的問題
// 程式設計中，如果一個function執行自己這個function，這種情況就稱為Recursion(遞迴)
// 如果遞迴演算法沒設計好就會出現stack overflow
// 這就是一個沒設計好的遞迴
function hello() {
  console.log("hello...");
  hello(); // hello函式中又呼叫hello函式，所以call stack會一直往上堆無法結束
}
// hello();    ====>>>>會印出很多hello...，最後會出現RangeError: maximum call stack size exceeded(超出最大調用堆棧大小)，代表出現stack overflow了

// =====================================================================================================================================================

// Recursion(遞迴)
// function1中又執行function1時，也屬於function內部執行function，所以JS也會用到Call Stack，這種狀況他除了有用到Call Stack外，我們也把它叫做Recursion(遞迴)

// 沒有設定base case的等比數列情況，會出現stack overflow
// 因為從s(10)往上堆s(9)往上堆s(8)....往上堆s(1)，因為此時沒有設定base case，所以會出現繼續往上堆s(0)往上堆s(-1).....直到stack overflow
// 所以執行s_without_base_case()不管引數值的大小為何，最後都會出現RangeError: maximum call stack size exceeded(超出最大調用堆棧大小)
function s_without_base_case(n) {
  return 2 * s(n - 1); // s(n-1)
}

// 有設定base case的遞迴演算法
// 有設定base case的等比數列情況
function s(n) {
  // s(1)就是base case
  // 從輸入的function s(argument)往上堆到function s(1)時就不會再繼續往上堆function s(1-1)...，而是會return 2 =>s(1)就等於2，此時function s(1)就會從call stack中被拿出
  // 繼續執行s(2) = 2 * s(2-1)，s(2-1) = s(1) = 2，所以s(2) = 2 * 2 = 4，return 4所以s(2)就等於4，此時function s(2)就會從call stack中被拿出
  // 繼續執行s(3) = 2 * s(3-1)，s(3-1) = s(2) = 4，所以s(3) = 2 * 4 = 8，return 8所以s(3)就等於8，此時function s(3)就會從call stack中被拿出
  if (n == 1) {
    return 2;
  }

  return 2 * s(n - 1); // 開始執行func s(10)，func s(10)被放入call stack，func s(10)執行到這就會呼叫func s(9)。開始執行func s(9)，func s(9)被放入call stackfunc，s(9)執行到這就會呼叫func s(8)...
  // 一直往上堆疊直到呼叫func s(1)，因為n==1，會直接return 2到s(1)，所以不會再呼叫s(0)，然後func s(1)被取出，func s(2)接著執行這裡，此時s(1)就有值為2，所以2*2=4，4被return到s(2)裡，然後func s(2)被取出....
}

console.log(s(10)); // 1024

// 等差數列1+2+3+....=?
function addUp(n) {
  if (n == 1) {
    // 當function addUp(1)開始執行並被放入call stack中，執行到此行就會return 1給addUp(1)了，所以不會再執行到呼叫addUp(n - 1)那行程式碼，所以此時function addUp(1)被取出
    return 1; // 繼續執行function addUp(2)，此時已經addUp(1)的值就是1，所以2+1=3，3被return給addUp(2)，然後function addUp(2)被取出。.....直到functoin addUp(argument)被取出
  }

  // 一開始在堆疊時addUp(99)是沒有任何值的，因為沒有return任何數，所以我在寫註解時會特別寫function在前面就代表他目前還沒被傳入值，如果我只寫像上面等比數列s(2)的話就代表已經知道他被return值(4)了
  // 當fucntion addUp(100)執行到此時會執行呼叫function addUp(99)，function addUp(99)開始執行並被放入...直到呼叫到function addUp(1)時，function addUp(1)並不會執行到呼叫addUp(n-1)，因為他在前面的if就已經為true並被return 1這個值了
  return n + addUp(n - 1);
}

console.log(addUp(100)); // 此時function addUp(100)被放入call stack中，最後印出5050
// =====================================================================================================================================================

// 費波那契數列
// 1.F(0) = 0
// 2.F(1) = 1
// 3.F(n) = F(n-1) + F(n-2)，所有引數n大於等於2的都是用3.算出
// 所以除了F(0)與F(1)以外其他值都是由遞迴來定義的
// 例如我想知道F(10)為何 F(10) = F(9) + F(8)
// 而F(9)又是從F(8)+F(7)來的，F(8)又是從F(7)+F(6)來的...

function f(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return f(n - 1) + f(n - 2);
  }
}
// 執行func f(4)，func f(4)被放入call stack中，func f(4)執行到第91行時會執行呼叫f(3)。
// 執行func f(3)，func f(3)被放入call stack中，func f(3)執行到第91行時會執行呼叫f(2)
// 執行func f(2)，func f(2)被放入call stack中，func f(2)執行到第91行時會執行呼叫f(1)
// 執行func f(1)，func f(1)被放入call stack中，func f(1)執行到第88行就會為true所以return 1給f(1)，此時func f(1)從call stack中被取出
// 回到func f(2)繼續執行，已知f(2-1)=f(1)的值為1，接下來要加f(n-2)，所以他會執行呼叫f(0)
// 執行func f(0)，func f(0)被放入call stack中，func f(0)執行到第86行就會為true所以return 0給f(0)，此時func f(0)從call stack中被取出
// 回到func f(2)繼續執行加f(n-2)，已知f(2-2)=f(0)的值為0，所以1+0=1，1就會被return給f(2)，此時func f(2)從call stack中被取出
// 回到func f(3)繼續執行加f(3-1)，已知f(3-1)=f(2)的值為1，接下來要加f(3-2)=f(1)的值為1，所以1+1=2，2就會被return給f(3)，此時func f(3)從call stack中被取出
// 回到func f(4)繼續執行加f(4-1)，已知f(4-1)=f(3)的值為2，接下來要加f(4-2)=f(2)的值為1，所以2+1=3，3就會被return給f(4)，此時func f(4)從call stack中被取出
// call stack就沒東西了

console.log(f(4)); // 印出3
