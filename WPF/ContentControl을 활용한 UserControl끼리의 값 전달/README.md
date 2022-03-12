#MainWindow.xaml
~~~c#
<Grid>
    <Grid.ColumnDefinitions>
        <ColumnDefinition/>
        <ColumnDefinition/>
    </Grid.ColumnDefinitions>

    <ContentControl Content="{Binding View1Content}"></ContentControl>
    <ContentControl Grid.Column="1" Content="{Binding View2Content}"></ContentControl>
</Grid>
~~~

<br/>

#UserControl1.xaml
~~~c#
<StackPanel Background="White" VerticalAlignment="Center">
    <TextBlock Text="UserControl1" FontSize="20" HorizontalAlignment="Center"/>
    <TextBox Width="100" HorizontalAlignment="Center" Margin="5" Text="{Binding UserControl1_text, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"/>
</StackPanel>
~~~

<br/>

#UserControl1.xaml.cs
~~~c#
public partial class UserControl1 : UserControl, INotifyPropertyChanged
{
    public UserControl1()
    {
        InitializeComponent();
        this.DataContext = this;
    }

    private string m_UserControl1_text;
    public string UserControl1_text
    {
        get { return m_UserControl1_text; }
        set
        {
            if (m_UserControl1_text != value)
            {
                m_UserControl1_text = value;
                RaisePropertyChanged("UserControl1_text");
                Debug.WriteLine(">>>>>>>>>>>>>>>>>>>>>>>>>>UserControl1_text 작동");
                Workspace.Instance.View2Content.UserControl2_text = value;
            }
        }
    }


    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected virtual void RaisePropertyChanged([CallerMemberName] string propertyName = null)
    {
        if (PropertyChanged != null)
            PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
    }
    #endregion
}
~~~

<br/>

#UserControl2.xaml
~~~c#
<StackPanel Background="White" VerticalAlignment="Center">
    <TextBlock x:Name="tblock" Text="UserControl2" FontSize="20" HorizontalAlignment="Center"/>
    <TextBox x:Name="tbox" Width="100" HorizontalAlignment="Center" Margin="5" Text="{Binding UserControl2_text, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"/>
</StackPanel>
~~~

<br/>

#UserControl2.xaml.cs
~~~c#
public partial class UserControl2 : UserControl, INotifyPropertyChanged
{
    public UserControl2()
    {
        InitializeComponent();
        this.DataContext = this;
    }

    private string m_UserControl2_text;
    public string UserControl2_text
    {
        get { return m_UserControl2_text; }
        set
        {
            if(m_UserControl2_text != value)
            {
                m_UserControl2_text = value;
                RaisePropertyChanged("UserControl2_text");
                Debug.WriteLine(">>>>>>>>>>>>>>>>>>>>>>>>>>UserControl2_text 작동");
            }
        }
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected virtual void RaisePropertyChanged([CallerMemberName] string propertyName = null)
    {
        if (PropertyChanged != null)
            PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
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

    private UserControl1 m_View1Content = new UserControl1();
    public UserControl1 View1Content
    {
        get { return m_View1Content; }
        set
        {
            if (m_View1Content != value)
            {
                m_View1Content = value;
                Notify("View1Content");

            }
        }
    }

    private UserControl2 m_View2Content = new UserControl2();
    public UserControl2 View2Content
    {
        get { return m_View2Content; }
        set
        {
            if (m_View2Content != value)
            {
                m_View2Content = value;
                Notify("View1Content");

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

<img src="https://user-images.githubusercontent.com/39178978/158002648-4572bcdb-a67c-4d57-b337-67e14c2d493b.gif" width="400" height="400">
