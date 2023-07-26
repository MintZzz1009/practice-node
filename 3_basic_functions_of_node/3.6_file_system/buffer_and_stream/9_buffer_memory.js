// readFile 메서드를 사용해 big.txt를 big2.txt로 복사

const fs = require('fs');

console.log('before: ', process.memoryUsage().rss); // 메모리 용량 18MB

const data1 = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', data1);
console.log('buffer: ', process.memoryUsage().rss); // 메모리 용량 1GB

// 1GB 용량의 파일을 복사하기 위해 메모리에 파일을 모두 올려둔 후 writeFileSync를 수행했기 때문

