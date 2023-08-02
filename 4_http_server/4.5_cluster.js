// cluster

// cluster 모듈은 기본적으로 싱글 프로세스로 동작하는 노드가 CPU 코어를 모두 사용할 수 있게 해주는 모듈

// 포트를 공유하는 노드 프로세스를 여러 개 둘 수도 있어, 
// 요청이 많이 들어왔을 때 병렬로 실행된 서버의 개수만큼 요청이 분산되게 할 수 있습니다. 
// 서버에 무리가 덜 가게 되는 셈입니다.

// 예를 들어 코어가 여덟 개인 서버가 있을 때, 노드는 보통 코어를 하나만 활용합니다. 
// 하지만 cluster 모듈을 설정해 코어 하나당 노드 프로세스 하나가 돌아가게 할 수 있습니다. 
// 성능이 꼭 여덟 배가 되는 것은 아니지만, 코어를 하나만 사용할 때에 비해 성능이 개선됩니다. 

// 하지만 장점만 있는 것은 아니며, 메모리를 공유하지 못하는 등의 단점도 있습니다. 
// 따라서 세션을 메모리에 저장하는 경우 문제가 될 수 있으며, 이는 레디스 등의 서버를 도입해 해결할 수 있습니다.


// clustering 한 코드
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
if (cluster.isMaster) {
    console.log(`마스터 프로세스 아이디: ${process.pid}`);
    // CPU 개수만큼 워커를 생산
    for (let i = 0; i < numCPUs; i += 1) {
        cluster.fork();
    }
    // 워커가 종료되었을 때
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
        console.log('code', code, 'signal', signal);
        cluster.fork();
    });
} else {
    // 워커들이 포트에서 대기
    http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write('<h1>Hello Node!</h1>');
        res.end('<p>Hello Cluster!</p>');
        setTimeout(() => { // 워커가 존재하는지 확인하기 위해 1초마다 강제 종료
            process.exit(1);
        }, 1000);
    }).listen(8086);

    console.log(`${process.pid}번 워커 실행`);
}


// 워커 하나가 종료될 때마다 새로운 워커 하나가 생성됩니다. 

// 하지만 이러한 방식으로 오류를 처리하려는 것은 좋지 않은 생각입니다. 오류 자체의 원인을 찾아 해결해야 합니다. 
// 그래도 예기치 못한 에러로 인해 서버가 종료되는 현상을 방지할 수 있어 클러스터링을 적용해두는 것이 좋습니다.