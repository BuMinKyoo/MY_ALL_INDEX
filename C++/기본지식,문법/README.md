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
