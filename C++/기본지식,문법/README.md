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
  - include <fstream> 해더를 사용한다.
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

###### [[파일 입출력](#파일-입출력)
###### [Top](#top)

<br/>
<br/>

# open 함수 모드플래그

  - in, out, ate, app, trunc, binary
  - ex) filestream.open(“aaaaa.txt”, ios_base::in | ios_base::binary);

###### [[파일 입출력](#파일-입출력)
###### [Top](#top)

