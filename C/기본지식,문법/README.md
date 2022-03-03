C에 관한 강의 하나를 쭉 보면서 기록을 남긴다..(상세하게는 나중에 더 공부하도록 하고, 우선은 C는 이런거구나..라는 느낌으로 공부 시작)

<br/>

##### C의 역사
  - C89 / ANSI-C
  - C99
  - C11 및 그 이후
  - C18 -> C11의 결함만을 수정

<br/>

##### C는 언매니지드 언어(매니지드 언어에서 얻는것)
  - 메모리 동작원리
  - CPU 동작원리
  - 컴퓨터처럼 생각하는 방법
  - 매니지드 언어에서 지원하는 모든 마법같은 기능들의 동작원리

<br/>
<br/>

## <C89 / ANSI-C>
  - 1989년에 ANSI에 의해 채택된 첫 번째 C표준
  - 실행 파일이 생기는 과정 :  https://reakwon.tistory.com/52 
  - #include
    - 다른 파일에 구현된 함수나 변수를 사용 할 수 있게 해줌
    - 전처리기(preprocessor)
      - 컴파일을 하기 전에 텍스트를 ‘복붙’해주는 일을 함
  - <stdio.h>
    - 실제 디스크 상에 존재하는 파일 이름
    - 헤더 파일
    - C표준 라이브러리중 일부
    - libc에서 표준 입출력을 담당
    - 스트림 입출력에 관련된 함수들을 포함
    - C#의 System네임스페이스와 비슷한 역할
  - #include <stdio.h> == #include “stdio.h”
    - <stdio.h>에 있는 텍스트 내용을 복사해서 가져옴
    - <stdio.h> : 컴파일러가 제공하는 시스템 헤더 파일 인클루드
    - “stdio.h” : 개발자가 구현한 헤더 파일 인클루드
    - 파일을 컴파일 할때 <stdio.h>안에 있는 다른 함수들도 같이 컴파일
  - int main(void)
    - 진입점
    - void
      - 다른 언어와 달리 void 를 생략한다고 매개 변수가 없다는 것이 아님, 매개 변수가 있지만 몇개 들어가 있는지 모르는 상황
      - 따라서, 언제나 void를 넣는 습관을 기르자

<br/>

~~~
cmd에서 실행(clang 컴파일러를 사용 했을시)
clang -std=c89 -W -Wall -pedantic-errors main.c
clang -std=c89 -W -Wall -pedantic-errors -E main.c //전처리 단계만 보여줌
clang -std=c89 -W -Wall -pedantic-errors -E adder.c > adder.pre //파일로 저장
clang -std=c89 -W -Wall -pedantic-errors -S main.c //컴파일단계까지 보여줌
//여기서 부터 어셈블리어가 나온다면, 어셈블리는 기계어와 1:1 대응이기 때문에, 그 플랫폼 에서만 돌게 된다.
clang -std=c89 -W -Wall -pedantic-errors -c main.c //어셈블리단계까지 보여줌
//커맨드라인컴파일러 / c표준 / 뒤에는 옵션
a.exe //일반적으로 윈도우 콘솔에서의 실행파일
//echo %errorlevel%  //return시 나오는 숫자
~~~

<br/>

##### 라이브러리
  - 여러 함수등을 기계어로 변환 후 파일 하나로 저장해 놓은것
  - 나중에 다른 .c파일에서 기능이 필요할때 불러와 씀
  - 정적 라이브러리
    - 라이브러리 안에 있는 기계어를 최종 실행파일에 가져다 복사함
  - 동적 라이브러리( .dll)
    - 실행 파일에는 구멍이 있고, 실행파일을 실행할 때 실제로 링킹이 일어남
    - 여러 실행파일이 동일한 라이브러리를 공유할 수 있음
    - 여러 실행파일이 이름은 같지만 버전이 다른 동적 라이브러리를 사용한다면 DLL 지옥을 맞볼 수 있다.

<br/>

##### 기본자료형
  - 부호있는 수의 최대값보다 더 큰수를 넣을때 뒤에 'U'자 붙여준다. -> 접미사
  - 데스크탑에서는 비슷하게 사용 가능
    - long(32비트)만 64비트가 아니라서 ㅡ.ㅡ
  - 여기저기 사용하려면
    - float,double을 사용하는데 주의해야 함(IEEE 754를 지원 안할 수도 있음)
  - 음수는 1의 보수를 생각해서 값이 -1이 작음
  - unsigned 와 signed -> 기본이 signed
    - 앞에 ‘unsigned’를 붙여 주기(EX : unsigned  int)
    - 예외 : char -> 컴파일러에 따라 다르다..ㅡ.ㅡ
  - Char
    - 최소8비트인 정수
    - printf("%d", CHAR_BIT); -> char의 비트수
      - #include <limits.h> -> 이걸 써야함
    - CHAR_BIT는 가장작은 단위의 메모리가 된다. -> BIT단위의 표준이 되어 버림
    - unsigned char(0~255), char(0~127), signed char(-127~127)
  - Short
    - 최소16비트인 정수(Char이상)
  - int
    - 최소16비트인 정수(Short이상)(일반적으로 32비트 사용)
    - CPU의 산술논리장치의 기본 데이터
    - 딱맞는 크기를 '워드'라고함
  - long
    - 최소32비트인 정수(일반적으로 int와 같음)(int 이상)
    - 뒤에 접미사 l(영어 엘) 넣기
  - float
    - 최소8비트인 부동소수(Char 이상)
    - 표준에 상관없이 안전하게 써도 되는 크기 32비트 -> 일반적 사용
    - 부호없음
    - 헤더파일 float.h
    - 뒤에 접미사 F
    - 접미사U는 없음 -> 부호X
  - double
    - float이상
    - 표준에 상관없이 안전하게 써도 되는 크기 64비트 -> 일반적 사용
    - CPU가 계산에 사용하는 기본크기
    - 헤더파일 float.h
    - 접미사U는 없음 -> 부호X
  - long double
    - 64비트 이상
    - 헤더파일 float.h
    - 접미사U는 없음 -> 부호X
  - bool은 없음 -> 정수형으로 대체 가능
    - 거짓 -> 0 반환
    - 참 -> 1 반환


<br/>

  - 출력할때

~~~c
printf("int_value : %d\n", int_value);
printf("long_value : %d\n", long_value);
printf("float_value : %f\n", float_value);
printf("char_value : %c\n", char_value);
~~~

















