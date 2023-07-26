// • node: command not found: 노드를 설치했지만 이 에러가 발생하는 경우는 환경 변수가 제대로 설정되어 있지 않은 것입니다. 환경 변수에는 노드가 설치된 경로가 포함되어야 합니다. node 외의 다른 명령어도 마찬가지입니다. 그 명령어를 수행할 수 있는 파일이 환경 변수에 들어 있어야 명령어를 콘솔에서 사용할 수 있습니다.

// • ReferenceError: 모듈 is not defined: 모듈을 require했는지 확인합니다.

// • Error: Cannot find module 모듈명: 해당 모듈을 require했지만 설치하지 않았습니다. npm i 명령어로 설치하세요.

// • Error [ERR_MODULE_NOT_FOUND]: 존재하지 않는 모듈을 불러오려 할 때 발생합니다.

// • Error: Can't set headers after they are sent: 요청에 대한 응답을 보낼 때 응답을 두 번 이상 보냈습니다. 요청에 대한 응답은 한 번만 보내야 합니다. 응답을 보내는 메서드를 두 번 이상 사용하지 않았는지 체크해보세요.

// • FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed- JavaScript heap out of memory: 코드를 실행할 때 메모리가 부족해서 스크립트가 정상적으로 작동하지 않는 경우입니다. 코드가 잘못 구현되었을 확률이 높으므로 코드를 점검해보세요. 만약 코드는 정상이지만 노드가 활용할 수 있는 메모리가 부족한 경우라면 노드의 메모리를 늘릴 수 있습니다. 노드를 실행할 때 node --max-old-space-size=4096 파일명과 같은 명령어를 사용하면 됩니다. 4096은 4GB를 의미합니다. 여기에 원하는 용량을 적으면 됩니다.

// • UnhandledPromiseRejectionWarning: Unhandled promise rejection: 프로미스 사용 시 catch 메서드를 붙이지 않으면 발생합니다. 항상 catch를 붙여 에러가 발생하는 상황에 대비하세요.

// • EADDRINUSE 포트 번호: 해당 포트 번호에 이미 다른 프로세스가 연결되어 있습니다. 그 프로세스는 노드 프로세스일 수도 있고 다른 프로그램일 수도 있습니다. 그 프로세스를 종료하거나 다른 포트 번호를 사용해야 합니다.

// // 프로세스 종료 명령어 https://thebook.io/080334/0180/

// • EACCES 또는 EPERM: 노드가 작업을 수행하는 데 권한이 충분하지 않습니다. 파일/폴더 수정, 삭제, 생성 권한을 확인해보는 것이 좋습니다. 맥이나 리눅스 운영체제라면 명령어 앞에 sudo를 붙이는 것도 방법입니다.

// • EJSONPARSE: package.json 등의 JSON 파일에 문법 오류가 있을 때 발생합니다. 자바스크립트 객체와는 형식이 조금 다르니 쉼표 같은 게 빠지거나 추가되지는 않았는지 확인해보세요.

// • ECONNREFUSED: 요청을 보냈으나 연결이 성립하지 않을 때 발생합니다. 요청을 받는 서버의 주소가 올바른지, 서버가 꺼져 있지는 않은지 등을 확인해봐야 합니다.

// • ETARGET: package.json에 기록한 패키지 버전이 존재하지 않을 때 발생합니다. 해당 버전이 존재하는지 확인하세요.

// • ETIMEOUT: 요청을 보냈으나 응답이 시간 내에 오지 않을 때 발생합니다. 역시 요청을 받는 서버의 상태를 점검해봐야 합니다.

// • ENOENT: no such file or directory: 지정한 폴더나 파일이 존재하지 않는 경우입니다. 맥이나 리눅스 운영체제에서는 대소문자도 구별하므로 확인해봐야 합니다.




// • 노드 공식 문서: https://nodejs.org/dist/latest-v18.x/docs/api/

// • NODE_OPTIONS: https://nodejs.org/dist/latest-v18.x/docs/api/cli.html#cli_node_options_options

// • UV_THREADPOOL_SIZE: https://nodejs.org/dist/latest-v18.x/docs/api/cli.html#cli_uv_threadpool_size_size

// • 에러 코드: https://nodejs.org/dist/latest-v18.x/docs/api/errors.html#errors_node_js_error_codes

// • uncaughtException: https://nodejs.org