
#### - StackPanel : 자식 요소들을 행이나 열로 나열
#### - Orientation="Horizontal"을 통해 정렬 방향을 수평으로 바꿀 수 있음

~~~
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
