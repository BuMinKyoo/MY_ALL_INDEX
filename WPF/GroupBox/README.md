
##### - GroupBox : 여러 객체들을 목록으로 묶어 표현해줌
##### - FontFamily : 문자를 다양한 기호로 렌더링하는 일련의 딩뱃 글꼴

<br/>

~~~
<Grid>
    <GroupBox Grid.Row="0" Width="100" Height="100">
        <GroupBox.Header>
            <StackPanel Orientation="Horizontal">
                <Label FontFamily="wingdings" FontSize="17">1</Label>
                <Label>폴더</Label>
            </StackPanel>
        </GroupBox.Header>
        <StackPanel>
            <RadioButton Content="열기" Margin="5"/>
            <RadioButton Content="닫기" Margin="5" IsChecked="True"/>
        </StackPanel>
    </GroupBox>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152258610-a876a9c0-1bb5-4299-9462-5d42fd675097.png">
