
<br/><br/>

##### - 내부적인 부분에 대한 상세한 설명은 아직 공부가 더 필요한듯하다..단순하게만 적고 넘어가자.
- xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" // Name을 사용하게 해주는것  
각각의 자료의 프로퍼티

- xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" // x:Name을 사용하게 해주는것  
외부에서 Name이라는 프로퍼티에 복사를 해줌, 외부에서 관리하는 코드

- 모든 상황에서 x:Name을 사용 할 수 있다고 한다.

<br/><br/>

### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

##### - ResizeMode="NoResize"를 사용하면 Window창의 가로,세로 길이를 임의로 조절할 수 없게 만든다.

#XAML
~~~
Title="MainWindow" ResizeMode="NoResize"
~~~


### ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<br/><br/>

##### - SizeToContent="WidthAndHeight"를 사용하면 윈도우창을 컨텐트 내용대로 자동으로 조절해 준다.

#XAML
~~~
Title="MainWindow" SizeToContent="WidthAndHeight"
~~~

시작전 윈도우 크기 창  
<img src="https://user-images.githubusercontent.com/39178978/151296985-e28ec50f-68fc-4a0e-8223-fc34891b3c44.png">

실행시 윈도우 창을 자동으로 맞게 조절해준다  
<img src="https://user-images.githubusercontent.com/39178978/151297018-36f45f0d-3283-42df-96a8-c6133b93d9e0.png">  
