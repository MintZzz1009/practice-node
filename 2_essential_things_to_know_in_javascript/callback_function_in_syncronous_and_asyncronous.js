// 비동기적 프로그램에서 콜백함수를 사용하는 이유


// 자바스크립트의 엔진은 단일 호출 스택(call stack)을 사용한다. 즉 단일 스레드라는 뜻이고
// 스레드가 하나다, 단일 호출 스택이다 라는 말은 동시에 하나의 작업만 처리할 수 있다는 뜻이다.
// 따라서 자바스크립트 엔진 하나만으로는 동시성을 가진 프로그램의 개발이 불가하다.

// 하지만 실제로 자바스크립트는 브라우저나 node 환경에서 사용해보면 여러가지 작업을 동시에 처리하고는 한다.
// 예를 들어, 여러 개의 HTTP요청을 처리하는 중에 다른 작업하기, 이벤트가 일어날 때 다른 작업하기 등.
// 이를 가능하게 하는 것이 "이벤트 루프"이다.

// 이벤트 루프가 하는 일 => Call Stack과 Call Queue들을 감시하며 어떤게 비어져있고 어떤것을 채워야할지 정하며 수행한다.

// 자바스크립트가 구동되는 환경인 브라우저나 node 등은 단일 스레드가 아니라 여러 개의 스레드를 가지고 있다.
// 하지만 자바스크립트는 단일 스레드를 가지고 있다. 이벤트 루프는 자바스크립트가 브라우저나 node가 가지고 있는 다른 스레드를 사용할 수 있게 해준다.

// => 비동기적(동기적이 아니다), 한 명령에 대한 응답을 기다리는 동안 대기하는 것이 아닌 다음 명령을 수행하는 것

// 자바스크립트에서는 비동기적 프로그래밍을 위해서 이벤트 루프를 통해 특정 함수(비동기함수)들의 콜백함수들(이벤트 발생후 실행되도록 등록한 함수 등)을
// 백그라운드(Web API)에 넘겨서 처리하고 있다.
// 백그라운드(Web API)에 넘어간 함수들은 이벤트가 발생하기까지 대기하다가
// 이벤트가 발생하면 콜백큐로 이동시킨다.
// 이벤트 루프는 call stack과 callback queue들을 감시하면서 어떤게 비어져있고 어떤 것을 채워야할지 정하며 수행한다


// 결론
// 단일 스레드인 자바스크립트로 비동기적 프로그래밍을 하는 방법: 비동기 함수를 활용해서 콜백함수를 등록하여 이벤트 루프를 통해 실행시킨다.



// < 흔히 오용되는 자바스크립트에서의 비동기 처리와 콜백함수의 의미 >

// 비동기적 프로그램이 흔히 동시에 여러 일을 처리한다고 말을 한다. 멀티 스레드를 지원하는 언어일 경우 이 말은 맞는 말이다.
// 하지만 자바스크립트에서 엄밀히 말하자면 틀린 말이다. 왜냐하면 흔히 자바스크립트에서 비동기적 프로그램이라는 것은 non-blocking을 말하는 것이기 때문이다.
// 이 둘은 조금 다른데 예시로 콜백함수를 들 수 있다.

// 흔히 자바스크립트에서 비동기 처리 방법의 첫 번째로 콜백함수를 말하곤 한다. 그러나 콜백함수를 등록한다고 동시에 여러가지 일을 처리하는 것은 아니다.
// 콜백함수 활용에는 크게 두 가지 종류가 있다. 
// - 하나는 web API를 활용하는 비동기 함수에 콜백함수를 매개변수로 등록하는 방법
// - 다른 하나는 그냥 일반 함수의 콜백으로 등록하는 것이다.

// 첫 번째는 자바스크립트의 call stack에서 하나의 작업이 처리되는 동안 브라우저나 노드의 libuv에서 또 다른 작업을 처리하는 중이기 때문에
// 시간적으로 동시에 실행한다고 말할 수 있다

// 하지만 두 번째의 경우 일반 함수가 실행되는 동안 그 안에서 콜백함수가 실행이 완료되어야 일반함수의 실행이 완료될 수 있다는 뜻에서
// 하나의 태스크를 진행하는 중에 또 다른 태스크를 실행할 수 있다는 의미에서 비동기적이라고 말하는 것이다. 엄밀하게 말하자면 맞는 말이 아니다.
// 이는 엄밀히 말하자면 비동기적인 것이 아니라 non-blocking 방식인 것인데, 많은 글에서 혼용에서 사용하는 것으로 보인다.
// 일반 함수의 콜백으로 등록한다고 해서 이 작업을 브라우저나 node의 libuv 등이 대신 처리해주는 것이 아니라 여전히 자바스크립트의 단일 호출 스택에서
// 순차적으로 실행이 된다.
// 그래서 시간적으로 절야되는 것도 없다. 비동기적 프로그램을 짜는 이유가 시간적인 효율을 위해서라면 위의 방식을 비동기적 프로그램이라고 말할 수는 없을 것이다.


// 비동기 처리(web API를 활용하는) 함수의 종류
// setTimeout, XMLHttpRequest, fetch(), Promise, DOM 등
// https://developer.mozilla.org/ko/docs/Web/API 참고