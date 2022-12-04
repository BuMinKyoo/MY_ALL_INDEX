###### Top

- [기본 사항들](#기본-사항들)

- <details markdown="1">
  <summary>Win32 Api 시작 함수들</summary>
  <div markdown="1">
  
  - [Win32 Api 시작 함수들](#win32-api-시작-함수들)
    - [wWinMain](#wwinmain)
    - [MyRegisterClass(윈도우 클래스 정의,등록)](#myregisterclass윈도우-클래스-정의등록)
    - [CreateWindow(윈도우 클래스 생성)](#createwindow윈도우-클래스-생성)
    - [ShowWindow](#showwindow)
    - [메시지 루프](#메시지-루프)
    - [WndProc(윈도우 프로시저)](#wndproc윈도우-프로시저)

  </div>
  </details>

- [윈도우가 생성되는 과정 정리](#윈도우가-생성되는-과정-정리)
- [세가지 동적 라이브러리](#세가지-동적-라이브러리)

- <details markdown="1">
  <summary>DC</summary>
  <div markdown="1">
  
  - [DC](#dc)
    - [GetStockObject](#getstockobject)
    - [CreatePen](#createpen)
    - [CreateSolidBrush](#createsolidbrush)
    - [DeleteObject](#deleteobject)

  </div>
  </details>

- [마우스](#마우스)
- [메뉴](#메뉴)
- [커서](#커서)

- <details markdown="1">
  <summary>여러 API함수</summary>
  <div markdown="1">
  
  - [여러 API함수](#여러-api함수)
    - [텍스트 출력 함수](#텍스트-출력-함수)
    - [그래픽 출력 함수](#그래픽-출력-함수)
    - [메시지 박스 출력](#메시지-박스-출력)
    - [비프음 출력하기](#비프음-출력하기)
    - [화면 다시 그리기](#화면-다시-그리기)
    - [타이머 함수](#타이머-함수)
    - [SendMessage,PostMessage](#sendmessagepostmessage)
    - [wsprintf](#wsprintf)

  </div>
  </details>

<br/>
<br/>

***

# MFC메모리 누수 확인

  - #include <crtdbg.h> : 메모리 누수를 탐지하는데 필요한 함수들이 정의되어 있음
  - #define _CRTDBG_MAP_ALLOC : 메모리 누수 결과를 더 자세히 보여주도록 하는 정의문

<br/>

  - _CrtDumpMemoryLeaks(); : 누수 결과를 디버그 창에 표시(프로그램이 종료되는 지점에 사용, 첫 누수 결과만 출력)
  - _CrtSetDbgFlag ( _CRTDBG_ALLOC_MEM_DF | _CRTDBG_LEAK_CHECK_DF ); : 누수 결과를 디버그 창에 표시(프로그램 시작 부분에 사용, 모든 누수 결과 출력)

<br/>

~~~c++
#include <crtdbg.h>
#define _CRTDBG_MAP_ALLOC

// 프로그램 시작 부분에
_CrtSetDbgFlag ( _CRTDBG_ALLOC_MEM_DF | _CRTDBG_LEAK_CHECK_DF );
~~~


###### [MFC메모리 누수 확인](#mfc메모리-누수-확인)
###### [Top](#top)
