// promise - 콜백지옥이라고 불리는 지저분한 자바스크립트 코드의 해결책

// 콜백지옥이란?

// 함수의 매개변수로 함수를 등록하는데, 등록한 함수의 매개변수로 또 함수를 등록하는 것이 계속 이어져서 매우 지저분한 코드가 되는 것.
step1(function (value1) {
    step2(function (value2) {
        step3(function (value3) {
            step4(function (value4) {
                step5(function (value5) {
                    step6(function (value6) {
                        // Do something with value6
                    });
                });
            });
        });
    });
});
// 위 코드는 비동기 함수(web api)를 활용하는 코드가 아니라서 에러처리를 하지 않았지만, 만일 에러처리까지 해야 한다면 말도 안되는 지저분한 코드가 될 것이다.

// 왜 이런 콜백지옥 코드를 짜게 되는 것인가?
// => 비동기 처리가 되는 함수들을 어떤 순서를 정해서 동기적으로 처리되도록 만들기 위해서 사용한다.
// 이를 위해서 함수의 콜백함수로 등록하면 상위 함수가 완료되기 위해서는 콜백함수가 완료되어야 하는 식으로 완료 순서를 챙길 수 있다.
// 예시) https://sangseophwang.tistory.com/103 참고(2. callback function)

// 이러한 상황에서 callback 함수를 사용하는 방식이 아니라 promise를 활용한다면 훨씬 가독성이 좋은 코드를 짤 수 있다.

// promise 코드 예시
const condition = true; // true이면 resolve, false이면 reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});
// 다른 코드가 들어갈 수 있음
promise
    .then((message) => {
        console.log(message); // 성공(resolve)한 경우 실행
    })
    .catch((error) => {
        console.error(error); // 실패(reject)한 경우 실행
    })
    .finally(() => { // 끝나고 무조건 실행
        console.log('무조건');
    });

// 콜백지옥 탈출 예시 코드
promise
    .then((message) => {
        return new Promise((resolve, reject) => {   // then에서 new Promise를 return해야만 다음 then에서 받을 수 있다
            resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        console.log(message3);
    })

    .catch((error) => {
        console.error(error);
    });

// 실제 예시 코드 - 3번 중첩된 콜백 함수
function findAndSaveUser(Users) {
    Users.findOne({}, (err, user) => { // 첫 번째 콜백
        if (err) {
            return console.error(err);
        }
        user.name = 'zero';
        user.save((err) => { // 두 번째 콜백
            if (err) {
                return console.error(err);
            }
            Users.findOne({ gender: 'm' }, (err, user) => { // 세 번째 콜백
                // 생략
            });
        });
    });
}

// promise 를 활용해서 바꾼 코드
function findAndSaveUser(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'zero';
            return user.save();
        })
        .then((user) => {
            return Users.findOne({ gender: 'm' });
        })
        .then((user) => {
            // 생략
        })
        .catch(err => {     // 콜백에서 매번 따로 처리해야 했던 에러도 마지막 catch에서 한 번에 처리할 수 있다. 
            console.error(err);
        });
}

// 하지만 모든 콜백 함수를 위와 같이 바꿀 수 있는 것은 아니다. 메서드가 프로미스 방식을 지원해야 한다.

// 프로미스 여러 개를 한 번에 실행할 수 있는 방법
// 기존의 콜백 패턴이었다면 콜백을 여러 번 중첩해서 사용해야 했다. 하지만 Promise.all을 활용하면 간단히 할 수 있다.
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])       // 프로미스가 여러 개 있을 때 Promise.all에 넣으면 모두 resolve될 때까지 기다렸다가 then으로 넘어간다
    .then((result) => {                 // result 매개변수에 각각의 프로미스 결괏값이 배열로 들어 있다.
        console.log(result);    // ['성공1', '성공2'];
    })
    .catch((error) => {       //  Promise 중 하나라도 reject가 되면 catch로 넘어간다. 다만, 여러 프로미스 중 어떤 프로미스가 reject되었는지는 알 수 없다.
        console.error(error);
    });

// 정확히 어떤 프로미스에서 reject되었는지 알기 위해서는 Promise.all 대신 Promise.allSettled를 사용해야 합니다.
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.reject('실패2');
const promise3 = Promise.resolve('성공3');
Promise.allSettled([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
        /* [
        *    { status: 'fulfilled', value: '성공1' },
        *    { status: 'rejected', reason: '실패2' },
        *    { status: 'fulfilled', value: '성공3' }
        *  ]
        */
    })
    .catch((error) => {
        console.error(error);
    });

// Node 16 버전부터는 reject된 Promise에 catch를 달지 않으면 UnhandledPromiseRejection 에러가 발생한다. 
// 에러가 발생하면 다음 코드가 실행되지 않으니 반드시 프로미스에 catch 메서드를 붙이는 것을 권장한다.

try {
    Promise.reject('에러');
} catch (e) {
    console.error(e); // UnhandledPromiseRejection: This error originated either by throwing inside...
}

Promise.reject('에러').catch(() => {
    // catch 메서드를 붙이면 에러가 발생하지 않음
})





