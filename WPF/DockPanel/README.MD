#### - DockPanel : 자식요소를 기준으로 가로 또는 세로로 정렬 할 수 있는 영역을 정의

~~~
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
