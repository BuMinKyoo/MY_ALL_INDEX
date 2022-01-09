<br/>

#### - Viewbox를 이용하면 화면의 크기를 늘리고 줄였을때 그 안에 요소들을 일정한 비율로 늘리고 줄일 수 있음

<br/>

#### Stretch속성

- None : 자식 컨트롤의 크기가 변경되지 않음.(ViewBox크기에 따라 여백이 생기거나 클리핑)

- Fill : 자식 컨트롤이 ViewBox를 완전히 채우도록 크기가 조절된다.(절대 클리핑되지 않는다) 종횡비율(가로,세로 크기의 비율)이 다를 수 있으므로 ViewBox의 내용이 변형될 수 있다.

- Uniform : ViewBox의 기본 옵션. 자식컨트롤이 가로, 세로 크기에 맞게 균일하게 크기조절

- UniformToFill : ViewBox의 크기를 모두 채우는데,  자식 컨트롤의 가로와 세로의 비율을 동일한 비율로 조정한다.왜곡 현상이 없도록 하기 위해서 자식 컨트롤이 잘리는 현상이 일어날 수 있다.

<br/>

#### StretchDirection속성

- Both(기본값) : 콘텐츠의 기본 크기에 비례하여 위아래로 크기 조정

- UpOnly : 기본 크기보다 큰 크기에서만 크기조정을 허용

- DownOnly : 기본 크기보다 작은 크기에서만 조절이 가능


~~~
<Grid>
    <Viewbox>
        <StackPanel>
            <Button Width="100" Height="100" Content="1"/>
            <Button Width="100" Height="100" Content="2"/>
            <Button Width="100" Height="100" Content="3"/>
            <Button Width="100" Height="100" Content="4"/>
        </StackPanel>
    </Viewbox>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/148673507-8e1abe94-d180-47ab-8db7-cbaea328c5f1.png">

