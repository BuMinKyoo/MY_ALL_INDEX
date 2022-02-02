
##### - ScrollViewer : ScrollViewer내부에 있는 객체들을 스크롤로 나타내줌
  - HorizontalScrollBarVisibility : 수평 스크롤 막대 속성
  - VerticalScrollBarVisibility : 수직 스크롤 막대 속성  

    - visible : 스크롤바 막대를 항상 표시, ScrollViewer 크기가 자식 내용보다 작을 경우에는 활성화 상태, 반대로 ScrollViewer크기가 자식 내용보다 클 경우에는 비활성화 상태가 된다.
    - Hidden : 스크롤 막대가 숨겨져 있도록 하는 속성, 자식 내용이 ScrollViewer보다 클 경우에는 내용이 잘리게 된다. 스크롤휠을 내려서 확인 가능하다
    - Auto : 스크롤이 필요 없을 만큼 창크기를 늘려주면 스크롤이 없어짐(필요한 경우에만 표시됨)
    - Disabled : 스크롤이 아예 없어짐, 창 크기를 밑으로 내려야지만 내용이 보임

<br/>

#XAML
~~~
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

<br/><br/>

  - 기본적으로, VerticalScrollBarVisibility="Visible"로 되어 있기 때문에 VerticalScrollBarVisibility="Hidden"을 해줘야 수직 스크롤 막대가 없어짐

<br/>

#XAML
~~~
<ScrollViewer HorizontalScrollBarVisibility="Visible" VerticalScrollBarVisibility="Hidden">
    <StackPanel>
        <TextBlock Background="red" Text="tb1" Height="50" TextAlignment="Center" FontSize="20" Width="300"/>
        <TextBlock Background="DarkGray" Text="tb2" Height="50" TextAlignment="Center" FontSize="20" Width="300"/>
        <TextBlock Background="Cyan" Text="tb3" Height="50" TextAlignment="Center" FontSize="20" Width="300"/>
        <TextBlock Background="Blue" Text="tb4" Height="50" TextAlignment="Center" FontSize="20" Width="300"/>
        <TextBlock Background="DarkKhaki" Text="tb5" Height="50" TextAlignment="Center" FontSize="20" Width="300"/>
        <TextBlock Background="red" Text="tb6" Height="50" TextAlignment="Center" FontSize="20" Width="300"/>
        <TextBlock Background="DarkGray" Text="tb7" Height="50" TextAlignment="Center" FontSize="20" Width="300"/>
    </StackPanel>
</ScrollViewer>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152088656-29e748e7-bede-4654-adb9-78d016d3561e.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

##### - FrameworkElement를 이용해 ScrollViewer의 시스템 whith사이즈를 불러오기
  - FrameworkElement : 아무것도 없는 공간이라고 생각하면 됨

<br/>

~~~
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
