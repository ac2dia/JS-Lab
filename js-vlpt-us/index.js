// 변수
// let, const

// null vs undefined
const friend = null;

let criminal;
console.log(criminal);

// object
// const dog = {
//   name: '멍멍이',
//   age: 2,
// };

// console.log(dog);

// for
// java - Enhanced For Loop 와 유사
const numbers = [10, 20, 30, 40, 50];
for (const number of numbers) {
  console.log(number);
}

// class
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super('개', name, sound);
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super('고양이', name, sound);
  }
}

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();
