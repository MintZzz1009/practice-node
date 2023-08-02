// url

// 인터넷 주소를 쉽게 조작하도록 도와주는 모듈입니다. 
// url 처리에는 크게 두 가지 방식이 있습니다. 
// 하나는 노드 버전 7에서 추가된 WHATWG(웹 표준을 정하는 단체의 이름) 방식의 url이고, 
// 다른 하나는 예전부터 노드에서 사용하던 방식의 url입니다.
// 요즘은 WHATWG 방식만 사용합니다. 브라우저에서도 WHATWG 방식을 사용하므로 호환성이 좋습니다.

// WHATWG와 노드의 주소 체계
// https://thebook.io/080334/0122/


const url = require('url'); // ➊

const { URL } = url;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));

// ➊ url 모듈 안에 URL 생성자가 있습니다. 
// 참고로 URL은 노드 내장 객체이기도 해서 require할 필요는 없습니다. 
// 이 생성자에 주소를 넣어 객체로 만들면 주소가 부분별로 정리됩니다. 
// 이 방식이 WHATWG의 url입니다. 
// username, password, origin, searchParams 속성이 존재합니다.


// url.format(객체): 분해되었던 url 객체를 다시 원래 상태로 조립합니다.
// 주소가 host 부분 없이 pathname 부분만 오는 경우(예시: /book/bookList.apsx), WHATWG 방식은 이 주소를 처리할 수 없습니다. 
// 4장에서 서버를 만들 때 host 부분 없이 pathname만 오는 주소를 보게 될 것입니다. 
// 이럴 때는 new URL('/book/bookList.apsx', 'https://www.gilbut.co.kr')처럼 두 번째 인수로 host를 적어줘야 합니다.

// search 부분(쿼리스트링)은 보통 주소를 통해 데이터를 전달할 때 사용됩니다. 
// search는 물음표(?)로 시작하고, 그 뒤에 키=값 형식으로 데이터를 전달합니다. 
// 여러 키가 있을 경우에는 &로 구분합니다. search 부분을 다루기 위해 searchParams라는 특수한 객체가 생성됩니다.

// http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript와 같은 주소에서는 
// ?page=3&limit=10&category=nodejs&category=javascript 부분이 search입니다.
