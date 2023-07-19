// 프로미스가 콜백 지옥을 해결했다지만, 여전히 코드가 장황하다. then과 catch가 계속 반복되기 때문 
// async/await 문법은 프로미스를 사용한 코드를 한 번 더 깔끔하게 줄인다

// 프로미스 코드
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
        .catch(err => {
            console.error(err);
        });
}

// async/await 활용
async function findAndSaveUser(Users) {             // 함수 선언부를 일반 함수 대신 async function으로 교체
    let user = await Users.findOne({});             // 프로미스 앞에 await을 붙임 => 이제 함수는 해당 프로미스가 resolve될 때까지 기다린 뒤 다음 로직으로 넘어감
    // 즉, await Users.findOne({})이 resolve될 때까지 기다린 다음에 user 변수를 초기화함
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({ gender: 'm' });
    // 생략
}

// 에러 처리
async function findAndSaveUser(Users) {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender: 'm' });
        // 생략
    } catch (error) {
        console.error(error);
    }
}


// 화살표 함수의 async 사용
const findAndSaveUser = async (Users) => {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender: 'm' });
        // 생략
    } catch (error) {
        console.error(error);
    }
};

// for문과 async/await을 같이 써서 프로미스를 순차적으로 실행하는 방법 (for문과 함께 쓰는 것은 노드 10 버전부터 지원하는 ES2018 문법입니다.)
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
    for await (promise of [promise1, promise2]) {     // for await of문을 사용해서 프로미스 배열을 순회
        console.log(promise);
    }
})();


// async 함수의 반환값은 항상 Promise로 감싸진다. 
// 따라서 실행 후 then을 붙이거나 또 다른 async 함수 안에서 await을 붙여서 처리할 수 있다.
async function findAndSaveUser(Users) {
    // 생략
}

findAndSaveUser().then(() => { /* 생략 */ });
// 또는
async function other() {
    const result = await findAndSaveUser();
}