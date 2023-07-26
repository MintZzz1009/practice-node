// path

// 폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈입니다. 
// path 모듈이 필요한 이유 중 하나는 운영체제별로 경로 구분자가 다르기 때문입니다. 
// 크게 윈도 타입과 POSIX 타입으로 구분됩니다. 
// POSIX는 유닉스 기반의 운영체제들로 맥과 리눅스가 속해 있습니다.

// - 윈도: C:\Users\ZeroCho처럼 \로 구분합니다.
// - POSIX: /home/zerocho처럼 /로 구분합니다.

const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);
console.log('------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename - extname:', path.basename(string, path.extname(string)));
console.log('------------------------------');
console.log('path.parse()', path.parse(string));
console.log('path.format():', path.format({
  dir: 'C:\\users\\zerocho',
  name: 'path',
  ext: '.js',
}));
console.log('path.normalize():', path.normalize('C://users\\zerocho\\path.js'));
console.log('------------------------------');
console.log('path.isAbsolute(C:/):', path.isAbsolute('C:/'));
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
console.log('------------------------------');
console.log('path.relative():', path.relative('C:/users/zerocho/path.js', 'C:/'));
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/zerocho'));
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/zerocho'));

// • path.sep: 경로의 구분자입니다. 윈도는 \, POSIX는 /입니다.

// • path.delimiter: 환경 변수의 구분자입니다. process.env.PATH를 입력하면 여러 개의 경로가 이 구분자로 구분되어 있습니다. 윈도는 세미콜론(;)이고, POSIX는 콜론(:)입니다.

// • path.dirname(경로): 파일이 위치한 폴더 경로를 보여줍니다.

// • path.extname(경로): 파일의 확장자를 보여줍니다.

// • path.basename(경로, 확장자): 파일의 이름(확장자 포함)을 표시합니다. 파일의 이름만 표시하고 싶다면 basename의 두 번째 인수로 파일의 확장자를 넣으면 됩니다.

// • path.parse(경로): 파일 경로를 root, dir, base, ext, name으로 분리합니다.

// • path.format(객체): path.parse()한 객체를 파일 경로로 합칩니다.

// • path.normalize(경로): /나 \를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 변환합니다.

// • path.isAbsolute(경로): 파일의 경로가 절대경로인지 상대경로인지를 true나 false로 알립니다.

// • path.relative(기준경로, 비교경로): 경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알립니다.

// • path.join(경로, …): 여러 인수를 넣으면 하나의 경로로 합칩니다. 상대경로인 ..(부모 디렉터리)과 .(현 위치)도 알아서 처리합니다.

// • path.resolve(경로, …): path.join()과 비슷하지만 차이가 있습니다. 차이점은 다음에 나오는 Note에서 설명합니다.

// path.join과 path.resolve 메서드는 비슷해 보이지만 동작 방식이 다릅니다. 
// /를 만나면 path.resolve는 절대경로로 인식해서 앞의 경로를 무시하고, path.join은 상대경로로 처리합니다. 
// 코드로 보면 이해하기 쉽습니다.
console.log(path.join('/a', '/b', 'c')); /* 결과: \a\b\c */
console.log(path.resolve('/a', '/b', 'c')); /* 결과: C:\b\c */


// 가끔 윈도에서 POSIX 스타일 경로를 사용할 때가 있고, 그 반대일 때도 있습니다. 
// 이러한 경우 윈도에서는 path.posix.sep이나 path.posix.join()과 같이 사용하면 되고, 
// POSIX에서는 path.win32.sep이나 path.win32.join()과 같이 사용하면 됩니다.


// 노드는 require.main 파일을 기준으로 상대경로를 인식합니다. 
// 따라서 require.main과는 다른 디렉터리의 파일이 상대경로를 갖고 있다면 예상과 다르게 동작할 수 있습니다