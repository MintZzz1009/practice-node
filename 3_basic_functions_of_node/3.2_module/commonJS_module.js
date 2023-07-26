// module.exports 와 exports 의 차이?
console.log(this)   // {} 전역 스코프 출력
// 전역 스코프: this === exports === module.exports
// 모두 같은 객체를 참조하고 있다.
// 참조 관계를 깨뜨리지 않으려면 객체의 동적 속성명 할당 문법을 사용해야한다.
// 통째로 다른 값을 할당하면 참조관계가 깨지게 된다.

const a = 'A'
const b = 'BB'
function funcC() {
    console.log('CCC')
    return 'CCC'
}
const funcD = () => {
    console.log('DDDD')
    return 'DDDD'
}
const T = '그냥 exports. module.exports 아님'

console.log(module.exports) // {}
console.log(exports)        // {}
console.log(this)        // {}
console.log(module.exports === exports, exports === this)     // true true

module.exports = {
    a,
    b,
    funcC, 
    funcD
}

exports.a = a
exports.b = b
exports.T = T

console.log(module.exports) // { a: 'A', b: 'BB', funcC: [Function: funcC], funcD: [Function: funcD] }
                            // module.exports = { } 코드 할당이 없을 시: { a: 'A', b: 'BB' }
console.log(exports)        // { a: 'A', b: 'BB', T: '그냥 exports. module.exports 아님' }
console.log(this)        // { a: 'A', b: 'BB', T: '그냥 exports. module.exports 아님' }
console.log(module.exports === exports, exports === this, module.exports === this)     
// false true false
// 코드 대입이 없을시 true true true


// 순환 참조
// 이렇게 순환 참조가 있을 경우에는 순환 참조되는 대상을 빈 객체로 만듭니다. 이때 에러가 발생하지 않고(Warning은 에러가 아니라 경고입니다) 조용히 빈 객체로 변경되므로 예기치 못한 동작이 발생할 수 있습니다. 따라서 순환 참조가 발생하지 않도록 구조를 잘 잡는 것이 중요합니다.

