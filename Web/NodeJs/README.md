###### Top

- [node server실행하기](#node-server실행하기)
- [개발시 pm2사용하기](#개발시-pm2사용하기)
- [url쿼리 스트링 가져오기](#url쿼리-스트링-가져오기)
- [묘듈 가져오기](#묘듈-가져오기)
- [url쿼리 스트링 가져오기](#url쿼리-스트링-가져오기)
- [FILE읽어오기](#file읽어오기)
- [참고할 사이트](#참고할-사이트)

<br/>
<br/>

***

# node server실행하기
  - cmd에서 JS파일실행(서버실행)
    - CMD에서 “node <실행할.js파일 이름>”
    - 실행하면 서버가 대기를 하고 있음

###### [node server실행하기](#node-server실행하기)
###### [Top](#top)

<br/>
<br/>

***

# 개발시 pm2사용하기
  - 개발시 pm2사용하기
    - pm2는 js를 서버로 틀어 이용할때, 꺼지면 재 실행을 해주고, 소스가 바뀌었을때도 재 실행을 해준다
      - npm install pm2 -g : pm2설치
      - pm2 start main.js --watch : pm2시작하면서 main.js파일이 수정됬을때, 웹브라우저만 리로드 하면 최신화됨
      - pm2 log : 에러가 난 곳을 바로 보여줌

###### [개발시 pm2사용하기](#개발시-pm2사용하기)
###### [Top](#top)

<br/>
<br/>

***

# url쿼리 스트링 가져오기
  - url쿼리 스트링 가져오기
    - cmd에서 JS파일실행(서버실행)
      - CMD에서 “node <실행할.js파일 이름>”
      - 실행하면 서버가 대기를 하고 있음
    - 접속할 url로 이동(뒤에 쿼리 스트링 임의로 담아 주기)
      - http://localhost:5500/?id=aaaa
      - app.listen(5500) 에 포트를 꼭 맞춰 줘야 한다

#main.js
~~~JavaScritp
var http = require('http');
var fs = require('fs');
var url = require('url');


var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryDate = url.parse(_url, true).query;
    console.log(queryDate.id);
    if(_url == '/'){
        _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));


});
app.listen(5500);
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/bfa15210-0bd4-46a0-8517-0332ec846ecb)

  - response.end(fs.readFileSync(__dirname + url));
    - JavaScript가 실행했을때 어떤 데이터를 출력할 지 정하는것, 코드를 아래 와 같이 바꾸게 되면 쿼리 스트링 id값에 따라 화면에 글자가 출력된다

#main.js
~~~JavaScritp
var http = require('http');
var fs = require('fs');
var url = require('url');


var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryDate = url.parse(_url, true).query;


    if(_url == '/'){
        _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryDate.id);
 
});
app.listen(5500);
~~~

#연습
  - 아래와 같은 코드를 가지고서는, js파일 하나로 동적으로 보이게 만들어 낸다

#main.js
~~~JavaScritp
var http = require('http');
var fs = require('fs');
var url = require('url');


var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryDate = url.parse(_url, true).query;
    var title = queryDate.id


    if(_url == '/'){
       title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    var template = `
    <!doctype html>
<html>
<head>
  <title>WEB1 - ${title}</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="/">WEB</a></h1>
  <ol>
    <li><a href="/?id=html">HTML</a></li>
    <li><a href="/?id=css">CSS</a></li>
    <li><a href="/?id=javascript">JavaScript</a></li>
  </ol>
  <h2>${title}</h2>
  <p>
    Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.
  </p>
</body>
</html>
    `;
    response.end(template);
 
});
app.listen(5500);
~~~

###### [url쿼리 스트링 가져오기](#url쿼리-스트링-가져오기)
###### [Top](#top)

<br/>
<br/>

***

# 묘듈 가져오기
  - require 을 사용해서 가져온다
  - 첫번째 인자에는 가져올 모듈의 path값을 넣어 준다
  - 반환받은 변수로 모듈에 있는 함수와 여러 기능들을 사용 할 수 있게 된다

~~~JavaScritp
var http = require('http');
var fs = require('fs');
var url = require('url');
~~~

###### [묘듈 가져오기](#묘듈-가져오기)
###### [Top](#top)

<br/>
<br/>

***

# url쿼리 스트링 가져오기
  - url에서 ? 뒤에 있는 값들이 쿼리 스트링이다

~~~JavaScritp
var url = require('url');
var queryDate = url.parse(_url, true).query;
~~~

###### [url쿼리 스트링 가져오기](#url쿼리-스트링-가져오기)
###### [Top](#top)

<br/>
<br/>

***

# FILE읽어오기
  - JavaScript에서 file데이터를 읽어, 웹에 출력하기

#main.js
~~~JavaScritp
// 모듈 가져오기
var http = require('http');
var fs = require('fs');
var url = require('url');


// 웹서버
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryDate = url.parse(_url, true).query;
    var title = queryDate.id


    if(_url == '/'){
       title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);


    // file 경로 가져오기
    let dir = `data/${queryDate.id}`;
    console.log(dir);


    // file 읽기
    fs.readFile(dir, 'utf8' , (err, readDate) => {
    if (err) {
        console.error(err);
        return
    }
    var template = `
        <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>
      <p>${readDate}</p>
    </body>
    </html>
        `;
        response.end(template);
    })
 
});
app.listen(5500);
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/7a4a48eb-7e27-4452-87d5-a10e47218c2a)

#비동기와 동기
~~~JavaScritp
const fs = require('fs');


// 동기적
console.log('A');
let result = fs.readFileSync('syntax/sample.txt', 'utf-8');
console.log(result);
console.log('C');
// A
// B
// C


console.log('');


// 비동기적(함수 원형에 collback이 있음)
console.log('A');
fs.readFile('syntax/sample.txt', 'utf-8', function(err, result){
  console.log(result);
});
console.log('C');
// A
// C
// B
~~~

###### [FILE읽어오기](#file읽어오기)
###### [Top](#top)

<br/>
<br/>

***

# 참고할 사이트
  - https://javafa.gitbooks.io/nodejs_server_basic/content/chapter3.html

###### [참고할 사이트](#참고할-사이트)
###### [Top](#top)

<br/>
<br/>

***
