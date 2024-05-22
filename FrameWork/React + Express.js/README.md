###### Top

React
- [React세팅](#react세팅)
- [React 컴포넌트 생성, props 사용](#react-컴포넌트-생성-props-사용)
- [event사용하기](#event사용하기)
- [State](#state)

express
- [express설치](#express설치)

<br/>
<br/>

***

# React세팅
  - React란?
    - 웹 프론트 개발을 할때 사용하며, 웹은 태그로 만들어지는 구조이기 때문에, 태그의 부분을 함수화 해서, 재사용하거나, 직관적으로 변경하거나, 관리하기 위한 목적으로 사용됨
  - 개발 환경세팅
    - 리액트 홈페이지 들어가서 세팅하기
      - 직접 컴퓨터에 세팅 할 수도 있지만 웹상에서 바로 공부 자습을 할 수 있다
      - 설치하기
        - Node.js 설치
        - https://ko.legacy.reactjs.org/docs/create-a-new-react-app.html 
          - npx create-react-app my-app 
      - 실행하기
        - npm start
  - React 프레임워크 기본 설명
    - 프레임 워크 public/index.html 안에 있는 id값이 root인 body태그안에 내용이 들어가게 된다. 들어가는 내용은 src/index.js 안에 있는 “const root = ReactDOM.createRoot(document.getElementById('root'));” 문장으로서 시작하게 되고, 실제 구현은 App.js의 안에 있는 내용을 실행함으로써 시작한다. 따라서 function App() 아래에 있는 내용을 수정 함으로써 내용이 변경된다
    - “import App from './App';” 앞에 있는 App은 컴포넌트 이름이 되겠고, 뒤에 있는 /App은 파일 이름이 된다
    - App.css, index.css에서 css내용을 변경해 반영한다
    - npm run build 명령어를 통해서 React를 배포한다
    - npx serve -s build 명령어를 통해서 서버를 실행한다

###### [React세팅](#react세팅)
###### [Top](#top)

<br/>
<br/>

***

# React 컴포넌트 생성, props 사용
  - 기본적인 컴포넌트 생성

#App.js
~~~javascript
import logo from './logo.svg';
import './App.css';

function Header(){
  return (
    <header>
      <h1><a href='/'>WEB</a></h1>
    </header>
  )
}

function Nav(){
  return (
    <nav>
      <ol>
        <li><a href='/read/1'>html</a></li>
        <li><a href='/read/2'>css</a></li>
        <li><a href='/read/3'>js</a></li>
      </ol>
    </nav>
  )
}

function Article(){
  return (
    <article>
      <h2>Welcome</h2>
      Hello, WEB
    </article>
  )
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
~~~

<br/>

  - props 사용하기

#App.js
~~~javascript
import logo from './logo.svg';
import './App.css';

// props안에는 속성이 들어오게 된다
function Header(props){
  console.log('props', props, props.title);
  return (
    <header>
      <h1><a href='/'>{props.title}</a></h1>
    </header>
  )
}

function Nav(props){
  const lis = [];
  props.topics.forEach(element => {
    lis.push(<li key={element.id}><a href={'/read/' + element.id}>{element.title}</a></li>);
  });

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props){
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function App() {
  const topics = [
    {id:1, title:'html', desc:'html is...'},
    {id:2, title:'css', desc:'css is...'},
    {id:3, title:'js', desc:'js is...'}
  ]

  return (
    <div>
      <Header title="REACT"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
~~~

###### [React 컴포넌트 생성, props 사용](#react-컴포넌트-생성-props-사용)
###### [Top](#top)

<br/>
<br/>

***

# event사용하기
  - 버튼 클릭시에 event를 발생시키는 등, 다양한 event를 사용할 수 있다

#App.js
~~~javascript
import logo from './logo.svg';
import './App.css';

// props안에는 속성이 들어오게 된다
function Header(props){
  console.log('props', props, props.title);
  return (
    <header>
      <h1><a href='/' onClick={function(event){ // onClick={function(event)을 onClick={(event)=>로 바꿀 수 있다
        event.preventDefault(); // a태그의 기본 동작을 막는다
        props.onChangeMode(); // App.js의 onChangeMode 함수를 실행한다
      }}>{props.title}</a></h1>
    </header>
  )
}

function Nav(props){
  const lis = [];
  props.topics.forEach(element => {
    lis.push(<li key={element.id}>
      <a id={element.id} href={'/read/' + element.id} onClick={event=>{
      event.preventDefault();
      props.onChangeMode(event.target.id); // App.js의 onChangeMode 함수를 실행한다
    }}>{element.title} </a>
    </li>);
  });

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props){
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function App() {
  const topics = [
    {id:1, title:'html', desc:'html is...'},
    {id:2, title:'css', desc:'css is...'},
    {id:3, title:'js', desc:'js is...'}
  ]

  return (
    <div>
      <Header title="WEB" onChangeMode={function(){ // App.js의 onChangeMode 함수 // onChangeMode={function()을 onChangeMode={()=> 로 바꿀 수 있다
        alert('header');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
~~~

###### [event사용하기](#event사용하기)
###### [Top](#top)

<br/>
<br/>

***

# State
  - 아래와 같은 코드에서 App()함수안의 Nav에서 mode = 'read';바꾸지만, 클릭시 화면에 변경되지 않거나 에러가 나는 이유는, App()함수가 다시 실행되지 않기 때문이다. 이런경우에는 State를 사용하여야 한다

#App.js
~~~javascript
import logo from './logo.svg';
import './App.css';

// props안에는 속성이 들어오게 된다
function Header(props){
  console.log('props', props, props.title);
  return (
    <header>
      <h1><a href='/' onClick={function(event){ // onClick={function(event)을 onClick={(event)=>로 바꿀 수 있다
        event.preventDefault(); // a태그의 기본 동작을 막는다
        props.onChangeMode(); // App.js의 onChangeMode 함수를 실행한다
      }}>{props.title}</a></h1>
    </header>
  )
}

function Nav(props){
  const lis = [];
  props.topics.forEach(element => {
    lis.push(<li key={element.id}>
      <a id={element.id} href={'/read/' + element.id} onClick={event=>{
      event.preventDefault();
      props.onChangeMode(event.target.id); // App.js의 onChangeMode 함수를 실행한다
    }}>{element.title} </a>
    </li>);
  });

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props){
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function App() {
  const mode = 'welcome';
  const topics = [
    {id:1, title:'html', desc:'html is...'},
    {id:2, title:'css', desc:'css is...'},
    {id:3, title:'js', desc:'js is...'}
  ]

  let content = null;
  if(mode === 'welcome'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  }
  else if(mode === 'read'){
    content = <Article title="Read" body="Read, WEB"></Article>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={function(){ // App.js의 onChangeMode 함수 // onChangeMode={function()을 onChangeMode={()=> 로 바꿀 수 있다
        mode = 'welcome';
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        mode = 'read';
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
~~~

<br/>

  - useState를 import 한다
    - 첫번째 원소 : useState로 보관한 데이터
    - 두번째 원소 : 데이터를 변경하기 위한 함수 실행

#App.js
~~~javascript
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// props안에는 속성이 들어오게 된다
function Header(props){
  console.log('props', props, props.title);
  return (
    <header>
      <h1><a href='/' onClick={function(event){ // onClick={function(event)을 onClick={(event)=>로 바꿀 수 있다
        event.preventDefault(); // a태그의 기본 동작을 막는다
        props.onChangeMode(); // App.js의 onChangeMode 함수를 실행한다
      }}>{props.title}</a></h1>
    </header>
  )
}

function Nav(props){
  const lis = [];
  props.topics.forEach(element => {
    lis.push(<li key={element.id}>
      <a id={element.id} href={'/read/' + element.id} onClick={event=>{
      event.preventDefault();
      props.onChangeMode(event.target.id); // App.js의 onChangeMode 함수를 실행한다
    }}>{element.title} </a>
    </li>);
  });

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props){
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function App() {
  // const _mode = useState('welcome');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  // 위의 3줄은 아래 한 줄로 대체 가능하다
  const [mode, setMode] = useState('welcome');

  const topics = [
    {id:1, title:'html', desc:'html is...'},
    {id:2, title:'css', desc:'css is...'},
    {id:3, title:'js', desc:'js is...'}
  ]

  let content = null;
  if(mode === 'welcome'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  }
  else if(mode === 'read'){
    content = <Article title="Read" body="Read, WEB"></Article>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={function(){ // App.js의 onChangeMode 함수 // onChangeMode={function()을 onChangeMode={()=> 로 바꿀 수 있다
        setMode('welcome');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        setMode('read');
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
~~~

<br/>

  - 최종코드

#App.js
~~~javascript
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// props안에는 속성이 들어오게 된다
function Header(props){
  //console.log('props', props, props.title);
  return (
    <header>
      <h1><a href='/' onClick={function(event){ // onClick={function(event)을 onClick={(event)=>로 바꿀 수 있다
        event.preventDefault(); // a태그의 기본 동작을 막는다
        props.onChangeMode(); // App.js의 onChangeMode 함수를 실행한다
      }}>{props.title}</a></h1>
    </header>
  )
}

function Nav(props){
  const lis = [];
  props.topics.forEach(element => {
    lis.push(<li key={element.id}>
      <a id={element.id} href={'/read/' + element.id} onClick={event=>{
      event.preventDefault();
      props.onChangeMode(event.target.id); // App.js의 onChangeMode 함수를 실행한다
    }}>{element.title} </a>
    </li>);
  });

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props){
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function App() {
  // const _mode = useState('welcome');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  // 위의 3줄은 아래 한 줄로 대체 가능하다
  const [mode, setMode] = useState('welcome');
  const [id, setId] = useState(null);

  const topics = [
    {id:1, title:'html', desc:'html is...'},
    {id:2, title:'css', desc:'css is...'},
    {id:3, title:'js', desc:'js is...'}
  ]

  let content = null;
  if(mode === 'welcome'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  }
  else if(mode === 'read'){
    let title, body = null;
    console.log('id', id);

    for(let i = 0; i < topics.length; i++){
      if(topics[i].id === Number(id)){
        title = topics[i].title;
        body = topics[i].desc;
      }
    }

    content = <Article title={title} body={body}></Article>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={function(){ // App.js의 onChangeMode 함수 // onChangeMode={function()을 onChangeMode={()=> 로 바꿀 수 있다
        setMode('welcome');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('read');
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
~~~

###### [State](#state)
###### [Top](#top)

<br/>
<br/>

***

# express설치
  - 1. nodejs설치
  - 2. server.js파일 생성 및 코드 넣기
  - 3. npm init -y
  - 4. npm install express
  - 5. npm install cors

#server.js
~~~#
const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // 포트 설정

// express.json() 은 유저가 보낸 array/object 데이터를 출력해보기 위해 사용
// cors는 다른 도메인주소끼리 ajax 요청 주고받을 때 필요
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'my-app/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/my-app/build/index.html'));
  });

// 리액트가 라우팅하게 전권을 넘기고 싶다면 사용하기(가장 마지막에 위치해야함)
// react-router-dom설치 필요
// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, '/react-project/build/index.html'));
// });

app.listen(port, function () {
  console.log('listening on 3000')
});
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/ce92daeb-8e1a-4f27-8e87-c7eef37c3a66)

###### [express설치](#express설치)
###### [Top](#top)

<br/>
<br/>

***
