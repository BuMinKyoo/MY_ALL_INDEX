예전에 잠깐 끄적여 봤던...C콘솔..

<br/>

~~~C
#include <Windows.h>

// 콘솔창의 크기를 변경
system("mode con cols=80 lines=25"); // 가로 80, 세로 25
// 콘솔에서의 최대 크기는 가로 80, 세로 25
~~~

<br/>

~~~C
#include <Windows.h>

// 콘솔창의 커서 위치 변경
void gotoxy(int x, int y)
{
	COORD Pos;
	Pos.X = x;
	Pos.Y = y;
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), Pos);
}
~~~

<br/>

~~~C
#include <Windows.h>

// 글자배경컬러, 글자컬러 변경
// 0000 0000 0000 0000 short중 앞에 8자리(뒤의 4자리 : 배경, 앞의 4자리 : 글자)
void SetColor(unsigned short _BgColor, unsigned short _TextColor)
{
	if (_BgColor > 15 || _TextColor > 15) return;

	unsigned short ColorNum = (_BgColor << 4) | _TextColor;
	SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), ColorNum);
}
~~~

<br/>

~~~C
#include <stdio.h>
#include <conio.h>

int main(void)
{
	// getch는 1byte만 수용 가능하며 화살표는 2byte라서 불편함
	// 대각선 이동이 안됨
	int num = _getch();
	printf("%d", num);
	return 0;
}
~~~

<br/>

~~~C
#include <Windows.h>

//정해져 있는 키를 사용하는것
//반환값 : 0x0000 이전에 누른 적이 없고 호출 시점에도 눌려있지 않은 상태
//반환값 : 0x0001 이전에 누른 적이 있고 호출 시점에는 눌려있지 않은 상태
//반환값 : 0x8000 이전에 누른 적이 없고 호출 시점에는 눌려있는 상태
//반환값 : 0x8001 이전에 누른 적이 있고 호출 시점에도 눌려있는 상태
(GetAsyncKeyState(VK_LEFT) & 0x8000);
~~~

<br/>

~~~C
#include <Windows.h>

//시간을 지연시키는 함수
Sleep(1000); // 1초간 지연
~~~

<br/>

~~~C
#include <Windows.h>

int main(void)
{
	//화면을 지워주는 함수
	system("cls");
}
~~~

<br/>

~~~C
#include <time.h> //time
#include <stdio.h> //rand, srand
#include <stdlib.h>

int main(void)
{
	//1970년 1월 1일 0시 (UTC)부터 인자값(timeptr)까지 흐른 시간초 단위로 반환
	time_t t = time(NULL);
	//rand 함수에 사용될 수를 초기화 하는일
	srand(t);

	int random = rand();
	printf("%ld", random);
}
~~~

<br/>

~~~C
#include <Windows.h>

int main(void)
{
	//콘솔타이틀 이름 바꾸기(1)
	SetConsoleTitle(TEXT("별피하기"));
      //title 뒤에 바꾸고 싶은 이름 쓰면됨(2)
      system("title RPG test");
}
~~~

<br/>

~~~C
#include <Windows.h>

int main(void)
{
      //커서 조절
	HANDLE hConsole;
	CONSOLE_CURSOR_INFO ConsoleCursor;
	hConsole = GetStdHandle(STD_OUTPUT_HANDLE);

	ConsoleCursor.bVisible = 1;  //커서 보이기 숨기기
	ConsoleCursor.dwSize = 0;  //커서 굵기

	SetConsoleCursorInfo(hConsole, &ConsoleCursor);
}
~~~
