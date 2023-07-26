// 동기와 비동기: 백그라운드 작업 완료 확인 여부
// 블로킹과 논블로킹: 함수가 바로 return되는지 여부

// 노드에서는 동기-블로킹 방식과 비동기-논블로킹 방식이 대부분입니다. 
// 동기-논블로킹이나 비동기-블로킹은 없다고 봐도 됩니다.

// 동기-블로킹 방식에서는 백그라운드 작업 완료 여부를 계속 확인하며, 
// 호출한 함수가 바로 return되지 않고 백그라운드 작업이 끝나야 return합니다. 
// 비동기-논블로킹 방식에서는 호출한 함수가 바로 return되어 다음 작업으로 넘어가고, 
// 백그라운드 작업 완료 여부는 신경 쓰지 않고 나중에 백그라운드가 알림을 줄 때 비로소 처리합니다.




const fs = require('fs');

console.log('시작');
fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('2번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('3번', data.toString());
});
console.log('끝');

// 파일 시스템은 비동기 메서드이기 때문에 실행 순서를 예측할 수 없다.