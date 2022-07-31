###### Top

- <details markdown="1">
  <summary>메세지</summary>
  <div markdown="1">
  
    - [Message](#message)
      - [ON_COMMAND_RANGE](#on_command_range)
      - [WM_CTLCOLOR](#wm_ctlcolor)
      - [WM_DRAWITEM](#wm_drawitem)
      
  </div>
  </details>



- <details markdown="1">
  <summary>가상함수</summary>
  <div markdown="1">
  
    - [Virtual Function](#virtual-function)
      - [WindowProc](#windowproc)
      - [OnCommand](#oncommand)
      
  </div>
  </details>



- <details markdown="1">
  <summary>드로잉</summary>
  <div markdown="1">
  
    - [Drawing](#drawing)
      - [문자 크기 바꾸기(CFont)](#문자-크기-바꾸기cfont)
      - [문자 크기 바꾸기(LOGFONT)](#문자-크기-바꾸기logfont)
      - [컨트롤의 글꼴, 배경색 변경](#컨트롤의-글꼴-배경색-변경)
      - [버튼 Backgroud, Border, Text 그리기](#버튼-backgroud-border-text-그리기)
      - [윈도우 특정 부분 투명화 하기](#윈도우-특정-부분-투명화-하기)
      
  </div>
  </details>


***
***


# Message

  - 일반적으로 콘솔에서 만든 프로그램은 프로그래머가 정한 순서대로 차근 차근 진행 됩낟. 하지만, 윈도우 응용 프로그램은 메세지 구동 구조를 가지고 있으며, 프로그램에 어떤 변화가 생경을때 Windows가 프로그램에게 정보를 알려주고, 프로그램은 그 정보를 받아서 다양한 동작을 하게 된다.

      - [ON_COMMAND_RANGE](#on_command_range)
      - [WM_CTLCOLOR](#wm_ctlcolor)
      - [WM_DRAWITEM](#wm_drawitem)

###### [Message](#message)
###### [Top](#top)


***

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

# WM_CTLCOLOR
  - WM_CTLCOLOR은 각종 컨트롤에 배경과 글꼴색을 바꿀 수 있다

[컨트롤의 글꼴, 배경색 변경](#컨트롤의-글꼴-배경색-변경) 참고

###### [Message](#message)
###### [Top](#top)

<br/>
<br/>

# WM_DRAWITEM
  - WM_CTLCOLOR은 각종 컨트롤에 배경과 글꼴색을 바꿀 수 있다

[버튼 Backgroud, Border, Text 그리기](#버튼-backgroud-border-text-그리기) 참고

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
  
###### [Virtual Function](#virtual-function)
###### [Top](#top)


***

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

***


# Drawing
  
      - [문자 크기 바꾸기(CFont)](#문자-크기-바꾸기cfont)
      - [문자 크기 바꾸기(LOGFONT)](#문자-크기-바꾸기logfont)
      - [컨트롤의 글꼴, 배경색 변경](#컨트롤의-글꼴-배경색-변경)
      - [버튼 Backgroud, Border, Text 그리기](#버튼-backgroud--border--text그리기)
  
###### [Drawing](#drawing)
###### [Top](#top)


***

<br/>
<br/>

# 문자 크기 바꾸기(CFont)
  - 문자 크기 바꾸기
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

###### [Drawing](#drawing)
###### [Top](#top)

<br/>
<br/>

# 문자 크기 바꾸기(LOGFONT)
  - 문자 크기 바꾸기
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

###### [Drawing](#drawing)
###### [Top](#top)

<br/>
<br/>

# 컨트롤의 글꼴, 배경색 변경
  - 프로젝트 -> 클래스 마법사 -> 메세지 -> WM_CTLCOLOR 추가하기(AppDlg.h, AppDlg.cpp에 함수해더,BEGIN_MESSAGE_MAP 자동으로 추가됨)
  - WM_CTLCOLOR은 각종 컨트롤에 배경과 글꼴색을 바꿀 수 있다.
  - Dialog ID가 “IDC_STATIC2”일때

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

###### [Drawing](#drawing)
###### [Top](#top)

<br/>
<br/>

# 버튼 Backgroud, Border, Text 그리기
  - 프로젝트 -> 클래스 마법사 -> 메세지 -> WM_DRAWITEM 추가하기(AppDlg.h, AppDlg.cpp에 함수해더,BEGIN_MESSAGE_MAP 자동으로 추가됨)
  - Dialog에서 Owner Draw속성을 True설정(해당 컨트롤을 스스로 그리지 않겠다)
  - WM_DRAWITEM은 사용자가  직접 컨트롤을 그린다고 하는것 

#AppDlg.cpp
~~~c++
void CAlarm_talk::OnDrawItem(int nIDCtl, LPDRAWITEMSTRUCT lpDrawItemStruct)
{
	if (nIDCtl == IDC_PRINT)
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
		if(lpDrawItemStruct->itemState & ODS_SELECTED)
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

###### [Drawing](#drawing)
###### [Top](#top)

<br/>
<br/>







