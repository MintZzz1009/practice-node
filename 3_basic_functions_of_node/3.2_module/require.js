console.log('require가 가장 위에 오지 않아도 됩니다.');

module.exports = '저를 찾아보세요.';

require('./var');

console.log('require.cache입니다.');
console.log(require.cache);
console.log('require.main입니다.');
console.log(require.main === module);   // true
console.log(require.main.filename);

// 한번 require한 파일은 require.cache에 저장되므로 다음 번에 require할 때는 새로 불러오지 않고 require.cache에 있는 것이 재사용됩니다.

// require.main은 노드 실행 시 첫 모듈을 가리킵니다
// 현재 node require로 실행했으므로 require.js가 require.main이 됩니다.
// 첫 모듈의 이름을 알아보려면 require.main.filename으로 확인하면 됩니다.

