// Trusty and Falsy

function print(person) {
  //   if (person == undefined || person == null) {
  if (!person) {
    console.log('The parameter person is undefined!');
    return;
  }

  console.log(person.name);
}

const person = null;
print(person);

// Falsy 한 값 = undefined / null / 0 / '' / NaN

// short-circuit evaluation
const dog = {
  name: '멍멍이',
};

function getNameByAnd(animal) {
  return animal && animal.name;
}

function getNameByOr(animal) {
  const name = animal && animal.name;
  return name || '이름이 없는 동물입니다.';
}

let name = getNameByAnd(dog);
console.log(name); // 멍멍이

name = getNameByOr(dog);
console.log(name); // 멍멍이

// function default parameter
function calculateCircleArea(r = 1) {
  return Math.PI * r * r;
}
// const calculateCircleArea = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea();
console.log(area); // 3.141592653589793

// use condition! more smarter!
const isAnimal = (name) => ['고양이', '개', '거북이', '너구리'].includes(name);

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false

function makeSound(animal) {
  const tasks = {
    개() {
      console.log('멍멍');
    },
    고양이() {
      console.log('고양이');
    },
    비둘기() {
      console.log('구구 구 구');
    },
  };
  if (!tasks[animal]) {
    console.log('...?');
    return;
  }
  tasks[animal]();
}

makeSound('개');
makeSound('닭둘기');

// spread and rest
// spared
// 객체, 배열 사용 가능
// 다른 객체, 배열의 속성들을 그대로 이어서 사용 가능

// const slime = {
//   name: '슬라임',
// };

// const cuteSlime = {
//   ...slime,
//   attribute: 'cute',
// };

// const purpleCuteSlime = {
//   ...cuteSlime,
//   color: 'purple',
// };

// console.log(slime);
// console.log(cuteSlime);
// console.log(purpleCuteSlime);

// const animals = ['개', '고양이', '참새'];
// const anotherAnimals = [...animals, '비둘기'];
// console.log(animals);
// console.log(anotherAnimals);

// rest
// 객체, 배열, 함수의 파라미터로 사용 가능
// 이미 할당 시도하려는 항목은 제외하고 나머지 할당
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple',
};

const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color);
console.log(cuteSlime);

const { attribute, ...slime } = cuteSlime;
console.log(attribute);
console.log(slime);

// scope
// Global / Function / Block

// Hoisting 이해하기
// Hoisting 은 아직 선언되지 않음 함수/변수를 끌어올려서 사용할 수 있는 JS 작동 방식
// var 의 경우 허용하지만, const 와 let 에서는 호이스팅은 되지만 일시적인 사각지대(TDZ)가 생성되어 초기화 전엔 액세스할 수 없다는 ref error 발생!!
// 그러므로 var 대신 const, let 을 사용하도록 하며!! ESLint 를 통해 Hoisting 이 발생하는 코드를 발견할 수 있습니다.
