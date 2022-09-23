###### Top
  
  - [출력](#출력)
    - [Hello World 출력하기](#hello-world-출력하기)
    - [using namespace](#using-namespace)
    - [조정자(Manipulator)](#조정자manipulator)

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
