
##### - LineBreak : 줄바꿈을 한다.

<br/>

#XAML
~~~
<Grid>
    <Border BorderBrush="Black" BorderThickness="1" Width="100" Height="100">
        <TextBlock Width="100" Height="100">11111<LineBreak/>22222</TextBlock>
    </Border>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/151999032-9aa3f1e3-a989-4739-b5a4-fa33f103aedb.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

##### - Run : Text내용을 자체 텍스트 컨트롤로 취급할 수 있게 해준다.

<br/>

#XAML
~~~
<Grid>
    <Border BorderBrush="Black" BorderThickness="1" Width="100" Height="100">
        <TextBlock Width="100" Height="100">
            <Run>[</Run>
            <Run Text="{Binding tb1}"></Run>
            <Run>,</Run>
            <Run Text="{Binding tb2}"></Run>
            <Run>]</Run>
        </TextBlock>
    </Border>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/151999752-67c9fc8f-b853-430b-9d50-1f94e4139aa9.png">
