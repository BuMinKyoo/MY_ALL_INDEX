##### - Selector를 상속받은 클래스들은 여러 속성들을 사용 할 수 있음
  - SelectedItem : ListView에 속해 있는 ListViewItem을 반환한다
  - SelectedItems : ListView에 속해 있는 모든 ListViewItem을 반환한다
  - SelectedIndex : ListViewItem을 클릭했을시 ListView가 가지고 있는 SelectedIndex은 숫자로 반환되며, 위부터 0부터 시작되어 반환해 준다
  - SelectedValue
  - SelectedValuedPath 등등  
사용 방법은 ListView, ListBox와 비슷 한 방법으로 사용 가능

<br/>

##### - ComboBox : ComboBox박스 생성
  - ComboBoxItem : ComboBox하위의 Item생성
  - DropDownOpende : 사용자가 목록을 펼칠 때 발생하는 이벤트
  - DropDownClosed : 사용자가 목록을 접을 때 발생하는 이벤트
  - IsEditable속성 : 텍스트를 직접 편집할 수 있는지 여부를 지정, 속성값이 true일 경우 사용자가 목록에서 항목을 선택하면 SelectedItem 속성이 설정된다

<br/>

  - ComboBoxItem
  
#MainWindow.xaml
~~~c#
<Grid>
    <ComboBox Width="100" Height="30">
        <ComboBoxItem Content="1"/>
        <ComboBoxItem Content="2"/>
        <ComboBoxItem Content="3"/>
        <ComboBoxItem Content="4"/>
        <ComboBoxItem Content="5"/>
    </ComboBox>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152633117-b34d6a50-9cd7-411c-bb83-c942076b5b85.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - IsEditable속성

#MainWindow.xaml
~~~c#
<StackPanel>
    <ComboBox Name="cbox" Width="100" Height="30" IsEditable="True">
        <ComboBoxItem Content="1"/>
        <ComboBoxItem Content="2"/>
        <ComboBoxItem Content="3"/>
        <ComboBoxItem Content="4"/>
        <ComboBoxItem Content="5"/>
    </ComboBox>
    <Button Width="100" Content="버튼" Click="Button_Click"/>
</StackPanel>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        int index = cbox.SelectedIndex + 1;
        if(index > 4)
        {
            index = 0;
        }

        cbox.SelectedIndex = index;
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152633424-730dd3cc-0dff-4d31-9376-deb7949e7414.png">
  현재 버튼을 클릭하면 cbox.SelectedIndex가 1씩 증가하면서 ComboBoxItem을 차례로 보여주게 되고, IsEditable="True"이기 때문에 직접 박스를 클릭해 숫자를 바꿔 줘도 cbox.SelectedIndex가 같이 변하게 된다

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - ObservableCollection을 이용한 ComboBox의 ComboBoxItem추가하기
  - 버튼을 이용해서 ComboBoxItem의 Content출력하기

#MainWindow.xaml
~~~c#
<StackPanel>
    <ComboBox Name="cbox" Width="100" Height="30" ItemsSource="{Binding GetDataList}">
        <ComboBox.ItemTemplate>
            <DataTemplate>
                <Grid>
                    <TextBlock Text="{Binding List1}"/>
                </Grid>
            </DataTemplate>
        </ComboBox.ItemTemplate>
    </ComboBox>
    <Button Width="100" Content="버튼" Click="Button_Click"/>
</StackPanel>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();

        GetDataList = new ObservableCollection<GetData>();
        GetDataList.Add(new GetData() { List1 = "1번"});

        this.DataContext = this;
    }

    private ObservableCollection<GetData> m_GetDataList;
    public ObservableCollection<GetData> GetDataList
    {
        get { return m_GetDataList; }
        set
        {
            if(m_GetDataList != value)
            {
                m_GetDataList = value;
            }
        }
    }

    public class GetData
    {
        private string m_List1;
        public string List1
        {
            get { return m_List1; }
            set
            {
                if (m_List1 != value)
                {
                    m_List1 = value;
                }
            }
        }
    }

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        MessageBox.Show(((GetData)cbox.SelectedItem).List1.ToString());
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152634252-d19654b9-506d-42b8-a707-02941430e593.png">  
<img src="https://user-images.githubusercontent.com/39178978/152634277-ec3dfa94-a10f-4fb3-bf1f-615db7f5e290.png">  

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - 하지만 여기서 ComboBox속성중 IsEditable="True"으로 하게 되면 ComboBoxItem의 Content가 잘 나오지 않게 된다
<img src="https://user-images.githubusercontent.com/39178978/152634331-340e05c5-507d-481e-a1fd-3dad9d06c5df.png">  

<br/>

  - foreach를 활용해서 출력해주기

#MainWindow.xaml
~~~c#
<StackPanel>
    <ComboBox Name="cbox" Width="100" Height="30" IsEditable="True">
        <!--<ComboBox.ItemTemplate>
            <DataTemplate>
                <Grid>
                    <TextBlock Text="{Binding List1}"/>
                </Grid>
            </DataTemplate>
        </ComboBox.ItemTemplate>-->
    </ComboBox>
    <Button Width="100" Content="버튼" Click="Button_Click"/>
</StackPanel>
~~~

<br/>

#MainWindow.xaml.cs
~~~c#
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        GetData_ComboBoxItem();

        this.DataContext = this;
    }
    public void GetData_ComboBoxItem()
    {
        cbox.Items.Clear();
        foreach(var item in GetData_GetDataList())
        {
            ComboBoxItem cbi = new ComboBoxItem();
            cbi.Content = item.List1.ToString();
            cbox.Items.Add(cbi);
        }
    }

    public ObservableCollection<GetData> GetData_GetDataList()
    {
        GetDataList = new ObservableCollection<GetData>();
        GetDataList.Add(new GetData() { List1 = "1번"});

        return GetDataList;
    }

    private ObservableCollection<GetData> m_GetDataList;
    public ObservableCollection<GetData> GetDataList
    {
        get { return m_GetDataList; }
        set
        {
            if(m_GetDataList != value)
            {
                m_GetDataList = value;
            }
        }
    }

    public class GetData
    {
        private string m_List1;
        public string List1
        {
            get { return m_List1; }
            set
            {
                if (m_List1 != value)
                {
                    m_List1 = value;
                }
            }
        }
    }

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        MessageBox.Show(((ComboBoxItem)cbox.SelectedItem).Content.ToString());
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152634765-c98a39f4-ec57-4510-a3a5-1ddf1d94e5af.png">  

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - 각각의 ComboBoxitem을 분리해서 나타나게 하기

#MainWindow.xaml
~~~c#
<StackPanel Orientation="Horizontal" HorizontalAlignment="Center">
    <ComboBox Width="100" Height="30" ItemsSource="{Binding Obser_Fruit_list}" Margin="10" SelectedItem="{Binding Fruit_list_SelectedItem}">
        <ComboBox.ItemTemplate>
            <DataTemplate>
                <TextBlock Text="{Binding Fruit_name}"/>
            </DataTemplate>
        </ComboBox.ItemTemplate>
    </ComboBox>

    <ComboBox Width="100" Height="30" ItemsSource="{Binding Obser_Price_list}" Margin="10">
        <ComboBox.ItemTemplate>
            <DataTemplate>
                <TextBlock Text="{Binding Price_name}"/>
            </DataTemplate>
        </ComboBox.ItemTemplate>
    </ComboBox>
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
        Getdata_Obser_Fruit_list();
        this.DataContext = this;
    }

    private ObservableCollection<Fruit_list> m_Obser_Fruit_list = new ObservableCollection<Fruit_list>();
    public ObservableCollection<Fruit_list> Obser_Fruit_list
    {
        get { return m_Obser_Fruit_list; }
        set
        {
            if(m_Obser_Fruit_list != value)
            {
                m_Obser_Fruit_list = value;
                Notify("Obser_Fruit_list");

            }
        }
    }

    private ObservableCollection<Price_list> m_Obser_Price_list = new ObservableCollection<Price_list>();
    public ObservableCollection<Price_list> Obser_Price_list
    {
        get { return m_Obser_Price_list; }
        set
        {
            if (m_Obser_Price_list != value)
            {
                m_Obser_Price_list = value;
                Notify("Obser_Price_list");

            }
        }
    }


    private Fruit_list m_Fruit_list_SelectedItem;
    public Fruit_list Fruit_list_SelectedItem
    {
        get { return m_Fruit_list_SelectedItem; }
        set
        {
            if(m_Fruit_list_SelectedItem != value)
            {
                m_Fruit_list_SelectedItem = value;
                Notify("Fruit_list_SelectedItem");

                Obser_Price_list.Clear();

                if (m_Fruit_list_SelectedItem != null)
                {
                    if (m_Fruit_list_SelectedItem.Fruit_name == "Apple")
                    {
                        Obser_Price_list.Add(new Price_list() { Price_name = "1000" });
                        Obser_Price_list.Add(new Price_list() { Price_name = "2000" });
                        Obser_Price_list.Add(new Price_list() { Price_name = "3000" });
                        Obser_Price_list.Add(new Price_list() { Price_name = "4000" });
                    }
                    else if (m_Fruit_list_SelectedItem.Fruit_name == "Banana")
                    {
                        Obser_Price_list.Add(new Price_list() { Price_name = "5000" });
                        Obser_Price_list.Add(new Price_list() { Price_name = "6000" });
                        Obser_Price_list.Add(new Price_list() { Price_name = "7000" });
                        Obser_Price_list.Add(new Price_list() { Price_name = "8000" });
                    }
                }
            }
        }
    }
    public void Getdata_Obser_Fruit_list()
    {
        Obser_Fruit_list.Add(new Fruit_list() { Fruit_name = "Apple"});
        Obser_Fruit_list.Add(new Fruit_list() { Fruit_name = "Banana"});
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

#Fruit_list.cs
~~~c#
public class Fruit_list : INotifyPropertyChanged
{
    private string m_Fruit_name;
    public string Fruit_name
    {
        get { return m_Fruit_name; }
        set
        {
            if(m_Fruit_name != value)
            {
                m_Fruit_name = value;
                Notify("Fruit_name");
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

#Price_list.cs
~~~c#
public class Price_list : INotifyPropertyChanged
{
    private string m_Price_name;
    public string Price_name
    {
        get { return m_Price_name; }
        set
        {
            if (m_Price_name != value)
            {
                m_Price_name = value;
                Notify("Price_name");
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

<img src="https://user-images.githubusercontent.com/39178978/158348530-424eafe3-55b9-4882-a314-2d5b281d5e4a.png">

<br/>

<img src="https://user-images.githubusercontent.com/39178978/158348673-70cfd96b-2b96-4eed-8144-f0a2990f437a.png">

