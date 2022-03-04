C에 관한 강의 하나를 쭉 보면서 기록을 남긴다..(상세하게는 나중에 더 공부하도록 하고, 우선은 C는 이런거구나..라는 느낌으로 공부 시작), 활용하려면 나중에 다시 공부하자..

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

<br/>

##### 열거형
  - enum <enum변수명> <사용할변수>

~~~c
enum E_food
{
	E_food_Apple,
	E_food_Grape,
	E_food_Orange
};
enum E_name
{
	E_name_KIKI,
	E_name_MIMI,
	E_name_DADA
};

int main()
{
	enum E_food food = E_food_Grape;
	enum E_name name = food;

	printf("%d", name);

	return 0;
}

출력
1
~~~

  - C#처럼 방지하는 부분이 안되니, 열거형문구를 앞에 써서 실수 방지하기
  - int number = E_food_Apple -> 이런것도 가능 / 열거형은 단지 정수형일 뿐

<br/>

##### 올바른 변수 선언 위치
  - 출력하기 전에 변수를 전부 지정 해야함
  - 값을 안넣고 변수라도 지정 하고 나중에 대입하는것은 가능 

<br/>

##### sizeof()
  - 피연산자의 크기를 바이트로 반환해줌
  - 함수X, 연산자이기 때문에 컴파일 중에 평가 된다
  - char형을 넣으면 반드시 1이 반환
    - 바이트는 char가 기준이됨
  - 부호 없는 정수형의 상수로 size_t형을 반환함

~~~c
#include <stdio.h>

int main()
{
	char ch = 'a';
	int num = 20;
	char char_array[20];

	size_t size_char = sizeof(ch);
	size_t size_int = sizeof(num);
	size_t size_float = sizeof(float);
	size_t size_array = sizeof(char_array);

	printf("size_char : %d\nsize_int : %d\nsize_float : %d\nsize_array : %d", size_char, size_int, size_float, size_array);

	return 0;
}

출력
size_char : 1
size_int : 4
size_float : 4
size_array : 20
~~~

  - size_t 부호없는 정수형 but 실제 데이터형X -> 어떤것의 크기를 나타내기 위해
  - \_t는 typedef를 했다는 힌트
  - size_t 를 typedef 했다는것
  - ex)반복문, 배열에 이용
  - signed int -1과 unsigned int 4,294,967,295는 같은 비트패턴

<br/>

##### 배열
  - C# -> char[ ] data /  C -> char data[ ]  => C#과 C는 조금 문법이 조금 다름

<br/>

##### 포인터
  - 주소연산자 : &
  - 메모리 주소출력기호 : %p

~~~c
const unsiged char result = num1 & num2; /* 비트 연산자*/
printf("%p\n", &num); /*주소연산자*/
~~~

<br/>

##### 구조체와 공용체 맴버 접근자
  - "."
    - C#에서는 Class가 있었으니 멤버변수를 호출하는 것이였지만 C에서는 다름
    - 구조체와 공용체의 멤버변수에 접근시 사용
  - "->"
    - 2개의 연산자 “ . ”와 “ * ”를 합친것
    - 구조체와 공용체의 멤버변수에 접근시 사용

<br/>

##### 조건문 if
  - 조건이 0이면 false, 1이면 true가 됨
  - 일반 단일 숫자를 넣어도 true, false가 판단됨

<br/>

##### switch
  - C는 정수형만 변수 대입 가능(int, char, enum)
  - case안에 break를 빼먹는다면, switch문을 곧바로 탈출하지 않고 그 아래에 있는 코드를 계속 실행 -> fall-through라고 함
의도를 가지고 ‘break’를 사용하지 않은 경우 "intentaional fallthrough" 주석을 달아 주자

<br/>

##### 함수
  - 접근 제어자 없음(public, private)
  - 함수 오버로딩 없음
  - ANSI C에서 함수가 등장하기 전에 그것을 호출하면 컴파일러가 반환형은 int라고 가정하고, 나중에 컴파일러가 int가 아닌 다른것을 반환하는 함수를 찾으면 컴파일 오류를 뱉음
    - C는 맨 위쪽에 함수 호출전에 전부 선언만 해주어도 실행은 잘 진행된다

~~~c
int main(void)
{
	Gedata();
	return 0;
}
void Gedata(void) /*컴파일 오류*/
{
	printf("aaaa");
}
~~~

<br/>

~~~c
void Gedata(void) /*잘 진행됨*/
{
	printf("aaaa);
}

int main(void)
{
	Gedata();
	return 0;
}

~~~

<br/>

~~~c
void Gedata(void)

int main(void)
{
	Gedata();
	return 0;
}

void Gedata(void)  /*잘 진행됨*/
{
	printf("aaaa);
}
~~~

  - 함수의 매개변수 평가순서는 명시되어 있지 않음. 컴파일러 마음 -> add(), subtract()가 있다면 무엇이 먼저 실행될지는 알 수 없는것
    - 한 줄에 있는 함수 호출 순서에 의존해서 코드를 작성하지 말 것
      - ex) printf("%d, $d\n", add(num1, num2), subtract(num1, num2)); => add() 가 먼저 실행 될지, subtract()가 먼저 실행 될지 알 수 없음

<br/>

##### 파일범위
~~~c
#include <stdio.h>

static int s_sum = 1024;

int main(void)
{
	int num1 = 10;

	printf("num : %d\n", num1);

	return 0;
}

/* static int s_sum = 1024는 전역 변수가 됨*/
~~~

<br/>

##### goto
  - goto를 사용하면 중간에 건너 뛸 수 있다..?
  - 아래는 goto를 이용한 반복문
~~~c
#include <stdio.h>

void human(void)
{
infinity:

	printf("나이가 든다\n");
	goto infinity;
}

int main(void)
{
	human();

	return 0;
}
~~~

<br/>

##### 배열
  - C#과 달리 new를 사용할 필요 없음
    - int nums[5];
    - char name[10];
  - 배열의 요소개수 구하기
    - 	const size_t num_vals = sizeof(value) / sizeof(value[0]);
  - 배열의 모든 값을 0으로 초기화 하기
    - int nums[10] = {o, } => 쉼표를 찍으면 쉼표 뒤가 전부 0으로 초기화됨	
  - 다 차원 배열
    - int nums1[2][3];

<br/>






