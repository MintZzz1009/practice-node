function add1(x, y) {
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
};

const add3 = (x, y) => x + y; // 화살표 함수는 내부에 return문 밖에 없을 경우, return을 생략할 수 있다.

const add4 = (x, y) => (x + y);

// add1, add2, add3, add4 는 같은 기능을 가진 함수

function not1(x) {
    return !x;
}

const not2 = x => !x; // 매개변수가 하나일 경우, 소괄호로 묶지 않아도 된다.


// 기존 함수 선언과 arrow function의 차이점 => this 바인딩 방식

var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function () {
        var that = this; // relationship1을 가리키는 this를 that에 저장
        this.friends.forEach(function (friend) {
            console.log(this)   // 여기서의 this는 relationship1이 아님. this가 위치하는 함수 스코프가 다르기 때문에 this가 가리키는 것도 다르다.
            console.log(this.name, friend); // 따라서 this.name은 undefined nero 등이 출력됨.
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();

const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);     // 화살표 함수로 선언했을 경우, 화살표 함수 내부의 this는 상위 스코프의 this가 가리키는 것을 그대로 물려받음.
        });
    },
};
relationship2.logFriends();

// arrow function(화살표 함수)가 기존의 function() {} 문법을 대체하는 것은 아니다.
// 이유는 this의 바인딩 방식이 다르기 때문인데, 
// 따라서 this를 물려받고 싶다면 arrow function을 물려받고 싶지 않다면 기존의 function() {} 문법을 사용하면 된다.
