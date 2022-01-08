#### - WrapPanel : 자신의 영역보다 작은 자식요소들이 있는 경우에 stackPanel과 같은 기능, 반대로 자식요소들의 사이즈가 더 큰 경우에는 다음줄로 배치됨
#### - WrapPanel은 stackpanel과는 다르게 창을 줄였을 경우 요소들이 공간을 초과하면 밑으로 내려간다

~~~
<WrapPanel Name="wp1" VerticalAlignment="Top">
    <Rectangle Height="60" Width="50" Stroke="Black" Fill="RosyBrown" Name="rec1"/>
    <Rectangle Height="60" Width="50" Stroke="Black" Fill="BurlyWood" Name="rec2"/>
    <Rectangle Height="60" Width="50" Stroke="Black" Fill="SeaShell" Name="rec3"/>
    <Rectangle Height="60" Width="50" Stroke="Black" Fill="DarkSlateGray" Name="rec4"/>
</WrapPanel>
~~~

<img src="https://user-images.githubusercontent.com/39178978/148635573-8d994ef7-8c0f-403d-b535-78f0ab45cb80.png">

<br/>

##### 여기서 창을 줄이면

<br/>

<img src="https://user-images.githubusercontent.com/39178978/148635594-dfe37a6a-08cf-49d8-baf5-a2a6e81e7874.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>
          
  
#### - Orientation="Vertical"을 이용하여 수직으로 배치가 가능하다
          
~~~
<WrapPanel Name="wp1" VerticalAlignment="Top" Orientation="Vertical">
    <Rectangle Height="60" Width="50" Stroke="Black" Fill="RosyBrown" Name="rec1"/>
    <Rectangle Height="60" Width="50" Stroke="Black" Fill="BurlyWood" Name="rec2"/>
    <Rectangle Height="60" Width="50" Stroke="Black" Fill="SeaShell" Name="rec3"/>
    <Rectangle Height="60" Width="50" Stroke="Black" Fill="DarkSlateGray" Name="rec4"/>
</WrapPanel>
~~~

<img src="https://user-images.githubusercontent.com/39178978/148635530-4eef554c-df65-434b-9c70-a9e9bf3b31ec.png">

<br/>

##### 여기서 창을 줄이면

<br/>

<img src="https://user-images.githubusercontent.com/39178978/148635557-b0904ba7-1de7-4d20-8548-d90ddbe79d16.png">
