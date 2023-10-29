![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/b17ad345-f716-48a6-995f-aae05b88ffdc)###### Top

- [WPF class hierarchy](https://github.com/BuMinKyoo/MY_ALL_INDEX/blob/main/%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC%2C%20%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD/WPF/WPF%20class%20hierarchy.png)

<br/>

- [WPF로의시작...](#wpf의-시작)

<br/>

- [Application](#application)
  - [ShutdownMode](#shutdownmode)
  - [Event(Startup, Activated, Deactivated, Exit)](#eventstartup-activated-deactivated-exit)
  - [StartupUri](#startupuri)

<br/>

- [Window](#window)
  - [xmlns](#xmlns)
  - [ResizeMode](#resizemode)
  - [SizeToContent](#sizetocontent)
  - [Window이벤트(Activated, Deactivated, Closing)](#window이벤트activated-deactivated-closing)

<br/>

- [컨트롤 활용하기](#컨트롤-활용하기)
  - [사용자 정의 컨트롤(UserControl)](#사용자-정의-컨트롤usercontrol)
  - [사용자 지정 컨트롤(CustomControl)](#사용자-지정-컨트롤customcontrol)
  - [같은 프로젝트에서 '리소스 사전' 불러오기](#같은-프로젝트에서-리소스-사전-불러오기)
  - [같은 프로젝트에서 '리소스 사전' 불러오기(2) NewFolder라는 폴더 안에 들어 있는 경우](#같은-프로젝트에서-리소스-사전-불러오기2-newfolder라는-폴더-안에-들어-있는-경우)
  - [다른 프로젝트에서 '리소스사전' 참조하기](#다른-프로젝트에서-리소스사전-참조하기)
  - ['리소스사전' 활용하기(ContentPresenter,ItemsPresenter)](#리소스사전-활용하기contentpresenteritemspresenter)

<br/>

- [다른 프로젝트의 네임스페이스 참조하기](#다른-프로젝트의-네임스페이스-참조하기)

<br/>

- [Style](#style)
  - [Style의 key값으로 각각의 컨트롤에 Style을 적용](#style의-key값으로-각각의-컨트롤에-style을-적용)
    - Style x:Key="(사용할 name)" TargetType="(적용시킬 컨트롤)"
  - [TargetType속성으로 적용시킬 컨트롤 지정](#targettype속성으로-적용시킬-컨트롤-지정)
    - Style TargetType="{x:Type 적용시킬 컨트롤}"
  - [각각의 자식 컨트롤에 Style 적용하기](#각각의-자식-컨트롤에-style-적용하기)
  - [BasedOn을 이용한 Style상속](#basedon을-이용한-style상속)

<br/>

- [Window.Resources](#windowresources)
  - [DataTemplate 사용하기](#datatemplate사용하기)
  - [다른 xaml파일을 DataContext로 출력하기](#다른-xaml파일을-datacontext로-출력하기)
  - [ItemsControl의 ItemsSource로 DataTemplate출력하기](#itemscontrol의-itemssource로-datatemplate출력하기)
  - [ContentControl의 Content로 DataTemplate출력하기](#contentcontrol의-content로-datatemplate출력하기)

<br/>

- [Border](#border)
  - BorderBrush, BorderThickness, CornerRadius
- [TextBlock](#textblock)
  - [Run](#run)
- [Popup](#popup)
  - Placement, HorizontalOffset, VerticalOffset, AllowsTransparency, IsOpen
  - AllowsTransparency(False일때)
  - AllowsTransparency(True일때)
- [Panel](#panel)
  - [Grid](#grid)
    - 다양한 요소안에 Grid를 만들기
    - IsSharedSizeScope속성을 이용해 Grid의 폭과 넓이 맟주기
  - [Canvas](#canvas)
  - [DockPanel](#dockpanel)
  - [StackPanel](#stackpanel)
    - Orientation="Horizontal"
  - [WrapPanel](#wrappanel)
  - [Viewbox](#viewbox)
    - Stretch, StretchDirection
  - [UniformGrid](#uniformgrid)
    - Columns,Rows지정, ClipToBounds, FirstColumn, FlowDirection
- [Separator](#separator)
- [PasswordBox](#passwordbox)
- [Thumb](#thumb)
  - [GridSplitter](#gridsplitter)
    - DragStarted. DragCompleted, DragDelta, IsDragging, CancelDrag
- [RangeBase](#rangebase)
  - [ProgressBar](#progressbar)
    - IsIndeterminate
  - [Slider](#slider)
    - ValueChanged이벤트로 R,G,B값 표현하기
    - ValueChanged이벤트로 R,G,B,A값 표현하기
    - Orientation속성
    - TickPlacement속성(눈금표시)
- [TextBox](#textbox)
  - AcceptsReturn, AcceptsTab, VerticalScrollBarVisibility, MaxLength, CharacterCasing
  - TextChanged이벤트, SelectionChanged이벤트
  - SelectedText, CaretIndex, SelectionStart, SelectionLength, Select(1,4), SelectAllAll()
- [ScrollViewer](#scrollviewer)
  - HorizontalScrollBarVisibility, VerticalScrollBarVisibility(visible, Hidden, Auto, Disabled)
  - FrameworkElement를 이용해 ScrollViewer의 시스템 whith사이즈를 불러오기
- [ToolTip](#tooltip)
- [RepeatButton](#repeatbutton)
- [HeaderedContentControl](#headeredcontentcontrol)
  - [Expander](#expander)
    - Header를 따로 빼서 지정가능
  - [GroupBox](#groupbox)
    - FontFamily
- [Menu](#menu)
  - MenuItem, Header, _(단축키), InputGestureText, IsCheckable, SubmenuOpened
  - MenuItem에 아이콘 넣기
- [ContextMenu](#contextmenu)
- [Selector](#selector)
  - [TabControl](#tabcontrol)
  - [ComboBox](#combobox)
    - IsEditable속성
    - ObservableCollection을 이용한 ComboBox의 ComboBoxItem추가, ComboBoxItem의 Content출력
    - 각각의 ComboBoxitem을 분리해서 나타나게 하기
  - [ListBox](#listbox)
    - ListBoxItem목록에서 Content출력하기
    - ListBox바인딩 및 MessageBox로 출력하기
    - ItemsSource
  - [ListView](#listview)
    - SelectedItem
    - SelectedItem에 대한 Content만 뽑아내기
    - SelectedIndex
    - ListView헤더 크기를 비율로 조절하기(Binding활용)
    - DisplayMemberBinding
  - [ItemsControl](#itemscontrol)
    - [ItemsControl 을 class를 xml로 불러오기](#itemscontrol-을-class를-xml로-불러오기)
    - [ItemsControl 을 class를 xml로 불러오기2](#itemscontrol-을-class를-xml로-불러오기2)
    - [ItemsControl을 Style적용시키기](#itemscontrol을-style적용시키기)
  - [트리거](#트리거)
    - [Trigger](#trigger)
    - [애니메이션](#애니메이션)
    - [MultiTrigger](#multitrigger)
    - [DataTrigger](#datatrigger)
  - [ControlTemplate](#controltemplate)
    - [버튼 모양 바꾸기](#버튼-모양-바꾸기)
  - [Converter](#Converter)

<br/>

- [데이터 연결하기](#데이터-연결하기)
  - [자기 자신 class](#자기-자신-class)
  - [다른 class](#다른-class)
  - [xaml_Window.DataContext](#xaml_windowdatacontext)
  - [xaml_Window.DataContext_다른프로젝트](#xaml_windowdatacontext_다른프로젝트)
- [ObservableCollection](#observablecollection)
- [INotifyPropertyChanged](#inotifypropertychanged)
- [Button + Command](#button--command)
- [Button + Command다른클래스에서 사용](#button--command다른클래스에서-사용)
- [Workspace를 통한 UserControl끼리의 값 전달](#workspace를-통한-usercontrol끼리의-값-전달)
- [ContentControl을 활용한 UserControl끼리의 값 전달](#contentcontrol을-활용한-usercontrol끼리의-값-전달)
    
<br/>

- [클래스 라이브러리](#클래스-라이브러리)

<br/>

- [Http,Https통신](#httphttps통신)
- [JsonParsing](#jsonparsing)
  - [JsonParsing하기](#jsonparsing하기)
  - [Json직렬화하기](#json직렬화하기)
- [DB연결](#db연결)

<br/>

- [Thread](#Thread)
  - [Thread,Task](#threadtask)
  - [다른 Thread에서 UI접근](#다른-thread에서-ui접근)

<br/>

- 개발연습
  - [공공API 내용을 xml파일로 불러와서 ComboBox와 List로 뿌려주기(Public-API)]_Repository링크(https://github.com/BuMinKyoo/Public-API_XML)
  - [공공API 내용을 json파일로 불러와서 ComboBox와 List로 뿌려주기(Public-API)]_Repository링크(https://github.com/BuMinKyoo/Public-API_JSON)
  - [WPFSerialPort]_Repository링크(https://github.com/BuMinKyoo/WPFSerialPort)
  - [소켓 통신 빙고 게임_개발중]__Repository링크(https://github.com/BuMinKyoo/BingGoGame)
  - [WPFHttp]__Repository링크([https://github.com/BuMinKyoo/BingGoGame](https://github.com/BuMinKyoo/WPFHttp))
    
<br/>
<br/>

***

# WPF의 시작...

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
<br/>

***

# Application
  - [ShutdownMode](#shutdownmode)
  - [Event(Startup, Activated, Deactivated, Exit)](#eventstartup-activated-deactivated-exit)
  - [StartupUri](#startupuri)

###### [Application](#application)
###### [Top](#top)

<br/>
<br/>

# ShutdownMode
  - Application.Current : Application을 시작하는 메인Window는 한개 뿐이기 때문에, 어디서든 메인Window에 접근하기 위해서 사용 할 수 있다.

<br/>

  - ShutdownMode="OnExplicitShutdown" : 종료를 아예 말해야함
  - ShutdownMode="OnLastWindowClose" : 위도우창을 전부 종료해야함
  - ShutdownMode="OnMainWindowClose" : 메인 윈도우 창을 종료하면 됨

<br/>
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

# Event(Startup, Activated, Deactivated, Exit)
  - Startup : Application이 시작하면서 이벤트 발생, 보통 UI진입전에 로그인을 해야 하는 경유에 적합 하다고 함
  - Activated : Application이 가지고 있는 어떤 Window라도 포커스 될 경우에 발생
  - Deactivated : Application이 가지고 있는 어떤 Window라도 포커스 잃으면 발생
  - Exit : Application종료시 발생

<br/>
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
<br/>

# StartupUri
  - StartupUri="MainWindow.xaml"
    - StartupUri 를 통해 어떤 xaml이 현재 어플리케이션 프로젝트의 main으로 시작되는지 알 수 있다

<br/>

#App.xaml
~~~c#
<Application x:Class="test1.App"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:local="clr-namespace:test1"
             StartupUri="MainWindow.xaml">
    <Application.Resources>
         
    </Application.Resources>
</Application>
~~~

###### [Application](#application)
###### [Top](#top)

<br/>
<br/>

***

# Window
  - [xmlns](#xmlns)
  - [ResizeMode](#resizemode)
  - [SizeToContent](#sizetocontent)
  - [Window이벤트(Activated, Deactivated, Closing)](#window이벤트activated-deactivated-closing)

###### [Window](#window)
###### [Top](#top)

<br/>
<br/>

# xmlns
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

# ResizeMode
##### - ResizeMode="NoResize"를 사용하면 Window창의 가로,세로 길이를 임의로 조절할 수 없게 만든다.

#MainWindow.XAML
~~~
Title="MainWindow" ResizeMode="NoResize"
~~~

###### [Window](#window)
###### [Top](#top)

<br/>
<br/>

# SizeToContent
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

# Window이벤트(Activated, Deactivated, Closing)
  - Activated : 메인 윈도우가 포커스 되었을때 발생
  - Deactivated : 메인 윈도우가 포커스 되지 않았을 때 발생
  - Closing : 메인 윈도우를 닫을때 이벤트 발생

<br/>
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
<br/>

***

# 컨트롤 활용하기
  - [사용자 정의 컨트롤(UserControl)](#사용자-정의-컨트롤usercontrol)
  - [사용자 지정 컨트롤(CustomControl)](#사용자-지정-컨트롤customcontrol)
  - [같은 프로젝트에서 '리소스 사전' 불러오기](#같은-프로젝트에서-리소스-사전-불러오기)
  - [같은 프로젝트에서 '리소스 사전' 불러오기(2) NewFolder라는 폴더 안에 들어 있는 경우](#같은-프로젝트에서-리소스-사전-불러오기2-newfolder라는-폴더-안에-들어-있는-경우)
  - [다른 프로젝트에서 '리소스사전' 참조하기](#다른-프로젝트에서-리소스사전-참조하기)
  - ['리소스사전' 활용하기(ContentPresenter,ItemsPresenter)](#리소스사전-활용하기contentpresenteritemspresenter)


###### [컨트롤 활용하기](#컨트롤-활용하기)
###### [Top](#top)

<br/>
<br/>

# 사용자 정의 컨트롤(UserControl)
  - 다른 프로젝트에서 사용자 정의 컨트롤을 불러오는것도 방법이 같다. 단지 불러올 프로젝트를 참조한후, xmlns를 등록해서 가져오면 된다

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <Grid>
        <local:UserControl1/>
    </Grid>
</Window>
~~~

<br/>

#UserControl1.xaml
~~~c#
<UserControl x:Class="WpfApp1.UserControl1"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:WpfApp1"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <Grid>
        <Button Width="100" Height="30" Content="qqqqqqq"/>
    </Grid>
</UserControl>
~~~

###### [컨트롤 활용하기](#컨트롤-활용하기)
###### [Top](#top)

<br/>
<br/>

# 사용자 지정 컨트롤(CustomControl)
  - 다른 프로젝트에서 사용자 지정 컨트롤을 불러오는것도 방법이 같다. 단지 불러올 프로젝트를 참조한후, xmlns를 등록해서 가져오면 된다

<br/>

  - 사용자 지정 컨트롤 라이브러리는 Themes폴더가 생기며, Generic.xaml에서 화면을 표현 하게 된다. 만약 CustomControl을 여러개 만든다면 Generic.xaml에서 관리하는 것보다, 리소스 사전을 만들어서 관리하는 것이 더 좋다
    - 이때는 "사용자 지정 컨트롤" 1개에 "리소스 사진"1개를 대응시켜서 만든다
    - TemplateBinding : ControlTemplate안에서 바인딩하기 위해 사용하는것, 현재 템플릿을 적용하는 컨트롤의 값을 참조한다

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <Grid>
        <local:CustomControl1/>
    </Grid>
</Window>
~~~

<br/>

#사용자지정 컨트롤
#CustomControl1.cs
~~~c#
// 원하는 컨트롤을 기본 속성을 가져가기 위해 기본 컨틀로을 상속받는다

using System.Windows;
using System.Windows.Controls;

namespace WpfApp1
{
    public class CustomControl1 : Button
    {
        static CustomControl1()
        {
            DefaultStyleKeyProperty.OverrideMetadata(typeof(CustomControl1), new FrameworkPropertyMetadata(typeof(CustomControl1)));
        }
    }
}
~~~

<br/>

#CustomControl1.xaml
~~~c#
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                    xmlns:MAKE="clr-namespace:WpfApp1">
    <Style TargetType="{x:Type MAKE:CustomControl1}">
        <Setter Property="Background" Value="Blue"/>
        <Setter Property="Width" Value="200"/>
        <Setter Property="Height" Value="35"/>
        <Setter Property="Margin" Value="0"/>
        <Setter Property="Template">
            <Setter.Value>
                <ControlTemplate TargetType="{x:Type MAKE:CustomControl1}">
                    <Border Background="{TemplateBinding Background}"
                            Width="{TemplateBinding Width}">
                        <TextBlock Text="버튼상속 CustomControl"/>
                    </Border>
                </ControlTemplate>
            </Setter.Value>
        </Setter>
    </Style>
</ResourceDictionary>
~~~

<br/>

#Generic.xaml
~~~c#
<ResourceDictionary
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
    <ResourceDictionary.MergedDictionaries>
        <ResourceDictionary Source="/WpfApp1;component/Themes/CustomControl1.xaml"/>
    </ResourceDictionary.MergedDictionaries>
</ResourceDictionary>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/0594fe73-ea53-4518-a9a7-804005516dca)


###### [컨트롤 활용하기](#컨트롤-활용하기)
###### [Top](#top)

<br/>
<br/>

# 같은 프로젝트에서 '리소스 사전' 불러오기

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

###### [컨트롤 활용하기](#컨트롤-활용하기)
###### [Top](#top)

<br/>
<br/>

# 같은 프로젝트에서 '리소스 사전' 불러오기(2) NewFolder라는 폴더 안에 들어 있는 경우
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

###### [컨트롤 활용하기](#컨트롤-활용하기)
###### [Top](#top)

<br/>
<br/>

# 다른 프로젝트에서 '리소스사전' 참조하기
 
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

###### [컨트롤 활용하기](#컨트롤-활용하기)
###### [Top](#top)

<br/>
<br/>

# '리소스사전' 활용하기(ContentPresenter,ItemsPresenter)
  - ControlTemplate안에 있는 값들을 정의하기 위해서는 TemplateBinding을 써서 연결해야 한다. 이것으로 연결하지 않으면 위에 Setter에 속성이 정해져 있더라도 연결되지 않는다. 아래의 코드는 Background만 적용되고 나머지는 적용되지 않는다
  - 현재 아래의 예시들은 리소스사전을 App.xaml에 정의후 불러오고 있다

#DefaultStyle.xaml
~~~c#
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
    <Style x:Key="EmptyButton" TargetType="Button">
        <Setter Property="SnapsToDevicePixels" Value="true" />
        <Setter Property="OverridesDefaultStyle" Value="true" />
        <Setter Property="Cursor" Value="Hand" />
        <Setter Property="Height" Value="30" />
        <Setter Property="Width" Value="100" />
        <Setter Property="ClickMode" Value="Release" />
        <Setter Property="HorizontalContentAlignment" Value="Center" />
        <Setter Property="VerticalContentAlignment" Value="Center" />
        <Setter Property="Background" Value="Blue" />
        <Setter Property="Template">
            <Setter.Value>
                <ControlTemplate TargetType="Button">
                    <Border Background="{TemplateBinding Background}">
                        <TextBlock Text="버튼!!"/>
                    </Border>
                </ControlTemplate>
            </Setter.Value>
        </Setter>
    </Style>
</ResourceDictionary>
~~~

<br/>

  - ContentControl은 내부적으로 전부 ContentPresenter을 가지고 있고, 이것은 데이터를 출력할 자리를 마련해 주는것이다.
  - ContentSource는 ContentPresenter에 출력할 데이터 종류를 말하고, 표시하지 않으면 ContentSource="Content" 기본으로 갖는다

#DefaultStyle.xaml
~~~c#
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
    <Style x:Key="EmptyButton" TargetType="Button">
        <Setter Property="Height" Value="30" />
        <Setter Property="Width" Value="100" />
        <Setter Property="Background" Value="Blue" />
        <Setter Property="Template">
            <Setter.Value>
                <ControlTemplate TargetType="Button">
                    <Border Background="{TemplateBinding Background}"
                            Width="{TemplateBinding Width}"
                            Height="{TemplateBinding Height}">
                    <ContentPresenter Margin="0" HorizontalAlignment="Center" VerticalAlignment="Center" ContentSource="Content"/>
                    </Border>
                </ControlTemplate>
            </Setter.Value>
        </Setter>
    </Style>
</ResourceDictionary>
~~~

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <Grid>
        <Button Style="{StaticResource EmptyButton}" Content="버튼!!"/>
    </Grid>
</Window>
~~~

<br/>

  - 아래와 같이 ContentSource="Height"로 하게 되면(말도 안되는 값이지만..) 해당하는 컨트롤의 Height가 출력된다. ContentSource에는 그 무엇이든 올 수 있는것 같고 ContentPresenter를 두개 세개 데이터를 따로 따로 다른 포맷으로 출력 할 수 있게 해준다

#DefaultStyle.xaml
~~~c#
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
    <Style x:Key="EmptyButton" TargetType="Button">
        <Setter Property="Height" Value="30" />
        <Setter Property="Width" Value="100" />
        <Setter Property="Background" Value="Blue" />
        <Setter Property="Template">
            <Setter.Value>
                <ControlTemplate TargetType="Button">
                    <Border Background="{TemplateBinding Background}"
                            Width="{TemplateBinding Width}"
                            Height="{TemplateBinding Height}">
                        <StackPanel>
                            <ContentPresenter Margin="0" HorizontalAlignment="Center" VerticalAlignment="Center" ContentSource="Height"/>
                            <ContentPresenter Margin="0" HorizontalAlignment="Center" VerticalAlignment="Center" ContentSource="Content"/>
                        </StackPanel>
                    </Border>
                </ControlTemplate>
            </Setter.Value>
        </Setter>
    </Style>
</ResourceDictionary>
~~~

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <Grid>
        <Button Style="{StaticResource EmptyButton}" Content="버튼!!"/>
    </Grid>
</Window>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/088d871a-9dd7-4746-aca5-5ae3a8d436d1)

<br/>

  - ItemsPresenter
    - ContentControl은 ContentPresenter를 사용하여 특정 부분만 외부에서 확장할 수 있도록 설계되는 반면, ItemsControl은 ItemsSource나 TreeViewItem 같은 자식 요소를 ItemsPresenter 요소에 반복적으로 추가하는 방식으로 동작한다
    - ItemsControl 객체에서 파생된 대표적인 컨트롤
      - ComboBox
      - DataGrid
      - ListBox
      - ListView
      - Menu
      - TabControl
      - TreeView
      - TreeViewItem
      - StatusBar
      - ToolBar
      - ContextMenu

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <StackPanel>
        <ComboBox Style="{StaticResource EmptyComboBox}">
            <ComboBoxItem>Item 1</ComboBoxItem>
            <ComboBoxItem>Item 2</ComboBoxItem>
            <ComboBoxItem>Item 3</ComboBoxItem>
        </ComboBox>
        
    </StackPanel>
</Window>
~~~

<br/>

#DefaultStyle.xaml
~~~c#
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
    <Style x:Key="EmptyComboBox" TargetType="ComboBox">
        <Setter Property="Width" Value="100" />
        <Setter Property="Height" Value="30" />
        <Setter Property="Background" Value="Gray" />
        <Setter Property="Template">
            <Setter.Value>
                <ControlTemplate TargetType="ComboBox">
                    <Border Background="{TemplateBinding Background}"
                            Width="{TemplateBinding Width}">
                        <ScrollViewer Height="{TemplateBinding Height}">
                            <ItemsPresenter/>
                        </ScrollViewer>
                    </Border>
                </ControlTemplate>
            </Setter.Value>
        </Setter>
    </Style>
</ResourceDictionary>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/53bdd606-2906-47b0-a4a1-9fe03b469aa7)

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <StackPanel>
        <ComboBox Style="{StaticResource EmptyComboBox}" ItemsSource="{Binding ItemsList}">
        </ComboBox>
        
    </StackPanel>
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
using System.Collections.ObjectModel;
using System.Windows;

namespace WpfApp1
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            this.DataContext = this;

            ItemsList = new ObservableCollection<string>();

            ItemsList.Add("Item 1");
            ItemsList.Add("Item 2");
            ItemsList.Add("Item 3");
            ItemsList.Add("Item 4");

        }

        private ObservableCollection<string> _itemsList;

        public ObservableCollection<string> ItemsList
        {
            get { return _itemsList; }
            set
            {
                if (_itemsList != value)
                {
                    _itemsList = value;
                }
            }
        }
    }
}
~~~

<br/>

#DefaultStyle.xaml
~~~c#
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
    <Style x:Key="EmptyComboBox" TargetType="ComboBox">
        <Setter Property="Width" Value="100" />
        <Setter Property="Height" Value="30" />
        <Setter Property="Background" Value="Gray" />
        <Setter Property="Template">
            <Setter.Value>
                <ControlTemplate TargetType="ComboBox">
                    <Border Background="{TemplateBinding Background}"
                            Width="{TemplateBinding Width}">
                        <StackPanel>
                            <ScrollViewer Height="{TemplateBinding Height}">
                                <ItemsPresenter/>
                            </ScrollViewer>
                        </StackPanel>
                    </Border>
                </ControlTemplate>
            </Setter.Value>
        </Setter>
    </Style>
</ResourceDictionary>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/4c148b53-5e0f-4718-a4f0-2b03e565fec4)

###### [컨트롤 활용하기](#컨트롤-활용하기)
###### [Top](#top)

<br/>
<br/>

***

# 다른 프로젝트의 네임스페이스 참조하기
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

###### [다른 프로젝트의 네임스페이스 참조하기](#다른-프로젝트의-네임스페이스-참조하기)
###### [Top](#top)

<br/>
<br/>

***

# Style
  - 상속 : Object - DispatcherObject - Style
  - Style : 컨트롤 요소들을 미리 정의해 놓고, 사용하는 방법

  - Style적용 방식
    - 정적바인딩 : StaticResource이용 : 코드를 통해서 리소스가 변경되었을 때 참조 항목에 실시간 반영되지 않음(성능면에서는 뛰어남)
    - 동적바인딩 : DynamicResource이용 : 코드를 통해서 리소스가 변경되었을 때 참조 항목에 실시간 반영됨(성능떨어짐)

<br/>

  - [Style의 key값으로 각각의 컨트롤에 Style을 적용](#style의-key값으로-각각의-컨트롤에-style을-적용)
    - Style x:Key="(사용할 name)" TargetType="(적용시킬 컨트롤)"
  - [TargetType속성으로 적용시킬 컨트롤 지정](#targettype속성으로-적용시킬-컨트롤-지정)
    - Style TargetType="{x:Type 적용시킬 컨트롤}"
  - [각각의 자식 컨트롤에 Style 적용하기](#각각의-자식-컨트롤에-style-적용하기)
  - [BasedOn을 이용한 Style상속](#basedon을-이용한-style상속)

###### [Style](#style)
###### [Top](#top)

<br/>
<br/>

 # Style의 key값으로 각각의 컨트롤에 Style을 적용
  - Style x:Key="(사용할 name)" TargetType="(적용시킬 컨트롤)" : Style의 key값으로 각각의 컨트롤에 Style을 적용 시킨다. Style에서 지정한 '적용시킬 컨트롤'요소에 맞게 넣지 않는다면 예외가 발생한다

<br/>

#MainWindow.xaml
~~~c#
<Window.Resources>
    <Style x:Key="buttonMade" TargetType="Button">
        <Setter Property="Background" Value="Green"/>
    </Style>
</Window.Resources>
<Grid>
    <Button Width="100" Height="30" Content="버튼" Style="{StaticResource buttonMade}"/>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/153520278-e0b5509a-6be5-4c02-8952-480d1c4e8751.png">

<br/>
<br/>

###### [Style](#style)
###### [Top](#top)

# TargetType속성으로 적용시킬 컨트롤 지정
  - Style TargetType="{x:Type 적용시킬 컨트롤}" : Style에서 지정한 '적용시킬 컨트롤'에 합당한 컨트롤이 자동으로 Style이 지정된다.

#MainWindow.xaml
~~~c#
<Window.Resources>
    <Style TargetType="{x:Type Button}">
        <Setter Property="Background" Value="Green"/>
    </Style>
</Window.Resources>
<Grid>
    <Button Width="100" Height="30" Content="버튼"/>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/153520278-e0b5509a-6be5-4c02-8952-480d1c4e8751.png">

<br/>
<br/>

###### [Style](#style)
###### [Top](#top)

# 각각의 자식 컨트롤에 Style 적용하기
  - 각각의 컨트롤 안쪽에만 적용하기 위해서는, 적용시킬 컨트롤을 포함하고 있는 상위 컨트롤에 Resources로 적용시키면됨

#MainWindow.xaml
~~~c#
<StackPanel>
    <Button Width="100" Height="30" Content="버튼1"/>
    <Button Width="100" Height="30" Content="버튼2"/>
    <StackPanel>
        <StackPanel.Resources>
            <Style TargetType="{x:Type Button}">
                <Setter Property="Background" Value="Green"/>
            </Style>
        </StackPanel.Resources>
        <Button Width="100" Height="30" Content="버튼3"/>
        <Button Width="100" Height="30" Content="버튼4"/>
    </StackPanel>
</StackPanel>
~~~

<img src="https://user-images.githubusercontent.com/39178978/153521272-6ced1d45-fe90-44fa-aa44-453a75d3bb7a.png">

<br/>
<br/>

###### [Style](#style)
###### [Top](#top)

# BasedOn을 이용한 Style상속

#MainWindow.xaml
~~~c#
<Window.Resources>
    <Style x:Key="buttonMade_basedon" TargetType="Button">
        <Setter Property="Background" Value="Green"/>
    </Style>

    <Style x:Key="buttonMade" TargetType="Button" BasedOn="{StaticResource buttonMade_basedon}">
        <Setter Property="Foreground" Value="White"/>
    </Style>
</Window.Resources>
    
<StackPanel>
    <Button Width="100" Height="30" Content="버튼1" Style="{StaticResource buttonMade}"/>
    <Button Width="100" Height="30" Content="버튼2" Style="{StaticResource buttonMade_basedon}"/>
</StackPanel>
~~~

<img src="https://user-images.githubusercontent.com/39178978/153522477-2d98af56-993f-4ec3-9b60-0a369f38903a.png">

###### [Style](#style)
###### [Top](#top)

<br/>
<br/>

***

# Window.Resources
  - [DataTemplate 사용하기](#datatemplate사용하기)
  - [다른 xaml파일을 DataContext로 출력하기](#다른-xaml파일을-datacontext로-출력하기)
  - [ItemsControl의 ItemsSource로 DataTemplate출력하기](#itemscontrol의-itemssource로-datatemplate출력하기)
  - [ContentControl의 Content로 DataTemplate출력하기](#contentcontrol의-content로-datatemplate출력하기)

###### [Window.Resources](#windowresources)
###### [Top](#top)

<br/>
<br/>

# DataTemplate 사용하기
  - 아래의 코드는 클래스 데이터 자체를 불러왔기 때문에 클래스명을 그대로 출력하게 된다
  - 이는, 내부적으로 ToString()메소드가 설정되어 있기 때문이다

#MainWindow.xaml
~~~c#
<Window x:Class="test1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:test1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="426">

    <Window.Resources>
        <local:Bus x:Key="bus"/>
    </Window.Resources>
    
    <Grid>
        <ContentControl Content="{StaticResource bus}"/>
    </Grid>
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
using System.Windows;

namespace test1
{
    /// <summary>
    /// MainWindow.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
    }

    public class Bus
    {
        public Bus() { }
    }
}
~~~

![20231008_010648](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/7317633f-b9de-4a5f-b602-a003b49639db)

<br/>

  - ToString()메소드 변경하기

#MainWindow.xaml
~~~c#
<Window x:Class="test1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:test1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="426">

    <Window.Resources>
        <local:Bus x:Key="bus"/>
    </Window.Resources>
    
    <Grid>
        <ContentControl Content="{StaticResource bus}"/>
    </Grid>
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
using System.Windows;

namespace test1
{
    /// <summary>
    /// MainWindow.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
    }

    public class Bus
    {
        public Bus() { }

        public string Name { get; set; } = "키키";

        public int Age { get; set; } = 30;

        public override string ToString()
        {
            return $"이름은{Name}이고 나이는{Age}";
        }
    }
}
~~~

![20231008_010801](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/5f87061f-50ce-4ed3-816f-7a071f3db233)

  - 이렇게 ToString() 메소드를 재정의 하여 수정할 수 있지만, 한계가 있기 때문에 DataTemplate를 이용하게 된다

#MainWindow.xaml
~~~c#
<Window x:Class="test1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:test1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="426">

    <Window.Resources>
        <DataTemplate DataType="{x:Type local:Bus}">
            <!--누군가 Bus클래스를 출력하려고하면 여기에 작성한 대로 출력하라 라는 의미-->
        </DataTemplate>
    </Window.Resources>
</Window>
~~~

<br/>

  - DataTemplate 안에서 지정된 대로 출력을 하게 된다

#MainWindow.xaml
~~~c#
<Window x:Class="test1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:test1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="426">

    <Window.Resources>
        <local:Bus x:Key="bus"/>

        <DataTemplate DataType="{x:Type local:Bus}">
            <TextBlock>안녕하세요</TextBlock>
        </DataTemplate>
    </Window.Resources>
    
    <Grid>
        <ContentControl Content="{StaticResource bus}"/>
    </Grid>
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
using System.Windows;

namespace test1
{
    /// <summary>
    /// MainWindow.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
    }

    public class Bus
    {
        public Bus() { }

        public string Name { get; set; } = "키키";

        public int Age { get; set; } = 30;
    }
}
~~~

![20231008_010944](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/7f3f6df6-5add-4a90-a401-faad6faa7c31)

###### [Window.Resources](#windowresources)
###### [Top](#top)

<br/>
<br/>

# 다른 xaml파일을 DataContext로 출력하기

#MainWindow.xaml
~~~c#
<Window x:Class="test1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:test1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="426">

    <Window.Resources>
        <local:Bus x:Key="bus"/>

        <DataTemplate DataType="{x:Type local:Bus}">
            <local:UserControl1/>
        </DataTemplate>
    </Window.Resources>
    
    <Grid>
        <ContentControl Content="{StaticResource bus}"/>
    </Grid>
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
using System.Windows;

namespace test1
{
    /// <summary>
    /// MainWindow.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
    }

    public class Bus
    {
        public Bus() { }

        public string Name { get; set; } = "키키";

        public int Age { get; set; } = 30;
    }
}
~~~

<br/>

#UserControl1.xaml
~~~c#
<UserControl x:Class="test1.UserControl1"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:test1"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <Grid>
        <Button Width="100" Height="100" Content="버튼"/>
    </Grid>
</UserControl>
~~~

![20231008_011056](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/355be125-54c5-45f4-8cbf-4a0a4d865926)

###### [Window.Resources](#windowresources)
###### [Top](#top)

<br/>
<br/>

# ItemsControl의 ItemsSource로 DataTemplate출력하기

#MainWindow.xaml
~~~c#
<Window x:Class="test1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:vm="clr-namespace:Sample.Data;assembly=Sample.Data"
        xmlns:local="clr-namespace:test1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="426">

    <Window.DataContext>
        <vm:MainView/>
    </Window.DataContext>
    
    <Window.Resources>
        <DataTemplate DataType="{x:Type vm:TabHead}">
            <local:UserControl1/>
        </DataTemplate>
    </Window.Resources>
    
    <Grid>
        <ItemsControl ItemsSource="{Binding MenuTab}"/>
    </Grid>
</Window>
~~~

<br/>

#UserControl1.xaml
~~~c#
<UserControl x:Class="test1.UserControl1"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:test1"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <Grid>
        <Button Width="100" Height="100" Content="{Binding MenuCode}"/>
        <TextBlock Text="{Binding Title}"/>
    </Grid>
</UserControl>
~~~

<br/>

#Sample.Data프로젝트
#MainView.cs
~~~c#
using System.Collections.ObjectModel;

namespace Sample.Data
{
    public class MainView
    {
        public MainView()
        {
            MenuTab = new ObservableCollection<TabHead>()
            {
                new TabHead() { Selected = true, MenuCode = "MenuAll", Title = "전체" },
                new TabHead() {  Selected = false, MenuCode = "MenuExtra", Title = "엑스트라" }
            };
        }

        public ObservableCollection<TabHead> _menuTab = null;
        public ObservableCollection<TabHead> MenuTab
        {
            get => _menuTab;
            private set
            {
                _menuTab = value;
            }
        }
    }

}
~~~

<br/>

#Sample.Data프로젝트
#TabHead.cs
~~~c#
namespace Sample.Data
{
    public class TabHead
    {
        bool _selected;
        public bool Selected
        {
            get => _selected;
            set
            {
                _selected = value;
            }
        }

        string _menuCode = null;
        public string MenuCode
        {
            get => _menuCode;
            set
            {
                _menuCode = value;
            }
        }

        string _title = null;
        public string Title
        {
            get => _title;
            set
            {
                _title = value;
            }
        }
    }
}
~~~

![20231008_011234](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/1e86a3df-be4f-407d-b6b9-bfb7352f9e43)

###### [Window.Resources](#windowresources)
###### [Top](#top)

<br/>
<br/>

# ContentControl의 Content로 DataTemplate출력하기

#MainWindow.xaml
~~~c#
<Window x:Class="test1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:vm="clr-namespace:Sample.Data;assembly=Sample.Data"
        xmlns:local="clr-namespace:test1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="426">

    <Window.DataContext>
        <vm:MainView/>
    </Window.DataContext>
    
    <Window.Resources>
        <DataTemplate DataType="{x:Type vm:TabHead}">
            <local:UserControl1/>
        </DataTemplate>
    </Window.Resources>
    
    <Grid>
        <ContentControl Content="{Binding MenuTab}"/>
    </Grid>
</Window>
~~~

<br/>

#UserControl1.xaml
~~~c#
<UserControl x:Class="test1.UserControl1"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:test1"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <Grid>
        <Button Width="100" Height="100" Content="{Binding Id}"/>
        <TextBlock Text="{Binding Pw}"/>
    </Grid>
</UserControl>
~~~

<br/>

#Sample.Data프로젝트
#MainView.cs
~~~c#
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Sample.Data
{
    public class MainView
    {
        public MainView()
        {
            //MenuTab = new List<TabHead>()
            //{
            //    new TabHead(),
            //    new TabHead()
            //};

            //MenuTab.Add(new TabHead());
        }

        public TabHead _menuTab = new TabHead();
        public TabHead MenuTab
        {
            get => _menuTab;
            private set
            {
                _menuTab = value;
            }
        }
    }
}
~~~

<br/>

#Sample.Data프로젝트
#TabHead.cs
~~~c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sample.Data
{
    public class TabHead
    {
        string _Id = "aaa";
        public string Id
        {
            get => _Id;
            set
            {
                _Id = value;
            }
        }


        bool _Pw = false;
        public bool Pw
        {
            get => _Pw;
            set
            {
                _Pw = value;
            }
        }
    }
}
~~~

![20231008_011414](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/c186a110-f493-40c5-b44c-bd6e4c2b9393)

###### [Window.Resources](#windowresources)
###### [Top](#top)

<br/>
<br/>

***

# Border
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Decorator
  - 모서리를 동그랗게 만들어줌

<br/>

- BorderBrush : 테두리 컬러 지정
- BorderThickness : 테두리 두계 설정("2 2 2 2" 이런 형태로 왼쪽,위쪽,오른쪽,아래로 각각 설정도 가능)
- CornerRadius : 모서리를 얼마나 동그랗게 만들껀지("2 2 2 2"이런식으로 모서리 별로 설정 가능)

~~~
<Grid>
    <Border Width="100" Height="100" CornerRadius="10 2 2 2" BorderBrush="Coral" BorderThickness="2 2 2 10">
    </Border>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/151305860-78bd39a9-da06-4e70-8daf-318e54a4640f.png">

###### [Border](#border)
###### [Top](#top)

<br/>
<br/>

***

# TextBlock
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement
  - [Run](#run)

<br/>

#MainWindow.xaml
~~~c#
<Grid>
    <Border BorderBrush="Black" BorderThickness="1" Width="100" Height="100">
        <TextBlock Width="100" Height="100">11111<LineBreak/>22222</TextBlock>
    </Border>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/151999032-9aa3f1e3-a989-4739-b5a4-fa33f103aedb.png">

###### [TextBlock](#textblock)
###### [Top](#top)

<br/>
<br/>

# Run
  - Text내용을 자체 텍스트 컨트롤로 취급할 수 있게 해준다.

#MainWindow.xaml
~~~c#
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

###### [TextBlock](#textblock)
###### [Top](#top)

<br/>
<br/>

***

# Popup
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement

<br/>

  - Placement : 어디서 팝업창이 뜰지 알려줌
  - HorizontalOffset : 팝업 위치를 옮길 수 있음
  - VerticalOffset : 팝업 위치를 옮길 수 있음
  - AllowsTransparency : 팝업창의 배경을 투명으로 할 수 있음
  - IsOpen : 팝업을 띄워주고 닫아줌 

<br/>
<br/>

  - Placement, HorizontalOffset, VerticalOffset, AllowsTransparency, IsOpen

#MainWindow.xaml
~~~c#
<Grid>
    <Button Width="100" Height="25" Content="Popuptest" Click="Button_Click"/>
    <Popup Name="Pop"
        Placement="Top"
        HorizontalOffset="-100"
        VerticalOffset="0"
        AllowsTransparency="True">
        <Menu>
            <StackPanel Orientation="Vertical">
                <MenuItem Header="사과"/>
                <MenuItem Header="포도"/>
                <MenuItem Header="귤"/>
                <MenuItem Header="배"/>
            </StackPanel>
        </Menu>
    </Popup>
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

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        Pop.IsOpen = !(Pop.IsOpen);
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152073966-9993fda4-80c5-4aec-b2e2-7d0b6df20db6.png">

<br/>
<br/>

  - AllowsTransparency(False일때)
    - False 일때, Ellipse주변에 검정색 Background가 남아 있다

#MainWindow.xaml
~~~c#
<Grid>
    <Button Width="100" Height="25" Content="Popuptest" Click="Button_Click"/>
    <Popup Name="Pop"
    Placement="Top"
    HorizontalOffset="-100"
    VerticalOffset="0"
    AllowsTransparency="False">
        <Ellipse Width="200" Height="200" Fill="Bisque"/>
    </Popup>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152074233-11a3764f-b8a7-4724-ac7c-27b3dcaede9e.png">

<br/>
<br/>

  - AllowsTransparency(True일때)
    - True 일때, Ellipse주변에 검정색 Background가 없어 진다

#MainWindow.xaml
~~~
<Grid>
    <Button Width="100" Height="25" Content="Popuptest" Click="Button_Click"/>
    <Popup Name="Pop"
    Placement="Top"
    HorizontalOffset="-100"
    VerticalOffset="0"
    AllowsTransparency="True">
        <Ellipse Width="200" Height="200" Fill="Bisque"/>
    </Popup>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152074570-a17fe31b-78ef-4f8f-873d-0474d8229dbc.png">

###### [Popup](#popup)
###### [Top](#top)

<br/>
<br/>

***

# Panel
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement

<br/>

  - [Grid](#grid)
  - [Canvas](#canvas)
  - [DockPanel](#dockpanel)
  - [StackPanel](#stackpanel)
  - [WrapPanel](#wrappanel)
  - [Viewbox](#viewbox)
  - [UniformGrid](#uniformgrid)

###### [Panel](#panel)
###### [Top](#top)

<br/>
<br/>

# Grid
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Panel

<br/>

  - number : number만큼의 크기를 설정(화면크기를 임의로 늘려도 요소가 늘어나지X)
  - Auto : Grid가 가지고 있는 하위 content의 크기만큼의 크기를 가짐
  - number* : 남은 공간을 등분하여 크기를 가짐 ex) 2* 과 1* : 남은 크기를 2:1비율로 가져감(화면크기를 임의로 늘리면 요소가 늘어남)  

#MainWindow.xaml
~~~c#
    <Grid> 
        <Grid.RowDefinitions>
            <RowDefinition Height="Auto"/>
            <RowDefinition Height="100"/>
            <RowDefinition Height="100"/>
        </Grid.RowDefinitions>
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="100"/>
            <ColumnDefinition Width="2*"/>
            <ColumnDefinition Width="*"/>
        </Grid.ColumnDefinitions>
        
        <Button Grid.Column="0" Grid.Row="0" Content="버튼1"/>
        <Button Grid.Column="1" Grid.Row="0" Content="버튼2"/>
        <Button Grid.Column="2" Grid.Row="0" Content="버튼3"/>
        <Button Grid.Column="0" Grid.Row="1" Content="버튼4"/>
        <Button Grid.Column="1" Grid.Row="1" Content="버튼5"/>
        <Button Grid.Column="2" Grid.Row="1" Content="버튼6"/>
        <Button Grid.Column="0" Grid.Row="2" Content="버튼7"/>
        <Button Grid.Column="1" Grid.Row="2" Content="버튼8"/>
        <Button Grid.Column="2" Grid.Row="3" Content="버튼9"/>
    </Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/147874900-2aab4125-8b19-4c41-9804-d39d12ac353b.png">

<br/>
<br/>

  - 다양한 요소안에 Grid를 만들기

#MainWindow.xaml
~~~c#
<Button Grid.Column="2" Height="150" Width="150">
    <Grid Width="150" Height="150">
        <Grid.RowDefinitions>
            <RowDefinition Height="7*"/>
            <RowDefinition Height="3*"/>
        </Grid.RowDefinitions>
        <Image Source="사진" Grid.Row="0"/>
    </Grid>
</Button>
~~~

<img src="https://user-images.githubusercontent.com/39178978/148070083-3a53e213-6cbc-43dd-88b6-81cba330675f.png">

<br/>
<br/>

  - IsSharedSizeScope속성을 이용해 Grid의 폭과 넓이 맟주기

#MainWindow.xaml
~~~c#
<Grid Grid.IsSharedSizeScope="True">
    <Grid.RowDefinitions>
        <RowDefinition/>
        <RowDefinition/>
    </Grid.RowDefinitions>

    <Grid Grid.Row="0">
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="100" SharedSizeGroup="FirstLine"/>
            <ColumnDefinition Width="Auto" SharedSizeGroup="SecondLine"/>
            <ColumnDefinition Width="Auto" SharedSizeGroup="ThedLine"/>
            <ColumnDefinition Width="Auto" SharedSizeGroup="ForeLine"/>
        </Grid.ColumnDefinitions>

        <Border  Grid.Column="0" Background="#dfdfdf" BorderBrush="#adadad" BorderThickness="3">
            <TextBlock Text="사과" FontSize="30"/>
        </Border>
        <Border Grid.Column="1" Background="#dfdfdf" BorderBrush="#adadad" BorderThickness="3">
            <TextBlock Text="포도" FontSize="30"/>
        </Border>
        <Border Grid.Column="2" Background="#dfdfdf" BorderBrush="#adadad" BorderThickness="3">
            <TextBlock Text="바나나" FontSize="30"/>
        </Border>
        <Border Grid.Column="3" Background="#dfdfdf" BorderBrush="#adadad" BorderThickness="3">
            <TextBlock  Text="파인애플" FontSize="30"/>
        </Border>
    </Grid>

    <Grid Grid.Row="1">
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="Auto" SharedSizeGroup="FirstLine"/>
            <ColumnDefinition Width="Auto" SharedSizeGroup="SecondLine"/>
            <ColumnDefinition Width="Auto" SharedSizeGroup="ThedLine"/>
            <ColumnDefinition Width="Auto" SharedSizeGroup="ForeLine"/>
        </Grid.ColumnDefinitions>

        <Border  Grid.Column="0" Background="#dfdfdf" BorderBrush="#adadad" BorderThickness="3">
            <TextBlock Text="asdfasdf" FontSize="30"/>
        </Border>
        <Border Grid.Column="1" Background="#dfdfdf" BorderBrush="#adadad" BorderThickness="3">
            <TextBlock Text="23123" FontSize="30"/>
        </Border>
        <Border Grid.Column="2" Background="#dfdfdf" BorderBrush="#adadad" BorderThickness="3">
            <TextBlock Text="cbnvmhikt" FontSize="30"/>
        </Border>
        <Border Grid.Column="3" Background="#dfdfdf" BorderBrush="#adadad" BorderThickness="3">
            <TextBlock  Text="sekfj0384kjlsadfif" FontSize="30"/>
        </Border>
    </Grid>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/148079616-5703ff5f-5acd-4e5a-b50f-35f8e8008ad7.png">

###### [Panel](#panel)
###### [Top](#top)

<br/>
<br/>

# Canvas
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Panel
  - 위치를 고정으로 정할때 사용함. 임의로 화면을 늘려도 상,하,좌,우 를 기준으로 고정된 지점에 요소가 놓아짐

<br/>

#MainWindow.xaml
~~~c#
<Canvas Name="canvas">
    <TextBlock Name="txtBlock" Canvas.Left="10" TextWrapping="Wrap" Text="캔버스" Canvas.Top="80"/>
    <Button Name="btn" Content="Button" Canvas.Left="172" Canvas.Top="30" Width="75"/>
    <Image Name="image2"
            Source="https://user-images.githubusercontent.com/39178978/148183688-8de89977-ca68-4450-87e7-6febcff80fd4.png"
            Canvas.Left="10" Canvas.Top="150"/>
</Canvas>
~~~

<img src="https://user-images.githubusercontent.com/39178978/148184087-350a7029-8e58-48b7-8297-5127d51825f7.png">

###### [Panel](#panel)
###### [Top](#top)

<br/>
<br/>

# DockPanel
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Panel
  - 자식요소를 기준으로 가로 또는 세로로 정렬 할 수 있는 영역을 정의

#MainWindow.xaml
~~~c#
<DockPanel Name="dp1">
    <Border DockPanel.Dock="Top" Background="Yellow" Height="20" BorderBrush="Red" BorderThickness="2">
        <TextBlock Text="Dock=top"/>
    </Border>
    <Border DockPanel.Dock="Bottom" Background="Aqua" BorderBrush="Blue" BorderThickness="5">
        <TextBlock Text="Dock=bottom"/>
    </Border>
    <Border DockPanel.Dock="Left" Background="DarkBlue" Width="100" BorderBrush="Bisque" BorderThickness="10">
        <TextBlock Text="Left" Foreground="Wheat"/>
    </Border>
    <Border Background="Brown" BorderBrush="Azure" BorderThickness="10">
        <TextBlock Text="All"/>
    </Border>
</DockPanel>
~~~

<img src="https://user-images.githubusercontent.com/39178978/148200531-fbd1db72-a493-4b85-820a-ca096662102f.png">

###### [Panel](#panel)
###### [Top](#top)

<br/>
<br/>

# StackPanel
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Panel
  - 자식 요소들을 행이나 열로 나열

<br/>
<br/>

  - Orientation="Horizontal"
    - 정렬 방향을 수평으로 바꿀 수 있음

#MainWindow.xaml
~~~c#
<Grid>
    <StackPanel Name="sp1" Width="90" Height="150" HorizontalAlignment="Left" VerticalAlignment="Top">
        <Button Name="btn1" Width="70" Height="25" Content="버튼1"/>
        <Button Name="btn2" Width="70" Height="25" Content="버튼2"/>
        <Button Name="btn3" Width="70" Height="25" Content="버튼3"/>
        <Button Name="btn4" Width="70" Height="25" Content="버튼4"/>
        <Button Name="btn5" Width="70" Height="55" Content="버튼5"/>
    </StackPanel>
    <StackPanel Name="sp2" Width="250" Margin="50 10 10 10" Orientation="Horizontal">
        <Rectangle Height="50" Width="50" Stroke="Black" Fill="AntiqueWhite"/>
        <Rectangle Height="50" Width="50" Stroke="Black" Fill="SaddleBrown"/>
        <Rectangle Height="50" Width="50" Stroke="Black" Fill="Black"/>
    </StackPanel>
</Grid>
~~~

<br/>

<img src="https://user-images.githubusercontent.com/39178978/148635073-d7d3a64d-81c6-48a3-b9d0-4f370a1d124c.png">

###### [Panel](#panel)
###### [Top](#top)

<br/>
<br/>

# WrapPanel
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Panel
  - 자신의 영역보다 작은 자식요소들이 있는 경우에 stackPanel과 같은 기능, 반대로 자식요소들의 사이즈가 더 큰 경우에는 다음줄로 배치됨
  - WrapPanel은 stackpanel과는 다르게 창을 줄였을 경우 요소들이 공간을 초과하면 밑으로 내려간다

<br/>

#MainWindow.xaml
~~~c#
<WrapPanel Name="wp1" VerticalAlignment="Top">
    <Rectangle Height="60" Width="50" Stroke="Black" Fill="RosyBrown" Name="rec1"/>
    <Rectangle Height="60" Width="50" Stroke="Black" Fill="BurlyWood" Name="rec2"/>
    <Rectangle Height="60" Width="50" Stroke="Black" Fill="SeaShell" Name="rec3"/>
    <Rectangle Height="60" Width="50" Stroke="Black" Fill="DarkSlateGray" Name="rec4"/>
</WrapPanel>
~~~

<img src="https://user-images.githubusercontent.com/39178978/148635573-8d994ef7-8c0f-403d-b535-78f0ab45cb80.png">

<br/>

여기서 창을 줄이면

<br/>

<img src="https://user-images.githubusercontent.com/39178978/148635594-dfe37a6a-08cf-49d8-baf5-a2a6e81e7874.png">

<br/>
<br/>

  - Orientation="Vertical"
    - 수직으로 배치가능하게 함
 
#MainWindow.xaml
~~~c#
<WrapPanel Name="wp1" VerticalAlignment="Top" Orientation="Vertical">
    <Rectangle Height="60" Width="50" Stroke="Black" Fill="RosyBrown" Name="rec1"/>
    <Rectangle Height="60" Width="50" Stroke="Black" Fill="BurlyWood" Name="rec2"/>
    <Rectangle Height="60" Width="50" Stroke="Black" Fill="SeaShell" Name="rec3"/>
    <Rectangle Height="60" Width="50" Stroke="Black" Fill="DarkSlateGray" Name="rec4"/>
</WrapPanel>
~~~

<img src="https://user-images.githubusercontent.com/39178978/148635530-4eef554c-df65-434b-9c70-a9e9bf3b31ec.png">

<br/>

여기서 창을 줄이면

<br/>

<img src="https://user-images.githubusercontent.com/39178978/148635557-b0904ba7-1de7-4d20-8548-d90ddbe79d16.png">

###### [Panel](#panel)
###### [Top](#top)

<br/>
<br/>

# Viewbox
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Panel
  - 화면의 크기를 늘리고 줄였을때 그 안에 요소들을 일정한 비율로 늘리고 줄일 수 있음

<br/>
<br/>

  -  Stretch
    - None : 자식 컨트롤의 크기가 변경되지 않음.(ViewBox크기에 따라 여백이 생기거나 클리핑)
    - Fill : 자식 컨트롤이 ViewBox를 완전히 채우도록 크기가 조절된다.(절대 클리핑되지 않는다) 종횡비율(가로,세로 크기의 비율)이 다를 수 있으므로 ViewBox의 내용이 변형될 수 있다.
    - Uniform : ViewBox의 기본 옵션. 자식컨트롤이 가로, 세로 크기에 맞게 균일하게 크기조절
    - UniformToFill : ViewBox의 크기를 모두 채우는데,  자식 컨트롤의 가로와 세로의 비율을 동일한 비율로 조정한다.왜곡 현상이 없도록 하기 위해서 자식 컨트롤이 잘리는 현상이 일어날 수 있다.

#MainWindow.xaml
~~~c#
<Grid>
    <Viewbox>
        <StackPanel>
            <Button Width="100" Height="100" Content="1"/>
            <Button Width="100" Height="100" Content="2"/>
            <Button Width="100" Height="100" Content="3"/>
            <Button Width="100" Height="100" Content="4"/>
        </StackPanel>
    </Viewbox>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/148673507-8e1abe94-d180-47ab-8db7-cbaea328c5f1.png">

<br/>
<br/>

- StretchDirection
  - Both(기본값) : 콘텐츠의 기본 크기에 비례하여 위아래로 크기 조정
  - UpOnly : 기본 크기보다 큰 크기에서만 크기조정을 허용
  - DownOnly : 기본 크기보다 작은 크기에서만 조절이 가능

###### [Panel](#panel)
###### [Top](#top)

<br/>
<br/>

# UniformGrid
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Panel
  - 모든 열,행을 자동으로 똑같이 맞춰줌, 크기를 조절 불가능함

<br/>

#MainWindow.xaml
~~~c#
<UniformGrid>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
</UniformGrid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/149927550-e3de207c-7c2b-4e82-b2ce-9ea0f9b95212.png" width="300" height="300">

<br/>
<br/>

  - Columns,Rows지정
    - 지정한 열,행을 넘어가면 프로그램을 실행했을때 화면에 표현되지 않고 무시하게 됨

#MainWindow.xaml
~~~c#
<UniformGrid Columns="2" Rows="3">
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
</UniformGrid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/149928111-0ae3e057-d526-4e0a-816f-97a899e85214.png">

<br/>

빨간색 테두리가 실행 화면

<br/>

<img src="https://user-images.githubusercontent.com/39178978/149928370-36e15e1c-c3e7-4e48-b6f5-fcd3c2f9c84a.png">

<br/>
<br/>

  - ClipToBounds
    - 내 크기를 벗어난 요소들을 사라지게 할 수 있음

#MainWindow.xaml
~~~c#
<UniformGrid Columns="2" Rows="3" ClipToBounds="True">
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
</UniformGrid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/149928819-757fbb07-4bc2-475d-9fd7-746c796cc6d4.png">

<br/>
<br/>

  - FirstColumn
    - 그 순서 부터 시작할 수 있음

#MainWindow.xaml
~~~c#
<UniformGrid Rows="3" Columns="3" FirstColumn="2">
    <Button Content="button1"/>
    <Button Content="button2"/>
    <Button Content="button3"/>
    <Button Content="button4"/>
    <Button Content="button5"/>
    <Button Content="button5"/>
</UniformGrid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/149929403-9ba21762-33f5-4ed1-9982-c61cf276d527.png">

<br/>
<br/>

  - FlowDirection
    - 방향을 반대로 바꿀 수 있음

#MainWindow.xaml
~~~c#
<UniformGrid Rows="3" Columns="3" FirstColumn="2" FlowDirection="RightToLeft">
    <Button Content="button1"/>
    <Button Content="button2"/>
    <Button Content="button3"/>
    <Button Content="button4"/>
    <Button Content="button5"/>
    <Button Content="button5"/>
</UniformGrid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/149929712-91144101-18c8-41fe-800e-e09e6dab4b03.png">

###### [Panel](#panel)
###### [Top](#top)

<br/>
<br/>

***

# Separator
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control
  - 구분짓는 선을 만들어줌

#MainWindow.xaml
~~~c#
<Grid>
    <StatusBar Height="100" HorizontalAlignment="Center">
        <TextBlock Text="구분"/>
        <Separator/>
        <Button Content="구분"/>
        <Separator/>
        <TextBlock Text="구분"/>
    </StatusBar>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/150148233-147bd185-e175-42e1-9073-375bb2246c0d.png">

###### [Separator](#separator)
###### [Top](#top)

<br/>
<br/>

***

# PasswordBox
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control
  - TextBox와는 다르게, 비밀번호처럼 감춰지는 형태로 사용할 수 있다
  - 'Text'속성 대신 'Password'속성을 이용하여 글자 입력
  - PasswordChar속성을 이용해서 비밀번호가 감춰질때 의 도형 설정 가능

#MainWindow.xaml
~~~c#
<Grid>
    <PasswordBox Width="100" Password="비밀번호" VerticalAlignment="Center"/>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/153541148-8bd20629-0fd4-4fed-a57e-2e193201a6ef.png">

###### [PasswordBox](#passwordbox)
###### [Top](#top)

<br/>
<br/>

***

# Thumb
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control
  - Thumb클래스 안에는 끌기와 관련된 것들을 제공하는것이 있음
    - DragStarted 이벤트 : 드래그 하기 시작할 때 발생하는 이벤트
    - DragCompleted 이벤트 : 사용자가 드래그를 중지하고 마우스 버튼을 놓았을 때 발생하는 이벤트
    - DragDelta 이벤트 : 마우스를 움직이면 반복적으로 이벤트가 발생한다.
    - IsDragging 속성 : 사용자가 드래그를 하는 동안에는 true, 드래그가 중지되면 false를 리턴한다.
    - CancelDrag 메소드 : 이 메소드를 호출하면 드래그 작업이 즉시 중지된다.

<br/>

  - [GridSplitter](#gridsplitter)

###### [Thumb](#thumb)
###### [Top](#top)

<br/>
<br/>

# GridSplitter
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control - Thumb
  - 마우스 드래그앤 드랍으로 끌수 있는 선을 만듬
  - ShowsPreview : 마우스로 끌어서 옮길때 미리보기를 할지 안할지 설정

<br/>

#MainWindow.xaml
~~~c#
<Grid>
    <Grid.RowDefinitions>
        <RowDefinition Height="1*"/>
        <RowDefinition Height="1*"/>
        <RowDefinition Height="1*"/>
    </Grid.RowDefinitions>

    <Grid Grid.Row="0"/>

    <GridSplitter Grid.Row="1" Height="5" Background="red" HorizontalAlignment="Stretch" ShowsPreview="True"/>

    <Grid Grid.Row="2"/>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152299296-11475d66-9c58-438a-adda-bf7f81c905d4.png">

<br/>
<br/>

  - DragStarted. DragCompleted, DragDelta, IsDragging, CancelDrag
    - Thumb클래스에서 상속받아 사용

#MainWindow.xaml
~~~c#
<Grid>
    <Grid.RowDefinitions>
        <RowDefinition Height="1*"/>
        <RowDefinition Height="1*"/>
        <RowDefinition Height="1*"/>
    </Grid.RowDefinitions>

    <Grid Grid.Row="0"/>
    <TextBox x:Name="tb" Grid.Row="0" Width="100" Height="30"/>

    <GridSplitter Grid.Row="1" Height="5" Background="red" HorizontalAlignment="Stretch" ShowsPreview="True" DragStarted="GridSplitter_DragStarted"/>

    <Grid Grid.Row="2"/>
</Grid>
~~~

<br/>

#XAML.cs
~~~
using System.Windows.Controls.Primitives;

public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }

    private void GridSplitter_DragStarted(object sender, DragStartedEventArgs e)
    {
        tb.Text = "드래그 시작";
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152470717-b07933bd-b3a1-425d-b825-5a5f9af888a0.png">

###### [Thumb](#thumb)
###### [Top](#top)

<br/>
<br/>

***

# RangeBase
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control
  - [ProgressBar](#progressbar)
  - [Slider](#slider)

###### [RangeBase](#rangebase)
###### [Top](#top)

<br/>
<br/>

# ProgressBar
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control - RangeBase
  - bar형태의 컨트롤 생성
  - Minimum : ProgressBar의 최소값 설정
  - Maximum : ProgressBar의 최대값 설정

<br/>

#MainWindow.xaml
~~~c#
<StackPanel Orientation="Horizontal" HorizontalAlignment="Center">
    <TextBlock Text="로딩중" VerticalAlignment="Center" Margin="0 0 10 0"/>
    <ProgressBar Width="100" Height="30" Value="30"/>
</StackPanel>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152511866-40517ab8-2852-450b-b8a8-ac440eb24a36.png">

<br/>
<br/>

  - IsIndeterminate
    - true일 경우

#MainWindow.xaml
~~~c#
<StackPanel Orientation="Horizontal" HorizontalAlignment="Center">
    <TextBlock Text="로딩중" VerticalAlignment="Center" Margin="0 0 10 0"/>
    <ProgressBar Width="100" Height="30" Value="30" IsIndeterminate="True"/>
</StackPanel>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152512413-748e0114-3c63-4fbd-859c-b79482c9efe3.png">

###### [RangeBase](#rangebase)
###### [Top](#top)

<br/>
<br/>

# Slider
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control - RangeBase
  - Minimum 속성 : 최소 작은수 지정
  - Maximum 속성 : 최대 큰 수 지정
  - IsDirectionReversed : 슬라이더의 최대, 최소값의 위치가 바뀜(true이면 최대 최소의 방향이 바뀐다)

<br/>
<br/>

  - ValueChanged이벤트로 R,G,B값 표현하기
    - 슬라이더의 Value값의 변경을 감지하면 발생하는 이벤트

#MainWindow.xaml
~~~c#
<StackPanel VerticalAlignment="Center">
    <Slider x:Name="Red_slider" Maximum="255" Minimum="0" Margin="10" ValueChanged="ValueChanged"/>
    <Slider x:Name="Green_slider" Maximum="255" Minimum="0" Margin="10" ValueChanged="ValueChanged"/>
    <Slider x:Name="Blue_slider" Maximum="255" Minimum="0" Margin="10" ValueChanged="ValueChanged"/>
    <Rectangle x:Name="rec" Width="100" Height="100"/>
</StackPanel>
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

    private void ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)
    {
        var colorR = (byte)Red_slider.Value;
        var colorG = (byte)Green_slider.Value;
        var colorB = (byte)Blue_slider.Value;

        var color = Color.FromRgb(colorR, colorG, colorB);

        rec.Fill = new SolidColorBrush(color);
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/156905759-405d0d68-7c25-43ea-a891-056f94ae35e8.png">

<br/>
<br/>

  - ValueChanged이벤트로 R,G,B,A값 표현하기
    - 슬라이더의 Value값의 변경을 감지하면 발생하는 이벤트

#MainWindow.xaml
~~~c#
<StackPanel VerticalAlignment="Center">
    <Slider x:Name="Red_slider" Maximum="255" Minimum="0" Margin="10"
        ValueChanged="ValueChanged"/>
    <Slider x:Name="Green_slider" Maximum="255" Minimum="0" Margin="10" ValueChanged="ValueChanged"/>
    <Slider x:Name="Blue_slider" Maximum="255" Minimum="0" Margin="10" ValueChanged="ValueChanged"/>
    <Slider x:Name="A_silder" Maximum="255" Minimum="0" Margin="10" ValueChanged="ValueChanged"/>
    <Rectangle x:Name="rec" Width="100" Height="100"/>
</StackPanel>
~~~

<br/>

#MainWindow.xaml.CS
~~~c#
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }

    private void ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)
    {
        var colorR = (byte)Red_slider.Value;
        var colorG = (byte)Green_slider.Value;
        var colorB = (byte)Blue_slider.Value;
        var colorA = (byte)A_silder.Value;

        var color = Color.FromArgb(colorA, colorR, colorG, colorB);

        rec.Fill = new SolidColorBrush(color);
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/156906074-7f9e7cbb-1f3d-4b19-9e51-94728cc6973c.png">

<br/>
<br/>

  - Orientation속성
    - 가로 및 세로 방향을 지정 가능

#MainWindow.xaml
~~~c#
<StackPanel VerticalAlignment="Center">
    <Slider x:Name="Red_slider" Maximum="255" Minimum="0" Margin="10" Orientation="Vertical"  ValueChanged="ValueChanged"
        Height="100"/>
    <Slider x:Name="Green_slider" Maximum="255" Minimum="0" Margin="10" ValueChanged="ValueChanged"/>
    <Slider x:Name="Blue_slider" Maximum="255" Minimum="0" Margin="10" ValueChanged="ValueChanged"/>
    <Rectangle x:Name="rec" Width="100" Height="100"/>
</StackPanel>
~~~

<img src="https://user-images.githubusercontent.com/39178978/156905872-8881619d-6b72-424e-8cf3-4286f49b676b.png">

<br/>
<br/>

  - TickPlacement속성(눈금표시)
    - None : 슬라이더의 기본값으로 눈금이 숨겨져 있는 상태
    - TopLeft : 가로슬라이더는 위쪽에 표시 또는 세로슬라이더는 왼쪽에 표시
    - BottomRight : 가로 슬라이더는 아래쪽에 표시 또는 세로 슬라이더는 오른쪽에 표시
    - Both : 가로 슬라이더는 위아래 표시 또는 세로 슬라이더는 좌우에 표시
    - TickFrequency : 눈금의 갯수를 조절

#MainWindow.xaml
~~~c#
<StackPanel VerticalAlignment="Center">
    <Slider x:Name="Red_slider" Maximum="255" Minimum="0" Margin="10"
        ValueChanged="ValueChanged"
        Height="100"
        TickPlacement="Both"
        TickFrequency="5"/>
</StackPanel>
~~~

<img src="https://user-images.githubusercontent.com/39178978/156905997-b90525ab-d615-42fc-9fdb-933676cab050.png">

###### [RangeBase](#rangebase)
###### [Top](#top)

<br/>
<br/>

***

# TextBox
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control - TextBoxBase
  - 사용자가 Box내부에 string을 적을 수 있는 컨텐트

<br/>
<br/>

  - AcceptsReturn, AcceptsTab, VerticalScrollBarVisibility, MaxLength, CharacterCasing
    - AcceptsReturn="True" 속성 : 엔터키를 사용 할 수 있게함
    - AcceptsTab="True" 속성 : 텝키를 사용 할 수 있게함
    - VerticalScrollBarVisibility="Auto" 속성 : TextBox안의 공간보다 길이 길어지면 자동으로 wrap해줌
    - MaxLength 속성 : 글자수를 제한해줌
    - CharacterCasing 속성 : 자동으로 대문자 소문자로 입력되게 함

<br/>
<br/>

  - TextChanged이벤트, SelectionChanged이벤트
    - TextChanged 이벤트 : 글자가 바뀔 때마다 이벤트를 실행하게함(TextBox안에 글자가 지정되어 있으면 예외가 발생하여 실행이 안됨)
    - SelectionChanged 이벤트 : 선택한 텍스트를 변경하거나 캐럿을 이동할 때 발생하는 이벤트, 마우스나 키보드 등의 입력장치를 사용해서 선택을 조정할 때마다 발생하는 이벤트

<br/>
<br/>

  - SelectedText, CaretIndex, SelectionStart, SelectionLength, Select(1,4), SelectAllAll()
    - SelectedText : 마우스 드래그로 선택한 텍스트를 가져옴
    - CaretIndex : 캐럿의 위치를 설정
    - SelectionStart : 선택한 텍스트가 시작되는 위치값(CaretIndex와 같은 값을 리턴)
    - SelectionLength : 선택된 문자 수를 반환, 선택 문자가 없으면 0을 리턴
    - Select(1,4) : 마우스로 드래그 하는 것과 같다, ex)현재 예시는 1이상 4미만의 인덱스를 표시함
    - SelectAllAll() : 마우스로 드래그 하는 것과 같다, 전체 선택

###### [TextBox](#textbox)
###### [Top](#top)

<br/>
<br/>

***

# ScrollViewer
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control - ContentControl
  - ScrollViewer내부에 있는 객체들을 스크롤로 나타내줌
  - 기본적으로, VerticalScrollBarVisibility="Visible"로 되어 있기 때문에 VerticalScrollBarVisibility="Hidden"을 해줘야 수직 스크롤 막대가 없어짐

<br/>
<br/>

  - HorizontalScrollBarVisibility, VerticalScrollBarVisibility(visible, Hidden, Auto, Disabled)
    - HorizontalScrollBarVisibility : 수평 스크롤 막대 속성
    - VerticalScrollBarVisibility : 수직 스크롤 막대 속성
      - visible : 스크롤바 막대를 항상 표시, ScrollViewer 크기가 자식 내용보다 작을 경우에는 활성화 상태, 반대로 ScrollViewer크기가 자식 내용보다 클 경우에는 비활성화 상태가 된다.
      - Hidden : 스크롤 막대가 숨겨져 있도록 하는 속성, 자식 내용이 ScrollViewer보다 클 경우에는 내용이 잘리게 된다. 스크롤휠을 내려서 확인 가능하다
      - Auto : 스크롤이 필요 없을 만큼 창크기를 늘려주면 스크롤이 없어짐(필요한 경우에만 표시됨)
      - Disabled : 스크롤이 아예 없어짐, 창 크기를 밑으로 내려야지만 내용이 보임

#Mainwindow.xaml
~~~c#
<ScrollViewer VerticalScrollBarVisibility="Visible">
    <StackPanel>
        <TextBlock Background="red" Text="tb1" Height="50" TextAlignment="Center" FontSize="20"/>
        <TextBlock Background="DarkGray" Text="tb2" Height="50" TextAlignment="Center" FontSize="20"/>
        <TextBlock Background="Cyan" Text="tb3" Height="50" TextAlignment="Center" FontSize="20"/>
        <TextBlock Background="Blue" Text="tb4" Height="50" TextAlignment="Center" FontSize="20"/>
        <TextBlock Background="DarkKhaki" Text="tb5" Height="50" TextAlignment="Center" FontSize="20"/>
        <TextBlock Background="red" Text="tb6" Height="50" TextAlignment="Center" FontSize="20"/>
        <TextBlock Background="DarkGray" Text="tb7" Height="50" TextAlignment="Center" FontSize="20"/>
    </StackPanel>
</ScrollViewer>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152088288-d03304dc-49c9-4aa8-b698-be87473247bd.png">

<br/>
<br/>

  - FrameworkElement를 이용해 ScrollViewer의 시스템 whith사이즈를 불러오기
    - FrameworkElement : 아무것도 없는 공간이라고 생각하면 됨

#Mainwindow.xaml
~~~c#
<Grid>
    <Grid.ColumnDefinitions>
        <ColumnDefinition/>
        <ColumnDefinition/>
        <ColumnDefinition Width="Auto"/>
    </Grid.ColumnDefinitions>
    <Grid.RowDefinitions>
        <RowDefinition Height="1*"/>
        <RowDefinition Height="10*"/>
    </Grid.RowDefinitions>

    <Border BorderBrush="Black" BorderThickness="1" Grid.Row="0" Grid.Column="0">
        <TextBlock Text="1" Background="#c1c1c1"/>
    </Border>
    <Border BorderBrush="Black" BorderThickness="1" Grid.Row="0" Grid.Column="1" >
        <TextBlock Text="1" Background="#c1c1c1"/>
    </Border>
    <Border Grid.Row="0" Grid.Column="2" HorizontalAlignment="Right" Background="#c1c1c1">
        <FrameworkElement Grid.Row="0" Grid.Column="2" Width="{DynamicResource {x:Static SystemParameters.VerticalScrollBarWidthKey}}"/>
    </Border>

    <ScrollViewer VerticalScrollBarVisibility="Visible" Grid.Row="1" Grid.Column="0" Grid.ColumnSpan="3">
        <StackPanel>
            <TextBlock Background="red" Text="tb1" Height="50" TextAlignment="Center" FontSize="20"/>
            <TextBlock Background="DarkGray" Text="tb2" Height="50" TextAlignment="Center" FontSize="20"/>
            <TextBlock Background="Cyan" Text="tb3" Height="50" TextAlignment="Center" FontSize="20"/>
            <TextBlock Background="Blue" Text="tb4" Height="50" TextAlignment="Center" FontSize="20"/>
            <TextBlock Background="DarkKhaki" Text="tb5" Height="50" TextAlignment="Center" FontSize="20"/>
            <TextBlock Background="red" Text="tb6" Height="50" TextAlignment="Center" FontSize="20"/>
            <TextBlock Background="DarkGray" Text="tb7" Height="50" TextAlignment="Center" FontSize="20"/>
        </StackPanel>
    </ScrollViewer>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152091900-c7834135-e50c-4e4f-a8d2-722a35cc0d70.png">

###### [ScrollViewer](#scrollviewer)
###### [Top](#top)

<br/>
<br/>

***

# tooltip
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control - ContentControl
  - ToolTip : 마우스를 올렸을때 나오는 설명창(ToolTip)

#MainWindow.xaml
~~~c#
<Grid>
    <TextBox Width="100" Height="30">
        <TextBox.ToolTip>
            <TextBlock Text="숫자를 입력하세요"/>
        </TextBox.ToolTip>
    </TextBox>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152283585-98284fcf-ae1c-48b8-b6d9-2ba1f978d815.png">

###### [ToolTip](#tooltip)
###### [Top](#top)

<br/>
<br/>

***

# RepeatButton
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control - ContentControl - ButtonBase
  - 클릭을 눌르고 있으면 계속 이벤트가 발생

#MainWindow.xaml
~~~c#
<Grid>
    <Grid.ColumnDefinitions>
        <ColumnDefinition/>
        <ColumnDefinition/>
    </Grid.ColumnDefinitions>
    <RepeatButton Grid.Column="0" Width="50" Height="50" Content="버튼" Click="RepeatButton_Click"/>
    <Border Grid.Column="1" BorderBrush="Black" BorderThickness="1" Width="90" Height="40">
        <TextBlock x:Name="tb1" TextWrapping="Wrap"/>
    </Border>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152261245-cadbc91f-47a7-4060-9c09-61077cdbc36d.png">

###### [RepeatButton](#repeatbutton)
###### [Top](#top)

<br/>
<br/>

***

# HeaderedContentControl
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control - ContentControl
  - [Expander](#Expander)
  - [GroupBox](#GroupBox)

###### [HeaderedContentControl](#headeredcontentcontrol)
###### [Top](#top)

<br/>
<br/>

# Expander
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control - ContentControl - HeaderedContentControl
  - 눌렀을때 하위의 객체들이 튀어 나옴

<br/>

#MainWindow.xaml
~~~c#
<Grid>
    <Expander Grid.Row="1" Grid.Column="1" Header="규칙">
        <TextBlock>
            1.  규칙1
            <LineBreak/>2. 규칙2
            <LineBreak/>3. 규칙3
            <LineBreak/>4. 규칙4
        </TextBlock>
    </Expander>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152100796-40fe916c-ad5f-4b0f-a92d-4b6e00ab1f21.png">
<img src="https://user-images.githubusercontent.com/39178978/152100820-d0b4e2da-168d-47b0-9e35-b561147753e3.png">

<br/>
<br/>

  - Header를 따로 빼서 지정가능

#MainWindow.xaml
~~~c#
<Grid>
    <Expander Grid.Row="1" Grid.Column="1">
        <Expander.Header>
            <TextBlock>
                <Run Text="규" Foreground="Red"/><Run Text="칙" Foreground="Aqua"/>
            </TextBlock>
        </Expander.Header>
        <TextBlock>
            1.  규칙1
            <LineBreak/>2. 규칙2
            <LineBreak/>3. 규칙3
            <LineBreak/>4. 규칙4
        </TextBlock>
    </Expander>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152101199-cbffb3c5-31db-40f3-968a-15d522948e79.png">
<img src="https://user-images.githubusercontent.com/39178978/152101208-c43eb6b5-7ba8-4069-abf3-d820ec514f45.png">

###### [HeaderedContentControl](#headeredcontentcontrol)
###### [Top](#top)

<br/>
<br/>

# GroupBox
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control - ContentControl - HeaderedContentControl
  - 여러 객체들을 목록으로 묶어 표현해줌

<br/>
<br/>

  - FontFamily
    - 문자를 다양한 기호로 렌더링하는 일련의 딩뱃 글꼴

#MainWindow.xaml
~~~c#
<Grid>
    <GroupBox Grid.Row="0" Width="100" Height="100">
        <GroupBox.Header>
            <StackPanel Orientation="Horizontal">
                <Label FontFamily="wingdings" FontSize="17">1</Label>
                <Label>폴더</Label>
            </StackPanel>
        </GroupBox.Header>
        <StackPanel>
            <RadioButton Content="열기" Margin="5"/>
            <RadioButton Content="닫기" Margin="5" IsChecked="True"/>
        </StackPanel>
    </GroupBox>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152258610-a876a9c0-1bb5-4299-9462-5d42fd675097.png">

###### [HeaderedContentControl](#headeredcontentcontrol)
###### [Top](#top)

<br/>
<br/>

***

# Menu
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control - ItemsControl - MenuBase
  - 메뉴를 생성

<br/>
<br/>

  - MenuItem, Header, _(단축키), InputGestureText, IsCheckable, SubmenuOpened
    - MenuItem : Menu안에 요소 생성
    - Header : 이름을 바꿀 수 있음
    - _(단축키) : 이것을 통해서 단축키를 설정 할 수 있음
    - InputGestureText : 단축키 설정, 단지 표시용 이다. 실제 명령은 커맨드 바인딩 작업이 추가적으로 필요하다.
    - IsCheckable 속성 값을 true/false로 설정
    - SubmenuOpened : submenu를 오픈 했을때 발생하는 이벤트

#MainWindow.xaml
~~~c#
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

<br/>
<br/>

  - MenuItem에 아이콘 넣기

#MainWindow.xaml
~~~c#
<MenuItem Header="파일">
    <MenuItem.Icon>
        <Image Source=""
    </MenuItem.Icon>
</MenuItem>
~~~

###### [Menu](#menu)
###### [Top](#top)

<br/>
<br/>

***

# ContextMenu
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control - ItemsControl - MenuBase
  - 마우스 오른쪽 클릭 했을때 나오는 Menu창

#MainWindow.xaml
~~~c#
<Grid>
    <TextBox>
        <TextBox.ContextMenu>
            <ContextMenu>
                <MenuItem Header="전체 지우기"/>
                <MenuItem Header="전체 선택" InputGestureText="Ctrl+A"/>
            </ContextMenu>
        </TextBox.ContextMenu>
    </TextBox>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152800620-2a7e093c-cf50-45bb-8733-914bec5f3776.png">

###### [ContextMenu](#contextmenu)
###### [Top](#top)

<br/>
<br/>

***

# Selector
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control - ItemsControl
  - Selector를 상속받은 클래스들은 여러 속성들을 사용 할 수 있음
  - SelectedItem : ListView에 속해 있는 ListViewItem을 반환한다
  - SelectedItems : ListView에 속해 있는 모든 ListViewItem을 반환한다
  - SelectedIndex : ListViewItem을 클릭했을시 ListView가 가지고 있는 SelectedIndex은 숫자로 반환되며, 위부터 0부터 시작되어 반환해 준다
  - SelectedValue
  - SelectedValuedPath 등등  
사용 방법은 ListView, ListBox와 비슷 한 방법으로 사용 가능

<br/>

  - [TabControl](#tabcontrol)
  - [ComboBox](#combobox)
  - [ListBox](#listbox)

###### [Selector](#selector)
###### [Top](#top)

<br/>
<br/>

# TabControl
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control - ItemsControl - Selector
  - TabItem : TabControl안에 요소를 생성

#MainWindow.xaml
~~~c#
<TabControl>
    <TabItem Header="사원">
        <Grid>
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="Auto"/>
                <ColumnDefinition/>
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition/>
                <RowDefinition/>
            </Grid.RowDefinitions>

            <TextBlock VerticalAlignment="Center" Text="이름"/>
            <TextBox Grid.Column="1" Height="30"/>
            <TextBlock VerticalAlignment="Center" Grid.Row="1" Text="번호"/>
            <TextBox Grid.Column="1" Grid.Row="1" Height="30"/>
        </Grid>
    </TabItem>
    <TabItem Header="대리">
        <Grid>
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="Auto"/>
                <ColumnDefinition/>
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition/>
                <RowDefinition/>
            </Grid.RowDefinitions>

            <TextBlock VerticalAlignment="Center" Text="이름"/>
            <TextBox Grid.Column="1" Height="30"/>
            <TextBlock VerticalAlignment="Center" Grid.Row="1" Text="번호"/>
            <TextBox Grid.Column="1" Grid.Row="1" Height="30"/>
        </Grid>
    </TabItem>
</TabControl>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152521030-86af5f22-62ed-4ba8-a504-64d2365e5a0f.png">

###### [Selector](#selector)
###### [Top](#top)

<br/>
<br/>

# ComboBox
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control - ItemsControl - Selector
  - ComboBox박스 생성
  - ComboBoxItem : ComboBox하위의 Item생성
  - DropDownOpende : 사용자가 목록을 펼칠 때 발생하는 이벤트
  - DropDownClosed : 사용자가 목록을 접을 때 발생하는 이벤트

<br/>

#MainWindow.xaml
~~~c#
<Grid>
    <ComboBox Width="100" Height="30">
        <ComboBoxItem Content="1"/>
        <ComboBoxItem Content="2"/>
        <ComboBoxItem Content="3"/>
        <ComboBoxItem Content="4"/>
        <ComboBoxItem Content="5"/>
    </ComboBox>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152633117-b34d6a50-9cd7-411c-bb83-c942076b5b85.png">

<br/>
<br/>

  - IsEditable속성
    - 텍스트를 직접 편집할 수 있는지 여부를 지정, 속성값이 true일 경우 사용자가 목록에서 항목을 선택하면 SelectedItem 속성이 설정된다

#MainWindow.xaml
~~~c#
<StackPanel>
    <ComboBox Name="cbox" Width="100" Height="30" IsEditable="True">
        <ComboBoxItem Content="1"/>
        <ComboBoxItem Content="2"/>
        <ComboBoxItem Content="3"/>
        <ComboBoxItem Content="4"/>
        <ComboBoxItem Content="5"/>
    </ComboBox>
    <Button Width="100" Content="버튼" Click="Button_Click"/>
</StackPanel>
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

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        int index = cbox.SelectedIndex + 1;
        if(index > 4)
        {
            index = 0;
        }

        cbox.SelectedIndex = index;
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152633424-730dd3cc-0dff-4d31-9376-deb7949e7414.png">
  현재 버튼을 클릭하면 cbox.SelectedIndex가 1씩 증가하면서 ComboBoxItem을 차례로 보여주게 되고, IsEditable="True"이기 때문에 직접 박스를 클릭해 숫자를 바꿔 줘도 cbox.SelectedIndex가 같이 변하게 된다

<br/>
<br/>

  - ObservableCollection을 이용한 ComboBox의 ComboBoxItem추가, ComboBoxItem의 Content출력

#MainWindow.xaml
~~~c#
<StackPanel>
    <ComboBox Name="cbox" Width="100" Height="30" ItemsSource="{Binding GetDataList}">
        <ComboBox.ItemTemplate>
            <DataTemplate>
                <Grid>
                    <TextBlock Text="{Binding List1}"/>
                </Grid>
            </DataTemplate>
        </ComboBox.ItemTemplate>
    </ComboBox>
    <Button Width="100" Content="버튼" Click="Button_Click"/>
</StackPanel>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();

        GetDataList = new ObservableCollection<GetData>();
        GetDataList.Add(new GetData() { List1 = "1번"});

        this.DataContext = this;
    }

    private ObservableCollection<GetData> m_GetDataList;
    public ObservableCollection<GetData> GetDataList
    {
        get { return m_GetDataList; }
        set
        {
            if(m_GetDataList != value)
            {
                m_GetDataList = value;
            }
        }
    }

    public class GetData
    {
        private string m_List1;
        public string List1
        {
            get { return m_List1; }
            set
            {
                if (m_List1 != value)
                {
                    m_List1 = value;
                }
            }
        }
    }

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        MessageBox.Show(((GetData)cbox.SelectedItem).List1.ToString());
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152634252-d19654b9-506d-42b8-a707-02941430e593.png">  
<img src="https://user-images.githubusercontent.com/39178978/152634277-ec3dfa94-a10f-4fb3-bf1f-615db7f5e290.png">  

<br/><br/>

  - 하지만 여기서 ComboBox속성중 IsEditable="True"으로 하게 되면 ComboBoxItem의 Content가 잘 나오지 않게 된다

<br/>

<img src="https://user-images.githubusercontent.com/39178978/152634331-340e05c5-507d-481e-a1fd-3dad9d06c5df.png"> 

  - 이럴땐 foreach를 활용해서 출력해주면 해결된다

#MainWindow.xaml
~~~c#
<StackPanel>
    <ComboBox Name="cbox" Width="100" Height="30" IsEditable="True">
        <!--<ComboBox.ItemTemplate>
            <DataTemplate>
                <Grid>
                    <TextBlock Text="{Binding List1}"/>
                </Grid>
            </DataTemplate>
        </ComboBox.ItemTemplate>-->
    </ComboBox>
    <Button Width="100" Content="버튼" Click="Button_Click"/>
</StackPanel>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        GetData_ComboBoxItem();

        this.DataContext = this;
    }
    public void GetData_ComboBoxItem()
    {
        cbox.Items.Clear();
        foreach(var item in GetData_GetDataList())
        {
            ComboBoxItem cbi = new ComboBoxItem();
            cbi.Content = item.List1.ToString();
            cbox.Items.Add(cbi);
        }
    }

    public ObservableCollection<GetData> GetData_GetDataList()
    {
        GetDataList = new ObservableCollection<GetData>();
        GetDataList.Add(new GetData() { List1 = "1번"});

        return GetDataList;
    }

    private ObservableCollection<GetData> m_GetDataList;
    public ObservableCollection<GetData> GetDataList
    {
        get { return m_GetDataList; }
        set
        {
            if(m_GetDataList != value)
            {
                m_GetDataList = value;
            }
        }
    }

    public class GetData
    {
        private string m_List1;
        public string List1
        {
            get { return m_List1; }
            set
            {
                if (m_List1 != value)
                {
                    m_List1 = value;
                }
            }
        }
    }

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        MessageBox.Show(((ComboBoxItem)cbox.SelectedItem).Content.ToString());
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152634765-c98a39f4-ec57-4510-a3a5-1ddf1d94e5af.png">

<br/>
<br/>

  - 각각의 ComboBoxitem을 분리해서 나타나게 하기

#MainWindow.xaml
~~~c#
<StackPanel Orientation="Horizontal" HorizontalAlignment="Center">
    <ComboBox Width="100" Height="30" ItemsSource="{Binding Obser_Fruit_list}" Margin="10" SelectedItem="{Binding Fruit_list_SelectedItem}">
        <ComboBox.ItemTemplate>
            <DataTemplate>
                <TextBlock Text="{Binding Fruit_name}"/>
            </DataTemplate>
        </ComboBox.ItemTemplate>
    </ComboBox>

    <ComboBox Width="100" Height="30" ItemsSource="{Binding Obser_Price_list}" Margin="10">
        <ComboBox.ItemTemplate>
            <DataTemplate>
                <TextBlock Text="{Binding Price_name}"/>
            </DataTemplate>
        </ComboBox.ItemTemplate>
    </ComboBox>
</StackPanel>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
public partial class MainWindow : Window, INotifyPropertyChanged
{
    public MainWindow()
    {
        InitializeComponent();
        Getdata_Obser_Fruit_list();
        this.DataContext = this;
    }

    private ObservableCollection<Fruit_list> m_Obser_Fruit_list = new ObservableCollection<Fruit_list>();
    public ObservableCollection<Fruit_list> Obser_Fruit_list
    {
        get { return m_Obser_Fruit_list; }
        set
        {
            if(m_Obser_Fruit_list != value)
            {
                m_Obser_Fruit_list = value;
                Notify("Obser_Fruit_list");

            }
        }
    }

    private ObservableCollection<Price_list> m_Obser_Price_list = new ObservableCollection<Price_list>();
    public ObservableCollection<Price_list> Obser_Price_list
    {
        get { return m_Obser_Price_list; }
        set
        {
            if (m_Obser_Price_list != value)
            {
                m_Obser_Price_list = value;
                Notify("Obser_Price_list");

            }
        }
    }


    private Fruit_list m_Fruit_list_SelectedItem;
    public Fruit_list Fruit_list_SelectedItem
    {
        get { return m_Fruit_list_SelectedItem; }
        set
        {
            if(m_Fruit_list_SelectedItem != value)
            {
                m_Fruit_list_SelectedItem = value;
                Notify("Fruit_list_SelectedItem");

                Obser_Price_list.Clear();

                if (m_Fruit_list_SelectedItem != null)
                {
                    if (m_Fruit_list_SelectedItem.Fruit_name == "Apple")
                    {
                        Obser_Price_list.Add(new Price_list() { Price_name = "1000" });
                        Obser_Price_list.Add(new Price_list() { Price_name = "2000" });
                        Obser_Price_list.Add(new Price_list() { Price_name = "3000" });
                        Obser_Price_list.Add(new Price_list() { Price_name = "4000" });
                    }
                    else if (m_Fruit_list_SelectedItem.Fruit_name == "Banana")
                    {
                        Obser_Price_list.Add(new Price_list() { Price_name = "5000" });
                        Obser_Price_list.Add(new Price_list() { Price_name = "6000" });
                        Obser_Price_list.Add(new Price_list() { Price_name = "7000" });
                        Obser_Price_list.Add(new Price_list() { Price_name = "8000" });
                    }
                }
            }
        }
    }
    public void Getdata_Obser_Fruit_list()
    {
        Obser_Fruit_list.Add(new Fruit_list() { Fruit_name = "Apple"});
        Obser_Fruit_list.Add(new Fruit_list() { Fruit_name = "Banana"});
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propertyName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
        }
    }
    #endregion
}
~~~

<br/>

#Fruit_list.cs
~~~c#
public class Fruit_list : INotifyPropertyChanged
{
    private string m_Fruit_name;
    public string Fruit_name
    {
        get { return m_Fruit_name; }
        set
        {
            if(m_Fruit_name != value)
            {
                m_Fruit_name = value;
                Notify("Fruit_name");
            }
        }
    }

        

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propertyName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
        }
    }
    #endregion
}
~~~

<br/>

#Price_list.cs
~~~c#
public class Price_list : INotifyPropertyChanged
{
    private string m_Price_name;
    public string Price_name
    {
        get { return m_Price_name; }
        set
        {
            if (m_Price_name != value)
            {
                m_Price_name = value;
                Notify("Price_name");
            }
        }
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propertyName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
        }
    }
    #endregion
}
~~~

<br/>

<img src="https://user-images.githubusercontent.com/39178978/158348530-424eafe3-55b9-4882-a314-2d5b281d5e4a.png">

<br/>

<img src="https://user-images.githubusercontent.com/39178978/158348673-70cfd96b-2b96-4eed-8144-f0a2990f437a.png">

###### [Selector](#selector)
###### [Top](#top)

<br/>
<br/>

# ListBox
  - 상속 : Object - DispatcherObject - DependencyObject - Visual - UIElement - FrameworkElement - Control - ItemsControl - Selector
  - List목록을 만들어줌
  - ListBoxItem : List내부의 목록을 만들어줌

<br/>

  - [ListView](lListview)

#MainWindow.xaml
~~~c#
<ListBox>
    <ListBoxItem Content="사과"/>
    <ListBoxItem Content="포도"/>
    <ListBoxItem Content="배"/>
    <ListBoxItem Content="딸기"/>
    <ListBoxItem Content="메론"/>
</ListBox>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152623676-b2a1e970-68a7-4c82-9c6a-9b2edbd7df18.png">

<br/>
<br/>

  - ListBoxItem목록에서 Content출력하기

#MainWindow.xaml
~~~c#
<StackPanel>
    <ListBox x:Name="listbox">
        <ListBoxItem Content="사과"/>
        <ListBoxItem Content="포도"/>
        <ListBoxItem Content="배"/>
        <ListBoxItem Content="딸기"/>
        <ListBoxItem Content="메론"/>
    </ListBox>
    <Button Width="100" Content="선택" Click="Button_Click"/>
</StackPanel>
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

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        MessageBox.Show(((ListBoxItem)listbox.SelectedItem).Content.ToString());
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152624081-24ddc690-9abe-4806-8450-6dd4b2128632.png">

<br/>
<br/>

  - ListBox바인딩 및 MessageBox로 출력하기

#MainWindow.xaml
~~~c#
<StackPanel>
    <ListBox x:Name="listbox" ItemsSource="{Binding Apple_list}">
        <ListBox.ItemTemplate>
            <DataTemplate>
                <Grid>
                    <Grid.ColumnDefinitions>
                        <ColumnDefinition/>
                        <ColumnDefinition/>
                    </Grid.ColumnDefinitions>
                    <TextBlock Text="{Binding Name}"/>
                    <TextBlock Grid.Column="1" Text="{Binding Price}" Margin="3 0"/>
                </Grid>
            </DataTemplate>
        </ListBox.ItemTemplate>
    </ListBox>
    <Button Width="100" Content="선택" Click="Button_Click"/>
</StackPanel>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152624154-53635d8d-7488-4f20-8a47-f0c3e11f4f62.png">

<br/>

#MainWindow.xaml.cs
~~~c#
public partial class MainWindow : Window, INotifyPropertyChanged
{
    public MainWindow()
    {
        InitializeComponent();
        this.DataContext = this;
        Apple_list = new ObservableCollection<Apple>();
        Apple_list.Add(new Apple() { Name = "사과", Price = 1000});
        Apple_list.Add(new Apple() { Name = "포도", Price = 2000});
        Apple_list.Add(new Apple() { Name = "배", Price = 3000});

    }
    private void Button_Click(object sender, RoutedEventArgs e)
    {
        MessageBox.Show("이름 : " + ((Apple)listbox.SelectedItem).Name + "\n" + "가격 : " + ((Apple)listbox.SelectedItem).Price.ToString());
    }

    private ObservableCollection<Apple> m_Apple_list;
    public ObservableCollection<Apple> Apple_list
    {
        get { return m_Apple_list; }
        set
        {
            if (m_Apple_list != value)
            {
                m_Apple_list = value;
                Norty("Apple_list");
            }
        }
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Norty(string name)
    {
        PropertyChangedEventHandler handler = PropertyChanged;
        if (handler != null)
        {
            handler(this, new PropertyChangedEventArgs(name));
        }
    }
    #endregion
}

public class Apple : INotifyPropertyChanged
{
    private string m_Name = "0";
    public string Name
    {
        get { return m_Name; }
        set
        {
            if (m_Name != value)
            {
                m_Name = value;
                Norty("Price");
            }
        }
    }

    private int m_Price = 0;
    public int Price
    {
        get { return m_Price; }
        set
        {
            if (m_Price != value)
            {
                m_Price = value;
                Norty("Price");
            }
        }
    }

    public Apple()
    {

    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Norty(string name)
    {
        PropertyChangedEventHandler handler = PropertyChanged;
        if (handler != null)
        {
            handler(this, new PropertyChangedEventArgs(name));
        }
    }
    #endregion
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152624201-265de94a-3442-4792-90ea-dbf127bebeea.png">

<br/>
<br/>

  - ItemsSource
    - ItemsControl을 상속받은 컨트롤들(TabControl, ComboBox, ListBox, ListView 등)을 Binding작업할때 사용

#MainWindow.xaml
~~~c#
<Grid>
    <ListView ItemsSource="{Binding Class1_list}">
        <ListView.View>
            <GridView>
                <GridViewColumn Width="100" DisplayMemberBinding="{Binding Name}"/>
                <GridViewColumn Width="100" DisplayMemberBinding="{Binding Age}"/>
            </GridView>
        </ListView.View>
    </ListView>
</Grid>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
public partial class MainWindow : Window,INotifyPropertyChanged
{
    public MainWindow()
    {
        InitializeComponent();
        Class1_list = new ObservableCollection<Class1>();
        Class1_list.Add(new Class1() { Age=10, Name="PAPA"});
        this.DataContext = this;
    }

    private ObservableCollection<Class1> m_Class1_list;
    public ObservableCollection<Class1> Class1_list
    {
        get { return m_Class1_list; }
        set
        {
            if(m_Class1_list != value)
            {
                m_Class1_list = value;
                Notify("Class1_list");
            }
        }
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propertyName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
        }
    }
    #endregion
}
~~~

<br/>

#Class1.cs
~~~
public class Class1 : INotifyPropertyChanged
{
    private string m_Name;
    public string Name
    {
        get { return m_Name; }
        set
        {
            if(m_Name != value)
            {
                m_Name = value;
                Notify("Name");
            }
        }
    }

    private int m_Age;
    public int Age
    {
        get { return m_Age; }
        set
        {
            if (m_Age != value)
            {
                m_Age = value;
                Notify("Age");
            }
        }
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propertyName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
        }
    }
    #endregion
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/154080138-6a6e136b-3475-446a-9ed4-8e56fdcc33b2.png">

###### [Selector](#selector)
###### [Top](#top)

<br/>
<br/>

# ListView
  - Selector를 상속받은 속성 활용
  - SelectedItem, SelectedItems, SelectedIndex, SelectedValue, SelectedValuedPath

<br/>
<br/>

  - SelectedItem

#MainWindow.xaml
~~~c#
<ListView x:Name="listv">
    <ListViewItem Content="1일"/>
    <ListViewItem Content="2일"/>
    <ListViewItem Content="3일"/>
    <ListViewItem Content="4일"/>
    <ListViewItem Content="5일"/>
    <ListViewItem Content="6일"/>
    <Button Width="100" Height="30" Content="선택" Click="Button_Click"/>
</ListView>
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

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        MessageBox.Show(listv.SelectedItem.ToString()); // 0부터 시작
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152518058-4cb3e9f6-b744-442e-a980-07786e121536.png">

<br/>
<br/>

  - SelectedItem에 대한 Content만 뽑아내기

#MainWindow.xaml
~~~c#
<ListView x:Name="listv">
    <ListViewItem Content="1일"/>
    <ListViewItem Content="2일"/>
    <ListViewItem Content="3일"/>
    <ListViewItem Content="4일"/>
    <ListViewItem Content="5일"/>
    <ListViewItem Content="6일"/>
    <Button Width="100" Height="30" Content="선택" Click="Button_Click"/>
</ListView>
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

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        MessageBox.Show(((ListViewItem)listv.SelectedItem).Content.ToString()); // 0부터 시작
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152519055-3640bb45-fc94-499b-a3b9-959a3a7557f0.png">

<br/>
<br/>

  - SelectedIndex

#MainWindow.xaml
~~~c#
<ListView x:Name="listv">
    <ListViewItem Content="1일"/>
    <ListViewItem Content="2일"/>
    <ListViewItem Content="3일"/>
    <ListViewItem Content="4일"/>
    <ListViewItem Content="5일"/>
    <ListViewItem Content="6일"/>
    <Button Width="100" Height="30" Content="선택" Click="Button_Click"/>
</ListView>
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

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        MessageBox.Show(listv.SelectedIndex.ToString()); // 0부터 시작
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152517500-e7a55889-e2d2-4388-9847-d321ef45fd06.png">

<br/>
<br/>

  - ListView헤더 크기를 비율로 조절하기(Binding활용)
    - ListView안쪽에서는 Grid를 따로 만들어 RowDefinition, ColumnDefinition을 통한 Height="1*"의 조절이 되지 않기 때문에 Grid와 Border값을 새로 하나 만들어 GridViewColumn Width="{Binding ElementName=dummywidth1, Path=ActualWidth}"이 방법을 통해서 크기를 맞춰 줄 수 있다.

#MainWindow.xaml
~~~c#
<Grid>
    <Grid Grid.Row="1" Grid.Column="1" Grid.RowSpan="2" Margin="10" Visibility="Hidden">
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="1*"/>
            <ColumnDefinition Width="1*"/>
        </Grid.ColumnDefinitions>
        <Border Grid.Column="0" x:Name="dummywidth1"/>
        <Border Grid.Column="1" x:Name="dummywidth2"/>
    </Grid>

    <ListView Grid.Row="1" Grid.Column="1" Grid.RowSpan="2" Margin="10">
        <ListView.View>
            <GridView>
                <GridViewColumn Width="{Binding ElementName=dummywidth1, Path=ActualWidth}" Header="RGB"/>
                <GridViewColumn Width="{Binding ElementName=dummywidth2, Path=ActualWidth}" Header="HEX"/>
            </GridView>
        </ListView.View>
    </ListView>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/151750523-8d72597c-0fb8-4b9a-9de1-6fea134b7861.png">

<br/>
<br/>

  - DisplayMemberBinding
    - ListView에 Binding을 하기 위해서는ObservableCollection을 만들어 Binding을 해야
    - GridViewColumn에 DisplayMemberBinding을 통해서 Binding 가능

#MainWindow.xaml
~~~c#
<Grid>
    <Grid Grid.Row="1" Grid.Column="1" Grid.RowSpan="2" Margin="10" Visibility="Hidden">
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="1*"/>
            <ColumnDefinition Width="1*"/>
        </Grid.ColumnDefinitions>
        <Border Grid.Column="0" x:Name="dummywidth1"/>
        <Border Grid.Column="1" x:Name="dummywidth2"/>
    </Grid>

    <ListView Grid.Row="1" Grid.Column="1" Grid.RowSpan="2" Margin="10" ItemsSource="{Binding RGB_HEX_List}">
        <ListView.View>
            <GridView>
                <GridViewColumn Width="{Binding ElementName=dummywidth1, Path=ActualWidth}" Header="RGB" DisplayMemberBinding="{Binding RGB}"/>
                <GridViewColumn Width="{Binding ElementName=dummywidth2, Path=ActualWidth}" Header="HEX" DisplayMemberBinding="{Binding HEX}"/>
            </GridView>
        </ListView.View>
    </ListView>
</Grid>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
public partial class MainWindow : Window, INotifyPropertyChanged
{
    public MainWindow()
    {
        InitializeComponent();
        this.DataContext = this;

        RGB_HEX_List = new ObservableCollection<RGB_HEX>();
        RGB_HEX_List.Add(new RGB_HEX { HEX = "1", RGB = 1 });
    }

    private ObservableCollection<RGB_HEX> m_RGB_HEX_List;
    public ObservableCollection<RGB_HEX> RGB_HEX_List
    {
        get { return m_RGB_HEX_List; }
        set
        {
            if (m_RGB_HEX_List != value)
            {
                m_RGB_HEX_List = value;
                Notify("RGB_HEX_List");
            }
        }
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify(string propName)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propName));
        }
    }
    #endregion
}
~~~

<br/>

#RGB_HEX.cs
~~~
public class RGB_HEX : INotifyPropertyChanged
    {
        private int m_RGB;
        public int RGB
        {
            get { return m_RGB; }
            set
            {
                if(m_RGB != value)
                {
                    m_RGB = value;
                }
            }
        }

        private string m_HEX;
        public string HEX
        {
            get { return m_HEX; }
            set
            {
                if (m_HEX != value)
                {
                    m_HEX = value;
                }
            }
        }

        #region INotifyPropertyChanged
        public event PropertyChangedEventHandler? PropertyChanged;
        protected void Notify(string propName)
        {
            if (this.PropertyChanged != null)
            {
                this.PropertyChanged(this, new PropertyChangedEventArgs(propName));
            }
        }
        #endregion
    }
~~~

<img src="https://user-images.githubusercontent.com/39178978/151805276-717892ef-8192-4150-9118-fd928e956dd2.png">

###### [Selector](#selector)
###### [Top](#top)

<br/>
<br/>

***

# ItemsControl
  - ItemsSource를 통해 데이터 적용
  - ItemsControl.ItemsPanel을 통해서 ItemsControl에서 출력되는 아이템들의 배치를 조절

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="test1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:test1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="426">

    <Grid>
        <ItemsControl ItemsSource="{Binding MenuTab}" VerticalAlignment="Top" HorizontalAlignment="Left">
            <ItemsControl.ItemsPanel>
                <ItemsPanelTemplate>
                    <StackPanel Orientation="Horizontal"/>
                </ItemsPanelTemplate>
            </ItemsControl.ItemsPanel>
        </ItemsControl>
    </Grid>
</Window>
~~~

<br/>

  - [ItemsControl 을 class를 xml로 불러오기](#itemscontrol-을-class를-xml로-불러오기)
  - [ItemsControl 을 class를 xml로 불러오기2](#itemscontrol-을-class를-xml로-불러오기2)
  - [ItemsControl을 Style적용시키기](#itemscontrol을-style적용시키기)


###### [ItemsControl](#itemscontrol)
###### [Top](#top)

<br/>
<br/>

# ItemsControl 을 class를 xml로 불러오기
    - 아래와 같은 코드에, ItemsSource나 ItemsPanel을 설정해서 위와 같이 적용할 수 있다

#MainWindow.xaml
~~~c#
<Window x:Class="test1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:test1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="426">

    <Grid>
        <local:Control/>
    </Grid>
</Window>
~~~

<br/>

#Control.xaml
~~~c#
<ItemsControl x:Class="test1.Control"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:test1"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <Grid>
        <Button Width="100" Height="100" Content="{Binding Id}"/>
        <TextBlock Text="{Binding Pw}"/>
    </Grid>
</ItemsControl>
~~~

<br/>

#Control.xaml.cs
~~~c#
using System.Windows.Controls;

namespace test1
{
    /// <summary>
    /// Control.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class Control : ItemsControl
    {
        public Control()
        {
            InitializeComponent();
        }
    }
}
~~~

![20231009_135603](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/4abd1783-7a1b-41ba-b6ed-e6f8e85dc318)

###### [ItemsControl](#itemscontrol)
###### [Top](#top)

<br/>
<br/>

# ItemsControl 을 class를 xml로 불러오기2

#MainWindow.xaml
~~~c#
<Window x:Class="test1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:vm="clr-namespace:Sample.Data;assembly=Sample.Data"
        xmlns:local="clr-namespace:test1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="426">

    <Window.DataContext>
        <vm:MainView />
    </Window.DataContext>


    <Grid Width="1024" Height="768">
        <local:Control ItemsSource="{Binding MenuTab}" VerticalAlignment="Top" HorizontalAlignment="Left">
        </local:Control>
    </Grid>
</Window>
~~~

<br/>

#Control.xaml
~~~c#
<ItemsControl x:Class="test1.Control"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:test1"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">

    <ItemsControl.ItemTemplate>
        <DataTemplate>
            <local:UserControl_TabHead />
        </DataTemplate>
    </ItemsControl.ItemTemplate>

    <ItemsControl.ItemsPanel>
        <ItemsPanelTemplate>
            <StackPanel Orientation="Vertical"/>
        </ItemsPanelTemplate>
    </ItemsControl.ItemsPanel>
</ItemsControl>
~~~

<br/>

#Control.xaml.cs
~~~c#
using System.Windows.Controls;

namespace test1
{
    /// <summary>
    /// Control.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class Control : ItemsControl
    {
        public Control()
        {
            InitializeComponent();
        }
    }
}
~~~

<br/>

#UserControl_TabHead.xaml
~~~c#
<UserControl x:Class="test1.UserControl_TabHead"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:test1"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <Grid>
        <Button Width="100" Height="100" Content="{Binding Id}"/>
        <TextBlock Text="{Binding Pw}"/>
    </Grid>
</UserControl>
~~~

<br/>

#MainView.cs
~~~c#
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Sample.Data
{
    public class MainView
    {
        public MainView()
        {
            MenuTab = new ObservableCollection<TabHead>()
            {
                new TabHead(),
                new TabHead()
            };
        }

        ObservableCollection<TabHead> _menuTab = null;
        public ObservableCollection<TabHead> MenuTab
        {
            get => _menuTab;
            private set
            {
                _menuTab = value;
            }
        }
    }

}
~~~

<br/>

#TabHead.cs
~~~c#
namespace Sample.Data
{
    public class TabHead
    {
        string _Id = "aaa";
        public string Id
        {
            get => _Id;
            set
            {
                _Id = value;
            }
        }


        bool _Pw = false;
        public bool Pw
        {
            get => _Pw;
            set
            {
                _Pw = value;
            }
        }
    }
}
~~~

![20231009_135838](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/f7cec09c-c483-45b1-8d4a-f0e38bcc84c6)

###### [ItemsControl](#itemscontrol)
###### [Top](#top)

<br/>
<br/>

# ItemsControl을 Style적용시키기
    - 특정 패널 안쪽에, Style태그를 사용할 수 있고, TargetType또한 지정해서 사용할 수 있음. 해당 패널의 다른것을 TargetType으로 지정하면 에러가 발생함

#MainWindow.xaml
~~~c#
<Window x:Class="test1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:test1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="426">


    <Grid Width="1024" Height="768">
        <local:Control ItemsSource="{Binding MenuTab}" VerticalAlignment="Top" HorizontalAlignment="Left">
            <Control.Style>
                <Style TargetType="ItemsControl">
                    <Setter Property="Visibility" Value="Visible"/>
                </Style>
            </Control.Style>
        </local:Control>
    </Grid>
</Window>
~~~

###### [ItemsControl](#itemscontrol)
###### [Top](#top)

<br/>
<br/>

***

# 트리거
  - 어떤 속성이 만족했을 경우에 작동하게 된다
  - 트리거 종류
    - EventTrigger
    - MultiDataTrigger
    - MultiTrigger
    - Trigger
  - 애니메이션 만들기
    - Trigger.EnterActions
    - Trigger.ExitActions
      - To : 최종값
      - Duration : 지속시간
      - Stroyboard.TargetProperty : 애니메이션을 적용할 속성

<br/>

  - [Trigger](#trigger)
  - [애니메이션](#애니메이션)
  - [MultiTrigger](#multitrigger)
  - [DataTrigger](#datatrigger)

###### [트리거](#트리거)
###### [Top](#top)

<br/>
<br/>

# Trigger
  - 아래의 Trigger는 Text가 없다면 빨간색으로 표시하라는것

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <Window.Resources>
        <Style x:Key="NameBox" TargetType="TextBox">
            <Setter Property="Background" Value="Aquamarine"/>
            <Setter Property="Margin"  Value="5,0,5,5"/>

            <Style.Triggers>
                <Trigger Property="Text" Value="">
                    <Setter Property="Background" Value="red"/>
                </Trigger>
            </Style.Triggers>
        </Style>
    </Window.Resources>

    <StackPanel>
        <Label Content="이름"/>
        <TextBox Style="{StaticResource NameBox}"/>
        <Label Content="아이디"/>
        <TextBox Style="{StaticResource NameBox}"/>
    </StackPanel>
</Window>
~~~

![20231009_140631](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/0944ad96-7202-4624-b8c2-f633fec73d32)

###### [트리거](#트리거)
###### [Top](#top)

<br/>
<br/>

# 애니메이션

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <Window.Resources>
        <Style x:Key="ButtonStyle" TargetType="Button">
            <Setter Property="HorizontalAlignment" Value="Right"/>
            <Setter Property="Margin" Value="0,20,0,0"/>
            <Setter Property="Opacity" Value="0.5"/>
            <Setter Property="Width" Value="100"/>

            <Style.Triggers>
                <Trigger Property="IsMouseOver" Value="True">
                    <Trigger.EnterActions>
                        <BeginStoryboard>
                            <Storyboard>
                                <DoubleAnimation To="1" Duration="0:0:1"
                                                Storyboard.TargetProperty="Opacity"/>
                            </Storyboard>
                        </BeginStoryboard>
                    </Trigger.EnterActions>
                    <Trigger.ExitActions>
                        <BeginStoryboard>
                            <Storyboard>
                                <DoubleAnimation To="0.5" Duration="0:0:1"
                                                Storyboard.TargetProperty="Opacity"/>
                            </Storyboard>
                        </BeginStoryboard>
                    </Trigger.ExitActions>
                </Trigger>
            </Style.Triggers>
        </Style>
    </Window.Resources>

    <StackPanel Orientation="Horizontal" HorizontalAlignment="Right">
        <Button Style="{StaticResource ButtonStyle}">확인</Button>
        <Button Style="{StaticResource ButtonStyle}">취소</Button>
    </StackPanel>
</Window>
~~~

![20231009_140710](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/a230c25a-8477-423d-bc48-95f79336aff7)

###### [트리거](#트리거)
###### [Top](#top)

<br/>
<br/>

# MultiTrigger
  -  정의 된 모든 트리거가 작동이 되면 작동된다.

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <Window.Resources>
        <Style TargetType="ListBoxItem">
            <Setter Property="Background" Value="Aqua"/>

            <Style.Triggers>
                <MultiTrigger>
                    <MultiTrigger.Conditions>
                        <Condition Property="IsMouseOver" Value="True"/>
                        <Condition Property="Content" Value="목록3"/>
                    </MultiTrigger.Conditions>
                    <MultiTrigger.Setters>
                        <Setter Property="Foreground" Value="red"/>
                        <Setter Property="FontSize" Value="15"/>
                    </MultiTrigger.Setters>
                </MultiTrigger>

            </Style.Triggers>
        </Style>
    </Window.Resources>

    <ListBox>
        <ListBoxItem>목록1</ListBoxItem>
        <ListBoxItem>목록2</ListBoxItem>
        <ListBoxItem>목록3</ListBoxItem>
        <ListBoxItem>목록4</ListBoxItem>
        <ListBoxItem>목록5</ListBoxItem>
        <ListBoxItem>목록6</ListBoxItem>
        <ListBoxItem>목록7</ListBoxItem>
        <ListBoxItem>목록8</ListBoxItem>
        <ListBoxItem>목록9</ListBoxItem>
        <ListBoxItem>목록10</ListBoxItem>
    </ListBox>
</Window>
~~~

![20231009_140748](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/d867daab-03ef-4441-9afc-9785a2fa074d)

###### [트리거](#트리거)
###### [Top](#top)

<br/>
<br/>

# DataTrigger
  - Binding한 변수의 데이터가 Value값을 가졌을 경우 작동 된다

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="350" Width="300">
    <Window.Resources>
        <Style TargetType="ProgressBar">
            <Setter Property="Foreground" Value="Aqua"/>

            <Style.Triggers>
                <DataTrigger Binding="{Binding TheValue}" Value="100">
                    <Setter Property="Foreground" Value="Red"/>
                </DataTrigger>
            </Style.Triggers>
        </Style>
    </Window.Resources>

    <Grid>
        <Grid.RowDefinitions>
            <RowDefinition/>
            <RowDefinition/>
        </Grid.RowDefinitions>

        <Slider Name="slider" Margin="5" Minimum="0" Maximum="100" Value="{Binding TheValue}"/>
        <ProgressBar Grid.Row="1" Value="{Binding TheValue}"/>
    </Grid>
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
using System.Windows;

namespace WpfApp1
{
    /// <summary>
    /// MainWindow.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            DataContext = new MyObject();
        }
    }

    public class MyObject
    {
        public int TheValue { get; set; }
    }
}
~~~

![20231009_140850](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/6897431e-f084-43d0-af29-1378a0bd97a1)

###### [트리거](#트리거)
###### [Top](#top)

<br/>
<br/>

***

# ControlTemplate
  - 기본 컨트롤 모양 바꾸기(Template)(ControlTemplate)
    - 기본 컨트롤의 모양을 바꿀 수 있음
    - ControlTemplate 개체 내의 새로운 템플릿을 만든다.
    - Template 속성을 이용해서 적용을 한다.
  - ControlTemplate속성을 사용하고 있다면 Button 내부에 직접 속성을 바꿔도 바뀌지가 않는다.

#MainWindow.xaml
~~~c#
 <Window.Resources>
       <ControlTemplate x:Key="UserButton" TargetType="Button">
           <Grid>
               <Border Background="DarkGreen" Margin="5,5,0,0"/>
               <Border BorderBrush="Black" BorderThickness="1"
                   Background="Aquamarine" Margin="0,0,5,5">
                   <TextBlock HorizontalAlignment="Center" VerticalAlignment="Center">확인</TextBlock>
               </Border>
           </Grid>
       </ControlTemplate>
   </Window.Resources>

   <Grid>
       <Button Width="100" Height="50" Template="{StaticResource UserButton}">확인</Button>
   </Grid>
~~~

![20231009_155021](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/788875db-3a0c-4b5e-8360-92c5225a0338)

<br/>

  - [버튼 모양 바꾸기](#버튼-모양-바꾸기)

###### [ControlTemplate](#controltemplate)
###### [Top](#top)

<br/>
<br/>

# 버튼 모양 바꾸기

#MainWindow.xaml
~~~c#
<Grid>
        <Button Width="100" Height="30" Content="버튼" Click="Button_Click">
            <Button.Template>
                <ControlTemplate TargetType="{x:Type Button}">
                    <Grid>
                        <Ellipse Width="100" Height="30" Fill="Yellow" Stroke="Black"/>
                        <ContentPresenter VerticalAlignment="Center" HorizontalAlignment="Center"/>
                    </Grid>
                </ControlTemplate>
            </Button.Template>
        </Button>
    </Grid>
~~~

![20231009_155125](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/faa31a73-1127-4c06-a99c-6bbce5e6f03d)

###### [ControlTemplate](#controltemplate)
###### [Top](#top)

<br/>
<br/>

***

# Converter

#MainWindow.xaml
~~~c#
 <Window.Resources>
        <local:IntToColorConverter x:Key="IntToColorConverter"/>
        <local:DoubleNumConverter x:Key="DoubleNumConverter"/>
    </Window.Resources>
    <Grid Background="{Binding PersonCount, Converter={StaticResource IntToColorConverter}}">
        <TextBox HorizontalAlignment="Center" VerticalAlignment="Center" Width="80" Height="50" FontSize="25" Text="{Binding PersonCount, Converter={StaticResource DoubleNumConverter}, UpdateSourceTrigger=PropertyChanged}"/>
    </Grid>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.Runtime.CompilerServices;
using System.Windows;
using System.Windows.Data;
using System.Windows.Media;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window, INotifyPropertyChanged
    {
        public MainWindow()
        {
            InitializeComponent();
            this.DataContext = this;
        }

        private int _personCount;
        public int PersonCount
        {
            get => _personCount;
            set
            {
                _personCount = value;
                Notify();
            }
        }

        #region INotifyPropertyChanged
        public event PropertyChangedEventHandler? PropertyChanged;
        protected void Notify([CallerMemberName] string propertyName = null)
        {
            if (this.PropertyChanged != null)
            {
                this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
            }
        }
        #endregion
    }

    public class IntToColorConverter : IValueConverter
    {
        // ViewModel -> View
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            SolidColorBrush color = new SolidColorBrush(Colors.Transparent);
            if (value == null)
            {
                return color;
            }
            int personCount = (int)value;

            // 5인 이상 집합 금지!
            if (personCount >= 5)
            {
                color = new SolidColorBrush(Colors.Red);
            }

            return color;
        }

        // View -> ViewModel
        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }

    public class DoubleNumConverter : IValueConverter
    {
        // ViewModel -> View
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            return value;
        }

        // View -> ViewModel
        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            int DoubleNum = int.Parse((string)value);
            return DoubleNum * 2;
        }
    }
}

~~~

###### [Converter](#Converter)
###### [Top](#top)

<br/>
<br/>

***

# 데이터 연결하기
  - [자기 자신 class](#자기-자신-class)
  - [다른 class](#다른-class)
  - [xaml_Window.DataContext](#xaml_windowdatacontext)
  - [xaml_Window.DataContext_다른프로젝트](#xaml_windowdatacontext_다른프로젝트)

<br/>

###### [데이터 연결하기](#데이터-연결하기)
###### [Top](#top)

<br/>
<br/>

# 자기 자신 class
  - 현재 화면에, this(즉 자기 자신)의 데이터를 연결하겠다

#MainWindow.xaml
~~~c#
<Window x:Class="test1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:test1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="426">
    <Grid>
        <TextBlock Width="100" Height="100" Text="{Binding tbValue}"/>
    </Grid>
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
using System.Windows;

namespace test1
{
    /// <summary>
    /// MainWindow.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            this.DataContext = this;
        }

        private string m_tbValue = "testmodel";
        public string tbValue
        {
            get { return m_tbValue; }
            set
            {
                if (m_tbValue != value)
                {
                    m_tbValue = value;
                }
            }
        }
    }
}
~~~

###### [데이터 연결하기](#데이터-연결하기)
###### [Top](#top)

<br/>
<br/>

# 다른 class

#MainWindow.xaml
~~~c#
<Window x:Class="test1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:test1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="426">
    <Grid>
        <TextBlock Width="100" Height="100" Text="{Binding tbValue}"/>
    </Grid>
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
using System.Windows;

namespace test1
{
    /// <summary>
    /// MainWindow.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            this.DataContext = new Bus();
        }
    }

    public class Bus
    {
        public Bus()
        {

        }

        private string m_tbValue = "testmodel";
        public string tbValue
        {
            get { return m_tbValue; }
            set
            {
                if (m_tbValue != value)
                {
                    m_tbValue = value;
                }
            }
        }
    }
}
~~~

###### [데이터 연결하기](#데이터-연결하기)
###### [Top](#top)

<br/>
<br/>
# xaml_Window.DataContext
  - Window.DataContext 속성은 하나만 설정이 가능하다
  - xaml에 딸려 오는 xaml.cs만 가능한 것이 아니라, 일반 cs파일안에 class라면 DataContext작업을 할 수 있다

#MainWindow.xaml
~~~c#
<Window x:Class="test1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:test1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="426">

    <Window.DataContext>
        <local:Bus/>
    </Window.DataContext>

    <Grid>
        <TextBlock Width="100" Height="100" Text="{Binding tbValue}"/>
    </Grid>
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
using System.Windows;

namespace test1
{
    /// <summary>
    /// MainWindow.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
    }

    public class Bus
    {
        public Bus()
        {

        }

        private string m_tbValue = "testmodel";
        public string tbValue
        {
            get { return m_tbValue; }
            set
            {
                if (m_tbValue != value)
                {
                    m_tbValue = value;
                }
            }
        }
    }
}
~~~

###### [데이터 연결하기](#데이터-연결하기)
###### [Top](#top)

<br/>
<br/>

# xaml_Window.DataContext_다른프로젝트
  - 참조 연결하기
    - 현재 있는것 여기에 연결하기
  - 네임스페이스 지정하기
  - Window.DataContext 사용하기

#MainWindow.xaml
~~~c#
<Window x:Class="test1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:test1"
        xmlns:Data="clr-namespace:Sample.Data;assembly=Sample.Data"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="426">

    <Window.DataContext>
        <Data:MainView/>
    </Window.DataContext>

    <Grid>
        <TextBlock Width="100" Height="100" Text="{Binding tbValue}"/>
    </Grid>
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
using System.Windows;

namespace test1
{
    /// <summary>
    /// MainWindow.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
    }
}
~~~

<br/>

#Sample.Data프로젝트
#MainView.cs
~~~c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sample.Data
{
    public class MainView
    {
        public MainView()
        {

        }

        private string m_tbValue = "testmodel";
        public string tbValue
        {
            get { return m_tbValue; }
            set
            {
                if (m_tbValue != value)
                {
                    m_tbValue = value;
                }
            }
        }
    }
}
~~~

###### [데이터 연결하기](#데이터-연결하기)
###### [Top](#top)

<br/>
<br/>

***

# ObservableCollection
  - ObservableCollection 과 List차이 : WPF에서는 ListBox와ListView같은 곳에서 바인딩 사용시(ItemSource) ObserableColletion을 대부분 사용하게 된다. ObserableColletion는 UI에서 실시간으로 반영을 해주기 때문이다, 그러나 일반적인 List 는 변경된 List의 내용을 UI 에서 실시간으로 반영하지 않는다

  - List
  
#MainWindow.xaml
~~~c#
<StackPanel>
    <ListBox ItemsSource="{Binding Apple_list}">
        <ListBox.ItemTemplate>
            <DataTemplate>
                <Grid>
                    <Grid.ColumnDefinitions>
                        <ColumnDefinition/>
                        <ColumnDefinition/>
                    </Grid.ColumnDefinitions>
                    <TextBlock Text="{Binding Name}"/>
                    <TextBlock Grid.Column="1" Text="{Binding Price}"/>
                </Grid>
            </DataTemplate>
        </ListBox.ItemTemplate>
    </ListBox>
    <Button x:Name="btn" Width="100" Content="버튼" Click="btn_Click"/>
</StackPanel>
~~~

<br/>
  
#MainWindow.xaml.cs
~~~c#
public partial class MainWindow : Window, INotifyPropertyChanged
{
    public MainWindow()
    {
        InitializeComponent();
        this.DataContext = this;
        Apple_list = new List<Apple>();

    }

    private List<Apple> m_Apple_list;
    public List<Apple> Apple_list
    {
        get { return m_Apple_list; }
        set
        {
            if (m_Apple_list != value)
            {
                m_Apple_list = value;
                Norty("Apple_list");
            }
        }
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Norty(string name)
    {
        PropertyChangedEventHandler handler = PropertyChanged;
        if (handler != null)
        {
            handler(this, new PropertyChangedEventArgs(name));
        }
    }
    #endregion

    private void btn_Click(object sender, RoutedEventArgs e)
    {
        Apple_list.Add(new Apple() { Name = "사과", Price = 1000 });
    }
}

public class Apple : INotifyPropertyChanged
{
    private string m_Name = "0";
    public string Name
    {
        get { return m_Name; }
        set
        {
            if (m_Name != value)
            {
                m_Name = value;
                Norty("Price");
            }
        }
    }

    private int m_Price = 0;
    public int Price
    {
        get { return m_Price; }
        set
        {
            if (m_Price != value)
            {
                m_Price = value;
                Norty("Price");
            }
        }
    }

    public Apple()
    {

    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Norty(string name)
    {
        PropertyChangedEventHandler handler = PropertyChanged;
        if (handler != null)
        {
            handler(this, new PropertyChangedEventArgs(name));
        }
    }
    #endregion
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152622781-0aeb05bd-ffef-4ab3-a79c-a3df31d9b71d.png">
  - 버튼 클릭시 List가 만들어 지고 있지만, UI에 실시간으로 반영되고 있지 않다.

<br/><br/>

  - ObservableCollection  

#MainWindow.xaml.cs
~~~c#
public partial class MainWindow : Window, INotifyPropertyChanged
{
    public MainWindow()
    {
        InitializeComponent();
        this.DataContext = this;
        Apple_list = new ObservableCollection<Apple>();

    }

    private ObservableCollection<Apple> m_Apple_list;
    public ObservableCollection<Apple> Apple_list
    {
        get { return m_Apple_list; }
        set
        {
            if (m_Apple_list != value)
            {
                m_Apple_list = value;
                Norty("Apple_list");
            }
        }
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Norty(string name)
    {
        PropertyChangedEventHandler handler = PropertyChanged;
        if (handler != null)
        {
            handler(this, new PropertyChangedEventArgs(name));
        }
    }
    #endregion

    private void btn_Click(object sender, RoutedEventArgs e)
    {
        Apple_list.Add(new Apple() { Name = "사과", Price = 1000 });
    }
}

public class Apple : INotifyPropertyChanged
{
    private string m_Name = "0";
    public string Name
    {
        get { return m_Name; }
        set
        {
            if (m_Name != value)
            {
                m_Name = value;
                Norty("Price");
            }
        }
    }

    private int m_Price = 0;
    public int Price
    {
        get { return m_Price; }
        set
        {
            if (m_Price != value)
            {
                m_Price = value;
                Norty("Price");
            }
        }
    }

    public Apple()
    {

    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Norty(string name)
    {
        PropertyChangedEventHandler handler = PropertyChanged;
        if (handler != null)
        {
            handler(this, new PropertyChangedEventArgs(name));
        }
    }
    #endregion
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152622892-24a626c9-c433-48a7-86e7-a229d61311ab.png">

###### [ObservableCollection](#observablecollection)
###### [Top](#top)

<br/>
<br/>

***

# INotifyPropertyChanged
  - 인터페이스로써, 속성 값이 변경 되었을 때 알림을 준다. 예를 들어 디자인 폼에서 속성을 변경 했을때 백단의 데이터까지 바뀌게 해준다.

#.cs
~~~
public class Class1 : INotifyPropertyChanged
{
    private string m_Name;
    public string Name
    {
        get { return m_Name; }
        set
        {
            if(m_Name != value)
            {
                m_Name = value;
                Notify("Name");
            }
        }
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propertyName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
        }
    }
    #endregion
}
~~~

###### [INotifyPropertyChanged](#inotifypropertychanged)
###### [Top](#top)

<br/>
<br/>

***

# Button + Command

#MainWindow.xaml
~~~c#
<Grid>
    <Button Width="100" Height="100" Content="버튼" Click="Button_Click"/>
</Grid>
~~~

#MainWindow.xaml.cs
~~~c#
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        MessageBox.Show("클릭");
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/151135525-1bbd60ec-f756-408b-9a57-7476f15ee9cc.png">

<br/>
<br/>

  - MVVM패턴을 위 Button에 Command로 Click이벤트를 사용하는 방법

#MainWindow.xaml
~~~c#
<Grid>
    <Button Width="100" Height="100" Content="버튼" Command="{Binding OneClick}"/>
</Grid>
~~~

#MainWindow.xaml.cs
~~~c#
using System.Windows.Input; <- ICommand실행시 참조필요

public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        this.DataContext = this;
    }

    private Command m_OneClick;
    public ICommand OneClick
    {
        get { return m_OneClick = new Command(OneClickEvent); }
    }

    private void OneClickEvent(object obj)
    {
        MessageBox.Show("클릭 이벤트 발생");
    }
}
~~~

#Command.cs
~~~
using System.Windows.Input;

public class Command : ICommand
{
    Action<object> _execute;

    public event EventHandler? CanExecuteChanged;

    public Command(Action<object> execute)
    {
        _execute = execute;
    }

    public bool CanExecute(object? parameter)
    {
        return true;
    }

    public void Execute(object? parameter)
    {
        _execute(parameter);
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/151136487-7cbf3db9-aa5e-41f8-aef9-1401baabe5af.png">

<br/>
<br/>

  - #XAML.cs부분을 이렇게 따로 수정해서 사용하는것이 보기 편함

#MainWindow.xaml.cs
~~~c#
using System.Windows.Input;

public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        this.DataContext = this;
        OneClick = new Command(OneClickEvent);
    }

    public ICommand OneClick { get; set; }

    private void OneClickEvent(object obj)
    {
        MessageBox.Show("클릭 이벤트 발생");
    }
}
~~~

###### [Button + Command](#button--command)
###### [Top](#top)

<br/>
<br/>

***

# Button + Command다른클래스에서 사용

  - 다른 클래스 라이브러리에서 ICommand사용하기1
    - 다른 클래스 라이브러리에서 command를 사용하기 위해서는, 어려운 속성들을 지정해 주어야 한다
   
<br/>

  - Command="{Binding RelativeSource={RelativeSource FindAncestor, AncestorType={x:Type Window}, AncestorLevel=1}, Path=DataContext.OneClick}"
    - RelativeSource : 바인딩 소스를 지정하기 위해 사용되는 속성
    - FindAncestor : 지정된 조상 타입을 검색하여 해당 조상을 바인딩 소스로 사용한다
    - AncestorType={x:Type Window} : 조상의 타입을 Window로 지정합니다. 즉, 가장 가까운 Window 타입의 조상을 찾는다
    - AncestorLevel=1 : 얼마나 많은 수준의 조상을 건너뛸지 지정합니다. 여기서는 첫 번째 Window 조상을 사용한다
    - Path=DataContext.OneClick : 바인딩 소스의 OneClick 속성을 지정한다. DataContext는 일반적으로 뷰 모델의 인스턴스를 참조하는데 사용된다

#Wpf프로젝트(클래스 라이브러리1 참조중)  
#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        xmlns:ctrl="clr-namespace:WpfLibrary1;assembly=WpfLibrary1"
        mc:Ignorable="d"
        Title="MainWindow" SizeToContent="WidthAndHeight">

    <Grid Width="300" Height="300">
        <ctrl:UserControl1/>
    </Grid>
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
using System.Windows;
using System.Windows.Input;

namespace WpfApp1
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            this.DataContext = this;
        }

        private Command m_OneClick;
        public ICommand OneClick
        {
            get { return m_OneClick = new Command(OneClickEvent); }
        }

        private void OneClickEvent(object obj)
        {
            MessageBox.Show("클릭 이벤트 발생");
        }
    }
}
~~~

<br/>

#Command.cs
~~~c#
using System;
using System.Windows.Input;

namespace WpfApp1
{
    public class Command : ICommand
    {
        Action<object> _execute;

        public event EventHandler? CanExecuteChanged;

        public Command(Action<object> execute)
        {
            _execute = execute;
        }

        public bool CanExecute(object? parameter)
        {
            return true;
        }

        public void Execute(object? parameter)
        {
            _execute(parameter);
        }
    }
}
~~~

<br/>

#클래스라이브러리1  
#UserControl1.xaml
~~~c#
<UserControl x:Class="WpfLibrary1.UserControl1"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:WpfLibrary1"
             mc:Ignorable="d" 
             Height="50" Width="80">
    <Button Content="버튼" Command="{Binding RelativeSource={RelativeSource FindAncestor, AncestorType={x:Type Window}, AncestorLevel=1}, Path=DataContext.OneClick}"/>
</UserControl>
~~~

<br/>

  - 다른 클래스 라이브러리에서 ICommand사용하기2

#Wpf프로젝트(클래스 라이브러리1 ,2  참조중)  
#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        xmlns:vm="clr-namespace:WpfLibrary2;assembly=WpfLibrary2"
        xmlns:ctrl="clr-namespace:WpfLibrary1;assembly=WpfLibrary1"
        mc:Ignorable="d"
        Title="MainWindow" SizeToContent="WidthAndHeight">

    <Window.DataContext>
        <vm:MainView/>
    </Window.DataContext>
    
    <Grid Width="300" Height="300">
        <ctrl:UserControl1/>
    </Grid>
</Window>
~~~

<br/>

#클래스라이브러리1  
#UserControl1.xaml
~~~c#
<UserControl x:Class="WpfLibrary1.UserControl1"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:WpfLibrary1"
             mc:Ignorable="d" 
             Height="50" Width="80">
    <Button Content="버튼" Command="{Binding RelativeSource={RelativeSource FindAncestor, AncestorType={x:Type Window}, AncestorLevel=1}, Path=DataContext.OneClick}"/>
</UserControl>
~~~

<br/>

#클래스라이브러리2  
#MainView.cs
~~~c#
using System.Windows.Input;
using System.Windows;
using WpfApp1;

namespace WpfLibrary2
{
    public class MainView
    {
        private Command m_OneClick;
        public ICommand OneClick
        {
            get { return m_OneClick = new Command(OneClickEvent); }
        }

        private void OneClickEvent(object obj)
        {
            MessageBox.Show("클릭 이벤트 발생");
        }
    }
}
~~~

<br/>

#Command.cs
~~~c#
using System;
using System.Windows.Input;

namespace WpfApp1
{
    public class Command : ICommand
    {
        Action<object> _execute;

        public event EventHandler? CanExecuteChanged;

        public Command(Action<object> execute)
        {
            _execute = execute;
        }

        public bool CanExecute(object? parameter)
        {
            return true;
        }

        public void Execute(object? parameter)
        {
            _execute(parameter);
        }
    }
}
~~~

###### [Button + Command다른클래스에서 사용](#button--command다른클래스에서-사용)
###### [Top](#top)

<br/>
<br/>

***

# Workspace를 통한 UserControl끼리의 값 전달

#MainWindow.xaml
~~~c#
<Grid>
    <Grid.ColumnDefinitions>
        <ColumnDefinition/>
        <ColumnDefinition/>
    </Grid.ColumnDefinitions>

    <local:UserControl1 Grid.Column="0" Grid.Row="0"></local:UserControl1>
    <local:UserControl2 Grid.Column="1" Grid.Row="0"></local:UserControl2>
</Grid>
~~~

<br/>

#UserControl1.xaml
~~~c#
<StackPanel Background="White" VerticalAlignment="Center">
    <TextBlock Text="UserControl1" FontSize="20" HorizontalAlignment="Center"/>
    <TextBox Width="100" HorizontalAlignment="Center" Margin="5" Text="{Binding UserControl1_text, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"/>
    <Button Width="100" Height="30" Content="1->2" Margin="5" Command="{Binding Oneclick}"/>
</StackPanel>
~~~

<br/>

#UserControl1.xaml.cs
~~~c#
public partial class UserControl1 : UserControl
{
    public UserControl1()
    {
        InitializeComponent();
        this.DataContext = Workspace.Instance.userControl1_model;
    }
}
~~~

<br/>

#UserControl1_model.cs
~~~c#
public class UserControl1_model : INotifyPropertyChanged
{

    private string m_UserControl1_text;
    public string UserControl1_text
    {
        get { return m_UserControl1_text; }
        set
        {
            if (m_UserControl1_text != value)
            {
                m_UserControl1_text = value;
                Notify("UserControl1_text");
                Workspace.Instance.userControl2_model.UserControl2_text = value;
            }
        }
    }

    private Command m_Oneclick;
    public ICommand Oneclick
    {
        get { return m_Oneclick = new Command(Oneclickevent); }
    }

    private void Oneclickevent(object obj)
    {
        Workspace.Instance.userControl2_model.UserControl2_textblock = UserControl1_text;
    }


    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propertyName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
        }
    }
    #endregion
}
~~~

<br/>

#UserControl2.xaml
~~~c#
<StackPanel Background="White" VerticalAlignment="Center">
    <TextBlock x:Name="tblock" Text="UserControl2" FontSize="20" HorizontalAlignment="Center"/>
    <TextBox Width="100" HorizontalAlignment="Center" Margin="5" Text="{Binding UserControl2_text, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"/>
    <TextBlock Width="100" HorizontalAlignment="Center" Margin="5" Text="{Binding UserControl2_textblock, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"/>
</StackPanel>
~~~

<br/>

#UserControl2.xaml.cs
~~~c#
public partial class UserControl2 : UserControl
{
    public UserControl2()
    {
        InitializeComponent();
        this.DataContext = Workspace.Instance.userControl2_model;
    }
}
~~~

<br/>

#UserControl2_model.cs
~~~c#
public class UserControl2_model : INotifyPropertyChanged
{
    public UserControl2_model()
    {

    }

    private string m_UserControl2_text;
    public string UserControl2_text
    {
        get { return m_UserControl2_text; }
        set
        {
            if (m_UserControl2_text != value)
            {
                m_UserControl2_text = value;
                Notify("UserControl2_text");
                Workspace.Instance.userControl1_model.UserControl1_text = value;
            }
        }
    }

    private string m_UserControl2_textblock;
    public string UserControl2_textblock
    {
        get { return m_UserControl2_textblock; }
        set
        {
            if (m_UserControl2_textblock != value)
            {
                m_UserControl2_textblock = value;
                Notify("UserControl2_textblock");
            }
        }
    }
        


    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propertyName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
        }
    }
    #endregion
}
~~~

<br/>

#Workspace.cs
~~~c#
class Workspace : INotifyPropertyChanged
{
    static Workspace m_Instance = new Workspace();

    public static Workspace Instance
    {
        get { return m_Instance; }
    }

    private UserControl1_model m_userControl1_model = new UserControl1_model();
    public UserControl1_model userControl1_model
    {
        get { return m_userControl1_model; }
        set
        {
            if (m_userControl1_model != value)
            {
                m_userControl1_model = value;
                Notify("userControl1_model");

            }
        }
    }

    private UserControl2_model m_userControl2_model = new UserControl2_model();
    public UserControl2_model userControl2_model
    {
        get { return m_userControl2_model; }
        set
        {
            if (m_userControl2_model != value)
            {
                m_userControl2_model = value;
                Notify("userControl2_model");
            }
        }
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propertyName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
        }
    }
    #endregion
}
~~~

<br/>

<img src="https://user-images.githubusercontent.com/39178978/158002074-53c25c5e-e955-44b3-8f25-03c27f839310.gif" height="400" width="400">

###### [Workspace를 통한 UserControl끼리의 값 전달](#workspace를-통한-usercontrol끼리의-값-전달)
###### [Top](#top)

<br/>
<br/>

***

# ContentControl을 활용한 UserControl끼리의 값 전달

#MainWindow.xaml
~~~c#
<Grid>
    <Grid.ColumnDefinitions>
        <ColumnDefinition/>
        <ColumnDefinition/>
    </Grid.ColumnDefinitions>

    <ContentControl Content="{Binding View1Content}"></ContentControl>
    <ContentControl Grid.Column="1" Content="{Binding View2Content}"></ContentControl>
</Grid>
~~~

<br/>

#UserControl1.xaml
~~~c#
<StackPanel Background="White" VerticalAlignment="Center">
    <TextBlock Text="UserControl1" FontSize="20" HorizontalAlignment="Center"/>
    <TextBox Width="100" HorizontalAlignment="Center" Margin="5" Text="{Binding UserControl1_text, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"/>
</StackPanel>
~~~

<br/>

#UserControl1.xaml.cs
~~~c#
public partial class UserControl1 : UserControl, INotifyPropertyChanged
{
    public UserControl1()
    {
        InitializeComponent();
        this.DataContext = this;
    }

    private string m_UserControl1_text;
    public string UserControl1_text
    {
        get { return m_UserControl1_text; }
        set
        {
            if (m_UserControl1_text != value)
            {
                m_UserControl1_text = value;
                RaisePropertyChanged("UserControl1_text");
                Debug.WriteLine(">>>>>>>>>>>>>>>>>>>>>>>>>>UserControl1_text 작동");
                Workspace.Instance.View2Content.UserControl2_text = value;
            }
        }
    }


    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected virtual void RaisePropertyChanged([CallerMemberName] string propertyName = null)
    {
        if (PropertyChanged != null)
            PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
    }
    #endregion
}
~~~

<br/>

#UserControl2.xaml
~~~c#
<StackPanel Background="White" VerticalAlignment="Center">
    <TextBlock x:Name="tblock" Text="UserControl2" FontSize="20" HorizontalAlignment="Center"/>
    <TextBox x:Name="tbox" Width="100" HorizontalAlignment="Center" Margin="5" Text="{Binding UserControl2_text, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"/>
</StackPanel>
~~~

<br/>

#UserControl2.xaml.cs
~~~c#
public partial class UserControl2 : UserControl, INotifyPropertyChanged
{
    public UserControl2()
    {
        InitializeComponent();
        this.DataContext = this;
    }

    private string m_UserControl2_text;
    public string UserControl2_text
    {
        get { return m_UserControl2_text; }
        set
        {
            if(m_UserControl2_text != value)
            {
                m_UserControl2_text = value;
                RaisePropertyChanged("UserControl2_text");
                Debug.WriteLine(">>>>>>>>>>>>>>>>>>>>>>>>>>UserControl2_text 작동");
            }
        }
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected virtual void RaisePropertyChanged([CallerMemberName] string propertyName = null)
    {
        if (PropertyChanged != null)
            PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
    }
    #endregion
}
~~~

<br/>

#Workspace.cs
~~~c#
class Workspace : INotifyPropertyChanged
{
    static Workspace m_Instance = new Workspace();

    public static Workspace Instance
    {
        get { return m_Instance; }
    }

    private UserControl1 m_View1Content = new UserControl1();
    public UserControl1 View1Content
    {
        get { return m_View1Content; }
        set
        {
            if (m_View1Content != value)
            {
                m_View1Content = value;
                Notify("View1Content");

            }
        }
    }

    private UserControl2 m_View2Content = new UserControl2();
    public UserControl2 View2Content
    {
        get { return m_View2Content; }
        set
        {
            if (m_View2Content != value)
            {
                m_View2Content = value;
                Notify("View1Content");

            }
        }
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propertyName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
        }
    }
    #endregion
}
~~~

<br/>

<img src="https://user-images.githubusercontent.com/39178978/158002648-4572bcdb-a67c-4d57-b337-67e14c2d493b.gif" width="400" height="400">

###### [ContentControl을 활용한 UserControl끼리의 값 전달](#contentcontrol을-활용한-usercontrol끼리의-값-전달)
###### [Top](#top)

<br/>
<br/>

***

# 클래스 라이브러리
  - 현재는 WPF로 개발을 할때 작은 프로그램은 싱글톤으로 개발하기도 하지만, 규모가 커지만 싱글톤으로 개발되지 않는다.
  - 따라서, 프로젝트를 여러개 추가하여 참조하며 사용하게 된다
  - 사용자 정의 컨트롤 라이브러리 와 사용자 지정 컨트롤 라이브러리의 차이점
    - 사용자 정의 컨트롤은 UserControl 객체를 상속받고, 사용자 지정 컨트롤은 Control 객체를 상속 받는다
    - UserControl 객체는 ContentControl 객체를 상속받고 ContentControl 객체는 Control 객체와  IAddChild 인터페이스를 상속받는다.
    - 사용자 지정 컨트롤이 사용자 정의 컨트롤 보다 더 상위에 있음
    - 사용자 지정 컨트롤이 사용자 정의 컨트롤 보다 좀 더 커스텀한 구현이 가능하다
    - xaml과 함께하는(좀 더 편하고,단순한) 사용자 컨트롤 제작을 한다면 사용자 정의 컨트롤을 사용하고,  좀 더 구체적이고 세부적인 사용자 컨트롤 제작을 한다면 사용자 지정 컨트롤을 사용하면 됨

<br/>

  - .NET Framework라면 아래의 라이브러리를 사용

<br/>

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/d69e8e7a-f012-4ae1-b698-84f89746774d)

<br/>

  - .NET 이라면, 아래의 클래스 라이브러리를 이용한다

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/9fdc2dd0-5993-4914-b3c1-6923dd4584f9)

###### [클래스 라이브러리](#클래스-라이브러리)
###### [Top](#top)

<br/>
<br/>

***

# Http,Https통신
  - C#에서 Http통신을 하는 방법은 2가지 3가지 정도로 여러가지가 있지만 제일 권장하는 방법은 HttpClient을 이용한 방법이다
  - 현재 아래의 코드는, euc-kr로 주는 한글 데이터가 깨져서 들어오게 되는데...아직 이유를 찾지 못했다..

#MainWindow.xaml
~~~c#
    <Grid>
        <Button Width="100" Height="30" Content="수신받기" Click="Button_Click"/>
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

    private async void Button_Click(object sender, RoutedEventArgs e)
    {
        // Get방식
        try
        {
            // HttpClient 인스턴스 생성
            using (HttpClient client = new HttpClient())
            {
                // GET 요청 보내기
                HttpResponseMessage response = await client.GetAsync("http://www2.atpos.co.kr/telex/M10S.php3?MsNo=NC1933&PosNo=01&LastSeq=All");
                response.Content.Headers.ContentType.CharSet = "UTF-8"; // 인코딩 설정

                // 응답 확인
                if (response.IsSuccessStatusCode)
                {
                    string content = await response.Content.ReadAsStringAsync();
                    //MessageBox.Show($"응답 내용:\n{content}", "성공", MessageBoxButton.OK, MessageBoxImage.Information);

                    // 데이터를 파일에 저장
                    //string filePath = "D:\\Projec\\WPF\\WpfApp1\\response.dat"; // 파일 경로 및 이름
                    //System.IO.File.WriteAllText(filePath, content);

                    //MessageBox.Show($"응답 내용을 파일로 저장했습니다.\n파일 경로: {filePath}", "성공", MessageBoxButton.OK, MessageBoxImage.Information);
                }
                else
                {
                    MessageBox.Show($"HTTP 오류 코드: {response.StatusCode}", "오류", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
        }
        catch (Exception ex)
        {
            MessageBox.Show($"오류 발생: {ex.Message}", "오류", MessageBoxButton.OK, MessageBoxImage.Error);
        }




        // POST방식
        try
        {
            // HttpClient 인스턴스 생성
            using (HttpClient client = new HttpClient())
            {
                // GET 요청 보내기
                //HttpResponseMessage response = await client.GetAsync("https://www2.atpos.co.kr/telex/M10S.php3?MsNo=NC1933&PosNo=01&LastSeq=All");

                // POST 요청 보내기
                string xmlData = "<?xml version=\"1.0\" encoding=\"euc-kr\"?>\r\n<ASTEMS-ASP><TELEX-HD TelexId=\"R11R\" MsgCd=\"0000\"/><HEADER SaleDate=\"20231011\" MsNo=\"NC3474\" PosNo=\"01\" BillNo=\"0001\"/></ASTEMS-ASP>\r\n";

                HttpContent xmlDataContent = new StringContent(xmlData, Encoding.GetEncoding("UTF-8"), "applicat-8n/xml");

                HttpResponseMessage response = await client.PostAsync("https://www2.atpos.co.kr/telex/R11S.php3?MsNo=NC3474&PosNo=01", xmlDataContent);
                //response.Content.Headers.ContentType.CharSet = "UTF-8"; // 인코딩 설정

                // 응답 확인
                if (response.IsSuccessStatusCode)
                {
                    string content = await response.Content.ReadAsStringAsync();
                    //MessageBox.Show($"응답 내용:\n{content}", "성공", MessageBoxButton.OK, MessageBoxImage.Information);

                    // 데이터를 파일에 저장
                    string filePath = "D:\\Projec\\WPF\\WpfApp1\\response.dat"; // 파일 경로 및 이름
                    //System.IO.File.WriteAllText(filePath, content);

                    MessageBox.Show($"응답 내용을 파일로 저장했습니다.\n파일 경로: {filePath}", "성공", MessageBoxButton.OK, MessageBoxImage.Information);
                }
                else
                {
                    MessageBox.Show($"HTTP 오류 코드: {response.StatusCode}", "오류", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
        }
        catch (Exception ex)
        {
            MessageBox.Show($"오류 발생: {ex.Message}", "오류", MessageBoxButton.OK, MessageBoxImage.Error);
        }
    }
}
~~~

###### [Http,Https통신](#httphttps통신)
###### [Top](#top)

<br/>
<br/>

***

# JsonParsing
  - [JsonParsing하기](#jsonparsing하기)
  - [Json직렬화하기](#json직렬화하기)

###### [JsonParsing](#jsonparsing)
###### [Top](#top)

<br/>
<br/>

# JsonParsing하기

#MainWindow.xaml
~~~c#
<StackPanel>
    <Button Width="100" Height="30" Content="버튼" Margin="10" Click="Button_Click"/>
    <ListView x:Name="lv" Grid.Row="1" Margin="10" ItemsSource="{Binding Custlist}" >
        <ListView.View>
            <GridView>
                <GridViewColumn Width="100" Header="기업명칭" DisplayMemberBinding="{Binding CMPNY_NM}"/>
                <GridViewColumn Width="70" Header="모집인원수" DisplayMemberBinding="{Binding RCRIT_NMPR_CO}"/>
                <GridViewColumn Width="70" Header="학력" DisplayMemberBinding="{Binding ACDMCR_NM}"/>
            </GridView>
        </ListView.View>
    </ListView>
</StackPanel>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
public partial class MainWindow : Window, INotifyPropertyChanged
{
    public MainWindow()
    {
        InitializeComponent();
        this.DataContext = this;
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propName));
        }
    }
    #endregion

    private ObservableCollection<Cust> m_Custlist = new ObservableCollection<Cust>();
    public ObservableCollection<Cust> Custlist
    {
        get { return m_Custlist; }
        set
        {
            if (m_Custlist != value)
            {
                m_Custlist = value;
                Notify("Custlist");
            }
        }
    }
    private void Button_Click(object sender, RoutedEventArgs e)
    {
        string path = "http://openapi.seoul.go.kr:8088/68734f416a716e613535594b6d4f48/json/GetJobInfo/1/10/";

        string result = null;

        HttpWebRequest request = (HttpWebRequest)WebRequest.Create(path);
        HttpWebResponse response = (HttpWebResponse)request.GetResponse();

        Stream stream = response.GetResponseStream();
        StreamReader reader = new StreamReader(stream);
        result = reader.ReadToEnd();
        stream.Close();
        response.Close();

        JObject jobj = JObject.Parse(result);
        JArray array = JArray.Parse(jobj["GetJobInfo"]["row"].ToString());

        foreach (JObject itemobj in array)
        {
            string CMPNY_NM_IT = itemobj["CMPNY_NM"].ToString(); //기업명칭
            string RCRIT_NMPR_CO_IT = itemobj["RCRIT_NMPR_CO"].ToString(); //모집인원수
            string ACDMCR_NM_IT = itemobj["ACDMCR_NM"].ToString(); //학력

            Custlist.Add(new Cust() { CMPNY_NM = CMPNY_NM_IT, RCRIT_NMPR_CO = RCRIT_NMPR_CO_IT, ACDMCR_NM = ACDMCR_NM_IT});
        }
    }
}
~~~

<br/>

#Cust.cs
~~~c#
public class Cust : INotifyPropertyChanged
{
    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propName));
        }
    }
    #endregion

    private string m_CMPNY_NM; //기업명칭
    public string CMPNY_NM  
    {
        get { return m_CMPNY_NM; }
        set
        {
            if (m_CMPNY_NM != value)
            {
                m_CMPNY_NM = value;
                Notify("CMPNY_NM");
            }
        }
    }

    private string m_RCRIT_NMPR_CO; //모집인원수
    public string RCRIT_NMPR_CO  
    {
        get { return m_RCRIT_NMPR_CO; }
        set
        {
            if (m_RCRIT_NMPR_CO != value)
            {
                m_RCRIT_NMPR_CO = value;
                Notify("RCRIT_NMPR_CO");
            }
        }
    }

    private string m_ACDMCR_NM; //학력
    public string ACDMCR_NM
    {
        get { return m_ACDMCR_NM; }
        set
        {
            if (m_ACDMCR_NM != value)
            {
                m_ACDMCR_NM = value;
                Notify("ACDMCR_NM");
            }
        }
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/158599886-515bdabd-6460-4130-bc50-ef0cf6f2fd2c.png">

###### [JsonParsing](#jsonparsing)
###### [Top](#top)

<br/>
<br/>

## Json직렬화하기

#MainWindow.xaml
~~~c#
<StackPanel>
    <Button Width="100" Height="30" Content="버튼" Margin="10" Click="Button_Click"/>
    <ListView x:Name="lv" Grid.Row="1" Margin="10" ItemsSource="{Binding Custlist}" >
        <ListView.View>
            <GridView>
                <GridViewColumn Width="100" Header="기업명칭" DisplayMemberBinding="{Binding CMPNY_NM}"/>
                <GridViewColumn Width="70" Header="모집인원수" DisplayMemberBinding="{Binding RCRIT_NMPR_CO}"/>
                <GridViewColumn Width="70" Header="학력" DisplayMemberBinding="{Binding ACDMCR_NM}"/>
            </GridView>
        </ListView.View>
    </ListView>
</StackPanel>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
public partial class MainWindow : Window, INotifyPropertyChanged
{
    public MainWindow()
    {
        InitializeComponent();
        this.DataContext = this;
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propName));
        }
    }
    #endregion

    private ObservableCollection<Cust> m_Custlist = new ObservableCollection<Cust>();
    public ObservableCollection<Cust> Custlist
    {
        get { return m_Custlist; }
        set
        {
            if (m_Custlist != value)
            {
                m_Custlist = value;
                Notify("Custlist");
            }
        }
    }
    private void Button_Click(object sender, RoutedEventArgs e)
    {
        string path = "http://openapi.seoul.go.kr:8088/68734f416a716e613535594b6d4f48/json/GetJobInfo/1/10/";

        string result = null;

        HttpWebRequest request = (HttpWebRequest)WebRequest.Create(path);
        HttpWebResponse response = (HttpWebResponse)request.GetResponse();

        Stream stream = response.GetResponseStream();
        StreamReader reader = new StreamReader(stream);
        result = reader.ReadToEnd();
        stream.Close();
        response.Close();

        JObject jobj = JObject.Parse(result);
        JobInfo getJobInfo = JsonConvert.DeserializeObject<JobInfo>(result);

        List<row> row = getJobInfo.GetJobInfo.row;

        foreach(row item in row)
        {
            string CMPNY_NM_IT = item.CMPNY_NM;
            string RCRIT_NMPR_CO_IT = item.RCRIT_NMPR_CO;
            string ACDMCR_NM_IT = item.ACDMCR_NM;

            Custlist.Add(new Cust() { CMPNY_NM = CMPNY_NM_IT, RCRIT_NMPR_CO = RCRIT_NMPR_CO_IT, ACDMCR_NM = ACDMCR_NM_IT });
        }
    }
}
~~~

<br/>

#Cust.cs
~~~c#
public class Cust : INotifyPropertyChanged
{
    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propName));
        }
    }
    #endregion

    private string m_CMPNY_NM; //기업명칭
    public string CMPNY_NM  
    {
        get { return m_CMPNY_NM; }
        set
        {
            if (m_CMPNY_NM != value)
            {
                m_CMPNY_NM = value;
                Notify("CMPNY_NM");
            }
        }
    }

    private string m_RCRIT_NMPR_CO; //모집인원수
    public string RCRIT_NMPR_CO  
    {
        get { return m_RCRIT_NMPR_CO; }
        set
        {
            if (m_RCRIT_NMPR_CO != value)
            {
                m_RCRIT_NMPR_CO = value;
                Notify("RCRIT_NMPR_CO");
            }
        }
    }

    private string m_ACDMCR_NM; //학력
    public string ACDMCR_NM
    {
        get { return m_ACDMCR_NM; }
        set
        {
            if (m_ACDMCR_NM != value)
            {
                m_ACDMCR_NM = value;
                Notify("ACDMCR_NM");
            }
        }
    }
}
~~~

<br/>

#Joblnfo.cs
~~~c#
public class JobInfo
{
    public GetJobInfo GetJobInfo { get; set; }
}

public class GetJobInfo
{
    public int list_total_count { get; set; }

    public RESULT RESULT { get; set; }

    public List<row> row { get; set; }
}

public class RESULT
{
    public string CODE { get; set; }

    public string MESSAGE { get; set; }
}

public class row
{
    public string CMPNY_NM { get; set; }
    public string RCRIT_NMPR_CO { get; set; }
    public string ACDMCR_NM { get; set; }
        
            
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/158618347-73edf2a4-7526-41b7-b42c-001a5c3da837.png">

###### [JsonParsing](#jsonparsing)
###### [Top](#top)

<br/>
<br/>

***

# DB연결
  - DB연결시 SqlConnection을 사용하게 된다
  - System.Data.SqlClient 패키지를 설치해야 한다

MainWindow.xaml
~~~c#
    <UniformGrid>
        <Button x:Name="Connetion" Width="100" Height="30" Content="DB연결테스트" Click="Connetion_Click"/>
        <Button x:Name="Select" Width="100" Height="30" Content="DB조회" Click="Select_Click"/>
        <Button x:Name="Queries" Width="100" Height="30" Content="DB쿼리" Click="Queries_Click"/>
    </UniformGrid>
~~~

<br/>

MainWindow.xaml.cs
~~~c#
using System;
using System.Data.SqlClient;
using System.Windows;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }


        // 접속테스트
        private void Connetion_Click(object sender, RoutedEventArgs e)
        {
            string connectString = string.Format("Server={0};Database={1};Uid ={2};Pwd={3};", "127.0.0.1",
 "MyfirstDatabase", "qnalsrb", "1111");
            try
            {
                using (SqlConnection conn = new SqlConnection(connectString))
                {
                    conn.Open();
                }
                return ;
            }
            catch (Exception)
            {
                return ;
            }
        }

        // 데이터 조회
        private void Select_Click(object sender, RoutedEventArgs e)
        {
            string connectString = string.Format("Server={0};Database={1};Uid ={2};Pwd={3};", "127.0.0.1",
 "MyfirstDatabase", "qnalsrb", "1111");
            string sql = "select * from memberTB";

            using (SqlConnection conn = new SqlConnection(connectString))
            {
                conn.Open();

                SqlCommand cmd = new SqlCommand(sql, conn);
                SqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {
                    string csStr = dr.GetString(0);
                }

                dr.Close();
            }
        }

        // INSERT, UPDATE, DELETE
        private void Queries_Click(object sender, RoutedEventArgs e)
        {
            string connectString = string.Format("Server={0};Database={1};Uid ={2};Pwd={3};", "127.0.0.1",
 "MyfirstDatabase", "qnalsrb", "1111");
            string sql = "update memberTB\r\nset memverID = 'ooo'\r\nwhere memverNumber = '1'";
            // insert into memberTB(memverID, memverNumber) values('bmk', '29')

            using (SqlConnection conn = new SqlConnection(connectString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sql, conn);
                cmd.ExecuteNonQuery();
            }
        }
    }
}
~~~

###### [DB연결](#db연결)
###### [Top](#top)

<br/>
<br/>

***

# Thread
  - [Thread,Task](#threadtask)
  - [다른 Thread에서 UI접근](#다른-thread에서-ui접근)

###### [Thread](#Thread)
###### [Top](#top)

<br/>
<br/>

# Thread,Task
  - Thread를 만드는 것은 2가지가 존재한다 Thread 와 Task
    - Task는 구현하고 싶은 작업 자체를 의미(실행 중인 작업을 언제든지 중지할 수 있는 제어 수준 필요하다면 사용)
    - Thread는 구현하고 싶은 작업을 수행하는 수많은 작업자들 중 하나를 의미(실행 중인 작업이 완료된 후 중지되는 정도의 제어 수준 필요하다면 사용)

<br/>

  - Thread생성 및 실행

MainWindow.xaml.cs
~~~c#
using System.Threading;
using System.Windows;
using System.Diagnostics;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

            Debug.WriteLine("main#: Begin");

            Thread t1 = new Thread(Run);
            t1.Start();

            Debug.WriteLine("main#: End");
        }

        void Run()
        {
            Debug.WriteLine("Thread#: Begin");

            // Do Something
            Thread.Sleep(3000);
            Debug.WriteLine("Thread#: End");

        }
    }

}
~~~

  - 직접 대리자를 지정하는 방법
    - Thread 클래스의 생성자는 ThreadStart 대리자를 인수로 받을 수 있으며, 이를 사용하여 스레드를 초기화한다
    - ThreadStart 대리자를 사용하여 명시적으로 메서드를 호출할 때는 인수가 없는 메서드를 대상으로 해야 한다. 따라서 Run 메서드의 시그니처는 void Run()이어야 한다

MainWindow.xaml.cs
~~~c#
using System.Threading;
using System.Windows;
using System.Diagnostics;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

            Debug.WriteLine("main#: Begin");

            Thread t1 = new Thread(new ThreadStart(Run));
            t1.Start();

            Debug.WriteLine("main#: End");
        }

        void Run()
        {
            Debug.WriteLine("Thread#: Begin");
            // Do Something
            Thread.Sleep(3000);
            Debug.WriteLine("Thread#: End");
        }
    }

}

~~~

  - Thread에 매개변수 전달하기
    - 스레드가 실행할 메서드에서는 object형으로 받아온 후 형변환하여 사용하여야 한다

MainWindow.xaml.cs
~~~c#
using System.Threading;
using System.Windows;
using System.Diagnostics;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

            Debug.WriteLine("main#: Begin");

            Thread t1 = new Thread(Run);
            t1.Start(7);

            Debug.WriteLine("main#: End");
        }

        void Run(object obj)
        {
            Debug.WriteLine(obj.ToString());

            Debug.WriteLine("Thread#: Begin");
            // Do Something
            Thread.Sleep(3000);
            Debug.WriteLine("Thread#: End");
        }
    }
}
~~~

<br/>

MainWindow.xaml.cs
~~~c#
using System.Threading;
using System.Windows;
using System.Diagnostics;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

            Debug.WriteLine("main#: Begin");

            Thread t1 = new Thread(new ThreadStart(() => Run(7)));
            t1.Start();


            Debug.WriteLine("main#: End");
        }

        void Run(object obj)
        {
            Debug.WriteLine(obj.ToString());

            Debug.WriteLine("Thread#: Begin");
            // Do Something
            Thread.Sleep(3000);
            Debug.WriteLine("Thread#: End");
        }
    }
}
~~~

  - Thread 블락시키기
    - 서브Thread가 끝이 나야  t1.Join() 이후로 main Thread가 지나간다

MainWindow.xaml.cs
~~~c#
using System.Threading;
using System.Windows;
using System.Diagnostics;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

            Debug.WriteLine("main#: Begin");

            Thread t1 = new Thread(new ThreadStart(() => Run(7)));
            t1.Start();

            t1.Join();

            Debug.WriteLine("main#: End");
        }

        void Run(object obj)
        {
            Debug.WriteLine(obj.ToString());

            Debug.WriteLine("Thread#: Begin");
            // Do Something
            Thread.Sleep(3000);
            Debug.WriteLine("Thread#: End");
        }
    }
}
~~~

  - Thread를 사용하는 가장 일반적인 방법

MainWindow.xaml.cs
~~~c#
using System.Threading;
using System.Windows;
using System.Diagnostics;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        static bool myFlag = true;
        public MainWindow()
        {
            InitializeComponent();

            Debug.WriteLine("main#: Begin");

            Thread t1 = new Thread(new ThreadStart(Run));
            t1.Start();

            Thread.Sleep(5000);
            myFlag = false;

            Debug.WriteLine("main#: End");
        }

        void Run()
        {
            while (myFlag)
            {
                Debug.WriteLine("Thread#: Begin");
                // Do Something
                Thread.Sleep(1000);
            }
        }
    }
}
~~~

  - lock 동기화
    - 아래의 코드를 실행하면, num의 같은 값들이 출력이 되게 된다. 이것은 두개의 Thread가 동시에 num이라는 변수에 접근하기 때문에 생긴것이다

MainWindow.xaml.cs
~~~c#
using System.Threading;
using System.Windows;
using System.Diagnostics;
using System;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public int InNum = 0;
        public MainWindow()
        {
            InitializeComponent();

            Debug.WriteLine("main#: Begin");

            Data myData = new Data();
            Thread t1 = new Thread(new ThreadStart( () => Run(myData)));
            t1.Start();
            Thread t2 = new Thread(new ThreadStart(() => Run(myData)));
            t2.Start();

            Debug.WriteLine("main#: End");
        }

        void Run(object obj)
        {
            Data targetData = obj as Data;

            for (int i = 0; i < 10; i++)
            {
                targetData.Increase();
                Debug.WriteLine(targetData.num);
            }
        }
    }
    
    class Data
    {
        public int num = 0;

        public void Increase()
        {
            this.num++;
            Thread.Sleep(5);
        }
    }
}
~~~

  - 아래와 같이 lock을 써서 해결할 수 있다

MainWindow.xaml.cs
~~~c#
using System.Threading;
using System.Windows;
using System.Diagnostics;
using System;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public int InNum = 0;
        public MainWindow()
        {
            InitializeComponent();

            Debug.WriteLine("main#: Begin");

            Data myData = new Data();
            Thread t1 = new Thread(new ThreadStart( () => Run(myData)));
            t1.Start();
            Thread t2 = new Thread(new ThreadStart(() => Run(myData)));
            t2.Start();

            Debug.WriteLine("main#: End");
        }

        void Run(object obj)
        {
            Data targetData = obj as Data;

            for (int i = 0; i < 10; i++)
            {
                targetData.Increase();
                Debug.WriteLine(targetData.num);
            }
        }
    }
    
    class Data
    {
        private object obj = new object();
        public int num = 0;

        public void Increase()
        {
            lock (obj)
            {
                this.num++;
                Thread.Sleep(5);
            }
        }
    }
}

~~~

  - Task만들기
    - 첫번째 인자로 함수를
    - 두번째 인자로 매개변수를 넘겨준다
    - Task.Factory.StartNew 를 사용하게 되면 생성과 동시에 시작하게 된다

MainWindow.xaml.cs
~~~c#
using System.Threading;
using System.Windows;
using System.Diagnostics;
using System;
using System.Threading.Tasks;
using System.Windows.Documents;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public bool bFlage = true;
        public MainWindow()
        {
            InitializeComponent();

            Debug.WriteLine("main#: Begin");

            Task.Factory.StartNew(new Action<object>(Run), "kkk");

            for (int i = 0; i < 3; i++)
            {
                Debug.WriteLine("main~");
                Thread.Sleep(100);
            }

            bFlage = false;

            Debug.WriteLine("main#: End");
        }

        public void Run(object data)
        {
            while (bFlage)
            {
                Debug.WriteLine(data.ToString());
                Debug.WriteLine("Thread~");
            }
        }
    }
}
~~~

  - Task생성후 나중에 실행시키기
    - Wait() 함수를 사용하면 해당하는 Task가 모두 끝나야 그 다음으로 넘어갈 수 있게 된다

MainWindow.xaml.cs
~~~c#
using System.Threading;
using System.Windows;
using System.Diagnostics;
using System;
using System.Threading.Tasks;
using System.Windows.Documents;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public bool bFlage = true;
        public MainWindow()
        {
            InitializeComponent();

            Debug.WriteLine("main#: Begin");

            Task t1 = new Task(new Action(Run));
            t1.Start();

            for (int i = 0; i < 3; i++)
            {
                Debug.WriteLine("main~");
                Thread.Sleep(100);
            }

            bFlage = false;

            Debug.WriteLine("main#: End");
        }

        public void Run()
        {
            while (bFlage)
            {
                Debug.WriteLine("Thread~");
            }
        }
    }
}
~~~


  - Task.Run()
    - 동기 메서드 내에서 비동기 메서드를 호출할 때는 Task.Run() 메서드를 사용할 수 있다

MainWindow.xaml.cs
~~~c#
using System.Threading;
using System.Windows;
using System.Diagnostics;
using System;
using System.Threading.Tasks;
using System.Windows.Documents;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public bool bFlage = true;
        public MainWindow()
        {
            InitializeComponent();

            Debug.WriteLine("main#: Begin");

            Run();

            for (int i = 0; i < 5; i++)
            {
                Debug.WriteLine("main~");
                Thread.Sleep(100);
            }

            bFlage = false;

            Debug.WriteLine("main#: End");
        }

        public async void Run()
        {
            await Task.Run(() =>
            {
                Debug.WriteLine("Run#: Begin");

                while (bFlage)
                {
                    Debug.WriteLine("Run~");
                    Task.Delay(100);
                }

                Debug.WriteLine("Run#: End");
            });
            
        }
    }
}
~~~

<br/>

MainWindow.xaml.cs
~~~c#
await Task.Run(new Action(() => 
            {
                while (true)
                {
                    TcpClient client = tcpListener.AcceptTcpClient();
                    if (client.Connected == true)
                    {
                        this.Dispatcher.BeginInvoke(new Action(() =>
                        {
                            lstClient.Items.Add(client.Client.RemoteEndPoint.ToString());
                        }));
                        OnReceive(client);
                    }
                }
            }));
~~~

await Task.Run(new Action(() => {실행할 코드} )); 공식을 이용

###### [Thread](#Thread)
###### [Top](#top)
<br/>
<br/>

## 다른 Thread에서 UI접근
  - invoke(동기식), BeginInvoke(비동기식)
    - 외부 thread가 현재 thread의 컨트롤에 액세스 하면 데이터가 깨질 수 있기 때문에, 메인 thread이게 읽고 쓰는 작업을 위임하는 것이다
[별도의 스레드]에서 [main_form.Invoke(xxx) 를 호출] 한다는 것은, [별도의 스레드]가 [main_form 을 소유한 스레드]에게 [xxx 함수의 호출을 위임]한다는 뜻이 된다

#cs(예시)
~~~
await Task.Run(new Action(() => 
            {
                while (true)
                {
                    TcpClient client = tcpListener.AcceptTcpClient();
                    if (client.Connected == true)
                    {
                        this.Dispatcher.BeginInvoke(new Action(() =>
                        {
                            lstClient.Items.Add(client.Client.RemoteEndPoint.ToString());
                        }));
                        OnReceive(client);
                    }
                }
            }));
~~~

this.Dispatcher.BeginInvoke(new Action(() => {실행할 코드} )); 공식을 이용

###### [Thread](#Thread)
###### [Top](#top)

<br/>
<br/>

***

# etc...

#### NET
  - .NET Framework -> 윈도우 전용
    - 1.0
    - 1.1
    - 2.0
    - 3.5
    - 4.X
    - 4.8
  - .NET Core
    - 1.0
    - 1.1
    - 2.1
    - 3.1
    - 5.0  

#### C#
  - Console응용 프로그램
  - Cloud
    - Azure
  - Web
    - ASP.NET(레거시)
      - .NET Framework 에만 포함
    - ASP.NET Core https://www.youtube.com/c/VisualAcademy/playlists 
      - MVC
    - Blazor -> C#을 사용해서 풀스택 개발
      - Blazor Server
      - Blazor WebAssembly
    - Razor Pages
    - SignalR
  - Desktop
    - Windows Forms
      - .NET Framework
      - .NET Core 3.1 이상
      - https://www.youtube.com/watch?v=boUIc2Y4cZo&list=PLoFFz2j8yxxxH_3ustbHATXtMsHZ-Saei&index=1 
    - WPF
      - Xaml -> 마크업언어
    - UWP
  - Mobile
    - Xamarin -> 안드로이드,아이폰,윈도우 앱
  - Game
    - Unity
   - IoT
     - ARM32
     - ARM64
   - AI
     - ML.NET
     - .NET for Apache Spark

#### VB  

#### F#  
