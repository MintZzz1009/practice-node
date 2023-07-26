const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');
writeStream.on('finish', () => {
  console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다.\n');
writeStream.write('한 번 더 씁니다.');
writeStream.end();
// writeStream에서 제공하는 write 메서드로 넣을 데이터를 씁니다. 이는 여러 번 호출할 수 있습니다. 
// 데이터를 다 썼다면 end 메서드로 종료를 알립니다. 이때 finish 이벤트가 발생합니다.

// createReadStream으로 파일을 읽고 그 스트림을 전달받아 createWriteStream으로 파일을 쓸 수도 있습니다. 
// 파일 복사와 비슷합니다. 
// 스트림끼리 연결하는 것을 ‘파이핑한다’고 표현하는데, 
// 액체가 흐르는 관(파이프(pipe))처럼 데이터가 흐른다고 해서 지어진 이름입니다.


// writeme2.txt를 열어보면 조금 전에 넣었던 문자열이 그대로 들어 있을 것입니다.