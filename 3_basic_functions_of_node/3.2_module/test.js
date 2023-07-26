// const test = require('./commonJS_module')
// // require() 자체는 파일을 실행시킬 수 있다.
// console.log(test.a) // A
// test.funcC() // CCC
// console.log(test.T) // undefined

// => require 함수로는 module.exports 가 불러와진 것을 알 수 있다.
// 즉 require 함수의 반환값은 module.exports

// function ttt() {
//     console.log(this)
// }

// ttt() // global

console.log(this)   // {}