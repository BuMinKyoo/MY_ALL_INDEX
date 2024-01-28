###### Top
  
  - [메모리 누수 확인](#메모리-누수-확인)
  - [출력,using namespace,조정자(Manipulator)](#출력using-namespace조정자manipulator)
  - [입력,입력하기,입력버리기](#입력입력하기입력버리기)
  - [일부 새로운 C++기능(Bool 데이터,참조)](#일부-새로운-c기능bool-데이터참조)
  - [문자열](#문자열)

<br/>

  - [파일 입출력](#파일-입출력)
    - [파일 스트림](#파일-스트림)
    - [open 함수 모드플래그](#open-함수-모드플래그)
    - [파일 오픈 상태 확인](#파일-오픈-상태-확인)
    - [파일 읽기](#파일-읽기)
    - [파일에 쓰기](#파일에-쓰기)
    - [파일 안에서 탐색하기](#파일-안에서-탐색하기)

<br/>

  - [접근 제어자(Access Modifier)](#접근-제어자access-modifier)
  - [개체](#개체)
    - [개체 생성(스택, 힙 메모리), 개체소멸](#개체-생성스택-힙-메모리-개체소멸)
    - [생성자, 생성자 초기화](#생성자-생성자-초기화)
    - [c++에서 일반적인 클래스 사용법](#c에서-일반적인-클래스-사용법)
    - [소멸자](#소멸자)
    - [Const함수](#const함수)
    - [복사생성자](#복사생성자)
    - [함수 오버로딩](#함수-오버로딩)
    - [연산자 오버로딩](#연산자-오버로딩)
    - [friend클래스](#friend클래스)
    - [c++ 클래스에 암시적으로 만들어 주는것](#c-클래스에-암시적으로-만들어-주는것)
    - [상속](#상속)
    - [오버라이딩, 다형성, 정적 바인딩, 가상함수(virtual), 동적 바인딩](#오버라이딩-다형성-정적-바인딩-가상함수virtual-동적-바인딩)
    - [추상클래스](#추상클래스)
    - [인터페이스](#인터페이스)

<br/>

  - [캐스팅](#캐스팅)
    - [static_cast](#static_cast)
    - [reinterpret_cast](#reinterpret_cast)
    - [const_cast](#const_cast)
    - [dynamic_cast](#dynamic_cast)
  - [인라인 함수](#인라인-함수)
  - [static](#static)
  - [표준 템플릿 라이브러리(STL컨테이너)](#표준-템플릿-라이브러리stl컨테이너)
  - [템플릿 프로그래밍](#템플릿-프로그래밍)

<br/>
  - c++11 / 14/ 17 / … 이후의 추가된 부분들  

<br/>

  - [새로운키워드](#새로운키워드)
    - [auto](#auto)
    - [static_assert](#static_assert)
    - [default](#default)
    - [delete](#delete)
    - [final](#final)
    - [override](#override)
  - [새로운자료형](#새로운자료형)
    - [nullptr](#nullptr)
    - [고정 폭 정수형](#고정-폭-정수형)
    - [enum class](#enum-class)
  - [새로추가된 STL](#새로추가된-stl)
    - [unordered_map](#unordered_map)
    - [unordered_set](#unordered_set)
    - [범위기반 for반복문](#범위기반-for반복문)

<br/>
  
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

<br/>

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

# 출력,using namespace,조정자(Manipulator)
  - Hello World 출력하기
    - std::cout 를 사용해서 출력할 수있다.
    - ‘<<’ 왼쪽으로 데이터를 밀어 넣는 다는 느낌으로 암기하면 될것

<br/>

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

<br/>

  - using namespace
    - Java의 패키지나 C#의 네임스페이스와 비슷

<br/>

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

<br/>
<br/>

  - 같은 이름을 가진 함수라도 namespace를 이용해서 사용할 수 있게 된다
  - 아래와 같이 사용할때, main함수 위쪽에 namespace를 정의해야 된다!(잊지 말기!)

<br/>

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

<br/>

  - 조정자(Manipulator)
    - C언어에서 printf를 쓸때 형식 지정자 처럼 사용했던 부분과 비슷하게 이용하게 된다.

<br/>

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

<br/>
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

###### [출력,using namespace,조정자(Manipulator)](#출력using-namespace조정자manipulator)
###### [Top](#top)

<br/>
<br/>

***

# 입력,입력하기,입력버리기
  - 입력하기
    - cin은 배열에 입력을 받을때, 배열의 길이를 알 수 없기 때문에 더 큰 데이터가 들어오면 예외가 발생될 수 있다. 

<br/>

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

<br/>

  - c++로 안전하게 배열에 입력 받는 방법은 setw를 이용하는 방법이다 

<br/>

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

<br/>

  - 숫자를 입력받을시에, 숫자로 입력 받을 수 있는 부분까지 입력 된다는 것을 기억하기 

<br/>

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

<br/>

  - 입력버리기
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

###### [입력,입력하기,입력버리기](#입력입력하기입력버리기)
###### [Top](#top)

<br/>
<br/>

***

# 일부 새로운 C++기능(Bool 데이터,참조)
  - Bool 데이터형
    - C언어 에서는 0과, 0이 아닌것을 비교했던 반면, C++에서는 false와 true값을 사용할 수 있게 되었다.
    - 하지만 C와 다른것은 없으며 단지 0 을 false로 1 을 true로 define한것 뿐, 0이면 false,  0이 아니면 true로 구분된다는 사실은 같기 때문에 유의해야 한다
  - 참조
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

<br/>

#ConsoleApp.cpp
~~~c++
int number1 = 100;
int number2 = 200;

int& reference = number1;
reference = number2; // reference가 number2를 다시 새롭게 참조하는것이 아니라, number2의 값을 reference에 대입 하는것이 되기 때문에 변수 3개 모두 값이 200이됨
~~~

<br/>

  - 컴퓨터는 참조가 뭔지 알까?
    - 모름
    - 포인터와 참조는 같은 어셈블리 명령어를 생성함
    - 참조는 오직 인간을 위한 것임
    - 컴파일러는 참조를 포인터로 바꿔준다. 기계가 이해할 수 없도록
    - 즉, 참조는 프로그래머가 그 포인터를 가지고 이상한 곳에 가지고 놀 수 없게끔 제한하여 실수하지 않게끔 만들어 줄 뿐이다

###### [일부 새로운 C++기능(Bool 데이터,참조)](#일부-새로운-c++기능bool-데이터참조)
###### [Top](#top)

<br/>
<br/>

***

# 문자열

#ConsoleApp.cpp
~~~c++
char line[256];
cin.getline(line, 256)
~~~

  - 처음에 입력을 받기 위해 사용했던 위의 코드들은 아래의 두 경우에 작동하지 않는다
    - 아무것도 읽지 못했을 때
    - 한줄에 문자가 256자 이상일때(즉, 버퍼가 충분히 크지 않을 때)
  - 위의 대안으로써 std:string 클래스가 있다!
    - std:string 클래스를 이용한 문자열은 길이가 증가할 수 있다!

<br/>

#ConsoleApp.cpp
~~~c++
// 입력 받기 가능
#include <string>
std::string firstName;
std::cin >> firstName;
~~~

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

<br/>

  - size(), length() : 문자열의 길이를 반환
  - c_str() : 해당 string이 가지고 있는 문자 배열의 시작 주소를 가리키는 포인터를 반환한다
    - const char*를 반환한다

#ConsoleApp.cpp
~~~c++
string line;
cin >> line;
const char* cLine = line.c_str();
~~~

<br/>

  - string안의 한 문자에 접근 가능하다

#ConsoleApp.cpp
~~~c++
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string firstName = "qwer";

	// 콘솔에 출력하기
	cout << firstName[0] << endl; // q

	firstName[0] = 'a';

	// 콘솔에 출력하기
	cout << firstName[0] << endl; // a
}
~~~

<br/>

  - std:string이 좋은가요?
    - 더하기를 할때 메모리를 더 할당하는 과정을 거치게 되고, 그것을 내부적으로 알아서 해주게 된다
      - 힙 메모리 할당은 느림
      - 메모리 단편화 문제
      - 내부 버퍼의 증가는 멀티 쓰레드 환경에서 안전하지 않을 수도 있다
    - 그래서 여전히 std::string을 사용하지 않고 sprintf와 함께 char[]를 매우 많이 사용하게 된다

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

<br/>
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

<br/>
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

<br/>
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

<br/>
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

<br/>
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

<br/>
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
  - [함수 오버로딩](#함수-오버로딩)
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

<br/>

  - 스택
    - 예약된 로컬 메모리 공간(작음, 일반적으로 1Mb이하)
    - 함수 호출과 반환이 이 메모리에서 일어남
    - 단순히 스택 포인터를 옮김
      - 메모리를 할당 및 해제할 필요가 없음
      - 스택에 할당된 메모리는 범위를 벗어나면 사라짐
      - 변수와 매개변수를 위해 필요한 크기는 컴파일 도중에 알 수 있음
    - 하지만 스택에 큰 개체를 많이 넣으면
      - 스택 오버플로우가 발생할 수 잇음
      - 성능이 느려질 수도 있음
      - 하지만 일반적으로 힙보다 빠름
  - 힙
    - 전역 메모리 공간(아주 큼)
    - 비어 있고 연속된 메모리 블록을 찾아야 함
    - 프로그래머가 메모리를 직접 할당 및 해제해야 함
    - 개체 생성시 new연산자를 사용하면 힙메모리에 들어가며, 스택에는 포인터 변수의 값만 할당되고, 스 포인터에 있는 주소값에 개체의 주소값이 들어감

###### [개체](#개체)
###### [Top](#top)

<br/>
<br/>

# 생성자, 생성자 초기화

  - 기본 생성자
    - 기본 생성자는 매개변수를 받지 않음
    - 클래스에 생성자가 없으면 컴파일러가 기본 생성자를 자동적으로 만들어 줌
    - 프로그래머가 생성자를 하나라도 만들면 컴파일러는 개본 생성자를 만들어 주지 않음
    - 이렇게 자동적으로 만들어진 생성자는
      - 멤버 변수를 초기화 하지 않음
      - 하지만 모든 포함된 개체의 생성자를 호출
     
<br/>

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


<br/>
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

<br/>
<br/>

  - 상수, 참조변수 초기화 하기

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

<br/>
<br/>

  - 이런 방법은 초기화가 아니기때문에, 상수나, 참조변수를 초기화 시킬수 없다.
  - 위와 같이 초기화리스트라는 방법을 이용해야 한다. 아래에 있는것은 그냥 '대입'방법이 된다

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
	{
		num1 = 1;
		num2 = 2; // 컴파일 에러
		num3 = 3; // 컴파일 에러
	}
};

int main()
{
	NumberClass numberclass;
	cout << numberclass.num1 << endl;
	cout << numberclass.num2 << endl;
	cout << numberclass.num3 << endl;
}
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

  - 소멸자는 C++에만 존재한다. 메모리를 직접 프로그래머가 관리하기 때문에 필요하다
  - C++에서 동적 메모리 할당 했다면 소멸자에서 필히 지워주어야 한다
  - 객체가 지워질때 소멸자가 호출된다
    - 스택에서 메모리가 지워질때, 동적 할당해서 힙에 있다면 delete를 통해서 개체가 지워질때 호출된다

<br/>

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
    - 맴버 변수가 변하는 것을 방지
    - 원래는 기본적으로 모든 함수에 Const를 사용하는 것이 맞으며, 개체의 어떤 함수에서 맴버 변수가 바뀌는 상황일대 그 Const를 제거 하는 것이 방어적으로 코딩하는것에 맞다
  - const함수 안에서 다른 함수를 호출 할때 const함수만 호출 할 수 있다

<br/>

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

  - C++에서만 있는것
  - 같은 클래스에 속한 다른 개체를 이용하여 새로운 개체를 초기화 하는것
  - 생성자에 나 자신을 매개변수로 받는것이 있다면 그것이 복사 생성자 라고 할 수 있다
    - 프로그래머가 따로 구현해 주지 않아도, 컴파일러가 만들어 준다(= 암시적 복사 생성자)

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

<br/>
<br/>

  - 복사 생성자 호출하기

#ConsoleApp.cpp
~~~c++
NumberClass(const NumberClass& other);

NumberClass a; // 매개변수 없는 생성자를 호출
NumberClass b(a); // 복사 생성자를 호출
~~~

<br/>
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

<br/>
<br/>

  - 복사생성자을 사용 할때에 클래스 내부에서 메모리 할당을 한다면 얕은 복사가 되었을때 문제가 됨으로, 깊은 복사를 해야 한다.
  - 따라서, 클래스 안에서 동적으로 메모리를 할당하고 있다면 직접 복사 생성자를 만들어서 깊은 복사를 해야 한다
    - 포인터 변수가 가리키는 실제 데이터까지 복사를 할것!

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

# 함수 오버로딩
  - 매개 변수 목록을 제외하고는 모든 게 동일
  - 반환형은 상관 없음

<br/>

~~~c++
void Print(int score); // OK
void Print(Const char* name);  // OK
void Print(float gpa, const char* name);  // OK
int Print(int score); // 컴파일 에러 : void반환형 함수가 있기 때문에 컴파일러는 어떤 함수를 호출할지 알수가 없다
int Print(float gpa);  // OK
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

	NumberClass operator+(const NumberClass& other) const // NumberClass 클래스에 있는 + 연산자를 오버로딩 한것
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

<br/>

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

<br/>
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

<br/>
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
    - 복사 생성자와 사실상 기능은 거의 동일하다

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

<br/>
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

<br/>
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
    - 베이스(base) 클래스
      - 부모 클래스
    - 파생(derived)클래스
      - 자식 클래스
  - 파생 클래스의 개체는 다음의 것들을 가짐
    - 베이스 클래스의 멤버 변수
    - 베이스 클래스의 멤버 메서드
    - 자신의 생성자와 소멸자
  - 파생클래스는 멤버 변수 및 메서드 추가 가능

<br/>

  - 또한 c++에서는 상속을 할때, 상속 접근자를 지정할 수 있다. 하지만 상속 접근자는 사실상 거의 public으로만 접근 한다고 해도 무방하다

<br/>

![20221008_172512](https://user-images.githubusercontent.com/39178978/194697984-ae5a32e5-8106-4738-9c85-a04c7ce468dd.png)

<br/>

  - 기본 상속 사용법

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

<br/>
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

<br/>
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

  - 상속시에 메모리를 확인해보자
    - 자식을 컴파일하면 부모를 먼저 만들기 때문에 스택의 첫번째는 부모를 가리키게 된다, 하지만 자식을 사용할때는 부모의 메모리의 크기를 알고 있기에 그것을 건너뛰면 자식을 호출할 수 있게 된다.
    - 나중에 다형성을 사용할때 이러한 메모리를 사용한다는것을 이해한다면 더욱 깊은 이해가 가능하게 된다

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/c4906aa6-c01c-4aac-8525-8fc32cfb76f3)

<br/>

#ConsoleApp.cpp
~~~c++
#include <iostream>
using namespace std;

class Animal
{

private:
	int mAge;

public:
	Animal(int Age)
		:mAge(Age)
	{
		
	}
	const int GetAge() const
	{
		return mAge;
	}

};

class Cat : public Animal
{
public:
	const char* GetName() const
	{
		return nName;
	}

	Cat(int Age, const char* Name)
		:Animal(Age)
	{
		nName = Name;
	}
private:
	const char* nName;

};

int main()
{
	Cat* myCat = new Cat(5, "Coco");
	Cat* yourCat = new Cat(2, "Mocha");
}
~~~

  - 멤버 함수의 메모리
    - 멤버 함수도 메모리 어딘가에 위치해 있음
      - 모든 것이 메모리 어딘가에 위치해 있어야함
    - 그런데 각 개체마다 멤버 함수의 메모리가 잡혀 있을까?
      - 위의 코드에서 myCat개체와, yourCat개체는 같은 함수를 쓰고 있는 같은 클래스이다. 각 개체마다 함수의 메모리가 잡혀 있지 않다
    - 그 대신 각 멤버 함수는 컴파일 시에 딱 한 번만 메모리에 "할당"됨
      - 저수준에서는 멤버 함수는 전역 함수와 그다지 다르지 않음
  - 실제로 위의 코드를 어셈블리로 바라보면, 아래와 같이 자기 자신을 인자로 받는 함수로 되어 있게 된다

#Animal클래스
~~~c++
int GetAge(Animal* ptr) const
{
  return ptr->mAge;
}
~~~

<br/>

#Cat클래스
~~~c++
const char* GetName(Cat* ptr) const
{
  return ptr->mName;
}
~~~

<br/>

  - 오버라이딩
    - 부모 클래스가 가지고 있는 기능의 형태만 가져와서, 자식 클래스에서 그 기능에 맞게 바꿔서 쓰는것(하는 행동의 정의는 똑같은데, 실제 하는 행동의 디테일이 다르다), ex) 말한다는 것은 똑같지만, 무엇을 말하는지가 다르다
    - ex) 부모 : 말을 한다 / 자식 고양이 : 야옹 할꺼다 / 자식 강아지 : 멍멍 할꺼다
    - 오버라이딩을 통해서 다형성을 형성한다
  - 정적 바인딩
    - 가상 함수를 쓰지 않을때, 컴파일을 했을때 바로 어떤 함수를 쓸지 결정 되는 것
    - Animal* animal = new Cat() 했을때 오버라이딩을 하지 않았다면, Animal에 있는 함수가 작동되게 된다, 무늬를 따라가게 된다
  - 가상함수
    - 동적 바인딩 이라고 함, 늦은 바인딩이라고함(실행 중에 어떤 함수를 호출할지 결정)
    - 자식 클래스의 멤버 함수가 언제나 호출됨
    - 가상 테이블이 꼭 필요하게 되고, 그 가상 테이블을 통해서 작동하게 된다
      - 가상 테이블 : 모든 가상 멤버함수의 주소를 포함하고, 그냥 번호를 붙여서 몇번째 함수가 어떤 주소에 있다 정도를 가지고 있는것
      - 함수와 똑같이, 개체 마다 하나씩 생기는것이 아니며, 클래스 마다 한개씩 생기게 된다.
      - 개체를 생성할 때, 해당 클래스의 가상 테이블 주소가 함께 저장된다
        - 가상테이블에 있는 함수를 호출하기 위해서, 개체를 생성후 가상테이블 주소에 접근한다 -> 가상 테이블에 몇번째에 있는 함수에 접근하기 위해 다시 주소를 점프한다 -> 함수에 접근한다 순으로 가기 때문에 속도가 느리게 된다
      - 점프테이블, 룩업테이블 이라고도 불린다

<br/>

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

<br/>
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

<br/>
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

	Animal* animal = new Dog();
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
  - 순수 가상함수를 가지고 있는 베이스 클래스를 추상 클래스라고 함

#ConsoleApp.cpp
~~~c++
#include <iostream>

using namespace std;

class Animal
{
public:
	virtual ~Animal(){};
	virtual void Speak() = 0; // 자식 클래스에서 무조건 구현 해야함 0을 대입 함으로써 추상 함수(순수 가상 함수)를 만든다

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
  - 추상 클래스와 사실은 같은 형태 이지만, 고수준의 언어와는 다르게 c++은 변수는 없애고, 함수만 존재하게 프로그래머가 만들어 주어야 한다

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

  - 암시적 캐스팅
    - 컴파일러가 형을 변환해 줌
      - 단, 형 변환이 허용되고
      - 프로그래머가 명시적으로 형 변환을 안할 경우

<br/>

#ConsoleApp.cpp
~~~c++
#include <iostream>
using namespace std;

int main()
{
	int number1 = 3;
	long number2 = number1; // 암시적 캐스팅

	// 콘솔에 출력하기
	cout << "number2 = " << number2 << endl; // 3
}
~~~

<br/>

  - 명시적 캐스팅
    - 프로그래머가 형 변환을 위한 코드를 직접 작성
    - C++캐스팅
      - 1. static_cast(정적 캐스팅)
      - 2. const_cast
      - 3. dynamic_cast(C++98, 모던 C++)
      - 4. reinterpret_cast
    - C++에 이런 많은 캐스팅이 있는 이유..
      - int score = (int)someVariable 이것 한줄에 위의 캐스팅 4가지중 하나를 하는것
        - 뭔가 명확하지 못함
        - 명백한 실수를 컴파일러가 캐치하지 못함
        - c++ 캐스팅이 이런 문제를 해결해준다
        - 따라서 이런 캐스팅을 용도에 따라서 다른 캐스팅을 쓰기 위해서 캐스팅을 세분화 하였음

<br/>

  - 캐스팅 규칙
    - 기본적으로 static_cast를 쓸것
    - reinterpret_cast를 쓸것
    - 내가 변경 권한이 없는 외부 라이브러리를 호출할 때만 const_cast를 쓸 것

<br/>

    - [static_cast](#static_cast)
    - [reinterpret_cast](#reinterpret_cast)
    - [const_cast](#const_cast)
    - [dynamic_cast](#dynamic_cast)

###### [캐스팅](#캐스팅)
###### [Top](#top)

<br/>
<br/>

# static_cast
  - 1. 값
    - 두 숫자 형간의 변환
      - 값을 유지(단 반올림 오차는 제외)하려고 노력함
      - 이진수 표기는 달라질 수 있음

<br/>

#ConsoleApp.cpp
~~~c++
#include <iostream>
using namespace std;

int main()
{
	// 예시 1
	// 둘다 정수형 이기 때문에 비트 값이 바뀌지 않는다
	int number1 = 3; // 0000 0000 0000 0011
	short number2 = static_cast<short>(number1); // 0000 0011

	// 예시 2
	// 정수형과 실수형은 비트 값이 바뀐다
	// 하지만 실제로 쓰는 값은 바뀌지 않으려고 한다
	float number3 = 3.f; // 0100 0000 0100 0000
	int number4 = static_cast<int>(number3); // 0000 0000 0000 0011
}
~~~

<br/>

  - 2. 개체 포인트
    - 변수형 체크 후 베이스 클래스를 파생 클래스로 변환
    - 컴파일 시에만 형 체크 가능
    - 실행 도중 여전히 크래시가 날 수 있음

<br/>

c++은 서로 상속 관계가 아니여도 명시적으로 캐스팅을 하면 컴파일이 되어 버린다..하지만 그렇게 하면 위험하기 때문에 static_cast을 사용하면 서로간에 상속관계를 확인해서 캐스팅 해준다

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
  - 가장 위험한 캐스팅중 하나
  - 연관 없는 두 포인터 형 사이의 변환을 허용
    - Cat* <-> House*
    - char <-> int*
  - 포인터와 포인터 아닌 변수 사이의 형 변환을 허용
    - Cat* <-> unsigned int
  - 이진수 표기는 달라지지 않음
    - A형의 이진수 표기를 그냥 B형인 것처럼 해석
    - 컴퓨터는 무조건 이진수로 데이터를 보관하는데, 자료형은 이 이진수를 어떻게 해석할지에 관련된 것이다. 그런데, 그냥 이진수를 달라지지 않고, 다른것처럼 해석하겠다고 하는것.(굉장히 위험한 방법)

<br/>

#ConsoleApp.cpp
~~~c++
#include <iostream>
using namespace std;

int main()
{
	int* singedNumber = new int(-10);

	// 콘솔에 출력
	cout << "singedNumber: " << *singedNumber << endl; // singedNumber: -10

	unsigned int* unsignedNumber = reinterpret_cast<unsigned int*>(singedNumber);

	cout << "unsignedNumber: " << *unsignedNumber << endl; // unsignedNumber: 4294967286
}
~~~

  - 만약 위의 상황에서 static_cast를 사용했다면 컴파일 에러를 냈을 것이다

<br/>

  - reinterpret_cast을 실무에서 사용할 예시
    - 특정 데이터를 간단한 형식으로 변환해 저장하고 있다가, 다시 불러올때, 해당하는 데이터로 캐스팅을 해서 다시 사용할 수 있다

#ConsoleApp.cpp
~~~c++
#include <iostream>
using namespace std;

class NumberClass
{
public:
	NumberClass()
		: num1(10)
	{
	}

	int GetNum0()
	{
		return num1;
	}

private:
	int num1;
};

int main()
{
	NumberClass* numClass = new NumberClass();

	unsigned int intAddress = reinterpret_cast<unsigned int>(numClass);

	cout << "Address of numClass: " << intAddress << endl;

	numClass = reinterpret_cast<NumberClass*>(intAddress);
	int n = numClass->GetNum0();

	cout << "n : " << n << endl;

	delete numClass;

	return 0;
}
~~~

###### [캐스팅](#캐스팅)
###### [Top](#top)

<br/>
<br/>

# const_cast
  - 하지 말아야할 캐스팅..
  - const_cast로 형을 바꿀 수 없음
  - const또는 volatile애트리뷰트를 제거할 때 사용
  - 포인터 형에 사용할 때만 말이 됨
    - 값 형은 언제나 복사되니까

<br/>

#ConsoleApp.cpp
~~~c++
#include <iostream>
using namespace std;

void Print(const char* name)
{
    char* str = const_cast<char*>(name);
    *str = 'p';
    cout << str << endl; // pello
}

int main()
{
    char name[] = "Hello"; // 수정 가능한 문자열 배열로 초기화
    Print(name);
    return 0;
}
~~~

<br/>

  - const_cast를 실무 용도에 쓸일이 있다면, 내가 수정할수 없는 어떠한 곳에 const가 쓰여 있지 않았을 경우, 내가 따로 만든 함수에 const를 쓰고, 그 안에 const를 없앤 값을 넣을 수 있도록 한다

#ConsoleApp.cpp
~~~
void WriteLine(char* ptr) // 뭔가 별로인 외부 라이브러리

void MyWriteLine(const char* ptr) // 우리 프로그램에 있는 함수
{
	WriteLine(const_cast<char*>(ptr));
}
~~~

###### [캐스팅](#캐스팅)
###### [Top](#top)

# dynamic_cast
  - 실행 중에 형을 판단
  - 포인터 또는 참조 형을 캐스팅할 때만 쓸 수 있음
  - 호환되지 않는 자식형으로 캐스팅하려 하면 NULL을 반환
    - 따라서, dynamic_cast가 static_cast보다 안전
  - 그러나 이걸 쓰려면 컴파일 중에 RTTI(실시간 타입정보)를 켜야함
    - 이것이 켜있지 않으면 static_cast와 똑같이 작동한다
  - 하지만 보통 C++ 프로젝트에서 RTTI를 끄는 것이 보통
    - 속도가 느려짐…

###### [캐스팅](#캐스팅)
###### [Top](#top)

<br/>
<br/>

***

# 인라인 함수
  - 함수 호출할 때
    - 함수는 메모리 안에 “할당”되어 있음
    - 함수를 호출하기 위해 필요한 단계들
      - 1. 변수들을 스택에 푸쉬(push)
      - 2. 함수 주소로 점프
      - 3. 함수를 실행
      - 4. 호출자 함수로 다시 점프
      - 5. 1번 단계에서 넣어뒀던 변수들을 “팝(pop)”
    - 함수 호출에는 오버헤드가 발생함
      - 그래서 함수를 작성하면 속도 측면에서 좀 더 느림
      - CPU 캐시에 최적이 아닐 수도
      - 모던 CPU아키텍처에서는 더 느림
    - 하지만 함수를 작성하면 가독성을 위해 좋은 경우들이 있음
      - 함수의 오버헤드를 막으면서, 가독성을 높이기 위한 방법에는 인라인 함수가 있다

<br/>

  - 인라인 함수의 동작 원리
    - 함수호출 대신에 컴파일러가 복붙을 해주기 때문에 사실상은 함수 호출이 아니라 절차로 읽는 것과 똑같이 된다는것!
  - 인라인 함수를 쓸 때 주의점
    - inline키워드는 힌트일 뿐
      - 컴파일러에 따라서 실제로는 인라인 안될 수도 있음
      - inline키워드를 사용하지 않더라도 컴파일러가 인라인 함수로 만들 수도 있다
    - 인라인 함수 구현이 헤더 파일에 위치해야 함
      - 복붙을 하려면 컴파일러가 그 구현체를 볼 수 있어야 하기에..
      - 각 cpp파일은 따로 컴파일 됨
      - 따라서 b.h를 인클루드 하는 a.cpp파일을 컴파일 할 때, 컴파일러는 b.cpp에 뭐가 들어 있는지 모름
    - 간단한 함수에 적합
    - 실행파일의 크기가 증가하기가 쉬움
      - 동일한 코드를 여러 번 복붙하니까..
      - 남용하지 말것
      - 실행파일이 작을수록 CPU캐시하고 잘 작동 -> 속도가 빨라질 수 있음
  - 복붙과 같은것
  - 매크로와 같은것
  - 하지만 디버깅을 할 수 있음

<br/>

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
	int num1 = 5 * 5
	int num2 = 25 * 25
	return 0;
}
~~~

###### [인라인 함수](#인라인-함수)
###### [Top](#top)

<br/>
<br/>

***

# static
  - 범위(scope)의 제한을 받는 전역 변수
    - c에서 어디서든 추출해서 사용했던 extern과 다른 개념
  - 어떤 범위?
    - 파일 속
    - 네임스페이스 속
    - 클래스 속
    - 함수 속

<br/>

  - 함수속 정적 맴버 변수
    - 함수가 종료 됐을때 스택은 전부 사라지지만 함수속에 있는 정적 변수는 없어 지지 않고 누수가 될 수 있다.

#ConsoleApp.cpp
~~~c++
// 함수로 범위가 제한된 전역 변수
#include <iostream>
using namespace std;

void Accumulate(int number)
{
	static int result = 0; // 딱 한번만 초기화 된다.
	result += number;
	cout << result << endl;
}

int main()
{
	Accumulate(5); // 5
	Accumulate(10); // 15

	// 여기서는 static int result를 접근할 수 없다
}
~~~

<br/>

  - 클래스 속 정적 변수, 함수
    - 개체를 만들지 않고도 호출 할 수 있고, 개체를 많이 만든다해도 한개만 존재하며 각각의 개체가 그것을 서로 공유한다
    - 정적 맴버 함수안에서 비정적 맴버 변수를 호출 할 수 없음. 왜냐하면 비정적 변수는 각각의 객체가 별도로 가지기 때문에 어떤 객체를 호출 하는지 알 수 없기 때문에

#Cat.h
~~~c++
class Cat
{
public:
	Cat();
private:
	static int mCount;
};
~~~

<br/>

#Cat.cpp
~~~c++
#include "Cat.h"

int Cat::mCount = 0; // 초기화 하는 방법
Cat::Cat()
{
	mCount++;
}
~~~

<br/>

  - 정적 멤버 변수 베스트 프랙티스
    - 함수안에서 정적 변수를 넣지 말것
      - 클래스 안에 넣을 것
    - 전역변수 대신 정적 멤버변수를 쓸 것
      - 범위를 제한하기 위해
    - C스타일의 정적 변수를 쓸 이유가 없음!

###### [static](#static)
###### [Top](#top)

<br/>
<br/>

***

# 표준 템플릿 라이브러리(STL컨테이너)
  - 벡터(vector)
  - 맵(map)
  - 셋(set)
  - 스택(stack)
  - 큐(queue)
  - 리스트(list)
  - 덱(deque)
  - …

<br/>

  - STL컨테이너의 목적
   - 템플릿 프로그래밍 기반
   - 모든 컨테이너에 적용되는 표준 인터페이스
   - 메모리 자동 관리
   - std알고리듬은 많은 컨테이너에서 작동
  - STL컨테이너의 단점
   - 빈번한 메모리 재할당은 메모리 단편화를 초래함
   - 메모리 단편화를 엄청난 문제가 될 수 있음. 특히 가상 메모리를 지원하지 않는 플랫폼에서 프로그램을 실행할 때..
   - 메모리 단편화 때문에 애플리케이션이 뻗어 버릴 수 있음
     - 즉, 총 여유 공간은 충분하나 충분히 큰 연속되는 메모리가 없는 경우
   - 디버깅 및 고치는 게 쉽지 않음
  - STL컨테이너를 순회할 때는 반복자(iterator)를 쓰는게 표준 방식

<br/>

  - 벡터
    - 어떤 자료형도 넣을 수 있는 동적 배열(std::string처럼 자동으로 늘려준다는것)
      - 기본 데이터
      - 클래스
      - 포인터
    - 그 안에 저장된 모든 요소들이 연속된 메모리 공간에 위치
    - 요소 수가 증가함에 따라 자동으로 메모리를 관리해 줌
    - 어떤 요소에도 임의로 접근 가능
    - reserve를 사용하면 vector의 용량을 늘릴수 있지만, 용량이 증가해야 하면 새로운 저장 공간을 재할당하고 기존 요소들을 모두 새 공간으로 복사하게 된다(=vector안에 있는 데이터는 연속된 메모리 공간에 위치 하기 때문에)

#ConsoleApp.cpp
~~~c++
#include <iostream>
#include <vector>

int main()
{
	std::vector<int> scores; // 자료형만 바꿔서 다른 vector를 만들 수 있다
	//  std::vector<string> scores; // string형 vector
	scores.reserve(2);

	scores.push_back(10);
	scores.push_back(20);

	scores.pop_back();

	std::cout << "Size: " << scores.size() << std::endl; // 1
	std::cout << "Capacity: " << scores.capacity() << std::endl; // 2
}
~~~

<br/>

  - vector 앞에서부터 순회하기
    - iterator을 사용하여 순회한다
  - vector 뒤에서부터 접근하기
    - reverse_iterator을 사용해서 순회한다

#ConsoleApp.cpp
~~~c++
#include <iostream>
#include <vector>

int main()
{
	std::vector<int> scores;
	scores.reserve(3);

	scores.push_back(10);
	scores.push_back(20);
	scores.push_back(30);

	scores.pop_back();

	std::cout << "Size: " << scores.size() << std::endl; // 2
	std::cout << "Capacity: " << scores.capacity() << std::endl; // 3

	for (std::vector<int>::iterator it = scores.begin(); it != scores.end(); ++it)
	{
		std::cout << *it << std::endl;
	}
}
~~~

<br/>

  - 맵
    - 키(key)와 값(value)의 쌍들의 저장
    - 키는 중복될 수 없음
    - C++맵은 자동 정렬되는 컨테이너..
    - 이진 탐색 트리 기반
    - 맵의 장점과 단점
      - 장점
        - std::list나 std::vector보다 탐색 속도가 더 빠름 -> 왜냐하면 맵은 자동정렬으로 이진트리로 탐색하기 때문에
      - 단점
        - 자동으로 정렬됨
        - 해쉬맵이 아님, 따라서 O(1)이 아님

#ConsoleApp.cpp
~~~c++
#include <iostream>
#include <map>

int main()
{
	std::map<std::string, int> simpleScoreMap;

	simpleScoreMap.insert(std::pair<std::string, int>("A", 1));
	simpleScoreMap.insert(std::pair<std::string, int>("B", 3));

	simpleScoreMap["A"] = 0;

	std::cout << "A: " << simpleScoreMap["A"] << std::endl; // A: 0
	std::cout << "B: " << simpleScoreMap["B"] << std::endl; // B : 3
	std::cout << "size: " << simpleScoreMap.size() << std::endl; // size : 2
}
~~~

<br/>

  - 셋
    - 역시 정렬되는 컨테이너
    - 중복되지 않는 키를 요소로 저장함
    - 역시 이진 탐색 트리 기반
    - 셋은 맵과 거의 같다
      - 맵에서 값을 빼버린것과 같다
    - 맵의 장점과 단점과 똑같다

#ConsoleApp.cpp
~~~c++
#include <iostream>
#include <set>

int main()
{
	std::set<int> simpleScoreSet;

	simpleScoreSet.insert(20);
	simpleScoreSet.insert(100);

	for (auto it = simpleScoreSet.begin(); it != simpleScoreSet.end(); ++it)
	{
		std::cout << *it << std::endl;
	}
}
~~~

<br/>

    - 큐
      - 선입 선출 자료구조
      - 먼저 들어간 자료가 먼저 나간다

#ConsoleApp.cpp
~~~c++
#include <iostream>
#include <queue>

int main()
{
	std::queue<std::string> studentNameQueue;
	studentNameQueue.push("John");
	studentNameQueue.push("Jane");

	while (!studentNameQueue.empty())
	{
		std::cout << "Waiting student : " << studentNameQueue.front() << std::endl;
		studentNameQueue.pop();
	}
}

//Waiting student : John
//Waiting student : Jane
~~~

<br/>

    - 스택
      - 후입 선출 자료 구조
      - 마지막에 들어온것이 먼저 나간다는것

#ConsoleApp.cpp
~~~c++
#include <iostream>
#include <stack>

int main()
{
	std::stack<std::string> studentNamestack;
	studentNamestack.push("John");
	studentNamestack.push("Jane");

	while (!studentNamestack.empty())
	{
		std::cout << studentNamestack.top() << std::endl;
		studentNamestack.pop();
	}
}

//Jane
//John
~~~

<br/>

    - 리스트
      - 양방향 연결리스트
      - 양쪽 끝에서 삽입/제거 가능

#ConsoleApp.cpp
~~~c++
#include <iostream>
#include <list>

int main()
{
	std::list<int> lists;
	lists.push_front(1); // 1
	lists.push_front(2); // 2 1
	lists.push_back(3); // 2 1 3
}
~~~

<br/>

    - 그 밖의 컨테이너
      - 멀티셋, 멀티맵, 덱, 우선순위 큐..

###### [표준 템플릿 라이브러리(STL컨테이너)](#표준-템플릿-라이브러리stl컨테이너)
###### [Top](#top)

<br/>
<br/>

***

# 템플릿 프로그래밍
  - 템플릿이란?
    - Java와 C#에서 제네릭 메서드/클래스와 비슷
    - STL컨테이너  또한 템플릿
    - 덕분에 코드를 자료형마다 중복으로 작성하기 않아도 됨

#ConsoleApp.cpp
~~~c++
#include <iostream>

template <typename T>
T Add(T a, T b)
{
	return a + b;
}

// typename과 class는 같은 의미
//template <class T>
//T Add(T a, T b)
//{
//	return a + b;
//}

int main()
{
	std::cout << Add<int>(1, 2) << std::endl; // 3
	std::cout << Add(1.1, 2.2) << std::endl; // 3.3
	std::cout << Add(1.1f, 2.2f) << std::endl; // 3.3
}
~~~

<br/>

    - 템플릿은 어떻게 작동할까?
      - 템플릿을 인스턴스화할 때마다 컴파일러가 내부적으로 코드를 생성(컴파일 도중에 완료함)
        - 인스턴스화 한다는것은 코드중에 Add<int> 요런것, Add<double>요런것들을 볼때 만들어 준다는것, 물론 이런것들은 자료형을 생략해도 컴파일러가 알 수가 있다
      - 템플릿에 넣는 자료형 가지 수에 비례해서 exe파일 크기 증가
      - 컴파일 타임에 어느 정도 다형성을 부여할 수 있음

<br/>

    - 클래스 템플릿
      - 클래스도 템플릿을 만들 수 있다

#ConsoleApp.cpp
~~~c++
#include <iostream>

template <typename T>
class Compare {
public:
    Compare(T a, T b) : value1(a), value2(b) {}

    T getMax() {
        return (value1 > value2) ? value1 : value2;
    }

private:
    T value1;
    T value2;
};

int main() {
    Compare<int> intComparer(10, 20);
    std::cout << "더 큰 값은: " << intComparer.getMax() << std::endl;  // 20

    Compare<double> doubleComparer(3.14, 2.71);
    std::cout << "더 큰 값은: " << doubleComparer.getMax() << std::endl;  // 3.14

    return 0;
}
~~~

<br/>

    - 또한 하나 유의 할 것은, 템플릿 클래스를 사용할때는 구현또한 cpp가 아닌 h파일에 옮겨야 한다는것
    - 아래 코드처럼 하면 컴파일 에러가 발생하게 된다

#MyArray.h
~~~c++
#include <iostream>

#include "MyArray.h"

int main()
{
    MyArray<int> scores;

    scores.Add(10);
    scores.Add(20);
    scores.Add(30);
    scores.Add(40);

    return 0;
}
~~~

<br/>

#MyArray.cpp
~~~c++
#include <iostream>

#include "MyArray.h"

int main()
{
    MyArray<int> scores;

    scores.Add(10);
    scores.Add(20);
    scores.Add(30);
    scores.Add(40);

    return 0;
}
~~~

<br/>

#ConsoleApp.cpp
~~~c++
#include <iostream>

#include "MyArray.h"

int main()
{
    MyArray<int> scores;

    scores.Add(10);
    scores.Add(20);
    scores.Add(30);
    scores.Add(40);

    return 0;
}
~~~

<br/>

    - 구현부까지 h파일에 넣어야 한다는 단점이 있다
      - 아래는 컴파일이 된다

#MyArray.h
~~~c++
#pragma once
template<typename T>
class MyArray
{
public:
    bool Add(T data);
    MyArray();

private:
    enum { MAX = 3 };
    int mSize;
    T mArray[MAX];
};

template<typename T>
bool MyArray<T>::Add(T data)
{
    if (mSize >= MAX)
    {
        return false;
    }

    mArray[mSize++] = data;
    return true;
}

template<typename T>
MyArray<T>::MyArray()
    : mSize(0)
{
}
~~~

<br/>

#ConsoleApp.cpp
~~~c++
#include <iostream>

#include "MyArray.h"

int main()
{
    MyArray<int> scores;

    scores.Add(10);
    scores.Add(20);
    scores.Add(30);
    scores.Add(40);

    return 0;
}
~~~

###### [템플릿 프로그래밍](#템플-프로그래밍)
###### [Top](#top)

<br/>
<br/>

***

# 새로운키워드
  - [auto](#auto)
  - [static_assert](#static_assert)
  - [default](#default)
  - [delete](#delete)
  - [final](#final)
  - [override](#override)

###### [새로운키워드](#새로운키워드)
###### [Top](#top)

<br/>
<br/>

# auto
  - 자료형을 추론해줌
  - JavaScritp등의 언어에 있는 동적인 형과는 다름
  - 실제 자료형은 컴파일하는 동안 결정됨
  - auto변수는 반드시 초기화 해줘야함

~~~c++
auto x; // 에러
auto x = "qwe"
~~~

<br/>

  - auto를 사용하여 포인터를 받을 때 : auto 또는 auto*
  - 컴파일러가 포인터인지 아닌지 확인해서 알아서 받기 때문에 사실은 가독성이 좋지 않음 그래서 포인터 자료형이라면 auto*를 임의로 사용해서 가독성을 높이는 것이 좋음

~~~c++
auto a = 3;
auto b = ptr;  // ptr이 포인터라면 auto는 그 포인터를 받음
~~~

<br/>

  - auto를 사용하여 참조 받을 때 : auto&
  - 컴파일로는 참조형을 구분하지 못하기 때문에! 단지 대입을 한다고 해서 참조형을 받을 수 없다 이때는 그냥 복사하는 식으로 받아가게 된다

~~~c++
auto& a = b // b는 참조자료형
~~~

<br/>

  - auto를 사용하여 const 받을 때 : auto&, const auto&
  - const자료형을 그대로 이어 받게 된다
  - 가독성이 좋지 않음 ㅠ 가능하면 const auto&를 사용하자!

~~~c++
const int b = 10;
auto& a = b
~~~

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

###### [새로운키워드](#새로운키워드)
###### [Top](#top)

<br/>
<br/>

# static_assert
  - 일반적인 assert는 컴파일 후 실행중에 문제가 있는지 잡아 주는데 비해서 static_assert는 컴파일 중에 잡아주기 때문에 실행전에 문제를 잡을 수 있게 해줌
  - 컴파일중에 잡을 수 있는것은 이걸로 다 잡자!
  - ex) 특정한 구조체의 크기가 50인 것으로 기준을 다 잡아 놨는데, 이 부분안에 다른 사람이 더 추가 하게 되면 크기가 커지니 그런것들을 방지 할 수 있음

#ConsoleApp.cpp
~~~c++
#include <iostream>
#include <string>

struct StudentInfo
{
    char mStudentID[10];
    char mName[10];
    char mMajor[20];
    unsigned int mAge;
};

struct TeacherInfo
{
    char mTeacherID[10];
    char mName[10];
    unsigned int mAge;
    std::string mTeacherAccount;
    std::string mTeacherCardNumber;
};

int main()
{
    enum { STRUCT_MAX_SIZE = 64 };

    static_assert(sizeof(StudentInfo) <= STRUCT_MAX_SIZE,
        "Struct size must be smaller than 64byte");

    static_assert(sizeof(TeacherInfo) <= STRUCT_MAX_SIZE,
        "Struct size must be smaller than 64byte"); // 컴파일 에러

    return 0;
}
~~~

###### [새로운키워드](#새로운키워드)
###### [Top](#top)

<br/>
<br/>

# default
  - 컴파일러가 특정한 생성자, 연산자 및 소멸자를 만들어 낼 수 있음
  - 그래서, 비어 있는 생성자나 소멸자를 구체화할 필요가 없음
  - 또한, 기본 생성자, 연산자 및 소멸자를 더 분명하게 표시할 수 있음
  - 컴파일러가 기본적으로 만들어주는 것들을 사용해도 큰 문제가 없다는 것을 명시적으로 표시해 주는 용도로 사용!!!(컴파일러는 다른것이 없고 사람이 볼때가 달라진다)

~~~c++
#include <iostream>

class NumberClass
{
public:
	int num1 = 5;
	int num2 = 10;

	NumberClass() = default; // 기본생성자가 유효 하다는 것을 그냥 표시하는것
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

###### [새로운키워드](#새로운키워드)
###### [Top](#top)

<br/>
<br/>

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

###### [새로운키워드](#새로운키워드)
###### [Top](#top)

<br/>
<br/>

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

###### [새로운키워드](#새로운키워드)
###### [Top](#top)

<br/>
<br/>

# override

  - 부모가 가지고 있는 함수를 오버라이드를 한다는 뜻
  - 프로그래머가 실수로 부모의 함수를 오버라이드 하려고 했지만 실수로 인해 인자 자료형을 잘못 입력했을때, 그것은 컴파일러가 오버라이드가 아니라 부모함수 따로 자식 함수 따로로 생각하게 된다
  - 그렇기 때문에 부모의 것을 override를 확실히 한다고 의도를 표현하는것

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

###### [새로운키워드](#새로운키워드)
###### [Top](#top)

<br/>
<br/>

***

# 새로운자료형
  - [nullptr](#nullptr)
  - [고정 폭 정수형](#고정-폭-정수형)
  - [enum class](#enum-class)

###### [새로운자료형](#새로운자료형)
###### [Top](#top)

<br/>
<br/>

# nullptr

  - null은 상수 0 이고, nullptr은 null포인터 상수라고 보면 된다
  - 포인터 에서는 언제나 nullptr을 사용하자!!!
    - null과 nullptr을 사용한 한가지 예 차이가 있다면, 오버로딩된 함수의 인자가 정수 받는것과 포인터를 받는것이 있을때, 그 인자에 NULL을 넣으면 정수 함수가 실행되고, nullptr을 넣으면 포인터인자를 받는 함수가 실행된다
    - 개발자의 의도를 더욱 드러낼 수 있다 

~~~c++
int num = nullptr // 컴파일 에러
int* num2 = nullptr // 컴파일 성공
~~~

###### [새로운자료형](#새로운자료형)
###### [Top](#top)

<br/>
<br/>

# 고정 폭 정수형
- int8_t / uint8_t
- int16_t / uint16_t
- int32_t / uint32_t
- int64_t / uint64_t
- intptr_t / uintptr_t
- 등등 더욱 많이 존재함
- 가독성 향상을 위해 낡은 기존 자료형보다 이것들을 쓰자
  - 메모리 활용면에서 더욱 아낄수도 있다

~~~c++
int8_t score = student->GetScore();
~~~

###### [새로운자료형](#새로운자료형)
###### [Top](#top)

<br/>
<br/>

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

###### [새로운자료형](#새로운자료형)
###### [Top](#top)

<br/>
<br/>

***

# 새로추가된 STL
  - [unordered_map](#unordered_map)
  - [unordered_set](#unordered_set)
  - [범위기반 for반복문](#범위기반-for반복문)

###### [새로추가된 STL](#새로추가된-stl)
###### [Top](#top)

<br/>
<br/>

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

<br/>

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
