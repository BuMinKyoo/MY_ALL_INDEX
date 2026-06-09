<br/>

###### Top

  - [환경설정](#환경설정)
  - [Hello world](#hello-world)
  - [main,함수](#main함수)
  - [변수,상수](#변수상수)
  - [데이터 타입](#데이터-타입)
  - [함수,매서드,매크로,클로저](#함수매서드매크로클로저)
  - [제어문(if,match,for,loop,while)](#제어문ifmatchforloopwhile)

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
fn 함수이름(파라미터1 이름: 파라미터1 타입, 파라미터2 이름: 파라미터2 타입) -> 리턴 타입 {
  ...
} 
~~~

<br/>

  - 기본형태

~~~rust
 fn main() {
    println!("Hello, world!");

    let c = add(3,5);
    println!("c={}",c);
}

fn add(a:i32, b:i32) -> i32{
    return a+b;
} 
~~~

<br/>

  - return을 사용하지 않고 함수의 맨 끝에 세미콜론 ; 없이 값이나 변수명을 적어 놓으면, 그 값이 리턴된다

~~~rust
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
  if <조건식> {
      ...
  }else {
      ...
  }
~~~

<br/>

  - 기본형태 if문

~~~rust
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

~~~

<br/>

  - for문 안에서의 break

~~~rust
let a = [2,4,10, 60, 61];
let mut sum = 0;
for i in a {
    if i > 50 {break;}
    sum += i; 
}
println!("sum={}",sum);  //16
~~~

<br/>

  - 이중 for 루프에서의 break

~~~rust
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
~~~

<br/>

  - 레이블 사용하여 for문 벗어나기

~~~rust
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








