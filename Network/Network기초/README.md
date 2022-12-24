우선, 유투브에서 ‘널널한 개발자’로 활동중이신, 최호성님의 강의를 보고. 많은 부분에서 정리와, 캡쳐한 내용임으로 출처를 밝힙니다!
https://www.youtube.com/watch?v=k1gyh9BlOT8 

###### Top

- [컴퓨터구조, 네트워크 계층](#컴퓨터구조-네트워크-계층)

<br/>
<br/>

***

# 컴퓨터구조, 네트워크 계층

  - 컴퓨터의 구조
    - 하드웨어
    - 소프트 웨어
      - 시스템 소프트웨어(Kernel)
      - 애플리케이션(User)

  - 네트워크의 계층적 구분
    - OSI 7 LAYER 와 DoD Four-Layer Model 의 2가지가 있다
      - OSI 7 LAYER 에서의 구분
        - 7. 응용
        - 6. 표현
        - 5. 세션
        - 4. 전송
        - 3. 네트워크
        - 2. 데이터링크
        - 1. 물리계층
      - DoD Four-Layer Model 에서의 구분
        - 4. Application
        - 3. Transport
        - 2. Network
        - 1. Access

  - DoD Four-Layer Model 으로 설명하는 것이 조금더 간단하고, 아래 그림을 설명해 보면
    - Access 계층에 ‘네트워크 인터페이스 카드(Network Interface Card)’ 인 ‘NIC’이 있고 그 ‘NIC’인 하드웨어를 움직일 수 있는 Device Driver가 있으며, 그 위에 IP, TCP가 존재하고 맨 위에 Application인 Process가 있다.
    - 네트워크 에서, Application에서 kernel쪽으로 데이터를 보낼때 이것을 추상화하면 File의 형태로 추상화 하는데, 이것을 Socket이라고 한다
    - Socket이란? : TCP, IP Socket 이라고 했을때, TCP를 User 모드 Application Process가 접근 할 수 있도록 File형식으로 추상화한 인터페이스

![image](https://user-images.githubusercontent.com/39178978/209421150-33508b05-4493-4918-95ac-a9e1ebd443ac.png)

###### [컴퓨터구조, 네트워크 계층](#컴퓨터구조-네트워크-계층)
###### [Top](#top)

<br/>
<br/>
