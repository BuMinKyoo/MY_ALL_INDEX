<br/>

###### Top

  - [JavaScript디버깅](#javascript디버깅)
  - [JavaScript 사용(Script태크)](#javascript-사용script태크)
  - [JavaScript 코드실행 3가지](#javascript-코드실행-3가지)
  - [JavaScript 코드실행에러 확인](#javascript-코드실행에러-확인)
  - [자료형,변수](#자료형변수)
    - [let, const, var](#let-const-var)
    - [Infinity, NaN](#infinity-nan)
    - [Boolean, Number, String, Null, Undefined](#boolean-number-string-null-undefined)
    - [bigInt](#bigint)
    - [Symbol](#symbol)
    - [배열](#배열)
    - [객체](#객체)
    - [new Set](#new-set)
  - [비교연산자](#비교연산자)
  - [템플릿 문자열](#템플릿-문자열)
  - [prompt,confirm,자료형변환](#promptconfirm자료형변환)
  - [논리 연산자 "||" 기호 사용시 주의](#논리-연산자--기호-사용시-주의)
  - [배열(array)](#배열array)
    - [push, pop, unshift, shift](#push-pop-unshift-shift)
    - [splice](#splice)
    - [concat](#concat)
    - [filer함수](#filer함수)
    - [map함수](#map함수)
    - [배열 얕은 복사와 깊은 복사(스프레드 ...)](#배열-얕은-복사와-깊은-복사스프레드-)
    - [스프레드 문법 추가](#스프레드-문법-추가)
  - [함수](#함수)
    - [선언적 함수, 익명 함수](#선언적-함수-익명-함수)
    - [즉시호출 함수](#즉시호출-함수)
    - [함수'=>'문법](#함수'=>'문법)
    - [나머지 매개변수](#나머지-매개변수)
    - [객체 매개변수](#객체-매개변수)
    - [setTimeout,setInterval,clearTimeout,clearInterval함수](#settimeoutsetintervalcleartimeoutclearinterval함수)
    - [Default parameters](#default-parameters)
  - [객체(Object)](#객체object)
    - [객체 생성](#객체-생성)
    - [객체내 this](#객체내-this)
    - [객체 매핑](#객체-매핑)
    - [Object.keys, Object.values](#objectkeys-objectvalues)
    - [Object.fromEntries, Object.entries](#objectfromentries-objectentries)
    - [Destructuring assignment](#destructuring-assignment)
    - [Optional chaining](#optional-chaining)
  - [forEach,forin,forof](#forEach,forin,forof)
  - [엄격 모드](#엄격-모드)
  - [prototype문법](#prototype문법)
  - [클래스](#클래스)
    - [선언하기,생성자](#선언하기생성자)
    - [private속성](#private속성)
    - [get,set문법](#getset문법)
    - [static](#static)
    - [상속](#상속)
  - [동기,비동기](#동기비동기)
    - [setTimeout](#settimeout)
    - [promise](#promise)
    - [finally](#finally)
    - [promise, then, setTimeout사용](#promise-then-settimeout사용)
    - [pending상태](#pending상태)
    - [fulfilled상태](#fulfilled상태)
    - [promise에서 받아온 데이터 출력하기(then)](#promise에서-받아온-데이터-출력하기then)
    - [async](#async)
    - [promise, async, await이해하기](#promise-async-await이해하기)
    - [Promise.all](#promiseall)
    - [Promise.race](#promiserace)
  - [외부 자바스크립트 파일 읽어 오기](#외부-자바스크립트-파일-읽어-오기)
  - [자바스크립트로 문서조작하기](#자바스크립트로-문서조작하기)
    - [querySelector,querySelectorAll](#queryselectorqueryselectorall)
    - [문자열조작하기](#문자열조작하기)
    - [태그 값 넣기,가져오기](#태그-값-넣기가져오기)
    - [스타일조작하기](#스타일조작하기)
    - [문서객체 생성,제거,이동](#문서객체-생성제거이동)
    - [이벤트연결](#이벤트연결)
    - [버튼만들기(button)](#버튼만들기button)
    - [버튼만들기(submit이벤트)](#버튼만들기submit이벤트)
    - [글자입력 상자만들기(text)](#글자입력-상자만들기text)
    - [선택박스 만들기(드롭다운)](#선택박스-만들기드롭다운)
    - [다중선택 상자 만들기](#다중선택-상자-만들기)
    - [체크박스,라디오 버튼](#체크박스라디오-버튼)
    - [textContent,value차이](#textcontentvalue차이)
  - [localStorage](#localstorage)
  - [json](#json)
  - [html부분에 함수 실행시](#html부분에-함수-실행시)
  - [브라우저의 싱글 스레드 동작에 관하여](#브라우저의-싱글-스레드-동작에-관하여)
   
<br/>
<br/>

***

# JavaScript디버깅

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/6d8050b3-e72d-4d56-8d00-376d48f4c2ec)

  - 1.‘Resume’ : 스크립트 실행을 다시 시작함(단축키 F8)
  - 2.‘Step over’ : 다음 명령어를 실행하되, 함수 안으로 들어가진 않음(단축키 F10)
  - 3.‘Step into’ : step과 비슷하지만, 비동기 동작을 담당하는 코드로 진입하고, 필요하다면 비동기 동작이 완료될 때까지 대기함
  - 4.‘Step out’ : 실행 중인 함수의 실행이 끝날 때 까지 실행을 계속함(단축키 Shift+F11)
  - 5.‘Step’ : 다음 명령어를 실행함(비동기 동작을 무시함) (단축키 F9)
  - 6.모든 중단점을 활성화/비활성화

<br/>

Dir : .js
~~~JavaScript
'use strict';

const PromiseRrturn = function() {
    return new Promise((resolve, reject) => {
      // 비동기 작업 수행
      setTimeout(() => {
        resolve("난 promise 비동기 작업");
      }, 2000);
    });
  }

const get = async function(){
    let data = PromiseRrturn()
    data.then((value) => console.log(value))
    .then(() => console.log("비동기 이후 작업"))
}

get();
~~~

<br/>

Dir : .js
~~~JavaScript
'use strict';

const PromiseRrturn = function() {
    return new Promise((resolve, reject) => {
      // 비동기 작업 수행
      setTimeout(() => {
        resolve("난 promise 비동기 작업");
      }, 2000);
    });
  }

const get = async function(){
    let data = PromiseRrturn()
    data.then((value) => console.log(value))
    console.log("비동기 이후 작업")
}

get();
~~~

###### [JavaScript디버깅](#javascript디버깅)
###### [Top](#top)

<br/>
<br/>

***

# JavaScript 사용(Script태크)
  - 자바스크립트 코드는 html형식 안에 <script></script> 태그 안쪽에 작성한다. 다른 언어와 달리 main이라는 시작점을 가지고 있지 않지만, 웹 브라우저가 실행되는 동시에 main이 실행된다, main은 Webserver가 가지고 있기 때문에 JavaScript를 코딩 할때에는 main이 보이지 않는다. 코드는 다른 언어와 마찬가지로 위에서 아래로 실행됨은같다

<br/>

  - 현재 html의 기본 형태
~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        alert("안녕하세요")
    </script>
</head>
<body>
    
</body>
</html>
~~~
  
###### [JavaScript 사용(Script태크)](#JavaScript-사용script태크)
###### [Top](#top)

<br/>
<br/>

***
  
# JavaScript 코드실행 3가지
  - 크롬 -> about:blank -> 마우스 오른쪽 클릭 -> 검사 -> 콘솔
    - 크롬 브라우저만 가능한것은 아니며 다른 브라우저도 가능하다
    - about:blank 로 이동하는 이유는, 다른페이지에는 코드들이 동작하고 있기 때문에, 원하지 않는 동작과 답을 받게 될 수 있기 때문에
    - 콘솔에서 코드를 실행하는것은, 간단한 확인과 짧은 코드들을 확인할 때 유용 하다
  - 코드 작성후 -> 브라우저에 끌어 실행하기 -> F5키를 눌러 수정된것 바로 연속 실행 가능
    - 개발을 Visual Studio Code에서 작성할때, 확인하고 싶은 html파일을 마우스로 끌어 웹브라우져에 가져가면 화면을 실행할 수 있으며, 코드 수정후 F5키를 누르면 변경된 코드가 실행된다
  - Live Server 라이브러리 설치해서 자동으로 변경 확인하기
    - Visual Studio Code에서 사용 할 수 있는 확장이며, 오른쪽 하단의 "Go Live"버튼을 누르게 되면 브라우저가 뜨게 되고, 코드를 저장만 해도 자동으로 변경 적용 된다

###### [JavaScript 코드실행 3가지](#자바스크립트-코드실행-3가지)
###### [Top](#top)

<br/>
<br/>

***
  
# JavaScript 코드실행에러 확인
  - JavaScript코드의 에러 확인은, 브라우저 -> 마우스 오른쪽 클릭 -> 검사 -> X표시가 나와 있는것으로 확인 할 수 있다
    - 에러가 몆개 있는지 확인 가능
    - 에러 링크를 누르면 어디가 잘못됐는지 나오게 된다

![image](https://user-images.githubusercontent.com/39178978/232322228-82c78cbe-993e-4021-9fd3-b975ac65b0e5.png)

<br/>

![image](https://user-images.githubusercontent.com/39178978/232322238-ed6b519c-638c-4a74-b1b1-6c5c3816685d.png)

###### [JavaScript 코드실행에러 확인](#자바스크립트-코드실행에러-확인)
###### [Top](#top)

<br/>
<br/>

***

# 자료형,변수
  - [let, const, var](#let-const-var)
  - [Infinity, NaN](#infinity-nan)
  - [Boolean, Number, String, Null, Undefined](#boolean-number-string-null-undefined)
  - [bigInt](#bigint)
  - [Symbol](#symbol)
  - [배열](#배열)
  - [객체](#객체)
  - [new Set](#new-set)

###### [자료형,변수](#자료형변수)
###### [Top](#top)

<br/>
<br/>

# let, const, var
  - let : 재할당이 가능한 변수(동적타입)
  - const : 재할당이 불가능한 변수(정적타입)
    - 반드시 선언과 초기화를 동시에 진행해야 한다
    - '재할당'이 불가능 한 것이기 때문에, const로 선언된 배열, 객체 등의 값들은 바꿀수가 있게 된다. 왜냐면.. const로 선언한 배열과 객체와 같은것은 포인터값(즉 메모리값)만 상수이기 때문에 안에 내용은 상수가 아니기 때문..!

<br/>

  - 더 이상 var변수를 사용하지 말자
    - 변수를 선언도 하기 전에 할당하고, 그 이후에 var로 할당할 수 있다..
    - var hoisting이라고 한다
    - 어디에 선언했냐에 상관없이, 항상 위로 끌어 올려 준다는것

~~~JavaScritp
'use strict'

num = 10;
var num;
console.log(num); // 10
~~~

  - block scope가 없다..

~~~JavaScritp
'use strict'

{
    num = 10;
    var num;
}

console.log(num) // 10
~~~

###### [자료형,변수](#자료형변수)
###### [Top](#top)

<br/>
<br/>

# Infinity, NaN
  - 무한대 일때와, 숫자와 문자를 계산할 경우

~~~JavaScritp
'use strict'

const result1 = 1/0;
const result2 = -1/0;
const result3 = 'aaa' / 2;

console.log(`result1 : ${result1}`); // result1 : Infinity
console.log(`result2 : ${result2}`); // result2 : -Infinity
console.log(`result3 : ${result3}`); // result3 : NaN
~~~

###### [자료형,변수](#자료형변수)
###### [Top](#top)

<br/>
<br/>

# Boolean, Number, String, Null, Undefined

  - Boolean
    - 어떤것을 비교 할때 false, true로 나옴

~~~JavaScritp
const a = 10
const a1 = 20;

console.log(a === a1); //false
~~~
    
  - Number
    - 숫자형식이며, 작음 따옴표나 큰 따옴표를 사용하지 않았을 경우

~~~JavaScritp
const num = 10;

console.log(`num: ${typeof num}`); // num: number
~~~

  - String
    - 문자열을 작음 따옴표 or 큰 따옴표로 감싼다(작은 따옴표, 큰 따옴표가 같음..!)
   
~~~JavaScritp
const num = "10";

console.log(`num: ${typeof num}`); // num: string
~~~

  - Null
    - null이라는 값을 직접 대입했을 경우, 이 경우 Undefined과 다르다

~~~JavaScritp
const num = null;

console.log(`num: ${num}`); // num: null
~~~

  - Undefined
    - 변수에 값을 할당하지 않았을 경우

~~~JavaScritp
let num;

console.log(`num: ${num}`); // num: undefined
~~~

###### [Boolean, Number, String, Null, Undefined](#boolean-number-string-null-undefined)
###### [Top](#top)

<br/>
<br/>

# bigInt
  - 최근에 추가된 자료형, 매우큰 숫자를 담을 수 있다
  - 숫자 마지막에 n을 붙여주면 된다
  - 지원되지 않는 브라우저가 있을 수 있으니 참고해서 사용하여야 한다

~~~JavaScritp
const bigInt = 9999999999999999999999999999999999999999999999999999999999999n;
console.log(`${typeof bigInt} : ${bigInt}`);
~~~

###### [자료형,변수](#자료형변수)
###### [Top](#top)

<br/>
<br/>

# Symbol
  - 고유한 식별자를 만들때 사용하게 된다
  - console.log(symbol1.description === symbol2.description) 이렇게 스트링값 자체를 비교하면 true가 나오게 된다

~~~JavaScritp
const symbol1 = Symbol('aa');
const symbol2 = Symbol('aa');

console.log(symbol1 === symbol2);  // false
~~~

<br/>

  - Symbol.for
    - 만든 symbol의 고유한 식별자가 같은 것으로 만들기 위해서

~~~JavaScritp
const symbol1 = Symbol.for('aa');
const symbol2 = Symbol.for('aa');

console.log(symbol1 === symbol2);  // false
~~~

###### [자료형,변수](#자료형변수)
###### [Top](#top)

<br/>
<br/>

# 배열

~~~JavaScritp
const fruits = ["apple", "banana", "orange"];

console.log(fruits); // ["apple", "banana", "orange"]
~~~

###### [자료형,변수](#자료형변수)
###### [Top](#top)

<br/>
<br/>

# 객체

~~~JavaScritp
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer",
  address: {
    street: "123 Main Street",
    city: "Exampleville",
    country: "Exampleland"
  },
  hobbies: ["reading", "playing guitar", "hiking"]
};

console.log(person);
~~~

###### [자료형,변수](#자료형변수)
###### [Top](#top)

<br/>
<br/>

# new Set
  - 중복이 허용되지 않는 객체이다(일반 객체랑은 다르며 전혀 다른것으로 봐야 한다)
  - 객체로 만들어 주면서 중복을 제거해 준다

~~~JavaScript
const arr = [1,2,3,4,5,6,6]
const arrObj = new Set(arr)
console.log(arrObj)

// { 1, 2, 3, 4, 5, 6 }
~~~

<br/>

~~~JavaScript
const arr = [[1,2], [3,4], [5,6], [5,6]]
const arrObj = new Set(arr)
console.log(arrObj)

// { [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 5, 6 ] }
~~~

<br/>

~~~JavaScript
// new set은 반복이 가능한 배열을 보내야 한다
const arr = { 1: 'a', 2: 'b', 3: 'c'}
const arrObj = new Set(arr)
console.log(arr)

// object is not iterable (cannot read property Symbol(Symbol.iterator))
~~~

<br/>

  - entries사용하기
    - 객체 내의 각 요소들을 [value, value] 형태의 배열로 가지는 이터레이터가 생성됩니다.

~~~JavaScript
const arr = [1,2,3,4,5,6,6]
const arrSet = new Set(arr)
const arrSetEntries = arrSet.entries()
console.log(arrSet)
console.log(arrSetEntries)

// { 1, 2, 3, 4, 5, 6 }

// {
  [ 1, 1 ],    
  [ 2, 2 ],    
  [ 3, 3 ],    
  [ 4, 4 ],    
  [ 5, 5 ],    
  [ 6, 6 ]     
}
~~~

<br/>

  - Set객체 foreach로 반복문 돌리기
    - item에 괄호는 있어도 되고, 없어도 되고

~~~JavaScript
const arr = [1,2,3,4,5,6,7]
const arr2 = new Set(arr)

arr2.forEach( (item) => {
    console.log(item)
})

// 1 2 3 4 5 6 7
~~~

<br/>

  - Set객체 배열 만들기(Array.from)

~~~JavaScript
const arr = [1,2,3,4,5,6,7]
const arr2 = new Set(arr)
const arrarr = Array.from(arr2)

console.log(arrarr)

// [1,2,3,4,5,6,7]
~~~

<br/>

  - Set객체 배열 만들기(전개연산자)

~~~JavaScript
const arr = [1,2,3,4,5,6,7]
const arr2 = new Set(arr)
const arrarr = [...arr2]

console.log(arrarr)

// [1,2,3,4,5,6,7]
~~~

<br/>

  - Set객체 배열 만들기(forEach)

~~~JavaScript
const arr = [1,2,3,4,5,6,7]
const arr2 = new Set(arr)
const arrarr = []

arr2.forEach(item => {
    arrarr.push(item)
})

console.log(arrarr)

// [1,2,3,4,5,6,7]
~~~

###### [자료형,변수](#자료형변수)
###### [Top](#top)

<br/>
<br/>

***

# 비교연산자
  - "===" : (다른 언어와 달리 JavaScritp는 "=="가 아닌 "==="를 사용한다)
  - "!==" : (이것도 다른 언어와 다르다..!)
  - ">"
  - ">="
  - "<"
  - "<="

###### [비교연산자](#비교연산자)
###### [Top](#top)

<br/>
<br/>

***

# 템플릿 문자열
  - JavaScritp는 유연한 언어이기 때문에, 문자열 + 숫자를 해도 숫자가 자동으로 문자열되어 합쳐진다.
  - 탬플릿 문자열을 사용하면 조금더 코드를 확인하기 좋아지고, 간편하게 문자열을 작성할 수 있다
  - 탬플릿 문자열을 사용하지 않을경우 : "안녕하세요" + 1 + "ㄴㄴㄴ" -> “안녕하세요1ㄴㄴㄴ”
  - 탬플릿 문자열을 사용할 경우 :  \`안녕하세요 ${1} ${"aaa"} 용용\` : “안녕하세요1aaa용용”이렇게 쓸수 있게 해준다
    - 템플릿 문자열을 만들때 양쪽 끝에 \` 기호를 사용한다(키보드에 ~표시 키보드)
    - 탬플릿 문자열 안쪽에 변수를 사용 할때는 "${}"로 감싸서 사용하게 된

###### [템플릿 문자열](#템플릿-문자열)
###### [Top](#top)

<br/>
<br/>

***

# prompt,confirm,자료형변환
 - prompt
   - 문자열을 입력할 때 사용
   - 숫자를 입력 받아야 하는 경우는 문자열로 입력 받은 뒤 변환
   - 첫번째 매개변수는 입력 창에서 띄워줄 메시지
   - 두번째 매개변수는 입력 부분의 기본 값
   - 무조건 문자열로 입력받게 
 - confirm
   - 불린 값을 입력 받을 때 사용
   - 확인을 누르면 true를 리턴
   - 취소를 누르면 false를 리턴
 - 자료형 변환
   - Number(변환할 값)
   - String(변환할 값)
   - Boolean(변환할 값)

~~~JavaScript
 <script>
        let a = prompt('첫 번째 숫자를 입력해주세요')
        a = Number(a)
        let b = prompt('두 번째 숫자를 입력해주세요')
        b = Number(b)

        alert(`${a} + ${b} + ${a + b}`)
 </script>
~~~

###### [prompt,confirm,자료형변환](#promptconfirm자료형변환)
###### [Top](#top)

<br/>
<br/>

***

# 논리 연산자 "||" 기호 사용시 주의
  - || 이 기호를 사용하여 앞에 부분이 true가 되어 실행되면 뒤에는 볼것도 없기 때문에 뒤에는 실행 되지 않음

~~~JavaScript
<script>
    alert("시작")
    true || alert("트루1")
    false || alert("트루2")
    
    alert(`${a} + ${b} + ${a + b}`)
</script>

// 시작, 트루2 만 출력됨
~~~

###### [논리 연산자 "||" 기호 사용시 주의](#논리-연산자-||-기호-사용시-주의)
###### [Top](#top)

<br/>
<br/>

***

# 배열(array)
  - [push, pop, unshift, shift](#push-pop-unshift-shift)
  - [splice](#splice)
  - [concat](#concat)
  - [filer함수](#filer함수)
  - [map함수](#map함수)
  - [배열 얕은 복사와 깊은 복사(스프레드 ...)](#배열-얕은-복사와-깊은-복사스프레드-)
  - [스프레드 문법 추가](#스프레드-문법-추가)

~~~JavaScript
const fruits = ["apple", "banana", "orange"];

console.log(fruits); // ["apple", "banana", "orange"]
~~~

###### 배열(array)
###### [Top](#top)

<br/>
<br/>

# push, pop, unshift, shift
  - push, pop, unshift, shift
  - unshift와 shift는 느리니 주의 하자!, 앞에 있는 데이터를 전부 땡겨서 움직여야 한다

~~~JavaScript
let arr = [1,2,3];
console.log(arr); // [1, 2, 3]

arr.push(1) // 맨뒤에 들어감
console.log(arr); // [1, 2, 3, 1]

arr.pop(); // 맨뒤에 빠짐
console.log(arr); // [1, 2, 3]

arr.unshift(1); // 맨앞에 들어감
console.log(arr); // [1, 1, 2, 3]

arr.shift(1); // 맨앞에 빠짐
console.log(arr); // [1, 2, 3]
~~~

###### 배열(array)
###### [Top](#top)

<br/>
<br/>

# splice
  - 첫번째 인자 : 몇번째 인덱스 부터 시작할지
  - 두번째 인자 : 몇개 선택할지
  - 세번째 인자부터 : 지운 자리에 새로 넣을 자료

~~~JavaScript
let arr = [1,2,3];
arr.splice(1,1,6,7); // [1, 6, 7, 3]
console.log(arr)
~~~

###### 배열(array)
###### [Top](#top)

<br/>
<br/>

# concat
  - 배열 합치기

~~~JavaScript
let arr = [1,2,3];
let arr2 = [1,2,3]

const newArr = arr.concat(arr2);

console.log(newArr); // [1, 2, 3, 1, 2, 3]
~~~

###### 배열(array)
###### [Top](#top)

<br/>
<br/>

# filer함수
  - filter : 조건을 확인하여 true인것만 출력해줌

~~~JavaScript
const ar = [10,40,20,70,1]
const ar2 = ar.filter(function(value, index){
    return value === 40 || value === 20
})

console.log(ar2)

// [40, 20]
~~~

###### 배열(array)
###### [Top](#top)

<br/>
<br/>

# map함수
  - 배열일 때 하나하나를 특정한 것으로 작업을 해줌

~~~JavaScript
const arr = [1,2,3,4,5,6]
const arr2 = arr.map(e=>e*2)
console.log(arr2)

// [ 2, 4, 6, 8, 10, 12 ]
~~~

<br/>

~~~JavaScript
const arr = [ [1,2], [3,4] ,[5,6] ]
const arr2 = arr.map(e=>e[0])
console.log(arr2)

// [ 1, 3, 5 ]
~~~

###### 배열(array)
###### [Top](#top)

<br/>
<br/>

# 배열 얕은 복사와 깊은 복사(스프레드 ...)
  - 위에는 깊은 복사로서 각각 독립적인 배열이 생성되지만, 아래는 참조 복사로써 독립적인 배열이 아닌 참조 배열이기때문에 하나의 배열이 바뀌면 둘다 바뀌게 된다

~~~JavaScript
<script>
    const arr = [1,2,3,4,5]
    console.log(arr)
    const chartData = [...arr]
    console.log(chartData)


    const arr1 = [1,2,3,4,5]
    console.log(arr1)
    const chartData1 = arr1
    console.log(chartData1)
</script>
~~~

  - 깊은 복사 할때 사용 하는 … 뒤에 다른 데이터를 넣으면, push하는 것과 같은 역할을 하게 된다

~~~JavaScript
<script>
    let number = [1,2,3,4,5]

    function f(){

    number = [...number, number.length+1];

    }

</script>

<div>{number}</div>
<button on:click={f}>
    버튼
</button>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/fe5f1649-3300-4a56-8ddd-ae67585dcda4)

###### [배열(array)](#배열array)
###### [Top](#top)

<br/>
<br/>

# 스프레드 문법 추가

Dir : .js
~~~JavaScript
const array = [1,2,3];

const array2 = [...array, 5,6];

console.log(array2);
// [1, 2, 3, 5, 6]
~~~

<br/>

Dir : .js
~~~JavaScript
onst array1 = [1,2,3];
const array2 = [1,2,3];

const array3 = [...array1, ...array2];

console.log(array3);
// [1, 2, 3, 1, 2, 3]
~~~

###### [배열(array)](#배열array)
###### [Top](#top)

<br/>
<br/>

***

# 함수
  - JavaScritp함수의 가장 기본적인 형태

~~~JavaScript
const f = function(매개변수, 매개변수...){
    return 리턴값
}
~~~

<br/>

  - [선언적 함수, 익명 함수](#선언적-함수-익명-함수)
  - [즉시호출 함수](#즉시호출-함수)
  - [함수'=>'문법](#함수'=>'문법)
  - [나머지 매개변수](#나머지-매개변수)
  - [객체 매개변수](#객체-매개변수)
  - [setTimeout,setInterval,clearTimeout,clearInterval함수](#settimeoutsetintervalcleartimeoutclearinterval함수)
  - [Default parameters](#default-parameters)

###### [함수](#함수)
###### [Top](#top)

<br/>
<br/>

# 선언적 함수, 익명 함수
  - 선언적 함수 : 전체 코드를 실행하기 전에 만들어짐
  - 익명 함수 : 코드를 하나하나 실행 하면서 만들어짐
    - 대부분 익명 함수로 사용하게 된다. 선언적 함수를 사용하면 순서가 복잡하게 됨

~~~JavaScript
함수()
// 먼저 만들어져 있는 선언적 함수 실행

함수 = function () {
    console.log("익명 함수") // 나중에 실행됨
}

function 함수() {
    console.log("선언적 함수") // 먼저 만들어짐
}

함수()
// 나중에 만들어지는 익명 함수가 선언적 함수를 덮어 버리기 때문에 익명 함수가 실행
~~~

###### [함수](#함수)
###### [Top](#top)

<br/>
<br/>

# 즉시호출 함수
  - html내의 각각의 scritp태그 안은 함께 공유한다고 생각할 수 있으니, 같은 이름의 변수는 하나만 선언 할수 있게 됨. 이때 즉시호출 함수를 써서, 변수를 내부에 위치 시키면 같은 변수이름이라도 사용 할 수 있게 됨

~~~JavaScript
(function(){
    const a = 20
    console.log(a)
})()
~~~

###### [함수](#함수)
###### [Top](#top)

<br/>
<br/>

# 함수'=>'문법
  - forEach, filer, map함수 처럼 function키워드를 사용하는 함수는 화살표 문법을 이용할 수 있다
  - 함수가 한줄이라면 function과 {}와 return까지 모두 줄일 수 있게 된다
  - "=>" 문법을 사용하여 나타내는것이 속도 측면에서 더 빠름. function에는 this를 사용 할 수 있는 것들이 포함 되어 있기 때문에 더 무겁고 느림

~~~JavaScript
const f = function(매개변수){
    console.log(매개변수)
}

// 위와 같은 함수를 아래와 같이 바꿀 수 있다

const f = (매개변수) => console.log(매개변수)
~~~

###### [함수](#함수)
###### [Top](#top)

<br/>
<br/>

# 나머지 매개변수
  - JavaScritp에서 함수의 넘겨주는 인수의 갯수는 제한이 없다
  - 함수를 만들때 매개 변수의 마지막 변수앞에 ‘…’을 달게 되면 나머지 매개 변수가 된다
  - 나머지 매개 변수는 맨 마지막에 인수로만 쓸 수 있다.
  - 나머지 매개 변수를 사용하면, 전달된 인수들의 목록을 배열로 압축할때 사용되어 진다

<br/>

  - JavaScritp는 유연하기 때문에, 함수에 인수 목록을 1개만 적고, 함수를 실행할때 인수를 2개 넣어도 에러가 나지 않고, 1개만 출력 된다

~~~JavaScript
const f = function(매개변수){
    console.log(매개변수)
}

f("ㅁ", "ㄷ")

// ㅁ
~~~

<br/>

  - 나머지 매개 변수를 사용하게 되면, 뒤에 몇개의 매개변수를 넣어 함수를 실행하든 매개변수의 목록을 배열로 압축하여 전달 한다

~~~JavaScript
const f = function(...매개변수){
    console.log(...매개변수)
}

f("ㅁ", "ㄷ")

// ㅁ
// 
~~~

###### [함수](#함수)
###### [Top](#top)

<br/>
<br/>

# 객체 매개변수

~~~JavaScript
<script>


    //#1
    function mailSend(obj){
        console.log(obj.i)
        console.log(obj.j)
        console.log(obj.k)
    }
   
    mailSend({
        i : "아이1",
        j : "제이1",
        k : "케이1"
    })


    //#2
    function mailSend2({i, j, k}){
        console.log(i)
        console.log(j)
        console.log(k)
    }


    mailSend2({
        i : "아이2",
        j : "제이2",
        k : "케이2"
    })
</script>
~~~

###### [함수](#함수)
###### [Top](#top)

<br/>
<br/>

# setTimeout,setInterval,clearTimeout,clearInterval함수
  - setTimeout : 주어진 시간이 되면 한번 호출 한다
  - setInterval : 인터벌 시간마다 반복 호출 한다
    - 두번째 인자는 실행되는 속도를 말한다

<br/>

  - setInterval
~~~JavaScript
<script>
    import { onDestroy } from "svelte";

    let seconds = 0;
    const internal = setInterval(() => seconds += 1, 1000);

    onDestroy(() => clearInterval(internal));
</script>

<p>{seconds}</p>
~~~

###### [함수](#함수)
###### [Top](#top)

<br/>
<br/>

# Default parameters

~~~JavaScript
const input = function(messege = '난 디폴트') {
    console.log(messege);
};

input('aaa'); // aaa
input(); // 난 디폴트
~~~

###### [함수](#함수)
###### [Top](#top)

<br/>
<br/>

***

# 객체(Object)
  - [객체 생성](#객체-생성)
  - [객체내 this](#객체내-this)
  - [객체 매핑](#객체-매핑)
  - [Object.keys, Object.values](#objectkeys-objectvalues)
  - [Object.fromEntries, Object.entries](#objectfromentries-objectentries)
  - [Destructuring assignment](#destructuring-assignment)
  - [Optional chaining](#optional-chaining)

~~~JavaScript
var person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer",
  address: {
    street: "123 Main Street",
    city: "Exampleville",
    country: "Exampleland"
  },
  hobbies: ["reading", "playing guitar", "hiking"]
};

console.log(person);
~~~

###### [객체(Object)](#객체object)
###### [Top](#top)

<br/>
<br/>

# 객체 생성
  - JavaScript객체 만드는 기본적인 형태
 
~~~JavaScript
const object = {
    name : '철수',
    age : 22
    }

console.log(object['name'])
console.log(object.name)

// 철수
// 철수
~~~

<br/>

  - new키워드를 이용한 객체 생성
    - 같은 객체를 더 쉽게 만들어 낼 수 있다

~~~JavaScript
function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
 
  let user = new User("보라");
 
  alert(user.name); // 보라
  alert(user.isAdmin); // false
~~~

new User(...)가 실행되면 암시적으로 일어나는 일

~~~JavaScript
function User(name) {
    // this = {};  (빈 객체가 암시적으로 만들어짐)
 
    // 새로운 프로퍼티를 this에 추가함
    this.name = name;
    this.isAdmin = false;
 
    // return this;  (this가 암시적으로 반환됨)
  }
~~~

let user = new User("보라")는 아래와 같다고 볼 수 있다

~~~JavaScript
 let user = {
    name: "보라",
    isAdmin: false
  };

~~~

<br/>

  - JavaScritp에서는 함수또한 객체를 만들어 낼 수가 있다

~~~JavaScript
function Person(){}
var joon = new Person();
var jisoo = new Person();
~~~

###### [객체(Object)](#객체object)
###### [Top](#top)

<br/>
<br/>

# 객체내 this
  - 이렇게 객체 내에 다른 것들을 출력, 잡아(?)오기 위해서는 무조건 this를 사용해야 한다. 여기서 this는 자기 자신을 나타내게 된다
  - 주의할 것은 함수를 만들때 ‘=>’ 문법을 사용하게 되면 this는 자기 자신을 나타내는 것이 아니기 때문에(보통 윈도우 os라면 윈도우 객체를 가리키게 된다고 한다) ‘=>’ 문법 안에서는 사용이 불가능 하게 된다

~~~JavaScript
const object = {
    name : '철수',
    age : 22,
    bark : function(){
        console.log(this.name)
    }
}

object.bark()
~~~

###### [객체(Object)](#객체object)
###### [Top](#top)

<br/>
<br/>

# 객체 매핑
  - 객체에 key와 value를 설정할 때, 외부에 같은 변수명이 있다면 따로 명시해 주지 않아도 된다

Dir : +page.svelte
~~~JavaScript
<script>
    const data = 3;

    const obj = {
        name: '철수',
        id: 3,
        data
    }

</script>

<div>{obj.data}</div>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/599b921e-73b5-41b8-8816-0fd4e5345539)

###### [객체(Object)](#객체object)
###### [Top](#top)

<br/>
<br/>

# Object.keys, Object.values
  - 객체의 key와 value만 잡아서 배열로 만듬

~~~JavaScript
    const arr = {'a': 1,'b': 2,'c': 3,'d': 4,'e': 5}
    let arrObjKey = Object.keys(arr);
    let arrObjValues = Object.values(arr);
    console.log(arrObjKey)
    console.log(arrObjValues)
~~~

###### [객체(Object)](#객체object)
###### [Top](#top)

<br/>
<br/>

# Object.fromEntries, Object.entries
  - Object.fromEntries : 키-값 쌍의 배열을 입력받아 객체로 변환한다
  - Object.entries : 객체를 입력받아 키-값 쌍의 배열로 변환 한다

~~~JavaScript
// Object.fromEntries
const arr = [['a', 1], ['b', 2], ['c', 3]];
let arrObj = Object.fromEntries(arr)
console.log(arrObj)

// { a: 1, b: 2, c: 3 }
~~~

<br/>

~~~JavaScript
// Object.entries
const arrObj = { a: 1, b: 2, c: 3 };
let arr = Object.entries(arrObj)
console.log(arr)

// [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
~~~

###### [객체(Object)](#객체object)
###### [Top](#top)

<br/>
<br/>

# Destructuring assignment
  - 괄호 안에 변수들을 잡아 놓을 수 있다

~~~JavaScript
const student = {
    name: 'Anna',
    level: 1
}

{
    const {name, level} = student;
    console.log(name, level); // Anna 1
}
~~~

<br/>

  - 변수들의 이름을 변경할 수 있다

~~~JavaScript
const student = {
    name: 'Anna',
    level: 1
}

const {name: aa, level: bb} = student;
    console.log(aa, bb); // Anna 1
~~~

###### [객체(Object)](#객체object)
###### [Top](#top)

<br/>
<br/>

# Optional chaining
  - 어떤 객체 데이터 안에서, 다른 객체들이 들어왔을때 데이터가 없거나 하면 에러가 날 수 있다.
  - 그때 사용 할 수 있는 방법론 문법

Dir : .js
~~~JavaScript
const person1 = {
    name: 'minkyoo',
    job: {
        title: 'S/W Engineer',
        manager: {
            name: 'Bob'
        }
    }
};

const person2 = {
    name: 'Bob'
};

function printManager(person){
    console.log(person.job.manager.name); // person2는 에러가남
}
~~~

<br/>

  - 삼항 연산자로 만든 중첩문을 사용할 수도 있음

Dir : .js
~~~JavaScript
const person1 = {
    name: 'minkyoo',
    job: {
        title: 'S/W Engineer',
        manager: {
            name: 'Bob'
        }
    }
};

const person2 = {
    name: 'Bob'
};

function printManager(person){
    console.log(person.job
        ? person.job.manager
            ? person.job.manager.name
            :undefined
        :undefined); // person2는 에러가남
}
~~~

<br/>

  - Optional chaining을 이용한 간결문

Dir : .js
~~~JavaScript
const person1 = {
    name: 'minkyoo',
    job: {
        title: 'S/W Engineer',
        manager: {
            name: 'Bob'
        }
    }
};

const person2 = {
    name: 'Bob'
};

function printManager(person){
    console.log(person.job?.manager?.name);
}

printManager(person1); // Bob
printManager(person2); // undefined
~~~

###### [객체(Object)](#객체object)
###### [Top](#top)

<br/>
<br/>

***

# forEach,forin,forof
  - for문과 같이 배열을 순회하는 방버들이다
  - forin,forof는 함수는 아니지만 forEach를 설명하면서 같이 설명진행한다

<br/>

  - forin
~~~JavaScript
const arr = ['a', 'b', 'c']
arr.prop = 'prop'

for (const key in arr) {
  console.log(key, typeof key, arr[key])
}

// 0 "string" a
// 1 "string" b
// 2 "string" c
// 3 "string" prop prop
~~~

<br/>

  - forEach
~~~JavaScript
const arr = ['a', 'b', 'c']
arr.prop = 'prop'

arr.forEach((e, index) => {
  console.log(e, index)
})

// a 0
// b 1
// c 2
~~~

<br/>

  - forof
~~~JavaScript
const arr = ['a', 'b', 'c']
arr.prop = 'prop'

for (const e of arr) {
  console.log(e)
}

// a
// b
// c
~~~

###### [forEach,forin,forof](#forEach,forin,forof)
###### [Top](#top)

<br/>
<br/>

# 엄격 모드
  - 순수 JS로 개발할 때 에는 JS파일의 맨 위에 'use strict' 를 사용하는 것이 좋다
  - const와 let도 선언하지 않아도... 상관이 없는 js..., 아래에 있는 것이 웹 브라우저에 잘 출력된다..

Dir : main.js
~~~JavaScript
a = 6

console.log(a);
~~~

  - 하지만 맨 위에 'use strict'를 선언하면 에러가 나게 된다
Dir : main.js
~~~JavaScript
'use strict'

a = 6

console.log(a);
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/638e03eb-1d81-4868-b6ba-22ce3d0cb4c5)

  - 해결하기 위해서는 아래와 같이 변수를 선언 해야한다
Dir : main.js
~~~JavaScript
'use strict'

let a;
a = 6

console.log(a);
~~~

###### [엄격 모드](#엄격-모드)
###### [Top](#top)

<br/>
<br/>

***

# prototype문법
  - class문법이 있기 때문에 많이 사용하지 않는 문법
  - 어떤 객체 안에 없는 함수를 임시로 만들어서 사용할 수 있게 해줌

~~~JavaScript
String.prototype.aaa = 10
console.log("aaa".aaa)
~~~

###### [prototype문법](#prototype문법)
###### [Top](#top)
 
<br/>
<br/>

***

# 클래스
  - JavaScritp도 다른 언어와 같이 class라는 개념이 만들어 졌다

<br/>

  - [선언하기,생성자](#선언하기생성자)
  - [private속성](#private속성)
  - [get,set문법](#getset문법)
  - [static](#static)
  - [상속](#상속)

###### [클래스](#클래스)
###### [Top](#top)

<br/>
<br/>

# 선언하기,생성자

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=chrome">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        class Student {
            // 생성자
            constructor (이름, 국어, 영어, 수학, 과학) {
                this.이름 = 이름
                this.국어 = 국어
                this.영어 = 영어
                this.수학 = 수학
                this.과학 = 과학
            }


            // 메서드
            getSum() {
                return this.국어 + this.영어 + this.수학 + this.과학
            }


        }


        // 객체 생성
        const students = [
            new Student('ㄱ', 11,22,33,44),
            new Student('ㄴ', 12,23,34,45),
            new Student('ㄷ', 13,24,35,46),
            new Student('ㄹ', 14,25,36,47)
        ]


        let output = `이름\t총점`
        for (const student of students) {
            console.log(`${student.이름}\t${student.getSum()}`)
        }


    </script>
</head>
<body>


</body>
</html>

// ㄱ 110
// ㄴ 114
// ㄷ 118
// ㄹ 122
~~~

<br/>

  - 객체를 이렇게 만들어 넣을 수도 있음

~~~JavaScript
// 객체 생성
const students = new Student()
students.add(new Student('ㄱ', 11,22,33,44))    
students.add(new Student('ㄴ', 12,23,34,45))    
students.add(new Student('ㄷ', 13,24,35,46))    
students.add(new Student('ㄹ', 14,25,36,47))   
~~~

<br/>

  - 객체 매개변수를 활용하여 나타내기도함

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=chrome">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        class Student {
            // 생성자
            constructor ({이름, 국어, 영어, 수학, 과학}) {
                this.이름 = 이름
                this.국어 = 국어
                this.영어 = 영어
                this.수학 = 수학
                this.과학 = 과학
            }


            // 메서드
            getSum() {
                return this.국어 + this.영어 + this.수학 + this.과학
            }
        }

        // 객체 매개변수 활용
        const student = new Student({
            이름: "ㄱ",
            국어: 11,
            영어: 22,
            수학: 33,
            과학: 44
        })

        let output = `이름\t총점`
        console.log(`${student.이름}\t${student.getSum()}`)

    </script>
</head>
<body>

</body>
</html>
~~~

###### [클래스](#클래스)
###### [Top](#top)

<br/>
<br/>

# private속성
  - class내에 #을 이용해서 private를 설정 할 수 있으며, 직접적으로 접근 할 수 없고 class안에 있는 함수나 다른 변수를 통해서 간접적으로 접근 할 수 있게 된다
  - 변수뿐만 아니라 매서드도 앞에 #을 붙여서 private 메서드를 만들 수 있다

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=chrome">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        class Student {
            // 생성자
            #이름

            constructor ({이름, 국어, 영어, 수학, 과학}) {
                this.#이름 = 이름
                this.국어 = 국어
                this.영어 = 영어
                this.수학 = 수학
                this.과학 = 과학
            }

            // 메서드
            getSum() {
                return this.국어 + this.영어 + this.수학 + this.과학
            }

            getName() {
                return this.#이름
            }
        }

        // 객체 매개변수 활용
        const student = new Student({
            이름: "ㄱ",
            국어: 11,
            영어: 22,
            수학: 33,
            과학: 44
        })

        console.log(`국어 : ${student.국어}`)
        console.log(`국어 : ${student.이름}`) // 이름이 private이기 때문에 결과가 undefinde로 나오게됨
        console.log(`국어 : ${student.getName()}`) // 내부의 함수를 호출하여 얻은 값

    </script>
</head>
<body>

</body>
</html>


// 국어 : 11
// 국어 : undefined
// 국어 : ㄱㄱ

~~~

###### [클래스](#클래스)
###### [Top](#top)

<br/>
<br/>

# get,set문법
  - get, set문법을 사용하면, 대입할때 set을 사용하고 값을 호출할때 get문법을 자동으로 사용하게 되어 편리하다

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=chrome">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        class Student {
            // 생성자
            #이름

            constructor (이름) {
                this.#이름 = 이름
            }

            // get메서드
            get Name() {
                return this.#이름
            }

            // set메서드
            set Name(이름1) {
                this.#이름 = 이름1
            }
        }

        // 객체 매개변수 활용
        const student = new Student('ㄱ')
        console.log(`이름 : ${student.Name}`)

        student.Name = 'ㄴ'
        console.log(`이름 : ${student.Name}`)

    </script>
</head>
<body>

</body>
</html>

// 이름 : ㄱ
// 이름 : ㄴ
~~~

###### [클래스](#클래스)
###### [Top](#top)

<br/>
<br/>

# static
  - 첫번째 코드처럼 class에 어떤 변수를 지정하거나, 함수를 추가로 지정해서 사용할 수도 있음, 하지만 위와 같은 문법보다 좀 더 직관적으로 편하게 static을 사용하는 문법이 제공 되었음

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
       
        class MySum {
            constructor(){
                MySum.count += 1
            }
        }
        MySum.count = 0
        MySum.test = function(){
            return MySum.count
        }

        console.log(MySum.count) // 0
        console.log(MySum.test()) // 0
        new MySum()
        new MySum()
        new MySum()
        console.log(MySum.count) // 3
    </script>
</head>
<body>
   
</body>
</html>
~~~

<br/>

  - static을 사용하는 문법

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
       
        class MySum {
            static count = 0
            static test () { }


            constructor(){
                MySum.count += 1
            }
        }

        console.log(MySum.count) // 0
        console.log(MySum.test()) // 0
        new MySum()
        new MySum()
        new MySum()
        console.log(MySum.count) // 3
    </script>
</head>
<body>
   
</body>
</html>

###### [클래스](#클래스)
###### [Top](#top)

<br/>
<br/>

# 상속
  - extends키워드를 사용하여 상속을 할 수 있다
  - 부모것을 자식단에서 바꾸기 위해서는 똑같은 이름의 매서드와 속성을 지정해주면 덮어 쓰게 된다
  - 생성자 내에서 super()을 쓰면 이것은 부모의 생성자 라는 의미가 된다

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
    class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
        }
        sum(){
            return this.first+this.second;
        }


        bark(){
            console.log("asfasdf")
        }
    }
    class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
        }
        sum(){
            return super.sum()+this.third;
        }
        avg(){
            return (this.first+this.second+this.third)/3;
        }
    }
 
    let kim = new PersonPlus('kim', 10, 20, 30);
    console.log("kim.sum()", kim.sum());
    console.log("kim.avg()", kim.avg());        
    kim.bark();        
    </script>
</head>
<body>
   
</body>
</html>
~~~

###### [클래스](#클래스)
###### [Top](#top)

<br/>
<br/>

***

# 동기,비동기
  - js는 일반적으로는 위에서부터 한줄 한줄 동기작업으로 이루어져 있다

<br/>
  
  - [setTimeout](#settimeout)
  - [promise](#promise)
  - [finally](#finally)
  - [promise, then, setTimeout사용](#promise-then-settimeout사용)
  - [pending상태](#pending상태)
  - [fulfilled상태](#fulfilled상태)
  - [promise에서 받아온 데이터 출력하기(then)](#promise에서-받아온-데이터-출력하기then)
  - [async](#async)
  - [promise, async, await이해하기](#promise-async-await이해하기)
  - [Promise.all](#promiseall)
  - [Promise.race](#promiserace)

###### [동기,비동기](#동기비동기)
###### [Top](#top)

<br/>
<br/>

# setTimeout
  - setTimeout을 사용 함으로써 해당하는 것들을 비동기 적으로 실행한다

Dir : .js
~~~JavaScript
'use strict';

// 동기
console.log('1');

// 비동기
setTimeout(() => {
    console.log('2');
}, 2000);

// 동기
console.log('3')
~~~

###### [동기,비동기](#동기비동기)
###### [Top](#top)

<br/>
<br/>

# promise
  - JavaScript안에 내장되어 있는 object
  - 비동기 적인 것을 수행할 때 콜백함수 대신에 유용하게 쓸 수 있는 object
  - 두가지포인트
    - State
      - pending :  수행중
      - fulfilled : 완료
      - rejected : 파일을 찾을 수 없거나, 네트워크 문제

<br/>

  - 실행하지 않아도, Promise안에 있는 executor라는 콜백함수가 바로 이것을 실행 해줌

Dir : .js
~~~JavaScript
'use strict';

const promise = new Promise((resolve, reject) => {
    console.log("바로 통신");
});
~~~

  - promise안에 전달된 resolve데이터 출력
    - 아래와 같이 promise안에 전달된 값을 출력할 때 꼭 value변수를 사용하지 않아도 된다

Dir : .js
~~~JavaScript
'use strict';

// 실행하지 않아도, Promise안에 있는 executor라는 콜백함수가 바로 이것을 실행 해줌
const promise = new Promise((resolve, reject) => {
    console.log("바로 통신");
    setTimeout(() => {
        resolve('블라블라 전송');
    }, 2000);
});

// promise안에 전달된 resolve데이터 출력
promise.then(value => {
    console.log(value);
})
~~~

<br/>

  - reject에러 발생시키기

Dir : .js
~~~JavaScript
'use strict';

// 실행하지 않아도, Promise안에 있는 executor라는 콜백함수가 바로 이것을 실행 해줌
const promise = new Promise((resolve, reject) => {
    console.log("바로 통신");
    setTimeout(() => {
        reject("ㅇㅇㅇㅇㅇ");
    }, 2000);
});

// promise안에 전달된 resolve데이터 출력
promise.then(value => {
    console.log(value);
})
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/eeebab2e-4c96-4e00-b194-269f918e981a)

  - reject에러 발생시키기2

Dir : .js
~~~JavaScript
'use strict';

// 실행하지 않아도, Promise안에 있는 executor라는 콜백함수가 바로 이것을 실행 해줌
const promise = new Promise((resolve, reject) => {
    console.log("바로 통신");
    setTimeout(() => {
        reject(new Error('에러~~'))
    }, 2000);
});

// promise안에 전달된 resolve데이터 출력
promise.then(value => {
    console.log(value);
})
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/40ac6b60-2cc8-447e-a8d6-28757c26d380)

<br/>

  - reject에러 잡기(catch)

Dir : .js
~~~JavaScript
'use strict';

// 실행하지 않아도, Promise안에 있는 executor라는 콜백함수가 바로 이것을 실행 해줌
const promise = new Promise((resolve, reject) => {
    console.log("바로 통신");
    setTimeout(() => {
        reject(new Error('에러~~'))
    }, 2000);
});

// promise안에 전달된 resolve데이터 출력
promise
.then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
});
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/c9dbb9b8-3810-4865-907d-046d761a2cfd)

###### [동기,비동기](#동기비동기)
###### [Top](#top)

<br/>
<br/>

# finally
  - 잘 출력되든, 에러가 나든 finally안에 있는 것은 무조건 실행이 된다

Dir : .js
~~~JavaScript
'use strict';

// 실행하지 않아도, Promise안에 있는 executor라는 콜백함수가 바로 이것을 실행 해줌
const promise = new Promise((resolve, reject) => {
    console.log("바로 통신");
    setTimeout(() => {
        reject(new Error('에러~~'))
    }, 2000);
});

// promise안에 전달된 resolve데이터 출력
promise
.then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('무조건 실행');
})
~~~

###### [동기,비동기](#동기비동기)
###### [Top](#top)

<br/>
<br/>

# promise, then, setTimeout사용

Dir : .js
~~~JavaScript
'use strict';

// 실행하지 않아도, Promise안에 있는 executor라는 콜백함수가 바로 이것을 실행 해줌
const promise = new Promise((resolve, reject) => {
    console.log("바로 통신"); // 바로 통신
    setTimeout(() => {
        resolve(1);
    }, 2000);
});

// promise안에 전달된 resolve데이터 출력
promise
.then(data => data + 1)
.then(data => data + 1)
.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(data + 10)
        }, 1000);
    });
})
.then(data => console.log(data)); // 13
~~~

###### [동기,비동기](#동기비동기)
###### [Top](#top)

<br/>
<br/>

# pending상태
  - resolve나 reject가 없다면 pending상태가 된다
  따라서 Promise안에서는 resolve나 reject가 존재해야 한다

Dir : .js
~~~JavaScript
'use strict';

const fetchUser = function(){
    return new Promise((resolve, reject) => {
        return 'aaa';
    });
}

const user = fetchUser();
console.log(user);
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/bf6c4b7f-bd57-42a0-a5b0-66de1b0da497)

###### [동기,비동기](#동기비동기)
###### [Top](#top)

<br/>
<br/>

# fulfilled상태
  - resolve나 reject가 존재 함으로써 promise데이터를 받아 올 수 있게 된다

Dir : .js
~~~JavaScript
'use strict';

const fetchUser = function(){
    return new Promise((resolve, reject) => {
        resolve('aaa');
    });
}

const user = fetchUser();
console.log(user);
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/0a9587f2-1c3e-4524-9914-76b1f5ff1ce6)

###### [동기,비동기](#동기비동기)
###### [Top](#top)

<br/>
<br/>

# promise에서 받아온 데이터 출력하기(then)
  - promise에서 받아온 데이터는 then을 이용해 출력해 올 수 있다

Dir : .js
~~~JavaScript
'use strict';

const fetchUser = function(){
    return new Promise((resolve, reject) => {
        resolve('aaa');
    });
}

const user = fetchUser();
user.then(value => console.log(value));
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/363f2a5b-4eca-464e-b7f3-3270f5daab39)

###### [동기,비동기](#동기비동기)
###### [Top](#top)

<br/>
<br/>

# async
  - async를 사용하게 되면 promise객체를 만들지 않아도 자동으로 promise로 뽑아내 준다
  - user.then(value => console.log(value)); return 값 출력하기

Dir : .js
~~~JavaScript
'use strict';

const fetchUser = async function(){
    return 'aaa';
}

const user = fetchUser();
console.log(user);
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/6404ffdd-4a74-48c0-90e6-99a45016c1b1)

###### [동기,비동기](#동기비동기)
###### [Top](#top)

<br/>
<br/>

# promise, async, await이해하기
  - 비동기 작업을 하기 위해 promise를 사용하게 됨
    - new Promise()메서드를 호출하면 Pending상태가 됨
    - resolve를 실행하면 Fulfilled상태가 되고 then()을 이용해 값을 받을 수 있음
    - reject를 호출하면 실패상태가 되고, catch()로 받을 수 있음
    - Promise안에서는 “동기 처리 하고 싶은 비동기 처리를” 담는것!! 이게 가장 중요한 포인트가 된다
  - async키워드를 사용하여 promise를 쉽게 사용할 수 있음
  - 그런 비동기 작업을 await가 동기로 기다려준다(then과 같은것)

Dir : .js
~~~JavaScript
'use strict';

const PromiseRrturn = function() {
    return new Promise((resolve, reject) => {
      // 비동기 작업 수행
      setTimeout(() => {
        resolve(console.log("난 promise 비동기 작업"));
      }, 2000);
    });
  }

  PromiseRrturn()
  .then(console.log("promise이후 작업"));

  // promise이후 작업
  // 난 promise 비동기 작업
~~~

<br/>

  - .then 동기작업

Dir : .js
~~~JavaScript
'use strict';

const PromiseRrturn = function() {
    return new Promise((resolve, reject) => {
      // 비동기 작업 수행
      setTimeout(() => {
        resolve(console.log("난 promise 비동기 작업"));
      }, 2000);
    });
  }

  PromiseRrturn()
  .then(value => console.log("promise이후 작업"));

  // 난 promise 비동기 작업
  // promise이후 작업
~~~

<br/>

  - 함수 내부에서도 위와 같이 똑같이 사용하게 된다는점 헷갈려 하지 말자

Dir : .js
~~~JavaScript
'use strict';

const PromiseRrturn = function() {
    return new Promise((resolve, reject) => {
      // 비동기 작업 수행
      setTimeout(() => {
        resolve(console.log("난 promise 비동기 작업"));
      }, 2000);
    });
  }

const get = function(){
    PromiseRrturn();
    console.log("promise이후 작업");
}

get();

 // promise이후 작업
 // 난 promise 비동기 작업
~~~

<br/>

Dir : .js
~~~JavaScript
'use strict';

const PromiseRrturn = function() {
    return new Promise((resolve, reject) => {
      // 비동기 작업 수행
      setTimeout(() => {
        resolve(console.log("난 promise 비동기 작업"));
      }, 2000);
    });
  }

const get = function(){
    PromiseRrturn()
    .then(() => console.log("promise이후 작업"));
}

get();

 // 난 promise 비동기 작업
 // promise이후 작업
~~~

<br/>

  - 바로 위에 있는 .then을 await로 바꾸었을때

Dir : .js
~~~JavaScript
'use strict';

const PromiseRrturn = function() {
    return new Promise((resolve, reject) => {
      // 비동기 작업 수행
      setTimeout(() => {
        resolve(console.log("난 promise 비동기 작업"));
      }, 2000);
    });
  }

const get = async function(){
    await PromiseRrturn();
    console.log("promise이후 작업");
}

get();

 // 난 promise 비동기 작업
 // promise이후 작업
~~~

<br/>

  - 전에 있었던 코드 어떻게 바꿔야 할지 깨닭음

Dir : .js
~~~JavaScript
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
 let ss = indexM(HPL_CD)
 ss.then((value) => indexMdata = value)

 <div>{indexMdata}</div>
~~~

<br/>

  - 빠른 병렬 처리 하기

Dir : .js
~~~JavaScript
'use strict';

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
};

async function getApple() {
    await delay(1000);
    return '사과';
}

async function getBanana() {
    await delay(1000);
    return '바나나';
}

async function pickFruite(){
    const name1 = await getApple();
    const name2 = await getBanana();
    return `${name1} + ${name2}`
}

pickFruite().then(console.log)
~~~

<br/>

  - 위의 코드는 await 두개를 1초씩 기다려야 하지만, 아래 처리는 1초만 기다리면 된다

Dir : .js
~~~JavaScript
'use strict';

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
};

async function getApple() {
    await delay(1000);
    return '사과';
}

async function getBanana() {
    await delay(1000);
    return '바나나';
}

async function pickFruite(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const name1 = await applePromise;
    const name2 = await bananaPromise;
    return `${name1} + ${name2}`
}

pickFruite().then(console.log) // 사과 + 바나나
~~~

###### [동기,비동기](#동기비동기)
###### [Top](#top)

<br/>
<br/>

# Promise.all
  - 비동기 병렬 처리
  - 위와 같이 병렬 처리를 하는 경우는 Promise.all이라는 것을 사용해서 간결하게 처리하게 된다

Dir : .js
~~~JavaScript
'use strict';

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
};

async function getApple() {
    await delay(1000);
    return '사과';
}

async function getBanana() {
    await delay(1000);
    return '바나나';
}

async function pickFruite(){
    return Promise.all([getApple(), getBanana()])
    .then(frutes => frutes.join(' + '));
}

pickFruite().then(console.log) // 사과 + 바나나
~~~

###### [동기,비동기](#동기비동기)
###### [Top](#top)

<br/>
<br/>

# Promise.race
  - 먼저 처리된것이 반환됨

Dir : .js
~~~JavaScript
'use strict';

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
};

async function getApple() {
    await delay(2000);
    return '사과';
}

async function getBanana() {
    await delay(1000);
    return '바나나';
}

async function pickFruite(){
    return Promise.race([getApple(), getBanana()])
}

pickFruite().then(console.log) // 바나나
~~~

###### [동기,비동기](#동기비동기)
###### [Top](#top)

<br/>
<br/>

***

# 외부 자바스크립트 파일 읽어 오기
  - html에 js불러오기
    - head에 불러오기
      - js파일을 head부분에 불러오게 되면, 웹사이트가 html을 위에서부터 분석하면서 script태그를 만나게 되고, js파일을 다운받을 때 가지 block되기 때문에 js파일의 용량이 크다면 웹사이트가 늦게 뜨게 된다
      - parsing HTML -> (blocked) js파일 다운 -> (blocked) js파일 실행 -> parsing HTML -> page is ready!

Dir : index.html
~~~Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="main.js"> </script>
</head>
<body>
</body>
</html>
~~~

<br/>

  - body에 불러오기
    - body에 불러오게 되면 head에 불러온 것보다 웹사이트 준비가 미리 되어서 보여지겠지만, 만약 js파일에 굉장히 의존적인 사이트라면, 의미 있는 정보를 보여주는 화면이 나오기 위해서는 결국 js파일이 전부 로드 되어야 보여질 수 있을 것이다
    - parsing HTML -> page is ready -> js파일 다운 -> js파일 실행

Dir : index.html
~~~Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="main.js"> </script>
</body>
</html>
~~~

<br/>

  - head에 async로 불러오기
    - html parsing을 진행하다가, 병렬로 js파일이 다운로드 진행되고, 그 후 js파일이 다운로드 되면 js파일을 해석하기 위해 block 되었다가 해석이 끝나면 다시 html parsing을 시작한다
    - js 파일을 다운로드 하는 시간을 절약할 수 있지만, html이 parsing되기도 전에 js파일에서 dom요소를 조작하려고 했다면 dom요소가 생성되기 전이기 때문에 위험할 수 있다, 또한 js파일을 다운후, 그것을 실행하기 위해서 얼마든지 웹사이트가 멈출 수 있기때문에 단점을 해결하지 못한 부분도 있게 된다
    - 또한, 다운로드가 먼저 되는 js파일 순서로 실행이 되버리기 때문에, 선행 되어야 하는 js파일이 있다면 위험할 수 있다
    - parsing HTML and js파일 다운 -> (block) js실행 -> parsing HTML -> page is ready

Dir : index.html
~~~Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script async src="main.js"> </script>
</head>
<body>
</body>
</html>
~~~

<br/>

  - head에 defer로 불러오기
    - defer로 설정하게 되면, js파일을 미리 다운 받고, 페이지 로드 후에 js파일을 실행하기 때문에 가장 좋다 또한, 먼저 다운로드 된 js파일을 실행하는 것이 아니라, 먼저 읽은 순서대로 마지막에 실행하기 때문에 순서에 대해서도 지킬 수가 있다
    - parsing HTML and js파일 다운-> page is ready -> js파일 실행 

Dir : index.html
~~~Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script defer src="main.js"> </script>
</head>
<body>
</body>
</html>
~~~

###### [외부 자바스크립트 파일 읽어 오기](#외부-자바스크립트-파일-읽어-오기)
###### [Top](#top)

<br/>
<br/>

***

# 자바스크립트로 문서조작하기
  - 자바스크립트로 문서를 조작하기 위해서는 태그들을 잡아서 불러와야 하는데, 일반적으로 title밑에 자바스크립트 조작 구문을 사용하게 되고, body태그는 아직 만들어지기 전이기 때문에, 문서가 모두 만들어지고 자바스크립트 구문이 실행되기 위해서 addEventListener 함수가 사용된다

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Chrome">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // 문서 객제 조작
        })
    </script>
</head>
<body>
    <h1>ㅎㅇ~</h1>
    <script>
        // 문서 객체 조작
    </script>
</body>
</html>
~~~

<br/>

  - [querySelector,querySelectorAll](#queryselectorqueryselectorall)
  - [문자열조작하기](#문자열조작하기)
  - [태그 값 넣기,가져오기](#태그-값-넣기가져오기)
  - [스타일조작하기](#스타일조작하기)
  - [문서객체 생성,제거,이동](#문서객체-생성제거이동)
  - [이벤트연결](#이벤트연결)
  - [버튼만들기(button)](#버튼만들기button)
  - [버튼만들기(submit이벤트)](#버튼만들기submit이벤트)
  - [글자입력 상자만들기(text)](#글자입력-상자만들기text)
  - [선택박스 만들기(드롭다운)](#선택박스-만들기드롭다운)
  - [다중선택 상자 만들기](#다중선택-상자-만들기)
  - [체크박스,라디오 버튼](#체크박스라디오-버튼)
  - [textContent,value차이](#textcontentvalue차이)

###### [자바스크립트로 문서조작하기](#자바스크립트로-문서조작하기)
###### [Top](#top)

<br/>
<br/>

# querySelector,querySelectorAll
  - querySelector 는 한개만 잡아 오고, querySelectorAll은 여러개를 잡아 오게 된다

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Chrome">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // 태그 선택자
            const h1 = document.querySelector('h1').style.color = 'blue'
            //h1.style.color = 'red'


            // 아이디 선택자
            const h2 = document.querySelector('#hhh').style.backgroundColor = 'red'


            // 클래스 선택자, 여러개 클래스를 지정할 경우는 띄어쓰기를 하지 않고 .으로 이어 붙인다
            const h3 = document.querySelector('.myFirstClass.mySecondClass').style.textAlign = 'center'


            // 속성 선택자
            const h4 = document.querySelector('[type=text]').style.borderRadius = '20px'
           
            // 후선 선택자, 띄어쓰기로 구분해서 잡아 오기
            const h5 = document.querySelector('body input').style.backgroundColor = 'blue'


            // 여러개를 잡아 온다
            const h6 = document.querySelectorAll('input')
            for (const i of h6) {
                i.style.background = 'orange'
            }
        })
    </script>
</head>
<body>
    <!-- 여러개의 클래스를 지정할 경우는 띄어쓰기를 구분한다 -->
    <h1 id = "hhh" class="myFirstClass mySecondClass">ㅎㅇ~</h1>
    <input type="text">
    <input type="text1">
    <input type="text2">
    <script>
        // 문서 객체 조작
    </script>
</body>
</html>
~~~

###### [자바스크립트로 문서조작하기](#자바스크립트로-문서조작하기)
###### [Top](#top)

<br/>
<br/>

# 문자열조작하기
  - id="textContent"
    - 안쪽에 태그가 있을시 그것을 그냥 텍스트로 반영
  - id="innerHTML"
    - 안쪽에 태그가 있을시 그것을 태그로 반영
    - 보안적으로 문제가 있을 수 있으므로 많이 쓰지는 않는다

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const header1 = document.querySelector('#textContent')
            const header2 = document.querySelector('#innerHTML')


            //값을 추출한다
            console.log(header1.textContent)
            console.log(header2.innerHTML)


            //값을 넣는다
            header1.textContent = '문자 수정1'
            header2.innerHTML = '문자 수정2'
        })
    </script>
</head>
<body>
    <h1 id="textContent">문자열1</h1>
    <h1 id="innerHTML">문자열2</h1>
</body>
</html>
~~~

###### [자바스크립트로 문서조작하기](#자바스크립트로-문서조작하기)
###### [Top](#top)

<br/>
<br/>

# 태그 값 넣기,가져오기
  - setAttribute, getAttribute
  - 조작하려는 태그가 표준일 경우에는 두번째 예시와 같이 . 을 이용해 더 쉽게 조작 할 수 있음

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
           
            // 태그 잡기
            const img = document.querySelector('img')


            // 값 넣기
            img.setAttribute('src', 'https://img.freepik.com/free-photo/closeup-shot-of-a-cute-ginger-kitten-staring-at-the-camera-isolated-on-a-white-wall_181624-45452.jpg')


            // 값 추출
            console.log(img.getAttribute('src'))


        })
    </script>
</head>
<body>
    <img src="" alt="">
</body>
</html>
~~~

<br/>

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
           
            // 태그 잡기
            const img = document.querySelector('img')


            // 값 넣기
            img.src = 'https://img.freepik.com/free-photo/closeup-shot-of-a-cute-ginger-kitten-staring-at-the-camera-isolated-on-a-white-wall_181624-45452.jpg'


            // 값 추출
            console.log(img.src)


        })
    </script>
</head>
<body>
    <img src="" alt="">
</body>
</html>
~~~

###### [자바스크립트로 문서조작하기](#자바스크립트로-문서조작하기)
###### [Top](#top)

<br/>
<br/>

# 스타일조작하기

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const divs = document.querySelectorAll('div')
            for (let i = 0; i < divs.length; i++) {
                divs[i].style.backgroundColor = 'rgb(0, 0, 0)'
                divs[i].style.height = '10px'


                // 값 추출
                console.log(divs[i].style.height)
            }
        })
    </script>
</head>
<body>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</body>
</html>
~~~

###### [자바스크립트로 문서조작하기](#자바스크립트로-문서조작하기)
###### [Top](#top)

<br/>
<br/>

# 문서객체 생성,제거,이동
  - 생성(createElement, appendChild)
  - 제거
  - 이동
    - 이동할때는 appendChild를 해주기만 하면 이동이 된다

<br/>

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const header = document.createElement('h1')
            header.style.color = 'rgb(255, 0, 0)'
            header.style.background = 'rgb(0, 0, 0)'
            header.textContent = '만들어진 h1태그 문자열'


            const body = document.querySelector('body')
            body.appendChild(header)
        })
    </script>
</head>
<body>
   
</body>
</html>
~~~

<br/>

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const header = document.createElement('h1')
            header.style.color = 'rgb(255, 0, 0)'
            header.style.background = 'rgb(0, 0, 0)'
            header.textContent = '만들어진 h1태그 문자열'


            const body = document.querySelector('body')


            // 자식 으로 생성
            body.appendChild(header)


            // 제거
            //body.removeChild(header)
            setTimeout(function()
            {
                header.parentNode.removeChild(header)
            }, 2000)




        })
    </script>
</head>
<body>
   
</body>
</html>
~~~

<br/>

  - 연습예제
    - 나는야! 추가 라는 글자가 위로 갔다가 아래로 갔다가 반복 하게 된다

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const text = document.createElement('h2')
            text.textContent = '나는야! 추가'


            const array = [
                document.querySelector('.first'),
                document.querySelector('.second')
            ]


            let count = 0
            const f = () => {
                array[count % 2].appendChild(text)
                count++
            }


            setInterval(f, 1000)
        })
    </script>
</head>
<body>
    <div class="first">
        <h1>첫 번째 해더</h1>
    </div>
    <hr>
    <div class="second">
        <h1>두 번째 해더</h1>
    </div>
</body>
</html>
~~~

![image](https://user-images.githubusercontent.com/39178978/233763980-a74ac27b-a4b1-4bc4-ae27-a556a21024dd.png)


###### [자바스크립트로 문서조작하기](#자바스크립트로-문서조작하기)
###### [Top](#top)

<br/>
<br/>

# 이벤트연결
  - addEventListener을 이용해서 문서 객체에 이벤트를 연결 할 수 있다, 첫번째 매개 변수에 ‘이벤트 이름’ 을 이벤트가 발생되었을 때 실행할 함수를 입력
  - 문서 객체에 On으로 시작하는 것들이 이벤트이다..
    - ex) document.on……..

<br/>

  - 버튼을 클릭하면 숫자가 오르는 예제
~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const header = document.createElement('h1')
            document.querySelector('body').appendChild(header)


            let count = 0
            header.innerText = `클릭한 횟수 : ${count}`
            header.style.userSelect = 'none'


            header.addEventListener('click', () => {
                header.innerText = `클릭한 횟수 : ${count}`
                count++
            })
        })
    </script>
</head>
<body>
   
</body>
</html>
~~~

![image](https://user-images.githubusercontent.com/39178978/233764074-e0d76e4f-0425-4f05-b622-de78cafd5bfc.png)


<br/>

  - 키다운 이벤트
    - keydown 을 사용하면 된다
    - addEventListener을 사용시 두번째 인자에는 항상 해당하는 이벤트의 데이터가 들어가게 된다
    - 만약 이벤트를 막으려면, event.preventDefault()와 같이 쓰면 이벤트가 막아 지게 된다

<br/>

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            document.addEventListener('keydown', (event) => {
                document.body.innerText = `키 다운 : ${event.code}`
            })


            document.addEventListener('keyup', (event) => {
                document.body.innerText = `키 업 : ${event.code}`
            })
        })
    </script>
</head>
<body>
   
</body>
</html>
~~~

![image](https://user-images.githubusercontent.com/39178978/233764066-34b27058-0183-4cd3-90e8-829d6a9c7023.png)

<br/>

  - 이벤트를 사용했을때 이벤트 객채(?)를 잡아오는 3가지

~~~JavaScript
    document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', (event) => {
        document.body.innerText = `키 다운 : ${event.code}`
    })

    document.addEventListener('keydown', (event) => {
        document.body.innerText = `키 다운 : ${event.currentTarget}`
    })

    document.addEventListener('keydown', function(event) {
        document.body.innerText = `키 다운 : ${this.code}`
    })
})
~~~

###### [자바스크립트로 문서조작하기](#자바스크립트로-문서조작하기)
###### [Top](#top)

<br/>
<br/>

# 버튼만들기(button)
  - 버튼 생성 및 버튼 이벤트 생성

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () =>
        {
            const buttonA = document.querySelector('button')
            const buttonB = document.querySelector('input[type=button]')


            buttonA.addEventListener('click', (event) => {
                event.currentTarget.textContent += '글자'
            })


            buttonB.addEventListener('click', (event) => {
                event.currentTarget.value += '글자'
            })
        })
    </script>
</head>
<body>
    <!-- click 이벤트-->
    <button>글자</button>
    <input type="button" value="글자">


    <!-- submit 이벤트! (click이벤트도 가능하지만...잘 안씀)-->
    <!-- 서버 쪽으로 데이터를 넘길때 사용한다-->
    <form action="">
        <input type="button" value="글자">
    </form>
</body>
</html>
~~~

###### [자바스크립트로 문서조작하기](#자바스크립트로-문서조작하기)
###### [Top](#top)

<br/>
<br/>

# 버튼만들기(submit이벤트)
  - 여기서도 click이벤트를 만들 수 있지만, 대부분 여기서 만들지는 않음, 서버쪽으로 데이터를 전달할 때 사용하게 된다

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.querySelector('form')
            form.addEventListener('submit', (event) => {
                const text = document.querySelector('input[type=text]')
                if (text.value.indexOf('@') >= 0) {
                    alert('정상적으로 제출')
                } else {
                    alert('이메일 형식을 입력해주세요!')
                    event.preventDefault()
                }
            })
        })
    </script>
</head>
<body>
    <form action="">
        이메일 형식을 입력해주세요!<br>
        <input type="text" name="test" id="">
        <input type="submit" value="글자">
    </form>
</body>
</html>
~~~

<br/>

  - 주의사항
    - form 태그 밑에 버튼을 만들면 submit이벤트가 동작 되기 때문에 form 태그 밑에서 일반 버튼을 만들기 위해서 type을 button으로 지정한다

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {


        })
    </script>
</head>
<body>
    <form action="">
        이메일 형식을 입력해주세요!<br>
        <input type="text" name="test" id="">
        <input type="button" value="글자">
    </form>
</body>
</html>
~~~

###### [자바스크립트로 문서조작하기](#자바스크립트로-문서조작하기)
###### [Top](#top)

<br/>
<br/>

# 글자입력 상자만들기(text)
  - 글자 입력 상자 3가지
    - input-type-text : 한줄 입력
    - textarea : 여러줄 입력
    - p-contenteditable : 클릭하면 글자 변경 가능

~~~JavaScript
<input type="text" name="" id="">
<textarea name="" id="" cols="30" rows="10"></textarea>
<p contenteditable="true">123123</p>
~~~

![image](https://user-images.githubusercontent.com/39178978/233764188-9040bad8-a1e4-4878-9f0b-1b47ddc90158.png)

<br/>

  - 연습예제
    - keyup이벤트를 이용해서 버튼을 누르지 않아도 자동계산 되게 한다

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const button = document.querySelector('button')
            const input = document.querySelector('input')
            const p = document.querySelector('p')

            button.addEventListener('click', (event) => {
            p.textContent = Number(input.value) * 2.54

            })
        })
    </script>
</head>
<body>
    <input type="text" name="" id="">inch<br>
    <button>계산</button>
    <p></p>
</body>
</html>
~~~

![image](https://user-images.githubusercontent.com/39178978/233764243-40c27255-68f3-4ee5-90d1-c3cf97176e16.png)

###### [자바스크립트로 문서조작하기](#자바스크립트로-문서조작하기)
###### [Top](#top)

<br/>
<br/>

# 선택박스 만들기(드롭다운)
  - select-option 을 통해서 만들고
  - options.selectedIndex를 통해 현재 몇번째 option을 선택했는지 알아 온다

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const select = document.querySelector('select')
            const p = document.querySelector('p')


            select.addEventListener('change', (event) => {
                const options = event.currentTarget.options
                const index = options.selectedIndex
                p.textContent = `선택 : ${options[index].textContent}`
            })
        })
    </script>
</head>
<body>
    <select name="" id="">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
    </select>
    <p>선택 : 1</p>
</body>
</html>
~~~

![image](https://user-images.githubusercontent.com/39178978/233764254-e8c4c628-2a9b-4226-b62c-eb58b3af4308.png)

###### [자바스크립트로 문서조작하기](#자바스크립트로-문서조작하기)
###### [Top](#top)

<br/>
<br/>

# 다중선택 상자 만들기
  - 선택박스 에서 multiple을 추가한다

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const select = document.querySelector('select')
            const p = document.querySelector('p')


            select.addEventListener('change', (event) => {
                const options = event.currentTarget.options
                const index = options.selectedIndex
                p.textContent = `선택 : ${options[index].textContent}`
            })
        })
    </script>
</head>
<body>
    <select name="" id="" multiple>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
    </select>
    <p>선택 : 1</p>
</body>
</html>
~~~

![image](https://user-images.githubusercontent.com/39178978/233764282-3a797a14-9904-4885-9473-2752412b182c.png)

###### [자바스크립트로 문서조작하기](#자바스크립트로-문서조작하기)
###### [Top](#top)

<br/>
<br/>

# 체크박스,라디오 버튼
  - input-checkbox
  - input-radio

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const checkbox = document.querySelector('input[type=checkbox]')
            const h1_checkbox = document.querySelector('h1#checkbox')
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    h1_checkbox.textContent = '체크'
                } else {
                    h1_checkbox.textContent = '해제'
                }
            })


            const radios = document.querySelectorAll('input[type=radio]')
            const h2_radiobox = document.querySelector('h1#radiobutton')
            radios.forEach((radio) => {
                radio.addEventListener('change', (event) => {
                    h2_radiobox.textContent = event.currentTarget.value
                })
            })
        })
    </script>
</head>
<body>
    <!-- false 또는 true하나씩 선택 가능-->
    <input type="checkbox" name="" id=""><br>
    <h1 id="checkbox"></h1>
    <!-- 여러 대상 중에서 하나만 선택 가능-->
    <input type="radio" name="gender" id="" value="1">1<br>
    <input type="radio" name="gender" id="" value="2">2<br>
    <input type="radio" name="gender" id="" value="3">3<br>
    <h1 id="radiobutton"></h1>
</body>
</html>
~~~

###### [자바스크립트로 문서조작하기](#자바스크립트로-문서조작하기)
###### [Top](#top)

<br/>
<br/>

# textContent,value차이
  - https://miracleground.tistory.com/entry/dom-%EA%B0%9C%EB%85%90-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EB%AC%B8%EB%B2%95-valuetextContent%EC%B0%A8%EC%9D%B4-dom%EC%9D%B4%EB%B2%A4%ED%8A%B8 

###### [자바스크립트로 문서조작하기](#자바스크립트로-문서조작하기)
###### [Top](#top)

<br/>
<br/>

***

# localStorage
  - 간단하게 만들때는 여기에 데이터를 보관 할 수 있기 때문에 유용 하게 쓸 수 있다
  - localStorage객체를 사용하게 되며, 4가지 함수를 제공한다

~~~JavaScript
localStorage.getItem('키') // 특정 키로 값을 꺼낼때
localStorage.getItem('키', '값') // 특정 키로 특정한 값을 저장할때
localStorage.removeItem('키') // 특정 키로 어떤 아이템을 제거 할때
localStorage.clear() // 전체 제거
~~~

<br/>

  - 로컬 저장소에 간단하게 데이터를 넣는 코드
  - 원래 웹은 새로고침을 하면 데이터가 날라가지만, 로컬 저장소에 저장해 놓았다면 사라지지 않는다

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=chrome">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const p = document.querySelector('p')
            const button = document.querySelector('button')
            const input = document.querySelector('input')


            button.addEventListener('click', () => {
                localStorage.clear()
            })


            input.addEventListener('keyup', () => {
                localStorage.setItem('키', input.value)
            })
        })
    </script>
</head>
<body>
<p></p>
<button>지우기</button>
<input type="text" name="" id="">
</body>
</html>
~~~

![image](https://user-images.githubusercontent.com/39178978/233764647-0265ea48-92d2-4bd8-a146-7d3f0849b595.png)

![image](https://user-images.githubusercontent.com/39178978/233764655-a5582287-441f-43fe-950e-2a521b4017a5.png)

<br/>

  - 새로고침후 마지막 로컬 저장소에 넣었던 데이터를 가져오는 코드

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=chrome">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const p = document.querySelector('p')
            const button = document.querySelector('button')
            const input = document.querySelector('input')


            const key = localStorage.getItem('키')
            p.textContent = `이전 값 : ${key}`


            button.addEventListener('click', () => {
                localStorage.clear()
            })


            input.addEventListener('keyup', () => {
                localStorage.setItem('키', input.value)
            })
        })
    </script>
</head>
<body>
<p></p>
<button>지우기</button>
<input type="text" name="" id="">
</body>
</html>
~~~

###### [localStorage](#localstorage)
###### [Top](#top)

<br/>
<br/>

***

# json
  - JSON.stringify() : 자바스크립트 객체 -> JSON문자열로 변경
  - JSON.parse() : JSON문자열 -> 자바스크립트 객체

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=chrome">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const obj = {
                color : "blue",
                name : "minkyoo"
            }
            const string_json = JSON.stringify(obj) // {"color":"blue","name":"minkyoo"}
           
            const string_obj = JSON.parse(string_json)
            console.log(string_obj.color) // blue
            console.log(string_obj.name) // minkyoo

        })
    </script>
</head>
<body>


</body>
</html>
~~~

###### [json](#json)
###### [Top](#top)

<br/>
<br/>

***

# html부분에 함수 실행시
  - on:click={aa()}
    - 이렇게 사용하게 되면 클라이언트 리로드시에 바로 함수가 실행 된다
    - 클릭해도 함수가 실행 되지 않는다

Dir : +page.svelte
~~~JavaScript
<script>

    function aa(){
        console.log("난 aa")
    }
</script>

<button on:click={aa()}>
    버튼
</button>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/01dff1df-0052-43fc-88f9-e8e3d412882b)

<br/>

  - on:click={aa}
    - 이렇게 하면 실제로 클릭 버튼으로 작동하며, 클릭해야 함수가 실행 된다

Dir : +page.svelte
~~~JavaScript
<script>

    function aa(){
        console.log("난 aa")
    }
</script>

<button on:click={aa}>
    버튼
</button>
~~~

<br/>

  - on:click={() => aa}
    - 아예 작동하지 않는다

Dir : +page.svelte
~~~JavaScript
<script>

    function aa(){
        console.log("난 aa")
    }
</script>

<button on:click={() => aa}>
    버튼
</button>
~~~

<br/>

  - on:click={() => aa()}
    - on:click={aa}과 동일하게 작동하게 된다

Dir : +page.svelte
~~~JavaScript
<script>

    function aa(){
        console.log("난 aa")
    }
</script>

<button on:click={() => aa()}>
    버튼
</button>
~~~

###### [html부분에 함수 실행시](#html부분에-함수-실행시)
###### [Top](#top)

<br/>
<br/>

***

# 브라우저의 싱글 스레드 동작에 관하여
  - 1.Call Stack
  - 2.Callback Queue
    - MicroStack Queue
      - Promise.then, async/await 같은것을 처리
        - 여기에 등록된 모든 콜백이 처리될 때까지 계속 수행하게 된다
          - 브라우저 콘솔에 넣어 보면 이것을 처리하느라 브라우자가 먹통이 된다
    - Animation Frames
      - 스크롤 이동과 같이 화면을 갱신해야 할때, requestAnimationFrames api를 사용했을 때와 같이 브라우저 렌더링과 관련된 Task를 받는 Queue
    - MacroStack Queue(task queue)
      - 콜백을 하나씩 실행(setTimeout, setInterval, onClick과 같은 비동기 호출의 콜백 함수)
      - 콜백 함수 하나를 실행하면 이벤트 루프를 놓아주어 다른 동작을 수행할 수 있음


Dir : .js
~~~JavaScript
// MicroStack Queue

function loop() {
    function infinityThen() {
      Promise.resolve().then(infinityThen)
      .then(() => console.log('Promise'));
    }
    Promise.resolve().then(infinityThen);
  }
 
  loop();
~~~

<br/>

  - MacroStack Queue는 하나씩 실행하기 때문에 하나가 끝나면 이벤트 루프를 놓아 준다

Dir : .js
~~~JavaScript
// MacroStack Queue

function loop() {
    function infinitySetTimeout() {
        setTimeout(infinitySetTimeout, 0);
    }

    infinitySetTimeout();
}

loop();
~~~

<br/>

  - 재귀함수로 호출해도 다른 동작들을 할 수 있다

Dir : .js
~~~JavaScript
function loop() {
    function infinityThen() {
        setTimeout(() => infinityThen(), 0);
        console.log("setTimeout");
    }
    setTimeout(() => infinityThen(), 0);
  }
 
  loop();
~~~

<br/>

  - 3. Event Loop
    - 현재 실행중인 Task가 없는지, Callback Queue에 Task가 있는지를 반복적으로 확인해 준다
      - 처음에 Call Stack에 쌓여있는 Task를 모두 처리.
      - MicroStack Queue에 쌓여있는 Task를 모두 처리.
      - Animation Frames에 쌓여있는 Task를 처리.
      - MacroStack Queue에 쌓여있는 Task를 하나씩 처리.
      - MicroStack Queue → Animation Frames → MacroStack Queue 순으로 처리하게 된다

Dir : .js
~~~JavaScript
setTimeout(() => console.log('태스크 큐!'), 0);
requestAnimationFrame(() => {
    console.log('애니메이션 프레임!');
});
Promise.resolve().then(() => console.log('마이크로태스크 큐!'));
console.log('콜 스택!');


// 콜 스택!
// 마이크로태스크 큐!
// 애니메이션 프레임!  -> 테스크 큐가 먼저 나올때가 있고 아닐때가 있음
// 태스크 큐!
~~~

###### [브라우저의 싱글 스레드 동작에 관하여](#브라우저의-싱글-스레드-동작에-관하여)
###### [Top](#top)

<br/>
<br/>

***
