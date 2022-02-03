
##### - ToolTip : 마우스를 올렸을때 나오는 설명창(ToolTip)
  - FrameworkElement의 속성임,따라서 FrameworkElement을 상속받는다면 전부 사용 가능

<br/>

~~~
<Grid>
    <TextBox Width="100" Height="30">
        <TextBox.ToolTip>
            <TextBlock Text="숫자를 입력하세요"/>
        </TextBox.ToolTip>
    </TextBox>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152283585-98284fcf-ae1c-48b8-b6d9-2ba1f978d815.png">
