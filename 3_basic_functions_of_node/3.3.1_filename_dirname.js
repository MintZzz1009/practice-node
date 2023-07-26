// 파일에 __filename과 __dirname을 넣어두면 실행 시 현재 파일명과 현재 파일 경로로 바뀝니다.

console.log(__filename)     // C:\Users\지학수\github\1_MintZzz\Node.js 교과서\practice_note\3.3_filename_dirname.js
console.log(__dirname)      // C:\Users\지학수\github\1_MintZzz\Node.js 교과서\practice_note

// 하지만 경로가 문자열로 반환되기도 하고, \나 / 같은 경로 구분자 문제도 있으므로 보통은 이를 해결해주는 path 모듈(3.5.2절 참조)과 함께 씁니다.

// ES 모듈에서는 __filename과 __dirname을 사용할 수 없습니다. 대신 import.meta.url로 경로를 가져올 수 있습니다.