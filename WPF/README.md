###### Top

- [WPF class hierarchy](https://github.com/BuMinKyoo/TIL/blob/main/WPF/WPF%20class%20hierarchy.png)

- [WPF로의시작...](#wpf의-시작)
- [Application](#application)
  - [ShutdownMode](#shutdownmode)
  - [Event(Startup, Activated, Deactivated, Exit)](#eventstartup-activated-deactivated-exit)
- [Window](#window)
  - [xmlns](#xmlns)
  - [ResizeMode](#resizemode)
  - [SizeToContent](#sizetocontent)
  - [Window이벤트(Activated, Deactivated, Closing)](#window이벤트activated-deactivated-closing)
- [다양한 참조법](#다양한-참조법)
  - [xaml.cs에 있는 Class를 xaml안에 객체로 불러오기](#xamlcs에-있는-class를-xaml안에-객체로-불러오기)
  - [같은 프로젝트 cs에 있는 Class를 xaml안에 객체로 불러오기](#같은-프로젝트-cs에-있는-class를-xaml안에-객체로-불러오기)
  - [같은 프로젝트에서 '리소스 사전' 불러오기](#같은-프로젝트에서-리소스-사전-불러오기)
  - [같은 프로젝트에서 '리소스 사전' 불러오기(2) NewFolder라는 폴더 안에 들어 있는 경우](#같은-프로젝트에서-리소스-사전-불러오기2-newfolder라는-폴더-안에-들어-있는-경우)
  - [같은 프로젝트에서 'UserControl(사용자 정의 컨트롤)' 불러오기](#같은-프로젝트에서-usercontrol사용자-정의-컨트롤-불러오기)
  - [다른 프로젝트의 네임스페이스 참조하기](#다른-프로젝트의-네임스페이스-참조하기)
  - [다른 프로젝트에서 '리소스사전' 참조하기](#다른-프로젝트에서-리소스사전-참조하기)

***
***

<br/>

## WPF의 시작...

<br/>

#Mainwindow.xaml.cs
~~~c#
using System.Windows;
using System;

namespace WpfApp4
{
    public class Test
    {
        [STAThread]
        static void Main()
        {
            Application app = new Application();

            //윈도우 화면 띄우기
            Window win = new Window();
            win.Title = "MyfirstTile";
            win.Show();

            //Application실행
            app.Run();

            
        }
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/154697172-f29df162-3c9e-4c45-b83d-c256ce2cb204.png">

<br/>

  - 가장 기본적인 형태로 WPF창을 띄워 보았다. 이처럼 WPF의 네임 스페이스 들은 System.Windows.Controls, System.Windows.Input등 System.Windows로 시작된다.
  - 윈폼(Windows Forms)관련 네임 스페이스도 이와 같이 System.Windows.Forms로 부터 시작된다.

  - WPF를 사용 하기 위해서는 STAThread(Single Threaded Apartmennt)여야 한다. 이는 COM형식을 이용하는 경우에 해당 응용 프로그램이 STAThread(Single Threaded Apartmennt)모델로 설정 되어야 하기 때문이다.(즉 COM이라는 객체를 사용하기 위해서 STAThread(Single Threaded Apartmennt)모델로 설정하는것)
    - 그럼 COM이란 무엇인가? : COM(Component Object Model)은 마이크로소프트가 개발한 소프트웨어 구성 요소들의 응용 프로그램 이진 인터페이스 표준이다.
    - 내가 이해한 대로 설명해 보자면, COM은 객체로써 어떤 기능을 가지고 있는데, COM과 COM을 어떤 약속한 표준대로 만들어서, 공유하고 통합해서 사용한다. 이는, 개발을 할때도 COM을 
사용 하지 않는 다면 한명의 개발자가 개발을 할때, 그것을 바턴 터치 처럼 이어 받아야 하는 상황이 생기지만, COM을 사용 한다면 누구는 저 기능 , 누구는 저 기능으로 나누어 개발한 후에
그것을 통합해서 개발해 나갈 수 있다는것. 다른 비유로 보자면 각각의 다른 회사에서 만든 CD플레이어, 라디오, 비디오 플레이어를 하나의 기계에 통합한다는 느낌...?
    - 그래서 아무튼 WPF는 COM을 사용하여 개발했기 때문에(?)(이게 맞나..?) STAThread(Single Threaded Apartmennt)에서 실행해야 한다는것
    
<br/><br/>

여기서 의문은, WPF프로젝트를 시작하면 Main()함수도 없는 데다가, STAThread도 보이지 않는다...  
  - 모든 파일 표시 클릭 - obj - Debug - net6.0-windows 로 가면 App.g.i.cs가 보인다

<img src="https://user-images.githubusercontent.com/39178978/154711833-721f6d5e-aa7c-4230-b2aa-1c5ed14ecf0c.png">

<br/>

  - 프로젝트를 실행하면 App.g.cs가 생기는 것을 볼 수 있다.

<img src="https://user-images.githubusercontent.com/39178978/154712179-8fbe35dc-802f-4b4c-9006-9ce9cf61ff77.png">

그 클래스 파일을 열면, 아래쪽에

~~~c#
[System.STAThreadAttribute()]
[System.Diagnostics.DebuggerNonUserCodeAttribute()]
[System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "6.0.2.0")]
public static void Main() {
    WpfApp5.App app = new WpfApp5.App();
    app.InitializeComponent();
    app.Run();
}
~~~

이것을 볼 수 있다. [System.STAThreadAttribute()], 그리고 Main()

###### [WPF로의시작...](#wpf의-시작)
###### [Top](#top)

<br/>

***

<br/>

# Application

## ShutdownMode
  - ShutdownMode="OnExplicitShutdown" : 종료를 아예 말해야함
  - ShutdownMode="OnLastWindowClose" : 위도우창을 전부 종료해야함
  - ShutdownMode="OnMainWindowClose" : 메인 윈도우 창을 종료하면 됨

<br/>

  - Application.Current : Application을 시작하는 메인Window는 한개 뿐이기 때문에, 어디서든 메인Window에 접근하기 위해서 사용 할 수 있다.

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - ShutdownMode="OnExplicitShutdown"

#App.xaml
~~~c#
<Application x:Class="WpfApp5.App"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:local="clr-namespace:WpfApp5"
             StartupUri="MainWindow.xaml" ShutdownMode="OnExplicitShutdown">
    <Application.Resources>
         
    </Application.Resources>
</Application>
~~~

<br/>

#MainWindow.xaml
~~~c#
<Grid>
    <Button x:Name="Exit_btn" Width="100" Height="30" Content="종료" Click="Exit_btn_Click"/>
</Grid>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }

    private void Exit_btn_Click(object sender, RoutedEventArgs e)
    {
        Application.Current.Shutdown();
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152976639-38a061b5-0c32-4703-ba91-5ac121fbaeff.png">
일반적으로는 window창을 닫는 것만으로 WPF가 종료 되지만, ShutdownMode="OnExplicitShutdown"로 해놓으면 종료 되지 않음. 종료 커멘드를 실행 해야 종료가됨. 버튼에
연결된 Application.Current.Shutdown();을 실행 함으로써 종료가 된다.

<br/>

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

  - ShutdownMode="OnLastWindowClose"

#App.xaml
~~~c#
<Application x:Class="WpfApp5.App"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:local="clr-namespace:WpfApp5"
             StartupUri="MainWindow.xaml" ShutdownMode="OnLastWindowClose">
    <Application.Resources>
         
    </Application.Resources>
</Application>
~~~

<br/>

#MainWindow.xaml
~~~c#
<Grid>
    <Button x:Name="Window_add_btn" Width="100" Height="30" Content="화면생성" Click="Window_add_btn_Click"/>
</Grid>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }

    int winNum = 0;
    private void Window_add_btn_Click(object sender, RoutedEventArgs e)
    {
        Window win = new Window();
        winNum++;
        win.Title = winNum.ToString();
        win.Width = Application.Current.MainWindow.Width;
        win.Height = Application.Current.MainWindow.Height;
        win.Show();

    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152978551-af346a46-9b48-45a9-a9c4-55c80134d53c.png">
여러window창을 만들었을 경우 전부다 끄지 않는 이상 Application이 종료되지 않는다.

<br/>

여기서 ShutdownMode="OnMainWindowClose"모드로 한다면, 여러 Window창을 만들었어도, 메인Window창을 끄게 되면 Application이 종료가 된다.

###### [Application](#application)
###### [Top](#top)

<br/>
<br/>

## Event(Startup, Activated, Deactivated, Exit)
  - Startup : Application이 시작하면서 이벤트 발생, 보통 UI진입전에 로그인을 해야 하는 경유에 적합 하다고 함
  - Activated : Application이 가지고 있는 어떤 Window라도 포커스 될 경우에 발생
  - Deactivated : Application이 가지고 있는 어떤 Window라도 포커스 잃으면 발생
  - Exit : Application종료시 발생

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#App.xaml
~~~c#
<Application x:Class="WpfApp20.App"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             StartupUri="MainWindow.xaml"
             Startup="Application_Startup"
             Activated="Application_Activated"
             Deactivated="Application_Deactivated"
             Exit="Application_Exit"
             ShutdownMode="OnLastWindowClose">
    <Application.Resources>
         
    </Application.Resources>
</Application>
~~~

<br/>

#App.cs
~~~c#
public partial class App : Application
{
    private void Application_Startup(object sender, StartupEventArgs e)
    {
        Debug.WriteLine("Startup");
    }

    private void Application_Activated(object sender, EventArgs e)
    {
        Debug.WriteLine("Activated");
    }

    private void Application_Deactivated(object sender, EventArgs e)
    {
        Debug.WriteLine("Deactivated");
    }

    private void Application_Exit(object sender, ExitEventArgs e)
    {
        Debug.WriteLine("Exit");
    }
}
~~~

<br/>

#Debug창
~~~
Startup
Activated
Deactivated
Exit
~~~

###### [Application](#application)
###### [Top](#top)

<br/>

***

<br/>

# Window

## xmlns
##### - 내부적인 부분에 대한 상세한 설명은 아직 공부가 더 필요한듯하다..단순하게만 적고 넘어가자.
  - xmlns는 xml namespace의 줄임말이고, URI로 네임스페이스 이름을 정의한 형태이다.

- xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
사용자 인터페이스를 만드는데 WPF의 모든 클래스 들이 들어 있고, 네임 스페이스 접두사가 없기 때문에 문서 전체에 적용되는 네임 스페이스

- xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
XAML의 네임 스페이스이고, 다양한 XAML유틸리티 기능을 포함하고 있는 네임 스페이스 이다. 접두사는 X로 매핑된다.

###### [Window](#window)
###### [Top](#top)

<br/>
<br/>

## ResizeMode
##### - ResizeMode="NoResize"를 사용하면 Window창의 가로,세로 길이를 임의로 조절할 수 없게 만든다.

#MainWindow.XAML
~~~
Title="MainWindow" ResizeMode="NoResize"
~~~

###### [Window](#window)
###### [Top](#top)

<br/>
<br/>

## SizeToContent
##### - SizeToContent="WidthAndHeight"를 사용하면 윈도우창을 컨텐트 내용대로 자동으로 조절해 준다.

#MainWindow.XAML
~~~
Title="MainWindow" SizeToContent="WidthAndHeight"
~~~

시작전 윈도우 크기 창  
<img src="https://user-images.githubusercontent.com/39178978/151296985-e28ec50f-68fc-4a0e-8223-fc34891b3c44.png">

실행시 윈도우 창을 자동으로 맞게 조절해준다  
<img src="https://user-images.githubusercontent.com/39178978/151297018-36f45f0d-3283-42df-96a8-c6133b93d9e0.png">

###### [Window](#window)
###### [Top](#top)

<br/>
<br/>

## Window이벤트(Activated, Deactivated, Closing)
  - Activated : 메인 윈도우가 포커스 되었을때 발생
  - Deactivated : 메인 윈도우가 포커스 되지 않았을 때 발생
  - Closing : 메인 윈도우를 닫을때 이벤트 발생

#### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/>

#MainWindow.XAML
~~~c#
<Window x:Class="WpfApp20.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="MainWindow" Height="300" Width="300" Activated="Window_Activated"
        Deactivated="Window_Deactivated"
        Closing="Window_Closing">
    <Grid>
        
    </Grid>
</Window>
~~~

<br/>

#MainWindow.XAML.cs
~~~c#
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }

    private void Window_Activated(object sender, EventArgs e)
    {
        Debug.WriteLine("Activated");
    }

    private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)
    {
        if (MessageBox.Show("정말로 종료하시겠습니까?", "종료확인", MessageBoxButton.YesNo) == MessageBoxResult.No)
        {
            e.Cancel = true;
        }
    }

    private void Window_Deactivated(object sender, EventArgs e)
    {
        Debug.WriteLine("Deactivated");
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/153856831-97c5f65f-b0be-43d6-a5cc-ac26fe8bbe1e.png">

<br/>

실행시 X를 눌러 종료시 메세지 박스가 뜨고. 아니요를 누르면 종료가 되지 않음.

###### [Window](#window)
###### [Top](#top)

<br/>

***

<br/>

# 다양한 참조법
  - Class를 참조할 경우 일반적으로 클래스 라이브 러리의 .NET Standard 프레임 워크를 이용하여 참조한다(이유 : .NET Framework, .NET Core, Xamarin 전부 호환 되기 때문에)

## xaml.cs에 있는 Class를 xaml안에 객체로 불러오기
  - xmlns:(접두사)="clr-namespace:(namespace명)"를 사용하여 매핑하기

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp16.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:local="clr-namespace:WpfApp16"
        Title="MainWindow" Height="300" Width="300">
    <Window.Resources>
        <local:Car x:Key="car"/>
    </Window.Resources>
    <Grid>
        <Button Width="100" Height="30" Content="{StaticResource car}"/>
    </Grid>
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }
}

public class Car
{

}
~~~

<img src="https://user-images.githubusercontent.com/39178978/153410392-b60f0b35-9235-41f1-a58d-aa738a8d9496.png">

###### [다양한 참조법](#다양한-참조법)
###### [Top](#top)

<br/>
<br/>

## 같은 프로젝트 cs에 있는 Class를 xaml안에 객체로 불러오기
  - xmlns:(접두사)="clr-namespace:(namespace명)"를 사용하여 매핑하기

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp16.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:local="clr-namespace:WpfApp16"
        Title="MainWindow" Height="300" Width="300">
    <Window.Resources>
        <local:Car x:Key="car"/>
    </Window.Resources>
    <Grid>
        <Button Width="100" Height="30" Content="{StaticResource car}"/>
    </Grid>
</Window>
~~~

<br/>

#Class1.cs
~~~c#
public class Car
{
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/153411052-c2b6b3af-8b33-4e01-a021-5e314a16d363.png">

<br/>

<img src="https://user-images.githubusercontent.com/39178978/153410392-b60f0b35-9235-41f1-a58d-aa738a8d9496.png">

###### [다양한 참조법](#다양한-참조법)
###### [Top](#top)

<br/>
<br/>

## 같은 프로젝트에서 '리소스 사전' 불러오기

~~~c#
<ResourceDictionary>
    <ResourceDictionary.MergedDictionaries>
        <ResourceDictionary Source="(경로/리소스사전명)"/>
    </ResourceDictionary.MergedDictionaries>
</ResourceDictionary>
~~~

을 이용하여 리소스 사전을 불러올 수 있음

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp16.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="MainWindow" Height="300" Width="300">
    <Window.Resources>
        <ResourceDictionary>
            <ResourceDictionary.MergedDictionaries>
                <ResourceDictionary Source="Dictionary1.xaml"/>
            </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
    </Window.Resources>
    <Grid>
        <Button Width="100" Height="30" Style="{StaticResource buttonMade}"/>
    </Grid>
</Window>
~~~

<br/>

#Dictionary1.xaml
~~~c#
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">

    <Style x:Key="buttonMade" TargetType="Button">
        <Setter Property="Background" Value="Green"/>
    </Style>
</ResourceDictionary>
~~~

<img src="https://user-images.githubusercontent.com/39178978/153413299-1734d355-5add-48a2-9a08-86d3c9916d19.png">

<br/>

<img src="https://user-images.githubusercontent.com/39178978/153413366-74222a7b-96e6-45f3-b9de-bcfd0b7aae86.png">

###### [다양한 참조법](#다양한-참조법)
###### [Top](#top)

<br/>
<br/>

## 같은 프로젝트에서 '리소스 사전' 불러오기(2) NewFolder라는 폴더 안에 들어 있는 경우
  - 위에 것으로 부터 이어 참고해서 보면, "Dictionary1.xaml" => "NewFolder/Dictionary1.xaml"이렇게 참조 했음을 알 수 있다.

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp16.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="MainWindow" Height="300" Width="300">
    <Window.Resources>
        <ResourceDictionary>
            <ResourceDictionary.MergedDictionaries>
                <ResourceDictionary Source="NewFolder/Dictionary1.xaml"/>
            </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
    </Window.Resources>
    <Grid>
        <Button Width="100" Height="30" Style="{StaticResource buttonMade}"/>
    </Grid>
</Window>
~~~
로 이용 하면 된다.

###### [다양한 참조법](#다양한-참조법)
###### [Top](#top)

<br/>
<br/>

## 같은 프로젝트에서 'UserControl(사용자 정의 컨트롤)' 불러오기

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp27.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:local="clr-namespace:WpfApp27"
        Title="MainWindow" Height="450" Width="800">
    <Grid>
        <local:UserControl1/>
    </Grid>
</Window>
~~~

<br/>

#UserControl1.xaml
~~~c#
<UserControl x:Class="WpfApp27.UserControl1"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             Height="200" Width="200">
    <Grid>
        <Rectangle Width="100" Height="100" Fill="red"/>
    </Grid>
</UserControl>
~~~

<img src="https://user-images.githubusercontent.com/39178978/154071023-dc86e23e-7446-4666-b22b-5640a0088549.png">

<br/>

<img src="https://user-images.githubusercontent.com/39178978/154070852-06c0695f-deae-435b-be8f-961da99fe395.png">

###### [다양한 참조법](#다양한-참조법)
###### [Top](#top)

<br/>
<br/>

## 다른 프로젝트의 네임스페이스 참조하기
  - CLR네임 스페이스 참조
  - XML네임 스페이스 참조
 
 <br>
 
   - 사전준비로 종속성, 참조 연결을 먼저 해준다.
     - .NET 6.0에서는 '종속성'에서 마우스 우클릭 -> 프로젝트 참조 추가
     - .NET Framework 4.7.2에서는 '참조'에서 마우스 우클릭 -> 참조 추가
<img src="https://user-images.githubusercontent.com/39178978/153415481-826baaf5-1446-4596-a8cf-be1d3d81fca6.png">

<br/>

<img src="https://user-images.githubusercontent.com/39178978/153415583-7f5efdb4-3ce4-4a3a-8585-56646de09225.png">

<br/>

<br/>

<img src="https://user-images.githubusercontent.com/39178978/153415865-36d0e705-c45c-40fb-8fb8-5a7037140a5b.png">

<br/>

<img src="https://user-images.githubusercontent.com/39178978/153415903-f7ed0b43-d9ea-4e59-a1d5-5262ac3c1665.png">

그 후에는 뒤를 따르면 된다.
 
<br/>

  - CLR네임 스페이스 참조
    - xmlns:reference_project="clr-namespace:Reference_project;assembly=Reference_project" 이용한다
    - xmlns:(접두사)="clr-namespace:(참조namespace명.경로);assembly=(namespace명)"
    - 가령, NewFolder라는 폴더 안에 .cs의 class를 불러오려면, xmlns:reference_project="clr-namespace:Reference_project.NewFolder;assembly=Reference_project" 를 사용해야함


#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp16.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:reference_project="clr-namespace:Reference_project;assembly=Reference_project"
        Title="MainWindow" Height="300" Width="300">
    <Window.Resources>
        <reference_project:Car x:Key="reference_project_car"/>
    </Window.Resources>
    <Grid>
        <Button Width="100" Height="30" Content="{StaticResource reference_project_car}"/>
    </Grid>
</Window>
~~~

<br/>

#Reference_project.xaml.cs
~~~c#
public class Car
{

}
~~~

<img src="https://user-images.githubusercontent.com/39178978/153417714-d042ca1b-9720-4e59-bac5-a613fc233078.png">

<br/>

<img src="https://user-images.githubusercontent.com/39178978/153417813-68f3e880-56c2-45d9-beb3-76a4d105ee7b.png">

###### [다양한 참조법](#다양한-참조법)
###### [Top](#top)

<br/>
<br/>

## 다른 프로젝트에서 '리소스사전' 참조하기
 
<br/>

~~~c#
<ResourceDictionary>
  <ResourceDictionary.MergedDictionaries>
      <ResourceDictionary Source="pack://application:,,,/(참조namespace명);component/(경로/리소스사전명)"/>
  </ResourceDictionary.MergedDictionaries>
</ResourceDictionary>
~~~
을 이용하면 된다

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp16.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="MainWindow" Height="300" Width="300">
    <Window.Resources>
        <ResourceDictionary>
            <ResourceDictionary.MergedDictionaries>
                <ResourceDictionary Source="pack://application:,,,/Reference_project;component/Dictionary1.xaml"/>
            </ResourceDictionary.MergedDictionaries>
            </ResourceDictionary>
    </Window.Resources>
    <Grid>
        <Button Width="100" Height="30" Content="{StaticResource buttonMade}"/>
    </Grid>
</Window>
~~~

<br/>

#Reference_project의 Dictionary1.xaml
~~~c#
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">

    <Style x:Key="buttonMade" TargetType="Button">
        <Setter Property="Background" Value="Green"/>
    </Style>
    
</ResourceDictionary>
~~~

<img src="https://user-images.githubusercontent.com/39178978/153421493-311a3664-f837-4c2d-82c6-3b2d6ca82b89.png">

<br/>

<img src="https://user-images.githubusercontent.com/39178978/153421558-3042dbb3-c101-4a40-b134-7c8852b86186.png">

###### [다양한 참조법](#다양한-참조법)
###### [Top](#top)
