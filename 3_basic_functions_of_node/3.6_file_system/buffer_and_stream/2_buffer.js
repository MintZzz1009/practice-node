const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log('from():', buffer);
console.log('length:', buffer.length);
console.log('toString():', buffer.toString());

const array = [Buffer.from('띄엄 ' ), Buffer.from('띄엄 ' ), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc():', buffer3);

// • from(문자열): 문자열을 버퍼로 바꿀 수 있습니다. length 속성은 버퍼의 크기를 알립니다. 바이트 단위입니다.

// • toString(버퍼): 버퍼를 다시 문자열로 바꿀 수 있습니다. 이때 base64나 hex를 인수로 넣으면 해당 인코딩으로도 변환 가능합니다.

// • concat(배열): 배열 안에 든 버퍼들을 하나로 합칩니다.

// • alloc(바이트): 빈 버퍼를 생성합니다. 바이트를 인수로 넣으면 해당 크기의 버퍼가 생성됩니다.


// 버퍼는 서버에 스트림보다 많은 양의 메모리가 필요함
// 스트림은 버퍼보다 작은 크기의 메모리로 나눠서 보내므로 서버 메모리를 좀 더 효율적으로 사용할 수 있다.

// 또한, 모든 내용을 버퍼에 다 쓴 후에야 다음 동작으로 넘어가므로 파일 읽기, 압축, 파일 쓰기 등의 조작을 연달아 할 때 매번 전체 용량을 버퍼로 처리해야 다음 단계로 넘어갈 수 있습니다.

// 그래서 버퍼의 크기를 작게 만들고 여러 번에 걸쳐 나눠 보내는 방식이 등장했습니다. 예를 들면 버퍼 1MB를 만든 후 100MB 파일을 100번에 걸쳐 나눠 보내는 것입니다. 이로써 메모리 1MB로 100MB 파일을 전송할 수 있습니다. 이를 편리하게 만든 것이 스트림입니다.