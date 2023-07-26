// 비밀번호는 보통 단방향 암호화 알고리즘을 사용해서 암호화 
// 단방향 암호화란 복호화할 수 없는 암호화 방식
// 해시 함수라고 부르기도 함(복호화할 수 없으므로)

// 노드에서 해시 함수 사용방법
const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'))

// • createHash(알고리즘): 사용할 해시 알고리즘을 넣습니다. md5, sha1, sha256, sha512 등이 가능하지만, md5와 sha1은 이미 취약점이 발견되었습니다. 현재는 sha512 정도로 충분하지만, 나중에 sha512마저도 취약해지면 더 강화된 알고리즘으로 바꿔야 합니다.
// • update(문자열): 변환할 문자열을 넣습니다.
// • digest(인코딩): 인코딩할 알고리즘을 넣습니다. base64, hex, latin1이 주로 사용되는데, 그중 base64가 결과 문자열이 가장 짧아서 애용됩니다. 결과물로 변환된 문자열을 반환합니다.


// pbkdf2
// 현재는 주로 pbkdf2나 bcrypt, scrypt라는 알고리즘으로 비밀번호를 암호화하고 있습니다. 
// 그중 노드에서 지원하는 pbkdf2를 알아보겠습니다. 
// pbkdf2는 간단히 말하면 기존 문자열에 salt라고 불리는 문자열을 붙인 후 해시 알고리즘을 반복해서 적용하는 겁니다.

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base>64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha>512', (err, key) => {
        console.log('password:', key.toString('base>64'));
    });
});

// 비밀번호 -> sha512변환 : 10만번 반복해서 변환한다.
// 1초 정도 걸리는데 싱글 스레드 프로그래밍을 할 때 블로킹이 될까 걱정할 필요 없다
// crypto.randomBytes와 crypto.pbkdf2 메서드는 내부적으로 스레드 풀을 사용해 멀티 스레딩으로 동작하기 때문
// 이런 메서드가 몇 개 있다.


// 양방향 암호화
// 양방향 대칭형 암호화: 암호화된 문자열을 복호화할 수 있음
// 키가 사용됨.
// 키를 탈취당할 경우 위험함

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
result += cipher.final('base64');
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화:', result2);

// 하지만 위 코드를 완벽하게 이해하려면 암호학을 추가로 공부해야 합니다.

// 실제 사용시에는 다른 사람들이 이미 만들어둔 crypto.js 등의 암호화 코드를 사용하는 것이 추천된다.
// 기본 모듈인 crypto는 암호학 지식이 필요하다.

// 현업에서 비밀번호나 salt 등을 관리할 때는 깃에 올리면 안된다.
// aws kms 등을 사용하는 경우가 많다.