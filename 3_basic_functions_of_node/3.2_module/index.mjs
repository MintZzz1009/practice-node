import { odd, even } from './var.mjs';
import checkNumber from './func.mjs';

// CommonJS 모듈과는 다르게 import 시 파일 경로에서 js, mjs 같은 확장자는 생략할 수 없습니다. 
// 또한, 폴더 내부에서 index.js도 생략할 수 없습니다.

function checkStringOddOrEven(str) {
  if (str.length % 2) { // 홀수이면
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));