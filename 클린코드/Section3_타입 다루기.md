# Section3: 타입 다루기

## 타입 검사

- 자바스크립트는 동적으로 변하는 언어이기 때문에, 타입도 동적으로 변화함
  - 그렇기에 타입 검사가 어려움

Primitive vs Reference

원시 타입 검증

- typeof

래퍼런스 타입 검증

- instanceof
- 객체 동일 여부 판별

Object 타입 검증

- Object.prototype.toString.call('')

## undefined & null

- 값이 없거나 정의되지 않음
- NaN / 0
- typeof undefined / typeof Object

## eqeq 줄이기

- JS 에서의 동등 연산자
- type 이 동등하다
- 타입 캐스팅이 일어날 수 있습니다.

## 형변환 주의하기

- 암묵적 형변환보다는 명시적 형변환 사용!

parseInt('9.99', 10);

- 10진수여도 두번째 파라미터에 꼭 진수 표기!

사용자 => 명시적인 변환 (타입)
JS => 암묵적인 변환 (타입)

- 꼭 예측할 수 있는 명시적 형변환을 활용하자!!

## isNaN

- is Not A Number => 숫자가 아니다

ES2015+

- isNaN // 느슨한 검사
- Number.isNaN // 엄격한 검사
