const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const min = 2;
let primes = [];

function findPrimes(start, range) {
    let isPrime = true;
    const end = start + range;
    for (let i = start; i < end; i++) {
        for (let j = min; j < Math.sqrt(end); j++) {
            if (i !== j && i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
        isPrime = true;
    }
}

if (isMainThread) {
    const max = 10000000;
    const threadCount = 8;
    const threads = new Set();
    const range = Math.floor((max - min) / threadCount);
    let start = min;
    console.time('prime');
    for (let i = 0; i < threadCount - 1; i++) {
        const wStart = start;
        threads.add(new Worker(__filename, { workerData: { start: wStart, range } }));
        start += range;
    }
    threads.add(new Worker(__filename, { workerData: { start, range: max - start } }));
    for (let worker of threads) {
        worker.on('error', (err) => {
            throw err;
        });
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
                console.timeEnd('prime');
                console.log(primes.length);
            }
        });
        worker.on('message', (msg) => {
            primes = primes.concat(msg);
        });
    }
} else {
    findPrimes(workerData.start, workerData.range);
    parentPort.postMessage(primes);
}

// 여덟 개의 스레드가 일을 나눠서 처리하게 했습니다. 
// 멀티 스레딩을 할 때는 일을 나눠서 처리하도록 하는 게 제일 어렵습니다. 
// 어떠한 일은 공유하고 있는 데이터가 많아 일을 나누기가 어렵습니다. 
// 다행히 소수의 개수를 구하는 작업은 정해진 범위(2부터 1,000만)를 스레드들이 일정하게 나눠서 수행할 수 있습니다.


// 속도가 여섯 배 정도 빨라졌습니다. 
// 워커 스레드를 여덟 개 사용했다고 해서 여덟 배 빨라지는 것은 아닙니다. 
// 스레드를 생성하고 스레드 사이에서 통신하는 데 상당한 비용이 발생하므로, 
// 이 점을 고려해서 멀티 스레딩을 해야 합니다. 잘못하면 멀티 스레딩을 할 때 싱글 스레딩보다 더 느려지는 현상도 발생할 수 있습니다.