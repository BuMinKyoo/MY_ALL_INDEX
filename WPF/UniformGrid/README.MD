
##### - UniformGrid : 모든 열,행을 자동으로 똑같이 맞춰줌, 크기를 조절 불가능함

```
<UniformGrid>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
</UniformGrid>
```

<img src="https://user-images.githubusercontent.com/39178978/149927550-e3de207c-7c2b-4e82-b2ce-9ea0f9b95212.png" width="300" height="300">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

##### - 열,행 수를 지정하기
###### 지정한 열,행을 넘어가면 프로그램을 실행했을때 화면에 표현되지 않고 무시하게 됨

```
<UniformGrid Columns="2" Rows="3">
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
</UniformGrid>
```

<img src="https://user-images.githubusercontent.com/39178978/149928111-0ae3e057-d526-4e0a-816f-97a899e85214.png">

<br/><br/>

###### 빨간색 테두리가 실행 화면
<img src="https://user-images.githubusercontent.com/39178978/149928370-36e15e1c-c3e7-4e48-b6f5-fcd3c2f9c84a.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

##### - ClipToBounds를 이용해서 내 크기를 벗어난 요소들을 사라지게 할 수 있음

```
<UniformGrid Columns="2" Rows="3" ClipToBounds="True">
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
    <Button Content="버튼1"></Button>
</UniformGrid>
```

<img src="https://user-images.githubusercontent.com/39178978/149928819-757fbb07-4bc2-475d-9fd7-746c796cc6d4.png">

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

##### - FirstColumn을 이용하면 그 순서 부터 시작할 수 있음

```
<UniformGrid Rows="3" Columns="3" FirstColumn="2">
    <Button Content="button1"/>
    <Button Content="button2"/>
    <Button Content="button3"/>
    <Button Content="button4"/>
    <Button Content="button5"/>
    <Button Content="button5"/>
</UniformGrid>
```

<img src="https://user-images.githubusercontent.com/39178978/149929403-9ba21762-33f5-4ed1-9982-c61cf276d527.png">

<br/><br/>

##### - FlowDirection을 이용하면 방향을 반대로 바꿀 수 있음

~~~
<UniformGrid Rows="3" Columns="3" FirstColumn="2" FlowDirection="RightToLeft">
    <Button Content="button1"/>
    <Button Content="button2"/>
    <Button Content="button3"/>
    <Button Content="button4"/>
    <Button Content="button5"/>
    <Button Content="button5"/>
</UniformGrid>
~~~

<img src="https://user-images.githubusercontent.com/39178978/149929712-91144101-18c8-41fe-800e-e09e6dab4b03.png">
