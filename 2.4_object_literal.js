// 기존의 객체에 동적으로 속성을 추가하는 코드
var sayNode = function() {
    console.log('Node');
  };
  var es = 'ES';
  var oldObject = {
    sayJS: function() {
      console.log('JS');
    },
    sayNode: sayNode,
  };
  oldObject[es + 6] = 'Fantastic';
  oldObject.sayNode(); // Node
  oldObject.sayJS(); // JS
  console.log(oldObject.ES6); // Fantastic
  

  // 객체 리터럴에 추가된 문법
  const newObject = {
    sayJS() {
      console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantastic',
  };
  newObject.sayNode(); // Node
  newObject.sayJS(); // JS
  console.log(newObject.ES6); // Fantastic
  es = 'ab'
  console.log(newObject);