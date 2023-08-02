// https 모듈은 웹 서버에 SSL 암호화를 추가합니다. 
// GET이나 POST 요청을 할 때 오가는 데이터를 암호화해서 중간에 다른 사람이 요청을 가로채더라도 내용을 확인할 수 없게 합니다. 
// 요즘은 로그인이나 결제가 필요한 창에서 https 적용이 필수가 되는 추세입니다.


// 서버에 암호화를 적용하려면 https 모듈을 사용해야 합니다. 

// 하지만 https는 아무나 사용할 수 있는 것이 아닙니다. 
// 암호화를 적용하는 만큼, 그것을 인증해줄 수 있는 기관도 필요합니다. 
// 인증서는 인증 기관에서 구입해야 하는데, Let’s Encrypt 같은 기관에서 무료로 발급해주기도 합니다.

// https 적용 코드
const https = require('https');
const fs = require('fs');

https.createServer({
  cert: fs.readFileSync('도메인 인증서 경로'),
  key: fs.readFileSync('도메인 비밀 키 경로'),
  ca: [
    fs.readFileSync('상위 인증서 경로'),
    fs.readFileSync('상위 인증서 경로'),
  ],
}, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다!');
  });


// 다른 것은 거의 비슷하지만, createServer 메서드가 인수를 두 개 받습니다. 
// 두 번째 인수는 http 모듈과 같이 서버 로직이고, 첫 번째 인수는 인증서에 관련된 옵션 객체입니다. 

// 인증서를 구입하면 pem이나 crt, 또는 key 확장자를 가진 파일들을 제공합니다. 
// 파일들을 fs.readFileSync 메서드로 읽어서 cert, key, ca 옵션에 알맞게 넣으면 됩니다. 
// 실제 서버에서는 80번 포트 대신 443번 포트를 사용하면 됩니다.


// http2 적용 코드
const http2 = require('http2');
const fs = require('fs');

http2.createSecureServer({
  cert: fs.readFileSync('도메인 인증서 경로'),
  key: fs.readFileSync('도메인 비밀 키 경로'),
  ca: [
    fs.readFileSync('상위 인증서 경로'),
    fs.readFileSync('상위 인증서 경로'),
  ],
}, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다!');
  });