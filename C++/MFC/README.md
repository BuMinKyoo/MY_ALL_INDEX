###### Top

- [MFC메모리 누수 확인](#mfc메모리-누수-확인)

- <details markdown="1">
  <summary>메세지</summary>
  <div markdown="1">
  
  - [Message](#message)
    - [ON_COMMAND_RANGE](#on_command_range)
    - [WM_CTLCOLOR (컨트롤의 글꼴, 배경색 변경)](#wm_ctlcolor-컨트롤의-글꼴-배경색-변경)
    - [WM_DRAWITEM (컨트롤 Backgroud, Border, Text 그리기)](#wm_drawitem-컨트롤-backgroud-border-text-그리기)
      
  </div>
  </details>



- <details markdown="1">
  <summary>가상함수</summary>
  <div markdown="1">
  
  - [Virtual Function](#virtual-function)
    - [WindowProc](#windowproc)
    - [OnCommand](#oncommand)
    - [PreTranslateMessage](#PreTranslateMessage)
      
  </div>
  </details>



- <details markdown="1">
  <summary>모달,모달리스</summary>
  <div markdown="1">
  
  - [모달,모달리스](#모달모달리스)
    - [모달(modal)](#모달modal)
    - [모달리스(modeless)](#모달리스modeless)
    - [캐스팅 하여 전부 접근 하는법](#캐스팅-하여-전부-접근-하는법)
      
  </div>
  </details>



- <details markdown="1">
  <summary>MoveWindows,SetWindowPos</summary>
  <div markdown="1">
  
  - [MoveWindows,SetWindowPos](#movewindowssetwindowpos)
    - [MoveWindows](#movewindows)
    - [SetWindowPos](#setwindowpos)
      
  </div>
  </details>



- <details markdown="1">
  <summary>기타</summary>
  <div markdown="1">
  
  - [기타](#기타)
    - [문자 크기 바꾸기(CFont)](#문자-크기-바꾸기cfont)
    - [문자 크기 바꾸기(LOGFONT)](#문자-크기-바꾸기logfont)
    - [윈도우 특정 부분 투명화 하기](#윈도우-특정-부분-투명화-하기)
      
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

<br/>
<br/>

***

# Message

  - 일반적으로 콘솔에서 만든 프로그램은 프로그래머가 정한 순서대로 차근 차근 진행 됩낟. 하지만, 윈도우 응용 프로그램은 메세지 구동 구조를 가지고 있으며, 프로그램에 어떤 변화가 생경을때 Windows가 프로그램에게 정보를 알려주고, 프로그램은 그 정보를 받아서 다양한 동작을 하게 된다.

    - [ON_COMMAND_RANGE](#on_command_range)
    - [WM_CTLCOLOR (컨트롤의 글꼴, 배경색 변경)](#wm_ctlcolor-컨트롤의-글꼴-배경색-변경)
    - [WM_DRAWITEM (컨트롤 Backgroud, Border, Text 그리기)](#wm_drawitem-컨트롤-backgroud-border-text-그리기)

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

<br/>

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

***

# Virtual Function
  - 보통은 선언되어 있는 함수를 virtual로 선언하여 사용함이고, 프로젝트 -> 클래스 마법사 -> 가상함수 쪽에서 추가할 수 있다.
  - 프로젝트 -> 클래스 마법사 -> 가상함수에서 추가 한다면 AppDlg.h, AppDlg.cpp에 함수해더가 자동으로 추가 된다.

    - [WindowProc](#windowproc)
    - [OnCommand](#oncommand)
    - [PreTranslateMessage](#PreTranslateMessage)
  
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

#AppDlg.cpp(부모)
~~~c++
Cchaild chaild;
chaild.DoModal();
~~~

<br/>

  - 부모 -> 자식

#AppDlg.cpp(부모)
~~~c++
// 이런식으로 자식의 객체가 만들어지고, Domodal로 대화상자를 실행하기 전에 데이터를 넘겨 주면 된다
Cchaild chaild;
chaild.Setdata();
chaild.DoModal();
~~~

<br/>

  - 자식 -> 부모

#AppDlg.cpp(자식)
~~~c++
// 자식이 스스로의 창을 닫기 전에 자신의 맴버 변수에 데이터를 저장한다.
Setdata(k);
chaild.Enddialog(num);
~~~

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

<br/>

  - 자식 -> 부모 데이터 전달

#AppDlg.cpp(자식)
~~~c++
// 자식은 GetParent()을 사용해 PostMessage를 보내거나 컨트롤ID에 직접 접근 하는 방법이 있음
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

***

# MoveWindows,SetWindowPos

  - Window Dialog를 Move하는 함수들

    - [MoveWindows](#movewindows)
    - [SetWindowPos](#setwindowpos)

###### [MoveWindows,SetWindowPos](#movewindowssetwindowpos)
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

###### [MoveWindows,SetWindowPos](#movewindowssetwindowpos)
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

<br/>
<br/>

***

# 기타

  - 여러가지 

    - [문자 크기 바꾸기(CFont)](#문자-크기-바꾸기cfont)
    - [문자 크기 바꾸기(LOGFONT)](#문자-크기-바꾸기logfont)
    - [윈도우 특정 부분 투명화 하기](#윈도우-특정-부분-투명화-하기)


###### [기타](#기타)
###### [Top](#top)

<br/>
<br/>

# 문자 크기 바꾸기(CFont)
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

###### [기타](#기타)
###### [Top](#top)

<br/>
<br/>

# 문자 크기 바꾸기(LOGFONT)
  - 문자 크기 바꾸기
  - 문자 Weight도 설정 가능
  - 다른 Dialog ID 전부다 가능

#AppDlg.cpp
~~~C++
BOOL CMFCApplication1Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();
	
  LOGFONT lf2;
  ::ZeroMemory(&lf2, sizeof(lf2));
  lf2.lfHeight = 32;
  lf2.lfWeight = FW_LIGHT;
  m_fn010.CreateFontIndirect(&lf2);
  ::lstrcpy(lf2.lfFaceName, _T("굴림"));
  GetDlgItem(IDC_AT_NUM_12)->SetFont(&m_fn010);

	return TRUE;
}
~~~

###### [기타](#기타)
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


###### [기타](#기타)
###### [Top](#top)

<br/>
<br/>
