global.message = 'BBBBBBB'

console.log(global.message)     // BBBBBBB

const A = require('./globalA');
console.log(A());               // 여기는 global A 입니다

// 콘솔 결과를 보면, globalB에서 넣은 global.message 값을 globalA에서도 접근할 수 있음을 알 수 있습니다.

global.message = '안녕하세요';
console.log(A());               // 안녕하세요