// REPL에서 하나씩 입력해볼 수 있다.

process.version     // 'v18.12.1'   - 설치된 노드의 버전입니다
process.arch        // 'x64'        - 프로세서 아키텍처 정보입니다. arm, ia32 등의 값일 수도 있습니다
process.platform    // 'win32'      - 운영체제 플랫폼 정보입니다. linux나 darwin, freebsd 등의 값일 수도 있습니다
process.pid         // 36508        - 현재 프로세스의 아이디입니다. 프로세스를 여러 개 가질 때 구분할 수 있습니다
process.uptime      // [Function: uptime]       - 프로세스가 시작된 후 흐른 시간입니다. 단위는 초입니다
process.execPath    // 'C:\\Program Files\\nodejs\\node.exe'        - 노드의 경로입니다
process.cwd()       // 'C:\\Users\\지학수\\github\\1_MintZzz\\Node.js 교과서\\practice_note'    - 현재 프로세스가 실행되는 위치입니다
process.cpuUsage()  // { user: 31000, system: 31000 }       - 현재 cpu 사용량입니다

// process.env  시스템 환경 변수
// NODE_OPTIONS는 노드를 실행할 때의 옵션들을 입력받는 환경 변수입니다. --max-old-space-size=8192는 노드의 메모리를 8GB까지 사용할 수 있게 합니다.
// UV_THREADPOOL_SIZE는 노드에서 기본적으로 사용하는 스레드 풀의 스레드 개수를 조절할 수 있게 합니다

// process.env는 서비스의 중요한 키를 저장하는 공간으로도 사용
// 서버나 데이터베이스의 비밀번호와 각종 API 키를 코드에 직접 입력하는 것은 위험합니다. 
// 혹여 서비스가 해킹당해 코드가 유출될 경우, 비밀번호가 코드에 남아 있어 추가 피해가 발생할 수 있습니다.
// 따라서 중요한 비밀번호는 다음과 같이 process.env의 속성으로 대체합니다.
const secretId = process.env.SECRET_ID;
const secretCode = process.env.SECRET_CODE;
// process.env에 직접 SECRET_ID와 SECRET_CODE를 넣으면 됩니다. 넣는 방법은 운영체제마다 차이가 있습니다. 
// 하지만 한 번에 모든 운영체제에 동일하게 넣을 수 있는 방법이 있으며, 6.2절에서 dotenv를 사용할 때 배웁니다.