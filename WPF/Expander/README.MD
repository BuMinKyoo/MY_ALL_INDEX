
##### - Expander : 눌렀을때 하위의 객체들이 튀어 나옴

<br/>

~~~
<Grid>
    <Expander Grid.Row="1" Grid.Column="1" Header="규칙">
        <TextBlock>
            1.  규칙1
            <LineBreak/>2. 규칙2
            <LineBreak/>3. 규칙3
            <LineBreak/>4. 규칙4
        </TextBlock>
    </Expander>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152100796-40fe916c-ad5f-4b0f-a92d-4b6e00ab1f21.png">
<img src="https://user-images.githubusercontent.com/39178978/152100820-d0b4e2da-168d-47b0-9e35-b561147753e3.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

##### - Header를 따로 빼서 지정해 줄 수 있음

~~~
<Grid>
    <Expander Grid.Row="1" Grid.Column="1">
        <Expander.Header>
            <TextBlock>
                <Run Text="규" Foreground="Red"/><Run Text="칙" Foreground="Aqua"/>
            </TextBlock>
        </Expander.Header>
        <TextBlock>
            1.  규칙1
            <LineBreak/>2. 규칙2
            <LineBreak/>3. 규칙3
            <LineBreak/>4. 규칙4
        </TextBlock>
    </Expander>
</Grid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/152101199-cbffb3c5-31db-40f3-968a-15d522948e79.png">
<img src="https://user-images.githubusercontent.com/39178978/152101208-c43eb6b5-7ba8-4069-abf3-d820ec514f45.png">
