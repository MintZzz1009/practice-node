const fs = require('fs');

fs.writeFile('./writeme.txt', '글이 입력됩니다', (err) => {
  if (err) {
    throw err;
  }
  fs.readFile('./writeme.txt', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data.toString());
  });
});


// writeFile 메서드에 생성될 파일의 경로와 내용을 입력합니다. 
// 도중에 에러가 발생하지 않았다면 같은 폴더 내에 writeme.txt가 생성되었을 것입니다. 
// 직접 열어봐도 되지만, 파일 시스템을 공부하는 중이므로 readFile 메서드로 파일을 읽어봅니다.