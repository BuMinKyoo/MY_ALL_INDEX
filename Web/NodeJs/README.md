###### Top

- [개발시 pm2사용하기](#개발시-pm2사용하기)
- [url쿼리 스트링 가져오기](#url쿼리-스트링-가져오기)
- [묘듈 가져오기](#묘듈-가져오기)
- [url쿼리 스트링 가져오기](#url쿼리-스트링-가져오기)
- [FILE읽어오기](#FILE읽어오기)
- [참고할 사이트](#참고할-사이트)

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



###### [url쿼리 스트링 가져오기](#url쿼리-스트링-가져오기)
###### [Top](#top)

<br/>
<br/>

***
