###### Top

- [AI기초공부](#ai기초공부)

<br/>
<br/>

***

# AI기초공부

  - 인공지능(AI) > 머신러닝(ML) > 딥러닝(DL)
    - 인공지능 : 규칙기반 알고리즘
    - 머신러닝 : 결정트리, 선형회귀, 퍼셉트론, SVM -> data기반
    - 딥러닝 : CNN, RNN, GAN, 트랜스포머 등.. -> DNN(Deep Neural Network)_깊은 인공 신경망
      - CNN(Convolutional Neural Network)
      - RNN(Recurrent Neural Network)

<br>

  - 지도학습
    - 정답을 알고 있는것(사람이 입력에 대한 답을 미리 만들어 놓음)
      - 회귀(regression) -> 출력이 연속되는것
        - 이건 고양이 인데, 고양이 위치가 x,y축 어디에 있으며, 크기와 높이가 w, h야
      - 분류(classification)-> 출력이 딱딱 떨어지는것
        - 이건 고양이야, 고양이면 출력 1
        - 이건 강아지야, 강아지면 출력 0
    - 정답을 알고 있는 데이터가 많아야 지도 학습이 잘됨 -> 돈이 많이 듬

   <img width="560" height="191" alt="image" src="https://github.com/user-attachments/assets/978cf2da-7ab3-4fc3-ab52-0ddf6cb85a78" />

  - 비지도 학습(정답을 모르는것)
    - 군집화
    - 차원 축소
  - 자기지도 학습
    - 자기지도 학습은 진짜 풀려고 했던 문제 말고 가짜 문제를 새롭게 정의해서 먼저 풀어 봄
    - 데이터 안에서 self로 만든 정답을 풀어본다
      - 1. pretext task(가짜 문제)를 학습해서 pre-training을 한다
        2. downstream task(진짜 문제)를 풀기 위해 transfer learning함




###### [AI기초공부](#ai기초공부)
###### [Top](#top)
