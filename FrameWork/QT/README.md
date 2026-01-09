###### Top

- [MFC메모리 누수 확인](#mfc메모리-누수-확인)
- [ifdef DEBUG (디버그 모드 일때만 실행하기)](#ifdef-debug-디버그-모드-일때만-실행하기)

<br/>
<br/>

***

# MFC메모리 누수 확인
   
   - [ON_COMMAND_RANGE](#on_command_range)
   - [WM_CTLCOLOR (컨트롤의 글꼴, 배경색 변경)](#wm_ctlcolor-컨트롤의-글꼴-배경색-변경)

~~~c++
#include <crtdbg.h>
#define _CRTDBG_MAP_ALLOC

// 프로그램 시작 부분에
_CrtSetDbgFlag ( _CRTDBG_ALLOC_MEM_DF | _CRTDBG_LEAK_CHECK_DF );
~~~


###### [MFC메모리 누수 확인](#mfc메모리-누수-확인)
###### [Top](#top)
