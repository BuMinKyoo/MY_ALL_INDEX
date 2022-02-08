
<br/><br/>

##### - 내부적인 부분에 대한 상세한 설명은 아직 공부가 더 필요한듯하다..단순하게만 적고 넘어가자.
- xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" // Name을 사용하게 해주는것  
각각의 자료의 프로퍼티

- xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" // x:Name을 사용하게 해주는것  
외부에서 Name이라는 프로퍼티에 복사를 해줌, 외부에서 관리하는 코드

- 모든 상황에서 x:Name을 사용 할 수 있다고 한다.

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

##### - ResizeMode="NoResize"를 사용하면 Window창의 가로,세로 길이를 임의로 조절할 수 없게 만든다.

#XAML
~~~
Title="MainWindow" ResizeMode="NoResize"
~~~


### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

##### - SizeToContent="WidthAndHeight"를 사용하면 윈도우창을 컨텐트 내용대로 자동으로 조절해 준다.

#XAML
~~~
Title="MainWindow" SizeToContent="WidthAndHeight"
~~~

시작전 윈도우 크기 창  
<img src="https://user-images.githubusercontent.com/39178978/151296985-e28ec50f-68fc-4a0e-8223-fc34891b3c44.png">

실행시 윈도우 창을 자동으로 맞게 조절해준다  
<img src="https://user-images.githubusercontent.com/39178978/151297018-36f45f0d-3283-42df-96a8-c6133b93d9e0.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

##### - Window종료하기
  - Activated : 윈도우가 시작되었을때 이벤트 발생
  - Closing : 윈도우를 닫을때 이벤트 발생(메인 윈도우만)

***

<br/>

#XAML
~~~
<Window x:Class="WpfApp5.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp5"
        mc:Ignorable="d"
        Title="MainWindow" Height="250" Width="250" Activated="Window_Activated" Closing="Window_Closing">
    <Grid>
        <TextBlock x:Name="tb" Width="100" Height="30"/>
    </Grid>
</Window>
~~~

<br/>

#XAML.cs
~~~
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }

    private void Window_Activated(object sender, EventArgs e)
    {
        tb.Text = "윈도우 실행";
    }

    private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)
    {
        if(MessageBox.Show("정말로 종료하시겠습니까?", "종료확인", MessageBoxButton.YesNo) == MessageBoxResult.No)
        {
            e.Cancel = true;
        }
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152980847-62799127-4b55-464d-8853-bb93d72697a1.png">

<br/>

실행시 Activated="Window_Activated"가 실행되어, 텍스트 박스에 글자가 담기고, X를 눌러 종료시 메세지 박스가 뜨고. 아니요를 누르면 종료가 되지 않음.




