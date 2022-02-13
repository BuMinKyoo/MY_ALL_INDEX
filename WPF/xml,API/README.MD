
#XAML
~~~
<Window x:Class="WpfApp18.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="MainWindow" Height="300" Width="550">
    <Grid>
        <Grid.RowDefinitions>
            <RowDefinition Height="Auto"/>
            <RowDefinition/>
        </Grid.RowDefinitions>

        <Grid Grid.Row="0" Margin="10">
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="Auto"/>
                <ColumnDefinition Width="90"/>
                <ColumnDefinition Width="Auto"/>
                <ColumnDefinition Width="120"/>
                <ColumnDefinition Width="Auto"/>
                <ColumnDefinition Width="60"/>
                <ColumnDefinition/>
            </Grid.ColumnDefinitions>

            <TextBlock Grid.Column="0"  Text="학력" HorizontalAlignment="Right" VerticalAlignment="Center" Margin="5 0"/>
            <ComboBox Grid.Column="1" x:Name="cb_ACDMCR_CMMN_CODE_SE">
                <ComboBoxItem Content="전문대학"/>
                <ComboBoxItem Content="중학교"/>
                <ComboBoxItem Content="고등학교"/>
                <ComboBoxItem Content="초등학교"/>
                <ComboBoxItem Content="대학교"/>
                <ComboBoxItem Content="관계없음"/>
                <ComboBoxItem Content="박사과정"/>
            </ComboBox>

            <TextBlock Grid.Column="2"  Text="고용형태" HorizontalAlignment="Right" VerticalAlignment="Center" Margin="20 0 5 0"/>
            <ComboBox x:Name="cb_EMPLYM_STLE_CMMN_CODE_SE" Grid.Column="3">
                <ComboBoxItem Content="계약직" />
                <ComboBoxItem Content="상용직(시간제)"/>
                <ComboBoxItem Content="상용직"/>
                <ComboBoxItem Content="계약직(시간제)"/>
            </ComboBox>

            <TextBlock Grid.Column="4"  Text="경력조건" HorizontalAlignment="Right" VerticalAlignment="Center" Margin="20 0 5 0"/>
            <ComboBox x:Name="cb_CAREER_CND_CMMN_CODE_SE" Grid.Column="5">
                <ComboBoxItem Content="신입"/>
                <ComboBoxItem Content="경력"/>
                <ComboBoxItem Content="무관"/>
            </ComboBox>

            <Button Grid.Column="6" Content="검색" Margin="25 0 0 0" Command="{Binding Getdata}"/>
        </Grid>

        <ListView x:Name="lv" Grid.Row="1" Margin="10" ItemsSource="{Binding Custlist}">
            <ListView.View>
                <GridView>
                    <GridViewColumn Width="100" Header="기업명칭" DisplayMemberBinding="{Binding CMPNY_NM}"/>
                    <GridViewColumn Width="70" Header="모집인원수" DisplayMemberBinding="{Binding RCRIT_NMPR_CO}"/>
                    <GridViewColumn Width="70" Header="근무시간" DisplayMemberBinding="{Binding WORK_TIME_NM}"/>
                    <GridViewColumn Width="200" Header="전형장소" DisplayMemberBinding="{Binding RCEPT_MTH_IEM_NM}"/>
                    <GridViewColumn Width="70" Header="전형방법" DisplayMemberBinding="{Binding MODEL_MTH_NM}"/>
                </GridView>
            </ListView.View>
        </ListView>
    </Grid>
</Window>
~~~

<br/>

#XAML.cs
~~~
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Windows;
using System.Windows.Input;
using System.Xml;

namespace WpfApp18
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window, INotifyPropertyChanged
    {
        public MainWindow()
        {
            InitializeComponent();
            Custlist = new ObservableCollection<Cust>();
            this.DataContext = this;
        }

        #region INotifyPropertyChanged
        public event PropertyChangedEventHandler? PropertyChanged;
        protected void Notify(string propName)
        {
            if (this.PropertyChanged != null)
            {
                this.PropertyChanged(this, new PropertyChangedEventArgs(propName));
            }
        }
        #endregion

        #region ObservableCollection Custlist
        private ObservableCollection<Cust> m_Custlist;
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
        #endregion

        #region API string
        private string m_ACDMCR_CMMN_CODE_SE_APIsting;
        public string ACDMCR_CMMN_CODE_SE_APIsting
        {
            get { return m_ACDMCR_CMMN_CODE_SE_APIsting; }
            set
            {
                if (m_ACDMCR_CMMN_CODE_SE_APIsting != value)
                {
                    m_ACDMCR_CMMN_CODE_SE_APIsting = value;
                    Notify("ACDMCR_CMMN_CODE_SE_APIsting");
                }
            }
        }

        private string m_EMPLYM_STLE_CMMN_CODE_SE_APIsting;
        public string EMPLYM_STLE_CMMN_CODE_SE_APIsting
        {
            get { return m_EMPLYM_STLE_CMMN_CODE_SE_APIsting; }
            set
            {
                if (m_EMPLYM_STLE_CMMN_CODE_SE_APIsting != value)
                {
                    m_EMPLYM_STLE_CMMN_CODE_SE_APIsting = value;
                    Notify("EMPLYM_STLE_CMMN_CODE_SE_APIsting");
                }
            }
        }

        private string m_CAREER_CND_CMMN_CODE_SE_APIsting;
        public string CAREER_CND_CMMN_CODE_SE_APIsting
        {
            get { return m_CAREER_CND_CMMN_CODE_SE_APIsting; }
            set
            {
                if (m_CAREER_CND_CMMN_CODE_SE_APIsting != value)
                {
                    m_CAREER_CND_CMMN_CODE_SE_APIsting = value;
                    Notify("CAREER_CND_CMMN_CODE_SE_APIsting");
                }
            }
        }

        //서울시 일자리 포털 : https://data.seoul.go.kr/dataList/OA-13341/A/1/datasetView.do
        private string m_path;
        public string path
        {
            get { return m_path; }
            set
            {
                if (m_path != value)
                {
                    m_path = value;
                    Notify("Path");
                }
            }
        }
        #endregion

        #region Button Event
        private Command m_Getdata;
        public ICommand Getdata
        {
            get { return m_Getdata = new Command(OneClickEvent); }
        }
        private void OneClickEvent(object obj)
        {
            #region cb_ACDMCR_CMMN_CODE_SE.SelectedIndex
            if (cb_ACDMCR_CMMN_CODE_SE.SelectedIndex == 0)
            {
                ACDMCR_CMMN_CODE_SE_APIsting = "J00108";
            }
            else if (cb_ACDMCR_CMMN_CODE_SE.SelectedIndex == 1)
            {
                ACDMCR_CMMN_CODE_SE_APIsting = "J00104";
            }
            else if (cb_ACDMCR_CMMN_CODE_SE.SelectedIndex == 2)
            {
                ACDMCR_CMMN_CODE_SE_APIsting = "J00106";
            }
            else if (cb_ACDMCR_CMMN_CODE_SE.SelectedIndex == 3)
            {
                ACDMCR_CMMN_CODE_SE_APIsting = "J00102";
            }
            else if (cb_ACDMCR_CMMN_CODE_SE.SelectedIndex == 4)
            {
                ACDMCR_CMMN_CODE_SE_APIsting = "J00110";
            }
            else if (cb_ACDMCR_CMMN_CODE_SE.SelectedIndex == 5)
            {
                ACDMCR_CMMN_CODE_SE_APIsting = "J00100";
            }
            else if (cb_ACDMCR_CMMN_CODE_SE.SelectedIndex == 6)
            {
                ACDMCR_CMMN_CODE_SE_APIsting = "J00114";
            }
            #region cb_ACDMCR_CMMN_CODE_SE.SelectedIndex
            if (cb_ACDMCR_CMMN_CODE_SE.SelectedIndex == 0)
            {
                ACDMCR_CMMN_CODE_SE_APIsting = "J00108";
            }
            else if (cb_ACDMCR_CMMN_CODE_SE.SelectedIndex == 1)
            {
                ACDMCR_CMMN_CODE_SE_APIsting = "J00104";
            }
            else if (cb_ACDMCR_CMMN_CODE_SE.SelectedIndex == 2)
            {
                ACDMCR_CMMN_CODE_SE_APIsting = "J00106";
            }
            else if (cb_ACDMCR_CMMN_CODE_SE.SelectedIndex == 3)
            {
                ACDMCR_CMMN_CODE_SE_APIsting = "J00102";
            }
            else if (cb_ACDMCR_CMMN_CODE_SE.SelectedIndex == 4)
            {
                ACDMCR_CMMN_CODE_SE_APIsting = "J00110";
            }
            else if (cb_ACDMCR_CMMN_CODE_SE.SelectedIndex == 5)
            {
                ACDMCR_CMMN_CODE_SE_APIsting = "J00100";
            }
            else if (cb_ACDMCR_CMMN_CODE_SE.SelectedIndex == 6)
            {
                ACDMCR_CMMN_CODE_SE_APIsting = "J00114";
            }
            #endregion
            #endregion

            #region cb_EMPLYM_STLE_CMMN_CODE_SE.SelectedIndex
            if (cb_EMPLYM_STLE_CMMN_CODE_SE.SelectedIndex == 0)
            {
                EMPLYM_STLE_CMMN_CODE_SE_APIsting = "J01102";
            }
            else if (cb_EMPLYM_STLE_CMMN_CODE_SE.SelectedIndex == 1)
            {
                EMPLYM_STLE_CMMN_CODE_SE_APIsting = "J01105";
            }
            else if (cb_EMPLYM_STLE_CMMN_CODE_SE.SelectedIndex == 2)
            {
                EMPLYM_STLE_CMMN_CODE_SE_APIsting = "J01101";
            }
            else if (cb_EMPLYM_STLE_CMMN_CODE_SE.SelectedIndex == 3)
            {
                EMPLYM_STLE_CMMN_CODE_SE_APIsting = "J01103";
            }
            #endregion

            #region cb_CAREER_CND_CMMN_CODE_SE.SelectedIndex
            if (cb_CAREER_CND_CMMN_CODE_SE.SelectedIndex == 0)
            {
                CAREER_CND_CMMN_CODE_SE_APIsting = "J01301";
            }
            else if (cb_CAREER_CND_CMMN_CODE_SE.SelectedIndex == 1)
            {
                CAREER_CND_CMMN_CODE_SE_APIsting = "J01302";
            }
            else if (cb_CAREER_CND_CMMN_CODE_SE.SelectedIndex == 2)
            {
                CAREER_CND_CMMN_CODE_SE_APIsting = "J01300";
            }
            #endregion


            path = "http://openapi.seoul.go.kr:8088/68734f416a716e613535594b6d4f48/xml/GetJobInfo/1/5/" + ACDMCR_CMMN_CODE_SE_APIsting + "/" + EMPLYM_STLE_CMMN_CODE_SE_APIsting + "/" + CAREER_CND_CMMN_CODE_SE_APIsting;

            Custlist.Clear();
            OxReadXML();
        }
        #endregion
        private void OxReadXML()
        {
            XmlDocument xdoc = new XmlDocument();
            xdoc.Load(path);

            XmlNodeList nodesCount = xdoc.SelectNodes("/GetJobInfo/list_total_count");

            XmlNodeList nodesRow = xdoc.SelectNodes("/GetJobInfo/row");

            foreach (XmlNode node in nodesRow)
            {
                string CMPNY_NM_IT = node.SelectSingleNode("CMPNY_NM").InnerText;
                string RCRIT_NMPR_CO_IT = node.SelectSingleNode("RCRIT_NMPR_CO").InnerText;
                string WORK_TIME_NM_IT = node.SelectSingleNode("WORK_TIME_NM").InnerText;
                string RCEPT_MTH_IEM_NM_IT = node.SelectSingleNode("RCEPT_MTH_IEM_NM").InnerText;
                string MODEL_MTH_NM_IT = node.SelectSingleNode("MODEL_MTH_NM").InnerText;

                Custlist.Add(new Cust() { CMPNY_NM = CMPNY_NM_IT, RCRIT_NMPR_CO = RCRIT_NMPR_CO_IT, WORK_TIME_NM = WORK_TIME_NM_IT, RCEPT_MTH_IEM_NM = RCEPT_MTH_IEM_NM_IT, MODEL_MTH_NM = MODEL_MTH_NM_IT });
            }
        }
    }
}
~~~

<br/>

#Cust.cs
~~~
using System.ComponentModel;

namespace WpfApp18
{
    public class Cust : INotifyPropertyChanged
    {

        #region INotifyPropertyChanged
        public event PropertyChangedEventHandler? PropertyChanged;
        protected void Notify(string propName)
        {
            if (this.PropertyChanged != null)
            {
                this.PropertyChanged(this, new PropertyChangedEventArgs(propName));
            }
        }
        #endregion

        private string m_CMPNY_NM;
        public string CMPNY_NM
        {
            get { return m_CMPNY_NM; }
            set
            {
                if (m_CMPNY_NM != value);
                m_CMPNY_NM = value;
                Notify("CMPNY_NM");
            }
        }

        private string m_RCRIT_NMPR_CO;
        public string RCRIT_NMPR_CO
        {
            get { return m_RCRIT_NMPR_CO; }
            set
            {
                if (m_RCRIT_NMPR_CO != value);
                m_RCRIT_NMPR_CO = value;
                Notify("RCRIT_NMPR_CO");
            }
        }

        private string m_WORK_TIME_NM;
        public string WORK_TIME_NM
        {
            get { return m_WORK_TIME_NM; }
            set
            {
                if (m_WORK_TIME_NM != value) ;
                m_WORK_TIME_NM = value;
                Notify("WORK_TIME_NM");
            }
        }

        private string m_RCEPT_MTH_IEM_NM;
        public string RCEPT_MTH_IEM_NM
        {
            get { return m_RCEPT_MTH_IEM_NM; }
            set
            {
                if (m_RCEPT_MTH_IEM_NM != value) ;
                m_RCEPT_MTH_IEM_NM = value;
                Notify("RCEPT_MTH_IEM_NM");
            }
        }

        private string m_MODEL_MTH_NM;
        public string MODEL_MTH_NM
        {
            get { return m_MODEL_MTH_NM; }
            set
            {
                if (m_MODEL_MTH_NM != value) ;
                m_MODEL_MTH_NM = value;
                Notify("MODEL_MTH_NM");
            }
        }
    }
}
~~~

<br/>

#Command.cs
~~~
using System;
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

<img src="https://user-images.githubusercontent.com/39178978/153757247-cac109bd-77d9-4053-852b-0205adb0b513.png">
"
