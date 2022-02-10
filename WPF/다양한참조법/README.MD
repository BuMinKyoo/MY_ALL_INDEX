
##### - WPF의 XAML에서 다양한 방법으로 참조하기(객체 만들기)

***

  - 같은 프로젝트에서 XAML.cs에 있는 Class를 XAML에서 객체로 불러오기
  - xmlns:local="clr-namespace:WpfApp16"를 사용하여 매핑하기
  - xmlns:(접두사)="clr-namespace:(namespace명)"를 사용하여 매핑하기
#XAML
~~~
<Window x:Class="WpfApp16.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:local="clr-namespace:WpfApp16"
        Title="MainWindow" Height="300" Width="300">
    <Window.Resources>
        <local:Car x:Key="car"/>
    </Window.Resources>
    <Grid>
        <Button Width="100" Height="30" Content="{StaticResource car}"/>
    </Grid>
</Window>
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
}

public class Car
{

}
~~~

<img src="https://user-images.githubusercontent.com/39178978/153410392-b60f0b35-9235-41f1-a58d-aa738a8d9496.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - 같은 프로젝트에서 .cs파일이 따로 있을경우
  - xmlns:local="clr-namespace:WpfApp16"를 사용하여 매핑하기(바로 했던 부분과 같다)
  - xmlns:(접두사)="clr-namespace:(namespace명)"를 사용하여 매핑하기

#XAML
~~~
<Window x:Class="WpfApp16.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:local="clr-namespace:WpfApp16"
        Title="MainWindow" Height="300" Width="300">
    <Window.Resources>
        <local:Car x:Key="car"/>
    </Window.Resources>
    <Grid>
        <Button Width="100" Height="30" Content="{StaticResource car}"/>
    </Grid>
</Window>
~~~

<br/>

#Class1.cs
~~~
public class Car
{
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/153411052-c2b6b3af-8b33-4e01-a021-5e314a16d363.png">

<br/>

<img src="https://user-images.githubusercontent.com/39178978/153410392-b60f0b35-9235-41f1-a58d-aa738a8d9496.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - 같은 프로젝트에서 폴더안에 .cs파일이 있을경우
  - xmlns:local="clr-namespace:WpfApp16.NewFolder" 를 사용하여 매핑하기
  - xmlns:(접두사)="clr-namespace:(namespace명).(폴더명)"

#XAML
~~~
<Window x:Class="WpfApp16.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:local="clr-namespace:WpfApp16.NewFolder"
        Title="MainWindow" Height="300" Width="300">
    <Window.Resources>
        <local:Car x:Key="car"/>
    </Window.Resources>
    <Grid>
        <Button Width="100" Height="30" Content="{StaticResource car}"/>
    </Grid>
</Window>
~~~

<br/>

#Class1.cs
~~~
public class Car
{
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/153411994-6b2087e8-73b8-4c1f-b546-453123c3b9f4.png">

<br/>

<img src="https://user-images.githubusercontent.com/39178978/153412158-c7c18ebd-cca0-4c6a-a1b2-17ac76d3ec87.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - 같은 프로젝트에서 '리소스 사전' 불러오기
~~~
<ResourceDictionary>
    <ResourceDictionary.MergedDictionaries>
        <ResourceDictionary Source="(경로/리소스사전명)"/>
    </ResourceDictionary.MergedDictionaries>
</ResourceDictionary>
~~~

을 이용하여 리소스 사전을 불러올 수 있음

<br/>

#XAML
~~~
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
~~~
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

<br/><br/>

  - 리소스사전이 NewFolder라는 폴더 안에 들어 있는 경우
~~~
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
