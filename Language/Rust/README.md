<br/>

###### Top

  - [환경설정](#환경설정)
  - [Hello world](#hello-world)
  - [main,함수](#main함수)
  - [변수,상수](#변수상수)
  - [데이터 타입](#데이터-타입)
  - [함수,매서드,매크로,클로저](#함수매서드매크로클로저)
  - [제어문(if,match,for,loop,while)](#제어문ifmatchforloopwhile)
  - [컬렉션(vec,hashmap,hashset)](#컬렉션vechashmaphashset)
  - [문자열](#문자열)
  - [반복자](#반복자)
  - [Rust특징 소유권](#rust특징-소유권)
  - [구조체](#구조체)
  - [열거형Option,Result](#열거형optionresult)

<br/>
<br/>

***

# 환경설정
  - Microsoft C++ Build Tools 설치

<img width="1192" height="666" alt="image" src="https://github.com/user-attachments/assets/1bbc9865-8b41-4b54-8c1a-4bd260325932" />

<br/>
<br/>

  - Rust 다운로드 및 설치
    - 다운로드 사이트 : https://www.rust-lang.org/tools/install
    - 설치 확인 : rustc --version
    - 러스트 업데이트 : rustup update

<br/>

  - VS Code 설치
  - VS Code에서 Rust 디버깅을 위한 확장 툴 설치
    - https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools 설치
    - rust-analyzer 설치

###### [환경설정](#환경설정)
###### [Top](#top)

<br/>
<br/>

***

# Hello world
  - cargo new hello : hello 프로젝트 생성
  - src폴더 안쪽에 main생성
  - cargo run : main을 실행한다
    - main함수 위쪽에 Run을 마우스로 클릭해도 실행됨
  - 한번 run을 하면 exe가 생성되고, target -> debug폴더 안쪽에 생성됨

~~~rust
fn main() {
    println!("Hello, world!" );
}
~~~


###### [Hello world](#hello-world)
###### [Top](#top)

<br/>
<br/>

***

# main,함수

~~~rust
fn main() {    //1) 시작될 때 처음 호출되는 main 함수
    println!("1+...+100={}",get_sum(100));  //2) 화면 출력    3)함수의 호출
}

fn get_sum(n:u32) -> u32 {  //4)함수: 함수명, 파라미터, 리턴 타입
    let mut sum:u32 = 0;  //5)변수

// let: 변수를 선언합니다. (단, 기본적으로 값을 바꿀 수 없습니다.)
// mut: 'Mutable(가변적인)'의 약자로, 변수의 값을 바꿀 수 있도록 허락해 줍니다.

    for i in 1..=n {  //6)for 루프
        sum += i;
    }

    return sum;   //함수의 리턴 값
}
~~~

<br/>

  - main함수에 인자 넘기기
~~~rust
use std::env;

fn main() {    //1) 시작될 때 처음 호출되는 main 함수
    println!("1+...+100={}",get_sum(100));  //2) 화면 출력    3)함수의 호출

    let args: Vec<String> = env::args().collect();  //7)명령행 인자 처리

    let src_file = &args[1];
    let tgt_file = &args[2];

    println!("Source File: {}", src_file);
    println!("Target File: {}", tgt_file);
}

fn get_sum(n:u32) -> u32 {  //4)함수: 함수명, 파라미터, 리턴 타입
    let mut sum:u32 = 0;  //5)변수

    for i in 1..=n {  //6)for 루프
        sum += i;
    }

    return sum;   //함수의 리턴 값
}
~~~


###### [main,함수](#main함수)
###### [Top](#top)

<br/>
<br/>

***

# 변수,상수
  - 변수 선언 : let키워드 사용

~~~rust
let <변수명>:<타입> = <값> 혹은 let <변수명>:<타입>

하지만 타입을 써주지 않아도 "타입추론"으르 자동으로 하기도 한다
let x = 5;  //x의 타입은 i32
let x:i32 = 5;라고 한 것과 동일

let만 쓰면 변경 불가가 됨으로 mut까지 쓰면 변경가능하게 됨
~~~

<br/>

  - let만 쓰면 변경 불가가 됨으로 mut까지 쓰면 변경가능하게 됨

<br/>

  - 상수선언
    - const를 사용한다

~~~rust
const <상수명>: <타입> = <값>
~~~

<br/>

  - 상수는 타입과, 값을 생략할 수 없다
  - 상수의 선언은 함수 밖에서도, 함수 안에서도 가능하다. 함수 밖에서 선언된 상수는 모든 함수에서 사용가능하고, 함수 안에서 선언된 상수는 해당 함수에서만 사용 가능하다.
   
~~~rust
const MAX:u32 = 1000;  //함수 밖에서 선언. 모든 함수에서 사용가능, 상수명은 대문자 사용
//const MAX_VEC:Vec<&str> = vec!["a","b"];  //에러. 상수의 값으로 vec! 매크로 사용할 수 없음

fn main(){
    const MIN:u32 = 1;
    println!("{}, {}", MAX, MIN);
    sub_fn();

    const MAX_FLOAT:f64 = 1000.123;
    const MAX_STR:&str = "Max String";
    const MAX_ARR:[i32; 4] = [1,2,3,4];
    println!("{}, {}, {:?}", MAX_FLOAT, MAX_STR, MAX_ARR);
}

fn sub_fn(){
    println!("{}", MAX);
}
~~~

<br/>

  - 상수와 변수의 차이
    - Rust에서 let만을 사용한 변수 선언은 Read only다. 이렇게 보면, 상수와 다를게 없다는 생각을 할 수 있다. 그러나, 몇 가지 점에서 다르다.
    - const로 선언되는 상수는 mutuable할 가능성 조차 없다. 변수는 mut 키워드에 의해 수정 가능할 수 있다.
    - 상수는 선언될 때 타입과 크기가 결정되야 한다. 따라서, <타입>과 <값> 모두 있어야 한다. 반면에 변수는 <값>만 주어져도 강제 타입추론에 의해 타입이 결정될 수 있고, <타입>만 주어지고 <값>은 나중에 지정할 수 있다.
    - 상수는 함수 밖에서 선언되어, 전체 함수에서 사용 가능하다. 그러나, 변수는 함수 밖에서 선언할 수 없다.

###### [변수,상수](#변수상수)
###### [Top](#top)

<br/>
<br/>

***

# 데이터 타입
  - 정수

<br/>

<img width="1132" height="523" alt="image" src="https://github.com/user-attachments/assets/a4ba393f-9a33-4231-9850-3a7ef3014b5a" />

<br/>
<br/>

~~~rust
fn main(){
    //1. 가독성을 위해 숫자 사이에 _ 사용 가능
    let a1 = 100_000;
    let a2 = 100000;
    println!("{} {}",a1,a2); //100000 100000

    //2. 16진수
    let b1 = 0xff;
    let b2 = 15*16 + 15; 
    println!("{} {}",b1,b2); //255 255

    //3. 8진수
    let c1 = 0o77;
    let c2 = 7*8 + 7;
    println!("{} {}",c1,c2); //63 63

    //4. 이진수
    let d1 = 0b1111_0000;
    let d2 = 128+64+32+16;
    println!("{} {}",d1,d2); //240 240

    //5. 문자 아스키 값
    let e1 = b'A'; //e1:u8
    let e2 = 'A';  //e2:char
    println!("{} {}", e1, e2); //65 A
}
~~~

<br/>

  - 부동소수점

<img width="982" height="240" alt="image" src="https://github.com/user-attachments/assets/96c75cf5-500b-474a-983a-4f143c0f6db9" />

<br/>
<br/>

~~~rust
    let x = 2.0; // f64
    let y: f32 = 3.0; // f32
    println!("x={}, y={}",x,y);

    let u:u32 = 40000;
    let sqrt_u = (u as f64).sqrt();
    println!("sqrt(u) = {}", sqrt_u);
~~~

<br/>

  - 불 타입

~~~rust
let t1 = true;
let t2:bool = false;

if t1 {
  ...
}
~~~

<br/>

  - 문자

~~~rust
let a = 'a';
let z = 'z';

println!("{}, {}", a,z);  //a, z
~~~

<br/>

  - 튜플

~~~rust
fn main(){
    let p:(&str, u32) = ("Lee", 20);
    println!("name:{}, age={}",p.0, p.1);  //name:Lee, age=20
    println!("{:?}",p);  //("Lee", 20)  // {:?}를 하면 전체 순회

    let info = get_info();
    println!("age:{}, height={}",info.0, info.1);  //age:20, height=60.5
}

fn get_info() -> (i32, f64){
    let age = 20;
    let height = 60.5;

    return (age,height);
}
~~~

<br/>

  - 배열

~~~rust
fn main(){
    //1. 배열의 선언과 사용
    let a = [1,2,3,4,5];
    println!("{}",a[0]);  //1
    println!("{:?}",a);  //[1, 2, 3, 4, 5]
    println!("{:?}", &a[0..2]); //[1,2]
    println!("{:?}", &a[3..]); //[4,5]

    //2. [값; 크기]로 여러 개의 값 지정
    let b = [1;5];  
    println!("{:?}",b);  //[1, 1, 1, 1, 1]

    //3. 배열 선언 후 나중에 값 지정
    let b1:[i32;5];
    b1 = [1;5];  
    println!("{:?}",b1);  //[1, 1, 1, 1, 1]

    //4. 에러 
    //let b2 = [1, 2.0]; //다른 데이터 타입

    // let x = [1,2,3];
    // println!("{}", x[3]); // 범위 밖 데이터 액세스

    //5. 벡터의 사용
    let mut v = vec![1,2,3];
    v.insert(3, 4);
    println!("{:?}",v); //[1,2,3,4]    
}
~~~

###### [데이터 타입](#데이터-타입)
###### [Top](#top)

<br/>
<br/>

***

# 함수,매서드,매크로,클로저
 
  - 함수선언은 fn으로 한다
~~~rust
// 정의
fn 함수이름(파라미터1 이름: 파라미터1 타입, 파라미터2 이름: 파라미터2 타입) -> 리턴 타입 {
  ...
}

// 기본형태
 fn main() {
    println!("Hello, world!");

    let c = add(3,5);
    println!("c={}",c);
}

fn add(a:i32, b:i32) -> i32{
    return a+b;
}

// return을 사용하지 않고 함수의 맨 끝에 세미콜론 ; 없이 값이나 변수명을 적어 놓으면, 그 값이 리턴된다
fn main() {
    println!("Hello, world!");

    let c = add(3,5);
    println!("c={}",c);
}

fn add(a:i32, b:i32) -> i32{
    a + b   //return a+b; 라고 하지 않고 `a+b`라고 세미콜론 없이 사용해도 된다. 
}
~~~

<br/>

  - 메서드
    - Rust에서 메서드의 선언은 함수의 선언과 유사하다. fn을 사용하고, 파라미터가 있고, 리턴 타입이 존재한다. 형태상으로 다른 단 한가지는 &self라는 파라미터를 가진다는 점이다. self는 해당 메서드를 호출한 인스턴스를 의미하고 &를 붙였기에 해당 인스턴스를 레퍼런스(주소값) 형태로 참조하는 것

~~~rust
struct Point {
    x: i32,    y: i32
}

impl Point {
    fn new(x:i32, y:i32) -> Point{  //1. 연관 함수
        Point {x:x, y:y}
    }

    fn distance(&self, p:&Point) -> f64{  //2. 메서드
        (((p.x - self.x).pow(2) + (p.y - self.y).pow(2)) as f64).sqrt()
    }
}

fn main(){
    let p1 = Point::new(0,0);    let p2 = Point::new(3,4);  //3. 연관함수의 사용
    assert_eq!(5.0, p1.distance(&p2));  //4. 메서드의 사용
    // assert_eq! : 두 값이 정확히 같은지(equal) 비교하는 역할
}
~~~

<br/>

  - 매크로
    - 매크로는 이름 뒤에 느낌표 !가 있다. ex)println! vec!
    - 함수는 작성된 텍스트 형태의 코드에 의해 바이너리 코드가 만들어지는 것이고, 매크로는 작성된 텍스트 형태의 코드에 의해 또 다른 Rust 코드가 만들어 지는 것
    - 일반적인 프로그램을 짤 때, 매크로까지 작성하면서 짤 일은 별로 없으며, 제공되어져서 사용하는 것만 우선 신경 쓰자
   
<br/>

  - 클로저
    - 클로저(closure)는 익명함수이다

~~~rust
//정의
let <변수명> = | <파라미터> | <표현식> ;

 // 1. 클로저 "|x| x+1"를 변수 add_one에 할당해서 함수처럼 사용가능
  let add_one = |x:i32| x+1;
  println!("{}",add_one(2)); //3

  // 2. 함수와 달리 파라미터의 타입지정 안해도 됨. 자동 추정
  let add_one = |x| x+1;
  println!("{}",add_one(2)); //3

  // 3. 파라미터가 없어도 된다. 
  let print_hello = || println!("hello");
  print_hello(); //hello

  // 4. 바디는 {}로 감쌀 수 있다. 파라미터를 여러개 사용 가능
  let divmod = |x:i32, y:i32| { 
      let q = x / y;   let r = x % y; 
      return (q,r);
  };
  println!("{:?}",divmod(10,3)); //(3,1)

~~~

<br/>

  - 클로저는 같은 스코프에 있는 변수를 접근 가능하다

~~~rust
fn main(){
    let num = 100;
    let add_num = |x| x+num;
    println!("{}", add_num(5)); //105
}
~~~

<br/>

  - 예제 : 벡터의 값을 읽는 get 메서드를 이용해서 어떤 벡터와 인덱스를 주면, 해당 인덱스에 있는 벡터의 원소값을 리턴하는 함수를 작성하시오. 만약 해당 인덱스에 값이 없으면 첫 번째 있는 원소를 리턴하고, 첫 번째 원소도 없다면 0을 리턴하시오.

~~~rust
/// 클로저가 있는 경우
fn main(){
    let v = vec![1,2,3];
    assert_eq!(1, get_val(&v, 3)); 
    assert_eq!(3, get_val(&v, 2)); 

    let v:Vec<i32> = Vec::new();
    assert_eq!(0, get_val(&v, 1));    
}

fn get_val(v:&Vec<i32>, idx:usize) -> i32 {
    let val = v.get(idx).unwrap_or_else(||{
        if v.get(0).is_some() {&v[0]}
        else {&0}
    });
    return *val;
}

/// 클로저가 없는 경우
fn main(){
    let v = vec![1,2,3];
    assert_eq!(1, get_val(&v, 3)); 
    assert_eq!(3, get_val(&v, 2)); 

    let v:Vec<i32> = Vec::new();
    assert_eq!(0, get_val(&v, 1));    
}

fn get_val(v:&Vec<i32>, idx:usize) -> i32 {
    let val = match v.get(idx) {
        Some(x) => x,
        None => {
            if v.get(0).is_some() {&v[0]}
            else {&0}
        },
    };
    return *val;
}
~~~

###### [함수,매서드,매크로,클로저](#함수매서드매크로클로저)
###### [Top](#top)

<br/>
<br/>

***

# 제어문(if,match,for,loop,while)

  - if나 else 다음에 있는 중괄호는 무조건 작성해야 한다
~~~rust
//정의
if <조건식> {
    ...
}else {
    ...
}

// 기본형태 if문
fn main(){
    // 1. 전형적인 if~else 표현식
    let n = 5;
    if n > 5 {
        println!("larger than 5");
    }else {
        println!("less than 5");
    }

    //2. 한줄에 표현
    if n > 5 { println!("larger than 5");}
    else { println!("less than 5");}

    //3. 에러
    //if n { println! ("do something"); }

    //4. if가 조건식(expression)임을 이용
    let c = if n > 5 { n+1__WD_MARK_CLOSE__ } else { n-1__WD_MARK_CLOSE__ };
    println!("c={}",c); // 4
}
~~~

<br/>

  - match
    - C나 Java의 switch와 유사하다. 비교하는 값이 여러 개일 때 사용한다

~~~rust
 //1. 변수 값에 따른 matching
  let x = 1;
  match x {
      1 => println!("one"),
      2 => println!("two"),
      3 => println!("three"),
      _ => println!("anything"),    // 지정된 조건이 아닌 모든 것에 대해서는 이렇게 처리
  }

  //2. 변수 범위에 따른 matching
  let age:u32 = 30;
  let group = match age {
      0..=10__WD_MARK_CLOSE__ => "baby",     
      11..=20 => "teen",
      21..=60 => "adult",
      _ => "old",
  };   //let group = ...; 형태의 statement라서 ; 있어야 함  

  //3. 변수의 타입에 따른 matching
  let c = '5';
  let num = match c.to_digit(10){  //to_digit는 Option 타입 리턴
      Some(n) => n,
      None => 0__WD_MARK_CLOSE__,
  };

  //4. 튜플에 대한 matching
  let n = 33;
  match (n%3, n%5) {
      (0, 0) => println!("3과 5의 배수"),
      (0, _) => println!("3의 배수"),
      (_, 0) => println!("5의 배수"),
      (_, _) => println!("3의 배수도 5의 배수도 아님"),
  }
~~~

<br/>

  - if let 표현식 : match 패턴의 간략 표현식

~~~rust
fn main() {

    // 간략 표현식이지만, 실패했을 때 그냥 자연스럽게 넘어가는것
    let c = '6';
    if let Some(num) = c.to_digit(10) {
        println!("num={}",num); //num=6
    }


    // 실패했을때 어떻게 할지 정할 수 있다.
    let d: char = '5';
    let num = match d.to_digit(20){
        Some(number) => number,
        None => 0,
    };
    println!("num={}",num); //num=5
}

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// 간략 패턴을 아래와 같이 if else로 표현할 수도 있따

    let mut sum = 0;

    let c = '6';
    if let Some(num) = c.to_digit(10) {
        println!("num={}",num); //num=6
    }else{
        println!("errro"); 
    }
~~~

  - for문

~~~rust
// 정의
for <변수> in <시작되는 값>..=<마지막 값> {
  ...
}

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

let mut sum=0;  //값 변경이 필요한 변수는 mut 키워드를 사용해야한다. 
for i in 1..=100{
  sum += i;
}
println!("sum = {},sum);

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// 위의 코드는 아래의 코드와 동일하다

let mut sum=0;
for i in 1..101{
  sum += i;
}
println!("sum = {}",sum);

// for문 안에서의 break
let a = [2,4,10, 60, 61];
let mut sum = 0;
for i in a {
    if i > 50 {break;}
    sum += i; 
}
println!("sum={}",sum);  //16

// 이중 for 루프에서의 break
#[test]
fn test6(){
    let mut v:Vec<(i32,i32)> = Vec::new();
    for i in 2..=10{
        if i >= 4 {break; }  // for i 루르플 벗어난다. 
        for j in 2..=10{
            if j >= 5 {break;}  // for j 루프를 벗어난다. 
            v.push((i,j)); 
        }
    }
    println!("{:?}",v); //[(2, 2), (2, 3), (2, 4), (3, 2), (3, 3), (3, 4)]
}

// 레이블 사용하여 for문 벗어나기
fn test7(){
    let mut v:Vec<(i32,i32)> = Vec::new();
    'label_i: for i in 2..=10{       
        for j in 2..=10{
            if j >= 5 {break 'label_i;}
            v.push((i,j)); 
        }
    }
    println!("{:?}",v); //[(2, 2), (2, 3), (2, 4)]
}
~~~

<br/>

  - collection 객체 전체 돌리기

~~~rust
let v = vec![1,2,3,4,5];
for val in v.iter() {  //v.iter()를 사용했다.
    print!("{} ", val); // 1 2 3 4 5 
}

println!("");

for val in &v {   //for 루프에서는 벡터의 iterator가 자동으로 나온다. 
    print!("{} ", val); // 1 2 3 4 5 
}
~~~

<br/>

  - loop사용하기
    - loop는 조건식이 없는 루프 명령어다. 일단 loop 안의 코드가 실행되고, 루프를 벗어나는 break; 키워드가 없으면 무한으로 돈다. 강제로 멈추게 하려면 'Ctrl-C'를 누르면 된다.

~~~rust
fn main() {
    let mut i = 1; 
    loop {
        if i > 10 { break; } 
        println!("{}", i);         
        i += 1;
    }
}


///ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

fn main(){
    let p = max_factor(10);
    println!("max_factor = {}", p); //max_factor=5
}

fn max_factor(mut n:u64) -> u64{   
    let mut p = 2;  // 2부터 나눌 것임   
    loop{                         
        let (q, r) = (n/p, n%p);        

        if q==1 { break;}  // n/p==1 이면 루프 벗어남. 즉, p==n

        if r == 0 { n = q;  }  // n%p==0. 즉, p로 나눠떨어지는 경우
        else      { p += 1; }      
    }
    return n;
}
~~~

<br/>

  - whhile문
    - 뒤의 조건식이 참인 경우에만 진행

~~~rust
while <조건식> {
  do_something();
}

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

fn main() {
    let mut sum = 0;
    let mut i = 1;

    while i <= 100__WD_MARK_CLOSE__ {
        sum += i;   i += i ;
    } 
    println!("sum: {}", sum);
}
~~~

###### [제어문(if,match,for,loop,while)](#제어문ifmatchforloopwhile)
###### [Top](#top)

<br/>
<br/>

***

# 컬렉션(vec,hashmap,hashset)
  
  
  - 벡터선언

~~~rust
//벡터의 선언, push
let mut v:Vec<i32> = Vec::new();
v.push(1); v.push(2);
println!("{:?}",v);  //[1,2]

// 매크로를 사용한 벡터의 선언
//vec! 매크로 이용 벡터 생성
let v = vec![5,6,7];
println!("{:?}",v);  //[5,6,7]

let v = vec![1;5];
println!("{:?}",v);  //[1, 1, 1, 1, 1]

// 이미 만들어져 있는 배열을 벡터로 바꾸기
//array를 벡터로 전환하기
let arr = [3,4];
let v = arr.to_vec();
println!("{:?}",v);  //[3,4]

//벡터에 어떤 배열값을 추가
let mut v = vec![1,2,3];
v.extend([4,5,6,7]);
println!("{:?}",v); //[1, 2, 3, 4, 5, 6, 7]
~~~

<br/>

  - 백터 접근

~~~rust
//벡터 원소 접근하기
let v = vec![5,6,7];
println!("v[0]={}", v[0]);
println!("last element={}", v[v.len()-1]);


//get 이용한 접근
//get을 이용해 접근 하면 v[3]과 v.get(3)은 동일하게 벡터 v에 있는 4 번째 원소에 접근한다.
//차이는, v[3]으로 했을 때 만약 벡터 v의 크기가 3이라면 프로그램은 panic에 빠진다. 같은 조건에서 v.get(3)을 하면 None을 리턴한다
let v = vec![1,2,3];
// println!("{}",v[3]);  //panic 발생
println!("{:?}", v.get(3));  //None 출력

if let Some(n) = v.get(1) {
    println!("v.get(1)={}",n);
    }


// 반복자로 접근하기
//레퍼런스로 접근하기
for a in &v{ print!("{} ",*a); }  //5 6 7   // for a in v.iter()
println!("");

for a in &v{ print!("{} ",a); }  //5 6 7  print! 매크로는 레퍼런스 변수에 대해서도 안의 내용을 출력함
println!("");

//소유권 이동
for a in v{ print!("{} ",a); }  //5 6 7   // for a in v.into_iter()
println!("");

//println!("{}",v[0]); //error
~~~

<br/>

  - 벡터 값 변경

~~~rust
let mut v = vec![1,2,3];
for i in 0..v.len() { v[i] *= 2; }
println!("{:?}",v);  //2,4,6


// mutable 반복자 이용: &mut v
let mut v = vec![1,2,3];
for a in &mut v { *a *= 2; }
println!("{:?}",v);  //2,4,6
// 참조자(레퍼런스)로 나오기 때문에, 해당 원소의 값에 접근하려면 *a라고 해줘야 한다


// mutalble 반복자 이용 : v.iter_mut()
let mut v = vec![1,2,3];
for a in v.iter_mut() { *a *= 2;}
println!("{:?}",v);  //2,4,6


// Iterator Adapter 이용
let mut v = vec![1,2,3];
v.iter_mut().for_each(|a| *a *= 2 );
println!("{:?}",v);  //2,4,6
~~~

<br/>

  - 벡터를 스택으로 사용하기

~~~rust
let mut s:Vec<i32> = Vec::new();

s.push(0);  s.push(1); s.push(2);
while s.len() > 0 {
    let i = s.pop().unwrap();
    println!("pop:{}",i);
}    
~~~

<br/>

  - 해시맵
    - Key - Value 형태의 데이터 구조

~~~rust
use std::collections::HashMap;

fn main(){
    let mut map:HashMap<&str, i32> = HashMap::new();
    map.insert("Jeff", 100);
    map.insert("Tom", 90);
    println!("{:?}",map);  //{"Tom": 90, "Jeff": 100}
}
~~~

<br/>

  - 해시맵 접근하기
~~~rust
let map = HashMap::from([
    ("Jeff", 100), ("Tom", 90), ("Josh", 80),
]);

// Key를 지정해서 get
println!("Jeff's score:{}", map.get("Jeff").unwrap());  //Jeff's score:100

// HashMap에 있는 모든 Key-Value
for (k, val) in &map {
    println!("{}: {}", k, val);
}

// Key를 얻어낸 후 Value 액세스
for k in map.keys(){
    if k.starts_with("J") {print!("{} ", map.get(k).unwrap()); }
}
~~~

<br/>

  - 해시맵 데이터 갱신
~~~rust
use std::collections::HashMap;
fn main(){
    let mut map = HashMap::from([
        ("Jeff", 100), ("Tom", 90), ("Josh", 80),
    ]);

    //덮어쓰기
    map.insert("Jeff", 50);
    println!("{:?}",map);  //{"Josh": 80, "Tom": 90, "Jeff": 50}
}
~~~

<br/>

  - 해시셋
    - 중복되지 않는 데이터로 관리 된다

~~~rust
//생성하기, 넣기
let mut set = HashSet::new();

set.insert(1); set.insert(2); set.insert(3);
set.insert(3); set.insert(4); set.insert(5);
println!("{:?}",set);  //{1, 3, 4, 5, 2}


// 배열로 부터 해시셋 만들기
//배열로부터 생성
let set = HashSet::from([1,2,3,3,4,5]);
println!("{:?}",set);  //{1, 3, 2, 4, 5}

~~~

###### [컬렉션(vec,hashmap,hashset)](#컬렉션vechashmaphashset)
###### [Top](#top)

<br/>
<br/>

***

# 문자열
  - &str은 str에 대한 레퍼런스란 의미다. str은 고정된 문자열이고 프로그램 바이너리의 어딘가에 위치하고 있다가 프로그램이 수행될 때 메모리에 로드된다. &str은 이 메모리의 위치를 가지키는 레퍼런스 타입
  - &str은 고정된 문자열을 다루는 타입인데 반해, String은 가변 크기 문자열을 다룬다

~~~rust
let s = "Hello, World";  /// s는 &str 타입 변수가 된다.

let hello = String::from("Hello, world!")
let s1 = "Hello, ".to_owned();
let s2 = "world!".to_string();

// 문자열 합치기
let mut s = String::from("foo");
s.push_str("bar");
assert_eq!("foobar", s);

// +오퍼레이션 이용
let a: String = String::from("foo");
let b: String = String::from("bar");
let c = a + &b;
// 변수 a의 소유권이 c로 이동되어 버렸다. 따라서 let c = a + &b;이후에는 더 이상 변수 a로의 접근을 할 수 없다
// b는 대여를 해서 사용하는 형태이기에 let c = a + &b; 코드 이후에도 변수 b로의 접근은 문제 없다

println!("c={}",c); // "foobar"


// 편하게 format! 매크로를 사용하면 된다
    // &String 이용
    let c = format!("{}{}",&a,&b);
    println!("c={}",c);

    // &str 이용
    let c = format!("{}{}","foo","bar");
    println!("c={}",c);

    // String 이용
    let c = format!("{}{}",a,b);
    println!("c={}",c);  

~~~

<br/>

  - 문자열
~~~rust
let person: &'static str = "Jeff";  //문자열 리터럴(String Literal)
let phone_num: String = String::from("010-123-4567");  // String
let num4: &str = &phone_num[8..];   // 문자열 슬라이스(String Slice)

// phone_num는 소유하고 있기때문에 얘가 사라질때 힙헤제를 해야 하는것을 컴파일러가 작동 시켜 준다
// &'static str 은 이 데이터는 프로그램이 종료되기 전까지 소멸되지 않는 데이터라는 의미
~~~

###### [문자열](#문자열)
###### [Top](#top)

<br/>
<br/>

***

# 반복자

~~~rust
iter() : 반복자에 의해 접근되는 원소들의 레펀런스가 넘어온다. 소유권이 이동되는 것이 아니다. 따라서, iter()에 의한 반복자로 원소들을 사용하고 난 후에도, 해당 컬렉션에 대한 사용이 가능하다. 컬렉션의 소유권이 이동하지 않았기 때문이다.
into_iter() : 컬렉션 자체가 넘겨져서, 소유권이 넘어가 버리기에, into_iter()를 수행하고 난 후에는, 해당 컬렉션 변수로의 접근이 안된다.
iter_mut(): 컬렉션의 값을 수정해야할 때 사용한다. 레퍼런스로 받은 다음에 수정하는 것이다. 소유권이 넘어가지는 않는다.

// iter()
#[test]
fn iter_test(){
    let v = vec![1,2,3,4,5];
    for val in v.iter() {  //v.iter()를 사용했다.
        print!("{} ", val); // 1 2 3 4 5 
    }

    println!("");

    for val in &v {   //for 루프에서는 벡터의 iterator가 자동으로 나온다. 
        print!("{} ", val); // 1 2 3 4 5 
    }
}
 /// 이 때 벡터에 대한 접근은 reference로 하기 때문에 소유권이 넘어가지 않는다. 즉, 그 아래 편 코드에서 벡터 v에 대해서 다시 접근하더라도 문제 없다

// into_iter()
#[test]
fn into_iter_test(){
    let v = vec![1,2,3,4,5];
    for val in v.into_iter() {  //into_iter()를 사용했다. 소유권이 넘어간다.
        print!("{} ", val); // 1 2 3 4 5 
    }

    println!("");

    for val in &v {   //여기서 에러 발생한다. 위에서 v.into_iter()에 의해 소유권이 넘어갔기 때문.
        print!("{} ", val); // 1 2 3 4 5 
    }
}
 /// v.into_iter()에 의해 벡터 v에 대한 소유권이 넘어갔기에, 다시 v에 대한 접근을 하는 for in &v에서 에러가 발생


// iter_mut()
#[test]
fn iter_mut_test(){
    let mut v = vec![1,2,3,4,5];
    for x in v.iter_mut(){
        *x += 1;   //borrow한 것이기에 *를 붙여야 된다.
    } 
    println!("{:?}",v);   // [2,3,4,5,6]

    for val in &v {   //동작 가능하다. iter_mut()에 의해 소유권이 넘어가지 않기 때문
        print!("{} ", val); // 2,3,4,5,6 
    }
}
~~~

  - 반복자의 메서드
    - for_each: 루프를 돌려서 값들을 변경하고 그냥 종결해도 될 때
    - map: 루프를 돌려서 값들을 변경하고, 변경된 값을 이용해서 다시 무언가를 해야할 때

<br/>

  - 반복자의 메서드

~~~rust
//////////
collect() : iterator의 내용을 collection으로 만든다. 어떤 컬렉션으로 만들지는 지정해줘야한다.
sum() : iterator의 내용을 합한 결과를 리턴. 결과가 어떤 타입(u32 등)일 지는 지정해줘야 한다.
max() : 최댓값을 리턴. 타입 지정 필요
min() : 최솟값을 리턴. 타입 지정 필요
count() : iterator의 원소 개수 리턴
product() : iterator의 각 원소를 곱한 결과를 리턴. 타입 지정 필요
//////////
~~~

<br/>

  - map
~~~rust
// 벡터에 있는 모든 값을 읽어서 1씩 더한 후, 그 결괏값을 다른 벡터로 저장한다고 할때
fn map_test(){
    let v = vec![1,2,3,4,5];
    let v1:Vec<_> = v.iter().map(|&x| x+1).collect();

    println!("v={:?}",v);  //v=[1, 2, 3, 4, 5]
    println!("v1={:?}",v1);  //v1=[2, 3, 4, 5, 6]
}



#[test]
fn map_test(){
    // 1. 각 원소에 대해 2을 곱해서 다른 벡터로 만듦
    let v = vec![1,2,3,4,5];
    let v1:Vec<_> = v.iter().map(|x| (*x)*2).collect();
    println!("{:?}",v1);  //[2, 4, 6, 8, 10]

    // map(|x| x*2): 이렇게 해도 됨. 간단.
    let v2:Vec<_> = v.iter().map(|x| x*2).collect();  
    println!("{:?}",v2); //[2, 4, 6, 8, 10]

    // into_iter()을 써도 됨
    let v = vec![1,2,3,4,5];
    let v1:Vec<_> = v.into_iter().map(|x| x*2).collect();
    println!("{:?}",v1);  //[2, 4, 6, 8, 10]

    // collect::<Vec<u32>>()와 같이 해도 됨
    let v = vec![1,2,3,4,5];
    let v1 = v.iter().map(|x| (*x)*2).collect::<Vec<u32>>();
    println!("{:?}",v1);  //[2, 4, 6, 8, 10]

    //2. 문자열을 모두 소문자로 변환
    let words:Vec<&str> = vec!["Hello", "Good Morning", "Hi"];
    let low_words:Vec<String> = words.iter().map(|w| w.to_lowercase()).collect();
    println!("{:?}",low_words);  //["hello", "good morning", "hi"]        

    //3. 문자열에서, 각 문자에 대해 문자열에서 해당 문자의 개수를 HashMap으로 저장. (ch: cnt)
    use std::collections::HashMap;
    let s = "abc aaa bb c";
    let map:HashMap<char,usize> = "abc".chars()
        .map(|c| (c,s.matches(c).count()))
        .collect::<HashMap<char,usize>>();
    println!("{:?}",map);  //{'a': 4, 'c': 2, 'b': 3}

    // (참조)어떤 문자열에서 알파벳만을 집합으로 뽑아낼 때
    use std::collections::HashSet;
    let s = "abc aaa bb c";
    let set = s.chars()
        .filter(|c| c.is_alphabetic())        
        .collect::<HashSet<_>>();        
    println!("{:?}",set);  //{'c', 'a', 'b'}
}
~~~

<br/>

  - filter

~~~rust
// 원소 중 짝수인 것만을 추려서 벡터로 만드는 코드
#[test]
fn filter_test(){
    let v = vec![1,2,3,4,5];
    let v1:Vec<_> = v.iter().filter(|&&x| x%2==0__WD_MARK_CLOSE__).collect();

    println!("v={:?}",v);  //v=[1, 2, 3, 4, 5]
    println!("v1={:?}",v1);  //v1=[2, 4]
}


#[test]
fn filter_test(){
    //1. 모든 원소 중 짝수인 원소만 추려서 벡터로 만듦
    let v = vec![1,2,3,4,5];
    let v1:Vec<_> = v.iter().filter(|x| *x%2==0).collect();
    println!("{:?}",v1); //[2, 4]

    //into_iter()를 써도 됨
    let v = vec![1,2,3,4,5];
    let v1:Vec<_> = v.into_iter().filter(|x| x%2==0).collect();
    println!("{:?}",v1); //[2, 4]

    //2. 10이상이면서 홀수인 원소만 추려서 벡터로 만듦
    let v = vec![1,2,3,10,11,12,13];
    let v1:Vec<_> = v.iter().filter(|x| (*x)>=(&10) && (*x)%(&2)==1).collect();
    println!("{:?}",v1); //[11, 13]

    //"**x>=10 && **x%2==1"와 같이 해도 됨. 더블 * 사용
    let v = vec![1,2,3,10,11,12,13];
    let v1:Vec<_> = v.iter().filter(|x| **x>=10 && **x%2==1).collect();
    println!("{:?}",v1); //[11, 13]

    //into_iter()를 써도 됨
    let v = vec![1,2,3,10,11,12,13];
    let v1:Vec<_> = v.into_iter().filter(|x| x>=&10 && x%2==1).collect();
    println!("{:?}",v1); //[11, 13]
}

~~~

<br/>

  - filter_map

~~~rust
let a = ["1", "two", "NaN", "four", "5"];

#[test]
fn filter_map_test(){
    let a = ["1", "two", "NaN", "four", "5"];
    let v:Vec<_> = a.iter().map(|s| s.parse::<i32>()).filter(|s| s.is_ok()).map(|s| s.unwrap()).collect();

    println!("v={:?}",v);   //v=[1, 5]


// 첫 번째 map에서 문자열에 대해 parsing 시도를 하고,
// parsing 시도에서 ok된 것만을 filtering해서,
// 그것들 만을 대상으로해서 unwrap()했다


#[test]
fn filter_map_test1(){
    let a = ["1", "two", "NaN", "four", "5"];
    let v:Vec<_> = a.iter().filter_map(|s| s.parse::<i32>().ok()).collect();

    println!("v={:?}",v); //v=[1, 5]
} 
~~~

<br/>

  - for_each

~~~rust
#[test]
fn for_each_test(){
    //1. 각 원소에 대해 +1을 해서 업데이트
    let mut v = vec![1,2,3,4,5];  
    v.iter_mut().for_each(|x| *x += 1);     
    println!("{:?}",v); //[2, 3, 4, 5, 6]

    //2. 홀수 인덱스에는 1, 짝수 인덱스에는 0을 가지는 배열 만들기
    let mut v = vec![1;10];
    v.iter_mut()
        .enumerate()
        .filter(|(i,_)| *i % 2 == 0)
        .for_each(|(_,val)| *val=0);
    println!("{:?}",v); //[0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
}
~~~

###### [반복자](#반복자)
###### [Top](#top)

<br/>
<br/>

***

# Rust특징 소유권
  - C#의 경우 (Garbage Collection): 스코프가 끝나서 참조 변수를 잃어버리면, 힙에 있는 데이터는 '미아' 상태(접근 불가 상태)가 됩니다. 하지만 메모리에서 즉시 지워지지는 않습니다. 나중에 C#의 가비지 컬렉터(GC)가 주기적으로 힙을 순회하다가 "어? 이 데이터를 가리키는 참조 변수가 이제 하나도 없네?"라고 판단하면 그때 메모리를 해제합니다
  - Rust의 경우 (Ownership): Rust에는 GC가 없습니다. 대신 '소유권(Ownership)'이라는 개념을 통해 컴파일러가 메모리 관리 코드를 직접 작성해 줍니다. 변수 c가 힙 데이터의 유일한 '소유자'이며, c의 스코프가 끝나는 순간(닫는 중괄호 }를 만나는 순간) 컴파일러가 즉시 해당 힙 메모리를 해제하는 함수(drop)를 몰래 삽입해 버립니다. 즉, 포인터를 잃어버리는 것과 동시에 메모리가 즉각적으로 완전 삭제됩니다
  - 소유권이 1개인데 어떻게 공유해서 쓰는가?
    - 대여라는 방법을 통해 사용함, & 기호를 사용해 잠깐 접근 권한만 얻어오는 것
    - 읽기 전용 대여 (&T): 여러 변수가 동시에 힙 메모리에 접근해 데이터를 '읽는' 것은 얼마든지 가능합니다.
    - 수정 가능 대여 (&mut T): 힙 메모리의 데이터를 '수정'할 권한은 한 번에 딱 1명에게만 빌려줍니다. 누군가 쓰기 권한을 빌려 갔다면, 다른 사람은 읽기 권한조차 빌려 갈 수 없습니다. (멀티스레딩 환경 등에서의 데이터 충돌/레이스를 컴파일 단계에서 완벽히 차단합니다.)

~~~rust
fn main(){
    let a = 1;
    sub_fn();

    assert_eq!(10,b); //error
    assert_eq!(1,a); //ok
}

fn sub_fn(){
    let b = 10;
    assert_eq!(10,b); //ok

    {
        assert_eq!(10,b); //ok

        let c = vec![1,2,3];
        assert_eq!(vec![1,2,3],c); //ok
    }
    assert_eq!(vec![1,2,3],c); //error
    assert_eq!(10,b); //ok 
}

~~~

<br/>

  - 멀티 쓰레드 환경에서는?
    - 만약 &로 메모리 접근 권한을 빌려 간 변수가 있는데, 원래 소유자의 스코프가 먼저 끝나버려서 메모리가 삭제되면 어떻게 될까요? -> Rust의 컴파일러는 이를 허락하지 않습니다. 컴파일러가 코드를 분석해서, "빌려 간 애들(&)이 원래 주인(Owner)보다 오래 살아남는 상황"이 발견되면 아예 에러를 내뿜고 컴파일을 거부해 버립니다
    - Rust에서 유일하게, "어떤 메모리 영역에 대해 오직 하나의 변수만이 '소유권'을 가질 수 있다" 를 깨는 것은 Rc와 Arc가 있다

~~~rust
use std::sync::Arc;
use std::thread;

fn main() {
    // var1을 Arc로 감싸서 힙에 넣습니다. (참조 카운트 1)
    let var1 = Arc::new(vec![1, 2, 3]); 

    // 스레드에게 줄 복사본(포인터 복사)을 만듭니다. (참조 카운트 2)
    let var1_clone = Arc::clone(&var1); 

    thread::spawn(move || {
        println!("스레드에서 접근: {:?}", var1_clone);
    }); // 스레드 끝나면 카운트 1 감소

    println!("메인에서 접근: {:?}", var1);
} // 메인 끝나면 카운트 1 감소. 카운트가 0이 되는 순간 메모리 해제!
~~~

<br/>

  - 부모가 자식을 끝까지 가디리게 강제 할 수도 있음
~~~rust
use std::thread;

fn main() {
    let var1 = vec![1, 2, 3];

    // thread::scope 블록을 엽니다.
    thread::scope(|s| {
        // 여기서는 &var1 (참조) 빌려주기가 가능합니다!
        s.spawn(|| {
            println!("빌려서 사용: {:?}", &var1);
        });
    }); // 핵심: 컴파일러가 이 괄호가 닫히기 전에 내부 스레드가 끝나는 것을 강제로 기다림!

    // 스레드가 끝난게 100% 보장되므로, 여기서도 var1이 여전히 살아있음
    println!("메인에서 마무리: {:?}", var1); 
}
~~~

<br/>

  - 대여
~~~rust
// 읽기권한만 대여
fn main(){
    let a = vec![1,2,3];
    println!("a={:?}",a); //a=[1, 2, 3]

    let cnt = get_even_cnt(&a);
    println!("enve count = {}", cnt);  //even count = 1
    println!("a={:?}",a);  //a=[1, 2, 3]
}

fn get_even_cnt(x:&Vec<i32>) -> i32{
    let mut cnt = 0;
    for i in x {
        if *i % 2 == 0 {cnt += 1;}
    }
    return cnt;
}

// 읽기 대여를 여러변수에 가능
fn main(){
    let a = vec![1,2,3];
    println!("a={:?}",a); //a=[1, 2, 3]

    let b = &a;  //대여 1회차
    println!("b={:?}",b); //b=[1, 2, 3]
    println!("a={:?}",a); //a=[1, 2, 3]

    let c = &a;  //대여 2회차
    let d:Vec<i32> = c.into_iter().map(|i| i+1).collect();
    println!("d={:?}",d);  //2,3,4

    let cnt = get_even_cnt(&a); //대여 3회차
    println!("enve count = {}", cnt);  //enve count = 1
    println!("a={:?}",a);  //a=[1, 2, 3]

    println!("b={:?}",b); //b=[1, 2, 3]
    println!("c={:?}",c); //c=[1, 2, 3]
    println!("d={:?}",d); //d=[2, 3, 4]
}

fn get_even_cnt(x:&Vec<i32>) -> i32{
    let mut cnt = 0;
    for i in x {
        if *i % 2 == 0 {cnt += 1;}
    }
    return cnt;
}


// 쓰기 권한 대여
fn main(){
    let mut a = vec![1,2,3];
    println!("a={:?}",a);

    add_one(&mut a);  // 쓰기가능한 대여권 부여
    println!("a={:?}",a);  //2,3,4
}

fn add_one(x:&mut Vec<i32>) {
    x.iter_mut().for_each(|i| *i += 1);
}


// 쓰기 권한은 여러번할수 없으면, 임시작으로 move를 한것과 같다
// 원소유자나, 읽기대여자도 아무것도 할수 업음
// 아래를 보면 컴파일러가 스코프 끝까지 확인해서 wx를 더이상 쓰는곳이 없는 부분까지 쓰기대여자가 사용한다고 간주함
fn main(){
    //1. 소유권 변수 x
    let mut x = vec![1,2,3];    
    println!("x={:?}",x);

    //2. 읽기 대여
    let rx = &x;
    println!("rx={:?}",rx);

    //3. 쓰기 대여
    let wx = &mut x;

    println!("x={:?}",x);  //에러 발생

    wx[0] = 4;
    println!("wx={:?}",wx);

    //4. 원래의 소유권 변수 x
    println!("x={:?}",x);    
}
~~~

<br/>

  - 참조를 읽을 수 없도록 컴파일러가 에러를 냄
~~~rust
fn main(){
    let x:&String;

    {
        let s = String::from("Jeff");
        x = &s;
    }

    println!("x={}",x);    
}

블럭 안에서 String이 선언되었고, 이 String을 변수 x가 참조하고 있다. 즉, 대여를 받았다. x=&s
이 상태에서, 블럭이 끝나면 변수 s는 종료되고 s가 소유하고 있는 힙 메모리도 해제된다. 그렇게 되면, 블럭 밖에서도 생존하고 있는 변수 x는 댕글링 포인터가 되어 버린다. 의미없는 메모리 공간을 가리키게되는 것이다.
따라서, Rust에서는 이런 경우 컴파일 에러를 낸다. 어떤 힙 공간을 참조하고 있는 변수가 있으면, 즉 어떤 힙 공간을 대여한 변수가 있으면, 해당 힙 공간을 해제할 수 없다

~~~

<br/>

  - 이처럼 소유와 대여가 일어나는것은 힙을 할당하는 데이터에서만 해당되는 이야기 이다
    - 힙할당 아닌 것 (스택 사용): i32·f64(숫자), bool(논리), char(문자), 고정 크기 배열([T; N]), 튜플 등 크기가 고정되어 자동 복사(Copy)되는 타입
    - 힙할당 인 것 (힙 사용): String(동적 문자열), Vec<T>(동적 배열), Box<T>·Rc<T>(스마트 포인터) 등 크기가 변할 수 있어 소유권이 이동(Move)되는 타입

~~~rust
//[코드 1]
//힙할당인것
fn main() {
    let s1 = String::from("hello");
    let s2 = s1;  // move: 소유권 이동 됨

    println!("s1 = {}", s1); //error
}


//[코드 2]
//힙할당 아닌것
fn main(){
    let a1 = 10;
    let a2 = a1;  // copy: 데이터가 복사되어서 a2에 할당됨

    println!("a1={}",a1); // a1=10
    println!("a2={}",a2); // a2=10
}


~~~

###### [Rust특징 소유권](#rust특징-소유권)
###### [Top](#top)

<br/>
<br/>

***

# 구조체

~~~rust
// 구조체 정의
struct Student {
    name: String,
    point: i32,
}

// 구조체 인스턴스의 생성
fn main() {
    let s1 = Student {
        name : "Jeff".to_owned(),
        point : 80, 
    };

    println!("name={}, point={}", s1.name, s1.point);
}

// 구조체 접근
struct Student {
    name: String,
    point: i32,
}

fn main() {
    let s1 = Student {
        name : "Jeff".to_owned(),
        point : 80, 
    };

    println!("name={}, point={}", s1.name, s1.point);
}

// 쓰기가능 인스턴스 만들기
let mut s1 = Student {
        name : "Jeff".to_owned(),
        point : 80, 
    };


#[derive(Debug)]
struct Student {
    name: String,
    point: i32,
}

fn main() {
    let mut s1 = Student {
        name : "Jeff".to_owned(),
        point : 80, 
    };
    s1.point = 100;

    println!("{:?}", s1);
    println!("name={}, point={}", s1.name, s1.point);
}


// 필드값을 편하게 지정하는 방법: 필드명과 동일한 변수 사용하기
struct Student {
    name: String,
    point: i32,
}

fn main() {
    let s1 = make_student("Jeff".to_owned(), 80);
    println!("name={}, point={}", s1.name, s1.point);
}

fn make_student(name:String, point:i32) -> Student {
    Student {
        name: name,
        point: point,
    }
}

~~~

<br/>

  - 튜플구조체
~~~rust
struct Color(i32, i32, i32);
struct Point(i32, i32, i32);

struct Color {
  r:i32,
  g:i32,
  b;i32,
}

/////

struct Point(i32,i32);

fn main(){
    let p1 = Point (0,0);
    let p2 = Point(3,4);
    let dist = cal_distance(&p1, &p2);
    assert_eq!(5.0, dist);
}

fn cal_distance(p1:&Point, p2:&Point) -> f64 {    
    (((p2.0-p1.0).pow(2) + (p2.1-p1.1).pow(2)) as f64).sqrt() 
}

~~~

<br/>

  - 연관함수, 메서드
~~~rust
// &self라는 변수가 없는 new는 연관함수이다 :: 으로 호출한다
// &self있는 distance는 메서드 이며 . 으로 호출한다


struct Point {
    x: i32,    y: i32
}

impl Point {
    fn new(x:i32, y:i32) -> Point{  //연관 함수
        Point {x:x, y:y}
    }

    fn distance(&self, p:&Point) -> f64{  //메서드
        (((p.x-self.x).pow(2) + (p.y-self.y).pow(2)) as f64).sqrt()
    }
}

fn main(){
    let p1 = Point::new(0,0);    let p2 = Point::new(3,4);  //연관함수의 사용
    assert_eq!(5.0, p1.distance(&p2));  //메서드의 사용
}



/// 아래는 예시 코드
struct Point {
    x: i32,   y: i32
}

impl Point {
    fn new(x:i32, y:i32) -> Point{
        Point {x:x, y:y}
    }

    fn distance(&self, p:&Point) -> f64{
        (((p.x-self.x).pow(2) + (p.y-self.y).pow(2)) as f64).sqrt()
    }
}

fn main(){
    let p1 = Point::new(0,0); 
    let p2 = Point::new(3,4); 
    let p3 = Point::new(-3,5);

    let max = max_distance(&p1, &p2, &p3);
    println!("max distance = {}", max);  //6.08276253029821
}

fn max_distance(p1:&Point, p2:&Point, p3:&Point) -> f64 {
    let d1 = p1.distance(p2);
    let d2 = p1.distance(p3);
    let d3 = p2.distance(p3);

    let mut max = d1;
    if d2 > max {max=d2;}  if d3 > max {max=d3;}
    return max;
}

~~~

###### [구조체](#구조체)
###### [Top](#top)

<br/>
<br/>

***

# 열거형Option,Result

~~~rust
enum Gender {
  Male,
  Female
}

enum Gender {
    Male,
    Female
}

fn get_customer(id:i32) -> Gender {    
    if id % 2 == 0 {return Gender::Male;}
    return Gender::Female; 
}

fn main() {
    let gender = get_customer(10);
    match gender {
        Gender::Male => println!("Male"),
        Gender::Female => println!("Female"),
    }
}



// 열거형을 타입체크로 사용하고 싶을떼
enum Gender {
    Male {name:String, is_military:bool},
    Female {name:String}
}

fn get_customer(id:i32) -> Gender {    
    if id % 2 == 0 {
        return Gender::Male{name:"Jeff".to_owned(), is_military:true};
    }
    return Gender::Female {name:"Alice".to_owned()};
}
~~~

<br/>

  - 열거형(Option)

~~~rust
// 열거형 Option의 구조
enum Option<T> {
    Some(T),
    None,
}


use std::collections::HashMap;
fn main(){
    let map = HashMap::from([
       ("Jeff", 80), ("Alice", 100), 
    ]);


// get에서 리턴된 Option 타입에서 값을 얻어내는 가장 간단한 방법은 unwrap()을 이용하는 것
    let name = "Jeff";
    let point = map.get(name).unwrap();
    println!("{}'s point = {}", name, point);

    // let name = "Bob";
    // let point = map.get(name).unwrap();  //panic
    // println!("{}'s point = {}", name, point);


// None이 있을 수 있는 경우는 unwrap()를 사용하면 안되고 None에 대한 처리를 해줘야 한다
    let name = "Jeff";
    match map.get(name) {
        Some(point) => println!("{}'s point = {}", name, point),
        None => println!("There is no name of {}",name),
    }

    let name = "Jeff";
    if let Some(point) = map.get(name) {
        println!("{}'s point = {}", name, point);
    }else {
        println!("There is no name of {}",name);
    } 
}

~~~

<br/>

  - 열거형(Result)
    - Option은 "값이 없는 경우"를 위한 열거형이고, Result는 "에러가 발생한 경우"를 위한 열거형이다.

~~~rust
// 아래 코드와 같이 만들면 divmod(10,0)을 했을때 err가 난다
fn main(){
    let (q, r) = divmod(10,3);
    println!("(quotient, remainder)={:?}",(q,r));  //(3,1)
}

// return (n/d, n%d)
fn divmod(n:i32, d:i32) -> (i32, i32) {
    (n/d, n%d)
}


// 위의 err를 막기 위해 아래와 같이 바꿀 수 있다
fn divmod(n:i32, d:i32) -> Result<(i32, i32), String> {
    if d==0 {
        Err("can't divide by zero".to_owned())
    }else {        
        Ok((n/d, n%d))
    }    
}


~~~

###### [열거형Option,Result](#열거형optionresult)
###### [Top](#top)




