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

<img width="437" height="390" alt="image" src="https://github.com/user-attachments/assets/1a75d85a-0bab-47a3-99cb-edaaf3582ef5" />

  - 강화학습
    - 여러번 시도 해서 강화됨
    - Agent가 Environment 안에서 Action해보고, 그 결과로 Reward를 받으면서, 시간이 지났을 때 총 Reward가 최대가 되도록 Q-function을 학습하는 과정

<br/>

  - 인공 신경
    - 노드와 엣지로 이루어져 있다
    - 웨이트(중요도) 곱하고 바이어스(민감도)와 함께 더하고 계산
    - 주어진 입력에 대해 원하는 출력이 나오도록 웨이트, 바이어스를 잘 정해줘야 한다
    - 웨이트랑 바이어스는 결국 AI가 절작한 것을 알아낸다 -> AI가 학습한다 라고 표현
  - 인공 신경망
    - 맨처음 들어온 input에서 hidden레이어를 거쳐 곱하고 더하고 웨이트...바이어스..하고 output나오는것
    - 깊은 인공 신경망 : DNN(Deep Neural Network)
    - 노드끼리 싹 다 연결한 층은 FC(fully-connected) layer라고 불림
    - 모든 layer가 FC layer인 신경망을 multilayer perceptron(MLP)라고 불림
    - 훈련 과정
      - 1.데이터를 준비
      - 2.모델을 정의(파이토치) -> 데이터가 어떤 특성을 갖는지에 따라 정의 -> 이것에 따라서 훈련 과정도 달라짐
      - 3.손실 함수를 정의
      - 4.가중치들을 초기화
      - 5.훈련(최적화로 가중치 업데이트)
      - 6.결과 확인
    - 요즘에는 훈련을 하면서, 고객이 사용하면서 데이터가 쌓이면서 모델을계속 업데이트 하고, 변경하는 방식도 사용하고 있음

<br/>

  - 인공 신경망은 함수다
    - 수 많은 데이터를 마구 넣어서 "이 입력에는 이 출력이 나와야 돼!"를 하는 것
    - 이걸 계속해서 알려주면 AI는 결국 입력과 출력을 연결하는 함수를 알아내서 새로운 데이터에 대해서도 적절한 출력을 뱉게 된다
    - 따라서, AI는 거대한 함수인것 -> 즉, 결국 인공 신경망 이기 때문에 웨이트와 바이어스를 알아내는 것이 딥러닝의 목표!!

<br/>

  - 선형 회귀(Linear regression)
    - 입력과 출력간의 관계를 알아내는 것
      - 처음 보는 입력에 대해서도 적절한 출력을 얻기 위함
    - ax+b에서 a,b를 알아내서(웨이트, 바이어스) 다른 x가 들어와도 값을 예측하게 된다
      - 최적의 a,b => 내가 고른 a,b가 좋다 나쁘다를 판단할 수 있어야 한다
    - 최적의 a,b찾기
      - loss를 최소화 하는 a,b가 바로 최적의 a,b
        - MAE(Mean Absolute Error) vs MSE(Mean Squared Error)
          - MSE가 이상치에 더 민감하다. 제곱을 해주니까
          - MAE는 제곱이 아닌 절대값을 취해 주는것
      - 선형 회귀의 목적은 Loss를 최소화 하는 weight와 bias를 구하는 것
        - 비효율적이며, 모든 경우의 수를 일일이 대입해서 최적값을 찾는 방식은 현실적으로 불가능 => 해결책 : Gradient descent(경사하강법)

<br/>

  - Gradient descent(경사하강법)
    - 일단 처음 a, b는 아무렇게나 정한 후, loss를 줄이는 방향으로만 나아가자 => 이렇게 하면 모든 값을 대입할 필요가 없음
    - 딥러닝의 코어인 이론!!
    - 현재 위치에서 방향(Loss를 줄이는)만 잘 정하면 되는것
    - Gradient는 항상 가장 가파른곳을 향하는 공식이다
      - 따라서, Gradient의 반대방향으로 가면 된다
      - 하지만 이렇게 움직이면 너무 많이 가게 되는 경우 플러스,마이너스가 왔다 갔다 하게 되니, 그걸 방지하기 위해서 Learning Rate를 사용하여 조절하게 된다
      - 이걸 수식으로 하면 결국 Gradient descent(경사하강법) 수식이 나오고 이게 결국 딥러닝 수식의 기초가 된다
      - 단점 : loss안에 모든 데이터가 다 고려되어 있기 때문에 느리다.

<br>

  - Weight initializaion
    - weight를 랜덤하게 0으로 잡자! 라는 방법론들
      - LeCun, Kaiming, Xavier

<br>

  - Gradient descent(경사하강법) 단점 2가지
    - Gradient descent(경사하강법) 한 스텝을 하는데 즉,loss를 구하기 위해, 모든 파라미터를 다 더하고 곱하고 해야하기 때문에 연산이 많고 느리다
    - 글로벌 미니멈이 있고, 로컬 미니멈이 있는데,우연히 한 곳에서 시작했을때 좋은 로컬 미니멈, 혹응 글로벌 미니멈으로 가는경우는 제로에 수렴하게 된다. 그럴 확률이 매우 낮다는것

<br>

  - SGD
    - Gradient descent는 모든 데이터를 한 스텝에 계산 해야하기 때문에 느리다, 따라서 SGD방법이 나오게 된다.(또한 로컬 미니엄으로 부터 탈출의 기회가 되시도 한다)
    - 랜덤하게 데이터 하나씩 뽑아서 loss를 만든다

<br>

  - mini-batch SGD
    - SGD는 하나씩 보는 것이지만, mini-batch SGD는 2개 이상씩 데이터를 이용해서 보는것
    - 그런데, GPU는 병렬 연산을 가능하게 하므로 여러 데이터에 대해서도 빠름
  - Epoch, Batch size
    - 총 Epoch수 (전체 데이터를 몇 번 반복해서 볼거냐)
    - Batch size (몇 개씩 볼거냐)
    - Learning rate (얼만큼 갈거냐)
  - parameter, hyperparameter
    - 파라미터(AI가 스스로 알아내는 변수)
      - weights
      - bias
      - 등등
    - 하이퍼파라미터(내가 정해줘야 하는 변수)
      - Epoch, batch size
      - Initial weight값
      - learning rate, learning rate scheduling
      - model architecture(layer수, node수, activation함수 등)
      - loss 함수 뭐 쓸지
      - 최적화 기법 뭐 쓸지
  - Momentum
    - 그라디언트를 누적함으로써 관성을 가지게 한다
  - RMSprop
    - Learning rate를 각 파라미터 별로 다르게 준것
    - 경사 보고 가파른 쪽은 좀 조심조심하고, 완만한 쪽은 과감하게한다
  - Adam(Adaptive Moment Estimation)
    - ??

<br>

  - Training vs Test( vs Validation)
    - Test 데이터가 학습 때 사용되면 안됨
      - AI가 처음 보는 data에 대해서도 답을 잘 하는지 확인하기 위해
    - 그런데, train 데이터만으로 학습하자니 몇 epoch에서 학습을 멈춰야 할지 모른다
      - train loss를 계속 줄이는 게 능사가 아님, 그래서 validation(모의 tset)
    - 파라미터 학습을 위한 data vs 최종적으로 학습된 모델 테스트용 data ( vs 하이퍼파라미터 선택을 위한 data)

<br>

  - K-fold Cross Validation(교차 검증)
    - training data가 적어서 일부를 validation으로 쓰기 곤란할 때
    - 각기 다른 train, validation조합의 데이터로 여러개의 모델을 만들어서 평균 val loss를 구하자
    - 가장 val loss평균이 작은 hyperparameter set을 고르는 데 사용 가능

<br>

  - 인공 신경망 수식  
<img width="805" height="503" alt="image" src="https://github.com/user-attachments/assets/5a5cc26d-c0a4-42cb-b03e-3dd531e15fc5" />

<br>

  - 모델을 좀 복잡하게 만들어 보니 MLP는 행렬 곱하고, 벡터 더하고, activation의 반복
    - 그냥 깊게 깊게 만들면 엄청 복잡한 함수도 나타낼 수 있을거 같지만, linear activation만 쓰면 아무리 깊게 만들어도 FC layer한층 그 이하의 표현력만 가질 수 있음
    - xW + b 로는 입력과 출력 간의 선형적 관계만을 나타냄
    - 따라서, non-linear activation은 중요하다

<br>

  - backpropagation
    - 어렵...
    - 그냥 여러 값들을 어떻게 찾아나가야 할지에 대한것..나중에 다시 이해해보기

<br>

  - sigmoid
    - 기본적인 이분법의 환경에서는 정도라는것을 판단할 수 없으며, 0또는 1 처럼 맞다 아니다 만 판단가능하게됨
    - unit step function을 조금 부드럽게 만들어보자
    - 전구간 미분 가능
    - 좀더 부드러운 분류가 가능
    - 확률로도 해석 가능





###### [AI기초공부](#ai기초공부)
###### [Top](#top)
