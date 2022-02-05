##### - Selector를 상속받은 클래스들은 여러 속성들을 사용 할 수 있음
  - SelectedItem : ListView에 속해 있는 ListViewItem을 반환한다
  - SelectedItems : ListView에 속해 있는 모든 ListViewItem을 반환한다
  - SelectedIndex : ListViewItem을 클릭했을시 ListView가 가지고 있는 SelectedIndex은 숫자로 반환되며, 위부터 0부터 시작되어 반환해 준다
  - SelectedValue
  - SelectedValuedPath 등등  
사용 방법은 ListView, ListBox와 비슷 한 방법으로 사용 가능

***

##### - ComboBox : ComboBox박스 생성
  - ComboBoxItem : ComboBox하위의 Item생성
  - DropDownOpende : 사용자가 목록을 펼칠 때 발생하는 이벤트
  - DropDownClosed : 사용자가 목록을 접을 때 발생하는 이벤트
  - IsEditable속성 : 텍스트를 직접 편집할 수 있는지 여부를 지정, 속성값이 true일 경우 사용자가 목록에서 항목을 선택하면 SelectedItem 속성이 설정된다

<br/>

  - ComboBoxItem
  
#XAML
~~~
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

#XAML
~~~
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

#XAML
~~~
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

#XAML.cs
~~~
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

#XAML
~~~
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

#XAML.cs
~~~
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
