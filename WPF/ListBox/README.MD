
##### - ListBox : List목록을 만들어줌
  - ListBoxItem : List내부의 목록을 만들어줌

<br/>

#XAML
~~~
<ListBox>
    <ListBoxItem Content="사과"/>
    <ListBoxItem Content="포도"/>
    <ListBoxItem Content="배"/>
    <ListBoxItem Content="딸기"/>
    <ListBoxItem Content="메론"/>
</ListBox>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152623676-b2a1e970-68a7-4c82-9c6a-9b2edbd7df18.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - ListBoxItem목록에서 Content출력하기  

<br/>

#XAML
~~~
<StackPanel>
    <ListBox x:Name="listbox">
        <ListBoxItem Content="사과"/>
        <ListBoxItem Content="포도"/>
        <ListBoxItem Content="배"/>
        <ListBoxItem Content="딸기"/>
        <ListBoxItem Content="메론"/>
    </ListBox>
    <Button Width="100" Content="선택" Click="Button_Click"/>
</StackPanel>
~~~

<br/>

#XAMLcs
~~~
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        MessageBox.Show(((ListBoxItem)listbox.SelectedItem).Content.ToString());
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152624081-24ddc690-9abe-4806-8450-6dd4b2128632.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - ListBox바인딩 및 MessageBox로 출력하기    

#XAML
~~~
<StackPanel>
    <ListBox x:Name="listbox" ItemsSource="{Binding Apple_list}">
        <ListBox.ItemTemplate>
            <DataTemplate>
                <Grid>
                    <Grid.ColumnDefinitions>
                        <ColumnDefinition/>
                        <ColumnDefinition/>
                    </Grid.ColumnDefinitions>
                    <TextBlock Text="{Binding Name}"/>
                    <TextBlock Grid.Column="1" Text="{Binding Price}" Margin="3 0"/>
                </Grid>
            </DataTemplate>
        </ListBox.ItemTemplate>
    </ListBox>
    <Button Width="100" Content="선택" Click="Button_Click"/>
</StackPanel>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152624154-53635d8d-7488-4f20-8a47-f0c3e11f4f62.png">

<br/>

#XAML.cs
~~~
public partial class MainWindow : Window, INotifyPropertyChanged
{
    public MainWindow()
    {
        InitializeComponent();
        this.DataContext = this;
        Apple_list = new ObservableCollection<Apple>();
        Apple_list.Add(new Apple() { Name = "사과", Price = 1000});
        Apple_list.Add(new Apple() { Name = "포도", Price = 2000});
        Apple_list.Add(new Apple() { Name = "배", Price = 3000});

    }
    private void Button_Click(object sender, RoutedEventArgs e)
    {
        MessageBox.Show("이름 : " + ((Apple)listbox.SelectedItem).Name + "\n" + "가격 : " + ((Apple)listbox.SelectedItem).Price.ToString());
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

<img src="https://user-images.githubusercontent.com/39178978/152624201-265de94a-3442-4792-90ea-dbf127bebeea.png">
