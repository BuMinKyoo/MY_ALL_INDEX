
##### - ProgressBar
  - Minimum : ProgressBar의 최소값 설정
  - Maximum : ProgressBar의 최대값 설정
  - IsIndeterminate : 사용자에게 프로그램이 중단되지 않았다는 것을 알려줄 수 있다(ProgressBar가 계속 돌아감)

<br/>

~~~
<StackPanel Orientation="Horizontal" HorizontalAlignment="Center">
    <TextBlock Text="로딩중" VerticalAlignment="Center" Margin="0 0 10 0"/>
    <ProgressBar Width="100" Height="30" Value="30"/>
</StackPanel>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152511866-40517ab8-2852-450b-b8a8-ac440eb24a36.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - IsIndeterminate가 true일 때

~~~
<StackPanel Orientation="Horizontal" HorizontalAlignment="Center">
    <TextBlock Text="로딩중" VerticalAlignment="Center" Margin="0 0 10 0"/>
    <ProgressBar Width="100" Height="30" Value="30" IsIndeterminate="True"/>
</StackPanel>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152512413-748e0114-3c63-4fbd-859c-b79482c9efe3.png">
