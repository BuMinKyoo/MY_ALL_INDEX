
##### - Popup : Popup생성
  - Placement : 어디서 팝업창이 뜰지 알려줌
  - HorizontalOffset : 팝업 위치를 옮길 수 있음
  - VerticalOffset : 팝업 위치를 옮길 수 있음
  - AllowsTransparency : 팝업창의 배경을 투명으로 할 수 있음
  - IsOpen : 팝업을 띄워주고 닫아줌 

<br/>

#XAML
~~~
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

#XAML.cs
~~~
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

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - AllowsTransparency가 False 일때, Ellipse주변에 검정색 Background가 남아 있다

#XAML
~~~
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

<br/><br/>

  - AllowsTransparency가 True 일때, Ellipse주변에 검정색 Background가 없어 진다

#XAML
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

