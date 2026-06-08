<br/>

###### Top

  - [환경설정](#환경설정)
  - [Hello world](#hello-world)
  - [main,함수](#main함수)
  - [변수,상수](#변수상수)

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



