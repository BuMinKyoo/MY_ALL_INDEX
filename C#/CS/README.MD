##### 1. 언어수준(저수준언어 , 고수준언어)
  - 컴퓨터가 이해하지 쉬운 언어에 가까울수록 저수준 언어
    - 0과1로만 이루어짐(= 기계어)
  - 인간이 이해하기 쉬운 언어에 가까울수록 고수준
    - 어셈블리어, C, C++ 등등
      - 어셈블리어는 기계어와 1:1대응하는 언어기 때문에 사실상 저수준 언어..(다른 언어는 1:1대응이 아님)
  - 언어의 수준은 상대적인 부분이 있음(ex 어셈블리어는 C 보다 상대적으로 저수준 언어)

<br/>

##### 2. 처리수준(컴파일언어, JIT컴파일언어, 인터프리터)
  - 컴파일언어(코드 - 컴파일[기계어로 바꿔줌] - 기계어[실행파일로 바꿔줌 exe파일] - 실행)
    - 실행만 할 경우 마지막 두 단계만 왔다 갔다 하는것
    - 코드를 바꿔야 할 경유 처음부터 순서를 밟아 다시 진행한다
    - 다양한 최적화 가능(2시간 동안 컴파일, 0.1초 만에 실행)
    - 기계어가 나오기 때문에(다른 CPU에서 이해 불가능) 플랫폼마다 다른 exe파일을 컴파일 해야함
    - C, C++
  - JIT컴파일언어(코드 - 컴파일러[중간언어로 바꿔줌] - 중간언어["exe" <- 실행 파일이라고 하기 뭐함..] - JIT컴파일러(기계어) - 실행)
    - 프로그램 실행 중에 VM이 중간 언어를 기계가 이해하는 언어로 바꿔서 실행
    - 플랫폼 별로 VM(가상머신)을 설치해야함
    - 플랫폼에 종속적이지 않고 VM에 종속적임
    - C#, Java 등
  - 인터프리터언어(코드 - 인터프리터[기계어로 바꿔줌 <- 실행하면서 실시간으로 바꿔줌] - 실행)
    - 실제로 실행하기 전까지 코드의 문제를 잡아낼 수 없음

<br/>

##### 3. 타입별(강한타입, 약한타입)
  - 타입검사에 엄격한가, 엄격하지 않은가에 대한것. 컴퓨터가 이해하는 데이터는 수로 이루어져 있기 때문에 사람 입장에서는 그 수만 보아서는 실제로 정수를
의미하는지 문자열을 의미하는지 알 수가 없기 때문에 타입지정이 생겨났음.따라서 강한타입일 수록 타입 검사에 엄격하기 때문에 추후에 생길 버그나 오류를 줄 일 수 있다.
  - ex) 파이썬 같은 경우는 변수형을 비선언 한다.

<br/>

##### 4. 메모리관리(매니지드,언매니지드)
  - 매니지드 언어 : 언어가 메모리를 관리해줌
    - 언어가 자체적으로 모든 상황에서, 충분한 판단으로 메모리를 반환하기 때문에 명시적으로 반환하는 것보다 효율적이지 않음
  - 언매니지드 언어 : 언어가 메모리를 관리 안해줌
    - 명시적으로 메모리를 반환하기 때문에 효율적임
    - 프로그래머가 신경써 줘야 되기 때문에 실수가 나올 수 있음
    - 성능이 필요할 경우에 사용
    - 메모리동작원리, CPU동작원리, 컴퓨터처럼 생각하는 방법, 매니지드 언어에서 지원하는 마법같은 기능의 동작원리 등을 알 수 있고 이해할 수 있게 된다.

<br/>

##### 5. 프로그래밍 패러다임(절차적언어, 개체지향 언어[OOP])
  - 절차적 언어 : 순서에 따라 위에서 부터 아래로 절차적으로 코드를 실행하는 것
  - 개체지향 언어(클래스) : 기능과 자료를 하나의 개체에 합침
    - 사람에게 직관적. ex)사물을 볼때 하나의 정보만 보는 것이 아니라 컬러,질감,모양,무게 등 다양한 정보로 하나의 사물을 바라봄
    - 복잡한 프로그램의 구조를 잡기 쉽다

<br/>

##### 6. 프레임워크, 라이브러리
  - 라이브러리 : 여러 함수들을 모아 놓은 집합
  - 프레임워크 : 라이브러리의 상위 개념, 제공받은 일정한 요소와 틀, 규약을 가지고 무언가를 만들어 낼 수 있음
  - 라이브러리와 프레임워크의 차이는, 라이브러리는 필요할때 필요한 함수를 프로그래머가 불러다가 쓸 수 있지만, 프레임워크는 프로그래머가 부르는 것이 아니라, 프로그래머가 그 안에 들어가 일정한 틀과 규약을 준수 하면서 개발을 해날갈때 쓰는 도구 같은것.
  - C#은 최상단에 'Using'지시어 뒤에 사용할 라이브러리(= 네임 스페이스 라고도 부름) 이름을 넣는다.

<br/>

##### 7. 컴파일(Compile)
  - 소스코드를 기계 또는 VM(Virtual Machine)이 이해할 수 있는 언어로 변경하는 행위
    - 컴파일로(compiler)라는 프로그램이 진행해줌 ex)IDE(통합개발 환경)
    - 컴파일 할때 오류또는 경고가 발생할 수 있음

<br/>

##### 8. 디버그(debug)빌드, 릴리즈(release)빌드
  - 디버그빌드 : 개발자가 개발 중에 사용하는 실행파일
    - 디버깅에 유용한 많은 정보가 담겨 있음
    - 성능 떨어짐
  - 릴리즈빌드 : 실제 사용자에게 배포하는 실행파일
    - 디버깅을 위한 정보는 빠지게 됨
    - 성능 빠름

<br/>

##### 9. 상수
  - 절대 변하지 않는 수
  - 앞에 접두사로 'const' 붙임, 상수는 선언과 동시에 대입이 이루어져야함

<br/>

##### 10. 변수
  - 변할 수 있는 값

~~~
int num; //변수 선언
num = 10; //변수 대입
~~~

<br/>

##### 11. 기본자료형
  - 정수형(부호있는Signed Type/ 부호없는Unsigned Type)
    - 8비트 : sbyte / byte 
    - 16비트 : short / ushort
    - 32비트 : int / uint
    - 64비트 : long / ulong
      - 사용시에 접미사 -l을 붙여야함
  - 부동소수점형
    - 32비트 : float
      - 사용시에 접미사 -f를 붙여야함
    - 64비트 : double
    - 128비트 : decimal자료형
      - 사용시에 접미사 -m을 붙여야함
  - 문자형
    - 16비트 : char
      - c#에서 이것은 유니코드와 같다 = 정수와 다를것 없다!!
      - 문자를 감쌀 때 작은따옴표( ' )을 사용함
    - String
      - 큰따옴표( " )을 
  - 불리언형
    - bool(True, Fales)
  - 오브젝트 형식
    - 모든 자료형은 object를 상속받기 때문에 모든 형식을 다 담을 수 있다. 사용하기 위해서 캐스팅이 필요하다
    - 값형이 아닌 참조형식 이기 때문에 힙에 저장됨
  - null형식(Nullable Type)
    - Null을 가질 수 없는 데이터 타입을 Null을 가질 수 있는 타입으로 만든것
    - int? a = null; //Null선언
    - float? b = null; //Null선언

<br/>

  - 비트당 표현 가능한수 2가지, 즉 2의 n승가짓수로 표현 가능
  - 부호 있는 자료형은 양수에서 0을 포함함으로 범위로는 음수가 1개소 더 많이 표현 가능
    - ex) sbyte인 경우 8비트 이기 때문에 표현 가능한 수는 2의 8승으로 256가짓수. 0을 양수에 포함 시키고 절반씩 나누게 되면 음수는 128가지 양수는 0을 제외한 127가지, 즉 [-128~127]까지의 수를 표현 가능
    - ex) ㅁㅁㅁㅁㅁㅁㅁㅁ 8개의 비트가 있다면 맨 위쪽의 최상위 비트 가짓수가 나머지 표현 가능한 비트의 수많큼이 되므로, 음수는 최상위 비트가 1로 표현 된다고 볼 수 있다.
    - 자료형의 크기보다 크기가 커지거나 작아지면 '오버플로우' 또는 '언더플로우'가 발생한다

<br/>

##### 12. 자료크기
  - 비트(bit) : 최소단위 1혹은0을 담을 수 있음
  - 바이트(byte) : 8비트가 모인것
  - 1024바이트 = 1킬로 바이트(KB)
  - 1024킬로바이트 = 1메가 바이트(MB)
  - .......

<br/>

##### 13. 접두사
  - 0b- : 2진수 ex) int num1 = 0b10  //이때 num1에 들어가는 수는 2가됨
  - 0x- : 16진수 ex) int num1 = 0x10 //이때 num1에 들어가는 수는 16이됨  

<br/>

##### 14. 형변환
  - 묵시적 변환 : 컴파일러가 '알아서' 해주는것
    - 모든 자료형을 바꿀 수 있는 것은 아님
  - 명시적 변환 : 프로그래머가 명시적으로 형변환을 지시함(전부x)
  - 승격 : 컴파일러가 자동으로 실수형이나 부동소수형 자료의 이진 표현을 확장 하는것
    - double num1 = 5.5, int num2 = 3 / num1 + num2 = 8.5가 나오게 된다. double로 승격하여 계산 한것
      - double number = 123.456 을 소수점 첫째 자리만 나타내기

~~~c#
double average = 0;
double number = 123.456;
average = (int)(number * 10) / 10.0; //123.4 
~~~

<br/>

##### 15. 다양한 연산자
  - 증감 연산자(++ , --)
    - 증감 연산자가 앞쪽에 있으면 증감 해주고 계산
    - 증감 연산자가 위쪽에 있으면 계산후 증감

~~~c#
int num = 0;
Console.WriteLine(++num + ++num + ++num); // 6
~~~

~~~c#
int num = 0;
Console.WriteLine(num++ + num++ + num++); // 3
~~~

  - 비트연산자(&[and], |[or], ^[xor], ~[not])
    - 연산자 우선순위 : & -> ^ -> |

~~~c#
0b0011 & 0b0010 => 0b0010
0b0011 | 0b0010 => 0b0011
0b0011 ^ 0b0010 => 0b0001
~0b0011 => 0b1100
~~~

  - 비트이동연산자(<<[왼쪽으로이동], >>[오른쪽으로이동])

~~~c#
int num = 1; //num = 0b0001
int num2 = num << 3; //num2 = 0b1000
Console.WriteLine(num2); //num2 = 8
~~~

<br/>

##### 16. 이스케이프문자
  - \n -> 줄바꿈
  - \t -> 탭
  - \' -> 작은따옴표 출력
  - \" -> 큰따옴표 출력
  - \\ -> 백슬래시 출력
  - \x(숫자) -> 아스키값16진수 출력 ex) \x120출력 -> ?가 출력됨

<br/>

##### 17. 문자열 포맷팅
  - 기본형
    - 문자열은 더할 때 마다 하나의 스트링이 생성되어 비요율이 발생한다.(임시 스트링 발생)

~~~c#
string name = "철수";
Console.WriteLine(name + "는 사과를" + "좋아해"); // 철수는 사과를 좋아해
~~~

  - string.Format형
    - string.Format함수를 이용한다.
    - Console.WriteLine에 곧바로 출력할때는 string.Format함수를 명시하지 않는다.
    - 오른쪽 정렬, 왼쪽 정렬
      - ex) ("Hi {0, 10}", name) / ("Hi {0, -10}", name)
    - 소수점 출력(소수점 몇재 자리 까지 출력할지)
      - ("Hi {0:f1}", name) : 소수점 한자리
      - ("Hi {0:f2}", name) : 소수점 두자리
    - 10진수를 16진수 아스키로 출력
      - ("Hi {0:x}", 10) //소문자
      - ("Hi {0:X}", 10) //대문자
      - ("Hi {0:X1}", 10) //앞에 남은 자리 수 만큼 0 추가

~~~c#
string name = "철수";
string str = "좋아해";
string str_FORMAT = string.Format("{0}는 사과를 {1}", name, str);
Console.WriteLine(str_FORMAT);  // 철수는 사과를 좋아해
~~~

~~~c#
string name = "철수";
string str = "좋아해";
Console.WriteLine("{0}는 사과를 {1}",name, str);   // 철수는 사과를 좋아해
~~~

  - $을 사용하는 형태
    - 가장 편하고, 알아보기 편하다
    - 정렬이나,변환 서식을 지정하기 위해서는 {첨자, 맞춤 : 서식문자열} 형식을 따르면 된다
      - ex) ($"Hi {name, -3 : D3}")

~~~c#
string name = "철수";
string str = "좋아해";
string str_FORMAT = $"{name}는 사과를 {str}";
Console.WriteLine(str_FORMAT);   // 철수는 사과를 좋아해
~~~

~~~c#
string name = "철수";
string str = "좋아해";
Console.WriteLine($"{name}는 사과를 {str}");   // 철수는 사과를 좋아해
~~~

  - 그대로 출력하기
    - 큰 따옴표 안에 있는 것이 스트링으로 그대로 출력됨
      - (@"Hi {name}")

<br/>

##### 18. 조건문
  - 조건식은 참이나 거짓을 반환해야 함

~~~
if (조건식)
{
   조건이 만족할 때만 실행함
}
~~~

  - <  : 우항이 클경우 true
  - <= : 우항이 크거나 같을 경우 true
  - \>  : 좌항이 클경우 true
  - \>= : 좌항이 크거나 같을 경우 true
  - !  : true를 false로, false를 true로
  - != : 좌항과 우항이 같지 않을경우 true
  - == : 좌항과 우항이 같을 경우 true
  - 논리연산자(||, &&)
    - 연산자 우선순위 : && -> ||
    - || : "~또는" -> 합연산
    - && : "~동시애" -> 곱연산
  - 우선순위, 평가순서
    - If(2+2==4 || 4+2 == 6 && 1+2 == 2) 일때 우선순위로 괄호를 먼저 치면 (2+2==4 || (4+2 == 6 && 1+2 == 2))이렇게 계산하게 된다. 하지만 평가 순서로써는 맨 왼쪽에 있는 것부터 평가 되므로 '2+2==4'가 참이 되면 || 합 연산으로 인해 뒤에 어떤 것이 오던 참이 되기 때문에 뒤쪽의 연산은 하지 않게 된다 

<br/>

##### 19. 삼항 연산자
  - 간단한 연산일경우에 적합함
  - 참일경우 왼쪽 값이 반환되, 거짓일 경우 오른쪽 값이 반환 된다.
  - (불리언 표현식) ? 반환값 : 반환값

<br/>

##### 20. 조건문 Switch(표현식)
  - case를 연속으로 놓을 수 있음
  - default를 설정해서 나머지가 전부 false일때 출력함

~~~
Switch(표현식)
{
Case (상수 <int,long,char,bool,string> -> string은 C#전용) : 
    break;
}
~~~

~~~c#
ex)
switch(input)
            {
                case 1:
                    Console.WriteLine("1번");
                    break;
                case 2:
                case 3:
                    Console.WriteLine("2번");
                    break;
                case 4:
                    Console.WriteLine("3번");
                    break;
                default:
		                Console.WriteLine("5번");
	                  break;
	}
~~~

<br/>

##### 21. 반복문
  - for문

~~~
for (int i = 0; i < 5; i++)
{
   출력값
}
~~~

  - while문

~~~
while (조건식)
{
   출력값
}
~~~

  - do...while문 // 최소 한번은 실행하고 조건식 확인

~~~
do
{
   출력값
} while (조건식)
~~~

  - foreach문
    - for문보다 편하게 사용 할 수 있으며 담겨 있는 list내용을 선언한 변수에 한번씩 대입시킨다.

~~~
foreach (string 변수명 in list)
{
   출력값
}
~~~

<br/>

##### 22. 배열
  - 동일한 자료형을 여럿 담을 수 있는 자료 구조
  - 배열을 선언할때 요소의 수를 결정하게 되고, 그것은 바꿀 수 없음
  - 배열의 색인은 0 부터 시작한다.
  - 배열 선언, 생성, 접근
    - int[ ] (변수) = new int[3] -> 배열 변수 선언
    - int[ ] (변수) = new int[ ]{20,21,22} -> 배열 생성과 대입
    - int[ ] (변수) = { 20,21,22 } -> 배열 생성과 대입 단축형
    - int[ 3 ] -> 배열 접근법

<br/>

##### 23. 다차원 배열
  - int[ , ] (변수) = new int[ 1, 2 ] -> 행 열, 행이 세로, 열이 가로 -> 배열 변수 선언
  - int[ , ] (변수) = new int[ , ]{ { 1, 2, 3 }, { 2, 4, 6 } } -> 배열 생성과 대입
  - int[ , ] (변수) = { { 1, 2, 3 }, { 2, 4, 6 } } -> 배열 생성과 대입 단축형
  - int[1,2] -> 베열 접근법

<br/>

##### 24. 함수
  - 함수 : 특정 기능을 수행하는 코드의 집함
  - Main함수 : 그 프로그램의 코드를 어디서 부터 읽을지 알려주는 시작점
    - Main함수에 인자 전달 : 프로젝트속성 - 디버그 - General - 명령줄 인수
  - 함수의 기본 형태
    - 매개변수는 필수가 아니다!!

~~~
(수식자) (접근제어자) (반환형) (함수명)((매개변수목록))
{
    
}
~~~

  - 함수의 시그니처(함수명, 매개변수) : 같은 함수가 존재하면 안되기 때문에 그 함수를 구별하기 위해 달라야 하는것들. 이것 두개가 같다면 같은 함수라고 생각할 수 있음
    - 함수 오버로딩 : 함수의 이름은 같지만 매개변수를 다르게 함으로써 함수를 여러개 만드는 것. 그렇게 되면 매개변수에 맞게 함수가 다르게 실행된다

~~~c#
public class Program
{
    static void Main(string[] args)
    {
        Print(4);
        Print(4.4f);
        Print("4");
        Print("4", 4.4f);
    }

    static void Print(int a)
    {
        Console.WriteLine(a);
    }

    static void Print(string a)
    {
        Console.WriteLine(a);
    }

    static void Print(float a)
    {
        Console.WriteLine(a);
    }

    static void Print(string a, float b)
    {
        Console.WriteLine(a);
    }
}

출력값
4
4.4
4
4
~~~

<br/>

~~~c#
static int Print(int a)
{
}

static string Print(int a)
{
}

// 반환은 다르지만, 시그니처인 함수 이름과 매개변수가 같기 때문에. 동일 함수로 인지되어 오류가 난다.
~~~

  - 값에 의한 전달(함수, 구조체, enum은 값형)
    - 값에 의한 전달은 스택에 쌓이고, 값이 복사되어 들어가기 때문에 원래의 값은 바뀌지 않는다.

~~~c#
public class Program
{
	public static void Main()
	{
		int num1 = 5;
		int num2 = 10;
		ExchangeNum(num1, num2);

		static void ExchangeNum(int num1, int num2)
        {
			int tem;
			tem = num1;
			num1 = num2;
			num2 = tem;

			Console.WriteLine($"ExchangeNum_num1 : {num1}");
			Console.WriteLine($"ExchangeNum_num2 : {num2}");
		}

		Console.WriteLine($"num1 : {num1}");
		Console.WriteLine($"num2 : {num2}");
	}
}

출력값
ExchangeNum_num1 : 10
ExchangeNum_num2 : 5
num1 : 5
num2 : 10
~~~

  - 참조에 의한 전달(클래스, string 은 모두 참조형)
    - 참조형은 힙에 할당된다.
    - 참조형은 쓰레기가 나오게 되고, GC의 성능 저하가 올 수 있다(왜..? 조금더 공부가 필요할듯..)
    - ref, out을 이용하여 참조로 전달하여 원래의 값을 바꿀 수 있음
    - out : ref와 달리 매개변수의 초기 값을 메서드 내에서 무시하며, 따라서 매서드를 진행 하는 동안 할당을 해야 한다.

~~~c#
public class Program
{
	public static void Main()
	{
		int num1 = 5;
		int num2 = 10;
		ExchangeNum(ref num1, ref num2);

		static void ExchangeNum(ref int num1, ref int num2)
        {
			int tem;
			tem = num1;
			num1 = num2;
			num2 = tem;

			Console.WriteLine($"ExchangeNum_num1 : {num1}");
			Console.WriteLine($"ExchangeNum_num2 : {num2}");
		}

		Console.WriteLine($"num1 : {num1}");
		Console.WriteLine($"num2 : {num2}");
	}
}

출력값
ExchangeNum_num1 : 10
ExchangeNum_num2 : 5
num1 : 10
num2 : 5
~~~

<br/>

~~~c#
public class Program
{
	public static void Main()
	{
		int num1 = 5;
		int num2 = 10;
		ExchangeNum(out num1, out num2);

		static void ExchangeNum(out int num1, out int num2)
        {
			num1 = 10;
			num2 = 5;

			Console.WriteLine($"ExchangeNum_num1 : {num1}");
			Console.WriteLine($"ExchangeNum_num2 : {num2}");
		}

		Console.WriteLine($"num1 : {num1}");
		Console.WriteLine($"num2 : {num2}");
	}
}

출력값
ExchangeNum_num1 : 10
ExchangeNum_num2 : 5
num1 : 10
num2 : 5
~~~

<br/>

##### 25. 값형, 참조형, 가비지 컬렉터
  - 값형 : 자신이 직접 데이터를 저장해서 보관하는 자료형(스택 영역에 저장)
    - 스택은 메모리에 아래서부터 데이터가 쌓였다가 데이터가 제거될 때는 맨 위에 있는 데이터부터 차례로 제거되는 방식이다.
  - 참조형 : 데이터가 저장되어 있는 힙의 위치만 자신이 저장하고 있다가 필요할 때 그 데이터가 있는 곳으로 가서 데이터를 얻어오는 자료형(힙 영역에 저장)  
    - 힙은 쌓여 있는 구조가 아니라, 임의의 메모리에 데이터를 저장한다. 그러한 특성 때문에 힙은 자유 기억 공간이라고도 한다.
    - 힙에 할당된 데이터는 자신을 사용하는 참조가 더 이상 존재하지 않게 되면 메모리를 감시하고 있던 가비지 컬렉터가 힙에 할당된 메모리를 해체 한다.

<br/>

##### 26. 클래스



<br/>

##### 27. 범위
  - 지역변수

~~~c#
public class Program
{
	public static void Main()
	{
		int num1 = 5;
		int num2 = 10;
		Function(num1, num2);

		static void Function(int a, int b)
        {
			int num3 = 20;
			int num4 = 30;
		}
	}
}

// Main에 있는 num1, num2는 지역변수
// Function함수 안에 있는 num3, num4는 맴버변수
~~~

  - 어떤 범위 안에 선언된 것은 밭깥에서 이용 불가

~~~c#
public class Program
{
	public static void Main()
	{
		int num1 = 5;
		int num2 = 10;
		Function(num1, num2);

		static void Function(int a, int b)
        {
			int num3 = 20;
			int num4 = 30;
		}
	}
}

// Function함수 안에 있는 num3, num4는 함수 외부에서 사용할 수 없음
~~~

  - 같은 범위에 변수를 또 넣어야 할 경우, 괄호 사용해서 범위 지정하기

~~~c#
public class Program
{
	public static void Main()
	{
        {
			int num1 = 5;
        }

        {
			int num1 = 5;
        }
	}
}
~~~

<br/>

##### 28. 열거형
 - 각 열거한 곳에 수를 지정하지 않으면 0부터 시작되어 +1씩 증가한다
 - 숫자나, 비트형식만 자리할 수 있음

~~~c#
enum Esinger
    {
        nana = 0b0001,
        mimi          // 2,
        popo = 3,
        kiki = popo +  4, // 7
        max // 8
    }
~~~

  - 변수정의 및 대입
    - <열거형 이름> <변수명> = <열거형 이름>.<열거형 원소>
    - Esinger singer = Esinger.nana
    - string[ ] direction = new string[(int)Esinger.max] //열거형을 사용해 string배열의 갯수를 지정했음

~~~c#
public class Program
{
	public static void Main()
	{
		int Enumber = (int)Esinger.kiki;
		string Estr = Esinger.kiki.ToString();
		Console.WriteLine($"Enumber : {Enumber}");
		Console.WriteLine($"Estr : {Estr}");
	}

	enum Esinger
	{
		nana = 0x0011,
		mimi,          // 2,
		popo = 3,
		kiki = popo + 4, // 7
		max // 8
	}
}

출력값
Enumber : 7
Estr : kiki
~~~

##### 29. 어서트(assert)
  - 절대로 발생하지 않아야 하는 조건을 런타임 중에 검사
  - 만약 발생한다면 코드가 올바르게 동작 하지 않는 다는것
  - 디버그 모드에서만 동작
  - 어서트 안의 조건식이 거짓일때 메세지 출력
    - "난 이렇게 코드를 짰는데, 이게 아니면 메세지를 출력해라"는 의미
  - Debug.Assert((표현식), (메세지))

<br/>

##### 30. 배열의 배열
  - 2D배열의 문제는 직사각형 형태의 데이터만 가능하다(행마다 열수가 같아야함)
    - 이러한 문제를 해결하기 위해 배열의 배열을 사용 할 수 있다.

~~~c#
static void Main(string[] args)
{
    int[][] i = new int[3][]; // 행3개 짜리 배열의 배열 선언
    i[0] = new int[1]; // 열1개 짜리 배열 선언
    i[0][0] = 10; // 행0, 열0에 10 대입
    i[1] = new int[] {20,30}; // 열2개 짜리 배열 선언
    i[2] = new int[3] {40,50,60}; // 열3개 짜리 배열 선언

    Console.WriteLine(i[0][0]); // 행0, 열0에 접근, 출력:10
}
~~~

<br/>

~~~c#
static void Main(string[] args)
{
    int[][] i = new int[3][]; // 행3개 짜리 배열의 배열 선언
    i[0] = new int[1]; // 열1개 짜리 배열 선언
    i[0][0] = 10; // 행0, 열0에 10 대입
    i[1] = new int[] {20,30}; // 열2개 짜리 배열 선언
    i[2] = new int[3] {40,50,60}; // 열3개 짜리 배열 선언

    Console.WriteLine(i[0][0]); // 행0, 열0에 접근, 출력:10

    int[] i_fore = i[2]; // i의 3번째 행을 i_fore에 대입하
    Console.WriteLine(i_fore[0]); // 출력:40
}
~~~

<br/>

##### 31. 문자열토크나이저
  - <문자열 변수 이름>.Indexof(char)
    - char의 위치를 찾아서 색인을 반환하는 함수
  - <문자열 변수 이름>.substring(<색인>)
    - 지정인 색인 으로부터 문자열을 추출하는것
  - <문자열 변수 이름>.<색인>
    - 지정인 색인 문자열 반환
      - ex) char index = message[6];
  - <문자열 변수 이름>.Split(char)
    - char로 문자열을 쪼갬
      - ex) string[] index = message.Split(',');
      - ex) string[] index = message.Split(',',';');
  - <문자열 변수 이름>.Trim()
  - <문자열 변수 이름>.TrimStart()
    - 불필요한 공백 없애
  - 여러가지 String의 속성 : https://docs.microsoft.com/ko-kr/dotnet/api/system.string?view=net-6.0

