###### Top

- [MFC메모리 누수 확인](#mfc메모리-누수-확인)

- <details markdown="1">
  <summary>메세지</summary>
  <div markdown="1">
  
  - [Message](#message)
    - [ON_COMMAND_RANGE](#on_command_range)
    - [WM_CTLCOLOR (컨트롤의 글꼴, 배경색 변경)](#wm_ctlcolor-컨트롤의-글꼴-배경색-변경)
    - [WM_DRAWITEM (컨트롤 Backgroud, Border, Text 그리기)](#wm_drawitem-컨트롤-backgroud-border-text-그리기)
    - [PostMessage (사용자 지정 메시지) + MAKEWPARAM](#postmessage-사용자-지정-메시지--makewparam)
    - [WM_CREATE, WM_SIZE (Dialog 변경시 컨트롤 크기 위치 유지하기)](#wm_create-wm_size-dialog-변경시-컨트롤-크기-위치-유지하기)
    - [WM_TIMER, WM_DESTROY (타이머,윈도우파괴시)](#wm_timer-wm_destroy-타이머윈도우파괴시)
    - [WM_MOUSEWHEEL (마우스 휠)](#wm_mousewheel-마우스-휠)
    - [EN_UPDATE, EN_CHANGE (Edit Control 문자열 변경시)](#en_update-en_change-edit-control-문자열-변경시)
      
  </div>
  </details>

- <details markdown="1">
  <summary>가상함수</summary>
  <div markdown="1">
  
  - [Virtual Function](#virtual-function)
    - [WindowProc](#windowproc)
    - [OnCommand](#oncommand)
    - [PreTranslateMessage](#pretranslatemessage)
      
  </div>
  </details>


- <details markdown="1">
  <summary>모달,모달리스</summary>
  <div markdown="1">
  
  - [모달,모달리스](#모달모달리스)
    - [모달(modal)](#모달modal)
    - [모달리스(modeless)](#모달리스modeless)
    - [캐스팅 하여 전부 접근 하는법](#캐스팅-하여-전부-접근-하는법)
    - [모달, 모달리스 만들때 다른 dialog호출하기](#모달, 모달리스 만들때 다른 dialog호출하기)
      
  </div>
  </details>


- <details markdown="1">
  <summary>다양한 함수</summary>
  <div markdown="1">
  
  - [다양한 함수](#다양한-함수)
    - [MoveWindows](#movewindows)
    - [SetWindowPos](#setwindowpos)
    - [GetWindowRect(),GetClientRect() (윈도우 좌표, 클라이언트 좌표)](#getwindowrectgetclientrect-윈도우-좌표-클라이언트-좌표)
    - [ShowWindow(),EnableWindow() (윈도우 활성, 비활성 및 숨김, 보임)](#showwindowenablewindow-윈도우-활성-비활성-및-숨김-보임)
    - [윈도우 특정 부분 투명화 하기](#윈도우-특정-부분-투명화-하기)
    - [윈도우 모양 바꾸기](#윈도우-모양-바꾸기)
    - [Dialog Control 포커스 맞추기](#dialog-control-포커스-맞추기)
    - [GetPrivateProfileString(),WritePrivateProfileString() (ini파일 읽기, 쓰기)](#getprivateprofilestringwriteprivateprofilestring-ini파일-읽기-쓰기)
    - [time(NULL), localtime_s(), SYSTEMTIME(현재 시간, 날짜 출력)](#timenull-localtime_s-systemtime현재-시간-날짜-출력)
    - [SetTimer() (타이머 사용하기)](#settimer-타이머-사용하기)
    - [RegisterHotKey() (시스템 전역 단축키 지정하기)](#registerhotkey-시스템-전역-단축키-지정하기)
  </div>
  </details>


- <details markdown="1">
  <summary>문자 다루기</summary>
  <div markdown="1">
  
  - [문자 다루기](#문자-다루기)
    - [문자 크기 바꾸기 (CFont)](#문자-크기-바꾸기-cfont)
    - [문자 크기 바꾸기 (LOGFONT)](#문자-크기-바꾸기-logfont)
    - [DrawText (텍스트를 도형 안에 출력하기)](#drawtext-텍스트를-도형-안에-출력하기)
    - [TextOut (텍스트를 원하는 위치에 출력)](#textout-텍스트를-원하는-위치에-출력)
      
  </div>
  </details>


- <details markdown="1">
  <summary>CImage (사진출력)</summary>
  <div markdown="1">
  
  - [CImage (사진출력)](#cimage-사진출력)
    - [확대, 축소, 부분 출력](#확대-축소-부분-출력)
    - [AlphaBlend](#alphablend)
    - [Dialog크기로 출력하기](#dialog크기로-출력하기)
    - [사진 크기로 Dialog크기 변경하기](#사진-크기로-dialog크기-변경하기)
      
  </div>
  </details>


- <details markdown="1">
  <summary>Bitmap 리소스, 패턴 브러쉬</summary>
  <div markdown="1">
  
  - [Bitmap 리소스, 패턴 CBrush](#bitmap-리소스-패턴-cbrush)
    - [Bitmap 리소스를 패턴 CBrush로 출력](#bitmap-리소스를-패턴-cbrush로-출력)
    - [CBrush중심점 이동하여 출력](#cbrush중심점-이동하여-출력)
    - [외부그림을 패턴 CBrush로 출력](#외부그림을-패턴-cbrush로-출력)
      
  </div>
  </details>

- [CDC, CPaintDC, CClientDC, CWindowDC (화면출력)](#cdc-cpaintdc-cclientdc-cwindowdc-화면출력)
- [장치 DC, 메모리 DC (깜박임 없애기)](#장치-dc-메모리-dc-깜박임-없애기)
- [CFileDialog (파일열기 대화 상자) 사용법 및 사진불러오기](#cfiledialog-파일열기-대화-상자-사용법-및-사진불러오기)
- [COLORREF (컬러 담는 변수)](#colorref-컬러-담는-변수)
- [서브 클래싱(SubclassDlgItem)이용하여 기능변경](#서브-클래싱subclassdlgitem이용하여-기능변경)


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

<br/>
<br/>

***

# Message

  - 일반적으로 콘솔에서 만든 프로그램은 프로그래머가 정한 순서대로 차근 차근 진행 됩낟. 하지만, 윈도우 응용 프로그램은 메세지 구동 구조를 가지고 있으며, 프로그램에 어떤 변화가 생경을때 Windows가 프로그램에게 정보를 알려주고, 프로그램은 그 정보를 받아서 다양한 동작을 하게 된다.

    - [ON_COMMAND_RANGE](#on_command_range)
    - [WM_CTLCOLOR (컨트롤의 글꼴, 배경색 변경)](#wm_ctlcolor-컨트롤의-글꼴-배경색-변경)
    - [WM_DRAWITEM (컨트롤 Backgroud, Border, Text 그리기)](#wm_drawitem-컨트롤-backgroud-border-text-그리기)
    - [PostMessage (사용자 지정 메시지) + MAKEWPARAM](#postmessage-사용자-지정-메시지--makewparam)
    - [WM_CREATE, WM_SIZE (Dialog 변경시 컨트롤 크기 위치 유지하기)](#wm_create-wm_size-dialog-변경시-컨트롤-크기-위치-유지하기)
    - [WM_TIMER, WM_DESTROY (타이머,윈도우파괴시)](#wm_timer-wm_destroy-타이머윈도우파괴시)
    - [WM_MOUSEWHEEL (마우스 휠)](#wm_mousewheel-마우스-휠)
    - [EN_UPDATE, EN_CHANGE (Edit Control 문자열 변경시)](#en_update-en_change-edit-control-문자열-변경시)

###### [Message](#message)
###### [Top](#top)

<br/>
<br/>

# ON_COMMAND_RANGE
  - ON_COMMAND_RANGE를 이용해서 함수하나로 버튼을 한꺼번에 처리 가능(꼭 버튼이 아니여도 다양한 처리 가능)
  - 주의할 사항은, 각 패널의 ID가 숫자로 define되어 있기 때문에 define부분이 연속으로 잘 정돈되어 있어야함
  - 프로젝트 -> 클래스 마법사 -> 메세지에 없는 메세지이기 때문에 따로 하나하나 추가해 주어야함
  - 버튼 1번 ~ 3번까지 처리했을시 상황
  - Dialog ID가 “IDC_BUTTON1”, “IDC_BUTTON2”, “IDC_BUTTON3”일때(define정의가 순서대로 되어 있어야함)

#AppDlg.h
~~~c++
class CMFCApplication3Dlg : public CDialogEx
{
// 생성입니다.
public:
	CMFCApplication3Dlg(CWnd* pParent = nullptr);	// 표준 생성자입니다.

// 대화 상자 데이터입니다.
#ifdef AFX_DESIGN_TIME
	enum { IDD = IDD_MFCAPPLICATION3_DIALOG };
#endif

	protected:
	virtual void DoDataExchange(CDataExchange* pDX);	// DDX/DDV 지원입니다.


// 구현입니다.
protected:
	HICON m_hIcon;

	// 생성된 메시지 맵 함수
	virtual BOOL OnInitDialog();
	afx_msg void OnPaint();
	afx_msg HCURSOR OnQueryDragIcon();
	DECLARE_MESSAGE_MAP()
	void OnSetNumber(UINT a_ctrl_id);
};
~~~

<br/>

#AppDlg.cpp
~~~c++
BEGIN_MESSAGE_MAP(CMFCApplication3Dlg, CDialogEx)
	ON_WM_PAINT()
	ON_WM_QUERYDRAGICON()
	ON_COMMAND_RANGE(IDC_BUTTON1,IDC_BUTTON3, OnSetNumber)
END_MESSAGE_MAP()

...

void CMFCApplication3Dlg::OnSetNumber(UINT a_ctrl_id)
{
	SetDlgItemInt(IDC_SHOW_NUM_EDIT, a_ctrl_id - 1000);
}
~~~

###### [Message](#message)
###### [Top](#top)

<br/>
<br/>

# WM_CTLCOLOR (컨트롤의 글꼴, 배경색 변경)
  - 프로젝트 -> 클래스 마법사 -> 메세지 -> WM_CTLCOLOR 추가하기(AppDlg.h, AppDlg.cpp에 함수해더,BEGIN_MESSAGE_MAP 자동으로 추가됨)
  - WM_CTLCOLOR은 각종 컨트롤에 배경과 글꼴색을 바꿀 수 있다.
  - Dialog ID가 “IDC_STATIC2”일때
  - Owner Draw가 없는 컨트롤을 변경할 때 사용. 컬러를 바꿀 때 사용(그래서 버튼 같은 컨트롤은 WM_DRAWITEM 메시지로 해야함)

#AppDlg.cpp
~~~c++
HBRUSH CAlarm_talk::OnCtlColor(CDC* pDC, CWnd* pWnd, UINT nCtlColor) 
{
	HBRUSH hbr = CBaseDialog::OnCtlColor(pDC, pWnd, nCtlColor);

	if (pWnd->GetDlgCtrlID() == IDC_STATIC2)
	{
		pDC->SetBkMode(TRANSPARENT); // 배경 투명으로 변경
		pDC->SetTextColor(RGB(255, 255, 255)); // 글자 컬러 흰색으로 변경
		return (HBRUSH)::GetStockObject(NULL_BRUSH);
	}

	return hbr;
~~~

![image](https://user-images.githubusercontent.com/39178978/182018722-c3094140-ff67-4d0c-9f9d-d398d719b057.png)

여기서

![image](https://user-images.githubusercontent.com/39178978/182018635-0e29f778-fca1-42bf-a867-f8266819edab.png)

이렇게 된다

###### [Message](#message)
###### [Top](#top)

<br/>
<br/>

# WM_DRAWITEM (컨트롤 Backgroud, Border, Text 그리기)
  - 프로젝트 -> 클래스 마법사 -> 메세지 -> WM_DRAWITEM 추가하기(AppDlg.h, AppDlg.cpp에 함수해더,BEGIN_MESSAGE_MAP 자동으로 추가됨)
  - Dialog에서 Owner Draw속성을 True설정(해당 컨트롤을 스스로 그리지 않겠다)
  - Owner Draw가 있는 컨트롤을 변경할 때 사용, 즉 그리는 것을 제어 하는것
  - WM_DRAWITEM은 사용자가  직접 컨트롤을 그린다고 하는것

#AppDlg.cpp
~~~c++
void CAlarm_talk::OnDrawItem(int nIDCtl, LPDRAWITEMSTRUCT lpDrawItemStruct)
{
	if (nIDCtl == IDC_BUTTON2)
	{
		RECT r = lpDrawItemStruct->rcItem;
		HDC h_dc = lpDrawItemStruct->hDC;
		HBRUSH h_brush = CreateSolidBrush(RGB(5, 81, 158));

		FillRect(h_dc, &r, h_brush); // 백드라운드 그리기
		DeleteObject(h_brush);

		// 테두리 그리기
		HPEN h_pen = CreatePen(PS_SOLID, 1, RGB(0, 67, 135));

		HPEN h_pen_click = CreatePen(PS_SOLID, 1, RGB(255, 255, 255)); // 클릭했을시 교체할 흰색 테두리

		HGDIOBJ h_old_pen = SelectObject(h_dc, h_pen);
		HGDIOBJ h_old_brush = SelectObject(h_dc, GetStockObject(NULL_BRUSH));

		Rectangle(h_dc, r.left, r.top, r.right, r.bottom);

		// 클릭했을시 흰색 테두리로 교체하고, 흰색테두리와 글자를 2px만큼 움직여서 액팅 추가
		if (lpDrawItemStruct->itemState & ODS_SELECTED) // ODS_SELECTED : 클릭 되었는지 확인
		{
			r.top += 2;
			r.left += 2;

			SelectObject(h_dc, h_pen_click);
			Rectangle(h_dc, r.left, r.top, r.right, r.bottom);
		}

		SelectObject(h_dc, h_old_pen);
		DeleteObject(h_old_pen);

		// 글자 출력
		CString name;
		int length = GetDlgItemText(lpDrawItemStruct->CtlID, name);

		int old_mode = SetBkMode(h_dc, TRANSPARENT); // 글자 Background 투명화
		SetTextColor(h_dc, RGB(255, 255, 255));
		DrawText(h_dc, name, length, &r, DT_CENTER | DT_VCENTER | DT_SINGLELINE);
		SetBkMode(h_dc, old_mode);
	}

	CBaseDialog::OnDrawItem(nIDCtl, lpDrawItemStruct);
}
~~~

![image](https://user-images.githubusercontent.com/39178978/182018423-52c61f02-1372-49d2-84f5-7234c0a43206.png)

###### [Message](#message)
###### [Top](#top)

<br/>
<br/>

# PostMessage (사용자 지정 메시지) + MAKEWPARAM
  - 자기 자신에게 PostMessage를 보낼 수도 있지만 그것은 의미가 없고, 다른 dialog에서 보내는것을 받는것이 의미가 있다. 보통 자식 -> 부모로 보내는것이 일반적이다(부모 -> 자식은 접근이 쉽기 때문)
  - 부모에서는, 프로젝트 -> 클래스마법사->메시지->사용자 지정 메시지 추가 -> ‘10000’ 입력 후 추가하기(10000은 예시를 든것임!)
  - (AppDlg.h, AppDlg.cpp에 함수해더,BEGIN_MESSAGE_MAP 자동으로 추가됨)
  - 자식이 ‘10000’메시지를 보내면 부모의 ‘10000’메시지를 받는 함수가 호출된다.

<br/>

~~~c++
//함수원형
BOOL PostMessage(HWND hWnd, UINT Msg, WPARAM wParam, LPARAM lParam);

HWND hWnd : 메시지를 받을 윈도우 핸들
Msg : 어떤 메시지 번호를 넘길껀지
WPARAM wParam, LPARAM lParam : 추가 데이터 송부?!
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#AppDlg.cpp(자식)
~~~c++
// 부모의 핸들을 GetParent()로 얻어와서 이렇게 보낸다. 현재는 '10000' 메시지를 지정해서 만들어 보내겠다는것
void Cchaild::OnBnClickedButton1()
{
	GetParent()->PostMessage(10000);
}
~~~

<br/>

#AppDlg.cpp(부모)
~~~c++
// 부모의 지정 메시지를 가진 함수 호출
// 프로젝트 -> 클래스마법사->메시지->사용자 지정 메시지 추가 -> ‘10000’ 입력 후 추가하기(자식이 지정 메시지인 '10000' 메시지를 부모로 보내기 때문에)
afx_msg LRESULT CMFCApplication4Dlg::On10000(WPARAM wParam, LPARAM lParam)
{
	SetDlgItemInt(IDC_EDIT1, 10);
	return 0;
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  - MAKEWPARAM
    - 16비트 크기의 변수인 wLow 와 wHigh의 값을 32비트 크기로 합쳐서 반환하는 함수이다.
    - wLow는 32비트중에서 하위 16비트에 저장되고 wHigh는 상위 16비트에 저장된다.
    - 윈도우즈 메시지에 포함되어 전달되는 두개의 인자중 하나인 lParam 을 구성할때 사용한다.

<br/>

#AppDlg.cpp(자식)
~~~c++
void Cchaild::OnBnClickedButton1()
{
	int n = GetDlgCtrlID();
	GetParent()->PostMessage(WM_COMMAND, MAKEWPARAM(10000, 20000), LPARAM(190));
}
~~~

<br/>

#AppDlg.cpp(부모)
~~~c++
// PostMessage의 인자를 이용해서 아래와 같이 OnCommand에 바로 메시지를 보낼 수 있으며, 보낼때 MAKEWPARAM을 이용해서 상위, 하위를 나누어서 데이터를 보낼 수 있고, 마지막 인자에도 추가 데이터를 보낼 수 있다
// 하지만 진행 했을시에는, 마지막 인자인 lParam에 일정 작은 수를 넣으면 assertion error가 났었고 아직 그것은 이해 하지 못했음
BOOL CMFCApplication2Dlg::OnCommand(WPARAM wParam, LPARAM lParam)
{

	int n = LOWORD(wParam); // MAKEWPARAM
	int n1 = HIWORD(wParam); // MAKEWPARAM
	int n2 = lParam; // LPARAM

	if(HIWORD(wParam) == 20000)
	{
		int value = GetDlgItemInt(IDC_EDIT1);
		
		if (LOWORD(wParam) == 10000)
			value++;

		SetDlgItemInt(IDC_EDIT1, value);
	}
	return CDialogEx::OnCommand(wParam, lParam);
}
~~~

![20220827_113633](https://user-images.githubusercontent.com/39178978/187011001-0e9789d9-8db0-47ce-ab1c-e666853dfb81.png)

###### [Message](#message)
###### [Top](#top)

<br/>
<br/>

# WM_CREATE, WM_SIZE (Dialog 변경시 컨트롤 크기 위치 유지하기)
  - WM_CREATE
    - 프로젝트 -> 클래스 마법사 -> 메시지 -> WM_CREATE 추가하기(AppDlg.h, AppDlg.cpp에 함수해더,BEGIN_MESSAGE_MAP 자동으로 추가됨)
    - 윈도우가 생성되면 보내주는 메시지
  - WM_SIZE
    - 프로젝트 -> 클래스 마법사 -> 메시지 -> WM_SIZE 추가하기(AppDlg.h, AppDlg.cpp에 함수해더,BEGIN_MESSAGE_MAP 자동으로 추가됨)
    - 윈도우의 사이즈가 변경되면 발생되는 메시지

<br/>

#AppDlg.h
~~~c++
//함수원형
// 생성된 윈도우의 사이즈를 담을 변수 선언
int width;
int height;
~~~

<br/>

#AppDlg.cpp
~~~c++
// 생성된 윈도우의 사이즈 담기
int CMFCApplication1Dlg::OnCreate(LPCREATESTRUCT lpCreateStruct)
{
	if (CDialogEx::OnCreate(lpCreateStruct) == -1)
		return -1;

	CRect r;
	GetClientRect(&r);

	width = r.Width();
	height = r.Height();

	return 0;
}

...

// 만약 사각형 4개를, 가지런하게 줄이기 위해서는 가로, 세로를 다른 부분에 있는 사각형 보다 2배로 움직여야 하는 상황에 놓인다. 아래 코드를 참고 하면 된다.
void CMFCApplication1Dlg::OnSize(UINT nType, int cx, int cy)
{
	CDialogEx::OnSize(nType, cx, cy);

	CWnd* pCtl = GetDlgItem(IDC_BUTTON1);
	if (pCtl != NULL) // 컨트롤이 현재 존재 한다면
	{
		// 바뀐 크기 저장
		int changeW = cx - width; 
		int changeH = cy - height;

		CRect btnc;
		pCtl->GetWindowRect(&btnc);
		ScreenToClient(&btnc);

		pCtl->MoveWindow(btnc.left + changeW, btnc.top + changeH, btnc.Width() + changeW , btnc.Height() + changeH);
	}

	pCtl = GetDlgItem(IDC_BUTTON2);

	if (pCtl != NULL) // 컨트롤이 현재 존재 한다면
	{
		// 바뀐 크기 저장
		int changeW = cx - width; 
		int changeH = cy - height;

		CRect btnc;
		pCtl->GetWindowRect(&btnc);
		ScreenToClient(&btnc);

		pCtl->MoveWindow(btnc.left + 2*changeW, btnc.top + changeH, btnc.Width() + changeW , btnc.Height() + changeH); // 2배로 left움직이기
	}

	pCtl = GetDlgItem(IDC_BUTTON3);

	if (pCtl != NULL) // 컨트롤이 현재 존재 한다면
	{
		// 바뀐 크기 저장
		int changeW = cx - width; 
		int changeH = cy - height;

		CRect btnc;
		pCtl->GetWindowRect(&btnc);
		ScreenToClient(&btnc);

		pCtl->MoveWindow(btnc.left + changeW, btnc.top + 2*changeH, btnc.Width() + changeW , btnc.Height() + changeH);  // 2배로 top움직이기
	}

	pCtl = GetDlgItem(IDC_BUTTON4);

	if (pCtl != NULL) // 컨트롤이 현재 존재 한다면
	{
		// 바뀐 크기 저장
		int changeW = cx - width; 
		int changeH = cy - height;

		CRect btnc;
		pCtl->GetWindowRect(&btnc);
		ScreenToClient(&btnc);

		pCtl->MoveWindow(btnc.left + 2*changeW, btnc.top + 2*changeH, btnc.Width() + changeW , btnc.Height() + changeH); // 2배로 left, top움직이기

		// 바뀐 크기를 기존 넓이, 높이로 변경
		width = cx;
		height = cy;
	}
}
~~~

![20220806_202502](https://user-images.githubusercontent.com/39178978/183246866-3e0fb0e0-d14c-4cf1-8591-1e16e509e4d8.png)

###### [Message](#message)
###### [Top](#top)

<br/>
<br/>

# WM_TIMER, WM_DESTROY (타이머,윈도우파괴시)
  - [SetTimer() (타이머 사용하기)](#settimer-타이머-사용하기) 참고하기

###### [Message](#message)
###### [Top](#top)

<br/>
<br/>

# WM_MOUSEWHEEL (마우스 휠)
  - 마우스 휠을 돌리면 발생하는 메시지
  - 프로젝트 -> 클래스 마법사 -> 메세지 -> WM_MOUSEWHEEL추가하기(AppDlg.h, AppDlg.cpp에 함수해더,BEGIN_MESSAGE_MAP 자동으로 추가됨)
  - zDelta > 0 : 휠을 위로 돌렸을때, zDelta < 0 휠을 아래로 돌렸을때

<br/>

#AppDlg.cpp
~~~c++
BOOL CMFCApplication2Dlg::OnMouseWheel(UINT nFlags, short zDelta, CPoint pt)
{
	if (zDelta > 0)
	{
		if (r_size < 100)
			r_size += 10;
	}
	else
	{
		if (r_size > 10)
			r_size -= 10;
	}

	return CDialogEx::OnMouseWheel(nFlags, zDelta, pt);
}
~~~

###### [Message](#message)
###### [Top](#top)

<br/>
<br/>

# EN_UPDATE, EN_CHANGE (Edit Control 문자열 변경시)
  - EN_UPDATE
    - 프로젝트 -> 클래스 마법사 -> 명령(메시지를 입력할 Edit Control 컨트롤 ID클릭) -> 메시지 -> EN_UPDATE 추가하기(AppDlg.h, AppDlg.cpp에 함수해더,BEGIN_MESSAGE_MAP 자동으로 추가됨)
    - 문자열이 변경된 후, 화면에 출력하기 전에 보내주는 메시지
  - EN_CHANGE
    - 프로젝트 -> 클래스 마법사 -> 명령(메시지를 입력할 Edit Control 컨트롤 ID클릭) -> 메시지 -> EN_CHANGE 추가하기(AppDlg.h, AppDlg.cpp에 함수해더,BEGIN_MESSAGE_MAP 자동으로 추가됨)
    - 문자열이 화면에 출력된 후, 보내지는 메시지
    - EN_UPDATE 와 비슷하지만 다름, 하지만 동일한 느낌으로 사용하는 것이기 때문에 예시는 넣지 않겠음

<br/>

#AppDlg.h
~~~c++
// 숫자 확인할 변수 하나 선언
public:
	int num;
~~~

<br/>

#AppDlg.cpp
~~~c++
// 변수 초기화 진행
// 버튼 눌렀을시, 왼쪽 EDIT숫자가 증가 함에 따라 오른쪽 EDIT의 숫자도 같이 증가한다
BOOL CMFCApplication2Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	num = 0;
}

...

void CMFCApplication2Dlg::OnChangeEdit1()
{

	num--;
	SetDlgItemInt(IDC_EDIT2, num);
}

...

void CMFCApplication2Dlg::OnBnClickedButton1()
{
	num += 2;
	SetDlgItemInt(IDC_EDIT1, num);
}
~~~

![20220814_095310](https://user-images.githubusercontent.com/39178978/184518040-e5edb9cd-1b9e-415e-a2fa-a48a76628526.png)

###### [Message](#message)
###### [Top](#top)

<br/>
<br/>

***

# Virtual Function
  - 보통은 선언되어 있는 함수를 virtual로 선언하여 사용함이고, 프로젝트 -> 클래스 마법사 -> 가상함수 쪽에서 추가할 수 있다.
  - 프로젝트 -> 클래스 마법사 -> 가상함수에서 추가 한다면 AppDlg.h, AppDlg.cpp에 함수해더가 자동으로 추가 된다.

    - [WindowProc](#windowproc)
    - [OnCommand](#oncommand)
    - [PreTranslateMessage](#pretranslatemessage)
  
###### [Virtual Function](#virtual-function)
###### [Top](#top)

<br/>
<br/>

# WindowProc
  - 모든 이벤트는 WindowProc를 거쳐 가기 때문에 이렇게 할 수 있지만 너무나 많은 이벤트가 들어가게됨(조금은 비효율적)
  - 프로젝트 -> 클래스 마법사 -> 가상함수 -> WindowProc 추가하기(AppDlg.h, AppDlg.cpp에 함수해더 자동으로 추가됨)
  - Dialog ID가 “IDC_BUTTON1”, “IDC_BUTTON2”, “IDC_BUTTON3”일때(저렇게 쓸려면 define정의가 순서대로 되어 있어야함)
 
#AppDlg.cpp
~~~c++
LRESULT CMFCApplication3Dlg::WindowProc(UINT message, WPARAM wParam, LPARAM lParam)
{
	if (WM_COMMAND == message)
	{
		UINT ctrl_id = LOWORD(wParam);
		if (ctrl_id >= IDC_BUTTON1 && ctrl_id <= IDC_BUTTON3)
			SetDlgItemInt(IDC_SHOW_NUM_EDIT, ctrl_id - 1000);
	}

	return CDialogEx::WindowProc(message, wParam, lParam);
}
~~~
  
###### [Virtual Function](#virtual-function)
###### [Top](#top)

<br/>
<br/>

# OnCommand
  - 프로젝트 -> 클래스 마법사 -> 가상함수 -> OnCommand 추가하기(AppDlg.h, AppDlg.cpp에 함수해더 자동으로 추가됨)
  - OnCommand는 WindowProc의 하위 함수로써 WM_COMMAND메세지만 이쪽으로 들어오게 된다.
  - Dialog ID가 “IDC_BUTTON1”, “IDC_BUTTON2”, “IDC_BUTTON3”일때(저렇게 쓸려면 define정의가 순서대로 되어 있어야함)

#AppDlg.cpp
~~~c++
BOOL CMFCApplication3Dlg::OnCommand(WPARAM wParam, LPARAM lParam)
{
	UINT ctrl_id = LOWORD(wParam);
	if (ctrl_id >= IDC_BUTTON1 && ctrl_id <= IDC_BUTTON3)
		SetDlgItemInt(IDC_SHOW_NUM_EDIT, ctrl_id - 1000);

	return CDialogEx::OnCommand(wParam, lParam);
}
~~~

###### [Virtual Function](#virtual-function)
###### [Top](#top)

<br/>
<br/>

# PreTranslateMessage
  - 프로젝트 -> 클래스 마법사 -> 가상함수 -> PreTranslateMessage 추가하기(AppDlg.h, AppDlg.cpp에 함수해더 자동으로 추가됨)
  - 메세지 경로
    - PreTranslateMessage -> TranslateMessage or DispatchMessage
  - TranslateMessage or DispatchMessage 에 전해지기 전에 처리할 필요가 있을때 사용
  - 메시지 큐에서 메시지 정보를 읽어들인 다음에 호출되기 때문에 메시지 큐에 들어가는 모든 메시지를 받을 수 있고, 먼저 낚아 채어 그 메시지가 넘어가지 않게 할 수 있음
  - return을 TRUE로 하면 PreTranslateMessage에서 더 이상 메시지가 넘어가지 않고 return을 FALSE로 하면 PreTranslateMessage에서 메시지가 다음으로 넘어 가게 된다
  - SendMessage는 메시지를 큐에 넣는 것이 아니라 곧바로 윈도우 프로시저로 보내 즉각 처리하기 때문에 잡을 수 없다
  - PostMessage는 메시지큐에 들어가기 때문에 잡을 수 있다

#AppDlg.cpp
~~~c++
// 마우스 좌클릭시, PreTranslateMessage 함수가 return FALSE를 하기 때문에 AfxMessageBox(_T("123"));, AfxMessageBox(_T("456")); 두개다 작동됨
BOOL CMFCApplication3Dlg::PreTranslateMessage(MSG* pMsg)
{
	if(pMsg->message == WM_LBUTTONDOWN)
	{
		AfxMessageBox(_T("123"));
		return FALSE;
	}
	return CDialogEx::PreTranslateMessage(pMsg);
}

...

void CMFCApplication3Dlg::OnLButtonDown(UINT nFlags, CPoint point)
{

	AfxMessageBox(_T("456"));

	CDialogEx::OnLButtonDown(nFlags, point);
}
~~~

###### [Virtual Function](#virtual-function)
###### [Top](#top)

<br/>
<br/>

***

# 모달,모달리스

  - 대화상자 만들기

    - [모달(modal)](#모달modal)
    - [모달리스(modeless)](#모달리스modeless)
    - [캐스팅 하여 전부 접근 하는법](#캐스팅-하여-전부-접근-하는법)
    - [모달, 모달리스 만들때 다른 dialog호출하기](#모달, 모달리스 만들때 다른 dialog호출하기)

###### [모달,모달리스](#모달모달리스)
###### [Top](#top)

<br/>
<br/>

# 모달(modal)

  - 대화상자가 실행될 때 제어권을 독점하게 되기 때문에, 대화 상자가 종료되기 전까지 기존 화면에 포커스를 맞출 수 없다.
  - 데이터 전달 과정
    - 부모 -> 자식
      - 자식 대화상자 창을 띄우기 전에, 자식 객체만 만들어 졌을때 부모에서 자식으로 데이터 넘기기
    - 자식 -> 부모
      - 자식이 스스로의 창을 닫기 전에 자신의 맴버 변수에 데이터를 저장하고, 대화상자 창을 끝내고 난뒤에, 저장되어 있는 맴버 변수를 부모가 꺼내서 사용(자식의 대화상자가 종료 됬을때 Domodal()함수의 반환값은 Enddialog(int num)로 종료됬을 때의 int값이 된다, int값은 넣지 않아도 됨)

<br/>

  - 대화상자 생성
  - 부모 h파일에 자식 h파일 include가 필요함

#AppDlg.h(부모)
~~~c++
// 자식 해더 파일 include
~~~

<br/>

#AppDlg.cpp(부모)
~~~c++
Cchaild chaild;
chaild.DoModal();
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 부모 -> 자식

#AppDlg.h(부모)
~~~c++
// 자식 해더 파일 include
~~~

<br/>

#AppDlg.cpp(부모)
~~~c++
// 이런식으로 자식의 객체가 만들어지고, Domodal로 대화상자를 실행하기 전에 데이터를 넘겨 주면 된다
Cchaild chaild;
chaild.Setdata();
chaild.DoModal();
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 자식 -> 부모

#AppDlg.h(부모)
~~~c++
// 자식 해더 파일 include
~~~

<br/>

#AppDlg.cpp(자식)
~~~c++
// 자식이 스스로의 창을 닫기 전에 자신의 맴버 변수에 데이터를 저장한다.
Setdata(k);
chaild.Enddialog(num);
~~~

<br/>

#AppDlg.cpp(부모)
~~~c++
// 자식이 스스로의 창을 닫기 전에 자신의 맴버 변수에 데이터를 저장하고, 대화상자 창을 끝내고 난뒤에, 저장되어 있는 맴버 변수를 부모가 꺼내서 사용
Cchaild chaild;
chaild.Setdata();
chaild.DoModal();

int num = chaild.Getdata();
~~~

###### [모달,모달리스](#모달모달리스)
###### [Top](#top)

<br/>
<br/>

# 모달리스(modeless)

  - 대화상자가 실행되도 기존 화면을 포커스 할 수 있다. 
  - 데이터 전달 과정
    - 부모 -> 자식
      - 자식을 포인터로 만들기 때문에, 부모 -> 자식의 데이터 전달은 포인터를 이용해서 쉽게 할 수 있다.
    - 자식 -> 부모
      - GetParent()를 사용하여 데이터 전달(PostMessage, 컨트롤 ID에 직접 접근)

<br/>

  - 대화상자 생성
  - 부모 h파일에 자식 h파일 include가 필요함

#AppDlg.h(부모)
~~~c++
// 자식 해더 파일 include
Cchaild* chaild = NULL; // 자식 class선언
~~~

#AppDlg.cpp(부모)
~~~c++
// 버튼 클릭시 만들려면,
void CMFCApplication4Dlg::OnBnClickedButton1()
{
	if (chaild == NULL)
	{
		chaild = new Cchaild;
		chaild->Create(IDD_DIALOG1, this);
		chaild->ShowWindow(SW_SHOW);
	}
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 대화상자 종료
  - 포인터로 할당한 후에 대화 상자를 만들기 때문에, 자식 대화 상자 종료시에 부모쪽에서 자식쪽으로 할당했던 메모리를 해제 시켜 주어야 한다.
  - GetParent()를 사용하면 Create했을때 넣어 주었던 this가 부모가 되어, 부모의 포인터로 접근 할 수 있게 된다.
    - 부모(this 사용 or 미사용) -> 자식(this 미사용) -> 자식 이면 마지막 자식은 GetParent() 사용시 최상위 부모 쪽에 접근 하게 된다.
    - 부모(this 사용 or 미사용) -> 자식(this 사용) -> 자식 이면 마지막 자식은 GetParent() 사용시 바로 위 자식 쪽으로 접근 하게 된다.
    - GetParent()를 사용하게 되면 직접 각각의 다이얼로그 class를 캐스팅 하지 않고서는,  PostMessage을 사용 하는 것과 직접 컨트롤 ID로 접근 하는 방법이 있다.

#AppDlg.cpp(자식)
~~~c++
// 버튼 클릭시 종료 만들려면,
void Cchaild::OnBnClickedOk()
{
	GetParent()->PostMessage(10000);
}
~~~

  - 부모는, 프로젝트 -> 클래스마법사 -> 메시지 -> 사용자 지정 메시지 추가 -> 10000(현재 자식에서 보내는것) 만들기

#AppDlg.cpp(부모)
~~~c++
afx_msg LRESULT CMFCApplication4Dlg::On10000(WPARAM wParam, LPARAM lParam)
{
	if (chaild != NULL)
	{
		chaild->DestroyWindow();
		delete chaild;
		chaild = NULL;
	}
	return 0;
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 부모 -> 자식 데이터 전달

#AppDlg.cpp(부모)
~~~c++
// 자식 객체의 포인터로 직접 접근하기, 부모는 자식의 변수및 함수, 컨트롤에 이렇게 접근 할 수 있음
void CMFCApplication4Dlg::fuction()
{
	chaild->SetDlgItemInt(IDC_EDIT1, 20000);
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 자식 -> 부모 데이터 전달

#AppDlg.cpp(자식)
~~~c++
// 자식은 GetParent()을 사용해 PostMessage를 보내거나 컨트롤ID에 직접 접근 하는 방법이 있음
// chaild->Create(IDD_DIALOG1, this) 에서, this를 해줘야 GetParent()를 사용했을때 부모의 포인터를 가져올 수 있다. 
void CD1::OnBnClickedButton1()
{
	GetParent()->SetDlgItemInt(IDC_EDIT1, 10);
	GetParent()->PostMessage(10000, int);
}
~~~

###### [모달,모달리스](#모달모달리스)
###### [Top](#top)

<br/>
<br/>

# 캐스팅 하여 전부 접근 하는법
  - 모달이든, 모달리스든 전부다 포인터로하여 캐스팅하여 접근 할 수 있다.

<br/>

  - 부모1 -> 자식1
    - 부모1 <-> 자식1
  - 부모1 -> 자식1 -> 자식2
    - 부모1 <->자식1
    - 부모1 <-> 자식2
    - 자식1 <-> 자식2
  - 부모1 -> 자식1, 자식2
    - 자식1 <-> 자식2 

<br/>

  - 방법 : 부모의 포인터값을 저장해서 사용
    - 1. 부모 윈도우 생성
    - 2. 부모 h에서 자식 h파일 include
    - 3. 부모 윈도우에서 자식 윈도우 생성
    - 4. 자식을 생성할때 부모의 class포인터 값을 넘겨줌 그것을 자식 h파일에서 받음
    - 5. 사용할 자식 cpp파일에 상위에 있는 아무 부모 h파일 include후에 부모 포인터가 담긴 변수를 사용하여 캐스팅 하여 바로 접근하기
    - 6. 메모리 해제 꼭 잘 해줘야함!

<br/>

#AppDlg.h(부모)
~~~c++
// 자식 해더 파일 include
Cchaild* chaild = NULL; // 자식 class선언
~~~

#AppDlg.cpp(부모)
~~~c++
// 버튼 클릭시 만들려면, 또한 자식 윈도우 생성시 부모윈도우의 포인터 전송
void CMFCApplication5Dlg::OnBnClickedButton1()
{
	if (chaild == NULL)
	{
		chaild = new Cchaild;
		chaild->dilver(this);
		chaild->DoModal(); // 모달리스로 만들때도 동일하게 부모를 포인터로 전송하면 된다.
	}
}
~~~

#AppDlg.h(자식)
~~~c++
class CMFCApplication5Dlg;

class Cchaild : public CDialogEx
{
	DECLARE_DYNAMIC(Cchaild)
	
	CMFCApplication5Dlg* m_plg;
	void dilver(CMFCApplication5Dlg* m_mlg)
	{
		m_plg = m_mlg;
	}
	
...

}
~~~

#AppDlg.cpp(자식)
~~~c++
// 부모 해더 파일 include
void Cchaild::OnBnClickedButton1()
{
	m_plg->SetDlgItemInt(IDC_EDIT1, 100);
}
~~~

###### [모달,모달리스](#모달모달리스)
###### [Top](#top)

<br/>
<br/>

# 모달, 모달리스 만들때 다른 dialog호출하기
  - 모달리스 : create할때 그 인자에, 꼭 연결되어 있는 dialog를 호출하지 않고 다른 dialog를 호출해도 호출이됨(모달리스는 예시 없이 간단하게 이렇게 끝..!)
  - 모달 : 플래그를 주던, 다른 방법을 주던 어떠한 방법을 해서 생성자를 만들때 연결된 Dialog 를 생성시키면 된다(아래 예시 확인하기..!)

<br/>

#AppDlg.h
~~~c++
// 생성자 추가하기
CD1(int flage, CWnd* pParent = NULL);   // 표준 생성자입니다.

// 대화 상자 Dialog 아이디 추가하기
	enum {
		IDD = IDD_DIALOG2,
		IDD2 = IDD_DIALOG1
		};
~~~

<br/>

#AppDlg.cpp
~~~c++
// 생성자를 통해서 생성자 만들기
// 만들때 Dialog 아이디를 줘서 연결하면 됨
CD1::CD1(int flage, CWnd* pParent /*=NULL*/)
	: CDialogEx(CD1::IDD2, pParent)
{

}

// 이런 식으로 사용 할 수도 있으니 편한 방법을 이용해서 쓰면 될듯함
CD1::CD1(int Dialog, CWnd* pParent /*=NULL*/)
	: CDialogEx(Dialog, pParent)
{

}
~~~

###### [모달,모달리스](#모달모달리스)
###### [Top](#top)

<br/>
<br/>

***

# 다양한 함수

  - 다양한 함수에 대한설명들

    - [MoveWindows](#movewindows)
    - [SetWindowPos](#setwindowpos)
    - [GetWindowRect(),GetClientRect() (윈도우 좌표, 클라이언트 좌표)](#getwindowrectgetclientrect-윈도우-좌표-클라이언트-좌표)
    - [ShowWindow(),EnableWindow() (윈도우 활성, 비활성 및 숨김, 보임)](#showwindowenablewindow-윈도우-활성-비활성-및-숨김-보임)
    - [윈도우 특정 부분 투명화 하기](#윈도우-특정-부분-투명화-하기)
    - [윈도우 모양 바꾸기](#윈도우-모양-바꾸기)
    - [Dialog Control 포커스 맞추기](#dialog-control-포커스-맞추기)
    - [GetPrivateProfileString(),WritePrivateProfileString() (ini파일 읽기, 쓰기)](#getprivateprofilestringwriteprivateprofilestring-ini파일-읽기-쓰기)
    - [time(NULL), localtime_s(), SYSTEMTIME(현재 시간, 날짜 출력)](#timenull-localtime_s-systemtime현재-시간-날짜-출력)
    - [SetTimer() (타이머 사용하기)](#settimer-타이머-사용하기)
    - [RegisterHotKey() (시스템 전역 단축키 지정하기)](#registerhotkey-시스템-전역-단축키-지정하기)

###### [다양한 함수](#다양한-함수)
###### [Top](#top)

<br/>
<br/>

# MoveWindows

  - 윈도우의 위치와 크기를 변경하는 함수이다.
  - 최상단 좌표는 최상위 윈도우일 경우에는 화면 좌표이고, 자식 윈도우 일때에는 부모윈도우의 작업영역 내에서의 좌표가 된다.(dialog의 style이 child일 경우를 말하는것 같다!)

<br/>

~~~c++
// 함수의 원형
BOOL MoveWindow(     
	HWND hWnd,         	//변경할 윈도우의 핸들
	int X,                 //x좌표
	int Y,                 //y좌표
	int nWidth,        	//윈도우의 넓이
	int nHeight,           //윈도우의 높이
	BOOL bRepaint      	//TRUE면 새로그림 FALSE면 새로 그리지 않음
);
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#AppDlg.cpp
~~~c++
// 현재 윈도우 OnInitDialog 안에서 MoveWindow(0, 0, x, y); 를 사용하면 된다
BOOL CMFCApplication5Dlg::OnInitDialog()
{
	MoveWindow(0, 0, x, y);

	CDialogEx::OnInitDialog();
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#AppDlg.cpp(부모)
~~~c++
// 부모가 자식에 대하여 사용할 때, 자식 컨트롤을 핸들로 줘야 한다.
void CMFCApplication5Dlg::OnBnClickedButton1()
{
	chaild = new Cchaild;
	chaild->Create(IDD_DIALOG1);
	chaild->ShowWindow(SW_SHOW);
	chaild->MoveWindow(0, 0, 500, 500);
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#AppDlg.cpp(부모)
~~~c++
// GetWindowRect() 를 이용하여 다이얼로그의 자체의 width와 height를 알 수 있다.
void CMFCApplication5Dlg::OnBnClickedButton1()
{
	CRect r;
	chaild = new Cchaild;
	chaild->Create(IDD_DIALOG1, this);
	chaild->ShowWindow(SW_SHOW);
	chaild->GetWindowRect(&r);
	chaild->MoveWindow(0, 0, r.Width(), r.Height());
}
~~~

###### [다양한 함수](#다양한-함수)
###### [Top](#top)

<br/>
<br/>

# SetWindowPos

  - MoveWindows의 역할 이상을 할 수 있음
  - MoveWindows에서 추가적으로 크기만 또는 위치만 따로 이동 가능한 함수
  - 다양한 플래그로 다양한 표현 가능
  - z순서도 조절 가능

<br/>

~~~c++
// 함수의 원형
BOOL SetWindowPos(      
	HWND hWnd,               //윈도우 핸들
	const CWnd* pWndlnserAfter,	//z오더 설정
	int X,               	//x좌표
	int Y,               	//y좌표
	int ox,                  //넓이
	int oy,                  //높이
	UINT uFlags          	//플래그
);

//pWndlnserAfter
CWnd::wndTop : Z-order를 최상위로
CWnd::wndBottom : Z-order를 최상위로
CWnd::wndTopMost : Z-order를 최상위로 하고 시스템 윈도우 속성을 갖습니다.
CWnd::wndNoTopMost : 일반 윈도우 중 최상위 윈도우가 되도록합니다.

//uFlags
SWP_HIDEWINDOW : 윈도우가 화면에서 사라저라
SWP_SHOWWINDOW : 윈도우가 화면에 나타나라
SWP_NOACTIVATE : 윈도우를 활성화시키지 않겠다
SWP_NOMOVE : 윈도우를 움직이지 않겠다. X,Y값 무시 
SWP_NOREDRAW : 윈도우를 다시 그리지 않겠다.
SWP_NOSIZE : 크기를 변경하지 않겠다. cx,cy 값 무시
SWP_NOZORDER : Z-order 변경하지 않겠다. hWndInsertAfter 값 무시
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#AppDlg.cpp
~~~c++
// 현재 윈도우 OnInitDialog 안에서 MoveWindow(0, 0, x, y); 를 사용하면 된다
BOOL Cchaild::OnInitDialog()
{
	SetWindowPos(NULL, 0, 0, 500, 500, SWP_NOACTIVATE|SWP_NOOWNERZORDER);

	CDialogEx::OnInitDialog();
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#AppDlg.cpp(부모)
~~~c++
// GetWindowRect() 를 이용하여 다이얼로그의 자체의 width와 height를 알 수 있다.
void CMFCApplication5Dlg::OnBnClickedButton1()
{
	CRect r;
	chaild = new Cchaild;
	chaild->Create(IDD_DIALOG1, this);
	chaild->ShowWindow(SW_SHOW);
	chaild->GetWindowRect(&r);
	chaild->SetWindowPos(&CWnd::wndTop, 0, 0, 500, 500, SWP_NOACTIVATE|SWP_NOOWNERZORDER);
}
~~~

###### [다양한 함수](#다양한-함수)
###### [Top](#top)

<br/>
<br/>

# GetWindowRect(),GetClientRect() (윈도우 좌표, 클라이언트 좌표)
  - 일반적인 윈도우 화면에서 GetWindowRect() 함수를 사용하면 내 화면의 맨 왼쪽, 맨 오른쪽을 (0 , 0)으로 잡아서 표현된다
    - 윈도우 안에 있는 자식 윈도우 또한 GetWindowRect() 함수를 쓰게 되면 내 화면의 맨 왼쪽, 맨 오른쪽을 (0 , 0)으로 잡아서 표현된다
  - 일반적인 윈도우 화면에서 GetClientRect() 함수를 사용하면, 윈도우 화면의 위쪽 Non-Client영역을 제외한 Client영역의 맨 왼쪽, 맨 오른쪽을 (0, 0)으로 잡아서 윈도우의 크기만큼 표현하게 된다.

<br/>

![image](https://user-images.githubusercontent.com/39178978/183426758-62216562-ac99-4d2b-bf8e-39dc63e5e14a.png)

<br/>

  - 아래 사진을 보면 긴 부분이 GetWindowRect()의 Width(), Height()이고, 짧은 부분이 GetClientRect()의 Width(), Height()이다.

![20220813_183331](https://user-images.githubusercontent.com/39178978/184478110-c2c6d6f0-9999-4e14-82b0-57abd6eb923e.png)

<br/>

  - 만약, 사진을 화면에 출력할때 사진크기로 위도우의 화면 크기를 조정하고 싶다면 "사진크기 + GetWindowRect()의 Width(), - GetClientRect()의 Width()'를 해야 한다.(Height도 마찬가지)

~~~C++
CRect wr;
GetWindowRect(&wr);
CRect cr;
GetClientRect(&cr);

extra_w = wr.Width() - cr.Width();
extra_h = wr.Height() - cr.Height();

SetWindowPos(NULL, 0, 0, m_Small_image_width + extra_w, m_Small_image_height + extra_h, SWP_NOMOVE);
~~~

###### [다양한 함수](#다양한-함수)
###### [Top](#top)

<br/>
<br/>

# ShowWindow(),EnableWindow() (윈도우 활성, 비활성 및 숨김, 보임)
  - ShowWindow() : 보이게, 안보이게
    - ShowWindow(SW_SHOW) : 윈도우 보이기 활성화
    - ShowWindow(SW_HIDE) :  윈도우 숨기기
    - ShowWindow(SW_SHOWMAXIMIZED) : 윈도우 최대화 상태로 활성화
    - ShowWindow(SW_SHOWMINIIMIZED) : 윈도우 최소화 상태로 활성화

<br/>

~~~C++
// 함수 원형
BOOL ShowWindow(HWND hWnd, int nCmdShow)
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - EnableWindow() :  윈도우 다이얼로그 또는, 컨트롤에 대한 활성화, 비활성화 조절
    - EnableWindow(TRUE) : 활성화
    - EnableWindow(FALSE) : 비활성화

~~~C++
// 함수 원형
BOOL EnableWindow(BOOL bEnable = TRUE)
~~~

###### [다양한 함수](#다양한-함수)
###### [Top](#top)

<br/>
<br/>

# 윈도우 특정 부분 투명화 하기
  - Dialog속성 - 계층화 True 로 변경
  - SetLayeredWindowAttributes키워드를 쓰면 지정된 컬러가 있는 곳을 투명화 시킴(하지만 이것을 쓰지 않고 계층화만 True이면 그냥 창 전부가 투명화가 되어서 안보이게 됨)
  - SetLayeredWindowAttributes(0, 255, LWA_ALPHA); 이렇게 쓰면 완전히 보이게 되고 255를 낮춘 만큼 윈도우가 투명화가 진행됨


#AppDlg.cpp
~~~C++
BOOL CMFCApplication1Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

SetLayeredWindowAttributes(RGB(255, 100, 10), 0, LWA_COLORKEY);

}

...

void CMFCApplication1Dlg::OnPaint()
{
	CPaintDC dc(this); // 그리기를 위한 디바이스 컨텍스트입니다.

	if (IsIconic())
	{

		SendMessage(WM_ICONERASEBKGND, reinterpret_cast<WPARAM>(dc.GetSafeHdc()), 0);

		// 클라이언트 사각형에서 아이콘을 가운데에 맞춥니다.
		int cxIcon = GetSystemMetrics(SM_CXICON);
		int cyIcon = GetSystemMetrics(SM_CYICON);
		CRect rect;
		GetClientRect(&rect);
		int x = (rect.Width() - cxIcon + 1) / 2;
		int y = (rect.Height() - cyIcon + 1) / 2;

		// 아이콘을 그립니다.
		dc.DrawIcon(x, y, m_hIcon);
	}
	else
	{
		dc.FillSolidRect(10, 10, 100, 100, RGB(255, 100, 10));
		//CDialogEx::OnPaint();
	}
}

~~~

![image](https://user-images.githubusercontent.com/39178978/182017389-c0cd387a-37b0-4db3-beb0-407b8c44b1b9.png)

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  - 마우스 클릭한 후 투명화를 하고 싶을때
  - 이때를 레이어 속성을 꺼두고 클릭시에 레이어 속성을 추가하는 방향으로 설정한다
  - OnPaint()를 거치기 위한 Invalidate()를 따로 호출하지 않아도 적용 된다

#AppDlg.cpp
~~~C++
void CMFCApplication1Dlg::OnPaint()
{
	CPaintDC dc(this); // 그리기를 위한 디바이스 컨텍스트입니다.

	if (IsIconic())
	{

		SendMessage(WM_ICONERASEBKGND, reinterpret_cast<WPARAM>(dc.GetSafeHdc()), 0);

		// 클라이언트 사각형에서 아이콘을 가운데에 맞춥니다.
		int cxIcon = GetSystemMetrics(SM_CXICON);
		int cyIcon = GetSystemMetrics(SM_CYICON);
		CRect rect;
		GetClientRect(&rect);
		int x = (rect.Width() - cxIcon + 1) / 2;
		int y = (rect.Height() - cyIcon + 1) / 2;

		// 아이콘을 그립니다.
		dc.DrawIcon(x, y, m_hIcon);
	}
	else
	{
		dc.FillSolidRect(10, 10, 100, 100, RGB(255, 100, 10));
		//CDialogEx::OnPaint();
	}
}

...

void CMFCApplication1Dlg::OnLButtonDown(UINT nFlags, CPoint point)
{
	int wnd_style = ::GetWindowLong(m_hWnd, GWL_EXSTYLE); // 윈도우의 확장 속성을 값을 얻어옴
	if (!(wnd_style & WS_EX_LAYERED)) // 현재 윈도우에 레이어 속성이 없다면
	{
		::SetWindowLong(m_hWnd, GWL_EXSTYLE, wnd_style | WS_EX_LAYERED); // 레이어 속성을 추가한다
	}
	SetLayeredWindowAttributes(RGB(255, 100, 10), 0, LWA_COLORKEY);


	CDialogEx::OnLButtonDown(nFlags, point);
}
~~~

###### [다양한 함수](#다양한-함수)
###### [Top](#top)

<br/>
<br/>

# 윈도우 모양 바꾸기
  - 윈도우 모양이 항상 네모난 것이 아니라, 다양한 모양으로 만들어 낼 수 있다.

<br/>

~~~C++
//윈도우 리전을 생성하는 API
- CreatePolygonRgn() : 다각형
- CreateRectRgn() : 사각형
- CreateEllipticRgn() : 원

//만들어진 윈도우 리전을 화면에 세팅하는 함수
- CombineRgn() : 만들어진 리전을 합침
- SetWindowRgn() : 리전을 화면에 세팅
~~~

<br/>

#AppDlg.cpp
~~~C++
BOOL CMFCApplication1Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	CRgn rgn;
	rgn.CreateEllipticRgn(0, 0, 200, 200);
	SetWindowRgn(rgn, TRUE);

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}
~~~

<br/>

![20220827_113034](https://user-images.githubusercontent.com/39178978/187010807-7cf7a8db-f475-4eb0-9e99-9bc61b46a22b.png)

###### [다양한 함수](#다양한-함수)
###### [Top](#top)

<br/>
<br/>

# Dialog Control 포커스 맞추기

  - 1. 리소스 편집시에 맞추는 방법
    - 리소스편집 -> 서식 -> 탭순서 에서 처음으로 포커스를 맞출 컨트롤을 1번으로 설정한다
  - 2. GotoDlgCtrl() 함수 사용하기
    - OnInitDialog()에서 return을 FALSE로 해야함
      - TRUR : VC에서 지정한 탭순서 대로 가장 처음에 설정한 객체에 포커스를 준다
      - FLASE : 개발자가 지정한 위치에 포커스를 설정할 수 있게 한다.

<br/>

#AppDlg.cpp
~~~c++
// IDC_EDIT1컨트롤에 포커스를 맞춘다
BOOL CMFCApplication5Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	GotoDlgCtrl(GetDlgItem(IDC_EDIT1));

	return FALSE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}
~~~

###### [다양한 함수](#다양한-함수)
###### [Top](#top)

<br/>
<br/>

# GetPrivateProfileString(),WritePrivateProfileString() (ini파일 읽기, 쓰기)

  - GetPrivateProfileString() : ini파일 읽기

~~~c++
// C:\\temp\\setup.ini 파일에서 Title1의 Name 값을 inbuffer 사이즈만큼 읽어와라, Name값이 없으면 No Info값을 inbuffer에 저장하라.
// 첫번째 인자나 두번째 인자에 NULL을 넣으면,타이틀값이나, 키 값을 전부 가져옴(가져올때 '\0'을 넣어서 가져옴) (ex : "sdf\0xcv\0iop\0")
GetPrivateProfileString( "Title1", "Name", "No Info", inbuffer, sizeof(inbuffer), "C:\\temp\\setup.ini" );
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

- WritePrivateProfileString() : ini파일 쓰기

~~~c++
// C:\\temp\\setup.ini 파일에서 Title1의 Name 값을 outbuffer에 정보(문자열)를 써라.
WritePrivateProfileString( "Title1", "Name", outbuffer, "C:\\temp\\setup.ini" );
~~~

###### [다양한 함수](#다양한-함수)
###### [Top](#top)

<br/>
<br/>

# time(NULL), localtime_s(), SYSTEMTIME(현재 시간, 날짜 출력)

#AppDlg.cpp
~~~c++
// time(NULL) : 현재 시간을 초단위로 환산하여 보여줌, 그래서 랜덤 시드로 많이 사용하게됨
void CMFCApplication2Dlg::OnBnClickedButton1()
{
	int our_time = time(NULL);
	SetDlgItemInt(IDC_EDIT1, our_time);
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#AppDlg.cpp
~~~c++
// struct tm time선언 후, localtime_s사용하여 변환
void CMFCApplication2Dlg::OnBnClickedButton1()
{
	time_t our_time = time(NULL);
	struct tm time;
	localtime_s(&time, &our_time);

	CString str;
	str.Format(L"%d년 %d월 %d일 %d시 %d분 %d초", time.tm_year + 1900, time.tm_mon + 1, time.tm_mday, time.tm_hour, time.tm_min, time.tm_sec);

	SetDlgItemText(IDC_EDIT1, str);
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#AppDlg.cpp
~~~c++
// SYSTEMTIME 을 이용하여 쉽게 날자, 시간 출력 가능
void CMFCApplication2Dlg::OnBnClickedButton1()
{
	CString str;

	SYSTEMTIME our_time;
	GetLocalTime(&our_time);
	str.Format(L"%d년 %d월 %d일 %d시 %d분 %d초 (%dms)", our_time.wYear, our_time.wMonth, our_time.wDay, our_time.wHour, our_time.wMinute, our_time.wSecond, our_time.wMilliseconds);
	
	SetDlgItemText(IDC_EDIT1, str);
}
~~~

###### [다양한 함수](#다양한-함수)
###### [Top](#top)

<br/>
<br/>

# SetTimer() (타이머 사용하기)
  - SetTimer(1, 200, NULL)
    - 첫번째 인자는 타이머의 번호로써, 같은 번호의 타이머는 2개를 만들 수 없다. 같은 번호의 타이머를 다시 만들면 전에 있었던 타이머를 덮어 씌우게 된다
    - 두번째 인자는, 타이머의 속도 이며, 1000 = 1초 이다 200 = 0.2초 마다 타이머가 실행 된다
    - 세번째 인자는, 타이머의 실행시 마다 실행할 함수이다. NULL값을 넣으면 타이머 실행시마다 WM_TIMER 메시지를 주게 된다.
    - SetTimer의 제거는 WM_DESTROY 메시지를 추가하여 제거한다, WM_DESTROY 는 윈도우가 파괴될때 메시지가 들어온다.

<br/>

  - WM_TIMER 메시지
    - 프로젝트 -> 클래스 마법사 -> 메세지 -> WM_TIMER 추가하기(AppDlg.h, AppDlg.cpp에 함수해더,BEGIN_MESSAGE_MAP 자동으로 추가됨)

<br/>

  - WM_DESTROY  메시지
    - 프로젝트 -> 클래스 마법사 -> 메세지 -> WM_DESTROY  추가하기(AppDlg.h, AppDlg.cpp에 함수해더,BEGIN_MESSAGE_MAP 자동으로 추가됨)
    - 윈도우가 파괴될때 메시지가 들어온다

<br/>

#AppDlg.cpp
~~~c++
void CMFCApplication2Dlg::OnBnClickedButton2()
{
	SetTimer(1, 200, NULL); //WM_TIMER
}

...

// SetTimer에 NULL인자를 넣었기 때문에 WM_TIMER메시지 호출
void CMFCApplication2Dlg::OnTimer(UINT_PTR nIDEvent)
{
	if (nIDEvent == 1) // 타이머가 1번 이라면
	{
		// 실행할 함수나, 코드
	}

	CDialogEx::OnTimer(nIDEvent);
}

...

// WM_DESTROY 메시지가 들어올때 SetTimer제거
void CMFCApplication2Dlg::OnDestroy()
{
	CDialogEx::OnDestroy();

	// 타이머가 만들어지지 않아도 KillTimer를 하는것에 문제는 발생하지 않는다.
	KillTimer(1);
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - SetTimer(1, 200, Fuction)
    - 세번째 인자에 함수명을 넣어서, 함수를 호출 할 수 도 있음
    - 함수는 정해져 있는 인자를 넣을 틀대로 콜백함수로 만들어 쓸 수 있음
    - 함수의 인자
      - 첫번째 : 윈도우핸들(타이머를 발생시킨 윈도우 핸들)
      - 두번째 : WM_TIMER의 메시지 아이디
      - 세번째 : SetTimer에서 만든 타이머의 번호
      - 네번째 : 0이 들어오기 때문에 무시하면 된다.
      - 하지만 콜백 함수를 사용하는 것에는 어려움이 있고, 해당 함수를 사용하려면 h파일에 static으로 콜백 함수를 등록해야 한다. 그러나 static이라는 것은 사실상 전역함수 이므로 여러 불편 사항들이 있다. 그래서 PostMessage와 SendMessage를 활용한다

#AppDlg.cpp
~~~c++
void CMFCApplication2Dlg::OnBnClickedButton2()
{
	SetTimer(1, 200, Fuction); //WM_TIMER
}

...

// CALLBACK함수의 인자를 이렇게 만들어 사용한다.
void CALLBACK Fuction(HWND ah_wnd, UINT a_msg_id, UINT_PTR a_timer_id, DWORD a_system_time)
{
	if (a_timer_id == 1)
	{
		// 버튼은 눌렀을 때 WM_COMMAND를 발생 시키며, 어떤 버튼이 눌렸는지 확인하기 위해 MAKEWPARAM에 값을 넣어서 보낸다
		// MAKEWPARAM에 해당 컨트롤의 ID가 적인 컨트롤이 눌러졌다는 의미 이다.
		// SendMessage도 가능
		::PostMessage(ah_wnd, WM_COMMAND, MAKEWPARAM(IDC_BUTTON1, BN_CLICKED), 0);
	}
}
~~~

###### [다양한 함수](#다양한-함수)
###### [Top](#top)

<br/>
<br/>

# RegisterHotKey() (시스템 전역 단축키 지정하기)
  - SetTimer(1, 200, NULL)
    - 핫키를 등록하면 프로그램에 핸들을 쥐고 있지 않아도 어디서든 핫키로 작동 시킬 수 있다
    - 프로젝트 -> 클래스 마법사 -> 메세지 -> WM_HOTKEY 추가하기(AppDlg.h, AppDlg.cpp에 함수해더,BEGIN_MESSAGE_MAP 자동으로 추가됨)
    - RegisterHotKey(m_hWnd, 26000, 0, VK_F5)
      - 첫번째 인수 : 단축키를 눌렀을 때 발생하는 메시지를 받을 윈도우의 핸들
      - 두번째 인수 : 보낼 임의 메시지
      - 세번째 인수 : 네번째 인수에서 조합해 쓸 단축키
      - 네번째 인수 : 핫키에 사용할 단축키
    - 프로젝트 -> 클래스 마법사 -> 메세지 -> WM_DESTROY 추가하기(AppDlg.h, AppDlg.cpp에 함수해더,BEGIN_MESSAGE_MAP 자동으로 추가됨)
      - 종료전에 WM_DESTROY이용하여 핫키 등록 제거 하기

<br/>

#AppDlg.h
~~~c++
// 플레그로 이용할  int변수 하나 선언 하기
public:
	int flage;
~~~

<br/>

#AppDlg.cpp
~~~c++
BOOL CMFCApplication6Dlg::OnInitDialog()
{
	flage = 0;
	RegisterHotKey(m_hWnd, 26000, 0, VK_F5);

 ...
 
}

... 

void CMFCApplication6Dlg::OnHotKey(UINT nHotKeyId, UINT nKey1, UINT nKey2)
{
	if (nHotKeyId == 26000)
	{
		if(flage == 0)
		{
			ShowWindow(SW_HIDE);
			flage = 1;
		}
		else
		{
			ShowWindow(SW_SHOW);
			flage = 0;
		}
	}

	CDialogEx::OnHotKey(nHotKeyId, nKey1, nKey2);
}

...

void CMFCApplication6Dlg::OnDestroy()
{
	CDialogEx::OnDestroy();

	UnregisterHotKey(m_hWnd, 26000);
}
~~~

###### [다양한 함수](#다양한-함수)
###### [Top](#top)

<br/>
<br/>

***

# 문자 다루기

  - 문자 크기를 바꾸는 변수 및, 어떻게 작동 시키는지 

    - [문자 크기 바꾸기 (CFont)](#문자-크기-바꾸기-cfont)
    - [문자 크기 바꾸기 (LOGFONT)](#문자-크기-바꾸기-logfont)
    - [DrawText (텍스트를 도형 안에 출력하기)](#drawtext-텍스트를-도형-안에-출력하기)
    - [TextOut (텍스트를 원하는 위치에 출력)](#textout-텍스트를-원하는-위치에-출력)

###### [문자 다루기](#문자-다루기)
###### [Top](#top)

<br/>
<br/>

# 문자 크기 바꾸기 (CFont)
  - 문자 크기 바꾸기
  - 문자 Weight도 설정 
  - 다른 Dialog ID 전부다 가능

#AppDlg.cpp
~~~C++
CFont f;
~~~

#AppDlg.cpp
~~~C++
BOOL CMFCApplication1Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();
	
	f.CreatePointFont(300, L"굴림");
	GetDlgItem(IDC_BUTTON1)->SetFont(&f);

	return TRUE;
}
~~~

###### [문자 다루기](#문자-다루기)
###### [Top](#top)

<br/>
<br/>

# 문자 크기 바꾸기 (LOGFONT)
  - LOGFONT 를 선언해, 내용을 정하고, CFont 를 선언해서 그것을 적용 시키는 방식
  - 문자 크기 바꾸기
  - 문자 Weight도 설정 가능
  - 다른 Dialog ID 전부다 가능

#AppDlg.cpp
~~~C++
CFont m_fnstatic_num;
LOGFONT lf = {0,};
lf.lfHeight = 20;
lf.lfWeight = FontStyleRegular;
lstrcpy(lf.lfFaceName, _T("KoPub돋움체 Medium"));
m_fnstatic_num.CreateFontIndirect(&lf);
		GetDlgItem(IDC_STATIC_NUM)->SetFont(&m_fnstatic_num);

// 다른곳에 위에 선언한 LOGFONT 를 똑같이 적용 시키는 것은 CFont 변수를 만들어서 연결 시켜 주기만 하면 된다..! 
~~~

###### [문자 다루기](#문자-다루기)
###### [Top](#top)

<br/>
<br/>

# DrawText (텍스트를 도형 안에 출력하기)
  - 텍스트를 출력할 위치는 CRect 구조체를 이용해서 값을 전달 해야 한다

#AppDlg.cpp
~~~C++
// 여러줄을 표시하기 위해서 str안에 \n을 사용 했으며, top값을 더해줌으로써 임시로 텍스트의 위치를 맞출 수 있음
void CMFCApplication2Dlg::OnPaint()
{
	CPaintDC dc(this); // 그리기를 위한 디바이스 컨텍스트입니다.

	if (IsIconic())
	else
	{
		CRect r;
		r.SetRect(10, 10, 300, 300);
		CString str = _T("아이우\n에오");
		dc.Rectangle(r);
		r.top += 130;
		dc.DrawText(str, r, DT_CENTER | DT_VCENTER);
	}
}
~~~

<br/>

![20220820_222146](https://user-images.githubusercontent.com/39178978/185748099-8b019eba-48f4-49e0-a3aa-d7820d9d3231.png)

<br/>

  - 마지막 인수

<br/>

![20220820_222130](https://user-images.githubusercontent.com/39178978/185748085-819b26c2-4a36-46a4-878b-7b10ec3c210b.png)

###### [문자 다루기](#문자-다루기)
###### [Top](#top)

<br/>
<br/>

# TextOut (텍스트를 원하는 위치에 출력)
  - 여러줄 출력이 불가능

#AppDlg.cpp
~~~C++
// 여러줄을 표시하기 위해서 str안에 \n을 사용 했으며, top값을 더해줌으로써 임시로 텍스트의 위치를 맞출 수 있음
void CMFCApplication2Dlg::OnPaint()
{
	CPaintDC dc(this); // 그리기를 위한 디바이스 컨텍스트입니다.

	if (IsIconic())
	else
	{
		CString str = _T("아이우에오");
		dc.SetBkMode(TRANSPARENT); // 글자의 배경을 투명으로 설정
		dc.TextOut(100, 100, str, lstrlen(str));
	}
}
~~~

<br/>

![20220820_222516](https://user-images.githubusercontent.com/39178978/185748206-a9fd8e37-4645-41fa-aff5-e51913f8a9fc.png)

###### [문자 다루기](#문자-다루기)
###### [Top](#top)

<br/>
<br/>

***

# CImage (사진출력)

  - 사진을 출력하는 class

    - [확대, 축소, 부분 출력](#확대-축소-부분-출력)
    - [AlphaBlend](#alphablend)
    - [Dialog크기로 출력하기](#dialog크기로-출력하기)
    - [사진 크기로 Dialog크기 변경하기](#사진-크기로-dialog크기-변경하기)

###### [CImage (사진출력)](#cimage-사진출력)
###### [Top](#top)

<br/>
<br/>

# 확대, 축소, 부분 출력
  - 위치 조절해서 출력
  - 원본 사진 확대, 축소 출력 
  - 부분만 출력

<br/>

#AppDlg.h
~~~c++
// CImage클래스를 사용할 수 있게 해더파일에 선언 한다.
CImage m_image;
~~~

<br/>

#AppDlg.cpp
~~~c++
// m_image.Draw(dc, 0, 0) : 0 ,0 위치에서부터 사진을 출력한다
BOOL CMFCApplication2Dlg::OnInitDialog()
{
	m_image.Load(L"BarcodePrint.png");

	CDialogEx::OnInitDialog();
}

. . .

void CMFCApplication2Dlg::OnPaint()
{
	CPaintDC dc(this); // 그리기를 위한 디바이스 컨텍스트입니다.


	if (IsIconic())
	{
	  . . .
	}
	else
	{
		m_image.Draw(dc, 0, 0);
		
		//CDialogEx::OnPaint();
	}
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#AppDlg.h
~~~c++
// CImage클래스를 사용할 수 있게 해더파일에 선언 한다.
CImage m_image;
~~~

<br/>

#AppDlg.cpp
~~~c++
// m_image.Draw(dc, 0, 0, w/2, h/2) : 0 ,0 위치에서부터 사진을 출력하고, 원본의 사진을 w/2, h/2만큼 축소해서 출력한다
BOOL CMFCApplication2Dlg::OnInitDialog()
{
	m_image.Load(L"BarcodePrint.png");

	CDialogEx::OnInitDialog();
}

. . .

void CMFCApplication2Dlg::OnPaint()
{
	CPaintDC dc(this); // 그리기를 위한 디바이스 컨텍스트입니다.


	if (IsIconic())
	{
	  . . .
	}
	else
	{
		int w = m_image.GetWidth();
		int h = m_image.GetHeight();
		
		m_image.Draw(dc, 0, 0, w/2, h/2);

		//CDialogEx::OnPaint();
	}
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#AppDlg.h
~~~c++
// CImage클래스를 사용할 수 있게 해더파일에 선언 한다.
CImage m_image;
~~~

<br/>

#AppDlg.cpp
~~~c++
// m_image.Draw(dc, 0, 0, 200, 200, 50, 50, 200, 200) : 0 ,0 위치에서부터 사진을 출력하고, 원본의 사진을 200, 200만큼 축소해서 출력하고, (50,50)에서 (200,200)사이의 부분만 잘라서 출력한다
BOOL CMFCApplication2Dlg::OnInitDialog()
{
	m_image.Load(L"BarcodePrint.png");

	CDialogEx::OnInitDialog();
}

. . .

void CMFCApplication2Dlg::OnPaint()
{
	CPaintDC dc(this); // 그리기를 위한 디바이스 컨텍스트입니다.


	if (IsIconic())
	{
	  . . .
	}
	else
	{
		/*int w = m_image.GetWidth();
		int h = m_image.GetHeight();*/
		
		m_image.Draw(dc, 0, 0, 200, 200, 50, 50, 200, 200);


		//CDialogEx::OnPaint();
	}
}
~~~

###### [CImage (사진출력)](#cimage-사진출력)
###### [Top](#top)

<br/>
<br/>

# AlphaBlend
  - alphablend조절후 출력

#AppDlg.h
~~~c++
// CImage클래스를 사용할 수 있게 해더파일에 선언 한다.
CImage m_image;
~~~

<br/>

#AppDlg.cpp
~~~c++
BOOL CMFCApplication1Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	m_image.Load(_T("11.png"));
}

...

void CMFCApplication1Dlg::OnPaint()
{
	CPaintDC dc(this); // 그리기를 위한 디바이스 컨텍스트입니다.

	if (IsIconic())
	else
	{
		m_image.AlphaBlend(dc, 0, 0, 150); // 알파 값은  0~255 사이
	}
}
~~~

###### [CImage (사진출력)](#cimage-사진출력)
###### [Top](#top)

<br/>
<br/>

# Dialog크기로 출력하기
  - Dialog의 크기를 알아낸후, 사진을 Dialog크기로 조절해 출력하기

<br/>

#AppDlg.h
~~~c++
// CImage클래스를 사용할 수 있게 해더파일에 선언 한다.
// 사진 크기 변경시 CRect 을 사용하여 변경할 수 있게, 해더파일에 선언 한다.
CImage m_image;
CRect r;
~~~

<br/>

#AppDlg.cpp
~~~c++
// Dialog 크기를 변경했을시 사진 크기를 Dialog 크기로 변경하기
BOOL CMFCApplication1Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	GetClientRect(&r);
	m_image.Load(_T("11.png"));
}

...

void CMFCApplication1Dlg::OnPaint()
{
	CPaintDC dc(this); // 그리기를 위한 디바이스 컨텍스트입니다.

	if (IsIconic())
	else
	{
		m_image.Draw(dc, r);
	}
}

...

// WM_SIZE메시지 등록, Dialog크기변경시 호출
void CMFCApplication1Dlg::OnSize(UINT nType, int cx, int cy)
{
	CDialogEx::OnSize(nType, cx, cy);

	GetClientRect(&r);
	Invalidate(); // OnPaint메시지 호출
~~~

###### [CImage (사진출력)](#cimage-사진출력)
###### [Top](#top)

<br/>
<br/>

# 사진 크기로 Dialog크기 변경하기
  - 사진 크기를 확인한후, 그 크기로 Dialog의 크기를 조절하기
  - [GetWindowRect(),GetClientRect() (윈도우 좌표, 클라이언트 좌표)](#getwindowrectgetclientrect-윈도우-좌표-클라이언트-좌표) 참고하기

###### [CImage (사진출력)](#cimage-사진출력)
###### [Top](#top)

<br/>
<br/>

***

# Bitmap 리소스, 패턴 CBrush
  - MFC자체 에서 Bitmap 리소스를 그릴 수 있으며, 그것을 CBrush로 출력할 수 있다. 또한 외부에서 그림을 불러와서 CBrush로 출력이 가능하다.
  - Bitmap 리소스 추가 방법은, Dialog 리소스 추가 화면에서 마우스 오른쪽 클릭을 통해서 Bitmap 리소스를 추가할 수 있다.

    - [Bitmap 리소스를 패턴 CBrush로 출력](#bitmap-리소스를-패턴-cbrush로-출력)
    - [CBrush중심점 이동하여 출력](#cbrush중심점-이동하여-출력)
    - [외부그림을 패턴 CBrush로 출력](#외부그림을-패턴-cbrush로-출력)

###### [Bitmap 리소스, 패턴 CBrush](#bitmap-리소스-패턴-cbrush)
###### [Top](#top)

<br/>
<br/>

# Bitmap 리소스를 패턴 CBrush로 출력
  - 리소스에 Bitmap을 추가 하고, 도형을 마음대로 그릴 수 있음
  - 만든 도형을 CBrush로 로드하여 사용함

<br/>

#AppDlg.h
~~~c++
// Bitmap 리소스를 로드할 CBrush변수 선언
private:
	CBrush brush;
	CBitmap my_bmp;
~~~

<br/>

#AppDlg.cpp
~~~c++
BOOL CMFCApplication2Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

my_bmp.LoadBitmap(IDB_BITMAP1); // Bitmap 로드
brush.CreatePatternBrush(&my_bmp); // brush로 Bitmap을 설정
}

. . .

void CMFCApplication2Dlg::OnPaint()
{
	CPaintDC dc(this); // 그리기를 위한 디바이스 컨텍스트입니다.

		CBrush* old_brush = dc.SelectObject(&brush);
		dc.Rectangle(0, 0, 96, 48);
		dc.SelectObject(old_brush);

}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 마우스 클릭으로 브러쉬 사용하기
  - 마우스 클릭 메시지를 추가하여 작성

<br/>

#AppDlg.h
~~~c++
// Bitmap 리소스를 로드할 CBrush변수 선언
private:
	CBrush brush;
	CBitmap my_bmp;
~~~

<br/>

#AppDlg.cpp
~~~c++
// 이렇게 패턴 브러쉬를 사용한다면, 내가 만들어 놓은 패턴 비트맵이 정확히 중간으로 잘 나올것 같지만 그렇지 않다.
// 비트맵에 그려진 부분은 맨왼쪽, 맨 위쪽을 0, 0 기준으로 그려지기 때문에 마우스 클릭시 비트맵의 그림이 정 중간으로 나오지 않는다.

BOOL CMFCApplication2Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

my_bmp.LoadBitmap(IDB_BITMAP1); // Bitmap 로드
brush.CreatePatternBrush(&my_bmp); // brush로 Bitmap을 설정
}

. . .

void CMFCApplication2Dlg::OnLButtonDown(UINT nFlags, CPoint point)
{

	CClientDC dc(this);

	CBrush* old_brush = dc.SelectObject(&brush);
	dc.Rectangle(point.x - 24, point.y - 24, point.x + 24, point.y + 24);
	dc.SelectObject(old_brush);

	CDialogEx::OnLButtonDown(nFlags, point);
}
~~~

###### [Bitmap 리소스, 패턴 CBrush](#bitmap-리소스-패턴-cbrush)
###### [Top](#top)

<br/>
<br/>

# CBrush중심점 이동하여 출력
  - 마우스 클릭으로 브러쉬 사용하기(비트맵 그림을 중간으로 나오게 하기)
  - SetBrushOrg사용하기

<br/>

#AppDlg.h
~~~c++
// Bitmap 리소스를 로드할 CBrush변수 선언
private:
	CBrush brush;
	CBitmap my_bmp;
~~~

<br/>

#AppDlg.cpp
~~~c++
//SetBrushOrg 을 사용하여 비트맵이 그려지는 중심을 바꿈으로써 마우스 클릭시에도, 비트맵에 그려놓은 것들이 중간으로 나오게 한다
BOOL CMFCApplication2Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

my_bmp.LoadBitmap(IDB_BITMAP1); // Bitmap 로드
brush.CreatePatternBrush(&my_bmp); // brush로 Bitmap을 설정
}

. . .

void CMFCApplication2Dlg::OnLButtonDown(UINT nFlags, CPoint point)
{

	CClientDC dc(this);

	CBrush* old_brush = dc.SelectObject(&brush);
	dc.SetBrushOrg(point.x - 24, point.y - 24);
	dc.Rectangle(point.x - 24, point.y - 24, point.x + 24, point.y + 24);
	dc.SelectObject(old_brush);

	CDialogEx::OnLButtonDown(nFlags, point);
}
~~~

###### [Bitmap 리소스, 패턴 CBrush](#bitmap-리소스-패턴-cbrush)
###### [Top](#top)

<br/>
<br/>

# 외부그림을 패턴 CBrush로 출력
  - 외부의 그림을 CImage 불러온 다음, CBitmap으로 변환해서 CBrush의 패턴 브러쉬로 사용하기

<br/>

#AppDlg.h
~~~c++
private:
	CImage m_image
	CBrush m_brush
~~~

<br/>

#AppDlg.cpp
~~~c++
BOOL CMFCApplication2Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	m_image.Load(_T("l.png"));

	CBitmap* p_bmp = CBitmap::FromHandle(m_image);
	m_brush.CreatePatternBrush(p_bmp);
}
~~~

###### [Bitmap 리소스, 패턴 CBrush](#bitmap-리소스-패턴-cbrush)
###### [Top](#top)

<br/>
<br/>

***

# CDC, CPaintDC, CClientDC, CWindowDC (화면출력)
  - CDC : CPaintDC, CClientDC, CWindowDC 클래스의 공통 부모 클래스
    - 특정 상황에 맞춰서 생성하는 용도가 아닌 다형성을 사용하기 위해서 사용 하는 클래스, 직접 생성시에는 생성자에 인자가 없는 기본 생성자가 제공
  - CPaintDC : 클라이언트 영역에 출력할 때 WM_PAINT 메시지 핸들러에서 사용시
  - CClientDC : 클라이언트 영역에 출력할 때, WM_PAINT 메시지 핸들러를 제외한 다른 곳에서 사용시
  - CWindowDC : 윈도우 제목 영역 같은 Non_Client 영역에 사용

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 도형그리기
    - 직사각형 : Rectangle(x1, y1, x2, y2)
    - 타원 : Ellipse(x1, y1, x2, y2)
    - 테두리가 둥근 직사각형 : RoundRect(x1, y1, x2, y2, x3, y3)
    - 다각형 : Polygon()

#AppDlg.cpp
~~~C++
// 다각형 그리기
void CMFCApplication2Dlg::OnLButtonDown(UINT nFlags, CPoint point)
{
	CClientDC dc(this);
	POINT ap[3] = {{100,100}, {200,300}, {50, 300}};
	dc.Polygon(ap, 3);

	CDialogEx::OnLButtonDown(nFlags, point);
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 선 그리기
    - MoveTo(x, y) : x, y위치로 옮김
    - LineTo(x, y) : 이전 x, y 위치에서 현재  x, y 위치로 선을 그림
    - 펜의 형태나, 두께, 컬러를 변경하고 싶다면 CPen 정의하여 바꾸기

#AppDlg.cpp
~~~C++
void CMFCApplication2Dlg::OnLButtonDown(UINT nFlags, CPoint point)
{
	CClientDC dc(this);
	dc.MoveTo(100,100);
	dc.LineTo(200,200);

	CDialogEx::OnLButtonDown(nFlags, point);
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 선 그리기
    - 펜의 형태나, 두께, 컬러를 변경하고 싶다면 CPen 정의하여 바꾸기

#AppDlg.cpp
~~~C++
// 펜의 형태나, 두께, 컬러를 변경하고 싶다면 CPen 정의하여 바꾸기
void CMFCApplication2Dlg::OnLButtonDown(UINT nFlags, CPoint point)
{
	CClientDC dc(this);
	CPen p;
	p.CreatePen(PS_SOLID, 5, RGB(255, 0, 0)); // 펜 모양, 펜 두께, 펜 색
	CPen* oldpen = dc.SelectObject(&p);

	dc.MoveTo(100,100);
	dc.LineTo(200,200);

	CDialogEx::OnLButtonDown(nFlags, point);
}
~~~

###### [CDC, CPaintDC, CClientDC, CWindowDC (화면출력)](#cdc-cpaintdc-cclientdc-cwindowdc-화면출력)
###### [Top](#top)

<br/>
<br/>

***

# 장치 DC, 메모리 DC (깜박임 없애기)
  - 보통은 장치 DC에 바로 연결해서 도형이나 그림을 출력하게 되지만, 많은 것들을 출력하려고 할때 작은 하나하나를 전부 장치 DC로 출력하려고 할때, 너무 많이 장치 DC가 출력되어 깜박임이 발생하게 된다. 이것을 발생하지 않게 하기위해서는 메모리 DC에 전부 출력한후, 마지막에 보여줄 1장을 장치 DC에 출력하게 되면, 장치 DC의 사용을 현저하게 줄일 수 있게 되기 때문에 깜박임이 발생하지 않게 된다.

<br/>

  - 메모리 DC를 사용할때에, 메모리 DC에 한번씩 그릴때마다 전체 화면을 FillSolidRect로 덮어 주어야 그림이 리셋되기 때문에 위쪽에 코드를 한줄 넣어 주어야 한다
  - BitBlt함수를 OnPaint에 사용할때에, 어떤 상황에서 Invalidate()함수를 사용하여 WM_PAINT 메시지를 발생시켜 OnPaint를 호출하는데, 이때 Invalidate()를 사용하면 깜박임이 심해진다(이유 : Invalidate() == Invalidate(TRUE), WM_PAINT를 호출하는데 장치dc에 전체 화면을 한번 지우고 호출하라고함, 따라서 장치 dc가 전체 화면을 한번 지우고, 다시 장치 dc가 그림을 그림)
  - 이때는 Invalidate(FALSE)를 해주면 장치 dc를 전체 화면을 다시 지우지 않음 즉, 메모리 dc 자체에서 화면을 한번 덮어서 지우기 때문에 장치 dc에서 전체 화면을 지울 필요가 없음

<br/>

#AppDlg.h
~~~C++
CDC mem_dc; // 장치 dc와 바꿔 채기할 dc
CBitmap mem_bmp; // 메모리dc의 비트맵을 바꿔채기할 비트맵
~~~

<br/>

#AppDlg.cpp
~~~C++
CClientDC dc(this); // 메모리dc와 비트맵에게 정보를 줄 장치dc
mem_dc.CreateCompatibleDC(&dc); // 장치 dc의 기본적인 정보를 가져가기
mem_bmp.CreateCompatibleBitmap(&dc, w, h); // 장치 dc의 기본적인 정보를 가져가기, w,h로 장치 dc와 같은 크기 지정하기
mem_dc.SelectObject(&mem_bmp); // 메모리dc가 만들어진 비트맵을 바꿔치기 하기

// FillSolidRect 같은 것으로 맨 위쪽에서 한번 모든 화면을 덮어줘야 화면이 겹치지 않게 보인다, ,따라서 다른 곳에서 Invalidate() 호출시에 FALSE로 호출해줘도 무방하다
// 여기서 mem_dc에 그림 그리기

dc.BitBlt(0, 0, w, h, &mem_dc, 0, 0, SRCCOPY); // 장치 dc에 메모리 dc를 바꿔치기 해서 출력하기
~~~

###### [장치 DC, 메모리 DC (깜박임 없애기)](#장치-dc-메모리-dc-깜박임-없애기)
###### [Top](#top)

<br/>
<br/>

***

# CFileDialog (파일열기 대화 상자) 사용법 및 사진불러오기
  - MFC에서 제공하는 CFileDialog(파일 열기 대화 사장)의 사용법을 확인하고, 사진을 불러오는 방법에 대하여

<br/>

~~~c++
CFileDialog my_filedialog(TRUE, _T(".jpg"), _T("*.jpg"), OFN_HIDEREADONLY | OFN_NOCHANGEDIR, name_filter)

  - 첫번째 인자 : TRUE : 열기 대화상자, FALSE : 저장 대화상자
  - 두번째 인자 : 디폴트 확장자
  - 세번째 인자 : 필터
  - 네번째 인자 부터 : 읽기에 이용할 속성들
  - 마지막 인자 : 이름을 지정할 필터 목록
    - ex) wchar_t name_filter[] = _T("모든 파일 (*.*)|*.*| Jpeg 파일 (*.jpg)|*.jpg | PNG 파일 (*.png)|*.png||");
앞에 부분은 화면에 표시할 부분 뒤에 부분은 실제 작동하는 부분. 마지막에는 ||두개를 넣어서 끝을 낸다 
~~~

<br/>

#AppDlg.h
~~~c++
public:
	CImage m_image;
~~~

<br/>

#AppDlg.cpp
~~~c++
void CMFCApplication3Dlg::OnBnClickedButton1()
{
	wchar_t name_filter[] = _T("모든 파일 (*.*)|*.*| Jpeg 파일 (*.jpg)|*.jpg | PNG 파일 (*.png)|*.png||");
	CFileDialog my_filedialog(TRUE, _T(".jpg"), _T("*.jpg"), OFN_HIDEREADONLY | OFN_NOCHANGEDIR, name_filter);
	my_filedialog.m_ofn.nFilterIndex = 2; // 처음에 어떤 것을 먼저 표시해 줄지 정한다. 현재는 두번째에 적혀 있는 jpg를 표현 하게 된다

	if (IDOK == my_filedialog.DoModal())
	{
		CClientDC dc(this);
		m_image.Load(my_filedialog.GetPathName()); // CFileDialog 불러온 사진의 경로를 얻을 수 있음
		m_image.Draw(dc, 0, 0);
	}
}
~~~

###### [CFileDialog (파일열기 대화 상자) 사용법 및 사진불러오기](#cfiledialog-파일열기-대화-상자-사용법-및-사진불러오기)
###### [Top](#top)

<br/>
<br/>

***

# COLORREF (컬러 담는 변수)
  - RGB컬러를 하나 담을 수 있는 변수이다

<br/>

~~~c++
//변수 선언, 대입
COLORREF color;
color = RGB(200, 200, 200);
~~~

###### [COLORREF (컬러 담는 변수)](#colorref-컬러-담는-변수)
###### [Top](#top)

<br/>
<br/>

***

# 서브 클래싱(SubclassDlgItem)이용하여 기능변경
  - 클래스 마법사 -> 클래스추가(MFC클래스) -> 기본클래스(여기서 내가 바꾸고 싶은 CLASS를 사용하면 된다)
  - 클래스추가로 만든 cpp파일에서 메시지를 추가 하기 위한 페이지로 가면 앞에 ‘=’이 붙어 있는 경우가 있는데 이경우는 현재 이것을 사용하고 있다는 의미이다. 이것을 추가 정의 하기 위해 등록해 사용 할 수 있다.
  - GetDlgCtrlID()을 이용해서 어떤 버튼을 누르던지 다른 각각의 해당하는 버튼 ID를 보냄으로써 작업을 할 수 있다.

<br/>

#AppDlg.h
~~~c++
// 만들어둔 MyBtn 버튼 cpp의 해더를 정의하고, 클래스 변수를 정의함
private:
	MyBtn m_inc_btn, m_dec_btn;
~~~

<br/>

#AppDlg.cpp
~~~c++
// 정의한 MyBtn버튼 클래스기능을 사용할 컨트롤 ID를 SubclassDlgItem으로 연결하여 사용
BOOL CMFCApplication1Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	m_inc_btn.SubclassDlgItem(IDC_BUTTON1, this);
	m_dec_btn.SubclassDlgItem(IDC_BUTTON2, this);

}
~~~

<br/>

#MyBtn.cpp
~~~c++
// MyBtn.cpp내에서는 PostMessage와 같은 것을 이용해 메시지를 부모 에게 전송 함으로써 그 기능을 사용 한다
GetParent()->PostMessage(20000, MAKEWPARAM(GetDlgCtrlID(), 1), (LPARAM)m_hWnd);
~~~

###### [서브 클래싱(SubclassDlgItem)이용하여 기능변경](#서브-클래싱subclassdlgitem이용하여-기능변경)
###### [Top](#top)

