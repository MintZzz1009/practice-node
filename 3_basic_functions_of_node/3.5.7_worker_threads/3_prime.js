// 2부터 1,000만까지의 숫자 중에 소수가 모두 몇 개 있는지를 알아내는 코드입니다.

const min = 2;
const max = 10000000;
const primes = [];

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

console.time('prime');
findPrimes(min, max);
console.timeEnd('prime');
console.log(primes.length);