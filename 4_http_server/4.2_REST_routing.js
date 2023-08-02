// 서버의 요청을 보낼 때 -> 주소를 통해 요청의 내용을 표현
// 주소가 /index.html 이면 -> 서버의 index.html을 보내달라는 뜻
// /about.html 이면 -> 서버의 about.html을 보내달라는 뜻

// 이런식으로 요청의 내용이 주소를 통해 표현되므로 서버가 이해하기 쉬운 주소를 사용하는 것이 좋다.

// REST : REpresentational State Transfer
// 서버의 자원을 정의하고 자원에 대한 주소를 지정하는 방법
// 자원 : 꼭 파일일 필요는 없고 서버가 행할 수 있는 것들을 통틀어서 의미.

// 주소 - 의미를 명확히 하기 위해서 명사로 구성
// /user - 사용자 정보에 관련된 자원 요청, /post - 게시글에 관련된 자원 요청
// 주소 외에도 HTTP 요청 메서드를 사용 - GET, POST, PUT, PATCH, DELETE, OPTIONS

// • GET: 서버 자원을 가져오고자 할 때 사용합니다. 요청의 본문(body)에 데이터를 넣지 않습니다. 데이터를 서버로 보내야 한다면 쿼리스트링을 사용합니다.
// • POST: 서버에 자원을 새로 등록하고자 할 때 사용합니다. 요청의 본문에 새로 등록할 데이터를 넣어 보냅니다.
// • PUT: 서버의 자원을 요청에 들어 있는 자원으로 치환하고자 할 때 사용합니다. 요청의 본문에 치환할 데이터를 넣어 보냅니다.
// • PATCH: 서버 자원의 일부만 수정하고자 할 때 사용합니다. 요청의 본문에 일부 수정할 데이터를 넣어 보냅니다.
// • DELETE: 서버의 자원을 삭제하고자 할 때 사용합니다. 요청의 본문에 데이터를 넣지 않습니다.
// • OPTIONS: 요청을 하기 전에 통신 옵션을 설명하기 위해 사용합니다. 12장에서 자주 보게 될 것입니다.

// 주소 하나가 요청 메서드를 여러 개 가질 수 있다.
// GET /user - 사용자 정보를 가져오는 요청
// POST /user - 새로운 사용자를 등록

// REST를 따르는 서버 -> RESTful 하다고 표현