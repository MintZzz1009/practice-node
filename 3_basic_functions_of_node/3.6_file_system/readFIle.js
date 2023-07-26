const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);    // <Buffer ec a0 80 eb a5 bc 20 ec 9d bd ec 96 b4 ec a3 bc ec 84 b8 ec 9a 94 2e 0d 0a>
  console.log(data.toString()); // 저를 읽어주세요.
});


// 파일의 경로가 현재 파일 기준이 아니라 node 명령어를 실행하는 콘솔 기준이라는 점에 유의해야 합니다

// readFile의 결과물은 버퍼(buffer)라는 형식으로 제공됩니다. 
// 지금은 단순히 버퍼를 메모리의 데이터라고 생각하면 됩니다. 
// 이에 대한 내용은 3.6.2절에서 자세히 설명합니다. 

// 버퍼는 사람이 읽을 수 있는 형식이 아니므로 toString을 사용해 문자열로 변환했습니다.