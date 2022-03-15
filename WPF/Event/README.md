
##### - WPF는 일반적인 이벤트보다 더욱 견고한 Routed Event를 사용함
  - 이벤트의 라우팅은 버블링(bubbling), 터널링(tunneling) 2가지 이다.
    - 터널링 : Root에서 부터 시작해서, 이벤트를 발생시킨 대상 요소를 찾아 내려가는 방식
      - 터널링 이벤트의 경우 이름이 항상 Preview로 시작하며 우선적으로 발생한다.
    - 버블링 : 이벤트를 발생시킨 대상 요소에 붙은 이벤트 핸들러를 찾는 방식. 즉, 그 요소 트리의 루트에 도달할 때까지 부모 요소들을 차례로 찾아나가는 방식
    - 직접전달(Direct) : 이벤트를 발생시킨 요소에 등록된 이벤트 핸들러에만 이벤트가 통지되며 어떤 라우팅도 발생하지 않는다.
      - 이벤트가 엘리먼트 트리를 따라서 위나 아래로 이동할 때 이를 라우팅이라고 한다.
  
대부분은 버블링 이벤트만을 처리하게 되며, Preview 이벤트의 경우 이벤트 발생을 막거나 일반적인 이벤트 처리 전에 부모의 요소에 처리해야할 코드가 있는 경우에만 사용한다.

<br/>

Window - StackPanel - Button 과 같은 구조로있을경우 발생 순서 
~~~
1.PreviewMouseDown - Window 
2.PreviewMouseDown - StackPanel
3.PreviewMouseDown - Button
4.MouseDown - Button
5.MouseDown - StackPanel
6.MouseDown - Window
~~~

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

##### - 다양한 MouseEvent
  - MouseDown : 누를때
  - MouseUp : 때질때
  - MouseLeftButtonDown
  - MouseLeftButtonUp
  - MouseRightButtonDown
  - MouseRightButtonUp
  - MouseEnter : 마우스가 들어갈때
  - MouseLeave : 마우스가 나올때
  - MouseMove : 들어가 있는 동안 발생
  - MouseWheel : 마우스 휠이 돌아가면 발생

<br/>
<br/>

  - MouseDown이벤트 처리

#Mainwindow.xaml
~~~c#
<Canvas>
    <TextBlock Canvas.Top="40" Canvas.Left="120" Text="StackPanel"/>
    <StackPanel x:Name="StackPanel" Background="Aqua" Width="170" Height="120" Canvas.Top="60" Canvas.Left="65" MouseDown="StackPanel_MouseDown">
        <TextBlock Text="Button" HorizontalAlignment="Center" Margin="0 10 0 0"/>
        <TextBlock x:Name="Button" Background="ForestGreen" Width="70" Height="70" MouseDown="Button_MouseDown">
            <StackPanel>
                <TextBlock Text="Ellipse" Margin="18 7 0 0"/>
                <Ellipse x:Name="Ellipse" Fill="Red" Width="30" Height="30"  MouseDown="Ellipse_MouseDown" Margin="18 0 0 0"/>
            </StackPanel>
        </TextBlock>
    </StackPanel>
</Canvas>
~~~

<br/>

#Mainwindow.xaml.cs
~~~c#
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }
    private void StackPanel_MouseDown(object sender, MouseButtonEventArgs e)
    {
        Debug.WriteLine("StackPanel_MouseDown");
    }

    private void Button_MouseDown(object sender, MouseButtonEventArgs e)
    {
        Debug.WriteLine("Button_MouseDown");
    }

    private void Ellipse_MouseDown(object sender, MouseButtonEventArgs e)
    {
        Debug.WriteLine("Ellipse_MouseDown");
    }
}
~~~

<br/>

~~~
출력값(Ellipse 클릭시) :
Ellipse_MouseDown
Button_MouseDown
StackPanel_MouseDown
~~~

<img src="https://user-images.githubusercontent.com/39178978/158401621-91ed2c92-3eb0-4ccb-adce-45deeda958af.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - PreviewMouseDown이벤트 처리

#Mainwindow.xaml
~~~c#
<Canvas>
    <TextBlock Canvas.Top="40" Canvas.Left="120" Text="StackPanel"/>
    <StackPanel x:Name="StackPanel" Background="Aqua" Width="170" Height="120" Canvas.Top="60" Canvas.Left="65" MouseDown="StackPanel_MouseDown" PreviewMouseDown="StackPanel_PreviewMouseDown">
        <TextBlock Text="Button" HorizontalAlignment="Center" Margin="0 10 0 0"/>
        <TextBlock x:Name="Button" Background="ForestGreen" Width="70" Height="70" MouseDown="Button_MouseDown" PreviewMouseDown="Button_PreviewMouseDown">
            <StackPanel>
                <TextBlock Text="Ellipse" Margin="18 7 0 0"/>
                <Ellipse x:Name="Ellipse" Fill="Red" Width="30" Height="30"  MouseDown="Ellipse_MouseDown" Margin="18 0 0 0" PreviewMouseDown="Ellipse_PreviewMouseDown"/>
            </StackPanel>
        </TextBlock>
    </StackPanel>
</Canvas>
~~~

<br/>

#Mainwindow.xaml.cs
~~~c#
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }
    private void StackPanel_MouseDown(object sender, MouseButtonEventArgs e)
    {
        Debug.WriteLine("StackPanel_MouseDown");
    }

    private void Button_MouseDown(object sender, MouseButtonEventArgs e)
    {
        Debug.WriteLine("Button_MouseDown");
    }

    private void Ellipse_MouseDown(object sender, MouseButtonEventArgs e)
    {
        Debug.WriteLine("Ellipse_MouseDown");
    }

    private void StackPanel_PreviewMouseDown(object sender, MouseButtonEventArgs e)
    {
        Debug.WriteLine("StackPanel_PreviewMouseDown");
    }

    private void Button_PreviewMouseDown(object sender, MouseButtonEventArgs e)
    {
        Debug.WriteLine("Button_PreviewMouseDown");
    }

    private void Ellipse_PreviewMouseDown(object sender, MouseButtonEventArgs e)
    {
        Debug.WriteLine("Ellipse_PreviewMouseDown");
    }
}
~~~

<br/>

~~~
출력값(Ellipse 클릭시) :
StackPanel_PreviewMouseDown
Button_PreviewMouseDown
Ellipse_PreviewMouseDown
Ellipse_MouseDown
Button_MouseDown
StackPanel_MouseDown
~~~

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - PreviewMouseDown이벤트 처리 + e.Handled = true추가

#Mainwindow.xaml
~~~c#
<Canvas>
    <TextBlock Canvas.Top="40" Canvas.Left="120" Text="StackPanel"/>
    <StackPanel x:Name="StackPanel" Background="Aqua" Width="170" Height="120" Canvas.Top="60" Canvas.Left="65" MouseDown="StackPanel_MouseDown" PreviewMouseDown="StackPanel_PreviewMouseDown">
        <TextBlock Text="Button" HorizontalAlignment="Center" Margin="0 10 0 0"/>
        <TextBlock x:Name="Button" Background="ForestGreen" Width="70" Height="70" MouseDown="Button_MouseDown" PreviewMouseDown="Button_PreviewMouseDown">
            <StackPanel>
                <TextBlock Text="Ellipse" Margin="18 7 0 0"/>
                <Ellipse x:Name="Ellipse" Fill="Red" Width="30" Height="30"  MouseDown="Ellipse_MouseDown" Margin="18 0 0 0" PreviewMouseDown="Ellipse_PreviewMouseDown"/>
            </StackPanel>
        </TextBlock>
    </StackPanel>
</Canvas>
~~~

<br/>

#Mainwindow.xaml.cs
~~~c#
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }
    private void StackPanel_MouseDown(object sender, MouseButtonEventArgs e)
    {
        Debug.WriteLine("StackPanel_MouseDown");
    }

    private void Button_MouseDown(object sender, MouseButtonEventArgs e)
    {
        Debug.WriteLine("Button_MouseDown");
    }

    private void Ellipse_MouseDown(object sender, MouseButtonEventArgs e)
    {
        Debug.WriteLine("Ellipse_MouseDown");
    }

    private void StackPanel_PreviewMouseDown(object sender, MouseButtonEventArgs e)
    {
        Debug.WriteLine("StackPanel_PreviewMouseDown");
    }

    private void Button_PreviewMouseDown(object sender, MouseButtonEventArgs e)
    {
        Debug.WriteLine("Button_PreviewMouseDown");
        e.Handled = true;

    }

    private void Ellipse_PreviewMouseDown(object sender, MouseButtonEventArgs e)
    {
        Debug.WriteLine("Ellipse_PreviewMouseDown");
    }
}
~~~

<br/>

~~~
출력값(Ellipse 클릭시) :
StackPanel_PreviewMouseDown
Button_PreviewMouseDown
~~~
e.Handled = true 를 이용하게 되면, 거기까지만 이벤트가 진행 된다

