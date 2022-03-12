#MainWindow.xaml
~~~c#
<Grid>
    <Grid.ColumnDefinitions>
        <ColumnDefinition/>
        <ColumnDefinition/>
    </Grid.ColumnDefinitions>

    <local:UserControl1 Grid.Column="0" Grid.Row="0"></local:UserControl1>
    <local:UserControl2 Grid.Column="1" Grid.Row="0"></local:UserControl2>
</Grid>
~~~

<br/>

#UserControl1.xaml
~~~c#
<StackPanel Background="White" VerticalAlignment="Center">
    <TextBlock Text="UserControl1" FontSize="20" HorizontalAlignment="Center"/>
    <TextBox Width="100" HorizontalAlignment="Center" Margin="5" Text="{Binding UserControl1_text, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"/>
    <Button Width="100" Height="30" Content="1->2" Margin="5" Command="{Binding Oneclick}"/>
</StackPanel>
~~~

<br/>

#UserControl1.xaml.cs
~~~c#
public partial class UserControl1 : UserControl
{
    public UserControl1()
    {
        InitializeComponent();
        this.DataContext = Workspace.Instance.userControl1_model;
    }
}
~~~

<br/>

#UserControl1_model.cs
~~~c#
public class UserControl1_model : INotifyPropertyChanged
{

    private string m_UserControl1_text;
    public string UserControl1_text
    {
        get { return m_UserControl1_text; }
        set
        {
            if (m_UserControl1_text != value)
            {
                m_UserControl1_text = value;
                Notify("UserControl1_text");
                Workspace.Instance.userControl2_model.UserControl2_text = value;
            }
        }
    }

    private Command m_Oneclick;
    public ICommand Oneclick
    {
        get { return m_Oneclick = new Command(Oneclickevent); }
    }

    private void Oneclickevent(object obj)
    {
        Workspace.Instance.userControl2_model.UserControl2_textblock = UserControl1_text;
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

#UserControl2.xaml
~~~c#
<StackPanel Background="White" VerticalAlignment="Center">
    <TextBlock x:Name="tblock" Text="UserControl2" FontSize="20" HorizontalAlignment="Center"/>
    <TextBox Width="100" HorizontalAlignment="Center" Margin="5" Text="{Binding UserControl2_text, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"/>
    <TextBlock Width="100" HorizontalAlignment="Center" Margin="5" Text="{Binding UserControl2_textblock, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"/>
</StackPanel>
~~~

<br/>

#UserControl2.xaml.cs
~~~c#
public partial class UserControl2 : UserControl
{
    public UserControl2()
    {
        InitializeComponent();
        this.DataContext = Workspace.Instance.userControl2_model;
    }
}
~~~

<br/>

#UserControl2_model.cs
~~~c#
public class UserControl2_model : INotifyPropertyChanged
{
    public UserControl2_model()
    {

    }

    private string m_UserControl2_text;
    public string UserControl2_text
    {
        get { return m_UserControl2_text; }
        set
        {
            if (m_UserControl2_text != value)
            {
                m_UserControl2_text = value;
                Notify("UserControl2_text");
                Workspace.Instance.userControl1_model.UserControl1_text = value;
            }
        }
    }

    private string m_UserControl2_textblock;
    public string UserControl2_textblock
    {
        get { return m_UserControl2_textblock; }
        set
        {
            if (m_UserControl2_textblock != value)
            {
                m_UserControl2_textblock = value;
                Notify("UserControl2_textblock");
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

#Workspace.cs
~~~c#
class Workspace : INotifyPropertyChanged
{
    static Workspace m_Instance = new Workspace();

    public static Workspace Instance
    {
        get { return m_Instance; }
    }

    private UserControl1_model m_userControl1_model = new UserControl1_model();
    public UserControl1_model userControl1_model
    {
        get { return m_userControl1_model; }
        set
        {
            if (m_userControl1_model != value)
            {
                m_userControl1_model = value;
                Notify("userControl1_model");

            }
        }
    }

    private UserControl2_model m_userControl2_model = new UserControl2_model();
    public UserControl2_model userControl2_model
    {
        get { return m_userControl2_model; }
        set
        {
            if (m_userControl2_model != value)
            {
                m_userControl2_model = value;
                Notify("userControl2_model");
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

<img src="https://user-images.githubusercontent.com/39178978/158002074-53c25c5e-e955-44b3-8f25-03c27f839310.gif" height="400" width="400">
