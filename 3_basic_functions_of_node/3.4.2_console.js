// 지금까지 사용했던 console도 노드에서는 window 대신 global 객체 안에 들어 있습니다. 브라우저에서의 console과 거의 비슷합니다.

// console 객체는 보통 디버깅을 위해 사용합니다. 
// 개발 중 변수에 값이 제대로 들어 있는지 확인하기 위해 사용하기도 하고, 
// 에러 발생 시 에러 내용을 콘솔에 표시하기 위해서도 사용하며, 
// 코드 실행 시간을 알아보려고 할 때도 사용합니다. 

// 대표적으로 console.log 메서드가 있습니다. console.log는 지금껏 계속 사용했으므로 익숙할 것입니다. 다른 로깅 함수들도 알아봅시다.

console.time(레이블)    // console.timeEnd(레이블)과 대응되어 같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정합니다.
console.log(내용)       // 평범한 로그를 콘솔에 표시합니다. console.log(내용, 내용, …)처럼 여러 내용을 동시에 표시할 수도 있습니다.
console.error(에러내용) // 에러를 콘솔에 표시합니다.
console.table(배열)     // 배열의 요소로 객체 리터럴을 넣으면, 객체의 속성들이 테이블 형식으로 표현됩니다. 아래 결과를 확인해보세요.
console.dir(객체, 옵션) // 객체를 콘솔에 표시할 때 사용합니다. 첫 번째 인수로 표시할 객체를 넣고, 두 번째 인수로 옵션을 넣습니다. 옵션의 colors를 true로 하면 콘솔에 색이 추가되어 보기가 한결 편해집니다. depth는 객체 안의 객체를 몇 단계까지 보여줄지를 결정합니다. 기본값은 2입니다.
console.trace(레이블)   // 에러가 어디서 발생했는지 추적할 수 있게 합니다. 보통은 에러 발생 시 에러 위치를 알려주므로 자주 사용하지 않지만, 위치가 나오지 않는다면 사용할 만합니다.

const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: 'value',
    },
  },
};
console.time('전체 시간');
console.log('평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다');
console.log(string, number, boolean);
console.error('에러 메시지는 console.error에 담아주세요');

console.table([{ name: '제로', birth: 1994 }, { name: 'hero', birth: 1988}]);

console.dir(obj, { colors: false, depth: 2 });  // { outside: { inside: { key: 'value' } } }
console.dir(obj, { colors: true, depth: 1 });   // { outside: { inside: [Object] } }
console.dir(obj)                                // { outside: { inside: { key: 'value' } } }
console.dir({ colors: false, depth: 2 })        // { colors: false, depth: 2 }

console.time('시간 측정');
for (let i = 0; i < 100000; i++) {}
console.timeEnd('시간 측정');   // 시간 측정: 1.52ms

function b() {
  console.trace('에러 위치 추적');  // Trace: 에러 위치 추적
}
function a() {
  b();
}
a();

console.timeEnd('전체 시간');   // 전체 시간: 9.98ms
