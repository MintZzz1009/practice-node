// npm outdated - 업데이트할 수 있는 패키지가 있는지 확인

// npm update [패키지 이름] - 업데이트 가능한 모든 패키지가 Wanted에 적힌 버전으로 업데이트됨. 
// Latest는 해당 패키지의 최신 버전이지만 package.json에 적힌 버전 범위와 다르다면 설치되지 않습니다.

// npm uninstall [패키지 이름] - 패키지가 node_modules 폴더와 package.json에서 사라집니다. npm rm [패키지 이름]으로 줄여 쓸 수도 있습니다.

// npm search [검색어] - 윈도나 맥에서는 브라우저를 통해 npm 공식 사이트(https://npmjs.com)에서 검색가능. 
// 하지만 GUI가 없는 리눅스에서는 이 명령어를 사용해 콘솔로 검색할 수 있음. 
// package.json에 넣어둔 keywords가 이때 사용됩니다.

// npm info [패키지 이름] - ackage.json의 내용과 의존 관계, 설치 가능한 버전 정보 등 패키지의 세부정보가 표시됩니다.

// npm login - npm에 로그인

// npm whoami - 로그인한 사용자가 누구인지 알림. 로그인된 상태가 아니라면 에러가 발생

// npm logout - npm login으로 로그인한 계정을 로그아웃할 때 사용합니다

// npm version [버전] 명령어를 사용하면 package.json의 버전을 올립니다. 원하는 버전의 숫자를 넣으면 됩니다. 또는 major, minor, patch라는 문자열을 넣어서 해당 부분의 숫자를 1 올릴 수도 있습니다. 예를 들면 다음과 같습니다.
// npm version 5.3.2, npm version minor

// npm deprecate [패키지 이름] [버전] [메시지] - 해당 패키지를 설치할 때 경고 메시지를 띄우게 하는 명령어. 
// 자신의 패키지에만 이 명령어를 적용할 수 있다. deprecated 처리를 해두면, 다른 사용자들이 버그가 있는 버전의 패키지를 설치할 때 경고 메시지가 출력된다.

// npm publish - 자신이 만든 패키지를 배포할 때 사용합니다. 

// npm unpublish - 배포한 패키지를 제거할 때 사용. 24시간 이내에 배포한 패키지만 제거할 수 있습니다. 
// 이러한 제약이 있는 이유는 의존성 관계 때문이다. 다른 사람이 사용하고 있는 패키지를 제거하는 경우를 막기 위해서이다.

// 이외에도 많은 명령어가 있는데, npm 공식 문서(https://docs.npmjs.com/)의 CLI Commands에서 확인할 수 있다.


