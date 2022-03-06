##### Slider
  - Minimum 속성 : 최소 작은수 지정
  - Maximum 속성 : 최대 큰 수 지정
  - IsDirectionReversed : 슬라이더의 최대, 최소값의 위치가 바뀜(true이면 최대 최소의 방향이 바뀐다)

<br/>

  - ValueChanged 이벤트 : 슬라이더의 Value값의 변경을 감지하면 발생하는 이벤트

#XAML
~~~c#
<StackPanel VerticalAlignment="Center">
    <Slider x:Name="Red_slider" Maximum="255" Minimum="0" Margin="10" ValueChanged="ValueChanged"/>
    <Slider x:Name="Green_slider" Maximum="255" Minimum="0" Margin="10" ValueChanged="ValueChanged"/>
    <Slider x:Name="Blue_slider" Maximum="255" Minimum="0" Margin="10" ValueChanged="ValueChanged"/>
    <Rectangle x:Name="rec" Width="100" Height="100"/>
</StackPanel>
~~~

<br/>

#XAML.cs
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

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

#XAML
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

#XAML.cs
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

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - Orientation속성 : 가로 및 세로 방향을 지정 가능

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

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - 눈금(TickMark)표시 : TickPlacement 속성을 사용한다
    - None : 슬라이더의 기본값으로 눈금이 숨겨져 있는 상태
    - TopLeft : 가로슬라이더는 위쪽에 표시 또는 세로슬라이더는 왼쪽에 표시
    - BottomRight : 가로 슬라이더는 아래쪽에 표시 또는 세로 슬라이더는 오른쪽에 표시
    - Both : 가로 슬라이더는 위아래 표시 또는 세로 슬라이더는 좌우에 표시
    - TickFrequency : 눈금의 갯수를 조절

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
