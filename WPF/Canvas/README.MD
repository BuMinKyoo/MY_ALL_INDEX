#### - Canvas는 위치를 고정으로 정할때 사용함. 임의로 화면을 늘려도 상,하,좌,우 를 기준으로 고정된 지점에 요소가 놓아짐

~~~
<Canvas Name="canvas">
    <TextBlock Name="txtBlock" Canvas.Left="10" TextWrapping="Wrap" Text="캔버스" Canvas.Top="80"/>
    <Button Name="btn" Content="Button" Canvas.Left="172" Canvas.Top="30" Width="75"/>
    <Image Name="image2"
            Source="https://user-images.githubusercontent.com/39178978/148183688-8de89977-ca68-4450-87e7-6febcff80fd4.png"
            Canvas.Left="10" Canvas.Top="150"/>
</Canvas>
~~~

<img src="https://user-images.githubusercontent.com/39178978/148184087-350a7029-8e58-48b7-8297-5127d51825f7.png">
