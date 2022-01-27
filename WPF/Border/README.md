<br/>

#### Border 의 모서리를 동그랗게 만들기
- BorderBrush : 테두리 컬러 지정
- BorderThickness : 테두리 두계 설정("2 2 2 2" 이런 형태로 왼쪽,위쪽,오른쪽,아래로 각각 설정도 가능)
- CornerRadius : 모서리를 얼마나 동그랗게 만들껀지("2 2 2 2"이런식으로 모서리 별로 설정 가능)

~~~
<Grid>
    <Border Width="100" Height="100" CornerRadius="10 2 2 2" BorderBrush="Coral" BorderThickness="2 2 2 10">
    </Border>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/151305860-78bd39a9-da06-4e70-8daf-318e54a4640f.png">
