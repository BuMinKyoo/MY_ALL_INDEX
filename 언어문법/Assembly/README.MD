<br/>

###### Top

- [컴퓨터 구조](#컴퓨터-구조)
  - [ALU(산술 논리 장치)](#alu산술-논리-장치)
  - [폰 노이만 구조](#폰-노이만-구조)
  - [CPU 명령어 사이클(instruction cycle)](#cpu-명령어-사이클instruction-cycle)
  - [명령어 집합(instruction set)](#명령어-집합instruction-set)
  - [6502 Assembly](#6502-assembly)
  - [명령어 집합 구조(ISA)](#명령어-집합-구조isa)
  - [일반적인 ISA의 명령어 분류](#일반적인-isa의-명령어-분류)






<br/>
<br/>

***

# 컴퓨터 구조
  - 현대 CPU의 컴퓨터는 추상화를 함으로써 점차 만들어 졌다.
    - Transistors를 모아서 Logic Gates를 만들고, 그것을 보아서 가산기, 곱셈기를 만드는 것처럼, 제일 작은 단위를 모아 추상화를 하여 다른 장치를 만들어내고 있으며, Programming Languages또한 정말 많은 추상화를 통해서 만들어진 하나의 장치인 셈이다
    - Transistors는 가장 작은 단위인 셈이고, 그것을 몇개 모아서 Logic Gates를만든다
    - Logic Gates는 AND, OR, NOT과 같은 것을 의미하게 된다
    - Logic Gates는 아래와 같다
    - AND인지 OR인지, NOT인지 Transistors를 여럿 이용해서 만들고, A를 누를때 불이 들어올지, B를 눌렀을때 불이 들어올지, 둘다 눌렀을때 불이 들어올지는 게이트의 연산에 따라 달라지게 된다
    - Transistors -> Logic Gates -> 가산기, 곱셈기 -> ALU순으로 추상화 했다 할 수 있음

![20231004_084831](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/600b9f56-edf6-423e-916d-a5def3e4f398)

![20231004_084845](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/11a0b0be-145b-43e6-b55a-d4ce7ed23e79)

- [ALU(산술 논리 장치)](#alu산술-논리-장치)
- [폰 노이만 구조](#폰-노이만-구조)
- [CPU 명령어 사이클(instruction cycle)](#cpu-명령어-사이클instruction-cycle)
- [명령어 집합(instruction set)](#명령어-집합instruction-set)
- [6502 Assembly](#6502-assembly)
- [명령어 집합 구조(ISA)](#명령어-집합-구조isa)
- [일반적인 ISA의 명령어 분류](#일반적인-isa의-명령어-분류)

###### [컴퓨터 구조](#컴퓨터-구조)
###### [Top](#top)

<br/>
<br/>

# ALU(산술 논리 장치)
  - 이진수 정수의 산술 연산과 비트 연산을 담당하는 장치
  - 수많은 논리 게이트로 구성되어 있음
    - Integer Operand가 A,B로 들어갈때 더 이상 1비트가 아닌, 여러 비트의 조합인 이진수를 넣을 수 있음(더 이상 Transistors같은 아주 작은 단위를 보지 않게 됨) 수많은 Transistors의 조합으로 만들어져 있기 때문에
  - ALU의 입출력 값은 레지스터를 이용
  - ALU에 들어가는 입력값의 비트에 따라서 CPU가 몇 비트인지 이야기 할 수 있다
  - 두 이진수를 넣으면 연산 결과가 나옴
  - 실행할 연산 : opcode
    - 멀티플렉서의 선택 신호로 사용됨
  - 즉, 세 입력 신호가 필요
    - 피연산자 * 2
    - 연산 선택
  - opcode코드를 이용해서 곱셉인지 덧셈인지 등등 명령어를 준다고 할 수있고 이에 따라서, A 와 B에 있는 수많은 Logic Gates가 선택적 작동하게 된다
    - CPU안에 있는 제어장치(control unit)이, 언제 어떤 입력 신호를 넣어줄지 알게 제어해 준다(A 와 B에 어떤것 넣어 줄지, opcode에 어떤걸 넣어 줄지…)

![20231004_085126](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/1e193eac-a979-4bc9-942a-2eff254627b3)

###### [컴퓨터 구조](#컴퓨터-구조)
###### [Top](#top)

<br/>
<br/>

# 폰 노이만 구조
  - 모든 현대 컴퓨터는 지금도 폰 노이만 구조를 따르고 있다
  - 폰 노이만 구조의 세 구성 요소
    - 메모리 : 데이터와 명령어를 저장
    - CPU : 명령어를 decode및 실행
    - 입/출력 장치
  - 중앙 처리 장치
    - 처리장치
      - 산술/논리 장치 : ALU
      - 프로세서 레지스터
    - 제어장치(control unit) : 어떤 명령어를 이해하고 실행하게 해준다
      - 명령 레지스터(IR, Instruction Register)
      - 프로그램 카운터(PC, Program Counter) : 다음에 실행할 명령어의 위치 주소값을 가지고 있는곳


![20231004_085609](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/f08f5bee-2310-4912-b4fe-239cd30d7ef3)

###### [컴퓨터 구조](#컴퓨터-구조)
###### [Top](#top)

<br/>
<br/>

# CPU 명령어 사이클(instruction cycle)
  - CPU가 메모리에 저장된 기계어 하나를 실행할 때 거치는 과정들
    - 1. fetch :  명령어를 가져옴
    - 2. decode : (명령코드) opcode와 (피연산자)operand로 디코딩
      - Control Unit이 해줌
    - 3. execute : 산술/논리/분기 연산 등을 실행
      - ALU가 해줌
    - 4. write back : 연산 결과를 저장

###### [컴퓨터 구조](#컴퓨터-구조)
###### [Top](#top)

<br/>
<br/>

# 명령어 집합(instruction set)
  - 어떤 기계가 지원하는 명령어들
  - 각 명령어는 명령 코드(opcode)와 피연산자(operand)로 구성
    - 메모리에는 이진수로 적혀 있음
  - 제어 장치는 메모리에 저장돼 있는 이진수를 순서대로 디코딩
    - opcode로부터 실행할 연산을 알아냄(=opcode와 비트 패턴의 매핑 관계)
    - 그 연산에 사용할 피연산자도 알아냄
    - 그 연산을 실행할 수 있는 장치에 필요한 입력값을 모두 전달

###### [컴퓨터 구조](#컴퓨터-구조)
###### [Top](#top)

<br/>
<br/>

# 6502 Assembly
  - High nibble + Low nibble을 하면 하나의 16진수가 되고, 어떤 명령어를 실행할지 찾을 수 있다.
    - ex) 0110 1001(0x69) = ADC#
  - https://en.wikibooks.org/wiki/6502_Assembly 

![20231004_120327](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/42a15e3e-a7d5-470c-b440-b3d05a8c81f4)

###### [컴퓨터 구조](#컴퓨터-구조)
###### [Top](#top)

<br/>
<br/>

# 명령어 집합 구조(ISA)
  - 어떤 특정한 하드웨어의 규약!!!(다른 하드웨어는 다르게 만들어 질 수 있음!!)
  - 명령어 집합
  - 여러 CPU가 동일한 ISA를 지원할 수 있음
    - CPU마다 다른 이진 명령어를 만들지 않아도 됨
    - AMD와 intel CPU가 호환되는 이유
  - ISA가 정의하는 것들의 예
    - 기계어의 동작
    - 지원하는 데이터형
    - 레지스터
    - 메모리 모델 등
  - 어떠한 어셈블리어로 코딩을 한다는 것은, 어떤 모델에 맞는 ISA라는 명령어 집합을 정해서, 코딩을 한다는 것과 같다
    - 따라서, 애플사의 m1 cpu와 intel사의 isa의 집합이 다르다는것!!
  - Assembly 보다 추상화된 고수준의 코딩 언어를 컴파일러가 해석해, ISA수준까지 변환을 해준다

###### [컴퓨터 구조](#컴퓨터-구조)
###### [Top](#top)

<br/>
<br/>

# 일반적인 ISA의 명령어 분류
  - 산술 연산(대부분)
  - 논리 연산
  - 메모리 관련(읽기, 저장, 이동 등)
  - 흐름 제어(분기 등)

###### [컴퓨터 구조](#컴퓨터-구조)
###### [Top](#top)

<br/>
<br/>

***
