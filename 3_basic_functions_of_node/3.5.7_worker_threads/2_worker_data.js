// 이번에는 여러 개의 워커 스레드에 데이터를 넘겨봅시다. 
// postMessage로 데이터를 보내는 방법과는 다른 방법입니다.

// const {
  Worker, isMainThread, parentPort, workerData,
} = require('worker_threads');

if (isMainThread) { // 부모일 때
  const threads = new Set();
  threads.add(new Worker(__filename, {
    workerData: { start: 1 },
  }));
  threads.add(new Worker(__filename, {
    workerData: { start: 2 },
  }));
  for (let worker of threads) {
    worker.on('message', message => console.log('from worker', message));
    worker.on('exit', () => {
      threads.delete(worker);
      if (threads.size === 0) {
        console.log('job done');
      }
    });
  }
} else { // 워커일 때
  const data = workerData;
  parentPort.postMessage(data.start + 100);
}

// new Worker를 호출할 때 두 번째 인수의 workerData 속성으로 원하는 데이터를 보낼 수 있습니다. 
// 워커에서는 workerData로 부모로부터 데이터를 받습니다. 
// 현재 두 개의 워커가 돌아가고 있으며, 각각 부모로부터 숫자를 받아서 100을 더해 돌려줍니다. 
// 돌려주는 순간 워커가 종료되어 worker.on('exit')이 실행됩니다. 
// 워커 두 개가 모두 종료되면 job done이 로깅됩니다.