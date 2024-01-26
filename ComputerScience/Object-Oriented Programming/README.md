<br/> 

###### Top

- [개체지향 프로그래밍이란?/필요성/개체란?](#개체지향-프로그래밍이란필요성개체란)
- [OOP의 4대 특성](#oop의-4대-특성)
- [클래스(Class)](#클래스class)
- [Class베스트 프랙티스](#class베스트-프랙티스)
- [개체 모델링](#개체-모델링)
- [static, 싱글턴, 내포 클래스](#static-싱글턴-내포-클래스)
- [상속(inheritance)](#상속inheritance)
- [상속을 이용한 개체 모델링](#상속을-이용한-개체-모델링)
- [상속 vs 컴포지션](#상속-vs-컴포지션)
- [다형성](#다형성)
- [추상 메서드/클래스](#추상-메서드클래스)
- [인터페이스(interface)](#인터페이스interface)
- [인터페이스 vs 구현, 의존성 주입](#인터페이스-vs-구현-의존성-주입)
- [디자인 패턴](#디자인-패턴)
- [예외](#예외)
- [SOLID설계 정신](#solid설계-정신)

<br/>
<br/>

***

# 개체지향 프로그래밍이란?/필요성/개체란?
  - 개체지향 프로그래밍이란?
    - OOP : Object-Oriented Programming
    - 프로그래밍 패러다임 중 하나
    - 프로그램을 구성하는 기본 요소를 개체로 보려는 노력
    - OOP프로그램이란?
      - 상호작용하는 개체들의 집합
      - 절차적 프로그래밍은 실행할 명령어의 목록을 프로그램으로 봤음
  - 개체지향 프로그래밍의 필요성
    - 1. 절차적 언어는 데이터의 비인간화
    - 2. 절차적 언어는 데이터가 많아지면 관리가 힘듦
    - 3. 보완책으로 구조체(struct)를 사용
      - 데이터를 그룹으로 묶어 새로운 데이터형을 만드는 방법
      - 이 그룹을 마치 하나의 ‘변수처럼 사용
      - 구조체의 한계
        - 데이터와 동작이 분리되어 있음
        - 어떤 구조체가 어떤 함수랑 연관 있는지 찾기 복잡함

<br/>

// c언어에서의 구조체
~~~c
struct Human
{
	int age;
	float height;
}
~~~

<br/>

  - 데이터와 동작, 즉 변수와 함수를 하나로 묶을 수 있는 방법을 찾고자 함
    - c언어 같은 경우는 그것을 파일단위로 구별해서 저장함으로써 구현하기도 했음

<br/>

  - 절차적 프로그래밍은 매우 객관적
    - 기계어는 위에서 아래로 차례대로 실행됨
    - 어셈블리 명령어는 거의 모든 경우 기계어로 1:1 치환가능
    - c언어로 작성한 코드 한 줄은 보통 어셈블리 명령어 몇 개로 치환 가능
    - 함수 호출은 특정 메모리 위치로 jmp해서 순서대로 명령어를 실행하는 것
    - 그 명령어 실행 결과에 따라 레지스터 또는 메모리에 저장된 데이터가 변경
    - 어떤 프로그램이라도 최종적으로는 절차적으로 돈다!
    - 기준은 바로 작동하는 기계이기 때문에 절차적 프로그래밍은 매우 객관적이다.
    - 이 패러다임에 프로그래머의 주관이 개입할 여지가 적다

<br/>

  - 개체지향 프로그램은 사람이 기준
    - OOP는 기계처럼이 아니라 사람처럼 생각하자는 운동
    - 하지만 ‘사람처럼’ 이라는 말 자체가 매우 주관적
    - 사회와 기술이 발전함에 따라 사람들이 사고방식도 변함
  - OOP는 주관적
    - 역사 동안 다양한 학설 및 의견이 등장하고 사라짐
    - 개체에 대한 정의조차 다양했음
    - 오늘날에도 어떤 자료를 보고 배웠냐에 따라 OOP의 정의를 달리함
      - 어떤 시대에 나온 자료를 봤는가?
      - 어느 쪽 진영에서 주장한 내용을 배웠나?
      - 여러 진영의 상충되는 주장을 답습해서 모순된 주장을 하는 사람도 있음
  - 다수가 따르는 OOP 개념이 있음
    - 다행이 Jaca, C#, C++ 등의 주류 OOP 언어들이 교통정리를 끝냄
    - 많은 사람들이 이를 따르고 있음
  - 개체(object)
    - 개체란 서로 연관 있는 상태와 동작을 가지고 있다
      - 캡슐화란 개념의 일부
    - 사람들은 기본적으로 세상을 개체들의 모음으로 본다

###### [개체지향 프로그래밍이란?/필요성/개체란?](#개체지향-프로그래밍이란?/필요성/개체란?)
###### [Top](#top)

<br/>
<br/>

***

# OOP의 4대 특성
  - 보통 4가지 특성이 있다 함
  - 문헌에 따라 3대 특성 혹은 7대 개념이라고 하기도 함
  - 3대 특성
    - 캡슐화(encapsulation)
    - 상속(inheritance)
    - 다형성(polymorphism)
  - 4대 특성
    - 캡슐화(encapsulation)
    - 상속(inheritance)
    - 다형성(polymorphism)
    - (데이터) 추상화( (data) abstraction)
  - 7대 개념
    - 캡슐화(encapsulation)
    - 상속(inheritance)
    - 다형성(polymorphism)
    - (데이터) 추상화( (data) abstraction)
    - 연관(association)
    - 컴포지션(composition)
    - 집합(aggregation)

<br/>

  - 캡슐화
    - 데이터와 그 데이터에 작용하는 메서드를 하나로 묶음
      - = 클래스를 만드는것
    - 정보숨기기 : 개체 안에 있는 데이터를 외부로부터 보호
      - = 클래스 안에 멤버 변수를 private로 만드는것 -> 직접 접근하지 못함
  - 상속
    - 이미 존재하는 개체를 기반으로 확장된 개체를 만드는 방법
    - 확장된 개체
      - 기존의 개체에 속한 데이터와 동작을 모두 물려 받음
      - 여기에 다른 데이터나 동작을 추가할 수 있음
    - 실용적인 용도 : 코드 중복을 막음
      - 여러 개체에 공통되는 데이터와 동작을 부모 개체로 만듦
      - 여러 개체는 각각 그 부모 개체를 상속 받음
      - 그 후 자기에게만 필요한 데이터나 동작을 추가
    - = 코드 중복을 막고, 다형성을 만들어줌
  - 다형성
    - 많은 사람들이 OOP의 핵심이라 여기는 특징
    - 같은 지시를 내렸는데 다른 종류의 개체가 동작을 달리하는 것
      - 같은 지시 : 동일한 함수 시그니처 호출
      - 달리 동작 : 개체의 종류에 따라 실제로 실행되는 함수 구현 코드가 다름, 절차적 언어에서 이런 일을 하려면 if문을 사용해야 했음
      - 어떤 함수 구현이 실행될지는 실행 중에 결졍됨, 이를 늦은 바인딩(late binding)이라고 함, 일반적인 함수 호출은 이른 바인딩(early binding)이것은 컴파일 중에 결정됨
      - 다형성의 혜택을 받으려면 상속 관계가 필요
        - 부모 개체에서 함수 시그니처를 선언
        - 자식 개체에서 그 함수를 다르게 구현(오버라이딩)
        - 실용적인 용도 : 다른 종류의 개체를 편하게 저장 및 처리 가능
        - 예 : 부모의 형(type)을 저장하는 배열에 모든 자식 개체를 저장
          - for문 하나로 모든 개체를 순회하며 동일한 함수를 호출
          - 그러면 각 개체가 자신의 종류에 따라 다른 동작을 함
    - 위와 같은 것 말고 다른 두 형태의 다형성이 존재
      - 에드혹 다형성
        - 함수 오버로딩, 연산자 오버로딩
        - 즉, 함수명은 같은데 매개변수 목록이 다름
      - 매개변수 다형성
        - C#과 Java의 제네릭(Generic)
        - C++의 템플릿
      - 허나 둘다 일반적으로 다형성이라고 안 부름
        - 면접에서 다형성이란 무엇인가? 라는 질문은 이 둘을 묻는게 아님
        - OOP하고도 상관 없음
  - (데이터)추상화
    - (데이터)추상화
      - 개체 사용 시 그 안에 정확히 어떤 데이터가 있는지 알 필요 없음, 개체 안에 있는 데이터에 직접 접근 불가, 그 대신 개체의 함수를 통해 접근, 즉, 캡슐화는 데이터 추상화를 이루는 방법 중 하나
        - = private멤버 변수와 setter/getter를 사용하는것
        - = 어떤 구체적인 것에 직접 손대지 않겠다는 것
        - = 가령, get하는 함수를 시,분,초 3개인데, 실제 class안에는 초 단위 로만 데이터가 저장되어 있다던지 한다는것. class를 사용하는 사람들은 그 안에 어떤 데이터가 있는지 알수 없는것, 즉 내부에서 도는 데이터와, 밖에서 보는 데이터가 일치 하지 않을 수도 있다
      - 단점
        - 동작 없이 데이터만 있는 클래스는 쓸데없는 코드만 늘어남
        - 어떻게 추상화를 해야 하는지 뚜렷한 객관적 기준이 없음
    - 추상화
      - 다형성을 통한 추상화
        - = 여러 클래스에서 공통분모를 뽑아 부모 클래스를 만드는 과정
        - = 자식마다 달리 작동하는 구현을 부모의 메서드 시그니처로 일반화하는 과정
      - 추상 클래스(abstract class)나 인터페이스(interface)를 사용하는 추상화
  - 연관
    - 어떤 개체가 제공하는 기능을 다른 개체가 이용하는 관계
    - 종종 상속과 비교해서 설명
      - 상속은 자식 개체가 부모 개체의 모든 것을 내포하는 관계
      - 연관은 한 개체가 다른 개체를 참조하는 관계
      - 실세계에서 개체들이 상호작용하는 모습은 보통 연관과 비슷함
    - 세부적으로 다시 집합과 컴포지션으로 나누기도 함
      - 특히 UML이란 다이어그램을 그릴때
      - 이 셋을 구분하지 않고 다 합쳐서 컴포지션이라 하기도 함

<br/>

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/ff40fafc-0286-437b-a556-e32fd678b919)

<br/>

  - 컴포지션
    - 합성, 조합, 조립, 구성 등 다양한 번역어가 존재
    - 여러 개의 부품(그 자체로 개체)을 조립해서 새 개체를 만드는 방법
    - 집합과의 차이
      - 컴포지션에서는 부품 그 자체로는 존재 의의가 없음
      - 컴포지션에서는 조립품이 소멸할 때 부품도 같이 소멸(즉, 부품은 조립품의 수명을 따름)
  - 집합
    - 역시 여러 개체를 모아 다른 개체를 만들지만 별도로도 존재 가능
      - 예 : A 대학에 등록한 학생들
    - 컴포지션과의 차이
      - 각 개체들이 따로 따로 살아남을 수 있음
      - 예 : A대학이 문을 닫아도 학생들은 여전히 다른 대학에 등록 가능

###### [OOP의 4대 특성](#oop의-4대-특성)
###### [Top](#top)

<br/>
<br/>

***

# 클래스(Class)
  - Class란
    - 생물학에서 클래스(class)란 ‘강’을 의미
      - 종(species)이나 과(family)보다 상위 개념
    - 어떤 개체든지 속한 클래스가 있음
    - 같은 클래스에 속하는 개체는 비슷한 속성과 동작을 공유
    - 프로그래밍에서 클래스의 개념도 이와 유사
  - OOP에서의 클래스
    - 새로운 개체를 만들 때 사용하는 명세서
    - 개체는 반드시 클래스로부터 만들어야 함
    - 명세서에 담긴 내용
      - 속성(상태)
      - 동작
      - 등
  - 인스턴스(instance)
    - 개체를 부르는 또 다른 표현
    - ‘어떤 클래스에 속하는 개체의 한 예’라는 의미
    - 인스턴스화(instantiation) : 클래스로부터 개체 하나를 만드는 행위
    - 개체 생성시 멤버 데이터를 0에 준하는 값으로 초기화 해준다는것
      - C와 같은 언어 에서는 힙할당을 했을경우, 초기화 해주지 않기 때문에 전에 쓰던 값이 그대로 있을 수 있음

<br/>

~~~java
// class기본 형태

package test;
public class Human {
	public String name; // 맴버 변수 or 필드
	public int age; // 맴버 변수 or 필드
	
	public void walk() { // 맴버 함수 or 메서드
		this.age += 1;
	}
	
	public void eat() { // 맴버 함수 or 메서드
		this.age -= 1;
	}
}
~~~

<br/>

  - 생성자(constructor)
    - 개체 생성 시에 자동으로 호출되는 특수한 함수
    - 반환형: 없음(void가 아님)
    - 함수명 : 클래스명과 동일
    - public <클래스명>(<매개변수>){...}
    - 오버로딩도 가능
    - 생성자 오버로딩에서 코드 중복을 피하는 방법
      - 매개변수 수가 적은 생성자에서 매개변수 수가 많은 생성자를 호출
      - this()를 이용하면 다른 생성자를 호출할 수 있음
      - 매개변수가 없는 기본 생성자를 알아서 만들어 주지만, 프로그래머가 생성자를 하나라도 만든다면, 기본생성자를 만들어주지 않는다
    - 개체를 만들때, 초기화 해야 하는 변수들은 생성자에서 초기화 해주자!
    - 왜냐하면, 실수를 더 만들지 않기 위해, 개체 지향성 사고방식과 흐름의 인지
    - 개체가 생성과 동시에 올바른 상태임을 보장

<br/>

  - 접근제어자(access modifier)
    - 개체 외부에서 개체의 상태에 직접 접근하는 것을 막아야함, 개체의 상태를 변경하는 주체는 개체 자신인것이 가장 이상적, 개체는 자신의 상태를 스스로 책임져야함, 접근 제어자를 통해 이런 일을 할 수 있음. 이 모든것은 실수를 막기 위함
    - 접근 제어자
      - public : 누구나 접근 가능
      - protected : 자식들만 접근 가능
      - private : 외부 접근 금지, 내 개체 안에서만 접근 가능
      - 생략할 경우 : 같은 패키지에 속한 클래스만 접근 가능
    - 멤버변수는 보통 private, 메서드는 보통 public
      - private메서드는 클래스 안에서 중복되는 코드를 막기위해 사용한다
      - 멤버 변수 접근은 메서드를 통해서만!
        - 캡슐화
          - 멤버 변수를 외부에서 접근하지 못하게 캡슐화 한것
        - 추상화
          - Class안에 어떤 데이터를 가지고 있는지 알 수 없다, 오직 함수로서 접근하기 때문에
    - 같은 클래스에서 만들어진 인스턴스들은, 서로의 private에 접근할 수 있다, 객체들간의 접근제어자가 적용되는 것이 아니라, 클래스간에 적용된다

<br/>

~~~c#
// 같은 class이면서, 다른 인스턴스에 함수 안에서는 다른 인스턴스의 private에 접근할 수 있다

namespace ConsoleApp1
{
    public class Program
    {
        static void Main(string[] args)
        {
            Human human1 = new Human(10);
            Human human2 = new Human(20);

            // age출력
            human1.GetAge();
            human2.GetAge();

            human2.ageChange(human1);

            human1.GetAge();
            human2.GetAge();
        }
    }

    public class  Human
    {
        private int age;
        public Human(int age)
        {
            this.age = age;
        }

        public void ageChange(Human human1)
        {
            human1.age = 100;
            this.age = 50;
        }

        public void GetAge()
        {
            Console.WriteLine(this.age);
            Console.WriteLine();
        }
    }
}

//10
//20
//100
//50
~~~

<br>

  - Getter/setter
    - 남이 읽을 수 있게 해주려면 getter라는 public함수를 만든다
    - 외부에서 변경 가능한 정보는 setter라는 public함수를 만든다
    - private 멤버 변수의 getter랑 setter를 만들 바에는 그 멤버 변수를 public으로 바꾸면 되지 않나요..?
      - 개체 스스로 자신을 책임지도록 하는것이 OOP의 정신!!
      - 멤버 변수를 변수를 저장하지 않고 필요할 때마다 getter에서 계산가능
        - 질량과 중력 멤버 변수로부터 무게를 계산
      - setter에서 추가적인 로직을 실행할 수 있음
        - 음수의 나이가 인자로 들어올 경우 무시
      - 상속을 통한 다형성 구현 가능
        - 멤버 변수로는 다형성을 구현할 수 없다!

<br/>

~~~java
public class Human {
	private String name;
	
	public String getName() {
		return this.name;
	}
	
	public void SetName(String name) {
		this.name = name;
	}
}
~~~

###### [클래스(Class)](#클래스class)
###### [Top](#top)

<br/>
<br/>

***

# Class베스트 프랙티스
  - 멤버 변수는 private
    - 정보 숨기기
  - 새 개체는 유효하도록
    - 생성자를 통해 이를 강제할 수 있음
      - 매개변수가 틀릴 경우 컴파일 자체가 안됨
      - 매개변수가 바뀌는 경우도 마찬가지
  - getter는 자유롭게 추가
    - 사용자가 알 필요 없는 정보는 보여주지 않는 게 정석
    - 그러나 보여줘도 큰 문제는 없으니 getter는 보통 자유롭게
    - 주의 : 어떤 개체의 레퍼런스를 반환할 때는 문제 될 수도 있음
  - setter는 고민 후 추가
    - 이상적인 개체의 상태 수정법
      - 그 개체의 사용자가 어떤 동작을 지시
      - 그 동작의 결과로 개체 안에 있는 어떤 상태가 바뀜
        - 즉, 개체 스스로 상태를 변경
    - setter는 데이터를 직접 바꾸므로 가능한 피하는 게 좋음
      - 단  언제나 그럴 수는 없기에 많이들 허용
      - 중요한점 : 개체가 불확실한 상태로 되는 경우를 최대한 막자

###### [Class베스트 프랙티스](#class베스트-프랙티스)
###### [Top](#top)

<br/>
<br/>

***

# 개체 모델링
  - 이렇다 할 정답이 없음
  - 사람처럼 생각하자는 것이 OOP
  - ‘사람다움’은 주관적
  - 한 방에 제대로 설계하기도 어려움
  - 즉, 여러 번 다시 고치기가 쉬움
  - 개체 모델링을 도와주는것에 클래스 다이어그램이 있음

<br/>

  - 클래스 다이어그램
    - 어떤 시스템에 있는 클래스들을 보여주는 다이어그램
      - 클래스 안에 들어있는 상태, 동작, 접근 제어자
      - 클래스 간의 관계(상속, 컴포지션 등)
    - 시스템의 정적인 구조를 보여주기에 적합
    - 먼 훗날 데이터베이스 설계할 때도 비슷한 다이어그램을 볼 것임
    - UML(Unified Modeling Language)의 일부

<br/>

  - UML : 설계를 시각화 하는 방법의 표준화를 추구
  - 디자인 패턴 : 설계를 이용한 문제 해결법의 표준화를 추구

<br/>

  - 주제 : 꽃에 물주기
    - 화분에 예쁜 꽃이 펴있음
    - 이 꽃은 일정량의 물을 매일 뿌려만 주면 평생 살 수 있음
    - 물을 뿌릴 때 사용하는 도구는 분무기
    - 하루라도 필요한 물을 못 받으면 죽음
    - 그 뒤 아무리 물을 뿌려도 안 살아남
  - 1단계 : 분무기 모델링
    - 클래스명 -> WaterSpray
    - 가장 중요한 상태 : 현재 남아 있는 물의 양
      - 처음 분무기가 생성될 때는 0
      - int remainingWaterInMl (단위는 ml)
    - 빈 생성자 생성
      - 분무기가 처음 만들어 질때는 0으로 만들어 진다는 의미
    - 언제라도 남은 물의 양을 확인할 수 있으면 좋겠으니 getter추가
    - 물이 떨어지면 다시 채워야 하니 setter도 추가
      - 1. 물을 200ml까지 채워야지 -> set함수라는 느낌의 메서드
      - 2. 물을 100ml더 추가해야지 -> add함수라는 느낌의 메서드
  - 2단계 : 물뿌리기
    - 1. 동작에 초점을 맞출 경우
      - pull() : 방아쇠를 당기다
      - press() : 펌프를 누르다
    - 2. 용도에 초점을 맞출 경우
      - spray() : 뿌리다
    - 분무한 양을 반환하지 않더라도 확인 가능하게 할것인지, 물뿌린후 남은 양을 반환하게 할것인지
      - 정답은 없지만, “물뿌린후 남은 양을 반환하게”한다면 
        - 1. 메서드 시그니처 만으로 정확히 뭘 반환하는지 알지 어렵다
        - 2. 메서드가 하는일이 너무 많을 수 있다
  - 3단계 : 분무기에 최대 용량을 추가하자
    - 상수형 변수로 작성하는것이 좋다
      - 분무기에 양을 더 추가할 경우에는, 상수형 변수보다 커질수 없게 만든다
    - 분무기마다 용량이 달라질 수 있는 경우
      - 생성자에서 초기화 하는것이 좋다
  - 4단계 : 분무기에서 물을 받을 수도꼭지..를 만들까 말까
    - 필요없다! 제발 필요한것만 만들기!
  - 5단계 : 화분
    - 살았는지 죽었는지를 기억할 변수 필요
      - setter가 필요없다!, 죽으면 안살아 나기 때문에
    - minDailyWaterInMl : 매일 필요한 최소 물의 양(ml)
      - 꽃마다 다른 양이 필요하니 생성자를 통해 초기화
      - getter는 추가해도 큰 문제 없음
      - setter는 역시 추가 안함
  - 6단계 : 두 클래스가 직접 상호작용하도록

<br/>

  - 클래스를 잘게 쪼개면 재사용성이 높아지지만, 그것이 항상 좋은것은 아니다
  - 코드 유연성은 양날의 검
  - 유연성 높음
    - 성능 떨어짐, 가독성 떨어짐, 재사용성 상승
  - 유연성 낮음
    - 성능 상승, 가독성 상승, 재사용성 떨어짐

<br/>

  - 유연성의 두 얼굴
    - 안 유연한 클래스를 만드는 경우가 더 빈번하며 그래도 상관 없음
    - 절대반지는 없음
    - 어느 정도의 유연성이 필요한지는 각 프로젝트마다 다름

<br/>

  - OOP공부 가이드라인
    - 1. 프로그래머의 기본자세를 확실히 잡을 것
      - 실수를 저지르기 어려운 코드 만들기
      - 문제를 해결하는 코드 만들기
      - 문제가 생기면 디버깅 하기
    - 2. 필요에 따라 점점 유연성을 키우는 법을 배워 나가기


###### [개체 모델링](#개체-모델링)
###### [Top](#top)

<br/>
<br/>

***

# static, 싱글턴, 내포 클래스
  - static(정적)
    - 모든 것이 개체 속에 있는 불편함
      - 단순한 계산도 개체를 만들어서 굳이 해야 할까?
      - 개체 단위가 아니라 클래스 단위에서 뭔가를 하고 싶을때는?
      - 정적(static)이 이런 불편함을 해결해준다
    - Class안에, 멤버 함수나, 멤버 변수에 static을 붙여주면 개체를 만들지 않고도 사용할 수 있게 된다
      - 즉, 개체 소속이 아니라 Class소속이 된다
      - 만들어진 개체에서 static을 호출 할 수도 있다
        - 생성된 개체 수에 상관없이 클래스는 단 하나만 존재, 즉 어떤 개체라도 호출해야 하는 메서드를 특정할 수 있음
    - 특정한 Class에 개체를 만들고 싶지 않으면, 기본 생성자를 private로 만들면 된다
      - C#은 static class를 만들 수 있음으로 그것을 사용하면 된다
    - 즉, static키워드가 있다면 Class자체에 속하고, 없다면 개체에 속하게 된다
    - static메서드에서 static이 아닌 메서드 및 변수에 접근 할 수 없다
      - 클래스에 속한 메서드가 개체에 속한 멤버(함수/변수)에 접근 불가
      - 개체에 속한것들은 클래스에서 계속 만들어 낼 수 있기 때문에 static메서드에서 static이 아닌것은 어떤것들 접근해야 할지 알 수 없기때문에 불가능하다

<br/>

  - static정리
    - 1. static 멤버 변수 및 멤버 함수는 클래스에 속함(딱 하나만 존재)
    - 2. static 아닌 것은 개체에 속함(따라서 개체 수만큼 존재)
    - 3. 비정적 -> 정적 : 접근 가능
    - 4. 정적 -> 비정적 : 접근 불가능
    - static을 사용하면 C와 C++같은 전역 변수,함수로 사용할 수 있다. C나 C++보다 더 장점이 있다
      - 클래스 내부에 있기 때문에 이름 충돌이 적다
      - 접근제어자를 통해서 클래스 내부,외부 접근을 제어할 수 있다

<br/>

  - static에 대한 비판
    - 모든 것은 개체여야 한다라고 주장하는 소수설 지지자
    - static은 순수한 OOP가 아니라라고 말하는사람들
    - OOP가 절차적 프로그래밍을 완전히 대체할 것이라는 도발
    - 그래서.. 개체이면서도 static과 사실 상 똑같이 작동하는 OOP설계법을 만들었다(= 싱글턴)
  - static에 비판에 대한 결론
    - static을 쓰는 게 OOP의 개념과 먼 것은 사실
    - 그러나 OOP의 개념과 멀다고 잘못된 방법은 아님
    - 훌륭한 프로그래머의 자세
      - OOP와 절차적 개념을 언제, 어디서 각각 써야 하는지 안다

<br/>

  - 디자인 패턴
    - 알고리즘, 베스트 프랙티스, 디자인 패턴 으로 갈수록 추상적인 개념
    - 소프트웨어 설계에서 흔히 겪는 문제에 대한 해결책
    - 범용적, 반복적
    - 완성된 설계가 아님
      - 곧바로 코드로 바뀌지 않음
      - 어떤 문제를 다양한 환경에서 해결하는 법을 설명한 가이드로 생각하면 됨
    - 장점
      - 이미 테스트를 마친 검증된 개발 방법을 사용해 개발 속도를 향상
      - 공통 용어 정립을 통한 개발자들 간의 빠른 의사소통을 촉진
        - xx패턴을 사용하면돼 라는 한 마디로 의사소통이 가능
    - 단점
      - 곧바로 적용할 수 없는 참고 가이드를 ‘패턴’이라 부를 수 없음
      - 잘못 적용하는 경우가 빈번함
      - 비효율적인 해법이 되는 경우가 많음
        - 디자인 패턴은 범용적, 추상적
        - 코드 중복이 많아지고 성능이 떨어질 수 있음
      - 다른 추상화 기법과 크게 다르지 않음
    - 디자인 패턴은 만능이 아님
      - 프로그래밍을 잘 못하는 사람이 디자인 패턴 익힌다고 더 잘하지 않음
    - 생성패턴(Createional)
      - 클래스 : 팩토리 메서드
      - 개체 : 추상 메서드
      - 개체 : 빌더
      - 개체 : 프로토타입
      - 개체 : 싱글턴
    - 구조패턴(Structural)
      - 클래스 : 어댑터
      - 개체 : 브리지
      - 개체 : 컴포지트
      - 개체 : 데코레이터
      - 개체 : 퍼사드
      - 개체 : 플라이웨이트
      - 개체 : 프록시
    - 행위패턴(Behavioral)
      - 클래스 : 인터프리터, 템플릿 메서드
      - 개체 : 책임 연쇄
      - 개체 : 커맨드
      - 개체 : 반복자
      - 개체 : 중재자
      - 개체 : 메멘토
      - 개체 : 옵저버
      - 개체 : 상태
      - 개체 : 전략
      - 개체 : 방문자

<br/>

  - 싱글턴
    - 어떤 클래스에서 만들 수 있는 인스턴스 수를 하나로 제한하는 패턴
    - 다음과 같은 조건을 충족하는 개체에 적합
      - 1. 프로그램 실행 중에 최대 하나만 있어야 함
      - 2. 이 개체에 전역적으로 접근이 가능해야 함
    - private생성자
    - static메서드를 통해서만 개체를 얻어올 수 있음
    - 아직 개체가 없는 경우
      - 개체를 생성 후 static변수에 저장
      - static변수에 저장된 개체를 반환
    - 이미 개체가 있는 경우
      - static 변수에 저장되어 있는 개체를 반환
    - 싱글턴을 만드는데 필요한 것만 static이면 된다. 그렇다면 개체는 한개인것이고, 그걸로 다 접근하기 때문
    - 싱글턴 vs static
      - static으로는 못하는 일
        - 다형성을 사용할 수 없다
        - 시그니처를 그대로 둔 채 멀티턴 패턴으로 바꿀 수 없다
          - 멀티턴 : 한 Class에서의 개체 수를 제한해두고, 그것을 재사용하는것
        - 개체의 생성 시점을 제어할 수 없다
          - Java의 static은 프로그램 실행 시에 초기화됨
          - 단, 싱글턴을 사용해도 제어에 어려움이 있음
    - 싱글턴 생성시 인자가 필요한 경우
      - 개체 생성과 개체 get함수를 분리해서 만든다
      - createaInstance
      - deleteInstance
      - getInstance

<br/>

// 싱글턴 기본 형태
~~~c#
namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Singleton singleton0 = Singleton.GetInstance();
            Singleton singleton1 = Singleton.GetInstance();
            Console.WriteLine(singleton0 == singleton1);

        }
    }

    public class Singleton
    {
        private static Singleton _instance;

        private Singleton()
        {

        }

        public static Singleton GetInstance()
        {
            if (_instance == null)
            {
                _instance = new Singleton();
            }

            return _instance;
        }
    }
}

// True
~~~

<br/>

  - 내포클래스
    - 클래스 안에 다른 클래스가 들어가 있는 모습
    - 안에 들어 있는 클래스를 내포클래스라고 함
    - 내포클래스 용도
      - 서로 연관된 클래스들을 그룹 지을 수 있음
        - 패키지로 그룹 짓는 것도 가능
        - 하지만 클래스 속에 넣는 것이 더 긴밀한 그룹
      - 내포 클래스는 바깥 클래스의 private멤버에 접근 가능
        - 하지만 그 반대의 경우는 불가능
    - 요즘에는 잘 안쓰고, 파일하나에 클래스 하나를 만들어서 사용한다

<br/>

~~~c#
public class Human
{
    public static class Human2
    {

    }
}
~~~


###### [static, 싱글턴, 내포 클래스](#static-싱글턴-내포-클래스)
###### [Top](#top)

<br/>
<br/>

***

# 상속(inheritance)
  - 거의 모든 사람이 OOP의 핵심이라 여기는 특성
    - 초장기 OOP에서 가장 중요한 특성이라 여겼음
    - 재사용성이 궁극의 목적이라 신봉하던 시대
    - 현재에도 상속을 지원하지 않으면 OOP언어라고 안 보는 게 보통
  - OOP의 또 다른 매우 중요한 특성인 다형성의 기반
  - OOP에서의 상속이란? : 이미 존재하는 클래스를 기반으로 새 클래스를 만드는 방법
    - 새 클래스는 기존 클래스의 동작과 상태를 그대로 물려 받음
    - 그 외에 새 클래스만의 동작과 상태를 추가 가능
    - 물론 이 새 클래스를 상속해서 또 다른 클래스를 만들 수 있음
  - 용어
    - 이미 존재하는 클래스를 부르는 이름
      - 부모(parent)클래스
      - 기반(base) 클래스
    - 새 클래스를 부르는 이름
      - 자식(child) 클래스
      - 파생(derived) 클래스
  - 자식 클래스는 부모 클래스의 public 멤버에 접근할 수 있지만,  부모 클래스는 자식클래스의 public 멤버에 접근할 수 없다, 부모 클래스는 하나이고, 자식은 그에 따라 여러개 일 수 있기 때문에
  - 부모클래스에서 생성자에 인자가 있다면, 자식 클래스에서도 생성자를 만들때 그 인자를 부모에게 전달해 주어야 한다

<br/>

// 상속의 기본 형태
// 부모클래스에서 생성자에 인자가 있다면, 자식 클래스에서도 생성자를 만들때 그 인자를 부모에게 전달해 주어야 한다
~~~c#
namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Minkyoo minkyoo = new Minkyoo("Minkyoo", 25);
            Console.WriteLine(minkyoo.getAge()); // 25
        }
    }

    public class Human
    {
        private string name;
        private int age;

        public Human(string name, int age)
        {
            this.name = name;
            this.age = age;
        }

        public int getAge()
        {             
            return this.age;
        }
        public string getName()
        {
            return this.name;
        }
    }
    
    public class Minkyoo : Human
    {
        public Minkyoo(string name, int age) : base(name, age) // 이렇게 안하면 컴파일 에러
        {

        }
    }
}
~~~

<br/>

//상속 받으면 부모의 것부터 생성이 된다 
~~~c#
using ConsoleApp1;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            C c = new C();
        }
    }

    public class A
    {
        public A()
        {
            Console.WriteLine("A");
        }
    }

    public class B : A
    {
        public B()
        {
            Console.WriteLine("B");
        }
    }

    public class C : B
    {
        public C()
        {
            Console.WriteLine("C");
        }
    }
}

// 출력 결과
//A
//B
//C
~~~

<br/>

  - 접근정리
    - 부모의 생성자에 인자가 있으면 자식 생성자에도 인자를 넣어줘야 한다
    - 부모의 멤버가 Public이면 자식내부와, 외부에서 접근 가능
      - 부모도 public,자식도 public이면 자식은 부모의 것을 숨긴다
    - 부모의 멤버가 private이면 자식내부,외부에서 접근 불가, 부모의 public함수에서 가져와야함
    - 부모의 멤버가 protected이면 자식 내부에서만 접근가능
    - 위의 모든것을 배제하고, 부모에 있는 함수를 출력하면 부모의 값을 가져오게 됨

<br/>

  - 자식을 부모에 대입하는 건 암시적 캐스팅
    - 컴파일러가 암시적으로 해준것
    - 명시적캐스팅은 자식 앞에 부모를 명시해서 캐스팅 하면 된다
  - 부모를 자식에 대입하는것은 불가능
    - 하지만 프로그래머가 명시적으로 캐스팅 할 수 있다
  - java에서는 Object 클래스가 있고, 모든 클래스는 Object 클래스를 상속 받는다. 그래서 거기에 있는 기본 함수등을 모든 클래스가 사용할 수 있다

<br/>

// 자식, 부모 캐스팅
~~~c#
namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Minkyoo minkyoo = new Minkyoo("Minkyoo", 25);
            Human human = minkyoo; // 가능
            Console.WriteLine(human.aaa); //불가
            Console.WriteLine(minkyoo.aaa); //가능

            Human human1 = new Human("human1", 30);
            Minkyoo minkyoo1 = human1; // 불가

            minkyoo1 = (Minkyoo)human1; // 가능

        }
    }

    public class Human
    {
        private string name;
        public int age;

        public Human(string name, int age)
        {
            this.name = name;
            this.age = age;
        }

        public int getAge()
        {             
            return this.age;
        }
        public string getName()
        {
            return this.name;
        }
    }
    
    public class Minkyoo : Human
    {
        public int aaa = 50;
        public Minkyoo(string name, int age) : base(name, age) // 이렇게 안하면 컴파일 에러
        {

        }
    }
}
~~~


###### [상속(inheritance)](#상속inheritance)
###### [Top](#top)

<br/>
<br/>

***

# 상속을 이용한 개체 모델링
  - 인간에게 상속이 어려운 이유
    - 인간은 실세계에서 직간접적으로 경험한 것을 쉽게 이해
    - 상속은 유전 + 진화 관계
    - 실세계에서 유전과 진화는 여러 세대 동안 천천히 진행됨
    - 이런 변화를 일반화시키려면 매우 많은 사례들이 필요
    - 이런 변화를 경험하기에 한 개인의 수명이 턱도 없이 부족함
    - 따라서 경험에 기초해 상속을 이해하기 어려움
  - 상속을 이해하는 방법
    - 일반화 능력이 필요
      - 직간접적으로 경험한 다양한 개체들로부터 공통된 부분을 찾는 능력
      - 그 공통된 부분은 실존하지 않는 개념일 수도 있음

<br/>

  - 주제 : 벽시계
  - 학습한 영상참고!
  - 생각보다 상속을 이용한 개체 모델링은 쉽지 않다, 처음에 부모를 상상해서 만드는것은 어렵고, 자식들의 특징을 모아서, 코드중복을 피하기 위해 부모를 만들게 된다. 하지만 나중에 같은 부류지만 부모에 있는 함수나 변수에 맞지 않은 것이 들어오게 되면 원래 있던 부모를 그냥 상속 받기는 어려워지고, 부모밑에 또 class를 만들어 거기에 원래 있던 자식들과, 방금 추가한 특별한 기능을 가진 자식을 따로 분류해 상속받게 해야한다

<br/>

  - 깊은 상속은 생각보다 어렵다
    - 따라서 1~2단계만 상속하는게 보통
    - 깊어질수록 추상화 능력이 더 필요

###### [상속을 이용한 개체 모델링](#상속을-이용한-개체-모델링)
###### [Top](#top)

<br/>
<br/>

***

# 상속 vs 컴포지션
  - 둘다 재사용성을 위한 방법
  - 상속으로 해결할 수 있는 많은 문제를 컴포지션으로도 가능
    - 그 반대도 가능
    - 순전히 기술적인 관점
  - OOP에서 큰 결정사항 중 하나 : 상속 vs 컴포지션 중 하나를 고르는 것
  - 일단은…
    - B는 A이다(is-a관계) = 상속으로 만들자
    - A가 B를 가지고 있다, A가 B를 포함하고 있다(has-a관계) = 컴포지션 으로 만들자

<br/>

  - 코드 재사용성
    - 설계와 코딩에 드는 시간을 절약
      - 하지만 실적에서 100%적용은 불가능
      - 프로그램이 미래에 어떻게 변할지 완전히 예측 불가
      - 재사용성에 눈이 멀어 잘못된 바퀴를 장착할 수도 있음
    - 테스트에 걸리는 시간을 절약
      - 이미 테스트까지 끝낸 클래스를 다시 테스트할 필요가 없음
      - 상속 시 부모 클래스는 이미 테스트가 끝난 상황
      - 이때 부모 클래스를 테스트할 필요가 없다 말하는 사람도 있음
      - 하지만 실제로는 그렇지 않은 경우가 빈번
        - 새로운 방법으로 부모 클래스 사용, 자식 클래스에서 부모 클래스를 다른 방식으로 사용할 수 있음
      - 부모 클래스를 변경
        - 새로운 자식 클래스가 상속받을 수 있도록 부모 클래스 수정가능성 있음
    - 관리 비용을 절약
      - 코드 중복이 없음, 따라서 한곳만 고치고 다른 곳을 실수로 안 고칠 가능성이 없음
      - 관련된 코드가 모두 한 파일 안에 있음
       - 따라서, 그 파일을 열어 모든 로직 및 데이터 파악 가능
        - 단, 재사용성을 위해 클래스를 잘게 나누다 보면 파일 수가 많아짐
  - OOP모델링은 많은 연습이 필요
    - 몇 개의 베스트 프랙티스로 간단히 정리가 불가능
      - 주관성이 높음
      - 너무나 다양한 프로그램이 존재
    - OOP모델링에 지름길은 없으며, 많은 코딩 경험이 필요하다
    - 다른 사람의 코드를 많이 사용해 보자
    - 코드 리뷰를 주고받아 보자

<br/>

//상속
~~~c#
namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Box box = new Box(1, 2, 3);

        }
    }

    public class Rectangle
    {
        private int widht;
        private int height;

       public Rectangle(int widht, int height)
       {
           this.widht = widht;
           this.height = height;
       }
    }
    
    public class Box : Rectangle
    {
        private int depth;

        public Box(int widht, int height, int depth) : base(widht, height)
        {
            this.depth = depth;
        }
    }
}
~~~

<br/>

//컴포지션
~~~c#
namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Rectangle rectangle = new Rectangle(5, 6);
            Box box = new Box(rectangle, 10);

        }
    }

    public class Rectangle
    {
        private int widht;
        private int height;

       public Rectangle(int widht, int height)
       {
           this.widht = widht;
           this.height = height;
       }
    }
    
    public class Box
    {
        private Rectangle rectangle;
        private int depth;

        public Box(Rectangle rectangle, int depth)
        {
            this.rectangle = rectangle;
            this.depth = depth;
        }
    }
}
~~~

<bt/>

  - 상속,컴포지션
    - 상속은, 개체 생성시, 메모리가 하나의 덩어리로 된다, new를 한번만 하기 때문
    - 컴포지션은 메모리가 여러덩어리 new를 여러번 하게 된다.
    - 메모리에 차지하는 용량의 차이는 미비 할지라도, 실행 속도에 영향을 주게 된다.
      - 상속은 개체 메모리가 하나의 덩어리로 되어 있기 때문에, 개체가 한번에 캐시 메모리에 들어갈 가능성이 높다
      - 컴포지션은 메모리가 여러 덩어리로 되어 있게 때문에, 개체 내 부품 수 만큼 캐시 메모리로 로딩할 가능성이 높다.
      - 캐시 메모리는, RAM메모리에서 특정 메모리 위치에서 연속적으로 메모리를 읽어 올 수 있다
    - 컴포지션은 개체메모리를 할당하고 해제하는 횟수가 많기 때문에 더 느릴수 있다
    - 다형성을 사용하기 위해서는 무조건 상속을 사용해야 한다
    - 깊은 상속을 하면, 상속은 부모의 기능을 내려 받는 것이기 때문에 부모를 고치면 아래의 자식들의 기능을 전부다 확인해 봐야 한다. 컴포지션은 기능을 내려 받는 다기 보다는, 특정 Class를 내 안에 넣어서, 그 기능을 부분적으로 사용하는것이기 때문에 깊은 상속보다는 관리가 쉬울 수 있다

<br/>

  - 엔티티 컴포넌트 시스템
    - 줄여서 ECS(Entity Component System)라고도 함
    - 프로그래머가 컴포지션을 선호하는 또 다른 예
    - 코드 변경 없이 자유롭게 개체를 만들 수 있도록 하는 게 목적
    - 아키텍처 패턴 중 하나
      - 디자인 패턴과 비슷
      - 그러나 아직 약장수가 적음
    - 특히 게임 업계에서 많이 사용

###### [상속 vs 컴포지션](#상속-vs-컴포지션)
###### [Top](#top)

<br/>
<br/>

***

# 다형성
  - 많은 사람들이 OOP의 핵심이라 여기는 특징
  - 같은 지시를 내렸는데 다른 종류의 개체가 동작을 달리하는 것
    - 같은 지시 : 동일한 함수 시그니처 호출
    - 달리 동작 : 개체의 종류에 따라 실제로 실행되는 함수 구현 코드가 다름, 절차적 언어에서 이런 일을 하려면 if문을 사용해야 했음
    - 어떤 함수 구현이 실행될지는 실행 중에 결졍됨, 이를 늦은 바인딩(late binding)이라고 함, 일반적인 함수 호출은 이른 바인딩(early binding)이것은 컴파일 중에 결정됨
    - 다형성의 혜택을 받으려면 상속 관계가 필요
      - 부모 개체에서 함수 시그니처를 선언
      - 자식 개체에서 그 함수를 다르게 구현(오버라이딩)
      - 실용적인 용도 : 다른 종류의 개체를 편하게 저장 및 처리 가능
      - 예 : 부모의 형(type)을 저장하는 배열에 모든 자식 개체를 저장
        - for문 하나로 모든 개체를 순회하며 동일한 함수를 호출
        - 그러면 각 개체가 자신의 종류에 따라 다른 동작을 함

<br/>

  - 무늬 vs 실체
    - virtual, override키워드를 사용하면 다형성이 적용되게 되고, 실체에 따라서 호출이 진행되게 된다
      - virtual이 아닌함수에 override키워드를 사용하면 컴파일 에러가 난다
      - virtual인 함수에 override키워드를 꼭 사용하지 않고, 다형성을 일으키지 않을 수 있다
      - virtual :  이 함수를 다른 자식 클래스에서 덮어쓸 수 있게 바꿔준다
      - override : 자식클래스에서 부모의 같은 시그니처를 가진 함수를 덮어 쓰겠다
    - 다형성은 무늬가 아닌 실체를 따라간다!

<br/>

~~~c#
// Java에서는 virtual, override 키워드가 없어도 컴파일러가 만들어 준다
namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Animal[] animals = new Animal[4];
            animals[0] = new Dog();
            animals[1] = new Bird();
            animals[2] = new Cat();
            animals[3] = new Animal();

            for (int i = 0; i < animals.Length; i++)
            {
                animals[i].shout();
            }

        }
    }

    public class Animal
    {
        public virtual void shout()
        {
            Console.WriteLine("난 Animal");
        }

    }
    
    public class Dog : Animal
    {
        public override void shout()
        {
            Console.WriteLine("난 Dog");
        }
    }

    public class Bird : Animal
    {
        public override void shout()
        {
            Console.WriteLine("난 Bird");
        }
    }

    public class Cat : Animal
    {
        public override void shout()
        {
            Console.WriteLine("난 Cat");
        }
    }
}

// 출력
// 난 Dog
// 난 Bird
// 난 Cat
// 난 Animal
~~~

<br/>

  - override 되어 있지 않지만, 그것을 실체는 자식인데, 무늬가 부모인 것에서 출력하기 위해서는, 무늬를 자식으로 바꾸어서 출력해야 한다

~~~c#
namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Animal[] animals = new Animal[4];
            animals[0] = new Dog();
            animals[1] = new Bird();
            animals[2] = new Cat();
            animals[3] = new Animal();

            for (int i = 0; i < animals.Length; i++)
            {
                animals[i].shout();
            }

            ((Dog)animals[0]).shout2(); // 부모에서 바로는 불가능하며, 자식으로 형변환을 해줘야 가능하다.
        }
    }

    public class Animal
    {
        public virtual void shout()
        {
            Console.WriteLine("난 Animal");
        }

    }
    
    public class Dog : Animal
    {
        public override void shout()
        {
            Console.WriteLine("난 Dog");
        }
        public void shout2()
        {
            Console.WriteLine("난 Dog2");
        }
    }

    public class Bird : Animal
    {
        public override void shout()
        {
            Console.WriteLine("난 Bird");
        }
    }

    public class Cat : Animal
    {
        public override void shout()
        {
            Console.WriteLine("난 Cat");
        }
    }
}

// 출력
// 난 Dog
// 난 Bird
// 난 Cat
// 난 Animal
// 난 Dog2
~~~

<br/>

  - base키워드 사용하여 자식에서 부모의 함수 출력하기

~~~c#
namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Animal animal = new Animal();
            animal = new Dog();
            animal.shout();
        }
    }

    public class Animal
    {
        public virtual void shout()
        {
            Console.WriteLine("난 Animal");
        }

    }
    
    public class Dog : Animal
    {
        public override void shout()
        {
            Console.WriteLine("난 Dog");
            base.shout();
        }
    }
}

// 출력
// 난 Dog
// 난 Animal
~~~

<br/>

  - 다형성의 장점
    - 각 자료형의 코드가 클래스 안에 들어가니 캡슐화 올라감
      - 프로그램의 크기가 커지면, 각 상태와 동작간에 상관성이 있는 것들끼리 같이 분류해 두거나 하는 정리가 필요한데, 개체지향과 다형성이 있다면 그것들을 정리하게 될 수 밖에 없다(언어 수준에서 그렇게 할 수 밖에 없도록 함)
    - 유지 보수성도 높아짐
    - 새로운 클래스를 추가할 때 클래스 코드만 추가하면 됨

<br/>

  - 다형성은 늦은 바인딩
    - 실제로 호출되는 메서드 구현이 프로그램 실행 중에 결정된다
    - 동적 바인딩이라고도 함
    - C에서 함수 포인터는 늦은 바인딩!
  - 이른 바인딩
    - 정적 바인딩이라고도 함
    - C에서 배웠던 함수의 호출 방식
    - 어떤 함수 구현을 호출해야 할지가 빌드 중에 결정 남
  - 이른 바인딩 vs 늦은 바인딩
    - 둘 중에 CPU최적화가 더 잘 될 가능성이 높은 것은?
    - 당연히 이른 바인딩
      - 컴파일러가 어떤 함수를 호출해야 하는지 앎
      - 따라서 컴파일 중에 충분한 시간을 들여 최적화를 할 수 있음
      - 실행 중에 이렇게 충분한 시간을 사용할 수 없음

<br/>

  - 함수에 대해서는 나중에 따로 공부하기
    - toString()
    - equals()
    - hasgCode()

###### [다형성](#다형성)
###### [Top](#top)

<br/>
<br/>

***

# 추상 메서드/클래스

<br/>

~~~c#
// 상속 사용시, 추상화되는 과정에서 의미 없는 것들과 실수할 것들을 방지 하기 위해 추상 메서드가 생기게 되었다

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // 아래 클래스의 사용법
            Monster monster1 = new Ghost();
            Monster monster2 = new Troll();
            monster1.attack(monster2);

            // 문제점
            // 1. 의미 없는 Monster클래스의 개체를 만들어 낼 수 있다
            Monster monster3 = new Monster();

            // 2. 자식클래스에서 calculateDamage를 오버라이딩 하지 않으면, 부모의 의미없는 calculateDamage가 호출된다
        }
    }

    public class Monster
    {
        public virtual void shout()
        {
            Console.WriteLine("난 Animal");
        }

        public virtual int attack(Monster monster)
        {
            int damage = calculateDamage(monster);
            return damage;
        }

        // 자식 클래스에서 오버라이딩만을 하기 위해 virtual로 선언
        public virtual int calculateDamage(Monster monster)
        {
            return 0;
        }
    }
    
    public class Ghost : Monster
    {
        public override void shout()
        {
            Console.WriteLine("난 Ghost");
        }
        public override int calculateDamage(Monster monster)
        {
            int temp = 100;
            return temp;
        }
    }

    public class Troll : Monster
    {
        public override void shout()
        {
            Console.WriteLine("난 Troll");
        }
    }
}
~~~

<br/>

  - 위와 같은 실수를 막기 위해 abstract 키워드를 사용하여 추상메서드/클래스를 사용하게 되면
    - 추상메서드는 개체를 만들수 없게 된다(왜냐면 구현이 없기 때문)
    - 추상 클래스를 상속받는 자식 클래스는 부모의 추상 메서드를 무조건 작성해야 한다

<br/>

~~~c#
namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Monster monster3 = new Monster(); // 컴파일에러

            // Troll클래스는 calculateDamage가 없기 때문에 컴파일 에러
        }
    }

    public abstract class Monster
    {
        public virtual void shout()
        {
            Console.WriteLine("난 Animal");
        }

        public virtual int attack(Monster monster)
        {
            int damage = monster.calculateDamage(monster);
            return damage;
        }

        // 자식 클래스에서 오버라이딩만을 하기 위해 virtual로 선언
        public abstract int calculateDamage(Monster monster)
        {
            return 0;
        }
    }
    
    public class Ghost : Monster
    {
        public override void shout()
        {
            Console.WriteLine("난 Ghost");
        }
        public override int calculateDamage(Monster monster)
        {
            int temp = 100;
            return temp;
        }
    }

    public class Troll : Monster
    {
        public override void shout()
        {
            Console.WriteLine("난 Troll");
        }
    }
}
~~~

<br/>

  - 추상클래스
    - <접근제어자> abstract class <클래스명> {...}
    - 인스턴스를 만들 수 없는 클래스
      - 인스턴스를 만들 수 있는 클래스는 구체 클래스라고 함
      - 따라서 구체 클래스가 아닌 클래스를 추상 클래스라고도 함
    - 다른 클래스의 부모 클래스가 될 수는 있음
    - 반드시 추상 메서드가 들어 있을 필요는 없음
    - 추상 메서드는 구현이 없는 메서드
      - 시그니처는 있음
      - 함수 속 코드는 없음
    - 동작이 일부라도 구현되지 않은 클래스는 실체가 완성되지 않은 클래스
      - 다른 말로 하면 구체적이지 않음
      - 즉, 이 클래스는 (어느 정도) 추상적이다 라고 말할 수 있음

<br/>

  - 정리
    - 어떤 클래스가 따로 독자 생성이 필요 없는(자체 개체 생성이 필요 없거나 의미 없는)클래스라면 추상 클래스로 만든다
    - 어떤 자식들에게 무조건적으로 이 함수를 만드려고 강제 하기 위해서는 추상 메서드를 사용한다(함수가 추상 메서드면 클래스도 무조건 추상 클래스가 된다)


###### [추상 메서드/클래스](#추상-메서드/클래스)
###### [Top](#top)

<br/>
<br/>

***

# 인터페이스(interface)
  - ‘순수 추상 클래스’라고도 불림
  - 특수한 형태의 클래스
  - 어떤 상태도 없음
  - 동작의 구현도 없음
  - 동작의 시그니처만 있음
  - public메서드 시그니처만 모아 놓은 것
  - C언어의 헤더 파일 같은 존재
  - 이런 특징 때문에 클래스하고는 약간 다른 규칙을 따름
  - 인터페이스는 다형성을 위해 존재한다
    - 인터페이스는 함수 포인터 처럼 사용되어짐!!
    - 다중 상속을 흉내 낼 수 있는 방법
    - 변화에 대비해 결합도를 낮추는것
    - 다중 상속문제의 해결법(다중 상속을 흉내 내는 방법)_다형성을 위해 사용한다는것!!!
      - 인터페이스를 사용하면 다중 상속을 흉내 낼 수 있음
      - 여전히 상속과 마찬가지로 각 클래스에서 함수를 구현해야함(다형적으로 쓰기 위해)
      - 부모 인터페이스로 for문 돌리면서 다형성을 이뤄낼 수 있음

<br/>

  - 추상클래스에서, 인터페이스로 변경
    - class를 interface로 변경
    - abstract키워드가 필요 없음
      - interface는 그 자체가 추상적
    - 메서드는 언제나 public이기때문에  public키워드 생략
    - 추상클래스에 있는 상태인 필드멤버는 다 없어진다
  - 추상클래스와 인터페이스의 차이
    - 추상 클래스는 그 클래스 안에서 기능적인 부분들을 만들수 있지만, 인터페이스(interface)는 만들 수 없다, 구현만 존재한다
    - 추상 클래스는 상태와 함수 모두 만들 수 있지만, 인터페이스는 구현없는 함수만 만들 수 있다
    - 추상 메서드는 protected를 붙일 수 있었고 외부에서 호출은 못해도 자식 클래스가 구현하게 강제할 수 있었다.
    - 인터페이스는 다중상속이 되고, 추상클래스는 다중상속이 안된다
      - 다중상속의 문제는 구현되어 있는 것을 받는것이 문제였기 때문에 구현이 없는 인터페이스는 다중 상속을 받을 수 있다
      - 단, 인터페이스를 다중 상속시, 반환형만 다른 함수가 있다면 컴파일 오류가 난다. 올바른 함수 오버로딩이 아니기 때문

<br/>

~~~c#
// 추상 클래스
namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Monster monster = new Ghost();
            monster.shout();
            Console.WriteLine(monster.attack(monster));

            monster = new Troll();
            monster.shout();
            Console.WriteLine(monster.attack(monster));
        }
    }

    public abstract class Monster
    {
        public virtual void shout()
        {
            Console.WriteLine("난 Animal");
        }

        public int attack(Monster monster)
        {
            int damage = monster.calculateDamage(monster);
            return damage;
        }

        // 자식 클래스에서 오버라이딩만을 하기 위해 virtual로 선언
        public abstract int calculateDamage(Monster monster);
    }

    public class Ghost : Monster
    {
        public override void shout()
        {
            Console.WriteLine("난 Ghost");
        }
        public override int calculateDamage(Monster monster)
        {
            int temp = 100;
            return temp;
        }
    }

    public class Troll : Monster
    {
        //public override void shout()
        //{
        //    Console.WriteLine("난 Troll");
        //}

        public override int calculateDamage(Monster monster)
        {
            int temp = 200;
            return temp;
        }
    }
}


// 출력
//난 Ghost
//100
//난 Animal
//200
~~~

<br/>

~~~c#
// 인터페이스
using System;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            IMonster monster = new Ghost();
            monster.Shout();
            Console.WriteLine(monster.Attack(monster));

            monster = new Troll();
            monster.Shout();
            Console.WriteLine(monster.Attack(monster));
        }
    }

    // 인터페이스 정의
    public interface IMonster
    {
        void Shout();
        int Attack(IMonster monster);
    }

    public class Ghost : IMonster
    {
        public void Shout()
        {
            Console.WriteLine("난 Ghost");
        }

        public int Attack(IMonster monster)
        {
            int damage = CalculateDamage(monster);
            return damage;
        }

        public int CalculateDamage(IMonster monster)
        {
            int temp = 100;
            return temp;
        }
    }

    public class Troll : IMonster
    {
        public void Shout()
        {
            Console.WriteLine("난 Troll");
        }

        public int Attack(IMonster monster)
        {
            int damage = CalculateDamage(monster);
            return damage;
        }

        public int CalculateDamage(IMonster monster)
        {
            int temp = 200;
            return temp;
        }
    }
}
~~~

###### [인터페이스(interface)](#인터페이스interface)
###### [Top](#top)

<br/>
<br/>

***

# 인터페이스 vs 구현, 의존성 주입
  - 종종 듣는 이상한 이야기
    - 클래스 간에 의존성이 있으면 잘못된 OOP설계의 냄새가 난다
    - 하지만,,,의존성이 있어야 좋은 설계
      - 각 클래스의 목적이 뚜렷하다는 의미
     - 캡슐화가 잘 되어 있다는 의미
     - 클래스를 재사용할 수 있다는 의미
       - 함수 재사용성과 마찬가지
       - 의존성을 완전히 없애려면 프로그램 전체를 함수 하나에 작성하면 됨
     - 결합도라는 말과 혼동되어서 사용하기 때문
  - 결합도(coupling)
    - 종종 커플링이라고 그대로 음차 해서 사용
    - 원래 의미는 두 소프트웨어 모듈 간에 상호 의존성 정도
     - 클래스 A가 클래스 B에 의존
     - 클래스 B도 클래스 A에 의존
     - A와B중 하나도 독자 생존이 불가능
  - OOP에서 흔히 논하는 결합도
    - A가B에 의존하는 상황에서 B를 변경할 때 프로그램이 잘 작동하는가?
     - 1. A의 내부를 변경 안 해도 제대로 동작
       - A가 B에 의존하나 그 정도가 높지 않음
       - 즉, 결합도가 낮음
     - 2. A의 내부를 변경해야만 제대로 동작
       - A가 B에 의존하는 정도가 높음
       - 즉, 결합도가 높음

<br/>

~~~c#
// 결합도가 높다
// 즉, Head가 바뀌면 Robot에서 컴파일이 안될수가 있다
namespace ConsoleApp2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Robot robot = new Robot();
        }
    }

    public class Head
    {
        public Head()
        {
            Console.WriteLine("Head");
        }
    }

    public class Robot
    {
        private Head head;
        public Robot()
        {
            this.head = new Head();
            Console.WriteLine("Robot");
        }
    }
}
~~~

<br/>

~~~c#
// 결합도가 낮다
// 즉, Head가 바뀌어도 Robot에서 컴파일이 안될가능성이 낮다
// 이것이 의존성 주입의 예
namespace ConsoleApp2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Head head = new Head();
            Robot robot = new Robot(head);
        }
    }

    public class Head
    {
        public Head()
        {
            Console.WriteLine("Head");
        }
    }

    public class Robot
    {
        private Head head;
        public Robot(Head head)
        {
            this.head = head;
            Console.WriteLine("Robot");
        }
    }
}
~~~

<br/>

  - 의존성 주입(dependency injection, DI)
    - 바로 위의 코드처럼, 어떤 클래스안에 다른 클래스를 주입하는것
      - 위의 코드는 생성자를 통해 전달하기 때문에 ‘생성자 주입’
      - ‘setter주입’ 이라는 다른 방식도 있음
    - setter주입
      - setter주입을 사용하면 생성자 주입을 생략할 수도 있음
      - 하지만 개체의 유효한 상태에 해가 될 수도?
        - 개체는 생성 시부터 유효한 상태를 가져야 한다는 원칙..
    - 얻은것
      - 결합도를 낮춤
      - 위의 코드처럼, 나중에 Head의 생성자가 바뀌어도 Robot을 바꿀 필요가 없음
      - 위의 코드처럼, Head가 바뀌면 이 클래스만 따로 컴파일해서 배포 가능
    - 읽은것
      - 편의성
        - 예 : Robot만 생성하면 머리도 딸려 옴
      - 프로그래머의 원래 의도를 잘 보여주는 클래스

<br/>

  - 확장성과, 결합도를 낯추기 위해서 상속, 추상클래스를 사용하기도하며, 인터페이스도 이와 같다
  - 아래는 일반상속과, 추상클래스와, 인터페이스로부터 결합도를 낮추는 방법을 본다

<br/>

~~~c#
// 일반 상속
namespace ConsoleApp2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Head head = new Head();
            Head head1 = new AHead();
            Head head2 = new BHead();

            Robot robot = new Robot(head);
            Robot robot1 = new Robot(head1);
            Robot robot2 = new Robot(head2);

            robot.headMethod(); // Method
            robot1.headMethod(); // Method AHead
            robot2.headMethod(); // Method BHead
        }
    }

    public class Head
    {
        public Head()
        {

        }

        public virtual void Method()
        {
            Console.WriteLine("Method");
        }
    }

    public class Robot
    {
        private Head head;
        public Robot(Head head)
        {
            this.head = head;

        }

        public void headMethod()
        {
            head.Method();
        }
    }

    public class AHead : Head
    {
        public AHead()
        {

        }

        public override void Method()
        {
            Console.WriteLine("Method AHead");
        }
    }

    public class BHead : Head
    {
        public BHead()
        {

        }

        public override void Method()
        {
            Console.WriteLine("Method BHead");
        }
    }
}
~~~

<br/>

~~~c#
// 추상 클래스
namespace ConsoleApp2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Head head = new Head(); // 컴파일에러
            Head head1 = new AHead();
            Head head2 = new BHead();

            //Robot robot = new Robot(head); // 컴파일에러
            Robot robot1 = new Robot(head1);
            Robot robot2 = new Robot(head2);

            //robot.headMethod(); // Method // 컴파일에러
            robot1.headMethod(); // Method AHead
            robot2.headMethod(); // Method BHead
        }
    }

    public abstract class Head
    {
        public Head()
        {

        }

        public abstract void Method();
    }

    public class Robot
    {
        private Head head;
        public Robot(Head head)
        {
            this.head = head;

        }

        public void headMethod()
        {
            head.Method();
        }
    }

    public class AHead : Head
    {
        public AHead()
        {

        }

        public override void Method()
        {
            Console.WriteLine("Method AHead");
        }
    }

    public class BHead : Head
    {
        public BHead()
        {

        }

        public override void Method()
        {
            Console.WriteLine("Method BHead");
        }
    }
}
~~~

<br/>

~~~c#
// 인터페이스
namespace ConsoleApp2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Head head = new Head(); // 컴파일에러
            IHead head1 = new AHead();
            IHead head2 = new BHead();

            //Robot robot = new Robot(head); // 컴파일에러
            Robot robot1 = new Robot(head1);
            Robot robot2 = new Robot(head2);

            //robot.headMethod(); // Method // 컴파일에러
            robot1.headMethod(); // Method AHead
            robot2.headMethod(); // Method BHead
        }
    }

    public interface IHead
    {
        // 생성자 생성불가 컴파일에러
        //public IHead()
        //{

        //}

        void Method();
    }

    public class Robot
    {
        private IHead head;
        public Robot(IHead head)
        {
            this.head = head;

        }

        public void headMethod()
        {
            head.Method();
        }
    }

    public class AHead : IHead
    {
        public AHead()
        {

        }

        public void Method()
        {
            Console.WriteLine("Method AHead");
        }
    }

    public class BHead : IHead
    {
        public BHead()
        {

        }

        public void Method()
        {
            Console.WriteLine("Method BHead");
        }
    }
}
~~~

<br/>

  - 디커플링은 유연성/재사용성을 높임
    - 디커플링은 즉 결합도를 낮추는것을 의미
    - 앞에서 추상화는 유연성/재사용성을 높인다고 했음
    - 재사용성을 높였단 이야기는 미래의 변화에 대비되어 있다는 의미
    - 단점
      - 직관적이지 못하다
        - 무늬만 보고 판단이 불가능, 무늬는 똑같지만 실체가 다르기 때문

<br/>

  - 그러나 어쨌든 이런 이상한 소리를 하는 사람이 있다
    - 다른 클래스에 속한 개체의 메서드를 절대로 직접 호출하면 안된다 그 대신 모든걸 인터페이스로 만들어라
      - 왜? -> OOP에서는 디커플링이 언제나 제일 중요하니까!
      - 라고 하는것은 다 맞지 않다!
  - 인터페이스 : 구현 = 1 : 1은 이상한 일!
    - 다형성이 필요 없는데도 클래스마다 인터페이스를 만드는 꼴이 될 수 있다

###### [인터페이스 vs 구현, 의존성 주입](#인터페이스-vs-구현-의존성-주입)
###### [Top](#top)

<br/>
<br/>

***

# 디자인 패턴
  - 알고리즘, 베스트 프랙티스, 디자인 패턴 으로 갈수록 추상적인 개념
  - 소프트웨어 설계에서 흔히 겪는 문제에 대한 해결책
  - 범용적, 반복적
  - 완성된 설계가 아님
    - 곧바로 코드로 바뀌지 않음
    - 어떤 문제를 다양한 환경에서 해결하는 법을 설명한 가이드로 생각하면 됨
  - 장점
    - 이미 테스트를 마친 검증된 개발 방법을 사용해 개발 속도를 향상
    - 공통 용어 정립을 통한 개발자들 간의 빠른 의사소통을 촉진
      - xx패턴을 사용하면돼 라는 한 마디로 의사소통이 가능
  - 단점
    - 곧바로 적용할 수 없는 참고 가이드를 ‘패턴’이라 부를 수 없음
    - 잘못 적용하는 경우가 빈번함
    - 비효율적인 해법이 되는 경우가 많음
      - 디자인 패턴은 범용적, 추상적
      - 코드 중복이 많아지고 성능이 떨어질 수 있음
    - 다른 추상화 기법과 크게 다르지 않음
  - 디자인 패턴은 만능이 아님
    - 프로그래밍을 잘 못하는 사람이 디자인 패턴 익힌다고 더 잘하지 않음
  - 생성패턴(Createional)
    - 클래스 : 팩토리 메서드
    - 개체 : 추상 메서드
    - 개체 : 빌더
    - 개체 : 프로토타입
    - 개체 : 싱글턴
  - 구조패턴(Structural)
    - 클래스 : 어댑터
    - 개체 : 브리지
    - 개체 : 컴포지트
    - 개체 : 데코레이터
    - 개체 : 퍼사드
    - 개체 : 플라이웨이트
    - 개체 : 프록시
  - 행위패턴(Behavioral)
    - 클래스 : 인터프리터, 템플릿 메서드
    - 개체 : 책임 연쇄
    - 개체 : 커맨드
    - 개체 : 반복자
    - 개체 : 중재자
    - 개체 : 메멘토
    - 개체 : 옵저버
    - 개체 : 상태
    - 개체 : 전략
    - 개체 : 방문자

<br/>

  - 이미 싱글턴 패턴은 위에서 봤음
  - 이번에는 그나마 많이 사용하는 패턴을 몇 개 더 볼 생각

<br/>

  - 팩토리 메서드패턴
    - 사용할 클래스를 정확히 몰라도 개체 생성을 가능하게 해주는 패턴
  - 빌더 패턴
    - 개체의 생성과정을 그 개체의 클래스로부터 분리하는 방법
    - 개체의 부분부분을 만들어 나가다 준비되면 그제서야 개체를 생성
  - 래퍼 패턴 = 어댑터 패턴
    - 어떤 클래스의 메서드 시그니처가 맘에 안 들 때 다른 걸로 바꾸는 방법
    - 단, 그 클래스의 메서드 시그니처를 직접 변경하지 않음
    - 그 대신 새로운 클래스를 만들어 기존 클래스를 감쌈
    - 추후 외부 라이브러리를 바꿀 때 클라이언트 코드를 변경하지 않기 위해서도 많이 사용한다
  - 프록시
    - 프록시 서버처럼, 프록시 패턴이 이루려는 목적도 비슷
    - 클래스 안에서 어떤 상태를 유지하는 게 여의치 않은 경우가 있음
      - 개체 생성 시에는 데이터 로딩에 필요한 정보만 기억해 둠
      - 클라이언트가 실제로 데이터를 요청할 때 메모리에 로딩함
  - 책임 연쇄
    - …
  - 옵저버 패턴 -> 발생-구독패턴
    - 어떤 것을 관찰하고 있다가 그것이 바뀌면 나도 행동하는것

###### [디자인 패턴](#디자인-패턴)
###### [Top](#top)

<br/>
<br/>

***

# 예외
  - try-catch-finally문
    - try : 이 안에 있는것에서 에러가 나면 잡힌다
    - catch : 에러가 잡히면 이쪽으로 이동한다
    - finally : 에러가 잡히든 안잡히든 여기는 무조건 통과 한다
  - 정리 : 예외가 발생했을 때 진행 순서
    - 1. try블록의 실행이 중단됨
    - 2. catch블록 중에 발생한 예외를 처리할 수 있는 블록이 있는지 찾음
      - 위에서 부터 하나씩 평가
    - 3.1. 예외를 처리할 수 있는 catch블록이 없다면 finally블록을 실행 후, 한 단계 높은 try블록으로 전달
    - 3.2. 예외를 처리할 수 있는 catch블록이 있다면 해당 catch블록 안의 코드들이 실행
      - finally블록을 실행
      - try블록 이후의 코드들이 실행됨
  - 다시 예외 던지기
    - 언어마다 다르지만, throw키워드를 사용해서 던지게 된다

<br/>

  - 예전에는 예외가 발생되면 그 예외가 무엇인가 확인하고 회복하고자 했지만, 요즘에는 예외는 한번에 잡거나, 프로그램이 뻑이나면 그냥 재실행 하는 방향으로 가고 있다
  - 요즘에는 항상예외를 많이 쓰는것도 좋지 않을 수도 있고, 예외를 모두 잡을 수 없다는 사실도 인정해야 한다

<br/>

  - 오류 상황을 처리하는 4가지 방법
    - 무시하고 넘어간다(무시)
    - 문제를 일으킬 수 있는 상황이 있는지 검사하고, 그렇다면 프로그램을 종료한다(종료)
    - 문제를 일으킬 수 있는 상황이 있는지 검사하고, 그렇다면 실수를 고친 뒤 계속 프로그램을 실행되게 한다(수정)
    - 문제가 발생하면 예외를 던진다(예외)

###### [예외](#예외)
###### [Top](#top)

<br/>
<br/>

***

# SOLID설계 정신
  - 소프트웨어 설계를 이해하기 쉽고, 유연하고, 유지보수가 쉽게 만들기 위해 나온 원칙 
  - 하지만,,
    - 원칙도 규칙도 아닌 방향성을 제시할 뿐
    - 알아두면 좋은 정도의 주관적인 내용
    - 이미 기존에 존재하던 베스트 프랙티스를 이름만 바꾼 것도 있음
      - 그러나 이들은 스스로를 원칙이라 부르지 않았음
    - 심지어 좀 극단적인 주장을 한 것도 있음
    - 모든 코드를 SOLID에 맞춰 작성하면 그 자체로 유지보수가 힘든 코드가 될 것임!!
  - 어쨌든, SOLID를 적용하면 유연해 진다, 즉 추상적인 설계로 커플링을 제거할 수 있다

<br/>

  - 현재 SOLID정신이 도움될 만한 곳
    - SOLID는 디커플링을 중요하게 여기니 대규모 프로젝트일수록 유용
    - 따라서 모든 프로젝트에 적용할 수 있다 생각치 말 것
    - 직접적/구체적인 게 더 이해하기 쉽다는 사실을 잊지 말것
    - 많은 프로젝트의 시작은 직접적/구체적인 설계로 시작된다
      - 규모가 커지면서 유연성이 필요 해지면 그때부터 바꿔갈 때 도움이 될 정신

<br/>

  - SOLID
    - SRP : 단일 책임 원칙(single responsibility principle)
      - 클래스의 존재 이유는 하나여야만 한다는 의미
      - 한 함수에서 너무 많은 일을 하지 말라는 말과 비슷
      - 그냥 클래스 하나에서 너무 많은 일을 하지 말라는 이야기
      - 기본적으로는 좋은 정신
      - 이 코드를 보는 대부분의 사람이 이해할 수 있는 크기로 클래스를 만들자! 라는 의미
    - OCP : 개방-폐쇄 원칙(open/closed principle)
      - 클래스 내부 수정 없이 동작을 확장할 수 있어야 한다는 의미
      - 상속이 그 좋은 예
    - LSP : 리스코프 치환 원칙(Liskov substitution principle)
      - 1. 부모 클래스의 개체를 사용하는 코드 A가 있음
      - 2. 나중에 자식 클래스의 개체를 거기에 대신 사용함(치환)
      - 3. 이때 A가 아무 문제 없이 작동해야 한다
      - 즉, 부모가 할 수 있었던 일은 자식도 다 할 수 있어야 함
    - ISP : 인터페이스 분리 원칙(interface segregation principle)
    - DIP : 의존 역전 원칙(dependency inversion principle)
  - 인터페이스 분리 정신
    - 큰 인터페이스가 몇개 있는 것 보단 작은 인터페이스가 많이 있는 게 좋다
      - 하지만 역시 항상 그런것은 아니고, 밸런스가 중요하다!
  - 의존 역전 정신
    - 개체끼리 통신할 때 구체적인 것 말고 추상적인 것에 의존하란 이야기
      - 하지만 구체적인 것에 의존하면 좋은 상황들도 충분히 있음

###### [SOLID설계 정신](#solid설계-정신)
###### [Top](#top)

<br/>
<br/>
