
##### - ItemsSource : ItemsControl을 상속받은 컨트롤들(TabControl, ComboBox, ListBox, ListView 등)을 Binding작업할때 사용

***

<br/>

#XAML
~~~
<Grid>
    <ListView ItemsSource="{Binding Class1_list}">
        <ListView.View>
            <GridView>
                <GridViewColumn Width="100" DisplayMemberBinding="{Binding Name}"/>
                <GridViewColumn Width="100" DisplayMemberBinding="{Binding Age}"/>
            </GridView>
        </ListView.View>
    </ListView>
</Grid>
~~~

<br/>

#XAML.cs
~~~
public partial class MainWindow : Window,INotifyPropertyChanged
{
    public MainWindow()
    {
        InitializeComponent();
        Class1_list = new ObservableCollection<Class1>();
        Class1_list.Add(new Class1() { Age=10, Name="PAPA"});
        this.DataContext = this;
    }

    private ObservableCollection<Class1> m_Class1_list;
    public ObservableCollection<Class1> Class1_list
    {
        get { return m_Class1_list; }
        set
        {
            if(m_Class1_list != value)
            {
                m_Class1_list = value;
                Notify("Class1_list");
            }
        }
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propertyName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
        }
    }
    #endregion
}
~~~

<br/>

#Class1.cs
~~~
public class Class1 : INotifyPropertyChanged
{
    private string m_Name;
    public string Name
    {
        get { return m_Name; }
        set
        {
            if(m_Name != value)
            {
                m_Name = value;
                Notify("Name");
            }
        }
    }

    private int m_Age;
    public int Age
    {
        get { return m_Age; }
        set
        {
            if (m_Age != value)
            {
                m_Age = value;
                Notify("Age");
            }
        }
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propertyName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
        }
    }
    #endregion
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/154080138-6a6e136b-3475-446a-9ed4-8e56fdcc33b2.png">
