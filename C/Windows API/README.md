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
