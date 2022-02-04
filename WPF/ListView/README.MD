##### - Selector를 상속받은 클래스들은 여러 속성들을 사용 할 수 있음
  - SelectedItem : ListView에 속해 있는 ListViewItem을 반환한다
  - SelectedItems : ListView에 속해 있는 모든 ListViewItem을 반환한다
  - SelectedIndex : ListViewItem을 클릭했을시 ListView가 가지고 있는 SelectedIndex은 숫자로 반환되며, 위부터 0부터 시작되어 반환해 준다
  - SelectedValue
  - SelectedValuedPath

<br/><br/>

  - SelectedItem  

#XAML
~~~
<ListView x:Name="listv">
    <ListViewItem Content="1일"/>
    <ListViewItem Content="2일"/>
    <ListViewItem Content="3일"/>
    <ListViewItem Content="4일"/>
    <ListViewItem Content="5일"/>
    <ListViewItem Content="6일"/>
    <Button Width="100" Height="30" Content="선택" Click="Button_Click"/>
</ListView>
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
        MessageBox.Show(listv.SelectedItem.ToString()); // 0부터 시작
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152518058-4cb3e9f6-b744-442e-a980-07786e121536.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - SelectedItem에 대한 Content만 뽑아내기
#XAML
~~~
<ListView x:Name="listv">
    <ListViewItem Content="1일"/>
    <ListViewItem Content="2일"/>
    <ListViewItem Content="3일"/>
    <ListViewItem Content="4일"/>
    <ListViewItem Content="5일"/>
    <ListViewItem Content="6일"/>
    <Button Width="100" Height="30" Content="선택" Click="Button_Click"/>
</ListView>
~~~

<br/>

~~~
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        MessageBox.Show(((ListViewItem)listv.SelectedItem).Content.ToString()); // 0부터 시작
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152519055-3640bb45-fc94-499b-a3b9-959a3a7557f0.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

  - SelectedIndex  
#XAML
~~~
<ListView x:Name="listv">
    <ListViewItem Content="1일"/>
    <ListViewItem Content="2일"/>
    <ListViewItem Content="3일"/>
    <ListViewItem Content="4일"/>
    <ListViewItem Content="5일"/>
    <ListViewItem Content="6일"/>
    <Button Width="100" Height="30" Content="선택" Click="Button_Click"/>
</ListView>
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
        MessageBox.Show(listv.SelectedIndex.ToString()); // 0부터 시작
    }
}
~~~

<img src="https://user-images.githubusercontent.com/39178978/152517500-e7a55889-e2d2-4388-9847-d321ef45fd06.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>


##### - ListView헤더 크기를 비율로 조절하기 : ListView안쪽에서는 Grid를 따로 만들어 RowDefinition, ColumnDefinition을 통한 Height="1*"의 조절이 되지 않기 때문에 Grid와 Border값을 새로 하나 만들어 GridViewColumn Width="{Binding ElementName=dummywidth1, Path=ActualWidth}"이 방법을 통해서 크기를 맞춰 줄 수 있다.

#XAML
~~~
<Grid>
    <Grid Grid.Row="1" Grid.Column="1" Grid.RowSpan="2" Margin="10" Visibility="Hidden">
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="1*"/>
            <ColumnDefinition Width="1*"/>
        </Grid.ColumnDefinitions>
        <Border Grid.Column="0" x:Name="dummywidth1"/>
        <Border Grid.Column="1" x:Name="dummywidth2"/>
    </Grid>

    <ListView Grid.Row="1" Grid.Column="1" Grid.RowSpan="2" Margin="10">
        <ListView.View>
            <GridView>
                <GridViewColumn Width="{Binding ElementName=dummywidth1, Path=ActualWidth}" Header="RGB"/>
                <GridViewColumn Width="{Binding ElementName=dummywidth2, Path=ActualWidth}" Header="HEX"/>
            </GridView>
        </ListView.View>
    </ListView>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/151750523-8d72597c-0fb8-4b9a-9de1-6fea134b7861.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

##### - ListView에 Binding을 하기 위해서는ObservableCollection을 만들어 Binding을 해야함
##### - GridViewColumn에 DisplayMemberBinding을 통해서 Binding 가능

<br/>

#XAML
~~~
<Grid>
    <Grid Grid.Row="1" Grid.Column="1" Grid.RowSpan="2" Margin="10" Visibility="Hidden">
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="1*"/>
            <ColumnDefinition Width="1*"/>
        </Grid.ColumnDefinitions>
        <Border Grid.Column="0" x:Name="dummywidth1"/>
        <Border Grid.Column="1" x:Name="dummywidth2"/>
    </Grid>

    <ListView Grid.Row="1" Grid.Column="1" Grid.RowSpan="2" Margin="10" ItemsSource="{Binding RGB_HEX_List}">
        <ListView.View>
            <GridView>
                <GridViewColumn Width="{Binding ElementName=dummywidth1, Path=ActualWidth}" Header="RGB" DisplayMemberBinding="{Binding RGB}"/>
                <GridViewColumn Width="{Binding ElementName=dummywidth2, Path=ActualWidth}" Header="HEX" DisplayMemberBinding="{Binding HEX}"/>
            </GridView>
        </ListView.View>
    </ListView>
</Grid>
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

        RGB_HEX_List = new ObservableCollection<RGB_HEX>();
        RGB_HEX_List.Add(new RGB_HEX { HEX = "1", RGB = 1 });
    }

    private ObservableCollection<RGB_HEX> m_RGB_HEX_List;
    public ObservableCollection<RGB_HEX> RGB_HEX_List
    {
        get { return m_RGB_HEX_List; }
        set
        {
            if (m_RGB_HEX_List != value)
            {
                m_RGB_HEX_List = value;
                Notify("RGB_HEX_List");
            }
        }
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
}
~~~

<br/>

#RGB_HEX.cs
~~~
public class RGB_HEX : INotifyPropertyChanged
    {
        private int m_RGB;
        public int RGB
        {
            get { return m_RGB; }
            set
            {
                if(m_RGB != value)
                {
                    m_RGB = value;
                }
            }
        }

        private string m_HEX;
        public string HEX
        {
            get { return m_HEX; }
            set
            {
                if (m_HEX != value)
                {
                    m_HEX = value;
                }
            }
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
    }
~~~

<img src="https://user-images.githubusercontent.com/39178978/151805276-717892ef-8192-4150-9118-fd928e956dd2.png">
