const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));
console.log('searchParams.get():', myURL.searchParams.get('limit'));
console.log('searchParams.has():', myURL.searchParams.has('page'));

console.log('searchParams.keys():', myURL.searchParams.keys());
console.log('searchParams.values():', myURL.searchParams.values());

myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter', 'es6');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();

// URL과 URLSearchParams 모두 노드 내장 객체이므로 이번에는 require('url')을 생략했습니다.

// URL 생성자를 통해 myURL이라는 주소 객체를 만들었습니다. 
// myURL 안에는 searchParams 객체가 있습니다. 이 객체는 search 부분을 조작하는 다양한 메서드를 지원합니다. 
// 2.2.2절의 FormData 객체 메서드와 비슷합니다. 
// myURL.searchParams 대신 new URLSearchParams(myURL.search)로도 같은 결괏값을 얻을 수 있습니다.

// • getAll(키)     : 키에 해당하는 모든 값을 가져옵니다. category 키에는 nodejs와 javascript라는 두 가지 값이 들어 있습니다.
// • get(키)        : 키에 해당하는 첫 번째 값만 가져옵니다.
// • has(키)        : 해당 키가 있는지 없는지를 검사합니다.
// • keys()         : searchParams의 모든 키를 반복기(iterator)(ES2015 문법) 객체로 가져옵니다.
// • values()       : searchParams의 모든 값을 반복기 객체로 가져옵니다.
// • append(키, 값) : 해당 키를 추가합니다. 같은 키의 값이 있다면 유지하고 하나 더 추가합니다.
// • set(키, 값)    : append와 비슷하지만 같은 키의 값들을 모두 지우고 새로 추가합니다.
// • delete(키)     : 해당 키를 제거합니다.
// • toString()     : 조작한 searchParams 객체를 다시 문자열로 만듭니다. 이 문자열을 search에 대입하면 주소 객체에 반영됩니다.

