
##### - Menu
  - MenuItem : Menu안에 요소 생성
  - Header : 이름을 바꿀 수 있음
  - _(단축키) : 이것을 통해서 단축키를 설정 할 수 있음
  - InputGestureText : 단축키 설정, 단지 표시용 이다. 실제 명령은 커맨드 바인딩 작업이 추가적으로 필요하다.
  - IsCheckable 속성 값을 true/false로 설정

~~~
<DockPanel>
    <Menu DockPanel.Dock="Top">
        <MenuItem Header="파일(_F)">
            <MenuItem Header="새파일" InputGestureText="Ctrl+N" IsCheckable="True"/>
            <MenuItem Header="종료" Click="Exit_Click"/>
        </MenuItem>
        <MenuItem Header="편집">
            <MenuItem Header="찾기"/>
            <MenuItem Header="다음 찾기"/>
            <MenuItem Header="바꾸기"/>
        </MenuItem>
    </Menu>
</DockPanel>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152794008-a5828c1a-bba4-440d-98e6-630b2c633433.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - MenuItem의 아이콘 넣기

~~~
<MenuItem Header="파일">
    <MenuItem.Icon>
        <Image Source=""
    </MenuItem.Icon>
</MenuItem>
~~~
