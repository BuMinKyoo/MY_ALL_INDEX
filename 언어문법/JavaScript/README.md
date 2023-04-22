<br/>

###### Top

  - [JavaScript 사용(Script태크)](#JavaScript-사용script태크)
  - [JavaScript 코드실행 3가지](#자바스크립트-코드실행-3가지)
  - [JavaScript 코드실행에러 확인](#자바스크립트-코드실행에러-확인)
  - [자료형,변수](#자료형변수)
  - [비교연산자](#비교연산자)
  - [템플릿 문자열](#템플릿-문자열)
  - [prompt,confirm,자료형변환](#promptconfirm자료형변환)
  - [논리 연산자 "||" 기호 사용시 주의](#논리-연산자-||-기호-사용시-주의)
  - [함수](#함수)
    - [나머지 매개변수](#나머지-매개변수)
    - [forEach,forin,forof](#forEach,forin,forof)
    - [filer,map함수](#filermap함수)
    - [함수'=>'문법](#함수'=>'문법)
    - [setTimeout,setInterval,clearTimeout,clearInterval함수](#settimeoutsetintervalcleartimeoutclearinterval함수)
    - [즉시호출 함수](#즉시호출-함수)
    - [선언적 함수, 익명 함수](#선언적-함수-익명-함수)
  - [엄격모드](#엄격모드)
  - [객체생성](#객체생성)
  - [객체내 this](#객체내-this)
  - [prototype문법](#prototype문법)
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
  - [객체 매개변수](#객체 매개변수)
  - [클래스](#클래스)
    - [선언하기,생성자](#선언하기생성자)
    - [private속성](#private속성)
    - [get,set문법](#getset문법)
    - [static](#static)
    - [상속](#상속)

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
  - 동적타입, 정적타입
    - let : 재할당이 가능한 변수
    - const : 재할당이 불가능한 변수
      - 반드시 선언과 초기화를 동시에 진행해야 한다
      - '재할당'이 불가능 한 것이기 때문에, const로 선언된 배열, 객체 등의 값들은 바꿀수가 있게 된다. 왜냐면.. const로 선언한 배열과 객체와 같은것은 포인터값(즉 메모리값)만 상수이기 때문에 안에 내용은 상수가 아니기 때문..!
  - Boolean
  - Number
  - String
    - 문자열을 작음 따옴표 or 큰 따옴표로 감싼다(작은 따옴표, 큰 따옴표가 같음..!)
  - Null
  - Undefined

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

# 함수
  - JavaScritp함수의 가장 기본적인 형태

~~~JavaScript
const f = function(매개변수, 매개변수...){
    return 리턴값
}
~~~

<br/>

  - [나머지 매개변수](#나머지-매개변수)
  - [forEach,forin,forof](#forEach,forin,forof)
  - [filer,map함수](#filermap함수)
  - [함수'=>'문법](#함수'=>'문법)
  - [setTimeout,setInterval,clearTimeout,clearInterval함수](#settimeoutsetintervalcleartimeoutclearinterval함수)
  - [즉시호출 함수](#즉시호출-함수)
  - [선언적 함수, 익명 함수](#선언적-함수-익명-함수)

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

###### [함수](#함수)
###### [Top](#top)

<br/>
<br/>

# filer,map함수
  - filter : 조건을 확인하여 true인것만 출력해줌
  - map : 뒤에 추가적으로 뭔가 붙일때 사용

~~~JavaScript
const ar = [10,40,20,70,1]
const ar2 = ar.filter(function(value, index){
    return value === 40 || value === 20
})

console.log(ar2)

// [40, 20]
~~~

<br/>

~~~JavaScript
const ar = [10,40,20,70,1]
const ar2 = ar.map(function(value, index){
    return value + "안뇽"
})

console.log(ar2)

// ['10안뇽', '40안뇽', '20안뇽', '70안뇽', '1안뇽']
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

# setTimeout,setInterval,clearTimeout,clearInterval함수
  - setTimeout : 주어진 시간이 되면 한번 호출 한다
  - setInterval : 인터벌 시간마다 반복 호출 한

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

***

# 엄격 모드
  - script태그 안쪽에, ‘use strict’를 쓰면 엄격 모드가 된다. 자바스크립트는 너무 유연한 언어이기 때문에 저런 것들로 나중에 있을 위험들을 예방할 수 있다

###### [함수](#함수)
###### [Top](#top)

<br/>
<br/>

***

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

###### [객체 생성](#객체-생성)
###### [Top](#top)

<br/>
<br/>

***

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

###### [객체내 this](#객체내-this)
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

# 외부 자바스크립트 파일 읽어 오기
  - <script src=”b.js”></script> 와 같이 src키워드를 써서 파일을 불러 올 수 있다

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

<br/>

  - 문자열 조작하기

~~~JavaScript

~~~

###### [자바스크립트로 문서조작하기](#자바스크립트로-문서조작하기)
###### [Top](#top)
