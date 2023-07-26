const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./readme4.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./readme4.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);

// 노드에서 제공하는 zlib이라는 모듈의 createGzip이라는 메서드가 스트림을 지원하므로 readStream과 writeStream 중간에서 파이핑을 할 수 있습니다. 
// 버퍼 데이터가 전달되다가 gzip 압축을 거친 후 파일로 써집니다.

// readme4.txt.gz 파일이 생성됩니다. 압축된 파일이라 내용물을 읽기는 힘듭니다.