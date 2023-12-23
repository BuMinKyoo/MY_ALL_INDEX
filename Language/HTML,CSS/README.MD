<br/>

###### Top

  - [html태그 정리한것](#html태그-정리한것)
  - [css](#css)
    - [css적용법](#css적용법)
      - 인라인 스타일
      - 내부 스타일 시트
      - 링킹 스타일 시트
    - [기본, 그룹 선택자](#기본-그룹-선택자)
    - [결합자와 가상 클래스 선택자](#결합자와-가상-클래스-선택자)
    - [글자와 텍스트 스타일](#글자와-텍스트-스타일)
      - font-style
      - font-weight
      - font-size
      - text-decoration
      - text-transform
      - text-shadow
    - [문단과 목록 스타일](#문단과-목록-스타일)
      - text-align
      - letter-spacing
      - word-spacing
      - line-height
      - text-indent
      - list-style
    - [색 표현하기](#색-표현하기)
      - color
    - [인라인 요소와 블록 요소](#인라인-요소와-블록-요소)
      - span
      - div
    - [박스 모델](#박스-모델)
      - width
      - line-height
      - max-width, max-height
      - min-width, min-height
      - margin
      - padding
      - border
      - box-sizing
      - border-radius
      - overflow
      - box-shadow
    - [배경 꾸미기](#배경-꾸미기)
      - background-image
      - background-repeat
      - background-position
      - background-size
      - background
    - [포지셔닝](#포지셔닝)
      - position
      - z-index
    - [반응](#반응)
      - cursor
    - [요소들을 감추는 방법들](#요소들을-감추는-방법들)
      - opacity
      - visibility
      - display
    - [Flex레이아웃](#flex레이아웃)
      - display
      - flex-direction
      - justify-content
      - flex-wrap
      - align-items
      - align-content
      - gap

<br/>
<br/>

***

# html태그 정리한것
  - \<h1\> : 제목
  - \<p\> : 문단(각각 줄바꿈됨)
  - \<br\> : 줄바꿈
  - \<hr\> : 가로줄
  - \&nbsp; : 공백
  - \<b\> : 글자를 굵게
  - \<strong\> : 중요한 내용임을 명시
  - \<i\>: 글자를 기울임
  - \<em\> : 강조할 내용임을 명시
  - \<sup\> :  위첨자
  - \<sub\> : 아래첨자
  - \<u\> : 철자 오류 표시
  - \<s\> : 더 이상 유효하지 않은 정보 표시
  - \<blockquote\> : 긴 인용문에 사용
    - cite속성으로 출처 표시
  - \<q\> : 비교적 짧은 인용문에 사용
  - \&lt;, \&gt ; 꺽세를 출력할 수 있음
  - \<abbr\> : 준말/머릿글자 표시
  - \<ul\> : 순서가 없는 목록
  - \<ol\> : 순서가 있는 목록
    - type, start속성 사용 가능
  - \<li\> : 목록 아이템
    - ul, ol의 자식으로 사용 가능
  - \<dl\>, \<dt\>, \<dd\> : 용어와 정의 나열하기
  - \<img\> : 이미지
    - src : 원본파일 경로
    - alt : 대체 텍스트
    - title : 툴팁
    - width : 너비
    - height : 높이
  - \<table\> : 테이블
  - \<caption\> : 표 설명 또는 제목
    - table 테그안에 들어감
  - \<tr\> : 테이블의 행
    - table 테그안에 들어감
  - \<td\> : 테이블의 데이터 셀
    - tr안에 들어감
  - \<thead\> : 테이블의 헤더 부분
    - tbody앞에 와야함
  - \<tbody\> : 테이블의 본문
  - \<tfoot\> : 테이블의 푸터 부분
    - tbody뒤에 와야함
  - \<th\> : 열 또는 행의 헤더
    - scope속성으로 row, col중에 선택 가능
  - \<colspan\> : 열 병함
  - \<rowspan\> : 행 병함
  - \<a\> : 하이퍼링크
    - href : 연결할 주소
      - href에 #(id값)을 넣으면 해당 id값을 가지고 있는 태그로  화면이 이동한다
      - mailto : 이메일 링크
      - tel : 전화번호 연결
  - target : 링크를 열 곳 옵션
      - _self : 현재 창에서 열림
      - _blank : 새창
      - _parent : 부모프레임
        - iframe사용시
      - _top : 최상위 프레임
        - iframe사용시
  - \<address\> : 주소 및 연락처 정보를 포함하는 태그
  - \<form\> : 정보를 제출하기 위한 태그들을 포함
    - action을 이용해 데이터를 전송
    - method를 통해 get또는 post를 설정
  - \<input\> : 입력을 받는 요소
    - type속성을 통해 다양화 한다
    - https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input 다양한 input요소들
      - 텍스트 인풋 속성
        - placeholder :  빈 칸에 보이는 안내문
        - maxlength : 최대 길이
        - minlength : 최소 길이
      - 숫자 관련 인풋 속성(data, number, range등)
        - min : 최소값
        - max : 최대값
        - step : 간격
      - 체크 관련 인풋 속성(라디오, 체크 박스 등)
        - checked : 체크 여부
        - name : 라디오 같은 경우 그룹으로 사용
        - value : 각 옵션마다 실제로 넘겨질 값
      - 기타 인풋 타입(file, hidden, email등)
        - accept : 받아들일 수 있는 파일 형식
        - multiple : 여러 파일 업로드 가능 여부
      - 인풋 요소 공통 속성
        - value :  값
        - autofocus : 자동 포커스
        - readonly : 읽기만 가능, 전송됨
        - required : 필수 입력
        - disabled : 입력불가, 전송안됨
  - \<label\> : 인풋 요소마다의 라벨
    - for속성값을 인풋 요소의 id와 연결하면 인풋의 클릭 영역을 확장할 수 있다
    - 혹은 label태그안에 input을 같이 넣어도 클릭 영역을 확장 할 수 있다
  - \<button\>
    - type속성에 submit, reset, button
  - \<fieldset\> : 폼 태그 내 입력요소와 라벨들을 그룹화
    - disabled속성을 지정 가능
  - \<legend\> : 필드셋 요소의 제목 또는 설명
    - fieldset내부에 사용
  - \<textarea\> : 긴 텍스트를 입력할 때 사용
    - cols 글자수 단위의 너비
    - rows : 표시되는 줄 수
  - \<select\>
    - multiple : 다중선택 가능, 드롭다운 대신 상자로 표시
  - \<option\>
    - select태그 안쪽에 사용
    - selected : 선택되게 하는 옵션
    - value : 실제로 전송될 값
  - \<optgroup\>
    - select태그 안쪽에 사용
    - option태그 위쪽에 부모로 사용
  - \<datalist\>
    - id값을 사용해서 input태그와 연결 할 수 있음
  - \<progress\>
    - max : 최대값
    - value : 진행 수치
  - \<meter\>
    - min : 최소값
    - max : 최대값
    - low, high : 전체 범위를 3등분하는 두 수치
    - optimum : 이상적인 값
      - low, high에 의해 등분에 값중에서, 어떤 수치가 가장 이상적인 값을 설정해서 컬러를 구분해준다
    - value : 실제 값
  - \<pre\>
    - 스페이스, 탭, 엔트 등 모든 공백 요소가 화면에 그대로 적용된다
  - \<sapn\> : 주머니의 크기가 내용이 들어간 부분만 이다
  - \<div\> : 내용이 들어간 부분 이상으로 한줄을 차지 한다

###### [html태그 정리한것](#html태그-정리한것)
###### [Top](#top)

<br/>
<br/>

***

# css
  - [css적용법](#css적용법)
    - 인라인 스타일
    - 내부 스타일 시트
    - 링킹 스타일 시트
  - [기본, 그룹 선택자](#기본-그룹-선택자)
  - [결합자와 가상 클래스 선택자](#결합자와-가상-클래스-선택자)
  - [글자와 텍스트 스타일](#글자와-텍스트-스타일)
    - font-style
    - font-weight
    - font-size
    - text-decoration
    - text-transform
    - text-shadow
  - [문단과 목록 스타일](#문단과-목록-스타일)
    - text-align
    - letter-spacing
    - word-spacing
    - line-height
    - text-indent
    - list-style
  - [색 표현하기](#색-표현하기)
    - color
  - [인라인 요소와 블록 요소](#인라인-요소와-블록-요소)
    - span
    - div
  - [박스 모델](#박스-모델)
    - width
    - line-height
    - max-width, max-height
    - min-width, min-height
    - margin
    - padding
    - border
    - box-sizing
    - border-radius
    - overflow
    - box-shadow
  - [배경 꾸미기](#배경-꾸미기)
    - background-image
    - background-repeat
    - background-position
    - background-size
    - background
  - [포지셔닝](#포지셔닝)
    - position
    - z-index
  - [반응](#반응)
    - cursor
  - [요소들을 감추는 방법들](#요소들을-감추는-방법들)
    - opacity
    - visibility
    - display
  - [Flex레이아웃](#flex레이아웃)
    - display
    - flex-direction
    - justify-content
    - flex-wrap
    - align-items
    - align-content
    - gap

###### [css](#css)
###### [Top](#top)

<br/>
<br/>

# css적용법
  - 인라인 스타일
    - 태그 안쪽에 속성으로 style속성을 사용해서 직접 지정한다
  - 내부 스타일 시트
    - head태그 안에 style태그를 두고 작성하는것
  - 링킹 스타일 시트
    - 외부 css파일을 html문서에 연결하는것

###### [css적용법](#css적용법)
###### [Top](#top)

<br/>
<br/>

# 기본, 그룹 선택자

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/a15f99ec-719e-473f-98a6-02049742ee03)

~~~JavaScript
<body>

    <h1>기본 & 그룹 선택자</h1>
 
    <span>
      span 요소
    </span>
 
    <p>
      p 요소
    </p>
 
    <p class="blue">
      p 요소, class는 blue
    </p>
 
    <span class="blue">
      span 요소, class는 blue
    </span>
 
    <p class="blue dark">
      p 요소, class는 blue와 dark
    </p>
 
    <p class="blue" id="red">
      p 요소, class는 blue, id는 red
    </p>
   
  </body>
~~~

<br/>

~~~JavaScript
/* 모든 요소 선택 */
* {
  font-weight: bold;
  color: darkorange;
}


/* 같은 선택자의 경우 뒤에 오는 것이 우선순위 높음 */
* {
  color: plum;
}


/* 태그 선택자 */
p {
  color: olivedrab;
}


/* class 선택자 */
/* 태그보다 우선순위 높음 */
/* 페이지상의 여러 요소가 같은 class를 가질 수 있음 */
.blue {
  color: lightblue;
}

/* 다른 선택자에 이어붙일 수 있음(태그, 클래스 등...) */
/* 선택자는 구체적일수록 우선순위 높음 */
p.blue {
  color: slateblue;
}

/* 클래스가 2개인 경우 ex) class=”blue dark”
.blue.dark {
  color: mediumblue;
}

p.blue.dark {
  color: darkblue;
}

/* id 선택자 */
/* class보다 우선순위 높음 */
/* id는 페이지상에서 요소마다 고유해야 함 */
#red {
  color: tomato;
}

/* 그룹 선택자 */
span, .dark, #red {
  text-decoration: underline;
}
~~~

###### [기본, 그룹 선택자](#기본-그룹-선택자)
###### [Top](#top)

<br/>
<br/>

# 결합자와 가상 클래스 선택자

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/bbc22a59-0571-4351-8c5a-88366962588c)

~~~JavaScript
<body>

    <h1>결합자와 가상 클래스</h1>

    <ul class="outer">
        <li>육류</li>
        <li>채소</li>
        <li>유제품</li>
        <li>과일
            <ul>
                <li>사과</li>
                <li>포도</li>
                <li>딸기</li>
                <li>키위</li>
            </ul>
        </li>
    </ul>

    <ol>
        <li>한놈</li>
        <li>두시기</li>
        <li class="starter">석삼</li>
        <li>너구리</li>
        <li>다섯놈</li>
        <li>육개장</li>
        <li>칠푼이</li>
        <li>팔보채</li>
        <li>구공탄</li>
    </ol>
   
</body>
~~~

<br/>

~~~JavaScript
/* 자손 결합자, 스페이스는 그 밑의 자손들을 의미한다 */
.outer li {
  color: olivedrab;
}

/* 자식(1촌 자손) 결합자 */
/* 1촌 자손 선택자라도, css중에서는 일부 자동 상속되는 경우가 있기 때문에 자동 상속되는 속성이라면, 그 밑에 있는 자식들도 물려 받게 되는 경우가 있음 */
.outer > li {
  color: dodgerblue;
}

/* .outer클래스밑에 li의 자손 밑에의 모든 li를 가리킴 */
.outer > li li {
  text-decoration: underline;
}

/* 뒤따르는 모든 동생들 결합자 */
.starter ~ li {
  font-style: italic;
}

/* 뒤따르는 바로 다음 동생 결합자 */
.starter + li {
  font-weight: bold;
}

/* 첫 번째, 마지막 요소 가상 클래스 */
ol li:first-child,
ol li:last-child {
  color: yellowgreen;
}

/* ~가 아닌 요소 가상 클래스 */
.outer > li:not(:last-child) {
  text-decoration: line-through;
}

ul:not(.outer) li {
  font-weight: bold;
}

/* ~번째 요소 가상 클래스 */
/* #, #n, #n+#, odd, even 등 시도해보기 */
ol li:nth-child(3) {
  font-weight: bold;
  color: deeppink;
}

/* 마우스오버 가상 클래스 */
li:hover {
  font-weight: bold;
  color: blue;
}
~~~

###### [결합자와 가상 클래스 선택자](#결합자와-가상-클래스-선택자)
###### [Top](#top)

<br/>
<br/>

# 글자와 텍스트 스타일
  - font-style : 글자를 기울일 때 사용
  - font-weight : 글자의 굵기를 조절
  - font-size : 글자의 크기를 지정
    - px : 절대값으로 픽셀 단위
    - 100% : 1em으로 부모 요소와의 상대적 크기
      - 90%로 한다면, 부모보다 자식이 90% 그 다음 자식이 90%의 다시 90%만큼의 크기를 가지게 된다
    - em : 100%가 1em으로써 사용하면 된다
    - rem : html요소와의 상대적 크기, 요소의 중첩에 영향을 받지 않는다
      - rem을 건 부모와 그 밑에 자식을 전체로 보고, 자식의 자식끼리를 충첩되지 않는다
    - pt : 1인치/72로, 프린트할 컨텐츠에 사용
   
<br/>

  - font-size예시
    - .c선택자를 없애면 하위가 전부 .b선택자에 의해 크기가 조절 된다

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/f3dd779c-1059-4eac-84b0-ba583e08ea40)

~~~JavaScript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="a">제일 바깥
        <div class="b">그다음
            <div class="c">
                그다음
            </div>
        </div>
    </div>
</body>
</html>

<style>
    .a{
        font-size: 1em;
    }

    .b{
        font-size: 0.9em;
    }

    .c{
        font-size: 0.9em;
    }
</style>
~~~

<br/>

  - text-decoration : 밑줄, 취소선, 물결선 등\
    - 여러 밑줄 속성을 동시에 줄 수 있음
  - text-transform : 알파벳의 대소문자 표시에 사용됨
  - text-shadow : 텍스트에 그림자를 줄 수 있음

###### [글자와 텍스트 스타일](#글자와-텍스트-스타일)
###### [Top](#top)

<br/>
<br/>

# 문단과 목록 스타일
  - text-align : 텍스트의 정렬 방식
    - left, right, center
    - justify : 왼쪽으로 정렬하면서, 줄들의 오른쪽이 나란히 되도록 각 줄의 공간을 조절한다
  - letter-spacing : 자간
  - word-spacing : 단어 간격
  - line-height : 줄 높이
  - text-indent : 들여쓰기
    - px, em등 사용가능, 마이너스 값도 사용가능
  - list-style : ul과 ol목록의 블릿, 숫자 스타일을 지정할 수 있다


###### [문단과 목록 스타일](#문단과-목록-스타일)
###### [Top](#top)

<br/>
<br/>

# 색 표현하기
  - color : 컬러를 지정할 수 있음
    - 컬러 이름 사용
    - RGB사용
    - HEX사용
    - HSL사용

###### [색 표현하기](#색-표현하기)
###### [Top](#top)

<br/>
<br/>

# 인라인 요소와 블록 요소
  - span태그는 일반적으로 inline으로 되어 있음
  - div태그는 일반적으로 block으로 되어 있음
  - css를 통해서 이것을 전부 바꿀 수 있음
  - display속성으로 inline, block, inline-block을 바꿀 수 있다

<br/>

  - 속성

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/5e4a6c21-d03f-4917-924d-72f51e84c998)

###### [인라인 요소와 블록 요소](#인라인-요소와-블록-요소)
###### [Top](#top)

<br/>
<br/>

# 박스 모델
  - width : 넓이, height : 높이
    - px, %, em등 모두 사용 가능
    - vw, vh 윈도우창 전체를 기준으로 크기를 줄 수 있다
    - vmax, vmin : 현재 창의(윈도우 전체 크기가 아님) %를 기준으로 줄 수 있음
  - line-height : 텍스트 위치를 조절할 수 있음
    - 텍스트가 한줄인 경우 height과 line-height을 똑같이 맞춰주면 세로 방향에서 가운데로 정렬한 것과 같은 모습이 된다
  - max-width, max-height : 최대 높이, 넓이
  - min-width, min-height : 최소 높이, 넓이
  - margin : 바깥쪽에 범위
  - padding : 안쪽의 범위
    - 특정 방향에만 줄때는 padding -left와 같이 사용한다
  - border : 테두리를 줄 수 있음
  - box-sizing
    - content-box : padding과 border를 제외한 공간을 width로 사용한다
    - border-box : padding과 border를 포함한 공간을 width로 사용한다
  - border-radius : 코너를 둥글게 만들 수 있다
  - overflow : 부모 요소보다 높이나 너비값이 큰 자식 요소를 나타내는 방법을 정의
    - overflow-x, overflow-y 속성을 이용해서 x,y축의 값을 따로 줄 수도 있음
  - box-shadow : 박스 요소에 그림자를 줄 수 있다
    - inset, offset-x, offset-y, blur-radius, spread-radius, color

###### [박스 모델](#박스-모델)
###### [Top](#top)

<br/>
<br/>

# 배경 꾸미기
  - background-image :  어떤 이미지를 사용할지
  - background-repeat : 그 이미지를 어떻게 반복할지
  - background-position : 그 이미지 위치 조정
  - background-size : 이미지 사이즈
  - background : 배경에 그라데이션 넣을 수 있음

###### [배경 꾸미기](#배경-꾸미기)
###### [Top](#top)

<br/>
<br/>

# 포지셔닝
  - position  : 요소들이 화면에 어떻게 배치될지를 지정
    - static : 기본값으로, 전적으로 페이지의 흐름을 따르며 top, bottom, left, right, z-index 속성의 영향을 받지 않는다
    - relative : 원래 위치를 기준으로 top~right 속성값이 적용되도록 합니다. 요소의 위치는 이동하지만 요소가 차지하는 공백의 위치는 유지된다
    - absolute : static이 아닌 첫 부모 요소를 기준으로 top~right을 사용하여 위치를 조정할 수 있다. 요소는 페이지의 문서 흐름에서 벗어나, 자리를 차지하지 않게 된다
    - fixed : 부모 요소가 아닌 viewport를 기준으로 위치를 지정한다. 스크롤에 영향을 받지 않는다
    - sticky : 요소가 스크롤로 이동할 수 있는 공간을 top~right 속성으로 제한할 수 있다
  - z-index : z값을 바꿀 수 있다

###### [포지셔닝](#포지셔닝)
###### [Top](#top)

<br/>
<br/>

# 반응
  - cursor : 마우스를 올렸을때의 반응을 바꿔줌

###### [반응](#반응)
###### [Top](#top)

<br/>
<br/>

# 요소들을 감추는 방법들
  - opacity : 투명 하게만 만들어줌, 기능적으로는 그대로
  - visibility
    - visible
    - hidden : 투명하게 되고, 마우스 오버 효과나 포커스, 클릭 등도 무효하게 된다. 자리는 차지하게 된다
  - display
    - inline-block
    - none :  투명하게 되고, 마우스 오버 효과나 포커스, 클릭 등도 무효하게 되고 자리도 차지하지 않게 된다

###### [요소들을 감추는 방법들](#요소들을-감추는-방법들)
###### [Top](#top)

<br/>
<br/>

# Flex레이아웃
  - display
    - flex : 플렉스 방식으로 자식 요소들을 배치하게됨
    - inline-flex : 그 칸을 전부 차지 하지 않고, 아래 있는 것이 그 옆으로 옴
  - flex-direction : flex의 축을 변경함
    - row
    - column
    - row-reverse
    - column-reverse
  - justify-content : 어떤 방법으로 flex된 것들을 정렬 할지
    - flex-start
    - center
    - flex-end
    - space-between
    - space-around
    - space-evenly
  - flex-wrap : 그 공간안에서 wrap을 해줌
  - align-items : item 끼리의 수직축 방향을 결정
    - stretch
    - flex-start
    - center
    - flex-end
  - align-content : content전체의 수직축 방향을 결정
  - gap : 안에 있는 item을 띄워 준다

  - flex컨테이너 안 아이템의 속성들
    - flex-basis : 메인 축상의 길이로, 컨테이너의 flex-direction 값에 따라 너비 또는 높이값으로 작용한다. 기본값은 auto이다
    - flex-grow : 빈 공간을 채울지 여부, 그리고 채울 시 다른 아이템들의 동 속성값에 비례해서 공백을 나눠갖는다. 기본값은 0 이다
      - flex안에 들어있는 값들이 grow의 비율대로 가져가게 된다
    - flex-shrink : 전체 공간이 부족할 때, 해당 아이템의 길이가 컨텐츠의 너비 또는 flex-basis로 지정한 값보다 작아질 수 있을지를 지정한다. 기본값은 1이며, 증가할수록 길이가 많이 줄어든다. 만약 0이라면 공간을 나눠주지 않겠다는 의미

###### [Flex레이아웃](#flex레이아웃)
###### [Top](#top)

<br/>
<br/>
