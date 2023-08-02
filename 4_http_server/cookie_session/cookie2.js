const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});
// 문자열 mycookie=test -> 객체 { mycookie: 'test'}


http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);


    // 주소가 /login으로 시작하는 경우 - form을 통해 login 요청을 보낼 때
    if (req.url.startsWith('/login')) {
        const url = new URL(req.url, 'http://localhost:8084');
        console.log(url)
        const name = url.searchParams.get('name');
        const expires = new Date();
        // 쿠키 유효 시간을 현재 시간 + 5분으로 설정
        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302, {
            Location: '/',  // 리다이렉트 되는 주소
            'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();


        // 주소가 /이면서 name이라는 쿠키가 있는 경우 -> 로그인된 모습의 페이지
    } else if (cookies.name) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`${cookies.name}님 안녕하세요`);
    } else { // 주소가 /이면서 name이라는 쿠키가 없는 경우 -> 로그인 form이 보이는 페이지
        try {
            const data = await fs.readFile(path.join(__dirname, 'cookie2.html'));
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end(err.message);
        }
    }

})
    .listen(8084, () => {
        console.log('8084번 포트에서 서버 대기 중입니다!');
    });