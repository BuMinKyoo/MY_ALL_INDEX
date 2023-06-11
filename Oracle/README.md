<br/>

###### Top

  - [데이터베이스의 개념](#데이터베이스의-개념)
  - [데이터베이스 주요 기능](#데이터베이스-주요-기능)
  - [SQL분류](#sql분류)
  - [데이터 조회 : SELECT](#데이터-조회--select)
    - 테이블 전체 조회(SELECT *)
    - 특정 컬럼만 조회(SELECT 열 이름)
    - 별칭 사용하기(SELECT열 이름 AS별칭)
    - 중복 제외(SELECT DISTINCT)
    - 연결 연산자( | | )
    - SELECT 문 산술 연산자
  - [연산자 조건 검색 : WHERE](#연산자-조건-검색--where)
    - 산술 연산자(+, -, *, /)
    - 비교 연산자(=, <>, (!=), >, >=, <, <=)
    - 논리 연산자(AND, OR, NOT)
    - SQL 연산자(BETWEEN, IN, LIKE, IS NULL)
  - [정렬과 집합 연산 : ORDER BY](#정렬과-집합-연산--order-by)
    - 집합 연산자(UNION, UNION, ALL, MINUS, INTERSECT)
  - [함수](#함수)
    - 단일행 함수
    - 다중행 함수
    - 문자, 숫자, 날자 함수
  - [변환함수](#변환함수)
    - 자동(암묵적) 변환
    - 수동(명시적) 변환
    - 날짜 지정 형식
    - 시간 지정 형식
    - 기타 형식
  - [일반함수](#일반함수)
    - NVL
    - NVL2
    - DECODE
    - CASE
    - RANK
    - DENSE_RANK
    - ROW_NUMBER
  - [집계 및 그룹 함수](#집계-및-그룹-함수)
    - COUNT, SUM, AVG, MIN, MAX, STDDEV, VARIANCE
  - [GROUP BY](#group-by)
  - [HAVING](#having)
  - [JOIN](#join)
    - 카티션 곱(Cartesian Product)
    - 동등 조인(Equi Join)
    - 비동등 조인(Non Equi Join)
    - 외부 조인(Outer Join)
    - 자체 조인(Self Join)
  - [서브 쿼리](#서브-쿼리)
    - 단일 행 서브 쿼리(WHERE절)
    - 다중 행 서브 쿼리(WHERE절)
    - 인라인 뷰(Inline View)(FROM절)
    - SELECT절 서브 쿼리
  - [INSERT](#insert)
  - [UPDATE](#update)
  - [DELETE](#delete)
  - [데이터 무결성과 제약 조건](#데이터-무결성과-제약-조건)
  - [테이블 생성, 수정, 삭제](#테이블-생성-수정-삭제)
  - [기타](#기타)
    - DUAL테이블

<br/>
<br/>

***

# 데이터베이스의 개념
  - 방대한 데이터를 효율적으로 관리하기 위해 컴퓨터에 통합,저장한 것
  - 특정 조직의 여러 사용하자 공유하여 사용 할 수 있음
  - 데이터베이스 관리 시스템(DBMS)이라는 프로그램을 이용하여 관리

###### [데이터베이스의 개념](#데이터베이스의-개념)
###### [Top](#top)

<br/>
<br/>

***

# 데이터베이스 주요 기능
  - 데이터 정의 언어(DDL)
    - 데이터베이스 구조 정의 및 수정에 사용
    - 데이터 저장 구조, 데이터 접근 방법, 데이터 형식 등의 정의가능
  - 데이터 조작 언어(DML)
    - 데이터베이스에 저장된 데이터를 검색, 수정, 삽입, 삭제할 때 사용
  - 데이터 제어 언어(DCL)
    - 데이터를 정확하고 안전하게 보호 관리
    - 데이터베이스의 무결성 유지, 보안 및 접근 제어, 시스템 장애로부터의 복구, 병행수행 제어 가능 등을 수행

###### [데이터베이스 주요 기능](#데이터베이스-주요-기능)
###### [Top](#top)

<br/>
<br/>

***

# SQL분류
  - DML(Data Manipulation Language)
    - 데이터 조작 언어
    - 데이터를 조작(선택, 삽입, 수정, 삭제)하는 데 사용되는 언어
    - DML 구문이 사용되는 대상은 테이블의 행
    - DML 사용하기 위해서는 꼭 그 이전에 테이블이 정의되어 있어야 함
    - SELECT, INSERT, UPDATE, DELETE 구문
  - DDL(Data Definition Language)
    - 데이터 정의 언어
    - 데이터베이스, 테이블, 뷰, 인덱스 등의 데이터베이스 개체를 생성/삭제/변경하는 역할
    - DDL은 트랜잭션 발생시키지 않음
    - CREATE, DROP, ALTER 구문
    - ROLLBACK이나 COMMIT 사용 불가
  - DCL(Data Control Language)
    - 데이터 제어 언어
    - 사용자에게 어떤 권한을 부여하거나 빼앗을 때 주로 사용하는 구문
    - GRANT, REVOKE구문
  - TCL(Transaction Control Language)
    - 트랜잭션이 발생하는 SQL
    - 테이블의 데이터를 변경(입력/수정/삭제) 할 때 실제 테이블에 완전히 적용하지 않고, 임시로 적용시키며 취소 가능
    - DML에서 실행한 사항을 관리
    - COMMIT, ROLLBACK, SAVEPOINT 구문

###### [SQL분류](#sql분류)
###### [Top](#top)

<br/>
<br/>

***

# 데이터 조회 : SELECT
  - 데이터베이스 내 테이블에서 원하는 데이터를 조회 및 분석하는데 사용되며, 일반적으로 가장 많이 사용되는 구문

<br/>

  - 테이블 전체 조회(SELECT *)
~~~
SELECT *
FROM departments;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/5c5442b8-f8ed-4fea-a13e-ac3cfd4632be)

<br/>

  - 특정 컬럼만 조회(SELECT 열 이름)
    - 테이블에서 필요한 열만 조회
    - 여러 개의 열을 가져오고 싶을 때는 콤마로 구분
    - 열 이름의 순서는 출력하고 싶은 순서대로 배열
~~~
SELECT department_id, department_name
FROM departments;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/d2bb999a-0347-4629-8448-3b42baec4d85)

<br/>

  - 별칭 사용하기(SELECT열 이름 AS별칭)
    - 열 이름을 다른 별칭으로 표시
~~~
SELECT department_id AS 부서ID, department_name AS 부서이름
FROM departments;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/cdbb9fb5-d745-4bf6-a84f-8f07f4895602)

<br/>

  - 중복 제외(SELECT DISTINCT)
    - 중복된 것은 제외해서 출력
    - 테이블의 크기가 클수록 효율적임

~~~
SELECT DISTINCT location_id
FROM departments;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/c1faa975-056e-4405-8649-94ac3919ae1f)

<br/>

  - 연결 연산자( | | )
    - 컬럼이나 문자열을 연결할 때 사용

~~~
// 컬럼 2개 연결
SELECT department_id || department_name
FROM departments;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/1011fb47-80b3-473e-9a66-a56776bffb9d)

<br/>

~~~
// 문자열과 컬럼 연결
SELECT 'Department of' || department_name
FROM departments;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/a35ee2fa-e29c-45f9-8f74-21602289db85)

<br/>

~~~
// || 연산자 사용후 그것을 별칭으로 사용하기
SELECT 'Department of' || department_name AS 부서이름
FROM departments;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/dea421e8-3e2a-4b74-a207-0b9dd9f78f31)

- 산술 연산자
![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/2cbfb49e-4de3-4b55-8416-008ec903ca01)

<br/>

~~~
// 컬럼에 덧셈하기(컬럼이 덧셈 가능한 숫자 유형일 경우)
// salary라는 컬럼에 500만큼이 더해져서 보이게 된다
// 덧셈, 뺄셈, 곱셈, 나눗셈 모두 같은 방식으로 가능하다
SELECT first_name, last_name, salary + 500
FROM employees;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/ff61e1a7-4267-4fce-84ad-6a2df906374a)

###### [데이터 조회 : SELECT](#데이터-조회--select)
###### [Top](#top)

<br/>
<br/>

***

# 연산자 조건 검색 : WHERE
  - 특정 조건을 만족하는 데이터만 조회
  - 연산자, 컬럼명, 표현식, 숫자, 문자 등을 이용한 조건 제시
  - 연산자
    - 산술 연산자(+, -, *, /)
    - 비교 연산자(=, <>, (!=), >, >=, <, <=)
    - 논리 연산자(AND, OR, NOT)
    - 집합 연산자(UNION, UNION, ALL, MINUS, INTERSECT)
    - SQL 연산자(BETWEEN, IN, LIKE, IS NULL)
  - 숫자뿐만 아니라 날짜 값을 비교하는 것도 가능
    - 예) ‘A’ < ‘C’
    - 예) ‘2019-12-01’ < ‘2019-12-02’
  - 조건에서 문자나 날짜 값은 작은 따옴표로 묶어서 표현

<br/>

  - 연산자 우선순위
![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/d49001e1-4c26-41ce-8fb6-7a72017ba770)

  - 비교연산자
![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/8e9d5bf3-e7ea-4064-96b5-1615b78266c5)

<br/>

~~~
// 비교 연산자는 아래와 같이 사용하면 된다
SELECT *
FROM employees
WHERE employee_id = 100;

SELECT *
FROM employees
WHERE employee_id <>100;
~~~

<br/>

~~~
// 5000과 10000사이의 값을 가져온다
SELECT *
FROM employees
WHERE salary BETWEEN 5000 AND 10000;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/e46809e1-27a3-4bbd-8d49-65102ab13ef0)

<br/>


~~~
// manager_id  가 100,110,120 인것을 가져온다
SELECT *
FROM employees
WHERE manager_id NOT IN(100,110,120);
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/c44e3568-a5bc-4fca-a1dd-65300c605b90)

<br/>

~~~
// % : 문자가 없거나 하나 이상의 어떤 값이 와도 상관 없다
SELECT last_name
FROM employees
WHERE last_name LIKE 'K%';
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/e5fee5c1-9cea-4ece-bcde-de49c688fad5)

<br/>

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/bddd2f1b-f15d-4f2a-83c0-3379409f192f)

~~~
// _ : 하나의 문자가 어떤 값이 와도 상관 없다
// 아래와 같이 _ 3개로 3글자를 추출할 수도 있다
SELECT last_name
FROM employees
WHERE last_name LIKE '___';
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/280a7fc4-2a77-48cb-8bf5-69aa4c9a2a1e)

<br/>

  - 논리연산자
![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/e7d320bd-4e81-4ef3-96e3-e8430362da41)

~~~
// 논리연산자는 아래와 같이 사용할 수 있다
SELECT *
FROM employees
WHERE employee_id >= 120 AND employee_id <= 130;

SELECT *
FROM employees
WHERE manager_id = 100 OR manager_id = 120;

SELECT *
FROM employees
WHERE NOT department_id = 50 AND NOT department_id = 80;
~~~

###### [연산자 조건 검색 : WHERE](#연산자-조건-검색--where)
###### [Top](#top)

<br/>
<br/>

***

# 정렬과 집합 연산 : ORDER BY
  - ORDER BY
    - ORDER BY키워드를 이용해 결과 테이블 내용을 사용자가 원하는 순서로 출력
    - ORDER BY키워드와 함께 정렬 기준이 되는 속성과 정렬 방식을 지정
      - 오름차순(기본) : ASC / 내림차순 : DESC
      - 널 값은 오름차순에서 맨 마지막에 출력되고, 내림차순에서는 맨 먼저 출력된다
      - 여러 기준에 따라 정렬하려면 정렬 기준이 되는 속성을 차례대로 제시

~~~
// first_name을 오름차순으로 정렬해준 테이블을 보여준다
SELECT first_name, last_name
FROM employees
ORDER BY first_name;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/c9000ce4-958a-4f29-aa57-e5a9e596ef36)

<br/>

~~~
// first_name을 내림차순으로 정렬해준 테이블을 보여준다
SELECT first_name, last_name
FROM employees
ORDER BY first_name DESC;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/05076907-68f3-4d0d-a4c0-63c17b031e56)

<br/>

~~~
// country_id오름차순 정렬 후, city오름차순으로 정렬한다
SELECT country_id, city
FROM locations
ORDER BY country_id, city;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/43f120cd-37e1-4a3b-b61a-b765d3442368)

<br/>

~~~
// country_id 를 내림 차순 정렬 후, city 를 오름차순 정렬한다
SELECT country_id, city
FROM locations
ORDER BY country_id DESC, city;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/cd908ec7-9fc7-4c7e-8912-f6d8a94ddc82)

<br/>

  - UNION : 합집합(중복 제외)

~~~
//이것과,
SELECT employee_id, first_name, department_id
FROM employees
WHERE department_id = 100;

//이것의 결과를 합치고 싶을때, 중간에 UNION키워드를 사용하면 된다
SELECT employee_id, first_name, department_id
FROM employees
WHERE department_id = 60;

// SELECT해오는 컬럼이 같아야함
SELECT employee_id, first_name, department_id
FROM employees
WHERE department_id = 100
UNION
SELECT employee_id, first_name, department_id
FROM employees
WHERE department_id = 60;
~~~

<br/>

~~~
// 140보다 같거나 큰것들을 다 빼버림
SELECT employee_id, first_name
FROM employees
WHERE employee_id <= 160
MINUS
SELECT employee_id, first_name
FROM employees
WHERE employee_id >= 140;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/f770e30b-ded1-46d8-a57f-23eb67f05794)

<br/>

~~~
// 교집합 으로써 140이상 160이하만 나오게 된다
SELECT employee_id, first_name
FROM employees
WHERE employee_id <= 160
INTERSECT
SELECT employee_id, first_name
FROM employees
WHERE employee_id >= 140;
~~~

<br/>

  - UNION ALL : 합집합(중복 포함)
  - MINUS : 차집합
  - INTERSECT : 교집합

###### [정렬과 집합 연산 : ORDER BY](#정렬과-집합-연산--order-by)
###### [Top](#top)

<br/>
<br/>

***

# 함수
  - 자주 사용되는 기능을 미리 만들어 놓고 필요할 때마다 사용하는 개념
  - DBMS에서는 주로 사용되는 문자, 숫자, 날짜 등의 다양한 기능과 데이터 타입을 변환하는 함수들을 제공
![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/a13ab82f-ee01-4e10-9726-c017e5782d5e)

  - 단일행 함수
    - 데이터 값 계산 및 조작
    - 행별로 하나의 결과를 반환
    - SELECT, WHERE, ORDER BY 절에서 사용
    - 중첩 함수로 사용 가능(가장 안쪽 단계에서 바깥쪽 단계순으로 진행)
    - 문자, 숫자, 날짜, 변환, 일반 함수 등이 존재
  - 다중행 함수(그룹 함수, 집계 함수)
    - 행의 그룹 계산 및 요약
    - 여러 행이 입력되고, 결과는 하나의 행씩 반환
    - GROUP BY, HAVING절 사용

<br/>

  - 문자 함수
    - 문자 함수는 주로 데이터 조작에 사용되며 문자와 문자열은 작은 따옴표(‘)로 묶어서 표현
    - 문자 함수 종류
![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/e787a109-5aaa-42e3-94a0-8bbd86fab7cc)

~~~
// 함수사용 예제
SELECT first_name, LOWER(first_name),
       UPPER(first_name), INITCAP(first_name)
FROM employees;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/2df75384-e6c5-4f63-aee9-0d6e4560d01f)

<br/>

~~~
// 함수 사용 예제2
// 그냥 TRIM()함수는 공백을 제거 해줌
SELECT TRIM(' Suan  '), TRIM('  Su an')
FROM dual;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/52aa9a08-5c1e-4470-8745-e8b0bab7a0c0)

<br/>

  - 숫자 함수
    - 숫자 함수는 주로 숫자 계산과 추가 처리에 사용
    - 숫자 함수 종류

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/4796ab6c-1d66-4189-86f8-bdd2f3cb1f9d)

<br/>

  - 날짜 함수
    - 데이터 중의 날짜 형식을 가지는 데이터를 계산하기 위해서 사용되는 날짜 함수
      - 날짜(Date) + 숫자(Number) = 날짜에 숫자 이후의 날짜
      - 날짜(Date) - 숫자(Number) = 날짜에 숫자 이전의 날짜
      - 날짜(Date) + 날짜(Date) = 날짜에 날짜를 더한 날짜
      - 날짜(Date) - 날짜(Date) = 날짜에 날짜를 뺀 날짜
    - SYSDATE
      - 오라클이 설치된 시스템의 현재 날짜를 반환

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/a91ef669-b3bf-4e54-817f-1d4b6d160e47)

<br/>

~~~
// NEXT_DAT사용법
SELECT SYSDATE, NEXT_DAY(SYSDATE, '월요일'), NEXT_DAY(SYSDATE, '금요일')
FROM dual;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/1ada9d09-ba0f-41b0-abd5-4aee9eb14789)

###### [함수](#함수)
###### [Top](#top)

<br/>
<br/>

***

# 변환함수
  - 오라클에서 제공하는 데이터 타입을 필요에 따라 변환
  - 자동(암묵적) 변환

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/f8defefa-b15d-4d7d-a093-dc4129ec1167)

<br/>

  - 수동(명시적)변환

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/8fb3e8ad-b673-4301-94bf-20faa2e96ecf)

<br/>

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/d0ae8dc0-da83-434f-a948-6ee03da8697f)

<br/>

  - 날짜 지정 형식

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/70d11741-1d39-4dec-a2bd-94f0a6b73525)

<br/>

~~~
// TO_CHAR을 이용한 날짜 지정형식 함수 예제
SELECT TO_CHAR(SYSDATE, 'CC/AD/Q')
FROM dual;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/4d31cca8-d26f-42b6-81f0-f73e825b01b7)

<br/>

~~~
// TO_CHAR을 이용한 날짜 지정형식 함수 예제(2)
SELECT TO_CHAR(SYSDATE, 'YYYY/MM/DD')
FROM dual;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/c92a3dca-8e9b-4a16-9110-a1e2229ee327)

<br/>

~~~
// TO_CHAR 및 TO_DATE를 사용해서 특정 날짜 요일 구하기
SELECT TO_CHAR(TO_DATE('20210101'), 'DAY')
FROM dual;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/7add35c5-f1b4-4f8a-82b6-939af7520af3)

<br/>

  - 시간 지정 형식

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/8ca71d87-166f-4417-857c-61a8d8810344)

<br/>

  - 기타 형식

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/0620e7f7-6094-4c8b-9299-103aeb0b228f)

###### [변환함수](#변환함수)
###### [Top](#top)

<br/>
<br/>

***

# 일반함수
  - 방대한 데이터를 효율적으로 관리하기 위해 컴퓨터에 통합,저장한 것
  - 특정 조직의 여러 사용하자 공유하여 사용 할 수 있음
  - 데이터베이스 관리 시스템(DBMS)이라는 프로그램을 이용하여 관리

<br/>

  - NVL( ) : NULL값을 특정한 값으로 치환하는 함수

~~~
// manager_id 가 null이라면 100으로 바꿔줘
SELECT manager_id, NVL(manager_id, 100)
FROM departments;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/3cce0136-9555-4b38-aa6e-99418a219429)

<br/>

  - NVL2( ) : NULL값인 경우와 아닌 경우를 구분하여 특정한 값으로 치환하는 함수

~~~
// manager_id 가 null아니면 관리자 있음, null이면 주소 없음 으로 바꾼다
SELECT department_name,
       manager_id,
       NVL2(manager_id, '관리자 있음', '주소 없음')
FROM departments;       
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/a386f91c-474d-40ce-a6ff-bf7b862f5605)

<br/>

  - DECODE( ) : 데이터가 조건 값과 일치하면 치환 값을 출력하고, 일치하지 않으면 기본값을 출력하는 조건 논리 처리 함수

~~~
// min_salary가 2500이면 min_salary * 1.1하고 아니면 min_salary 이대로 출력한다
SELECT job_title, min_salary,
       DECODE(min_salary, 2500, min_salary * 1.1, min_salary)
FROM jobs;       
~~~

<br/>

  - CASE( ) : 복잡한 논리 조건 처리 함수
    - DECODE( )는 한줄 논리 연산에 사용하고, CASE( )는 여러줄 논리 연산에 사용한다
    - CASE( ) WHEN THEN ELSE 문법

~~~
SELECT job_title, min_salary,
    CASE
        WHEN min_salary < 4000 THEN min_salary * 1.2
        WHEN min_salary BETWEEN 4000 AND 6000 THEN min_salary * 1.1
        ELSE min_salary
    END AS 최소금여변경
FROM jobs;    
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/6d8a2035-1436-4a9c-991e-47a06a4e10e4)

<br/>

  - RANK( ) : 공통 순위는 건너뛰어 다음 순위를 출력하는 순위 함수
    - 공통 순위가 있다면 공통2등이 2명이면 3등이 없어진다.
  - DENSE_RANK( ) : 공통 순위를 건너뛰지 않고, 다음 순위를 출력하는 순위 함수
    - 공통 순위가 있어도 공통2등이 2명이여도 그다음 등수인 사람은 3등을 가진다
  - ROW_NUMBER( ) : 공통 순위 없이 순위를 출력하는 순위 함수
    - 공통 2등이 2명이여도, 등수를 나누어서 표기한다

~~~
// RANK 함수 사용시 어떻게 표현애 줄지는 OVER이라는 문법 뒤에 작성하도록 하고 그뒤에 있는 것은 컬럼명을 바꾸겠다는것

SELECT first_name, salary,
       RANK() OVER(ORDER BY salary DESC) RANK,
       DENSE_RANK() OVER(ORDER BY salary DESC) DENSE_RANK,
       ROW_NUMBER() OVER(ORDER BY salary DESC) ROW_NUMBER
FROM employees;
~~~

###### [일반함수](#일반함수)
###### [Top](#top)

<br/>
<br/>

***

# 집계 및 그룹 함수
  - 여러 행에 대해서 하나의 결과를 출력하는 그룹 함수를 이용하여 여러가지 집계 연산을 수행
  - 집계 함수 종류
![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/455aaa2c-3337-4f1c-81d3-a855c95b6ca8)

  - COUNT( ) 함수는 일반적으로 null값을 세어 주지 않는다
  - COUNT(*) 함수를 사용하여 null값을 포함한 전체 행의 갯수를 알 수 있다.

<br/>


~~~
// OVER 기준을 활용한 출력
// SUM(salary) 은 집계함수로써 한줄만 나와야 하지만 아래와 같이 기준을 잡아 주면 누적합을 볼 수 있다
SELECT first_name, salary,
       SUM(salary) OVER (ORDER BY first_name)
FROM employees;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/3b00ec87-f34b-45d5-abf5-f693cbd9f0e1)

###### [집계 및 그룹 함수](#집계-및-그룹-함수)
###### [Top](#top)

<br/>
<br/>

***

# GROUP BY
  - 지정한 열의 데이터 값을 기준으로 그룹화하여 집계 함수 적용
  - GROUP BY 동작 순서
    - 테이블에서 WHERE 조건식에 맞는 데이터 값만 구분
    - 지정한 열 기준으로 같은 데이터 값으로 그룹화
    - 지정한 열들의 그룹화된 집계 결과 출력
  - GROUP BY 절 특징
    - WHERE 절은 그룹화 되기 전에 조건식 적용
    - GROUP BY 절 사용시 SELECT 절에 지정된 기준 열을 지정
    - SELECT 절에 그룹 함수 없이도 GROUP BY 절 사용 가능

<br/>

~~~
// job_id가 같은것들이 그룹되어 지고, SUM, AVG함수에 따라 작성된다
SELECT job_id, SUM(salary), AVG(salary)
FROM employees
GROUP BY job_id;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/1cdc7f6a-f78d-4146-b403-4054f0eb6209)

<br/>

~~~
// 위의 데이터에서 where절을 추가한것
SELECT job_id, SUM(salary), AVG(salary)
FROM employees
WHERE job_id LIKE 'AD%'
GROUP BY job_id;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/c9820345-1e09-4c16-92d8-4dbdb06d1387)

<br/>

~~~
// 위의 데이터에서 ORDER BY절을 추가한것
SELECT job_id, SUM(salary), AVG(salary)
FROM employees
WHERE job_id LIKE 'AD%'
GROUP BY job_id
ORDER BY SUM(salary) DESC;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/c90c416c-ec3b-41c7-bf1a-687e93624704)

<br/>

~~~
// 다중 GROUP BY절
SELECT job_id, department_id,
       SUM(salary), AVG(salary)
FROM employees
WHERE department_id BETWEEN 50 AND 100
GROUP BY job_id, department_id
ORDER BY job_id;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/68d04c89-80a0-452a-b96a-e6ddd88fc80b)

###### [GROUP BY](#group-by)
###### [Top](#top)

<br/>
<br/>

***

# HAVING
  - WHERE 절에서는 그룹 함수를 사용할 수 없음
  - 그룹화면 집계 결과에 조건식을 적용할 때 HAVING절 사용

~~~
// GROUP화된 것에 조건식을 HAVING으로 달 수 있다
SELECT job_id, SUM(salary), AVG(salary)
FROM employees
GROUP BY job_id
HAVING AVG(salary) > 10000;
~~~

<br/>

~~~
// 문법을 순서대로 작성하면 차례대로 이렇게 적용 시킬 수가 있다
SELECT manager_id, department_id, job_id,
       SUM(salary), MIN(salary), MAX(salary)
FROM employees
WHERE manager_id IN(100, 101)
GROUP BY manager_id, department_id, job_id
HAVING SUM(salary) BETWEEN 10000 AND 40000
ORDER BY manager_id, department_id;
~~~

###### [HAVING](#having)
###### [Top](#top)

<br/>
<br/>

***

# JOIN
  - 두 개 이상의 테이블을 서로 연결하는데 사용되는 기법
  - 테이블들은 특정 규칙에 따라 서로 상호 관계를 가짐
  - 조인 종류

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/ad136714-56b7-41a7-8ce5-55b6201854d2)

<br/>

  - 카티션 곱(Cartesian Product)
    - 공통되는 칼럼 없이 조인 조건이 없어서 모든 데이터가 조회

~~~
// employees첫째 행부터 마지막행이 departments의 첫째행에 대응되어 나오고, 다시 employees첫째 행부터 마지막행이 두번째행에 대응되어 나오는 식으로 수량은 둘의 곱셈으로 늘어난다
SELECT *
FROM employees, departments;
~~~

<br/>

  - 동등 조인(Equi Join)
    - 조인하는 테이블에서 조인 조건이 일치하는 것만 조회
    - 내부 조인이라고도 부름

~~~
// jobs 의 job_id와 job_history의 job_id가 일치하는 것만 join 해달라는 뜻
SELECT *
FROM jobs, job_history
WHERE jobs.job_id = job_history.job_id;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/1f048004-04a6-48bf-bd9c-89a30b3d3f2f)

<br/>

~~~
// 결과는 위와 동일, 테이블의 표현만 바뀐것
SELECT *
FROM jobs A, job_history B
WHERE A.job_id = B.job_id;
~~~

<br/>

  - 비동등 조인(Non Equi Join)
    - 테이블의 동일한 컬럼 없이 다른 조건으로 조인하는 방법

~~~
SELECT *
FROM employees E, jobs J
WHERE E.salary BETWEEN J.min_salary AND J.min_salary;
~~~

<br/>

~~~
SELECT E.first_name, E.hire_date, H.start_date, H.end_date
FROM employees E, job_history H
WHERE E.hire_date BETWEEN H.start_date AND H.end_date;
~~~

<br/>

  - 외부 조인(Outer Join)
    - 조인하는 테이블에서 조인 조건을 만족하지 않는 행도 출력
    - 동등 조인 조건을 만족하지 못하고 누락된 행을 출력할 때 사용

~~~
// jobs 테이블과 job_history  테이블에서 공통되지 않아 가져오지 못했던 jobs 테이블 데이터를 가져온다 
SELECT *
FROM jobs J, job_history H
WHERE J.job_id = H.job_id(+);
~~~

<br/>

~~~
// jobs 테이블과 job_history  테이블에서 공통되지 않아 가져오지 못했던 job_history 테이블 데이터를 가져온다 
SELECT *
FROM jobs J, job_history H
WHERE J.job_id(+) = H.job_id;
~~~

<br/>

  - 자체 조인(Self Join)
    - 자기 자신의 테이블과 조인하는 방법

~~~
SELECT E.first_name, E.last_name, M.first_name, M.last_name
FROM employees E, employees M
WHERE E.manager_id = M.employee_id;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/eaba672c-f652-4404-b7e1-b27b74ea50e9)

###### [JOIN](#join)
###### [Top](#top)

<br/>
<br/>

***

# 서브 쿼리
  - SELECT 문 안에 다시 SELECT 문이 기술된 쿼리
  - 상위 SELECT 문 안에 하위 SELECT 문이 포함된 형태라 중첩된 쿼리라고도 부름
  - 단일 SELECT 문 사용만으로는 복잡한 조건식을 만들 때 사용
  - 다른 테이블에서 데이터 값을 조회한 후 조건으로 사용할 때 사용
  - 서브쿼리 종류
    - 단일 행 서브 쿼리 : 하나의 행을 검색하는 서브 질의
    - 다중 행 서브 쿼리 : 하나 이상의 행을 검색하는 서브 질의
    - 다중 열 서브 쿼리 : 하나 이상의 열을 검색하는 서브 질의
  - 서브 쿼리 규칙
    - 서브 쿼리는 괄호를 묶어서 사용
    - 단일 행 연산자 또는 다중 행 연산자로 서브 쿼리 연결
    - 서브 쿼리 실행 후 메인 쿼리 실행
    - 여러 서브 쿼리를 중첩해서 사용 가능

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/fe6ba153-5615-4209-8fb4-0f67e14d58e2)

<br/>

  - 단일 행 서브 쿼리
    - 서브쿼리 SELECT 문에서 단일 행 결과를 메인 쿼리에 전달
    - WHERE에 사용되는 열의 개수와 데이터 타입 일치 필요
    - 단일 행 연산자 사용 : =, >, >=, <, <=, <>, !=

<br/>

~~~
// 단일 행 서브 쿼리 임으로, 서브 쿼리에서는 단 한줄만 결과가 나와야 한다
SELECT *
FROM employees
WHERE phone_number = ( SELECT phone_number
                       	FROM employees
                      	WHERE employee_id = 100 );
~~~

<br/>

~~~
// employee_id 가 200보다 큰것들만 나올 수 있도록 WHERE절을 만듬
SELECT *
FROM employees
WHERE employee_id > ( SELECT employee_id
                      FROM employees
                      WHERE employee_id = 200)
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/ce75a347-37eb-4566-899d-474c55ac5533)

<br/>

  - 다중 행 서브 쿼리
    - 서브쿼리 SELECT 문에서 다중 행 결과를 메인 쿼리에 전달
    - 단일 행 연산자는 사용할 수 없고, 다중 행 연산자만 사용 가능

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/ba816453-ec67-470c-98dd-171176d9f66b)

<br/>

~~~
SELECT *
FROM employees
WHERE salary IN ( SELECT MAX(salary)
                  FROM employees
                  GROUP BY department_id );
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/1bb081f8-1202-4c25-ba96-6bc915ba1613)

<br/>

~~~
// 서브쿼리에 하나라도 데이터가 맞는게 있다면 EXISTS 는 true가 되서 쿼리문이 작동 된다
SELECT *
FROM employees
WHERE EXISTS ( SELECT *
               FROM employees
               WHERE employee_id = 100 );
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/0ae1bd27-84df-4e4a-b783-e1bcb8812bfa)

<br/>

~~~
// ANY는 조건을 하나라도 
SELECT *
FROM employees
WHERE salary = ANY(6000, 10000, 12000);
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/fd32a895-e947-4669-9073-795de9e43aab)

<br/>

~~~
// ANY는 하나라도 만족하면 나오기 때문에 밑의 예제 에서는 6000보다 크기만 하면 전부 다 나오게 된다
SELECT *
FROM employees
WHERE salary > ANY(6000, 10000, 12000);
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/bf4be913-3684-4b2f-b14f-e981d7654efc)

<br/>

~~~
// ALL은 모두 만족시켜야 되기 때문에 6000보다 작거나 같은 것만 나오게 된다
SELECT *
FROM employees
WHERE salary <= ALL(6000, 10000, 12000);
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/d2d73f7e-762b-4e7d-98f6-37d74dcd850a)

<br/>

  - 인라인 뷰(Inline View)
    - FROM 절에 있는 서브쿼리가 인라인 뷰를 생성
    - FROM 절에 직접 기술하여 효율적인 검색 가능
    - FROM 절에 있는 서브쿼리에는 자주 별칭을 사용

<br/>

~~~
// FROM절에 사용함으로써 서브 쿼리에서 나온 질의를 하나의 테이블로 사용할 수 있다
SELECT *
FROM employees E, ( SELECT department_id
                    FROM departments
                    WHERE department_name = 'IT') D
WHERE E.department_id = D.department_id                    
~~~

<br/>

~~~
// 현재 D테이블에는 avg_sal라는 컬럼이 없지만, 아래와 같이 컬럼을 지정해서 뽑아 올 수도 있다
SELECT E.last_name, E.salary, D.avg_sal
FROM employees E, ( SELECT department_id, AVG(salary) avg_sal
                    FROM employees
                    GROUP BY department_id ) D
WHERE E.department_id = D.department_id
AND E.salary > D.avg_sal;
~~~

<br/>

~~~
SELECT department_name, ( SELECT AVG(salary)
                          FROM employees
                          GROUP BY department_name )
FROM departments;                          
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/d2acf422-2030-4e64-8987-2a4da43233ee)

###### [서브 쿼리](#서브-쿼리)
###### [Top](#top)

<br/>
<br/>

***

# INSERT
![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/2db33e54-2507-4ae3-9d2a-7647cef2414b)

~~~
// 어떤 테이블에 전체 컬럼을 1행 집어 넣을때는, 넣고자 하는 컬럼을 따로 지정해 주지 않아도 된다
INSERT INTO countries
VALUES ('KR', 'South Korea', 3);
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/c58ed959-249a-47f8-abcb-01bd1f10de28)

<br/>

~~~
// 특정한 컬럼에 값을 집어 넣을때는, 컬럼을 지정해준다
INSERT INTO countries(country_id)
VALUES ('KP');
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/878834cd-07ac-4e8b-a3f8-fb65a31d9470)



###### [INSERT](#insert)
###### [Top](#top)

<br/>
<br/>

***

# UPDATE
  - 테이블에 기존 값을 새로운 값으로 변경
![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/11d049f5-e809-44d9-9ff4-15b169af6f1a)

<br/>

~~~
// 한개의 컬럼만 UPDATE할 때
UPDATE countries
SET country_name = 'aa'
WHERE country_id = 'KR';
~~~

<br/>

~~~
// 여러개 컬럼을 UPDATE할 때
UPDATE jobs
SET job_id = 'IT QA', job_title = 'Quality Assurance'
WHERE job_id = 'IT DS';
~~~

###### [UPDATE](#update)
###### [Top](#top)

<br/>
<br/>

***

# DELETE
  - 테이블의 데이터를 삭제
![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/8f9a08bc-a9ef-4874-a7fb-55e76d1ed288)

<br/>

~~~
// 해당되는 줄이 삭제 된다
DELETE
FROM countries
WHERE country_id = 'KR';
~~~


###### [DELETE](#delete)
###### [Top](#top)

<br/>
<br/>

***

# 데이터 무결성과 제약 조건
![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/6912bd5d-c160-4831-bc8e-402d23b29ad1)

###### [데이터 무결성과 제약 조건](#데이터-무결성과-제약-조건)
###### [Top](#top)

<br/>
<br/>

***

# 테이블 생성, 수정, 삭제
  - 데이터베이스 객체
  - 테이블
  - 뷰
  - 인덱스
  - 시퀀스
  - 시노님
  - …등등

<br/>

  - CREATE : 데이터 베이스 객체 생성

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/243a6b37-0050-4cdd-a27e-3387cbc69b43)

~~~
CREATE TABLE customers
(   customer_id  number       NOT NULL PRIMARY KEY,
    first_name   varchar2(10) NOT NULL,
    last_name    varchar2(10) NOT NULL,
    email        varchar2(10),
    phone_number varchar2(20),
    regist_date  date
);
~~~

<br/>

  - ALTER : 데이터 베이스 객체 수정

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/edc8f900-37a8-4b6b-884a-66a91fb36d30)

~~~
ALTER TABLE customers
ADD ( gender varchar2(10) );
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/5eb6e4dc-810b-45e7-8619-567846a7cc43)

<br/>

  - 열을 추가할때 제약 조건을 추가할 수 있다
![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/dc05e050-dada-43d0-8784-79ba9b2ec35e)

<br/>

  - DROP : 데이터 베이스 객체 삭제
  - TRUNCATE : 테이블의 전체 데이터 삭제

###### [테이블 생성, 수정, 삭제](#테이블-생성-수정-삭제)
###### [Top](#top)

<br/>
<br/>

***

# 기타
  - DUAL테이블
    - 하나의 열 DUMMY와 하나의 값 ‘X’ 를 가지고 있는 테이블로 특정 테이블을 참조하지 않고 출력할 때 사용

~~~
SELECT *
FROM dual;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/768f3420-004c-4664-9576-5294b9c67682)

<br/>

  - DML 명령어를 최종적으로 반영하기 위한 방법
~~~
COMMIT;
~~~

![image](https://github.com/BuMinKyoo/MY_ALL_INDEX/assets/39178978/2856b2cb-bae6-41fe-9dd0-38ed1155a3d3)

<br/>

오라클 툴에 커밋과 롤백이 존재한다
커밋후에는 롤백이 불가능하다..!


###### [기타](#기타)
###### [Top](#top)

<br/>
<br/>

***
