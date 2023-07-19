// 객체의 속성을 같은 이름의 변수에 대입하는 기존의 코드
var candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function () {
        this.status.count--;
        return this.status.count;
    },
};

// 기존 변수 대입
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

// 구조 분해 할당(destruturing assignment)를 활용한 코드
const { getCandy, status: { count } } = candyMachine;



// 배열에 대한 구조 분해 할당
var array = ['nodejs', {}, 10, true];

// 기존 변수 대입
var node = array[0];
var obj = array[1];
var bool = array[3];

// 구조 분해 할당 활용
const [node, obj, , bool] = array;  // 순서에 따라 대입이 된다.
const { 0: node, 1: obj, 3:bool } = array;
console.log(node, obj, bool)  

// 특히 노드는 모듈 시스템을 사용하므로 이러한 방식을 자주 사용