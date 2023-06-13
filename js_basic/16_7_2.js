// 落地問題: 一球從h米高度自由落下，每次落地後反跳回原高度的一半，再落下。求小球在第n次落地時，總共經過多少公尺？編寫一個名為distance的函式，參數為h與n，回傳值為小球經過的總距離。

function distance(high, time) {
  let total = high; // 第一次落地
  for (let i = 1; i < time; i++) {
    total += (high / 2) * 2; // high = (高度的一半:100/2=50)，碰地彈起50+落回地板50，第二次:碰地彈起25+落回地板25...
    high /= 2; // 每次碰地後下次彈起高度都少一半
  }
  return total;
}

console.log(distance(100, 4)); // 275
console.log(distance(500, 7)); // 1484.375
