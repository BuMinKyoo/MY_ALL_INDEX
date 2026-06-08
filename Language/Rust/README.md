<br/>

###### Top

  - [환경설정](#환경설정)
  - [Hello world](#hello-world)
  - [main,함수](#main함수)

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

    for i in 1..=n {  //6)for 루프
        sum += i;
    }

    return sum;   //함수의 리턴 값
}
~~~


###### [main,함수](#main함수)
###### [Top](#top)






