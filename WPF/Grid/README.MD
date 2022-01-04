
##### - number : number만큼의 크기를 설정
##### - Auto : Grid가 가지고 있는 하위 content의 크기만큼의 크기를 가짐
##### - number* : 남은 공간을 등분하여 크기를 가짐 ex) 2* 과 1* : 남은 크기를 2:1비율로 가져감  

```
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
</Window>

```
<img src="https://user-images.githubusercontent.com/39178978/147874900-2aab4125-8b19-4c41-9804-d39d12ac353b.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

##### - 다양한 Element안에 Grid를 만들 수 있음

```
<Button Grid.Column="2" Height="150" Width="150">
    <Grid Width="150" Height="150">
        <Grid.RowDefinitions>
            <RowDefinition Height="7*"/>
            <RowDefinition Height="3*"/>
        </Grid.RowDefinitions>
        <Image Source="사진" Grid.Row="0"/>
    </Grid>
</Button>
```

<img src="https://user-images.githubusercontent.com/39178978/148070083-3a53e213-6cbc-43dd-88b6-81cba330675f.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

##### - IsSharedSizeScope속성을 이용해 Grid의 폭과 넓이 맟주기

```
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
```

<img src="https://user-images.githubusercontent.com/39178978/148079616-5703ff5f-5acd-4e5a-b50f-35f8e8008ad7.png">
