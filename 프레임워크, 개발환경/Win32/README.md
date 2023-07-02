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
- [왜 ID와 핸들 2가지를 사용할까?](#왜-id와-핸들-2가지를-사용할까)

- <details markdown="1">
  <summary>DC</summary>
  <div markdown="1">
  
  - [DC](#dc)
    - [GetStockObject](#getstockobject)
    - [CreatePen](#createpen)
    - [CreateSolidBrush](#createsolidbrush)
    - [CreateFont](#createfont)
    - [DeleteObject](#deleteobject)

  </div>
  </details>

- [마우스](#마우스)
- [메뉴](#메뉴)
- [커서](#커서)
- [엑셀러레이터](#엑셀러레이터)
- [그리기모드](#그리기모드)
- [컨트롤생성(CreateWindow)](#컨트롤생성createwindow)
- [다이얼로그 생성](#다이얼로그-생성)
- [대화상자 기반 프로그램이란?](#대화상자-기반-프로그램이란)

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
    - [SendDlgItemMessage](#senddlgitemmessage)

  </div>
  </details>

<br/>
<br/>

***

# 기본 사항들

  - 변수 명명법  
![image](https://user-images.githubusercontent.com/39178978/205496522-147906aa-c430-47bb-8b47-a716b848db13.png)

<br/>

  - 여러 가지 중간 타입들을 만들어낸 이유는, 이식성 때문에
  - 타입중에 뒤에가 ‘_PTR’ 이 붙은 타입은 32비트 64비트 모두 호환되는 타입이다
  - 윈도우는 메시지 구동 시스템이다

###### [기본 사항들](#기본-사항들)
###### [Top](#top)

<br/>
<br/>

***

# Win32 Api 시작 함수들

  - [wWinMain](#wwinmain)
  - [MyRegisterClass(윈도우 클래스 정의,등록)](#myregisterclass윈도우-클래스-정의등록)
  - [CreateWindow(윈도우 클래스 생성)](#createwindow윈도우-클래스-생성)
  - [ShowWindow](#showwindow)
  - [메시지 루프](#메시지-루프)
  - [WndProc(윈도우 프로시저)](#wndproc윈도우-프로시저)

###### [Win32 Api 시작 함수들](#win32-api-시작-함수들)
###### [Top](#top)

<br/>
<br/>

# wWinMain

  - 윈도우의 모든 응용프로그램의 시작이다!!
  - 이름을 바꿀 수 없음!
  - 콘솔의 main이라고 생각하면 됨

~~~C++
int APIENTRY wWinMain(_In_ HINSTANCE hInstance,
                     _In_opt_ HINSTANCE hPrevInstance,
                     _In_ LPWSTR    lpCmdLine,
                     _In_ int       nCmdShow)
~~~

  - hInstance
    - 프로그램의 인스턴스 핸들
  - hPrevInstance
    - 바로 앞에 실행된 프로그램의 인스턴스 핸들, 없을때는 NULL이되고, WIN32에서는 항상 NULL, 호환성을 위해서 존재
  - lpCmdLine
    - 프로그램의 인수, 콘솔의 argv인수에 해당함
  - nCmdShow
    - 프로그램이 실행될 형태

<br/>

  - APIENTRY
    - 호환성과 이식성을 위한것
    - 함수 호출 규약인 _stdcall을 사용 한다는 뜻


###### [Win32 Api 시작 함수들](#win32-api-시작-함수들)
###### [Top](#top)

<br/>
<br/>

# MyRegisterClass(윈도우 클래스 정의,등록)

  - 윈도우를 등록한다

~~~C++
ATOM MyRegisterClass(HINSTANCE hInstance)
{
    WNDCLASSEXW wcex;

    wcex.cbSize = sizeof(WNDCLASSEX);

    wcex.style          = CS_HREDRAW | CS_VREDRAW;
    wcex.lpfnWndProc    = WndProc;
    wcex.cbClsExtra     = 0;
    wcex.cbWndExtra     = 0;
    wcex.hInstance      = hInstance;
    wcex.hIcon          = LoadIcon(hInstance, MAKEINTRESOURCE(IDI_WINDOWSPROJECT1));
    wcex.hCursor        = LoadCursor(nullptr, IDC_ARROW);
    wcex.hbrBackground  = (HBRUSH)(COLOR_WINDOW+1);
    wcex.lpszMenuName   = MAKEINTRESOURCEW(IDC_WINDOWSPROJECT1);
    wcex.lpszClassName  = szWindowClass;
    wcex.hIconSm        = LoadIcon(wcex.hInstance, MAKEINTRESOURCE(IDI_SMALL));

    return RegisterClassExW(&wcex);
}
~~~

  - style
    - 윈도우의 스타일을 정의
    - CS_HREDRAW | CS_VREDRAW;
      - 윈도우의 수직 수평 크기가 변할 경우 윈도우를 다시 그린다는 뜻
  - lpfnWndProc
    - 윈도우의 메시지 처리 함수를 지정
    - 메시지가 발생할 때마다 여기서 지정된 함수가 호출됨
    - 함수의 이름은 바꿀 수 있지만 오랜 시간 동안 굳어진 ‘WndProc’을 그대로 사용 하도록 하자
  - cbClsExtra, cbWndExtra
    - 예약 영역, 윈도우가 내부적으로 사용하며 아주 특수한 목적에 사용되는 공간, 예약 영역을 사용 하지 않을 경우는 0으로 지정하기
  - hInstance
    - 윈도우 클래스를 사용하는 프로그램의 번호, WinMain의 인수로 전달된 hInstance값을 그대로 대입해주면 된다.
  - hIcon
    - 윈도우가 최소화 되었을때 출력될 아이콘
    - LoadIcon 을 사용하여 지정한다
  - hCursor
    - 윈도우가 사용할 마우스 커서
    - LoadCursor 을 사용하여 지정한다
  - hbrBackground
    - 윈도우의 배경 색상을 지정
  - lpszMenuName
    - 프로그램이 사용할 메뉴를 지정한다. 메뉴는 리소스 에디터에서 별도로 만들어지게 되고, 그 만들어진 메뉴의 ID값을 넣으면 된다. 사용하지 않을경우 NULL을 입력한다
  - lpszClassName
    - 윈도우 클래스의 이름을 정의, 지정한 이름은 CreateWindow 함수에 전달된다.
    - 윈도우를 등록한 후에 CreateWindow 함수 는 윈도우를 생성해 준다
  - RegisterClassExW
    - 이 함수를 호출하여 윈도우 클래스를 등록한다

###### [Win32 Api 시작 함수들](#win32-api-시작-함수들)
###### [Top](#top)

<br/>
<br/>

# CreateWindow(윈도우 클래스 생성)

  - 윈도우 클래스를 생성해주고, 반환값은 생성될 윈도우의 핸들값을 반환해준다

~~~C++
//함수원형
HWND CreateWindow(lpszClassName, lpszWindowName, dwStyle, x, y, nWidth, nHeight, hwndParent, hmenu, hinst, lpvParam)

CreateWindowW(szWindowClass, szTitle, WS_OVERLAPPEDWINDOW,
      CW_USEDEFAULT, 0, CW_USEDEFAULT, 0, nullptr, nullptr, hInstance, nullptr)
~~~

  - lpszClassName
    - 생성하고자 하는 윈도우 클래스의 이름을 넣으면 된다
    - 윈도우 등록시에 정의 했던 클래스 이름을 넣어주면 됨
  - lpszClassName
    - 윈도우 타이틀 바에 나타날 스트링
  - dwStyle
    - 윈도우의 형태를 지정하는 인수, 여러 상수들을 OR연산자로 연결하여 사용
    - 가장 일반적으로 WS_OVERLAPPEDWINDOW 을 사용하면 됨
  - x,y
    - 윈도우가 생성될 위치를 지정
    - 메인 윈도우는 전체 화면을 기준으로
    - 자식 윈도우는 부모윈도우의 좌상단을 기준으로
    - CW_USEDEFAULT 를 사용하면 윈도우가 알아서 적당한 크기와 위치를 지정해준다
  - nWidth,nHeight
    - 만들어질 윈도우의 크기
  - hwndParent
    - 부모 윈도우의 핸들을 지정해줄 수 있다. 부자 관계를 만들어줌, 부모 윈도우가 없을 경우는 NULL을 넣는다
  - hmenu
    - 프로그램이 사용할 메뉴를 지정한다. WndClass에서 의 메뉴 지정은 그윈도우 클래스를 기반으로 하는 모든 윈도우에 사용되며, 반면에  CreateWindowW에서는 만들어지는 현재 윈도우에만 적용된다. WndClass에서 지정한 메뉴를 그대로 사용하려면 NULL로 주고, 아니라면 메뉴 ID를 넣으면 된다
  - hinst
    - 프로그램의 핸들을 지정, WinMain의 인수로 전달된 hInstance를 대입해 주면 된다.
  - lpvParam
    - 특수한 목적에 사용되며 보통은 NULL을 쓴다.
    - 나중에 따로 공부하자

###### [Win32 Api 시작 함수들](#win32-api-시작-함수들)
###### [Top](#top)

<br/>
<br/>

# ShowWindow

  - CreateWindow로 만든 윈도우는 메모리상에만 있고 화면에 출력되지 않았으니, ShowWindow함수로 화면에 출력할 수 있게 된다

~~~C++
ShowWindow( HWND hWnd, int nCmdShow);
~~~

  - hWnd
    - 화면에 출력하고자 하는 윈도우의 핸들(CreateWindow의 값을 넘겨주면됨)
  - nCmdShow
    - 윈도우를 화면에 출력하는 방법을 지정한다
    - WinMain함수의 인수로 전달된 nCmdShow값을 그대로 넘기면 된다!

###### [Win32 Api 시작 함수들](#win32-api-시작-함수들)
###### [Top](#top)

<br/>
<br/>

# 메시지 루프

  - CreateWindow로 만든 윈도우는 메모리상에만 있고 화면에 출력되지 않았으니, ShowWindow함수로 화면에 출력할 수 있게 된다

~~~C++
while (GetMessage(&msg, nullptr, 0, 0))
{
    if (!TranslateAccelerator(msg.hwnd, hAccelTable, &msg))
    {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }
}
~~~

  - BOOL GetMessage(LPMSG lpMsg, HWND  hWnd, UINT  wMsgFilterMin, UINT  wMsgFilterMax)
    - 메시지 큐에서 메시지를 읽어들인다.
    - 메시지 큐는 발생된 메시지가 잠시 대기하는 장소이다.
    - 읽어들인 메시지는 첫 번째 인수인 MSG 구조체에 저장되고, 나머지 인수는 읽어들일 메시지의 범위를 지정하지만 잘 사용되지 않는다.
    - 프로그램을 종료하라는 WM_QUIT일 경우는 FALSE를 리턴하여 while문을 끝내게 된다

  - BOOL TranslateMessage(const MSG *lpMsg)
    - 키보드 눌림(WM_KEYDOWN)메시지가 발생할 때 문자가 입력되었다는 메시지(WM_CHAR)를 만드는 역할을 한다.
    - 키보드를 누르지 않는 프로그램의 경우 블록시켜도 상관 없다
    - EX) A키를 누르면 A문자가 입력되었다는 메시지를 만들어 낸다

  - LRESULT DispatchMessage(const MSG *lpMsg)
    - 메시지를, 메시지 처리 함수(WndProc)로 전달한다. 이 함수에 의해 메시지가 전달되고 동작 된다. 그 이후 다시 루프로 돌아간다

~~~C++
// MSG구조체
typedef struct tagMSG {
    HWND        hwnd; // 메시지를 받을 윈도우 핸들
    UINT        message; // 어떤 종류의 메시지 인가(가장 중요!!)
    WPARAM      wParam; // 메시지의 부가적인 정보(32비트 값)
    LPARAM      lParam; // 메시지의 부가적인 정보(32비트 값)
    DWORD       time; // 메시지가 발생한 시간
    POINT       pt; // 메시지가 발생했을 때 마우스 위치
} MSG
~~~

###### [Win32 Api 시작 함수들](#win32-api-시작-함수들)
###### [Top](#top)

<br/>
<br/>

# WndProc(윈도우 프로시저)

  - 메시지를 처리하는 함수
  - WinMain에서 호출하지 않고, 운영체제에 의해 호출된다, WinMain함수 안에서, 메시지를, 윈도우 프로시저에게 보내기한 하고, 운영체제에 의해 윈도우 프로시저가 실행되어 메시지를 처리한다.
  - WndProc함수의 인수4개는 MSG구조체의 앞에 4개와 동일하다
  - WndProc함수는 메시지를 잘 처리 했다면 0을 리턴하도록 되어 있다
  - DefWindowProc함수는 WndProc에서 처리하지 않은 나머지 메시지를 처리한다.
    - 윈도우 이동이나 크기변경 같은 기본적인 것은 여기서 알아서 처리한다
  - PostQuitMessage함수
    - WM_QUIT 메시지를 보낸다(종료 메시지)

~~~C++
LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
    switch (message)
    {
    case WM_COMMAND:
        {
            int wmId = LOWORD(wParam);
            // 메뉴 선택을 구문 분석합니다:
            switch (wmId)
            {
            case IDM_ABOUT:
                DialogBox(hInst, MAKEINTRESOURCE(IDD_ABOUTBOX), hWnd, About);
                break;
            case IDM_EXIT:
                DestroyWindow(hWnd);
                break;
            default:
                return DefWindowProc(hWnd, message, wParam, lParam);
            }
        }
        break;
    case WM_PAINT:
        {
            PAINTSTRUCT ps;
            HDC hdc = BeginPaint(hWnd, &ps);
            // TODO: 여기에 hdc를 사용하는 그리기 코드를 추가합니다...
            EndPaint(hWnd, &ps);
        }
        break;
    case WM_DESTROY:
        PostQuitMessage(0);
        break;
    default:
        return DefWindowProc(hWnd, message, wParam, lParam);
    }
    return 0;
}
~~~

###### [Win32 Api 시작 함수들](#win32-api-시작-함수들)
###### [Top](#top)

<br/>
<br/>

***

# 윈도우가 생성되는 과정 정리

  - WinMain안에서 처리 되는 과정들이다

<br/>

  - 1. WndClass정의
    - 윈도우의 기반이 되는 클래스를 정의, 만들고자 하는 위도우 속성 정의
  - 2. RegisterClass
    - 윈도우 클래스를 등록
  - 3. CreateWindow
    - 메모리상에 윈도우를 만든다
  - 4. ShowWindow
    - 윈도우를 화면에 표시
  - 5. 메시지 루프
    - 사용자로부터 메시지를 처리

###### [윈도우가 생성되는 과정 정리](#윈도우가-생성되는-과정-정리)
###### [Top](#top)

<br/>
<br/>

***

# 세가지 동적 라이브러리

  - KERNEL : 메모리를 관리하고 프로그램을 실행
  - USER : 유저 인터페이스와 윈도우를 관리
  - GDI(Graphic Device Interface) : 화면 처리와 그래픽 출력

<br/>

 윈도우 API함수의 대부분은 이 세가지 DLL에 의해 제공되고 있다

###### [세가지 동적 라이브러리](#세가지-동적-라이브러리)
###### [Top](#top)

<br/>
<br/>

***

# 왜 ID와 핸들 2가지를 사용할까?

  - 컨트롤을 만들때마다 중복되지 않은 ID값을 한개씩 발급 받게 된다. 또한 각각은 다른 윈도우 핸들로 관리받게 되는데, 양쪽다 32비트로 용량과 속도 차이가 없는데 따로 관리하는 이유는?
    - 핸들은, 운영체제가 일방적으로 발급하는 것이기 때문에 번호의 연속성이 없어서 반복적인 처리를 할 수 가 없게 된다. 따라서 ID값으로 연속성 있게 지정해 주면 for문 같은 것으로 연속성 있게 처리를 할 수 있게 된다.

<br/>

 윈도우 API함수의 대부분은 이 세가지 DLL에 의해 제공되고 있다

###### [왜 ID와 핸들 2가지를 사용할까?](#왜-id와-핸들-2가지를-사용할까)
###### [Top](#top)

<br/>
<br/>

***

# DC
  - DC(Device Context) : 출력에 필요한 모든 정보를 가지는 데이터 구조체, GDI모듈에 의해 관리된다.
  - 만일 DC가 없다면, 라인 하나를 그릴때 색상, 굵기 , 모양 등 많은 인자로 이루어진 함수를 써야 하지만 그러한 정보를 모두 DC에 담아 사용하게 된다면 함수가 아주 간단해진다.
  - 만일 DC가 없다면, 출력을 할때 윈도우기준으로 그려야 할지, 클라이언트 기준으로 그려야 할지 어렵게 된다. DC에는 클라이언트 기준으로 그릴 수 있도록 하는 데이터도 들어가 있다
  - 만일 DC가 없다면, 클라이언트끼리 겹쳐 있어, 뒤쪽에 있는 클라이언트에 출력을 할때 겹쳐지는 부분은 뒤에 있으니 그려지지 않아야 함으로 이것 또한 DC가 있기에 할 수 있다.
  - DC얻기/해지하기
    - HDC GetDC(HWND hWnd);
    - int ReleaseDC(HWND hWnd, HDC hDC);
      - DC도 메모리를 차지 하기 때문에 해지 해줘야 한다!

~~~c++
// DC를 얻고 해지하는 일반적인 방법
HDC hdc;
hdc = GetDC(hWnd);
// 각종 출력물
ReleaseDC(hWnd, hdc);
~~~

<br/>

~~~c++
// WM_PAINT에서만 사용 할 수 있는 DC를 얻는 방법
PAINTSTRUCT ps; // WndProc함수의 선두에 지역변수로 보통 선언함!
HDC hdc; // WndProc함수의 선두에 지역변수로 보통 선언함!

hdc = BeginPaint(hWnd, &ps); // DC얻기
// 각종 출력물
EndPaint(hWnd, &ps); // DC해지하기

// PAINTSTRUCT 구조체내부에는 그리기 속도를 비약적으로 향상 시킬 수 있는 정보들이 들어 있다
~~~

<br/>

#Project.cpp
~~~c++
//기본적으로 만들어져 있는 WndProc함수
LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
    switch (message)
    {
    case WM_COMMAND:
        {
            int wmId = LOWORD(wParam);
            // 메뉴 선택을 구문 분석합니다:
            switch (wmId)
            {
            case IDM_ABOUT:
                DialogBox(hInst, MAKEINTRESOURCE(IDD_ABOUTBOX), hWnd, About);
                break;
            case IDM_EXIT:
                DestroyWindow(hWnd);
                break;
            default:
                return DefWindowProc(hWnd, message, wParam, lParam);
            }
        }
        break;
    case WM_PAINT:
        {
            PAINTSTRUCT ps;
            HDC hdc = BeginPaint(hWnd, &ps);
            // TODO: 여기에 hdc를 사용하는 그리기 코드를 추가합니다...
            EndPaint(hWnd, &ps);
        }
        break;
    case WM_DESTROY:
        PostQuitMessage(0);
        break;
    default:
        return DefWindowProc(hWnd, message, wParam, lParam);
    }
    return 0;
}
~~~

<br/>

#Project.cpp
~~~c++
// 마우스 클릭후, 텍스트 출력하기
// 하지만 지금의 상황은, 클라이언트 화면이 윈도우 화면을 벗어나는 순간 사라져 버린다.
LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
    HDC hdc;

    switch (message)
    {
    case WM_LBUTTONDOWN:
        {
            hdc = GetDC(hWnd);
            TextOut(hdc, 100, 100, _T("qwer"), 4);
            ReleaseDC(hWnd, hdc);
        }
    case WM_COMMAND:
        {
            int wmId = LOWORD(wParam);
            // 메뉴 선택을 구문 분석합니다:
            switch (wmId)
            {
            case IDM_ABOUT:
                DialogBox(hInst, MAKEINTRESOURCE(IDD_ABOUTBOX), hWnd, About);
                break;
            case IDM_EXIT:
                DestroyWindow(hWnd);
                break;
            default:
                return DefWindowProc(hWnd, message, wParam, lParam);
            }
        }
        break;
    case WM_PAINT:
        {
            PAINTSTRUCT ps;
            HDC hdc = BeginPaint(hWnd, &ps);
            // TODO: 여기에 hdc를 사용하는 그리기 코드를 추가합니다...
            EndPaint(hWnd, &ps);
        }
        break;
    case WM_DESTROY:
        PostQuitMessage(0);
        break;
    default:
        return DefWindowProc(hWnd, message, wParam, lParam);
    }
    return 0;
}
~~~

<br/>

#Project.cpp
~~~c++
// WM_PAINT안에 텍스트를 출력해 놨기 때문에 윈도우 화면을 넘어갔을때 바로 다시 그려주게 되므로 사라지지 않는다
LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
    switch (message)
    {
    case WM_COMMAND:
        {
            int wmId = LOWORD(wParam);
            // 메뉴 선택을 구문 분석합니다:
            switch (wmId)
            {
            case IDM_ABOUT:
                DialogBox(hInst, MAKEINTRESOURCE(IDD_ABOUTBOX), hWnd, About);
                break;
            case IDM_EXIT:
                DestroyWindow(hWnd);
                break;
            default:
                return DefWindowProc(hWnd, message, wParam, lParam);
            }
        }
        break;
    case WM_PAINT:
        {
            PAINTSTRUCT ps;
            HDC hdc = BeginPaint(hWnd, &ps);
            TextOut(hdc, 100, 100, _T("qwer"), 4);
            EndPaint(hWnd, &ps);
        }
        break;
    case WM_DESTROY:
        PostQuitMessage(0);
        break;
    default:
        return DefWindowProc(hWnd, message, wParam, lParam);
    }
    return 0;
}
~~~

<br/>

  - [GetStockObject](#getstockobject)
  - [CreatePen](#createpen)
  - [CreateSolidBrush](#createsolidbrush)
  - [CreateFont](#createfont)
  - [DeleteObject](#deleteobject)

###### [DC](#dc)
###### [Top](#top)

<br/>
<br/>


# GetStockObject

  - 윈도우에서 기본적으로 제공하는 오브젝트
  - GetStockObject는 여러 종류의 스톡 오브젝트를 리턴 하기 때문에 대입하기 전에 원하는 타입으로 캐스팅 해줘야 한다

~~~C++
LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
    HDC hdc;
    HBRUSH new_brush, old_brush;
    PAINTSTRUCT ps;

    switch (message)
    {
    case WM_PAINT:
        {
            HDC hdc = BeginPaint(hWnd, &ps);
            new_brush = (HBRUSH)GetStockObject(GRAY_BRUSH);
            old_brush = (HBRUSH)SelectObject(hdc, new_brush);
            Rectangle(hdc, 100, 100, 200, 200);
            SelectObject(hdc, old_brush);
            EndPaint(hWnd, &ps);
        }
        break;
    case WM_DESTROY:
        PostQuitMessage(0);
        break;
    default:
        return DefWindowProc(hWnd, message, wParam, lParam);
    }
    return 0;
}
~~~

![image](https://user-images.githubusercontent.com/39178978/205497703-59eb931b-e6ab-4bed-9347-5f0116d640ef.png)


###### [DC](#dc)
###### [Top](#top)

<br/>
<br/>

# CreatePen

  - Pen을 생성한다

<br/>

  - HPEN CreatePen(int iStyle, int cWidth, COLORREF color);
    - int iStyle : 어떤 펜 종류를 사용할 것인지
    - int cWidth : 두께
    - COLORREF color : 컬러

~~~C++
LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
    HDC hdc;
    HPEN new_pen, old_pen;
    PAINTSTRUCT ps;

    switch (message)
    {
    case WM_PAINT:
        {
            HDC hdc = BeginPaint(hWnd, &ps);
            new_pen = CreatePen(PS_SOLID, 5, RGB(255,0,0));
            old_pen = (HPEN)SelectObject(hdc, new_pen);
            Rectangle(hdc, 100, 100, 200, 200);
            SelectObject(hdc, old_pen);
            EndPaint(hWnd, &ps);
        }
        break;
    case WM_DESTROY:
        PostQuitMessage(0);
        break;
    default:
        return DefWindowProc(hWnd, message, wParam, lParam);
    }
    return 0;
}
~~~

![image](https://user-images.githubusercontent.com/39178978/205497773-212fca63-9cc7-4a97-8207-c15593c9cf2e.png)

###### [DC](#dc)
###### [Top](#top)

<br/>
<br/>

# CreateSolidBrush

  - 패턴 컬러 브러쉬를 만든다

<br/>

~~~C++
LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
    HDC hdc;
    HBRUSH new_brush, old_brush;
    PAINTSTRUCT ps;

    switch (message)
    {
    case WM_PAINT:
        {
            HDC hdc = BeginPaint(hWnd, &ps);
            new_brush = CreateSolidBrush(RGB(255, 0, 0));
            old_brush = (HBRUSH)SelectObject(hdc, new_brush);
            Rectangle(hdc, 100, 100, 200, 200);
            //DeleteObject(SelectObject(hdc, old_pen));
            SelectObject(hdc, old_brush);
            DeleteObject(new_brush);
            EndPaint(hWnd, &ps);
        }
        break;
    case WM_DESTROY:
        PostQuitMessage(0);
        break;
    default:
        return DefWindowProc(hWnd, message, wParam, lParam);
    }
    return 0;
}
~~~

###### [DC](#dc)
###### [Top](#top)

<br/>
<br/>

# CreateFont

  - 폰트 생성하는것, 인자가 정말 많으니 인자는 참고해서 사용하자

<br/>

~~~C++
HFONT CreateFont(
  [in] int    cHeight,
  [in] int    cWidth,
  [in] int    cEscapement,
  [in] int    cOrientation,
  [in] int    cWeight,
  [in] DWORD  bItalic,
  [in] DWORD  bUnderline,
  [in] DWORD  bStrikeOut,
  [in] DWORD  iCharSet,
  [in] DWORD  iOutPrecision,
  [in] DWORD  iClipPrecision,
  [in] DWORD  iQuality,
  [in] DWORD  iPitchAndFamily,
  [in] LPCSTR pszFaceName
);
~~~

<br/>

~~~C++
case WM_PAINT:
    {
        HFONT new_font, old_font;
        PAINTSTRUCT ps;
        HDC hdc = BeginPaint(hWnd, &ps);

        new_font = CreateFont(50, 0, 0, 0, 0, 0, 0, 0, HANGEUL_CHARSET, 0, 0, 0, 0, 0);
        old_font = (HFONT)SelectObject(hdc, new_font);
        TextOut(hdc, 100, 100, _T("출력~~"), 4);

        EndPaint(hWnd, &ps);
    }
    break;
~~~

![image](https://user-images.githubusercontent.com/39178978/209419875-35ca71e8-29d3-40b4-b85b-59e0d6668643.png)

###### [DC](#dc)
###### [Top](#top)

<br/>
<br/>

# DeleteObject

  - GDI오브젝트도 메모리를 사용하기 때문에, 사용한 후에는 반드시 해제해 주어야 하고 DeleteObject함수로 해제 할 수 있다

<br/>

~~~C++
LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
    HDC hdc;
    HPEN new_pen, old_pen;
    PAINTSTRUCT ps;

    switch (message)
    {
    case WM_PAINT:
        {
            HDC hdc = BeginPaint(hWnd, &ps);
            new_pen = CreatePen(PS_SOLID, 5, RGB(255,0,0));
            old_pen = (HPEN)SelectObject(hdc, new_pen);
            Rectangle(hdc, 100, 100, 200, 200);
            //DeleteObject(SelectObject(hdc, old_pen));
            SelectObject(hdc, old_pen);
            DeleteObject(new_pen);
            EndPaint(hWnd, &ps);
        }
        break;
    case WM_DESTROY:
        PostQuitMessage(0);
        break;
    default:
        return DefWindowProc(hWnd, message, wParam, lParam);
    }
    return 0;
}
~~~

###### [DC](#dc)
###### [Top](#top)

<br/>
<br/>

***

# 마우스

  - 마우스에 관련된 이벤트들
    - WM_LBUTTONDOWN : 왼쪽 누름
    - WM_RBUTTONDOWN : 오른쪽 누름
    - WM_MBUTTONDOWN : 가운데 누름
    - WM_LBUTTONUP : 왼쪽 놓음
    - WM_RBUTTONUP : 오른쪽 놓음
    - WM_MBUTTONUP : 가운데 놓음
  - IParam : 상위 워드에 마우스 y좌표, 하위 워드에 x좌표값을 가지고 있다

![image](https://user-images.githubusercontent.com/39178978/205497972-4806c224-0131-4cb5-9184-004892dd81e8.png)

  - wParam : 마우스 버튼 상태와 키보드 조합 키의 상태를 전달
    - MK_CONTROL : Ctrl키가 눌러져 있음
    - MK_LBUTTON : 마우스 왼쪽 버튼이 눌러져 있음
    - MK_RBUTTON : 마우스 오른쪽 버튼이 눌러져 있음
    - MK_MBUTTON : 마우스 중간 버튼이 눌러져 있음
    - MK_SHIFT : Shift 키가 눌러져 있음

<br/>

  - WM_MOUSEMOVE : 마우스가 움직이면 메시지 호출

###### [마우스](#마우스)
###### [Top](#top)

<br/>
<br/>

***

# 메뉴

  - 메뉴는 리소스 탭에서 쉽게 만들 수 있고, 스트링 적듯이 만들 수 있다. 각각의 항목에 ID값이 부여 되며, 메뉴 항목을 선택할 경우 WM_COMMAND 메시지를 전달한다, 이때 어떤 메뉴가 선택 되었는지는, 그 아이디 값이 wParam의 하위 워드로 전달 되므로 LOWORD(wParam) 으로 읽어서 판단하게 된다

![image](https://user-images.githubusercontent.com/39178978/205498093-068e384d-d493-474d-af7e-2b0e4bc42b9f.png)

  - A메뉴를 선택하면 “A메뉴 선택”메시지 박스가 뜨고, B메뉴를 선택하면 “B메뉴 선택”메시지 박스가 뜨게 된다

~~~c++
LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
    switch (message)
    {
    case WM_COMMAND:
        {
            int wmId = LOWORD(wParam);
            // 메뉴 선택을 구문 분석합니다:
            switch (wmId)
            {
            case ID_A:
                {
                    MessageBox(hWnd, _T("A메뉴 선택"), _T("메뉴"), MB_OK);
                    break;
                }
            case ID_B:
                {
                    MessageBox(hWnd, _T("B메뉴 선택"), _T("메뉴"), MB_OK);
                    break;
                }
            }
        }
        break;
    case WM_DESTROY:
        PostQuitMessage(0);
        break;
    default:
        return DefWindowProc(hWnd, message, wParam, lParam);
    }
    return 0;
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 메뉴에 단축키를 지정하기 위해서는, 캡션 항목에 & 를 써줘야 한다
  - 기본적으로 파일 메뉴를 열기 위해서는 F단축키가 지정되 있으므로 ALT + F를 누른후 그림과 같이 D를 누르면 작동될것이다

![image](https://user-images.githubusercontent.com/39178978/205498236-ffdd141e-2ad4-4ec5-94d9-90b07a356fc6.png)


###### [메뉴](#메뉴)
###### [Top](#top)

<br/>
<br/>

***

# 커서

  - 커서를 바꾸는 것은 리소스편집기에서 추가한후, 그려주면 되고, 윈도우를 정의할때 그려놓은 ID값으로 정의 하면 된다

![image](https://user-images.githubusercontent.com/39178978/205498302-ce0a3900-6181-4a06-9e76-2cd71c22b67e.png)

~~~c++
ATOM MyRegisterClass(HINSTANCE hInstance)
{
    WNDCLASSEXW wcex;

    wcex.cbSize = sizeof(WNDCLASSEX);

    wcex.style          = CS_HREDRAW | CS_VREDRAW;
    wcex.lpfnWndProc    = WndProc;
    wcex.cbClsExtra     = 0;
    wcex.cbWndExtra     = 0;
    wcex.hInstance      = hInstance;
    wcex.hIcon          = LoadIcon(hInstance, MAKEINTRESOURCE(IDI_WINDOWSPROJECT1));
    wcex.hCursor        = LoadCursor(hInstance, MAKEINTRESOURCE(IDC_CURSOR1));
    wcex.hbrBackground  = (HBRUSH)(COLOR_WINDOW+1);
    wcex.lpszMenuName   = MAKEINTRESOURCEW(IDC_WINDOWSPROJECT1);
    wcex.lpszClassName  = szWindowClass;
    wcex.hIconSm        = LoadIcon(wcex.hInstance, MAKEINTRESOURCE(IDI_SMALL));

    return RegisterClassExW(&wcex);
}
~~~

###### [커서](#커서)
###### [Top](#top)

<br/>
<br/>

***

# 엑셀러레이터

  - 엑셀러레이터는, 메뉴를 선택하는 단축키와 다르게, 프로그램 안에서 전역으로 사용될 수 있다.

![image](https://user-images.githubusercontent.com/39178978/205498348-235ebc89-a225-4745-80e4-994d596bde04.png)

  - TranslateAccelerator : 엑셀러레이터 테이블 안에 있는 KEY를 받게 되면 여기서 TRUE를 리턴하게 되므로,  TranslateMessage함수가 KETDOWN을 처리하지 못하게 되고(따라서 WM_CHAR메시지가 발생되지 않음), TranslateAccelerator는 해당되는 핸들값을 가진 다이얼로그로 WM_COMMAND메시지를 보내게 된다

~~~c++
HACCEL hAccelTable = LoadAccelerators(hInstance, MAKEINTRESOURCE(IDC_MY_ACCELERATOR)); // 엑셀러레이터에 맞는 ID를 넣어주면, 그 엑셀러레이터의 테이블을 가져온다

MSG msg;

// 기본 메시지 루프입니다:
while (GetMessage(&msg, nullptr, 0, 0))
{
    if (!TranslateAccelerator(msg.hwnd, hAccelTable, &msg)) // 엑셀러레이터 테이블 안에 있는 KEY를 받게 되면 여기서 TRUE를 리턴
    {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }
}
~~~

###### [엑셀러레이터](#엑셀러레이터)
###### [Top](#top)

<br/>
<br/>

***

# 그리기모드

  - 윈도우즈에서 디폴트 그리기 모드는 ‘R2_COPYPEN’모드이다
  - R2_COPYPEN : 원래의 그림을 덮어버리고 새 그림을 그린다

~~~c++
int SetROP2(HDC hdc, int rop2);
//HDC hdc : 그리기 모드를 변경하고자 하는 DC
//int rop2 : 어떤 모드를 사용할지
~~~

<br/>

  - 원래는 항상 흰색으로 그려져야 하지만 R2_BLACK모드를 사용함으로써 그리는 것들을 전부 검정색으로 그리게 한다(아래 예제)

~~~c++
case WM_PAINT:
    {
        PAINTSTRUCT ps;
        HDC hdc = BeginPaint(hWnd, &ps);
        SetROP2(hdc, R2_BLACK);
        Rectangle(hdc, 100, 100, 200, 200);
        EndPaint(hWnd, &ps);
    }
    break;
~~~

![image](https://user-images.githubusercontent.com/39178978/209419813-15e3cc32-fb96-4483-abcd-7e7f8e8837cf.png)

###### [그리기모드](#그리기모드)
###### [Top](#top)

<br/>
<br/>

***

# 컨트롤생성(CreateWindow)
  - 컨트롤을 생성한다

~~~c++
void CreateWindow(
  [in, optional]  lpClassName, // 윈도우 클래스
  [in, optional]  lpWindowName, // 캡션이름
  [in]            dwStyle, // 스타일
  [in]            x,
  [in]            y,
  [in]            nWidth,
  [in]            nHeight,
  [in, optional]  hWndParent, // 부모윈도우
  [in, optional]  hMenu, //메뉴의 핸들, 컨트롤 지정 ID
  [in, optional]  hInstance, // 이 컨트롤을 만드는 인스턴스의 핸들
  [in, optional]  lpParam // 사용자 지정 테이터(우선 NULL)
)
~~~

<br/>

  - CreateWindow 로 컨트롤을 생성한다. 다양한 컨트롤이 존재하는데, 버튼을 컨트롤을 클릭했을때, 에디트는 문자열을 입력했을때 등, 다양한 형태로 부모 윈도우에게 통지 메시지를 보내게 되는데 이는 WM_COMMAND메시지로 전달되게 된다. 이때 컨트롤을 만들었던 ID로 구분하여 처리 할 수 있다.
  - HIWORD(wParam) : 통지코드
  - LOWORD(wParam) : 컨트롤의 ID
  - lParam : 메시지를 보낸 차일드 윈도우의 윈도우 핸들

~~~c++
static HINSTANCE g_hInstance;


int APIENTRY wWinMain(_In_ HINSTANCE hInstance,
                     _In_opt_ HINSTANCE hPrevInstance,
                     _In_ LPWSTR    lpCmdLine,
                     _In_ int       nCmdShow)
{
    g_hInstance = hInstance;

    . . .
}

LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
    switch (message)
    {
    case WM_CREATE:
        {
            CreateWindow(_T("button"), _T("난 버튼"), WS_CHILD | WS_VISIBLE | BS_PUSHBUTTON, 100, 100, 200, 200, hWnd, (HMENU)10, g_hInstance, NULL);
        }
    case WM_COMMAND:
        {
            int wmId = LOWORD(wParam);
            // 메뉴 선택을 구문 분석합니다:
            switch (wmId)
            {
            case 10:
                MessageBox(hWnd, _T("버튼클릭"), _T("알림창"), MB_OK);
                break;
            }
        }
        break;
    case WM_DESTROY:
        PostQuitMessage(0);
        break;
    default:
        return DefWindowProc(hWnd, message, wParam, lParam);
    }
    return 0;
}
~~~

![image](https://user-images.githubusercontent.com/39178978/209419957-43ac9ff8-2217-4455-a4d7-f319462e1ba1.png)

###### [컨트롤생성(CreateWindow)](#컨트롤생성createwindow)
###### [Top](#top)

<br/>
<br/>

***

# 다이얼로그 생성
  - 자식 다이얼로그를 생성해보자
    - 1.리소스뷰 생성하기
    - 2.대화상자 프로시저 만들기
    - 3.WndProc에서 DialogBox 함수로 다이얼로그 호출하기

<br/>

  - 1. 리소스뷰 생성하기
    - 리소스 뷰로 들어가서, 리소스 추가 누르기
    
![image](https://user-images.githubusercontent.com/39178978/209420060-253595f8-0b1b-4931-b01c-9cd68b631496.png)

![image](https://user-images.githubusercontent.com/39178978/209420069-8a4e9b3e-381d-423b-b5db-bfa027e341cd.png)

<br/>

  - 2.대화상자 프로시저 만들기
    - WndProc에서 이 함수를 참조해서 사용해야 함으로 WinMain과 WndProc사이에 작성해야 한다
    - 윈도우 프로시저와 다른 점은, 윈도우 프로시저는 LRESULT을 리턴하지만 대화상자 프로시저는 BOOL을 리턴 한다
      - 윈도우 프로시저는 DefWindowProc(hWnd, message, wParam, lParam)로 나머지 메시지를 처리하지만 대화상자 프로시저는 그냥 return FALSE 를 주게 된다
    - 윈도우 프로시저는 시작에 WM_CREATE메시지를 보내지만 대화상자 프로시저는 WM_INITDIALOG을 보낸다.
    - 윈도우 프로시저는 PostQuitMessage를 사용해서 메인 윈도우인 자신을 종료 하지만 대화상자 프로시저는 EndDialog를 사용해서 자신을 종료 한다. 종료할때 인자 값을 보내게 된다

~~~c++
BOOL CALLBACK MyDialogProc(HWND hDlg, UINT iMessage, WPARAM wParam, LPARAM lParam)
{
    switch (iMessage)
    {
    case WM_INITDIALOG:
    {
        return TRUE;
    }
    case WM_COMMAND:
    {
        int wmId = LOWORD(wParam);
        // 메뉴 선택을 구문 분석합니다:
        switch (wmId)
        {

            case IDOK:
                MessageBox(hDlg, _T("다이얼로그 OK버튼 클릭"), _T("알림창"), MB_OK);
                return TRUE;
            case IDCANCEL:
                EndDialog(hDlg, 0);
                return TRUE;
        }
        break;
    }
    }

    return FALSE;
}
~~~

<br/>

  - 3.WndProc에서 DialogBox 함수로 다이얼로그 호출하기

~~~c++
LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
    switch (message)
    {
    case WM_LBUTTONDOWN:
    {
        DialogBox(hInst, MAKEINTRESOURCE(IDD_MYDIALOG), hWnd, (DLGPROC)MyDialogProc);
    }
    break;
    case WM_DESTROY:
        PostQuitMessage(0);
        break;
    default:
        return DefWindowProc(hWnd, message, wParam, lParam);
    }
    return 0;
}
~~~

###### [다이얼로그 생성](#다이얼로그-생성)
###### [Top](#top)

<br/>
<br/>

***

# 대화상자 기반 프로그램이란?
  - 대화 상자 기반 프로그램은, 메인 윈도우 없이 대화상자만을 띄우는 것으로 시작한다
  - 메인 윈도우가 필요 없으니, 메인 윈도우 등록이나, 메시지 루프 등이 필요가 없다

<br/>

~~~c++
// WindowsProject1.cpp : 애플리케이션에 대한 진입점을 정의합니다.
//

#include "framework.h"
#include "WindowsProject1.h"

// 전역 변수:
HINSTANCE hInst;                                // 현재 인스턴스입니다.

// 이 코드 모듈에 포함된 함수의 선언을 전달합니다:
BOOL CALLBACK MyDialogProc(HWND hDlg, UINT iMessage, WPARAM wParam, LPARAM lParam);

int APIENTRY wWinMain(_In_ HINSTANCE hInstance,
                     _In_opt_ HINSTANCE hPrevInstance,
                     _In_ LPWSTR    lpCmdLine,
                     _In_ int       nCmdShow)
{
    hInst = hInstance;
    DialogBox(hInst, MAKEINTRESOURCE(IDD_MYDIALOG), HWND_DESKTOP, (DLGPROC)MyDialogProc);
    // HWND_DESKTOP : 부모윈도우 핸들
    return 0;
}


BOOL CALLBACK MyDialogProc(HWND hDlg, UINT iMessage, WPARAM wParam, LPARAM lParam)
{
    switch (iMessage)
    {
    case WM_INITDIALOG:
    {
        return TRUE;
    }
    case WM_COMMAND:
    {
        int wmId = LOWORD(wParam);
        // 메뉴 선택을 구문 분석합니다:
        switch (wmId)
        {

            case IDOK:
                MessageBox(hDlg, _T("다이얼로그 OK버튼 클릭"), _T("알림창"), MB_OK);
                return TRUE;
            case IDCANCEL:
                EndDialog(hDlg, 0);
                return TRUE;
        }
        break;
    }
    }

    return FALSE;
}
~~~

###### [대화상자 기반 프로그램이란?](#대화상자-기반-프로그램이란)
###### [Top](#top)

<br/>
<br/>

***

# 여러 API함수

  - [텍스트 출력 함수](#텍스트-출력-함수)
  - [그래픽 출력 함수](#그래픽-출력-함수)
  - [메시지 박스 출력](#메시지-박스-출력)
  - [비프음 출력하기](#비프음-출력하기)
  - [화면 다시 그리기](#화면-다시-그리기)
  - [타이머 함수](#타이머-함수)
  - [SendMessage,PostMessage](#sendmessagepostmessage)
  - [wsprintf](#wsprintf)
  - [SendDlgItemMessage](#senddlgitemmessage)

###### [여러 API함수](#여러-api함수)
###### [Top](#top)

<br/>
<br/>

# 텍스트 출력 함수

  - BOOL TextOut(HDC    hdc, int    x, int    y, LPCSTR lpString, int    c)
  - int DrawText(HDC hdc, LPCTSTR lpchText, int cchText, LPRECT  lprc, UINT format)
    - TextOut함수보다 다양한 기능이 있다
  - BOOL SetWindowTextA(HWND   hWnd, LPCSTR lpString)
    - 윈도우 타이틀에 글자 출력(주로 디버깅에 사용하기도 함)

~~~c++
// TextOut예시
case WM_PAINT:
    {
        PAINTSTRUCT ps;
        HDC hdc = BeginPaint(hWnd, &ps);
        // 100,100위치에 4바이트를 출력한다
        TextOut(hdc, 100, 100, _T("qwer"), 4);
        EndPaint(hWnd, &ps);
    }
~~~

###### [여러 API함수](#여러-api함수)
###### [Top](#top)

<br/>
<br/>

# 그래픽 출력 함수

  - COLORREF SetPixel(HDC hdc, int x, int y, COLORREF color) : 점출력
  - BOOL MoveToEx(HDC hdc, int x, int y, LPPOINT lppt) : 선의 시작 지점
  - BOOL LineTo(HDC hdc, int x, int y) : 선의 끝지점
  - BOOL Rectangle(HDC hdc, int left, int top, int right, int bottom) : 사각형출력
  - BOOL Ellipse(HDC hdc, int left, int top, int right, int bottom) : 원출력

###### [여러 API함수](#여러-api함수)
###### [Top](#top)

<br/>
<br/>

# 메시지 박스 출력

  - int MessageBox(HWND hWnd, LPCTSTR lpText, LPCTSTR lpCaption, UINT uType)
    - HWND hWnd : 오너 윈도우
    - LPCTSTR lpText : 메시지 박스에 출력할 문자열
    - LPCTSTR lpCaption : 박스의 타이틀 바에 나타날 제목
    - UINT uType : 어떤 종류의 버튼이 나타날 것인지

###### [여러 API함수](#여러-api함수)
###### [Top](#top)

<br/>
<br/>

# 비프음 출력하기

  - BOOL MessageBeep(UINT uType)
    - 비프음을 들리게함, 주로 어떤 흐름에 두고, 그 흐름을 지나가는지 확인하는 용도로 많이 쓰이기도 함

###### [여러 API함수](#여러-api함수)
###### [Top](#top)

<br/>
<br/>

# 화면 다시 그리기

  - BOOL InvalidateRect(HWND hWnd, const RECT *lpRect, BOOL bErase)
    - 무효화된 화면이 있다면 WM_PAINT 메시지를 보내서 화면을 업데이트 한다
      - HWND hWnd : 화면을 업데이트할 핸들
      - const RECT *lpRect : 업데이트할 영역(NULL이면 전체 화면을 업데이트 한다)
    - BOOL bErase : 업데이트 할때 배경을 지울지 여부

###### [여러 API함수](#여러-api함수)
###### [Top](#top)

<br/>
<br/>

# 타이머 함수

  - SetTimer(HWND hWnd, UINT_PTR  nIDEvent, UINT uElapse, TIMERPROC lpTimerFunc)
    - HWND hWnd :  타미어를 발생시킬 윈도우
    - UINT_PTR  nIDEvent : 타이머의 번호, 타이머끼리 번호가 겹치지 않아야 한다
    - UINT uElapse : 타이머의 주기, 1/1000초 단위
      - 타이머는 1초에 100회 이상 발생하지는 않는다
    - TIMERPROC lpTimerFunc : 타이머가 발생할 때마다 호출될 함수, 만약 NULL로 한다면 WM_TIMER메시지가 발생된다
  - WM_TIMER메시지 에서는 wParam으로 타미어 ID를 발생시키고, lParam으로 타이머 메시지 발생시 호출될 함수의 번지가 전달 된다
  - 같은 타이머의 번호를 가진, 타이머를 생성하면 타이머는 교체가 된다.

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

# 타이머 함수로 콜백 함수 부르기

  - VOID CALLBACK TimerProc(HWND hwnd, UINT uMsg, UINT idEvent, DWORD dwTime)
    - 타이머 함수를 사용할때 마지막 인수인 TIMERPROC lpTimerFunc을 호출할 함수 이름으로 한다면 그 함수를 호출하게 되고, 형식은 위와 같은 함수 형식으로 만들어야 한다
    - HWND hwnd : 타이머를 소유한 윈도우의 핸들
    - UINT uMsg : WM_TIMER
    - UINT idEvent : 타이머 ID
    - DWORD dwTime : 윈도우즈가 실행된 후의 경과시간

~~~c++
void CALLBACK aaaaa(HWND hWnd, UINT uMsg, UINT idEvent, DWORD dwTime)
{
    HDC hdc = GetDC(hWnd);
    TextOut(hdc, 100, 100, _T("출력!!"), 4);
    ReleaseDC(hWnd, hdc);
}


LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
    switch (message)
    {
    case WM_CREATE:
        {
            SetTimer(hWnd, 1, 100, (TIMERPROC)aaaaa);
        }
        break;
    case WM_DESTROY:
        PostQuitMessage(0);
        break;
    default:
        return DefWindowProc(hWnd, message, wParam, lParam);
    }
    return 0;
}
~~~

###### [여러 API함수](#여러-api함수)
###### [Top](#top)

<br/>
<br/>

# SendMessage,PostMessage

  - SendMessage(HWND   hWnd, UINT   Msg, WPARAM wParam, LPARAM lParam)
    - 윈도우 프로시저를 직접 호출하여, 프로시저가 메시지를 처리할때 까지 반환하지 않습니다
  - PostMessage(HWND   hWnd, UINT   Msg, WPARAM wParam, LPARAM lParam)
    - 호출된 메시지가 메시지 큐에 들어가게 되며, 그곳에서 메시지를 윈도우  프로시저에게 전달해 메시지를 처리한다.
    - DispatchMessage()에 의해 윈도우 프로시저로 전달 된다는 뜻

<br/>

  - PostMessage(hWnd, WM_TIMER, 0, 0);
    - 이렇게 하면 hWnd윈도우에 WM_TIMER메시지를 보내고, 여분의 데이터는 0, 0을 보내겠다는 뜻이 된다.
  - 키보드 작업의 경우, SendMessage로 하게 되면 작업이 진행 되지 않고 PostMessage하여야 작업이 진행된다. 키보드를 누른다는것이 하나의 메시지로 작업되는 것이 아니라 다양한 메시지의 조합으로 이루어지기 때문에 하나하나 작업하는 SendMessage같은 경우로는 작동 되지 않는다

###### [여러 API함수](#여러-api함수)
###### [Top](#top)

<br/>
<br/>

# wsprintf

  - 실수를 서식화 할수 없지만 정수는 서식화 하여 출력 할 수 있다

~~~c++
case WM_PAINT:
    {
        PAINTSTRUCT ps;
        HDC hdc = BeginPaint(hWnd, &ps);
        int num = 10;
        TCHAR str[128];
        wsprintf(str, _T("나는 사과를 %d개 먹었다"), num);
        TextOut(hdc, 100, 100, str, lstrlen(str));
        EndPaint(hWnd, &ps);
    }
~~~

###### [여러 API함수](#여러-api함수)
###### [Top](#top)

<br/>
<br/>

# SendDlgItemMessage

~~~c++
LRESULT SendDlgItemMessageA(HWND hDlg, int nIDDlgItem, UINT Msg, WPARAM wParam, LPARAM lParam);
//대화상자의 어떤 ID컨트롤에게 Msg를 보낼때 사용
//부모 대화상자의 핸들과 컨트롤의 ID값으로 편하게 메시지를 보낼 수 있다
~~~

###### [여러 API함수](#여러-api함수)
###### [Top](#top)
