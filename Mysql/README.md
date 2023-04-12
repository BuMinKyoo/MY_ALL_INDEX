
- [bat파일로 테이블생성, DB생성하기](#bat파일로-테이블생성-db생성하기)

<br/>
<br/>

***

# bat파일로 테이블생성, DB생성하기
  - bat파일을 실행해서, 로컬 DB에 테이블과 데이터베이스를 만들수 있다

<br/>

  - Osql : Microsoft SQL Server의 명령줄 유틸리티. 이 유틸리티를 사용하면 SQL 스크립트를 실행하거나 대화형 쿼리를 실행할 수 있다
  - -U qnalsrb : qnalsrb라는 사용자 이름으로 로그인한다
  - -P 486153qwe!@ : 486153qwe!@라는 비밀번호로 로그인한다
  - -S (local) : 로컬 서버에 연결한다
  - -d master : master 데이터베이스를 사용한다
  - -i "CreateDB_ASP.sql" : CreateDB_ASP.sql 파일의 SQL 스크립트를 실행한다.
    - bat파일과 sql파일이 같은 폴더에 있다면 실행할 sql파일의 이름만 적어도 되지만, 다른 폴더에 있다면 sql파일의 경로를 써주어야 한다

<br/>

#bat파일
~~~c++
Net start MSSQLServer

Osql -U qnalsrb -P 486153qwe!@ -S (local) -d master -i "C:\Users\qnals\Downloads\aaa\CreateDB_ASP.sql"

Osql -U qnalsrb -P 486153qwe!@ -S (local) -d pos_db -i "CreateTB_ASP.sql"
~~~

