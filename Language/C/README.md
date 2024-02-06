<br/>

###### Top

  - [C의 역사](#c의-역사)
  - [C는 언매니지드 언어(매니지드 언어에서 얻는것)](#c는-언매니지드-언어매니지드-언어에서-얻는것)
  - [<C89 / ANSI-C>](#c89--ansi-c)
    - #include
    - <stdio.h>
    - “stdio.h”
    - int main(void)
  - [cmd에서 실행](#cmd에서-실행)
    - clang
    - 전처리, 컴파일, 어셈블리
  - [라이브러리](#라이브러리)
    - 정적 라이브러리
    - 동적 라이브러리
  - [기본자료형](#기본자료형)
    - Long, float, double, Char, Short, int, long, float, double, long double
  - [열거형](#열거형)
    - enum <enum변수명> <사용할변수>
  - [sizeof()](#sizeof)
    - size_t
  - [조건문 if](#조건문-if)
  - [switch](#switch)
  - [함수](#함수)
  - [goto](#goto)
  - [배열](#배열)
  - [스택 메모리](#스택-메모리)
  - [extern,static](#externstatic)
  - [인클루드 가드(guard)](#인클루드-가드guard)
  - [변수 정리](#변수-정리)
    - 지역변수
    - 정적 지역변수
    - 전역변수
    - 정적 전역변수
    - 전역 함수
    - 정적 전역 함수
  - [포인터](#포인터)
  - [문자열 초기화](#문자열-초기화)
    - char day[]
    - char* array
  - [C스타일 문자열](#c스타일-문자열)
    - \0
  - [문자열 토큰화](#문자열-토큰화)
  - [printf포맷팅](#printf포맷팅)
  - [출력](#출력)
    - printf()
    - fprintf
    - sprint
    - puts
    - putchar
  - [입력](#입력)
    - getchar
    - gets
    - fgets
    - scanf
  - [이진데이터](#이진데이터)
  - [파일 open,close](#파일-openclose)
  - [파일 탐색](#파일-탐색)
    - Rewind
    - Fseek
    - ftell
  - [구조체](#구조체)
  - [동적메모리](#동적메모리)
    - Malloc
    - free
  - [함수 포인터](#함수-포인터)
  - [가변 인자 함수](#가변-인자-함수)
  - [register 키워드](#register-키워드)
  - [자료구조](#자료구조)
  - [라이브러리](#라이브러리)
  - [C99](#99)
  - [추천사이트](#추천사이트)

<br/>

***
***

<br/>

## C의 역사
  - C89 / ANSI-C
  - C99
  - C11 및 그 이후
  - C18 -> C11의 결함만을 수정

###### [Top](#top)

<br/>

***

<br/>

## C는 언매니지드 언어(매니지드 언어에서 얻는것)
  - 메모리 동작원리
  - CPU 동작원리
  - 컴퓨터처럼 생각하는 방법
  - 매니지드 언어에서 지원하는 모든 마법같은 기능들의 동작원리

###### [Top](#top)

<br/>

***

<br/>

## <C89 / ANSI-C>
  - 1989년에 ANSI에 의해 채택된 첫 번째 C표준
  - 실행 파일이 생기는 과정 :  https://reakwon.tistory.com/52
    - 전처리기 -> 컴파일러 -> 어셈블러 -> 링커
      - 전처리기 : 주석제거, #include한것들, #define한것을 치환
      - 컴파일러 : 어셈블리어로 변환(고수준->저수준), 어셈블리어 파일 생성, 언어의 문법 검사가 이루어짐, Static한 영역들의 메모리 할당을 수행
      - 어셈블러 : 기계어로 바꿔줌(오브젝트 파일 생성)
      - 링커 : 여러개의 오브젝트 파일을 하나로 합치거나 라이브러리를 합쳐줌
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

###### [Top](#top)

<br/>

***

<br/>

## cmd에서 실행
~~~c
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

###### [Top](#top)

<br/>

***

<br/>

## 라이브러리
  - 여러 함수등을 기계어로 변환 후 파일 하나로 저장해 놓은것
  - 나중에 다른 .c파일에서 기능이 필요할때 불러와 씀
  - 정적 라이브러리
    - 라이브러리 안에 있는 기계어를 최종 실행파일에 가져다 복사함
  - 동적 라이브러리( .dll)
    - 실행 파일에는 구멍이 있고, 실행파일을 실행할 때 실제로 링킹이 일어남
    - 여러 실행파일이 동일한 라이브러리를 공유할 수 있음
    - 여러 실행파일이 이름은 같지만 버전이 다른 동적 라이브러리를 사용한다면 DLL 지옥을 맞볼 수 있다.

###### [Top](#top)

<br/>

***

<br/>

## 기본자료형
  - 부호있는 수의 최대값보다 더 큰수를 넣을때 뒤에 'U'자 붙여준다. -> 접미사
  - 데스크탑에서는 비슷하게 사용 가능
    - long(32비트)만 64비트가 아니라서 ㅡ.ㅡ
  - 여기저기 사용하려면
    - float,double을 사용하는데 주의해야 함(IEEE 754를 지원 안할 수도 있음)
  - 음수는 1의 보수를 생각해서 값이 -1이 작음
  - unsigned 와 signed -> 기본이 signed
    - 앞에 ‘unsigned’를 붙여 주기(EX : unsigned  int)
    - 예외 : char -> 컴파일러에 따라 다르다..ㅡ.ㅡ 0~127숫자 범위 까지만 안전하게 사용 가능하고 그 이상부터는 앞에 unsigned, signed 붙여주기
  - Char
    - 최소8비트인 정수
    - 어떤 컴파일러를 사용하는지에 따라 char가 8비트가 아닐수도 있다. 임베디드 분야에서는 char가 8비트가 아닐수도 있으며 최소 8비트의 조건만 맞으면 c의 표준에 맞게 된다
      - 컴파일러에 따라 char가 8비트면 그것이 1바이트, 16비트면 그것이 1바이트가 된다
    - printf("%d", CHAR_BIT); -> char의 비트수
      - #include <limits.h> -> 이걸 써야함
    - CHAR_BIT는 가장작은 단위의 메모리가 된다. -> 바이트 단위의 표준이 되어 버림
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

###### [Top](#top)

<br/>

***

<br/>

## 열거형
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

###### [Top](#top)

<br/>

***

<br/>

## sizeof()
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

###### [Top](#top)

<br/>

***

<br/>

## 조건문 if
  - 조건이 0이면 false, 1이면 true가 됨
  - 일반 단일 숫자를 넣어도 true, false가 판단됨

###### [Top](#top)

<br/>

***

<br/>

## switch
  - C는 정수형만 변수 대입 가능(int, char, enum)
  - case안에 break를 빼먹는다면, switch문을 곧바로 탈출하지 않고 그 아래에 있는 코드를 계속 실행 -> fall-through라고 함
의도를 가지고 ‘break’를 사용하지 않은 경우 "intentaional fallthrough" 주석을 달아 주자

###### [Top](#top)

<br/>

***

<br/>

## 함수
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
      - ex) printf("%d, %d\n", add(num1, num2), subtract(num1, num2)); => add() 가 먼저 실행 될지, subtract()가 먼저 실행 될지 알 수 없음

###### [Top](#top)

<br/>

***

<br/>

## goto
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

###### [Top](#top)

<br/>

***

<br/>

## 배열
  - C#과 달리 new를 사용할 필요 없음
  - C# -> char[ ] data /  C -> char data[ ]  => C#과 C는 조금 문법이 조금 다름
    - int nums[5];
    - char name[10];
  - 배열의 요소개수 구하기
    - 	const size_t num_vals = sizeof(value) / sizeof(value[0]);
  - 배열의 모든 값을 0으로 초기화 하기
    - int nums[10] = {o, } => 쉼표를 찍으면 쉼표 뒤가 전부 0으로 초기화됨	
  - 다 차원 배열
    - int nums1[2][3];

###### [Top](#top)

<br/>

***

<br/>

## 스택 메모리
  - 자료를 쌓고, 뺄때는 역순으로 뺄 수 있는것
  - 각 함수에서 사용하는 지역 변수 등을 임시적으로 저장하는 공간
  - 스택 메모리는 프로그램 빌드 시에 결정
  - 기본자료형 변수를 new없이 사용 할 수 있웄던 이유는 스택메모리에 할당했기때문
  - New는 힙에 저장
  - 스택은 차곡차곡, 힙은 구멍이 뚫려 있음(찾아가면서 메모리 할당해줌)

###### [Top](#top)

<br/>

***

<br/>

## extern,static
  - .C파일은 따로 따로 컴파일 하기 때문에, 다른 .C파일에서 정의된 전역 변수를 다른 .C으로 호출할수X
  - extern을 사용
  - 함수는 선언하면 자동으로 extern이기 때문에 따로 쓰지 않음
  - 하지만 static을 통해서 마음대로 쓰는 것을 막을 수 있다

<br/>

~~~c
#include <stdio.h>
int count = 5;
~~~

  - 이렇게 다른 .c파일에 있는 변수를 불러오기 위해서는 extern을 사용하여 불러 올 수 있음. 함수 같은 경우는 자동으로 extern이 되기 때문에 써주지 않아도 됨.

~~~c
#include <stdio.h>

int main()
{
	extern int count;
	printf("%d", count);
}
~~~

<br/>

~~~c
#include <stdio.h>
static int count = 5;
~~~

  - static을 쓰게 되면 현재 .c파일에서만 사용이 가능하게 됨.(함수도 똑같음!)

~~~c
#include <stdio.h>

int main()
{
	extern int count;
	printf("%d", count); //  컴파일 
}
~~~

###### [Top](#top)

<br/>

***

<br/>

## 인클루드 가드(guard)
  - 헤더 안에 헤더파일을 인클루드가 필요할시 사용 필수 -> 그렇치 않으면 , 헤더안에 헤더파일이 무수히 실행 및 에러
  - 전처리기 지시문은 코드를 컴파일하기 전에 전처리기가 처리하는데 이때 어떤 상수를 정의 하고 컴파일러에게 조건적으로 코드를 컴파일 하라고 지시
  - ex) 만얀 ㅇㅇ가 정의되지 않았다면 ㅇㅇ를 정의 할것, 그리고 이 코드를 원래대로 파함 시킬것
  
<img src="https://user-images.githubusercontent.com/39178978/175873674-fa974d28-6206-4991-bd0c-a72d14f5932b.png">
  
###### [Top](#top)

<br/>

***

<br/>

## 변수 정리
  - 지역변수(그냥 일반적으로 함수안에서 선언되는 변수)
  - 정적 지역변수(함수 안에서 static되어 있는 변수) -> static을 쓰면 개념상 전역 변수, 허나 그 함수 안에서만 접근 가능, 함수가 반환돼도 여전히 값은 저장되어 있음
  - 전역변수(맨위쪽에 존재하게 되며, 그렇기 때문에 어디서나 접근가능한 변수)
  - 정적 전역변수(맨위쪽에 존재하게 되며, static되어 있음. 이 파일안에서만 어디서든 접근 가능하게 됨)
  - 전역 함수(항상 extern이 되어 있음)
  - 정적 전역 함수(static을 붙임으로써 그 파일 안에서만 쓰게됨)
  - 함수도 앞에 static을 넣으면 외부로부터의 접근을 막을 수 있다.

###### [Top](#top)

<br/>

***

<br/>

## 포인터
  - 메모리 주소를 저장하는 변수
  - 포인터 변수를 선언하려면 자료형 뒤에 별표 * 를 붙이면 됨
  - ex) int*, char*, float*

~~~c
#include <stdio.h>

int main(void)
{
	int num = 3;
	int* num_p = &num;
}
~~~

<br/>

  - 포인터도 변수이기 때문에 함수 반환값으로 사용 가능
    - 지역 변수의 주소를 반환 하는 것은 매우 위험함. 함수 호출이 끝나면 그 스택 프레임이 사라짐

~~~c
int* printer_somthing(const int op1, const int op2);
~~~

<br/>

  - NULL
    - 아무것도 가리키지 않는 포인터 NULL = ( ( void* ) 0 )
    - 함수의 매개변수가 널 포인터를 혀용한다면, 매개변수 이름 끝에 ‘_or_null’을 붙인다

<br/>

  - 주소비교, 값비교
~~~c
void do_something(int* num1, int* num2)
{
	if (num1 == num2)
	{

	}
}
~~~

<br/>

~~~c
void do_something(int* num1, int* num2)
{
	if (*num1 == *num2)
	{

	}
}
~~~

<br/>

  - 포인터의 크기
    - 주소는 보통 cpu가 한번에 처리할 수 있는 크기(= 워드)
    - 32비트는 4바이트
    - 64비트는 8바이트

<br/>

  - 배열과 포인터
  - 일반 배열에 메모리 주소 저장 불가능, 메모리 주소 저장하려면 포인터 배열을 만들어야함

~~~c
int num[6] = { 1,2,3,4,5,6 };
int* ptr = NULL;

ptr = nums; //컴파일 됨
ptr = nums[0] //컴파일 오류
~~~

<br/>

  - 포인터에 정수를 더하면 각 데이터의 기본 크기만큼 넘어가기(ex. 현재는 int이니 4바이트 넘어감)
    - 만약 한바이트만 옮기고 싶다면?
      - (char*)int_ptr + 1 -> 캐스팅을 char로 하면됨
    - 주소값의 사칙연산
      - 주소 값의 뺄셈은 두 주소 사이에 들어갈 수 있는 데이터 수
  - nums[1] == ptr[1] == *(ptr + 1)

~~~c
int* ptr1 = nums + 3; //ptr1은 num3[3]을 가리킴
int* ptr2 = &nums[3]; //ptr2은 num3[3]을 가리킴
~~~

<br/>

  - 포인터 배열(포인터 하나에 배열의 첫재 인덱스의 주소가 들어감)

~~~c
int nums1[1] = { 1 };
int nums2[3] = { 1,2,3 };
int nums3[2] = { 1,2 };

int* num_pointer_array[3];

num_pointer_array[0] = nums1;
num_pointer_array[1] = nums2;
num_pointer_array[2] = nums3;
~~~

<br/>

  - 포인터 배열에 접근

<img src="https://user-images.githubusercontent.com/39178978/175879270-6b649559-233c-4e68-b8ef-2fd82f15c2bf.png">


<br/>

  - const 와 포인터
    - 주소를 보호
      - int* const p = &num;
    - 값을 보호
      - const int* p = &num1;
      - int const * p = &num1;
    - 두개다 보호
      - const int* const p = &num;

<br/>

  - 연산자 우선순위 및 결합 법칙
    - 후위 연산
    - 전위 연산
    - ex) int num = *p++;
    - 추후에 정확히 정리하기

###### [Top](#top)

<br/>

***

<br/>

## 문자열 초기화
  - char day[] = "가나다라마바사";
    - 데이터섹션 -> 스택으로 복사해서 들어감
    - 값을 변경 가능
    - 값 추가 불가
  - char* array = "가나다라마바사";
    - 데이터섹션에 있는 주소만을 가져옴
    - 값을 변경하면 ‘결과가 정의 되지 않음’
    - 값추가 가능

###### [Top](#top)

<br/>

***

<br/>

## C스타일 문자열
  - 문자열의 마지막은 언제나 ‘\0’이 들어간다
  - 문자열의 길이는 항상 +1을 해서 계산하면 된다
  - 배열 낱개로 넣으면 뒤에 \0을 넣어 주지 않는다. 그 상태에서 string으로 쓴다고 캐스팅을 하면 컴파일러는 저 뒤에 있는 \0을 찾아서 갯수를 반환 한다
    - ex) char str[] = { 'a', 'b', 'c', 'd' }
  - #include <string.h> -> strlen( ) 함수로 문자열 갯수 파악 가능

###### [Top](#top)

<br/>

***

<br/>

## 문자열 토큰화
  - strlen( )
  - strcmp( ) / strncmp( )
  - strcpy( ) / strncpy( )
  - strstr( )
  - strcat( ) / strncat( )
  - strtok( )
  - https://en.cppreference.com/w/c/string/byte

###### [Top](#top)

<br/>

***

<br/>

## printf포맷팅
  - %출력은 %%두개 쓰기

<img src="https://user-images.githubusercontent.com/39178978/175885435-2e228cca-2aee-4eab-b9af-d76650dfa1f1.png">

  - 정밀도
    - 최소너비.소수점 아랫자리 수
    - 원래 숫자너비 보다 최소너비가 크면 공백으로 채움
    - 원래 숫자아랫자리 보다 아랫자리 수가 크면 0으로 채움
    - 기본 소수점 아랫자리 수 : 6
    - printf(“%3.3f\n”, 3.14f) -> 3.140
    - printf(“%6.3f\n”, 3.14f) -> 공백3.140
    - 최소너비.최대너비
    - 출력할 문자너비가 최소너비보다 작으면 왼쪽을 공백으로 채움
    - 출력할 문자열의 길이가 최대 너비보다 크면 자름
    - 원래 숫자너비 보다 최소너비가 크면 공백으로 채움
    - 원래 숫자아랫자리 보다 아랫자리 수가 크면 0으로 채움
    - 기본 소수점 아랫자리 수 : 6

###### [Top](#top)

<br/>

***

<br/>

## 출력
  - printf()
  - fprintf( stdout, “hello” ) / fprintf( stderr, “hello” )
  - sprintf( char* buffer, const char* format, ... )
    - 문자열 buffer -1만큼 나오고 맨 뒤에 \0을 넣어줌
  - puts( c ) = fputs(str, stdout) -> 문자열 출력
    - int puts(const char* str)
      - 문자열을 stdout에 출력
      - 마지막에 줄도 바꿔줌 '\n'
      - fputs(str, stdout)와 매우 비슷
    - int fputs(const char* str, FILE* stream)
  - putchar(c)  = fputc(ch, stdout) -> 문자 하나 출력
    - int putchar(int ch)
      - 문자를 stdout에 출력
      - fputc(ch, stdout)하고 같음
    - int fputc(int ch, FILE* stream)

###### [Top](#top)

<br/>

***

<br/>

## 입력
  - getchar( ) -> 한 글자씩 읽기
    - 순서
      - getchar()함수가 입력 받기 전까지 대기함
      - 키보드로 입력을 주고 엔터키를 누름
      - 버퍼로 한 글자를 읽어옴
      - 읽은 문자를 출력
    - 성공하면 문자를, 실패하면 EOF를 반환(EOF = ctrl + z)
      - 반환형은 int
  - gets( ) -> 한 줄씩 읽기(절대 쓰면 안될것! 안전하지 않음!)
    - char* gets(char* str)
    - stdin에서 새 줄 문자('\n')또는 EOF를 만날 때까지 계속 문자들을 읽어서 str배열에 저장
    - 마지막 문자 다음에 널문자('\0')도 넣어줌
  - fgets( ) -> gets보다 fgets사용 할것
    - char* fgets(char* str, int count, FILE* stream)
    - 최대 count - 1개의 문자열을 읽어서 str에 저장
    - 새 줄을 만나지 않아도 이 함수가 반환될 수 있음
    - str에 새 줄 문자 넣어줌
    - 입력한 문자열의 마지막에 개행('\n')도 항상 넣어줌
    - 키보드 입력을 읽어오려면 stream이 아니라 stdin을 넣어주면 됨
  - scanf( ) -> 한 데이터씩 읽기(어떤 포맷을 읽을지, 얼만큼 읽을지 원하는 것을 지정해서 그 데이터를 읽는것)
    - 공백문자를 사용해서 단어를 분리하기 때문에, 중간에 공백이 30개 있어도 다시 읽을때 다 없어져 버림. 유리하게 공백문자를 표현하기 위해서는 %c로 읽어 드리면 된다.
    - 몇개의 데이터를 읽었는지 반환함
    - 숫자를 읽어 올때 123p이면 123만 출력
    - 첫 데이터를 읽기 전에 실패했다면 EOF를 반환
    - int scanf(const char* format, ...)
      - stdin으로부터 읽음
    - int fscanf(FILE* stream, const char* format, ...)
      - 파일 스트림으로부터 읽음
    - int sscanf(const char* buffer, const char* format, ...)
      - c 스타일 문자열로부터 읽음

<br/>

<img src="https://user-images.githubusercontent.com/39178978/176063777-13ddb923-191f-4c32-aa4a-21391515103a.png">

###### [Top](#top)

<br/>

***

<br/>
    
## 이진데이터
  - 한 블록씩 읽기(이진 데이터)
    - size_t fread(void* buffer, size_f size, size_t count, FILE* stream)
      - EOF만나면 멈춤 -> count보다 적은 수를 읽을 수도 있다는 것
      - 실제로 읽은 개수를 반환
  - 한 블록씩 쓰기(이진 데이터)
    - size_t fwrite(const void* buffer, size_f size, size_f count, FILE* stream)
    
###### [Top](#top)

<br/>

***

<br/> 

## 파일 open,close

~~~c
FILE* steam;
stream = fopen( "파일이름", "모드")
~~~

<img src="https://user-images.githubusercontent.com/39178978/176065133-413c9ad6-39b5-46a7-abb5-3a36c25fd27e.png">

 - rb,wb등 앞에 b를 붙이면 이진 모드로 여는 것

<br/>

  - 파일닫기
    - int fclose(FILE* stream)
    - 파일을 닫음
    - 성공하면0, 실패하면 EOF를 반환
    - 버퍼링 중인 스트림의 작동
      - 출력 스트림 : 버퍼에 남아있는 데이터는 파일로 다 보냄
      - 입력 스트림 : 무시됨

###### [Top](#top)

<br/>

***

<br/> 

## 파일 탐색
  - 스트림의 위치를 바꾸고 싶을때 사용!
  - 키보드에서 입력 받는 stdin은 불가능!

<br/>

  - rewind -> 스트림의 처음 위치로 이동
    - void rewind(FILE* stream)
  - fseek -> 스트림의 임의의 위치로 옮기기
    - int fseek(FILE* stream, long offset, int origin)
      - 파일 위치 표시자를 origin으로부터 offset만큼 이동함
      - origin에는 세종류(매크로)가 있음(SEEK_SET : 파일의 시작, SEEK_CUR : 현재파일 위치, SEEK_END : 파일의 끝)
  - ftell -> 스트림의 위치를 알려줌
    - long ftell(FILE* stream)

###### [Top](#top)

<br/>

***

<br/>

## 구조체
  - C에서는 모든 자료가 값형! 물론 주소를 전달하면 참조형이 되겠지!
  - 따라서 구조체안에 데이터도 주소로 접근하지 않으면 데이터 변경이 안됨
  - 매개변수가 많이 들어가야 하는 상황일때 구조체를 쓰면 훨씬 편해 진다
  - 또한, 구조체를 반환하는 함수일 경우에, 구조체를 반환하게 되면 실질적으로 여러개의 값을 반환하는 것과 같다.(c언어를 반환값이 원래 하나!)

<br/>

  - 구조체 선언 및 초기화
    - 데이터 선언시 세미콜론 잊지 말것
~~~c
#include <stdio.h>

struct data
{
	int year;
	int month;
	int day;
};

int main(void)
{
	struct data data;
	data.day = 1;
	data.month = 10;
	data.year = 2022;
}
~~~

<br/>

  - 구초제 접근
    - 접근시에는 . 으로 접근하기
~~~c
#include <stdio.h>

struct data
{
	int year;
	int month;
	int day;
};

int main(void)
{
	struct data data;
	data.day = 1;
	data.month = 10;
	data.year = 2022;

	//구조체 접근
	printf("%d", data.year);
}
~~~

<br/>

  - 값을 바꾸려면 포인터로 전달해 줘야 함
    - (*data).year가가 = (*data).year + 1;
      - ( )를 넣어야 하는 이유는, 연산자 우선순위 때문
      - . 연산자의 우선순위가 1, * 연산자의 우선순위가 2
      - 따라서 괄호가 없다면 *data.year = *(data.year)
    - data -> year = data -> year + 1;
    - data -> year++;

~~~c
#include <stdio.h>

struct data
{
	int year;
	int month;
	int day;
};

void data_increas(struct data* data)
{
	(*data).year = (*data).year + 1;
	data->year = data->year + 1;
}

int main(void)
{
	struct data data;
	data.day = 1;
	data.month = 10;
	data.year = 2022;

	printf("%d\n", data.year);

	data_increas(&data);

	printf("%d", data.year);
}
~~~

<br/>

  - 구조체를 반환하는 함수

~~~c
#include <stdio.h>

struct data
{
	int year;
	int month;
	int day;
};

struct data get_data(void)
{
	struct data data;
	data.day = 1;
	data.month = 10;
	data.year = 2022;

	return data;
}

int main(void)
{
	struct data data1;

	data1 = get_data();
}
~~~

<br/>

  - 구조체 배열

~~~c
#include <stdio.h>

struct data
{
	int year;
	int month;
	int day;
};

int main(void)
{
	struct data data[3];
	data[0].day = 1;
	data[0].month = 10;
	data[0].year = 2022;

	data[1].day = 2;
	data[1].month = 11;
	data[1].year = 2023;

	data[2].day = 3;
	data[2].month = 12;
	data[2].year = 2024;
}
~~~

<br/>

  - 구조체의 요소 크기 확인하기

~~~c
#include <stdio.h>

struct data
{
	int year;
	int month;
	int day;
};

int main(void)
{
	struct data data[3];
	data[0].day = 1;
	data[0].month = 10;
	data[0].year = 2022;

	data[1].day = 2;
	data[1].month = 11;
	data[1].year = 2023;

	data[2].day = 3;
	data[2].month = 12;
	data[2].year = 2024;

	printf("%d", sizeof(data[0]));
}
~~~

<br/>

  - 구조체 요소가 배열일 경우

~~~c
#include <stdio.h>
#include <string.h>

struct name
{
	char name1[10];
};

int main(void)
{
	//구조체 멤버가 배열일 경우 초기화 하는 방법
	char string[] = "qwer";
	struct name name_t;
	strcpy_s(name_t.name1,sizeof(name_t.name1), string);
	printf("%s", name_t.name1);
	return 0;
}
~~~

<br/>

  - typedef 사용법

~~~c
#include <stdio.h>

typedef struct data
{
	int year;
	int month;
	int day;
} data_t;

int main(void)
{
	data_t data[3];
	data[0].day = 1;
	data[0].month = 10;
	data[0].year = 2022;

	data[1].day = 2;
	data[1].month = 11;
	data[1].year = 2023;

	data[2].day = 3;
	data[2].month = 12;
	data[2].year = 2024;

}
~~~

<br/>

  - 구조체 패딩 줄이기
    - 구조체의 경우 구조체 안에 있는 데이터의 전체 합이 총 바이트가 되는데, 일반적으로 4바이트 단위로 컴퓨터가 읽어 오려고 하기 때문에 short같은 2바이트 단위를 쓰고 그 밑에 int인 4바이트를 쓰면 short도 4바이트, int도 4바이트를 차지하게 됨. 따라서 패딩을 줄이기 위해서는 구조체 안에 있는 순서를 바꿔 주면 됨
      - pragma pack 을 사용하면 패딩을 줄일 수 있음 -> 컴파일러가 지원해 주는것
      - assert를 사용해서 크기를확인하는 것이 업계 일반적
    - 바이트 정렬 요구사항 때문에 정확히 바이트가 딱 맞게 재어지지 않는다.!!!
    - 시스템의 워드에서 읽어 오는것이 효율적이기 때문에

###### [Top](#top)

<br/>

***

<br/>

## 동적메모리
  - malloc()
    - 메모리 할당(memory allocation)의 약자
    - size 바이트 만큼의 메모리를 반환해줌
    - void*형으로 메모리 반환
    - 초기화 안해주기 때문에 반환된 메모리에는 쓰레기값이 들어가 있음
  - free() <- malloc()의 짝꿍 함수, 메모리 반납하는 함수
    - #include <stdlib.h>
    - 해제한 메모리를 또 해제하면 데이터가 망가짐!!
    - free( )함수가 몇바이트를 해체하면 되는지 알 수 있는 방법은, malloc( ) 으로 메모리를 할당했을때 앞쪽에 알수 있는 숫자로 표시해 둔다.

<br/>

<img src="https://user-images.githubusercontent.com/39178978/176101259-0d17bc0a-f2ad-426f-baf9-fd429ba77ca4.png">

<br/>

  - calloc()
    - void* calloc(size_t num, size_t size)
    - 메모리를 할당할 때 자료형의 크기와 수를 따로 지정
    - 모든 바이트를 0으로 초기화 해 줌
    - 잘 안씀! -> calloc( ) = malloc( ) + memset( ) 이기때문에 차라리 2개를 조합해서 씀. memset( )을 쓰면 0외의 값으로도 초기화 가능!
    - memset -> nums를 0을 초기화 해주는데,  LENGTH * sizeof(int)길이 만큼 초기화 해줘, 라는 뜻
  - memset()
    - void* memset(void* dest, int ch, size_t count)
    - <string.h>에 있음
    - char로 초기화됨
    - 그 외의 자료형으로 초기화하려면 직접 for 문을 써야함
    - 항상 char로 초기화 되므로 int로 초기화 하고 싶다면 주소를 통한 값에 1000을 더해주는것으로 표현 가능
  - realloc()
    - void* realloc(void* ptr, size_t new_size)
    - 이미 존재하는 메모리의 크기를new_size바이트로 변경
    - 새로운 크기가 허용하는 한 기존 데이터를 그대로 유지
    - 크기가 커져야 하지만, 뒤에 공간이 없으면 아예 뒤쪽으로 공간을 할당함(모두이동)
    - NULL이 반환됐다면 재할당에 실패 했다는것
    - realloc( ) = malloc( ) + memcpy( ) + free( )

###### [Top](#top)

<br/>

***

<br/>

 ## 함수 포인터
   - 함수를 매개변수로 전달 하는것
   - ‘함수 실행’ 이라는 것이 결국, 함수가 시작되는 주소로 가서 함수실행될 메모리를 읽고 다시 원주소로 돌아와서 코드를 읽어 가는것 
   - <반환형> (*<변수명>)(<매개변수 목록>)
   - double (*func) (double, double)
     - 두 개의 double형 매개변수를 받고 double 형을 반환하는 함수의 포인터.
   - 나중에 더 자세하게 알아보기!

###### [Top](#top)

<br/>

***

<br/>

## 가변 인자 함수
  - <반환형><함수명>(<자료형이_정해진_매개변수_목록>,...)
  - ex) int printf(const char* format, …);
  - ex) int scanf(const char* format, …);
  - 나중에 더 자세하게 알아보기!

###### [Top](#top)

<br/>

***

<br/>

## register 키워드
  - 컴퓨터에서 계산
    - 메모리에 저장
    - 레지스터에 저장해서 계산
    - 결과를 다시 메모리에 저장
  - register <자료형> <변수명>;
    - 메모리에 저장하지 않고 바로 레지스터에서 사용을 요청하는 함수

###### [Top](#top)

<br/>

***

<br/>

## 자료구조
  - 배열
    - 삽입
    - 삭제
    - 검색
  - 스택
    - 삽입
    - 삭제
    - 검색
  - 큐
    - 삽입
    - 삭제
    - 검색
  - 연결리스트
    - 삽입
    - 삭제
    - 검색
  - 해시 테이블
    - 삽입
    - 삭제
    - 검색

###### [Top](#top)

<br/>

***

<br/>

## 라이브러리
  - 정적 라이브러리
  - 동적 라이브러리

###### [Top](#top)

<br/>

***

<br/>

## C99
  - 인라인
  - restrict 키워드
  - 한 줄 주석 가능
  - 변수 선언 중간에 가능
  - va_copy( dest, src )함수 추가
  - snprintf( )
  - 새로운 자료형 : long long int
  - bool형
  - 고정 폭 정수형
    - <stdint.h>
  - 허수표현 자료형
    - _imaginary
    - _complex
  - IEEE 754부동소수점 정식 지원
  - 부동 소수점 예외
  - 가변길이 배열

###### [Top](#top)

<br/>

***

<br/>

## 추천사이트
  - http://soen.kr/ 
