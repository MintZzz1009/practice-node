
// var => 블록 스코프를 무시, 함수 스코프를 존중
if (true) {
    var x = 3;
}
console.log(x); // 3
  

// const, let => 블록 스코프를 존중
if (true) {
    const y = 3;
}
console.log(y); // Uncaught ReferenceError: y is not defined

// const: 상수 => 한번 선언 후 값 변경 불가. 선언시 초기화도 되어야 함.
//                배열이나 객체 내부의 값은 변경 가능하다. => 아무래도 참조형 변수라서 가능한 것으로 생각된다. 
//                상수값으로는 주소값이 변경이 안되는 것이고 그 주소에 해당하는 객체와 배열의 값은 변경 가능한 것.
const arr = [];
arr[0] = 2;
console.log(arr); // [2]

// let: 한번 선언 후에도 값 변경 가능. 선언만 가능

const a = 0;
a = 1; // Uncaught TypeError: Assignment to constant variable

let b = 0;
b = 1; // 1

const c; // Uncaught SyntaxError: Missing initializer in const declaration