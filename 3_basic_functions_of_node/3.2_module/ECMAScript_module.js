// ECMAScript 모듈(이하 ES 모듈)은 공식적인 자바스크립트 모듈 형식입니다. 노드에서 아직까지는 CommonJS 모듈을 많이 쓰긴 하지만, ES 모듈이 표준으로 정해지면서 점점 ES 모듈을 사용하는 비율이 늘어나고 있습니다. 
// 브라우저에서도 ES 모듈을 사용할 수 있어 브라우저와 노드 모두에 같은 모듈 형식을 사용할 수 있다는 것이 장점입니다.


// CommonJS 모듈과 ECMAScript 모듈의 차이
// https://thebook.io/080334/0098/

// dynamic import(동적 불러오기)
const a = false;
if (a) {
    require('./func');
}
console.log('성공');

// require('./func')는 실행되지 않습니다. if문이 false라서 실행되지 않으니까요. 
// 이렇게 조건부로 모듈을 불러오는 것을 다이내믹 임포트라고 합니다.
// 하지만 ES 모듈은 if문 안에서 import하는 것이 불가능합니다. 이럴 때 다이내믹 임포트를 사용합니다. dynamic.mjs를 다음과 같이 수정해봅시다.

const a = true;
if (a) {
    const m1 = await import('./func.mjs');
    console.log(m1);
    const m2 = await import('./var.mjs');
    console.log(m2);
}

//  import는 Promise를 반환하기에 await이나 then을 붙여야 합니다. 
// 위 코드에서는 async 함수를 사용하지 않았는데, ES 모듈의 최상위 스코프에서는 async 함수 없이도 await할 수 있습니다. 
// CommonJS 모듈에서는 안 됩니다.


// export default
// export default의 경우 import할 때도 default라는 속성 이름으로 import됩니다. 
// 참고로 CommonJS 모듈에서 module.exports한 것도 default라는 이름으로 import됩니다.