const { odd, even } = require('./var');
// .js나 .json 같은 확장자 생략 가능
// index.js도 생략 가능

function checkOddOrEven(num) {
  if (num % 2) { // 홀수이면
    return odd;
  }
  return even;
}

module.exports = checkOddOrEven;
