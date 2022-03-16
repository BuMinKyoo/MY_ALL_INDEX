

#MainWindow.xaml
~~~c#
<StackPanel>
    <Button Width="100" Height="30" Content="버튼" Margin="10" Click="Button_Click"/>
    <ListView x:Name="lv" Grid.Row="1" Margin="10" ItemsSource="{Binding Custlist}" >
        <ListView.View>
            <GridView>
                <GridViewColumn Width="100" Header="기업명칭" DisplayMemberBinding="{Binding CMPNY_NM}"/>
                <GridViewColumn Width="70" Header="모집인원수" DisplayMemberBinding="{Binding RCRIT_NMPR_CO}"/>
                <GridViewColumn Width="70" Header="학력" DisplayMemberBinding="{Binding ACDMCR_NM}"/>
            </GridView>
        </ListView.View>
    </ListView>
</StackPanel>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
public partial class MainWindow : Window, INotifyPropertyChanged
{
    public MainWindow()
    {
        InitializeComponent();
        this.DataContext = this;
    }

    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propName));
        }
    }
    #endregion

    private ObservableCollection<Cust> m_Custlist = new ObservableCollection<Cust>();
    public ObservableCollection<Cust> Custlist
    {
        get { return m_Custlist; }
        set
        {
            if (m_Custlist != value)
            {
                m_Custlist = value;
                Notify("Custlist");
            }
        }
    }
    private void Button_Click(object sender, RoutedEventArgs e)
    {
        string path = "http://openapi.seoul.go.kr:8088/68734f416a716e613535594b6d4f48/json/GetJobInfo/1/10/";

        string result = null;

        HttpWebRequest request = (HttpWebRequest)WebRequest.Create(path);
        HttpWebResponse response = (HttpWebResponse)request.GetResponse();

        Stream stream = response.GetResponseStream();
        StreamReader reader = new StreamReader(stream);
        result = reader.ReadToEnd();
        stream.Close();
        response.Close();

        JObject jobj = JObject.Parse(result);
        JArray array = JArray.Parse(jobj["GetJobInfo"]["row"].ToString());

        foreach (JObject itemobj in array)
        {
            string CMPNY_NM_IT = itemobj["CMPNY_NM"].ToString(); //기업명칭
            string RCRIT_NMPR_CO_IT = itemobj["RCRIT_NMPR_CO"].ToString(); //모집인원수
            string ACDMCR_NM_IT = itemobj["ACDMCR_NM"].ToString(); //학력

            Custlist.Add(new Cust() { CMPNY_NM = CMPNY_NM_IT, RCRIT_NMPR_CO = RCRIT_NMPR_CO_IT, ACDMCR_NM = ACDMCR_NM_IT});
        }
    }
}
~~~

<br/>

#Cust.cs
~~~c#
public class Cust : INotifyPropertyChanged
{
    #region INotifyPropertyChanged
    public event PropertyChangedEventHandler? PropertyChanged;
    protected void Notify([CallerMemberName] string propName = null)
    {
        if (this.PropertyChanged != null)
        {
            this.PropertyChanged(this, new PropertyChangedEventArgs(propName));
        }
    }
    #endregion

    private string m_CMPNY_NM; //기업명칭
    public string CMPNY_NM  
    {
        get { return m_CMPNY_NM; }
        set
        {
            if (m_CMPNY_NM != value)
            {
                m_CMPNY_NM = value;
                Notify("CMPNY_NM");
            }
        }
    }

    private string m_RCRIT_NMPR_CO; //모집인원수
    public string RCRIT_NMPR_CO  
    {
        get { return m_RCRIT_NMPR_CO; }
        set
        {
            if (m_RCRIT_NMPR_CO != value)
            {
                m_RCRIT_NMPR_CO = value;
                Notify("RCRIT_NMPR_CO");
            }
        }
    }

    private string m_ACDMCR_NM; //학력
    public string ACDMCR_NM
    {
        get { return m_ACDMCR_NM; }
        set
        {
            if (m_ACDMCR_NM != value)
            {
                m_ACDMCR_NM = value;
                Notify("ACDMCR_NM");
            }
        }
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/158599886-515bdabd-6460-4130-bc50-ef0cf6f2fd2c.png">

<br/>

***

<br/>

