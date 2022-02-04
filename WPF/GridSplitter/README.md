
##### - GridSplitter : 마우스 드래그앤 드랍으로 끌수 있는 선을 만듬
  - ShowsPreview : 마우스로 끌어서 옮길때 미리보기를 할지 안할지 설정

<br/>

~~~
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

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

##### - Thumb클래스 안에는 끌기와 관련된 것들을 제공하는것이 있음
  - DragStarted 이벤트 : 드래그 하기 시작할 때 발생하는 이벤트
  - DragCompleted 이벤트 : 사용자가 드래그를 중지하고 마우스 버튼을 놓았을 때 발생하는 이벤트
  - DragDelta 이벤트 : 마우스를 움직이면 반복적으로 이벤트가 발생한다.
  - IsDragging 속성 : 사용자가 드래그를 하는 동안에는 true, 드래그가 중지되면 false를 리턴한다.
  - CancelDrag 메소드 : 이 메소드를 호출하면 드래그 작업이 즉시 중지된다.

<br/>

#XAML
~~~
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
