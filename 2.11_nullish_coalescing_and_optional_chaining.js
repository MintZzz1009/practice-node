// nullish_coalescing
const a = 0;
const b = a || 3; // || 연산자는 falsy 값(0, '', false, NaN, null, undefined)이면 뒤로 넘어감
console.log(b); // 3

const c = 0;
const d = c ?? 3; // ?? 연산자는 null과 undefined일 때만 뒤로 넘어감
console.log(d); // 0;

const e = null;
const f = e ?? 3;
console.log(f); // 3;

const g = undefined;
const h = g ?? 3;
console.log(h); // 3;

// optional chaining
const a = {}
a.b; // a가 객체이므로 문제없음

const c = null;
try {
  c.d;
} catch (e) {
  console.error(e); // TypeError: Cannot read properties of null (reading 'd')
}
c?.d; // 문제없음 undefined

try {
  c.f();
} catch (e) {
  console.error(e); // TypeError: Cannot read properties of null (reading 'f')
}
c?.f(); // 문제없음 undefined

try {
  c[0];
} catch (e) {
  console.error(e); // TypeError: Cannot read properties of null (reading '0')
}
c?.[0]; // 문제없음 undefined