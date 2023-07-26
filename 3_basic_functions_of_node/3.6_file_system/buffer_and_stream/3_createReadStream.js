const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 });
// 두 번째 인수는 옵션 객체인데, highWaterMark라는 옵션이 버퍼의 크기(바이트 단위)를 정할 수 있는 옵션입니다.

const data = [];

readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data :', chunk, chunk.length);
});

// 파일을 다 읽으면 end 이벤트가 발생합니다
readStream.on('end', () => {
  console.log('end :', Buffer.concat(data).toString());
});
// 예제에서는 미리 data 배열을 만들어놓고 들어오는 chunk들을 하나씩 push한 뒤 마지막에 Buffer.concat()으로 합쳐서 다시 문자열을 만들었습니다.

readStream.on('error', (err) => {
  console.log('error :', err);
});