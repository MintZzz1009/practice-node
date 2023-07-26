// // ES 모듈에서는 __filename과 __dirname을 사용할 수 없습니다. 
// 대신 import.meta.url로 경로를 가져올 수 있습니다.

console.log(import.meta.url);   // file:///C:/Users/%EC%A7%80%ED%95%99%EC%88%98/github/1_MintZzz/Node.js%20%EA%B5%90%EA%B3%BC%EC%84%9C/practice_note/3.3_fname_dname_ES.mjs
console.log('__filename은 에러');
console.log(__filename);