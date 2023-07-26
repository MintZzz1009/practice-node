// 스트림을 배울 때 on('data', 콜백) 또는 on('end', 콜백)을 사용했습니다. 
// 바로 data라는 이벤트와 end라는 이벤트가 발생할 때 콜백 함수를 호출하도록 이벤트를 등록한 것입니다. 
// createReadStream 같은 경우는 내부적으로 알아서 data와 end 이벤트를 호출하지만, 우리가 직접 이벤트를 만들 수도 있습니다.

// 다음 예제를 통해 이벤트를 만들고 호출하고 삭제해봅시다.



const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
  console.log('이벤트 1');
});
myEvent.on('event2', () => {
  console.log('이벤트 2');
});
myEvent.on('event2', () => {
  console.log('이벤트 2 추가');
});
myEvent.once('event3', () => {
  console.log('이벤트 3');
}); // 한 번만 실행됨

myEvent.emit('event1'); // 이벤트 호출
myEvent.emit('event2'); // 이벤트 호출

myEvent.emit('event3');
myEvent.emit('event3'); // 실행 안 됨

myEvent.on('event4', () => {
  console.log('이벤트 4');
});
myEvent.removeAllListeners('event4');
myEvent.emit('event4'); // 실행 안 됨

const listener = () => {
  console.log('이벤트 5');
};
myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5'); // 실행 안 됨

console.log(myEvent.listenerCount('event2'));


// events 모듈을 사용하면 됩니다. myEvent라는 객체를 먼저 만듭니다. 
// 객체는 이벤트 관리를 위한 메서드를 갖고 있습니다.

// • on(이벤트명, 콜백): 이벤트 이름과 이벤트 발생 시의 콜백을 연결합니다. 이렇게 연결하는 동작을 이벤트 리스닝이라고 합니다. event2처럼 이벤트 하나에 이벤트 여러 개를 달아줄 수도 있습니다.

// • addListener(이벤트명, 콜백): on과 기능이 같습니다.

// • emit(이벤트명): 이벤트를 호출하는 메서드입니다. 이벤트 이름을 인수로 넣으면 미리 등록해뒀던 이벤트 콜백이 실행됩니다.

// • once(이벤트명, 콜백): 한 번만 실행되는 이벤트입니다. myEvent.emit('event3')을 두 번 연속 호출했지만 콜백이 한 번만 실행됩니다.

// • removeAllListeners(이벤트명): 이벤트에 연결된 모든 이벤트 리스너를 제거합니다. event4가 호출되기 전에 리스너를 제거했으므로 event4의 콜백은 호출되지 않습니다.

// • removeListener(이벤트명, 리스너): 이벤트에 연결된 리스너를 하나씩 제거합니다. 리스너를 넣어야 한다는 것을 잊지 마세요. 역시 event5의 콜백도 호출되지 않습니다.

// • off(이벤트명, 콜백): 노드 10 버전에서 추가된 메서드로, removeListener와 기능이 같습니다.

// • listenerCount(이벤트명): 현재 리스너가 몇 개 연결되어 있는지 확인합니다.

// 이제 직접 이벤트를 만들 수 있으므로 다양한 동작을 직접 구현할 수 있으며, 웹 서버를 구축할 때 많이 사용됩니다.

