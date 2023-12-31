const spawn = require('child_process').spawn;

const process = spawn('python', ['test.py']);

process.stdout.on('data', function(data) {
  console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
  console.error(data.toString());
}); // 실행 에러

// 파이썬이 깔려있어야 한다.
// 노드가 파이썬이나 c++을 대신 실행시켜주는 것이 아니라 파이썬이나 c++에게 실행해달라는 요청을 보내는 것이기 때문.


// 파이썬 코드를 실행하는 명령어인 python test.py를 노드의 spawn을 통해 실행합니다. 
// spawn의 첫 번째 인수로 명령어를, 두 번째 인수로 옵션 배열을 넣으면 됩니다. 
// 결과는 exec과 마찬가지로 stdout, stderr의 데이터로 나옵니다.

// exec과 spawn의 차이가 궁금할 것입니다. 
// exec은 셸을 실행해서 명령어를 수행하고, 
// spawn은 새로운 프로세스를 띄우면서 명령어를 실행합니다. 
// spawn에서도 세 번째 인수로 { shell: true }를 제공하면 exec처럼 셸을 실행해서 명령어를 수행합니다. 
// 셸을 실행하는지 마는지에 따라 수행할 수 있는 명령어에 차이가 있습니다.