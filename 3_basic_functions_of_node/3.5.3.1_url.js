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