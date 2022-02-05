
##### - ObservableCollection 과 List차이
  - WPF에서는 ListBox와ListView같은 곳에서 바인딩 사용시(ItemSource) ObserableColletion을 대부분 사용하게 된다. ObserableColletion는 UI에서 실시간으로 반영을 해주기 때문이다
  - 그러나 일반적인 List<T>는 변경된 List의 내용을 UI 에서 실시간으로 반영하지 않는다

***
<br/> 

  - List<T>  
  
#XAML
~~~
<StackPanel>
    <ListBox ItemsSource="{Binding Apple_list}">
        <ListBox.ItemTemplate>
            <DataTemplate>
                <Grid>
                    <Grid.ColumnDefinitions>
                        <ColumnDefinition/>
                        <ColumnDefinition/>
                    </Grid.ColumnDefinitions>
                    <TextBlock Text="{Binding Name}"/>
                    <TextBlock Grid.Column="1" Text="{Binding Price}"/>
                </Grid>
            </DataTemplate>
        </ListBox.ItemTemplate>
    </ListBox>
    <Button x:Name="btn" Width="100" Content="버튼" Click="btn_Click"/>
</StackPanel>
~~~

<br/>
  
#XAML.cs
~~~
public partial class MainWindow : Window, INotifyPropertyChanged
{
    public MainWindow()
    {
        InitializeComponent();
        this.DataContext = this;
        Apple_list = new List<Apple>();

    }

    private List<Apple> m_Apple_list;
    public List<Apple> Apple_list
    {
        get { return m_Apple_list; }
        set
        {
            if (m_Apple_list != value)
            {
                m_Apple_list = value;
                Norty("Apple_list");
            }
        }
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Norty(string name)
    {
        PropertyChangedEventHandler handler = PropertyChanged;
        if (handler != null)
        {
            handler(this, new PropertyChangedEventArgs(name));
        }
    }
    #endregion

    private void btn_Click(object sender, RoutedEventArgs e)
    {
        Apple_list.Add(new Apple() { Name = "사과", Price = 1000 });
    }
}

public class Apple : INotifyPropertyChanged
{
    private string m_Name = "0";
    public string Name
    {
        get { return m_Name; }
        set
        {
            if (m_Name != value)
            {
                m_Name = value;
                Norty("Price");
            }
        }
    }

    private int m_Price = 0;
    public int Price
    {
        get { return m_Price; }
        set
        {
            if (m_Price != value)
            {
                m_Price = value;
                Norty("Price");
            }
        }
    }

    public Apple()
    {

    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Norty(string name)
    {
        PropertyChangedEventHandler handler = PropertyChanged;
        if (handler != null)
        {
            handler(this, new PropertyChangedEventArgs(name));
        }
    }
    #endregion
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152622781-0aeb05bd-ffef-4ab3-a79c-a3df31d9b71d.png">
  - 버튼 클릭시 List가 만들어 지고 있지만, UI에 실시간으로 반영되고 있지 않다.
<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - ObservableCollection  

#XAML.cs
~~~
public partial class MainWindow : Window, INotifyPropertyChanged
{
    public MainWindow()
    {
        InitializeComponent();
        this.DataContext = this;
        Apple_list = new ObservableCollection<Apple>();

    }

    private ObservableCollection<Apple> m_Apple_list;
    public ObservableCollection<Apple> Apple_list
    {
        get { return m_Apple_list; }
        set
        {
            if (m_Apple_list != value)
            {
                m_Apple_list = value;
                Norty("Apple_list");
            }
        }
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Norty(string name)
    {
        PropertyChangedEventHandler handler = PropertyChanged;
        if (handler != null)
        {
            handler(this, new PropertyChangedEventArgs(name));
        }
    }
    #endregion

    private void btn_Click(object sender, RoutedEventArgs e)
    {
        Apple_list.Add(new Apple() { Name = "사과", Price = 1000 });
    }
}

public class Apple : INotifyPropertyChanged
{
    private string m_Name = "0";
    public string Name
    {
        get { return m_Name; }
        set
        {
            if (m_Name != value)
            {
                m_Name = value;
                Norty("Price");
            }
        }
    }

    private int m_Price = 0;
    public int Price
    {
        get { return m_Price; }
        set
        {
            if (m_Price != value)
            {
                m_Price = value;
                Norty("Price");
            }
        }
    }

    public Apple()
    {

    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Norty(string name)
    {
        PropertyChangedEventHandler handler = PropertyChanged;
        if (handler != null)
        {
            handler(this, new PropertyChangedEventArgs(name));
        }
    }
    #endregion
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152622892-24a626c9-c433-48a7-86e7-a229d61311ab.png">
  - List가 만들어지면서 UI에 실시간으로 반영되고 
