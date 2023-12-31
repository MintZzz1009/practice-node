// 자바스크립트는 프로토타입으로 작동되지만, 클래스 문법이 추가되었다.
// 기존의 프로토기반 문법을 보기좋게 클래스 모양으로 바꾼 것이라고 이해하면 된다.

// => 프로토타입 기반과 클래스 기반의 차이는?

// 기존의 프로토타입 상속 예제 코드
var Human = function (type) {
    this.type = type || 'human';
};

Human.isHuman = function (human) {
    return human instanceof Human;
}

Human.prototype.breathe = function () {
    alert('h-a-a-a-m');
};

var Zero = function (type, firstName, lastName) {
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
};

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero; // 상속하는 부분
Zero.prototype.sayName = function () {
    alert(this.firstName + ' ' + this.lastName);
};
var oldZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(oldZero); // true


// 클래스 기반 코드
class Human {
    constructor(type = 'human') {
        this.type = type;
    }

    static isHuman(human) {
        return human instanceof Human;
    }

    breathe() {
        console.log('h-a-a-a-m');
    }
}

class Zero extends Human {
    constructor(type, firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        super.breathe();
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(newZero); // true
newZero.sayName()
