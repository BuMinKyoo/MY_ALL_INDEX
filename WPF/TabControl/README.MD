##### - Selector를 상속받은 클래스들은 여러 속성들을 사용 할 수 있음
  - SelectedItem, SelectedItems, SelectedIndex, SelectedValue, SelectedValuedPath 등등

<br/>

***

##### - TabControl : 탭을 만듬
  - TabItem : TabControl안에 요소를 생성

~~~
<TabControl>
    <TabItem Header="사원">
        <Grid>
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="Auto"/>
                <ColumnDefinition/>
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition/>
                <RowDefinition/>
            </Grid.RowDefinitions>

            <TextBlock VerticalAlignment="Center" Text="이름"/>
            <TextBox Grid.Column="1" Height="30"/>
            <TextBlock VerticalAlignment="Center" Grid.Row="1" Text="번호"/>
            <TextBox Grid.Column="1" Grid.Row="1" Height="30"/>
        </Grid>
    </TabItem>
    <TabItem Header="대리">
        <Grid>
            <Grid.ColumnDefinitions>
                <ColumnDefinition Width="Auto"/>
                <ColumnDefinition/>
            </Grid.ColumnDefinitions>
            <Grid.RowDefinitions>
                <RowDefinition/>
                <RowDefinition/>
            </Grid.RowDefinitions>

            <TextBlock VerticalAlignment="Center" Text="이름"/>
            <TextBox Grid.Column="1" Height="30"/>
            <TextBlock VerticalAlignment="Center" Grid.Row="1" Text="번호"/>
            <TextBox Grid.Column="1" Grid.Row="1" Height="30"/>
        </Grid>
    </TabItem>
</TabControl>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152521030-86af5f22-62ed-4ba8-a504-64d2365e5a0f.png">
