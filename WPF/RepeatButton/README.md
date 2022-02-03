
##### - RepeatButton : 클릭을 눌르고 있으면 계속 이벤트가 발생

<br/>

~~~
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
