// 이전 절에서는 파일 시스템 실습을 하면서 fs 모듈의 비동기 메서드들을 사용해봤습니다. 
// 비동기 메서드들은 백그라운드에서 실행되고, 실행된 후에는 다시 메인 스레드의 콜백 함수나 프로미스의 then 부분이 실행됩니다. 
// 이때 fs 메서드를 여러 번 실행해도 백그라운드에서 동시에 처리되는데, 바로 스레드 풀이 있기 때문입니다.

// fs 외에도 내부적으로 스레드 풀을 사용하는 모듈로는 crypto, zlib, dns.lookup 등이 있습니다.

// 스레드 풀을 쓰는 crypto.pbkdf2 메서드의 예제로 스레드 풀의 존재를 확인해보겠습니다.


const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('1:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('2:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('3:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('4:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('5:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('6:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('7:', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
  console.log('8:', Date.now() - start);
});

// 1~4와 5~8이 그룹으로 묶여져 있고, 5~8이 1~4보다 시간이 더 소요됩니다. 
// 바로 기본적인 스레드 풀의 개수가 네 개이기 때문입니다. 
// 스레드 풀이 네 개이므로 처음 네 개의 작업이 동시에 실행되고, 
// 그것들이 종료되면 다음 네 개의 작업이 실행됩니다.

// 스레드 풀은 직접 컨트롤할 수 없지만, 개수는 조절할 수 있습니다.

// 윈도라면 명령 프롬프트에 SET UV_THREADPOOL_SIZE=1을, 
// 맥과 리눅스라면 터미널에 UV_THREADPOOL_SIZE=1을 입력한 후 
// 다시 node threadpool 명령어를 입력해보세요. 
// 신기하게도 작업이 순서대로 실행될 것입니다. 

// 스레드 풀 개수를 하나로 제한했으므로 작업이 한 번에 하나씩밖에 처리되지 않습니다. 
// SET UV_THREADPOOL_SIZE=숫자와 같은 것은 process.env.UV_THREADPOOL_SIZE를 설정하는 명령어입니다.

// 스레드의 개수를 8개로 두면 다른 결과가 발생할 것입니다. 
// 다만, 숫자를 크게 할 때는 자신의 컴퓨터 코어 개수와 같거나 그보다 많게 둬야 뚜렷한 효과가 발생합니다.

// 지금까지 노드로 파일 시스템에 접근하는 방법을 알아봤습니다. 
// 자바스크립트로는 처음 접근해보는 분도 많을 것입니다. 
// 예제를 반복하고 응용도 해보면 곧 익숙해질 것입니다. 
// 다음 절에서는 스트림에서 사용했던 on에 대해 알아보겠습니다.

