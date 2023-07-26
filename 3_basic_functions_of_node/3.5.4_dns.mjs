// dns

// DNS를 다룰 때 사용하는 모듈입니다. 주로 도메인을 통해 IP나 기타 DNS 정보를 얻고자 할 때 사용합니다.

import dns from 'dns/promises';

const ip = await dns.lookup('gilbut.co.kr');
// const ip = await dns.resolve('gilbut.co.kr');
console.log('IP', ip);

const a = await dns.resolve('gilbut.co.kr', 'A');   // ipv4 주소
console.log('A', a);

const mx = await dns.resolve('gilbut.co.kr', 'MX'); // 메일 서버
console.log('MX', mx);

const cname = await dns.resolve('www.gilbut.co.kr', 'CNAME');   // 별칭, 주로 www가 붙은 주소는 별칭인 경우가 많습니다.
console.log('CNAME', cname);

const any = await dns.resolve('gilbut.co.kr', 'ANY');   // 도메인 정보
console.log('ANY', any);

// ip 주소는 간단하게 dns.lookup이나 dns.resolve(도메인)으로 얻을 수 있습니다. 
// A(ipv4 주소), AAAA(ipv6 주소), NS(네임서버), 
// SOA(도메인 정보), CNAME(별칭, 주로 www가 붙은 주소는 별칭인 경우가 많습니다), 
// MX(메일 서버) 등은 레코드라고 부르는데, 
// 해당 레코드에 대한 정보는 dns.resolve(도메인, 레코드 이름)으로 조회하면 됩니다.