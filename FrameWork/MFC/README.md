###### Top

- [MFC메모리 누수 확인](#mfc메모리-누수-확인)
- [ifdef DEBUG (디버그 모드 일때만 실행하기)](#ifdef-debug-디버그-모드-일때만-실행하기)

<br/>

- [Message](#message)
  - [ON_COMMAND_RANGE](#on_command_range)
  - [WM_CTLCOLOR (컨트롤의 글꼴, 배경색 변경)](#wm_ctlcolor-컨트롤의-글꼴-배경색-변경)
  - [WM_DRAWITEM (컨트롤 Backgroud, Border, Text 그리기)](#wm_drawitem-컨트롤-backgroud-border-text-그리기)
  - [PostMessage (사용자 지정 메시지) + MAKEWPARAM](#postmessage-사용자-지정-메시지--makewparam)
  - [PostMessage,SendMessage(부모->자식)](#postmessagesendmessage부모->자식)
  - [PostMessage,SendMessage(Win32함수, 캡션으로 찾기)](#postmessagesendmessagewin32함수-캡션으로-찾기)
  - [WM_CREATE, WM_SIZE (Dialog 변경시 컨트롤 크기 위치 유지하기)](#wm_create-wm_size-dialog-변경시-컨트롤-크기-위치-유지하기)
  - [WM_TIMER, WM_DESTROY (타이머,윈도우파괴시)](#wm_timer-wm_destroy-타이머윈도우파괴시)
  - [WM_MOUSEWHEEL (마우스 휠)](#wm_mousewheel-마우스-휠)
  - [EN_UPDATE, EN_CHANGE (Edit Control 문자열 변경시)](#en_update-en_change-edit-control-문자열-변경시)

<br/>

- [Virtual Function](#virtual-function)
  - [WindowProc](#windowproc)
  - [OnCommand](#oncommand)
  - [PreTranslateMessage](#pretranslatemessage)
  - [DrawItem](#drawitem)

<br/>
  
- [모달,모달리스](#모달모달리스)
  - [모달(modal)](#모달modal)
  - [모달리스(modeless)](#모달리스modeless)
  - [캐스팅 하여 전부 접근 하는법](#캐스팅-하여-전부-접근-하는법)
  - [모달, 모달리스 만들때 다른 dialog호출하기](#모달-모달리스-만들때-다른-dialog호출하기)
  - [모달간 PreTranslateMessage전달](#모달간-pretranslatemessage전달)
  - [모달리스간 PreTranslateMessage전달](#모달리스간-pretranslatemessage전달)

<br/>

- [CBase상속](#cbase상속)
  - [CBase생성](#cbase생성)
  - [GetClientRect 호출](#getclientrect-호출)
  - [CBase상속시 PreTranslateMessage](#cbase상속시-pretranslatemessage)

<br/>

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
  - [GetTickCount](#gettickcount)
  - [ShellExecute](#shellexecute)
  - [AnimateWindow](#animatewindow)
  - [FindWindow, FindWindowEx](#findwindow-findwindowex)
  - [AfxExtractSubString](#afxextractsubstring)
  - [GetLastError](#getlasterror)

<br/>

- [문자 다루기](#문자-다루기)
  - [문자 크기 바꾸기 (CFont)](#문자-크기-바꾸기-cfont)
  - [문자 크기 바꾸기 (LOGFONT)](#문자-크기-바꾸기-logfont)
  - [DrawText (텍스트를 도형 안에 출력하기)](#drawtext-텍스트를-도형-안에-출력하기)
  - [TextOut (텍스트를 원하는 위치에 출력)](#textout-텍스트를-원하는-위치에-출력)
  - [출력시 폰트 컬러변경하기](#출력시-폰트-컬러변경하기)
      
<br/>

- [CImage (사진출력)](#cimage-사진출력)
  - [확대, 축소, 부분 출력](#확대-축소-부분-출력)
  - [AlphaBlend](#alphablend)
  - [Dialog크기로 출력하기](#dialog크기로-출력하기)
  - [사진 크기로 Dialog크기 변경하기](#사진-크기로-dialog크기-변경하기)
      
<br/>

- [ListBox (리스트박스)](#listbox-리스트박스)
  - [변수추가](#변수추가)
  - [AddString](#addstring)
  - [InsertString](#insertstring)
  - [GetText](#gettext)
  - [다양한 데이터 구조체로 보관해서 활용하기](#다양한-데이터-구조체로-보관해서-활용하기)
    - SetItemDataPtr
    - GetCurSel()
    - LBN_SELCHANGE
  - [SetItemHeight](#setitemheight)
  - [OwnerDraw 사용하기](#ownerdraw-사용하기)
    - 배경 컬러 바꾸기
    - 텍스트 출력하기
    - itemAction을 이용해 상황에 따른 그리기
    - ODS_SELECTED, ODA_DRAWENTIRE...Etc
    - List Box 배경색 지정
    - Owner Draw : Variable을 사용해서 각각의 데이터의 height를 조절하기

<br/>

- [ListControl (리스트컨트롤)](#listcontrol-리스트컨트롤)
  - [칼럼 초기 설정](#칼럼-초기-설정)
  - [LVCF_FMT 및 기타 속성들](#lvcf_fmt-및-기타-속성들)
  - [칼럼에 데이터 추가하기](#칼럼에-데이터-추가하기)
  - [SetExtendedStyle (열 전체를 선택하기)](#setextendedstyle-열-전체를-선택하기)
  - [LVN_ITEMCHANGED 메시지](#lvn_itemchanged-메시지)
  - [SetTextColor,SetTextBkColor](#settextcolorsettextbkcolor)
  - [Owner Draw,GetItemText,MeasureItem](#owner-drawgetitemtextmeasureitem)
  - [추가 작업 진행](#추가-작업-진행)

<br/>

- [Bitmap 리소스, 패턴 CBrush](#bitmap-리소스-패턴-cbrush)
  - [Bitmap 리소스를 패턴 CBrush로 출력](#bitmap-리소스를-패턴-cbrush로-출력)
  - [CBrush중심점 이동하여 출력](#cbrush중심점-이동하여-출력)
  - [외부그림을 패턴 CBrush로 출력](#외부그림을-패턴-cbrush로-출력)
      
<br/>

- [http,https통신](#httphttps통신)
  - [http,https Get통신](#httphttps-get통신)
  - [http,https Post통신](#httphttps-post통신)
  - [https Put통신](#https-put통신)
  - [파일 다운받기](#파일-다운받기)
      
<br/>

- [소켓통신](#소켓통신)
  - [소켓(Socket)입/출력 모델 비교](#소켓socket입출력-모델-비교)
  - [소켓 통신 개발시 팁](#소켓-통신-개발시-팁)
- [소켓통신 함수별 기본](#소켓통신-함수별-기본)
- [소켓통신WSAAsyncSelect모델](#소켓통신wsaasyncselect모델)
  - [소켓통신 사용 준비](#소켓통신-사용-준비)
  - [기본적인 비동기 통신 형태](#기본적인-비동기-통신-형태)
  - [일정한 크기의 데이터 보내기](#일정한-크기의-데이터-보내기)
  - [크기가 일정하지 않은 데이터 보내기](#크기가-일정하지-않은-데이터-보내기)
  - [소켓통신 암호코드 및 메시지 판단 코드 넣기](#소켓통신-암호코드-및-메시지-판단-코드-넣기)
- [소켓통신 추가](#소켓통신-추가)
  - [소켓(Socket) 입/출력 버퍼 확인](#소켓socket-입출력-버퍼-확인)
  - [소켓(Socket) 입/출력 TCP_NODELAT](#소켓socket-입출력-tcp_nodelat)
  - [소켓(Socket) 입/출력 SO_REUSEADDR](#소켓socket-입출력-so_reuseaddr)
  - [파일 송신 전용API(TransmitFile)](#파일-송신-전용apitransmitfile)
- [프로토콜이 적용된 파일 송/수신 소켓(Socket)통신](#프로토콜이-적용된-파일-송수신-소켓socket통신)
  - [파일 송/수신 프로토콜 정의](#파일-송수신-프로토콜-정의)
  - [프로토콜이 적용된 파일 송수신 Socket통신 (서버Server)](#프로토콜이-적용된-파일-송수신-socket통신-서버server)
  - [프로토콜이 적용된 파일 송수신 Socket통신 (클라이언트Client)](#프로토콜이-적용된-파일-송수신-socket통신-클라이언트client)
- [Overlapped I/O](#overlapped-io)
  - [비동기 File입/출력_Event](#비동기-file입출력_event)
  - [비동기 File입/출력_Callback](#비동기-file입출력_callback)
- [IOCP](#iocp)
- [UDP](#udp)
- [브로드캐스트(broadcast)](#브로드캐스트broadcast)
- [공유메모리기법](#공유메모리기법)

<br/>

- [기능별 정리](#기능별-정리)
  - [캡쳐하기](#캡쳐하기)
  - [동적으로 폰트 크기 맞추기](#동적으로-폰트-크기-맞추기)
  - [멀티바이트 CString자료형에 한글확인 코드 와 짜르기](#멀티바이트-cstring자료형에-한글확인-코드-와-짜르기)
  - [Bitmap을 활용한 png 컬러 변경](#bitmap을-활용한-png-컬러-변경)
  - [원하는 캡션가진 윈도우 잡기](#원하는-캡션가진-윈도우-잡기)
      
<br/>

- [GDI](#gdi)
  - [CDC, CPaintDC, CClientDC, CWindowDC (화면출력)](#cdc-cpaintdc-cclientdc-cwindowdc-화면출력)
  - [장치 DC, 메모리 DC (깜박임 없애기)](#장치-dc-메모리-dc-깜박임-없애기)
  - [GDI,GDI+,Direct2D](#gdigdidirect2d)
      
<br/>

- [GDI Plus(+)](#gdi-plus)
  - [GDI Plus(+) 초기화하기](#gdi-plus-초기화기)
  - [GDI Plus(+) 더블 버퍼링(With GDI)](#gdi-plus-더블-버퍼링with-gdi)
  - [여러가지 그리기](#여러가지-그리기)
  - [이미지 원하는 모양으로 출력하기](#이미지-원하는-모양으로-출력하기)
  - [PNG A(알파)값 포함 이미지 출력하기](#png-a알파값-포함-이미지-출력하기)
      
<br/>

- [Direct2D](#direct2d)
  - [Direct2D 초기화 및 기본출력](#direct2d-초기화-및-기본출력)
  - [Direct2D 초기화 및 이미지출력](#direct2d-초기화-및-이미지출력)
  - [Direct2D 초기화 및 이미지 라운드 출력](#direct2d-초기화-및-이미지-라운드-출력)
 
<br/>

- [CFileDialog (파일열기 대화 상자) 사용법 및 사진불러오기](#cfiledialog-파일열기-대화-상자-사용법-및-사진불러오기)
- [COLORREF (컬러 담는 변수)](#colorref-컬러-담는-변수)
- [서브 클래싱(SubclassDlgItem)이용하여 기능변경](#서브-클래싱subclassdlgitem이용하여-기능변경)
- [MFC라이브러리 만들기](#mfc라이브러리-만들기)
- [dll 만들어 사용하기](#dll-만들어-사용하기)
- [사용자정의 윈도우 만들기](#사용자정의-윈도우-만들기)
- [Windows Media Player ActiveX컨트롤 사용하기](#windows-media-player-activex컨트롤-사용하기)
- [음악 재생하기](#음악-재생하기)
- [실행중인 Process열거하기](#실행중인-process열거하기)

<br/>

- [RS232 시리얼 통신](#rs232-시리얼-통신)

<br/>

- [형변환](#형변환)
- [Thread](#thread)
  - [Thread핵심 WIN32API](#thread핵심-win32api)
  - [Thread MFC API_AfxBeginThread사용예제](#thread-mfc-api_afxbeginthread사용예제)
  - [WaitForSingleObject사용예제](#waitforsingleobject사용예제)
  - [Critical section,_beginthreadex사용예제](#critical-section_beginthreadex사용예제)
  - [세마포어(Semaphore)예시](#세마포어semaphore예시)
  - [스레드(Thread)친화력 조절 예제](#스레드thread친화력-조절-예제)
- [보호모드VirtualProtect](#보호모드virtualprotect)

<br/>

- [에러 후 dump파일 만들기](#에러-후-dump파일-만들기)

<br/>

- Toy프로젝트
  - [MFCSerialPort](https://github.com/BuMinKyoo/MFCSerialPort)
    - Rs232 시리얼통신, 프린터, QR코드 출력
  - [MFCWebFileDown](https://github.com/BuMinKyoo/MFCWebFileDown)
    - 웹파일 다운, 버전배포

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

# ifdef DEBUG (디버그 모드 일때만 실행하기)

  - 릴리스 모드와 디버그 모드에서, 디버그 모드 일때만 실행하게 해놓은 코드

<br/>

#AppDlg.cpp
~~~c++
#ifdef DEBUG
// 코드
#endif
~~~

###### [ifdef DEBUG (디버그 모드 일때만 실행하기)](#ifdef-debug-디버그-모드-일때만-실행하기)
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
    - [PostMessage,SendMessage(부모->자식)](#postmessagesendmessage부모->자식)
    - [PostMessage,SendMessage(Win32함수, 캡션으로 찾기)](#postmessagesendmessagewin32함수-캡션으로-찾기)
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
  - Invalidate()함수를 호출하게 되면, WM_CTLCOLOR메시지도 다시 호출되기 때문에 WM_CTLCOLOR안에 있는 컨트롤들의 컬러를 변수로 설정해 놓았다면, 변수의 컬러 변경과 Invalidate()호출로 컨트롤들의 컬러를 변경 할 수 있다.

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
}
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
  - 만약 서브 클래싱(SubclassDlgItem)이용하여 버튼같은 Class를 상속받아 나 자신을 변경해야 할때
    - WM_DRAWITEM 이 메시지를 받았다는 것은 내 자신의 윈도우 안에서 자식윈도우의 변경 때문에 이 메시지를 받게 된것 따라서 WM_DRAWITEM 메시지가 아니라 DrawItem함수를 등록해서 사용 하여야 한다, 그래서 WM_DRAWITEM 메시지에는 nIDCtl을 받는 변수를 받는 인자가 있으며 DrawItem함수에는 그 인자가 없다(왜냐면 어차피 자신을 가리키기 때문에)
    - WM_DRAWITEM의 인자중 LPDRAWITEMSTRUCT이 있는데 F1을 눌러서 도움말을 보려고 하면 안되고 DRAWITEMSTRUC로 도움말을 봐야 한다 LP는 롱타입으로 define되어 있는것이다.

<br/>

~~~c++
// LPDRAWITEMSTRUCT 원형
typedef struct tagDRAWITEMSTRUCT {
  UINT      CtlType;
  UINT      CtlID;
  UINT      itemID;
  UINT      itemAction;
  UINT      itemState;
  HWND      hwndItem;
  HDC       hDC;
  RECT      rcItem;
  ULONG_PTR itemData;
} DRAWITEMSTRUCT, *PDRAWITEMSTRUCT, *LPDRAWITEMSTRUCT;
~~~

<br/>

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
  - KEYDOWN같은 것을 할때는 PostMessage메세지를 써야 하는데 그 이유는 SendMessage는 메시지 큐에 들어가지 않고, 메시지를 처리하고 반환 할때 까지 기다리기 때문에 각각이 따로 따로 처리 되어 진다. KEYDOWN같은 경우는 조합된 메시지를 줬을때 처리되는 경우가 있기 때문에 PostMessage메세지를 사용하여야 한다
  - SendMessage는 큐에 들어가지 않기 때문에 PostMessage보다 빠르며, 큐에 안들어 가기 때문에 PreTranslateMessage에서 감지 할 수 없다.
  - 사용자 지정 메세지를 보낼때, 예약되어 있는 메세지 번호는 사용할 수 없기 때문에 WM_USER라는 미리 정의되어 있는 값에 더해주면서 사용하게 된다

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

<br/>

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

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - SendMessage를 통해서 Cstring문자열 전송하기!
    - 가장주의할점!!! Cstring을 전송할때 PostMessage는 데이터가 안갈 수도 있다는것을 꼭 주의하고 SendMessage로 보내도록 하자!!

#AppDlg.cpp(부모)
~~~c++
void CMFCApplication1Dlg::OnBnClickedButton1()
{
	Cchaild* chaild = new Cchaild;
	chaild->Create(IDD_DIALOG1, this);
	chaild->ShowWindow(SW_SHOW);
}


afx_msg LRESULT CMFCApplication1Dlg::On40000(WPARAM wParam, LPARAM lParam)
{
	CString* ptrStr = (CString*)lParam;
	CString str = _T("");
	str.Format(_T("%s"), *ptrStr);

	return 0;
}
~~~

<br/>

#AppDlg.cpp(자식)
~~~c++
BOOL Cchaild::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	CString str = _T("qwer");

	GetParent()->SendMessageW(40000, 0, (LPARAM)&str);

	return TRUE;  // return TRUE unless you set the focus to a control
	// 예외: OCX 속성 페이지는 FALSE를 반환해야 합니다.
}
~~~

###### [Message](#message)
###### [Top](#top)

<br/>
<br/>

# PostMessage,SendMessage(부모->자식)

#AppDlg.h
~~~c++
#include "CCD1.h"

CCD1* dlg;
~~~

<br/>

#AppDlg.cpp
~~~c++
void CMFCApplication1Dlg::OnBnClickedButton1()
{
	// TODO: 여기에 컨트롤 알림 처리기 코드를 추가합니다.
	dlg = new CCD1;
	dlg->Create(IDD_CD1);
	dlg->ShowWindow(SW_SHOW);

}

void CMFCApplication1Dlg::OnBnClickedButton2()
{
	// TODO: 여기에 컨트롤 알림 처리기 코드를 추가합니다.
	dlg->SendMessage(WM_RBUTTONDOWN);
}
~~~

###### [Message](#message)
###### [Top](#top)

<br/>
<br/>

# PostMessage,SendMessage(Win32함수, 캡션으로 찾기)
  - 사용자 메세지를 보내기 위해서는, 이미 예약 되어 있는 메세지 번호를 사용할 수 없기 때문에 WM_USER로 정의된 수 이상으로 사용하여야한다
  - 사용
  - 1. 보낼 메세지번호를 정의하고
    - ::SendMessage(hDialogHandle, WM_USER+1, 0, 0);
  - 2. 받는 곳에서 받을 메세지번호를 정의함
    - ON_MESSAGE(WM_USER+1, OnFunction)
  - 3. 받는 곳에서 함수 해더파일 정의
    - afx_msg LRESULT OnFunction(WPARAM wParam, LPARAM lParam);
  - 4. 함수 정의

<br/>

#AppDlg.h
~~~c++
#include "CCD1.h"

CCD1* dlg;
afx_msg void OnRButtonDown(UINT nFlags, CPoint point);
~~~

<br/>

#AppDlg.cpp
~~~c++
void CMFCApplication1Dlg::OnBnClickedButton1()
{
	// TODO: 여기에 컨트롤 알림 처리기 코드를 추가합니다.
	dlg = new CCD1;
	dlg->Create(IDD_CD1);
	dlg->ShowWindow(SW_SHOW);
}

void CMFCApplication1Dlg::OnBnClickedButton2()
{
	// TODO: 여기에 컨트롤 알림 처리기 코드를 추가합니다.

	// 캡션을 이용해 핸들 얻기
	HWND hDialogHandle = ::FindWindow(NULL, L"AAAAA");

	// 얻은 핸들을 이용해 메세지 보내기
	::SendMessage(hDialogHandle, WM_USER+1, 0, 0);
}
~~~

<br/>

#CD1.h
~~~c++
public:
	afx_msg LRESULT OnFunction(WPARAM wParam, LPARAM lParam);
~~~

<br/>

#CD1.cpp
~~~c++
BEGIN_MESSAGE_MAP(CCD1, CDialogEx)
	ON_MESSAGE(WM_USER+1, OnFunction)
END_MESSAGE_MAP()

LRESULT CCD1::OnFunction(WPARAM wParam, LPARAM lParam)
{
	// 처리할 내용
	return 0;
}
~~~

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
    - [DrawItem](#drawitem)
  
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

# DrawItem
  - 프로젝트 -> 클래스 마법사 -> 가상함수 -> DrawItem 추가하기(AppDlg.h, AppDlg.cpp에 함수해더 자동으로 추가됨)
  - 자기 자신의 윈도우를 다시 그리겠다고 선언 하는것, 들어오는 인자인 LPDRAWITEMSTRUCT구조체 안에 모든 정보가 들어 있다
  - 보통 서브 클래싱(SubclassDlgItem)이용하여 내 자신의 컬러를 가진 컨트롤을 만들때 사용하게 된다
  - 서브 클래싱(SubclassDlgItem)이용할때 DrawItem같은 것을 이용하기 위해서는 Owner Draw를 true로 해야한다

#MyBtn.cpp
~~~c++
// CButton으로 상속받은 클래스를 만들었던 cpp
void MyBtn::DrawItem(LPDRAWITEMSTRUCT lpD)
{
	CRect r(lpD->rcItem);  // RECT 구조체를 CRect 객체로 변환
	CDC* dc = CDC::FromHandle(lpD->hDC); // HDC 핸들을 CDC 객체로 변환

    CBrush new_brush, * old_brush = dc->GetCurrentBrush();

    if (lpD->itemState & ODS_SELECTED) // 눌렀다면
    {  
        new_brush.CreateSolidBrush(RGB(255, 0, 0));
        dc->SelectObject(new_brush);
    }
    else {  // 포커스 상태가 아닌 경우
        new_brush.CreateSolidBrush(RGB(0, 255, 0));
        dc->SelectObject(new_brush);
    }
    dc->Rectangle(r);   // Brush로 사각형 그리기

    new_brush.DeleteObject();
}
~~~

<br/>

#AppDlg.h
~~~c++
#include "MyBtn.h"
~~~

<br/>

#AppDlg.h
~~~c++
BOOL CMFCApplication2Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	mybtn.SubclassDlgItem(IDC_BUTTON1, this);
}
~~~

###### [Virtual Function](#virtual-function)
###### [Top](#top)

<br/>
<br/>

***

# 모달,모달리스
  - [모달(modal)](#모달modal)
  - [모달리스(modeless)](#모달리스modeless)
  - [캐스팅 하여 전부 접근 하는법](#캐스팅-하여-전부-접근-하는법)
  - [모달, 모달리스 만들때 다른 dialog호출하기](#모달-모달리스-만들때-다른-dialog호출하기)
  - [모달간 PreTranslateMessage전달](#모달간-pretranslatemessage전달)
  - [모달리스간 PreTranslateMessage전달](#모달리스간-pretranslatemessage전달)


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
  - 모달리스로 창을 만들면 제거할때 반드시 Destroy Window 를 호출해 줘야 한다. 또한 이 함수는 종료 메시지를 자식들에게도 보내게 된다. 
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

# 모달간 PreTranslateMessage전달
  - 모달을 사용하게 되면, 부모를 클릭시 메세지는 전달되지 않는다. 자식을 클릭하게 되면 자식에서 -> 부모로 향하는 버블링이 발생한다(PreTranslateMessage 수준에서)
  - 실제 해당되는 다이얼로그가 받는 이벤트는 PreTranslateMessage가 모두 전달되고 발생된다.
    - 클릭한 해당 자식 PreTranslateMessage -> 부모 PreTranslateMessage -> 클릭한 해당 자식 OnLButtonDown

<br/>

#AppDlg.cpp
~~~c++
#include "CCD1.h"

void CMFCApplication1Dlg::OnBnClickedButton1()
{
	// TODO: 여기에 컨트롤 알림 처리기 코드를 추가합니다.
	CCD1 dlg;
	dlg.DoModal();
}

void CMFCApplication1Dlg::OnLButtonDown(UINT nFlags, CPoint point)
{
	// TODO: 여기에 메시지 처리기 코드를 추가 및/또는 기본값을 호출합니다.

	CDialogEx::OnLButtonDown(nFlags, point);
}


BOOL CMFCApplication1Dlg::PreTranslateMessage(MSG* pMsg)
{
	// TODO: 여기에 특수화된 코드를 추가 및/또는 기본 클래스를 호출합니다.
	if (pMsg->message == WM_LBUTTONDOWN)
	{

		return FALSE;
	}

	return CDialogEx::PreTranslateMessage(pMsg);
}
~~~

<br/>

#CD1.cpp
~~~c++
#include "CCD2.h"

void CCD1::OnBnClickedButton1()
{
	// TODO: 여기에 컨트롤 알림 처리기 코드를 추가합니다.
	CCD2 dlg;
	dlg.DoModal();
}

void CCD1::OnLButtonDown(UINT nFlags, CPoint point)
{
	// TODO: 여기에 메시지 처리기 코드를 추가 및/또는 기본값을 호출합니다.

	CDialogEx::OnLButtonDown(nFlags, point);
}


BOOL CCD1::PreTranslateMessage(MSG* pMsg)
{
	// TODO: 여기에 특수화된 코드를 추가 및/또는 기본 클래스를 호출합니다.
	if (pMsg->message == WM_LBUTTONDOWN)
	{

		return FALSE;
	}

	return CDialogEx::PreTranslateMessage(pMsg);
}
~~~

###### [모달,모달리스](#모달모달리스)
###### [Top](#top)

<br/>
<br/>

# 모달리스간 PreTranslateMessage전달
  - 모달리스를 사용하게 되면, 부모를 클릭시 자식에게는 메세지가 전달되지 않는다. 자식에서 -> 부모로 향하는 버블링이 발생한다(PreTranslateMessage 수준에서)
  - 실제 해당되는 다이얼로그가 받는 이벤트는 PreTranslateMessage가 모두 전달되고 발생된다
    - 클릭한 해당 자식 PreTranslateMessage -> 부모 PreTranslateMessage -> 클릭한 해당 자식 OnLButtonDown
  - 모달리스 생성시, 부모를 설정하게 되면, 그 부모의 부모의 부모로 메세지 버블링이 발생한다
  - 부모를 설정하지 않는 다이얼로그에는 전달되지 않으며, 항상 최상위 부모에게는 메세지가 전달 되게 된다
    - A(최상위),B,C,D(C의 자식)
      - B를 클릭시 B->A전달
      - D를 클릭시 D->C->A전달

<br/>

#AppDlg.cpp
~~~c++
#include "CCD1.h"

void CMFCApplication1Dlg::OnBnClickedButton1()
{
	// TODO: 여기에 컨트롤 알림 처리기 코드를 추가합니다.
	CCD1* dlg = new CCD1();
	dlg = new CCD1;
	dlg->Create(IDD_CD1, this);
	dlg->ShowWindow(SW_SHOW);

}


void CMFCApplication1Dlg::OnLButtonDown(UINT nFlags, CPoint point)
{
	// TODO: 여기에 메시지 처리기 코드를 추가 및/또는 기본값을 호출합니다.

	CDialogEx::OnLButtonDown(nFlags, point);
}


BOOL CMFCApplication1Dlg::PreTranslateMessage(MSG* pMsg)
{
	// TODO: 여기에 특수화된 코드를 추가 및/또는 기본 클래스를 호출합니다.
	if (pMsg->message == WM_LBUTTONDOWN)
	{

		return FALSE;
	}

	return CDialogEx::PreTranslateMessage(pMsg);
}
~~~

<br/>

#CD1.cpp
~~~c++
#include "CCD2.h"

void CCD1::OnBnClickedButton1()
{
	// TODO: 여기에 컨트롤 알림 처리기 코드를 추가합니다.
	CCD2* dlg = new CCD2();
	dlg = new CCD2;
	dlg->Create(IDD_CD2, this);
	dlg->ShowWindow(SW_SHOW);
}

void CCD1::OnLButtonDown(UINT nFlags, CPoint point)
{
	// TODO: 여기에 메시지 처리기 코드를 추가 및/또는 기본값을 호출합니다.

	CDialogEx::OnLButtonDown(nFlags, point);
}


BOOL CCD1::PreTranslateMessage(MSG* pMsg)
{
	// TODO: 여기에 특수화된 코드를 추가 및/또는 기본 클래스를 호출합니다.
	if (pMsg->message == WM_LBUTTONDOWN)
	{

		return FALSE;
	}

	return CDialogEx::PreTranslateMessage(pMsg);
}
~~~

###### [모달,모달리스](#모달모달리스)
###### [Top](#top)

<br/>
<br/>

***

# CBase상속
  - [CBase생성](#cbase생성)
  - [GetClientRect 호출](#getclientrect-호출)
  - [CBase상속시 PreTranslateMessage](#cbase상속시-pretranslatemessage)

###### [CBase상속](#cbase상속)
###### [Top](#top)

<br/>
<br/>

# CBase생성
  - 1. 클래스마법사 ->MFC클래스 추가->기본 클래스 CWnd
  - 2. CDialog로 상속 임의로 바꾸기
    - 처음부터  CDialog상속으로 만들면, 화면이 같이 만들어 지기 때문에 CWnd를 기본 클래스로 하고 CDialog상속으로 임의로 바꾼다

<br/>

CBase.h
~~~c++
#pragma once


// CBase

class CBase : public CDialog
{
	DECLARE_DYNAMIC(CBase)

public:
	CBase();
	CBase(UINT uResourceID, CWnd* pParent = NULL);
	virtual ~CBase();

protected:
	DECLARE_MESSAGE_MAP()
public:
	afx_msg void OnRButtonDown(UINT nFlags, CPoint point);
	virtual BOOL PreTranslateMessage(MSG* pMsg);
};
~~~

<br/>

CBase.cpp
~~~c++
// CBase.cpp: 구현 파일
//

#include "pch.h"
#include "MFCApplication2.h"
#include "CBase.h"


// CBase

IMPLEMENT_DYNAMIC(CBase, CDialog)

CBase::CBase()
{

}

CBase::CBase(UINT uResourceID, CWnd* pParent)
	: CDialog(uResourceID, pParent)
{
	
}


CBase::~CBase()
{
}


BEGIN_MESSAGE_MAP(CBase, CDialog)
	ON_WM_RBUTTONDOWN()
END_MESSAGE_MAP()



// CBase 메시지 처리기




void CBase::OnRButtonDown(UINT nFlags, CPoint point)
{
	// TODO: 여기에 메시지 처리기 코드를 추가 및/또는 기본값을 호출합니다.

	CDialog::OnRButtonDown(nFlags, point);
}


BOOL CBase::PreTranslateMessage(MSG* pMsg)
{
	// TODO: 여기에 특수화된 코드를 추가 및/또는 기본 클래스를 호출합니다.
	if (pMsg->message == WM_RBUTTONDOWN)
	{
		return FALSE;
	}

	return CDialog::PreTranslateMessage(pMsg);
}
~~~

<br/>

#CCD2.h
~~~c++
#pragma once
#include "afxdialogex.h"
#include "CBase.h"


// CCD2 대화 상자

class CCD2 : public CBase
{
	DECLARE_DYNAMIC(CCD2)

public:
	CCD2(CWnd* pParent = nullptr);   // 표준 생성자입니다.
	virtual ~CCD2();

// 대화 상자 데이터입니다.
#ifdef AFX_DESIGN_TIME
	enum { IDD = IDD_CD2 };
#endif

protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV 지원입니다.

	DECLARE_MESSAGE_MAP()
public:
	afx_msg void OnRButtonDown(UINT nFlags, CPoint point);
	afx_msg void OnBnClickedButton1();
	virtual BOOL PreTranslateMessage(MSG* pMsg);
	virtual BOOL OnInitDialog();
};
~~~

<br/>

#CCD2.cpp
~~~c++
// CCD2.cpp: 구현 파일
//

#include "pch.h"
#include "MFCApplication2.h"
#include "afxdialogex.h"
#include "CCD2.h"
#include "CCD2_2.h"


// CCD2 대화 상자

IMPLEMENT_DYNAMIC(CCD2, CBase)

CCD2::CCD2(CWnd* pParent /*=nullptr*/)
	: CBase(IDD_CD2, pParent)
{

}

CCD2::~CCD2()
{
}

void CCD2::DoDataExchange(CDataExchange* pDX)
{
	CBase::DoDataExchange(pDX);
}


BEGIN_MESSAGE_MAP(CCD2, CBase)
	ON_WM_RBUTTONDOWN()
	ON_BN_CLICKED(IDC_BUTTON1, &CCD2::OnBnClickedButton1)
END_MESSAGE_MAP()


// CCD2 메시지 처리기


void CCD2::OnRButtonDown(UINT nFlags, CPoint point)
{
	// TODO: 여기에 메시지 처리기 코드를 추가 및/또는 기본값을 호출합니다.

	CBase::OnRButtonDown(nFlags, point);
}


BOOL CCD2::PreTranslateMessage(MSG* pMsg)
{
	// TODO: 여기에 특수화된 코드를 추가 및/또는 기본 클래스를 호출합니다.
	if (pMsg->message == WM_RBUTTONDOWN)
	{
		return FALSE;
	}

	return CBase::PreTranslateMessage(pMsg);
}


void CCD2::OnBnClickedButton1()
{
	// TODO: 여기에 컨트롤 알림 처리기 코드를 추가합니다.
	CCD2_2* chaild = new CCD2_2;
	chaild->Create(IDD_CD2_2, this);
	chaild->ShowWindow(SW_SHOW);
}


//BOOL CCD2::PreTranslateMessage(MSG* pMsg)
//{
//	// TODO: 여기에 특수화된 코드를 추가 및/또는 기본 클래스를 호출합니다.
//
//	return CBase::PreTranslateMessage(pMsg);
//}


BOOL CCD2::OnInitDialog()
{
	CBase::OnInitDialog();

	// TODO:  여기에 추가 초기화 작업을 추가합니다.

	return TRUE;  // return TRUE unless you set the focus to a control
	// 예외: OCX 속성 페이지는 FALSE를 반환해야 합니다.
}
~~~

###### [CBase상속](#cbase상속)
###### [Top](#top)

<br/>
<br/>

# GetClientRect 호출
  - MFC의 함수에서는, CBase같은 상속을 통할때, CBase의 상속을 받은 다이얼로그들에게서 CBase의 함수를 호출할때 그 다이얼로그의 핸들을 알아서 가져가 준다.
  - CCD2와 CCD2_2는 서로다른 다이얼로그이며, 다른 윈도우 사이즈를 가지고 있지만, 각각 CBase의 함수를 호출했을때, 자동적으로 각각의 다이얼로그의 윈도우핸들을 가져다가 함수에 적용하는것을 볼 수 있다

<br/>

#CBase.cpp
~~~c++
void CBase::GetR()
{
	CRect rect;
	GetClientRect(rect);
}
~~~

<br/>

#CCD2.cpp
~~~c++
void CCD2::OnRButtonDown(UINT nFlags, CPoint point)
{
	// TODO: 여기에 메시지 처리기 코드를 추가 및/또는 기본값을 호출합니다.
	CBase::GetR();

	CBase::OnRButtonDown(nFlags, point);
}
~~~

<br/>

#CCD2_2.cpp
~~~c++
void CCD2_2::OnRButtonDown(UINT nFlags, CPoint point)
{
	// TODO: 여기에 메시지 처리기 코드를 추가 및/또는 기본값을 호출합니다.
	CBase::GetR();
	
	CBase::OnRButtonDown(nFlags, point);
}
~~~

###### [CBase상속](#cbase상속)
###### [Top](#top)

<br/>
<br/>

# CBase상속시 PreTranslateMessage
  - CBase가 부모가 되지 않는 이상 상속으로는 자식의 PreTranslateMessage로 부터 메세지를 받지는 않는다.

<br/>

  - A(최상위)->CCD2(CBase상속)(부모)->CCD2_2(자식)일경우 아래와 같은 상황에서 CCD2을 클릭해 return FALSE 로 들어가게 되면, CBase로 전달되지 못하고 최상위 윈도우인 A에 전달되게 된다
  - 이럴때 CBase로 전달하기 위해서는 그냥 A도 CBase상속하던지 아니면, return FALSE하지 않고 CBase함수로 보내는 방법이 있겠다

<br/>

#CCD2.cpp
~~~c++
BOOL CCD2::PreTranslateMessage(MSG* pMsg)
{
	// TODO: 여기에 특수화된 코드를 추가 및/또는 기본 클래스를 호출합니다.
	if (pMsg->message == WM_RBUTTONDOWN)
	{
		return FALSE;
	}

	return CBase::PreTranslateMessage(pMsg);
}
~~~

<br/>

  - 즉 정리하자면, PreTranslateMessage로 메세지가 버블링 되는것은 윈도우의 자식과 부모의 상관 관계로 진행되는 것이며, 나머지는 함수로 실제로 들어가야 이동될 수 있다

###### [CBase상속](#cbase상속)
###### [Top](#top)

<br/>
<br/>

***

# 다양한 함수
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
  - [GetTickCount](#gettickcount)
  - [ShellExecute](#shellexecute)
  - [AnimateWindow](#animatewindow)
  - [FindWindow, FindWindowEx](#findwindow-findwindowex)
  - [AfxExtractSubString](#afxextractsubstring)
  - [GetLastError](#getlasterror)

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

# GetTickCount
  - 시스템이 시작한 시점부터 이 함수를 호출한 시점까지 흘러간 시간을 1000분의 1초 단위의 시간으로 알려주는 함수 

<br/>

#AppDlg.cpp
~~~c++
BOOL CMFCApplication2Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	DWORD star_time = GetTickCount();

	Sleep(1000); // 어떤 작업

	DWORD end_time = GetTickCount();

	DWORD result_time = end_time - star_time;

	SetDlgItemInt(IDC_EDIT1, result_time);

	return TRUE;
}
~~~

![20220916_222805](https://user-images.githubusercontent.com/39178978/190650020-ef753e2e-6a75-4236-a9d0-59515111cc3d.png)

###### [다양한 함수](#다양한-함수)
###### [Top](#top)

<br/>
<br/>

# ShellExecute
  - 1. 인터넷 열기
    - 두번째 인자에 “open”을 사용하고, 세번째 인자에 어떤 브라우저를 사용할지 명시하고, 네번째에 url주소를 입력하면 된다
  - 2. 응용프로그램 실행
    - 두번째 인자에 “open”을 사용하고 세번째 인자에 실행할 응용 프로그램의 경로를 명시하면 된다
  - 2-1. cmd명령어 치기
    - cmd로 명령어를 칠때는 /C를 꼭 해줘야 한다
    - cmd로 바로 치는 것과 같기 때문에 bat파일은 스페이스 뒤에 문자열을 넣으면 인자를 전달하는 것과 같은 명령이 된다
  - 3. 특정 프로그램으로 원하는 파일 열기
    - 두번째 인자에 “open”을 사용하고, 세번째 인자에 프로그램 이름을 명시하고, 네번째 인자에 파일 경로를 명시한다

<br/>

#AppDlg.cpp
~~~c++
// 1. 인터넷 열기
// 인터넷 창이 오픈 된다
// 세번째 인자에 iexplore를 넣으면 iexplore가 켜진다
BOOL CMFCApplication5Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	CString csUrl = _T("https://www.naver.com/");
	::ShellExecute(NULL, _T("OPEN"),_T("CHROME"),(LPCTSTR)csUrl,0,SW_SHOW);

	return TRUE;
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#AppDlg.cpp
~~~c++
// 2. 응용프로그램 실행
// 메모장 실행
BOOL CMFCApplication5Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	::ShellExecute(NULL, _T("OPEN"),_T("C:\\Users\\Astems\\Desktop\\test.txt"),NULL, NULL, SW_SHOW);

	return TRUE;
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#AppDlg.cpp
~~~c++
// 2-1. ShellExecute로 cmd명령어 치기
BOOL CMFCApplication5Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	::ShellExecute(NULL, _T("OPEN"),_T("cmd"),_T("/C C:\\Users\\Astems\\Desktop\\test1.bat"), NULL, SW_SHOW);

	return TRUE;
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#AppDlg.cpp
~~~c++
// 3. 특정 프로그램으로 원하는 파일 열기
BOOL CMFCApplication5Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	::ShellExecute(NULL, _T("open"), _T("Notepad++") , _T("C:\\Users\\Astems\\Desktop\\test.txt"), NULL, SW_SHOW);

	return TRUE;
}
~~~

###### [다양한 함수](#다양한-함수)
###### [Top](#top)

<br/>
<br/>

# AnimateWindow
  - 애니메이션을 줄 수 있는 함수

<br/>

~~~c++
// 함수원형
BOOL AnimateWindow(
  [in] HWND  hWnd,
  [in] DWORD dwTime,
  [in] DWORD dwFlags
);

// HWND : 애니메이션할 창에 대한 핸들입니다. 호출 스레드는 이 창을 소유해야 합니다.
// DWORD : 애니메이션을 재생하는 데 걸리는 시간(밀리초)입니다. 일반적으로 애니메이션을 재생하는 데 200밀리초가 걸립니다.
// DWORD : 애니메이션의 유형입니다
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#AppDlg.cpp
~~~c++
// 2. 응용프로그램 실행
// 메모장 실행
BOOL CMFCApplication5Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	::ShellExecute(NULL, _T("OPEN"),_T("C:\\Users\\Astems\\Desktop\\test.txt"),NULL, NULL, SW_SHOW);

	return TRUE;
}
~~~

![20220923_233426](https://user-images.githubusercontent.com/39178978/191985349-05b5782e-7496-4b42-8f4b-5d0ff46192f6.png)

<br/>

#AppDlg.cpp
~~~c++
// 컨트롤을 띄울때
void CMFCApplication2Dlg::OnBnClickedButton2()
{
	CWnd *p_wnd = GetDlgItem(IDC_BUTTON1); // 버튼의 핸들 얻기
	HWND hWnd = p_wnd->m_hWnd; // 버튼의 핸들 치환하기
	::AnimateWindow(hWnd, 200, AW_SLIDE| AW_CENTER); // 애니메이션 사용하기
}
~~~

![20220923_233703](https://user-images.githubusercontent.com/39178978/191985906-40419fc0-fdf7-4f54-8c37-bf98a0660300.png)

  - 컨트롤이 아닌, 윈도우 자체를 띄울때는 적용 시키고자 하는 윈도우의 OnInitDialog() 에서 함수를 이용 하면 된다.

###### [다양한 함수](#다양한-함수)
###### [Top](#top)

<br/>
<br/>

# FindWindow, FindWindowEx
  - FindWindow : Window의 핸들 값을 얻는 함수
    - Window Class의 이름이나 Window의 캡션이름으로 원하는 Window의 핸들 값을 얻는 함수이다
    - Top-Level Window만 검색이 가능하기 때문에 제한적이다. FindWindowEx을 사용하는 것이 더 좋다

<br/>

~~~c++
// FindWindow원형
HWND FindWindow(LPCTSTR lpClassName, LPCTSTR lpWindowName);
~~~

![20220923_234305](https://user-images.githubusercontent.com/39178978/191987269-7cde8231-debd-44b2-bfea-fee301ce133b.png)

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

~~~c++
// FindWindowEx원형
FindWindowEx(Parent, Child: HWND; ClassName, WindowName: PChar);
~~~

#AppDlg.cpp
~~~c++
// while문을 사용해서 찾을게 없을때 null이 나올때 까지 계속 찾는 방식을 이용, 전부 다 돌아서 null이 나오면 멈추게됨
void CMFCApplication3Dlg::OnBnClickedButton1()
{
	HWND h_wnd = NULL, h_edit_wnd = NULL;
	while(h_wnd = ::FindWindowEx(NULL, h_wnd, _T("#32770"),NULL)) // 윈도우 클래스 이름이 #32770인 것을 다 찾음
	{
		if (h_wnd != NULL)
		{
			while(h_edit_wnd = ::FindWindowEx(h_wnd, h_edit_wnd, _T("RICHEDIT50W"), NULL)) // 찾은 윈도우 클래스 에서 자식 클래스이름이 RICHEDIT50W인것을 다 찾음
			{
				if (h_edit_wnd  != NULL)
				{
					::SendMessage(h_edit_wnd, WM_SETTEXT, 0, (LPARAM)(CONST wchar_t *)_T("11111"));
				}
			}
		}
	}
}
~~~

<br/>

#AppDlg.cpp
~~~c++
// 주의 사항!! 
// KEYDOWN같은 것을 할때는 PostMessage메세지를 써야 하는데 그 이유는 SendMessage는 메시지 큐에 들어가지 않고, 메시지를 처리하고 반환 할때 까지 기다리기 때문에 각각이 따로 따로 처리 되어 진다. KEYDOWN같은 경우는 조합된 메시지를 줬을때 처리되는 경우가 있기 때문에 PostMessage메세지를 사용하여야 한다
void CMFCApplication3Dlg::OnBnClickedButton1()
{
	HWND h_wnd = NULL, h_edit_wnd = NULL;
	while(h_wnd = ::FindWindowEx(NULL, h_wnd, _T("#32770"),NULL)) // 윈도우 클래스 이름이 #32770인 것을 다 찾음
	{
		if (h_wnd != NULL)
		{
			while(h_edit_wnd = ::FindWindowEx(h_wnd, h_edit_wnd, _T("RICHEDIT50W"), NULL)) // 찾은 윈도우 클래스 에서 자식 클래스이름이 RICHEDIT50W인것을 다 찾음
			{
				if (h_edit_wnd  != NULL)
				{
					::SendMessage(h_edit_wnd, WM_SETTEXT, 0, (LPARAM)(CONST wchar_t *)_T("11111"));

					Sleep(200);

					::PostMessage(h_edit_wnd, WM_KEYDOWN, 0x0000000D, 0x001C0001);
					::PostMessage(h_edit_wnd, WM_KEYUP, 0x0000000D, 0xC01C0001);
				}
			}
		}
	}
}
~~~

###### [다양한 함수](#다양한-함수)
###### [Top](#top)

<br/>
<br/>

# AfxExtractSubString
  - 특정한 글자로 잘라낼 수 있다

<br/>

~~~c++
BOOL CMFCApplication1Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	CString str = _T("q^w^e^");

	CString own = _T("");
	CString two = _T("");
	CString three = _T("");

	AfxExtractSubString(own, str, 0, '^'); // q
	AfxExtractSubString(own, str, 1, '^'); // w
	AfxExtractSubString(own, str, 2, '^'); // e

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}
~~~

###### [다양한 함수](#다양한-함수)
###### [Top](#top)

<br/>
<br/>

# GetLastError
  - 마지막에 발생한 시스템 오류 코드를 확인 할 수 있다.

<br/>
<br/>

  - 어떤 오류인지 확인하는 방법

![image](https://user-images.githubusercontent.com/39178978/215752044-2360b3b9-81cd-45f4-af50-5932f9401cd1.png)


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
    - [출력시 폰트 컬러변경하기](#출력시-폰트-컬러변경하기)

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

# 출력시 폰트 컬러변경하기
  - 텍스트의 컬러 변경은, dc에 컬러를 바꿔서 출력하는 방법이 있다

#AppDlg.cpp
~~~C++
void CMFCApplication1Dlg::OnPaint()
{
	dc.SetTextColor(RGB(255, 0, 0)); // 텍스트를 빨간색으로 변경
	dc.TextOut(100, 100, _T("qwe")); // 텍스트 출력
}

~~~

<br/>

  - 위의 예제와 같은 방법으로,
    - SetTextColor : 텍스트 컬러 변경
    - SetBkColor : 텍스트 백그라운드 컬러 변경
    - SetBkMode : 텍스트 백그라운드 모드 설정(모드에서 설정하게 되면, SetBkColor는 먹히지 않게 된다)

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
	m_image.Load(L"BarcodePrint.png"); // 이 경로는 현제 사진이, 프로그램 솔루션안에 이 있어야 하는경로!

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
	m_image.Load(L"BarcodePrint.png"); // 이 경로는 현제 사진이, 프로그램 솔루션안에 이 있어야 하는경로!

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
	m_image.Load(L"BarcodePrint.png"); // 이 경로는 현제 사진이, 프로그램 솔루션안에 이 있어야 하는경로!

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

# ListBox (리스트박스)

  - 목록을 편하게 보관하는 ListBox

    - [변수추가](#변수추가)
    - [AddString](#addstring)
    - [InsertString](#insertstring)
    - [GetText](#gettext)
    - [다양한 데이터 구조체로 보관해서 활용하기](#다양한-데이터-구조체로-보관해서-활용하기)
      - SetItemDataPtr
      - GetCurSel()
      - LBN_SELCHANGE
    - [SetItemHeight](#setitemheight)
    - [OwnerDraw 사용하기](#ownerdraw-사용하기)
      - 배경 컬러 바꾸기
      - 텍스트 출력하기
      - itemAction을 이용해 상황에 따른 그리기
      - ODS_SELECTED, ODA_DRAWENTIRE...Etc
      - List Box 배경색 지정

###### [ListBox (리스트박스)](#listbox-리스트박스)
###### [Top](#top)

<br/>
<br/>

# 변수추가

  - 리스트 박스에서 마우스 오른쪽 클릭 -> 변수 추가 -> 변수를 추가해서 사용한다
  - 추가하게 되면, h파일에 ‘변수’, ccp파일에 ‘DDX_Control’이 추가 된다

###### [ListBox (리스트박스)](#listbox-리스트박스)
###### [Top](#top)

<br/>
<br/>

# AddString

  - 오름차순(사전순)으로 스트링을 ListBox에 추가한다

#AppDlg.cpp
~~~c++
// 현재 ListBox의 변수 : m_MyBox
void CMFCApplication1Dlg::OnBnClickedButton1()
{
	CString str = _T("");
	GetDlgItemText(IDC_EDIT1, str);
	m_MyBox.AddString(str);
}
~~~

<br/>

![image](https://user-images.githubusercontent.com/39178978/188180052-bb811d75-4bb3-4d46-b749-5dd45b59020e.png)

###### [ListBox (리스트박스)](#listbox-리스트박스)
###### [Top](#top)

<br/>
<br/>

# InsertString

  - 원하는 위치에 스트링을 추가한다

#AppDlg.cpp
~~~c++
// 현재 ListBox의 변수 : m_MyBox
// 0번째 자리에 스트링이 추가 된다
void CMFCApplication1Dlg::OnBnClickedButton1()
{
	CString str = _T("");
	GetDlgItemText(IDC_EDIT1, str);
	m_MyBox.InsertString(0, str);
}
~~~

<br/>

#AppDlg.cpp
~~~c++
// 현재 ListBox의 변수 : m_MyBox
// -1을 주면 맨 아래쪽에 스트링이 추가된다
void CMFCApplication1Dlg::OnBnClickedButton1()
{
	CString str = _T("");
	GetDlgItemText(IDC_EDIT1, str);
	m_MyBox.InsertString(-1, str);
}
~~~

![image](https://user-images.githubusercontent.com/39178978/188180223-08da8e1b-bacc-4847-80f2-539fb6639895.png)

###### [ListBox (리스트박스)](#listbox-리스트박스)
###### [Top](#top)

<br/>
<br/>

# GetText

  - 원하는 위치의 스트링을 가져온다

#AppDlg.cpp
~~~c++
// 현재 ListBox의 변수 : m_MyBox
void CMFCApplication1Dlg::OnBnClickedButton1()
{
	CString str1; //스트링 추가 1
	CString str2; //스트링 추가 2
	CString str3; //스트링 추가 3
	GetDlgItemText(IDC_EDIT1, str1); //스트링 추가 1
	GetDlgItemText(IDC_EDIT2, str2); //스트링 추가 2
	GetDlgItemText(IDC_EDIT3, str3); //스트링 추가 3

	CString str4;
	str4.Format(_T("%s %s %s"), str1, str2, str3);

	int index = m_MyBox.InsertString(0, str4); // 스트링 집어 넣기

	CString s;
	m_MyBox.GetText(0, s); // 스트링 가져오기
	SetDlgItemText(IDC_EDIT4, s);
}
~~~

![image](https://user-images.githubusercontent.com/39178978/188180581-f59131e8-6d6f-4fe3-a800-e0f243bdebcf.png)

###### [ListBox (리스트박스)](#listbox-리스트박스)
###### [Top](#top)

<br/>
<br/>

# 다양한 데이터 구조체로 보관해서 활용하기

  - SetItemDataPtr
    - 데이터를 효과적으로 저장하기 위해서 index에 구조체를 추가한다
  - 이벤트 처리기추가
    - ListBox에 마우스 오른쪽 클릭 -> 이벤트 처리기 추가 -> LBN_SELCHANGE 추가하기
      - 내부 항목을 클릭또는 키보드로 포커스 시에 발생하는 메시지
  - GetCurSel()
    - 현재 포커스 되고 있는 커서의 index를 반환

<br/>

#AppDlg.cpp
~~~c++
// 현재 ListBox의 변수 : m_MyBox
// SetItemDataPtr을 활용 하여 index에 같이 구조체 데이어를 보관한다
void CMFCApplication1Dlg::OnBnClickedButton1()
{
	CString str1; //데이터 추가 1
	CString str2; //데이터 추가 2
	int str3; //데이터 추가 3
	GetDlgItemText(IDC_EDIT1, str1); //데이터 추가 1
	GetDlgItemText(IDC_EDIT2, str2); //데이터 추가 2
	str3 = GetDlgItemInt(IDC_EDIT3); //데이터 추가 3

	data *p = new data;
	p->data1 = str1; // CString
	wcscpy_s(p->data2, 24, str2); // char
	p->data3 = str3; // int
	
	CString str4;
	str4.Format(_T("%s %s %d"), str1, str2, str3);
	int index = m_MyBox.InsertString(0, str4); // 스트링 집어 넣기
	m_MyBox.SetItemDataPtr(index, p); // index에 구조체 데이터 넣기
}

. . .

// List Box에 추가한 메시지
// List Box안에 있는 데이터를 포커스 할시에 발생되는 메시지
// GetItemDataPtr을 사용해서 현재 index에 구조체 데이터를 가져온다
void CMFCApplication1Dlg::OnLbnSelchangeList1()
{
	int index = m_MyBox.GetCurSel(); // 현재 커서의 index가져오기
	if(LB_ERR != index)
	{
		data *p = (data *)m_MyBox.GetItemDataPtr(index); // 저장했던 index에 있던 구조체 가져오기

		SetDlgItemText(IDC_EDIT4, p->data1);
		SetDlgItemText(IDC_EDIT5, p->data2);
		SetDlgItemInt(IDC_EDIT6, p->data3);
	}
}

. . .

// 종료 전에 메모리 할당했던 구조체를 모두 해제해 준다
void CMFCApplication1Dlg::OnDestroy()
{
	CDialogEx::OnDestroy();

	int count = m_MyBox.GetCount(); // 현재 리스트에 있는 갯수
	data *p;
	for (int i = 0; i < count; i++)
	{
		p = (data *)m_MyBox.GetItemDataPtr(i);
		delete p;
	}
	m_MyBox.ResetContent();
}
~~~

###### [ListBox (리스트박스)](#listbox-리스트박스)
###### [Top](#top)

<br/>
<br/>

# SetItemHeight

  - 높이를 지정한다
  - Owner Draw가 Variable일때 인덱스를 바꾸면 각각의 Height를 조절 가능하다

<br/>

#AppDlg.cpp
~~~c++
BOOL CMFCApplication2Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	for(int i = 0; i < 10; i++)
	{
		m_MyBox.AddString(_T("1"));
	}

	m_MyBox.SetItemHeight(1, 50); 
}
~~~

![image](https://user-images.githubusercontent.com/39178978/188181211-95125b4f-d185-4cbb-b659-062c970e0902.png)

###### [ListBox (리스트박스)](#listbox-리스트박스)
###### [Top](#top)

<br/>
<br/>

# OwnerDraw 사용하기

  - Owner Draw 를 사용할때는 Has Strings도 꼭 True로 해야 한다 Has Strings을 하지 않으면 String을 저장하는데 에러가 있으며  InsertString, AddString을 사용하는데 문제가 된다
  - Owner Draw 로 바꾸고 에러가 생기는 것은 Owner Draw작업을 전혀 하지 않았기 때문이다.(작업을 해줘야 없어짐 ㅇㅇ)
    - 프로젝트 -> 클래스 마법사 -> 메세지 -> WM_DRAWITEM 추가하고 작업하면 에러가 없어 진다

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - Owner Draw 에러 없애기

#AppDlg.cpp
~~~c++
// List Box의 ID가 IDC_LIST1일 경우
// 이렇게 하면 에러가 없어 진다.
// 아무것도 그리지 않았으면 안에 내용물도 다 없어 진다
void CMFCApplication2Dlg::OnDrawItem(int nIDCtl, LPDRAWITEMSTRUCT lpDrawItemStruct)
{
	if (nIDCtl == IDC_LIST1)
	{

	}
	else CDialogEx::OnDrawItem(nIDCtl, lpDrawItemStruct);
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 배경 컬러 바꾸기

#AppDlg.cpp
~~~c++
// 현재 추가한 string이 10개 정도 되고, 따로 지정하지 않으면 10개 전부 따로 WM_DRAWITEM가 들어오게 된다. string을 출력하지 않았지만 배경만 출력 했으므로, string이 있는 공간 만큼의 배경이 바뀌게 된다 
void CMFCApplication2Dlg::OnDrawItem(int nIDCtl, LPDRAWITEMSTRUCT lp)
{
	if (nIDCtl == IDC_LIST1)
	{
		CDC *p_dc = CDC::FromHandle(lp->hDC); //위도우 핸들이 넘어오기 때문에 그것을 그림을 그리는 CD로 변환해서 MFC에서 사용하기(win32는 그냥 사용가능)
		p_dc->FillSolidRect(&lp->rcItem, RGB(128, 0, 128));

	}
	else CDialogEx::OnDrawItem(nIDCtl, lp);
}
~~~

![image](https://user-images.githubusercontent.com/39178978/188250631-5122e91b-ea6b-4098-925f-34eea5de647f.png)

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 텍스트 출력하기

#AppDlg.cpp
~~~c++
// 현재 추가한 string이 10개 정도 되고, 따로 지정하지 않으면 10개 전부 따로 WM_DRAWITEM가 들어오게 된다. 각각이 TextOut으로 지정된 곳에 출력된다
void CMFCApplication2Dlg::OnDrawItem(int nIDCtl, LPDRAWITEMSTRUCT lp)
{
	if (nIDCtl == IDC_LIST1)
	{
		CDC *p_dc = CDC::FromHandle(lp->hDC); //위도우 핸들이 넘어오기 때문에 그것을 그림을 그리는 CD로 변환해서 MFC에서 사용하기(win32는 그냥 사용가능)

		CString str;
		m_MyBox.GetText(lp->itemID, str);
		p_dc->SetTextColor(RGB(0, 255, 0)); // 텍스트 컬러 지정
		p_dc->TextOut(lp->rcItem.left + 2, lp->rcItem.top + 2, str); // 왼쪽에서 2만큼 위쪽에서 2만큼 떨어진 곳에서 텍스트를 그리라는것
		
	}
	else CDialogEx::OnDrawItem(nIDCtl, lp);
}
~~~

![image](https://user-images.githubusercontent.com/39178978/188250658-62f8d974-516a-4f25-a647-90c3a3e0560a.png)

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - itemAction을 이용해 상황에 따른 그리기
    - OnDrawItem은 다른 이유때문에 호출이 많기 때문에 계속 호출하게 되면 장치 DC가 무리가 되어 깜박거리는 현상이 발생하게 된다. 따라서 특정한 상황에서만 다시 그리는 것이 좋다

#AppDlg.cpp
~~~c++
void CMFCApplication2Dlg::OnDrawItem(int nIDCtl, LPDRAWITEMSTRUCT lp)
{
	// ODA_DRAWENTIRE : 일부나 전체가 지워져서 다시 그림
	// ODA_FOCUS : 포커스되서 다시 그림
	// ODA_SELECT : 선택되서 다시 그림

	if (nIDCtl == IDC_LIST1)
	{
		if((lp->itemAction & ODA_DRAWENTIRE) || (lp->itemAction & ODA_FOCUS) || (lp->itemAction & ODA_SELECT))
		{
			CDC *p_dc = CDC::FromHandle(lp->hDC); //위도우 핸들이 넘어오기 때문에 그것을 그림을 그리는 CD로 변환해서 MFC에서 사용하기(win32는 그냥 사용가능)
			p_dc->FillSolidRect(&lp->rcItem, RGB(128, 0, 128));

			CString str;
			m_MyBox.GetText(lp->itemID, str);
			p_dc->SetTextColor(RGB(0, 255, 0)); // 텍스트 컬러 지정
			p_dc->TextOut(lp->rcItem.left + 2, lp->rcItem.top + 2, str); // 왼쪽에서 2만큼 위쪽에서 2만큼 떨어진 곳에서 텍스트를 그리라는것
		}
	}
	else CDialogEx::OnDrawItem(nIDCtl, lp);
}
~~~

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - 선택 되어 있는 항목, 안되어 있는 항목 컬러 변경

#AppDlg.cpp
~~~c++
void CMFCApplication2Dlg::OnDrawItem(int nIDCtl, LPDRAWITEMSTRUCT lp)
{
	// ODA_DRAWENTIRE : 일부나 전체가 지워져서 다시 그림
	// ODA_FOCUS : 포커스되서 다시 그림
	// ODA_SELECT : 선택되서 다시 그림

	if (nIDCtl == IDC_LIST1)
	{
		if((lp->itemAction & ODA_DRAWENTIRE) || (lp->itemAction & ODA_FOCUS) || (lp->itemAction & ODA_SELECT))
		{
			CDC *p_dc = CDC::FromHandle(lp->hDC); //위도우 핸들이 넘어오기 때문에 그것을 그림을 그리는 CD로 변환해서 MFC에서 사용하기(win32는 그냥 사용가능)

			if(lp->itemState & ODS_SELECTED)
				p_dc->FillSolidRect(&lp->rcItem, RGB(0, 0, 128));
			else
				p_dc->FillSolidRect(&lp->rcItem, RGB(128, 0, 128));
			CString str;
			m_MyBox.GetText(lp->itemID, str);
			p_dc->SetTextColor(RGB(0, 255, 0)); // 텍스트 컬러 지정
			p_dc->TextOut(lp->rcItem.left + 2, lp->rcItem.top + 2, str); // 왼쪽에서 2만큼 위쪽에서 2만큼 떨어진 곳에서 텍스트를 그리라는것
		}
	}
	else CDialogEx::OnDrawItem(nIDCtl, lp);
}
~~~

![image](https://user-images.githubusercontent.com/39178978/188250703-69d5ee54-57f3-4869-9806-4eea761d5ade.png)

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - List Box 배경색 지정(OnCtlColor 사용)
    - 리스트가 많지 않을때 List Box 의 배경색은 바껴있지 않고, 리스트 목록 배경색만 바껴 있게 되기 때문에 일반 배경색도 바꿔줘야 한다.

#AppDlg.h
~~~c++
private:
	CBrush m_MyBox_bk;
~~~

<br/>

#AppDlg.cpp
~~~c++
// CBrush는 생성자에 만들어도 되며 OnInitDialog에 만들어도 되고 OnCtlColor에 만들어도 된다(OnCtlColor는 다른이유로도 작동 되기 때문에 비효율적)
BOOL CMFCApplication2Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	m_MyBox_bk.CreateSolidBrush(RGB(128, 0, 128));

}

. . .

// WM_CTLCOLOR메시지를 추가하여 작업한다
HBRUSH CMFCApplication2Dlg::OnCtlColor(CDC* pDC, CWnd* pWnd, UINT nCtlColor)
{
	HBRUSH hbr = CDialogEx::OnCtlColor(pDC, pWnd, nCtlColor);

	if (pWnd->GetDlgCtrlID() == IDC_LIST1)
	{
		hbr = m_MyBox_bk;
	}

	return hbr;
}
~~~

![image](https://user-images.githubusercontent.com/39178978/188250754-2a4503a4-2f3c-43c3-81c5-a5450e66d9cd.png)

<br/>

![image](https://user-images.githubusercontent.com/39178978/188250764-7a84478e-2bca-48a5-b44d-ff903f1fc732.png)

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - Owner Draw : Variable을 사용해서 각각의 데이터의 height를 조절하기
    - Owner Draw : Variable을 사용하게 되면 오류가 발생할때가 있는데 그것은 WM_MEASUREITEM메시지가 없기 때문임으로 추가해 주면 된다.
      - 프로젝트 -> 클래스 마법사 -> 메세지 -> WM_MEASUREITEM 추가하기(AppDlg.h, AppDlg.cpp에 함수해더,BEGIN_MESSAGE_MAP 자동으로 추가됨)
    - Owner Draw : Fixed 일때는 WM_MEASUREITEM가 단1번만 들어오는데 반해서 Owner Draw : Variable일때는 데이터 갯수마다 메시지가 들어오게된다

#AppDlg.cpp
~~~c++
// itemID으로 각 데이터를 구분해서 필요한 데이터행에만 적용 시킬 수 있다.
void CMFCApplication4Dlg::OnMeasureItem(int nIDCtl, LPMEASUREITEMSTRUCT lp)
{
	if (nIDCtl == IDC_LIST1)
	{
		if (lp->itemID == 0)
			lp->itemHeight += 20;
	}
	else
		CDialogEx::OnMeasureItem(nIDCtl, lp);
}


void CMFCApplication4Dlg::OnDrawItem(int nIDCtl, LPDRAWITEMSTRUCT lp)
{
	if (nIDCtl == IDC_LIST1)
	{
		if((lp->itemAction & ODA_DRAWENTIRE) || (lp->itemAction & ODA_FOCUS) || (lp->itemAction & ODA_SELECT))
		{
			CDC *p_dc = CDC::FromHandle(lp->hDC); //위도우 핸들이 넘어오기 때문에 그것을 그림을 그리는 CD로 변환해서 MFC에서 사용하기(win32는 그냥 사용가능)

			if(lp->itemState & ODS_SELECTED)
				p_dc->FillSolidRect(&lp->rcItem, RGB(0, 0, 128));
			else
				p_dc->FillSolidRect(&lp->rcItem, RGB(128, 0, 128));
			CString str;
			m_MyBox.GetText(lp->itemID, str);
			p_dc->SetTextColor(RGB(0, 255, 0)); // 텍스트 컬러 지정
			p_dc->TextOut(lp->rcItem.left + 2, lp->rcItem.top + 2, str); // 왼쪽에서 2만큼 위쪽에서 2만큼 떨어진 곳에서 텍스트를 그리라는것
		}
	}
	else
		CDialogEx::OnDrawItem(nIDCtl, lp);
}
~~~

<br/>

![20220910_235222](https://user-images.githubusercontent.com/39178978/189488804-029e7d34-0d10-4d5b-a4f3-4c5d257196e8.png)

###### [ListBox (리스트박스)](#listbox-리스트박스)
###### [Top](#top)

<br/>
<br/>

***

# ListControl (리스트컨트롤)

  - 목록을 편하게 보관하는 ListControl.
  - ListBox 보다 더 기능이 많은 컨트롤이다
  - 컨트롤 속성에 ‘View’에 다양한 모드가 있으며 Report모드가 일반적임으로 아래 예시는, Report모드를 사용하여 설명한다
  - 변수추가
    - 리스트 박스에서 마우스 오른쪽 클릭 -> 변수 추가 -> 변수를 추가해서 사용한다
    - 추가하게 되면, h파일에 ‘변수’, ccp파일에 ‘DDX_Control’이 추가 된다
    - 현재 List Control의 변수 : m_My_LCbox

<br/>

  - [칼럼 초기 설정](#칼럼-초기-설정)
  - [LVCF_FMT 및 기타 속성들](#lvcf_fmt-및-기타-속성들)
  - [칼럼에 데이터 추가하기](#칼럼에-데이터-추가하기)
  - [SetExtendedStyle (열 전체를 선택하기)](#setextendedstyle-열-전체를-선택하기)
  - [LVN_ITEMCHANGED 메시지](#lvn_itemchanged-메시지)
  - [SetTextColor,SetTextBkColor](#settextcolorsettextbkcolor)
  - [Owner Draw,GetItemText,MeasureItem](#owner-drawgetitemtextmeasureitem)
  - [추가 작업 진행](#추가-작업-진행)

###### [ListControl (리스트컨트롤)](#listcontrol-리스트컨트롤)
###### [Top](#top)

<br/>
<br/>

# 칼럼 초기 설정

~~~c++
// 원형
LVCOLUMN
typedef struct tagLVCOLUMNW
{
    UINT mask;
    int fmt;
    int cx;
    LPWSTR pszText;
    int cchTextMax;
    int iSubItem;
    int iImage;
    int iOrder;
#if (NTDDI_VERSION >= NTDDI_VISTA) 
    int cxMin;       // min snap point
    int cxDefault;   // default snap point
    int cxIdeal;     // read only. ideal may not eqaul current width if auto sized (LVS_EX_AUTOSIZECOLUMNS) to a lesser width.
#endif
} LVCOLUMNW, *LPLVCOLUMNW;
~~~


<br/>

#AppDlg.cpp
~~~c++
// 초기 설정을 지정하기 위해서 LVCOLUMN을 살펴 보면 다양한 변수들이 있고 이중에서 넣을 변수만 쓴다고 하는 플래그를 사용해서 이용한다
BOOL CMFCApplication3Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	LVCOLUMN add_column;

	add_column.mask = LVCF_TEXT | LVCF_WIDTH;
	add_column.pszText = _T("aaaa");
	add_column.cx = 80;
	m_My_LCbox.InsertColumn(0, &add_column); // 0번째 칼럼에 설정한다

	add_column.pszText = _T("bbbb");
	add_column.cx = 80;
	m_My_LCbox.InsertColumn(1, &add_column); // 0번째 칼럼에 설정한다
}
~~~

![image](https://user-images.githubusercontent.com/39178978/188251051-d4a6d640-00a7-4344-8740-2344bde7f52b.png)

###### [ListControl (리스트컨트롤)](#listcontrol-리스트컨트롤)
###### [Top](#top)

<br/>
<br/>

# LVCF_FMT 및 기타 속성들

  - 설정중에서 LVCF_FMT을 이용해서 칼럼 중간에 표시하기

#AppDlg.cpp
~~~c++
BOOL CMFCApplication3Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	LVCOLUMN add_column;

	add_column.mask = LVCF_TEXT | LVCF_WIDTH;
	add_column.pszText = _T("aaaa");
	add_column.cx = 80;
	m_My_LCbox.InsertColumn(0, &add_column); // 0번째 칼럼에 설정한다

	add_column.mask = LVCF_TEXT | LVCF_WIDTH | LVCF_FMT;
	add_column.pszText = _T("bbbb");
	add_column.cx = 100;
	add_column.fmt = LVCFMT_CENTER;
	m_My_LCbox.InsertColumn(1, &add_column); // 0번째 칼럼에 설정한다
}
~~~

![image](https://user-images.githubusercontent.com/39178978/188251087-9699762f-a2f9-42cf-aee8-e8eef5f1f19f.png)

###### [ListControl (리스트컨트롤)](#listcontrol-리스트컨트롤)
###### [Top](#top)

<br/>
<br/>

# 칼럼에 데이터 추가하기

#AppDlg.cpp
~~~c++
BOOL CMFCApplication3Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	LVCOLUMN add_column;

	add_column.mask = LVCF_TEXT | LVCF_WIDTH;
	add_column.pszText = _T("aaaa");
	add_column.cx = 80;
	m_My_LCbox.InsertColumn(0, &add_column); // 0번째 칼럼에 설정한다

	add_column.mask = LVCF_TEXT | LVCF_WIDTH | LVCF_FMT;
	add_column.pszText = _T("bbbb");
	add_column.cx = 100;
	add_column.fmt = LVCFMT_CENTER;
	m_My_LCbox.InsertColumn(1, &add_column); // 0번째 칼럼에 설정한다

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}

. . .

void CMFCApplication3Dlg::OnBnClickedButton1()
{
	CString str;
	GetDlgItemText(IDC_EDIT1, str);

	LV_ITEM add_item;
	add_item.mask = LVIF_TEXT;
	add_item.iItem = 0; // n번째 열에 입력

	add_item.pszText = (wchar_t *)(const wchar_t *)str;
	add_item.iSubItem = 0; // 0번째 데이터에 입력
	m_My_LCbox.InsertItem(&add_item);

	GetDlgItemText(IDC_EDIT2, str);
	add_item.pszText = (wchar_t *)(const wchar_t *)str;
	add_item.iSubItem = 1; // 0번째 데이터에 입력
	m_My_LCbox.SetItem(&add_item);
}
~~~

<br/>

~~~c++
add_item.pszText = (wchar_t *)(const wchar_t *)str;
add_item.iSubItem = 1; // 0번째 데이터에 입력
m_My_LCbox.SetItem(&add_item);
이렇게 3줄 대신에

m_My_LCbox.SetItemText(0, 1, str);

이렇게 한줄로 대체 가능하다
~~~

![image](https://user-images.githubusercontent.com/39178978/188251129-423543b5-ae99-4d8b-9efb-d4cb7b4b2bfd.png)

###### [ListControl (리스트컨트롤)](#listcontrol-리스트컨트롤)
###### [Top](#top)

<br/>
<br/>

# SetExtendedStyle (열 전체를 선택하기)

  - 추가 속성을 지정 할 수 있다

#AppDlg.cpp
~~~c++
BOOL CMFCApplication3Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	LVCOLUMN add_column;

	add_column.mask = LVCF_TEXT | LVCF_WIDTH;
	add_column.pszText = _T("aaaa");
	add_column.cx = 80;
	m_My_LCbox.InsertColumn(0, &add_column); // 0번째 칼럼에 설정한다

	add_column.mask = LVCF_TEXT | LVCF_WIDTH | LVCF_FMT;
	add_column.pszText = _T("bbbb");
	add_column.cx = 100;
	add_column.fmt = LVCFMT_CENTER;
	m_My_LCbox.InsertColumn(1, &add_column); // 0번째 칼럼에 설정한다

	m_My_LCbox.SetExtendedStyle(LVS_EX_FULLROWSELECT);

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}

. . .

void CMFCApplication3Dlg::OnBnClickedButton1()
{
	CString str;
	GetDlgItemText(IDC_EDIT1, str);

	LV_ITEM add_item;
	add_item.mask = LVIF_TEXT;
	add_item.iItem = 0; // n번째 열에 입력

	add_item.pszText = (wchar_t *)(const wchar_t *)str;
	add_item.iSubItem = 0; // 0번째 데이터에 입력
	m_My_LCbox.InsertItem(&add_item);

	GetDlgItemText(IDC_EDIT2, str);
	add_item.pszText = (wchar_t *)(const wchar_t *)str;
	add_item.iSubItem = 1; // 0번째 데이터에 입력
	m_My_LCbox.SetItem(&add_item);
}
~~~

![image](https://user-images.githubusercontent.com/39178978/188251162-515f32b3-c43a-438e-9dde-1295a02fb64d.png)

###### [ListControl (리스트컨트롤)](#listcontrol-리스트컨트롤)
###### [Top](#top)

<br/>
<br/>

# LVN_ITEMCHANGED 메시지

  - LVN_ITEMCHANGED
    - 항목을 바꾸거나 갱신 및 변경 됐을때 들어오는 메시지
    - List Control 마우스 오른쪽 클릭 -> 이벤트 처리기 추가 -> LVN_ITEMCHANGED
  - GetItemText
    - 문자열 반환 하기
  - LVS_NOCOLUMNH
    - 해더 제거

#AppDlg.cpp
~~~c++
BOOL CMFCApplication3Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	LVCOLUMN add_column;

	add_column.mask = LVCF_TEXT | LVCF_WIDTH;
	add_column.pszText = _T("aaaa");
	add_column.cx = 80;
	m_My_LCbox.InsertColumn(0, &add_column); // 0번째 칼럼에 설정한다

	add_column.mask = LVCF_TEXT | LVCF_WIDTH | LVCF_FMT;
	add_column.pszText = _T("bbbb");
	add_column.cx = 100;
	add_column.fmt = LVCFMT_CENTER;
	m_My_LCbox.InsertColumn(1, &add_column); // 0번째 칼럼에 설정한다

	m_My_LCbox.SetExtendedStyle(LVS_EX_FULLROWSELECT);

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}

. . .

void CMFCApplication3Dlg::OnBnClickedButton1()
{
	CString str;
	GetDlgItemText(IDC_EDIT1, str);

	LV_ITEM add_item;
	add_item.mask = LVIF_TEXT;
	add_item.iItem = 0; // n번째 열에 입력

	add_item.pszText = (wchar_t *)(const wchar_t *)str;
	add_item.iSubItem = 0; // 0번째 데이터에 입력
	m_My_LCbox.InsertItem(&add_item);

	GetDlgItemText(IDC_EDIT2, str);
	add_item.pszText = (wchar_t *)(const wchar_t *)str;
	add_item.iSubItem = 1; // 0번째 데이터에 입력
	m_My_LCbox.SetItem(&add_item);

	m_My_LCbox.SetItemText(0, 1, str);
}

. . .

// 리스트 목록을 클릭하면 IDC컨트롤에 그 목록을 추출해서 출력한다
void CMFCApplication3Dlg::OnLvnItemchangedList1(NMHDR *pNMHDR, LRESULT *pResult)
{
	// NMLISTVIEW *pNMLV == LPNMLISTVIEW pNMLV
	LPNMLISTVIEW pNMLV = reinterpret_cast<LPNMLISTVIEW>(pNMHDR);
	
	if(pNMLV->uNewState & LVIS_SELECTED) // 선택 되었을때
	{
		SetDlgItemText(IDC_EDIT1, m_My_LCbox.GetItemText(pNMLV->iItem, 0));
		SetDlgItemText(IDC_EDIT2, m_My_LCbox.GetItemText(pNMLV->iItem, 1));
	}
	
	*pResult = 0;
}
~~~

![image](https://user-images.githubusercontent.com/39178978/188251223-905c437e-5f87-4bf2-bfe0-40922dfce700.png)

<br/>

~~~c++
// 이것을 추가 하게 되면 맨 위 컬럼이 숨기기가 된다
m_My_LCbox.ModifyStyle(0, LVS_NOCOLUMNHEADER);
~~~

###### [ListControl (리스트컨트롤)](#listcontrol-리스트컨트롤)
###### [Top](#top)

<br/>
<br/>

# SetTextColor,SetTextBkColor

  - SetTextColor(목록 텍스트 컬러 변경)
  - SetTextBkColor(목록 텍스트 배경 컬러 변경)

#AppDlg.cpp
~~~c++
// m_MyList : List Control의 멤버 변수 이름
BOOL CMFCApplication5Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	LVCOLUMN add_column;

	add_column.mask = LVCF_TEXT | LVCF_WIDTH;
	add_column.pszText = _T("aaaa");
	add_column.cx = 80;
	m_MyList.InsertColumn(0, &add_column); // 0번째 칼럼에 설정한다

	add_column.mask = LVCF_TEXT | LVCF_WIDTH;
	add_column.pszText = _T("bbbb");
	add_column.cx = 100;
	m_MyList.InsertColumn(1, &add_column); // 0번째 칼럼에 설정한다

	m_MyList.SetExtendedStyle(LVS_EX_FULLROWSELECT);

	m_MyList.SetTextColor(RGB(100,200,100)); // 텍스트 컬러 변경
m_MyList.SetTextBkColor(RGB(0, 0, 0)); // 텍스트 배경 컬러 변경

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}

. . .


void CMFCApplication5Dlg::OnBnClickedButton1()
{
	CString str;
	GetDlgItemText(IDC_EDIT1, str);

	LV_ITEM add_item;
	add_item.mask = LVIF_TEXT;
	add_item.iItem = 0; // n번째 열에 입력

	add_item.pszText = (wchar_t *)(const wchar_t *)str;
	add_item.iSubItem = 0; // 0번째 데이터에 입력
	m_MyList.InsertItem(&add_item);

	GetDlgItemText(IDC_EDIT2, str);
	add_item.pszText = (wchar_t *)(const wchar_t *)str;
	add_item.iSubItem = 1; // 0번째 데이터에 입력
	m_MyList.SetItem(&add_item);
}
~~~

![20220916_220044](https://user-images.githubusercontent.com/39178978/190644763-c2c9e30a-9b4c-4638-bb4c-5f3101ba28b9.png)

###### [ListControl (리스트컨트롤)](#listcontrol-리스트컨트롤)
###### [Top](#top)

<br/>
<br/>

# Owner Draw,GetItemText,MeasureItem

  - Owner Draw로 커스텀으로 그리기 위해서는, 속성창에서 Owner Draw Fixed : True로 수정후 작업을 진행해야함
    - 클릭시 컬러 변경 및 텍스트 출력 및 목록별 컬러변경 등 다양한 작업 가능
  - MeasureItem : 그려질때 한번 호출되기 때문에, 여기서 각 행의 높이를 설정함
  - GetItemText : 텍스트 가져오기

#AppDlg.cpp
~~~c++
// m_MyList : List Control의 멤버 변수 이름
BOOL CMFCApplication5Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	LVCOLUMN add_column;

	add_column.mask = LVCF_TEXT | LVCF_WIDTH;
	add_column.pszText = _T("aaaa");
	add_column.cx = 80;
	m_MyList.InsertColumn(0, &add_column); // 0번째 칼럼에 설정한다

	add_column.mask = LVCF_TEXT | LVCF_WIDTH;
	add_column.pszText = _T("bbbb");
	add_column.cx = 100;
	m_MyList.InsertColumn(1, &add_column); // 0번째 칼럼에 설정한다

	m_MyList.SetExtendedStyle(LVS_EX_FULLROWSELECT);

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}

. . .

void CMFCApplication5Dlg::OnBnClickedButton1()
{
	CString str;
	GetDlgItemText(IDC_EDIT1, str);

	LV_ITEM add_item;
	add_item.mask = LVIF_TEXT;
	add_item.iItem = 0; // n번째 열에 입력

	add_item.pszText = (wchar_t *)(const wchar_t *)str;
	add_item.iSubItem = 0; // 0번째 데이터에 입력
	m_MyList.InsertItem(&add_item);

	GetDlgItemText(IDC_EDIT2, str);
	add_item.pszText = (wchar_t *)(const wchar_t *)str;
	add_item.iSubItem = 1; // 0번째 데이터에 입력
	m_MyList.SetItem(&add_item);
}

. . .

void CMFCApplication5Dlg::OnMeasureItem(int nIDCtl, LPMEASUREITEMSTRUCT lp)
{
	if (nIDCtl == IDC_LIST1)
	{
		lp->itemHeight += 20;
	}
	else
		CDialogEx::OnMeasureItem(nIDCtl, lp);
}

. . .

void CMFCApplication5Dlg::OnDrawItem(int nIDCtl, LPDRAWITEMSTRUCT lp)
{
	if (nIDCtl == IDC_LIST1)
	{
		if((lp->itemAction & ODA_DRAWENTIRE) || (lp->itemAction & ODA_FOCUS) || (lp->itemAction & ODA_SELECT))
		{
			CDC *p_dc = CDC::FromHandle(lp->hDC);

			if(lp->itemState & ODS_SELECTED)
				p_dc->FillSolidRect(&lp->rcItem, RGB(100, 235, 235));
			else if(lp->itemID % 2 == 0)
				p_dc->FillSolidRect(&lp->rcItem, RGB(235, 235, 235));
			else
				p_dc->FillSolidRect(&lp->rcItem, RGB(255, 255, 255));

			CString str1 = m_MyList.GetItemText(lp->itemID, 0);
			CString str2 = m_MyList.GetItemText(lp->itemID, 1);

			p_dc->TextOut(lp->rcItem.left + 2, lp->rcItem.top + 2, str1);
			p_dc->TextOut(lp->rcItem.left + 86, lp->rcItem.top + 2, str2);
		}
	}
	else
		CDialogEx::OnDrawItem(nIDCtl, lp);
}
~~~

![20220916_221049](https://user-images.githubusercontent.com/39178978/190646567-d5df0643-baa7-4d23-9865-bc1e8f465959.png)

###### [ListControl (리스트컨트롤)](#listcontrol-리스트컨트롤)
###### [Top](#top)

<br/>
<br/>

# 추가 작업 진행

  - ctrl을 클릭 하지않고 메뉴를 선택하는 것처럼 클릭된 곳에 컬러 표시를 나게 하는 작업진행
  - 항목 데이터를 클릭하게 되면 연속으로 OnDrawItem이 두번 호출되서 ODS_SELECTED로 두번 넘어오게 되는 현상이 발생하게 되어서, 마우스 클릭시 에러사항이 발생함
    - GotoDlgCtrl을 사용하여 선택 포커스를 다른곳으로 옮김으로써 옮길때 한번 발생되는 메시지로 컬러를 변경하도록 함


#AppDlg.h
~~~c++
public:
	int flage[10];
~~~

#AppDlg.cpp
~~~c++
BOOL CMFCApplication5Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	for (int i = 0; i < 10; i++)
	{
		flage[i] = 0;
	}

	LVCOLUMN add_column;

	add_column.mask = LVCF_TEXT | LVCF_WIDTH;
	add_column.pszText = _T("aaaa");
	add_column.cx = 80;
	m_MyList.InsertColumn(0, &add_column); // 0번째 칼럼에 설정한다

	add_column.mask = LVCF_TEXT | LVCF_WIDTH;
	add_column.pszText = _T("bbbb");
	add_column.cx = 100;
	m_MyList.InsertColumn(1, &add_column); // 0번째 칼럼에 설정한다

	//m_MyList.SetExtendedStyle(LVS_EX_FULLROWSELECT);
	m_MyList.SetExtendedStyle(LVS_EX_GRIDLINES);

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}

. . .

void CMFCApplication5Dlg::OnBnClickedButton1()
{
	CString str;
	GetDlgItemText(IDC_EDIT1, str);

	LV_ITEM add_item;
	add_item.mask = LVIF_TEXT;
	add_item.iItem = 0; // n번째 열에 입력

	add_item.pszText = (wchar_t *)(const wchar_t *)str;
	add_item.iSubItem = 0; // 0번째 데이터에 입력
	m_MyList.InsertItem(&add_item);

	GetDlgItemText(IDC_EDIT2, str);
	add_item.pszText = (wchar_t *)(const wchar_t *)str;
	add_item.iSubItem = 1; // 0번째 데이터에 입력
	m_MyList.SetItem(&add_item);
}

. . .

void CMFCApplication5Dlg::OnMeasureItem(int nIDCtl, LPMEASUREITEMSTRUCT lp)
{
	if (nIDCtl == IDC_LIST1)
	{
		lp->itemHeight += 20;
	}
	else
		CDialogEx::OnMeasureItem(nIDCtl, lp);
}

. . .

void CMFCApplication5Dlg::OnDrawItem(int nIDCtl, LPDRAWITEMSTRUCT lp)
{
	if (nIDCtl == IDC_LIST1)
	{
		if((lp->itemAction & ODA_DRAWENTIRE) || (lp->itemAction & ODA_FOCUS) || (lp->itemAction & ODA_SELECT))
		{
			CDC *p_dc = CDC::FromHandle(lp->hDC);

			if(lp->itemState & ODS_SELECTED)
			{
				GotoDlgCtrl(GetDlgItem(IDC_BUTTON1)); // 컨트롤 포커스를 다른 곳으로 넘기면서 더이상 호출되지 않게 만든다

				if (flage[lp->itemID] == 1)
					flage[lp->itemID] = 0;
				else
					flage[lp->itemID] = 1;	
			}

			if (flage[lp->itemID] == 1)
				p_dc->FillSolidRect(&lp->rcItem, RGB(100, 235, 235));
			else
				p_dc->FillSolidRect(&lp->rcItem, RGB(255, 255, 255));

			CString str1 = m_MyList.GetItemText(lp->itemID, 0);
			CString str2 = m_MyList.GetItemText(lp->itemID, 1);

			p_dc->TextOut(lp->rcItem.left + 2, lp->rcItem.top + 2, str1);
			p_dc->TextOut(lp->rcItem.left + 86, lp->rcItem.top + 2, str2);
		}
	}
	else
		CDialogEx::OnDrawItem(nIDCtl, lp);
}
~~~

![20220916_221049](https://user-images.githubusercontent.com/39178978/190647390-23489e9f-fb36-47be-8189-c2e222bdbcf4.png)

###### [ListControl (리스트컨트롤)](#listcontrol-리스트컨트롤)
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

# http,https통신
  - [http,https Get통신](#httphttps-get통신)
  - [http,https Post통신](#httphttps-post통신)
  - [https Put통신](#https-put통신)
  - [파일 다운받기](#파일-다운받기)

###### [http,https통신](#httphttps통신)
###### [Top](#top)

<br/>
<br/>

# http,https Get통신

#AppDlg.cpp
~~~c++
#include <wininet.h>
#include <string>
#include <vector>
#include <fstream>

BOOL CMFCApplication1Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	// http get통신
	// 1. 인터넷 연결

	// 만약 postman으로 보낼 주소가 (www.aaaaaa.com:8070/kkk/k11S.php3?No=kc100&Date=20221210)이라면,
	// http get통신
	HINTERNET hSession = InternetOpen(L"Test", INTERNET_OPEN_TYPE_PRECONFIG, NULL, NULL, 0);
	HINTERNET hConnect = InternetConnect(hSession, L"www.aaaaaa.com", 8070, NULL, NULL, INTERNET_SERVICE_HTTP, 0, 0);
	HINTERNET hRequest = HttpOpenRequest(hConnect, L"GET", L"/kkk/k11S.php3?No=kc100&Date=20221210", NULL, NULL, NULL, INTERNET_FLAG_RELOAD, 0);

	// https get통신
	/*HINTERNET hRequest = HttpOpenRequest(hConnect, L"GET", L"/kkk/k11S.php3?No=kc100&Date=20221210", NULL, NULL, NULL, INTERNET_FLAG_RELOAD | INTERNET_FLAG_SECURE, 0);*/


	// 2. 요청
	BOOL bRequest = HttpSendRequest(hRequest, NULL, 0, NULL, 0);

	// 3. 응답
	std::vector<char> response;
	char szBuffer[1024] = { 0 };
	DWORD dwRead = 0;
	while (InternetReadFile(hRequest, szBuffer, sizeof(szBuffer), &dwRead) && dwRead > 0) {
		response.insert(response.end(), szBuffer, szBuffer + dwRead);
	}

	// Save response to file
	std::ofstream file("response.dat");
	file.write(response.data(), response.size());
	file.close();

	// Convert from UTF-8 to UTF-16 using MultiByteToWideChar
	/*MFC에서 '유니코드 문자 집합’을 사용하고 있고 인코딩 문제가 발생한다면, 서버에서 전송되는 데이터의
	인코딩이 UTF-8이 아닐 수 있습니다. 이 경우 MultiByteToWideChar 함수의 첫 번째 매개변수를 서버
	서 전송되는 데이터의 인코딩에 해당하는 코드 페이지로 변경해야 합니다.
	예를 들어 서버에서 전송되는 데이터가 EUC - KR 인코딩을 사용한다면 MultiByteToWideChar 함수의 첫
	번째 매개변수를 CP_UTF8에서 51949로 변경해야 합니다.*/
	int wchars_num = MultiByteToWideChar(CP_UTF8, 0, response.data(), response.size(), NULL, 0);
	std::wstring wide(wchars_num, 0);
	MultiByteToWideChar(CP_UTF8, 0, response.data(), response.size(), &wide[0], wchars_num);

	// 4. 종료
	InternetCloseHandle(hRequest);
	InternetCloseHandle(hConnect);
	InternetCloseHandle(hSession);

	// 5. 출력
	MessageBox(wide.c_str());

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}
~~~

###### [http,https통신](#httphttps통신)
###### [Top](#top)

<br/>
<br/>

# http,https Post통신

#AppDlg.cpp
~~~c++
#include <wininet.h>
#include <string>
#include <vector>
#include <fstream>

BOOL CMFCApplication2Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	// http post통신
	// 1. 인터넷 연결

	// 만약 postman으로 보낼 주소가 (www.aaaaaa.com:8070/kkk/k11S.php3)이라면,
	// 바디가 
	//  <?xml version="1.0" encoding="euc-kr"?>
	//  <ASP><TELEX-HD Id="P71R" MsgCd="0000"/><HEADER Hq="NC1932" MsNo="NC1933" CustTelNo="01019900101"/></ASP>
	// 이거라면,

	// http POST통신
	HINTERNET hSession = InternetOpen(L"Test", INTERNET_OPEN_TYPE_PRECONFIG, NULL, NULL, 0);
	HINTERNET hConnect = InternetConnect(hSession, L"www.aaaaaa.com", 8070, NULL, NULL, INTERNET_SERVICE_HTTP, 0, 0);
	HINTERNET hRequest = HttpOpenRequest(hConnect, L"POST", L"/kkk/k11S.php3", NULL, NULL, NULL, INTERNET_FLAG_RELOAD, 0);

	// https POST통신 : INTERNET_FLAG_SECURE 플레그를 하나 추가하면 된다
	/*HINTERNET hRequest = HttpOpenRequest(hConnect, L"POST", L"/kkk/k11S.php3", NULL, NULL, NULL, INTERNET_FLAG_RELOAD | INTERNET_FLAG_SECURE, 0);*/

	CString strXML = _T("<?xml version=\"1.0\" encoding=\"euc - kr\"?>\n<ASP><TELEX-HD Id=\"P71R\" MsgCd=\"0000\"/><HEADER Hq=\"NC1932\" MsNo=\"NC1933\" CustTelNo=\"01019900101\"/></ASP>");


	CT2A asciiXML(strXML);

	// 2. 요청
	BOOL bRequest = HttpSendRequest(hRequest, NULL, 0, (LPVOID)(LPCSTR)asciiXML, strXML.GetLength());

	// 3. 응답
	std::vector<char> response;
	char szBuffer[1024] = { 0 };
	DWORD dwRead = 0;
	while (InternetReadFile(hRequest, szBuffer, sizeof(szBuffer), &dwRead) && dwRead > 0) {
		response.insert(response.end(), szBuffer, szBuffer + dwRead);
	}

	// Save response to file
	std::ofstream file("response.dat");
	file.write(response.data(), response.size());
	file.close();

	// Convert from UTF-8 to UTF-16 using MultiByteToWideChar
	/*MFC에서 '유니코드 문자 집합’을 사용하고 있고 인코딩 문제가 발생한다면, 서버에서 전송되는 데이터의
	인코딩이 UTF-8이 아닐 수 있습니다. 이 경우 MultiByteToWideChar 함수의 첫 번째 매개변수를 서버
	서 전송되는 데이터의 인코딩에 해당하는 코드 페이지로 변경해야 합니다.
	예를 들어 서버에서 전송되는 데이터가 EUC - KR 인코딩을 사용한다면 MultiByteToWideChar 함수의 첫
	번째 매개변수를 CP_UTF8에서 51949로 변경해야 합니다.*/
	int wchars_num = MultiByteToWideChar(CP_UTF8, 0, response.data(), response.size(), NULL, 0);
	std::wstring wide(wchars_num, 0);
	MultiByteToWideChar(CP_UTF8, 0, response.data(), response.size(), &wide[0], wchars_num);

	// 4. 종료
	InternetCloseHandle(hRequest);
	InternetCloseHandle(hConnect);
	InternetCloseHandle(hSession);

	// 5. 출력
	MessageBox(wide.c_str());

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}
~~~

###### [http,https통신](#httphttps통신)
###### [Top](#top)

<br/>
<br/>

# https Put통신

#AppDlg.cpp
~~~c++
#include <wininet.h>
#include <string>
#include <vector>
#include <fstream>

BOOL CMFCApplication3Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	// https put통신
	// 1. 인터넷 연결

	// 만약 postman으로 보낼 주소가 (www.aaaaaa.com:8070/kkk/k11S.php3)이라면,
	// 바디가,
	// {
	//    "WEB_POS_NO" : "60",
	//    "POS_BILL_NO" : "3"
	// }
	// 이거라면,

	HINTERNET hSession = InternetOpen(L"Test", INTERNET_OPEN_TYPE_PRECONFIG, NULL, NULL, 0);
	HINTERNET hConnect = InternetConnect(hSession, L"www.aaaaaa.com", 8370, NULL, NULL, INTERNET_SERVICE_HTTP, 0, 0);
	HINTERNET hRequest = HttpOpenRequest(hConnect, L"PUT", L"/kkk/k11S.php3", NULL, NULL, NULL, INTERNET_FLAG_RELOAD | INTERNET_FLAG_SECURE, 0);

	CString strJSON;
	strJSON.Format(_T("{\n\t\"WEB_POS_NO\": \"%s\",\n\t\"POS_BILL_NO\": \"%s\"\n}"), _T("60"), _T("3"));

	CT2A asciiJSON(strJSON);

	/*HttpSendRequest 함수를 사용하여 PUT 요청을 보낼 때 Content - Type 헤더를 지정해야 할 수 있습
	다.Content - Type 헤더는 서버에게 요청 본문의 형식을 알려주는 역할을 합니다.JSON 데이터를 전송하
	경우 Content - Type 헤더의 값으로 "application/json"을 지정해야 합니다.*/
	LPCTSTR szHeaders = _T("Content-Type: application/json");
	HttpAddRequestHeaders(hRequest, szHeaders, -1L, HTTP_ADDREQ_FLAG_ADD | HTTP_ADDREQ_FLAG_REPLACE);

	// 2. 요청
	BOOL bRequest = HttpSendRequest(hRequest, NULL, 0, (LPVOID)(LPCSTR)asciiJSON, strJSON.GetLength());

	// 3. 응답
	std::vector<char> response;
	char szBuffer[1024] = { 0 };
	DWORD dwRead = 0;
	while (InternetReadFile(hRequest, szBuffer, sizeof(szBuffer), &dwRead) && dwRead > 0) {
		response.insert(response.end(), szBuffer, szBuffer + dwRead);
	}

	// Save response to file
	std::ofstream file("response.dat");
	file.write(response.data(), response.size());
	file.close();

	// Convert from UTF-8 to UTF-16 using MultiByteToWideChar
	int wchars_num = MultiByteToWideChar(CP_UTF8, 0, response.data(), response.size(), NULL, 0);
	std::wstring wide(wchars_num, 0);
	MultiByteToWideChar(CP_UTF8, 0, response.data(), response.size(), &wide[0], wchars_num);

	// 4. 종료
	InternetCloseHandle(hRequest);
	InternetCloseHandle(hConnect);
	InternetCloseHandle(hSession);

	// 5. 출력
	MessageBox(wide.c_str());

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}
~~~

###### [http,https통신](#httphttps통신)
###### [Top](#top)

<br/>
<br/>

# 파일 다운받기
  - zip 파일과 같은 이진 파일을 다운로드할 때 파일이 바이트 순서로 다운로드되므로 인코딩이 문제가 되지 않습니다. 일반적으로 텍스트 데이터를 처리할 때 인코딩 문제가 발생하며, 사용된 인코딩에 따라 문자의 표현이 달라질 수 있습니다.
  - 출력 파일 스트림을 열 때 다운로드한 파일이 std::ios::binary 플래그를 사용하여 디스크에 이진 파일로 저장됩니다. 이렇게 하면 파일이 인코딩 변환 없이 서버에서 받은 대로 디스크에 정확히 기록됩니다.

#AppDlg.cpp
~~~c++
#include <wininet.h>
#include <string>
#include <vector>
#include <fstream>

BOOL CMFCApplication1Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	// http get통신
	// 1. 인터넷 연결

	// 만약 postman으로 보낼 주소가 (www.aaaaaa.com:8070/kkk/k11S.php3?No=kc100&Date=20221210)이라면,
	// http get통신
	HINTERNET hSession = InternetOpen(L"Test", INTERNET_OPEN_TYPE_PRECONFIG, NULL, NULL, 0);
	HINTERNET hConnect = InternetConnect(hSession, L"www.aaaaaa.com", 8070, NULL, NULL, INTERNET_SERVICE_HTTP, 0, 0);
	HINTERNET hRequest = HttpOpenRequest(hConnect, L"GET", L"/kkk/k11S.php3?No=kc100&Date=20221210", NULL, NULL, NULL, INTERNET_FLAG_RELOAD, 0);

	// https get통신
	/*HINTERNET hRequest = HttpOpenRequest(hConnect, L"GET", L"/kkk/k11S.php3?No=kc100&Date=20221210", NULL, NULL, NULL, INTERNET_FLAG_RELOAD | INTERNET_FLAG_SECURE, 0);*/


	// 2. 요청
	BOOL bRequest = HttpSendRequest(hRequest, NULL, 0, NULL, 0);

	// 3. 응답
	std::vector<char> response;
	char szBuffer[1024] = { 0 };
	DWORD dwRead = 0;
	while (InternetReadFile(hRequest, szBuffer, sizeof(szBuffer), &dwRead) && dwRead > 0) {
		response.insert(response.end(), szBuffer, szBuffer + dwRead);
	}

	// Save response to file
	std::ofstream file("file.zip", std::ios::binary);
	file.write(response.data(), response.size());
	file.close();

	// Convert from UTF-8 to UTF-16 using MultiByteToWideChar
	/*MFC에서 '유니코드 문자 집합’을 사용하고 있고 인코딩 문제가 발생한다면, 서버에서 전송되는 데이터의
	인코딩이 UTF-8이 아닐 수 있습니다. 이 경우 MultiByteToWideChar 함수의 첫 번째 매개변수를 서버
	서 전송되는 데이터의 인코딩에 해당하는 코드 페이지로 변경해야 합니다.
	예를 들어 서버에서 전송되는 데이터가 EUC - KR 인코딩을 사용한다면 MultiByteToWideChar 함수의 첫
	번째 매개변수를 CP_UTF8에서 51949로 변경해야 합니다.*/
	int wchars_num = MultiByteToWideChar(CP_UTF8, 0, response.data(), response.size(), NULL, 0);
	std::wstring wide(wchars_num, 0);
	MultiByteToWideChar(CP_UTF8, 0, response.data(), response.size(), &wide[0], wchars_num);

	// 4. 종료
	InternetCloseHandle(hRequest);
	InternetCloseHandle(hConnect);
	InternetCloseHandle(hSession);

	// 5. 출력
	MessageBox(wide.c_str());

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}
~~~

###### [http,https통신](#httphttps통신)
###### [Top](#top)

<br/>
<br/>

***

# 소켓통신
  - [소켓(Socket)입/출력 모델 비교](#소켓socket입출력-모델-비교)
  - [소켓 통신 개발시 팁](#소켓-통신-개발시-팁)

###### [소켓통신](#소켓통신)
###### [Top](#top)

<br/>
<br/>

# 소켓(Socket)입/출력 모델 비교
  - 위에서부터 아래로, 최신기술이다

<br/>

  - Select 모델
    - 모든 윈도우 버전은 물론 유닉스에서도 사용할 수 있으므로 이식성이 높다
    - 하위 호환성을 위해 존재하며, 성능은 여섯 가지 모델 중 가장 떨어진다
    - 64개 이상의 소켓을 처리하려면 여러개의 스레드를 사용해야 한다
  - WSAAsyncSelect 모델
    - 소켓 이벤트를 윈도우 메시지 형태로 처리하므로, GUI 애플리케이션과 잘 결합 할 수 있다
    - 하나의 윈도우 프로시저에서 일반 윈도우 메시지와 소켓 메시지를 처리해야 하므로 성능저하의 요인이 된다
  - WSAEventSelect 모델
    - Select 모델과 WSAAsyncSelect 모델의 특성을 혼합한 형태로, 비교적 뛰어난 성능을 제공하면서 윈도우를 필요로 하지 않는다
    - 64개 이상의 소켓을 처리하려면 여러 개의 스레드를 사용해야 한다
  - Overlapped 모델(Ⅰ)
    - WSAEventSelect 모델과 비슷하지만 비동기 입출력을 통해 성능이 뛰어나다
    - 64개 이상의 소켓을 처리하려면 여러 개의 스레드를 사용해야 한다
  - Overlapped 모델(Ⅱ)
    - 비동기 입출력을 통해 성능이 뛰어나다. ( APC Queue )
    - 모든 비동기 소켓 함수에 대해 완료 루틴을 사용 할 수 있는 것은 아니다
  - Comlpetion Port 모델 ( IOCP )
    - 비동기 입출력과 완료포트를 통해 가장 뛰어난 성능을 제공한다
    - 가장 단순한 소켓 입출력 방식( 블로킹 소켓 + 스레드 )와 비교하면 코딩이 복잡하지만 성능면에서 특별한 단점이 없다
    - 윈도우 NT계열에서만 사용할 수 있다

###### [소켓통신](#소켓통신)
###### [Top](#top)

<br/>
<br/>

# 소켓 통신 개발시 팁
  - Client
    - 네트워크 유입 속도는 상당히 빠르며, 하드디스크의 쓰기 속도는 굉장히 느린 편이다.
    - 따라서 네트워크 유입 데이터를 손실없이 빠르게 받는것은 생각보다 더 많은 기술력이 요구된다
    - 네트워크 유입을 받을때(recv)할때 그것을 바로바로 저장하기 위해 그 사이에 다양한 처리는 최대한 하지 않는 것이 좋다
    - 아래의 코드에서도, fwrite을 별도 스레드(Thread)를 만들어서 하는것이 좋다

<br/>

#클라이언트(Client)
~~~c++
//서버가 전송하는 데이터를 반복해 파일에 붙여 넣는다.
char byBuffer[65536];		//64KB
int nRecv;
while ((nRecv = ::recv(hSocket, byBuffer, 65536, 0)) > 0)
{
	//서버에서 받은 크기만큼 데이터를 파일에 쓴다.
	fwrite(byBuffer, nRecv, 1, fp);
	putchar('#');
}
~~~

<br/>

  - 데이터가 작을때는 주고 받는 것이 쉽지만(하나의 변수에 담아버리면 끝이니까)하지만, 파일정도의 큰 데이터를 오간다는 것은 그 송수신 방법이 달라지게 된다
  - 고려할 사항(Client가 Server에게 파일을 요청하는 request를 보낸 상황)
    - 1.Server는 파일을 보낼때, 하드에 있는 큰 용량의 데이터를 메모리에 한번에 올릴지 말지(올리면 빨라 지지만 특수한 경우에만 사용)
    - 2.메모리에 올라간 데이터를 Server Socket Buffer에 복사할때 Buffer의 크기 문제
    - 3.Server에서 온 데이터를 받을때, Client Socket Buffer에 복사할때 Buffer의 크기 문제
    - 4.Client Socket Buffer에서 Client User 어플리케이션에 그 데이터를 복사해 받을때 어떻게 받을지
  - 웹Client와 웹Server는 기본적으로 File을 송수신 받는 request, response이기 때문에, 성능과 장애를 둘다 깊게 신경 써야 한다

###### [소켓통신](#소켓통신)
###### [Top](#top)

<br/>
<br/>

***

# 소켓통신 함수별 기본
  - 소켓 순서(서버코드)

<br/>

  - 1. 접속대기 소켓 생성
    - AF_INET : ip주소를 어떤 형식으로 사용 할 것인지, L3에 관련된것
    - SOCK_STREAM : 어떤 소켓 형식을 사용할 것인지, L4에 관련된것

#AppDlg.cpp(서버)
~~~c++
SOCKET hSocket = ::socket(AF_INET, SOCK_STREAM, 0);
if (hSocket == INVALID_SOCKET)
{
	AfxMessageBox(_T("socket() error"));
	return FALSE;
}
~~~

<br/>

  - 2. 포트 바인딩
    - INADDR_ANY : NIC은 여러개가 존재할 수 있기 때문에, INADDR_ANY 라고 한다면, 모든 NIC으로 들어오는 클라이언트를 승락 하겠다 라는 의미가 된다. 특정 IP주소에만 들어오는 클라이언트를 승락하려면, 특정 IP를 작성해 주면 된다
    - 이때, 특정 ip를 쓰게 되면, 127.0.0.1은 그것과를 다른 주소이기 때문에 접속할 수 없으며, 특정 ip에 127.0.0.1까지 같이 넣어줘야, 루프백(Loopback) 주소로 클라이언트가 접속 할 수 있게 된다.
    - Socket같은 경우는 대부분 빅엔디안으로 개발 되었기 때문에 htons, htonl함수는 리틀엔디안을 빅엔디안으로 바꿔주는 함수가 됨

#AppDlg.cpp(서버)
~~~c++
SOCKADDR_IN servAddr = { 0 };
servAddr.sin_family = AF_INET;
servAddr.sin_port = htons(25000);
servAddr.sin_addr.S_un.S_addr = htonl(INADDR_ANY);
if (::bind(hSocket, (SOCKADDR*)&servAddr, sizeof(servAddr)) == SOCKET_ERROR)
{
	AfxMessageBox(_T("bind() error"));
	return FALSE;
}
~~~

<br/>

  - 3. 접속대기
    - SOMAXCONN 이것은 옛날에 썼던 옵션으로 지금은 OS가 전부 처리해 주기 때문에 SOMAXCONN 으로 사용하면 된다

#AppDlg.cpp(서버)
~~~c++
if (::listen(hSocket, SOMAXCONN) == SOCKET_ERROR) {
	AfxMessageBox(_T("Listen Error"));
	return FALSE;
}
~~~

<br/>

  - 4. 클라이언트 접속 처리 및 대응
    - SOMAXCONN 이것은 옛날에 썼던 옵션으로 지금은 OS가 전부 처리해 주기 때문에 SOMAXCONN 으로 사용하면 된다

#AppDlg.cpp(서버)
~~~c++
SOCKADDR_IN clientaddr = { 0 };
int nAddrLen = sizeof(clientaddr);
SOCKET hClient = 0;
char szBuffer[128] = { 0 };
int nReceive = 0;
~~~

<br/>

  - 4-1. 클라이언트 연결을 받아들이고 새로운 소켓 생성
    - hClient : Remote Client통신 소켓
    - clientaddr : 여기에 접속한 Client정보가 담김

#AppDlg.cpp(서버)
~~~c++
while ((hClient = ::accept(hSocket, (SOCKADDR*)&clientaddr, &nAddrLen)) != INVALID_SOCKET)
{
	AfxMessageBox(_T("클라이언트 접속"));
}
~~~

<br/>

  - 4-2. 클라이언트로부터 문자열을 수신함
    - hClient : Remote Client통신 소켓
    - clientaddr : 여기에 접속한 Client정보가 담김
    - recv함수에서 어떤 데이터가 올 때까지 서버는 대기 하고있다
    - recv함수가 0을 반환하면 while문이 종료 되는 것이고, 이것은 즉, 클라이언트가 자기의 Socket을 끊었을때 0을 반환하게 된다.

#AppDlg.cpp(서버)
~~~c++
while ((nReceive = ::recv(hClient, szBuffer, sizeof(szBuffer), 0))
{
	// 4-3 수신한 문자열을 그대로 반향 전송
	::send(hClient, szBuffer, sizeof(szBuffer), 0);
	AfxMessageBox(szBuffer);
	memset(szBuffer, 0, sizeof(szBuffer));
}
~~~

<br/>

  - 4-3. 클라이언트가 연결을 종료함

#AppDlg.cpp(서버)
~~~c++
::shutdown(hClient, SD_BOTH);
::closesocket(hClient);
AfxMessageBox(_T("서버와의 연결이 끊어졌습니다."));

// 5. 리슨 소켓 닫기
::closesocket(hSocket);
~~~

<br/>

  - 소켓 순서(클라이언트코드)

<br/>

  - 1. 클라이언트 소켓 생성
    - AF_INET : ip주소를 어떤 형식으로 사용 할 것인지, L3에 관련된것
    - SOCK_STREAM : 어떤 소켓 형식을 사용할 것인지, L4에 관련된것

#AppDlg.cpp(클라이언트)
~~~c++
SOCKET hSocket = ::socket(AF_INET, SOCK_STREAM, 0);
if (hSocket == INVALID_SOCKET)
{
	AfxMessageBox(_T("socket() error"));
	return FALSE;
}
~~~

<br/>

  - 2. 포트 바인딩 및 연결
    - 서버의 ip및 포트번호를 써야함
    - inet_addr : 문자열로 쓰면, S_addr에 알맞는 숫자로 바꿔줌
    - 클라이언트는 OS가 임의로 포트를 열어서 지정해준다.

#AppDlg.cpp(클라이언트)
~~~c++
SOCKADDR_IN svraddr = { 0 };
svraddr.sin_family = AF_INET;
svraddr.sin_port = htons(25000);
svraddr.sin_addr.S_un.S_addr = inet_addr("192.168.0.10");
if (::connect(hSocket, (SOCKADDR*)&svraddr, sizeof(svraddr)) == SOCKET_ERROR)
{
	AfxMessageBox(_T("connect() error"));
	return FALSE;
}
~~~

<br/>

  - 3. 채팅 메시지 송/수신

#AppDlg.cpp(클라이언트)
~~~c++
char szBuffer[128] = { 0 };
while (1)
{
	// 사용자로부터 문자열을 입력받는다
	gets_s(szBuffer);
	if (strcmp(szBuffer, "EXIT") == 0)
	{
		break;
	}

	// 사용자가 입력한 문자열을 서버에 전송
	::send(hSocket, szBuffer, strlen(szBuffer) + 1, 0);

	// 서버로부터 방금 보낸 문자열에 대한 에코 메시지를 수신한다
	memset(szBuffer, 0, sizeof(szBuffer));
	::recv(hSocket, szBuffer, sizeof(szBuffer), 0);

	CString str;
	str.Format(_T("%s"), szBuffer);
	AfxMessageBox(str);
}
~~~

<br/>

  - 4. 소켓을 닫고 종료

#AppDlg.cpp(클라이언트)
~~~c++
::shutdown(hSocket, SD_BOTH);
::closesocket(hSocket);
~~~

###### [소켓통신 함수별 기본](#소켓통신-함수별-기본)
###### [Top](#top)

<br/>
<br/>

***

# 소켓통신WSAAsyncSelect모델
  - [소켓통신 사용 준비](#소켓통신-사용-준비)
  - [기본적인 비동기 통신 형태](#기본적인-비동기-통신-형태)
  - [일정한 크기의 데이터 보내기](#일정한-크기의-데이터-보내기)
  - [크기가 일정하지 않은 데이터 보내기](#크기가-일정하지-않은-데이터-보내기)
  - [소켓통신 암호코드 및 메시지 판단 코드 넣기](#소켓통신-암호코드-및-메시지-판단-코드-넣기)

###### [소켓통신WSAAsyncSelect모델](#소켓통신wsaasyncselect모델)
###### [Top](#top)

<br/>
<br/>

# 소켓통신 사용 준비
  - 소켓 통신을 사용하기 위해서 여러가지를 추가해 주어야 한다.
  - 컴파일을 위해서 추가해 줘야 하는 것도 있고, 전에 있던 함수들을 막아놓은 부분을 쓰기 위해서도 선언해 주어야 하는 부분들이 있다.

<br/>

#AppDlg.cpp
~~~c++
// 컴파일 하기 위해 사용
#include <WinSock2.h> // 해더파일
#pragma comment(lib, "WS2_32.lib") // 라이브러리
#include <ws2tcpip.h>     // 서버쪽의 InetPton 함수를 사용하기 위해! (서버쪽에만 정의해 주면됨!)

. . .

CMFCApplication1Dlg::CMFCApplication1Dlg(CWnd* pParent /*=NULL*/)
	: CDialogEx(CMFCApplication1Dlg::IDD, pParent)
{
	m_hIcon = AfxGetApp()->LoadIcon(IDR_MAINFRAME);

	// 실질적으로 사용하기 위한것
	WSADATA temp;
	WSAStartup(0x0202, &temp); // 윈도우 소캣 2.2를 쓰겠다는 뜻(초기화 할때 한번만 하면됨)
}

. . .

void CMFCApplication1Dlg::OnDestroy()
{
	CDialogEx::OnDestroy();

	WSACleanup();  // 소켓 라이브러리를 그만 사용하도록 설정한다.
}
~~~

<br/>

#framework.h or stdafx.h
~~~c++
#define _WINSOCK_DEPRECATED_NO_WARNINGS // 이전의 함수를 사용하고 싶어서 이용
~~~

###### [소켓통신WSAAsyncSelect모델](#소켓통신wsaasyncselect모델)
###### [Top](#top)

<br/>
<br/>

# 기본적인 비동기 통신 형태
  - 위쪽에 소개된 기본적인 통신을 하기위한 것들을 정의 해주기
  - WSAAsyncSelect 함수를 이용해 소켓이 클라이언트가 접속과, 데이터를 보냈을때 메시지를 호출하고 그에 따라서 작업할 것들을 정의해서 사용하게 됨

<br/>

#framework.h(서버)
~~~c++
#define _WINSOCK_DEPRECATED_NO_WARNINGS // 이전의 함수를 사용하고 싶어서 이용
~~~

<br/>

#AppDlg.h(서버)
~~~c++
private:
	CListBox m_list_box;
	SOCKET mh_listen_socket;
	SOCKET mh_client_socket;
	afx_msg LRESULT On25001(WPARAM wParam, LPARAM lParam);
	afx_msg LRESULT On25002(WPARAM wParam, LPARAM lParam);
~~~

<br/>

#AppDlg.cpp(서버)
~~~c++
#include <WinSock2.h> // 해더파일
#pragma comment(lib, "WS2_32.lib") // 라이브러리
#include <ws2tcpip.h>     // InetPton 함수를 사용하기 위해!

CServerDlg::CServerDlg(CWnd* pParent /*=nullptr*/)
	: CDialogEx(IDD_SERVER_DIALOG, pParent)
{
	m_hIcon = AfxGetApp()->LoadIcon(IDR_MAINFRAME);

	// 실질적으로 사용하기 위한것
	WSADATA temp;
	WSAStartup(0x0202, &temp); // 윈도우 소캣 2.2를 쓰겠다는 뜻(초기화 할때 한번만 하면됨)

	mh_client_socket = INVALID_SOCKET;
}

. . .

BOOL CServerDlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	// 소켓을 네트워크 장치에 바인딩하기 위해 정보를 저장할 변수
	// IP 주소 체계, 프로그램 식별 번호(포트 번호)
	// htons 라디언, 인디언 바이트 정렬이 다를 경우 그것을 통일 해줌
	sockaddr_in addr_data = { AF_INET, htons(1900) };
	addr_data.sin_addr.s_addr = inet_addr("192.168.0.3");  // IP 주소 설정

	// 클라이언트 접속에 사용할 Listen 소켓 생성!!
	// AF_INET : ip주소를 어떤 형식으로 사용 할 것인지, L3에 관련된것
	// SOCK_STREAM : 어떤 소켓 형식을 사용할 것인지, L4에 관련된것
	// 0 : 소켓 방식에 맞는 프로토콜을 자동으로 써줌
	mh_listen_socket = socket(AF_INET, SOCK_STREAM, 0);

	// addr_data에 설정된 정보를 사용하여 소켓을 네트워크 시스템에 연결한다.
	bind(mh_listen_socket, (sockaddr*)&addr_data, sizeof(addr_data));

	// 수신을 하기 위해서 사용하는 함수, 이것이 없으면 발신밖에 되지 않음
	// 클라이언트는 listen을 사용하지 않지만 서버는 클라이언트에게 받아야 하기 때문에 사용
	listen(mh_listen_socket, 1);

	// mh_listen_socket에 사용자가 접속을 시도(FD_ACCEPT)했을 때
	// 현재 대화 상자(m_hWnd)에 25001번 메시지가 발생하도록 비동기를 설정한다.
	WSAAsyncSelect(mh_listen_socket, m_hWnd, 25001, FD_ACCEPT);

	return TRUE;
}

. . .

void CServerDlg::OnDestroy()
{
	CDialogEx::OnDestroy();

	WSACleanup();  // 소켓 라이브러리를 그만 사용하도록 설정한다.
}

. . .

afx_msg LRESULT CServerDlg::On25001(WPARAM wParam, LPARAM lParam)
{
	// 접속한 클라이언트의 정보를 저장할 구조체를 초기화한다.
	sockaddr_in addr_data = { 0, };
	int data_size = sizeof(addr_data);  // 구조체의 크기를 저장한다.
	// 클라이언트 소켓의 접속을 허락한다. (복제 소켓 생성)
	SOCKET h_client_socket = accept(mh_listen_socket, (sockaddr*)&addr_data, &data_size);

	wchar_t temp_ip_address[32];
	// addr_data 변수에 정수 형태로 저장되어 있는 IP 주소를 문자열 형태로
	// 변경해서 temp_ip_address에 저장한다.
	InetNtop(AF_INET, &addr_data.sin_addr, temp_ip_address, 32);
	m_list_box.InsertString(-1, temp_ip_address + CString(L" 에서 서버에 접속 시도를 하고 있습니다."));

	CString str;
	// 현재 클라이언트 접속을 한 개만 유지할 거라서 클라이언트 접속 여부를 체크한다.
	if (mh_client_socket != INVALID_SOCKET) {
		m_list_box.InsertString(-1, L"이미 접속한 클라이언트가 있어 접속을 허락하지 않습니다.");
		closesocket(h_client_socket); // 클라이언트와 통신하려고 만든 소켓을 제거한다.
	}
	else {
		m_list_box.InsertString(-1, L"클라이언트가 접속했습니다.");
		// 현재 접속한 클라이언트의 핸들 값을 멤버 변수에 보관해서 접속을 유지한다.
		mh_client_socket = h_client_socket;
		// mh_client_socket에서 체크해야 할 상황은 크게 두 가지이다.
		// 이 소켓에 '데이터가 수신된 경우'와 '클라이언트가 접속을 해제한 경우'이다.
		// 그래서 이 두 가지 사황을 비동기로 설정하여 계속 기다리지 않고 상황이
		// 발생하면 이 대화 상자에 25002번 메시지가 발생하도록 한다.
		WSAAsyncSelect(mh_client_socket, m_hWnd, 25002, FD_READ | FD_CLOSE);
	}

	return 0;
}

. . .

afx_msg LRESULT CServerDlg::On25002(WPARAM wParam, LPARAM lParam)
{
	// lParam의 하위 16비트에 이 메시지(25002)를 발생시킨 이벤트 종류가 저장되어 있음!
	if (WSAGETSELECTEVENT(lParam) == FD_READ) {  // 데이터가 수신됨!!
		int temp = 0;
		recv(mh_client_socket, (char*)&temp, 4, 0);  // 수신된 4 바이트 값을 얻는다.

		CString str;
		str.Format(L"%d", temp);  // 정숫값을 문자열로 변환한다.
		m_list_box.InsertString(-1, str);  // 리스트 박스에 출력한다.
	}
	else {  // FD_CLOSE, 상대편 이 종료됨!
		closesocket(mh_client_socket);  // 클라이언트와 통신하던 소켓을 제거한다.
		mh_client_socket = INVALID_SOCKET;  // 소켓을 사용 안함으로 설정한다.
		m_list_box.InsertString(-1, L"클라이언트가 접속을 해제습니다.");
	}

	return 0;
}
~~~

<br/>

#framework.h(클라이언트)
~~~c++
#define _WINSOCK_DEPRECATED_NO_WARNINGS // 이전의 함수를 사용하고 싶어서 이용
~~~

<br/>

#AppDlg.h(클라이언트)
~~~c++
SOCKET mh_socket;     // 서버에 접속해서 통신할 소켓
	char m_is_connected;  // 접속 상태 (0:접속 안됨, 1:접속중, 2:접속됨)
	CListBox m_event_list;
	afx_msg LRESULT On26002(WPARAM wParam, LPARAM lParam);
	afx_msg LRESULT On26001(WPARAM wParam, LPARAM lParam);
~~~

<br/>

#AppDlg.cpp(클라이언트)
~~~c++
// 컴파일 하기 위해 사용
#include <WinSock2.h> // 해더파일
#pragma comment(lib, "WS2_32.lib") // 라이브러리

CClientDlg::CClientDlg(CWnd* pParent /*=nullptr*/)
	: CDialogEx(IDD_CLIENT_DIALOG, pParent)
{
	m_hIcon = AfxGetApp()->LoadIcon(IDR_MAINFRAME);

	// 실질적으로 사용하기 위한것
	WSADATA temp;
	WSAStartup(0x0202, &temp); // 윈도우 소캣 2.2를 쓰겠다는 뜻(초기화 할때 한번만 하면됨)

	mh_socket = INVALID_SOCKET;  // 소켓 핸들 초기화
	m_is_connected = 0;  // 접속 상태 초기화
}


. . .

void CClientDlg::OnDestroy()
{
	CDialogEx::OnDestroy();

	// 서버와 접속 상태라면 접속에 사용하던 소켓을 제거한다.
	if (mh_socket != INVALID_SOCKET) closesocket(mh_socket);
	WSACleanup();  // 소켓 라이브러리를 그만 사용하도록 설정한다.
	
}

. . .

void CClientDlg::OnBnClickedSenddata()
{
	// 서버와 연결된 상태이면서 소켓 사용이 가능하다면 정숫값을 전송한다.
	if (m_is_connected == 2 && mh_socket != INVALID_SOCKET) {
		int num = GetDlgItemInt(IDC_NUM_EDIT); // 입력된 정숫값을 얻는다.
		// mh_socket 소켓을 사용하여 서버로 정숫값을 보낸다.
		send(mh_socket, (char*)&num, sizeof(int), 0);
		// 전송 결과를 리스트 박스에 보여준다.
		CString str;
		str.Format(L"서버로 정숫값( %d )을 전송했습니다!", num);
		m_event_list.InsertString(-1, str);
	}
}

. . . 

void CClientDlg::OnBnClickedClickedconnect()
{
	if (mh_socket == INVALID_SOCKET) {  // 소켓이 만들어졌는지 여부를 체크한다.
		// IP 주소 체계, 프로그램 식별 번호(포트 번호)
		sockaddr_in addr_data = { AF_INET, htons(1900), };
		addr_data.sin_addr.s_addr = inet_addr("192.168.0.3");  // 접속할 서버 IP 주소 설정

		mh_socket = socket(AF_INET, SOCK_STREAM, 0);  // 서버에 접속해서 정숫값을 전송할 소켓 생성
		// 서버 접속에 사용하는 connect 함수가 서버에 문제가 있거나 네트워크에 문제가 있으면
		// 최대 28초간 '응답 없음' 상태가 될수 있기 때문에 접속을 체크해주는 비동기를 설정한다.
		// mh_socket에 FD_CONNECT 이벤트가 발생하면 현재 대화 상자에 26001번 메시지가 발생한다.
		WSAAsyncSelect(mh_socket, m_hWnd, 26001, FD_CONNECT);
		// 서버에 접속을 시도한다.
		connect(mh_socket, (sockaddr*)&addr_data, sizeof(addr_data));
		m_is_connected = 1;  // 접속 시도중으로 상태를 변경한다.
		m_event_list.InsertString(-1, L"서버에 접속을 시도합니다");
	}
	else {
		// 접속을 시도중이거나 접속이 된 상태라는 것을 보여준다.
		if (m_is_connected == 2) m_event_list.InsertString(-1, L"이미 접속된 상태입니다!");
		else m_event_list.InsertString(-1, L"서버에 접속을 시도하고 있습니다! 기다려주세요...");
	}
}

. . .

void CClientDlg::OnBnClickedClickeddisconnect()
{
	// 소켓이 만들어져 있다면 소켓을 제거하는 작업을 한다.
	if (mh_socket != INVALID_SOCKET) {
		m_is_connected = 0;  // 접속 해제 상태로 변경한다.
		closesocket(mh_socket);  // 종료된 소켓을 제거한다.
		mh_socket = INVALID_SOCKET;  // 소켓 변수 초기화
		m_event_list.InsertString(-1, L"서버와 접속을 해제했습니다!!");
	}
	else m_event_list.InsertString(-1, L"서버와 연결되어 있지 않습니다.");
}

. . .

afx_msg LRESULT CClientDlg::On26001(WPARAM wParam, LPARAM lParam)
{
	if (WSAGETSELECTERROR(lParam)) {   // 상위 16비트에 오류 값이 들어있음
		closesocket(mh_socket);  // 접속을 실패한 소켓 제거
		mh_socket = INVALID_SOCKET;  // 변수 초기화!
		m_event_list.InsertString(-1, L"서버에 접속하지 못했습니다!");
		m_is_connected = 0;  // 접속 해제 상태로 변경한다.
	}
	else {  // 접속에 성공!
	 // mh_socket에서 체크해야 할 상황은 크게 두 가지이다.
	 // 이 소켓에 '데이터가 수신된 경우'와 '서버가 접속을 해제한 경우'이다.
	 // 그래서 이 두 가지 사황을 비동기로 설정하여 계속 기다리지 않고 상황이
	 // 발생하면 이 대화 상자에 26002번 메시지가 발생하도록 한다.
		WSAAsyncSelect(mh_socket, m_hWnd, 26002, FD_READ | FD_CLOSE);
		m_event_list.InsertString(-1, L"서버에 접속했습니다!");
		m_is_connected = 2;  // 접속 상태로 변경한다.
	}

	return 0;
}


. . . 

afx_msg LRESULT CClientDlg::On26002(WPARAM wParam, LPARAM lParam)
{
	if (WSAGETSELECTEVENT(lParam) == FD_READ) {  // 데이터가 수신됨!!
		// 현재 사용 안 함
	}
	else {  // FD_CLOSE, 상대편 이 종료됨!
		closesocket(mh_socket);  // 종료된 소켓을 제거한다.
		mh_socket = INVALID_SOCKET;  // 소켓 변수 초기화
		m_event_list.InsertString(-1, L"서버에서 접속을 해제했습니다!!");
		m_is_connected = 0;  // 접속 해제 상태로 변경한다.
	}

	return 0;
}
~~~

###### [소켓통신WSAAsyncSelect모델](#소켓통신wsaasyncselect모델)
###### [Top](#top)

<br/>
<br/>

# 일정한 크기의 데이터 보내기

  - 위에서 바꿔야 되는부분만 수정(클라이언트는 데이터를 보내는 send부분, 서버는 데이터를 받는 receive부분)

<br/>

#AppDlg.cpp(서버)
~~~c++
afx_msg LRESULT CServerDlg::On25002(WPARAM wParam, LPARAM lParam)
{
	// lParam의 하위 16비트에 이 메시지(25002)를 발생시킨 이벤트 종류가 저장되어 있음!
	if (WSAGETSELECTEVENT(lParam) == FD_READ)
	{  // 데이터가 수신됨!!
		wchar_t recv_str[50];

		recv(mh_client_socket, (char*)recv_str, 100, 0);  // 수신된 100 바이트 값을 얻는다.

		m_list_box.InsertString(-1, recv_str);  // 리스트 박스에 출력한다.
	}
	else
	{  // FD_CLOSE, 상대편 이 종료됨!
		closesocket(mh_client_socket);  // 클라이언트와 통신하던 소켓을 제거한다.
		mh_client_socket = INVALID_SOCKET;  // 소켓을 사용 안함으로 설정한다.
		m_list_box.InsertString(-1, L"클라이언트가 접속을 해제습니다.");
	}

	return 0;
}
~~~

<br/>

#AppDlg.cpp(클라이언트)
~~~c++
void CClientDlg::OnBnClickedSenddata()
{
	// 서버와 연결된 상태이면서 소켓 사용이 가능하다면 스트링을 전송한다.
	if (m_is_connected == 2 && mh_socket != INVALID_SOCKET)
	{
		CString str;
		GetDlgItemText(IDC_NUM_EDIT, str);

		wchar_t send_str[50];
		wcscpy_s(send_str, 50, str);

		send(mh_socket, (char*)send_str, 100, 0);
		// 전송 결과를 리스트 박스에 보여준다.

		str.Format(L"서버로 텍스트( %s )을 전송했습니다!", str);
		m_event_list.InsertString(-1, str);
	}
}
~~~

###### [소켓통신WSAAsyncSelect모델](#소켓통신wsaasyncselect모델)
###### [Top](#top)

<br/>
<br/>

# 크기가 일정하지 않은 데이터 보내기
  - 위에서 바꿔야 되는부분만 수정(클라이언트는 데이터를 보내는 send부분, 서버는 데이터를 받는 receive부분)

<br/>

#AppDlg.cpp(서버)
~~~c++
afx_msg LRESULT CServerDlg::On25002(WPARAM wParam, LPARAM lParam)
{
	// lParam의 하위 16비트에 이 메시지(25002)를 발생시킨 이벤트 종류가 저장되어 있음!
	if (WSAGETSELECTEVENT(lParam) == FD_READ)
	{  // 데이터가 수신됨!!

		unsigned short body_size;

		recv(mh_client_socket, (char*)&body_size, 2, 0);  // 수신된 값중 2바이트 읽는다

		char* p_recv_data = new char[body_size];

		recv(mh_client_socket, (char*)p_recv_data, body_size, 0);  // 수신된 2 바이트 값을 얻는다.
		
		m_list_box.InsertString(-1, (wchar_t*)p_recv_data);  // 리스트 박스에 출력한다.

		delete[] p_recv_data;
	}
	else
	{  // FD_CLOSE, 상대편 이 종료됨!
		closesocket(mh_client_socket);  // 클라이언트와 통신하던 소켓을 제거한다.
		mh_client_socket = INVALID_SOCKET;  // 소켓을 사용 안함으로 설정한다.
		m_list_box.InsertString(-1, L"클라이언트가 접속을 해제습니다.");
	}

	return 0;
}
~~~

<br/>

#AppDlg.cpp(클라이언트)
~~~c++
void CClientDlg::OnBnClickedSenddata()
{
	// 서버와 연결된 상태이면서 소켓 사용이 가능하다면 스트링을 전송한다.
	if (m_is_connected == 2 && mh_socket != INVALID_SOCKET)
	{
		CString str;
		GetDlgItemText(IDC_NUM_EDIT, str);

		int send_data_size = (str.GetLength() + 1) * 2;

		char* p_send_data = new char[2 + send_data_size];
		*(unsigned short*)p_send_data = send_data_size;
		memcpy(p_send_data + 2, (const wchar_t*)str, send_data_size);

		send(mh_socket, p_send_data, 2 + send_data_size, 0);
		// 전송 결과를 리스트 박스에 보여준다.

		delete[] p_send_data;

		str.Format(L"서버로 텍스트( %s )을 전송했습니다!", str);
		m_event_list.InsertString(-1, str);
	}
}
~~~

<br/>

  - 위쪽 서버에서의 문제점은 수신받은 데이터를 2번 끊어 읽는 다는것에 문제가 있다. 코드에서 두번째로 읽기 전에, 아직 읽어야할 데이터가 남아 있다는 것을 인지하고 다시 읽어 내라고 25002메시지를 한번더 보내주기 때문에(WSAAsyncSelect 함수의 FD_READ옵션이 있기 때문!), 한번씩 보내지도 않은 쓰레기 데이터를 읽어 오게 되는 문제가 있다, 그것을 해결 하기 위해서는 아래와 같이 코드를 바꿔 줘야 한다.

<br/>

#AppDlg.cpp(서버)
~~~c++
afx_msg LRESULT CServerDlg::On25002(WPARAM wParam, LPARAM lParam)
{
	// lParam의 하위 16비트에 이 메시지(25002)를 발생시킨 이벤트 종류가 저장되어 있음!
	if (WSAGETSELECTEVENT(lParam) == FD_READ)
	{  // 데이터가 수신됨!!

		WSAAsyncSelect(mh_client_socket, m_hWnd, 25002, FD_CLOSE);

		unsigned short body_size;

		recv(mh_client_socket, (char*)&body_size, 2, 0);  // 수신된 값중 2바이트 읽는다

		char* p_recv_data = new char[body_size];

		recv(mh_client_socket, (char*)p_recv_data, body_size, 0);  // 수신된 2 바이트 값을 얻는다.
		
		m_list_box.InsertString(-1, (wchar_t*)p_recv_data);  // 리스트 박스에 출력한다.

		delete[] p_recv_data;

		WSAAsyncSelect(mh_client_socket, m_hWnd, 25002, FD_READ | FD_CLOSE);
	}
	else
	{  // FD_CLOSE, 상대편 이 종료됨!
		closesocket(mh_client_socket);  // 클라이언트와 통신하던 소켓을 제거한다.
		mh_client_socket = INVALID_SOCKET;  // 소켓을 사용 안함으로 설정한다.
		m_list_box.InsertString(-1, L"클라이언트가 접속을 해제습니다.");
	}

	return 0;
}
~~~

###### [소켓통신WSAAsyncSelect모델](#소켓통신wsaasyncselect모델)
###### [Top](#top)

<br/>
<br/>

# 소켓통신 암호코드 및 메시지 판단 코드 넣기
  - 암호코드 - 메시지판단 코드 - 메시지 길이코드 - 실제 메시지
  - 위에서 바꿔야 되는부분만 수정(클라이언트는 데이터를 보내는 send부분, 서버는 데이터를 받는 receive부분)

<br/>

#AppDlg.cpp(서버)
~~~c++
afx_msg LRESULT CServerDlg::On25002(WPARAM wParam, LPARAM lParam)
{
	// lParam의 하위 16비트에 이 메시지(25002)를 발생시킨 이벤트 종류가 저장되어 있음!
	if (WSAGETSELECTEVENT(lParam) == FD_READ)
	{  // 데이터가 수신됨!!

		WSAAsyncSelect(mh_client_socket, m_hWnd, 25002, FD_CLOSE);

		char key, message_id;
		// 첫 바이트를 읽어서 정상적인 키 값이 들어있는지 확인한다.
		recv(mh_client_socket, &key, 1, 0);
		if (key == 27) {  // 27인 경우에만 처리한다.
			// Message ID를 읽는다.
			recv(mh_client_socket, &message_id, 1, 0);

			unsigned short body_size;
			// 수신된 데이터 중에 2바이트를 먼저 읽어서 Body 데이터의 크기를 알아낸다.
			recv(mh_client_socket, (char*)&body_size, 2, 0);
			// Body 데이터를 수신하기 위해 메모리를 할당한다.
			char* p_recv_data = new char[body_size];
			// 수신된 Body 데이터를 읽는다.
			recv(mh_client_socket, p_recv_data, body_size, 0);
			// message_id값이 1이면 채팅 정보이다. 따라서 리스트 박스에 문자열을 추가한다.
			if (message_id == 1) {
				// 수신된 문자열을 리스트 박스에 출력한다.
				m_list_box.InsertString(-1, (wchar_t*)p_recv_data);
			}

			delete[] p_recv_data;

			WSAAsyncSelect(mh_client_socket, m_hWnd, 25002, FD_READ | FD_CLOSE);
		}
	}
	else
	{  // FD_CLOSE, 상대편 이 종료됨!
		closesocket(mh_client_socket);  // 클라이언트와 통신하던 소켓을 제거한다.
		mh_client_socket = INVALID_SOCKET;  // 소켓을 사용 안함으로 설정한다.
		m_list_box.InsertString(-1, L"클라이언트가 접속을 해제습니다.");
	}

	return 0;
}
~~~

<br/>

#AppDlg.cpp(클라이언트)
~~~c++
void CClientDlg::OnBnClickedSenddata()
{
	// 서버와 연결된 상태이면서 소켓 사용이 가능하다면 스트링을 전송한다.
	if (m_is_connected == 2 && mh_socket != INVALID_SOCKET)
	{
		CString str;
		GetDlgItemText(IDC_NUM_EDIT, str);

		int send_data_size = (str.GetLength() + 1) * 2;

		// Packet을 구성하기 위한 메모리를 할당한다.
		char* p_send_data = new char[4 + send_data_size];
		// 첫 바이트에 고유 식별 키를 기록한다.
		*p_send_data = 27;
		// 메시지 종류를 기록한다. (1번은 채팅 데이터를 의미)
		*(p_send_data + 1) = 1;
		// 실제 전송할 데이터의 크기를 기록한다.
		*(unsigned short*)(p_send_data + 2) = send_data_size;
		// 4바이트 뒤에 실제 전송할 데이터를 복사한다.
		memcpy(p_send_data + 4, (const wchar_t*)str, send_data_size);

		// mh_socket 소켓을 사용하여 서버로 문자열을 보낸다.
		send(mh_socket, p_send_data, 4 + send_data_size, 0);

		delete[] p_send_data;

		CString str2;
		str2.Format(L"서버로 텍스트( %s )을 전송했습니다!", str);
		m_event_list.InsertString(-1, str2);
	}
}
~~~

###### [소켓통신WSAAsyncSelect모델](#소켓통신wsaasyncselect모델)
###### [Top](#top)

<br/>
<br/>

***

# 소켓통신 추가
  - [소켓(Socket) 입/출력 버퍼 확인](#소켓socket-입출력-버퍼-확인)
  - [소켓(Socket) 입/출력 TCP_NODELAT](#소켓socket-입출력-tcp_nodelat)
  - [소켓(Socket) 입/출력 SO_REUSEADDR](#소켓socket-입출력-so_reuseaddr)
  - [파일 송신 전용API(TransmitFile)](#파일-송신-전용apitransmitfile)

###### [소켓통신WSAAsyncSelect모델](#소켓통신wsaasyncselect모델)
###### [Top](#top)

<br/>
<br/>

# 소켓(Socket) 입/출력 버퍼 확인

#AppDlg.cpp
~~~c++
int nBufSize = 0, nLen = sizeof(nBufSize);
if (::getsockopt(mh_client_socket, SOL_SOCKET, SO_SNDBUF, (char*)&nBufSize, &nLen) == 0)
{
	CString str;
	str.Format(_T("SO_SNDBUF : %d"), nBufSize);
	AfxMessageBox(str);
}

if (::getsockopt(mh_client_socket, SOL_SOCKET, SO_RCVBUF, (char*)&nBufSize, &nLen) == 0)
{
	CString str;
	str.Format(_T("SO_SNDBUF : %d"), nBufSize);
	AfxMessageBox(str);
}
~~~

###### [소켓통신WSAAsyncSelect모델](#소켓통신wsaasyncselect모델)
###### [Top](#top)

<br/>
<br/>

# 소켓(Socket) 입/출력 TCP_NODELAT
  - Socket 입/출력 buffer에 쌓이지 않고 데이터를 바로 보낼 수있게 옵션을 지정할 수 있다
  - 보통 서버가 아닌 클라이언트에 적용한다고 생각하면 된다

#AppDlg.cpp
~~~c++
int nOpt = 1;
::setsockopt(mh_client_socket, IPPROTO_TCP, TCP_NODELAY, (char*)&nOpt, sizeof(nOpt));
~~~

###### [소켓통신WSAAsyncSelect모델](#소켓통신wsaasyncselect모델)
###### [Top](#top)

<br/>
<br/>

# 소켓(Socket) 입/출력 SO_REUSEADDR
  - 서버에 특정 포트가 bind되어 있다면, 같은 포트를 또 열수가 없지만, SO_REUSEADDR옵션을 사용하면 열수가 있게 된다
  - bind전에 옵션을 줘야 한다
  - SO_REUSEADDR옵션을 사용하면, 첫번째 열린 서버로 들어가게 되고, 첫번째 서버가 죽으면 클라이언트가 두번째 서버로 재접속을 하게 된다

#AppDlg.cpp
~~~c++
BOOL bOption = TRUE;
if (::setsockopt(mh_listen_socket, SOL_SOCKET, SO_REUSEADDR, (char*)&bOption, sizeof(bOption)) == SOCKET_ERROR) {
	AfxMessageBox(L"소켓 옵션 설정 실패");
}
~~~

###### [소켓통신WSAAsyncSelect모델](#소켓통신wsaasyncselect모델)
###### [Top](#top)

<br/>
<br/>


# 파일 송신 전용API(TransmitFile)
  - TransmitFile : 윈도우즈 환경에서 File을 보낼때는 바로 아래와 같은 fread, send를 사용하기 보다 TransmitFile 을 사용하면된다, 많은 예외상황에 대한 처리가 되어 있으며 대비가되어 있다

<br/>

#서버(Server)
#ConsoleApp.cpp
~~~c++
//사용X
//파일송신
char byBuffer[65536];		//64KB
int nRead, nSent, i = 0;
while ((nRead = fread(byBuffer, sizeof(char), 65536, fp)) > 0)
{
	//파일에서 읽고 소켓으로 전송한다.
	//전송에 성공하더라도 nRead와 nSent 값은 다를 수 있다!!!
	nSent = send(hClient, byBuffer, nRead, 0);
	printf("[%04d] 전송된 데이터 크기: %d\n", ++i, nSent);
	fflush(stdout);
}
~~~c++

<br/>

  - TransmitFile사용법

#ConsoleApp.cpp
#서버(Server)
~~~c++
// FileSenderWin32.cpp : 콘솔 응용 프로그램에 대한 진입점을 정의합니다.
//

#include "stdafx.h"

#include <winsock2.h>
#pragma comment(lib, "ws2_32")
//::TranmitFile() 함수를 사용하기 위한 헤더와 라이브러리 설정
#include <Mswsock.h>
#pragma comment(lib, "Mswsock")

//전송할 파일에 대한 정보를 담기위한 구조체
typedef struct MY_FILE_DATA
{
	char szName[_MAX_FNAME];
	DWORD dwSize;
} MY_FILE_DATA;

void ErrorHandler(const char *pszMessage)
{
	printf("ERROR: %s\n", pszMessage);
	::WSACleanup();
	exit(1);
}

int _tmain(int argc, _TCHAR* argv[])
{
	//윈속 초기화
	WSADATA wsa = { 0 };
	if (::WSAStartup(MAKEWORD(2, 2), &wsa) != 0)
		ErrorHandler("윈속을 초기화 할 수 없습니다.");

	//전송할 파일 개방
	HANDLE hFile = ::CreateFile(_T("Sleep Away.zip"),
		GENERIC_READ,
		FILE_SHARE_READ,
		NULL,
		OPEN_EXISTING,
		FILE_FLAG_SEQUENTIAL_SCAN,
		NULL);
	if (hFile == INVALID_HANDLE_VALUE)
		ErrorHandler("전송할 파일을 개방할 수 없습니다.");

	//접속대기 소켓 생성
	SOCKET hSocket = ::socket(AF_INET, SOCK_STREAM, 0);
	if (hSocket == INVALID_SOCKET)
		ErrorHandler("접속 대기 소켓을 생성할 수 없습니다.");

	//포트 바인딩
	SOCKADDR_IN	svraddr = { 0 };
	svraddr.sin_family = AF_INET;
	svraddr.sin_port = htons(25000);
	svraddr.sin_addr.S_un.S_addr = htonl(INADDR_ANY);
	if (::bind(hSocket,
		(SOCKADDR*)&svraddr, sizeof(svraddr)) == SOCKET_ERROR)
		ErrorHandler("소켓에 IP주소와 포트를 바인드 할 수 없습니다.");

	//접속대기 상태로 전환
	if (::listen(hSocket, SOMAXCONN) == SOCKET_ERROR)
		ErrorHandler("리슨 상태로 전환할 수 없습니다.");
	puts("파일송신서버를 시작합니다.");

	//클라이언트 연결을 받아들이고 새로운 소켓 생성(개방)
	SOCKADDR_IN clientaddr = { 0 };
	int nAddrLen = sizeof(clientaddr);
	SOCKET hClient = ::accept(hSocket,
		(SOCKADDR*)&clientaddr, &nAddrLen);
	if (hClient == INVALID_SOCKET)
		ErrorHandler("클라이언트 통신 소켓을 생성할 수 없습니다.");
	puts("클라이언트가 연결되었습니다.");

	//전송할 파일에 대한 정보를 작성한다.
	MY_FILE_DATA fData = { "Sleep Away.zip", 0 };
	fData.dwSize = ::GetFileSize(hFile, NULL);
	TRANSMIT_FILE_BUFFERS tfb = { 0 };
	tfb.Head = &fData;
	tfb.HeadLength = sizeof(fData);

	//파일송신
	if ( ::TransmitFile(
			hClient,	//파일을 전송할 소켓 핸들.
			hFile,		//전송할 파일 핸들.
			0,			//전송할 크기. 0이면 전체.
			65536,		//한 번에 전송할 버퍼 크기.
			NULL,		//비동기 입/출력에 대한 OVERLAPPED 구조체.
			&tfb,		//파일 전송에 앞서 먼저 전송할 데이터.
			0			//기타 옵션.
			) == FALSE )
		ErrorHandler("파일을 전송할 수 없습니다.");

	//클라이언트가 연결을 끊을 끊기를 대기한다.
	//클라이언트가 끊으면 0을 반환하는데, 원래는 그 값이 0인지 까지 확인하고 끊어야 한다
	::recv(hClient, NULL, 0, 0);
	puts("클라이언트가 연결을 끊었습니다.");

	::closesocket(hClient);
	::closesocket(hSocket);
	::CloseHandle(hFile);
	::WSACleanup();
	return 0;
}
~~~

<br/>

#ConsoleApp.cpp
#클라이언트(Client)
~~~c++
// FileReceiverWin32.cpp : 콘솔 응용 프로그램에 대한 진입점을 정의합니다.
//

#include "stdafx.h"
#include <winsock2.h>
#pragma comment(lib, "ws2_32")


typedef struct MY_FILE_DATA
{
	char szName[_MAX_FNAME];
	DWORD dwSize;
} MY_FILE_DATA;

void ErrorHandler(const char *pszMessage)
{
	printf("ERROR: %s\n", pszMessage);
	::WSACleanup();
	exit(1);
}

int _tmain(int argc, _TCHAR* argv[])
{
	//윈속 초기화
	WSADATA wsa = { 0 };
	if (::WSAStartup(MAKEWORD(2, 2), &wsa) != 0)
		ErrorHandler("윈속을 초기화 할 수 없습니다.");

	//소켓 생성
	SOCKET hSocket = ::socket(AF_INET, SOCK_STREAM, 0);
	if (hSocket == INVALID_SOCKET)
		ErrorHandler("소켓을 생성할 수 없습니다.");

	//포트 바인딩 및 연결
	SOCKADDR_IN	svraddr = { 0 };
	svraddr.sin_family = AF_INET;
	svraddr.sin_port = htons(25000);
	svraddr.sin_addr.S_un.S_addr = inet_addr("127.0.0.1");
	if (::connect(hSocket,
		(SOCKADDR*)&svraddr, sizeof(svraddr)) == SOCKET_ERROR)
		ErrorHandler("서버에 연결할 수 없습니다.");

	//수신할 파일명, 크기 정보를 먼저 받는다.
	MY_FILE_DATA fData = { 0 };
	if (::recv(hSocket, (char*)&fData, sizeof(fData), 0) < sizeof(fData))
		ErrorHandler("파일 정보를 수신하지 못했습니다.");

	//수신할 파일을 생성한다.
	puts("*** 파일 수신을 시작합니다. ***");
	HANDLE hFile = ::CreateFileA(
		fData.szName,
		GENERIC_WRITE,
		0,
		NULL,
		CREATE_ALWAYS,	//파일을 생성한다.
		0,
		NULL);
	if (hFile == INVALID_HANDLE_VALUE)
		ErrorHandler("전송할 파일을 개방할 수 없습니다.");

	//서버가 전송하는 데이터를 반복해 파일에 붙여 넣는다.
	char byBuffer[65536];		//64KB
	int nRecv;
	DWORD dwTotalRecv = 0, dwRead = 0;
	while (dwTotalRecv < fData.dwSize)
	{
		if ((nRecv = ::recv(hSocket, byBuffer, 65536, 0)) > 0)
		{
			dwTotalRecv += nRecv;
			//서버에서 받은 크기만큼 데이터를 파일에 쓴다.
			::WriteFile(hFile, byBuffer, nRecv, &dwRead, NULL);
			printf("Receive: %d/%d\n", dwTotalRecv, fData.dwSize);
			fflush(stdout);
		}
		else
		{
			puts("ERROR: 파일 수신 중에 오류가 발생했습니다.");
			break;
		}
	}

	::CloseHandle(hFile);
	//파일 수신 완료 후 클라이언트가 먼저 소켓을 닫는다!
	::closesocket(hSocket);
	printf("*** 파일수신이 끝났습니다. ***\n");

	::WSACleanup();
	return 0;
}
~~~

###### [소켓통신WSAAsyncSelect모델](#소켓통신wsaasyncselect모델)
###### [Top](#top)

<br/>
<br/>

***

# 프로토콜이 적용된 파일 송/수신 소켓(Socket)통신
  - [파일 송/수신 프로토콜 정의](#파일-송수신-프로토콜-정의)
  - [프로토콜이 적용된 파일 송수신 Socket통신 (서버Server)](#프로토콜이-적용된-파일-송수신-socket통신-서버server)
  - [프로토콜이 적용된 파일 송수신 Socket통신 (클라이언트Client)](#프로토콜이-적용된-파일-송수신-socket통신-클라이언트client)

###### [프로토콜이 적용된 파일 송/수신 소켓(Socket)통신](#프로토콜이-적용된-파일-송/수신-소켓socket통신)
###### [Top](#top)

<br/>
<br/>

# 파일 송/수신 프로토콜 정의

  - 기본 헤더와 확장 헤더로 나눠서 정의
  - 기본 헤더는 이어지는 확장 헤더를 결정하기 위한 코드 값 포함
  - 코드 값에 따른 switch-case
  - 각 경우에 대한 함수(처리기) 및 해석 방법 적용
  - Send시에는 무조건 크게 한번에 보내는것이 속도 측면에서 무조건 빠르다
  - Recv는 프로토콜상 끊어내서 읽어야 하는 부분이 있을뿐이다

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/ec7722db-9e29-49b6-b151-5decd29a35ca)

###### [프로토콜이 적용된 파일 송/수신 소켓(Socket)통신](#프로토콜이-적용된-파일-송/수신-소켓socket통신)
###### [Top](#top)

<br/>
<br/>

# 프로토콜이 적용된 파일 송수신 Socket통신 (서버Server)
  - Console Application예제

#stdafx.cpp
#서버(Server)
~~~c++
// stdafx.cpp : 표준 포함 파일만 들어 있는 소스 파일입니다.
// TcpFileServer.pch는 미리 컴파일된 헤더가 됩니다.
// stdafx.obj에는 미리 컴파일된 형식 정보가 포함됩니다.

#include "stdafx.h"

// TODO: 필요한 추가 헤더는
// 이 파일이 아닌 STDAFX.H에서 참조합니다.
~~~

<br/>

#stdafx.h
#서버(Server)
~~~c++
// stdafx.h : 자주 사용하지만 자주 변경되지는 않는
// 표준 시스템 포함 파일 및 프로젝트 관련 포함 파일이
// 들어 있는 포함 파일입니다.
//

#pragma once

#include "targetver.h"

#include <stdio.h>
#include <tchar.h>



// TODO: 프로그램에 필요한 추가 헤더는 여기에서 참조합니다.
~~~

<br/>

#targetver.h
#서버(Server)
~~~c++
#pragma once

// SDKDDKVer.h를 포함하면 최고 수준의 가용성을 가진 Windows 플랫폼이 정의됩니다.

// 이전 Windows 플랫폼에 대해 응용 프로그램을 빌드하려는 경우에는 SDKDDKVer.h를 포함하기 전에
// WinSDKVer.h를 포함하고 _WIN32_WINNT 매크로를 지원하려는 플랫폼으로 설정하십시오.

#include <SDKDDKVer.h>
~~~

<br/>

#AppProtocol.h
#서버(Server)
~~~c++
#pragma once

/////////////////////////////////////////////////////////////////////////
//MYCMD 구조체의 nCode 멤버에 적용될 수 있는 값
typedef enum CMDCODE {
	CMD_ERROR = 50,			//에러
	CMD_GET_LIST = 100,			//C->S: 파일 리스트 요구
	CMD_GET_FILE,				//C->S: 파일 전송 요구
	CMD_SND_FILELIST = 200,		//S->C: 파일 리스트 전송
	CMD_BEGIN_FILE			//S->C: 파일 전송 시작을 알림.
} CMDCODE;

/////////////////////////////////////////////////////////////////////////
//기본헤더
typedef struct MYCMD
{
	int nCode;			//명령코드
	int nSize;			//데이터의 바이트 단위 크기
} MYCMD;

/////////////////////////////////////////////////////////////////////////
//확장헤더: 에러 메시지 전송헤더
typedef struct ERRORDATA
{
	int	nErrorCode;		//에러코드: ※향후 확장을 위한 멤버다.
	char szDesc[256];	//에러내용
} ERRORDATA;

/////////////////////////////////////////////////////////////////////////
//확장헤더: S->C: 파일 리스트 전송
typedef struct SEND_FILELIST
{
	unsigned int nCount;	//전송할 파일정보(GETFILE 구조체) 개수
} SEND_FILELIST;

/////////////////////////////////////////////////////////////////////////
//확장헤더: CMD_GET_FILE
typedef struct GETFILE
{
	unsigned int nIndex;	//전송받으려는 파일의 인덱스
} GETFILE;

/////////////////////////////////////////////////////////////////////////
//확장헤더: 
typedef struct FILEINFO
{
	unsigned int nIndex;			//파일의 인덱스
	char szFileName[_MAX_FNAME];	//파일이름
	DWORD dwFileSize;				//파일의 바이트 단위 크기
} FILEINFO;
~~~

<br/>

#TcpFileServer.cpp
#서버(Server)
~~~c++
// TcpFileServer.cpp : 콘솔 응용 프로그램에 대한 진입점을 정의합니다.
//

#include "stdafx.h"
#include <winsock2.h>
#pragma comment(lib, "ws2_32")
//※ 응용 프로그램 통신 프로토콜 정의가 들어있는 헤더파일
#include "AppProtocol.h"


/////////////////////////////////////////////////////////////////////////
//전송할 파일정보 개수
SEND_FILELIST g_flist = { 3 };

//클라이언트가 다운로드 가능한 파일
FILEINFO g_aFInfo[3] = {
	{ 0, "Sleep Away.mp3", 4842585 },
	{ 1, "Kalimba.mp3", 8414449 },
	{ 2, "Maid with the Flaxen Hair.mp3", 4113874 }
};

/////////////////////////////////////////////////////////////////////////
void ErrorHandler(const char *pszMessage)
{
	printf("ERROR: %s\n", pszMessage);
	::WSACleanup();
	exit(1);
}

/////////////////////////////////////////////////////////////////////////
//파일 리스트 정보를 클라이언트에 전송하는 함수.
void SendFileList(SOCKET hClient)
{
	// Send는 한번에 보내는것이 더 빠름

	MYCMD cmd;
	cmd.nCode = CMD_SND_FILELIST;
	cmd.nSize = sizeof(g_flist)+sizeof(g_aFInfo);
	//기본헤더 전송.
	send(hClient, (const char*)&cmd, sizeof(cmd), 0);
	//파일 리스트 헤더 전송.
	send(hClient, (const char*)&g_flist, sizeof(g_flist), 0);
	//파일 정보들 전송.
	send(hClient, (const char*)g_aFInfo, sizeof(g_aFInfo), 0);
}

/////////////////////////////////////////////////////////////////////////
//인덱스에 해당하는 파일을 클라이언트에게 송신하는 함수.
void SendFile(SOCKET hClient, int nIndex)
{
	MYCMD cmd;
	ERRORDATA err;
	//파일 리스트에서 인덱스에 맞는 파일을 검사한다.
	if (nIndex < 0 || nIndex > 2)
	{
		cmd.nCode = CMD_ERROR;
		cmd.nSize = sizeof(err);
		err.nErrorCode = 0;
		strcpy_s(err.szDesc, "잘못된 파일 인덱스 입니다.");

		// Send는 한번에 보내는것이 더 빠름
		//오류 정보를 클라이언트에게 전송.
		send(hClient, (const char*)&cmd, sizeof(cmd), 0);
		send(hClient, (const char*)&err, sizeof(err), 0);
		return;
	}

	//파일 송신 시작을 알리는 정보를 전송한다.
	cmd.nCode = CMD_BEGIN_FILE;
	cmd.nSize = sizeof(FILEINFO);
	send(hClient, (const char*)&cmd, sizeof(cmd), 0);
	//송신하는 파일에 대한 정보를 전송한다.
	send(hClient, (const char*)&g_aFInfo[nIndex], sizeof(FILEINFO), 0);
	// 네이글알고리즘으로 인해 연속적인 send를 했을때, 한번에 갔을 확률이 높다
	// Send는 한번에 보내는것이 더 빠름

	FILE *fp = NULL;
	errno_t nResult = fopen_s(&fp, g_aFInfo[nIndex].szFileName, "rb");
	if (nResult != 0)
		ErrorHandler("전송할 파일을 개방할 수 없습니다.");

	//파일을 송신한다.
	//TransmitFile api를 사용해도 될거 같다
	char byBuffer[65536];		//64KB
	int nRead;
	while ((nRead = fread(byBuffer, sizeof(char), 65536, fp)) > 0)
		send(hClient, byBuffer, nRead, 0);

	fclose(fp);
}

/////////////////////////////////////////////////////////////////////////
int _tmain(int argc, _TCHAR* argv[])
{
	//윈속 초기화
	WSADATA wsa = { 0 };
	if (::WSAStartup(MAKEWORD(2, 2), &wsa) != 0)
		ErrorHandler("윈속을 초기화 할 수 없습니다.");

	//접속대기 소켓 생성
	SOCKET hSocket = ::socket(AF_INET, SOCK_STREAM, 0);
	if (hSocket == INVALID_SOCKET)
		ErrorHandler("접속 대기 소켓을 생성할 수 없습니다.");

	//포트 바인딩
	SOCKADDR_IN	svraddr = { 0 };
	svraddr.sin_family = AF_INET;
	svraddr.sin_port = htons(25000);
	svraddr.sin_addr.S_un.S_addr = htonl(INADDR_ANY);
	if (::bind(hSocket,
		(SOCKADDR*)&svraddr, sizeof(svraddr)) == SOCKET_ERROR )
		ErrorHandler("소켓에 IP주소와 포트를 바인드 할 수 없습니다.");

	//접속대기 상태로 전환
	if (::listen(hSocket, SOMAXCONN) == SOCKET_ERROR)
		ErrorHandler("리슨 상태로 전환할 수 없습니다.");
	puts("파일송신서버를 시작합니다.");

	//클라이언트 연결을 받아들이고 새로운 소켓 생성(개방)
	SOCKADDR_IN clientaddr = { 0 };
	int nAddrLen = sizeof(clientaddr);

	SOCKET hClient = ::accept(hSocket, (SOCKADDR*)&clientaddr, &nAddrLen);
	if (hClient == INVALID_SOCKET)
		ErrorHandler("클라이언트 통신 소켓을 생성할 수 없습니다.");
	puts("클라이언트가 연결되었습니다.");

	//클라이언트로부터 명령을 수신하고 대응하는 Event loop.
	MYCMD cmd;
	while (::recv(hClient, (char*)&cmd, sizeof(MYCMD), 0) > 0)
	{
		// 성능을 더 높이기 위해서는 switch가 아니라 lookup table을 사용해야 한다.
		switch (cmd.nCode)
		{
		case CMD_GET_LIST:
			puts("클라이언트가 파일목록을 요구함.");
			SendFileList(hClient);
			break;

		case CMD_GET_FILE:
			puts("클라이언트가 파일전송을 요구함.");
			{
				GETFILE file;
				::recv(hClient, (char*)&file, sizeof(file), 0);
				SendFile(hClient, file.nIndex);
				break;
			}

		default:
			ErrorHandler("알 수 없는 명령을 수신했습니다.");
			break;
		}
	}

	//클라이언트가 연결을 종료함.
	::closesocket(hClient);
	puts("클라이언트 연결이 끊겼습니다.");

	//리슨 소켓 닫기
	::closesocket(hSocket);
	//윈속 해제
	::WSACleanup();
	return 0;
}
~~~

###### [프로토콜이 적용된 파일 송/수신 소켓(Socket)통신](#프로토콜이-적용된-파일-송/수신-소켓socket통신)
###### [Top](#top)

<br/>
<br/>

# 프로토콜이 적용된 파일 송수신 Socket통신 (클라이언트Client)
  - Console Application예제

#stdafx.cpp
#클라이언트(Client)
~~~c++
// stdafx.cpp : 표준 포함 파일만 들어 있는 소스 파일입니다.
// TcpFileClient.pch는 미리 컴파일된 헤더가 됩니다.
// stdafx.obj에는 미리 컴파일된 형식 정보가 포함됩니다.

#include "stdafx.h"

// TODO: 필요한 추가 헤더는
// 이 파일이 아닌 STDAFX.H에서 참조합니다.
~~~

<br/>

#stdafx.h
#클라이언트(Client)
~~~c++
// stdafx.h : 자주 사용하지만 자주 변경되지는 않는
// 표준 시스템 포함 파일 및 프로젝트 관련 포함 파일이
// 들어 있는 포함 파일입니다.
//

#pragma once

#include "targetver.h"

#include <stdio.h>
#include <tchar.h>
#define _WINSOCK_DEPRECATED_NO_WARNINGS



// TODO: 프로그램에 필요한 추가 헤더는 여기에서 참조합니다.
~~~

<br/>

#targetver.h
#클라이언트(Client)
~~~c++
#pragma once

// SDKDDKVer.h를 포함하면 최고 수준의 가용성을 가진 Windows 플랫폼이 정의됩니다.

// 이전 Windows 플랫폼에 대해 응용 프로그램을 빌드하려는 경우에는 SDKDDKVer.h를 포함하기 전에
// WinSDKVer.h를 포함하고 _WIN32_WINNT 매크로를 지원하려는 플랫폼으로 설정하십시오.

#include <SDKDDKVer.h>
~~~

<br/>

#AppProtocol.h
#클라이언트(Client)
~~~c++
#pragma once

/////////////////////////////////////////////////////////////////////////
//MYCMD 구조체의 nCode 멤버에 적용될 수 있는 값
typedef enum CMDCODE {
	CMD_ERROR = 50,			//에러
	CMD_GET_LIST = 100,			//C->S: 파일 리스트 요구
	CMD_GET_FILE,				//C->S: 파일 전송 요구
	CMD_SND_FILELIST = 200,		//S->C: 파일 리스트 전송
	CMD_BEGIN_FILE			//S->C: 파일 전송 시작을 알림.
} CMDCODE;

/////////////////////////////////////////////////////////////////////////
//기본헤더
typedef struct MYCMD
{
	int nCode;			//명령코드
	int nSize;			//데이터의 바이트 단위 크기
} MYCMD;

/////////////////////////////////////////////////////////////////////////
//확장헤더: 에러 메시지 전송헤더
typedef struct ERRORDATA
{
	int	nErrorCode;		//에러코드: ※향후 확장을 위한 멤버다.
	char szDesc[256];	//에러내용
} ERRORDATA;

/////////////////////////////////////////////////////////////////////////
//확장헤더: S->C: 파일 리스트 전송
typedef struct SEND_FILELIST
{
	unsigned int nCount;	//전송할 파일정보(GETFILE 구조체) 개수
} SEND_FILELIST;

/////////////////////////////////////////////////////////////////////////
//확장헤더: CMD_GET_FILE
typedef struct GETFILE
{
	unsigned int nIndex;	//전송받으려는 파일의 인덱스
} GETFILE;

/////////////////////////////////////////////////////////////////////////
//확장헤더: 
typedef struct FILEINFO
{
	unsigned int nIndex;			//파일의 인덱스
	char szFileName[_MAX_FNAME];	//파일이름
	DWORD dwFileSize;				//파일의 바이트 단위 크기
} FILEINFO;
~~~

<br/>

#TcpFileClient.cpp
#클라이언트(Client)
~~~c++
// TcpFileClient.cpp : 콘솔 응용 프로그램에 대한 진입점을 정의합니다.
//

#include "stdafx.h"
#include <winsock2.h>
#pragma comment(lib, "ws2_32")
#include "AppProtocol.h"


void ErrorHandler(const char* pszMessage)
{
	printf("ERROR: %s\n", pszMessage);
	::WSACleanup();
	exit(1);
}

/////////////////////////////////////////////////////////////////////////
void GetFileList(SOCKET hSocket)
{
	//서버에 파일 리스트를 요청한다.
	MYCMD cmd = { CMD_GET_LIST, 0 };
	::send(hSocket, (const char*)&cmd, sizeof(cmd), 0);

	//서버로부터 파일 리스트를 수신한다.
	::recv(hSocket, (char*)&cmd, sizeof(cmd), 0);
	if (cmd.nCode != CMD_SND_FILELIST)
		ErrorHandler("서버에서 파일 리스트를 수신하지 못했습니다.");

	SEND_FILELIST filelist;
	::recv(hSocket, (char*)&filelist, sizeof(filelist), 0);

	//수신한 리스트 정보를 화면에 출력한다.
	FILEINFO fInfo;
	for (unsigned int i = 0; i < filelist.nCount; ++i)
	{
		::recv(hSocket, (char*)&fInfo, sizeof(fInfo), 0);
		printf("%d\t%s\t%d\n",
			fInfo.nIndex, fInfo.szFileName, fInfo.dwFileSize);
	}
}

/////////////////////////////////////////////////////////////////////////
void GetFile(SOCKET hSocket)
{
	int nIndex;
	printf("수신할 파일의 인덱스(0~2)를 입력하세요.: ");
	fflush(stdin);
	scanf_s("%d", &nIndex);

	//1. 서버에 파일 전송을 요청
	BYTE* pCommand = new BYTE[sizeof(MYCMD) + sizeof(GETFILE)];
	memset(pCommand, 0, sizeof(MYCMD) + sizeof(GETFILE));

	MYCMD* pCmd = (MYCMD*)pCommand;
	pCmd->nCode = CMD_GET_FILE;
	pCmd->nSize = sizeof(GETFILE);

	GETFILE* pFile = (GETFILE*)(pCommand + sizeof(MYCMD));
	pFile->nIndex = nIndex;
	//두 헤더를 한 메모리에 묶어서 전송한다!
	::send(hSocket,
		(const char*)pCommand, sizeof(MYCMD) + sizeof(GETFILE), 0);
	delete[] pCommand;

	//2. 전송받을 파일에 대한 상세 정보 수신.
	MYCMD cmd = { 0 };
	FILEINFO fInfo = { 0 };
	::recv(hSocket, (char*)&cmd, sizeof(cmd), 0);
	if (cmd.nCode == CMD_ERROR)
	{
		ERRORDATA err = { 0 };
		::recv(hSocket, (char*)&err, sizeof(err), 0);
		ErrorHandler(err.szDesc);
	}
	else
		::recv(hSocket, (char*)&fInfo, sizeof(fInfo), 0);

	//3. 파일을 수신한다.
	printf("%s 파일 수신을 시작합니다!\n", fInfo.szFileName);
	FILE* fp = NULL;
	errno_t nResult = fopen_s(&fp, fInfo.szFileName, "wb");
	if (nResult != 0)
		ErrorHandler("파일을 생성 할 수 없습니다.");

	char byBuffer[65536];		//64KB
	int nRecv;
	DWORD dwTotalRecv = 0;
	while ((nRecv = ::recv(hSocket, byBuffer, 65536, 0)) > 0)
	{
		fwrite(byBuffer, nRecv, 1, fp);
		dwTotalRecv += nRecv;
		putchar('#');

		if (dwTotalRecv >= fInfo.dwFileSize)
		{
			putchar('\n');
			puts("파일 수신완료!");
			break;
		}
	}

	fclose(fp);
}

/////////////////////////////////////////////////////////////////////////
int _tmain(int argc, _TCHAR* argv[])
{
	WSADATA wsa = { 0 };
	if (::WSAStartup(MAKEWORD(2, 2), &wsa) != 0)
		ErrorHandler("윈속을 초기화 할 수 없습니다.");

	SOCKET hSocket = ::socket(AF_INET, SOCK_STREAM, 0);
	if (hSocket == INVALID_SOCKET)
		ErrorHandler("소켓을 생성할 수 없습니다.");

	//포트 바인딩 및 연결
	SOCKADDR_IN	svraddr = { 0 };
	svraddr.sin_family = AF_INET;
	svraddr.sin_port = htons(25000);
	svraddr.sin_addr.S_un.S_addr = inet_addr("127.0.0.1");
	if (::connect(hSocket,
		(SOCKADDR*)&svraddr, sizeof(svraddr)) == SOCKET_ERROR)
		ErrorHandler("서버에 연결할 수 없습니다.");

	//서버로부터 파일 리스트를 수신한다.
	GetFileList(hSocket);

	//전송받을 파일을 선택하고 수신한다.
	GetFile(hSocket);

	::closesocket(hSocket);
	::WSACleanup();
	return 0;
}
~~~

###### [프로토콜이 적용된 파일 송/수신 소켓(Socket)통신](#프로토콜이-적용된-파일-송/수신-소켓socket통신)
###### [Top](#top)

<br/>
<br/>

***

# Overlapped I/O
  - [비동기 File입/출력_Event](#비동기-file입출력_event)
  - [비동기 File입/출력_Callback](#비동기-file입출력_callback)

###### [Overlapped I/O](#overlapped-io)
###### [Top](#top)

<br/>
<br/>

# 비동기 File입/출력_Event
  - 중첩된 파일 입/출력을 하기 위해서는, CreateFile함수 사용하여야 한다(fopen함수는 불가)
    - 두개 이상의 Process, Thread가 하나의 Filed을 Read하는 경우
  - 비동기완료를 받는 방법은 2가지가 있다
    - Event
      - Process가 OS에게 파일 입/출력을 해달라고 요청, OS가 그것의 작업을 끝내면, Event를 Set해준다.
    - Callback

<br/>

#stdafx.cpp
~~~c++
// stdafx.cpp : 표준 포함 파일만 들어 있는 소스 파일입니다.
// AsyncFileEvent.pch는 미리 컴파일된 헤더가 됩니다.
// stdafx.obj에는 미리 컴파일된 형식 정보가 포함됩니다.

#include "stdafx.h"

// TODO: 필요한 추가 헤더는
// 이 파일이 아닌 STDAFX.H에서 참조합니다.
~~~

<br/>

#stdafx.h
~~~c++
// stdafx.h : 자주 사용하지만 자주 변경되지는 않는
// 표준 시스템 포함 파일 및 프로젝트 관련 포함 파일이
// 들어 있는 포함 파일입니다.
//

#pragma once

#include "targetver.h"

#include <stdio.h>
#include <tchar.h>



// TODO: 프로그램에 필요한 추가 헤더는 여기에서 참조합니다.
~~~

<br/>

#targetver.h
~~~c++
#pragma once

// SDKDDKVer.h를 포함하면 최고 수준의 가용성을 가진 Windows 플랫폼이 정의됩니다.

// 이전 Windows 플랫폼에 대해 응용 프로그램을 빌드하려는 경우에는 SDKDDKVer.h를 포함하기 전에
// WinSDKVer.h를 포함하고 _WIN32_WINNT 매크로를 지원하려는 플랫폼으로 설정하십시오.

#include <SDKDDKVer.h>
~~~

<br/>

#ConsoleApp.cpp
~~~c++
// AsyncFileEvent.cpp : 콘솔 응용 프로그램에 대한 진입점을 정의합니다.
//

#include "stdafx.h"
#include <Windows.h>

// 함수를 사용하기 전에 함수의 선언이 필요하여 작성
DWORD WINAPI MyThreadFunction(LPVOID lpParam);

int _tmain(int argc, _TCHAR* argv[])
{
	HANDLE hThread;
	DWORD threadID;

	// 스레드 생성
	hThread = CreateThread(NULL, 0, MyThreadFunction, NULL, 0, &threadID);

	if (hThread == NULL) {
		puts("ERROR: 스레드 생성 실패");
		return 1;
	}

	// 스레드 종료를 기다림
	puts("생성 스레드 종료 대기");
	WaitForSingleObject(hThread, INFINITE);
	puts("생성 스레드 종료 완료");

	// 스레드 핸들 해제
	CloseHandle(hThread);

	return 0;
}

DWORD WINAPI MyThreadFunction(LPVOID lpParam) 
{
	//중첩된 쓰기 속성을 부여하고 파일을 생성한다.
	HANDLE hFile = ::CreateFile(
		_T("TestFile.txt"),
		GENERIC_WRITE,		//쓰기 모드
		0,					//공유하지 않음.
		NULL,
		CREATE_ALWAYS,		//무조건 생성.
		FILE_ATTRIBUTE_NORMAL | FILE_FLAG_OVERLAPPED,	//중첩된 쓰기
		NULL);
	if (hFile == INVALID_HANDLE_VALUE)
	{
		puts("ERROR: 대상 파일을 열 수 없습니다.");
		return 0;
	}

	//비동기 쓰기와 관련한 OVERLAPPED 구조체 및 이벤트 핸들을 선언 한다.
	DWORD dwRead;
	OVERLAPPED aOl[3] = { 0 };
	HANDLE aEvt[3] = { 0 };

	//세 번의 비동기 쓰기 완료를 확인하기 위한 이벤트 객체를 생성한다.
	for (int i = 0; i < 3; ++i)
	{
		aEvt[i] = ::CreateEvent(NULL, FALSE, FALSE, NULL);
		aOl[i].hEvent = aEvt[i];
	}

	//비동기 쓰기가 시작될 지점을 기술한다.
	//두 번째 쓰기는 세 번째 쓰기보다 나중에 이루어질 가능성이 높다.
	aOl[0].Offset = 0;					//파일의 시작.
	aOl[1].Offset = 1024 * 1024 * 128;	//5MB
	aOl[2].Offset = 16;					//16바이트

	//세 번의 비동기 쓰기를 순차적으로 수행한다.
	for (int i = 0; i < 3; ++i)
	{
		printf("%d번째 중첩된 쓰기 시도.\n", i);
		::WriteFile(hFile, "0123456789", 10, &dwRead, &aOl[i]);
		//정상적인 경우 쓰기 시도는 지연(보류)된다!
		//OS에게 요청한 명령이 OS가 가지고 있는 어떤 Queue에 쌓이면 그것이 PENDING되었다고 표현된다
		if (::GetLastError() != ERROR_IO_PENDING)
			exit(0);
	}

	//세 번의 비동기 쓰기가 완료되기를 대기한다.
	DWORD dwResult = 0;
	for (int i = 0; i < 3; ++i)
	{
		dwResult = ::WaitForMultipleObjects(3, aEvt, FALSE, INFINITE);
		printf("-> %d번째 쓰기 완료.\n", dwResult - WAIT_OBJECT_0);
	}

	//이벤트 핸들과 파일을 닫는다.
	for (int i = 0; i < 3; ++i)
		::CloseHandle(aEvt[i]);
	::CloseHandle(hFile);
	return 0;
}


//생성 스레드 종료 대기
//0번째 중첩된 쓰기 시도.
//1번째 중첩된 쓰기 시도.
//2번째 중첩된 쓰기 시도.
//-> 0번째 쓰기 완료.
//-> 2번째 쓰기 완료.
//-> 1번째 쓰기 완료.
//생성 스레드 종료 완료
~~~

###### [Overlapped I/O](#overlapped-io)
###### [Top](#top)

<br/>
<br/>

# 비동기 File입/출력_Callback
  - 중첩된 파일 입/출력을 하기 위해서는, CreateFile함수 사용하여야 한다(fopen함수는 불가)
    - 두개 이상의 Process, Thread가 하나의 Filed을 Read하는 경우
  - 비동기완료를 받는 방법은 2가지가 있다
    - Event
    - Callback
      - OS가 함수를 Call해준다
  - Callback을 사용할때는 SleepEx라는 함수가 등장하게 되고, Thread상태중 Alertable wait상태가 등장하게 된다.
  - SleeEx 함수를 사용하게 되면 해당 Thread는 Alertable wait상태로 전향된다
  - SleeEx에 할당된 시간이 지남과, OS가 작업을 끝내고 함수를 콜하게 되면 Alertable wait상태에서 빠져나오게 된다.
  - SleeEx에 할당된 시간이 지나지 않아도 OS가 해당하는 함수를 Callback하게 되면 Alertable wait상태에서 나오게 된다
  - 메모리를 할당하고, 해제하는 함수가 다르게 된다

<br/>

#stdafx.cpp
~~~c++
// stdafx.cpp : 표준 포함 파일만 들어 있는 소스 파일입니다.
// AsyncFileCallback.pch는 미리 컴파일된 헤더가 됩니다.
// stdafx.obj에는 미리 컴파일된 형식 정보가 포함됩니다.

#include "stdafx.h"

// TODO: 필요한 추가 헤더는
// 이 파일이 아닌 STDAFX.H에서 참조합니다.
~~~

<br/>

#stdafx.h
~~~c++
// stdafx.h : 자주 사용하지만 자주 변경되지는 않는
// 표준 시스템 포함 파일 및 프로젝트 관련 포함 파일이
// 들어 있는 포함 파일입니다.
//

#pragma once

#include "targetver.h"

#include <stdio.h>
#include <tchar.h>



// TODO: 프로그램에 필요한 추가 헤더는 여기에서 참조합니다.
~~~

<br/>

#targetver.h
~~~c++
#pragma once

// SDKDDKVer.h를 포함하면 최고 수준의 가용성을 가진 Windows 플랫폼이 정의됩니다.

// 이전 Windows 플랫폼에 대해 응용 프로그램을 빌드하려는 경우에는 SDKDDKVer.h를 포함하기 전에
// WinSDKVer.h를 포함하고 _WIN32_WINNT 매크로를 지원하려는 플랫폼으로 설정하십시오.

#include <SDKDDKVer.h>
~~~

<br/>

#AsyncFileCallback.cpp
~~~c++
// AsyncFileCallback.cpp : 콘솔 응용 프로그램에 대한 진입점을 정의합니다.
//

#include "stdafx.h"
#include <Windows.h>

/////////////////////////////////////////////////////////////////////////
//파일 쓰기가 완료되면 역호출되는 함수.
void CALLBACK FileIoComplete(
	DWORD dwError,		//에러코드
	DWORD dwTransfered,	//입/출력이 완료된 데이터 크기
	LPOVERLAPPED pOl)	//OVERLAPPED 구조체
{
	printf("FileIoComplete() Callback - [%d 바이트] 쓰기완료 - %s\n",
		dwTransfered, (char*)pOl->hEvent);

	//hEvent 멤버를 포인터로 전용했으므로 가리키는 대상 메모리 해제한다.
	//이 메모리는 IoThreadFunction() 함수에서 동적 할당한 것들이다!
	delete[] pOl->hEvent;
	delete pOl;
	puts("FileIoComplete() - return\n");
}

/////////////////////////////////////////////////////////////////////////
DWORD WINAPI IoThreadFunction(LPVOID pParam)
{
	//메모리를 동적 할당하고 값을 채운다.
	//※이 메모리는 완료 함수에서 해제한다.
	char *pszBuffer = new char[16];
	memset(pszBuffer, 0, sizeof(char) * 16);
	strcpy_s(pszBuffer, sizeof(char) * 16, "Hello IOCP");

	//※OVERLAPPED 구조체의 hEvent 멤버를 포인터 변수로 전용한다!
	LPOVERLAPPED pOverlapped = NULL;
	pOverlapped = new OVERLAPPED;
	memset(pOverlapped, NULL, sizeof(OVERLAPPED));

	//파일 쓰기 시작 위치를 512MB로 설정한다.
	pOverlapped->Offset = 1024 * 1024 * 512;	//512MB
	pOverlapped->hEvent = pszBuffer; // 포인터 변수로 전용한다!

	//비동기 쓰기를 시도한다. 쓰기가 완료되면 완료 함수가 역호출된다.
	puts("IoThreadFunction() - 중첩된 쓰기 시도");
	::WriteFileEx((HANDLE)pParam,
		pszBuffer, // 쓰기할 데이터
		sizeof(char) * 16, // 데이터 크기
		pOverlapped, // OVERLAPPED 구조체 전달.
		FileIoComplete); // 콜백함수 지정.

	//비동기 쓰기 시도에 대해 Alertable wait 상태로 대기한다.
	// WAIT_IO_COMPLETION : 비동기 입출력이 완료되면 반환된다.
	for ( ; ::SleepEx(1, TRUE) != WAIT_IO_COMPLETION; );


	puts("IoThreadFunction() - return");
	return 0;
}

/////////////////////////////////////////////////////////////////////////
int _tmain(int argc, _TCHAR* argv[])
{
	//중첩된 쓰기 속성을 부여하고 파일을 생성한다.
	HANDLE hFile = ::CreateFile(
		_T("TestFile.txt"),
		GENERIC_WRITE,		//쓰기 모드
		0,					//공유하지 않음.
		NULL,
		CREATE_ALWAYS,		//무조건 생성.
		FILE_ATTRIBUTE_NORMAL | FILE_FLAG_OVERLAPPED,	//중첩된 쓰기
		NULL);
	if (hFile == INVALID_HANDLE_VALUE)
	{
		puts("ERROR: 대상 파일을 열 수 없습니다.");
		return 0;
	}

	//비동기 쓰기를 위한 스레드를 생성한다.
	HANDLE hThread = NULL;
	DWORD dwThreadID = 0;

	dwThreadID = 0;
	hThread = ::CreateThread(
			NULL,	//보안속성 상속.
			0,		//스택 메모리는 기본크기(1MB).
			IoThreadFunction,	//스래드로 실행할 함수이름.
			hFile,	//함수에 전달할 매개변수.
			0,		//생성 플래그는 기본값 사용.
			&dwThreadID);	//생성된 스레드ID 저장.

	//작업자 스레드가 종료될 때까지 기다린다.
	::WaitForSingleObject(hThread, INFINITE);
	
	//파일을 닫고 종료한다.
	puts("main() thread 종료");
	::CloseHandle(hFile);
	return 0;
}
~~~

###### [Overlapped I/O](#overlapped-io)
###### [Top](#top)

<br/>
<br/>

***

# IOCP

#stdafx.cpp
~~~c++
// stdafx.cpp : 표준 포함 파일만 들어 있는 소스 파일입니다.
// IOCP_ChatServer.pch는 미리 컴파일된 헤더가 됩니다.
// stdafx.obj에는 미리 컴파일된 형식 정보가 포함됩니다.

#include "stdafx.h"

// TODO: 필요한 추가 헤더는
// 이 파일이 아닌 STDAFX.H에서 참조합니다.
~~~

<br/>

#stdafx.h
~~~c++
// stdafx.h : 자주 사용하지만 자주 변경되지는 않는
// 표준 시스템 포함 파일 및 프로젝트 관련 포함 파일이
// 들어 있는 포함 파일입니다.
//

#pragma once

#include "targetver.h"

#include <stdio.h>
#include <tchar.h>



// TODO: 프로그램에 필요한 추가 헤더는 여기에서 참조합니다.
~~~

<br/>

#targetver.h
~~~c++
#pragma once

// SDKDDKVer.h를 포함하면 최고 수준의 가용성을 가진 Windows 플랫폼이 정의됩니다.

// 이전 Windows 플랫폼에 대해 응용 프로그램을 빌드하려는 경우에는 SDKDDKVer.h를 포함하기 전에
// WinSDKVer.h를 포함하고 _WIN32_WINNT 매크로를 지원하려는 플랫폼으로 설정하십시오.

#include <SDKDDKVer.h>
~~~

<br/>

#IOCP_ChatServer.cpp
~~~c++
// IOCP_ChatServer.cpp : 콘솔 응용 프로그램에 대한 진입점을 정의합니다.
//
#include "stdafx.h"
#include <winsock2.h>
#pragma comment(lib, "ws2_32")
#include <windows.h>
#include <list>
#include <iterator>

/////////////////////////////////////////////////////////////////////////
typedef struct _USERSESSION
{
	SOCKET	hSocket;
	char	buffer[8192];	//8KB
} USERSESSION;

/////////////////////////////////////////////////////////////////////////
//클라이언트 처리를 위한 작업자 스레드 개수.
#define MAX_THREAD_CNT		4

CRITICAL_SECTION  g_cs;				//스레드 동기화 객체
std::list<SOCKET>	g_listClient;	//연결된 클라이언트 소켓 리스트.
SOCKET	g_hSocket;					//서버의 리슨 소켓
HANDLE	g_hIocp;					//IOCP 핸들


/////////////////////////////////////////////////////////////////////////
//연결된 클라이언트 모두에게 메시지를 전송한다.
void SendMessageAll(char *pszMessage, int nSize)
{
	std::list<SOCKET>::iterator it;

	::EnterCriticalSection(&g_cs);
	for (it = g_listClient.begin(); it != g_listClient.end(); ++it)
		::send(*it, pszMessage, nSize, 0);
	::LeaveCriticalSection(&g_cs);
}

/////////////////////////////////////////////////////////////////////////
//연결된 모든 클라이언트 및 리슨 소켓을 닫는다.
void CloseAll()
{
	std::list<SOCKET>::iterator it;

	::EnterCriticalSection(&g_cs);
	for (it = g_listClient.begin(); it != g_listClient.end(); ++it)
	{
		::shutdown(*it, SD_BOTH);
		::closesocket(*it);
	}
	::LeaveCriticalSection(&g_cs);
}

/////////////////////////////////////////////////////////////////////////
void CloseClient(SOCKET hSock)
{
	::shutdown(hSock, SD_BOTH);
	::closesocket(hSock);

	::EnterCriticalSection(&g_cs);
	g_listClient.remove(hSock);
	::LeaveCriticalSection(&g_cs);
}

/////////////////////////////////////////////////////////////////////////
void ReleaseServer(void)
{
	//클라이언트 연결을 모두 종료한다.
	CloseAll();
	::Sleep(500);

	//Listen 소켓을 닫는다.
	::shutdown(g_hSocket, SD_BOTH);
	::closesocket(g_hSocket);
	g_hSocket = NULL;

	//IOCP 핸들을 닫는다. 이렇게 하면 GQCS() 함수가 FALSE를 반환하며
	//:GetLastError() 함수가 ERROR_ABANDONED_WAIT_0을 반환한다.
	//IOCP 스레드들이 모두 종료된다.
	::CloseHandle(g_hIocp);
	g_hIocp = NULL;

	//IOCP 스레드들이 종료되기를 일정시간 동안 기다린다.
	::Sleep(500);
	::DeleteCriticalSection(&g_cs);
}

/////////////////////////////////////////////////////////////////////////
//Ctrl+C 이벤트를 감지하고 프로그램을 종료한다.
BOOL CtrlHandler(DWORD dwType)
{
	if (dwType == CTRL_C_EVENT)
	{
		ReleaseServer();

		puts("*** 채팅서버를 종료합니다! ***");
		::WSACleanup();
		exit(0);
		return TRUE;
	}

	return FALSE;
}

/////////////////////////////////////////////////////////////////////////
DWORD WINAPI ThreadComplete(LPVOID pParam)
{
	DWORD			dwTransferredSize = 0;
	DWORD			dwFlag = 0;
	USERSESSION		*pSession = NULL;
	LPWSAOVERLAPPED	pWol = NULL;
	BOOL			bResult;

	puts("[IOCP 작업자 스레드 시작]");
	while (1)
	{
		bResult = ::GetQueuedCompletionStatus(
			g_hIocp,				//Dequeue할 IOCP 핸들.
			&dwTransferredSize,		//수신한 데이터 크기.
			(PULONG_PTR)&pSession,	//수신된 데이터가 저장된 메모리
			&pWol,					//OVERLAPPED 구조체.
			INFINITE);				//이벤트를 무한정 대기.

		if (bResult == TRUE)
		{
			//정상적인 경우.

			/////////////////////////////////////////////////////////////
			//1. 클라이언트가 소켓을 정상적으로 닫고 연결을 끊은 경우.
			if (dwTransferredSize == 0)
			{
				
				CloseClient(pSession->hSocket);
				delete pWol;
				delete pSession;
				puts("\tGQCS: 클라이언트가 정상적으로 연결을 종료함.");
			}

			/////////////////////////////////////////////////////////////
			//2. 클라이언트가 보낸 데이터를 수신한 경우.
			else
			{
				SendMessageAll(pSession->buffer, dwTransferredSize);
				memset(pSession->buffer, 0, sizeof(pSession->buffer));

				//다시 IOCP에 등록.
				DWORD dwReceiveSize	= 0;
				DWORD dwFlag		= 0;
				WSABUF wsaBuf		= { 0 };
				wsaBuf.buf = pSession->buffer;
				wsaBuf.len = sizeof(pSession->buffer);

				::WSARecv(
					pSession->hSocket,	//클라이언트 소켓 핸들
					&wsaBuf,			//WSABUF 구조체 배열의 주소
					1,					//배열 요소의 개수
					&dwReceiveSize,
					&dwFlag,
					pWol,
					NULL);
				if (::WSAGetLastError() != WSA_IO_PENDING)
					puts("\tGQCS: ERROR: WSARecv()");
			}
		}
		else
		{
			//비정상적인 경우.

			/////////////////////////////////////////////////////////////
			//3. 완료 큐에서 완료 패킷을 꺼내지 못하고 반환한 경우.
			if (pWol == NULL)
			{
				//IOCP 핸들이 닫힌 경우(서버를 종료하는 경우)도 해당된다.
				puts("\tGQCS: IOCP 핸들이 닫혔습니다.");
				break;
			}

			/////////////////////////////////////////////////////////////
			//4. 클라이언트가 비정상적으로 종료됐거나
			//   서버가 먼저 연결을 종료한 경우.
			else
			{
				if (pSession != NULL)
				{
					CloseClient(pSession->hSocket);
					delete pWol;
					delete pSession;
				}

				puts("\tGQCS: 서버 종료 혹은 비정상적 연결 종료");
			}
		}
	}

	puts("[IOCP 작업자 스레드 종료]");
	return 0;
}

/////////////////////////////////////////////////////////////////////////
DWORD WINAPI ThreadAcceptLoop(LPVOID pParam)
{
	LPWSAOVERLAPPED	pWol = NULL;
	DWORD			dwReceiveSize, dwFlag;
	USERSESSION		*pNewUser;
	int				nAddrSize = sizeof(SOCKADDR);
	WSABUF			wsaBuf;
	SOCKADDR		ClientAddr;
	SOCKET			hClient;
	int				nRecvResult = 0;

	while ((hClient = ::accept(g_hSocket,
						&ClientAddr, &nAddrSize)) != INVALID_SOCKET)
	{
		puts("새 클라이언트가 연결됐습니다.");
		::EnterCriticalSection(&g_cs);
		g_listClient.push_back(hClient);
		::LeaveCriticalSection(&g_cs);

		//새 클라이언트에 대한 세션 객체 생성
		pNewUser = new USERSESSION;
		::ZeroMemory(pNewUser, sizeof(USERSESSION));
		pNewUser->hSocket = hClient;

		//비동기 수신 처리를 위한 OVERLAPPED 구조체 생성.
		pWol = new WSAOVERLAPPED;
		::ZeroMemory(pWol, sizeof(WSAOVERLAPPED));

		//(연결된) 클라이언트 소켓 핸들을 IOCP에 연결.
		::CreateIoCompletionPort( (HANDLE)hClient, g_hIocp,
			(ULONG_PTR)pNewUser,		//KEY!!!
			0);

		dwReceiveSize = 0;
		dwFlag = 0;
		
		// wsaBuf는 pNewUser->buffer만큼의 크기를 IOCP쪽에 등록하기 위해 사용 WSARecv를 사용하여 등록
		wsaBuf.buf = pNewUser->buffer;
		wsaBuf.len = sizeof(pNewUser->buffer);

		//클라이언트가 보낸 정보를 비동기 수신한다.
		nRecvResult = ::WSARecv(hClient, &wsaBuf, 1, &dwReceiveSize,
							&dwFlag, pWol, NULL);
		if (::WSAGetLastError() != WSA_IO_PENDING)
			puts("ERROR: WSARecv() != WSA_IO_PENDING");
	}

	return 0;
}

/////////////////////////////////////////////////////////////////////////
int _tmain(int argc, _TCHAR* argv[])
{
	//윈속 초기화
	WSADATA wsa = { 0 };
	if (::WSAStartup(MAKEWORD(2, 2), &wsa) != 0)
	{
		puts("ERROR: 윈속을 초기화 할 수 없습니다.");
		return 0;
	}

	//임계영역객체를 생성한다.
	::InitializeCriticalSection(&g_cs);

	//Ctrl+C 키를 눌렀을 때 이를 감지하고 처리할 함수를 등록한다.
	if (::SetConsoleCtrlHandler(
			(PHANDLER_ROUTINE)CtrlHandler, TRUE) == FALSE)
		puts("ERROR: Ctrl+C 처리기를 등록할 수 없습니다.");

	//IOCP 생성
	g_hIocp = ::CreateIoCompletionPort(
		INVALID_HANDLE_VALUE,	//연결된 파일 없음.
		NULL,			//기존 핸들 없음.
		0,				//식별자(Key) 해당되지 않음.
		0);				//스레드 개수는 OS에 맡김.
	if (g_hIocp == NULL)
	{
		puts("ERORR: IOCP를 생성할 수 없습니다.");
		return 0;
	}

	//IOCP 스레드들 생성
	HANDLE hThread;
	DWORD dwThreadID;
	for (int i = 0; i < MAX_THREAD_CNT; ++i)
	{
		dwThreadID = 0;
		//클라이언트로부터 문자열을 수신함.
		hThread = ::CreateThread(NULL,	//보안속성 상속
			0,				//스택 메모리는 기본크기(1MB)
			ThreadComplete,	//스래드로 실행할 함수이름
			(LPVOID)NULL,	//
			0,				//생성 플래그는 기본값 사용
			&dwThreadID);	//생성된 스레드ID가 저장될 변수주소

		::CloseHandle(hThread);
	}

	//서버 리슨 소켓 생성
	g_hSocket = ::WSASocket(AF_INET, SOCK_STREAM, IPPROTO_TCP,
						NULL, 0, WSA_FLAG_OVERLAPPED);

	//bind()/listen()
	SOCKADDR_IN addrsvr;
	addrsvr.sin_family = AF_INET;
	addrsvr.sin_addr.S_un.S_addr = ::htonl(INADDR_ANY);
	addrsvr.sin_port = ::htons(25000);

	if (::bind(g_hSocket,
			(SOCKADDR*)&addrsvr, sizeof(SOCKADDR_IN)) == SOCKET_ERROR)
	{
		puts("ERROR: 포트가 이미 사용중입니다.");
		ReleaseServer();
		return 0;
	}

	if (::listen(g_hSocket, SOMAXCONN) == SOCKET_ERROR)
	{
		puts("ERROR:  리슨 상태로 전환할 수 없습니다.");
		ReleaseServer();
		return 0;
	}

	//반복해서 클라이언트의 연결을 accept() 한다.
	hThread = ::CreateThread(NULL, 0, ThreadAcceptLoop,
					(LPVOID)NULL, 0, &dwThreadID);
	::CloseHandle(hThread);

	//_tmain() 함수가 반환하지 않도록 대기한다.
	puts("*** 채팅서버를 시작합니다! ***");
	while (1)
		getchar();

	return 0;
}
~~~

###### [IOCP모델](#iocp모델)
###### [Top](#top)

<br/>
<br/>

***

# UDP
  - 연결, 상태 개념이 없음
  - 흐름제어, 송/수신 보장 혹은 확인에 관한 기능 없음
  - 개발자 스스로 TCP 구현가능
  - TCP와 코드작성시 다른것
    - socket생성시 SOCK_DGRAM, IPPROTO_UDP을 넣는것
    - recvfrom이 TCP의 accept와 비슷하다
    - sendto에서는 데이터를 보낼때, 매번 상대방의 아이피,포트 정보를 같이 이용해서 보내야 한다

<br/>

#stdafx.cpp
~~~c++
// stdafx.cpp : 표준 포함 파일만 들어 있는 소스 파일입니다.
// UdpSample.pch는 미리 컴파일된 헤더가 됩니다.
// stdafx.obj에는 미리 컴파일된 형식 정보가 포함됩니다.

#include "stdafx.h"

// TODO: 필요한 추가 헤더는
// 이 파일이 아닌 STDAFX.H에서 참조합니다.
~~~

<br/>

#stdafx.h
~~~c++
// stdafx.h : 자주 사용하지만 자주 변경되지는 않는
// 표준 시스템 포함 파일 및 프로젝트 관련 포함 파일이
// 들어 있는 포함 파일입니다.
//

#pragma once

#include "targetver.h"

#include <stdio.h>
#include <tchar.h>



// TODO: 프로그램에 필요한 추가 헤더는 여기에서 참조합니다.
~~~

<br/>

#targetver.h
~~~c++
#pragma once

// SDKDDKVer.h를 포함하면 최고 수준의 가용성을 가진 Windows 플랫폼이 정의됩니다.

// 이전 Windows 플랫폼에 대해 응용 프로그램을 빌드하려는 경우에는 SDKDDKVer.h를 포함하기 전에
// WinSDKVer.h를 포함하고 _WIN32_WINNT 매크로를 지원하려는 플랫폼으로 설정하십시오.

#include <SDKDDKVer.h>
~~~

<br/>

#UdpSample.cpp
~~~c++
// UdpSample.cpp : 콘솔 응용 프로그램에 대한 진입점을 정의합니다.
//

#include "stdafx.h"
#include <winsock2.h>
#pragma comment(lib, "ws2_32")


char g_szRemoteAddress[32];
int g_nRemotePort;
int g_nLocalPort;

void ErrorHandler(const char *pszMessage)
{
	printf("ERROR: %s\n", pszMessage);
	::WSACleanup();
	exit(1);
}

//원격지로 메시지를 전송하는 스레드 함수.
DWORD WINAPI ThreadSendto(LPVOID pParam)
{
	//송신을 위한 UDP 소켓을 하나 더 개방한다.
	SOCKET hSocket = ::socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP);
	if (hSocket == INVALID_SOCKET)
		ErrorHandler("UDP 소켓을 생성할 수 없습니다.");

	char szBuffer[128];
	SOCKADDR_IN	remoteaddr = { 0 };
	remoteaddr.sin_family = AF_INET;
	remoteaddr.sin_port = htons(g_nRemotePort);
	remoteaddr.sin_addr.S_un.S_addr = inet_addr(g_szRemoteAddress);
	while (1)
	{
		gets_s(szBuffer);
		if (strcmp(szBuffer, "EXIT") == 0)
			break;

		//사용자가 입력한 메시지를 원격지로 전송한다.
		::sendto(hSocket, szBuffer, strlen(szBuffer) + 1, 0,
			(sockaddr*)&remoteaddr, sizeof(remoteaddr));
	}

	//수신을 위한 UDP 소켓을 닫는다. _tmain() 함수의 while문이 끝난다.
	::closesocket((SOCKET)pParam);
	::closesocket(hSocket);
	return 0;
}

int _tmain(int argc, _TCHAR* argv[])
{
	//윈속 초기화
	WSADATA wsa = { 0 };
	if (::WSAStartup(MAKEWORD(2, 2), &wsa) != 0)
		ErrorHandler("윈속을 초기화 할 수 없습니다.");

	//소켓 생성. SOCK_DGRAM 타입을 사용한다!
	SOCKET hSocket = ::socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP);
	if (hSocket == INVALID_SOCKET)
		ErrorHandler("UDP 소켓을 생성할 수 없습니다.");

	//주소와 포트번호를 입력 받는다.
	printf("원격지 IP주소를 입력하세요.: ");
	gets_s(g_szRemoteAddress);
	fflush(stdin);
	printf("원격지 포트번호를 입력하세요.: ");
	scanf_s("%d", &g_nRemotePort);
	fflush(stdin);
	printf("로컬 포트번호를 입력하세요.: ");
	scanf_s("%d", &g_nLocalPort);

	//포트 바인딩
	SOCKADDR_IN	addr = { 0 };
	addr.sin_family = AF_INET;
	addr.sin_port = htons(g_nLocalPort);
	addr.sin_addr.S_un.S_addr = htonl(INADDR_ANY);
	if (::bind(hSocket, (SOCKADDR*)&addr, sizeof(addr)) == SOCKET_ERROR)
		ErrorHandler("소켓에 IP주소와 포트를 바인드 할 수 없습니다.");

	//메시지 송신 스레드 생성.
	DWORD dwThreadID = 0;
	HANDLE hThread = ::CreateThread(NULL,
		0,					//스택 메모리는 기본크기(1MB)
		ThreadSendto,		//스래드로 실행할 함수이름
		(LPVOID)hSocket,
		0,					//생성 플래그는 기본값 사용
		&dwThreadID);		//생성된 스레드ID가 저장될 변수주소
	::CloseHandle(hThread);

	//메시지 수신 및 출력.
	char szBuffer[128];
	SOCKADDR_IN	remoteaddr;
	int nLenSock = sizeof(remoteaddr), nResult;
	while ((nResult = ::recvfrom(hSocket, szBuffer, sizeof(szBuffer), 0,
		(sockaddr*)&remoteaddr, &nLenSock)) > 0)
	{
		printf("-> %s\n", szBuffer);
		memset(szBuffer, 0, sizeof(szBuffer));
	}

	puts("UDP 통신 종료.");
	::closesocket(hSocket);
	::WSACleanup();
	return 0;
}
~~~

###### [UDP](#udp)
###### [Top](#top)

<br/>
<br/>

***

# 브로드캐스트(broadcast)
  - TCP는 없고, UDP에 브로드 캐스트가 존재한다
  - 브로드 캐스트 ip로 데이터를 보내면, 내가 있는 공유기안에 있는 ip에게 전부다 보내준다

<br/>

  - 브로드캐스트 발신  
#BroadcastReceiver.cpp
~~~c++
// BroadcastReceiver.cpp : 콘솔 응용 프로그램에 대한 진입점을 정의합니다.
//

#include "stdafx.h"
#include <winsock2.h>
#pragma comment(lib, "ws2_32")


void ErrorHandler(const char *pszMessage)
{
	printf("ERROR: %s\n", pszMessage);
	::WSACleanup();
	exit(1);
}

int _tmain(int argc, _TCHAR* argv[])
{
	//윈속 초기화
	WSADATA wsa = { 0 };
	if (::WSAStartup(MAKEWORD(2, 2), &wsa) != 0)
		ErrorHandler("윈속을 초기화 할 수 없습니다.");

	//소켓 생성
	SOCKET hSocket = ::socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP);
	if (hSocket == INVALID_SOCKET)
		ErrorHandler("UDP 소켓을 생성할 수 없습니다.");

	//포트 바인딩
	SOCKADDR_IN	addr = { 0 };
	addr.sin_family = AF_INET;
	addr.sin_port = htons(25000);
	addr.sin_addr.S_un.S_addr = htonl(INADDR_ANY);
	if (::bind(hSocket, (SOCKADDR*)&addr, sizeof(addr)) == SOCKET_ERROR)
	{
		puts("ERROR: 소켓에 IP주소와 포트를 바인드 할 수 없습니다.");
		return 0;
	}

	//메시지를 수신하고 화면에 출력한다.
	char szBuffer[128] = { 0 };
	while (::recvfrom(hSocket,
				szBuffer, sizeof(szBuffer), 0, NULL, 0) >= 0)
	{
		printf(":%s\n", szBuffer);
		memset(szBuffer, 0, sizeof(szBuffer));
	}

	::closesocket(hSocket);
	::WSACleanup();
	return 0;
}
~~~

<br/>

#stdafx.cpp
~~~c++
// stdafx.cpp : 표준 포함 파일만 들어 있는 소스 파일입니다.
// BroadcastReceiver.pch는 미리 컴파일된 헤더가 됩니다.
// stdafx.obj에는 미리 컴파일된 형식 정보가 포함됩니다.

#include "stdafx.h"

// TODO: 필요한 추가 헤더는
// 이 파일이 아닌 STDAFX.H에서 참조합니다.
~~~

<br/>

#stdafx.h
~~~c++
// stdafx.h : 자주 사용하지만 자주 변경되지는 않는
// 표준 시스템 포함 파일 및 프로젝트 관련 포함 파일이
// 들어 있는 포함 파일입니다.
//

#pragma once

#include "targetver.h"

#include <stdio.h>
#include <tchar.h>



// TODO: 프로그램에 필요한 추가 헤더는 여기에서 참조합니다.
~~~

<br/>

#targetver.h
~~~c++
#pragma once

// SDKDDKVer.h를 포함하면 최고 수준의 가용성을 가진 Windows 플랫폼이 정의됩니다.

// 이전 Windows 플랫폼에 대해 응용 프로그램을 빌드하려는 경우에는 SDKDDKVer.h를 포함하기 전에
// WinSDKVer.h를 포함하고 _WIN32_WINNT 매크로를 지원하려는 플랫폼으로 설정하십시오.

#include <SDKDDKVer.h>
~~~

<br/>

  - 브로드캐스트 수신

#BroadcastSender.cpp
~~~c++
// BroadcastSender.cpp : 콘솔 응용 프로그램에 대한 진입점을 정의합니다.
//

#include "stdafx.h"
#include <winsock2.h>
#pragma comment(lib, "ws2_32")


void ErrorHandler(const char *pszMessage)
{
	printf("ERROR: %s\n", pszMessage);
	::WSACleanup();
	exit(1);
}

int _tmain(int argc, _TCHAR* argv[])
{
	//윈속 초기화
	WSADATA wsa = { 0 };
	if (::WSAStartup(MAKEWORD(2, 2), &wsa) != 0)
		ErrorHandler("윈속을 초기화 할 수 없습니다.");

	//소켓 생성
	SOCKET hSocket = ::socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP);
	if (hSocket == INVALID_SOCKET)
		ErrorHandler("UDP 소켓을 생성할 수 없습니다.");

	//포트 바인딩
	SOCKADDR_IN	addr = { 0 };
	addr.sin_family = AF_INET;
	addr.sin_port = htons(25000);
	addr.sin_addr.S_un.S_addr = htonl(INADDR_BROADCAST);
	// INADDR_BROADCAST 을 사용하면 알아서 브로드 캐스트 주소로 변환해준다.

	//방송주소로 전송하기 위해 소켓 옵션을 변경한다.
	int nOption = 1;
	::setsockopt(hSocket,
		SOL_SOCKET,
		SO_BROADCAST,			//방송주소로 설정한다.
		(const char*)&nOption,
		sizeof(nOption));

	char szBuffer[128] = { 0 };
	while (1)
	{
		//사용자로부터 문자열을 입력 받는다.
		putchar('>');
		gets_s(szBuffer);
		if (strcmp(szBuffer, "EXIT") == 0)		break;

		//방송주소로 메시지를 전송한다.
		//따라서 모든 Peer들이 동시에 메시지를 수신한다.
		::sendto(hSocket, szBuffer, sizeof(szBuffer), 0,
			(const SOCKADDR*)&addr, sizeof(addr));
	}

	::closesocket(hSocket);
	::WSACleanup();
	return 0;
}
~~~

<br/>

#stdafx.cpp
~~~c++
// stdafx.cpp : 표준 포함 파일만 들어 있는 소스 파일입니다.
// BroadcastSender.pch는 미리 컴파일된 헤더가 됩니다.
// stdafx.obj에는 미리 컴파일된 형식 정보가 포함됩니다.

#include "stdafx.h"

// TODO: 필요한 추가 헤더는
// 이 파일이 아닌 STDAFX.H에서 참조합니다.
~~~

<br/>

#stdafx.h
~~~c++
// stdafx.h : 자주 사용하지만 자주 변경되지는 않는
// 표준 시스템 포함 파일 및 프로젝트 관련 포함 파일이
// 들어 있는 포함 파일입니다.
//

#pragma once

#include "targetver.h"

#include <stdio.h>
#include <tchar.h>



// TODO: 프로그램에 필요한 추가 헤더는 여기에서 참조합니다.
~~~

<br/>

#targetver.h
~~~c++
#pragma once

// SDKDDKVer.h를 포함하면 최고 수준의 가용성을 가진 Windows 플랫폼이 정의됩니다.

// 이전 Windows 플랫폼에 대해 응용 프로그램을 빌드하려는 경우에는 SDKDDKVer.h를 포함하기 전에
// WinSDKVer.h를 포함하고 _WIN32_WINNT 매크로를 지원하려는 플랫폼으로 설정하십시오.

#include <SDKDDKVer.h>
~~~

###### [브로드캐스트(broadcast)](#브로드캐스트broadcast)
###### [Top](#top)

<br/>
<br/>

***

# 공유메모리기법
  - 1.Client실행
  - 2.Server가 데이터 보내주기를 기다림
  - 3.Server가 데이터 씀, 썼다고 알림
  - 4.Client가 데이터 읽은후, 읽었다고 알림

<br/>

#ConsoleApp.cpp
#Server(서버)
~~~c++
#include <iostream>
#include <tchar.h>
#include <Windows.h>
#include <TlHelp32.h>

int main()
{
	OutputDebugString(L"Server - begin\n");

	// 1. 파일 매핑 객체 생성
	HANDLE hMap = CreateFileMapping(
		INVALID_HANDLE_VALUE,	// 파일 핸들
		NULL,					// 보안 속성
		PAGE_READWRITE,			// 파일 매핑 속성
		0,						// 파일 크기 (상위 32비트)
		128,					// 파일 크기 (하위 32비트)
		L"IPC_TEST_SHARED_MEMORY");	// 파일 매핑 이름
	if (GetLastError() == ERROR_ALREADY_EXISTS)
	{
		// 파일 매핑 객체가 이미 존재하는 경우
		hMap = OpenFileMapping(
			FILE_MAP_ALL_ACCESS,	// 파일 매핑 접근 권한
			FALSE,					// 상속 가능 여부
			L"IPC_TEST_SHARED_MEMORY");	// 파일 매핑 이름
	}

	// 2. 매핑 객체에 대한 접근 포인터를 얻음(메모리 추상화)
	TCHAR* pSharedMemory = (TCHAR*)MapViewOfFile(
		hMap,					// 파일 매핑 객체 핸들
		FILE_MAP_ALL_ACCESS,	// 파일 매핑 접근 권한
		0,						// 파일 오프셋 (상위 32비트)
		0,						// 파일 오프셋 (하위 32비트)
		128);					// 파일 매핑 크기
	if (pSharedMemory == NULL)
	{
		_tprintf(_T("Server - Failed to get shared memory. (%d)\n"), GetLastError());
		::CloseHandle(hMap);
		return 0;
	}

	// 3. 이벤트	객체 생성
	HANDLE hEvent = ::CreateEvent(
		NULL, TRUE, FALSE, L"IPC_SHAREDMEM_ACCESS");
	if (::GetLastError() == ERROR_ALREADY_EXISTS)
	{
		// 이벤트 객체가 이미 존재하는 경우
		hEvent = ::OpenEvent(
			EVENT_ALL_ACCESS,	// 이벤트 접근 권한
			FALSE,				// 상속 가능 여부
			L"IPC_SHAREDMEM_ACCESS");	// 이벤트 이름
		if (hEvent == NULL)
		{
			_tprintf(_T("Server - Failed to open event. (%d)\n"), GetLastError());
		}
	}

	HANDLE hEvtComplete = ::CreateEvent(
		NULL, TRUE, FALSE, L"IPC_SHAREDMEM_RECV_COMPLETE");
	if (::GetLastError() == ERROR_ALREADY_EXISTS)
	{
		// 이벤트 객체가 이미 존재하는 경우
		hEvtComplete = ::OpenEvent(
			EVENT_ALL_ACCESS,	// 이벤트 접근 권한
			FALSE,				// 상속 가능 여부
			L"IPC_SHAREDMEM_RECV_COMPLETE");	// 이벤트 이름
		if (hEvent == NULL)
		{
			_tprintf(_T("Server - Failed to open event obj. (%d)\n"), GetLastError());
		}
	}

	// 4,프로세스 동기화를 위한 뮤텍스 생성
	HANDLE hMutex = ::CreateMutex(
		NULL, FALSE, L"IPC_SHAREDMEM_MUTEX");
	if (::GetLastError() == ERROR_ALREADY_EXISTS)
	{
		// 뮤텍스 객체가 이미 존재하는 경우
		hMutex = ::OpenMutex(
			MUTEX_ALL_ACCESS,	// 뮤텍스 접근 권한
			FALSE,				// 상속 가능 여부
			L"IPC_SHAREDMEM_MUTEX");	// 뮤텍스 이름
		if (hMutex == NULL)
		{
			_tprintf(_T("Server - Failed to open mutex obj. (%d)\n"), GetLastError());
		}
	}

	// 5. 공유 메모리 읽기/쓰기 이벤트 대기
	OutputDebugString(L"Server - Server Data Write Start\n");

	// 6. 뮤텍스를 이용한 프로세스 동기화 (메모리 접근)
	if (::WaitForSingleObject(hMutex, INFINITE) != WAIT_OBJECT_0)
		OutputDebugString(L"Server - MUTEX error\n");
	else
		OutputDebugString(L"Server - MUTEX Lock\n"); // 임계구간(아래)

	// 쓰기(Server)
	{
		// 7. 공유 메모리에 데이터 쓰기
		wsprintfW(pSharedMemory, _T("%s"), _T("Server - Hello, Client! I'm Servers."));
	}

	::ReleaseMutex(hMutex);
	OutputDebugString(L"Server - MUTEX UnLock\n"); // 임계구간(위)


	// 8. 메모리 쓰기 완료 이벤트 세트
	::SetEvent(hEvent);
	OutputDebugString(L"Server - Completion event for Client!\n");

	if (::WaitForSingleObject(hEvtComplete, INFINITE) == WAIT_OBJECT_0)
	{
		OutputDebugString(L"Server - Completion event for Client!\n");
	}

	::UnmapViewOfFile(pSharedMemory);
	::CloseHandle(hMap);
	::CloseHandle(hEvent);
	::CloseHandle(hEvtComplete);
	::CloseHandle(hMutex);

	return 0;
}
~~~

<br/>

#ConsoleApp.cpp
#Client(클라이언트)
~~~c++
#include <iostream>
#include <tchar.h>
#include <Windows.h>
#include <TlHelp32.h>

int main()
{
	OutputDebugString(L"Client - begin\n");

	// 1. 파일 매핑 객체 생성
	HANDLE hMap = CreateFileMapping(
		INVALID_HANDLE_VALUE,	// 파일 핸들
		NULL,					// 보안 속성
		PAGE_READWRITE,			// 파일 매핑 속성
		0,						// 파일 크기 (상위 32비트)
		128,					// 파일 크기 (하위 32비트)
		L"IPC_TEST_SHARED_MEMORY");	// 파일 매핑 이름
	if (GetLastError() == ERROR_ALREADY_EXISTS)
	{
		// 파일 매핑 객체가 이미 존재하는 경우
		hMap = OpenFileMapping(
			FILE_MAP_ALL_ACCESS,	// 파일 매핑 접근 권한
			FALSE,					// 상속 가능 여부
			L"IPC_TEST_SHARED_MEMORY");	// 파일 매핑 이름
	}

	// 2. 매핑 객체에 대한 접근 포인터를 얻음(메모리 추상화)
	TCHAR* pSharedMemory = (TCHAR*)MapViewOfFile(
		hMap,					// 파일 매핑 객체 핸들
		FILE_MAP_ALL_ACCESS,	// 파일 매핑 접근 권한
		0,						// 파일 오프셋 (상위 32비트)
		0,						// 파일 오프셋 (하위 32비트)
		128);					// 파일 매핑 크기
	if (pSharedMemory == NULL)
	{
		_tprintf(_T("Client - Failed to get shared memory. (%d)\n"), GetLastError());
		::CloseHandle(hMap);
		return 0;
	}

	// 3. 이벤트	객체 생성
	HANDLE hEvent = ::CreateEvent(
		NULL, TRUE, FALSE, L"IPC_SHAREDMEM_ACCESS");
	if (::GetLastError() == ERROR_ALREADY_EXISTS)
	{
		// 이벤트 객체가 이미 존재하는 경우
		hEvent = ::OpenEvent(
			EVENT_ALL_ACCESS,	// 이벤트 접근 권한
			FALSE,				// 상속 가능 여부
			L"IPC_SHAREDMEM_ACCESS");	// 이벤트 이름
		if (hEvent == NULL)
		{
			_tprintf(_T("Client - Failed to open event. (%d)\n"), GetLastError());
		}
	}

	HANDLE hEvtComplete = ::CreateEvent(
		NULL, TRUE, FALSE, L"IPC_SHAREDMEM_RECV_COMPLETE");
	if (::GetLastError() == ERROR_ALREADY_EXISTS)
	{
		// 이벤트 객체가 이미 존재하는 경우
		hEvtComplete = ::OpenEvent(
			EVENT_ALL_ACCESS,	// 이벤트 접근 권한
			FALSE,				// 상속 가능 여부
			L"IPC_SHAREDMEM_RECV_COMPLETE");	// 이벤트 이름
		if (hEvent == NULL)
		{
			_tprintf(_T("Client - Failed to open event obj. (%d)\n"), GetLastError());
		}
	}

	// 4,프로세스 동기화를 위한 뮤텍스 생성
	HANDLE hMutex = ::CreateMutex(
		NULL, FALSE, L"IPC_SHAREDMEM_MUTEX");
	if (::GetLastError() == ERROR_ALREADY_EXISTS)
	{
		// 뮤텍스 객체가 이미 존재하는 경우
		hMutex = ::OpenMutex(
			MUTEX_ALL_ACCESS,	// 뮤텍스 접근 권한
			FALSE,				// 상속 가능 여부
			L"IPC_SHAREDMEM_MUTEX");	// 뮤텍스 이름
		if (hMutex == NULL)
		{
			_tprintf(_T("Client - Failed to open mutex obj. (%d)\n"), GetLastError());
		}
	}

	// 5. 공유 메모리 읽기/쓰기 이벤트 대기
	OutputDebugString(L"Client - Waiting message from server...\n");
	if (::WaitForSingleObject(hEvent, INFINITE) == WAIT_OBJECT_0)
	{
		// 6. 뮤텍스를 이용한 프로세스 동기화 (메모리 접근)
		if (::WaitForSingleObject(hMutex, INFINITE) != WAIT_OBJECT_0)
			OutputDebugString(L"Client - MUTEX error\n");
		else
			OutputDebugString(L"Client - MUTEX Lock\n"); // 임계구간(아래)

		// 읽기(Client)
		{
			// 7. 공유 메모리에 데이터 읽기
			OutputDebugString(pSharedMemory);
		}
		
		::ReleaseMutex(hMutex);
		OutputDebugString(L"Client - MUTEX UnLock\n"); // 임계구간(위)


		// 8. 메모리 읽기 완료 이벤트 세트
		::SetEvent(hEvtComplete);
		OutputDebugString(L"Client - Completion event for server!\n");
	}

	::UnmapViewOfFile(pSharedMemory);
	::CloseHandle(hMap);
	::CloseHandle(hEvent);
	::CloseHandle(hEvtComplete);
	::CloseHandle(hMutex);

	return 0;
}
~~~

###### [공유메모리기법](#공유메모리기법)
###### [Top](#top)

<br/>
<br/>

***

# 기능별 정리
  - 기능별로 정리해 놓은 목록

    - [캡쳐하기](#캡쳐하기)
    - [동적으로 폰트 크기 맞추기](#동적으로-폰트-크기-맞추기)
    - [멀티바이트 CString자료형에 한글확인 코드 와 짜르기](#멀티바이트-cstring자료형에-한글확인-코드-와-짜르기)
    - [Bitmap을 활용한 png 컬러 변경](#bitmap을-활용한-png-컬러-변경)
    - [원하는 캡션가진 윈도우 잡기](#원하는-캡션가진-윈도우-잡기)

###### [기능별 정리](#기능별-정리)
###### [Top](#top)

<br/>
<br/>

# 캡쳐하기
  - 윈도우 화면을 캡쳐해서, 클라이언트에 보여주기

<br/>

#AppDlg.h
~~~c++
public:
	HDC mh_mem_dc;
	CRect m_target_rect;
	HBITMAP mh_mem_bitmap;
~~~

<br/>

#AppDlg.cpp
~~~c++
BOOL CMFCApplication5Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	GetDlgItem(IDC_DISPLAY_RECT)->GetWindowRect(m_target_rect); // 다이얼로그에 있는 사진을 출력할 공간의 좌표를 얻기 위함
	ScreenToClient(m_target_rect); // 얻은 좌표를 윈도우 클라이언트 좌표로 변경

	HDC h_dc = ::GetDC(m_hWnd); // DC와 bitmap에 정보를 제공해 주기 위해 생성
	mh_mem_dc = ::CreateCompatibleDC(h_dc);
	mh_mem_bitmap = ::CreateCompatibleBitmap(h_dc, m_target_rect.Width(), m_target_rect.Height());
	::SelectObject(mh_mem_dc, mh_mem_bitmap); // 메모리 DC에, 만들어놓은 bitmap을 적용
	::ReleaseDC(m_hWnd, h_dc);

	return TRUE;
}

. . .

void CMFCApplication5Dlg::OnBnClickedButton1()
{
	HDC h_dc = ::GetWindowDC(NULL); // 캡쳐하기 위해 화면 영역을 사용할 수 있는 DC를 얻기
	::BitBlt(mh_mem_dc, 0, 0, m_target_rect.Width(), m_target_rect.Height(), h_dc, 100, 100, SRCCOPY); // 메모리 DC에 현재 캡쳐해 놓은 DC의 bitmap을 복사해 넣기
	::ReleaseDC(NULL, h_dc);

	 CClientDC dc(this); // 클라이언트에 출력하기 위해 사용
	 ::BitBlt(dc.m_hDC, m_target_rect.left, m_target_rect.top,
		 m_target_rect.Width(), m_target_rect.Height(), mh_mem_dc, 0, 0, SRCCOPY);
}
~~~

![20220923_235233](https://user-images.githubusercontent.com/39178978/191989588-11f3ee5c-6a05-4c1f-8868-06608c3606e1.png)

###### [기능별 정리](#기능별-정리)
###### [Top](#top)

<br/>
<br/>

# 동적으로 폰트 크기 맞추기
  - Width, Height중에 짧은 길이를 기준으로 폰트크기가 커졌다 작아졌다함
  - CFont 구조체
  - 사용할 폰트
  - 적용시킬 컨트롤
  - 적용시킬 폰트 크기(움수도 가능)

<br/>

#AppDlg.cpp
~~~c++
void MakeFont(CFont* cfont_text, CString font, CWnd* pCtl, int size)
{
	LOGFONT lf = {0,};

	CRect r;
	int addSize = 0;

	pCtl->GetWindowRect(&r);
	pCtl->ScreenToClient(&r);

	if (r.Width() < r.Height())
	{
		addSize = r.Width() / 5;
	}
	else
	{
		addSize = r.Height() / 5;
	}

	lf.lfHeight = size + addSize;

	lstrcpy(lf.lfFaceName, font);
	cfont_text->CreateFontIndirect(&lf);
	pCtl->SetFont(cfont_text);
}
~~~

###### [기능별 정리](#기능별-정리)
###### [Top](#top)

<br/>
<br/>

# 멀티바이트 CString자료형에 한글확인 코드 와 짜르기

  - 멀티바이트 환경에서는 한글은 2바이트로 표현되기 때문에, 1바이트인 글자와 구별해 내는 것이 복잡한데, 1바이트씩 확인하면서 그것이 한글에 해당하는 바이트 인지 아닌지 알 수 있는 코드이다

#AppDlg.cpp
~~~c++
CString cs = _T("가가4사사");

int cnt = 0;
for (cnt = 0; cnt < cs.GetLength(); cnt++)
{
	if ((cs.GetAt(cnt) & 0x80) == 0x80) // 한글인지 아닌지 확인함, 이것을 1바이트씩 돌면서 확인하게 됨
	{
		
	}
}
~~~

  - 위와 같은 환경에서, CString 자료형안에 있는 스트링을 쉽게 잘라 낼수 있는 함수이다

#AppDlg.cpp
~~~c++
//cstring의 left함수처럼 왼쪽부터 세서, 한글과 다른 언어를 분리해서 짤라주는 함수
char* CKioskOrderHisryDetail::CstringLeft(char* sz, int len)
{
	int i = 0;

	if ( strlen(sz) <= len ) return sz;

	for (i=0; i<len; i++)
	{
		if ( IsHangle(sz[i]) )    
		{
			if ( len-1 < i+1 ) break;
			else  i++;
		}
	}

	sz[i] = 0;

	return sz;
};
~~~

###### [기능별 정리](#기능별-정리)
###### [Top](#top)

<br/>
<br/>

# Bitmap을 활용한 png 컬러 변경
  - MFC프로젝트를 만들면 최상단에 디버그 모드 일때는 new생성자를 사용할 수 없도록 세팅 되어 있으니 확인하기..이것 때문에 1시간을 소모함..

~~~c++
#ifdef _DEBUG
#define new DEBUG_NEW
#endif
~~~

<br/>

#AppDlg.cpp
~~~c++
#include <gdiplus.h> // GDI+를 사용하기 위한 헤더 파일
#pragma comment(lib, "gdiplus") // GDI+를 사용하기 위한 라이브러리 파일
using namespace Gdiplus; // GDI+는 클래스 개념과 네임스페이스 개념을 사용하기 때문에, 편하게 쓰기 위함

public:
	void SetImageColorChange(CString csFileNameOutPut, int inRorignal, int inGorignal, int inBorignal, int inRchange, int inGchange, int inBchange);

	ULONG_PTR m_gpToken;
	GdiplusStartupInput m_gpsi; // GDI+의 처리 방식에 추가적인 옵션을 설정하는 변수
	afx_msg void OnDestroy();
~~~

#AppDlg.cpp
~~~c++
BOOL CMFCApplication1Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();


	if (GdiplusStartup(&m_gpToken, &m_gpsi, NULL) != Ok)
	{
		AfxMessageBox(_T("GDI+ 사용 실패"));
	}

	CString csDir = _T("");
	csDir.Format(_T("%s"), _T("C:\\AstemsKiosks\\Img\\Kiosk_test1.png"));
	SetImageColorChange(csDir, 0, 255, 0, 125, 125, 125);

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}

...

void CMFCApplication1Dlg::SetImageColorChange(CString csFileNameOutPut, int inRorignal, int inGorignal, int inBorignal, int inRchange, int inGchange, int inBchange)
{
	/////////////////
	USES_CONVERSION;
	WCHAR* wszFileNameOutPut = T2W(csFileNameOutPut.GetBuffer());
	Gdiplus::Bitmap* bitmap = new Gdiplus::Bitmap(wszFileNameOutPut);

	Status loadStatus = bitmap->GetLastStatus();
	if (loadStatus != Ok)
	{
		AfxMessageBox(_T("변환할 이미지를 로드하지 못했습니다"));
	}

	COLORREF PixColor = 0;
	Color color;

	int inWidth = bitmap->GetWidth();
	int inHeigh = bitmap->GetHeight();
	int R = 0, G = 0, B = 0, A = 0;

	for (int i = 0; i < inWidth; i++)
		for (int j = 0; j < inHeigh; j++)
		{
			bitmap->GetPixel(i, j, &color);
			A = color.GetA();
			R = color.GetR();
			G = color.GetG();
			B = color.GetB();

			if (R == inRorignal && G == inGorignal && B == inBorignal)
			{
				R = inRchange;
				G = inGchange;
				B = inBchange;
				A = 255;
			}
			else
			{
				A = 0;
			}

			color = RGB(R, G, B) | ((DWORD)A << 24);

			bitmap->SetPixel(i, j, color);
		}

	CLSID pngClsid;
	CLSIDFromString(L"{557CF406-1A04-11D3-9A73-0000F81EF32E}", &pngClsid);

	CString csDir = _T("");
	csDir.Format(_T("%s"), _T("C:\\AstemsKiosks\\Img\\99999999.png"));
	WCHAR* tempOutPut = T2W(csDir.GetBuffer());
	bitmap->Save(tempOutPut, &pngClsid, NULL);
	delete bitmap;

	if (!DeleteFile(csFileNameOutPut))
	{
		AfxMessageBox(_T("사진 삭제에 실패하였습니다"));
	}

	

#ifdef _UNICODE
	if (MoveFile(tempOutPut, wszFileNameOutPut) == FALSE) {
		AfxMessageBox(_T("이미지 파일 이름을 변경하지 못했습니다"));
	}

#else
	// 임시 파일을 원본 파일 이름으로 변경
	CW2A sztempOutPut(tempOutPut, CP_ACP);
	CW2A szfilePathOutPut(wszFileNameOutPut, CP_ACP);

	if (MoveFile(sztempOutPut, szfilePathOutPut) == FALSE) {
		AfxMessageBox(_T("이미지 파일 이름을 변경하지 못했습니다"));
	}
#endif
	
}

...

void CMFCApplication1Dlg::OnDestroy()
{
	CDialogEx::OnDestroy();

	::GdiplusShutdown(m_gpToken);
}
~~~

###### [기능별 정리](#기능별-정리)
###### [Top](#top)

<br/>
<br/>

# 원하는 캡션가진 윈도우 잡기

#AppDlg.cpp
~~~c++
	CStringArray strarray;
	strarray.InsertAt(0,_T("CKioskAuth"));
	strarray.InsertAt(0,_T("CKioskCustList"));


	CString strall = _T("");

	for(int i = 0; i < strarray.GetCount(); i++)
	{
		HWND h_wnd = NULL, h_edit_wnd = NULL;
		while(h_wnd = ::FindWindowEx(NULL, h_wnd, _T("#32770"), strarray.GetAt(i))) // 윈도우 클래스 이름이 #32770인 것을 다 찾음
		{
			if (h_wnd != NULL)
			{
				TCHAR buffer[255];
				::GetWindowText(h_wnd, buffer, 255);
				CString str = _T("");
				str.Format(_T("\n%s"), buffer);

				strall = strall + str;
			}
		}
	}

	if (strall != "")
	{
		AfxMessageBox(strall);
	}
~~~


###### [기능별 정리](#기능별-정리)
###### [Top](#top)

<br/>
<br/>

***

# GDI
  - [CDC, CPaintDC, CClientDC, CWindowDC (화면출력)](#cdc-cpaintdc-cclientdc-cwindowdc-화면출력)
  - [장치 DC, 메모리 DC (깜박임 없애기)](#장치-dc-메모리-dc-깜박임-없애기)
  - [GDI,GDI+,Direct2D](#gdigdidirect2d)

###### [GDI](#gdi)
###### [Top](#top)

<br/>
<br/>

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

###### [GDI](#gdi)
###### [Top](#top)

<br/>
<br/>

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

###### [GDI](#gdi)
###### [Top](#top)

<br/>
<br/>

# GDI,GDI+,Direct2D
  - GDI/GDI+
    - CPU렌더링을 한다, 따라서, 좋은 그래픽 카드를 가지고 있어도 출력이 같다
    - 안좋은 그래픽 카드를 가지고 있어도 그래픽 작업이 가능하다
    - CPU가 렌더링하고 그것을 RAM이 비트맵을기억한다
    - GDI+ 는 그래픽 장치에 접근 하진 않지만, 그래픽 장치의 드라이버와 연동해서 그래픽 장치가 제공하는 좀 더 향상된 그리기 기능을 수행한다
    - GDI+ 는 GDI보다 품질이 뛰어나지만 그래픽 장치의 가속 효과나 다양한 기능을 사용하기는 어렵다
    - GDI+ 를 사용해서 만든 응용 프로그램의 경우 원격 접속을 하여 해당 프로그램을 사용 할때 일부 기능이 GDI와 동일하게 출력 될 수 있다.
  - DirectX시리즈(Windows7 과 같이 공개됨)
    - Direct2D : 그래픽 카드가 많이 좋아지면서 그래픽 카드의 성능을 이용하기 위해 나온 그래픽 엔진
    - CPU대신 GPU를 사용하여 렌더링한다. RAM대신  VRAM을 사용하여 기억한다
    - Windows7 이상에서만 돌아감
    - DirectX로 렌더링 되는 프로그램은 GDI비트맵을 복사해 올 수 없다, VRAM공간에 GDI가 접근할 수 없기 때문에.

###### [GDI](#gdi)
###### [Top](#top)

<br/>
<br/>

***

# GDI Plus(+)
  - [GDI Plus(+) 초기화하기](#gdi-plus-초기화기)
  - [GDI Plus(+) 더블 버퍼링(With GDI)](#gdi-plus-더블-버퍼링with-gdi)
  - [여러가지 그리기](#여러가지-그리기)
  - [이미지 원하는 모양으로 출력하기](#이미지-원하는-모양으로-출력하기)
  - [PNG A(알파)값 포함 이미지 출력하기](#png-a알파값-포함-이미지-출력하기)

###### [GDI Plus(+)](#gdi-plus)
###### [Top](#top)

<br/>
<br/>

# GDI Plus(+) 초기화하기
  - 가장 먼저 초기화 작업을 진행해 줘야 한다. 가장 편한 사용법은 최상단 메인 윈도우에서 초기화 작업을 해주는 것이다
  - 각 클래스 내에서 사용하기 위해서는 초기화 작업을 각 클래스 별로 진행 하면 된다(중요한것은 클래스 별로 토큰의 이름이 같으면 안된다!)
  - 컴파일 속도 향상을 위해 stdafx.h 파일을 사용하는 경우에는 stdafx.h 파일에 아래와 같은  전처리기 코드가 있는데 이 코드를 주석 처리해야지 오류가 발생하지 않는다

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

# stdafx.h
~~~C++
// #define WIN32_LEAN_AND_MEAN
~~~

<br/>

#App.h
~~~C++
public:
	ULONG_PTR m_gpToken;
	GdiplusStartupInput m_gpsi; // GDI+의 처리 방식에 추가적인 옵션을 설정하는 변수
~~~

<br/>

#App.cpp
~~~C++
BOOL CMFCApplication7App::InitInstance()
{
	CWinApp::InitInstance();

	if (GdiplusStartup(&m_gpToken, &m_gpsi, NULL) != Ok)
	{
		AfxMessageBox(_T("GDI+ 사용 실패"));
	}
}

. . . 

int CMFCApplication7App::ExitInstance()
{
	::GdiplusShutdown(m_gpToken);

	return CWinApp::ExitInstance();
}
~~~

<br/>

#AppDlg.cpp
~~~C++
void CMFCApplication7Dlg::OnPaint()
{
	CPaintDC dc(this); // 그리기를 위한 디바이스 컨텍스트입니다.

	if (IsIconic())
	{
	   . . .
	}
	else
	{
		Graphics p_graphic(dc.GetSafeHdc());
		p_graphic.SetSmoothingMode(SmoothingModeAntiAlias);
		Pen p_pen(Color(255, 255, 0, 0), 3);
		p_graphic.DrawLine(&p_pen, 50, 100, 200, 157);
	}
}
~~~

<br/>

![image](https://user-images.githubusercontent.com/39178978/223144227-66d15f27-35ad-47ff-99d5-2048a2c0d5d9.png)

###### [GDI Plus(+)](#gdi-plus)
###### [Top](#top)

<br/>
<br/>

# GDI Plus(+) 더블 버퍼링(With GDI)
  - GDI+와 GDI를 혼용해서 사용하는것이 괜찮은건지 정확하게는 알지 못하지만, 아래 코드는 혼용해서 쓸 경우에 코드를 작성해 봤다
  - GDI+로만 더블 버퍼링을 하는 과정은 다른 분들이 작성해 놓은것을 참고하

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#AppDlg.h
~~~C++
#include <gdiplus.h> // GDI+를 사용하기 위한 헤더 파일
#pragma comment(lib, "gdiplus") // GDI+를 사용하기 위한 라이브러리 파일
using namespace Gdiplus; // GDI+는 클래스 개념과 네임스페이스 개념을 사용하기 때문에, 편하게 쓰기 위함


public:
	ULONG_PTR m_gpToken;
	GdiplusStartupInput m_gpsi; // GDI+의 처리 방식에 추가적인 옵션을 설정하는 변수
	Graphics* p_graphic;
	CDC mem_dc; // 장치 dc와 바꿔 채기할 dc
	CBitmap mem_bmp; // 메모리dc의 비트맵을 바꿔채기할 비트맵
	CRect m_rClientrect;
~~~

<br/>

#AppDlg.cpp
~~~C++
BOOL CMFCApplication7Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	if (GdiplusStartup(&m_gpToken, &m_gpsi, NULL) != Ok)
	{
		AfxMessageBox(_T("GDI+ 사용 실패"));
	}


	CClientDC dc(this); // 메모리dc와 비트맵에게 정보를 줄 장치dc
	mem_dc.CreateCompatibleDC(&dc); // 장치 dc의 기본적인 정보를 가져가기
	
	GetClientRect(&m_rClientrect);
	mem_bmp.CreateCompatibleBitmap(&dc, m_rClientrect.Width(), m_rClientrect.Height()); // 장치 dc의 기본적인 정보를 가져가기, w,h로 장치 dc와 같은 크기 지정하기
	mem_dc.SelectObject(&mem_bmp); // 메모리dc가 만들어진 비트맵을 바꿔치기 하기

	mem_dc.FillSolidRect(0, 0, m_rClientrect.Width(), m_rClientrect.Height(), RGB(255,255,255));

	Graphics p_graphic(mem_dc);
	p_graphic.SetSmoothingMode(SmoothingModeAntiAlias);
	Pen p_pen(Color(255, 255, 0, 0), 3);
	
	p_graphic.DrawEllipse(&p_pen, 10,
		10, 200, 200);

	return TRUE; 
}

. . .

void CMFCApplication7Dlg::OnPaint()
{
	CPaintDC dc(this); // 그리기를 위한 디바이스 컨텍스트입니다.

	if (IsIconic())
	{

	}
	else
	{
		dc.BitBlt(0, 0, m_rClientrect.Width(), m_rClientrect.Height(), &mem_dc, 0, 0, SRCCOPY); // 장치 dc에 메모리 dc를 바꿔치기 해서 출력하기
	}
}

. . .

void CMFCApplication7Dlg::OnDestroy()
{
	CDialogEx::OnDestroy();

	::GdiplusShutdown(m_gpToken);
}
~~~

![image](https://user-images.githubusercontent.com/39178978/223145274-006e0877-e1ab-4b84-9189-5cb9678ec501.png)

###### [GDI Plus(+)](#gdi-plus)
###### [Top](#top)

<br/>
<br/>

# 여러가지 그리기
  - g.DrawImage
  - g.FillRectangle
  - g.FillEllipse
  - SolidBrush solidBrushWhite(Color(255, 255, 255));
  - SolidBrush solidBrushWhite(Color(255, 255, 255, 255));

###### [GDI Plus(+)](#gdi-plus)
###### [Top](#top)

<br/>
<br/>

# 이미지 원하는 모양으로 출력하기
  - 이미지를 원하는 모양으로 출력하기 위해서 SetClip() 함수를 사용했다. SetClip()은 출력하기 전에, '내가 어느 정도 범위에 어떤 무엇이든지 출력 범위를 제한 할때' 사용하게 된다.
  - 라운드 사각형을 SetClip()하여, 그 위에 이미지를 출력하면 라운드 된 모양으로 이미지가 출력되게 된다. 한가지 해결하지 못한 것은, 사진이 라운드가 될때 안티에일리어싱이 되지 않는 다는 점이다..

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#AppDlg.cpp
~~~C++
// m_rCImageRect[inBtnCnt].left, m_rCImageRect[inBtnCnt].top, m_rCImageRect[inBtnCnt].Width(), m_rCImageRect[inBtnCnt].Height() 특정한 크기의 사각형을 만듬
RectF PaintRect(m_rCImageRect[inBtnCnt].left, m_rCImageRect[inBtnCnt].top, m_rCImageRect[inBtnCnt].Width(), m_rCImageRect[inBtnCnt].Height());

GraphicsPath RoundPath;
GetRoundedRect(&RoundPath, PaintRect, 10); // 만든 사각형을 라운드하기

m_graphics->SetClip(&RoundPath, CombineModeReplace); // 라운드한 사각형으로 다음 출력시 출력을 제한 하기


// 여기서 이미지를 출력한다


/// round rect 만들기
void GetRoundedRect(GraphicsPath* pPath, RectF baseRect, float radius)
{
	if( radius<=0.0F ){ 
		pPath->AddRectangle(baseRect); 
		pPath->CloseFigure(); 
		return;
	}
	if( radius>=(min(baseRect.Width, baseRect.Height))/2.0){
		GetCapsule(pPath, baseRect); 
		return;
	}
	float diameter = radius * 2.0F; 
	RectF arc ( baseRect.X, baseRect.Y, diameter, diameter); 
	pPath->AddArc( arc, 180, 90 ); 
	arc.X = baseRect.GetRight() -diameter; 
	pPath->AddArc( arc, 270, 90 ); 
	arc.Y = baseRect.GetBottom() -diameter; 
	pPath->AddArc( arc, 0, 90 ); 
	arc.X = baseRect.GetLeft();
	pPath->AddArc( arc, 90, 90 ); 
	pPath->CloseFigure(); 
}

. . .

/// round rect 만들기
void GetCapsule(GraphicsPath* pPath, RectF baseRect)
{ 
	float diameter; 

	TRY{ 
		if( baseRect.Width > baseRect.Height){ 
			diameter = baseRect.Height; 
			RectF arc( baseRect.X, baseRect.Y, diameter, diameter); 
			pPath->AddArc( arc, 90, 180); 
			arc.X = baseRect.GetRight()-diameter; 
			pPath->AddArc( arc, 270, 180); 
		}else if( baseRect.Width < baseRect.Height ){ 
			diameter = baseRect.Width;

			RectF arc( baseRect.X, baseRect.Y, diameter, diameter ); 
			pPath->AddArc( arc, 180, 180 ); 
			arc.Y = baseRect.GetBottom() -diameter; 
			pPath->AddArc( arc, 0, 180 ); 
		}else{ 
			pPath->AddEllipse( baseRect ); 
		}
	}CATCH(CException, ex){
		pPath->AddEllipse( baseRect ); 
	}
	END_CATCH
		pPath->CloseFigure(); 
}
~~~

###### [GDI Plus(+)](#gdi-plus)
###### [Top](#top)

<br/>
<br/>

# PNG A(알파)값 포함 이미지 출력하기
  - GDI+의 Bitmap으로 출력하면 출력할 수 있다
  - DrawImage를 할때 Bitmap을 집어 넣기만 하면 끝

#AppDlg.cpp
~~~C++
//GDI+ 로 PNG출력하기 TEST
	csDir = _T("");
	csDir.Format("%s\\%s",g_csInstallDir + FILE_DATABASE_IMG_DIR, "wait-bottom1.png");

	USES_CONVERSION;
	WCHAR *wszFileNameOutPut = T2W(csDir.GetBuffer());
	Bitmap* bitmap = new Bitmap(wszFileNameOutPut);
	Graphics graphics(dc->GetSafeHdc());
	graphics.DrawImage(bitmap, m_rdisplay3.left, m_rdisplay3.top); // m_rdisplay3는 그릴 위치 및 크기입니다.
~~~

###### [GDI Plus(+)](#gdi-plus)
###### [Top](#top)

<br/>
<br/>

***

# Direct2D
  - d2d1.h 파일은 C/C++에서 Direct2D API를 사용하기 위해서 참조해야 하는 헤더파일
  - Windows 8 또는 그 이후 버전에서는 Direct2D에 여러 가지 추가 기능과 변화가 생겼기 때문에 이 기능들을 사용하려면 각 헤더파일의 이름을 약간 변경해서 참조해야 합니다. (이 기능들을 사용하면 Windows 7 응용 프로그램과의 호환성을 잃을수도 있다)
  - D2D1.lib 파일은 C/C++ 에서 Direct2D API를 사용하기 위해서 참조해야 하는 라이브러리 파일
  - Direct2D 를 구성하는 객체들은 ID2D1Resource 인터페이스로부터 상속받아서 구현되고, ID2D1Factory 객체는 ID2D1Resource 를 상속받아 만들어진 객체를 생성하고 사용할 수 있도록 해준다

    - [Direct2D 초기화 및 기본출력](#direct2d-초기화-및-기본출력)
    - [Direct2D 초기화 및 이미지출력](#direct2d-초기화-및-이미지출력)
    - [Direct2D 초기화 및 이미지 라운드 출력](#direct2d-초기화-및-이미지-라운드-출력)

###### [Direct2D](#direct2d)
###### [Top](#top)

<br/>
<br/>

# Direct2D 초기화 및 기본출력

#AppDlg.h
~~~c++
#include <d2d1_1.h>
#pragma comment(lib, "D2D1.lib")
using namespace D2D1;

. . .

public:
	ID2D1Factory *m_p_factory;
	ID2D1HwndRenderTarget *m_p_render_target;
~~~

#AppDlg.cpp
~~~c++
BOOL CMFCApplication17Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	m_p_factory = NULL;
	m_p_render_target = NULL;

	D2D1CreateFactory(D2D1_FACTORY_TYPE_SINGLE_THREADED, &m_p_factory);

	if (S_OK == D2D1CreateFactory(D2D1_FACTORY_TYPE_SINGLE_THREADED, &m_p_factory)){
		MessageBox(_T("Factory 생성에 성공했습니다!"), _T("D2D1CreateFactory"), MB_OK);
		// 성공했으면 m_p_factory에 사용 가능한 Factory 객체의 주소가 저장되어 있다.
	} else {
		MessageBox(_T("Factory 생성에 실패했습니다!"), _T("D2D1CreateFactory"), MB_ICONERROR);
	}

	CRect r;
	GetClientRect(&r);


	if (S_OK == m_p_factory->CreateHwndRenderTarget(RenderTargetProperties(),
		HwndRenderTargetProperties(m_hWnd, SizeU(r.right, r.bottom)), &m_p_render_target))
	{
		MessageBox(_T("m_p_render_target 생성에 성공했습니다!"), _T("D2D1CreateFactory"), MB_OK);
		//  성공했으면 m_p_render_target 에 사용 가능한 RenderTarget 객체의 주소가 저장되어 있다.
	} else {
		MessageBox(_T("m_p_render_target 생성에 실패했습니다!"), _T("D2D1CreateFactory"), MB_ICONERROR);
	}

	return TRUE;
}

. . . 

void CMFCApplication17Dlg::OnLButtonDown(UINT nFlags, CPoint point)
{
	m_p_render_target->BeginDraw();
	m_p_render_target->Clear(ColorF(0.0f, 0.8f, 1.0f));

	D2D1_ELLIPSE my_region;
	my_region.point.x = 100;
	my_region.point.y = 100;
	my_region.radiusX = 50.0f;
	my_region.radiusY = 50.0f;

	ID2D1SolidColorBrush *p_yellow_brush = NULL;

	m_p_render_target->CreateSolidColorBrush(ColorF(1.0f, 1.0f, 0.0f), &p_yellow_brush);

	m_p_render_target->FillEllipse(my_region, p_yellow_brush);

	p_yellow_brush->Release();
	p_yellow_brush = NULL;

	m_p_render_target->EndDraw();

	CDialogEx::OnLButtonDown(nFlags, point);
}

. . .

void CMFCApplication17Dlg::OnDestroy()
{
	CDialogEx::OnDestroy();

	m_p_factory->Release();

	if (m_p_render_target != NULL)
	{
		m_p_render_target->Release();
		m_p_render_target = NULL;
	}
}
~~~

###### [Direct2D](#direct2d)
###### [Top](#top)

<br/>
<br/>

# Direct2D 초기화 및 이미지출력

#AppDlg.h
~~~c++
#include <d2d1.h>
#pragma comment(lib, "D2D1.lib")
#include <Wincodec.h>     // IWICImagingFactory를 사용하기 위해서 추가 
using namespace D2D1;

. . .
public:
	ID2D1Factory *m_p_factory;
	ID2D1HwndRenderTarget *m_p_render_target;
	ID2D1Bitmap *m_p_bitmap;
	void WIC();
~~~

#AppDlg.cpp
~~~c++
BOOL CMFCApplication22Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();


	m_p_factory = NULL;
	m_p_render_target = NULL;

	D2D1CreateFactory(D2D1_FACTORY_TYPE_SINGLE_THREADED, &m_p_factory);

	if (S_OK == D2D1CreateFactory(D2D1_FACTORY_TYPE_SINGLE_THREADED, &m_p_factory)){
		MessageBox(_T("Factory 생성에 성공했습니다!"), _T("D2D1CreateFactory"), MB_OK);
		// 성공했으면 m_p_factory에 사용 가능한 Factory 객체의 주소가 저장되어 있다.
	} else {
		MessageBox(_T("Factory 생성에 실패했습니다!"), _T("D2D1CreateFactory"), MB_ICONERROR);
	}

	CRect r;
	GetClientRect(&r);


	if (S_OK == m_p_factory->CreateHwndRenderTarget(RenderTargetProperties(),
		HwndRenderTargetProperties(m_hWnd, SizeU(r.right, r.bottom)), &m_p_render_target))
	{
		MessageBox(_T("m_p_render_target 생성에 성공했습니다!"), _T("D2D1CreateFactory"), MB_OK);
		//  성공했으면 m_p_render_target 에 사용 가능한 RenderTarget 객체의 주소가 저장되어 있다.
	} else {
		MessageBox(_T("m_p_render_target 생성에 실패했습니다!"), _T("D2D1CreateFactory"), MB_ICONERROR);
	}

	WIC();


	return TRUE; 
}


. . .

void CMFCApplication22Dlg::WIC()
{
	// WIC(Windows Imaging Component)관련 객체를 생성하기 위한 Factory 객체 선언 
	IWICImagingFactory *p_wic_factory; 
	// WIC 객체를 생성하기 위한 Factory 객체를 생성한다. 
	CoCreateInstance(CLSID_WICImagingFactory, NULL, CLSCTX_INPROC_SERVER, IID_PPV_ARGS(&p_wic_factory)); 


	// 압축된 이미지를 해제할 객체 
	IWICBitmapDecoder *p_decoder; 
	// WIC용 Factory 객체를 사용하여 이미지 압축 해제를 위한 객체를 생성 
	p_wic_factory->CreateDecoderFromFilename(_T("1.jpg"), NULL, GENERIC_READ, WICDecodeMetadataCacheOnDemand, &p_decoder);


	// 특정 그림을 선택한 객체 
	IWICBitmapFrameDecode *p_frame; 
	// 파일을 구성하는 이미지 중에서 첫번째 이미지를 선택한다. 
	p_decoder->GetFrame(0, &p_frame);



	// 이미지 변환 객체 
	IWICFormatConverter *p_converter; 
	// WIC Factory 객체를 사용하여 이미지형식 변환 객체를 생성한다.
	p_wic_factory->CreateFormatConverter(&p_converter); 
	// 선택된 그림을 어떤 형식의 비트맵으로 변환할 것인지 설정한다. 
	p_converter->Initialize(p_frame, GUID_WICPixelFormat32bppPBGRA, WICBitmapDitherTypeNone, NULL, 0.0f, WICBitmapPaletteTypeCustom); 



	// 변환된 이미지 형식을 사용하여 Direct2D용 비트맵을 생성합니다.
	m_p_render_target->CreateBitmapFromWicBitmap(p_converter, NULL, &m_p_bitmap); 

	p_wic_factory->Release();
}


. . .

void CMFCApplication22Dlg::OnLButtonDown(UINT nFlags, CPoint point)
{
	// RenderTarget 에 출력이 시작됨을 설정한다.
	m_p_render_target->BeginDraw();
	// RenderTarget 의 전체 영역에 파란색(R0, G203, B255)을 칠한다.
	m_p_render_target->Clear(ColorF(0, 0.8f, 1));

	// 이미지가 정상적으로 구성된 경우에만 출력한다.
	if (m_p_bitmap != NULL){
		// 구성된 비트맵 이미지의 크기를 얻는다.
		D2D1_SIZE_F image_size = m_p_bitmap->GetSize();
		// 완전 불투명 상태로 지정된 좌표에 비트맵을 출력한다.
		m_p_render_target->DrawBitmap(m_p_bitmap, RectF(0, 0, image_size.width, image_size.height));
	}

	// 출력을 끝낸다
	m_p_render_target->EndDraw();

	CDialogEx::OnLButtonDown(nFlags, point);
}

. . .

void CMFCApplication22Dlg::OnDestroy()
{
	CDialogEx::OnDestroy();

	m_p_factory->Release();

	if (m_p_render_target != NULL)
	{
		m_p_render_target->Release();
		m_p_render_target = NULL;
	}
}
~~~

###### [Direct2D](#direct2d)
###### [Top](#top)

<br/>
<br/>

# Direct2D 초기화 및 이미지 라운드 출력

#AppDlg.h
~~~c++
#include <d2d1.h>
#pragma comment(lib, "D2D1.lib")
#include <Wincodec.h>     // IWICImagingFactory를 사용하기 위해서 추가 
using namespace D2D1;

. . .

public:
	ID2D1Factory *m_p_factory;
	ID2D1HwndRenderTarget *m_p_render_target;
	ID2D1Bitmap *m_p_bitmap[2];
	void WIC();
~~~

#AppDlg.cpp
~~~c++
BOOL CMFCApplication22Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();


	m_p_factory = NULL;
	m_p_render_target = NULL;

	D2D1CreateFactory(D2D1_FACTORY_TYPE_SINGLE_THREADED, &m_p_factory);

	if (S_OK == D2D1CreateFactory(D2D1_FACTORY_TYPE_SINGLE_THREADED, &m_p_factory)){
		MessageBox(_T("Factory 생성에 성공했습니다!"), _T("D2D1CreateFactory"), MB_OK);
		// 성공했으면 m_p_factory에 사용 가능한 Factory 객체의 주소가 저장되어 있다.
	} else {
		MessageBox(_T("Factory 생성에 실패했습니다!"), _T("D2D1CreateFactory"), MB_ICONERROR);
	}

	CRect r;
	GetClientRect(&r);


	if (S_OK == m_p_factory->CreateHwndRenderTarget(RenderTargetProperties(),
		HwndRenderTargetProperties(m_hWnd, SizeU(r.right, r.bottom)), &m_p_render_target))
	{
		MessageBox(_T("m_p_render_target 생성에 성공했습니다!"), _T("D2D1CreateFactory"), MB_OK);
		//  성공했으면 m_p_render_target 에 사용 가능한 RenderTarget 객체의 주소가 저장되어 있다.
	} else {
		MessageBox(_T("m_p_render_target 생성에 실패했습니다!"), _T("D2D1CreateFactory"), MB_ICONERROR);
	}

	WIC();


	return TRUE; 
}

. . .

void CMFCApplication22Dlg::WIC()
{
	for(int i = 0; i < 2; i++)
	{
		// WIC(Windows Imaging Component)관련 객체를 생성하기 위한 Factory 객체 선언 
		IWICImagingFactory *p_wic_factory; 
		// WIC 객체를 생성하기 위한 Factory 객체를 생성한다. 
		CoCreateInstance(CLSID_WICImagingFactory, NULL, CLSCTX_INPROC_SERVER, IID_PPV_ARGS(&p_wic_factory)); 


		// 압축된 이미지를 해제할 객체 
		IWICBitmapDecoder *p_decoder; 

		if (i == 0)
		{
			// WIC용 Factory 객체를 사용하여 이미지 압축 해제를 위한 객체를 생성 
			p_wic_factory->CreateDecoderFromFilename(_T("D:\\POS\\Astems_2.0\\Img\\Kiosk\\Goods\\C374_NC1932_01_07.jpg"), NULL, GENERIC_READ, WICDecodeMetadataCacheOnDemand, &p_decoder);
		}
		else
		{
			// WIC용 Factory 객체를 사용하여 이미지 압축 해제를 위한 객체를 생성 
			p_wic_factory->CreateDecoderFromFilename(_T("D:\\POS\\Astems_2.0\\Img\\Kiosk\\Goods\\C374_NC1932_01_20.jpg"), NULL, GENERIC_READ, WICDecodeMetadataCacheOnDemand, &p_decoder);
		}
		


		// 특정 그림을 선택한 객체 
		IWICBitmapFrameDecode *p_frame; 
		// 파일을 구성하는 이미지 중에서 첫번째 이미지를 선택한다. 
		p_decoder->GetFrame(0, &p_frame);



		// 이미지 변환 객체 
		IWICFormatConverter *p_converter; 
		// WIC Factory 객체를 사용하여 이미지형식 변환 객체를 생성한다.
		p_wic_factory->CreateFormatConverter(&p_converter); 
		// 선택된 그림을 어떤 형식의 비트맵으로 변환할 것인지 설정한다. 
		p_converter->Initialize(p_frame, GUID_WICPixelFormat32bppPBGRA, WICBitmapDitherTypeNone, NULL, 0.0f, WICBitmapPaletteTypeCustom); 



		// 변환된 이미지 형식을 사용하여 Direct2D용 비트맵을 생성합니다.
		m_p_render_target->CreateBitmapFromWicBitmap(p_converter, NULL, &m_p_bitmap[i]); 

		p_wic_factory->Release();
	}
}

. . .

void CMFCApplication22Dlg::OnLButtonDown(UINT nFlags, CPoint point)
{
	ID2D1RoundedRectangleGeometry* geometry;
	m_p_factory->CreateRoundedRectangleGeometry(RoundedRect(RectF(0.0f, 0.0f, 200.0f, 150.0f), 10.0f, 10.0f), &geometry);


	// RenderTarget 에 출력이 시작됨을 설정한다.
	m_p_render_target->BeginDraw();
	// RenderTarget 의 전체 영역에 파란색(R0, G203, B255)을 칠한다.
	m_p_render_target->Clear(ColorF(0, 0.8f, 1));

	ID2D1Layer *pLayer = NULL;
	m_p_render_target->CreateLayer(NULL, &pLayer);
	m_p_render_target->PushLayer(LayerParameters(InfiniteRect(), geometry),pLayer);

	for (int i = 0; i < 2; i++)
	{
		// 이미지가 정상적으로 구성된 경우에만 출력한다.
		if (m_p_bitmap[i] != NULL){
			// 구성된 비트맵 이미지의 크기를 얻는다.
			D2D1_SIZE_F image_size = m_p_bitmap[i]->GetSize();
			// 완전 불투명 상태로 지정된 좌표에 비트맵을 출력한다.

			D2D1_ROUNDED_RECT roundedRect = RoundedRect(RectF(i*50, i*50, image_size.width, image_size.height), 10.f, 10.f);

			D2D1_RECT_F dRect = RectF(i*50, i*50, image_size.width, image_size.height);

			m_p_render_target->DrawBitmap(m_p_bitmap[i], dRect);
		}
	}
	
	m_p_render_target->PopLayer();

	// 출력을 끝낸다
	m_p_render_target->EndDraw();

	CDialogEx::OnLButtonDown(nFlags, point);
}

. . .

void CMFCApplication22Dlg::OnDestroy()
{
	CDialogEx::OnDestroy();

	m_p_factory->Release();

	if (m_p_render_target != NULL)
	{
		m_p_render_target->Release();
		m_p_render_target = NULL;
	}
}
~~~

###### [Direct2D](#direct2d)
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
  - DrawItem같은 것을 이용하기 위해서는 Owner Draw를 true로 해야한다

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

<br/>
<br/>

***

# MFC라이브러리 만들기
  - 1. ‘Windows 데스크톱 마법사’로 프로젝트 만들기
  ![20220902_235502_1](https://user-images.githubusercontent.com/39178978/188176760-11bf5578-59f4-424d-83df-cd3470dca2f7.png)
  
<br/>
  
  - 2. 설정하기(정적 라이브러리, MFC 선택)
  ![20220902_235502_2](https://user-images.githubusercontent.com/39178978/188176815-2afd92ee-dd73-4a1f-9164-e19ede7aaa81.png)
  
<br/>

  - 3. 필요한 부분만 남기고 다 지우기
#MyBtn.cpp
~~~c++
// MyBtn.cpp : 정적 라이브러리를 위한 함수를 정의합니다.

#include "pch.h"
#include "framework.h"
#include "MyBtn.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#endif
~~~
![20220902_235502_3](https://user-images.githubusercontent.com/39178978/188176873-a1fa8a53-a297-446c-b251-1e3c09e34674.png)

<br/>

  - 4. 라이브러리를 위해 만들었던 cpp와 h파일을 라이브러리 솔루션 폴더 에 복사해 넣는다
  - 5. cpp와 h파일을 솔루션에 추가한다
  ![20220902_235502_4](https://user-images.githubusercontent.com/39178978/188177018-cbb939c6-963e-460e-90ae-f827db2ec982.png)
  
<br/>

  - 6. 라이브러리로 만들려고 하던 cpp파일에 인클루드 되어 있는 h를 지운다.(cpp를 만들때, 기본적으로 들어가게 되는 h해더)
  ![20220902_235502_5](https://user-images.githubusercontent.com/39178978/188177044-79b54b8f-3a1c-4375-b171-fdbc62bf5cca.png)

<br/>

  - 7. 솔루션 다시빌드를 해서 lib파일을 만든다  
  ![20220902_235502_6](https://user-images.githubusercontent.com/39178978/188177074-6397bf5b-5994-41fb-bb82-8bc98d43be63.png)

<br/>

  - 8. Debug폴더에있는 lib파일을 복사해서 가져다 쓴다
    - 가져다 쓸때는 A.cpp, A.h를 이용해서 B.lib를 만들었기 때문에 원래 A.cpp는 이제 필요 없어 지지만 A.h파일은 있어야 한다. 따라서 이제 부터 B.lib와 A.h파일을 이용해서 똑같이 작동 시킬 수 있다.
  - 9. lib파일을 사용하기 위해서 선언해 준다
    - #pragma comment (lib, "MyCtrolBtn.lib")

###### [MFC라이브러리 만들기](#mfc라이브러리-만들기)
###### [Top](#top)

<br/>
<br/>

***

# dll 만들어 사용하기
  - DLL개발 시 주의사항
    - DLL 함수 내부에서 정적 지역 변수 사용 및 전역변수 선언 및 정의 시 반드시 멀티스레드 환경을 고려(TLS 적용)
    - exe에서 동적 할당한 것은 exe에서, dll에서 동적 할당한 것은 dll에서 해제하기
    - DllMain() 함수에서 너무 많은 작업을 하지 말 것
    - TLS(ThreadLocalStorage)
      - 각 스레드 별로 분리된 메모리 공간을 활용
      - malloc(),free()함수처럼 사용 할 수 있으나 개수 제한이 있음
      - 정적 TLS적용
        - __declspec(thread) 이것을 앞에다가 각각 붙여주면 된다

<br/>

  - 1. ‘Windows 데스크톱 마법사’로 프로젝트 만들기  
![20220910_232004](https://user-images.githubusercontent.com/39178978/189487566-59866a5a-f4a2-43de-953a-5d859a76527c.png)

<br/>
  
  - 2. 동적 연결 라이브러리, 미리 컴파일된 헤더 클릭  
![20220910_232052](https://user-images.githubusercontent.com/39178978/189487591-3820a3b1-0958-4f47-b32d-5fb1080a2b9a.png)
  
<br/>

  - 3. dllmain.cpp에서 작업 진행하기  
![20220910_232156](https://user-images.githubusercontent.com/39178978/189487640-3182dbbc-99d2-4df4-a3b6-e58860cbc204.png)

<br/>

아래 공간에 작업 진행  
![20220910_232200](https://user-images.githubusercontent.com/39178978/189487665-940b96d1-8472-4fdd-81a5-443f6f0b8ee6.png)

<br/>

  - 4-1. 묵시적로딩
    - 묵시적은 h파일, dll파일 lib파일이 필요하다
    - h파일같은 경우는 pragma comment와 각각의 함수를 써줘야 하기 때문에 전달해 주는것
    - 명시적일때는 Thread마다 load와 free를 해줘야 하지만, 묵시적일때는 상관이 없다!
    - __declspec(dllexport) : 일반적으로 함수를 어떤 cpp안에서 선언하면, 다른 cpp에서 사용이 불가 하지만, 그것을 밖에서 함수를 호출할 수 있게 해준다

<br/>

#dllmain.cpp
~~~c++
// dllmain.cpp : DLL 애플리케이션의 진입점을 정의합니다.
#include "pch.h"

BOOL APIENTRY DllMain( HMODULE hModule,
                       DWORD  ul_reason_for_call,
                       LPVOID lpReserved
                     )
{
    switch (ul_reason_for_call)
    {
    case DLL_PROCESS_ATTACH:
    case DLL_THREAD_ATTACH:
    case DLL_THREAD_DETACH:
    case DLL_PROCESS_DETACH:
        break;
    }
    return TRUE;
}

__declspec(dllexport) int WINAPI Sum(int a, int b)
{
    return a + b;
}
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/e2057256-6bc6-433b-b3d5-1d5e6973a57f)

<br/>

#AppDlg.cpp
~~~c++
// .h파일로 만들어서 보통 제공한다
#pragma comment(lib, "..\\x64\\Debug\\Project1.lib")
int WINAPI Sum(int a, int b);
//

void CMFCApplication1Dlg::OnBnClickedButton1()
{
	// TODO: 여기에 컨트롤 알림 처리기 코드를 추가합니다.
	int num = Sum(1, 2);
	CString str = _T("");
	str.Format(_T("%d"), num);
	AfxMessageBox(str);
}
~~~

<br/>

  - 4-2.명시적 로딩
    - Thread마다 각각 load와 free를 해줘야 한다


  - 5-2. 작업진행
    - __declspec(dllexport) : 일반적으로 함수를 어떤 cpp안에서 선언하면, 다른 cpp에서 사용이 불가 하지만, 그것을 밖에서 함수를 호출할 수 있게 해준다
    - extern "C" : c++컴파일러는 함수를 컴파일할때 함수의 이름을 임의로 수정하기 때문에 함수의 이름을 유지시켜줘야 밖에서 호출 할 수 있는데, C언어 방식으로 컴파일을 하면 가능하다, 즉 C언어 방식으로 컴파일 하게 해준다

#dllmain.cpp
~~~c++
// dllmain.cpp : DLL 애플리케이션의 진입점을 정의합니다.
#include "pch.h"

BOOL APIENTRY DllMain( HMODULE hModule,
                       DWORD  ul_reason_for_call,
                       LPVOID lpReserved
                     )
{
    switch (ul_reason_for_call)
    {
    case DLL_PROCESS_ATTACH:
    case DLL_THREAD_ATTACH:
    case DLL_THREAD_DETACH:
    case DLL_PROCESS_DETACH:
        break;
    }
    return TRUE;
}

extern "C" __declspec(dllexport) int Sum(int a, int b)
{
    return a + b;
}
~~~

<br/>

  - 6-2. 솔루션 빌드 해서 dll파일 만들기  
![20220910_232422](https://user-images.githubusercontent.com/39178978/189487734-bfa51e7c-f262-42b3-ae57-15369f9d27fe.png)

<br/>

  - 7-2. dll파일을, 사용할 프로젝트 폴더에 복사해 넣기  
![20220910_232456](https://user-images.githubusercontent.com/39178978/189487764-219a128b-31df-4d40-a3ff-1e49a3bd29fd.png)

<br/>

  - 8-2. LoadLibrary함수를 사용해서 DLL파일 연결하기
  - 9-2. GetProcAddress함수를 사용해서, DLL파일에서 사용할 함수 이름을 찾아서 사용하기
    - 함수포인터 선언 필요
    - GetProcAddress함수는 FARPROC형식으로 값을 반환하기 때문에 함수에 맞게 형식 변환 필요
  - 10-2. 함수 사용
  - 11-2. DLL연결 해제하기

<br/>

#AppDlg.cpp
~~~c++
void CMFCApplication1Dlg::OnBnClickedButton1()
{
	HMODULE dll = LoadLibrary(_T("Mydll.dll")); // LoadLibrary함수를 사용해서 DLL파일 연결하기

	int (*p)(int, int); // 함수포인터 선언 필요

	// GetProcAddress함수를 사용해서, DLL파일에서 사용할 함수 이름을 찾아서 사용하기
	// GetProcAddress함수는 FARPROC형식으로 값을 반환하기 때문에 함수에 맞게 형식 변환 필요
	p = (int(*)(int, int))GetProcAddress(dll, "Sum");

	int n = (*p)(1, 2); // 함수 사용
	SetDlgItemInt(IDC_EDIT1, n);
	FreeLibrary(dll); // DLL연결 해제하기
}
~~~

###### [dll 만들어 사용하기](#dll-만들어-사용하기)
###### [Top](#top)

<br/>
<br/>

***

# 사용자정의 윈도우 만들기

  - 윈도우안에 개별 윈도우를 만들어서 관리를 편하게 할 수 있다.
  - 클래스마법사 -> 클래스 추가 -> MFC클래스 -> 기본 클래스 (CWnd)
    - 일반 적인 사용자 정의 윈도는 기본 클래스인 CWnd을 상속 받아서 만드는 것이 좋다
    - CWnd로 만들어진 윈도우를 생성하는 클래스는 Create() 클래스를 사용 하면 된다
    - 그림을 그리기 위해서는 CWnd를 상속받은 클래스 안에 onPaint를 받는 함수를 정의해서 그림을 그리면 된다.

<br/>

#AppDlg.h
~~~c++
// 인클루드 하기, 선언하기
#include "m_MyWin.h"
private:
	m_MyWin m_Mywin;
~~~

<br/>

#AppDlg.cpp
~~~c++
BOOL CMFCApplication3Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	m_Mywin.Create(NULL, NULL, WS_VISIBLE | WS_CHILD | WS_BORDER, CRect(50, 50, 200, 200), this, 25000);

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}
~~~

![image](https://user-images.githubusercontent.com/39178978/188251366-0a0629c4-0550-42b1-abb3-9b7024c2de56.png)

###### [사용자정의 윈도우 만들기](#사용자정의-윈도우-만들기)
###### [Top](#top)

<br/>
<br/>

***

# Windows Media Player ActiveX컨트롤 사용하기

  - Windows Media Player ActiveX컨트롤 ui변경
  	- uiMode : mini -> 컨트롤이 조금 더 간소화 된다
	- uiMode : none -> 컨트롤이 아예 없어짐
  - 1. MFC프로젝트 만들때 ‘ActiveX컨트롤’ 추가하기  
![20220916_223124](https://user-images.githubusercontent.com/39178978/190650732-63e207cd-4ae1-4fb4-bd86-ed22fd319fa7.png)
  - 만약 MFC프로젝트 생성시에 ‘ActiveX컨트롤’을 체크하지 않았다면, 초기 CPP파일에 ‘AfxEnableControlContainer()’ 과 stdafx.h파일에 #include <afxdisp.h>을 추가해주면 된다

#초기 CPP파일
~~~c++
BOOL CMFCApplication3App::InitInstance()
{
	// 응용 프로그램 매니페스트가 ComCtl32.dll 버전 6 이상을 사용하여 비주얼 스타일을
	// 사용하도록 지정하는 경우, Windows XP 상에서 반드시 InitCommonControlsEx()가 필요합니다.
	// InitCommonControlsEx()를 사용하지 않으면 창을 만들 수 없습니다.
	INITCOMMONCONTROLSEX InitCtrls;
	InitCtrls.dwSize = sizeof(InitCtrls);
	// 응용 프로그램에서 사용할 모든 공용 컨트롤 클래스를 포함하도록
	// 이 항목을 설정하십시오.
	InitCtrls.dwICC = ICC_WIN95_CLASSES;
	InitCommonControlsEx(&InitCtrls);

	CWinApp::InitInstance();


	AfxEnableControlContainer();

	// 대화 상자에 셸 트리 뷰 또는
	// 셸 목록 뷰 컨트롤이 포함되어 있는 경우 셸 관리자를 만듭니다.
	CShellManager *pShellManager = new CShellManager;

	// MFC 컨트롤의 테마를 사용하기 위해 "Windows 원형" 비주얼 관리자 활성화
	CMFCVisualManager::SetDefaultManager(RUNTIME_CLASS(CMFCVisualManagerWindows));

	// 표준 초기화
	// 이들 기능을 사용하지 않고 최종 실행 파일의 크기를 줄이려면
	// 아래에서 필요 없는 특정 초기화
	// 루틴을 제거해야 합니다.
	// 해당 설정이 저장된 레지스트리 키를 변경하십시오.
	// TODO: 이 문자열을 회사 또는 조직의 이름과 같은
	// 적절한 내용으로 수정해야 합니다.
	SetRegistryKey(_T("로컬 응용 프로그램 마법사에서 생성된 응용 프로그램"));

	CMFCApplication3Dlg dlg;
	m_pMainWnd = &dlg;
	INT_PTR nResponse = dlg.DoModal();
	if (nResponse == IDOK)
	{
		// TODO: 여기에 [확인]을 클릭하여 대화 상자가 없어질 때 처리할
		//  코드를 배치합니다.
	}
	else if (nResponse == IDCANCEL)
	{
		// TODO: 여기에 [취소]를 클릭하여 대화 상자가 없어질 때 처리할
		//  코드를 배치합니다.
	}
	else if (nResponse == -1)
	{
		TRACE(traceAppMsg, 0, "경고: 대화 상자를 만들지 못했으므로 응용 프로그램이 예기치 않게 종료됩니다.\n");
		TRACE(traceAppMsg, 0, "경고: 대화 상자에서 MFC 컨트롤을 사용하는 경우 #define _AFX_NO_MFC_CONTROLS_IN_DIALOGS를 수행할 수 없습니다.\n");
	}

	// 위에서 만든 셸 관리자를 삭제합니다.
	if (pShellManager != NULL)
	{
		delete pShellManager;
	}

	// 대화 상자가 닫혔으므로 응용 프로그램의 메시지 펌프를 시작하지 않고  응용 프로그램을 끝낼 수 있도록 FALSE를
	// 반환합니다.
	return FALSE;
}
~~~

<afxdisp.h>
~~~c++
// stdafx.h : 자주 사용하지만 자주 변경되지는 않는
// 표준 시스템 포함 파일 및 프로젝트 관련 포함 파일이 
// 들어 있는 포함 파일입니다.

#pragma once

#ifndef VC_EXTRALEAN
#define VC_EXTRALEAN            // 거의 사용되지 않는 내용은 Windows 헤더에서 제외합니다.
#endif

#include "targetver.h"

#define _ATL_CSTRING_EXPLICIT_CONSTRUCTORS      // 일부 CString 생성자는 명시적으로 선언됩니다.

// MFC의 공통 부분과 무시 가능한 경고 메시지에 대한 숨기기를 해제합니다.
#define _AFX_ALL_WARNINGS

#include <afxwin.h>         // MFC 핵심 및 표준 구성 요소입니다.
#include <afxext.h>         // MFC 확장입니다.
#include <afxdisp.h>        // MFC 자동화 클래스입니다.
~~~

<br/>

  - 2. 다이얼로그에서 마우스 오른쪽 클릭후, ActiveX컨트롤 삽입을 선택후, Windows Media Player선택하기  
![20220916_223403](https://user-images.githubusercontent.com/39178978/190651241-a1738ab6-93ad-4396-a7e0-ef0fd01836ab.png)

<br/>

  - 3. 미디어 플레이어 컨트롤의 속성에 URL에 동영상 URL혹은 로컬 위치를 적어 준다 

###### [Windows Media Player ActiveX컨트롤 사용하기](#windows-media-player-activex컨트롤-사용하기)
###### [Top](#top)

<br/>
<br/>

***

# 음악 재생하기

#AppDlg.cpp
~~~c++
#pragma comment (lib, "winmm.lib")    //음악
#include <mmsystem.h>;                //음악
#include <Digitalv.h>;                //음악

MCI_OPEN_PARMS openBgm;
MCI_PLAY_PARMS playBgm;

// 파일 열기
openBgm.lpstrDeviceType = _T("mpegvideo"); // 타입을 다른것을 넣으면 mp3파일도 재생 가능
openBgm.lpstrElementName = _T("C:\\Users\\Astems\\Desktop\\qqq.mp3");
mciSendCommand(0, MCI_OPEN, MCI_OPEN_ELEMENT | MCI_OPEN_TYPE, (DWORD)(LPVOID)&openBgm);

int dwID = openBgm.wDeviceID;
mciSendCommand(dwID, MCI_PLAY, MCI_NOTIFY, (DWORD)(LPVOID)&openBgm);    //반복재생 플레그를 넣으면 반복 재생 할 수 있음
~~~

###### [음악 재생하기](#음악-재생하기)
###### [Top](#top)

<br/>
<br/>

***

# 실행중인 Process열거하기
  - Process관련 핵심 API
    - CreateProcess(), OpenProcess()
      - HANDLE값을 반환한다
    - ExitProcess()
  - 나의 프로세스 종료
      - TerminateProcess()
  - 다른 프로세스 종료
      - Get/SetProcessAffinityMask()
  - 프로세스 수준에서 cpu 코어 친화력
      - CreateToolhelp32Snapshot()
  - 프로세스 열거하기
      - Process32First(), Process32Next()

<br/>

실행중인 Process열거하기

#ConSoleApp.cpp
~~~c++
#include <iostream>
#include <tchar.h>
#include <Windows.h>
#include <TlHelp32.h>

int main()
{
	_wsetlocale(LC_ALL, L"Korean");
	HANDLE hSnapshot = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);
	if (hSnapshot != INVALID_HANDLE_VALUE)
	{
		PROCESSENTRY32 pe32 = { sizeof(pe32) };

		BOOL bFlag = Process32First(hSnapshot, &pe32);
		for (; bFlag; bFlag = Process32Next(hSnapshot, &pe32))
		{
			_tprintf(_T("[PID: %d] %s\n"), pe32.th32ProcessID, pe32.szExeFile);
		}
		::CloseHandle(hSnapshot);
	}

	return 0;
}
~~~

###### [실행중인 Process열거하기](#실행중인-process열거하기)
###### [Top](#top)

<br/>
<br/>

***

# RS232 시리얼 통신
  - RS232(Recommended Standard 232)는 직렬통신 방식 표준의 하나로 터미널 단말기와 모뎀의 접속용으로 쓰였다.
  - 인터페이스는 직렬포트라고 한다. 장비간의 통신을 전송하기위한 전기적, 기계적 특성을 정의 한것이다. 장비간 1대1 통신에서 사용한다.
  - 윈도우는 아래 사진과 같이 장치 관리자에서 포트를 확인할 수 있다

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/860be006-e305-478c-b73d-a3486f619901)

  - 통신속도(baudrate)
    - 보레이트는 1초동안 보낼수있는 비트수를 말한다.
    - RS232의 통신 속도는 보레이트(baudrate)로 규정한다.
    - 보레이트 9600은 1초동안 9600bit의 데이터를 전송 할수 있다는 것을 말한다.
    - 보레이트는 4800, 9600, 19200, 38400, 115200 (단위:bit/s ) 등 다양하다.
    - 이종장비간 통신을 위해서는 두장비간 보레이트를 동일하게 설정해야한다
  - COMPORT: 하드웨어에 할당된 COMPORT이다.
  - DATA BIT: 시리얼통신으로 데이터를 전송할 BIT의 개수를 설정한다.
  - PARITY BIT: 비트의 합으로 데이터의 오류를 검사하는 비트이다.
  - STOP BIT: STOP비트의 개수를 설정한다.
  - 흐름제어: RTS(Request to pin)핀과 CTS(Clear to Send)핀을 이용하여 하드웨어 통신 제어를 한다.
    - 송신측과 수신측 데이터를 송수신 할경우 수신측에서 데이터부하가 많아 질 경우 송신측에서 보내는 데이터의 흐름을    제한하기 위해 사용한다.
    - 시리얼 포트에서 제공하는 RTS핀과 CTS 핀을 이용하여 핀의 상태를 이용하여 통신의 흐름을 제어한다.

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/5049b4f0-1bfe-49a2-92d6-176c440c49e2)

###### [RS232 시리얼 통신](#rs232-시리얼-통신)
###### [Top](#top)

<br/>
<br/>

***

# 형변환
  - CString TCHAR형을 CHAR로 바꾸기
~~~c++
CStringA csBkDirA(csBkDir); // CStringA는 CHAR
CString csfullPathA(csBkDirA); // CString은 TCHAR
~~~


###### [형변환](#형변환)
###### [Top](#top)

<br/>
<br/>

***

# Thread
  - ID : 식별하는데 사용
  - Handle : 제어까지 해야 한다면 사용

<br/>

  - [Thread핵심 WIN32API](#thread핵심-win32api)
  - [Thread MFC API_AfxBeginThread사용예제](#thread-mfc-api_afxbeginthread사용예제)
  - [WaitForSingleObject사용예제](#waitforsingleobject사용예제)
  - [Critical section,_beginthreadex사용예제](#critical-section_beginthreadex사용예제)
  - [세마포어(Semaphore)예시](#세마포어semaphore예시)
  - [스레드(Thread)친화력 조절 예제](#스레드thread친화력-조절-예제)

###### [Thread](#thread)
###### [Top](#top)

<br/>
<br/>

# Thread핵심 WIN32API
  - CreateThread()
  - OpenThread()
  - ExitThread()
  - TerminateThread()
  - Get/SetThreadPriority()
  - SuspendThread()
  - ResumeThread()
  - Sleep()
  - GetCurrentThread()
  - GetCurrentThreadId()
  - SetThreadAffinityMask()

<br/>

~~~c++
	DWORD dwThreadID = 0;
	HANDLE hThread = ::CreateThread(
		NULL,  // 보안속성 상속, NULL이면 상속 받는다, 이 Thread를 만든 부모의 보안 속성을 상속받는다.
		0,   // 스택 메모리는 기본 크기, 컴파일러 옵션 마다 다르다
		ThreadProc,  // 스래드로 실행할 함수 이름
		NULL,  // 함수에 전달한 매개변수
		0,  // 생성 플래그는 기본값 사용
		&dwThreadID); // 생성된 스레드ID 저장
~~~

###### [Thread](#thread)
###### [Top](#top)

<br/>
<br/>

# Thread MFC API_AfxBeginThread사용예제
  - AfxBeginThread() : Thread 생성
  - CreateEvent() : 이벤트 생성
  - SetEvent() : 생성된 이벤트를 활성화 시켜줌
  - ResetEvent() : 생성된 이벤트를 비활성화 시켜줌
  - CloseHandle() : 이벤트 종료

<br/>

~~~c++
CWinThread* AfxBeginThread(
	AFX_THREADPROC pfnThreadProc,
	LPVOID pParam,
	int nPriority = THREAD_PRIORITY_NORMAL,
	UINT nStackSize = 0,
	DWORD dwCreateFlags = 0,
	LPSECURITY_ATTRIBUTES lpSecurityAttrs = NULL
);

CWinThread*
새롭게 생성된 Thread 객체의 포인터를 반환합니다. 만약 실패하면 NULL이 반환됩니다.
pfnThreadProc
작업자 Thread가 호출될 함수 포인터를 입력합니다. 전역 함수를 사용해야 합니다.
pParam: 
pfnThreadProc 함수로 넘길 인자를 입력합니다.

AfxBeginThread() : 스레드 생성
Thread할 함수는 static으로 선언되어야 한다
함수의 리턴 형태는 int 값
LPVOID aparam형태로 void포인터 형태로 받아 부모 변수들을 사용할 수 있다
Thread는 다른 종료 방법보다 자연스럽게 return으로 종료되어야 가장 좋다
~~~

<br/>

~~~c++
HANDLE CreateEvent(
  LPSECURITY_ATTRIBUTES lpEventAttributes, 
  BOOL bManualReset, 
  BOOL bInitialState, 
  LPTSTR lpName 
); 

IpEventAttributes : 무시, NULL값 입력하면 된다.
bManualReset : TRUE시에는 ResetEvent()을 활용해 Manual로 이벤트를 리셋 시켜야한다.
bInitialState : 초기 이벤트 상태를 나타낸다. TRUE시 Signaled, FALSE시 Nonsignaled
IpName : Event Object의 이름을 나타내는 포인터. 보통 NULL값을 사용한다.
~~~

<br/>

~~~c++
BOOL SetEvent(
  HANDLE hEvent 
);

hEvent  : Event Object를 입력하면 된다.
~~~

<br/>

~~~c++
BOOL ResetEvent( 
  HANDLE hEvent 
); 

hEvent  : Event Object를 입력하면 된다.
~~~

<br/>

~~~c++
DWORD WaitForSingleObject( 
  HANDLE hHandle, 
  DWORD dwMilliseconds 
); 

hHandle : Event Object를 입력하면 된다.
dwMilliseconds  : Time Out 관련 변수이다. INFINITE가 입력되면 해당 Event Object가 Signaled가 될 때까지 계속 기다린다. 숫자가 입력되면 해당 숫자의 시간만큼(ms기준) 기다린 후, WAIT_TIMEOUT을 리턴한다.
~~~

<br/>

  - Thread예제1
    - main-start 출력후, 메인화면은 켜지지만, Thread는 돌아가기 때문에 Thread안에 있는 것들이 모두 출력된다

#AppDlg.h
~~~c++
public:
	CWinThread* m_pThread;
	bool m_blWorkingThread;
	static UINT ThreadOne(LPVOID param);
~~~

<br/>

#AppDlg.cpp
~~~c++
BOOL CMFCApplication1Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();


	AfxMessageBox(_T("main-start"));

	m_blWorkingThread = TRUE;
	m_pThread = AfxBeginThread(CMFCApplication1Dlg::ThreadOne, this);

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}

. . .

UINT CMFCApplication1Dlg::ThreadOne(LPVOID param)
{
	AfxMessageBox(_T("ThreadOne_start"));

	CMFCApplication1Dlg* pDlg = (CMFCApplication1Dlg*)param;

	int inNum = 0;
	while (pDlg->m_blWorkingThread)
	{
		AfxMessageBox(_T("ThreadOne"));

		inNum++;
		if (inNum > 4)
		{
			pDlg->m_blWorkingThread = FALSE;
		}
	}

	AfxMessageBox(_T("ThreadOne_end"));

	return 0;
}
~~~

<br/>

  - Thread예제2

#AppDlg.h
~~~c++
	CWinThread* m_pThreadOne;
	CWinThread* m_pThreadTwo;
	static UINT ThreadOne(LPVOID param);
	static UINT ThreadTwo(LPVOID param);
	HANDLE m_hEvent1;
	HANDLE m_hEvent2;
~~~

<br/>

#AppDlg.cpp
~~~c++
BOOL CMFCApplication1Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();


	AfxMessageBox(_T("main-start"));

	m_hEvent1 = CreateEvent(NULL, TRUE, FALSE, NULL);
	m_hEvent2 = CreateEvent(NULL, TRUE, FALSE, NULL);
	m_pThreadOne = AfxBeginThread(CMFCApplication1Dlg::ThreadOne, this);
	m_pThreadTwo = AfxBeginThread(CMFCApplication1Dlg::ThreadTwo, this);


	AfxMessageBox(_T("main-end"));

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}

. . .

UINT CMFCApplication1Dlg::ThreadOne(LPVOID param)
{
	AfxMessageBox(_T("ThreadOne_start"));

	CMFCApplication1Dlg* pDlg = (CMFCApplication1Dlg*)param;

	for (int i = 0; i < 5; i++)
	{
		AfxMessageBox(_T("ThreadOne"));
		Sleep(100);
	}

	SetEvent(pDlg->m_hEvent1);

	WaitForSingleObject(pDlg->m_hEvent2, INFINITE);

	AfxMessageBox(_T("ThreadOne_end"));


	return 0;
}

. . .

UINT CMFCApplication1Dlg::ThreadTwo(LPVOID param)
{
	CMFCApplication1Dlg* pDlg = (CMFCApplication1Dlg*)param;


	WaitForSingleObject(pDlg->m_hEvent1, INFINITE);

	AfxMessageBox(_T("ThreadTwo_start"));

	for (int i = 0; i < 5; i++)
	{
		AfxMessageBox(_T("ThreadTwo"));
		Sleep(100);
	}

	AfxMessageBox(_T("ThreadTwo_end"));

	SetEvent(pDlg->m_hEvent2);

	return 0;
}
~~~

###### [Thread](#thread)
###### [Top](#top)

<br/>
<br/>

# WaitForSingleObject사용예제
  - WaitForSingleObject에 쓰레드(Thread)핸들을 넘겨주면 그 쓰레드(Thread)가 종료될때 반환하게 된다  

#AppDlg.h
~~~c++
public:
	static DWORD WINAPI ThreadFunction(LPVOID lpParam);
~~~

<br/>

#AppDlg.cpp
~~~c++
BOOL CMFCApplication1Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();


	DWORD dwThreadId = 0;
	HANDLE hThread = CreateThread(
		NULL, 
		0, 
		ThreadFunction, 
		(LPVOID)"PATAM",
		0, 
		&dwThreadId);
	if (hThread == NULL) {
		AfxMessageBox(_T("Thread 생성 실패"));
		return FALSE;
	}

	::WaitForSingleObject(hThread, INFINITE);
	::CloseHandle(hThread);

	OutputDebugString(_T("메인쓰레드 끝\n"));

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}

. . .

DWORD WINAPI CMFCApplication1Dlg::ThreadFunction(LPVOID lpParam)
{
	OutputDebugString(_T("쓰레드 시작\n"));
	Sleep(1000);
	OutputDebugString(_T("쓰레드 끝\n"));
	return 0;
}
~~~

###### [Thread](#thread)
###### [Top](#top)

<br/>
<br/>

# Critical section,_beginthreadex사용예제

#AppDlg.h
~~~c++
public:
	char* g_pszBuffer;
	CRITICAL_SECTION g_cs;
	static UINT WINAPI ThreadFunc1(LPVOID lpParam);
	static UINT WINAPI ThreadFunc2(LPVOID lpParam);
	void SetString(const char* pszData);
	BOOL GetString(char* pszData);
~~~

<br/>

#AppDlg.cpp
~~~c++
BOOL CMFCApplication1Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	g_pszBuffer = NULL;

	// Critical section생성
	::InitializeCriticalSection(&g_cs);

	UINT dwThreadId = 0;
	HANDLE hThread = (HANDLE)::_beginthreadex(
		NULL, 
		0, 
		ThreadFunc1, 
		this,
		0, 
		&dwThreadId);

	if (hThread == NULL) {
		AfxMessageBox(_T("Thread 생성 실패"));
		return FALSE;
	}

	::CloseHandle(hThread);

	hThread = (HANDLE)::_beginthreadex(
		NULL,
		0,
		ThreadFunc2,
		this,
		0,
		&dwThreadId);

	if (hThread == NULL) {
		AfxMessageBox(_T("Thread 생성 실패"));
		return FALSE;
	}

	char szBuffer[64] = { 0, };
	for (int i = 0; i < 5; i++)
	{
		::Sleep(500);
		GetString(szBuffer);
		OutputDebugStringA(szBuffer);
	}

	::WaitForSingleObject(hThread, INFINITE);
	::CloseHandle(hThread);

	// Critical section반납
	::DeleteCriticalSection(&g_cs);

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}

. . . 

UINT CMFCApplication1Dlg::ThreadFunc1(LPVOID lpParam)
{
	CMFCApplication1Dlg* pDlg = static_cast<CMFCApplication1Dlg*>(lpParam);

	while (TRUE)
	{
		::Sleep(1);
		pDlg->SetString("ThreadFunc1\n");
	}
	return 0;
}

UINT CMFCApplication1Dlg::ThreadFunc2(LPVOID lpParam)
{
	CMFCApplication1Dlg* pDlg = static_cast<CMFCApplication1Dlg*>(lpParam);

	while (TRUE)
	{
		::Sleep(1);
		pDlg->SetString("ThreadFunc2\n");
	}
	return 0;
}

void CMFCApplication1Dlg::SetString(const char* pszData)
{
	::EnterCriticalSection(&g_cs);
	if (g_pszBuffer != NULL)
	{
		free(g_pszBuffer);
		g_pszBuffer = (char*)malloc(64);
		sprintf_s(g_pszBuffer, 64, "%s", pszData);
	}
	else
	{
		g_pszBuffer = (char*)malloc(64);
		sprintf_s(g_pszBuffer, 64, "%s", pszData);
	}
	::LeaveCriticalSection(&g_cs);
}

BOOL CMFCApplication1Dlg::GetString(char* pszData)
{
	// 자식스레드가 하나라도 통과되어 있으면 부모 스레드는 여기서 대기하게 된다
	::EnterCriticalSection(&g_cs);
	if (g_pszBuffer != NULL)
	{
		sprintf_s(pszData, 64, "%s", g_pszBuffer);
		free(g_pszBuffer);
		g_pszBuffer = NULL;

		::LeaveCriticalSection(&g_cs);
		return TRUE;
	}

	::LeaveCriticalSection(&g_cs);
	return FALSE;
}
~~~

###### [Thread](#thread)
###### [Top](#top)

<br/>
<br/>

# 세마포어(Semaphore)예시
  - 함수 인자 두번째, 세번째에 임계지점에 몇개까지 접근할 수 있게 할지 결정 할 수 있다  

#AppDlg.h
~~~c++
public:
	static UINT ThreadSemaphore(LPVOID pParam);
~~~

<br/>

#AppDlg.cpp
~~~c++
// 디버그 콘솔을 출력하기 위한 설정
#pragma comment(linker, "/entry:WinMainCRTStartup /subsystem:console")

static HANDLE g_hSema;
static TCHAR g_StringList[10][64];

BOOL CMFCApplication1Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	g_StringList[10][64] = { 0, };

	g_hSema = ::CreateSemaphore(NULL, 3, 3, NULL);

	UINT nThreadId = 0;
	HANDLE hThread = NULL;

	for (int i = 0; i < 10; i++)
	{
		hThread = (HANDLE)::_beginthreadex(
			NULL,
			0,
			ThreadSemaphore,
			(LPVOID)i,
			0,
			&nThreadId);

		if (hThread == NULL) {
			AfxMessageBox(_T("Thread 생성 실패"));
			return FALSE;
		}
	}
	
	::CloseHandle(hThread);

	while (1)
	{
		system("cls");

		for (int i = 0; i < 10; i++)
		{
			_putws(g_StringList[i]);
			//OutputDebugString(g_StringList[i]);
		}

		::Sleep(1000);
	}

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}

. . .

UINT CMFCApplication1Dlg::ThreadSemaphore(LPVOID lpParam)
{
	while (TRUE)
	{
		::wsprintf(g_StringList[(int)lpParam], _T("%d thread is waiting!\n"), (int)lpParam);
		::Sleep(500);

		DWORD dwWaitResult = ::WaitForSingleObject(g_hSema, INFINITE);
		::wsprintf(g_StringList[(int)lpParam], _T("%d running!!!!!!!!!!!!!!\n"), (int)lpParam);
		::Sleep(500);
		::ReleaseSemaphore(g_hSema, 1, NULL);
	}
	return 0;
}
~~~

###### [Thread](#thread)
###### [Top](#top)

<br/>
<br/>

# 스레드(Thread)친화력 조절 예제

#AppDlg.h
~~~c++
public:
	static UINT ThreadFunction(LPVOID pParam);
~~~

<br/>

#AppDlg.cpp
~~~c++
BOOL CMFCApplication1Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();


	UINT nThreadId = 0;
	HANDLE hThread = NULL;

	hThread = (HANDLE)::_beginthreadex(
		NULL,
		0,
		ThreadFunction,
		NULL,
		0,
		&nThreadId);

	if (hThread == NULL) {
		AfxMessageBox(_T("Thread 생성 실패"));
		return FALSE;
	}

	for (int i = 0; i < 8; i++)
	{
		// 코어를 선택할때는 0000 0000 라는 비트 Mask를 사용한다
		// 0000 0001 : 1번 코어
		// 0000 0010 : 2번 코어
		// 0000 0100 : 3번 코어
		// 0000 1001 : 1번, 4번 코어 context switch
		::SetThreadAffinityMask(hThread, 0b00000001 << i);
		::Sleep(5000);
	}

	::CloseHandle(hThread);

	return TRUE;  // 포커스를 컨트롤에 설정하지 않으면 TRUE를 반환합니다.
}

UINT CMFCApplication1Dlg::ThreadFunction(LPVOID lpParam)
{
	int nTemp = 0;
	while (1)
	{
		++nTemp;
	}
	
	return 0;
}
~~~

###### [Thread](#thread)
###### [Top](#top)

<br/>
<br/>

***

# 보호모드VirtualProtect

#AppDlg.cpp
~~~c++
BOOL CMFCApplication2Dlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	const char* pszHello = "Hello World!\n";
	OutputDebugStringA(pszHello);

	DWORD dwOldProtect = 0;
	::VirtualProtect((LPVOID)pszHello, 16, PAGE_READWRITE, &dwOldProtect);

	strcpy_s((char*)pszHello, 16, "qweqweqweqwe\n");
	OutputDebugStringA(pszHello);

	return TRUE;
}
~~~

###### [보호모드VirtualProtect](#보호모드virtualprotect)
###### [Top](#top)

<br/>
<br/>

***

# 에러 후 dump파일 만들기
  - pdb파일은 디버깅 시에 필요하며, 심볼 파일이라고도 불린다
  - 이 파일에는 함수나 변수들의 이름과 위치, 소스파일, 소스라인 정보등이 담겨져 있어서 이러한 정보들을 이용하여 Visual Studio가 손쉽게(?) 실행파일과 소스파일을 연결 시킨다
    - 디버그 모드로 빌드된 바이너리는 그 내부에 소스코드를 포함하고 있지 않다. 그래서 실행파일과 소스코드를 연결시켜주는 것이 필요하며 그것이 pdb가 된다. 따라서 디버그를 할때 pdb를 지우게 되면 디버그를 할 수 없게 된다. 다시 pdb를 만들어야 한다. 계속 진행한다면 어셈블리나, 스택에서도 주소값밖에 볼 수 없을것이다
    - pdb파일에 해당 주소가 어떤 함수인지에 대한 내용이 있기 때문이고, 소스코드의 몇번째 라인인지에 대한 정보 또한 있기에, 한줄 한줄 스텝을 진행해가며 소스레벨에서 디버깅을 할 수 있는 것
  - Debug 바이너리와 Release 바이너리
    - 컴파일 최적화 옵션 때문인데 용량차이도 용량 차이이지만 최적화가 되어 있는 바이너리의 경우 소스레벨에서 제대로 된 디버깅이 되지 않는다. 코드가 최적화 되는 바람에 건너뛰는 라인들이 있기 때문

<br/>

  - 1. 먼저 pdb 파일이 빌드 시 생성되도록 프로젝트 설정을 바꿔야 한다
    - a. C/C++ -> 일반 -> 디버그 정보 형식 에서 "프로그램 데이터베이스(/Zi)" 로 바꾼다.
    - b. 링커 -> 디버깅 -> 디버그 정보 생성 에서 “공유 및 게시를 위한 최적화된 디버그 정보 생성”
    - c. 링커 -> 일반 -> 증분 링크 사용을 아니요로 설정
  - 2. pdb는 컴파일된 소스와 같은 버전이여야 한다, dump파일을 windbg나 비주얼 스튜디오를 사용해서 분석할 수 있다
  - 3. dump파일을 비주얼 스튜디오에 드래그앤 드롭을 하면 시작할 수 있다,  

<br/>

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/309745da-b116-473a-9b74-b47be3c0a505)

<br/>

  - 4. 기호 경로 설정을 통해서 dump파일의 위치를 잡아 놓을수 있으며, 로드되지 않았을때, 나중에 호출 스택을 클릭하여 재로드 할 수 있다
  - 5. 네이티브 전용으로 디버그를 클릭하면, 해당 프로그램이 꺼진 곳의 호출스택을 보여주게 된다

<br/>

  - Minidump만들기

#pch.h or stdafx.h
~~~c++
#include <DbgHelp.h>
#pragma comment(lib, "DbgHelp")

static LONG CALLBACK TopLevelExceptionFilterCallBack(EXCEPTION_POINTERS* exceptionInfo); // 정의

LONG CALLBACK TopLevelExceptionFilterCallBack(EXCEPTION_POINTERS* exceptionInfo)
{
	MINIDUMP_EXCEPTION_INFORMATION dmpInfo = { 0 };
	dmpInfo.ThreadId = ::GetCurrentThreadId(); // Thead ID
	dmpInfo.ExceptionPointers = exceptionInfo;
	dmpInfo.ClientPointers = FALSE;
	CTime CurrentTime;
	CurrentTime = CTime::GetCurrentTime();

	CString Path = _T("C:\\Users\\user\\Desktop\\dump"); // 본인이 저장하고 싶은 경로
	CString Name; // 저장하고 싶은 이름 포맷으로 변경 가능
	Name.Format(_T("%s\\DeumpFile_%02d%02d%02d_%02d%02d%02d.dmp"), Path, CurrentTime.GetYear(), CurrentTime.GetMonth(), CurrentTime.GetDay(), CurrentTime.GetHour(), CurrentTime.GetMinute(), CurrentTime.GetSecond());
	HANDLE hFile = CreateFile(Name, GENERIC_WRITE, FILE_SHARE_WRITE, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL); // 덤프생성
	BOOL bWrite = ::MiniDumpWriteDump(::GetCurrentProcess(), ::GetCurrentProcessId(), hFile, MiniDumpNormal, &dmpInfo, NULL, NULL);
	return 0L;
}
~~~

<br/>

#App.cpp
~~~c++
BOOL CMFCApplication1App::InitInstance()
{
	CWinApp::InitInstance();
	SetUnhandledExceptionFilter(TopLevelExceptionFilterCallBack);
	return FALSE;
}
~~~

<br/>

  - Release 모드에서 pdb파일 생성하기

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/7e9752d7-a0fb-4cb8-af78-bc047addaeea)

  - Release 모드에서는 기본적으로 속도 최적화가 On이기 때문에 중단점이 line by line으로 이동하지 않고, 훅훅 뛰어넘는다(Release 의 속도 최적화로 인해 발생한다)
    - 프로젝트 구성속성 -> ‘C/C++’ -> 최적화 에서 바꿀 수 있다
    - 하지만 이렇게 하면..Release 와 Debug와의 차이는 매크로가 들어가 있냐 아니냐의 차이정도밖에 되지 않아 진다., 따라서 이 설정값은 할지 말지 결정하면 되겠다

###### [에러 후 dump파일 만들기](#에러-후-dump파일-만들기)
###### [Top](#top)

<br/>
<br/>

***
