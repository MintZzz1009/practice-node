// child_process

// 노드에서 다른 프로그램을 실행하고 싶거나 명령어를 수행하고 싶을 때 사용하는 모듈입니다. 
// 이 모듈을 통해 다른 언어의 코드(예를 들면, 파이썬)를 실행하고 결괏값을 받을 수 있습니다. 
// 이름이 child_process(자식 프로세스)인 이유는 현재 노드 프로세스 외에 새로운 프로세스를 띄워서 명령을 수행하고 노드 프로세스에 결과를 알려주기 때문입니다.

// 먼저 명령 프롬프트의 명령어인 dir을 노드를 통해 실행해보겠습니다.


const exec = require('child_process').exec;

const process = exec('dir');

process.stdout.on('data', function(data) {
  console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
  console.error(data.toString());
}); // 실행 에러


// exec의 첫 번째 인수로 명령어를 넣습니다.
// 리눅스나 맥이라면 exec('ls')를 대신 입력하면 됩니다. 
// 실행하면 현재 폴더의 파일 목록들이 표시될 것입니다.

// 결과는 stdout(표준출력)과 stderr(표준에러)에 붙여둔 data 이벤트 리스너에 버퍼 형태로 전달됩니다. 
// 성공적인 결과는 표준출력에서, 실패한 결과는 표준에러에서 표시됩니다. 
// 버퍼는 3.6.2절에서 자세히 알아봅니다.

// 명령 프롬프트나 파워셸에서 한글이 제대로 표시되지 않는 경우에는 다음 명령어를 입력해 터미널을 utf8로 바꾼 뒤 다시 실행하면 됩니다.