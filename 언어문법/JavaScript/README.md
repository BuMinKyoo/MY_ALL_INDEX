<br/>

  - 하나하나 세세하기 정리하기 보다 이미 알고 있는 다른 언어의 문법등을 배제하며, 검색해서 쉽게 확인할 수 있다는 것들또한 배제하여 간결하게 정리 하였음

###### Top

  - [기초문법~객체생성문법](#기초문법객체생성문법)
  - [자바스크립트로 문서조작하기](#자바스크립트로-문서조작하기)

<br/>

***
***

<br/>

## 기초문법~객체생성문법
  - html형식 안에  <script></script> 라는 태그 안쪽에 쓰면 그것이 자바스크립트 코드를 쓰는 것이 된다

![image](https://user-images.githubusercontent.com/39178978/232321880-87371d43-f9cb-4638-8300-e0e702134fb9.png)
  
<br/>
  
  - 자바스크립트 코드 실행하기
    - 크롬 -> about:blank -> 마우스 오른쪽 클릭 -> 검사 -> 콘솔
    - 코드 작성후 -> 브라우저에 끌어 실행하기 -> F5키를 눌러 수정된것 바로 연속 실행 가능
    - Live Server 라이브러리 설치해서 자동으로 변경 확인하기
    
<br/>
  
  - 에러확인
    - alert 함수를 alet이라고 잘못쓰면 에러가 나야 하는데, 브라우저에 F5를 누르면 작동은 되지 않게 됨. 브라우저에서 F12를 눌러보면 X표시가 나와 있고 에러가 몇개인지 표시해준다
    - 에러 링크를 누르면 어디가 잘못됐는지 나오게 된다

![image](https://user-images.githubusercontent.com/39178978/232322228-82c78cbe-993e-4021-9fd3-b975ac65b0e5.png)

![image](https://user-images.githubusercontent.com/39178978/232322238-ed6b519c-638c-4a74-b1b1-6c5c3816685d.png)

<br/>

  - 자료형
    - Boolean
    - Number
    - String
      - 문자열을 작음 따옴표 or 큰 따옴표로 감싼다(작은 따옴표, 큰 따옴표가 같음..!)
    - Null
    - Undefined

<br/>

  - 비교연산자
    - ===(자바스크립트는 등호 연산자가 이거라는 것을 기억하자..!)
    - !==(이것도 다른 언어와 다르다..!)
    - >
    - >=
    - <
    - <=

<br/>

  - 템플릿 문자열
    - "안녕하세요" + 1 + "ㄴㄴㄴ"(result : “안녕하세요1ㄴㄴㄴ”) 이렇게 써주어야 했던 것을 템플릿 문자열을 이용해서 `안녕하세요 ${1} ${"aaa"} 용용`(result : “'안녕하세요 1 aaa 용용')”이렇게 쓸수 있게 해준다
    
<br/>

 - 상수 : const 식별자 = ‘자료’
   - 자료를 바꿀수 없음
 - 변수 : let 식별자 = ‘자료’
   - 자료를 바 꿀수 있음, 일반적으로 상수보다 변수가 내부적으로 더 느리기 때문에 가능하면 상수를 사용하고, 바꿔야 한다면 변수를 쓰자
 - prompt
   - 값받기
   - 무조건 문자열로 입력받음
 - confirm
   - 확인, 취소 받기
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

<br/>

  - ||기호 사용시 주의
    -  || 이 기호를 사용하여 앞에 부분이 true가 되어 실행되면 뒤에는 볼것도 없기 때문에 뒤에는 실행 되지 않음

~~~JavaScript
<script>
    alert("시작")
    true || alert("트루1")
    false || alert("트루2")
    
    alert(`${a} + ${b} + ${a + b}`)
</script>

// 시작, 트루2 만 출력됨
~~~

<br/>

  - 함수
    - const f = function (매개변수, 매개변수…) { return 리턴값 }
    
<br/>

  - 나머지 매개변수
    - 함수를 만들때, 매개 변수쪽에, ‘…’을 달게 되면 그것이 나머지 매개 변수가 된다. 나머지 매개 변수는 맨 마지막에 인수로만 쓸 수 있다. 나머지 매개 변수를 배열을 만든다
    
<br/>

~~~JavaScript
const min1 = function(arr) {
    let output = arr[0]
    for (const value of arr) {
        if (output > value){
            output = value
        }
    }
    return output
}

console.log(`min1 : ${min1([50, 19, 200, 1, 20])}`)

const min2 = function(...arr) {
    let output = arr[0]
    for (const value of arr) {
        if (output > value){
            output = value
        }
    }
    return output
}

const ar = [50, 19, 200, 1, 20]
console.log(`min2 : ${min2(...ar)}`)
~~~

<br/>

  - forEach 함수

~~~JavaScript
const ar = [11,53,27,115]
ar.forEach(function (value, index, array) {
    console.log(value, index, array)
})

// 11 0 (4) [11, 53, 27, 115]
// 3 53 1 (4) [11, 53, 27, 115]
// 3 27 2 (4) [11, 53, 27, 115]
// 3 115 3 (4) [11, 53, 27, 115]
~~~

<br/>

  - forin은 index를 출력, forof는 value를 출력

<br/>

  - filer함수
    - 조건을 확인하여 true인것만 출력해줌

~~~JavaScript
const ar = [10,40,20,70,1]
const ar2 = ar.filter(function(value, index){
    return value === 40 || value === 20
})

console.log(ar2)

// [40, 20]
~~~

<br/>

  - map함수
    - 뒤에 추가적으로 뭔가 붙일때 사용
  
~~~JavaScript
const ar = [10,40,20,70,1]
const ar2 = ar.map(function(value, index){
    return value + "안뇽"
})

console.log(ar2)

// ['10안뇽', '40안뇽', '20안뇽', '70안뇽', '1안뇽']
~~~

<br/>

  - forEach, filer, map함수 처럼 function키워드를 사용하는 함수는 화살표 문법을 이용해 줄일 수 있다. 조건식이 한줄이라면, return키워드 조차 줄일 수 있다

~~~JavaScript
const ar = [11,53,27,115]
ar.forEach((value, index, array) => console.log(value, index, array))
~~~

~~~JavaScript
const ar = [10,40,20,70,1]
const ar2 = ar.filter((value, index) => value === 40 || value === 20)

console.log(ar2)
~~~

<br/>

  - setTimeout, setInterval 함수, clearTimeout, clearInterval 함수
    - setTimeout 해당 초 뒤에 실행
    - setInterval  해당 초 마다 실행

<br/>

  - 즉시호출 함수
    - html내의 각각의 scritp태그 안은 함께 공유한다고 생각할 수 있으니, 같은 이름의 변수는 하나만 선언 할수 있게 됨. 이때 즉시호출 함수를 써서, 변수를 내부에 위치 시키면 같은 변수이름이라도 사용 할 수 있게 됨

~~~JavaScript
(function(){
    const a = 20
    console.log(a)
})()
~~~

<br/>

  - 엄격 모드
    - script태그 안쪽에, ‘use strict’를 쓰면 엄격 모드가 된다. 자바스크립트는 너무 유연한 언어이기 때문에 저런 것들로 나중에 있을 위험들을 예방할 수 있다
    
<br/>

  - 선언적 함수, 익명 함수
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

<br/>

  - 객체 생성

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

  - 객체내 this
    - 이렇게 객체 내에 다른 것들을 출력, 잡아(?)오기 위해서는 무조건 this를 사용해야 한다. 여기서 this는 자기 자신을 나타내게 된다. 하지만 주의할 것은 함수를 만들때 ‘=>’ 문법을 사용하게 되면 this는 자기 자신을 나타내는 것이 아니기 때문에 ‘=>’ 문법 안에서는 사용이 불가능 하게 된다

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

<br/>

  - prototype문법
    - 없는 함수를 임시로 만들어서 사용할 수 있게 해줌
    
<br/>

  - 외부 자바스크립트 파일 읽어 오기
    - <script src=”b.js”></script> 와 같이 src키워드를 써서 파일을 불러 올 수 있다

###### [기초문법~객체생성문법](#기초문법객체생성문법)
###### [Top](#top)

<br/>
<br/>

***

## 자바스크립트로 문서조작하기
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
