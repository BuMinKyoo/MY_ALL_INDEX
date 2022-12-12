###### Top
  
  - [메모리 누수 확인](#메모리-누수-확인)

  - [출력](#출력)
    - [Hello World 출력하기](#hello-world-출력하기)
    - [using namespace](#using-namespace)
    - [조정자(Manipulator)](#조정자manipulator)

  - [입력](#입력)
    - [입력하기](#입력하기)
    - [입력버리기](#입력버리기)

  - [참조(Reference)](#참조reference)

  - [문자열](#문자열)
    - [std::string](#stdstring)
    - [함수](#함수)

  - [파일 입출력](#파일-입출력)
    - [파일 스트림](#파일-스트림)
    - [open 함수 모드플래그](#open-함수-모드플래그)
    - [파일 오픈 상태 확인](#파일-오픈-상태-확인)
    - [파일 읽기](#파일-읽기)
    - [파일에 쓰기](#파일에-쓰기)
    - [파일 안에서 탐색하기](#파일-안에서-탐색하기)

  - [접근 제어자(Access Modifier)](#접근-제어자access-modifier)
  
  - [개체](#개체)
    - [개체 생성(스택, 힙 메모리), 개체소멸](#개체-생성스택-힙-메모리-개체소멸)
    - [생성자, 생성자 초기화](#생성자-생성자-초기화)
    - [c++에서 일반적인 클래스 사용법](#c에서-일반적인-클래스-사용법)
    - [소멸자](#소멸자)
    - [Const함수](#const함수)
    - [복사생성자](#복사생성자)
    - [연산자 오버로딩](#연산자-오버로딩)
    - [friend클래스](#friend클래스)
    - [c++ 클래스에 암시적으로 만들어 주는것](#c-클래스에-암시적으로-만들어-주는것)
    - [상속](#상속)
    - [오버라이딩, 다형성, 정적 바인딩, 가상함수(virtual), 동적 바인딩](#오버라이딩-다형성-정적-바인딩-가상함수virtual-동적-바인딩)
    - [추상클래스](#추상클래스)
    - [인터페이스](#인터페이스)

  - [캐스팅](#캐스팅)
    - [static_cast](#static_cast)
    - [reinterpret_cast](#reinterpret_cast)
    - [const_cast](#const_cast)
    - [dynamic_cast](#dynamic_cast)

  - [인라인 함수](#인라인-함수)
  - [static](#static)
  - [벡터(vector), 맵(Map), 셋(Set), STL컨테이너, 템플릿](#벡터vector-맵map-셋set-stl컨테이너-템플릿)

<br/>
  - c++11 / 14/ 17 / … 이후의 추된 부분들

<br/>

  - [auto](#auto)
  - [static_assert](#static_assert)
  - [default](#default)
  - [delete](#delete)
  - [final](#final)
  - [override](#override)
  - [nullptr](#nullptr)
  - [enum class](#enum-class)
  - [unordered_map](#unordered_map)
  - [unordered_set](#unordered_set)
  - [범위기반 for반복문](#범위기반-for반복문)
  - [unique_ptr](#unique_ptr)
    - [유니크 포인터 선언하기](#유니크-포인터-선언하기)
    - [유니크 포인터는 복사, 대입이 안된다](#유니크-포인터는-복사-대입이-안된다)
    - [유니크 포인터를 사용하는 좋은 장소 3가지](#유니크-포인터를-사용하는-좋은-장소-3가지)
  - [make_unique](#make_unique)
    - [make_unique선언하기](#make_unique선언하기)
    - [make_unique는 복사와, 대입이 불가능](#make_unique는-복사와-대입이-불가능)
    - [reset](#reset)
    - [get](#get)
    - [release](#release)
    - [move](#move)
  - [shared 포인터(공유 포인터)](#shared-포인터공유-포인터)
    - [선언하기](#선언하기)
    - [공유 포인터 공유하기](#공유-포인터-공유하기)
    - [포인터 재설정 하기](#포인터-재설정-하기)
  - [weak_ptr 포인터(약한 포인터)](#weak_ptr-포인터약한-포인터)

<br/>
<br/>

***

# 메모리 누수 확인

  - 메모리 누수를 확인 하는 방법

#ConsoleApp.cpp
~~~c++
// 메모리 누수 확인
#include <iostream>
#include <crtdbg.h> // 메모리 할당 및 할당 해제를 추적하는 함수들이 정의되어 있음.

// 몇 행에서 메모리가 누수 되는지 알려줌
#if _DEBUG
#define new new(_NORMAL_BLOCK, __FILE__, __LINE__)
#define malloc(s) _malloc_dbg(s, _NORMAL_BLOCK, __FILE__, __LINE__)
#endif

int main()
{
	int* num = new int;

	_CrtDumpMemoryLeaks(); // 맨 마지막에 넣기
	return 0;
}
~~~

![20221008_161457](https://user-images.githubusercontent.com/39178978/194695111-b864da98-fb20-4db9-b182-032a558fa94e.png)

  - 첫번째는 몇행에서 누수가 발생 했는지, 그리고 두번째는 몇번째 메모리 할당에서 오류가 나는지 알려준다

###### [메모리 누수 확인](#메모리-누수-확인)
###### [Top](#top)

<br/>
<br/>

***

# 출력

  - 출력하기!!

    - [Hello World 출력하기](#hello-world-출력하기)
    - [using namespace](#using-namespace)
    - [조정자(Manipulator)](#조정자manipulator)

###### [출력](#출력)
###### [Top](#top)

<br/>
<br/>

# Hello World 출력하기

  - std::cout 를 사용해서 출력할 수있다.
  - ‘<<’ 왼쪽으로 데이터를 밀어 넣는 다는 느낌으로 암기하면 될것

#ConsoleApp.cpp
~~~c++
#include <iostream>

int main()
{
    std::cout << "Hello World!\n";
}

// 출력값
// Hello World!
~~~

###### [출력](#출력)
###### [Top](#top)

<br/>
<br/>

# using namespace

  - using namespace 를 이용해 편하게 쓰기

#ConsoleApp.cpp
~~~c++
#include <iostream>
using namespace std;

int main()
{
    cout << "Hello World!\n";
}

// 출력값
// Hello World!
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 같은 이름을 가진 함수라도 namespace를 이용해서 사용할 수 있게 된다
  - 아래와 같이 사용할때, main함수 위쪽에 namespace를 정의해야 된다!(잊지 말기!)

#ConsoleApp.cpp
~~~c++
#include <iostream>

using namespace std;

namespace A
{
    void p_rint_A()
    {
        cout << "I am A\n";
    }
}

namespace B
{
    void p_rint_A()
    {
        cout << "I am A-1\n";
    }
}

int main()
{
    A::p_rint_A();
    B::p_rint_A();
}
~~~

###### [출력](#출력)
###### [Top](#top)

<br/>
<br/>

# 조정자(Manipulator)

  - C언어에서 printf를 쓸때 형식 지정자 처럼 사용했던 부분과 비슷하게 이용하게 된다.

#ConsoleApp.cpp
~~~c++
#include <iostream>
using namespace std;

int main()
{
    int number = 123;
    cout << showpos << number << "\n"; // 출력값 : +123
    cout << noshowpos << number << "\n"; // 출력값 : 123

    cout << dec << number << "\n"; // 출력값 : 123
    cout << hex << number << "\n"; // 출력값 : 7b
    cout << oct << number << "\n"; // 출력값 : 173

    cout << uppercase << hex << number << "\n"; // 출력값 : 7B
    cout << nouppercase << hex << number << "\n"; // 출력값 : 7b

    cout << showbase << hex << number << "\n"; // 출력값 : 0x7b
    cout << noshowbase << hex << number << "\n"; // 출력값 : 7b

    double dnumber = 123.456789;
    cout << fixed << dnumber << "\n"; // 출력값 : 123.456789
    cout << scientific << dnumber << "\n"; // 출력값 : 1.2345678E+02

    bool b_bool = true;
    cout << boolalpha << b_bool << "\n"; // 출력값 : true
    cout << noboolalpha << b_bool << "\n"; // 출력값 : 1
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - setw, setfill 등과 같은 것을 이용하기 위해서는 iomanip를 include해줘야 한다

#ConsoleApp.cpp
~~~c++
#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    int number2 = -123;
    cout << setw(6) << left << number2 << "\n"; // 출력값 : |-123  |
    cout << setw(6) << internal << number2 << "\n"; // 출력값 : |-  123|
    cout << setw(6) << right << number2 << "\n"; // 출력값 : |  -123|

    int number = 123;
    cout << setw(5) << number << "\n"; // 출력값 : |  123|
    cout << setfill('*') << setw(5) << number << "\n"; // 출력값 : **123

    float fnumber = 123.456789;
    cout << setprecision(7) << fnumber << "\n"; // 출력값 : 123.4568
}
~~~

###### [출력](#출력)
###### [Top](#top)

<br/>
<br/>

***

# 입력

  - c++ 입력받는법

    - [입력하기](#입력하기)
    - [입력버리기](#입력버리기)

###### [입력](#입력)
###### [Top](#top)

<br/>
<br/>

# 입력하기

  - cin은 배열에 입력을 받을때, 배열의 길이를 알 수 없기 때문에 더 큰 데이터가 들어오면 예외가 발생될 수 있다. 

#ConsoleApp.cpp
~~~c++
#include <iostream>

using namespace std;

int main()
{
	char str[4];
	cin >> str;
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - c++로 안전하게 배열에 입력 받는 방법은 setw를 이용하는 방법이다 

#ConsoleApp.cpp
~~~c++
#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
	char str[4]; // pppp
	cin >> setw(4) >> str; // ppp \O
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 숫자를 입력받을시에, 숫자로 입력 받을 수 있는 부분까지 입력 된다는 것을 기억하기 

#ConsoleApp.cpp
~~~c++
#include <iostream>

using namespace std;

int main()
{
	int num; // 1234QWER
	cin >> num; // 1234
}
~~~

###### [입력](#입력)
###### [Top](#top)

<br/>
<br/>

# 입력버리기

  - clear()
    - 스트림을 좋은 상태로 돌려 줌
      - cin.clear();
  - ignore()
    - 파일 끝에 도달하거나, 지정한 수만큼 문자를 버리면 멈춤
      - cin.ignore(); // 문자1개 버림
      - cin.ignore(10); // 문자10개 버림
      - cin.ignore(10, ‘\n’); // 문자 10개를 버림, 단 그 전에 뉴라인을 만나면 멈춤
      - cin.ignore(LLONG_MAX, ‘\n’); // 최대 문자 수를 버림, 단 그 전에 뉴라인을 만나면 멈춤
  - get()
    - 뉴라인 문자를 만나기까지 모든 문자를 가져옴
    - 뉴라인 문자는 입력 스트림에 남아 있음
      - get(firstName, 100); // 99개 가져오거나, 뉴라인 문자를 만날때까지 가져옴
      -  get(firstName, 100, ‘#’) // 99개 가져오거나, ‘#’ 문자를 만날때까지 가져옴
  - getline()
    - 뉴라인 문자를 만나기까지 모든 문자를 가져옴
    - 뉴라인 문자는 입력 스트림에 남아 있지 않음
      - get(firstName, 100);
      - get(firstName, 100, ‘#’)

###### [입력](#입력)
###### [Top](#top)

<br/>
<br/>

***

# 참조(Reference)

  - 포인터를 사용하게 되면, 여러가지 신경써야할 부분이 많아지지만 참조를 이용하면 훨씬더 안전하게 성능좋게 사용할 수 있다
  - 별칭이다
    - 그냥 이 변수를 다른 이름으로 부르겠다고 하는것이 전부이다
    - int& reference = number;
  - NULL이 될 수 없다
    - int& reference = NULL;  // error
  - 초기화 중에 반드시 선언되어야 한다
    - int& reference;   // error
  - 참조하는 대상을 바꿀 수 없음 // 선언시 참조의 대상이 결정되고 그 이후에 대입은 그냥 값을 그대로 대입하여 바꾼다는것
  - 소유하지 않은 메모리 장소를 가리킬 수 없음
    - 포인터 처럼 플러스하여 다음 메모리를 참조 할 수 없음

#ConsoleApp.cpp
~~~c++
int number1 = 100;
int number2 = 200;

int& reference = number1;
reference = number2; // reference가 number2를 다시 새롭게 참조하는것이 아니라, number2의 값을 reference에 대입 하는것이 되기 때문에 변수 3개 모두 값이 200이됨
~~~

###### [참조(Reference)](#참조reference)
###### [Top](#top)

<br/>
<br/>

***

# 문자열

  - c++ 입력받는법

    - [std::string](#stdstring)
    - [함수](#함수)

###### [문자열](#문자열)
###### [Top](#top)

<br/>
<br/>

# std::string

  - 길이가 증가 할 수 있음(할당을 따로 하지 않아도?!)

#ConsoleApp.cpp
~~~c++
// 입력 받기 가능
#include <string>
std::string firstName;
std::cin >> firstName;
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#ConsoleApp.cpp
~~~c++
// 대입가능, '+' 연산 가능
string firstName = "AAA";
string firstName_c = "BBB";

// 대입
firstName_c = firstName;

// 붙이기
firstName_c = firstName_c  + " CCC" + firstName_c
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#ConsoleApp.cpp
~~~c++
string firstName = "AAA";
string firstName_c = "BBB";

if (firstName  == firstName_c)
{
} 

// 사전 상의 순서를 비교(cmp 함수와 같다고 생각하면 됨)
if (firstName > firstName_c)
{
}
~~~

###### [문자열](#문자열)
###### [Top](#top)

<br/>
<br/>

# 함수

  - size(), length()
    - 문자열의 길이를 반환
  - c_str()
    - const char*
    - 해당 string이 가지고 있는 문자 배열의 시작 주소를 가리키는 포인터를 반환

#ConsoleApp.cpp
~~~c++
string line;
cin >> line;
const char* cLine = line.c_str();
~~~

###### [문자열](#문자열)
###### [Top](#top)

<br/>
<br/>

***

# 파일 입출력

    - [파일 스트림](#파일-스트림)
    - [open 함수 모드플래그](#open-함수-모드플래그)
    - [파일 오픈 상태 확인](#파일-오픈-상태-확인)
    - [파일 읽기](#파일-읽기)
    - [파일에 쓰기](#파일에-쓰기)
    - [파일 안에서 탐색하기](#파일-안에서-탐색하기)

###### [파일 입출력](#파일-입출력)
###### [Top](#top)

<br/>
<br/>

# 파일 스트림

  - 파일 스트림에 <<, >>, 조정자 등도 사용 할 수 있다.
  - "fstream" 해더를 사용한다.
    - ifstream : 파일 입력(읽기 전용으로 파일을 오픈)
    - ofstream : 파일 출력(쓰기 전용으로 파일을 오픈, 파일이 없으면 만듦)
    - fstream : 파일 입력 및 출력(읽기와 쓰기 범용으로 파일을 오픈)

#ConsoleApp.cpp
~~~c++
#include <iostream>
#include <fstream>
using namespace std;

ifstream filestream;
filestream.open("aaaaa.txt")

// 나머지 ofstream , fstream 의 사용법도위와 같음
~~~

###### [파일 입출력](#파일-입출력)
###### [Top](#top)

<br/>
<br/>

# open 함수 모드플래그

  - in, out, ate, app, trunc, binary
  - ex) filestream.open(“aaaaa.txt”, ios_base::in | ios_base::binary);

###### [파일 입출력](#파일-입출력)
###### [Top](#top)

<br/>
<br/>

# 파일 오픈 상태 확인

#ConsoleApp.cpp
~~~c++
#include <iostream>
#include <fstream>
using namespace std;

fstream fs;
fs.open("aaaaa.txt");

if (fs.is_open())
{
    // 처리할 코드
}
~~~

###### [파일 입출력](#파일-입출력)
###### [Top](#top)

<br/>
<br/>

# 파일 읽기

#ConsoleApp.cpp
~~~c++
// fin >> word; 한 문자 읽기
#include <iostream>
#include <fstream>

using namespace std;

int main()
{
	ifstream fin;
	fin.open("qqqqq.txt");

	char word;

	if (fin.fail())
	{
		return 0;
	}
	fin >> word;
	cout << word;
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#ConsoleApp.cpp
~~~c++
// fin.get(character); 한 문자 읽기
#include <iostream>
#include <fstream>

using namespace std;

int main()
{
	ifstream fin;
	fin.open("qqqqq.txt");

		char character;

	fin.get(character);
	if (fin.fail())
	{
		return 0;
	}
	cout << character;
	fin.close();
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#ConsoleApp.cpp
~~~c++
// 한 단어 읽기
#include <iostream>
#include <fstream>

using namespace std;

int main()
{
	ifstream fin;
	fin.open("qqqqq.txt");

	string word;

	if (fin.fail())
	{
		return 0;
	}
	fin >> word;
	cout << word;
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#ConsoleApp.cpp
~~~c++
// 한 줄 읽기
// getline(fin, line); 한 줄 읽기, #include <string> 이 필요하다
#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main()
{
	ifstream fin;
	fin.open("qqqqq.txt");

	string line;
	if (fin.fail())
	{
		return 0;
	}
	getline(fin, line);
	cout << line;
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#ConsoleApp.cpp
~~~c++
// 파일 끝날 때 까지 읽기(예시는 한개만 보여주고, 나머지도 while을 통해서 동일하게 진행하면 된다)
while (!fin,eof())
{
   getline(fin, line);
   cout << line << endl;
{
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#ConsoleApp.cpp
~~~c++
// 복잡한 상황 읽어 내기
// 파일의 데이터 : 100 qwer 200
#include <iostream>
#include <fstream>

using namespace std;

int main()
{
	ifstream fin;
	fin.open("qqqqq.txt");

	string str;
	int num;

	while (true)
	{
		fin >> num;

		if (!fin.fail())
		{
			cout << num << endl;
			continue;
		}

		if (fin.eof())
		{
			break;
		}
		else
		{
			fin.clear(); // clear()을 하기 전에는 다른 것을 읽을 수 없기 때문에 다른 것을 읽기 전에 무조건 clear()를 해야 한다
			fin >> str;
		}
	}
}

// 출력값
// 100
// 200
~~~

###### [파일 입출력](#파일-입출력)
###### [Top](#top)

<br/>
<br/>

# 파일에 쓰기

#ConsoleApp.cpp
~~~c++
// 한줄 넣기
#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main()
{
	ofstream fin;
	fin.open("qqqqq.txt");

	string line;
	getline(cin, line);

	if (!cin.fail())
	{
		fin << line;
	}
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#ConsoleApp.cpp
~~~c++
// 한글자 넣기
#include <iostream>
#include <fstream>

using namespace std;

int main()
{
	ofstream fin;
	fin.open("qqqqq.txt");

	char character = 'q';
	fin.put(character);
}
~~~

###### [파일 입출력](#파일-입출력)
###### [Top](#top)

<br/>
<br/>

# 파일 안에서 탐색하기

  - seekp()
    - fout.seekp(0); // 처음 위치로 이동
    - fout.seekp(20, ios_base::cur) // 현재 위치로부터 20 바이트 뒤로 이동
등등등…나중에 다시 공부해보기

###### [파일 입출력](#파일-입출력)
###### [Top](#top)

<br/>
<br/>

***

# 접근 제어자(Access Modifier)

  - public
    - 누구나 접근 가능
  - protected
    - 자식 클래스에서 접근 가능
  - private
    - 해당 클래스에서만 접근 가능

~~~c++
class NumBerClass
{
public:
	int Num1;
protected:
	int Num2;
private:
	int Num3;
};
~~~

###### [접근 제어자(Access Modifier)](#접근-제어자access-modifier)
###### [Top](#top)

<br/>
<br/>

***

# 개체

    - [개체 생성(스택, 힙 메모리), 개체소멸](#개체-생성스택-힙-메모리-개체소멸)
    - [생성자, 생성자 초기화](#생성자-생성자-초기화)
    - [c++에서 일반적인 클래스 사용법](#c에서-일반적인-클래스-사용법)
    - [소멸자](#소멸자)
    - [Const함수](#const함수)
    - [복사생성자](#복사생성자)
    - [연산자 오버로딩](#연산자-오버로딩)
    - [friend클래스](#friend클래스)
    - [c++ 클래스에 암시적으로 만들어 주는것](#c-클래스에-암시적으로-만들어-주는것)
    - [상속](#상속)
    - [오버라이딩, 다형성, 정적 바인딩, 가상함수(virtual), 동적 바인딩](#오버라이딩-다형성-정적-바인딩-가상함수virtual-동적-바인딩)
    - [추상클래스](#추상클래스)
    - [인터페이스](#인터페이스)

###### [개체](#개체)
###### [Top](#top)

<br/>
<br/>

# 개체 생성(스택, 힙 메모리), 개체소멸

  - 클래스이름 변수;
    - NumberClass num; // 개체 스택 메모리
  - 클래스이름 *변수 = new 클래스이름;
    - NumberClass* num = new NumberClass; // 개체 힙 메모리
    - delete num; // 메모리 해제(num = NULL 할 필요 없음)
  - 클래스이름 *변수 = new 클래스이름();
    - NumberClass* num = new NumberClass(); // 개체 힙 메모리
    - delete num; // 메모리 해제(num = NULL 할 필요 없음)
  - 클래스이름 *변수 = new 클래스이름(생성자매개변수리스트);
    - NumberClass* num = new NumberClass(10, 20); // 개체 힙 메모리
    - delete num; // 메모리 해제(num = NULL 할 필요 없음)
  - 클래스이름 *변수 = new 클래스이름[갯수]
    - NumberClass* num = new NumberClass[10]; // 개체 힙 메모리 배열
    - delete[] num; // 메모리 해제(num = NULL 할 필요 없음)
  - 클래스이름 **변수 = new 클래스이름*[갯수]
    - NumberClass** num = new NumberClass*[10]; // 개체 포인터의 힙 메모리 배열

###### [개체](#개체)
###### [Top](#top)

<br/>
<br/>

# 생성자, 생성자 초기화

  - 생성자 만들기

#ConsoleApp.cpp
~~~c++
#include <iostream>

using namespace std;

class NumberClass
{
public:
	int num;

	// 매개변수 없는 생성자, 내부 변수 초기화
	NumberClass()
	{
		num = 10;
	}
};

int main()
{
	NumberClass numberclass;
	cout << numberclass.num;
}

// 출력값
// 10
~~~


#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 생성자 내에서 초기화 하기
  - ‘:’ 초기화를 시작 한다는것, 그 다음 것을 초기화 할때 ‘,’을 이용 한다
  - 이런식으로 초기화를 진행 해야 하는 이유는 상수와 참조 변수도 초기화를 할 수 있다는것

#ConsoleApp.cpp
~~~c++
#include <iostream>

using namespace std;

class NumberClass
{
public:
	int num1;
	int num2;

	NumberClass()
		: num1(10)
		, num2(20)
	{	
	}
};

int main()
{
	NumberClass numberclass;
	cout << numberclass.num1 << endl;
	cout << numberclass.num2 << endl;
}

// 출력값
// 10
// 20
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 상수, 참조변수 초기화 하기(대입이 아닌 초기화리스트!)

#ConsoleApp.cpp
~~~c++
#include <iostream>

using namespace std;

class NumberClass
{
public:
	int num1;
	const int num2;
	int& num3;


	NumberClass()
		: num1(10)
		, num2(20)
		, num3(num1)
	{	
	}
};

int main()
{
	NumberClass numberclass;
	cout << numberclass.num1 << endl;
	cout << numberclass.num2 << endl;
	cout << numberclass.num3 << endl;
}

// 출력값
// 10
// 20
// 10
~~~

###### [개체](#개체)
###### [Top](#top)

<br/>
<br/>

# c++에서 일반적인 클래스 사용법

  - 일반적으로는 h파일에 클래스의 형태를 만들고, cpp파일안에서 정의 및 사용 하게 된다

#source.h
~~~c++
class NumberClass
{
public:
	int num1;
	int num2;

	NumberClass();
	NumberClass(int x, int y);
};
~~~

#ConsoleApp.cpp
~~~c++
#include <iostream>
#include "source.h"

using namespace std;

NumberClass::NumberClass()
	: num1(10)
	, num2(20)
{
}

NumberClass::NumberClass(int x, int y)
	: num1(x)
	, num2(y)
{
}

int main()
{
	NumberClass numberclass1;
	cout << numberclass1.num1 << " " << numberclass1.num2 << endl;

	NumberClass numberclass2(30, 40);
	cout << numberclass2.num1 << " " << numberclass2.num2 << endl;
}

// 출력값
// 10 20
// 30 40
~~~

###### [개체](#개체)
###### [Top](#top)

<br/>
<br/>

# 소멸자

  - 객체 내에서 메모리 동적 할당을 했을때 필요하다

#ConsoleApp.cpp
~~~c++
// Function함수가 끝나게 되면 Function함수에 안에 있는 모든 스택들을 사라지기 때문에 할당되었던 str의 첫번째 포인터 주소도 사라지게 된다. 따라서 메모리 누수가 발생되기 때문에 함수가 끝나기 전에 소멸자에서 메모리 할당을 해제해야 한다
#include <iostream>

class NumberClass
{
public:
	NumberClass()
		: num1(10)
		, num2(20)
	{
		str = new char[num1];
	}

	~NumberClass()
	{
		delete[] str;
	}

private:
	int num1;
	int num2;
	char* str;
};

void Function()
{
	NumberClass numberclass;
}

int main()
{
	Function();
	return 0;
}
~~~

###### [개체](#개체)
###### [Top](#top)

<br/>
<br/>

# Const함수

  - 이 함수 안에서는 어떤 변수도 바꿀 수 없다는것
  - const함수 안에서 다른 함수를 호출 할때 const함수만 호출 할 수 있다

#ConsoleApp.cpp
~~~c++
#include <iostream>

class NumberClass
{
public:
	NumberClass()
		: num1(10)
		, num2(20)
	{
	}

	int GetNum0()
	{
		return num1;
	}

	int GetNum1() const
	{
		return num1;
	}

	int GetNum2() const
	{
		GetNum0(); // 컴파일 error
		GetNum1(); // 컴파일 ok
	}

private:
	int num1;
	int num2;
};
~~~

###### [개체](#개체)
###### [Top](#top)

<br/>
<br/>

# 복사생성자

  - 같은 클래스에 속한 다른 개체를 이용하여 새로운 개체를 초기화 하는것

<br/>

  - 복사 생성자 만들기

#ConsoleApp.cpp
~~~c++
#include <iostream>

class NumberClass
{
public:
	NumberClass()
		: num1(10)
		, num2(20)
	{
	}

	NumberClass(const NumberClass& other) // 복사 생성자
		: num1(other.num1)
		, num2(other.num2)
	{
	}

private:
	int num1;
	int num2;
};
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 복사 생성자 호출하기

#ConsoleApp.cpp
~~~c++
NumberClass(const NumberClass& other);

NumberClass a; // 매개변수 없는 생성자를 호출
NumberClass b(a); // 복사 생성자를 호출
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 복사 생성자는 자동으로 컴파일러가 생성해줌, 하지만 따로 프로그래머가 정의해 놓는다면 기본 복사 생성자를 만들지 않음

#ConsoleApp.cpp
~~~c++
#include <iostream>
using namespace std;

class NumberClass
{
public:
	NumberClass(int x, int y)
		: mNum1(x)
		, mNum2(y)
	{
	}

	int mNum1;
	int mNum2;
};

int main()
{
	NumberClass numberclass(10,20);
	NumberClass numberclass1(numberclass); // 컴파일 ok

	cout << numberclass1.mNum1 << " " << numberclass1.mNum2;
}

// 출력값
// 10 20
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 복사생성자을 사용 할때에 클래스 내부에서 메모리 할당을 한다면 얕은 복사가 되었을때 문제가 됨으로, 깊은 복사를 해야 한다.

#ConsoleApp.cpp
~~~c++
// 얕은 복사
#include <iostream>

class NumberClass
{
public:
	NumberClass(const int* scores, int count)
		: num1(count)
	{
		p_num2 = new int[num1];
		memcpy(p_num2, scores, num1 * sizeof(int));
	}

	NumberClass(const NumberClass& other) // 복사 생성자
		: num1(other.num1)
		, p_num2(other.p_num2) // 대입과 같다고 생각할 수 있기 때문에 여기서는 배열의 첫번째인 포인터의 주소를 주게 된다. 여기서 문제는, 이 주소를 가지고 있는 어느 객체가 파괴 될때, 소멸자에서 할당 해제를 하게 된다면 다른쪽 객체에서 가지고 있던 포인터 주소는 할당 해체된 주소를 가지고 있게 됨으로 문제가 된다.
	{
	}

private:
	int num1;
	int* p_num2;
};


// 깊은 복사
#include <iostream>

class NumberClass
{

public:
	NumberClass(const int* scores, int count)
		: num1(count)
	{
		p_num2 = new int[num1];
		memcpy(p_num2, scores, num1 * sizeof(int));
	}

	NumberClass(const NumberClass& other) // 복사 생성자
		: num1(other.num1)
	{
		p_num2 = new int[num1]; // 새롭게 힙메모리에 메모리 할당
		memcpy(p_num2, other.p_num2, num1 * sizeof(int)); // 메모리 할당된 곳에 가지고 왔던 배열의 데이터를 그대로 깊은 복사, 이렇게 하게 되면, 각 객체가 가리키는 포인터의 주소가 다르고, 서로 각각 독립적으로 데이터를 가지고 있게 된다. 따라서 이때는 객체 하나가 소멸자로 인해서 할당된 메모리를 모두 해체 했다고 해도, 각각의 객체에는 큰 에러가 없다
	}

private:
	int num1;
	int* p_num2;
};
~~~

###### [개체](#개체)
###### [Top](#top)

<br/>
<br/>

# 연산자 오버로딩

  - c++을 우리가 사용하는 언어에서 일반적으로 사용하는 연산에 대한 것까지도 프로그래밍 하여 재 정의 할 수 있다.

#ConsoleApp.cpp
~~~c++
// 연산자 오버로딩
#include <iostream>
using namespace std;

class NumberClass
{
public:
	NumberClass(int x, int y)
		: mNum1(x)
		, mNum2(y)
	{
	}

	NumberClass()
		: mNum1(0)
		, mNum2(0)
	{
	}

	NumberClass operator+(const NumberClass& other) const
	{
		NumberClass sum;
		sum.mNum1 = mNum1 + other.mNum1;
		sum.mNum2 = mNum2 + other.mNum2;
		
		return sum;
	}

	int GetNum1()
	{
		return mNum1;
	}

	int GetNum2()
	{
		return mNum2;
	}

private:
	int mNum1;
	int mNum2;
};

int main()
{
	NumberClass A(5,10);
	NumberClass B(10,20);
	NumberClass C = A + B;
	NumberClass D = A.operator+(B); // 위와 동일

	cout << C.GetNum1() << " " << C.GetNum2() << endl;
	cout << D.GetNum1() << " " << D.GetNum2() << endl;
	
	// 출력값
	// 15 30
	// 15 30
}
~~~

###### [개체](#개체)
###### [Top](#top)

<br/>
<br/>

# friend클래스

  - friend클래스를 사용하게 되면, 다른 곳에서 private멤버 함수,변수를 호출할 수 있게 해준다
  - 1. class내에서 private를 호출 할 수 있게 해주는것
  - 2. 전역함수 내에서 private를 호출 할 수 있게 해주는것

#ConsoleApp.cpp
~~~c++
// 1. class내에서 private를 호출 할 수 있게 해주는것
#include <iostream>
using namespace std;

class NumberClass
{
	friend class NumberClass2; // NumberClass2는 NumberClass의 private함수,변수를 직접적으로 호출 할 수 있게 된다

public:
	NumberClass()
		: mNum1(10)
		, mNum2(20)
	{
	}

private:
	int mNum1;
	int mNum2;
};

class NumberClass2
{
public:
	void Function()
	{
		NumberClass numberclass;
		cout << numberclass.mNum1 << endl; // NumberClass의 private인 mNum1멤버 변수를 호출
	}
};

int main()
{
	NumberClass2 numberclass2;
	numberclass2.Function();
}

// 출력값
// 10
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#ConsoleApp.cpp
~~~c++
// 2. 전역함수 내에서 private를 호출 할 수 있게 해주는것
#include <iostream>
using namespace std;

class NumberClass
{
	friend void Function();
public:
	NumberClass()
		: mNum1(10)
		, mNum2(20)
	{
	}

private:
	int mNum1;
	int mNum2;
};

void Function()
{
	NumberClass numberclass;
	cout << numberclass.mNum1;
}

int main()
{
	Function();
}

// 출력값
// 10
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#ConsoleApp.cpp
~~~c++
// operator<< 연산자 오버로딩 하기
// 이부분은 좀 어려우니 일단 이렇게 한다는 것만 알아두고 넘어가기
#include <iostream>

class NumberClass
{
	friend std::ostream& operator<<(std::ostream& os, const NumberClass& rhs);
public:
	NumberClass()
		: mNum1(10)
		, mNum2(20)
	{
	}

private:
	int mNum1;
	int mNum2;
};

std::ostream& operator<<(std::ostream& os, const NumberClass& rhs)
{
	os << rhs.mNum1 << ", " << rhs.mNum2;
	return os;
}

int main()
{
	NumberClass numberclass;
	std::cout << numberclass << std::endl;
}

// 출력값
// 10, 20
~~~

###### [개체](#개체)
###### [Top](#top)

<br/>
<br/>

# c++ 클래스에 암시적으로 만들어 주는것

  - 매개변수 없는 생성자
  - 복사 생성자
  - 소멸자
  - 대입(=) 연산자

<br/>

  - 암시적 기본 생성자 지우기
  - 기본 생성자는, class내에서 다른 생성자가 있으면 만들지 않기 때문에 호출 할 수 없는 private안에 생성자를 만든다

#ConsoleApp.cpp
~~~c++
#include <iostream>

class NumberClass
{
private:
	NumberClass()
	{
	}

	int mNum1;
	int mNum2;

};

int main()
{
	NumberClass n; // 생성자가 없으니 컴파일 에러
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 암시적 복사 생성자 지우기

#ConsoleApp.cpp
~~~c++
#include <iostream>
using namespace std;

class NumberClass
{
public:
	NumberClass(int x, int y)
		: mNum1(x)
		, mNum2(y)
	{
	}

	int mNum1;
	int mNum2;

private:
	NumberClass(const NumberClass& other)
	{
	}

};

int main()
{
	NumberClass numberclass(10,20);
	NumberClass numberclass1(numberclass); // 컴파일 에러
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 암시적 소멸자 지우기
  - 하지만 소멸자를 지우는것은 큰 에러가 발생할 수 있음;;; 소멸자는 중요함

#ConsoleApp.cpp
~~~c++
#include <iostream>
using namespace std;

class NumberClass
{
private:
	int mNum1;
	int mNum2;

	~NumberClass()
	{

	}
};

int main()
{
	NumberClass* numberclass = new NumberClass();
}
~~~

###### [개체](#개체)
###### [Top](#top)

<br/>
<br/>

# 상속

  - 다른 클래스의 특성들을 내려받는것

![20221008_172512](https://user-images.githubusercontent.com/39178978/194697984-ae5a32e5-8106-4738-9c85-a04c7ce468dd.png)

#ConsoleApp.cpp
~~~c++
#include <iostream>
using namespace std;

class NumberClass
{
public:
	int m_Snum1;
	int m_Snum2;
	int sum()
	{
		return m_Snum1 + m_Snum2;
	}

};

class Number_one : public NumberClass // 부모 클래스에 생성자가 있는 경우 public NumberClass(인자)로 호출하면 된다
{
public:
	Number_one(int x)
		: num1(x)
	{

	}

private:
	int num1;
};

int main()
{
	Number_one numberone(10);
	numberone.m_Snum1 = 1;
	numberone.m_Snum2 = 2;

	cout << numberone.sum();
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 상속시에, 부모클래스의 생성자를 암시적으로 호출해 주기 때문에 만약, 부모클래스를 명시적으로 써놨다면 그것을 꼭 호출해야 컴파일 에러를 피 할 수 있음

#ConsoleApp.cpp
~~~c++
#include <iostream>
using namespace std;

class NumberClass
{
public:
	int m_Snum1;
	int m_Snum2;

	NumberClass(int x, int y) // 생성자를 만들었기 때문에 컴파일러가 기본 생성자인 NumberClass() {} 를 만들지 않음
		: m_Snum1(x)
		, m_Snum2(y)
	{

	}
};

class Number_one : public NumberClass
{
public:
	int num1;

	Number_one() // 부모 생성자를 호출해야 되기 때문에 자식 생성자를 만들때 부모 생성자를 호출
		: NumberClass(10, 20)
	{

	}
};

int main()
{
	Number_one numberone;
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 상속된 부모에게 데이터 전달

#ConsoleApp.cpp
~~~c++
#include <iostream>
using namespace std;

class NumberClass
{
public:
	int m_Snum1;
	int m_Snum2;

	NumberClass(int x, int y)
		: m_Snum1(x)
		, m_Snum2(y)
	{

	}
};

class Number_one : public NumberClass
{
public:
	int num1;

	Number_one(int x, int y)
		: NumberClass(x, y)
	{

	}
};

int main()
{
	Number_one numberone(10, 20);
}
~~~

###### [개체](#개체)
###### [Top](#top)

<br/>
<br/>

# 오버라이딩, 다형성, 정적 바인딩, 가상함수(virtual), 동적 바인딩

  - 오버라이딩
    - 부모 클래스가 가지고 있는 기능의 형태만 가져와서, 자식 클래스에서 그 기능에 맞게 바꿔서 쓰는것(하는 행동의 정의는 똑같은데, 실제 하는 행동의 디테일이 다르다), ex) 말한다는 것은 똑같지만, 무엇을 말하는지가 다르다
    - ex) 부모 : 말을 한다 / 자식 고양이 : 야옹 할꺼다 / 자식 강아지 : 멍멍 할꺼다
    - 오버라이딩을 통해서 다형성을 형성한다
  - 정적 바인딩
    - 가상 함수를 쓰지 않을때, 컴파일을 했을때 바로 어떤 함수를 쓸지 결정 되는 것
  - 가상함수
    - 동적 바인딩 이라고 함, 늦은 바인딩이라고함(실행 중에 어떤 함수를 호출할지 결정)
    - 자식 클래스의 멤버 함수가 언제나 호출됨
    - 가상 테이블이 꼭 필요하게 되고, 그 가상 테이블을 통해서 작동하게 된다

#ConsoleApp.cpp
~~~c++
// 오버라이딩, 다형성의 기본적인 사용 방법
#include <iostream>

using namespace std;

class Animal
{
public:
	void Speak()
	{
		cout << "Animal Speak" << endl;
	}
};

class Dog : public Animal
{
public:
	void Speak()
	{
		cout << "bark bark" << endl;
	}
};

int main()
{
	Dog* dog = new Dog();
	dog->Speak();  // bark bark;
	Animal* animal = new Dog();
	animal->Speak();  // Animal Speak;
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 가상함수(virtual) 사용하기

#ConsoleApp.cpp
~~~c++
// 가상함수는 부모에게 적용하면 그 밑에 자식에게 모두 적용되어짐. 따라서 아래의 virtual를 쓴 부분은 좋은 코딩 표준은 아니고, 자식에게도 전부 virtual을 달아 주는것이 나중에 그 자식이 다시 상속을 할때 판단하기 쉽게 해줌
#include <iostream>

using namespace std;

class Animal
{
public:
	virtual void Speak()
	{
		cout << "Animal Speak" << endl;
	}
};

class Dog : public Animal
{
public:
	void Speak()
	{
		cout << "bark bark" << endl;
	}
};

int main()
{
	Dog* dog = new Dog();
	dog->Speak();  // bark bark;
	Animal* animal = new Dog();
	animal->Speak();  // bark bark;
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 가상소멸자

#ConsoleApp.cpp
~~~c++
#include <iostream>

using namespace std;

class Animal
{
public:
	virtual ~Animal()
	{

	}

private:
	int mNum1;
};

class Dog : public Animal
{
public:
	virtual ~Dog()
	{
		delete[] mNums;
	}
private:
	int* mNums;
};

int main()
{
	Dog* dog = new Dog();
	delete dog; // 자식을 지우게 되면, 자식 소멸자가 실행된후, 부모 소멸자가 실행된다

	Animal* animal = new Animal();
	delete animal; // 부모를 지우개 되면, 부모 소멸자만 실행되기 때문에 자식쪽에 메모리 할당된 곳이 있다면 메모리 누수가 발생된다. 따라서 소멸자도 가상 소멸자를 사용하여야 한다

}
~~~

###### [개체](#개체)
###### [Top](#top)

<br/>
<br/>

# 추상클래스

  - 구체적인 함수의 구현이 되어 있지 않은 클래스
  - 추상 클래스에서 개체를 만들 수 없음
  - 추상 클래스를 포인터나 참조 형으로는 만들 수 있음
  - 추상 클래스를 상속받으면 구현이 되어 있지 않은 함수를 무조건 구현해야 한다

#ConsoleApp.cpp
~~~c++
#include <iostream>

using namespace std;

class Animal
{
public:
	virtual ~Animal(){};
	virtual void Speak() = 0; // 자식 클래스에서 무조건 구현 해야함

private:
	int mNum1;
};

class Dog : public Animal
{
public:
	virtual ~Dog() {};
	virtual void Speak() // 추상 클래스를 구현한것
	{

	}
private:
	int mNums;
};

int main()
{
	Animal animal; // Animal클래스는 추상 클래스 이므로 객체를 만들 수 없음, 컴파일 error
	Animal* animal1 = new Animal(); // Animal클래스는 추상 클래스 이므로 객체를 만들 수 없음, 컴파일 error

	Animal* dog = new Dog(); // Animal클래스는 virtual이 되어 있기 때문에, 결국 함수는 자식 클래스를 향하게 되있기 때문에 요렇게 사용 할 수 있음, 컴파일 ok

	Animal& dogRef = *dog; // 레퍼런스도 포인터와 같기 때문에, Animal* dog = new Dog(); 를 하나더 가지는 것과 같다. 즉, Dog의 함수를 사용하기 때문에, 컴파일 ok
}
~~~

###### [개체](#개체)
###### [Top](#top)

<br/>
<br/>

# 인터페이스

  - 추상 클래스와 비슷한 형태 이지만, 추상클래스가 함수 이외의 변수들이 있는데 반해서, 인터페이스는 변수가 존재하지 않고, 함수만 존재함

#ConsoleApp.cpp
~~~c++
#include <iostream>

using namespace std;

class IAnimal
{
public:
	virtual void Speak() = 0;
};

class IFunction
{
public:
	virtual void Jump() = 0;
};

class Dog : public IAnimal, public IFunction
{
public:
	virtual void Speak()
	{

	}

	virtual void Jump()
	{

	}

private:
	int mNums;
};

int main()
{
	Dog dog;
}
~~~

###### [개체](#개체)
###### [Top](#top)

<br/>
<br/>

***

# 캐스팅

  - 형변환(캐스팅) 하는 방법에는 여러가지가 있는데, 컴파일러가 해주는 묵시적 형변환, 프로그래머가 따로 지정하는 명시적 형변환 이 있다. 또한 이 장에서 설명하는 c++에서 제공되는 다양한 형변환 방법들이 있다. 이렇게 C++에 다양한 방법이 있는 이유는, C방법에서는 그 어떤 상황도 묘상하게 캐스팅해 바꿔 버릴 수 있기 때문에 C++에서는 그것을 안전하게 방지하고, 프로그래머의 실수를 방지해 주는 방법들이 많이 있기 때문이다

    - [static_cast](#static_cast)
    - [reinterpret_cast](#reinterpret_cast)
    - [const_cast](#const_cast)
    - [dynamic_cast](#dynamic_cast)

###### [캐스팅](#캐스팅)
###### [Top](#top)

<br/>
<br/>

# static_cast

  - 두 숫자 형 간의 변환

#ConsoleApp.cpp
~~~c++
//사용법
#include <iostream>
using namespace std;

int main()
{
	float num1 = 3.1f;
	int num2 = static_cast<int>(num1);

	cout << num2;
}
~~~

  - 개체 포인터

#ConsoleApp.cpp
~~~c++
#include <iostream>
using namespace std;

class Animal
{
	void Sound()
	{
		cout << "나는 동물 클래스" << endl;
	}

};

class Cat : Animal
{
	void Sound()
	{
		cout << "나는 고양이 클래스" << endl;
	}
};

class Dog : Animal
{
	void Sound()
	{
		cout << "나는 강아지 클래스" << endl;
	}
};

class Table
{
	void Sound()
	{
		cout << "나는 책상 클래스" << endl;
	}
};

int main()
{
	Cat* cat = new Cat;
	Cat* cat1 = new Cat;
	Dog* dog = new Dog;

	Table* table = new Table;

	cat = (Cat*)dog; // 명시적 형변환, 컴파일 ok 지만 말도 안되는 상황 발생함
	cat1 = static_cast<Cat*>(dog); // static_cast 형변환, 이런 맞지 않은 상황에서 에러를 밷기 때문에 안정적

	table = (Table*)dog; // 명시적 형변환, 컴파일 ok 지만 말도 안되는 상황 발생함
	table = static_cast<Table*>(dog); // static_cast 형변환, 이런 맞지 않은 상황에서 에러를 밷기 때문에 안정적, class의 부모 자식관의 상속 관계가 아니기 때문에 말이 안됨

}
~~~

###### [캐스팅](#캐스팅)
###### [Top](#top)

<br/>
<br/>

# reinterpret_cast

  - 가장 위험한 캐스팅
  - 말도 안되는 형변환을 할 수 있음
  - 따라서,  일반적인 상황에서는 static_cast 을 쓰면 될것이고, 정말 희한하게 사용할 그 상황에서는 reinterpret_cast를 쓰게 될 수도 있을 것 같다
  - 더 공부하기!!

###### [캐스팅](#캐스팅)
###### [Top](#top)

<br/>
<br/>

# const_cast

  - 다음에 쓸때 자세히 공부하기

###### [캐스팅](#캐스팅)
###### [Top](#top)

# dynamic_cast

  - 다음에 쓸때 자세히 공부하기

###### [캐스팅](#캐스팅)
###### [Top](#top)

<br/>
<br/>

***

# 인라인 함수

  - 복붙과 같은것
  - 매크로와 같은것
  - 하지만 디버깅을 할 수 있음

#ConsoleApp.cpp
~~~c++
/#include <iostream>
using namespace std;

inline int Outnum(int num)
{
	return num * num;
}

int main()
{
	int num1 = Outnum(5);
	int num2 = Outnum(25);
	return 0;
}

//단지 아래와 같이 복붙으로 바꿔 줄 뿐인것

#include <iostream>
using namespace std;

inline int Outnum(int num)
{
	return num * num;
}

int main()
{
	int num1 = Outnum(5); // 5 * 5
	int num2 = Outnum(25); // 25 * 25
	return 0;
}
~~~

###### [인라인 함수](#인라인-함수)
###### [Top](#top)

<br/>
<br/>

***

# static

  - 클래스 속 정적 변수, 함수
    - 개체를 만들지 않고도 호출 할 수 있고, 개체를 많이 만든다해도 한개만 존재하며 각각의 개체가 그것을 서로 공유한다
    - 정적 맴버 함수안에서 비정적 맴버 변수를 호출 할 수 없음. 왜냐하면 비정적 변수는 각각의 객체가 별도로 가지기 때문에 어떤 객체를 호출 하는지 알 수 없기 때문에
  - 함수속 정적 맴버 변수
    - 함수가 종료 됐을때 스택은 전부 사라지지만 함수속에 있는 정적 변수는 없어 지지 않고 누수가 될 수 있다.

###### [static](#static)
###### [Top](#top)

<br/>
<br/>

***

# 벡터(vector), 맵(Map), 셋(Set), STL컨테이너, 템플릿

  - 벡터
    - 어떤 자료형도 넣을 수 있는 동적 배열
    - include “vector” 필요
    - 나중에 필요할때 더 공부하기

  - 맵
    - 딕셔너리 처럼 키와 값의 쌍을 저장함

  - 셋
    - 맵에서 값을 뺀 데이터와 같다
    - 나중에 필요할때 더 공부하기

  - STL컨테이너
    - 링크드리스트
    - 큐
    - 스택
    - 등등

  - 템플릿
    - 어떤 자료형이든 필요할때 컴파일러가 대신 만들어줌. 그러한 틀을 가질 수 있게 해주는것

###### [벡터(vector), 맵(Map), 셋(Set), STL컨테이너, 템플릿](#벡터vector-맵map-셋set-stl컨테이너-템플릿)
###### [Top](#top)

<br/>
<br/>

***

# auto

  - 자료형을 추론해줌
  - 실제 자료형은 컴파일하는 동안 결정됨
  - auto변수는 반드시 초기화 해줘야함

~~~c++
auto x; // 에러
auto x = "qwe"
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - auto를 사용하여 포인터를 받을 때 : auto 또는 auto*
  - 컴파일러가 포인터인지 아닌지 확인해서 알아서 받기 때문에 사실은 가독성이 좋지 않음 그래서 포인터 자료형이라면 auto*를 임의로 사용해서 가독성을 높이는 것이 좋음

~~~c++
auto a = 3;
auto b = ptr;  // ptr이 포인터라면 auto는 그 포인터를 받음
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - auto를 사용하여 참조 받을 때 : auto&
  - 컴파일로는 참조형을 구분하지 못하기 때문에! 단지 대입을 한다고 해서 참조형을 받을 수 없다 이때는 그냥 복사하는 식으로 받아가게 된다

~~~c++
auto& a = b // b는 참조자료형
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - auto를 사용하여 const 받을 때 : auto&, const auto&
  - const자료형을 그대로 이어 받게 된다
  - 가독성이 좋지 않음 ㅠ 가능하면 const auto&를 사용하자!

~~~c++
const int b = 10;
auto& a = b
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - auto를 사용하는 좋은 곳
  - 벡터나, 맵 반복자 처럼 긴 타입을 사용할때 아주 간편해 진다!

~~~c++
for (std::vector<int>::const_iterator it = v.begin( ); it != v.end( ); ++it)
{

}

// 위에 것을 아래와 같이 바꿀 수 있음

for (auto it = v.begin( ); it != v.end( ); ++it)
{

}
~~~

###### [auto](#auto)
###### [Top](#top)

<br/>
<br/>

***

# static_assert

  - 일반적인 assert는 컴파일 후 실행중에 문제가 있는지 잡아 주는데 비해서 static_assert는 컴파일 중에 잡아주기 때문에 실행전에 문제를 잡을 수 있게 해줌
  - 컴파일중에 잡을 수 있는것은 이걸로 다 잡자!
  - ex) 특정한 구조체의 크기가 50인 것으로 기준을 다 잡아 놨는데, 이 부분안에 다른 사람이 더 추가 하게 되면 크기가 커지니 그런것들을 방지 할 수 있음

###### [static_assert](#static_assert)
###### [Top](#top)

<br/>
<br/>

***

# default

  - 컴파일러가 특정한 생성자, 연산자 및 소멸자를 만들어 낼 수 있음
  - 그래서, 비어 있는 생성자나 소멸자를 구체화할 필요가 없음
  - 컴파일러가 기본적으로 만들어주는 것들을 사용해도 큰 문제가 없다는 것을 명시적으로 표시해 주는 용도로 사용!!!(컴파일러는 다른것이 없고 사람이 볼때가 달라진다)

~~~c++
#include <iostream>

class NumberClass
{
public:
	int num1 = 5;
	int num2 = 10;

	NumberClass() = default;
	NumberClass(int n, int n2)
		: num1(n)
		, num2(n2)
	{

	}

};

int main()
{
	NumberClass numberclass(10, 20); // d
	NumberClass numberclass2;

}
~~~

###### [default](#default)
###### [Top](#top)

<br/>
<br/>

***

# delete

  - 컴파일러가 자동으로 생성자를 만들어 주길 원치 않는다면 사용 할 수 있음
  - 원래는 private접근자를 이용해서 컴파일러가 생성자나 복사자를 만드는 것을 방지 했지만 delete키워드를 사용하면됨

~~~c++
#include <iostream>

class NumberClass
{
public:
	int num1 = 5;
	int num2 = 10;

	NumberClass(NumberClass& n) = delete;
	NumberClass(int n, int n2)
		: num1(n)
		, num2(n2)
	{

	}

};

int main()
{
	NumberClass numberclass(10, 20); // d
	NumberClass numberclass2(numberclass); // 지워진 함수 이므로 컴파일이 되지 않음

}
~~~

###### [delete](#delete)
###### [Top](#top)

<br/>
<br/>

***

# final

  - 상속되지 않도록 막는것(내 밑으로는 물려주지 않을꺼야 라는 뜻)

~~~c++
#include <iostream>

class Animal final
{
public:
	int m__age;

	Animal(int age)
		: m__age(age)
	{

	}

};

class Cat : public Animal // final키워드를 사용함으로써 상속 에러가 발생
{
public:
	int m_age;
	void bark()
	{
		std::cout << "야옹~" << std::endl;
	}
};

int main()
{

}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 보통은 한번 상속받은 자식 클래스에서 final을쓰는 것이 일반적인 상황이다

~~~c++
#include <iostream>

class Animal
{
public:
	int m__age;

	Animal(int age)
		: m__age(age)
	{

	}

};


class Cat final : public Animal
{
public:
	int m_age;
	void bark()
	{
		std::cout << "야옹~" << std::endl;
	}
};

int main()
{

}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - final키워드를 사용해서 함수 override를 막을 수 있다

~~~c++
#include <iostream>

class Animal
{
public:
	virtual void bark() final
	{
		std::cout << "나는 동물 클래스" << std::endl;
	}

};


class Cat : public Animal
{
public:
	virtual void bark() override // 컴파일 에러 : 부모클래스에 있는 함수의 override를 막는다
	{
		std::cout << "야옹~" << std::endl;
	}
};

int main()
{
	Animal* animal = new Cat();
}
~~~

###### [final](#final)
###### [Top](#top)

<br/>
<br/>

***

# override

  - 부모가 가지고 있는 함수를 오버라이드를 한다는 뜻
  - 프로그래머가 실수로 부모의 함수를 오버라이드 하려고 했지만 실수로 인해 인자 자료형을 잘못 입력했을때, 그것은 컴파일러가 오버라이드가 아니라 부모함수 따로 자식 함수 따로로 생각하게 된다

~~~c++
#include <iostream>

class Animal
{
public:
	virtual void sum(int a)
	{

	}

};


class Cat : public Animal
{
public:
	virtual void sum(float a) // 부모와 인자의 자료형이 다르기 때문에 오버라이드가 아니라 각각 다른 함수로 인식 된다
	{

	}
};

int main()
{
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 이럴때 override를 사용하게 되면 그것을 방지 할 수 있다

~~~c++
#include <iostream>

class Animal
{
public:
	virtual void sum(int a)
	{

	}

};


class Cat : public Animal
{
public:
	virtual void sum(float a) override // 컴파일 에러 : 부모의 함수를 오버라이드 한것이 아니기 때문에
	{

	}
};

int main()
{
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - override를 사용함으로써 실수를 방지 할 수 있는 부분2

~~~c++
#include <iostream>

class Animal
{
public:
	void sum(int a)
	{

	}

};


class Cat : public Animal
{
public:
	void sum(float a) override // 컴파일 에러 : 오버라이드는 가상 함수만 가능하기 때문에, 부모가 가지고 있는 함수가 가상 함수 인지 아닌지도 실수를 방지 할 수 있다
	{

	}
};

int main()
{
}
~~~

###### [override](#override)
###### [Top](#top)

<br/>
<br/>

***

# nullptr

  - null은 상수 0 이고, nullptr은 null포인터 상수라고 보면 된다
  - 포인터 에서는 언제나 nullptr을 사용하자!!!

~~~c++
int num = nullptr // 컴파일 에러
int* num2 = nullptr // 컴파일 성공
~~~

###### [nullptr](#nullptr)
###### [Top](#top)

<br/>
<br/>

***

# enum class

  - 전에 있었던 c++ enum은 단지 정수를 정의 해놓은 것이 다라서 마음대로 쓸 수 있어 문제가 많았지만, c#의 enum처럼 사용 할 수 있게 enum class를 만들었다

~~~c++
#include <iostream>

enum class Enumbers
{
	num0,
	num1,
	num2,
	num3,
	count
};

enum class Eanimal
{
	num0,
	num1,
	num2,
	num3,
	count
};

int main()
{
	Enumbers a = Enumbers::num0; // 컴파일 ok
	int num = Enumbers::num1; // 컴파일 X
	Eanimal b = Enumbers::num0; // 컴파일 x

}
~~~

###### [enum class](#enum-class)
###### [Top](#top)

<br/>
<br/>

***

# unordered_map

  - 초기의 STL은 자동으로 정렬해 주는 기능 때문에, 속도가 저하되는 부분이 있으니, 이번에 나온 unordered_map은 정렬을 해주지 않기 때문에 속도가 빨라 진다.

<br/>

  - unordered_map 출력하기(먼저입력된 것이 맨 첫번째에 나오지 않게 된다!)

~~~c++
#include <iostream>
#include <unordered_map>

int main()
{
	std::unordered_map<std::string, int> scores;

	scores["qweqwe"] = 40;
	scores["xcvxcv"] = 30;
	scores["uikiu"] = 10;

	for (auto it = scores.begin(); it != scores.end(); it++)
	{
		std::cout << it->first << " : " << it->second << std::endl;
	}

	return 0;
}

// 출력값
// xcvxcv : 30
// qweqwe : 40
// uikiu : 10
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - unordered_map 버킷 내용 보기

~~~c++
#include <iostream>
#include <unordered_map>

int main()
{
	std::unordered_map<std::string, int> scores;

	scores["qweqwe"] = 40;
	scores["xcvxcv"] = 30;
	scores["uikiu"] = 10;

	for (size_t i = 0; i < scores.bucket_count(); i++)
	{
		std::cout << "Bucket #" << i << " : ";
		for (auto it = scores.begin(i); it != scores.end(i); it++)
		{
			std::cout << it->first << " : " << it->second;
		}
		std::cout << std::endl;
	}
	

	return 0;
}

// 출력값
// Bucket #0 :
// Bucket #1 :
// Bucket #2 : uikiu : 10
// Bucket #3 :
// Bucket #4 :
// Bucket #5 :
// Bucket #6 :
// Bucket #7 : xcvxcv : 30qweqwe : 40
~~~

  - map vs unordered_map
    - map
      - 자동으로 정렬됨
      - 이진 탐색 트리
      - 탐색 시간 : O(log n)
      - 삽입과 제거가 빈번하면 느림
    - unordered_map
      - 자동으로 정렬되지 않음
      - 해시 테이블
      - 탐색 시간 : O(1) -> 해쉬 충돌이 없을 경우
      - 탐색 시간 : O(n) -> 최악의 경우
      - 버킷 때문에 메모리 사용량 증가

###### [unordered_map](#unordered_map)
###### [Top](#top)

<br/>
<br/>

***

# unordered_set

  - 정렬되지 않는셋~~

<br/>

  - set vs unorderd_set 
    - set
      - 자동으로 정렬됨
      - 키를 저장
      - 이진 탐색 트리
      - 탐색 시간 : O(log n)
      - 삽입과 제거가 빈번하면 느림
    - unorderd_set 
      - 자동으로 정렬되지 않음
      - 키를 저장
      - 해시 테이블
      - 탐색 시간 : O(1) -> 해쉬 충돌이 없을 경우
      - 탐색 시간 : O(n) -> 최악의 경우
      - 버킷 때문에 메모리 사용량 증가

###### [unordered_set](#unordered_set)
###### [Top](#top)

<br/>
<br/>

***

# 범위기반 for반복문

  - c#에서의 foreach문 처럼 c++에서도 이와 같은 것이 있음
  - 배열과 컨테이너에서 모두 사용 가능(값, 참조 모두 이용 가능)

~~~c++
#include  <iostream>

int main()
{
	int scores[4] = { 10,20,30,40 };

	for (int N : scores)
	{
		std::cout << N << std::endl;
	}
}

// 출력값
// 10
// 20
// 30
// 40
~~~

~~~c++
#include  <iostream>
#include <map>

int main()
{
	std::map<std::string, int> scoreMap;

	scoreMap["a"] = 10;
	scoreMap["b"] = 20;
	scoreMap["c"] = 30;

	for (auto& N : scoreMap)
	{
		std::cout << N.first << " : " << N.second << std::endl;
	}
}

// 출력값
// a : 10
// b : 20
// c : 30
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 사용시 주의 사항
    - 참조와 값에 대한 부분을 잘 분별해서 사용할것!

~~~c++
#include  <iostream>
#include <map>

int main()
{
	std::map<std::string, int> scoreMap;

	scoreMap["a"] = 10;
	scoreMap["b"] = 20;
	scoreMap["c"] = 30;

	// 값으로 복사해서, 그 복사한 값을 프린트 하니 10점씩 깎여 있을 것이고,
	for (auto N : scoreMap)
	{
		N.second -= 10;
		std::cout << N.first << " : " << N.second << std::endl;
	}

	std::cout << std::endl;

	// 값으로 복사한것이 아닌 다시 원본을 프린트 할 예정이니 원본 그대로의 값이 나오게 된다
	for (auto& N : scoreMap)
	{
		std::cout << N.first << " : " << N.second << std::endl;
	}
}

// 출력값
// a : 0
// b : 10
// c : 20

// a : 10
// b : 20
// c : 30
~~~

~~~c++
#include  <iostream>
#include <map>

int main()
{
	std::map<std::string, int> scoreMap;

	scoreMap["a"] = 10;
	scoreMap["b"] = 20;
	scoreMap["c"] = 30;

	// 원본을 -10 해버리니, 깍인 것이 프린트 될것이고,
	for (auto& N : scoreMap)
	{
		N.second -= 10;
		std::cout << N.first << " : " << N.second << std::endl;
	}

	std::cout << std::endl;

	// 원본이 깍겨 있고, 그 원본을 복사해서 프린트 할것이니, 위와 같은 값이 나오게 된다
	for (auto N : scoreMap)
	{
		std::cout << N.first << " : " << N.second << std::endl;
	}
}

// 출력값
// a : 0
// b : 10
// c : 20

// a : 0
// b : 10
// c : 20
~~~

###### [범위기반 for반복문](#범위기반-for반복문)
###### [Top](#top)

<br/>
<br/>

***

# unique_ptr

  - delete 해줄 필요가 없음
  - 복사나 대입을 할 수 없기 때문에 주의!
  - unique_ptr는 항상 범위와 함께 쓴다는것을 주의하기! scope를 벗어나는 순간 사라지는 스택처럼!

    - [유니크 포인터 선언하기](#유니크-포인터-선언하기)
    - [유니크 포인터는 복사, 대입이 안된다](#유니크-포인터는-복사-대입이-안된다)
    - [유니크 포인터를 사용하는 좋은 장소 3가지](#유니크-포인터를-사용하는-좋은-장소-3가지)

###### [unique_ptr](#unique_ptr)
###### [Top](#top)

<br/>
<br/>

# 유니크 포인터 선언하기

~~~c++
#include <iostream>
#include <memory>

class Animal
{
public:
	int m_age;

	Animal(int age)
		: m_age(age)
	{

	};

	void Print()
	{
		std::cout << "난 동물이야" << std::endl;
	}
};

int main()
{
	std::unique_ptr<Animal> myAnimal(new Animal(10));
	myAnimal->Print();
}
~~~

###### [unique_ptr](#unique_ptr)
###### [Top](#top)

<br/>
<br/>

# 유니크 포인터는  복사, 대입이 안된다

~~~c++
#include <iostream>
#include <memory>

class Animal
{
public:
	int m_age;

	Animal(int age)
		: m_age(age)
	{

	};

	void Print()
	{
		std::cout << "난 동물이야" << std::endl;
	}
};

int main()
{
	std::unique_ptr<Animal> myAnimal(new Animal(10));
	std::unique_ptr<Animal> copyMyAnimal = myAnimal; // 컴파일 에러
	std::unique_ptr<Animal> copyMyAnimal(myAnimal); // 컴파일 에러

}
~~~

###### [unique_ptr](#unique_ptr)
###### [Top](#top)

<br/>
<br/>

# 유니크 포인터를 사용하는 좋은 장소 3가지

  - 클래스에서 생성자, 소멸자

~~~c++
// 원래 클래스 안에서 메모리 할당을 할 경우, 소멸자로 메모리 해체를 해줘야함
#include <iostream>
#include <memory>

class Animal
{
public:
	int m_age;
	char* m_name;

	Animal(int age, int L)
		: m_age(age)
	{
		m_name = new char[L];
	};

	void Print()
	{
		std::cout << "난 동물이야" << std::endl;
	}

	~Animal()
	{
		delete m_name;
	}
};

int main()
{

}
~~~
~~~c++
// 메모리를 해제해주는 소멸자가 필요 없어 진다
#include <iostream>
#include <memory>

class Animal
{
public:
	int m_age;
	std::unique_ptr<char> m_name;

	Animal(int age, int L)
		: m_age(age)
		, m_name(new char[L])
	{

	}

	void Print()
	{
		std::cout << "난 동물이야" << std::endl;
	}
};

int main()
{
	Animal aa(10, 10);


}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 지역변수

~~~c++
// 지연변수는 어차피 종료 전에 또는 그 해당 함수가 끝나기 전에 delete하여 메모리 할당을 해재해 주어야한다
#include <iostream>
#include <memory>

class Animal
{
public:
	int m_age;

	Animal(int age, int L)
		: m_age(age)
	{

	}

	void Print()
	{
		std::cout << "난 동물이야" << std::endl;
	}
};

int main()
{
	Animal* myAnimal = new Animal(10, 10);

	// 기능 코드

	delete myAnimal;

}
~~~

~~~c++
// 지역변수에 선언할때는 따로 메모리 할당을 애초에 고민하지 않아도 된다.
#include <iostream>
#include <memory>

class Animal
{
public:
	int m_age;

	Animal(int age, int L)
		: m_age(age)
	{

	}

	void Print()
	{
		std::cout << "난 동물이야" << std::endl;
	}
};

int main()
{
	std::unique_ptr<Animal> myAnimal(new Animal(10, 10));

	// 기능 코드
}
~~~

  - 벡터안에서 포인터를 쓰거나 할때도 내부로 하나하나 메모리 할당을 해제 해 주지 않아도 되니 엄청 편해진다!!

###### [unique_ptr](#unique_ptr)
###### [Top](#top)

<br/>
<br/>

***

# make_unique

  - 유니크 포인터의 문제점과 C++14이후의 해결책(make_unique)
  - 복사나 대입이 안된다고 했지만, 따로 포인터를 만들어서 그 포인터를 각각의 유니크 포인터에 공유하는것은 가능하다
  - 둘 이상의 unique_ptr가 원시 포인터를 공유하지 못하게 하기 위해서 새로운 문법을 개발 하였음
  - make_unique가 등장함

    - [make_unique선언하기](#make_unique선언하기)
    - [make_unique는 복사와, 대입이 불가능](#make_unique는-복사와-대입이-불가능)
    - [reset](#reset)
    - [get](#get)
    - [release](#release)
    - [move](#move)

~~~c++
#include <iostream>
#include <memory>

class Animal
{
public:
	int m_age;

	Animal(int age, int L)
		: m_age(age)
	{

	}

	void Print()
	{
		std::cout << "난 동물이야" << std::endl;
	}
};

int main()
{
	Animal* myanimal = new Animal(10, 10);
	std::unique_ptr<Animal> A(myanimal); // 컴파일 ok
	std::unique_ptr<Animal> B(myanimal); // 컴파일 ok

	B = nullptr; // B객체에 null을 대입했지만 그것을 공유하고 있는 A객체도 null이 된다

// 큰 문제는, 추후에 A객체는 자기 포인터를 또 지우게 된다.(어떤 일이 벌어 질지 모른다?!)

	// 기능 코드
}
~~~

###### [make_unique](#make_unique)
###### [Top](#top)

<br/>
<br/>

# make_unique선언하기

~~~c++
#include <iostream>
#include <memory>

class Animal
{
public:
	int m_age;

	Animal(int age)
		: m_age(age)
	{

	}

	void Print()
	{
		std::cout << "난 동물이야" << std::endl;
	}
};

int main()
{
	std::unique_ptr<Animal> myanimal = std::make_unique<Animal>(10);
}
~~~

###### [make_unique](#make_unique)
###### [Top](#top)

<br/>
<br/>

# make_unique는 복사와, 대입이 불가능

~~~c++
#include <iostream>
#include <memory>

class Animal
{
public:
	int m_age;

	Animal(int age)
		: m_age(age)
	{

	}

	void Print()
	{
		std::cout << "난 동물이야" << std::endl;
	}
};

int main()
{
	Animal* myanimal = new Animal(10);
	std::unique_ptr<Animal> A = std::make_unique(myanimal);  // 컴파일 에러
	std::unique_ptr<Animal> B = std::make_unique<Animal>(myanimal);  // 컴파일 에러
	std::unique_ptr<Animal> C = std::make_unique<Animal*>;  // 컴파일 에러
}
~~~

###### [make_unique](#make_unique)
###### [Top](#top)

<br/>
<br/>

# make_unique배열만들기

//나중에 공부해서 작성하기

###### [make_unique](#make_unique)

<br/>
<br/>

# reset

  - 원시포인터 소유권을 박탈하고, 다른 포인터를 가질 수 있게함

~~~c++
#include <iostream>
#include <memory>

class Animal
{
public:
	int m_age;

	Animal(int age)
		: m_age(age)
	{

	}

	void Print()
	{
		std::cout << "난 동물이야" << std::endl;
	}
};

int main()
{
	std::unique_ptr<Animal> myanimals = std::make_unique<Animal>(10);
	myanimals.reset(new Animal(20)); // 새로운 포인터로 교체
	myanimals.reset(); // nullptr로 교체
}
~~~

###### [make_unique](#make_unique)
###### [Top](#top)

<br/>
<br/>

# get

  - 원시 포인터 반환
  - 이때는 포인터를 지우지 않는다는 규정하에 사용해야 한다!!

~~~c++
#include <iostream>
#include <memory>

class Animal
{
public:
	int m_age;

	Animal(int age)
		: m_age(age)
	{

	}

	void Print()
	{
		std::cout << "난 동물이야" << std::endl;
	}
};

int main()
{
	std::unique_ptr<Animal> myanimals = std::make_unique<Animal>(10);
	Animal* A = myanimals.get();
	A->m_age = 20;

	std::cout << myanimals->m_age; // 출력값 20
}
~~~

###### [make_unique](#make_unique)
###### [Top](#top)

<br/>
<br/>

# release

  - 원시 포인터 소유권 이전
  - release를 하게 되면 아예 포인터를 옮겨주는 것으로 이해하면 된다. 따라서 release후에 해당 변수를 get하게 되면 아무것도 남지 않았으니 nullptr이 출력된다

~~~c++
#include <iostream>
#include <memory>

class Animal
{
public:
	int m_age;

	Animal(int age)
		: m_age(age)
	{

	}

	void Print()
	{
		std::cout << "난 동물이야" << std::endl;
	}
};

int main()
{
	std::unique_ptr<Animal> myanimals = std::make_unique<Animal>(10);
	Animal* A = myanimals.release();
	myanimals.get(); // nullptr
}
~~~

###### [make_unique](#make_unique)
###### [Top](#top)

<br/>
<br/>

# move

  - 포인터 소유권 옮기기
  - 이 함수 한번으로 쉽게 다른 유니크 포인터에서 유니크 포인터로 소유권을 옮길 수 있게 된다
  - const 유니크포인터에는 사용 할 수 없다!

~~~c++
#include <iostream>
#include <memory>

class Animal
{
public:
	int m_age;

	Animal(int age)
		: m_age(age)
	{

	}

	void Print()
	{
		std::cout << "난 동물이야" << std::endl;
	}
};

int main()
{
	std::unique_ptr<Animal> myanimals = std::make_unique<Animal>(10);
	std::unique_ptr<Animal> myanimals1(std::move(myanimals));
}
~~~

###### [make_unique](#make_unique)
###### [Top](#top)

<br/>
<br/>

***

# shared 포인터(공유 포인터)

  - 두개의 포인터를 소유하고있음
    - 데이터 포인터
    - 제어블록 포인터(몇번 참조했는지 세야하기 때문)
    - 참조 카운팅기반
      - 어떤 곳에도 참조되지 않으면 지워줌

    - [선언하기](#선언하기)
    - [공유 포인터 공유하기](#공유-포인터-공유하기)
    - [포인터 재설정 하기](#포인터-재설정-하기)

###### [shared 포인터(공유 포인터)](#shared-포인터공유-포인터)
###### [Top](#top)

<br/>
<br/>

# 선언하기

~~~c++
#include <iostream>
#include <memory>

class Animal
{
public:

	void Print()
	{
		std::cout << "난 동물이야" << std::endl;
	}
};

int main()
{
	std::shared_ptr<Animal> myanimals = std::make_shared<Animal>();
}
~~~

###### [shared 포인터(공유 포인터)](#shared-포인터공유-포인터)
###### [Top](#top)

<br/>
<br/>

# 공유 포인터 공유하기

~~~c++
#include <iostream>
#include <memory>

class Animal
{
public:

	void Print()
	{
		std::cout << "난 동물이야" << std::endl;
	}
};

int main()
{
	std::shared_ptr<Animal> myanimals = std::make_shared<Animal>();
	std::shared_ptr<Animal> myanimals2 = myanimals;
}
~~~

![image](https://user-images.githubusercontent.com/39178978/200856083-37a20fa2-0558-4cc7-9465-f1b4b680faca.png)

###### [shared 포인터(공유 포인터)](#shared-포인터공유-포인터)
###### [Top](#top)

<br/>
<br/>

# 포인터 재설정 하기

~~~c++
#include <iostream>
#include <memory>

class Animal
{
public:

	void Print()
	{
		std::cout << "난 동물이야" << std::endl;
	}
};

int main()
{
	std::shared_ptr<Animal> myanimals = std::make_shared<Animal>();
	std::shared_ptr<Animal> myanimals2 = myanimals;
	myanimals.reset(); //myanimals = nullptr;

}
~~~

![image](https://user-images.githubusercontent.com/39178978/200856294-190ba46a-b3ea-4e40-b950-d525e718d557.png)

###### [shared 포인터(공유 포인터)](#shared-포인터공유-포인터)
###### [Top](#top)

<br/>
<br/>

***

# weak_ptr 포인터(약한 포인터)

  - 약한 참조 카운트는 약한 참조의 수를 저장하는데 사용됨
  - 약한 참조로 참조되는 개체는 강한 참조 카운트가 0이 될때 소멸됨
  - 순한참조의 해결책
  - weak_ptr는 혼자 만들어질 수 없고, 공유 포인터가 있을때 만들어 낼 수 있다
  - 나중에 따로 다시 공부하자

###### [weak_ptr 포인터(약한 포인터)](#weak_ptr-포인터약한-포인터)
###### [Top](#top)
