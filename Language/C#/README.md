<br/>

###### Top

  - [기본자료형](#기본자료형)
  - [문자열 포맷팅](#문자열-포맷팅)
  - [조건문](#조건문)
    - [If(표현식)](#if표현식)
    - [Switch(표현식)](#switch표현식)
  - [반복문](#반복문)
  - [삼항연산자](#삼항연산자)
  - [배열](#배열)
    - [1차원 배열](#1차원-배열)
    - [배열의 배열](#배열의-배열)
    - [다차원 배열](#다차원-배열)
  - [함수](#함수)
  - [가비지 컬렉터](#가비지-컬렉터)
  - [클래스](#클래스)
  - [Generic 형식함수,클래스](#generic-형식함수클래스)
  - [범위](#범위)
  - [열거형](#열거형)
  - [어서트](#어서트)
  - [문자열 토크나이저](#문자열-토크나이저)
  - [문자열 빌더](#문자열-빌더)
  - [컬렉션](#컬렉션)
  - [partial클래스](#partial클래스)
  - [구조체](#구조체)
  - [Nullable](#nullable)
  - [LINQ](#linq)
  - [파일입출력](#파일입출력)
  - [파일스트림](#파일스트림)
  - [예외](#예외)
  - [식 본문 메서드](#식-본문-메서드)
  - [객체 초기화 식](#객체-초기화-식)
  - [? null가능 연산자](#?-null가능-연산자)
  - [null조건부 연산자](#null조건부-연산자)
  - [null병합 연산자](#null병합-연산자)
  - [null병합 할당연산자](#null병합-할당연산자)
  - [Parse,TryParse](#ParseTryParse)
  - [params 가변인수](#params-가변인수)











<br/>
<br/>

***

# 기본자료형
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

###### [기본자료형](#기본자료형)
###### [Top](#top)

<br/>
<br/>

***

# 문자열 포맷팅
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

###### [문자열 포맷팅](#문자열-포맷팅)
###### [Top](#top)

<br/>
<br/>

***

# 조건문
  - 조건식은 참이나 거짓을 반환해야 함

<br/>

  - [If(표현식)](#if표현식)
  - [Switch(표현식)](#switch표현식)

###### [조건문](#조건문)
###### [Top](#top)

<br/>
<br/>

# If(표현식)

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

###### [If(표현식)](#if표현식)
###### [Top](#top)

<br/>
<br/>

# Switch(표현식)
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
using System;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // 일반 스위치문
            int priority = 1;

            switch (priority)
            {
                case 1:
                    Console.WriteLine("높음");
                    break;
                case 2:
                    Console.WriteLine("보통");
                    break;
                default:
                    Console.WriteLine("기타");
                    break;
            }

            // 스위치 식
            // case, break 대신 => 화살표를 사용하며, default는 _ (언더바)로 표기
            string status = "Error";

            string message = status switch
            {
                "Success" => "작업 성공",
                "Error" => "오류 발생",
                "Loading" => "로딩 중...",
                _ => "알 수 없는 상태" // default 역할
            };

            // 패턴매칭
            // 타입(Type)을 직접 검사할 수 있다는 것
            object control = new System.Windows.Controls.Button();

            switch (control)
            {
                case System.Windows.Controls.Button btn:
                    btn.Content = "클릭됨";
                    break;
                case System.Windows.Controls.TextBox tb:
                    tb.Text = "입력 완료";
                    break;
                case null:
                    Console.WriteLine("null 객체입니다.");
                    break;
            }

            object data = "Hello C#";

            switch (data)
            {
                case string s: // data가 string 타입이면 s 변수에 할당
                    Console.WriteLine($"문자열입니다. 길이는 {s.Length}입니다.");
                    break;

                case int i: // data가 int 타입이면 i 변수에 할당
                    Console.WriteLine($"정수입니다. 값은 {i}입니다.");
                    break;

                case null:
                    Console.WriteLine("데이터가 null입니다.");
                    break;

                default:
                    Console.WriteLine("알 수 없는 타입입니다.");
                    break;
            }


            // when절
            int age = 25;

            string category = age switch
            {
                // 스위치 식 + when절 사용
                int n when n < 13 => "어린이",
                int n when n < 20 => "청소년",
                int n when n >= 20 => "성인",
                _ => "미분류"
            };

            // 다중패턴
            // switch 문이나 식에서 관계 연산자(>, <, >=, <=)와 논리 연산자(and, or, not)를 사용하여 조건을 아주 정교하게 조합할 수 있는 기능

            int temperature = 25;

            string weather = temperature switch
            {
                < 0 => "영하",
                < 15 => "쌀쌀함",
                < 30 => "적당함",
                _ => "더움"
            };

            int score = 85;

            string grade = score switch
            {
                >= 90 => "A",
                >= 80 and < 90 => "B", // 80점 이상 90점 미만
                >= 70 and < 80 => "C",
                _ => "F"
            };

            char grade = 'A';

            bool isPassing = grade switch
            {
                'A' or 'B' or 'C' => true,
                'D' or 'F' => false,
                _ => throw new ArgumentException("유효하지 않은 등급")
            };

            object? data = GetData();

            string result = data switch
            {
                null => "데이터 없음",
                not string => "문자열이 아님",
                _ => "올바른 문자열 데이터"
            };
        }
    }
}
~~~

###### [Switch(표현식)](#switch표현식)
###### [Top](#top)

<br/>
<br/>

***

# 반복문
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

###### [반복문](#반복문)
###### [Top](#top)

<br/>
<br/>

***

# 삼항 연산자
  - 간단한 연산일경우에 적합함
  - 참일경우 왼쪽 값이 반환되, 거짓일 경우 오른쪽 값이 반환 된다.
  - (불리언 표현식) ? 반환값 : 반환값

###### [삼항연산자](#삼항연산자)
###### [Top](#top)

<br/>
<br/>

***

#  배열
  - 동일한 자료형을 여럿 담을 수 있는 자료 구조
  - 배열을 선언할때 요소의 수를 결정하게 되고, 그것은 바꿀 수 없음
  - 배열의 색인은 0 부터 시작한다.

###### [배열](#배열)
###### [Top](#top)

<br/>
<br/>

# 1차원 배열
  - 배열 선언, 생성, 접근
    - int[ ] (변수) = new int[3] -> 배열 변수 선언
    - int[ ] (변수) = new int[ ]{20,21,22} -> 배열 생성과 대입
    - int[ ] (변수) = { 20,21,22 } -> 배열 생성과 대입 단축형
    - int[ 3 ] -> 배열 접근법

###### [1차원 배열](#1차원-배열)
###### [Top](#top)

<br/>
<br/>

# 배열의 배열
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

###### [배열의 배열](#배열의-배열)
###### [Top](#top)

<br/>
<br/>

# 다차원 배열
  - int[ , ] <변수> = new int[ 1, 2 ] -> 행 열, 행이 세로, 열이 가로 -> 배열 변수 선언
  - int[ , ] <변수> = new int[ , ]{ { 1, 2, 3 }, { 2, 4, 6 } } -> 배열 생성과 대입
  - int[ , ] <변수> = { { 1, 2, 3 }, { 2, 4, 6 } } -> 배열 생성과 대입 단축형
  - int[1,2] -> 베열 접근법

###### [다차원 배열](#다차원-배열)
###### [Top](#top)

<br/>
<br/>

***

# 함수
  - 함수 : 특정 기능을 수행하는 코드의 집함
  - Main함수 : 그 프로그램의 코드를 어디서 부터 읽을지 알려주는 시작점
    - Main함수에 인자 전달 : 프로젝트속성 - 디버그 - General - 명령줄 인수
  - 함수의 기본 형태
    - 매개변수는 필수가 아니다!!

~~~
<수식자> <접근제어자> <반환형> <함수명>(<매개변수목록>)
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

  - 기본값 인자(defalut parameter)
    - 매개변수 선언할 때 미리 기본값을 정해둘 수 있음(하나 이상 가능)
    - 함수를 사용 할때 기본값 인자로 지정해둔 매개변수를 필수로 넣어 주지 않아도 됨
    - 기본값 인자는 중간에 있으면 안됨
      - ex) static string Function(string name, string adress, string level = "") => ok
      - ex) static string Function(string name, string level = "", string adress) => No...

  - Try함수
    - 예외 처리(exception구문)없이 예외 상황을 처리 할 수 있는 방법
    - 예외가 발생되는 상황에 false를 반환하게하며, out매개 변수를 사용 하여 출력한다.

~~~c#
static void Main(string[] args)
{
    int num1 = 0;
    int num2 = 5;
    float num3 = 10f;

    bool bSuccess = TryDivision(num1, num2, out num3);

    Console.WriteLine(bSuccess);

    static bool TryDivision(int denominator, int numerator, out float result)
    {
        if(denominator == 0)
        {
            result = 0f;
            return false;
        }

        result = denominator / numerator;

        return true;
    }
}
~~~

  - 확장메서드
    - 클래스에 함수를 추가하지 못할 때 사용(마치 그 클래스가 가지고 있는 함수 인것 마냥 쓰게 해줌)
    - 기존 정의된 메서드와 동일한 이름을 갖는 확정 매서드가 있다면, 기존 정의된 매서드가 실행 되게 된다
    - 정적 클래스에서만 사용 가능하다
    - 정적 함수를 만든다, 정적 함수에서만 사용 가능
      - 확장 메서드의 첫번째 인자는 함수에 넣고자 했던 클래스 이름을 적는다
      - 첫번째 인자는 반드시 this를 붙인다

~~~c#
namespace ConsoleApp9
{
    public class Program
    {
        static void Main(string[] args)
        {

            Car car = new Car();
            car.GetCount("출력");

            string str1 = "야호~";
            str1.GetCount();
            "야호~".GetCount();
        }
    }

    public class Car
    {
        public string Name { get; set; }
    }
    static class CarExtend
    {
        public static void GetCount(this Car car, string str)
        {
            Console.WriteLine(str);
        }
    }

    static class StringExtend
    {
        public static void GetCount(this string str)
        {
            Console.WriteLine(str);
        }
    }
}


출력값
출력
야호~
야호~
~~~

###### [함수](#함수)
###### [Top](#top)

<br/>
<br/>

***

# 가비지 컬렉터
    - 힙에 할당된 데이터는 자신을 사용하는 참조가 더 이상 존재하지 않게 되면 메모리를 감시하고 있던 가비지 컬렉터가 힙에 할당된 메모리를 해체 한다.

###### [가비지 컬렉터](#가비지-컬렉터)
###### [Top](#top)

<br/>
<br/>

***

# 클래스
  - 클래스 : 개체를 만들어 내기 위한 설계도, 틀
  - 개체 : 클래스에 선언된  모양 그대로 생성된 실체(=클래스의 인스턴스 라고도 함)
  - 멤버 변수 : 클래스 안에서 선언한 변수
  - 클래스 안에 함수를 정의 할 수도 있음

<br/>

  - <클래스명> <변수> = new <클래스명>() -> 개체 선언

~~~c#
namespace ConsoleApp9
{
    public class Program
    {
        static void Main(string[] args)
        {
            Car car = new Car();
        }
    }

    public class Car
    {
        public int Gas = 10;
        public void Sound()
        {
            Console.WriteLine("빵빵~");
        }
    }
}
~~~

  - <클래스명>.<함수> or <변수> -> 클래스 안에 있는 함수나 변수에 접근

~~~c#
namespace ConsoleApp9
{
    public class Program
    {
        static void Main(string[] args)
        {
            Car car = new Car();
            Console.WriteLine("car.Gas : " + car.Gas);
            Console.Write("car.Sound() : ");
            car.Sound();
        }
    }

    public class Car
    {
        public int Gas = 10;
        public void Sound()
        {
            Console.WriteLine("빵빵~");
        }
    }
}


출력값
car.Gas : 10
car.Sound() : 빵빵~
~~~

  - 생성자
    - public <클래스명>(매개변수)
    - 개체를 생성할때 반드시 호출되는 함수 -> 매개변수를 넣어 두면 매개변수를 강제할 수 있음(개체 생성시 매개 변수를 넣지 않으면 오류가 발생)
    - 반환형X
    - 생성자도 함수 오버로딩이 가능하므로 변수를 조절할 수 있음

~~~c#
namespace ConsoleApp9
{
    public class Program
    {
        static void Main(string[] args)
        {
            Car car = new Car();
            Console.WriteLine("car.Gas : " + car.Gas);
        }
    }

    public class Car
    {
        public int Gas = 10;
        public void Sound()
        {
            Console.WriteLine("빵빵~");
        }

        public Car()
        {
            Gas = 20;
            Console.WriteLine("car.Sound : ");
            Sound();
        }
    }
}
~~~

<br/>

  - 정적 생성자
    - 클래스에서 정적 생성자는 오직 한 개만 존재한다.
    - 정적 생성자는 매개변수가 없어야 한다
    - 정적 생성자는 클래스의 정적 멤버에 접근할 수 있다
    - 정적 생성자에는 접근 지정자(접근 제한자)가 없어야 한다
    - 정적 생성자는 클래스가 로드될 때 한 번만 호출된다

~~~c#
namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Car car1 = new Car();
            Car car2 = new Car();
        }
    }

    public class Car
    {
        public int Gas = 10;
        public void Sound()
        {
            Console.WriteLine("빵빵~");
        }

        public Car()
        {
            Gas = 20;
            Console.WriteLine("일반 생성자~");
            Sound();
        }

        static Car()
        {
            Console.WriteLine("정적 생성자~");
        }
    }
}

//정적 생성자~
//일반 생성자~
//빵빵~
//일반 생성자~
//빵빵~
~~~

<br/>

  - 정적 생성자와 마찬가지로 정적 멤버도 클래스의 인스턴스가 몇 개나 생성되는지에 상관없이 한 번만 만들어진다
  - 정적 맴버를 호출할때도 정적 생성자가 발동 된다

~~~c#
namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Car.Gas);
        }
    }

    public class Car
    {
        public static int Gas = 10;
        public void Sound()
        {
            Console.WriteLine("빵빵~");
        }

        public Car()
        {
            Console.WriteLine("일반 생성자~");
            Sound();
        }

        static Car()
        {
            Console.WriteLine("정적 생성자~");
            Car.Gas = 20;
        }
    }
}

//정적 생성자~
//20
~~~

  - 접근 제어자
    - public : 클래스 밖에서 호출 가능
    - private : 클래스 밖에서 호출 불가(클래스명.함수 x) -> 클래스 내부에서는 호출 가능
    - protected : 상속 클래스 및 선언 클래스에서만 접근이 가능합니다.

~~~c#
namespace ConsoleApp9
{
    public class Program
    {
        static void Main(string[] args)
        {
            Car car = new Car();
            Console.WriteLine("car.Gas : " + car.Gas);
            Console.Write("car.Sound() : ");
            car.Sound();
        }
    }

    public class Car
    {
        static int Gas = 10;
        public void Sound()
        {
            Console.WriteLine("빵빵~");
        }
    }
}

// car.Gas를 호출하는데 에러가 남
~~~

<br/>

~~~c#
namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Car car = new Car();
            //Console.WriteLine(car.Gas); // 외부에서 접근 안됨
            car.Print();

            Car2 car2 = new Car2();
            //Console.WriteLine(car2.Gas); // 외부에서 접근 안됨
            car2.Print();
        }
    }

    public class Car
    {
        protected int Gas = 10;
        public void Sound()
        {
            Console.WriteLine("빵빵~");
        }

        public Car()
        {
            Sound();
            Gas = 10;
        }

        public void Print()
        {
            Console.WriteLine(Gas);
        }   
    }

    public class Car2 : Car
    {
        public Car2()
        {
            Gas = 20;
        }
    }
}

//빵빵~
//10
//빵빵~
//20
~~~

  - 정적 클래스
    - static : 클래스 자체에 종속됨
    - static class 라면 그 멤버들이 전부 ststic이여야함

~~~c#
namespace ConsoleApp9
{
    public class Program
    {
        static void Main(string[] args)
        {
            Car car = new Car();
            Console.WriteLine("Car.Gas : " + Car.Gas);
            Console.Write("car.Sound() : ");
            car.Sound();
        }
    }

    public class Car
    {
        static public int Gas = 10;
        public void Sound()
        {
            Console.WriteLine("빵빵~");
        }
    }
}

// car.gas가 클래스 Car에 종속 되기 때문에, 클래스 이름으로 호출해야함
~~~

  - 접근제어자와 static 정리
    - 접근제어자 종류
      - internal : 현재 프로젝트에만 접근가능
      - public : 모든곳에 접근 가능
      - private : 현재 Class에서만 접근 가능
      - protected : 현재 Class 및 파생 Class에서만 접근 가능
    - static : 사용하게 되면 클래스 수준에서 하나의 저장 공간을 갖기 때문에, 클래스의 모든 인스턴스들을 동일한 값을 가지게 된다
    - 따라서 public static 일경우에만 인스턴스를 생성하지 않고도 접근할 수 있게 되며, 나머지는 접근만 다를 뿐 같은 클래스에서는 같은 값을 가지게 된다
      - static(= public static)
      - internal static
      - public static
      - private static
      - protected static
    - Class에서는 private , protected 를 사용할 수 없다. Class가 static이라면 해당하는 모든 멤버들은 static이 되어야 한다

<br/>

  - getter함수 setter함수

~~~
namespace ConsoleApp9
{
    public class Program
    {
        static void Main(string[] args)
        {
            Car car = new Car();
            car.Setter_Gas(10);
            Console.WriteLine(car.Getter_Gas());

        }
    }
    public class Car
    {
        private int Gas;

        public void Setter_Gas(int gas)
        {
            Gas = gas;
        }

        public int Getter_Gas()
        {
            return Gas;
        }
    }
}
~~~

  - 프로퍼티(Property) -> c#에서는 getter, setter함수보다 프로퍼티를 이용함
    - 변수와 메서드가 모두 함께 있는 평태
    - 프로퍼티는 변수가 아님, 컴파일러가 알아서 getter와 setter함수를 만들어 준다고 생각하면 됨
    - <개체명>.<변수> -> getter
    - <개체명>.<변수> = 10000 -> setter
    - getter함수 -> public형식  /  setter함수 -> private 형식

~~~c#
namespace ConsoleApp9
{
    public class Program
    {
        static void Main(string[] args)
        {
            Car car = new Car();
            Console.WriteLine("car.Gas : " + car.Gas);
            car.Gas = 50;
            Console.WriteLine("car.Gas : " + car.Gas);

        }
    }

    public class Car
    {
        private int m_Gas = 10;
        public int Gas
        {
            get
            {
                return m_Gas;
            }
            set
            {
                m_Gas = value;
            }
        }
    }
}
~~~

  - 자동 프로퍼티
    - ex) public int Gas {get; set;}
    - ex) public int Gas {get; set;} = 10; -> 초기에 대입
    - ex) public int Gas {get; private set;} -> 이렇게 private를 각각 넣어 줄 수 있음
    - 자동 프로퍼티는 setter같은 곳에서 특별한 연산을 해줄때는 만들 수 없음 -> 그때는 수동 프로퍼티를 이용해야함

~~~c#
namespace ConsoleApp9
{
    public class Program
    {
        static void Main(string[] args)
        {
            Car car = new Car();
            car.Gas = 10;
            Console.WriteLine(car.Gas);

        }
    }
    public class Car
    {
        public int Gas { get; set; }
    }
}
~~~

  - 프로퍼티 키워드 init
    - init 키워드를 사용하면 초기화 시점 외에는 변수 변경이 불가능하다.

~~~c#
using System;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Car car = new Car();
            Console.WriteLine(car.Gas);
            //car.Gas = 20; 이렇게 set할수 없음
        }
    }

    public class Car
    {
        private int m_Gas;
        public int Gas { get; init;}

        public Car()
        {
            Gas = 10;
        }
    }
}

// 10
~~~

<br/>

~~~c#
using System;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Car car = new Car()
            {
                Gas = 10
            };
            Console.WriteLine(car.Gas);
        }
    }

    public class Car
    {
        private int m_Gas;
        public int Gas { get; init;}
    }
}

// 10
~~~

<br/>

~~~c#
using System;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Car car = new Car()
            {
                Gas = 10
            };
            Console.WriteLine(car.Gas);
        }
    }

    public class Car
    {
        private int m_Gas;
        public int Gas
        {
            get
            {
                return m_Gas;
            }
            init
            {
                m_Gas = value;
            }
        }
    }
}

// 10
~~~

###### [클래스](#클래스)
###### [Top](#top)

<br/>
<br/>

***

# Generic 형식함수,클래스
  - 동일한 기능을 하지만 파라미터의 타입만 다른 함수가 필요할때 사용한다.
  - 보통은 오버로딩을 통해서, 매개변수의 타입을 바꿔서 같은 이름의 함수를 다시 선언하지만, Generic 형식 매개변수을 사용하면 그럴 필요가 없다 

// Generic 아닌 함수
~~~c#
namespace ConsoleApp1
{
    public class Program
    {
        static void Main(string[] args)
        {
            Program program = new Program();
            program.Print(1);
            program.Print("qwe");
            program.Print(3.4f);
        }

        public void Print(int value)
        {
            Console.WriteLine(value);
        }

        public void Print(string value)
        {
            Console.WriteLine(value);
        }

        public void Print(float value)
        {
            Console.WriteLine(value);
        }
    }
}
~~~

<br/>

~~~c#
namespace ConsoleApp1
{
    public class Program
    {
        static void Main(string[] args)
        {
            Program program = new Program();
            int[] array = { 1, 2, 3, 4, 5 };

            program.Print(array);
        }

        public void Print<T>(T[] value)
        {
            foreach (var item in value)
            {
                Console.WriteLine(item);
            }
        }
    }
}
~~~

<br/>

  - 위와 같이 써야할 오버로딩을 아래와 같이 할 수 있다

// Generic 함수
~~~c#
namespace ConsoleApp1
{
    public class Program
    {
        static void Main(string[] args)
        {
            Program program = new Program();
            program.Print<int>(1);
            program.Print<string>("qwe");
            program.Print<float>(3.4f);

            // 아래와 같이 생략 가능
            program.Print(1);
            program.Print("qwe");
            program.Print(3.4f);
        }

        public void Print<T>(T value)
        {
            Console.WriteLine(value);
        }
    }
}
~~~

<br/>

Generic Class
~~~c#
namespace ConsoleApp1
{
    public class Program
    {
        static void Main(string[] args)
        {
            Abc<int> abc = new Abc<int>();
            abc.value = 1;
            abc.array = new int[] { 1, 2, 3, 4, 5 };

            Abc<string> abc2 = new Abc<string>();
            abc2.value = "Hello";
            abc2.array = new string[] { "Hello", "World" };
        }
    }

    public class Abc<T>
    {
        public T value;
        public T[] array;
    }
}
~~~

<br/>

  - Generic  type제약 조건
    - 특정 type만 받도록 제약을 걸수 있다 “where T : 제약조건”

<br/>

  - where T : struct : T는 값 형식만 받습니다.
  - where T : class : T는 참조 형식만 받습니다.
  - where T : new() : T는 반드시 매게 변수가 없는 생성자가 있어야 합니다.
  - where T : 기반 클래스명 : T는 명시한 기반 클래스의 파생 클래스여야 합니다.
  - where T : 인터페이스명 : T는 명시한 인터페이스를 반드시 구현해야합니다. 여러개의 인터페이스 명시가 가능합니다.
  - where T : U : T는 또 다른 형식 매개 변수 U로부터 상속받은 클래스입니다.

<br/>

~~~c#
namespace ConsoleApp1
{
    public class Program
    {
        static void Main(string[] args)
        {
            Program program = new Program();
            program.Print(1); // 값형식
            program.Print("Hello"); // 참조형식 에러

        }

        public void Print<T>(T value)
            where T : struct
        {
            Console.WriteLine(value);
        }
    }
}
~~~

###### [클래스](#클래스)
###### [Top](#top)

<br/>
<br/>

***

# 범위
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

###### [범위](#범위)
###### [Top](#top)

<br/>
<br/>

***

# 열거형
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

###### [열거형](#열거형)
###### [Top](#top)

<br/>
<br/>

***

# 어서트(assert)
  - 절대로 발생하지 않아야 하는 조건을 런타임 중에 검사
  - 만약 발생한다면 코드가 올바르게 동작 하지 않는 다는것
  - 디버그 모드에서만 동작
  - 어서트 안의 조건식이 거짓일때 메세지 출력
    - "난 이렇게 코드를 짰는데, 이게 아니면 메세지를 출력해라"는 의미
  - Debug.Assert(<표현식>, <메세지>)

###### [어서트](#어서트)
###### [Top](#top)

<br/>
<br/>

***

# 문자열토크나이저
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

###### [문자열 토크나이저](#문자열-토크나이저)
###### [Top](#top)

<br/>
<br/>

***

# 문자열빌더
  - 일반적으로 Console.WritLine( 문자열 + 문자열 + 문자열 ....) 이런식으로 문자열을 더하는 경우에는 하나 더하고 문자열이 만들어지고 다시 하나 더하고 문자열이 만들어지는 식으로 되기 때문에 임시로 만들고 버리는 문자열이 많아 지게 된다.
  - 많은 문자를 쓸때 문자열 빌더가 훨씬 빠르다.
  - stringBuilder <변수명> = new stringBuilder(4096) -> 4096은 길이
    - <변수명>.Append(“K”)
    - <변수명>.AppendLine(“K”)
    - <변수명>.Length
    - <변수명>.Capacity
    - <변수명>.ToString()
    - ...etc...

###### [문자열 빌더](#문자열-빌더)
###### [Top](#top)

<br/>
<br/>

***

# 컬렉션
  - 동일한 형의 여러 자료를 저장하는 공간
  - 요소의 수를 바꿀 수 있음

  - 리스트(List)
    - List<자료형> <변수명> = new List<자료형>() -> 정의
    - List<자료형> <변수명> = new List<자료형>{ 1,2,3 } -> 정의
    - <변수명>.Add(10) / <변수명>.Add(“Bobe”) -> 개체 더하기 ex)Bobe 더하기
    - <변수명>.AddRange(list) -> 컬렉션 더하기 ex)list컬렉션 더하기
    - bool bResul1 = <변수명>.Contains(40) -> 참,거짓 ex)40이 현재 List에 있는지?
    - int index1 = <변수명>.Indexof(40) -> 리스트위치 확인 ex)40이 현제 List에 몇번째에 있는지
    - int index1 = <변수명>.Insert(1,”kk”) -> 정해진 곳에 데이터 넣기 
    - 변수명.Clear() -> 모든 요소 제거
    - etc
	
<br/>

  - Dictonary
    - Dictionary<key, value> 변수명 = new Dictionary<key, value>() -> 정의
    - Dictionary<key, value> 변수명 = new Dictionary<key, value>{ { “key1”, 2}, { “key2”, 2 }  } -> 정의
    - <변수명>.Add(key, value)
    - bool bResul1 = <변수명>.TryAdd(key, value); / 참,거짓
    - <변수명>.Clear()
    - <변수명>.ContainsKey(“kiki”); -> 있는지 자료찾기
    - <변수명>.ContainsValue(“kiki”); -> 있는지 자료찾기
    - bool bResul1 = <변수명>.Remove(“keyi”); -> 키만 지울 수 있음
    - bool bResul1 = 변수명.TryGetValue(“keyi”, out value)
    - <변수명>[key] -> 접근하기

###### [컬렉션](#컬렉션)
###### [Top](#top)

<br/>
<br/>

***

# partial클래스
  - 클래스를 물리적으로만 여러 파일로 분리 할 수 있음

#program.cs
~~~c#
namespace ConsoleApp9
{
    public class Program
    {
        static void Main(string[] args)
        {
            Car car = new Car();
            car.Gas = 10;
            Console.WriteLine(car.Gas);

        }
    }
    public partial class Car
    {
        public string name { get; set; }
    }
}
~~~

<br/>

#Car_Partial.cs
~~~c#
namespace ConsoleApp9
{
    public partial class Car
    {
        public int Gas { get; set; }

    }
}
~~~

###### [partial클래스](#partial클래스)
###### [Top](#top)

<br/>
<br/>	

***

# 구조체(struct)
  - 기능은 없고 데이터만 있는 클래스
  - 구조체는 값형임. 모양은 클래스와 같지만 값형 이라는것!
  - 클래스는 힙영역에 할당 되지만 구조체는 스택영역에 할당 된다.
  - 상속이 불가능함
  - 스택영역에 할당되기 때문에 가비지 컬렉터의 영향을 받지 않아 성능을 높일 수 있다.
  - 생성자를 사용하게 되면, 매개변수가 없는 생성자를 만들 수 없고, 생성자를 생성하게 되면 필드가 모두 할당되어 있어야함

~~~c#
public class Program
{
    static void Main(string[] args)
    {
        List<Car> list = new List<Car>();
        for(int i = 0; i < 200; i++)
        {
            list.Add(new Car());
        }

        for (int i = 0; i < 200; i++)
        {
            list.Add(new Car());
        }

        for (int i = 0; i < 200; i++)
        {
            list.Add(new Car());
        }

        for (int i = 0; i < 200; i++)
        {
            list.Add(new Car());
        }

        for (int i = 0; i < 100; i++)
        {
            list.Add(new Car());
        }
    }

        
}
struct Car
{

}
~~~
  - struct는 값형이기때문에 컴파일시 스텍메모리에 전부 들어가게됨 따라서 개체수가 증가함에 따라 힙메모리가 증가하지 않음

<img src="https://user-images.githubusercontent.com/39178978/155739978-1f9e6874-c9f0-4123-b8d9-002c3c563741.png">

~~~c#
public class Program
{
    static void Main(string[] args)
    {
        List<Car> list = new List<Car>();
        for(int i = 0; i < 200; i++)
        {
            list.Add(new Car());
        }

        for (int i = 0; i < 200; i++)
        {
            list.Add(new Car());
        }

        for (int i = 0; i < 200; i++)
        {
            list.Add(new Car());
        }

        for (int i = 0; i < 200; i++)
        {
            list.Add(new Car());
        }

        for (int i = 0; i < 100; i++)
        {
            list.Add(new Car());
        }
    }

        
}
class Car
{

}
~~~

  - Class는 참조형이기 때문에 개체 수가 증가하면서 힙메모리 또한 증가한다

<img src="https://user-images.githubusercontent.com/39178978/155740297-b88a2be9-707d-4e17-b5ae-819a9a9cff9a.png">

###### [구조체](#구조체)
###### [Top](#top)

<br/>
<br/>

***

# Nullable
  - 참조형의 기본값은 'null' -> 메모리에서 보면 이진수 0과 같음
  - 데이터가 없다는 것을 표시
  - 참조형에는 0을 쓸 수 없음
  - 값형에는 null을 쓸 수 없음
  - 값형에 null을 쓸 수 있게 해주는 것이 Nullable이다.
    - ec) Nullable<자료형> age;

###### [Nullable](#nullable)
###### [Top](#top)

<br/>
<br/>

***

# LINQ : 데이터를 정렬하고, 추출하게 도와주는 C#문법중 하나, C#언어에 직접 쿼리 기능을 통합하는 방식을 기반으로 함

  - where() : 특정 조건에 맞는 데이터만 찾아서 반환
    - <개체>.where(m => <조건>)
~~~c#
public class Program
{
    static void Main(string[] args)
    {
        List<Car> carlist = new List<Car>();
        carlist.Add(new Car(10));
        carlist.Add(new Car(20));
        carlist.Add(new Car(30));
        carlist.Add(new Car(40));
        var list_filter = carlist.Where(m => m.Price > 20);  // m : 리스트에 있는 요소들 / => : 각 요소들에 대해~

        foreach(var item in list_filter)
        {
            Console.WriteLine(item);
        }
    }
}

public class Car
{
    public int Price { get; set; }
    public Car(int price)
    {
        Price = price;
    }
}

출력
ConsoleApp11.Car
ConsoleApp11.Car
~~~

  - OrderBy() : ~에 따라 오름차순으로 정렬후 반환

~~~c#
public class Program
{
    static void Main(string[] args)
    {
        List<Car> carlist = new List<Car>();
        carlist.Add(new Car("3번",20));
        carlist.Add(new Car("2번",40));
        carlist.Add(new Car("1번",20));
        carlist.Add(new Car("4번",30));
        carlist.Add(new Car("5번",20));
        var list_filter = carlist.OrderBy(m => m.Price);

        foreach(var item in list_filter)
        {
            Console.WriteLine($"ID : {item.ID}, Price : {item.Price}");
        }
    }
}

public class Car
{
    public string ID { get; set; }
    public int Price { get; set; }
    public Car(string id, int price)
    {
        ID = id;
        Price = price;
    }
}

출력
ID : 3번, Price : 20
ID : 1번, Price : 20
ID : 5번, Price : 20
ID : 4번, Price : 30
ID : 2번, Price : 40
~~~
		
  - OrderBy() : ~에 따라 오름차순으로 정렬후 반환	
	
~~~c#
public class Program
{
    static void Main(string[] args)
    {
        List<Car> carlist = new List<Car>();
        carlist.Add(new Car("3번",20));
        carlist.Add(new Car("2번",40));
        carlist.Add(new Car("1번",20));
        carlist.Add(new Car("4번",30));
        carlist.Add(new Car("5번",20));
        var list_filter = carlist.OrderBy(m => m.Price)
                                    .ThenBy(m => m.ID);

        foreach(var item in list_filter)
        {
            Console.WriteLine($"ID : {item.ID}, Price : {item.Price}");
        }
    }
}

public class Car
{
    public string ID { get; set; }
    public int Price { get; set; }
    public Car(string id, int price)
    {
        ID = id;
        Price = price;
    }
}
	
출력
ID : 1번, Price : 20
ID : 3번, Price : 20
ID : 5번, Price : 20
ID : 4번, Price : 30
ID : 2번, Price : 40
~~~

  - 그밖에등등
    - OrderByDescending : 내림차순
    - ThenByDescending : 내림차순
    - First : 데이터 셋에서 가장 처음 요소를 반환, 만약 비어 있으면 예외 발생
    - FirstOrDefault : 조건에 맞는 요소를 못 찾을 경우 기본값을 반환(클래스 = null)
    - All : 모든 조건에 합당하면 true, 아니면 false를 반환 
    - Any : 하나라도 조건에 맞으면 true, 아니면 false를 반환
    - ToList : 현재 쿼리 결과를 리스트로 변환해줌
    - ToArray : 현재 쿼리 결과를 배열로 변환해줌
    - ToDictionary : 현재 쿼리 결과를 딕셔너리로 변환해줌
    - Select : 큰 개체 하나에서 몇 개 멤버만 빼서 새로운 개체를 만듬
  - 내부를 알고 써야 하고, 긴 LINQ는 쪼개 쓰기
  - MS Docs문서 참고
    - https://docs.microsoft.com/ko-kr/dotnet/csharp/programming-guide/concepts/linq/sorting-data

###### [LINQ](#linq)
###### [Top](#top)

<br/>
<br/>

***

# 파일 입출력(여기에 있는 함수들은 파일을 알아서 열고 알아서 닫아주는 함수들임)
  - 파일 쓰기	
    - WriteAllText
    - WriteAllLines
    - etc..

~~~c#
static void Main(string[] args)
{
    string message = "C#은 너무 재밌어";
    File.WriteAllText(@"C:\Users\qnals\OneDrive\바탕 화면\PROJECT\message.txt", message);
}	
~~~

<br/>

~~~c#
static void Main(string[] args)
{
    string[] message = { "C#", "은 너무", "재밌어" };
    File.WriteAllLines(@"C:\Users\qnals\OneDrive\바탕 화면\PROJECT\message.txt", message);
}
~~~

  - 파일 읽기
    - ReadAllLines
    - ReadAllText

~~~c#
static void Main(string[] args)
{
    string[] message = { "C#", "은 너무", "재밌어" };
    string[] input = File.ReadAllLines(@"C:\Users\qnals\OneDrive\바탕 화면\PROJECT\message.txt");

    foreach(string line in input)
    {
        Console.WriteLine(line);
    }
}	
~~~

  - 이진 파일 읽고,쓰기(이진 파일은 ASCII 코드를 저장함, 텍스트를 저장한 것이 아님)
    - 일반 텍스트 파일로는 내용을 알 수 없고, HxD같은 프로그램을 통해서 이진파일을 열면 확인 가능
    - ReadAllBytes
    - WriteAllBytes
    - ReadAllBytes
    - ReadAllBytes

###### [파일입출력](#파일입출력)
###### [Top](#top)

<br/>
<br/>

***

# 파일스트림
  - 파일을 전체를 보는 것이 아니라, 일부를 보는것
  - 파일 용량이 클 경우에 메모리에 부담도 되고, 조금씩 읽어 처리하는게 유리하기 때문

<br/>

  - FileMode
    - CreateNew : 새로운 파일을 만듬, 이미 파일이 있다면 예외 발생
    - Create : 새로운 파일을 만듬, 이미 파일이 있다면 덮어 씀(숨김 파일이면 예외 발생)
    - Open : 이미 존재하는 파일을 염, 파일이 없다면 예외 발생
    - OperaoCreate : 파일이 없다면 만들고, 있다면 존재하는 파일을 염
    - Truncate : 이미 존재하는 파일을 염, 파일을 여는 순간에 기존에 있던 내용은 지워지고, 이 모드로 연 파일을 읽으려고 하면 예외 발생
    - Append : 파일이 없다면 만들고, 있다면 존재하는 파일을 염. 열면 파일의 맨 뒤를 가리키고 있음. 파일 끝이 아닌 위치를 탐색하려고 하면 예외 발생 및 읽기 실패의 경우도 예외 발생

<br/>

  - 파일스트림프로퍼티
    - 	CanSeek : 스트림이 읽기를 지원하면 true, 아니면 false를 반환
    - 	CanWrite : 스트림이 쓰기를 지원하면 true, 아니면 false를 반환
    - 	CanRead : 스트림이 탐색를 지원하면 true, 아니면 false를 반환

~~~c#
public class Program
{
    static void Main(string[] args)
    {
        string path = @"C:\Users\qnals\OneDrive\바탕 화면\PROJECT\message.txt";

        FileStream fs = File.Open(path, FileMode.Open);

        bool CanSeek = fs.CanSeek;
        bool CanWrite = fs.CanWrite;
        bool CanRead = fs.CanRead;

        Console.WriteLine($"읽기지원 : {CanSeek}, 쓰기지원 : {CanWrite}, 탐색지원 : {CanRead}");

        fs.Close();
    }

    public bool CanSeek { get; }
    public bool CanWrite { get; }
    public bool CanRead { get; }
}
	
출력
읽기지원 : True, 쓰기지원 : True, 탐색지원 : True
~~~

<br/>

  - 읽기
    - ReadByte()
      - 파일로부터 한 바이트씩 읽어옴(바이트만 읽을 수 있음)
      - 파일을 모두 읽으려면 반복문을 돌려야함
    - Read(byte[] array, int offset, int count)
      - 스트림에서 count만큼의 바이트를 읽어와서 array[offset]부터 array[offset + count -1]에 집어넣는 함수 
      - 바이트만 읽을 수 있음

~~~c#
public class Program
{
    static void Main(string[] args)
    {
        string path = @"C:\Users\qnals\OneDrive\바탕 화면\PROJECT\message.txt";

        FileStream fs = File.Open(path, FileMode.Open);

        byte[] buffer = new byte[fs.Length];
        fs.Read(buffer, 0, 3);

        for(int i = 0; i < buffer.Length; i++)
        {
            Console.WriteLine(buffer[i]);
        }

        fs.Close();
    }
}

출력
99
35
236
0
0
0
0
0
0
0
0
0
0
0
0
0
0
0
0
0
0
0
~~~

  - 쓰기
    - WriteByte : 바이트 한개씩 쓰는 함수(바이트만 쓸 수 있음)
    - write(byte[ ] array, int offset, int count)
      - array[offset]부터 array[offset + count-1]의 내용을 씀

~~~c#
static void Main(string[] args)
{
    byte[] b = { 6, 1, 2, 4, 6, 8, 9, 10 };

    string path = @"C:\Users\qnals\OneDrive\바탕 화면\PROJECT\message.txt";

    FileStream fs = File.Create(path);

    fs.Write(b, 4, 2);

    fs.Close();
}
~~~

  - Seek(long offset, SeekOrigin origin)
    - 현재 스트림의 위치를 origin + offset으로 이동시키는 함수
    - Begin : 스트림의 제일 처음 위치
    - Current : 스트림의 현재 위치
    - End : 스트림의 제일 마지막 위치

#파일 이어쓰기
~~~c#
static void Main(string[] args)
{
    byte[] b = { 6, 1, 2, 4, 6, 8, 9, 10 };

    string path = @"C:\Users\qnals\OneDrive\바탕 화면\PROJECT\message.txt";

    FileStream fs = new FileStream(path, FileMode.Append);

    fs.Write(b, 3, 2);
    fs.Seek(0, SeekOrigin.End);

    fs.Close();
}
~~~

  - using문을 사용하여 Close()를 알아서 처리 할 수 있음
    - 간단한 예시

~~~c#
static void Main(string[] args)
{
    using (FileStream fs = File.Open(path, FileMode.Append))
    {
        fs.Write(bytes, 0, bytes.Length);
    }

}
~~~

  - StreamWriter를 이용해서 문자열을 텍스트에 쓸 수 있음
    - 텍스트를 스트림에 쉽게 저장할 수 있게 해주는 클래스
    - var writer = new StreamWriter(File.Open(path, FileMode.OpenOrCreate)) = var <변수명> = new StreamWriter(Stream stream)

~~~c#
static void Main(string[] args)
{
    string str = "c#은 정말 재밌어";

    string path = @"C:\Users\qnals\OneDrive\바탕 화면\PROJECT\message.txt";

    StreamWriter fs = new StreamWriter(File.Create(path));

    fs.Write(str);

    fs.Close();
}
~~~

  - StreamReader를 이용해서 텍스트 읽기

~~~c#
static void Main(string[] args)
{
    string path = @"C:\Users\qnals\OneDrive\바탕 화면\PROJECT\message.txt";

    StreamReader fs = new StreamReader(File.Open(path, FileMode.Open));

    string r = fs.ReadToEnd();

    Console.WriteLine(r);

    fs.Close();
}
~~~

  - 이런것들도 있음
    - BinaryWriter
    - BinaryReader
    - MemoryStream

###### [파일스트림](#파일스트림)
###### [Top](#top)

<br/>
<br/>

***

# 예외
  - 예외가 생겼을 경우 처리해 주는것
  - try : 블록 안에 있는 코드를 순서대로 실행함, 아무 문제 없이 마지막 줄 까지 실행 됬다면 catch블록은 건너 뛰지만 문제가 생기면 catch블록으로 들어감. 문제가 발생하면 아직 실행되지 않은 try블록 안의 모든 코드를 건너 뜀
  - catch : 예외가 생겼을 경우, 블록으로 들어오게 되며 예외를 잡아주거나 던지는곳, 'Exception <변수>'는 모든 Exception을 잡아줌 
  - finally : 예외가 생기든, 생기지 않든 마지막에 항상 finally블록을 거쳐 가게 된다.
  - 예외를 직접 만드는, 커스텀 예외도 가능함

~~~c#
static void Main(string[] args)
{
    string path = @"C:\Users\qnals\OneDrive\바탕 화면\PROJECT\message.txt";

    string line = "";

    try
    {
        line = File.ReadAllText(path);
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.Message);
    }
    finally
    {
        Console.WriteLine(line);
    }

}
~~~

###### [예외](#예외)
###### [Top](#top)

<br/>
<br/>

***

# 식 본문 메서드
  - 메서드 몸통을 한 줄 식(expression)으로 줄여 쓰는 문법

~~~c#
public static void SetUpdateNotifyProcessByRedis(NotifyRequest request)
    => OnUpdateNotifyProcessByRedis?.Invoke(request);
~~~

###### [식 본문 메서드](#식-본문-메서드)
###### [Top](#top)

<br/>
<br/>

***

# 객체 초기화 식
  - 객체 생성후, 내부에 있는 변수를 초기화 하는 문법
  - 아래 예시에서는 람다식을 사용해서 Action변수를 초기화 했음, 해당 내용의 함수를 담아내서 출력함

~~~c#
namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Car car = new Car(5)
            {
                action = (str1, str2) =>
                {
                    Console.WriteLine(str1 + str2);
                }
            };

            car.action("민규", "바보");
        }

        
    }

    public class Car
    {
        int Num;
        public Action<string, string>? action;

        public Car(int num)
        {
            this.Num = num;
        }
    }
}

// 민규 바보
~~~

###### [객체 초기화 식](#객체-초기화-식)
###### [Top](#top)

<br/>
<br/>

***

# ? null가능 연산자
  - null가능한지 아닌지 표현하는 문법

~~~c#
namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int? age = null;
        }
    }
    public class User
    {
        public string Name { get; set; }  // null이 아니어야 함
        public string? Bio { get; set; }  // null일 수도 있음 (의도적 허용)
        void PrintUser(string? input)
        {
            // input이 null일 수 있으므로 바로 Length를 쓰면 컴파일러가 경고를 줌
            if (input != null)
            {
                Console.WriteLine(input.Length); // 안전
            }
        }
    }
}
~~~

###### [? null가능 연산자](#?-null가능-연산자)
###### [Top](#top)

<br/>
<br/>

***

# null조건부 연산자
  - C#에서 Null 조건부 연산자(?., ?[]) 는 객체가 null인지 매번 if문으로 확인하지 않고도 멤버에 안전하게 접근할 수 있게 해준다
  - 객체 뒤에 ?.을 붙이면, 이 객체가 null이 아니면 다음 멤버를 실행하고, null이면 즉시 null을 반환해라

~~~c#
namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            User? user = null;

            // 기존 방식 (장황함)
            if (user != null)
            {
                string name1 = user.Name;
            }

            // ?. 사용 방식 (간결함)
            string? name = user?.Name;
        }
        public class User
        {
            public string Name { get; set; } = string.Empty;
        }
    }
}
~~~

<br/>

  - 맴버 체이닝

~~~c#
using System;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Address가 null이거나 City가 null이어도 에러 없이 null을 반환합니다.
            string? city = person?.Address?.City;
        }
    }
}
~~~

<br/>

  - 컬렉션 및 인덱서 접근

~~~c#
using System;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<string>? names = GetNames();

            // names가 null이면 접근하지 않고 null 반환
            string? first = names?[0];
        }
    }
}
~~~

<br/>

  - 이벤트 핸들러 호출

~~~c#
using System;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // 기존 방식
            if (OnDataChanged != null)
            {
                OnDataChanged(this, EventArgs.Empty);
            }

            // ?. 사용 방식 (스레드 안전성까지 확보됨)
            OnDataChanged?.Invoke(this, EventArgs.Empty);
        }
    }
}
~~~


###### [null조건부 연산자](#null조건부-연산자)
###### [Top](#top)

<br/>
<br/>

***

# null병합 연산자
  - Null 병합 연산자(??) 는 왼쪽 피연산자가 null이 아니면 그 값을 반환하고, null이면 오른쪽 피연산자를 반환하는 연산자
  - 결과값 = 왼쪽값 ?? 오른쪽값(왼쪽값이 null이 아님: 결과값 = 왼쪽값, 왼쪽값이 null임: 결과값 = 오른쪽값)

~~~c#
using System;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string? input = null;
            string message = input ?? "기본 메시지";

            Console.WriteLine(message); // 출력: "기본 메시지"

            input = "안녕하세요";
            message = input ?? "기본 메시지";

            Console.WriteLine(message); // 출력: "안녕하세요"

            // user가 null이거나, Address가 null이면 "주소 없음"을 반환
            string city = user?.Address?.City ?? "주소 없음";
        }
    }
}
~~~

###### [null병합 연산자](#null병합-연산자)
###### [Top](#top)

<br/>
<br/>

***

# null병합 할당연산자
  - 변수가 null일 때만 값을 할당

~~~c#
using System;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int? number = null;
            number ??= 42;
            Console.WriteLine($"The number is: {number}"); //42

            int? number2= 10;
            number2 ??= 42;
            Console.WriteLine($"The number2 is: {number2}"); //10
        }
    }
}
~~~

###### [null병합 할당연산자](#null병합-할당연산자)
###### [Top](#top)

<br/>
<br/>

***

# Parse,TryParse
  - Parse (예외 발생 가능)
    - 문자열이 해당 타입으로 완벽하게 변환될 것이라고 확신할 때 사용합니다. 변환에 실패하면 예외(Exception)가 발생하며 프로그램이 중단될 수 있습니다.
  - TryParse (안전한 변환)
    - 변환 가능 여부를 bool 값(true/false)으로 반환하고, 실제 변환된 값은 out 키워드를 통해 내보냅니다. 실패해도 예외가 발생하지 않아 성능상 이점이 크고 코드가 안정적입니다.

~~~c#
using System;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {

            // Parse (예외 발생 가능)
            string input = "123";

            try
            {
                int number = int.Parse(input);
                Console.WriteLine($"성공: {number}");
            }
            catch (FormatException)
            {
                Console.WriteLine("숫자 형식이 아닙니다.");
            }


            // TryParse (안전한 변환)
            string input2 = "abc";

            // 변환 성공 시 success는 true, 결과값은 result에 담김
            if (int.TryParse(input2, out int result))
            {
                Console.WriteLine($"성공: {result}");
            }
            else
            {
                Console.WriteLine("변환 실패: 안전하게 로그를 남기거나 사용자에게 알림");
            }

        }
    }
}
~~~

###### [Parse,TryParse](#ParseTryParse)
###### [Top](#top)

<br/>
<br/>

***

# params 가변인수
  - params 키워드는 매개변수의 개수를 미리 정하지 않고 가변적으로 받을 때 사용
  - 메서드 정의 시 마지막 매개변수 앞에 params를 붙입니다
  - 메서드 선언에서 params는 반드시 마지막 자리에 위치해야 합니다

~~~c#
using System;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // 호출할 때: 개수 제한 없이 나열 가능
            PrintNumbers(1, 2, 3);
            PrintNumbers(10, 20, 30, 40, 50);
            PrintNumbers(); // 아무것도 안 보내도 됨 (빈 배열 전달)

        }

        static public void PrintNumbers(params int[] numbers)
        {
            foreach (int n in numbers)
            {
                Console.Write(n + " ");
            }
        }

        static public void PrintNumbers(params int numbers)  // 이거 안됨 컬랙션 형식 이여야함
        {
            foreach (int n in numbers)
            {
                Console.Write(n + " ");
            }
        }

        // (X) 잘못된 예
        // public void Wrong(params int[] nums, string name) // params가 마지막이 아님

        // (O) 올바른 예
        public void Correct(string name, params int[] nums)
        {
            Console.WriteLine($"{name}님이 보낸 숫자: {nums.Length}개");
        }

        public void Log(string level, params object[] args)
        {
            string message = string.Join(" | ", args);
            Console.WriteLine($"[{level}] {message}");
        }
    }
}
~~~

###### [params 가변인수](#params-가변인수)
###### [Top](#top)


  - [params 가변인수](#params-가변인수)
