##### - XAML에서 직접 Button 이벤트 만드는 방법

#XAML
~~~
<Grid>
    <Button Width="100" Height="100" Content="버튼" Click="Button_Click"/>
</Grid>
~~~

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
        MessageBox.Show("클릭");
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/151135525-1bbd60ec-f756-408b-9a57-7476f15ee9cc.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

##### - MVVM패턴을 위 Button에 Command로 Click이벤트를 사용하는 방법

#XAML
~~~
<Grid>
    <Button Width="100" Height="100" Content="버튼" Command="{Binding OneClick}"/>
</Grid>
~~~

#XAML.cs
~~~
using System.Windows.Input; <- ICommand실행시 참조필요

public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        this.DataContext = this;
    }

    private Command m_OneClick;
    public ICommand OneClick
    {
        get { return m_OneClick = new Command(OneClickEvent); }
    }

    private void OneClickEvent(object obj)
    {
        MessageBox.Show("클릭 이벤트 발생");
    }
}
~~~

#Command.cs
~~~
using System.Windows.Input;

public class Command : ICommand
{
    Action<object> _execute;

    public event EventHandler? CanExecuteChanged;

    public Command(Action<object> execute)
    {
        _execute = execute;
    }

    public bool CanExecute(object? parameter)
    {
        return true;
    }

    public void Execute(object? parameter)
    {
        _execute(parameter);
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/151136487-7cbf3db9-aa5e-41f8-aef9-1401baabe5af.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

##### - #XAML.cs부분을 이렇게 따로 수정해서 사용하는것이 보기 편함

#XAML.cs
~~~
using System.Windows.Input;

public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        this.DataContext = this;
        OneClick = new Command(OneClickEvent);
    }

    public ICommand OneClick { get; set; }

    private void OneClickEvent(object obj)
    {
        MessageBox.Show("클릭 이벤트 발생");
    }
}
~~~
