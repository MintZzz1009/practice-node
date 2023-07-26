// 타이머는 콜백 기반 API이지만 프로미스 방식을 사용할 수도 있습니다.
// 다만, 프로미스 기반 타이머는 노드 내장 객체가 아니라 3.5절에서 배울 노드 내장 모듈입니다.

import { setTimeout, setInterval } from 'timers/promises';

await setTimeout(3000);
console.log('3초 뒤 실행');

for await (const startTime of setInterval(1000, Date.now())) {
    console.log('1초마다 실행', new Date(startTime));
}

// 3초 뒤 실행
// 1초마다 실행 2023-07-21T08:49:03.728Z
// 1초마다 실행 2023-07-21T08:49:03.728Z
// 1초마다 실행 2023-07-21T08:49:03.728Z
// 1초마다 실행 2023-07-21T08:49:03.728Z