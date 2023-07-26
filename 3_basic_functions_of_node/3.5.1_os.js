// os 모듈

// 웹 브라우저에 사용되는 자바스크립트는 운영체제의 정보를 가져올 수 없지만, 
// 노드는 os 모듈에 정보가 담겨 있어 정보를 가져올 수 있습니다.

// 내장 모듈인 os를 불러오려면 require('os') 또는 require('node:os')를 하면 됩니다. 
// os라는 파일이 존재하는 것은 아니지만 노드가 알아서 내장 모듈임을 파악해 불러옵니다.

const os = require('os');

console.log('운영체제 정보---------------------------------');
console.log('os.arch():', os.arch());
console.log('os.platform():', os.platform());
console.log('os.type():', os.type());
console.log('os.uptime():', os.uptime());
console.log('os.hostname():', os.hostname());
console.log('os.release():', os.release());

console.log('경로------------------------------------------');
console.log('os.homedir():', os.homedir());
console.log('os.tmpdir():', os.tmpdir());

console.log('cpu 정보--------------------------------------');
console.log('os.cpus():', os.cpus());
console.log('os.cpus().length:', os.cpus().length);

console.log('메모리 정보-----------------------------------');
console.log('os.freemem():', os.freemem());
console.log('os.totalmem():', os.totalmem());

// process 객체와 겹치는 부분도 조금 보입니다. os 모듈도 사용자 컴퓨터의 운영체제 정보를 가져오는 것

// os.arch(): process.arch와 동일합니다.
// os.platform(): process.platform과 동일합니다.
// os.type(): 운영체제의 종류를 보여줍니다.
// os.uptime(): 운영체제 부팅 이후 흐른 시간(초)을 보여줍니다. process.uptime()은 노드의 실행 시간이었습니다.
// os.hostname(): 컴퓨터의 이름을 보여줍니다.
// os.release(): 운영체제의 버전을 보여줍니다.
// os.homedir(): 홈 디렉터리 경로를 보여줍니다.
// os.tmpdir(): 임시 파일 저장 경로를 보여줍니다.
// os.cpus(): 컴퓨터의 코어 정보를 보여줍니다.
// os.freemem(): 사용 가능한 메모리(RAM)를 보여줍니다.
// os.totalmem(): 전체 메모리 용량을 보여줍니다.


//os.cpus().length를 하면 코어의 개수가 숫자로 나옵니다. 
// 하지만 노드에서 싱글 스레드 프로그래밍을 하면 코어가 몇 개든 상관없이 대부분의 경우 코어를 하나밖에 사용하지 않습니다. 
// 하지만 4.5절에 나오는 cluster 모듈을 사용하는 경우 코어 개수에 맞춰서 프로세스를 늘릴 수 있습니다. 이때 cpus() 메서드를 사용할 것입니다.

// os.constants라는 객체가 있습니다. 그 안에는 각종 에러와 신호에 대한 정보가 담겨 있습니다. 에러가 발생했을 때는 EADDRINUSE나 ECONNRESET 같은 에러 코드를 함께 보여주며, 이러한 코드들이 os.constants 안에 들어 있습니다. 에러 코드가 너무 많아서 외울 수 없으므로 발생할 때마다 검색해보는 것이 좋습니다.

// os 모듈은 주로 컴퓨터 내부 자원에 빈번하게 접근하는 경우 사용됩니다. 
// 즉, 일반적인 웹 서비스를 제작할 때는 사용 빈도가 높지 않습니다.
// 하지만 운영체제별로 다른 서비스를 제공하고 싶을 때 os 모듈이 유용할 것입니다.