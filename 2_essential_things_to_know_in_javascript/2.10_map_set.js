// Map은 객체와 유사하고 Set은 배열과 유사하다

// Map
const m = new Map();

m.set('a', 'b'); // set(키, 값)으로 Map에 속성 추가
m.set(3, 'c'); // 문자열이 아닌 값을 키로 사용 가능합니다
const d = {};
m.set(d, 'e'); // 객체도 됩니다

m.get(d); // get(키)로 속성값 조회
console.log(m.get(d)); // e

m.size; // size로 속성 개수 조회
console.log(m.size) // 3

for (const [k, v] of m) { // 반복문에 바로 넣어 사용 가능합니다
  console.log(k, v); // 'a', 'b', 3, 'c', {}, 'e'
} // 속성 간의 순서도 보장됩니다

m.forEach((v, k) => { // forEach도 사용 가능합니다
  console.log(k, v); // 결과는 위와 동일
});

m.has(d); // has(키)로 속성 존재 여부를 확인합니다
console.log(m.has(d)); // true

m.delete(d); // delete(키)로 속성을 삭제합니다
m.clear(); // clear()로 전부 제거합니다
console.log(m.size); // 0

// Map은 속성들 간의 순서를 보장하고 반복문을 사용할 수 있다. 
// 속성명으로 문자열이 아닌 값도 사용할 수 있다. 
// size 메서드를 통해 속성의 수를 쉽게 알 수 있다는 점에서 일반 객체와 다르다.

// Set
const s = new Set();
s.add(false); // add(요소)로 Set에 추가합니다
s.add(1);
s.add('1');
s.add(1); // 중복이므로 무시됩니다
s.add(2);

console.log(s.size); // 중복이 제거되어 4

s.has(1); // has(요소)로 요소 존재 여부를 확인합니다
console.log(s.has(1)); // true

for (const a of s) {
  console.log(a); // false 1 '1' 2
}

s.forEach((a) => {
  console.log(a); // false 1 '1' 2
})

s.delete(2); // delete(요소)로 요소를 제거합니다
s.clear(); // clear()로 전부 제거합니다

// Set은 중복을 허용하지 않는다는 것이 가장 큰 특징입니다. 
// 따라서 배열 자료구조를 사용하고 싶으나 중복은 허용하고 싶지 않을 때 Set을 대신 사용하면 됩니다.
// 또는 기존 배열에서 중복을 제거하고 싶을 때도 Set을 사용합니다
const arr = [1, 3, 2, 7, 2, 6, 3, 5];

const s1 = new Set(arr);
const result = Array.from(s1);
console.log(result); // [ 1, 3, 2, 7, 6, 5 ]