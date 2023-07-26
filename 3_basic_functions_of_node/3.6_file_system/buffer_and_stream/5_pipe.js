// 파일 복사 방식 - pipe 매서드 사용

const fs = require('fs');

const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('writeme3.txt');
readStream.pipe(writeStream);

// 미리 읽기 스트림과 쓰기 스트림을 만들어둔 후 
// 두 개의 스트림 사이를 pipe 메서드로 연결하면 저절로 데이터가 writeStream으로 넘어갑니다.