// 호출 스택(call stack)
// 함수의 호출, 자료구조의 스택

// Anonymous은 가상의 전역 컨텍스트(항상 있다고 생각하는게 좋음)
// 함수 호출 순서대로 쌓이고, 역순으로 실행됨
// 함수 실행이 완료되면 스택에서 빠짐
// LIFO 구조라서 스택이라고 불림

function first() {
    second();
    console.log('첫 번째');
}
function second() {
    third();
    console.log('두 번째');
}
function third() {
    console.log('세 번째');
}
first();

// 호출스택 그려보면
//
// 세 번째
// 두 번째
// 첫 번째
// anonymous


// 호출 스택만으로는 설명이 안되는 코드
function run() { 
    console.log('0초 후 실행');
}

console.log('시작');
setTimeout(run, 0000);
console.log('끝');

// 호출 스택 + 이벤트 루프로 설명할 수 있음