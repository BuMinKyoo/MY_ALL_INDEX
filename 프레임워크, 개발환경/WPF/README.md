###### Top

- <details markdown="1">
  <summary>예제</summary>
  <div markdown="1">
  
  - [예제](#예제)
    - [FontFamily, FontSize지정할시,FrameworkElement](#fontfamily-fontsize지정할시frameworkelement)
    - [Placeholder](#placeholder)
    - [MultiBinding,IMultiValueConverter](#multibindingimultivalueconverter)

  </div>
  </details>


- [코딩표준](#코딩표준)

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

- [Style](#style)
  - [Style의 key값으로 각각의 컨트롤에 Style을 적용](#style의-key값으로-각각의-컨트롤에-style을-적용)
    - Style x:Key="(사용할 name)" TargetType="(적용시킬 컨트롤)"
  - [TargetType속성으로 적용시킬 컨트롤 지정](#targettype속성으로-적용시킬-컨트롤-지정)
    - Style TargetType="{x:Type 적용시킬 컨트롤}"
  - [각각의 자식 컨트롤에 Style 적용하기](#각각의-자식-컨트롤에-style-적용하기)
  - [BasedOn을 이용한 Style상속](#basedon을-이용한-style상속)

<br/>

- [UserControl,CustomControl,리소스,Page,창(Window)](#usercontrolcustomcontrol리소스page창window)
  - [사용자 정의 컨트롤(UserControl)](#사용자-정의-컨트롤usercontrol)
  - [사용자 지정 컨트롤(CustomControl)](#사용자-지정-컨트롤customcontrol)
  - [리소스 사전 참조하기](#리소스-사전-참조하기)
  - ['리소스사전' 활용하기(ContentPresenter,ItemsPresenter)](#리소스사전-활용하기contentpresenteritemspresenter)
  - [Page](#page)
  - [창(Window)](#창window)

<br/>

- [DataTemplate,DataContext,Binding](#datatemplatedatacontextbinding)
  - [DataTemplate 사용하기](#datatemplate사용하기)
  - [class behind DataContext](#class-behind-datacontext)
  - [class behind DataContext 다른 class](#class-behind-datacontext-다른-class)
  - [xaml_Window.DataContext](#xaml_windowdatacontext)
  - [xaml_Window.DataContext_다른프로젝트](#xaml_windowdatacontext_다른프로젝트)
  - [UserControl binding DataContext](#usercontrol-binding-datacontext)
  - [Binding은 항상 DataContext기준으로 들어간다](#binding은-항상-datacontext기준으로-들어간다)
  - [ElementName,Path,RelativeSource,FindAncestor](#elementnamepathrelativesourcefindancestor)

<br/>

  - [ContentControl,ItemsControl](#contentcontrolitemscontrol)
    - [ContentControl](#contentcontrol)
    - [ItemsControl](#itemscontrol)

<br/>

  - [MVVM패턴](#mvvm패턴)
    - [MainView.xaml에 ViewModel 고정문제](#mainViewxaml에-viewmodel-고정문제)
    - [MainView.xaml에 ViewModel 사용을 위한 ResourceDictionary의 DataTemplate의 DataType사용의 문제](#mainviewxaml에-viewmodel-사용을-위한-resourcedictionary의-datatemplate의-datatype사용의-문제)
    - [ViewCache를 만들어 캐시하기](#viewcache를-만들어-캐시하기)
    - [ItemsControl 형태로 만들어 캐시하기](#itemscontrol-형태로-만들어-캐시하기)
    - [View의 Event를 ViewModel에서 핸들링하기(InvokeCommandAction)](#view의-event를-viewmodel에서-핸들링하기invokecommandaction)
    - [View의 Event를 ViewModel에서 핸들링하기(CallMethodAction)](#view의-event를-viewmodel에서-핸들링하기callmethodaction)
    - [View의 Event를 ViewModel에서 핸들링하기(AttachedProperty)](#view의-event를-viewmodel에서-핸들링하기attachedproperty)
    - [View의 사용자 AttachedProperty 추가하기(+binding불가한 것)](#view의-사용자-attachedproperty-추가하기binding불가한-것)
    - [Behavior을 활용한 DependencyProperty추가하기 (+binding불가한 것)](#behavior을-활용한-dependencyproperty추가하기-binding불가한-것)
    - [DependencyProperty](#dependencyproperty)
    - [ViewModel To ViewModel 데이터교환](#viewmodel-to-viewmodel-데이터교환)
    - [ViewModel To ViewModel 데이터교환(IOC,DI)_Store를 활용한 이벤트](#viewmodel-to-viewmodel-데이터교환iocdi_store를-활용한-이벤트)
    - [ViewModel To ViewModel 데이터교환(IOC,DI)_EventHandler를 활용한 이벤트](#viewmodel-to-viewmodel-데이터교환iocdi_eventhandler를-활용한-이벤트)

<br/>

- [트리거](#트리거)
  - [Trigger](#trigger)
  - [애니메이션](#애니메이션)
  - [MultiTrigger](#multitrigger)
  - [DataTrigger](#datatrigger)
  - [DataTrigger안에 DoubleAnimation적용하기](#datatrigger안에-doubleanimation적용하기)
  - [EventTrigger](#eventtrigger)

<br/>

- [이벤트의 버블링(bubbling),터널링(tunneling)](#이벤트의-버블링bubbling터널링tunneling)
  - [최상위 grid에 RoutedEvent 적용하기](#최상위-grid에-routedevent-적용하기)
  - [Preview이벤트](#preview이벤트)

<br/>

- [RenderTransform](#rendertransform)
  - [TranslateTransform](#translatetransform)
  - [여러 Transform을 적용하기](#여러-transform을-적용하기)
  - [EventTrigger를 통해 적용하기](#eventtrigger를-통해-적용하기)
  - [Swipe기능](#swipe기능)

<br/>

- [ControlTemplate](#controltemplate)
  - [버튼 모양 바꾸기](#버튼-모양-바꾸기)

<br/>

- [Converter](#Converter)
- [ObservableCollection](#observablecollection)
- [INotifyPropertyChanged](#inotifypropertychanged)
- [Command](#command)

<br/>

- [static class를 활용한 싱글톤 데이터 교환 구조](static-class를-활용한-싱글톤-데이터-교환-구조)
  - [Workspace를 통한 UserControl끼리의 값 전달](#workspace를-통한-usercontrol끼리의-값-전달)
  - [Workspace를 통한 UserControl끼리의 값 전달(ContentControl)](#workspace를-통한-usercontrol끼리의-값-전달contentcontrol)
    
<br/>

- [WPF의 다양한 프로젝트/프로젝트 참조하기](#wpf의-다양한-프로젝트프로젝트-참조하기)

<br/>

- [CommunityToolkit.Mvvm(Nuget패키지)](#communitytoolkitmvvmnuget패키지)

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

<br/>

- [통신Class](#통신class)
- [Http,Https통신](#httphttps통신)
- [Http,Https통신 서버(에러)](#httphttps통신-서버에러)
- [JsonParsing](#jsonparsing)
  - [JsonParsing하기](#jsonparsing하기)
  - [Json직렬화하기](#json직렬화하기)
- [DB연결](#db연결)
- [디자인패턴](#디자인패턴)
  - [MVC](#MVC)
  - [MVP](#MVP)
  - [MVVM](#MVVM)

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

# 예제
  - [FontFamily, FontSize지정할시,FrameworkElement](#fontfamily-fontsize지정할시frameworkelement)
  - [Placeholder](#placeholder)
  - [MultiBinding,IMultiValueConverter](#multibindingimultivalueconverter)

###### [예제](#예제)
###### [Top](#top)

<br/>
<br/>

# FontFamily, FontSize지정할시,FrameworkElement
  - 폰트와 같이 전역으로 똑같이 지정하고 싶을때, 각 style에 따로 지정하는 것이 아니라, BasedOn속성으로 이어 받는것이 좋은데, 이때, FrameworkElement속성으로 하게 되면 어떠한 type의 style도 전부 BasedOn으로 이어 받을 수 있다

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp2.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">

    <Window.Resources>
        <Style x:Key="BaseControl" TargetType="{x:Type FrameworkElement}">
            <Setter Property="Control.FontFamily" Value="Arial"/>
            <Setter Property="Control.FontSize" Value="100"/>
        </Style>

        <Style TargetType="{x:Type TextBlock}" BasedOn="{StaticResource BaseControl}">
        </Style>

        <Style TargetType="{x:Type TextBox}" BasedOn="{StaticResource BaseControl}">
        </Style>
    </Window.Resources>
    
    <StackPanel>
        <TextBlock Text="sdfsdf"/>
        <TextBox Text="sdfsdf"/>
    </StackPanel>
</Window>
~~~

###### [예제](#예제)
###### [Top](#top)

<br/>
<br/>

# Placeholder
  - 폰트와 같이 전역으로 똑같이 지정하고 싶을때, 각 style에 따로 지정하는 것이 아니라, BasedOn속성으로 이어 받는것이 좋은데, 이때, FrameworkElement속성으로 하게 되면 어떠한 type의 style도 전부 BasedOn으로 이어 받을 수 있다

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp2.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        mc:Ignorable="d"
        Title="MainWindow" Height="200" Width="300">

    <Grid>
        <TextBlock Text="sdfsdf">
            <TextBlock.Style>
                <Style TargetType="{x:Type TextBlock}">
                    <Setter Property="Foreground" Value="#88000000"/>
                    <Setter Property="FontSize" Value="100"/>
                    <Setter Property="Visibility" Value="Collapsed"/>
                    <Style.Triggers>
                         <DataTrigger Binding="{Binding ElementName=txt, Path=Text}" Value="">
                            <Setter Property="Visibility" Value="Visible"/>
                        </DataTrigger>
                    </Style.Triggers>
                </Style>
            </TextBlock.Style>
        </TextBlock>
        <TextBox x:Name="txt" Text="" Background="Transparent" FontSize="100"/>
    </Grid>
</Window>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/4d1fa31a-96e4-4dfd-9397-e79679956e4f)

###### [예제](#예제)
###### [Top](#top)

<br/>
<br/>

# MultiBinding,IMultiValueConverter

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp2.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        mc:Ignorable="d"
        xmlns:local="clr-namespace:WpfApp2"
        Title="MainWindow" Height="200" Width="300">

    <Window.Resources>
        <local:MultiValueConverter x:Key="MultiValueConverter"/>
    </Window.Resources>
    <Grid>
        <TextBox Name="txtInput1" Text="20" Visibility="Collapsed"/>
        <TextBox Name="txtInput2" Text="30" Visibility="Collapsed"/>
        <TextBlock>
            <TextBlock.Text>
                <MultiBinding Converter="{StaticResource MultiValueConverter}" Mode="TwoWay">
                    <Binding ElementName="txtInput1" Path="Text"/>
                    <Binding ElementName="txtInput2" Path="Text"/>
                </MultiBinding>
            </TextBlock.Text>
        </TextBlock>
    </Grid>
</Window>
~~~

<br/>

#MultiValueConverter.cs
~~~c#
using System;
using System.Globalization;
using System.Windows.Data;

namespace WpfApp2
{
    public class MultiValueConverter : IMultiValueConverter
    {
        public object Convert(object[] values, Type targetType, object parameter, CultureInfo culture)
        {
            // values 배열에서 필요한 값 가져오기
            if (values == null || values.Length < 2)
            {
                return Binding.DoNothing;
            }

            // 두 개의 값 가져오기 (여기서는 간단한 덧셈을 수행합니다)
            double value1 = System.Convert.ToDouble(values[0]);
            double value2 = System.Convert.ToDouble(values[1]);

            double result = value1 + value2;

            // 두 숫자의 합 반환
            return result.ToString();
        }

        public object[] ConvertBack(object value, Type[] targetTypes, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
~~~

###### [예제](#예제)
###### [Top](#top)

<br/>
<br/>

***

# 코딩표준
  - 자료형
    - int = In
    - double = Dbl
    - string = Str
    - bool = Bl
    - ObservableCollection = Obc
  - 접근형태
    - 일반 private = _ 앞에 붙이기
    - static = Stc_
      - 만약 static int형이면
        - Stc_In

###### [코딩표준](#코딩표준)
###### [Top](#top)
    
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

# UserControl,CustomControl,리소스,Page,창(Window)
  - [사용자 정의 컨트롤(UserControl)](#사용자-정의-컨트롤usercontrol)
  - [사용자 지정 컨트롤(CustomControl)](#사용자-지정-컨트롤customcontrol)
  - [리소스 사전 참조하기](#리소스-사전-참조하기)
  - ['리소스사전' 활용하기(ContentPresenter,ItemsPresenter)](#리소스사전-활용하기contentpresenteritemspresenter)
  - [Page](#page)
  - [창(Window)](#창window)

###### [UserControl,CustomControl,리소스,Page,창(Window)](#usercontrolcustomcontrol리소스page창window)
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

###### [UserControl,CustomControl,리소스,Page,창(Window)](#usercontrolcustomcontrol리소스page창window)
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


###### [UserControl,CustomControl,리소스,Page,창(Window)](#usercontrolcustomcontrol리소스page창window)
###### [Top](#top)

<br/>
<br/>

# 리소스 사전 참조하기

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

<br/>

  - 같은 프로젝트에서 '리소스 사전' 불러오기(2) NewFolder라는 폴더 안에 들어 있는 경우
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

<br/>

  - 다른 프로젝트에서 '리소스사전' 참조하기
 
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

###### [UserControl,CustomControl,리소스,Page,창(Window)](#usercontrolcustomcontrol리소스page창window)
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

###### [UserControl,CustomControl,리소스,Page,창(Window)](#usercontrolcustomcontrol리소스page창window)
###### [Top](#top)

<br/>
<br/>

# Page
  - 창을 이동하는것과 같지만, 일반적으로 많이 쓰이지는 않을것 같다
  - Frame이라는것을 활용해서 이동한다

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp3.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp3"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">

    <Frame Source="/Page1.xaml" NavigationUIVisibility="Hidden"/>

</Window>
~~~

<br/>

#Page1.xaml
~~~c#
<Page x:Class="WpfApp3.Page1"
      xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
      xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
      xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
      xmlns:local="clr-namespace:WpfApp3"
      mc:Ignorable="d" 
      d:DesignHeight="450" d:DesignWidth="800"
      Title="Page1">

    <Grid>
        <Button Width="100" Height="30" Content="Page1" Click="Button_Click"/>
    </Grid>
</Page>
~~~

<br/>

#Page1.xaml.cs
~~~c#
using System.Windows;
using System.Windows.Controls;
using System.Windows.Navigation;

namespace WpfApp3
{
    /// <summary>
    /// Page1.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class Page1 : Page
    {
        public Page1()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            Page2 page2 = new Page2();
            NavigationService.Navigate(page2);

        }
    }
}
~~~

<br/>

#Page2.xaml
~~~c#
<Page x:Class="WpfApp3.Page2"
      xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
      xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
      xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
      xmlns:local="clr-namespace:WpfApp3"
      mc:Ignorable="d" 
      d:DesignHeight="450" d:DesignWidth="800"
      Title="Page2">

    <Grid>
        <Button Width="100" Height="30" Content="Page2"/>
    </Grid>
</Page>
~~~

###### [UserControl,CustomControl,리소스,Page,창(Window)](#usercontrolcustomcontrol리소스page창window)
###### [Top](#top)

<br/>
<br/>

# 창(Window)
  - Modal,Domodal사용하기
    - ShowDialog() : 해당 창을 닫기 전까지는 뒤에 있는 창으로 이동 못함(모달)
    - Show() : 뒤에 있는 창으로 이동 가능(모달리스)
    - 아래의 코드는 UserControl 을 만든후 그것을 window에 상속한 방법으로 진행했지만, “창”을 만들면 window가 만들어 지고, window가 있어야 이것을 사용할 수 있다

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="300" Width="300">
    <StackPanel>
        <Button Width="100" Height="30" Click="Button_Click"/>
        <TextBlock Text="{Binding Num}"/>
    </StackPanel>
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
using System.Windows;

namespace WpfApp1
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            UserControl1 Usercontrol1 = new UserControl1();
            Usercontrol1.ShowDialog();

            InitializeComponent();
            this.DataContext = this;

            
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            Num++;
        }

        private int m_Num = 10;
        public int Num
        {
            get { return m_Num; }
            set
            {
                m_Num = value;
            }
        }
    }
}
~~~

<br/>

#UserControl1.xaml
~~~c#
<Window x:Class="WpfApp1.UserControl1"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:WpfApp1"
             mc:Ignorable="d" 
             Height="200" Width="200">
    <Grid>
        <Button Width="100" Height="30" Content="버튼"/>
    </Grid>
</Window>
~~~

<br/>

#UserControl1.xaml.cs
~~~c#
using System.Windows;

namespace WpfApp1
{
    public partial class UserControl1 : Window
    {
        public UserControl1()
        {
            InitializeComponent();
        }
    }
}
~~~

###### [UserControl,CustomControl,리소스,Page,창(Window)](#usercontrolcustomcontrol리소스page창window)
###### [Top](#top)

<br/>
<br/>

***

# DataTemplate,DataContext,Binding
  - [DataTemplate 사용하기](#datatemplate사용하기)
  - [class behind DataContext](#class-behind-datacontext)
  - [class behind DataContext 다른 class](#class-behind-datacontext-다른-class)
  - [xaml_Window.DataContext](#xaml_windowdatacontext)
  - [xaml_Window.DataContext_다른프로젝트](#xaml_windowdatacontext_다른프로젝트)
  - [UserControl binding DataContext](#usercontrol-binding-datacontext)
  - [Binding은 항상 DataContext기준으로 들어간다](#binding은-항상-datacontext기준으로-들어간다)
  - [ElementName,Path,RelativeSource,FindAncestor](#elementnamepathrelativesourcefindancestor)


###### [DataTemplate,DataContext,Binding](#datatemplatedatacontextbinding)
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

###### [DataTemplate,DataContext,Binding](#datatemplatedatacontextbinding)
###### [Top](#top)

<br/>
<br/>

# class behind DataContext
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

###### [DataTemplate,DataContext,Binding](#datatemplatedatacontextbinding)
###### [Top](#top)

<br/>
<br/>

# class behind DataContext 다른 class

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

###### [DataTemplate,DataContext,Binding](#datatemplatedatacontextbinding)
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

###### [DataTemplate,DataContext,Binding](#datatemplatedatacontextbinding)
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

###### [DataTemplate,DataContext,Binding](#datatemplatedatacontextbinding)
###### [Top](#top)

<br/>
<br/>


# UserControl binding DataContext

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp3.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp3"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <Window.DataContext>
        <local:MainView/>
    </Window.DataContext>

    <local:UserControl1 DataContext="{Binding Texts}"/>

</Window>
~~~

<br/>

#MainView.cs
~~~c#
namespace WpfApp3
{
    public class MainView
    {
        private string _str1 = "Hello1";
        public string Str1
        {
            get { return _str1; }
            set { _str1 = value; }
        }

        private string _str2 = "Hello2";
        public string Str2
        {
            get { return _str2; }
            set { _str2 = value; }
        }

        private Texts _texts = new Texts();
        public Texts Texts
        {
            get { return _texts; }
            set { _texts = value; }
        }
    }
}
~~~

<br/>

#UserControl1.xaml
~~~c#
<UserControl x:Class="WpfApp3.UserControl1"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:WpfApp3"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <StackPanel>
        <Button Width="100" Height="30" Content="{Binding Str11}"/>
        <Button Width="100" Height="30" Content="{Binding Str22}"/>
    </StackPanel>
</UserControl>
~~~

<br/>

#Texts.cs
~~~c#
namespace WpfApp3
{
    public class Texts
    {
        private string _str11 = "Hello11";
        public string Str11
        {
            get { return _str11; }
            set { _str11 = value; }
        }

        private string _str22 = "Hello22";
        public string Str22
        {
            get { return _str22; }
            set { _str22 = value; }
        }
    }
}
~~~

###### [DataTemplate,DataContext,Binding](#datatemplatedatacontextbinding)
###### [Top](#top)

<br/>
<br/>

# Binding은 항상 DataContext기준으로 들어간다

  - DataTemplate 안에 선언된 Button의 경우 Command를 그냥 바인딩하면 바인딩이 안된다.
  - Command가 부모의 DataContext에 존재하기 때문이다. 그래서 Command를 찾기 위한 대상을 변경해주어야 한다.

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp3.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp3"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <Window.DataContext>
        <local:MainWindowViewModel/>
    </Window.DataContext>

    <ItemsControl ItemsSource="{Binding CustList}">

        <!--템플릿 외형-->
        <ItemsControl.Template>
            <ControlTemplate TargetType="{x:Type ItemsControl}">
                <StackPanel>
                    <ItemsPresenter/>
                </StackPanel>
            </ControlTemplate>
        </ItemsControl.Template>

        <!--데이터 외형-->
        <ItemsControl.ItemTemplate>
            <DataTemplate>
                <StackPanel>
                    <Button Width="100" Height="30" Content="{Binding Age}"/>
                    <Button Width="100" Height="30" Content="{Binding Name}" Command="{Binding RelativeSource={RelativeSource FindAncestor, AncestorType={x:Type Window}, AncestorLevel=1}, Path=DataContext.OneClick}"/>
                </StackPanel>
            </DataTemplate>
        </ItemsControl.ItemTemplate>

        <!--패널 정렬-->
        <ItemsControl.ItemsPanel>
            <ItemsPanelTemplate>
                <StackPanel/>
            </ItemsPanelTemplate>
        </ItemsControl.ItemsPanel>
    </ItemsControl>

</Window>
~~~

<br/>

#MainWindowViewModel.cs
~~~c#
using System.Collections.Generic;
using System.Windows.Input;
using System.Windows;

namespace WpfApp3
{
    public class MainWindowViewModel
    {
        public MainWindowViewModel()
        {
            CustList = new List<Cust>();
            CustList.Add(new Cust { Name = "John Doe", Age = "42" });
            CustList.Add(new Cust { Name = "Jane Doe", Age = "39" });
            CustList.Add(new Cust { Name = "Sammy Doe", Age = "13" });
        }   

        private List<Cust> _custList;
        public List<Cust> CustList
        {
            get { return _custList; }
            set
            {
                _custList = value;
            }
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

#Cust.cs
~~~c#
namespace WpfApp3
{
    public class Cust
    {
        private string _name;
        public string Name
        {
            get { return _name; }
            set
            {
                _name = value;
            }
        }

        private string _age;
        public string Age
        {
            get { return _age; }
            set
            {
                _age = value;
            }
        }
    }
}
~~~

<br/>

#Command.cs
~~~c#
using System;
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

<br/>

  - Button하나만 가지고 실험
    - 위에서 첫번째와, 세번째는 작동이 된다
    - Command는 바로 위의 DataContext로 binding이 되버리기 때문에 아래의 코드에서는 따로 지정해 주지 않으면 MainWindowViewModel에 있는 OneClick함수로 갈 수가 없다

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp3.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp3"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <Window.DataContext>
        <local:MainWindowViewModel/>
    </Window.DataContext>

    <StackPanel>
        <Button Width="100" Height="30" Content="123123" Command="{Binding RelativeSource={RelativeSource FindAncestor, AncestorType={x:Type Window}, AncestorLevel=1}, Path=DataContext.OneClick}" DataContext="123"/>
        <Button Width="100" Height="30" Content="123123" Command="{Binding OneClick}" DataContext="123"/>
        <Button Width="100" Height="30" Content="123123" Command="{Binding RelativeSource={RelativeSource FindAncestor, AncestorType={x:Type Window}, AncestorLevel=1}, Path=DataContext.OneClick}"/>
    </StackPanel>

</Window>
~~~

<br/>

#MainWindowViewModel.cs
~~~c#
using System.Windows.Input;
using System.Windows;

namespace WpfApp3
{
    public class MainWindowViewModel
    {
        public MainWindowViewModel()
        {

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

###### [DataTemplate,DataContext,Binding](#datatemplatedatacontextbinding)
###### [Top](#top)

<br/>
<br/>

# ElementName,Path,RelativeSource,FindAncestor

  - ElementName : 해당되는 Name의 속성을 가져올 준비를 한다
  - Path : 해당되는 Name을 가지고 있는 속성을 가져온다

<br/>

~~~c#
<Rectangle Fill="Red" Name="aaa" 
        Height="100" Width="{Binding ElementName=aaa,
        Path=Height}"/>
<Ellipse Fill="Blue" Name="bbb"
            Height="20" Width="{Binding ElementName=aaa,
        Path=Height}"/>
~~~

<br/>

  - RelativeSource 를 이용하여 위와 같은 것을 똑같이 나타낼 수 있다

~~~c#
<Rectangle Fill="Red" Height="100" 
        Stroke="Black" 
        Width="{Binding RelativeSource={RelativeSource Self},
        Path=Height}"/>
<Ellipse Fill="Blue" Name="bbb"
            Height="20" Width="{Binding RelativeSource={RelativeSource Self},
        Path=Height}"/>
~~~

<br/>

  - FindAncestor을 이용해 내 위의 부모의 값들을 가져올 수 있다

~~~c#
<Canvas Name="Parent0">
    <Border Name="Parent1"
            Width="{Binding RelativeSource={RelativeSource Self},
            Path=Parent.ActualWidth}"
            Height="{Binding RelativeSource={RelativeSource Self},
            Path=Parent.ActualHeight}">
        <Canvas Name="Parent2">
            <Border Name="Parent3"
        Width="{Binding RelativeSource={RelativeSource Self},
        Path=Parent.ActualWidth}"
        Height="{Binding RelativeSource={RelativeSource Self},
            Path=Parent.ActualHeight}">
                <Canvas Name="Parent4">
                    <TextBlock FontSize="16" 
            Margin="5" Text="Display the name of the ancestor"/>
                    <TextBlock FontSize="16" 
                Margin="50" 
        Text="{Binding RelativeSource={RelativeSource  
                    FindAncestor,
                    AncestorType={x:Type Border}, 
                    AncestorLevel=1},Path=Name}" 
                    Width="200"/>
                </Canvas>
            </Border>
        </Canvas>
    </Border>
</Canvas>
~~~

###### [DataTemplate,DataContext,Binding](#datatemplatedatacontextbinding)
###### [Top](#top)

<br/>
<br/>

***

# ContentControl,ItemsControl
  - ContentControl과 ItemsControl은 매우 중요하고, 핵심이 되는 부분들이 있기 때문에 여기서 따로 상세히 설명하도록 한다
  - ContentControl : 자신의 자식으로 Content 하나를 받을 수 있는 컨트롤
  - ItemsControl : 리스트 또는 컬렉션처럼 데이터를 통해 다수의 반복되는 자식들을 가지는 컨트롤
    - ControlTemplate : Control의 그 자체의 외형을 정의하는 요소
    - ContentControl은 ContentPresenter
    - ItemsControl은 ItemsPresenter
  - DataTemplate : Content의 내용을 출력할 외형을 결정하는 방법
    - 화면에 그려 줄 일종의 UI 템플릿을 미리 만들어 놓고, 적용 가능한 상황이 되면 기존 객체의 렌더링 대신 이 UI 템플릿의 렌더링을 사용한다는 것
    - ItemsControl은 ItemsSource속성 사용
  - ItemsPanelTemplate : DataTemplate에 의해 생성된 엘리먼트들이 ItemsPanelTemplate에 의해 생성된 Panel의 자식으로 배치된다

<br/>

  - [ContentControl](#contentcontrol)
  - [ItemsControl](#itemscontrol)

###### [ContentControl,ItemsControl](#contentcontrolitemscontrol)
###### [Top](#top)

<br/>
<br/>

# ContentControl
  - ItemsControl과 비교해서 사용도가 적을것 같다
  - 다른 컨트롤을 감쌀 수 있기 때문에 DataContext를 지정할 수 없는 UI 객체에 바인딩 해주는 용도로 쓰거나 데이터 속성에 반응해 컨트롤의 외관(DataTemplate)을 변경시켜주는 용도로 활용할 수 있다.

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp2.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp2"
        mc:Ignorable="d"
        Title="MainWindow" Height="300" Width="300">
    <Window.DataContext>
        <local:MainWindowViewModel/>
    </Window.DataContext>


    <ContentControl>
        <ContentControl.Style>
            <Style TargetType="{x:Type ContentControl}">
                <Setter Property="BorderThickness" Value="{Binding Thkness}"/>
            </Style>
        </ContentControl.Style>
        <ContentControl.Template>
            <!--템플릿 외형-->
            <ControlTemplate TargetType="{x:Type ContentControl}">
                <StackPanel>
                    <Border BorderThickness="{TemplateBinding BorderThickness}" BorderBrush="Red">
                        <ContentPresenter ContentSource="Content"/>
                    </Border>
                    <Button Content="버튼~" Width="100" Height="30"/>
                </StackPanel>
            </ControlTemplate>
        </ContentControl.Template>

        <ContentControl.ContentTemplate>
            <!--데이터 외형-->
            <DataTemplate>
                <local:UserControl1/>
            </DataTemplate>
        </ContentControl.ContentTemplate>
    </ContentControl>
</Window>
~~~

<br/>

#MainWindowViewModel.cs
~~~c#
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace WpfApp2
{
    public class MainWindowViewModel : INotifyPropertyChanged
    {
        public MainWindowViewModel()
        {
            Str = "qweqweqwe";
        }

        private string _str;
        public string Str
        {
            get { return _str; }
            set
            {
                _str = value;
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

        private int _thkness = 10;
        public int Thkness
        {
            get { return _thkness; }
            set
            {
                _thkness = value;
            }
        }
    }
}
~~~

<br/>

#UserControl1.xaml
~~~c#
<UserControl x:Class="WpfApp2.UserControl1"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:WpfApp2"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <UserControl.Content>
        <StackPanel>
            <Button Content="버튼"/>
            <TextBlock Text="텍스트 불럭"/>
        </StackPanel>
    </UserControl.Content>
</UserControl>
~~~

  - 데이터 속성에 반응해 컨트롤의 외관(DataTemplate)을 변경시키기

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="200" Width="200">
    <Window.Resources>
        <local:Cust x:Key="aaa"/>
        <DataTemplate x:Key="template1">
            <StackPanel>
                <StackPanel.DataContext>
                    <local:Cust/>
                </StackPanel.DataContext>
                <Button Width="100" Height="30" Content="{Binding Name}"/>
                <Button Width="100" Height="30" Content="{Binding Age}"/>
            </StackPanel>
        </DataTemplate>
        <DataTemplate x:Key="template2">
            <StackPanel>
                <StackPanel.DataContext>
                    <local:Cust/>
                </StackPanel.DataContext>
                <TextBlock Width="100" Height="30" Text="{Binding Name}"/>
                <TextBlock Width="100" Height="30" Text="{Binding Age}"/>
            </StackPanel>
        </DataTemplate>
        <DataTemplate x:Key="template3">
            <StackPanel>
                <StackPanel.DataContext>
                    <local:Cust/>
                </StackPanel.DataContext>
                <Button Width="50" Height="30" Content="{Binding Name}"/>
                <Button Width="50" Height="30" Content="{Binding Age}"/>
            </StackPanel>
        </DataTemplate>
    </Window.Resources>
    
    
    <StackPanel>
        <Button Width="100" Height="30" Click="Button_Click" Content="템플릿 변경"/>

        <ContentControl>
            <ContentControl.Style>
                <Style TargetType="{x:Type ContentControl}">
                    <Setter Property="BorderThickness" Value="{Binding Thkness}"/>
                    <Style.Triggers>
                        <DataTrigger Binding="{Binding num}" Value="0">
                            <!--데이터외형변경-->
                            <Setter Property="ContentTemplate" Value="{StaticResource template1}"/>
                        </DataTrigger>
                        <DataTrigger Binding="{Binding num}" Value="1">
                            <!--데이터외형변경-->
                            <Setter Property="ContentTemplate" Value="{StaticResource template2}"/>
                        </DataTrigger>
                        <DataTrigger Binding="{Binding num}" Value="2">
                            <!--데이터외형변경-->
                            <Setter Property="ContentTemplate" Value="{StaticResource template3}"/>
                        </DataTrigger>
                    </Style.Triggers>
                </Style>
            </ContentControl.Style>
            <ContentControl.Template>
                <!--템플릿 외형-->
                <ControlTemplate TargetType="{x:Type ContentControl}">
                    <StackPanel>
                        <Border BorderThickness="{TemplateBinding BorderThickness}" BorderBrush="Red">
                            <ContentPresenter ContentSource="Content"/>
                        </Border>
                        <Button Content="버튼~" Width="100" Height="30"/>
                    </StackPanel>
                </ControlTemplate>
            </ContentControl.Template>
        </ContentControl>
    </StackPanel>
    
    
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Windows;

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

        private int _thkness = 10;
        public int Thkness
        {
            get { return _thkness; }
            set
            {
                _thkness = value;
            }
        }

        private int _Num = 0;
        public int num
        {
            get { return _Num; }
            set
            {
                _Num = value;
                Notify("num");
            }
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            num++;
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

        private Cust _custData;
        public Cust CustData
        {
            get { return _custData; }
            set
            {
                _custData = value;
                Notify("CustData");
            }
        }
    }
}
~~~

###### [ContentControl,ItemsControl](#contentcontrolitemscontrol)
###### [Top](#top)

<br/>
<br/>

# ItemsControl
  - ControlTemplate안에 있는 속성들을 바인딩 하기 위해서는 TemplateBinding을 사용하여야 하고 이것은 바로 위에 있는 style로 지정한 값을 가져오게 된다.
  - 그리고 style안에서 외부에서 바인딩할 값을 가져 올 수 있다
  - 또한 주석과 같이, style안에 property를 지정해 그 안에서 모드 값을 처리할 수도 있다
  - 마지막으로, TargetType의 값은 해당하는 컨트롤의 이름으로 하는것이 제일 무방하다.(ControlTemplate의 TargetType에 따라서 사용 할 수 있는 기본 이벤트와 같은 것들이 달라지니 참고해야 한다)

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp2.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp2"
        mc:Ignorable="d"
        Title="MainWindow" Height="300" Width="300">
    <Window.DataContext>
        <local:MainWindowViewModel/>
    </Window.DataContext>


    <ItemsControl ItemsSource="{Binding CustList}">
        <ItemsControl.Style>
            <Style TargetType="{x:Type ItemsControl}">
                <Setter Property="BorderThickness" Value="{Binding Thkness}"/>
            </Style>
        </ItemsControl.Style>
        <ItemsControl.Template>  <!--템플릿 외형-->
            <ControlTemplate TargetType="{x:Type ItemsControl}">
                <StackPanel>
                    <Border BorderThickness="{TemplateBinding BorderThickness}" BorderBrush="Red">
                        <ItemsPresenter/>
                    </Border>
                    <Button Content="버튼~" Width="100" Height="30"/>
                </StackPanel>
            </ControlTemplate>
        </ItemsControl.Template>

        <ItemsControl.ItemTemplate> <!--데이터 외형-->
            <DataTemplate>
                <local:UserControl1/>
            </DataTemplate>
        </ItemsControl.ItemTemplate>

        <ItemsControl.ItemsPanel> <!--패널 정렬-->
            <ItemsPanelTemplate>
                <StackPanel/>
            </ItemsPanelTemplate>
        </ItemsControl.ItemsPanel>
    </ItemsControl>

    <!--<ItemsControl ItemsSource="{Binding CustList}">
        <ItemsControl.Style>
            <Style TargetType="{x:Type ItemsControl}">
                <Setter Property="BorderThickness" Value="{Binding Thkness}"/>
                <Setter Property="Template">
                    <Setter.Value>
                        <ControlTemplate TargetType="{x:Type ItemsControl}">
                            <StackPanel>
                                <Border BorderThickness="{TemplateBinding BorderThickness}" BorderBrush="Red">
                                    <ItemsPresenter/>
                                </Border>
                                <Button Content="버튼~" Width="100" Height="30"/>
                            </StackPanel>
                        </ControlTemplate>
                    </Setter.Value>
                </Setter>
                <Setter Property="ItemTemplate">
                    <Setter.Value>
                        <DataTemplate>
                            <local:UserControl1/>
                        </DataTemplate>
                    </Setter.Value>
                </Setter>
                <Setter Property="ItemsPanel">
                    <Setter.Value>
                        <ItemsPanelTemplate>
                            <StackPanel/>
                        </ItemsPanelTemplate>
                    </Setter.Value>
                </Setter>
            </Style>
        </ItemsControl.Style>
    </ItemsControl>-->

</Window>
~~~

<br/>

#MainWindowViewModel.cs
~~~c#
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace WpfApp2
{
    public class MainWindowViewModel : INotifyPropertyChanged
    {
        public MainWindowViewModel()
        {
            CustList = new ObservableCollection<Cust>();
            CustList.Add(new Cust() { Name = "John", Age = "20" });
            CustList.Add(new Cust() { Name = "Mary", Age = "30" });
            CustList.Add(new Cust() { Name = "Peter", Age = "40" });
        }

        private ObservableCollection<Cust> _custList;
        public ObservableCollection<Cust> CustList
        {
            get { return _custList; }
            set
            {
                _custList = value;
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

        private int _thkness = 10;
        public int Thkness
        {
            get { return _thkness; }
            set
            {
                _thkness = value;
            }
        }
    }
}
~~~

<br/>

#UserControl1.xaml
~~~c#
<UserControl x:Class="WpfApp2.UserControl1"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:WpfApp2"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <StackPanel>
        <Button Content="{Binding Name}"/>
        <TextBlock Text="{Binding Age}"/>
    </StackPanel>
</UserControl>
~~~

<br/>

#Cust.cs
~~~c#
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace WpfApp2
{
    public class Cust : INotifyPropertyChanged
    {
        private string _name;
        public string Name
        {
            get { return _name; }
            set
            {
                _name = value;
            }
        }

        private string _age;
        public string Age
        {
            get { return _age; }
            set
            {
                _age = value;
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
}
~~~

###### [ContentControl,ItemsControl](#contentcontrolitemscontrol)
###### [Top](#top)

<br/>
<br/>

***

# MVVM패턴
  - View 의 추상화를 통해 View 를 독립적으로 만듦으로써, View 와 Model 간의 의존성을 분리하는 방법을 사용하는 것
  - 추상화 했다는 것은 명확한 타입을 지정하지 않겠다는 말과 같기 때문에 View에서 직접적으로 Model을 참조하거나 알지 못하게 하기 위해서 View를 추상화한 객체, 즉 ViewModel에 그 행위를 위임 한것
  - 따라서, ViewModel이 어떤 것이든, 그게 View에 들어와 속성과 행위만 맞으면 어떤 타입이라도 쓸 수 있도록 하게 된다

<br/>

  - [MainView.xaml에 ViewModel 고정문제](#mainViewxaml에-viewmodel-고정문제)
  - [MainView.xaml에 ViewModel 사용을 위한 ResourceDictionary의 DataTemplate의 DataType사용의 문제](#mainviewxaml에-viewmodel-사용을-위한-resourcedictionary의-datatemplate의-datatype사용의-문제)
  - [ViewCache를 만들어 캐시하기](#viewcache를-만들어-캐시하기)
  - [ItemsControl 형태로 만들어 캐시하기](#itemscontrol-형태로-만들어-캐시하기)
  - [View의 Event를 ViewModel에서 핸들링하기(InvokeCommandAction)](#view의-event를-viewmodel에서-핸들링하기invokecommandaction)
  - [View의 Event를 ViewModel에서 핸들링하기(CallMethodAction)](#view의-event를-viewmodel에서-핸들링하기callmethodaction)
  - [View의 Event를 ViewModel에서 핸들링하기(AttachedProperty)](#view의-event를-viewmodel에서-핸들링하기attachedproperty)
  - [View의 사용자 AttachedProperty 추가하기(+binding불가한 것)](#view의-사용자-attachedproperty-추가하기binding불가한-것)
  - [Behavior을 활용한 DependencyProperty추가하기 (+binding불가한 것)](#behavior을-활용한-dependencyproperty추가하기-binding불가한-것)
  - [DependencyProperty](#dependencyproperty)
  - [ViewModel To ViewModel 데이터교환](#viewmodel-to-viewmodel-데이터교환)
  - [ViewModel To ViewModel 데이터교환(IOC,DI)_Store를 활용한 이벤트](#viewmodel-to-viewmodel-데이터교환iocdi_store를-활용한-이벤트)
  - [ViewModel To ViewModel 데이터교환(IOC,DI)_EventHandler를 활용한 이벤트](#viewmodel-to-viewmodel-데이터교환iocdi_eventhandler를-활용한-이벤트)

###### [MVVM패턴](#mvvm패턴)
###### [Top](#top)

<br/>
<br/>

# MainView.xaml에 ViewModel 고정문제
  - 아래와 같이 MainWindow.xaml 에서 자신이 사용할 ViewModel을 고정해서 박아 두게 되면, 이것만으로 벌써 View와 ViewModel은 끈끈한 의존성이 생기게 된다. MainWindow 라는 View는 일단 로딩이 되면 무조건 MainWindowViewModel 라는 ViewModel을 무조건 함께 생성하여 달고 다녀야만 하기 때문에 이렇게 하면 안된다
  - 아래와 같이 하면 UserControl1 항상 달고 다녀야 한다

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="300" Width="300">
    <Window.DataContext>
        <local:MainWindowViewModel/>
    </Window.DataContext>

    <Grid>
        <local:UserControl1/>
    </Grid>
</Window>
~~~

<br/>

#MainWindowViewModel.cs
~~~c#
namespace WpfApp1
{
    public class MainWindowViewModel
    {
        private string _name = "John Doe";
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        private int _age = 42;
        public int Age
        {
            get { return _age; }
            set { _age = value; }
        }
    }
}
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
    <StackPanel>
        <Button Width="100" Height="30" Content="UserControl1"/>
        <TextBlock Text="{Binding Name}"/>
        <TextBlock Text="{Binding Age}"/>
    </StackPanel>
</UserControl>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/b93ce7b8-2416-4003-9ac4-99e02c4b4baa)

###### [MVVM패턴](#mvvm패턴)
###### [Top](#top)

<br/>
<br/>

# MainView.xaml에 ViewModel 사용을 위한 ResourceDictionary의 DataTemplate의 DataType사용의 문제
  - MainViewModel을 제외한 다른 화면에 대한 것은 MainWindowViewModel에서 각자 화면의 Class를 받아서 그것을 불러와 DataTemplate에 대한 DataType을 지정해서 ResourceDictionary안에서 처리 하도록 한다.
  - 아래의 코드는 ResourceDictionary를 MainWindow.xaml에서 처리하였지만, 편리하게 하기 위해서는 최상위인 App.xaml에서 처리할 수도 있다
  - DataTemplate은 기본적으로 xaml 이 지원하는 x:Key 라는 속성을 필수요소로 이용하여 Key 를 사용하는 Template에 적용되는 구조를 가지고 있지만, DataTemplate의 x:Key를 비우고 DataType 에만 값을 할당한 경우 할당한 DataType을 x:Key로 사용하도록 구성되어 있다.
  - 하지만 이 방법은 Window창을 다루지는 못한다

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="300" Width="300">
    <Window.Resources>
        <ResourceDictionary>
            <ResourceDictionary.MergedDictionaries>
                <ResourceDictionary Source="/Dictionary1.xaml"/>
            </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
    </Window.Resources>
    
    <Window.DataContext>
        <local:MainWindowViewModel/>
    </Window.DataContext>

    <Grid>
        <ContentControl Content="{Binding Display1}"/>
    </Grid>
</Window>
~~~

<br/>

#MainWindowViewModel.cs
~~~c#
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace WpfApp1
{
    public class MainWindowViewModel : INotifyPropertyChanged
    {
        public MainWindowViewModel()
        {
            Display1 = new UserControl1ViewModel();
        }

        private object _Display1;
        public object Display1
        {
            get { return _Display1; }
            set
            {
                _Display1 = value;
                Notify("Display1");
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
}
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
    <StackPanel>
        <Button Width="100" Height="30" Content="UserControl1"/>
        <TextBlock Text="{Binding Name}"/>
        <TextBlock Text="{Binding Age}"/>
    </StackPanel>
</UserControl>
~~~

<br/>

#UserControl1ViewModel.cs
~~~c#
namespace WpfApp1
{
    public class UserControl1ViewModel
    {
        private string _name = "John Doe";
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        private int _age = 42;
        public int Age
        {
            get { return _age; }
            set { _age = value; }
        }
    }
}
~~~

<br/>

#Dictionary1.xaml
~~~c#
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                    xmlns:local="clr-namespace:WpfApp1">
    <DataTemplate DataType="{x:Type local:UserControl1ViewModel}">
        <local:UserControl1/>
    </DataTemplate>
</ResourceDictionary>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/8932571d-98ef-49ea-8ebd-dd25f4f1526a)

<br/>

  - 위처럼 하게 되면,  화면을 여러개 만들때 문제가 된다
  - UserControl1ViewModel은 캐싱이 되지만, 화면을 틀때마다 UserControl1.xaml은 새롭게 다시 만들어 지게 된다(DisplayChange버튼을 누르면 UserControl1ViewModel, UserControl2ViewModel이 서로 교체 되면서 UserControl1.xaml,
  - UserControl2.xaml의 생성자가 계속 실행되게 된다)
  - 이것은 화면을 2개 만들고 그것을 번갈아 만들면서, bp를 찍어보면 확인 할 수 있다
  - 아래는 그것을 테스트 하는 코드

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="300" Width="300">
    <Window.Resources>
        <ResourceDictionary>
            <ResourceDictionary.MergedDictionaries>
                <ResourceDictionary Source="/Dictionary1.xaml"/>
            </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
    </Window.Resources>
    
    <Window.DataContext>
        <local:MainWindowViewModel/>
    </Window.DataContext>

    <StackPanel>
        <Button Width="100" Height="30" Content="DisplayChange" Command="{Binding OneClick}"/>
        <ContentControl Content="{Binding Display}"/>
    </StackPanel>
</Window>
~~~

<br/>

#MainWindowViewModel.cs
~~~c#
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Windows.Input;

namespace WpfApp1
{
    public class MainWindowViewModel : INotifyPropertyChanged
    {
        public MainWindowViewModel()
        {
            _userControl1ViewModel = new UserControl1ViewModel();
            _userControl2ViewModel = new UserControl2ViewModel();

            Display = _userControl1ViewModel;
        }

        private UserControl1ViewModel _userControl1ViewModel;
        private UserControl2ViewModel _userControl2ViewModel;

        private object _display;
        public object Display
        {
            get { return _display; }
            set
            {
                _display = value;
                Notify("Display");
            }
        }

        private bool _bFlag = true;

        private Command _OneClick;
        public ICommand OneClick
        {
            get { return _OneClick = new Command(OneClickEvent); }
        }

        private void OneClickEvent(object obj)
        {
            _bFlag = !(_bFlag);

            if (_bFlag == true)
            {
                Display = _userControl1ViewModel;
            }
            else
            {
                Display = _userControl2ViewModel;
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
}
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
    <StackPanel>
        <Button Width="100" Height="30" Content="UserControl1"/>
        <TextBlock Text="{Binding Name}"/>
        <TextBlock Text="{Binding Age}"/>
    </StackPanel>
</UserControl>
~~~

<br/>

#UserControl1ViewModel.cs
~~~c#
namespace WpfApp1
{
    public class UserControl1ViewModel
    {
        private string _name = "John Doe";
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        private int _age = 42;
        public int Age
        {
            get { return _age; }
            set { _age = value; }
        }
    }
}
~~~

<br/>

#UserControl2.xaml
~~~c#
<UserControl x:Class="WpfApp1.UserControl2"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:WpfApp1"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <StackPanel>
        <Button Width="100" Height="30" Content="UserControl1"/>
        <TextBlock Text="{Binding Name}"/>
        <TextBlock Text="{Binding Age}"/>
    </StackPanel>
</UserControl>
~~~

<br/>

#UserControl2ViewModel.cs
~~~c#
namespace WpfApp1
{
    public class UserControl2ViewModel
    {
        private string _name = "zxczxc";
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        private int _age = 11;
        public int Age
        {
            get { return _age; }
            set { _age = value; }
        }
    }
}
~~~

<br/>

#Dictionary1.xaml
~~~c#
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                    xmlns:local="clr-namespace:WpfApp1">
    <DataTemplate DataType="{x:Type local:UserControl1ViewModel}">
        <local:UserControl1/>
    </DataTemplate>

    <DataTemplate DataType="{x:Type local:UserControl2ViewModel}">
        <local:UserControl2/>
    </DataTemplate>
</ResourceDictionary>
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

###### [MVVM패턴](#mvvm패턴)
###### [Top](#top)

<br/>
<br/>

# ViewCache를 만들어 캐시하기
  - ViewCache만들어서, UserControl을 다시 만들지 않도록 할 수 있다
  - 이 구조는 일종의 컨테이너 역할을 하는 빈 UserControl을 ViewCache 클래스가 기본으로 반환하기 때문에(상속에 의한 반환) 사실 View 를 전혀 재생성 하지 않는 구조라고는 볼 수 없다.(빈 UserControl은 매번 생성하기 때문에.) 다만 실질적인 View 의 재생성을 막는 차원에서 추가적인 View 생성을 최소화 할 수 있다
  - 하나의 컨트롤을 만들때 사용하면 효율적인 방법이 된다
  - Window가 Close 될 때 GC의 수집 대상이 될 것이므로, 이 때 하위 View 를 보이는 방식으로 ViewCache를 사용하게 되면 내부 View 는 재사용할 수 있고, 컨테이너인 빈 UserControl은 Window가 수집될 때, 함께 제거될 것이므로 큰 문제가 되지 않는다. (ViewCache의 빈 UserControl이 Unload 될 때 Content = null 처리를 한다)

<br/>

#Dictionary1.xaml
~~~c#
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                    xmlns:local="clr-namespace:WpfApp1">
    <DataTemplate DataType="{x:Type local:UserControl1ViewModel}">
        <local:ViewCache aaaaa="{x:Type local:UserControl1}"/>
    </DataTemplate>

    <DataTemplate DataType="{x:Type local:UserControl2ViewModel}">
        <local:ViewCache aaaaa="{x:Type local:UserControl2}"/>
    </DataTemplate>
</ResourceDictionary>
~~~

<br/>

#ViewCache.cs
~~~c#
using System;
using System.Windows;
using System.Windows.Controls;

namespace WpfApp1
{
    public class ViewCache : UserControl
    {
        public ViewCache()
        {
            Unloaded += ViewCache_Unloaded;
        }

        void ViewCache_Unloaded(object sender, RoutedEventArgs e)
        {
            Unloaded -= ViewCache_Unloaded;
            Content = null;
        }

        private Type _contentType;
        public Type aaaaa
        {
            get { return _contentType; }
            set
            {
                if (_contentType == value)
                {
                    return;
                }

                _contentType = value;
                Content = ViewFactory.GetView(_contentType);
            }
        }
    }
}
~~~

<br/>

#ViewFactory.cs
~~~c#
using System;
using System.Collections.Generic;
using System.Windows.Controls;

namespace WpfApp1
{
    public static class ViewFactory
    {
        private static Dictionary<Type, UserControl> _viewCache = new Dictionary<Type, UserControl>();

        public static UserControl GetView(Type type)
        {
            if (_viewCache.ContainsKey(type) == false)
            {
                var userControl = Activator.CreateInstance(type) as UserControl;
                if (userControl == null)
                {
                    throw new InvalidOperationException("Couldn't create user control" + type);
                }

                _viewCache.Add(type, userControl);
            }
            return _viewCache[type];
        }
    }
}
~~~

###### [MVVM패턴](#mvvm패턴)
###### [Top](#top)

<br/>
<br/>

# ItemsControl 형태로 만들어 캐시하기
  - <ContentControl Content="{Binding}"/>에 의해 ItemsSource 의 요소들이 그려질 때 ContentControl의 Content가 대신 그려지게 되며, 이 때 미리 선언해 놓은 DataTemplate이 다시 채워서 그려지게 된다
  - 여러 화면을 보일때 유용한 방법이 된다
  - 하나의 화면만을 출력하게 될 경우에는, Item만 들어가야할 자리에 Collection을 사용하는 꼴이라 불필요한 코드가 많이 들어갈 수밖에 없으며, Window가 GC의 수집대상이 될 때 ItemsControl로 함께 수집대상이 되므로 GC의 효율을 떨어뜨리게 된다.

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="300" Width="300">
    <Window.Resources>
        <ResourceDictionary>
            <ResourceDictionary.MergedDictionaries>
                <ResourceDictionary Source="/Dictionary1.xaml"/>
            </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
    </Window.Resources>
    
    <Window.DataContext>
        <local:MainWindowViewModel/>
    </Window.DataContext>

    <StackPanel>
        <Button Width="100" Height="30" Content="DisplayChange" Command="{Binding OneClick}"/>
        <ItemsControl Grid.Row="1" ItemsSource="{Binding ViewModels}">
            <ItemsControl.ItemsPanel>
                <ItemsPanelTemplate>
                    <Grid/>
                </ItemsPanelTemplate>
            </ItemsControl.ItemsPanel>

            <ItemsControl.ItemContainerStyle>
                <Style>
                    <Style.Triggers>
                        <DataTrigger Binding="{Binding IsSelected}" Value="False">
                            <Setter Property="FrameworkElement.Visibility" Value="Collapsed"/>
                        </DataTrigger>
                    </Style.Triggers>
                </Style>
            </ItemsControl.ItemContainerStyle>
            
            <ItemsControl.ItemTemplate>
                <DataTemplate>
                    <ContentControl Content="{Binding}"/>
                </DataTemplate>
            </ItemsControl.ItemTemplate>
        </ItemsControl>
    </StackPanel>
</Window>
~~~

<br/>

#MainWindowViewModel.cs
~~~c#
using System.Collections.ObjectModel;
using System.Windows.Input;

namespace WpfApp1
{
    public class MainWindowViewModel
    {
        public MainWindowViewModel()
        {
            ViewModels.Add(new UserControl1ViewModel());
            ViewModels.Add(new UserControl2ViewModel());

            ViewModels[0].IsSelected = true;
        }

        private object _display;
        public object Display
        {
            get { return _display; }
            set
            {
                _display = value;
            }
        }

        private bool _bFlag = false;

        private Command _OneClick;
        public ICommand OneClick
        {
            get { return _OneClick = new Command(OneClickEvent); }
        }

        private void OneClickEvent(object obj)
        {
            foreach (var viewModel in ViewModels)
            {
                viewModel.IsSelected = false;
            }

            if (_bFlag == true)
            {
                ViewModels[0].IsSelected = true;
            }
            else
            {
                ViewModels[1].IsSelected = true;
            }

            _bFlag = !(_bFlag);
        }

        private ObservableCollection<BaseViewModel> _viewModels = new ObservableCollection<BaseViewModel>();

        public ObservableCollection<BaseViewModel> ViewModels
        {
            get { return _viewModels; }
        }
    }
}
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
    <StackPanel>
        <Button Width="100" Height="30" Content="UserControl1"/>
        <TextBlock Text="{Binding Name}"/>
        <TextBlock Text="{Binding Age}"/>
    </StackPanel>
</UserControl>
~~~

<br/>

#UserControl1ViewModel.cs
~~~c#
namespace WpfApp1
{
    public class UserControl1ViewModel : BaseViewModel
    {
        private string _name = "John Doe";
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        private int _age = 42;
        public int Age
        {
            get { return _age; }
            set { _age = value; }
        }
    }
}
~~~

<br/>

#UserControl2.xaml
~~~c#
<UserControl x:Class="WpfApp1.UserControl2"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:WpfApp1"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <StackPanel>
        <Button Width="100" Height="30" Content="UserControl1"/>
        <TextBlock Text="{Binding Name}"/>
        <TextBlock Text="{Binding Age}"/>
    </StackPanel>
</UserControl>
~~~

<br/>

#UserControl2ViewModel.cs
~~~c#
namespace WpfApp1
{
    public class UserControl2ViewModel : BaseViewModel
    {
        private string _name = "zxczxc";
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        private int _age = 11;
        public int Age
        {
            get { return _age; }
            set { _age = value; }
        }
    }
}
~~~

<br/>

#Dictionary1.xaml
~~~c#
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                    xmlns:local="clr-namespace:WpfApp1">
    <DataTemplate DataType="{x:Type local:UserControl1ViewModel}">
        <local:UserControl1/>
    </DataTemplate>

    <DataTemplate DataType="{x:Type local:UserControl2ViewModel}">
        <local:UserControl2/>
    </DataTemplate>
</ResourceDictionary>
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

#BaseViewModel.cs
~~~c#
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace WpfApp1
{
    public class BaseViewModel : INotifyPropertyChanged
    {
        private bool _isSelected;
        public bool IsSelected
        {
            get { return _isSelected; }
            set
            {
                _isSelected = value;
                Notify("IsSelected");
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
}
~~~

###### [MVVM패턴](#mvvm패턴)
###### [Top](#top)

<br/>
<br/>

# View의 Event를 ViewModel에서 핸들링하기(InvokeCommandAction)
  - InvokeCommandAction 사용한 방법소개
  - CommandParameter 속성을 넣으면 이벤트를 발생시켰을때 특정한 데이터 값을 보내줄 수 있다
  - PassEventArgsToCommand="True" 을 사용하면, MouseWheel같은 이벤트시 Delta값도 받아 올 수 있다
  - 하지만 현재는 CommandParameter 와 PassEventArgsToCommand을 동시에 사용하면 CommandParameter 의 값만 들어오게 된다.. 따라서 아래의 코드는 따로 따로 이벤트가 2번 전달 되고 있다

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/0d71366a-d76b-4837-bdc2-a38f74ec1a44)

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp2.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:i="http://schemas.microsoft.com/xaml/behaviors"
        xmlns:local="clr-namespace:WpfApp2"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <Window.Resources>
        <ResourceDictionary>
            <ResourceDictionary.MergedDictionaries>
                <ResourceDictionary Source="/Dictionary1.xaml"/>
            </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
    </Window.Resources>

    <Window.DataContext>
        <local:MainWindowViewModel/>
    </Window.DataContext>

    <StackPanel>
        <ContentControl Content="{Binding Display}"/>
    </StackPanel>
</Window>
~~~

<br/>

#MainWindowViewModel.cs
~~~c#
using System.Windows.Input;
using System.Windows;

namespace WpfApp2
{
    public class MainWindowViewModel
    {
        public MainWindowViewModel()
        {
            UserControl1ViewModel = new UserControl1ViewModel();
            Display = UserControl1ViewModel;
        }

        private UserControl1ViewModel _userControl1ViewModel;
        public UserControl1ViewModel UserControl1ViewModel
        {
            get { return _userControl1ViewModel; }
            set
            {
                _userControl1ViewModel = value;
            }
        }

        private object _display;
        public object Display
        {
            get { return _display; }
            set
            {
                _display = value;
            }
        }

        private Command _oneEvent;
        public ICommand OneEvent
        {
            get { return _oneEvent = new Command(OneClickEvent); }
        }

        private void OneClickEvent(object obj)
        {
            MessageBox.Show("One Event");
        }
    }
}
~~~

<br/>

#UserControl1.xaml
~~~c#
<UserControl x:Class="WpfApp2.UserControl1"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:i="http://schemas.microsoft.com/xaml/behaviors"
             xmlns:local="clr-namespace:WpfApp2"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <Grid>
        <StackPanel>
            <ItemsControl ItemsSource="{Binding Custs}">

                <ItemsControl.Template>
                    <ControlTemplate>
                        <StackPanel>
                            <ItemsPresenter/>
                        </StackPanel>
                    </ControlTemplate>
                </ItemsControl.Template>

                <ItemsControl.ItemsPanel>
                    <ItemsPanelTemplate>
                        <StackPanel/>
                    </ItemsPanelTemplate>
                </ItemsControl.ItemsPanel>

                <ItemsControl.ItemTemplate>
                    <DataTemplate>
                        <Button Height="100" Width="100" HorizontalAlignment="Center" Name="xButton">
                            <i:Interaction.Triggers>
                                <i:EventTrigger EventName="MouseWheel" SourceObject="{Binding ElementName=xButton}">
                                    <i:InvokeCommandAction Command="{Binding RelativeSource={RelativeSource FindAncestor, AncestorType={x:Type Window}, AncestorLevel=1}, Path=DataContext.OneEvent}"
                 CommandParameter="{Binding}"/>
                                </i:EventTrigger>
                                
                                <i:EventTrigger EventName="MouseWheel" SourceObject="{Binding ElementName=xButton}">
                                    <i:InvokeCommandAction Command="{Binding RelativeSource={RelativeSource FindAncestor, AncestorType={x:Type Window}, AncestorLevel=1}, Path=DataContext.OneEvent}"                  PassEventArgsToCommand="True"/>
                                </i:EventTrigger>
                                
                            </i:Interaction.Triggers>
                            <StackPanel>
                                <TextBox Text="{Binding Name}"/>
                                <TextBox Text="{Binding Age}"/>
                            </StackPanel>
                        </Button>
                    </DataTemplate>
                </ItemsControl.ItemTemplate>
            </ItemsControl>
        </StackPanel>
    </Grid>

</UserControl>
~~~

<br/>

#UserControl1ViewModel.cs
~~~c#
using System.Collections.ObjectModel;

namespace WpfApp2
{
    public class UserControl1ViewModel
    {
        public UserControl1ViewModel()
        {
            Custs.Add(new Cust() { Name = "John Doe", Age = 42 });
            Custs.Add(new Cust() { Name = "Jane Doe", Age = 39 });
            Custs.Add(new Cust() { Name = "Sammy Doe", Age = 13 });
        }

        private ObservableCollection<Cust> _custs = new ObservableCollection<Cust>();
        public ObservableCollection<Cust> Custs
        {
            get { return _custs; }
            set { _custs = value; }
        }
    }
}
~~~

<br/>

#Dictionary1.xaml
~~~c#
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                    xmlns:local="clr-namespace:WpfApp2">
    <DataTemplate DataType="{x:Type local:UserControl1ViewModel}">
        <local:UserControl1/>
    </DataTemplate>

</ResourceDictionary>
~~~

<br/>

#Cust.cs
~~~c#
namespace WpfApp2
{
    public class Cust
    {
        private string _name;
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        private int _age;
        public int Age
        {
            get { return _age; }
            set
            {
                if (value < 0)
                    _age = 0;
                else
                    _age = value;
            }
        }
    }
}
~~~

<br/>

#Command.cs
~~~c#
using System;
using System.Windows.Input;

namespace WpfApp2
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

###### [MVVM패턴](#mvvm패턴)
###### [Top](#top)

<br/>
<br/>

# View의 Event를 ViewModel에서 핸들링하기(CallMethodAction)
  - CallMethodAction사용한 방법소개
  - MouseWheel같은 이벤트시 Delta값을 받아 올 수 있다
  - TargetObject으로 해당하는 ViewModel을 지정해주고, MethodName으로 함수이름을 지정한다.
  - OnMouseWheel함수에 인자 없는 함수로 만들어 호출할 수도 있다.
  - 하지만 인자가 없거나 시그니처를 맞춘 형태가 아닌 다른 형태의 메서드를 정의하면 디자인 타임이아니라 런타임에서 Event발생시 예외가 떨어진다
  - object sender를 통해서 var button = sender as Button를 이용해서 UI객체를 얻어 올 수 있으니 사용상 주의 해야 한다

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/dba04233-75c6-4d75-b040-7d3bcb34c058)

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp2.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:i="http://schemas.microsoft.com/xaml/behaviors"
        xmlns:local="clr-namespace:WpfApp2"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <Window.Resources>
        <ResourceDictionary>
            <ResourceDictionary.MergedDictionaries>
                <ResourceDictionary Source="/Dictionary1.xaml"/>
            </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
    </Window.Resources>

    <Window.DataContext>
        <local:MainWindowViewModel/>
    </Window.DataContext>

    <StackPanel>
        <ContentControl Content="{Binding Display}"/>
        <Button Width="200" Height="50" Content="버튼">
            <i:Interaction.Triggers>
                <i:EventTrigger EventName="MouseWheel" >
                    <i:CallMethodAction MethodName="OnMouseWheel" TargetObject="{Binding}"/>
                </i:EventTrigger>
            </i:Interaction.Triggers>
        </Button>
    </StackPanel>
</Window>
~~~

<br/>

#MainWindowViewModel.cs
~~~c#
using System.Windows.Input;
using System.Windows;
using System.Diagnostics;
using System.Runtime.InteropServices;

namespace WpfApp2
{
    public class MainWindowViewModel
    {
        public MainWindowViewModel()
        {
            UserControl1ViewModel = new UserControl1ViewModel();
            Display = UserControl1ViewModel;
        }

        private UserControl1ViewModel _userControl1ViewModel;
        public UserControl1ViewModel UserControl1ViewModel
        {
            get { return _userControl1ViewModel; }
            set
            {
                _userControl1ViewModel = value;
            }
        }

        private object _display;
        public object Display
        {
            get { return _display; }
            set
            {
                _display = value;
            }
        }

        public void OnMouseWheel(object sender, MouseWheelEventArgs e)
        {
            Debug.WriteLine("Mouse wheel!!!!!!!!!!!! delta : " + e.Delta);
        }
    }
}
~~~

<br/>

#UserControl1.xaml
~~~c#
<UserControl x:Class="WpfApp2.UserControl1"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:i="http://schemas.microsoft.com/xaml/behaviors"
             xmlns:local="clr-namespace:WpfApp2"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <Grid>
        <StackPanel>
            <ItemsControl ItemsSource="{Binding Custs}">
                <ItemsControl.Template>
                    <ControlTemplate>
                        <StackPanel>
                            <ItemsPresenter/>
                        </StackPanel>
                    </ControlTemplate>
                </ItemsControl.Template>

                <ItemsControl.ItemsPanel>
                    <ItemsPanelTemplate>
                        <StackPanel/>
                    </ItemsPanelTemplate>
                </ItemsControl.ItemsPanel>

                <ItemsControl.ItemTemplate>
                    <DataTemplate>
                        <Button Height="100" Width="100" HorizontalAlignment="Center" Name="xButton">
                            <i:Interaction.Triggers>
                                <i:EventTrigger EventName="MouseWheel" >
                                    <i:CallMethodAction MethodName="OnMouseWheel" TargetObject="{Binding DataContext, RelativeSource={RelativeSource FindAncestor, AncestorType={x:Type local:MainWindow}}}"/>
                                </i:EventTrigger>
                            </i:Interaction.Triggers>
                            <StackPanel>
                                <TextBox Text="{Binding Name}"/>
                                <TextBox Text="{Binding Age}"/>
                            </StackPanel>
                        </Button>
                    </DataTemplate>
                </ItemsControl.ItemTemplate>
            </ItemsControl>
        </StackPanel>
    </Grid>

</UserControl>
~~~

<br/>

#UserControl1ViewModel.cs
~~~c#
using System.Collections.ObjectModel;

namespace WpfApp2
{
    public class UserControl1ViewModel
    {
        public UserControl1ViewModel()
        {
            Custs.Add(new Cust() { Name = "John Doe", Age = 42 });
            Custs.Add(new Cust() { Name = "Jane Doe", Age = 39 });
            Custs.Add(new Cust() { Name = "Sammy Doe", Age = 13 });
        }

        private ObservableCollection<Cust> _custs = new ObservableCollection<Cust>();
        public ObservableCollection<Cust> Custs
        {
            get { return _custs; }
            set { _custs = value; }
        }
    }
}
~~~

<br/>

#Dictionary1.xaml
~~~c#
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                    xmlns:local="clr-namespace:WpfApp2">
    <DataTemplate DataType="{x:Type local:UserControl1ViewModel}">
        <local:UserControl1/>
    </DataTemplate>

</ResourceDictionary>
~~~

<br/>

#Cust.cs
~~~c#
namespace WpfApp2
{
    public class Cust
    {
        private string _name;
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        private int _age;
        public int Age
        {
            get { return _age; }
            set
            {
                if (value < 0)
                    _age = 0;
                else
                    _age = value;
            }
        }
    }
}
~~~

###### [MVVM패턴](#mvvm패턴)
###### [Top](#top)

<br/>
<br/>

# View의 Event를 ViewModel에서 핸들링하기(AttachedProperty)
  - AttachedProperty를 활용함

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp2.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp2"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <Window.Resources>
        <ResourceDictionary>
            <ResourceDictionary.MergedDictionaries>
                <ResourceDictionary Source="/Dictionary1.xaml"/>
            </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>
    </Window.Resources>

    <Window.DataContext>
        <local:MainWindowViewModel/>
    </Window.DataContext>

    <StackPanel>
        <ContentControl Content="{Binding Display}"/>
        <Button Width="100" Height="30" Content="버튼" local:CommandBehavior.Event="MouseWheel"
  local:CommandBehavior.Command="{Binding OneEvent}"/>
        <Button Width="100" Height="30" Content="버튼" local:CommandBehavior.Event="Click"
local:CommandBehavior.Command="{Binding OneEvent}"/>
    </StackPanel>
</Window>
~~~

<br/>

#MainWindowViewModel.cs
~~~c#
using System.Windows.Input;
using System.Windows;
using System.Diagnostics;
using System.Runtime.InteropServices;

namespace WpfApp2
{
    public class MainWindowViewModel
    {
        public MainWindowViewModel()
        {
            UserControl1ViewModel = new UserControl1ViewModel();
            Display = UserControl1ViewModel;
        }

        private UserControl1ViewModel _userControl1ViewModel;
        public UserControl1ViewModel UserControl1ViewModel
        {
            get { return _userControl1ViewModel; }
            set
            {
                _userControl1ViewModel = value;
            }
        }

        private object _display;
        public object Display
        {
            get { return _display; }
            set
            {
                _display = value;
            }
        }

        private Command _oneEvent;
        public ICommand OneEvent
        {
            get { return _oneEvent = new Command(OneEventFuntion); }
        }

        private void OneEventFuntion(object obj)
        {
            var arg = obj as MouseWheelEventArgs;
            if (arg == null)
            {
                return;
            }
            Debug.WriteLine("delta : " + arg.Delta);
        }
    }
}
~~~

<br/>

#UserControl1.xaml
~~~c#
<UserControl x:Class="WpfApp2.UserControl1"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:i="http://schemas.microsoft.com/xaml/behaviors"
             xmlns:local="clr-namespace:WpfApp2"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <Grid>
        <StackPanel>
            <ItemsControl ItemsSource="{Binding Custs}">
                <ItemsControl.Template>
                    <ControlTemplate>
                        <StackPanel>
                            <ItemsPresenter/>
                        </StackPanel>
                    </ControlTemplate>
                </ItemsControl.Template>

                <ItemsControl.ItemsPanel>
                    <ItemsPanelTemplate>
                        <StackPanel/>
                    </ItemsPanelTemplate>
                </ItemsControl.ItemsPanel>

                <ItemsControl.ItemTemplate>
                    <DataTemplate>
                        <Button Height="100" Width="100" HorizontalAlignment="Center" Name="xButton"
                                local:CommandBehavior.Event="MouseWheel"
                                local:CommandBehavior.Command="{Binding RelativeSource={RelativeSource FindAncestor, AncestorType={x:Type Window}, AncestorLevel=1}, Path=DataContext.OneEvent}">
                            <StackPanel>
                                <TextBox Text="{Binding Name}"/>
                                <TextBox Text="{Binding Age}"/>
                            </StackPanel>
                        </Button>
                    </DataTemplate>
                </ItemsControl.ItemTemplate>
            </ItemsControl>
        </StackPanel>
    </Grid>

</UserControl>
~~~

<br/>

#UserControl1ViewModel.cs
~~~c#
using System.Collections.ObjectModel;

namespace WpfApp2
{
    public class UserControl1ViewModel
    {
        public UserControl1ViewModel()
        {
            Custs.Add(new Cust() { Name = "John Doe", Age = 42 });
            Custs.Add(new Cust() { Name = "Jane Doe", Age = 39 });
            Custs.Add(new Cust() { Name = "Sammy Doe", Age = 13 });
        }

        private ObservableCollection<Cust> _custs = new ObservableCollection<Cust>();
        public ObservableCollection<Cust> Custs
        {
            get { return _custs; }
            set { _custs = value; }
        }
    }
}
~~~

<br/>

#Dictionary1.xaml
~~~c#
<ResourceDictionary xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
                    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                    xmlns:local="clr-namespace:WpfApp2">
    <DataTemplate DataType="{x:Type local:UserControl1ViewModel}">
        <local:UserControl1/>
    </DataTemplate>

</ResourceDictionary>
~~~

<br/>

#Cust.cs
~~~c#
namespace WpfApp2
{
    public class Cust
    {
        private string _name;
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        private int _age;
        public int Age
        {
            get { return _age; }
            set
            {
                if (value < 0)
                    _age = 0;
                else
                    _age = value;
            }
        }
    }
}
~~~

<br/>

#Command.cs
~~~c#
using System;
using System.Windows.Input;

namespace WpfApp2
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

#CommandBehavior.cs
~~~c#
using System;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Windows.Input;
using System.Windows;

namespace WpfApp2
{
    public class CommandBehavior
    {
        private class EventRaiseAttribute : Attribute
        {

        }

        #region Command 

        public static readonly DependencyProperty CommandProperty =
        DependencyProperty.RegisterAttached(
        "Command",
        typeof(ICommand),
        typeof(CommandBehavior),
        new PropertyMetadata(OnCommandChanged));

        public static ICommand GetCommand(DependencyObject d)
        {
            return d.GetValue(CommandProperty) as ICommand;
        }

        public static void SetCommand(DependencyObject d, ICommand value)
        {
            d.SetValue(CommandProperty, value);
        }

        private static void OnCommandChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
        {

        }

        #endregion

        #region Event 

        public static readonly DependencyProperty EventProperty =
        DependencyProperty.RegisterAttached(
        "Event",
        typeof(string),
        typeof(CommandBehavior),
        new PropertyMetadata(OnEventChanged));

        private static void OnEventChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
        {
            BindEvent(d, e.NewValue as string);
        }

        public static string GetEvent(DependencyObject d)
        {
            return d.GetValue(EventProperty) as string;
        }

        public static void SetEvent(DependencyObject d, string value)
        {
            d.SetValue(EventProperty, value);
        }

        private static void BindEvent(DependencyObject owner, string eventName)
        {
            if (string.IsNullOrWhiteSpace(eventName))
            {
                return;
            }

            var eventInfo = owner.GetType().GetEvent(eventName, BindingFlags.Public | BindingFlags.Instance);
            if (eventInfo == null)
            {
                throw new InvalidOperationException(String.Format("Could not resolve event name {0}", eventName));
            }

            var types = typeof(CommandBehavior).GetMethods(BindingFlags.NonPublic | BindingFlags.Instance);
            MethodInfo method = null;
            foreach (var type in types)
            {
                var attributes = type.GetCustomAttributes(true);
                if (attributes.OfType<EventRaiseAttribute>().Any())
                {
                    method = type;
                    break;
                }
            }

            if (method == null)
            {
                Debug.Assert(false, string.Format("invalid method type. type = {0}", eventName));
                return;
            }

            var eventHandler = Delegate.CreateDelegate(eventInfo.EventHandlerType, null, method);

            owner.SetValue(EventHandlerProperty, eventHandler);

            //Register the handler to the Event 
            eventInfo.AddEventHandler(owner, eventHandler);
        }

        [EventRaise]
        private void OnEventRaised(object sender, EventArgs e)
        {
            var dependencyObject = sender as DependencyObject;
            if (dependencyObject == null)
            {
                return;
            }

            var command = dependencyObject.GetValue(CommandProperty) as ICommand;
            if (command == null)
            {
                return;
            }

            if (command.CanExecute(null) == false)
            {
                return;
            }

            command.Execute(e);
        }

        #endregion

        #region EventHandler 

        public static readonly DependencyProperty EventHandlerProperty =
        DependencyProperty.RegisterAttached(
        "EventHandler",
        typeof(Delegate),
        typeof(CommandBehavior));

        public static Delegate GetEventHandler(DependencyObject d)
        {
            return d.GetValue(EventHandlerProperty) as Delegate;
        }

        public static void SetEventHandler(DependencyObject d, Delegate value)
        {
            d.SetValue(EventHandlerProperty, value);
        }

        #endregion
    }
}
~~~

###### [MVVM패턴](#mvvm패턴)
###### [Top](#top)

<br/>
<br/>

# View의 사용자 AttachedProperty 추가하기(+binding불가한 것)
  - 기존에 없는 사용자 정의 속성을 추가해서 사용하는 것이 목표이다
  - 이값을 ViewModel에서 어떻게 가져올지는 찾지 못했다..일단 UI에서만 사용하도록 한다
  - 바인딩으로 사용할 경우에는 프로퍼티 "{Binding (local:ExPropertys.BindablePassword)” 이런식으로 사용한다

<br/>

  - 윈도우 종료하기

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="300" Width="300"
        local:WindowCloseBehavior.Close="{Binding CloseWindowFlage}">
    <Window.DataContext>
        <local:MainWindowViewModel/>
    </Window.DataContext>
    
    <Grid>
        <Button Width="100" Height="30" Content="종료" Command="{Binding OneClick}"/>
    </Grid>
</Window>
~~~

<br/>

#MainWindowViewModel.cs
~~~c#
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Windows.Input;

namespace WpfApp1
{
    public class MainWindowViewModel : INotifyPropertyChanged
    {
        private bool _closeWindowFlage;
        public bool CloseWindowFlage
        {
            get { return _closeWindowFlage; }
            set
            {
                _closeWindowFlage = value;
                Notify("CloseWindowFlage");
            }
        }

        private Command m_OneClick;
        public ICommand OneClick
        {
            get { return m_OneClick = new Command(OneClickEvent); }
        }

        private void OneClickEvent(object obj)
        {
            CloseWindowFlage = true;
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
}
~~~

<br/>

#WindowCloseBehavior.cs
~~~c#
using System.Windows;

namespace WpfApp1
{
    public static class WindowCloseBehavior
    {
        public static readonly DependencyProperty CloseProperty =
            DependencyProperty.RegisterAttached(
            "Close",
            typeof(bool),
            typeof(WindowCloseBehavior),
            new UIPropertyMetadata(false, OnClose));

        public static void SetClose(DependencyObject target, bool value)
        {
            target.SetValue(CloseProperty, value);
        }

        private static void OnClose(
            DependencyObject sender,
            DependencyPropertyChangedEventArgs e)
        {
            if (e.NewValue is bool && (bool)e.NewValue)
            {
                var window = GetWindow(sender);
                if (window != null)
                {
                    window.Close();
                }
            }
        }

        private static Window GetWindow(DependencyObject sender)
        {
            Window window = null;

            if (sender is Window)
            {
                window = sender as Window;
            }

            return window ?? Window.GetWindow(sender);
        }
    }
}
~~~

<br/>

#Command.cs
~~~c#
using System;
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

<br/>

  - ListBox 입력제한

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="300" Width="300">
    <Grid>
        <ListBox SelectionMode="Multiple"
                 local:SimpleHelper.MaxSelectionCount="5">
            <ListBoxItem>1</ListBoxItem>
            <ListBoxItem>2</ListBoxItem>
            <ListBoxItem>3</ListBoxItem>
            <ListBoxItem>4</ListBoxItem>
            <ListBoxItem>5</ListBoxItem>
            <ListBoxItem>6</ListBoxItem>
            <ListBoxItem>7</ListBoxItem>
        </ListBox>
    </Grid>
</Window>
~~~

<br/>

#SimpleHelper.cs
~~~c#
using System.Windows;
using System.Windows.Controls;

namespace WpfApp1
{
    public static class SimpleHelper
    {
        public static int GetMaxSelectionCount(DependencyObject obj)
        {
            return (int)obj.GetValue(MaxSelectionCountProperty);
        }

        public static void SetMaxSelectionCount(DependencyObject obj, int value)
        {
            obj.SetValue(MaxSelectionCountProperty, value);
        }

        public static readonly DependencyProperty MaxSelectionCountProperty =
        DependencyProperty.RegisterAttached(
        "MaxSelectionCount",
        typeof(int),
        typeof(SimpleHelper),
        new UIPropertyMetadata(int.MaxValue, OnMaxSelectionCountChanged));

        private static void OnMaxSelectionCountChanged(DependencyObject sender, DependencyPropertyChangedEventArgs e)
        {
            ListBox MultiSelector = sender as ListBox;
            if ((int)e.OldValue == int.MaxValue) // 이벤트 할당을 딱 한번만 하기 위해서 사용
            {
                // 여기서 이벤트를 할당함 //람다 표현식
                MultiSelector.SelectionChanged += (ss, ee) =>
                {
                    CoerceSelectionCount(MultiSelector);
                };
            }

            CoerceSelectionCount(MultiSelector);
        }

        private static void CoerceSelectionCount(ListBox multiSelector)
        {
            int MaxSelectionCount = GetMaxSelectionCount(multiSelector);
            if (multiSelector.SelectedItems.Count > MaxSelectionCount)
            {
                for (int i = multiSelector.SelectedItems.Count; i > MaxSelectionCount - 1; i--)
                {
                    if (multiSelector.SelectedItems.Count <= i)
                        continue;

                    multiSelector.SelectedItems.Remove(multiSelector.SelectedItems[i]);
                }
            }
        }
    }
}
~~~

<br/>

  - 비밀번호 박스 바인딩

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="300" Width="300">
    <Grid>
        <StackPanel>
            <PasswordBox x:Name="passwordBox"
                         local:ExPropertys.IsPasswordBindable="True"/>
            <TextBlock Text="Password you entered"/>

            <!--xaml에 RegisterAttached 바인딩 하기-->
            <TextBlock Text="{Binding (local:ExPropertys.BindablePassword), ElementName=passwordBox}"/>
        </StackPanel>
    </Grid>
</Window>
~~~

<br/>

#ExPropertys.cs
~~~c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;

namespace WpfApp1
{
    public class ExPropertys
    {
        public static string GetBindablePassword(DependencyObject obj)
        {
            return (string)obj.GetValue(BindablePasswordProperty);
        }
        public static void SetBindablePassword(DependencyObject obj, string value)
        {
            obj.SetValue(BindablePasswordProperty, value);
        }

        public static readonly DependencyProperty BindablePasswordProperty = 
            DependencyProperty.RegisterAttached("BindablePassword", typeof(string), typeof(ExPropertys), new PropertyMetadata(null));

        public static bool GetIsPasswordBindable(DependencyObject obj)
        {
            return (bool)obj.GetValue(IsPasswordBindableProperty);
        }
        public static void SetIsPasswordBindable(DependencyObject obj, bool value)
        {
            obj.SetValue(IsPasswordBindableProperty, value);
        }

        public static readonly DependencyProperty IsPasswordBindableProperty = 
            DependencyProperty.RegisterAttached("IsPasswordBindable", typeof(bool), typeof(ExPropertys), new PropertyMetadata(false, IsPasswordBindableChanged));

        private static void IsPasswordBindableChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
        {
            PasswordBox passwordBox = d as PasswordBox;
            if (passwordBox == null)
                return;
            if ((bool) e.NewValue)
            {
                passwordBox.PasswordChanged += PasswordBox_PasswordChanged;
            }
            else
            {
                passwordBox.PasswordChanged -= PasswordBox_PasswordChanged;
            }
        }        
        private static void PasswordBox_PasswordChanged(object sender, RoutedEventArgs e)
        {
            var passwordBox = (PasswordBox)sender;
            SetBindablePassword(passwordBox, passwordBox.Password);
        }
    }
}
~~~

###### [MVVM패턴](#mvvm패턴)
###### [Top](#top)

<br/>
<br/>

# Behavior을 활용한 DependencyProperty추가하기 (+binding불가한 것)
  - 개인적으로 이 방법이 더 편리한 방법인것 같다…
  - ViewModel에서 컨트롤 할 수 있다
  - binding을 하기 위해서는 DP여야 함으로, passwordBox같은 경우, 키보드 입력을 받는 값을 나타내는 Password property는 DP가 아니기때문에, 일반적으로 binding을 할 수 없을때, dp를 만들어 낼때도 사용 된다.
  - 의존속성(DependencyProperty)은 ViewModel에서는 사용할 수 없으며 해당하는 Class의 codeBehind 사용가능하다. 그렇기 때문에 아래와 같은 경우에서는 class하나를 전체 적으로 사용한다


![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/05f269d2-2f71-498a-becc-475991793639)

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:i="http://schemas.microsoft.com/xaml/behaviors"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="300" Width="300">
    <Window.DataContext>
        <local:MainWindowViewModel/>
    </Window.DataContext>
    
    <Grid>
        <StackPanel>
            <PasswordBox Height="30">
                <i:Interaction.Behaviors>
                    <local:PasswordBoxBehavior Password="{Binding PasswordStr, UpdateSourceTrigger=PropertyChanged}"/>
                </i:Interaction.Behaviors>
            </PasswordBox>
            <TextBlock Text="{Binding PasswordStr}"/>
        </StackPanel>
    </Grid>
</Window>
~~~

<br/>

#MainWindowViewModel.cs
~~~c#
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace WpfApp1
{
    public class MainWindowViewModel : INotifyPropertyChanged
    {
        private string _passwordStr;
        public string PasswordStr
        {
            get { return _passwordStr; }
            set
            {
                _passwordStr = value;
                Notify("PasswordStr");
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
}
~~~

<br/>

#PasswordBoxBehavior.cs
~~~c#
using Microsoft.Xaml.Behaviors;
using System.Windows.Controls;
using System.Windows;

namespace WpfApp1
{
    public class PasswordBoxBehavior : Behavior<PasswordBox>
    {
        public static DependencyProperty PasswordProperty = DependencyProperty.Register(
            "Password",
            typeof(string),
            typeof(PasswordBoxBehavior),
            new FrameworkPropertyMetadata(
            string.Empty, FrameworkPropertyMetadataOptions.BindsTwoWayByDefault));

        public string Password
        {
            get { return this.GetValue(PasswordProperty) as string; }
            set { this.SetValue(PasswordProperty, value); }
        }

        protected override void OnAttached()
        {
            base.OnAttached();
            this.AssociatedObject.PasswordChanged += this.OnPasswordChanged;
        }

        void OnPasswordChanged(object sender, RoutedEventArgs e)
        {
            var passwordBox = sender as PasswordBox;
            if (passwordBox == null)
            {
                return;
            }

            this.Password = passwordBox.Password;
        }

        protected override void OnDetaching()
        {
            base.OnDetaching();
            this.AssociatedObject.PasswordChanged -= this.OnPasswordChanged;
        }
    }
}
~~~

###### [MVVM패턴](#mvvm패턴)
###### [Top](#top)

<br/>
<br/>

# DependencyProperty
  - 인터페이스로써, 속성 값이 변경 되었을 때 알림을 준다. 예를 들어 디자인 폼에서 속성을 변경 했을때 백단의 데이터까지 바뀌게 해준다.
    - 프로퍼티 값이 변경되었을 때 자동으로 어떤 일을 처리하게 할 수 있게 해주는 것
    - 의존 프로퍼티를 사용하면 엘리먼트를 사용하는 시점에 프로퍼티 값이 결정되고, Static 변수이기 때문에 메모리 절약에 효과적이다

// 의존 프로퍼티 등록
~~~c#
public static readonly DependencyProperty MyPropertyProperty =
    DependencyProperty.Register("MyProperty", typeof(string), typeof(MyClass), new PropertyMetadata("DefaultValue"));


//public static readonly DependencyProperty MyPropertyProperty: 이 줄은 종속성 속성을 정의합니다. MyProperty라는 이름의 종속성 속성을 만듭니다. 이것은 정적(public static) 필드로 선언되므로 클래스 수준에서 사용할 수 있습니다.

//"MyProperty": 종속성 속성의 이름을 지정합니다. 나중에 XAML에서 이 이름을 사용하여 해당 속성을 식별합니다.
//typeof(string): 종속성 속성의 데이터 형식을 지정합니다. 이 예제에서는 문자열(string) 형식을 사용합니다.
//typeof(MyClass): 종속성 속성을 소유하는 클래스를 지정합니다. 종속성 속성이 MyClass 클래스에 속하게 됩니다.
//new PropertyMetadata("DefaultValue"): 종속성 속성의 메타데이터를 설정합니다. 여기에는 기본값("DefaultValue")을 설정하거나 속성 변경 시 호출할 콜백 메서드 등을 지정할 수 있습니다.
~~~

  - 아래는 MainWindow와 UserControl1에서 동시에 데이터가 바인딩되며 바뀌는 것을 볼 수 있다

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="200" Width="200">
    <StackPanel>
        <TextBox Text="{Binding MyProperty, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"/>
        <local:UserControl1/>
    </StackPanel>
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
using System.Windows;

namespace WpfApp1
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            this.DataContext = this;
        }

        public static readonly DependencyProperty MyPropertyProperty =
    DependencyProperty.Register("MyProperty", typeof(string), typeof(MainWindow), new PropertyMetadata("qweqwe"));
    }
}
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
        <TextBox Text="{Binding MyProperty, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"/>
    </Grid>
</UserControl>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/842a874f-3ea8-44bf-bbbf-eb09f62bf18d)

<br/>

  - DependencyProperty는 다른 Window로 넘어갈 수는 없는듯 하다..?
    - 하지만 테스트 결과, 하나의 Window에서 그 안에 출력 할 수 있는 화면단에는 전부 넘어갈 수 있다고 추측할 수 있다

<br/>

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/acb7a3d4-5449-4daf-80ec-675dd05fd990)

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="200" Width="200">
    <StackPanel>
        <TextBox Text="{Binding MyProperty, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"/>
        <Button Content="Click" Click="Button_Click"/>
        <local:UserControl1/>
    </StackPanel>
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
using System.Windows;

namespace WpfApp1
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            this.DataContext = this;
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            Window1 window1 = new Window1();
            window1.Show();
        }

        public static readonly DependencyProperty MyPropertyProperty =
    DependencyProperty.Register("MyProperty", typeof(string), typeof(MainWindow), new PropertyMetadata("qweqwe"));
    }
}
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
        <TextBox Text="{Binding MyProperty, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"/>
    </Grid>
</UserControl>
~~~

<br/>

#Window1.xaml
~~~c#
<Window x:Class="WpfApp1.Window1"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="Window1" Height="450" Width="800">
    <StackPanel>
        <TextBox Text="{Binding MyProperty, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"/>
        <local:UserControl1/>
    </StackPanel>
</Window>
~~~

<br/>

#Window1.xaml.cs
~~~c#
using System.Windows;

namespace WpfApp1
{
    public partial class Window1 : Window
    {
        public Window1()
        {
            InitializeComponent();
            this.DataContext = this;
        }

        public static readonly DependencyProperty MyPropertyProperty =
    DependencyProperty.Register("MyProperty", typeof(string), typeof(Window1), new PropertyMetadata("123123"));
    }
}
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/8dbeeaa6-ab96-4f26-9e83-3120cdb1735e)

###### [MVVM패턴](#mvvm패턴)
###### [Top](#top)

<br/>
<br/>

# ViewModel To ViewModel 데이터교환
  - MVVM패턴에서 ViewModel끼리의 데이터 교환
  - model을 가지고 있는 store어 class의 이벤트를 통해서, 다른 뷰모델에 해당하는 모델 데이터를 전송한다

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp2.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp2"
        mc:Ignorable="d"
        Title="MainWindow" Height="300" Width="300">

    <Window.DataContext>
        <local:MainWindowViewModel/>
    </Window.DataContext>

    <Grid>
        <StackPanel Orientation="Horizontal">
            <local:UserControl1 DataContext="{Binding UserControl_DataContext}"/>
            <local:UserControl2 DataContext="{Binding UserContro2_DataContext}"/>
            <local:UserControl3 DataContext="{Binding UserContro3_DataContext}"/>
        </StackPanel>
    </Grid>
</Window>
~~~

<br/>

#MainWindowViewModel.cs
~~~c#
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace WpfApp2
{
    public class MainWindowViewModel : INotifyPropertyChanged
    {
        public MainWindowViewModel()
        {
            CustStores = new CustStore();
            CustStores.CustCurrent = new Cust() { Age = 100, Name = "4444"};

            _userControl_DataContext = new UserControl1VIewModel(CustStores);
            _userContro2_DataContext = new UserControl2VIewModel(CustStores);
            _userContro3_DataContext = new UserControl3VIewModel(CustStores);
        }

        public object _userControl_DataContext;
        public object UserControl_DataContext
        {
            get { return _userControl_DataContext; }
            set
            {
                _userControl_DataContext = value;
                Notify();
            }
        }

        public object _userContro2_DataContext;
        public object UserContro2_DataContext
        {
            get { return _userContro2_DataContext; }
            set
            {
                _userContro2_DataContext = value;
                Notify();
            }
        }

        public object _userContro3_DataContext;
        public object UserContro3_DataContext
        {
            get { return _userContro3_DataContext; }
            set
            {
                _userContro3_DataContext = value;
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

        private CustStore _custStores;
        public CustStore CustStores
        {
            get { return _custStores; }
            set
            {
                _custStores = value;
                Notify();
            }
        }
    }
}
~~~

<br/>

#UserControl1.xaml
~~~c#
<UserControl x:Class="WpfApp2.UserControl1"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:WpfApp2"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <Grid>
        <StackPanel Orientation="Horizontal">
            <Button Width="100" Height="30" Content="버튼1"/>
            <TextBox Text="{Binding Name}"/>
            <TextBox Text="{Binding Age}"/>
        </StackPanel>
    </Grid>
</UserControl>
~~~

<br/>

#UserControl1VIewModel.cs
~~~c#
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace WpfApp2
{
    public class UserControl1VIewModel : INotifyPropertyChanged
    {
        private readonly CustStore _custStore;
        private Cust _cust => _custStore.CustCurrent!;
        public UserControl1VIewModel(CustStore custStore)
        {
            _custStore = custStore;
            _custStore.CurrentAccountChanged += CurrentAccountChanged;
            init();
        }

        private void CurrentAccountChanged(Cust cust)
        {
            Name = cust.Name;
            Age = cust.Age;
        }

        private void init()
        {
            Name = _cust.Name;
            Age = _cust.Age;
        }

        private string _name;
        public string Name
        {
            get { return _name; }
            set
            {
                _name = value;
                Notify();
            }
        }

        private int _age;
        public int Age
        {
            get { return _age; }
            set
            {
                _age = value;
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
}
~~~

<br/>

#UserControl2.xaml
~~~c#
<UserControl x:Class="WpfApp2.UserControl2"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:WpfApp2"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <Grid>
        <StackPanel Orientation="Horizontal">
            <Button Width="100" Height="30" Content="버튼2" Command="{Binding UserControl2Event}"/>
            <TextBox Text="{Binding Name}"/>
            <TextBox Text="{Binding Age}"/>
        </StackPanel>
    </Grid>
</UserControl>
~~~

<br/>

#UserControl2VIewModel.cs
~~~c#
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Windows.Input;

namespace WpfApp2
{
    public class UserControl2VIewModel : INotifyPropertyChanged
    {
        private readonly CustStore _custStore;
        private Cust _cust => _custStore.CustCurrent!;
        public UserControl2VIewModel(CustStore custStore)
        {
            _custStore = custStore;
            init();
        }

        private void init()
        {
            Name = _cust.Name;
            Age = _cust.Age;
        }


        private string _name;
        public string Name
        {
            get { return _name; }
            set
            {
                _name = value;
                Notify();
            }
        }

        private int _age;
        public int Age
        {
            get { return _age; }
            set
            {
                _age = value;
                Notify();
            }
        }

        private Command _userControl2Event;
        public ICommand UserControl2Event
        {
            get { return _userControl2Event = new Command(OnUserControl2Event); }
        }

        private void OnUserControl2Event(object obj)
        {
            _custStore.CustCurrent = new Cust() { Age = Age, Name = Name };
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
}
~~~

<br/>

#UserControl3.xaml
~~~c#
<UserControl x:Class="WpfApp2.UserControl3"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:WpfApp2"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <Grid>
        <StackPanel Orientation="Horizontal">
            <Button Width="100" Height="30" Content="버튼2"/>
            <TextBox Text="{Binding Name}"/>
            <TextBox Text="{Binding Age}"/>
        </StackPanel>
    </Grid>
</UserControl>
~~~

<br/>

#UserControl3VIewModel.cs
~~~c#
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace WpfApp2
{
    public class UserControl3VIewModel : INotifyPropertyChanged
    {
        private readonly CustStore _custStore;
        private Cust _cust => _custStore.CustCurrent!;
        public UserControl3VIewModel(CustStore custStore)
        {
            _custStore = custStore;
            _custStore.CurrentAccountChanged += CurrentAccountChanged;
        }

        private void CurrentAccountChanged(Cust cust)
        {
            Name = cust.Name;
            Age = cust.Age;
        }

        private string _name;
        public string Name
        {
            get { return _name; }
            set
            {
                _name = value;
                Notify();
            }
        }

        private int _age;
        public int Age
        {
            get { return _age; }
            set
            {
                _age = value;
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
}
~~~

<br/>

#Cust.cs
~~~c#
namespace WpfApp2
{
    public class Cust
    {
        private string _name;
        public string Name
        {
            get { return _name; }
            set
            {
                _name = value;
            }
        }

        private int _age;
        public int Age
        {
            get { return _age; }
            set
            {
                _age = value;
            }
        }
    }
}
~~~

<br/>

#CustStore.cs
~~~c#
using System;

namespace WpfApp2
{
    public class CustStore
    {
        private Cust _custCurrent;
        public Cust CustCurrent
        {
            get { return _custCurrent; }
            set
            {
                _custCurrent = value;
                if (CurrentAccountChanged != null)
                {
                    CurrentAccountChanged?.Invoke(_custCurrent!);
                    _custCurrent = null;
                }
            }
        }

        public Action<Cust>? CurrentAccountChanged { get; set; }
    }
}
~~~

<br/>

#Command.cs
~~~c#
using System;
using System.Windows.Input;

namespace WpfApp2
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

###### [MVVM패턴](#mvvm패턴)
###### [Top](#top)

<br/>
<br/>

# ViewModel To ViewModel 데이터교환(IOC,DI)_Store를 활용한 이벤트
  - MVVM패턴에서 ViewModel끼리의 데이터 교환
  - model을 가지고 있는 store어 class의 이벤트를 통해서, 다른 뷰모델에 해당하는 모델 데이터를 전송한다
  - 제어의역전(IOC), 의존성주입(Dependency Injection,DI)
    - 제어의 역전(제어의 반전, Inversion of Control; IoC) : 프로그래머가 직접 프로그램의 흐름을 제어하는 코드를 작성하지 않고, 그 대신 외부 프레임워크의 흐름 제어를 받도록 하는 소프트웨어 개발 원칙. IoC를 따라 소프트웨어를 개발하면 인스턴스의 생성이나 이벤트 처리기 등의 호출을 프레임워크가 알아서 해 줌
    - IOC컨테이너 : 개체 간의 의존성 정보를 등록하고 어떤 클래스의 인스턴스 또는 어떤 인터페이스를 구현하는 인스턴스를 요청하면 알아서 의존성이 해결된(resolved) 인스턴스를 만들어 주는 것
 - 위의 코드에서 App.xaml, App.xaml.cs, MainWindowViewModel이렇게 3개만 코드가 변경 되었다
 - 만약 서비스를, services.AddSingleton<INavigationService, NavigationService>(); 이렇게 등록한다면, 이 뜻은 다음과 같다.
   - INavigationService는 서비스의 인터페이스이며, NavigationService는 이 인터페이스를 구현하는 구체적인 클래스. 의존성 주입에서는 인터페이스를 통해 서비스를 요청하고, 구현 클래스의 인스턴스가 제공된다
   - App.xaml에서 리소스를 전체 등록하려면, Startup 이벤트를 만들고 비하인드에서, 아래 코드와 같이 해당 윈도우를 실행하는 코드를 넣어 주어야 한다

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/383554d2-d12c-4eb7-ba06-df5f8e8ffdf3)

<br/>

~~~c#
//서비스 등록: App.xaml.cs의 ConfigureServices 메서드에서 services.AddSingleton<INavigationService, NavigationService>(); 코드는 INavigationService 인터페이스에 대한 구현으로 NavigationService를 등록합니다. 이것은 의존성 주입 컨테이너에 NavigationService의 싱글턴 인스턴스를 사용하도록 지시합니다.

//자동 의존성 해결: App.Current.Services.GetService(typeof(LoginViewModel))가 호출될 때, 의존성 주입 컨테이너는 LoginViewModel의 생성자에 필요한 의존성들을 확인합니다. LoginViewModel의 생성자는 INavigationService 타입의 객체를 요구합니다.

//주입 과정: 의존성 주입 컨테이너는 INavigationService 타입의 요청을 감지하고, 이전에 등록된 서비스 목록에서 적절한 서비스 구현체(여기서는 NavigationService)를 찾습니다. 컨테이너는 NavigationService의 인스턴스를 생성(또는 이미 생성된 인스턴스를 재사용)하고, 이를 LoginViewModel의 생성자에 전달합니다.

//결과: 결과적으로 LoginViewModel의 인스턴스가 생성될 때, 그 생성자에 필요한 INavigationService의 구현체가 자동으로 주입됩니다. 이로써 LoginViewModel은 NavigationService를 사용하여 필요한 네비게이션 작업을 수행할 수 있게 됩니다.
~~~

<br/>

#App.xaml
~~~c#
// StartupUri 제거하기

<Application x:Class="WpfApp1.App"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:local="clr-namespace:WpfApp1"
             Startup="Application_Startup"
             >
    <Application.Resources>
         
    </Application.Resources>
</Application>
~~~

<br/>

#App.xaml.cs
~~~c#
using System;
using System.Windows;
using Microsoft.Extensions.DependencyInjection;

namespace WpfApp2
{
    public partial class App : Application
    {
        public IServiceProvider Services { get; }

        public new static App Current => (App)Application.Current;
        public App()
        {
            Services = ConfigureServices();
        }

        private IServiceProvider ConfigureServices()
        {
            // ServiceCollection
            // 의존성을 등록하기 위한 컨테이너. 이 컨테이너는 응용 프로그램이 실행되는 동안 사용될 서비스와 그 구현을 저장한다
            var services = new ServiceCollection();

            // AddSingleton
            // 해당 서비스가 싱글턴으로 동작하도록 지정한다.
            // 애플리케이션이 실행되는 동안 한 번만 생성되고, 이후 모든 요청에 대해 동일한 인스턴스가 사용되도록 한다

            // Stores
            services.AddSingleton<CustStore>();

            // ViewModels
            services.AddSingleton<MainWindowViewModel>();
            services.AddSingleton<UserControl1VIewModel>();
            services.AddSingleton<UserControl2VIewModel>();
            services.AddSingleton<UserControl3VIewModel>();

            // Views
            services.AddSingleton(s => new MainWindow()
            {
                DataContext = s.GetRequiredService<MainWindowViewModel>()
            });

            return services.BuildServiceProvider();
        }

        private void Application_Startup(object sender, StartupEventArgs e)
        {
            var mainView = Services.GetRequiredService<MainWindow>();
            mainView.Show();
        }
    }
}
~~~

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp2.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp2"
        mc:Ignorable="d"
        Title="MainWindow" Height="300" Width="300">

    <Grid>
        <StackPanel Orientation="Horizontal">
            <local:UserControl1 DataContext="{Binding UserControl_DataContext}"/>
            <local:UserControl2 DataContext="{Binding UserContro2_DataContext}"/>
            <local:UserControl3 DataContext="{Binding UserContro3_DataContext}"/>
        </StackPanel>
    </Grid>
</Window>
~~~

<br/>

#MainWindowViewModel.cs
~~~c#
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace WpfApp2
{
    public class MainWindowViewModel : INotifyPropertyChanged
    {
        private readonly CustStore _custStore;
        private Cust _cust => _custStore.CustCurrent!;
        public MainWindowViewModel(CustStore custStore)
        {
            _custStore = custStore;
            _custStore.CustCurrent = new Cust() { Age = 300, Name = "1234" };

            _userControl_DataContext = App.Current.Services.GetService(typeof(UserControl1VIewModel))!;
            _userContro2_DataContext = App.Current.Services.GetService(typeof(UserControl2VIewModel))!;
            _userContro3_DataContext = App.Current.Services.GetService(typeof(UserControl3VIewModel))!;
        }

        public object _userControl_DataContext;
        public object UserControl_DataContext
        {
            get { return _userControl_DataContext; }
            set
            {
                _userControl_DataContext = value;
                Notify();
            }
        }

        public object _userContro2_DataContext;
        public object UserContro2_DataContext
        {
            get { return _userContro2_DataContext; }
            set
            {
                _userContro2_DataContext = value;
                Notify();
            }
        }

        public object _userContro3_DataContext;
        public object UserContro3_DataContext
        {
            get { return _userContro3_DataContext; }
            set
            {
                _userContro3_DataContext = value;
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
}
~~~

<br/>

#UserControl1.xaml
~~~c#
<UserControl x:Class="WpfApp2.UserControl1"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:WpfApp2"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <Grid>
        <StackPanel Orientation="Horizontal">
            <Button Width="100" Height="30" Content="버튼1"/>
            <TextBox Text="{Binding Name}"/>
            <TextBox Text="{Binding Age}"/>
        </StackPanel>
    </Grid>
</UserControl>
~~~

<br/>

#UserControl1VIewModel.cs
~~~c#
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace WpfApp2
{
    public class UserControl1VIewModel : INotifyPropertyChanged
    {
        private readonly CustStore _custStore;
        private Cust _cust => _custStore.CustCurrent!;
        public UserControl1VIewModel(CustStore custStore)
        {
            _custStore = custStore;
            _custStore.CurrentAccountChanged += CurrentAccountChanged;
            init();
        }

        private void CurrentAccountChanged(Cust cust)
        {
            Name = cust.Name;
            Age = cust.Age;
        }

        private void init()
        {
            Name = _cust.Name;
            Age = _cust.Age;
        }

        private string _name;
        public string Name
        {
            get { return _name; }
            set
            {
                _name = value;
                Notify();
            }
        }

        private int _age;
        public int Age
        {
            get { return _age; }
            set
            {
                _age = value;
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
}
~~~

<br/>

#UserControl2.xaml
~~~c#
<UserControl x:Class="WpfApp2.UserControl2"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:WpfApp2"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <Grid>
        <StackPanel Orientation="Horizontal">
            <Button Width="100" Height="30" Content="버튼2" Command="{Binding UserControl2Event}"/>
            <TextBox Text="{Binding Name}"/>
            <TextBox Text="{Binding Age}"/>
        </StackPanel>
    </Grid>
</UserControl>
~~~

<br/>

#UserControl2VIewModel.cs
~~~c#
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Windows.Input;

namespace WpfApp2
{
    public class UserControl2VIewModel : INotifyPropertyChanged
    {
        private readonly CustStore _custStore;
        private Cust _cust => _custStore.CustCurrent!;
        public UserControl2VIewModel(CustStore custStore)
        {
            _custStore = custStore;
            init();
        }

        private void init()
        {
            Name = _cust.Name;
            Age = _cust.Age;
        }


        private string _name;
        public string Name
        {
            get { return _name; }
            set
            {
                _name = value;
                Notify();
            }
        }

        private int _age;
        public int Age
        {
            get { return _age; }
            set
            {
                _age = value;
                Notify();
            }
        }

        private Command _userControl2Event;
        public ICommand UserControl2Event
        {
            get { return _userControl2Event = new Command(OnUserControl2Event); }
        }

        private void OnUserControl2Event(object obj)
        {
            _custStore.CustCurrent = new Cust() { Age = Age, Name = Name };
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
}
~~~

<br/>

#UserControl3.xaml
~~~c#
<UserControl x:Class="WpfApp2.UserControl3"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:WpfApp2"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <Grid>
        <StackPanel Orientation="Horizontal">
            <Button Width="100" Height="30" Content="버튼2"/>
            <TextBox Text="{Binding Name}"/>
            <TextBox Text="{Binding Age}"/>
        </StackPanel>
    </Grid>
</UserControl>
~~~

<br/>

#UserControl3VIewModel.cs
~~~c#
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace WpfApp2
{
    public class UserControl3VIewModel : INotifyPropertyChanged
    {
        private readonly CustStore _custStore;
        private Cust _cust => _custStore.CustCurrent!;
        public UserControl3VIewModel(CustStore custStore)
        {
            _custStore = custStore;
            _custStore.CurrentAccountChanged += CurrentAccountChanged;
        }

        private void CurrentAccountChanged(Cust cust)
        {
            Name = cust.Name;
            Age = cust.Age;
        }

        private string _name;
        public string Name
        {
            get { return _name; }
            set
            {
                _name = value;
                Notify();
            }
        }

        private int _age;
        public int Age
        {
            get { return _age; }
            set
            {
                _age = value;
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
}
~~~

<br/>

#Cust.cs
~~~c#
namespace WpfApp2
{
    public class Cust
    {
        private string _name;
        public string Name
        {
            get { return _name; }
            set
            {
                _name = value;
            }
        }

        private int _age;
        public int Age
        {
            get { return _age; }
            set
            {
                _age = value;
            }
        }
    }
}
~~~

<br/>

#CustStore.cs
~~~c#
using System;

namespace WpfApp2
{
    public class CustStore
    {
        private Cust _custCurrent;
        public Cust CustCurrent
        {
            get { return _custCurrent; }
            set
            {
                _custCurrent = value;
                if (CurrentAccountChanged != null)
                {
                    CurrentAccountChanged?.Invoke(_custCurrent!);
                    _custCurrent = null;
                }
            }
        }

        public Action<Cust>? CurrentAccountChanged { get; set; }
    }
}
~~~

<br/>

#Command.cs
~~~c#
using System;
using System.Windows.Input;

namespace WpfApp2
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

  - ObservableCollection을 Store를 통한 데이터 교환

#CustListStore.cs
~~~c#
using System;
using System.Collections.ObjectModel;

namespace WpfApp1
{
    public class CustListStore
    {
        private ObservableCollection<Cust> _custList;
        public ObservableCollection<Cust> CustList
        {
            get { return _custList; }
            set
            {
                _custList = value;
                if (CustListChangeEvent != null)
                {
                    CustListChangeEvent?.Invoke();
                }
            }
        }

        public Action? CustListChangeEvent { get; set; }
    }
}
~~~

<br/>

#UserControl1ViewModel.cs
~~~c#
using System;
using System.Windows.Input;
using System.Collections.ObjectModel;

namespace WpfApp1
{
    public class UserControl1ViewModel
    {
        private CustListStore _custListStore;
        public UserControl1ViewModel(CustListStore custListStore)
        {
            _custListStore = custListStore;
            _custListStore.CustList = new ObservableCollection<Cust>();
        }

        private int _inAge;
        public int InAge
        {
            get { return _inAge; }
            set
            {
                _inAge = value;
            }
        }

        private String _strName;
        public String StrName
        {
            get { return _strName; }
            set
            {
                _strName = value;
            }
        }

        private Command m_OneClick;
        public ICommand OneClick
        {
            get { return m_OneClick = new Command(OneClickEvent); }
        }

        private ObservableCollection<Cust> _obcCustList = new ObservableCollection<Cust>();
        public ObservableCollection<Cust> ObcCustList
        {
            get { return _obcCustList; }
            set
            {
                _obcCustList = value;
            }
        }

        private void OneClickEvent(object obj)
        {
            ObcCustList.Add(new Cust() { InAge = InAge, StrName = StrName });
            _custListStore.CustList = ObcCustList;
        }
    }
}
~~~

<br/>

#UserControl2ViewModel.cs
~~~c#
using System;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace WpfApp1
{
    public class UserControl2ViewModel : INotifyPropertyChanged
    {
        private CustListStore _custListStore;
        public UserControl2ViewModel(CustListStore custListStore)
        {
            _custListStore = custListStore;
            _custListStore.CustListChangeEvent += CustListStore_CustListChangeEvent;
        }

        private void CustListStore_CustListChangeEvent()
        {
            ObcCustList = _custListStore.CustList;
        }

        private ObservableCollection<Cust> _obcCustList;
        public ObservableCollection<Cust> ObcCustList
        {
            get { return _obcCustList; }
            set
            {
                _obcCustList = value;
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
}
~~~

###### [MVVM패턴](#mvvm패턴)
###### [Top](#top)

<br/>
<br/>

# ViewModel To ViewModel 데이터교환(IOC,DI)_EventHandler를 활용한 이벤트

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/b7997fd3-ae33-4b20-8632-a79e1e625234)

#App.xaml
~~~c#
<Application x:Class="WpfApp1.App"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:local="clr-namespace:WpfApp1"
             Startup="Application_Startup">
    <Application.Resources>
         
    </Application.Resources>
</Application>
~~~

<br/>

#App.xaml.cs
~~~c#
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Windows;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        public IServiceProvider Services { get; }

        public new static App Current => (App)Application.Current;
        public App()
        {
            Services = ConfigureServices();
        }

        private IServiceProvider ConfigureServices()
        {
            // ServiceCollection
            // 의존성을 등록하기 위한 컨테이너. 이 컨테이너는 응용 프로그램이 실행되는 동안 사용될 서비스와 그 구현을 저장한다
            var services = new ServiceCollection();

            // Events
            services.AddSingleton<EventPublisher>();

            // ViewModels
            services.AddSingleton<MainWindowViewModel>();
            services.AddSingleton<UserControl1ViewModel>();
            services.AddSingleton<UserControl2ViewModel>();

            // Views
            services.AddSingleton(s => new MainWindow()
            {
                DataContext = s.GetRequiredService<MainWindowViewModel>()
            });

            return services.BuildServiceProvider();
        }
        private void Application_Startup(object sender, StartupEventArgs e)
        {
            var mainView = Services.GetRequiredService<MainWindow>();
            mainView.Show();
        }
    }
}
~~~

<br/>

#BoolToVisibilityConverter.cs
~~~c#
생략
~~~

<br/>

#Command.cs
~~~c#
생략
~~~

<br/>

#EventPublisher.cs
~~~c#
using System;

namespace WpfApp1
{
    public class EventPublisher
    {
        // EventHandler 델리게이트를 사용하여 이벤트를 정의합니다.
        public event EventHandler CustomEvent;
        public event EventHandler CustomEvent2;
        public event EventHandler<StringEventArgs> BoolEvent;

        // 이벤트를 발생시키는 메서드를 만듭니다.
        public void RaiseCustomEvent()
        {
            Console.WriteLine("CustomEvent 발생");

            // CustomEvent가 null이 아닌 경우에만 이벤트를 발생시킵니다.
            CustomEvent?.Invoke(this, EventArgs.Empty);
        }

        public void RaiseCustomEvent2()
        {
            Console.WriteLine("CustomEvent2 발생");

            // CustomEvent가 null이 아닌 경우에만 이벤트를 발생시킵니다.
            CustomEvent2?.Invoke(this, EventArgs.Empty);
        }

        public void RaiseCustomEvent3(string strMessage)
        {
            BoolEvent?.Invoke(this, new StringEventArgs(strMessage));
        }
    }
}
~~~

<br/>

#StringEventArgs.cs
~~~c#
namespace WpfApp1
{
    public class StringEventArgs
    {
        public string StrMessage { get; private set; }

        public StringEventArgs(string strMessage)
        {
            StrMessage = strMessage;
        }
    }
}
~~~

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="400" Width="400">

    <Window.Resources>
        <DataTemplate DataType="{x:Type local:UserControl1ViewModel}">
            <local:UserControl1/>
        </DataTemplate>
        <DataTemplate DataType="{x:Type local:UserControl2ViewModel}">
            <local:UserControl2/>
        </DataTemplate>
    </Window.Resources>
    
    <Grid>
        <StackPanel Orientation="Horizontal">
            <ContentControl Content="{Binding UserControl1_DataContext}"/>
            <ContentControl Content="{Binding UserControl2_DataContext}"/>
        </StackPanel>
    </Grid>
</Window>
~~~

<br/>

#MainWindowViewModel.cs
~~~c#
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace WpfApp1
{
    public class MainWindowViewModel : INotifyPropertyChanged
    {
        public MainWindowViewModel()
        {
            UserControl1_DataContext = App.Current.Services.GetService(typeof(UserControl1ViewModel))!;
            UserControl2_DataContext = App.Current.Services.GetService(typeof(UserControl2ViewModel))!;
        }

        private object _userControl1_DataContext;
        public object UserControl1_DataContext
        {
            get { return _userControl1_DataContext; }
            set
            {
                _userControl1_DataContext = value;
                Notify();
            }
        }

        private object _userControl2_DataContext;
        public object UserControl2_DataContext
        {
            get { return _userControl2_DataContext; }
            set
            {
                _userControl2_DataContext = value;
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
}
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
             d:DesignHeight="450" d:DesignWidth="800" >
    <Grid Width="200" Height="300" Background="Red">
        <StackPanel>
            <TextBox Margin="5" Height="100" Text="{Binding InAge}"/>
            <TextBox Margin="5" Height="100" Text="{Binding StrName}"/>
            <Button Margin="5" Content="데이터셋" Command="{Binding OneClick}"/>
            <Button Margin="5" Content="투명화" Command="{Binding OneClick2}"/>
            <Button Margin="5" Content="Message" Command="{Binding OneClick3}"/>
        </StackPanel>
    </Grid>
</UserControl>
~~~

<br/>

#UserControl1ViewModel.cs
~~~c#
using System;
using System.Windows.Input;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace WpfApp1
{
    public class UserControl1ViewModel : INotifyPropertyChanged
    {
        private EventPublisher _eventPublisher;
        public UserControl1ViewModel(EventPublisher eventPublisher)
        {
            _eventPublisher = eventPublisher;
            Subscribe(_eventPublisher);
        }

        private int _inAge;
        public int InAge
        {
            get { return _inAge; }
            set
            {
                _inAge = value;
                Notify();
            }
        }

        private String _strName;
        public String StrName
        {
            get { return _strName; }
            set
            {
                _strName = value;
                Notify();
            }
        }

        public void Subscribe(EventPublisher publisher)
        {
            // 이벤트 핸들러를 추가합니다.
            publisher.CustomEvent += HandleCustomEvent;
        }

        // 이벤트를 처리하는 메서드를 정의합니다.
        private void HandleCustomEvent(object sender, EventArgs e)
        {
            StrName = "Hello World";
            InAge = 10;
        }

        private Command m_OneClick;
        public ICommand OneClick
        {
            get { return m_OneClick = new Command(OneClickEvent); }
        }

        private void OneClickEvent(object obj)
        {
            _eventPublisher.RaiseCustomEvent();
        }

        private Command m_OneClick2;
        public ICommand OneClick2
        {
            get { return m_OneClick2 = new Command(OneClickEvent2); }
        }

        private void OneClickEvent2(object obj)
        {
            _eventPublisher.RaiseCustomEvent2();
        }

        private Command m_OneClick3;
        public ICommand OneClick3
        {
            get { return m_OneClick3 = new Command(OneClickEvent3); }
        }

        private void OneClickEvent3(object obj)
        {
            _eventPublisher.RaiseCustomEvent3(StrName);
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
}
~~~

<br/>

#UserControl2.xaml
~~~c#
<UserControl x:Class="WpfApp1.UserControl2"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" 
             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" 
             xmlns:local="clr-namespace:WpfApp1"
             mc:Ignorable="d" 
             d:DesignHeight="450" d:DesignWidth="800">
    <UserControl.Resources>
        <local:BoolToVisibilityConverter x:Key="BoolToVisibilityConverter" />
    </UserControl.Resources>

    <Grid Width="200" Height="200" Background="Blue" Visibility="{Binding BlVis, Converter={StaticResource BoolToVisibilityConverter}}">
        <StackPanel>
            <TextBox Margin="5" Height="100" Text="{Binding StrName}"/>
            <TextBox Margin="5" Height="100" Text="123123123"/>
        </StackPanel>
    </Grid>
</UserControl>
~~~

<br/>

#UserControl2ViewModel.cs
~~~c#
using System;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace WpfApp1
{
    public class UserControl2ViewModel : INotifyPropertyChanged
    {
        private EventPublisher _eventPublisher;
        public UserControl2ViewModel(EventPublisher eventPublisher)
        {
            // 이벤트 등록
            _eventPublisher = eventPublisher;
            Subscribe(_eventPublisher);
        }


        private bool _blVis = true;
        public bool BlVis
        {
            get { return _blVis; }
            set
            {
                _blVis = value;
                Notify();
            }
        }

        private string _strName;
        public string StrName
        {
            get { return _strName; }
            set
            {
                _strName = value;
                Notify();
            }
        }

        public void Subscribe(EventPublisher publisher)
        {
            // 이벤트 핸들러를 추가합니다.
            publisher.CustomEvent2 += HandleCustomEvent;
            publisher.BoolEvent += CustomBoolEvent;
        }

        // 이벤트를 처리하는 메서드를 정의합니다.
        private void HandleCustomEvent(object sender, EventArgs e)
        {
            BlVis = !BlVis;
        }

        private void CustomBoolEvent(object? sender, StringEventArgs e)
        {
            StrName = e.StrMessage;
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
}
~~~

<br/>

###### [MVVM패턴](#mvvm패턴)
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
  - [DataTrigger안에 DoubleAnimation적용하기](#datatrigger안에-doubleanimation적용하기)
  - [EventTrigger](#eventtrigger)

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

# DataTrigger안에 DoubleAnimation적용하기

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp2.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp2"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">

    <!--<Window.Resources>
        <Storyboard x:Key="AnimateOpacity">
            <DoubleAnimation Storyboard.TargetProperty="Opacity"
                         From="1.0" To="0.0" Duration="0:0:1"/>
        </Storyboard>
    </Window.Resources>-->

    <Button Content="Click Me">
        <Button.Style>
            <Style TargetType="Button">
                <Style.Triggers>
                    <DataTrigger Binding="{Binding IsMouseOver, RelativeSource={RelativeSource Self}}" Value="True">
                        <DataTrigger.EnterActions>
                            <BeginStoryboard>
                                <Storyboard>
                                    <DoubleAnimation 
                                        Storyboard.TargetProperty="Opacity"
                                        From="1.0" To="0.0" Duration="0:0:1"/>
                                </Storyboard>
                            </BeginStoryboard>
                        </DataTrigger.EnterActions>
                    </DataTrigger>
                </Style.Triggers>
            </Style>
        </Button.Style>
    </Button>
</Window>
~~~

###### [트리거](#트리거)
###### [Top](#top)

<br/>
<br/>

# EventTrigger
  - 특정한 이벤트에 따라서 ui를 변경한다
  - RoutedEvent 에 특정한 이벤트를 작성한다

<br/>

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
            <Setter Property="Margin" Value="5,0,5,5"/>

            <Style.Triggers>
                <EventTrigger RoutedEvent="GotFocus">
                    <BeginStoryboard>
                        <Storyboard>
                            <ColorAnimation Storyboard.TargetProperty="Background.Color" To="Red"
                                        Duration="0:0:0.5"/>
                        </Storyboard>
                    </BeginStoryboard>
                </EventTrigger>

                <EventTrigger RoutedEvent="LostFocus">
                    <BeginStoryboard>
                        <Storyboard>
                            <ColorAnimation Storyboard.TargetProperty="Background.Color" To="Aquamarine" 
                                        Duration="0:0:0.5"/>
                        </Storyboard>
                    </BeginStoryboard>
                </EventTrigger>
            </Style.Triggers>
        </Style>
    </Window.Resources>
    <StackPanel>
        <Label Content="이름" Margin="5,5,5,0"/>
        <TextBox Margin="5,0,5,5" Style="{StaticResource NameBox}"/>
        <Label Content="아이디" Margin="5,5,5,0"/>
        <TextBox Margin="5,0,5,5" Style="{StaticResource NameBox}"/>
    </StackPanel>
</Window>
~~~

###### [트리거](#트리거)
###### [Top](#top)

<br/>
<br/>

***

# 이벤트의 버블링(bubbling),터널링(tunneling)
  - WPF에서 이벤트는 버블링(bubbling) 또는 터널링(tunneling) 방식으로 라우팅됨. MouseLeftButtonDown과 같은 버블링 이벤트는 가장 먼저 자식 요소에서 발생하고, 부모 요소 방향으로 상향 전파된다. 따라서, 버튼 자체가 이 이벤트를 처리하고 상위 요소인 Grid로 전파되지 않는다. 이럴때는 PreviewMouseLeftButtonDown를 사용한다. 이것은 Grid 수준에서 먼저 발생하고, 그 다음으로 자식 요소로 내려간다.

<br/>

  - [최상위 grid에 RoutedEvent 적용하기](#최상위-grid에-routedevent-적용하기)
  - [Preview이벤트](#preview이벤트)

<br/>
<br/>

# 최상위 grid에 RoutedEvent 적용하기
  - 최상위 Grid에, 버튼 클릭이 일어나면 Grid 전체가 이동
  - RoutedEvent="MouseLeftButtonDown"로 하게 되면 아무곳에나 클릭시 이 이벤트가 들어가게 됨(이때는 버튼을 클릭시에는 이벤트가 안들어가 가게됨)
  - MouseLeftButtonDown 이벤트가 버튼 클릭시 Grid의 EventTrigger에 의해 포착되지 않는 이유는 WPF의 이벤트 라우팅 메커니즘 때문 

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
    <Grid Background="Coral">
        
        <Grid.Triggers>
            <EventTrigger RoutedEvent="Button.Click">
                <BeginStoryboard>
                    <Storyboard>
                        <DoubleAnimation
                Storyboard.TargetProperty="(UIElement.RenderTransform).(TranslateTransform.X)"
                By="130" Duration="0:0:0.3"/>
                    </Storyboard>
                </BeginStoryboard>
            </EventTrigger>
        </Grid.Triggers>

        <Grid.RenderTransform>
            <TranslateTransform />
        </Grid.RenderTransform>

        <Button Margin="130,0,0,0" Height="40" Width="120"
            Content="Show Image"
            HorizontalAlignment="Left">
        </Button>
    </Grid>
</Window>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/e5126b88-01d3-41ee-9893-b13617de2f55)

###### [이벤트의 버블링(bubbling),터널링(tunneling)](#이벤트의-버블링bubbling터널링tunneling)
###### [Top](#top)

<br/>
<br/>

# Preview이벤트
  - Preview가 아닌 이벤트들은 자식 이벤트 부터 올라가기 때문에 부모 이벤트에는 도달 하지 않는 경우가 있다. 이럴때 Preview이벤트를 사용한다. Preview이벤트를 부모 부터 이벤트가 시작 된다

<br/>

  - 아래의 코드는, Grid를 누르면 Grid에 달려 있는 PreviewMouseLeftButtonDown가 발생하며, 또한 버튼을 누르면 PreviewMouseLeftButtonDown가 발생하고 버튼 command또한 발생 한다  

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
    <Window.DataContext>
        <local:MainWindowVIewModel/>
    </Window.DataContext>
    
    
<Grid Background="Coral">
            
        <Grid.Triggers>
            <EventTrigger RoutedEvent="PreviewMouseLeftButtonDown">
                <BeginStoryboard>
                    <Storyboard>
                        <DoubleAnimation
                Storyboard.TargetProperty="(UIElement.RenderTransform).(TranslateTransform.X)"
                By="130" Duration="0:0:0.3"/>
                    </Storyboard>
                </BeginStoryboard>
            </EventTrigger>
        </Grid.Triggers>

        <Grid.RenderTransform>
            <TranslateTransform />
        </Grid.RenderTransform>

        <Button Margin="130,0,0,0" Height="40" Width="120"
            Content="Show Image"
            HorizontalAlignment="Left"
                Command="{Binding OneClick}">
        </Button>
    </Grid>
</Window>
~~~

###### [이벤트의 버블링(bubbling),터널링(tunneling)](#이벤트의-버블링bubbling터널링tunneling)
###### [Top](#top)

<br/>
<br/>

***

# RenderTransform
  - 특정 객체를 움직이거나, 좌표를 변경하거나 모양을 x,y축 단위로 변경할 때 사용한다

~~~c#
TranslateTransform
RotateTransform
ScaleTransform
SkewTransform
MatrixTransform
~~~

  - 다른것 또한 변수만 다르고 사용 방법이 같기 때문에 TranslateTransform하나만 설명 하도록 한다
    - x,y축 위치 이동

<br/>

  - [TranslateTransform](#translatetransform)
  - [여러 Transform을 적용하기](#여러-transform을-적용하기)
  - [EventTrigger를 통해 적용하기](#eventtrigger를-통해-적용하기)
  - [Swipe기능](#swipe기능)

###### [RenderTransform](#rendertransform)
###### [Top](#top)

<br/>
<br/>

# TranslateTransform

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="400" Width="400">
    <StackPanel>
        <Grid>
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
            </Grid.ColumnDefinitions>
 
        <Rectangle Grid.Column="0" Fill="DarkBlue" Width="50" Height="50" HorizontalAlignment="Left">
            <Rectangle.RenderTransform>
                <TranslateTransform X="300" Y="20"/>
            </Rectangle.RenderTransform>
        </Rectangle>

        </Grid>
    </StackPanel>
</Window>
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/56acba92-8797-4b85-beae-f7a1143aeceb)

<br/>

  - 바인딩을 통해서도 값을 바꿀 수 있다.

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="400" Width="400">
    <StackPanel>
        <Slider Name="tx" Width="100" Minimum="0" Maximum="50" Value="0" />

        <Grid>
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
            </Grid.ColumnDefinitions>
 
        <Rectangle Grid.Column="1" Fill="DarkBlue" Width="50" Height="50" HorizontalAlignment="Left">
            <Rectangle.RenderTransform>
                <TranslateTransform X="{Binding ElementName=tx, Path=Value}" Y="20"/>
            </Rectangle.RenderTransform>
        </Rectangle>

        </Grid>
    </StackPanel>
</Window>
~~~

###### [RenderTransform](#rendertransform)
###### [Top](#top)

<br/>
<br/>

# 여러 Transform을 적용하기
  - TransformGroup을 사용한다

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="400" Width="400">
    <StackPanel>
        <Grid>
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
                <ColumnDefinition Width="*" />
            </Grid.ColumnDefinitions>
 
        <Rectangle Grid.Column="1" Fill="DarkBlue" Width="50" Height="50" HorizontalAlignment="Left">
            <Rectangle.RenderTransform>
                <TransformGroup>
                    <TranslateTransform X="20" Y="20" />
                    <ScaleTransform ScaleX="1" ScaleY="1" CenterX="10" CenterY="10"/>
                    <RotateTransform Angle="30"/>
                    <SkewTransform AngleX="45" AngleY="10" CenterX="10" CenterY="20"/>
                </TransformGroup>
            </Rectangle.RenderTransform>
        </Rectangle>

        </Grid>
    </StackPanel>
</Window>
~~~

###### [RenderTransform](#rendertransform)
###### [Top](#top)

<br/>
<br/>

# EventTrigger를 통해 적용하기

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
        <Button Margin="130,0,0,0" Height="40" Width="120"
            Content="Show Image"
            HorizontalAlignment="Left">
            
            <Button.RenderTransform>
                <TranslateTransform />
            </Button.RenderTransform>

            <Button.Triggers>
                <EventTrigger RoutedEvent="Button.Click">
                    <BeginStoryboard>
                        <Storyboard>
                            <DoubleAnimation
                            Storyboard.TargetProperty="(UIElement.RenderTransform).(TranslateTransform.X)"
                            By="130" Duration="0:0:0.3"/>
                        </Storyboard>
                    </BeginStoryboard>
                </EventTrigger>
            </Button.Triggers>
        </Button>
    </Grid>
</Window>
~~~

###### [RenderTransform](#rendertransform)
###### [Top](#top)

<br/>
<br/>

# Swipe기능

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/561cd086-d435-41df-93f0-da9c4522432c)

<br/>

#MainWindow.xaml
~~~c#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:i="http://schemas.microsoft.com/xaml/behaviors"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="300" Width="300">
    <Window.DataContext>
        <local:MainWindowVIewModel/>
    </Window.DataContext>

    <Grid x:Name="FirstGrid" Background="Coral">
        <i:Interaction.Triggers>
            <i:EventTrigger EventName="PreviewMouseLeftButtonDown" SourceObject="{Binding ElementName=FirstGrid}">
                <i:InvokeCommandAction Command="{Binding Grid_PreviewMouseLeftButtonDown}" PassEventArgsToCommand="True"/>
            </i:EventTrigger>

            <i:EventTrigger EventName="PreviewMouseMove" SourceObject="{Binding ElementName=FirstGrid}">
                <i:InvokeCommandAction Command="{Binding Grid_MouseMove}"
                 PassEventArgsToCommand="True"/>
            </i:EventTrigger>

            <i:EventTrigger EventName="PreviewMouseLeftButtonUp" SourceObject="{Binding ElementName=FirstGrid}">
                <i:InvokeCommandAction Command="{Binding Grid_PreviewMouseLeftButtonUp}"
     PassEventArgsToCommand="True"/>
            </i:EventTrigger>
        </i:Interaction.Triggers>

        <Grid>
            <Grid.Style>
                <Style TargetType="Grid">
                    <Setter Property="Background" Value="Green"/>
                </Style>
            </Grid.Style>

            <StackPanel Orientation="Horizontal">
                <Button Margin="0,0,0,0" Height="40" Width="120"
            Content="Show Image"
            HorizontalAlignment="Left"
            Command="{Binding OneClick}">
                    <Button.RenderTransform>
                        <TranslateTransform X="{Binding ValueMovePointX}"/>
                    </Button.RenderTransform>
                </Button>

                <Button Margin="180,0,0,0" Height="40" Width="120"
            Content="Show Image"
            HorizontalAlignment="Left"
            Command="{Binding OneClick}">
                    <Button.RenderTransform>
                        <TranslateTransform X="{Binding ValueMovePointX}"/>
                    </Button.RenderTransform>
                </Button>
            </StackPanel>
            
        </Grid>
    </Grid>
</Window>
~~~

<br/>

#MainWindowVIewModel.cs
~~~c#
using System;
using System.Windows.Input;
using System.Windows;
using System.Diagnostics;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Windows.Threading;

namespace WpfApp1
{
    public class MainWindowVIewModel : INotifyPropertyChanged
    {
        // 타이머 생성
        DispatcherTimer timer = new DispatcherTimer();
        private DateTime startTime;

        DispatcherTimer timerThread = new DispatcherTimer();
        public MainWindowVIewModel()
        {
            // 타이머 이벤트 핸들러 설정
            timerThread.Tick += new EventHandler(timerThread_Tick);

            // 타이머 간격 설정 (예: 1초)
            timerThread.Interval = TimeSpan.FromSeconds(0);

            timerThread.Start();
        }

        private void timerThread_Tick(object sender, EventArgs e)
        {
            if (IsChecked == false)
            {
                if (ValueMovePointX > -120)
                {
                    // 끝점
                    EndValue = 0;

                    // 시작점
                    StartValueX = ValueMovePointX;
                    ChangeInValue = EndValue - StartValueX; // 값의 변화량

                    // 타이머 이벤트 핸들러 설정
                    timer.Tick += new EventHandler(Timer_Tick);

                    // 타이머 간격 설정 (예: 1초)
                    timer.Interval = TimeSpan.FromSeconds(0);

                    startTime = DateTime.Now;

                    // 타이머 시작
                    timer.Start();
                }
                else
                {
                    // 끝점
                    EndValue = -300;

                    // 시작점
                    StartValueX = ValueMovePointX;
                    ChangeInValue = EndValue - StartValueX; // 값의 변화량

                    // 타이머 이벤트 핸들러 설정
                    timer.Tick += new EventHandler(Timer_Tick);

                    // 타이머 간격 설정 (예: 1초)
                    timer.Interval = TimeSpan.FromSeconds(0);

                    startTime = DateTime.Now;

                    // 타이머 시작
                    timer.Start();
                }
            }
            else
            {
                timer.Stop();
            }
        }

        private void Timer_Tick(object sender, EventArgs e)
        {
            double duration = 0.1; // 1초 동안 지속되는 애니메이션

            double currentTime = (DateTime.Now - startTime).TotalSeconds;
            if (currentTime > duration)
            {
                // 애니메이션이 종료된 경우
                timer.Stop();
            }
            else
            {
                // 애니메이션 중인 경우
                ValueMovePointX = EaseOut(currentTime, StartValueX, ChangeInValue, duration);
            }
        }

        private double EaseOut(double time, double startValue, double changeInValue, double duration)
        {
            time /= duration;
            return -changeInValue * time * (time - 2) + startValue;
        }

        private double _startValueX;
        public double StartValueX
        {
            get { return _startValueX; }
            set
            {
                _startValueX = value;
                Notify("StartValueX");
            }
        }

        private double _changeInValue;
        public double ChangeInValue
        {
            get { return _changeInValue; }
            set
            {
                _changeInValue = value;
                Notify("ChangeInValue");
            }
        }

        private double _endValue = 0;
        public double EndValue
        {
            get { return _endValue; }
            set
            {
                _endValue = value;
                Notify("endValue");
            }
        }

        private Command m_OneClick;
        public ICommand OneClick
        {
            get { return m_OneClick = new Command(OneClickEvent); }
        }

        private void OneClickEvent(object obj)
        {
            if (MouseUpPointX < MouseDownCheckPointX + 10 && MouseUpPointX > MouseDownCheckPointX - 10)
            {
                MessageBox.Show("Click");
            }
        }

        private Command _grid_MouseMove;
        public ICommand Grid_MouseMove
        {
            get { return _grid_MouseMove = new Command(OnGrid_MouseMove); }
        }

        private void OnGrid_MouseMove(object obj)
        {
            var arg = obj as MouseEventArgs;

            if (arg.LeftButton == MouseButtonState.Pressed)
            {
                // 이동한 거리를 더해줌
                var position = arg.GetPosition(null);

                // 이동한 거리를 더 빠르게 하거나 더 느리게함
                //if (position.X - MouseDownPointX > 0)
                //{
                //    ValueMovePointX += position.X - MouseDownPointX + 0.3;
                //}
                //else
                //{
                //    ValueMovePointX += position.X - MouseDownPointX - 0.3;
                //}

                ValueMovePointX += position.X - MouseDownPointX;

                Debug.WriteLine(ValueMovePointX);

                // 마지막에 이동한 위치를 저장
                MouseDownPointX = position.X;

            }
        }

        private Command _grid_PreviewMouseLeftButtonDown;
        public ICommand Grid_PreviewMouseLeftButtonDown
        {
            get { return _grid_PreviewMouseLeftButtonDown = new Command(OnGrid_PreviewMouseLeftButtonDown); }
        }

        // 클릭한 위치 저장
        private void OnGrid_PreviewMouseLeftButtonDown(object obj)
        {
            IsChecked = true;

            var arg = obj as MouseButtonEventArgs;

            var position = arg.GetPosition(null);
            MouseDownPointX = position.X;

            // 처음 클릭한 위치를 저장해, Up전까지 어느정도 움직였는지 확인후, 클릭이벤트를 하기 위함
            MouseDownCheckPointX = position.X; 
        }


        private Command _grid_PreviewMouseLeftButtonUp;
        public ICommand Grid_PreviewMouseLeftButtonUp
        {
            get { return _grid_PreviewMouseLeftButtonUp = new Command(OnGrid_PreviewMouseLeftButtonUp); }
        }

        private void OnGrid_PreviewMouseLeftButtonUp(object obj)
        {
            IsChecked = false;

            var arg = obj as MouseButtonEventArgs;

            var position = arg.GetPosition(null);

            // 클릭후, 움직인 거리가 10px이하면 이벤트를 발생시키기 위함
            MouseUpPointX = position.X;
        }

        private bool _isChecked = false;
        public bool IsChecked
        {
            get { return _isChecked; }
            set
            {
                _isChecked = value;
                Notify("IsChecked");
            }
        }

        private double _valueMovePointX = 0;
        public double ValueMovePointX
        {
            get { return _valueMovePointX; }
            set
            {
                _valueMovePointX = value;
                Notify("ValueMovePointX");
            }
        }

        private double _mouseDownPointX = 0;
        public double MouseDownPointX
        {
            get { return _mouseDownPointX; }
            set
            {
                _mouseDownPointX = value;
                Notify("MouseDownPointX");
            }
        }

        private double _mouseUpPointX = 0;
        public double MouseUpPointX
        {
            get { return _mouseUpPointX; }
            set
            {
                _mouseUpPointX = value;
                Notify("MouseUpPointX");
            }
        }

        private double _mouseDownCheckPointX = 0;
        public double MouseDownCheckPointX
        {
            get { return _mouseDownCheckPointX; }
            set
            {
                _mouseDownCheckPointX = value;
                Notify("MouseDownCheckPointX");
            }
        }

        private bool _shouldAnimateToZero = false;
        public bool ShouldAnimateToZero
        {
            get { return _shouldAnimateToZero; }
            set
            {
                _shouldAnimateToZero = value;
                Notify("ShouldAnimateToZero");
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
}
~~~

<br/>

#Command.cs
~~~c#
using System;
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

<br/>

#CommandBehavior.cs
~~~c#
using System;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Windows.Input;
using System.Windows;

namespace WpfApp1
{
    public class CommandBehavior
    {
        private class EventRaiseAttribute : Attribute
        {

        }

        #region Command 

        public static readonly DependencyProperty CommandProperty =
        DependencyProperty.RegisterAttached(
        "Command",
        typeof(ICommand),
        typeof(CommandBehavior),
        new PropertyMetadata(OnCommandChanged));

        public static ICommand GetCommand(DependencyObject d)
        {
            return d.GetValue(CommandProperty) as ICommand;
        }

        public static void SetCommand(DependencyObject d, ICommand value)
        {
            d.SetValue(CommandProperty, value);
        }

        private static void OnCommandChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
        {

        }

        #endregion

        #region Event 

        public static readonly DependencyProperty EventProperty =
        DependencyProperty.RegisterAttached(
        "Event",
        typeof(string),
        typeof(CommandBehavior),
        new PropertyMetadata(OnEventChanged));

        private static void OnEventChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)
        {
            BindEvent(d, e.NewValue as string);
        }

        public static string GetEvent(DependencyObject d)
        {
            return d.GetValue(EventProperty) as string;
        }

        public static void SetEvent(DependencyObject d, string value)
        {
            d.SetValue(EventProperty, value);
        }

        private static void BindEvent(DependencyObject owner, string eventName)
        {
            if (string.IsNullOrWhiteSpace(eventName))
            {
                return;
            }

            var eventInfo = owner.GetType().GetEvent(eventName, BindingFlags.Public | BindingFlags.Instance);
            if (eventInfo == null)
            {
                throw new InvalidOperationException(String.Format("Could not resolve event name {0}", eventName));
            }

            var types = typeof(CommandBehavior).GetMethods(BindingFlags.NonPublic | BindingFlags.Instance);
            MethodInfo method = null;
            foreach (var type in types)
            {
                var attributes = type.GetCustomAttributes(true);
                if (attributes.OfType<EventRaiseAttribute>().Any())
                {
                    method = type;
                    break;
                }
            }

            if (method == null)
            {
                Debug.Assert(false, string.Format("invalid method type. type = {0}", eventName));
                return;
            }

            var eventHandler = Delegate.CreateDelegate(eventInfo.EventHandlerType, null, method);

            owner.SetValue(EventHandlerProperty, eventHandler);

            //Register the handler to the Event 
            eventInfo.AddEventHandler(owner, eventHandler);
        }

        [EventRaise]
        private void OnEventRaised(object sender, EventArgs e)
        {
            var dependencyObject = sender as DependencyObject;
            if (dependencyObject == null)
            {
                return;
            }

            var command = dependencyObject.GetValue(CommandProperty) as ICommand;
            if (command == null)
            {
                return;
            }

            if (command.CanExecute(null) == false)
            {
                return;
            }

            command.Execute(e);
        }

        #endregion

        #region EventHandler 

        public static readonly DependencyProperty EventHandlerProperty =
        DependencyProperty.RegisterAttached(
        "EventHandler",
        typeof(Delegate),
        typeof(CommandBehavior));

        public static Delegate GetEventHandler(DependencyObject d)
        {
            return d.GetValue(EventHandlerProperty) as Delegate;
        }

        public static void SetEventHandler(DependencyObject d, Delegate value)
        {
            d.SetValue(EventHandlerProperty, value);
        }

        #endregion
    }
}
~~~

###### [RenderTransform](#rendertransform)
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

# Command

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

###### [Command](#command)
###### [Top](#top)

<br/>
<br/>

***

# static class를 활용한 싱글톤 데이터 교환 구조
  - 싱글톤 구조는 작은 프로그램을 만들때 유용하다
  - 구조가 쉽고 간결하다
  - 하지만 규모가 커지면, 속도가 느려지고 부하가 걸릴 수 있다

<br/>

  - [Workspace를 통한 UserControl끼리의 값 전달](#workspace를-통한-usercontrol끼리의-값-전달)
  - [Workspace를 통한 UserControl끼리의 값 전달(ContentControl)](#workspace를-통한-usercontrol끼리의-값-전달contentcontrol)

###### [static class를 활용한 싱글톤 데이터 교환 구조](static-class를-활용한-싱글톤-데이터-교환-구조)
###### [Top](#top)

<br/>
<br/>

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

###### [static class를 활용한 싱글톤 데이터 교환 구조](static-class를-활용한-싱글톤-데이터-교환-구조)
###### [Top](#top)

<br/>
<br/>

***

# Workspace를 통한 UserControl끼리의 값 전달(ContentControl)

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

###### [static class를 활용한 싱글톤 데이터 교환 구조](static-class를-활용한-싱글톤-데이터-교환-구조)
###### [Top](#top)

<br/>
<br/>

***

# WPF의 다양한 프로젝트/프로젝트 참조하기
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

<br/>

  - 다른 프로젝트 참조하기
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

###### [WPF의 다양한 프로젝트/프로젝트 참조하기](#wpf의-다양한-프로젝트프로젝트-참조하기)
###### [Top](#top)

<br/>
<br/>

***

# CommunityToolkit.Mvvm(Nuget패키지)

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/0418cf8b-2268-476a-8761-f46268f2e505)

  - INotifyPropertyChanged
    - ObservableObject을 상속하고, OnPropertyChanged함수로 사용한다
  - RelayCommand
    - 아래의 #MainWindowViewModel.cs코드에서 4가지 방법으로 제시했다

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
    <Window.DataContext>
        <local:MainWindowViewModel/>
    </Window.DataContext>

    <StackPanel>
        <Button Width="100" Height="30" Content="{Binding num}" Command="{Binding ClickBtn}"/>
        <Button Width="100" Height="30" Content="{Binding num}" Command="{Binding ClickBtn2}"/>
    </StackPanel>
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
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
    }
}
~~~

<br/>

#MainWindowViewModel.cs
~~~c#
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using System.Windows.Input;

namespace WpfApp1
{
    public class MainWindowViewModel : ObservableObject
    {
        
        private int Num;
        public int num
        {
            get { return Num; }
            set
            {
                Num = value;
                OnPropertyChanged("Num");

            }
        }


        // 1번째
        private RelayCommand? _clickBtn1;
        public ICommand ClickBtn1 => _clickBtn1 = new RelayCommand(Increase);


        // 2번째
        private ICommand _clickBtn2;
        public ICommand ClickBtn2
        {
            get
            {
                if (_clickBtn2 == null)
                {
                    _clickBtn2 = new RelayCommand(Increase);
                }
                return _clickBtn2;
            }
        }
       

        // 3번째
        public IRelayCommand ClickBtn3
        {
            get { return new RelayCommand(Decrease);}
        }


        // 4번째
        public IRelayCommand ClickBtn4;
        public MainWindowViewModel()
        {
            ClickBtn4 = new RelayCommand(Decrease);
        }


        private void Increase()
        {
            num++;
        }

        private void Decrease()
        {
            num--;
        }
    }
}
~~~

###### [CommunityToolkit.Mvvm(Nuget패키지)](#communitytoolkitmvvmnuget패키지)
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

# 통신Class
  - Socket
  - UdpClient
    - UDP (User Datagram Protocol)를 사용하는 네트워크 통신을 위한 클래스로 System.Net.Sockets 네임스페이스에서 제공됩니다. UDP는 신뢰성이 낮지만 빠른 데이터 전송에 사용됩니다.
  - TcpListener, TcpClient
    - System.Net.Sockets 네임스페이스에서 제공됩니다. TCP/IP 기반의 네트워크 통신을 위해 사용됩니다. 클라이언트 및 서버 어플리케이션을 개발하는 데 사용됩니다.
  - HttpClient
    - System.Net.Http 네임스페이스에서 제공되며, HTTP 프로토콜을 사용하여 웹 서버와 통신하는 데 사용됩니다. RESTful API 호출 및 웹 리소스 다운로드 등에 유용합니다.
  - HttpWebRequest, HttpWebResponse
    - System.Net 네임스페이스에서 제공되며, HTTP 요청을 수동으로 작성하고 처리하는 데 사용됩니다. HttpClient와 유사한 기능을 제공하지만 더 낮은 수준의 제어가 가능합니다.
  - WebClient
    - System.Net 네임스페이스에서 제공되며, 웹 리소스를 다운로드하고 업로드하는 데 사용됩니다. 간단한 웹 요청 및 파일 다운로드에 유용합니다.
  - WebSocket
    - System.Net.WebSockets 네임스페이스에서 제공되며, 양방향 실시간 통신을 위한 WebSocket 프로토콜을 지원합니다. 웹 소켓 서버 및 클라이언트를 개발하는 데 사용됩니다.

###### [통신Class](#통신class)
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

# Http,Https통신 서버(에러)
  - http, https프로토콜을 받아서 reponse를 보내는 서버를 만들어 보고 싶어서, TcpListener를 사용해서 데이터를 보내려고 했는데, 웹브라우저에서는 데이터를 송신받기 성공하지만, 나머지 클라이언트 에서는 송신이 받아지지 않는다..이유를 알 수 가 없다. 그냥 Socket통신으로 제작하기로 생각했다..

#MainWindow.xaml.cs
~~~c#
﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Sockets;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WPFHttp
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            Run();
        }

        async private void Run()
        {
            // 포트 지정
            int port = 8080;

            // tcp생성
            TcpListener listener = new TcpListener(IPAddress.Any, port);
            listener.Start();

            while (true)
            {
                // 클라이언트 접속 대기
                TcpClient client = await listener.AcceptTcpClientAsync();
                _ = HandleClientAsync(client);
            }
        }

        static async Task HandleClientAsync(TcpClient client)
        {
            // 클라이언트와 연결된 소켓에서 스트림을 얻어옵니다.
            using (NetworkStream stream = client.GetStream())
            using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
            using (StreamWriter writer = new StreamWriter(stream, Encoding.UTF8))
            {

                // 클라이언트로부터 요청을 받아옵니다.
                string? requestLine = await reader.ReadLineAsync();
                if (!string.IsNullOrEmpty(requestLine))
                {
                    string[] requestParts = requestLine.Split(' ');
                    if (requestParts.Length == 3)
                    {
                        // "GET, POST" 가져오기
                        string method = requestParts[0];

                        // 경로 가져오기
                        string path = requestParts[1];

                        if (method == "GET")
                        {
                            string response1 = $"HTTP/1.1 200 OK\r\nContent-Type: text/plain; charset=utf-8\r\n\r\n";
                            string response2 = $"안녕";
                            await writer.WriteAsync(response1 + response2);
                        }
                        else if (method == "POST")
                        {
                            int contentLength = 0;
                            string? line;

                            // 헤더 읽기 (Content-Length 찾기)
                            while (!string.IsNullOrEmpty(line = await reader.ReadLineAsync()))
                            {
                                if (line.StartsWith("Content-Length:", StringComparison.OrdinalIgnoreCase))
                                {
                                    string lengthValue = line.Split(':')[1].Trim();
                                    contentLength = int.Parse(lengthValue);
                                }
                            }

                            // contentLength 바이트 만큼 읽기
                            char[] buffer = new char[contentLength];
                            await reader.ReadAsync(buffer, 0, contentLength);
                            string responseData2 = new string(buffer);


                            // requestBody에 POST 본문 데이터가 포함됩니다.
                            string responseData1 = $"HTTP/1.1 200 OK\r\nContent-Type: text/plain; charset=utf-8\r\n\r\n";
                            //string responseData2 = $"{requestBody}";
                            await writer.WriteAsync(responseData1 + responseData2);
                        }
                        else
                        {
                            string response = $"HTTP/1.1 405 Method Not Allowed\r\n\r\nMethod not supported.";
                            await writer.WriteAsync(response);
                        }
                    }
                }
            }

            client.Close();
        }
    }
}
~~~

######  [Http,Https통신 서버(에러)](#httphttps통신-서버에러)
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

# 디자인패턴
  - 개발할 때, 기본적으로 프레임워크에서 제공한대로 개발할 수 있지만, View와 뒷단에 대한 의존성이나, 확장성을 고려하고, 또한 디자인과 개발자의 분리를 위해 디자인 패턴으로 많은 프로그램이 개발 된다

<br/>

  - [MVC](#MVC)
  - [MVP](#MVP)
  - [MVVM](#MVVM)

###### [디자인패턴](#디자인패턴)
###### [Top](#top)

<br/>
<br/>

# MVC
  - Model, View, Controller
  - Model: 데이터와 비즈니스 로직을 관리한다
  - View: 사용자 인터페이스를 표시하고 사용자 입력을 받는다.
  - Controller: 사용자 입력을 처리하고 Model 및 View 간의 통신을 관리한다

<br/>

  - Controller안에 View와 Model이 정의 되어 있고,View의 이벤트가 Controller로 들어온다. 그리고 그 이벤트 안에서, Model의 데이터를 갱신하고 Model데이터로 View를 갱신한다
  - Controller안에 는 View가 여러개 있을 수 있기 때문에 Model에 적합한 View를 선택해 갱신한다
  - Controller가 여러 개의 View를 선택하여 Model을 나타낼 수 있다
  - View와 Model 서로간의 의존성이 높다는 단점이 있다

<br/>

  - 모든 Input은 Controller로 전달된다
  - Controller는 Input을 확인하고 Model을 업데이트한다
  - 업데이트 결과에 따라 View를 선택한다.(하나의 Controller는 View를 선택할 수 있기 때문에 1:n 관계로, 여러 개의 View를 관리할 수 있다.)
  - Controller는 Model을 나타내 줄 View를 선택만 할 뿐, 직접 업데이트하지는 않는다.(View는 Controller를 알지 못한다.)
  - View는 Model을 이용하여 화면을 나타낸다

<br/>

// Model
#TextModel.cs
~~~C#
namespace WpfApp1
{
    public class TextModel
    {
        public string Text { get; set; } = "Hello World";
    }
}
~~~

<br/>

// View
#MainWindow.xaml
~~~C#
<Window x:Class="WpfApp1.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApp1"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <StackPanel>
        <Button x:Name="TextChangeBtn" Width="100" Height="30" Content="버튼"/>
        <TextBlock x:Name="InputText"/>
    </StackPanel>
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~C#
using System.Windows;
namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private TextController controller;
        public MainWindow()
        {
            InitializeComponent();

	// View 와 Controller연결
            controller = new TextController(this);
        }
    }
}
~~~

<br/>

// Controller
#TextController.cs
~~~C#
using System;

namespace WpfApp1
{
    public class TextController
    {
        private TextModel model;
        private MainWindow view;

        public TextController(MainWindow view)
        {
            this.view = view;
            model = new TextModel();
            this.view.TextChangeBtn.Click += UpdateText;
        }

        private void UpdateText(object sender, EventArgs e)
        {
            view.InputText.Text = model.Text;
        }
    }
}
~~~

###### [디자인패턴](#디자인패턴)
###### [Top](#top)

<br/>
<br/>

# MVP
  - Model, View, Presenter
  - Model: 데이터와 비즈니스 로직을 관리한다
  - View: 사용자 인터페이스를 표시하고 사용자 입력을 받는다.
  - Presenter: View에서 요청한 정보를 Model로부터 가공하여 View로 전달한다. Model과 View의 다리 같은 역할
  - Presenter는 View를 간접 참조한다

<br/>

  - Presenter를 통해 Model과 View를 완벽히 분리해 주기 때문에, MVC 패턴에 있던 Model과 View 사이의 의존성을 해결하였다.
  - Presenter와 View는 1:1 관계이기 때문에 View와 Presenter 사이의 의존성이 매우 강하다.

<br/>

  - 사용자의 Action을 View로 받는다
  - View에서 받은 이벤트를 Presenter에게 전달한다
  - Presenter에서 Model로 데이터를 요청한다
  - Model에서 Presenter로 요청에 따른 응답을 한다
  - Presenter에서 결과를 바인딩하여 View로 통보한다
  - 받은 정보를 토대로 View를 업데이트한다

<br/>

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
    <StackPanel>
        <Button x:Name="TextChangeBtn" Width="100" Height="30" Content="버튼"/>
        <TextBlock x:Name="InputText"/>
    </StackPanel>
</Window>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
using System;
using System.Windows;
namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window, ITextView
    {
        public event EventHandler TextChangeClicked;

        private TextPresenter presenter;
        public MainWindow()
        {
            InitializeComponent();
            presenter = new TextPresenter(this);
            TextChangeBtn.Click += (s, e) => TextChangeClicked?.Invoke(this, e);
        }

        public void SetText(string text)
        {
            InputText.Text = text;
        }
    }

    public interface ITextView
    {
        event EventHandler TextChangeClicked;
        void SetText(string text);
    }
}
~~~

<br/>

#TextModel.cs
~~~c#
namespace WpfApp1
{
    public class TextModel
    {
        public string Text { get; set; } = "Hello World";
    }
}
~~~

<br/>

#TextPresenter.cs
~~~c#
using System;

namespace WpfApp1
{
    public class TextPresenter
    {
        private TextModel model;
        private ITextView view;

        public TextPresenter(ITextView view)
        {
            this.view = view;
            this.view.TextChangeClicked += UpdateText;
            model = new TextModel();
        }

        private void UpdateText(object sender, EventArgs e)
        {
            view.SetText(model.Text);
        }
    }
}
~~~

###### [디자인패턴](#디자인패턴)
###### [Top](#top)

<br/>
<br/>

# MVVM
  - Model, View, ViewModel
  - View를 추상화한 ViewModel을 사용하기 때문에 View에 대한 참조가 없다.
  - DataContext를 사용하여 MVP의 문제 였던 View와 ViewModel의 의존성을 느슨하게 만들었다, 또한 Binding을 사용하여, 그 어떤것도 직접적인 참조없이 가능하게 되었다

###### [디자인패턴](#디자인패턴)
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
