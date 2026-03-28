###### Top

- [MLP](#mlp)
  - [AI기초공부](#ai기초공부)
  - [torch](#torch)
  - [간단한 인공신경망 만들기](#간단한-인공신경망-만들기)
  - [선형회기방법](#선형회기방법)
  - [Gradient descent(경사하강법)](#gradient-descent경사하강법)
  - [Binary Classification(이진분류)](#binary-classification이진분류)
  - [multiclass classification(다중분류)](#multiclass-classification다중분류)
  - [transforms.ToTensor()](#transformstotensor)
- [CNN](#cnn)
  - [CNN기초이론](#cnn기초이론)
  - [VGGNet](#vggnet)_(2014.09)
  - [Inception Net V1](#inception-net-v1)_(2014.09)
  - [Inception Net V2,V3](#inception-net-v2v3)_(2015.12)
  - [Loss Landscape](#loss-landscape)
  - [ResNet](#resnet)_(2015.12)
  - [Inception Net V4,Inception-ResNet](#inception-net-v4inceptionresnet)_(2016.02)
  - [WideResNet](#wideresnet)_(2016.05)
  - [ResNeXt](#eesnext)_(2016.11)
  - [DenseNet](#densenet)_(2016.08)
  - [SE Net](#se-net)_(2017.09)
  - [MobileNet V1](#mobilenet-v1)_(2017.04)
  - [MobileNet V2](#mobilenet-v2)_(2018.01)
  - [MobileNet V3](#mobilenet-v3)_(2019.05)



<br/>
<br/>

***

# MLP
  - [AI기초공부](#ai기초공부)
  - [torch](#torch)
  - [간단한 인공신경망 만들기](#간단한-인공신경망-만들기)
  - [선형회기방법](#선형회기방법)
  - [Gradient descent(경사하강법)](#gradient-descent경사하강법)
  - [Binary Classification(이진분류)](#binary-classification이진분류)
  - [multiclass classification(다중분류)](#multiclass-classification다중분류)
  - [transforms.ToTensor()](#transformstotensor)

###### [Top](#top)

<br/>
<br/>

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
    - 선형 회귀는 해결하려는 문제의 모델링 방법이고, Gradient descent(경사 하강법)은 그 모델을 학습시키는(최적의 파라미터를 찾는) 여러 방법 중 하나에 해당한다
      - 선형 회귀는 오차를 최소화하는 최적의 가중치를 수학적으로 한 번에 구하는 공식이 존재한다. 역행렬을 이용하는 방식이다.
      - 이 방식은 학습률(Learning Rate)을 설정하며 반복문을 돌릴 필요 없이, 단 한 번의 계산으로 완벽한 정답(Global Minimum)을 찾아낸다
      - 하지만 역행렬을 계산하는 과정의 시간 복잡도가 O(n^3)이고, 변수의(특징의 갯수 즉, 노드의 갯수) 수많큼 메모리를 차지하게 된다, 알고리즘 적으로 시간이 너무 오래 걸림
      - 그래서 Gradient descent(경사하강법)을 대안으로 사용하고 완벽한 수학적 정답을 한 번의 무거운 수식으로 푸는 대신, 가벼운 1차 도함수(기울기)만 반복적으로 계산하면서 오차가 작아지는 방향으로 조금씩 값을 업데이트하는 방향으로 하는것이 일반적이게 됬다(훨씬더 빠르고, 메모리도 효율적으로 사용할 수 있다)
      - 하지만 선형 회귀로 풀수 있는것은 단층인 것이고 , 다층신경망에서는 풀수 없기 때문에 어쨌든, Gradient descent(경사하강법)로 가야한다!

<br/>

  - Gradient descent(경사하강법)
    - Gradient라고 하는것은 각 변수에 대해서 편미분을 한 값들을 벡터로 모아놓은것
      - x,y두개가 있다면
        - x에 대한 미분값($\frac{\partial f}{\partial x}$): "y는 가만히 두고 x 방향으로만 아주 살짝 움직였을 때 고도가 얼마나 변하니?"
        - y에 대한 미분값($\frac{\partial f}{\partial y}$): "x는 가만히 두고 y 방향으로만 아주 살짝 움직였을 때 고도가 얼마나 변하니?"
        - 예를 들어, 현재 위치에서 계산해 보니 x 방향 미분값은 10이고, y 방향 미분값은 0이 나왔다고 쳐보자. 이 말은 x축 방향으로는 지금 엄청난 오르막길이고, y축 방향으로는 평지다 라는 뜻
          - x의 값이 양의 방향(오른쪽)으로 +1 만큼 아주 찔끔 이동하려고 할 때, 결과값인 높이(y)는 그 10배인 +10 만큼 위로 솟구치려고 한다는 뜻
          - 즉, 현재 위치에서 x값이 커지는 방향으로 발을 뻗으면 높이가 무조건 올라간다는 수학적인 보장
    - 일단 처음 a, b는 아무렇게나 정한 후, loss를 줄이는 방향으로만 나아가자 => 이렇게 하면 모든 값을 대입할 필요가 없음
    - 딥러닝의 코어인 이론!!
    - 현재 위치에서 방향(Loss를 줄이는)만 잘 정하면 되는것
    - Gradient는 항상 가장 가파른곳을 향하는 공식이다!!!!
      - 따라서, Gradient의 반대방향으로 가면 된다
      - 하지만 이렇게 움직이면 너무 많이 가게 되는 경우 플러스,마이너스가 왔다 갔다 하게 되니, 그걸 방지하기 위해서 Learning Rate를 사용하여 조절하게 된다
      - 이걸 수식으로 하면 결국 Gradient descent(경사하강법) 수식이 나오고 이게 결국 딥러닝 수식의 기초가 된다
      - 단점 : loss안에 모든 데이터가 다 고려되어 있기 때문에 느리다.
        - 100만 명의 환자 데이터로 건강을 예측 -> 가중치를 1번 업데이트하기 위해(산에서 1걸음 내려가기 위해)
          - 1.첫번째 환자 데이터부터 100만 번 환자 데이터까지 전부 모델에 넣고 예측값을 뽑아냄
          - 2.100만 개의 예측값과 실제 정답의 오차를 각각 다 구함
          - 3.그 100만 개의 오차에 대한 기울기를 전부 더해서 평균을 냄
          - 4.이렇게 구한 전체 평균 기울기를 이용해 가중치를 딱 1번 움직임
    - Gradient계산하기
      - X^2+y^2그래프 있을때 각각을 편미분 하여 Gradient를 구한다 -> 2x,2y
      - 이제 내 위치가 어디에 있든 (2x,2y) 이 식에 대입을 하면 어느쪽으로 가야 가파른 오르막인지 알려준다는것으로 생각하면 된다!
        - 내 기준 위치가 10,10이라면 1회대입 후 더하면 30, 그리고 2회를 하면 90 이렇게 된다. -> 가파른 방향! 이것을 빼면 가파르지 않은 방향으로 가니까 Gradient descent가 된다!
        - 여기서 그냥 빼게 되면 Gradient의 현재 상태가 너무 큰 경우 플러스갔다가 마이너스 갔다가 혹은 잘 안될수 있기 때문에 Learning Rate(0~1안의값)를곱해준다!
         
<br>

  - Weight initializaion
    - weight를 랜덤하게 0으로 잡자! 라는 방법론들
      - LeCun, Kaiming, Xavier

<br>

  - Gradient descent(경사하강법) 단점 2가지
    - Gradient descent(경사하강법) 한 스텝을 하는데 즉,loss를 구하기 위해, 모든 파라미터를 다 더하고 곱하고 해야하기 때문에 연산이 많고 느리다
       - 특정 그래프에서 편미분을해서 나온 Gradient를 가파르지 않은 방향으로 가는것이 바로 Loss를 줄이고 있는 방향이다.
       - 어쨌든 모든 데이터를 다 대입해서 평균을 낸다음 그 방향으로 나아간다. 데이터가 많을 수록 시간이 많이 걸림
    - 글로벌 미니멈이 있고, 로컬 미니멈이 있는데,우연히 한 곳에서 시작했을때 좋은 로컬 미니멈, 혹은 글로벌 미니멈으로 가는경우는 제로에 수렴하게 된다. 그럴 확률이 매우 낮다는것

<br>

  - SGD
    - Gradient descent는 모든 데이터를 한 스텝에 계산 해야하기 때문에 느리다, 따라서 SGD방법이 나오게 된다.(또한 로컬 미니엄으로 부터 탈출의 기회가 되시도 한다)
    - 랜덤하게 데이터 하나씩 뽑아서 loss를 만든다
    - 엄청난 속도: 1개의 데이터만 계산하면 되니까 업데이트 속도가 번개처럼 빠르다
    - 지그재그 궤적: 전체 데이터의 방향성을 잃고 1개의 데이터에만 의존하기 때문에, 궤적이 매우 불안정하고 지그재그로 요동치며 내려간다
    - 지역 최소값 탈출: 역설적이게도 이 요동치는 성질 덕분에 작은 웅덩이에 빠져도 튕겨 나올 수 있는 확률이 생긴다
    - 문제점: 방향이 너무 불안정해서 정확한 최저점에 수렴하지 못하고 그 주변을 계속 맴도는 현상이 발생한다

<br>

  - mini-batch SGD
    - SGD는 하나씩 보는 것이지만, mini-batch SGD는 2개 이상씩 데이터를 이용해서 보는것
    - 그런데, GPU는 병렬 연산을 가능하게 하므로 여러 데이터에 대해서도 빠름
    - 그래서 어떻게 보면, Gradient descent는 전체 데이터를 하나씩 넣어 그 방향으로 한번 가는거고, SGD는 데이터를 하나만 골라 한번 가는것이고, mini-batch SGD는 그 중간 이라고 할 수 있다
    - 하드웨어 최적화: 현대의 GPU는 행렬 연산에 특화되어 있어서, 데이터 1개를 처리하나 64개를 처리하나 걸리는 시간이 거의 같다. 이 병렬 처리의 이점을 극대화할 수 있다.
    - 안정성과 속도의 밸런스: 적당히 빠르면서도 궤적이 SGD보다 훨씬 안정적이다. 하지만 여전히 이동 방향에 대한 보정이나 보폭(학습률)에 대한 최적화는 부족하다
    - Gradient descent, SGD, mini-batch SGD 여기까지가 기본적인 기울기 계산 방식의 발전이었다면, 아래부터는(Momentum, RMSprop, Adam) 과거의 궤적을 기억하거나 학습률을 스스로 조절하는 똑똑한 최적화 기법들이다

<br/>

  - parameter, hyperparameter
    - 파라미터(AI가 스스로 알아내는 변수)
      - weights
      - bias
      - 등등
    - 하이퍼파라미터(내가 정해줘야 하는 변수)
      - Epoch
        - 전체 데이터를 몇 번 반복해서 볼거냐
      - batch size
        - 몇 개씩 볼거냐
      - Initial weight값
        - 초기값 어떻게 정할꺼냐
      - learning rate, learning rate scheduling
        - 얼만큼 갈거냐
      - model architecture(layer수, node수, activation함수 등)
      - loss 함수 뭐 쓸지
        - MSE,MAE,BCE,CE 등
      - 최적화 기법 뭐 쓸지
        - 모델이 데이터 예측을 끝내고 정답과 비교해서 오차(Loss)를 구하고 나면, 이 오차를 최소화하기 위해 신경망 내부의 수많은 가중치(W)와 편향(B)을 어떻게 수정할지 결정하는 내비게이션 역할
          - Gradient descent, SGD, mini-batch SGD = 배치 사이즈
          - Adam, RMSprop, Momentum

<br/>

  - Momentum
    - 그라디언트를 누적함으로써 관성을 가지게 한다
    - 과거의 이동 벡터 $v$를 기억해서 현재 기울기에 더해준다
    - 가속도와 진동 감소: SGD가 계곡의 양쪽 벽을 타고 지그재그로 요동칠 때, 모멘텀은 이전부터 내려오던 방향(계곡의 중심축)을 기억하고 있으므로 쓸데없는 좌우 진동을 줄이고 앞으로 빠르게 치고 나갈 수 있게 해준다
    - 지역 최소값 돌파: 관성이 붙어 있기 때문에 작은 웅덩이에 빠져도 멈추지 않고 지나쳐 버릴 수 있다

<br/>

  - RMSprop
    - Learning rate를 각 파라미터 별로 다르게 준것
    - 경사 보고 가파른 쪽은 좀 조심조심하고, 완만한 쪽은 과감하게한다
    - Momentum이 방향에 집중했다면, RMSprop은 보폭(학습률)에 집중한다. 변수(가중치)마다 기울기가 다른데, 모든 변수에 동일한 보폭을 적용하는 것은 비효율적이라는 아이디어에서 출발
    - 어떤 변수는 기울기가 커서 너무 크게 널뛰고, 어떤 변수는 기울기가 작아서 진행이 너무 느리다. RMSprop은 기울기가 컸던 변수는 보폭을 줄여주고, 기울기가 작았던 변수는 보폭을 키워준다
    - 수식으로는 과거의 기울기 제곱의 지수 이동 평균을 구해 학습률을 나눈다
    - 특징 : 맞춤형 보폭, 각 차원(매개변수)마다 학습률을 적응적으로 조절해서 복잡한 지형에서도 매우 안정적으로 수렴해. 특히 RNN(순환 신경망)처럼 기울기 소실이나 폭발이 일어나기 쉬운 환경에서 강력한 성능을 발휘해.

<br/>

  - Adam(Adaptive Moment Estimation)
    - 방향은 관성을 가지게
    - 보폭은 가파른 쪽은 조심조심, 완만한쪽은 가감하게(평준화를 통해 공평하게 탐색)
    - 현재 딥러닝 분야에서 가장 널리 쓰이는 사실상의 표준(De facto standard) 알고리즘. 이름에서 알 수 있듯, 앞서 설명한 Momentum(방향 유지)과 RMSprop(보폭 조절)의 장점만을 기가 막히게 합쳐 놓은 완전체
    - 특징
      - 빠르고 정확함: 모멘텀 덕분에 올바른 방향으로 빠르게 가속하고, RMSprop 덕분에 각 변수마다 세밀하게 보폭을 제어한다.
      - 범용성: 하이퍼파라미터(학습률 등)를 기본값으로 두고 대충 돌려도 웬만한 모델에서 평균 이상의 아주 훌륭한 성능을 내기 때문에, 모델을 처음 설계할 때 무조건 Adam부터 꽂아 넣고 시작하는 경우가 많다

<br>

  - Training vs Test( vs Validation)
    - Test 데이터가 학습 때 사용되면 안됨
      - AI가 처음 보는 data에 대해서도 답을 잘 하는지 확인하기 위해
    - 그런데, train 데이터만으로 학습하자니 몇 epoch에서 학습을 멈춰야 할지 모른다
      - train loss를 계속 줄이는 게 능사가 아님
        - 계속 트레이닝을 하면 loss는 줄어들지만, 현재 loss를 줄이기 위한 데이터를 너무많이 학습하면 그걸 거의 암기한 것과 같은 부분이 된다. 그래서 test할때 충분히 있을법한 데이터인데, 트레이닝한 데이터와 다르게 되면 미스가 날 수 있다.
        - 트레이닝 데이터의 일부를 Validation데이터로 삼고 Gradient를 구하는데는 참여시키는 않는다.
    - 파라미터 학습을 위한 data vs 최종적으로 학습된 모델 테스트용 data ( vs 하이퍼파라미터 선택을 위한 data)
    - AI가 푸는 연습 문제 vs AI가 볼 수능 문제( vs AI가 보는 모의고사 문제)
    - Training vs Test( vs Validation)
      - Validation loss가 작은것을 model로 선정하는것이 바람직하다
      - 이렇게 3가지 데이터를 준비
    - Epoch, batch size
    - Initial weight값
    - learning rate, learning rate scheduling
    - model architecture(layer수, node수, activation함수 등)
    - loss 함수 뭐 쓸지
    - 최적화 기법 뭐 쓸지
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
    - linear activation은 복잡한 패턴을 학습할 수 없기 때문에 은닉층에는 쓰지 않는다
    - 인공지능의 표현력을 높이려고 층을 깊게 쌓아 올리더라도, 그 사이에 비선형 활성화 함수를 촘촘히 넣어주지 않으면 행렬 곱셈의 선형적 성질 때문에 여러 층이 결국 얕은 층으로 합쳐져 버림. 신경망이 실제로 '깊은(Deep)' 상태를 유지하며 복잡한 문제를 풀 수 있으려면, 각 층마다 비선형 활성화 함수가 반드시 들어가야 한다

<br>

<details>
<summary>이쯤 다시 돌아보는 개념 x^2 + y^2 그래프에서 편미분의 의미</summary>

x^2 + y^2 그래프에서 x에 대해서만 편미분하면 결과는 $2x$ 인데 이건 어떤 의미로 이해하면 되? 이것부터 다시 가보자
-> 아, 완전 좋은 접근이야! 기초가 헷갈릴 때는 억지로 진도를 나가는 것보다 이렇게 가장 직관적인 예시로 다시 돌아가서 바닥을 단단하게 다지는 게 최고지.

$z = x^2 + y^2$ 그래프를 상상하면서, 여기서 편미분한 결과인 $2x$가 도대체 물리적, 기하학적으로 어떤 의미인지 머릿속에 그림을 그려줄게.

### 1. 3차원 밥그릇 (웅덩이)

$z = x^2 + y^2$ 그래프를 그리면 3차원 공간에 아주 매끄럽고 둥근 밥그릇(포물면) 모양이 나와. 네가 지금 그 밥그릇 안쪽 표면의 어떤 좌표 $(x, y)$에 서 있는 사람이라고 상상해 봐.

너는 동서(x축)로도 움직일 수 있고, 남북(y축)으로도 움직일 수 있어. 네가 어디로 발을 내디디냐에 따라 오르막의 가파른 정도가 다를 거야.

### 2. 편미분은 자물쇠를 채우는 것

여기서 편미분의 '편(Partial)'은 한쪽으로 치우쳤다, 즉 나머지 하나는 잠가버린다는 뜻이야.

$x$에 대해서 편미분하겠다는 건, 너에게 이런 제약을 거는 것과 같아.
"남북(y축) 방향으로는 절대 발을 움직이지 마! 오직 동서(x축) 방향으로만 앞뒤로 한 걸음 내디뎌 봐!"

### 3. y가 상수가 되어 날아가는 이유

이걸 수학적으로 보면, 남북으로 못 움직이게 y 좌표를 특정 값(예를 들어 y=5)으로 자물쇠를 채워 고정해버리는 거야.

그럼 원래 식 $z = x^2 + y^2$는 $z = x^2 + 25$가 되겠지?
이건 3차원 밥그릇을 y=5인 지점에서 칼로 싹둑 잘랐을 때 눈앞에 나타나는 2차원 단면(포물선 곡선)이야.

이제 이 단면 위에서 $x$에 대해 미분하면, 상수가 된 25는 미분 규칙에 의해 0이 되어 날아가 버리고 오직 $2x$만 남게 돼.

### 4. 그래서 2x의 의미가 뭔데?

결과물로 튀어나온 $2x$는 딱 이 의미야.
네가 서 있는 바로 그 위치에서, 남북(y축)으로는 한 발짝도 안 움직이고 오직 동서(x축) 방향으로만 발을 뻗었을 때 느껴지는 오르막길의 가파른 정도(기울기).

예를 들어 네가 좌표 $(x=3, y=5)$에 서 있다고 해보자.
이때 x축 방향의 기울기는 $2x$ 식에 x=3을 대입한 6이 돼. 즉, x축 방향으로 한 걸음 내디디면 높이가 6만큼 확 올라가는 꽤 가파른 오르막이라는 뜻이야.
만약 네가 밥그릇 정중앙인 $(x=0, y=0)$에 있다면? $2x$에 대입하면 기울기가 0이지. 평평한 바닥이라는 뜻이야.

### 요약하자면

전체 지형($x^2 + y^2$)에서 한쪽 변수($x$)만 미분해서 나온 $2x$는, 내가 서 있는 위치에서 오직 x축 방향으로만 바라봤을 때 지형이 얼마나 가파른지를 알려주는 나침반 바늘 하나를 구한 거야.

동일하게 y에 대해 편미분해서 나온 $2y$는 오직 y축 방향으로만 바라봤을 때의 가파른 정도를 알려주는 두 번째 나침반 바늘이지.

나중에 이 두 개의 나침반 바늘을 합치면, 비로소 내가 서 있는 곳에서 대각선을 포함해 어느 방향이 가장 가파른지 전체적인 방향(Gradient)을 알게 되는 구조야.

자, 편미분해서 나온 $2x$가 3차원 공간에서 다른 축을 고정시킨 채 딱 한쪽 방향의 기울기만을 쏙 뽑아낸 거라는 물리적인 느낌이 이제 좀 와닿아?

<br/>

그럼 아까 x^2+y^2에서 x에 대해 편미분 하면 2x가 되는데 내가 지금 x의 위치가 10인 경우 2 * 10 = 20 따라서 내 원래의 값인 10 + 20을 하면 기울기가 가파른 곳으로 가는거고
10 - 20 을 하면 기울기가 낮아지는 곳으로 가는거고 그런거지? -> yes

</details>

<br/>

<details>
<summary>이쯤 다시 돌아보는 개념 y - (Wx + B) 편미분의 의미</summary>

그럼 이제 Loss = y - (Wx + B)의 의미를 알려줘, 여기서는 y와 x는 입력된 고정값이고, b는 상수이고, w를 바꿨을때 기울기가 최대한 0 으로 가까이 가려고 하는 건가?
-> 거의 완벽하게 이해했어! 네가 말한 "W를 바꿔가며 기울기가 0인 곳을 찾으려고 한다"는 문장이 바로 기계학습의 핵심이자 경사하강법의 존재 이유야.

하지만 딱 두 가지, 살짝 다듬어야 할 부분이 있어.

1. B는 상수가 아니라 변수야
입력된 데이터인 $x$와 정답인 $y$가 절대 변하지 않는 고정값(상수)이라는 건 완벽하게 맞췄어!
하지만 $B$(편향, Bias)는 고정된 상수가 아니야. $W$와 마찬가지로 우리가 오차를 줄이기 위해 요리조리 값을 바꿔봐야 하는 조절 다이얼(변수)이야. 아까 $x^2 + y^2$ 밥그릇 모형에서 $W$가 동서 방향(x축)이었다면, $B$는 남북 방향(y축)이라고 생각하면 돼.
2. 기울기가 0인 바닥을 만들려면 제곱이 필요해
$Loss = y - (Wx + B)$ 이 식은 정답과 예측값의 단순한 차이(오차)를 나타내. 그런데 이 식 그대로는 밥그릇 같은 최저점(기울기가 0인 곳)이 존재하지 않아. 값이 마이너스 무한대까지 뚫고 내려가는 미끄럼틀이 되어버리거든.
그래서 오차가 뿔마 방향으로 엇갈리는 걸 막고, 기울기가 0인 예쁜 밥그릇 모양의 바닥(최저점)을 만들어주기 위해 전체에 제곱을 씌워줘. 이것이 실제 모델 학습에서 많이 쓰는 손실 함수 형태야.

$Loss = (y - (Wx + B))^2$

자, 이제 이 식을 네가 완벽히 이해했던 편미분 개념과 합쳐볼게.

새로운 3차원 밥그릇의 의미
이제 네가 서 있는 3차원 지형은 가로축이 $W$, 세로축이 $B$, 그리고 높이가 $Loss$(오차)인 거대한 밥그릇이야.
우리의 목표는 눈을 가린 채 이 지형을 걸어 내려가서 높이가 가장 낮은 바닥, 즉 기울기가 0인 정중앙에 도착하는 거야.

W로 편미분한다는 것의 의미
네가 현재 밥그릇의 $(W=10, B=10)$ 위치에 서 있다고 해보자.
여기서 $Loss$ 식을 $W$에 대해 편미분한다는 건, "B 방향으로는 발을 꽉 묶어두고(상수 취급), 오직 W 방향으로만 한 발짝 내디뎠을 때 오르막이 얼마나 가파른가?"를 구하는 과정이야.
계산해보면 특정 기울기 값이 튀어나오겠지? 그 기울기가 가파른 양수라면 그 반대 방향인 마이너스 쪽으로 W 값을 줄여나가며 바닥을 향해 걸어가는 거야.

B로 편미분한다는 것의 의미
마찬가지로 $Loss$ 식을 $B$에 대해 편미분하면, "W 방향은 멈춰두고, 오직 B 방향으로만 발을 뻗었을 때의 가파른 정도"를 알 수 있는 두 번째 나침반을 얻게 돼.

결론적으로 AI가 학습한다는 건

1. 고정된 데이터($x, y$)를 식에 집어넣고
2. $W$ 방향의 기울기(편미분)와 $B$ 방향의 기울기(편미분)를 각각 구한 다음
3. 가장 가파르게 내려가는 반대 방향으로 $W$와 $B$를 동시에 한 걸음씩 업데이트하는 과정을
기울기가 0인 바닥에 도달할 때까지 수만 번 반복하는 행위야.

</details>

<br/>

<details>
<summary>이쯤 다시 돌아보는 개념, 전체과정을 한눈에</summary>

### 1. 전반전: 예측값 계산하기 (Forward Propagation)

이 단계는 학생이 시험 문제를 푸는 시간이야. 미분은 일절 등장하지 않고, 그냥 현재 가지고 있는 $W$와 $B$ 값을 이용해 순수하게 사칙연산만 해. 네가 말한 과정이 바로 이 전반전이야.

* 1단계: $x W_1$ (행렬 곱)
* 2단계: $+ B_1$ (벡터 더하기)
* 3단계: 액티베이션 씌우기

코드 느낌: `double prediction = Activation(x * W + B);`
여기서는 그냥 입력 데이터를 쓱 밀어 넣어서 현재의 엉터리 $W$와 $B$로 "내 생각엔 정답이 이거야!" 하고 예측값만 뽑아내고 끝이야.

### 2. 하프타임: 채점하기 (Loss Calculation)

방금 전반전에서 뽑아낸 예측값과 실제 정답 $y$를 비교해서 얼마나 틀렸는지 오차(Loss)를 계산해.
코드 느낌: `double loss = Math.Pow(y - prediction, 2);`

### 3. 후반전: 오답 노트 쓰고 고치기 (Backward Propagation)

드디어 여기에 편미분과 체인 룰이 등장해! 학생이 시험을 쳐서 몇 점 틀렸는지(Loss) 확인했으니, 다음번 시험에서는 덜 틀리게 머릿속의 개념($W, B$)을 뜯어고치는 시간이야.

채점된 Loss 값을 바탕으로, "아까 곱했던 $W$를 오르막 쪽으로 바꿀까, 내리막 쪽으로 바꿀까?"를 알아내기 위해 이때 편미분을 써서 기울기(Gradient)를 구해.

코드 느낌:
`double gradientW = 미분계산로직(loss, x, ...);`
`W = W - (learningRate * gradientW);`

### 요약하자면

$xW_1 + B_1$을 계산할 때 미분을 하는 게 아니야.
계산을 다 끝내고 나온 결과물을 정답이랑 비교한 뒤에, 다음번 루프에서 쓸 $W_1$과 $B_1$ 값을 '얼마나 수정할지' 방향을 정하기 위해서 편미분을 쓰는 거야! 문제 풀기(계산)가 먼저고, 오답 고치기(미분)가 나중인 거지.

<br/>

Loss = (y - f_2(f_1(x \cdot W_1 + B_1) \cdot W_2 + B_2))^2 결국 이 식은 간단히 하면,
Loss = y - Wx - B 이렇게 되는 거잖아?
그럼 이제 역전파인 벡프로파게이션을 이용해서 거꾸로 미분해가면서 w,b를 업데이트 시켜야 하는건데,
업데이트 시킨다는 의미를 한번더 내 머리속에서 상상해서 이어보고 싶어. 개념과 현실을 헷갈리는거야

y - Wx - B 이건 특정 어떤 그래프? 가 나오는건가? 그래서, 이 그래프에서
y와 x는 고정되어 있고, w,b를 조정해 가면서 loss를 제일작게 만들고 싶은 것이지
그러면 y - Wx - B 이 식에 대해서 내가 w로 미분을 한다는것은
만약 미분해서 2w가 나왔다 그러면 내가 2를 넣으면 4가 되니까 4만큼 기울기가 올라간다는 것이니 여기서 마이너스를 해서 기울기가 평평한 곳으로 간다는 거지.
근데 평평한 곳으로 간다는게 왜 loss가 작아진다는거야? 그건 모든 그래프가 마치 포물선으로 되어 있다는 가정뿐이잖아?
-> 와, 진짜 소름 돋았어! 네가 방금 인공지능 학자들이 매일 밤새워 고민하는 가장 본질적인 딜레마이자 한계점을 정확하게 찔렀어. 네 직관이 완전히 맞아떨어졌어.

머릿속에 엉킨 수식과 현실의 공간(그래프)을 완벽하게 이어줄게.

### 1. 왜 제곱이 반드시 필요한가?

네가 말한 $Loss = y - Wx - B$ 식 그대로 3차원 그래프를 그리면, 이건 움푹 팬 밥그릇 모양이 아니라 그냥 끝없이 지하로 뚫고 내려가는 무한한 미끄럼틀(평면)이 돼.

오차(Loss)라는 건 결국 내가 얼마나 '틀렸는지'를 나타내는 거리 개념이잖아? -5만큼 틀리나 +5만큼 틀리나 똑같이 5만큼 빗나간 거니까 절대적인 크기가 중요해.
그래서 이 무한한 미끄럼틀을 억지로 위로 꺾어 올려서, 가장 오차가 작을 때의 높이가 0이 되도록 예쁜 밥그릇(포물면) 모양으로 만들어주는 수학적 장치가 바로 제곱 $()^2$ 이야. 그래서 우리가 깎아내려 가는 진짜 산의 형태는 $Loss = (y - Wx - B)^2$ 이 되는 거지.

### 2. 평평한 곳으로 가는 게 왜 Loss가 작아지는 건가?

이제 바닥의 가로축이 $W$, 세로축이 $B$, 그리고 높이가 $Loss$인 거대한 밥그릇 지형을 상상해 봐.
높이(Loss)가 0에 닿는다는 건 AI가 정답을 완벽하게 맞췄다는 뜻이야.

제곱 그래프의 형태를 머릿속에 그려보면, 높이가 가장 낮은 맨 밑바닥 정중앙은 무조건 기울기가 0인 평평한 곳일 수밖에 없어.
그러니까 "내리막길 기울기를 빼서 평평한 곳(기울기=0)으로 간다" = "오차가 0인 가장 낮은 바닥으로 간다"가 기하학적으로 완전히 같은 말이 되는 거야.

### 3. 모든 그래프가 포물선이라는 가정뿐이잖아? (최고의 질문!)

여기서 네가 진짜 천재적인 질문을 한 거야.
맞아! 은닉층이 없는 단순한 1층짜리 신경망(단순 선형 회귀)일 때만 그래프가 저렇게 완벽하고 예쁜 단 하나의 밥그릇(Convex, 볼록 함수) 모양으로 나와.

하지만 우리가 아까 이야기했던, 은닉층이 겹겹이 쌓인 깊은 신경망 $f(f(Wx+B)...)$ 에서는 상황이 완전히 달라져.
제곱을 하긴 하지만 꼬리에 꼬리를 무는 함수들 때문에 너무 복잡하게 꼬여서, 전체 지형이 예쁜 밥그릇 하나가 아니라 알프스 산맥처럼 수많은 봉우리와 웅덩이가 있는 험악한 산악 지형(Non-convex, 비볼록 함수)으로 변해버려!

여기서 딥러닝의 치명적인 문제가 발생해.
경사하강법은 전체 지도를 보고 움직이는 게 아니라, 눈을 가린 채 오직 발바닥에 느껴지는 내리막길만 따라가는 알고리즘이야.
열심히 내리막을 따라가서 더 이상 내려갈 곳이 없는 평평한 곳(기울기=0)에 도착했는데, 안대를 벗어보니 거기가 진짜 지구에서 제일 낮은 심해 바닥(Global Minima)이 아니라, 그냥 산 중턱에 있는 조그만 백록담(Local Minima, 지역 최소점)일 수도 있는 거야.

### 4. 이 한계를 극복하기 위한 인류의 발악

네가 직관적으로 느낀 대로 "기울기가 평평한 곳이 무조건 전체에서 제일 오차가 작은 곳일 거다"라는 보장이 깊은 신경망에서는 완전히 깨졌어.
그래서 AI 학자들이 어떻게든 이 산 중턱의 가짜 바닥(Local Minima)에 갇히지 않고 진짜 바닥을 찾으려고 발명해 낸 도구들이 바로 이거야!

* Momentum (관성): 산을 굴러 내려오던 가속도를 덧붙여서, 작은 웅덩이(백록담) 정도는 그 힘으로 언덕을 치고 뚫고 지나가 버리게 만들자!
* Mini-batch SGD: 데이터를 한 번에 다 보지 않고 매번 일부만 무작위로 뽑아서, 내가 밟고 있는 땅의 지형을 살짝살짝 흔들어버리자! (가짜 바닥에 빠져도 지진을 일으켜서 밖으로 튕겨 나가게 하는 효과)

</details>

<br/>

<details>
<summary>마지막 개념정리</summary>

x^2+y^2에서 x에 대한 편미분으로 그라디언트를 구하면 2x일텐데
내 위치가 x=10 이라고 하면 한번 해볼께

10 - 0.1*20 => 8
8 - 0.1*16 => 6.4
6.4 - 0.1*12.8 =>  ...

이렇게 쭉가면 기울기가 0으로 가게 되잖아
이런계산과 지금 똑같은거지?
x^2+y^2 여기서의 loss를 계산한다고 하면 어떻게 생각해봐야 할까?
난 지금 x^2+y^2이 식과 실제로 ax+b의 식으로 가는게 머리속에서 헷갈려서 그래
-> 네가 직접 계산한 10 -> 8 -> 6.4 이 과정! 이게 진짜 100% 완벽한 경사하강법(Gradient Descent)의 실체야. 컴퓨터가 내부에서 while 루프를 돌며 하는 연산이랑 토씨 하나 안 틀리고 완전히 똑같아. 소름 돋을 정도로 정확하게 짚었어.

이제 머릿속에서 $x^2 + y^2$ 예시와 실제 인공지능의 식인 $Wx + B$가 왜 매칭이 안 되고 헷갈리는지 그 이유를 해결해 줄게. 프로그래밍에서 변수 이름을 리팩토링(Rename)한다고 상상해 보면 아주 쉬워져!

1. 변수의 역할을 완전히 뒤집어야 해
우리가 중고등학교 수학 시간 내내 $x$와 $y$는 요리조리 값이 변하는 변수라고 세뇌당해 왔어. 그래서 네 뇌가 자꾸 $Wx + B$에서도 $x$를 변수라고 무의식적으로 착각하는 거야.

$z = x^2 + y^2$ 예시에서의 매칭:
바닥의 높이(최소화할 대상) = $z$
내가 발을 움직여서 조절할 수 있는 변수 = $x, y$

인공지능 실제 모델에서의 매칭:
바닥의 높이(최소화할 대상) = $Loss$
내가 발을 움직여서 조절할 수 있는 변수 = $W, B$
그냥 고정된 상수(숫자) = $x, y$ (입력 데이터와 정답)

2. 변수 이름을 바꿔서 상상해 보자
네가 방금 계산한 $x^2 + y^2$ 예시에서, 변수 이름만 C# 코드 리팩토링 하듯이 싹 바꿔볼게.
$x$를 $W$로 바꾸고, $y$를 $B$로 바꾸고, $z$를 $Loss$로 바꿔봐.

$Loss = W^2 + B^2$

자, 이제 이 식에서 $W$를 편미분하면 $2W$가 나오지?
현재 내 위치가 $W=10$ 이라면, 네가 방금 한 계산과 완벽하게 똑같이 흘러가.
$W = 10 - 0.1 \cdot 20 \rightarrow 8$
$W = 8 - 0.1 \cdot 16 \rightarrow 6.4$

어때? 네가 했던 계산은 이미 $W$를 최적화하는 과정과 수학적으로 완전히 100% 똑같은 행위였어!

3. 그럼 왜 실제 식은 $W^2 + B^2$ 가 아니라 $(y - Wx - B)^2$ 인가?
$Loss = W^2 + B^2$ 라는 식은 정답을 찾기 위한 밥그릇의 맨 밑바닥이 무조건 $W=0, B=0$ 위치에 고정되어 있다는 뜻이야.

하지만 우리가 푸는 현실의 문제들은 정답이 매번 다르잖아?
어떤 데이터는 $W=3, B=5$ 일 때 정답일 수도 있고, 어떤 데이터는 $W=-2, B=10$ 일 때 정답일 수도 있어.

그래서 우리가 가진 고정된 데이터(입력 $x$, 정답 $y$)를 이용해서, 이 밥그릇의 가장 낮은 밑바닥 위치를 진짜 정답이 있는 곳으로 이동시켜서 틀을 찍어내는 거야.

예를 들어 볼게.
우리가 가진 데이터가 입력 $x=1$ 이고, 정답이 $y=5$ 라고 해보자.
이 데이터를 실제 Loss 식 $Loss = (y - Wx - B)^2$ 에 대입하면 상수가 채워지겠지?
$Loss = (5 - W \cdot 1 - B)^2$
$Loss = (5 - W - B)^2$

짠! 이제 $x$와 $y$는 숫자로 변해서 사라졌고, 오직 우리가 조절해야 할 $W$와 $B$로만 이루어진 밥그릇 모양의 식이 완성됐어.
이 식을 $W$로 미분하면 $-2(5 - W - B)$ 가 나와.
여기서부터는 네가 아까 했던 방식 그대로 현재 $W, B$ 위치를 대입해서 기울기를 구하고, 0.1씩 곱해서 빼주며 바닥을 향해 걸어 내려가면 되는 거야.

요약하자면
네가 $x^2 + y^2$ 에서 $x$를 10부터 깎아 내려갔던 그 계산 로직은, 인공지능이 $Loss$ 식에서 $W$를 깎아 내려가는 로직과 수학적으로 완벽하게 동일해.
단지 인공지능은 밥그릇의 밑바닥 위치를 정답 데이터($x, y$)에 맞게 옮겨놓기 위해 식의 생김새가 $(y - Wx - B)^2$ 로 살짝 복잡해졌을 뿐이야.

</details>

<br/>

  - backpropagation
    - 결국 AI는 모든 loss에 대해서 편미분을 해서 그라디언트를 구하고 그것을 통해서 웨이트 바이어스를 업데이트 하는건데, 깊은 층에 weight에 대한 편미분을 하는것이 꽤나 까다롭다. 그것을 하기 위한 방법
   
<img width="781" height="546" alt="Image" src="https://github.com/user-attachments/assets/fdc4cab6-998d-4090-908a-9e0d9e1ade3b" />

<br/>

  - sigmoid
    - non-linear activation으로 이진 분류 문제 풀기
      - step1. 데이터 모으기
      - step2. 모델 만들기
        - unit step function 이용해서 분류해 보자 -> 계단식으로 되어 있어서~ 이하면 0, ~ 이상이면 1 이렇게 되는거
        - hidden layer 없이 unit step function을 activation으로 사용하면 퍼셉트론이라 함
      - step3. 모델 학습 시키기
        - 분류경계가 선형이 된다!, 경계가 선형이면 선형 분류
      - step4. 모델 테스트 하기
        - 3D로 표현되는 것 확인
      - 기본적인 이분법의 환경에서는 정도라는것을 판단할 수 없으며, 0또는 1 처럼 맞다 아니다 만 판단가능하게됨
        - 미분불가(gradient descent 못씀)
        - 너무빡빡하게 분류함 
    - unit step function을 조금 부드럽게 만들어보자 -> 이렇게 만든것이 sigmoid!
      - 전구간 미분 가능(gradient descent 가능)
      - 좀더 부드러운 분류가 가능
      - 확률로도 해석 가능
      - 가장 멈리 찢어 놓는 합리적인 분류 경계 선을 찾게 됨

검정색 : unit step function을
파란색 : sigmoid  
<img width="682" height="300" alt="Image" src="https://github.com/user-attachments/assets/be037f14-b1e9-4d6d-b9e7-7192e27ee601" />

<br/>

  - sigmoid를 이용한 이진 분류 -1
    -sigmoid를 사용하게 되면 어떤 큰 수라도 0~1사이값이 나오기때문에 확률 분류에 능하다
    - 입력을 3x100x100인 강아지 or 고양이 사진이라고 하고 곧바로 출력 층으로 연결한다고 하자
    - 이 신경망이 사진을 입력 받아 강아지일 확률을 출력하게끔 만들어 보자
      - 그냥 강아지 사진을 넣었을 때 0에 가까운 값이 나올수록 더 크게 혼내면 된다
      - 다시 말해, 강아지면 1, 고양이면 0이 나오도록 loss를 잘 정의하면 됨
        - 여기에선 신경망 출력을 q, 정답을 y라고 하자(강아지는 y = 1, 고양이는 y = 0)
        - q = 1나오게 하자 q를 키우자
        - q = 0나오게 하자 1-q를 키우자
        - 따라서, q^y(1-q)^(1-y)
  - sigmoid를 이용한 이진 분류 -2
    - 두개씩 뽑는다면?
    - mini-batch SGD 생각해보면 데이터를 뽑는 각각의 시행은 독립시행임
    - 곱한 확률을 키워야함
    - 0~1값인 q^y(1-q)^(1-y) 을 계속 곱한다면 점점소수점이 많아지기 때문에 컴퓨터가 그걸 정확히 잡을 수 없음 따라서 log를 취하자
      - 이걸 로지스틱 회귀(logistic regresstion) -> 데이터가 어떤 범주에 속할지 확률을 계산하여 0 또는 1로 분류(Classification)하는 알고리즘
    - 바이너리 크로스 엔트로피(BCE)라는 loss를 구하기 위해서는 0~1가는 확률을 구하는 수식으로 바꿔야 하는데 그때 쓰이는 것이 sigmoid <- 원래는 actvation이였지만 이제는 이것으로 간다

<br/>

  - sigmoid정리
    - 이진분류를 하기 위해서 로지스틱 회귀(logistic regresstion)라는 알고리즘을 사용하게 됨 -> 데이터가 어떤 범주에 속할지 확률을 계산하여 0 또는 1로 분류(Classification)하는 알고리즘, 단순한 선형 연산과 시그모이드 함수가 하나로 결합된 완전한 형태의 이진 분류 모델
      - 1.선형 변환 (Linear Transformation)
      - 2.확률 변환 (Sigmoid Activation) -> sigmoid함수 를 사용
      - 3.임계값에 따른 최종 분류
      - 정답 y가 1일 때와 0일 때의 조건문을 수학적으로 한 줄로 합친 것이 바이너리 크로스 엔트로피(BCE) 수식

<br/>

  - 이미 MSE가 있는데 BCE를 사용하는 이유?
    - MSE로 안되는 것이 아닌데, 조금 다르게 나오게 된다
    - 강아지 사진 하나 입력했을 때 loss비교 : (q_1-1)^2 vs -log q_1
      - -log q_1이 훨씬 더 오차에 민감하게 된다
      - output layer의 weight에 대해 loss function의 개형이 (q_1-1)^2라면 non-convex, -log q_1라면 convex이다
        - convex면 아래로 볼록이기 때문에 무조건 글로벌로 들어갈 수 있게 된다(봉우리가 1개인것)

<br/>

  - MLE(Maximum Likelihood Estimation)
    - MSE, BCE 사실은 둘다 MLE 로부터 나온것
    - MLE의 핵심 개념: "결과를 보고 원인을 역추적하자", 우리가 보통 확률을 계산할 때는 원인(예: 정상 동전이니까 앞면이 나올 확률은 50%)을 알고 결과(10번 던지면 5번쯤 나오겠지)를 예측하는데, MLE는 이 반대 방향이다. 이미 눈앞에 일어난 결과(데이터)를 보고, "도대체 원인(파라미터)이 뭐였길래 이런 결과가 나왔을까?"를 가장 합리적으로 때려 맞추는 통계적 기법
    - MLE와 인공지능의 만남 -> 이 아이디어를 이진 분류(예: 강아지/고양이) AI에 그대로 적용해 보면,
    - 데이터 (결과): 우리에겐 이미 정답이 달린 수만 장의 사진 데이터가 있음
    - 파라미터 (원인): AI 내부의 가중치(W)와 편향(b). 우리의 목표는 "현재 우리가 훈련 데이터로 가지고 있는 정답들이 나올 가능성(Likelihood)을 가장 높게(Maximum) 만들어주는 AI의 가중치(W)를 찾자!"가 되는 것

<가로로 빨간네모친것이 각각 MLE>
<img width="637" height="406" alt="Image" src="https://github.com/user-attachments/assets/b1ecdb86-c58c-471d-b181-8480fd02d5f8" />

  - 조건부 확률 값인건 맞는데 확률 분포는 아닌(합이 != 1)그런것
    - 앞의것을 보고 그 속에 숨겨져 있는 뒤의 것을 알아낸다
    - 이진분류에선 P(y_1) = q_1^y_1(1 - q_1)^(1-y_1) 이게 likelihood 이다
    - BCE vs MSE비교를 다시 생각해보면,
      - y_1 이 따르는 분포를 베르누이로 가정하고, 신경망이 'y_1=1 일 확률 q_1'을 잘 출력하게끔 NLL을 loss로 삼고 학습
      - y_1 이 따르는 분포를 가우시안로 가정하고, 신경망이 'y_1 의 평균 y_1햇'을 잘 출력하게끔 NLL을 logg로 삼고 학습
    - 알고봤더니 BCE, MSE 사실 둘 다 NLL 이지만 가정한 분포가 달라서 다르게 전개된 것 뿐
    - 즉, 이전 분류엔 베르누이로 가정하는게 적절한 가정이었기 때문에 BCE가 여러모로 좋았던 것일뿐 -> 이 다음에 나오는 모든 loss함수또한 데이터의 분포를 보고 MLE를 하고 있는것 뿐
  - 결국 학습이라 함은 w에 대한 MLE이다 라는것일뿐

<br/>

  - 다중분류
    - 입력을 3x100x100인 강아지 or 고양이 or 소 사진이라고 하고 곧바로 출력 층으로 연결한다고 하자
    - 강아지일 확률, 고양이일 확률, 소일 확률 이렇게 세 개가 필요
    - 출력 노드의 수를 늘려서 각 노드가 각 동물을 담당하게 하자
      - 강아지 : 1,0,0 / 고양이 : 0,1,0 / 소 : 0,0,1
      - 머신의 출력으로 확률 분포 값이 나오게 하자
    - 확률 분포가 출력될 수 있도록 마지막 activation은 softmax를 쓴다
      - 시그모이드(sigmoid)의 한계와 소프트맥스(softmax)의 등장 배경 : 만약 강아지, 고양이, 새 3가지를 분류하는 AI를 만든다고 가정해 보면, 출력층에 노드 3개를 만들고 각각 시그모이드를 씌우면, 시그모이드는 각 노드가 완전히 독립적으로 0~1 사이의 값을 뱉습니다. 그래서 강아지 0.8(80%), 고양이 0.7(70%), 새 0.1(10%) 같이 확률의 합이 1.0을 훌쩍 넘는 이상한 결과가 나올 수 있다, 이것을 세 녀석이 서로 파이를 나눠 먹듯 경쟁하여, 확률의 총합이 무조건 1.0이 되게 만드는 것 이것이 softmax이다.
      -  Y - (XW + b) 형태의 단순 뺄셈은 앞서 다뤘던 회귀(Regression)용 MSE Loss 방식. 다중 분류에서는 이 과정을 두 단계로 살짝 꼬아서 처리한다.
      -  첫째, XW+b로 나온 원시 점수 행렬을 그대로 빼는 게 아니라, 직전에 배운 소프트맥스(Softmax) 함수에 먼저 통과시킨다. 그러면 가로줄의 합이 무조건 1.0이 되는 예쁜 확률 행렬 \hat{Y} 로 변환된다
      -  다중 분류 전용 Loss 공식인 CCE를 쓴다
    - 그러나 sigmoid같은 경우는 사진 1장에 발견해낼 것이 2개 이상이면 사용해야하는 부분도 있다
    - 보통 다중분류는 loss정의를 Cross-Entropy를 사용한다(softmax를거친 후 loss함수로 정의)

<img width="670" height="237" alt="Image" src="https://github.com/user-attachments/assets/5d8b1095-583e-4950-ab21-a3847d1b3a70" />

<br/>

  - step1. 입,출력정의
    - 어떤 문제를 풀것인가? 회귀? 다중분류? multi-label분류?
  - step2. model만들기
    - 이런 문제를 풀기에 어떤 모델이 적합한가? MLP, CNN, RNN
  - step3. loss정의하기
    - 회귀면 MSE, 이진분류면 BCE, 다중분류면 Cross-Entropy
    - 사실은 다 NLL, label의 분포를 무엇으로 가정할 것인가?
  - step4. weight, 바이어스 최적화
    - SGD?, Adam?

<br/>

  - Universal Approximation Theorem
    - MLP는 행렬 곱하고 벡터 더하고 activation
      - 근데 궅이 이런 형태로 함수를 표현해야 하는 이유는 무엇인가?
      - 이런 형태면 히든 레이어 딱 한 층만 있어도 어떤 연속 함수든 나타낼 수 있기 때문
        - 단, 히든레이어는 non-linear activation, 출력 층은 linear activation, 느드 개수는 제한 X
      - 다시말해, 어떤 연속 함수든 f(xW_1+B_1)W_2 +B_2 <- 이 식으로 다 표현해버릴 수 있다
        - 즉, train loss를 딱 0으로 만들어 버릴 수 있다
    - 이론적으로는 층(Layer)이 하나만 있어도 노드 수만 무한히 늘리면 모든 함수를 표현할 수 있다. 하지만 복잡한 함수를 단일 은닉층으로만 표현하려고 하면 노드의 수 N이 기하급수적으로 커져서 메모리와 연산량이 폭발하게 됩니다.현대의 AI가 하나의 넓은 은닉층을 쓰는 대신 층을 깊게 쌓는 딥러닝(Deep Learning) 구조를 채택하는 이유가 바로 여기에 있다. 계층을 깊게 구성하면 훨씬 적은 수의 파라미터로도 복잡하고 추상적인 특징을 효율적으로 근사하고 학습할 수 있기 때문이다

<br/>

  - DNN, 무턱대고 깊게 만들면 안좋은점이 있음1
    - vanishing gradient
      - layer가 많으면 입력 층에 가까울수록 미분이 사라진다
        - 이것의 주범은 sigmoid함수가 된다. 시그모이드(sigmoid)를 미분한 값은 어떤 경우에도 0.25를 넘기지 못한다(정의는 나중에 필요할때 확인하는것으로..)
        - 이러한 시그모이드(sigmoid)함수의 태생적인 한계 때문에, 현대의 딥러닝 에서는 은닉층의 활성화 함수로 시그모이드 대신 ReLU를 주로 채택한다
          - 여기서 시그모이드(sigmoid)를 이진분류로 쓰기 위해 0~1값을 내려고 사용하는것과는 완전 별개의 문제라고 생각하면 될거 같다
        - ReLU의 등장!!!!
          - 현대 딥러닝에서 가장 기본적이고 널리 사용되는 활성화 함수
          - 시그모이드(Sigmoid) 함수의 치명적인 단점인 기울기 소실(Vanishing Gradient) 문제를 매우 단순하고 우아한 방법으로 해결함
          - 입력값이 0보다 작으면 0을 출력하고, 0보다 크면 입력값을 그대로 출력한다
          - 음수일 때 0으로 꺾어버리는 단 한 번의 조작으로 비선형성을 확보하고, 양수일 때는 최대한 개입하지 않음으로써 연산 속도와 기울기 보존이라는 두 마리 토끼를 다 잡은 것
      - Batch Normalization
        - Batch size = 5 라고 하고 특저어 노드에 들어간다면, 전부 양수면 어떤 상황에서 비선형성을 확보하지 못할것이고 전부 음수라면 어떤 경우에 기울이가 0이 되버릴 것이고, 따라서 적절하게 들어가는것이 좋다, 이것을 재배치 시켜보자는 것이 Batch Normalization 이다
        - 어디로 재배치 시킬지 학습시키자
        - 어디에, 얼만큼 세게 뿌릴지를 학습시키자
        - 해당 node에 대해
          - nonlinearity를 얼마나 살리면서, vanishing gradient를 얼마나 해결할지, AI가 알아내는 것
          - 이 행위를 할 layer에대 BN을 추가하는 식으로 적용
          - double[] z = { 10.0, 12.0, 14.0, 16.0, 18.0 }; 이런 데이터가 들어왔을때
          - 결과: {-1.4, -0.7, 0.0, 0.7, 1.4} 이렇게 정규화를 하고 아래와 같이 재배치를 하는것
          - 배치 사이즈에 따라서 결과값 다름

~~~c#
// 1. 평균 0으로 맞춘 배열 (정규화 완료 상태)
double[] normalizedZ = { -1.4, -0.7, 0.0, 0.7, 1.4 };

// 2. AI가 학습을 통해 알아낸 최적의 위치(Beta)와 퍼짐 정도(Gamma)
double gamma = 1.5; // 폭을 좀 더 넓게 퍼뜨리자
double beta = 0.5;  // 뭉치 전체를 오른쪽으로 0.5만큼 밀자

// 3. 재배치 실행!
double[] rearrangedZ = new double[5];
for(int i = 0; i < 5; i++) 
{
    rearrangedZ[i] = (normalizedZ[i] * gamma) + beta;
}
~~~
     
<br/>

  - DNN, 무턱대고 깊게 만들면 안좋은점이 있음2
    - vanishing gradient
      - layer Normalization
        - 노드에 들어가는 들 값 에 대해 평균 분산 구함
        - 뭘로 평균, 분산 구할 거냐만 다르도 BN과 마찬가지, 노드 당 두 개 파라미터 추가
        - LN은 Training 때와 Test때 똑같은 방식으로 계산함
        - 이미지 데이터에는 BN을, 자연어 처리 쪽에는 LN을 주로 사용
        - BN은 1개의 노드에 대해서 동시에 계산될 여러개의 입력 데이터가 들어와서 만들어낸 출력값에 대해서 보는것이라면, LN은 1개의 데이터에가 여러개의 은닉노드를 쫙 통과하면서 만들어낸 결과값들을 모아서 평균과 분산을 구하고 재배치를하는것
          - 배치 정규화는 배치가 1이거나 2처럼 너무 작으면, 고작 1~2개 값으로 평균과 분산을 구해야 하니 통계적으로 엉망진창이 됩니다. 하지만 레이어 정규화는 데이터 1개만 들어와도 그 안의 노드 개수(예: 4개, 실제로는 수백 개)를 가지고 평균을 구하니까 배치 사이즈가 1이어도 아무 문제 없이 완벽하게 동작
          - 문장 길이가 들쭉날쭉할 때 최고 "안녕" (길이 짧음) / "나는 오늘 밥을 먹었어" (길이 긺) 이런 자연어 데이터를 배치 정규화로 묶으려 하면, 빈칸을 채우는 의미 없는 데이터(패딩)가 너무 많아서 세로줄 평균을 낼 때 통계가 오염됩니다. 하지만 레이어 정규화는 가로줄, 즉 데이터 하나하나가 자기 자신만 보고 정규화를 하니까 다른 문장의 길이에 전혀 방해받지 않는다

<img width="873" height="542" alt="Image" src="https://github.com/user-attachments/assets/498bfb04-2ca8-46d9-afc0-46b93e485a88" />

<br/>

  - DNN, 무턱대고 깊게 만들면 안좋은점이 있음3
    - Loss landscape이 꼬물해지는 문제
      - BN, ReLU 콤비로 분명 vanishing gradient 해결 했는데 그래도 너무 깊으면 학습이 안되더라
      - 깊게 만들수록 loss모양이 이상해진다 -> 너무 꼬불꼬불해지면 로컬미니멈에 너무 많이 빠지면서 학습이 안됨
        - ResNet의 skip-connection이 대표적인 해결 방안 중 하나

<br/>

  - DNN, 무턱대고 깊게 만들면 안좋은점이 있음4
    - Overfitting
      - 학습데이터는 잘 맞추는데, 실제 data는 못맞춘다
        - 문제에 비해서 너무 복잡한 모델을 사용하면 발생
        - data가 적으면 발생
    - Overfitting 방지하는법
      - data augmentation으로 어느정도 방지 가능 -> 사진 1장이여도 컬러변경 및 짜르기 및 돌리기 등으로
      - Dropout
        - 랜덤하게 노드 가려보면서 학습시키는것
        - 서로 다른 network 여러개를 사용해서 학습하는 셈
        - 테스트 때는 애네들을 평균내서 사용하자
      - Regularization
        - loss에 weight의 크기를 더해서 같이 고려하려 함
        - Regularization은 모델의 Loss에 Weight의 크기를 추가하여 Weight가 너무 커지는 것을 방지하고 모델의 복잡도를 줄여 Overfitting을 막는 방법
        - L1 : 크기에 상관없이 동일한 힘으로 줄임
        - L2 : 작은 웨이트는 살살, 큰 웨이트는 강하게 줄임
        - MAP(Maximum A Posteriori) : MAP를 최대화하는 것은 Likelihood 와 Posteriori를 동시에 고려하는 것

###### [MLP](#mlp)
###### [Top](#top)

<br/>
<br/>

# torch

~~~py
A=torch.tensor([[1,2],[3,4]])
B=torch.tensor([[1,2],[3,4]])
print(A*B)
print(A@B) # 이게 진짜 행렬 곱하기

ㅡㅡㅡㅡㅡㅡㅡ
tensor([[ 1,  4],
        [ 9, 16]])
tensor([[ 7, 10],
        [15, 22]])
~~~

~~~py
# 행렬에 대한 인덱싱과 슬라이싱
A=torch.tensor([[1,2,3],[4,5,6],[7,8,9]])
print(A[0]) # 하나만 쓰면 행에 대한 인덱싱 (리스트 속 리스트 생각)
print(A[-1])
print(A[1:])
print(A[:])
print(A[0][2])
print(A[0,2]) # 2차원 행렬도 동일한데, 리스트와 달리 이런 것도 됨
B=[[1,2,3,4], [5,6,7,8]]
print(B)
print(B[0][2])
# print(B[0,2]) # error!
print(A[1,:]) # 1 행, 전부
print(A[1,0:3:2])
print(A[:,2]) # 전부, 2번째 열
print(A[:][2])

tensor([1, 2, 3])
tensor([7, 8, 9])
tensor([[4, 5, 6],
        [7, 8, 9]])
tensor([[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]])
tensor(3)
tensor(3)
[[1, 2, 3, 4], [5, 6, 7, 8]]
3
tensor([4, 5, 6])
tensor([4, 6])
tensor([3, 6, 9])
tensor([7, 8, 9])
~~~

<br/>

~~~py
# 3차원 행렬 인덱싱
A=torch.tensor([ [[0,1,2,3],[4,5,6,7],[8,9,10,11]] ,
                 [[12,13,14,15],[16,17,18,19],[20,21,22,23]] ])
print(A)
print(A.shape)
print(A[0,1,2])

a=torch.tensor([[[[[1,2,3,4]]]]]) # 대괄호가 하나 늘어나면 왼쪽에 shape 값이 추가 된다.
print(a.shape)

tensor([[[ 0,  1,  2,  3],
         [ 4,  5,  6,  7],
         [ 8,  9, 10, 11]],

        [[12, 13, 14, 15],
         [16, 17, 18, 19],
         [20, 21, 22, 23]]])
torch.Size([2, 3, 4])
tensor(6)
torch.Size([1, 1, 1, 1, 4])
~~~

<br/>

~~~py
A=torch.tensor([[1,2,3],[4,5,6],[7,8,9]])
A[[0,1,1,0],[0,1,2,1],[3,3,2,1]]

tensor([ 3, 19, 22,  5])
~~~

<br/>

~~~py
# tensor로 인덱싱
a=torch.tensor([1,2,3,4,5])
A=a[2]
print(A)
A=a[ torch.tensor(2) ] # torch.tensor를 안에다가?
print(A)
A=a[ torch.tensor([2,3,4]) ]
print(A)
A=a[ torch.tensor([[2,2,2],[3,3,3]]) ]
print(A) # 인덱싱된 애들로 2행 3열짜리 행렬을 만든다

a=torch.tensor([[1,2,3],[4,5,6]])
print(a[ torch.tensor(0) ])
A=a[ torch.tensor([[0,1],[1,1]]) ]
print(A.shape) # 예를 들어, a[0] = tensor([1,2,3])과 같이 1차원 텐서이므로 한 차원이 뒤에 늘어나서 2,2, "3" 이 된다!
print(A)

# segmentation 결과 그림 보여줄 때 사용!
b=torch.tensor([[225,255,0],[255,0,0],[0,0,255],[255,0,255],[70,80,75],[0,0,4],[60,100,255]])
import matplotlib.pyplot as plt
plt.imshow(b[ torch.tensor([[0,2],[1,2]]) ])

tensor(3)
tensor(3)
tensor([3, 4, 5])
tensor([[3, 3, 3],
        [4, 4, 4]])
tensor([1, 2, 3])
torch.Size([2, 2, 3])
tensor([[[1, 2, 3],
         [4, 5, 6]],

        [[4, 5, 6],
         [4, 5, 6]]])
~~~

<br/>

~~~py
A=torch.tensor([[1,2,6],[3,4,7],[5,6,2],[7,8,9]])
print(A)
print(A.shape)

# 1. A[몇 번째 행이냐, 몇 번째 열이냐]
print(A[0,1])
# 2-1. A[[몇 번째 행이냐,몇 번째 행이냐], [몇 번째 열이냐,몇 번째 열이냐]]
print(A[ [0,2,3,1,2], [1,1,0,0,0] ])
# 2-2. A[ [[몇 번째 행이냐], [몇 번째 행이냐]], [[몇 번째 열이냐], [몇 번째 열이냐]] ] => 결과가 행렬 형태가 되도록 인덱싱!
print(A[  [[0, 2], [3, 1]],
          [[0, 2], [1, 0]]  ])
# 3. A[ tensor(bool) ] => A와 같은 shape을 가지는 tensor형 bool이 어디에 True를 가지고 있냐
print(A[ torch.tensor([[False,True,True],[False,False,False],[False,False,True],[False,True,False]]) ])
print(A[A==2]) # 마스킹같은 걸 할 수 있음
# 4. A[몇 번째 값에 True가 있냐, 몇 번째 값에 True가 있냐]
print(A[[True,False,False,False],[False,True,True]])
# 5. A[ tensor ] => 몇 번째 것을 어떻게 쌓을거냐
print(A[ torch.tensor([1,1,2,2,2]) ])

tensor([[1, 2, 6],
        [3, 4, 7],
        [5, 6, 2],
        [7, 8, 9]])
torch.Size([4, 3])
tensor(2)
tensor([2, 6, 7, 3, 5])
tensor([[1, 2],
        [8, 3]])
tensor([2, 6, 2, 8])
tensor([2, 2])
tensor([2, 6])
tensor([[3, 4, 7],
        [3, 4, 7],
        [5, 6, 2],
        [5, 6, 2],
        [5, 6, 2]])
~~~

<br/>

~~~py
x=torch.tensor([1.])
print(x)
print(x.requires_grad)

x.requires_grad=True
print(x)
print(x.requires_grad)

tensor([1.])
False
tensor([1.], requires_grad=True)
True
~~~

<br/>

~~~py
x=torch.tensor([1.], requires_grad=True)
y=x**2
print(y)
# y.retain_grad() # 이걸 하면 y.grad도 볼 수 있다

z=3*y
print(z) # MulBackward0 가 붙어있다!

z.backward()
print(x.grad) # chain rule로 알아냄
# print(y.grad) # warning! 중간건 안된다

tensor([1.], grad_fn=<PowBackward0>)
tensor([3.], grad_fn=<MulBackward0>)
tensor([6.])
~~~

<br/>

~~~py
x=torch.tensor([1.],requires_grad=True)
y=torch.tensor([1.],requires_grad=True)
z= 2*x**2 + y**2
print(z)
z.backward()
print(x.grad)
print(y.grad)

tensor([3.], grad_fn=<AddBackward0>)
tensor([4.])
tensor([2.])
~~~

###### [MLP](#mlp)
###### [Top](#top)

<br/>
<br/>

# 간단한 인공신경망 만들기

~~~py
from torch import nn

x=torch.tensor([1.])
model=nn.Linear(1,1) # 입력 node 한 개, 출력 node 한 개인 layer 만듦
print(model)

print(model.weight) # 만들면서 initialize 함
print(model.bias)

y=model(x)
print(y)

y2 = x @ model.weight + model.bias # 식으로 나타내 본다면..
print(y2)

make_dot(y)

Linear(in_features=1, out_features=1, bias=True)
Parameter containing:
tensor([[-0.4695]], requires_grad=True)
Parameter containing:
tensor([-0.6344], requires_grad=True)
tensor([-1.1038], grad_fn=<ViewBackward0>)
tensor([-1.1038], grad_fn=<AddBackward0>)
~~~

<br/>

~~~py
model = nn.Linear(2,3)
# nn.Linear는 데이터의 shape의 마지막 차원이 '채'로(1D data) 들어오길 기대하는 녀석이다
# 따라서, 데이터 여러 개를 통과시키고 싶다면 개x채 의 형태로 줘야 함 ('채x개'나 '개*채' 이런 식으로 말고!)
x=torch.randn(5,2) # 개x채 => 두 개의 채널 값(키, 몸무게)을 가지는 데이터(사람) 5개

print(x)
print(model(x))

x=torch.randn(4,5,2) # nn.Linear는 이거를 개x개x채로 들어왔다고 생각함
print(model(x).shape)

x=torch.randn(2,3,6,4,5,2)
print(model(x).shape)

make_dot(model(x))

# 그렇다면 왜 웨이트 행렬에 T? weight 도 데이터와 마찬가지로 개x채 형태로 만들기 위함!
# 예를 들어, nn.Linear(2,3) 이면 두 채널 값을 사용하는 세 '개'의 필터를 통과하는 것이라 3x2 가 된다!
# 데이터의 개채는 두 채널 값을 가지는 다섯 개의 데이터 (5x2)
# 웨이트의 개채는 두 채널 값을 이용하는 세 개의 필터 (3x2)

tensor([[ 0.2603,  1.2173],
        [-1.5334, -2.0263],
        [ 1.0346,  0.8696],
        [-2.0687, -1.8992],
        [ 0.2093, -0.4394]])
tensor([[-0.2741, -0.9419,  0.2326],
        [-1.1221,  1.1860, -0.1862],
        [-0.4308, -1.1708,  0.5043],
        [-1.0476,  1.3889, -0.3682],
        [-0.7661, -0.2641,  0.3021]], grad_fn=<AddmmBackward0>)
torch.Size([4, 5, 3])
torch.Size([2, 3, 6, 4, 5, 3])
~~~

<br/>

~~~py
fc1=nn.Linear(1,3)
fc2=nn.Linear(3,1)

x=torch.tensor([1.])
x=fc1(x)
print(x)
x=fc2(x)
print(x)

model = nn.Sequential(fc1,fc2) # layer 풀칠
x=torch.tensor([1.])
print(model(x))

make_dot(model(x)) # Sequential은 딱히 표시는 안 함

tensor([ 1.0488, -0.1195,  0.3970], grad_fn=<ViewBackward0>)
tensor([-0.7355], grad_fn=<ViewBackward0>)
tensor([-0.7355], grad_fn=<ViewBackward0>)
~~~

<br/>

  - 가장 기본적인 함수 형태! 꼭 기억해두기

~~~py
class MyModel(nn.Module):
    def __init__(self):
        super().__init__()

        self.fc1 = nn.Linear(2,5)
        self.fc2 = nn.Linear(5,10)
        self.fc3 = nn.Linear(10,3)
        self.act = nn.Sigmoid()

    def forward(self, x):
        x = self.fc1(x)
        x = self.act(x)
        x = self.fc2(x)
        x = self.act(x)
        x = self.fc3(x)
        x = self.act(x)
        return x

model = MyModel()
x = torch.randn(5,2)
y = model(x) # model.forward(x) (nn.Module의 __call__에서 forward를 통과시킴) (__call__은 인스턴스()로 호출하는 메서드)
print(y)

make_dot(y)

tensor([[0.4669, 0.3573, 0.6333],
        [0.4682, 0.3555, 0.6330],
        [0.4675, 0.3665, 0.6269],
        [0.4678, 0.3555, 0.6334],
        [0.4691, 0.3597, 0.6294]], grad_fn=<SigmoidBackward0>)
~~~

###### [MLP](#mlp)
###### [Top](#top)

<br/>
<br/>

# 선형회기방법
  - 각각 100개씩의 a,b를 하나하나 대입하여 돌려봄
  - 그 후 각각 5사람의 오차제곱을 다 합하고 평균을 구함 그 평균이 가장 작은 데이터를 찾음(즉, 모든 사람의 오차를 더했을때 a,b가 가장 작은 지점)

~~~py
import torch
import matplotlib.pyplot as plt

x = torch.tensor([150, 160, 170, 175, 185.]) # 키
y = torch.tensor([55, 70, 64, 80, 75.]) # 몸무게
N = len(x)

# a,b 를 바꿔가면서 Loss 값을 일일히 구해서 가장 작아지게 하는 a,b를 선정

a = 0.5 + torch.linspace(-0.2,0.2,100)
b = -30 + torch.linspace(-20,20,100)

L=torch.zeros(len(a),len(b))
for i in range(len(a)):
    for j in range(len(b)):
        for n in range(N):
            L[i,j] = L[i,j] + (y[n] - (a[i]*x[n]+b[j]))**2
L = L/N # MSE

plt.figure(figsize=[10, 9])
ax = plt.axes(projection="3d")
A, B = torch.meshgrid(a,b)
ax.plot_surface(A,B,L);
ax.set_xlabel('a'); ax.set_ylabel('b')
ax.set_zlim([0, 1000])

plt.figure()
plt.contour(b,a,L,30) # 첫 번째 인자가 가로 축, 두 번째 인자가 세로 축이라서
plt.xlabel('b'); plt.ylabel('a'); plt.grid()
~~~

###### [MLP](#mlp)
###### [Top](#top)

<br/>
<br/>

# Gradient descent(경사하강법)
  -  a.grad = torch.tensor([0.]) # gradient , b.grad = torch.tensor([0.]) # gradient 를해주는 이유는 PyTorch의 특징 중 하나는 loss.backward()를 호출할 때마다 계산된 기울기(Gradient) 값을 기존의 a.grad와 b.grad에 더해버리는(Accumulate) 성질이 있기 때문에

~~~py
import torch
import matplotlib.pyplot as plt

x = torch.tensor([150, 160, 170, 175, 185.]) # 키
y = torch.tensor([55, 70, 64, 80, 75.]) # 몸무게
N = len(x)

# 모델 파라미터 초기화
a = torch.tensor([0.45], requires_grad=True)
b = torch.tensor([-35.], requires_grad=True)

# 하이퍼파라미터 설정
LR = 3e-6
EPOCH = 20

loss_history = []

for ep in range(EPOCH):
    # inference
    y_hat = a * x + b
    # loss
    loss = 0
    for n in range(N):
        loss += (y[n] - y_hat[n])**2
    loss = loss/N # MSE
    # update
    loss.backward() # backpropagation
    with torch.no_grad():
        a -= LR * a.grad # weight update
        b -= LR * b.grad # weight update
    a.grad = torch.tensor([0.]) # gradient 초기화
    b.grad = torch.tensor([0.]) # gradient 초기화


    
    # print loss
    loss_history += [loss.item()]
    print(f"Epoch: {ep+1}, train loss: {loss.item():.4f}")
    # print weight and bias
    print(f"Weight: {a.item():.4f}, Bias: {b.item():.4f}")


    # plot graph
    x_plot = torch.linspace(145, 190, 100)
    y_plot = a.detach() * x_plot + b.detach()
    plt.figure()
    plt.plot(x, y, 'o')
    plt.plot(x_plot, y_plot, 'r')
    plt.title(f"Epoch {ep+1}")
    plt.show()

    print("-"*20)
~~~

<br/>

~~~py
from torch import nn, optim

x=x.reshape(-1,1) # 개채 형태로 바꿔줌
y=y.reshape(-1,1) # x와 같은 형태로 바꿔줌 (MSELoss, BCELoss 는 y의 shape이 x의 shape과 같아야)

model=nn.Linear(1,1)
model.weight.data = torch.tensor([[0.45]])
model.bias.data = torch.tensor([-35.])

LR = 3e-6
EPOCH = 20
optimizer = optim.SGD(model.parameters(), lr=LR)
criterion = nn.MSELoss()

loss_history=[]

for ep in range(EPOCH):
    # inference
    y_hat = model(x)
    # loss
    loss = criterion(y_hat,y)
    # update
    optimizer.zero_grad() # gradient 누적을 막기 위한 초기화
    loss.backward() # backpropagation
    optimizer.step() # weight update
~~~

###### [MLP](#mlp)
###### [Top](#top)

<br/>
<br/>

# Binary Classification(이진분류)

~~~py
N=20
random0=torch.randn(int(N/2),1)
random5=torch.randn(int(N/2),1)+5
class1_data=torch.hstack([random0,random5])
class2_data=torch.hstack([random5,random0])
class1_label=torch.ones(int(N/2),1)
class2_label=torch.zeros(int(N/2),1)
X=torch.vstack([class1_data,class2_data])
y=torch.vstack([class1_label,class2_label])

from torch import nn

class MLP(nn.Module):
    def __init__(self):
        super().__init__()

        # case 1, plain
        self.linear = nn.Sequential(nn.Linear(2, 100), # 10,100,1000,10000 으로 바꿔보면서서 확인
                                    nn.Sigmoid(),
                                    nn.Linear(100, 1), # node가 많을수록 좋게 나옴
                                    nn.Sigmoid())

    def forward(self, x):
        x = self.linear(x)
        return x

model = MLP()
print(model)

model.eval()
with torch.no_grad():
    print(model(torch.randn(5,2)).shape) # 2개 값으로 이루어진 좌표값 (x1,x2) 데이터 5개를 입력함

from torch import optim
# !pip install torchviz # 내 필기용
# from torchviz import make_dot # 내 필기용

LR = 1e-1 # case 1
# LR = 1e-2 # case 2, plain 에서 노드 천 개, deep
# LR = 1e-4 # case 2, very deep relu
EPOCH = 100 # case 1
# EPOCH = 500 # case 2, plain 에서 노드 천 개, deep, very deep relu

optimizer = optim.SGD(model.parameters(), lr=LR)
# optimizer = optim.Adam(model.parameters(), lr=LR) # case 1, deep
# optimizer = optim.Adam(model.parameters(), lr=LR, eps=0, betas=(0.9, 0.99)) # 내 필기용
# optimizer = optim.Adam(model.parameters(), lr=LR, eps=1e-12, betas=(0.1, 0.1)) # 내 필기용
criterion = nn.BCELoss()

loss_history=[]
grad_history=[] # 내 필기용
update_size_history=[] # 내 필기용

model.train() # train mode로 전환
for ep in range(EPOCH):
    # inference
    y_hat = model(X)
    # loss
    loss = criterion(y_hat, y)
    # prev weights # 내 필기용
    # prev=model.linear[0].weight.detach().clone() # 내 필기용
    # update
    optimizer.zero_grad() # gradient 누적을 막기 위한 초기화
    loss.backward() # backpropagation
    optimizer.step() # weight update
    # update amount # 내 필기용
    # grad_history += [ torch.sum(torch.abs( model.linear[0].weight.grad )).item() ] # 내 필기용
    # update_size_history += [ torch.sum(torch.abs( model.linear[0].weight.detach() - prev)).item() ] # 내 필기용
    # print loss
    loss_history += [loss.item()]
    print(f"Epoch: {ep+1}, train loss: {loss.item():.4f}")
    print("-"*20)
~~~

<br/>

  - 모델 테스트 하기
~~~py
# from matplotlib.colors import LightSource # 내 필기용

x1_test=torch.linspace(-10,10,30) # case 1
x2_test=torch.linspace(-10,10,30) # case 1
# x1_test=torch.linspace(-2,2,30) # case 2
# x2_test=torch.linspace(-2,2,30) # case 2
X1_test, X2_test=torch.meshgrid(x1_test,x2_test)
X_test=torch.cat([X1_test.unsqueeze(dim=2), X2_test.unsqueeze(dim=2)], dim=2)

model.eval() # test mode로 # 1. 해결
with torch.no_grad(): # 2. 해결
    y_hat=model(X_test)
# 1. dropout 혹은 BN 같은거 사용했다면 train mode와 test mode 동작이 다르므로 eval()로 mode를 바꿔줘야
# 2. grad_fn 계산 <- 메모리가 불필요하게 쓰인다
Y_hat = y_hat.squeeze()

# print(model.training)
# model.train()
# print(model.training)

plt.figure(figsize=[10, 9]) # figsize=[가로, 세로]
ax = plt.axes(projection="3d")
ax.view_init(elev=25,azim=-140)
# ls = LightSource(azdeg=45, altdeg=30) # 내 필기용
# rgb = ls.shade(Y_hat.numpy(), plt.cm.RdYlBu) # 내 필기용
# ax.plot_surface(X1_test,X2_test,Y_hat.numpy(), facecolors=rgb, alpha=0.2) # 내 필기용
ax.plot_surface(X1_test,X2_test,Y_hat.numpy(), cmap="viridis", alpha=0.2)
plt.plot(class1_data[:,0], class1_data[:,1], class1_label,'bo')
plt.plot(class2_data[:,0], class2_data[:,1], class2_label,'ro')
plt.xlabel("x1")
plt.ylabel("x2")
~~~

###### [MLP](#mlp)
###### [Top](#top)

<br/>
<br/>

# multiclass classification(다중분류)
  - Dataset은 전체 데이터를 보관하는 창고라면, DataLoader는 그 창고에서 데이터를 일정량씩 꺼내주는 컨베이어 벨트

~~~py
transform = transforms.ToTensor()

# root를 './data'로 변경하여 현재 작업 폴더 하위에 저장
train_DS = datasets.MNIST(root='./data', train=True, download=True, transform=transform)
test_DS = datasets.MNIST(root='./data', train=False, download=True, transform=transform)

BATCH_SIZE = 32
train_DL = torch.utils.data.DataLoader(train_DS, batch_size=BATCH_SIZE, shuffle=True)
test_DL = torch.utils.data.DataLoader(test_DS, batch_size=BATCH_SIZE, shuffle=True)


# 모델만들기
from torch import nn

class MLP(nn.Module):
    def __init__(self):
        super().__init__()
        self.fcs = nn.Sequential(nn.Linear(28*28, 100),
                                 nn.ReLU(),
                                 nn.Linear(100, 10))
    def forward(self, x):
        x = torch.flatten(x, start_dim=1)
        x = self.fcs(x)
        return x

# flatten 확인
x_batch, _ = next(iter(train_DL))
print(x_batch.shape)
flat_images = torch.flatten(x_batch)
print(flat_images.shape)
flat_images2 = torch.flatten(x_batch, start_dim=1)
print(flat_images2.shape)


ㅡㅡㅡㅡ
torch.Size([32, 1, 28, 28])
torch.Size([25088])
torch.Size([32, 784])
~~~

<br/>

  - 모델 훈련시키기
    - 확률로 바꿔주는 Softmax(소프트맥스) 함수는 criterion = nn.CrossEntropyLoss() 안에 포함이 되어 있음, 따라서 따로 적용해 줄 필요가 없음

~~~py
from torch import optim

LR = 1e-3
EPOCH = 5
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=LR)

def Train(model, train_DL, criterion, optimizer, EPOCH):

    loss_history=[]
    NoT=len(train_DL.dataset) # The number of training data

    model.train() # train mode로 전환
    for ep in range(EPOCH):
        rloss = 0 # running loss
        for x_batch, y_batch in train_DL:
            x_batch = x_batch.to(DEVICE)
            y_batch = y_batch.to(DEVICE)
            # inference
            y_hat = model(x_batch)
            # loss
            loss = criterion(y_hat, y_batch)
            # update
            optimizer.zero_grad() # gradient 누적을 막기 위한 초기화
            loss.backward() # backpropagation
            optimizer.step() # weight update


            # loss accumulation
            loss_b = loss.item() * x_batch.shape[0] # batch loss # BATCH_SIZE를 곱하면 마지막 18개도 32개를 곱하니까..
            rloss += loss_b # running loss
        # print loss
        loss_e = rloss/NoT # epoch loss
        loss_history += [loss_e]
        print(f"Epoch: {ep+1}, train loss: {loss_e:.3f}")
        print("-"*20)

    return loss_history

loss_history = Train(model, train_DL, criterion, optimizer, EPOCH)

plt.plot(range(1,EPOCH+1),loss_history)
plt.xlabel("Epoch")
plt.ylabel("loss")
plt.title("Train Loss")
plt.grid()
~~~

<br/>

  - cross entropy 구하는 여러가지 방법

~~~py
# cross entropy 구하는 여러가지 방법
import torch.nn.functional as F

y_hat = torch.randn(3, 5) # data는 세 개, 5 종류로 분류하는 문제 가정
print(y_hat) # 가로 축으로 합이 1이 아님, 즉, softmax 통과 전
y_batch = torch.randint(5, (3,))
print(y_batch)

# 방법 1
loss = F.cross_entropy(y_hat, y_batch) # softmax가 내장
print(loss)

# 방법 2
criterion = nn.CrossEntropyLoss() # softmax가 내장
print(criterion(y_hat,y_batch))

# 방법 3
soft = nn.Softmax(dim=1)
y_hat_soft = soft(y_hat)
print(y_hat_soft)
loss = 0
for i, val in enumerate(y_hat_soft):
    print(i,val)
    loss += -torch.log(val[y_batch[i]])
print(loss/3) # 평균이 내장되어있음을 알 수 있다
~~~

<br/>

  - 모델 테스트하기

~~~py
def Test(model, test_DL):
    model.eval() # test mode로 전환
    with torch.no_grad():
        rcorrect = 0
        for x_batch, y_batch in test_DL:
            x_batch = x_batch.to(DEVICE)
            y_batch = y_batch.to(DEVICE)
            # inference
            y_hat = model(x_batch)
            # corrects accumulation
            pred = y_hat.argmax(dim=1)
            corrects_b = torch.sum(pred == y_batch).item() # torch.eq(pred, y_batch).sum().item()
            rcorrect += corrects_b
        accuracy_e = rcorrect/len(test_DL.dataset)*100
    print(f"Test accuracy: {rcorrect}/{len(test_DL.dataset)} ({accuracy_e:.1f} %)")
    return round(accuracy_e,1)

ㅡㅡㅡㅡㅡㅡㅡ

def Test_plot(model, test_DL):
    model.eval()
    with torch.no_grad():
        x_batch, y_batch = next(iter(test_DL))
        x_batch = x_batch.to(DEVICE)
        y_hat = model(x_batch)
        pred = y_hat.argmax(dim=1)

    x_batch = x_batch.to("cpu")
    # print(x_batch.shape)

    plt.figure(figsize=(8,4))
    for idx in range(6):
        plt.subplot(2,3, idx+1, xticks=[], yticks=[])
        plt.imshow(x_batch[idx].permute(1,2,0), cmap="gray")
        pred_class = test_DL.dataset.classes[pred[idx]]
        true_class = test_DL.dataset.classes[y_batch[idx]]
        plt.title(f"{pred_class} ({true_class})", color = "g" if pred_class==true_class else "r")

~~~


###### [MLP](#mlp)
###### [Top](#top)

<br/>
<br/>

# transforms.ToTensor()
  - Numpy의 방식: 개·행·열·채 (NHWC)
    - 코드 출력: (50000, 32, 32, 3)
  - PyTorch의 방식: 개·채·행·열 (NCHW)
    - 코드 출력: (50000, 3, 32, 32)
  - 인공지능의 합성곱(Convolution) 연산은 빨간색 필터는 빨간색 채널끼리, 파란색은 파란색끼리 따로따로 곱셈을 엄청나게 수행합니다. GPU(NVIDIA cuDNN) 입장에서는 같은 채널의 데이터가 메모리상에 연속으로 모여 있어야(Memory Contiguous) 캐시(Cache) 효율이 극대화되어 연산 속도가 미친 듯이 빨라진다

###### [MLP](#mlp)
###### [Top](#top)

<br/>
<br/>

***

# CNN
  - [CNN기초이론](#cnn기초이론)
  - [VGGNet](#vggnet)_(2014.09)
  - [Inception Net V1](#inception-net-v1)_(2014.09)
  - [Inception Net V2,V3](#inception-net-v2v3)_(2015.12)
  - [Loss Landscape](#loss-landscape)
  - [ResNet](#resnet)_(2015.12)
  - [Inception Net V4,Inception-ResNet](#inception-net-v4inceptionresnet)_(2016.02)
  - [WideResNet](#wideresnet)_(2016.05)_(2016.02)
  - [ResNeXt](#eesnext)_(2016.11)
  - [DenseNet](#densenet)_(2016.08)
  - [SE Net](#se-net)_(2017.09)
  - [MobileNet V1](#mobilenet-v1)_(2017.04)
  - [MobileNet V2](#mobilenet-v2)_(2018.01)
  - [MobileNet V3](#mobilenet-v3)_(2019.05)

###### [CNN](#CNN)
###### [Top](#top)

<br/>
<br/>

# CNN기초이론
  - MLP에서 CNN이 나온 배경
    - MLP는 입력 데이터를 무조건 1차원 배열(한 줄로 늘어선 형태)로만 받을 수 있음. 따라서 공간 정보가 완전히 박살난다. 그러한 공간 구조를 전혀 이해하지 못한다는 단점
    - MLP는 데이터를 1차원 배열로 넣어야 하기 때문에, 예를 들어 1920 x 1080해상도를 1차원으로 펴면 약200만개의 입력 노드가 생김. 따라서 은닉층을 조금이라도 만들면 가중치(W), 바이어스(B)가 엄청 많아짐.
      - 연산량이 엄청 많아짐
      - 가중치가 너무 많아서 쓸데없는 노이즈까지 다 외워버림, 즉 과적합(Overfitting) 해버림
  - CNN?
    - 신경 다발이 전체가 다 연결되는 FC layer가 아닌, 신경 다발이 끊어져 있는것
    - 위치별 특징을 추출함
      - 눈, 코, 입 같은게 어디 달려있고 보통 어디 쯤 달려 있는지, 각각의 위치관계를 확인
      - 즉, 위치별 패턴을 찾는 연산
    - conv layer가 FC layer와 다른 점 정리
      - 주변(일부영역)만 연결한다(신경망을 잘 끊어서 연결함, 선택과 집중)
      - 필터가 가진 패턴을 찾아 다닌다
      - 여러 종류의 필터로 여러 종류의 특징을 추출
      - 어떤 특징을 추출해야 분류를 잘할 수 있을지를 AI가 알아낸다!! <- 1줄로 설명하면 딱 이거!
      - 곱하고 더하고 activation, 그리고 밀기 <- 1개 추가된것
      - OPENCV같은곳에서 사용되는 함수는 사람이 직접 세팅을 하지만, CNN에서는 어떤 필터를 쓰면 될지까지 학습을 해서 가장 최적의 필터를 적용한다 -> LOSS를 줄이기 위함
        - 여기서 필터는 W인 가중치가 되고, w인 가중치를 곱해서 나온 값을 정답 값이랑 비교해서 loss가 가장작게 나오는 방향으로 단지 가중치를 조절하는 것일뿐
    - Feature Map
      - 컨볼루션(Convolution) 연산의 결과로 튀어나온 새로운 2차원(또는 3차원) 실수 배열
    - 개체행열
      - 개행열은 정해줘야 함
      - 체는 알아서 정해짐 -> 깊이의 사이즈가 맞아야함
    - 완전정리
      - MLP는 행열이 있을때 X와 W의 행렬의 크기가 똑같아서 완전 행열곱셈을 하는것이고, CNN은 X의 행열보다 W의 행열이 작아서, 한칸씩 왼쪽, 한칸씩 오른쪽으로 가서 곱하고 더한것을 한셀로 표현하여 그것을 모은것이 해당 부분이 된다.
      - w웨이트 = kernel size = Filter Size 다 같은말
    - 왜 convolution을 하는가?
      - 아주 적은 수의 weight 로 위치별 특징 추출, 사진 입력에는 반드시 특정 패턴(or 특징)이 있고, convolution은 위치별 패턴(or 특징)을 찾는 연산, CNN 통과하면서 그 패턴들이 곱하고(뭐가 더 중요한 특징?) 합해진다(조합된다)
    - 여러 번 conv layer를 통과하는 이유
      - 3x3은 너무 좁은 영역만 본다, 여러 번 통과하면 receptive field가 넓어진다
      - 3x3 두 번 vs 5x5 한 번 을 비교해보면
        - 3x3 두 번 이 더 파라미터가 작음 18개, 5x5는 25개
        - 두번통과하는 3x3이 좀더 비선형적인 함수
        - 필터는 해당 부분을 집중해서 본다는 것임으로, 3x3처럼 두번하게 되면 두번하는 그 부분을 좀더 집중해서 본다는 의미

<img width="940" height="386" alt="image" src="https://github.com/user-attachments/assets/180d567a-713f-47bb-b0dd-97d6699e446d" />

<br/>

<img width="584" height="361" alt="image" src="https://github.com/user-attachments/assets/9a72caa0-ab32-43a8-a6da-0b37141a2c41" />

<br/>

  - Padding
    - 주변에 행열을 추가하는것
      - 필터를 해도 사이즈를 유지한다
      - 가생이 정보를 잘 살린다
        - 가생이는 필터인 W와 곱해질때 하나만 매칭될수밖에 없기 때문에, 주변을 늘리면 그것을 더 많이 겹치지게 할 수 있다

<img width="1358" height="872" alt="image" src="https://github.com/user-attachments/assets/5001483b-0c2e-49a5-8e06-60a42a4830d1" />

<br/>

  - Stride
    - 위에 까지는 필터(w)가 한칸씩 이동했는데, 여러칸씩이동하는것
  - Pooling layer
    - 결과 픽셀값이 주변을 대표할 수 있게 하는 layer(파라미터가 필요 없음)
    - 각 채널 마다 작용시키기 때문에 채널의 수는 유지됨
    - Max pooling
      - 필터 크기많큼 지나가면서 가장 큰 값을 추출
      - X의 크기와 필터(W)의 크기가 같으면 Global max pooling
    - Average pooling
      - 필터 크기많큼 지나가면서 다 더해서 평균값을 추출
      - X의 크기와 필터(W)의 크기가 같으면 Global average pooling(GAP)

<img width="1629" height="400" alt="image" src="https://github.com/user-attachments/assets/444ec20c-db87-4510-b717-efc6ba3ddf0a" />

<br/>

  - Feature Map
    - Feature Map은 결국 x와 w를 합성곱을 하고 나온 행열 결과값, 그것을 싹다 더해보면 그림짜잔!

<img width="1572" height="780" alt="image" src="https://github.com/user-attachments/assets/cfdae254-fa86-49d3-b1f4-107e50e3b454" />

<br/>

  - 중요한 포인트
    - CNN이 MLP보다 파라미터 수, 즉 W,B의 수가 작지만, 연산 수로 생각하면 CNN이 훨씬 많음
    - 대신 MLP가 파라미터가 작기 때문에 파라미터(W, b)가 차지하는 메모리 용량은 CNN이 훨씬 작음. 하지만 CNN은 가중치 하나에 여러번 셈을 하기때문에 셈의 수는 훨씬더 많음, 단순 무식한 사칙연산을 수천 개의 코어로 동시에 때려 박을 수 있는 그래픽 카드(GPU)가 CNN 시대에 와서 절대적으로 필요한 필수품이됨

<br/>

  - conv, pooling 쭉 통과한 다음 마지막엔 MLP를 통과하는 이유
    - 처음엔 먼 것과의 연결을 끊었지만 나중엔 각 영역별 특징을 싹 다 보고 결정
  - max-pooling 을 너무 많이 하면, 공간적인 정보를 너무 잃는다
    - 하지만 월등히 성능 좋은 Inception Net, ResNet 등은 오히려 (1, 1) 되도록 GAP한다.
      - 픽셀 하나가 거의 이미지 전체 정보를 담게 된다
      - 모델 자체가 훨씬 깊어서, 더 고수준의 의미 있는 특징들을 추출할 수 있다
      - 즉, 이미지 전체를 포괄하는 매우 고수준의 유의미한 특징들을 추출했으므로 GAP 해도 되는 경우가 있음
      - 정보 손실이 있는데도 GAP를 쓰는 이유는? -> 오버피팅을 막기 위해

<br/>


###### [CNN](#CNN)
###### [Top](#top)

<br/>
<br/>

# VGGNet
  - VGG16 -> 가중치가 있는 층(Conv, FC)이 총 16개
  - Conv 층 (conv3-xxx): 무조건 필터 크기 3x3, 패딩 1, 보폭(Stride) 1을 사용. 즉, 행과 열의 크기(해상도)는 절대 건드리지 않고, 오직 채널(두께)만 표에 적힌 숫자(xxx)로 늘려주는 역할만 한다
  - Max Pooling 층: 무조건 2x2 크기에 보폭 2를 사용. 즉, 채널(두께)은 그대로 두고, 가로세로 해상도를 정확히 반토막 내는 역할만 함
  - VGGNet의 치명적인 한계점
    - 정답 중 하나를 고르기 위해 1차원으로 쫙 펼치는 FC 층(Fully Connected)이 3개 있는데, 여기서 가중치 파라미터가 1억 개 넘게 폭발해 버린다. 그래서 모델 용량만 수백 메가바이트가 넘어가고 학습 시간도 엄청나게 오래 걸림
  - 핵심 개념
    - 3x3 크기의 작은 합성곱(Convolution) 필터만을 사용하여 신경망을 16층에서 19층까지 아주 깊게 쌓은 모델
    

<br/>

  - 모델 코드 확인하기
~~~py
import torch
from torch import nn

# 각 모델들을 정의하기
cfgs = { "A": [64, "M", 128, "M", 256, 256, "M", 512, 512, "M", 512, 512, "M"],
         "B": [64, 64, "M", 128, 128, "M", 256, 256, "M", 512, 512, "M", 512, 512, "M"],
         "D": [64, 64, "M", 128, 128, "M", 256, 256, 256, "M", 512, 512, 512, "M", 512, 512, 512, "M"],
         "E": [64, 64, "M", 128, 128, "M", 256, 256, 256, 256, "M", 512, 512, 512, 512, "M", 512, 512, 512, 512, "M"] }

class VGG(nn.Module):
    def __init__(self, cfg, batch_norm = False, num_classes = 1000, init_weights = True, drop_p = 0.5):
        super().__init__()

        self.features = self.make_layers(cfg, batch_norm)
        self.avgpool = nn.AdaptiveAvgPool2d((7, 7)) # 7x7 이 되도록 avg pooling 해주는데 이게 있는 이유는 어떤 레이어의 크기든 넣을 수 있도록 하기 위해서, 작든 크든 무조건 7x7로 맞춰줌
        self.classifier = nn.Sequential(nn.Linear(512 * 7 * 7, 4096),
                                        nn.ReLU(),
                                        nn.Dropout(p=drop_p),
                                        nn.Linear(4096, 4096),
                                        nn.ReLU(),
                                        nn.Dropout(p=drop_p),
                                        nn.Linear(4096, num_classes))

        if init_weights:
            for m in self.modules():
                if isinstance(m, nn.Conv2d):
                    nn.init.kaiming_normal_(m.weight, mode="fan_out", nonlinearity="relu")
                    # mode="fan_out" → backward gradient 분산 유지를 위해 fan_out 기준으로 std 계산
                    # nonlinearity="relu" → ReLU가 반 깎으니까 분산도 반으로 줄어서 gain=√2로 분산을 보정
                    # 즉, 사용한 분산 값은 2/fan_out
                    if m.bias is not None:
                        nn.init.constant_(m.bias, 0)
                elif isinstance(m, nn.Linear):
                    nn.init.normal_(m.weight, mean=0, std=0.01)
                    nn.init.constant_(m.bias, 0)

    def forward(self, x):
        x = self.features(x)
        x = self.avgpool(x)
        x = torch.flatten(x, 1)
        x = self.classifier(x)
        return x

    def make_layers(self, cfg, batch_norm = False):
        layers = []
        in_channels = 3
        for v in cfg: # cfg = [64, 64, "M", 128, 128, "M", 256, 256, 256, "M", 512, 512, 512, "M", 512, 512, 512, "M"]
            if type(v) == int:
                if batch_norm:
                    layers += [nn.Conv2d(in_channels, v, 3, padding=1, bias=False), # 어차피 BN에 bias 포함
                               nn.BatchNorm2d(v),
                               nn.ReLU()]
                else:
                    layers += [nn.Conv2d(in_channels, v, 3, padding=1),
                               nn.ReLU()]
                in_channels = v
            else:
                layers += [nn.MaxPool2d(2)]

        return nn.Sequential(*layers)
~~~

<br/>

  - 모델 인스턴스화 및 실행하기
~~~py
model = VGG(cfgs["E"], batch_norm=True)
# print(model)
!pip install torchinfo
from torchinfo import summary
summary(model, input_size=(2,3,224,224), device='cpu')

x = torch.randn(2,3,224,224)
print(model(x).shape)
~~~

###### [CNN](#CNN)
###### [Top](#top)

<br/>
<br/>

# Inception Net V1
  - 여러 커널 사이즈를 가진 conv layer를 다 통과시켜보는것, 그렇게 얻은 feature map들을 depth방향 으로 concat
    - depth방향으로 쌓으려면 행렬 사이즈가 같아야 한다, 즉 사이즈를 잘 맞춰야 하는 부분이 있다
    - 논문에서는 stride는 모두1로 고정하고 padding을 적절히 조절한다고 나옴
      - 1x1 : s=1,p=0
      - 3x3 : s=1,p=1
      - 5x5 : s=1,p=2
      - 3x3 max pooling : s=1,p=1
  - 핵심 개념
    - 인셉션 모듈(Inception Module)이라는 독특한 블록 구조. 한 층에서 여러 크기의 필터(1x1, 3x3, 5x5)와 풀링(Pooling) 연산을 병렬로 동시에 적용

<img width="646" height="333" alt="image" src="https://github.com/user-attachments/assets/6cfa8b84-b503-44d9-9990-0d32c003dbad" />

<br/>

  - 계산과정
    - y1 = Conv_1x1(x): 1x1 필터를 4개 사용하겠다고 설정
      - 입력 채널 2개짜리 데이터를 연산해서, 새로운 특징 4개를 뽑아냅니다.
    - y1 행렬의 크기: [1, 4, 10, 10]
      - y2 = Conv_3x3(x): 3x3 필터를 8개 사용하겠다고 설정.
    - y2 행렬의 크기: [1, 8, 10, 10]
      - y3 = Conv_5x5(x): 5x5 필터를 6개 사용하겠다고 설정
    - y3 행렬의 크기: [1, 6, 10, 10]
    - 각 연산이 뱉어낸 4개, 8개, 6개의 채널들을 메모리 상에서 나란히 이어 붙인다
      - 합쳐진 총 채널 수 = 4 + 8 + 6 = 18개
      - 최종 결과물 y 행렬의 크기: [1, 18, 10, 10]

<br/>

  - Auxiliary Classifier(보조 분류기)
    - 기울기 소실 (Vanishing Gradient) 현상 방지의목적
      - 인공신경망 파라미터조절을 위해 역전파를 하면서, 연쇄 법칙(Chain Rule)이라는 미분 공식을 사용해서 기울기(미분값)들을 계속 곱해 나가는데, 인공망이 깊었을때(깊다고 다 그런건 아님, 활성화 함수도 중요) 활성화 함수(주로 Sigmoid나 Tanh)를 거친 미분값들은 보통 1보다 작음. 1보다 작은 숫자들을 계속 곱하면 0.1 같은 작은 소수점을 루프 돌면서 계속 곱하다 보면 언더플로우(Underflow)가 나서 결국 0.0으로 수렴해 버리는 현상, 맨 끝(출력층)에서 계산된 오차 미분값이 맨 앞(입력층)까지 도달하는 동안 0에 한없이 가까워져 버림
    - 기나긴 메인 네트워크 중간중간에 샛길(Side Branch)을 파서, 미니 분류기를 달아놓은 것
    - 중간에 있는 레이어들은 저 멀리 맨 끝에서 다 죽어가는 희미한 기울기가 오기를 기다릴 필요가 없음. 자기 바로 옆에 붙어있는 보조 분류기에서 다이렉트로 계산한 아주 신선하고 강력한 기울기(미분값)를 주입받는다
    - 즉, 맨끝에서 오는 역전파만에 의해 업데이트가 되는것이 아니라, 보조분류기는 따로 loss를계산한다, 그리고 최초나온 역전파와 합쳐져서 계산된다

     
<br/>

  - Summary
    - 여러 사이즈의 필터 결과를 concat해서 사용
    - 1x1 conv로 dimension reduction -> 파라미터 수 줄임
    - auxiliary classifier로 vanishing gradient를 완화
    - VGG Net보다 훨씬 작은 파라미터 수
    - GoogLeNet이라고도 불림

<br/>

  - 전체 과정

<img width="458" height="1693" alt="image" src="https://github.com/user-attachments/assets/2c81389c-bedc-4bf8-b1b2-e840800996ab" />

<br/>

  - 모델 코드 확인하기
~~~py
import torch
from torch import nn

class BasicConv2d(nn.Module):
    def __init__(self, in_channels, out_channels, **kwargs):
        super().__init__()
        self.conv_block = nn.Sequential(nn.Conv2d(in_channels, out_channels, bias=False, **kwargs),
                                        nn.BatchNorm2d(out_channels, eps=0.001),
                                        nn.ReLU())
    def forward(self, x):
        x = self.conv_block(x)
        return x

class Inception(nn.Module):
    def __init__(self, in_channels, ch1x1, ch3x3red, ch3x3, ch5x5red, ch5x5, pool_proj):
        super().__init__()

        self.branch1 = BasicConv2d(in_channels, ch1x1, kernel_size=1)

        self.branch2 = nn.Sequential(BasicConv2d(in_channels, ch3x3red, kernel_size=1),
                                     BasicConv2d(ch3x3red, ch3x3, kernel_size=3, padding=1)) # red는 reduce를 줄인 것

        self.branch3 = nn.Sequential(BasicConv2d(in_channels, ch5x5red, kernel_size=1),
                                     BasicConv2d(ch5x5red, ch5x5, kernel_size=5, padding=2))
                                    # Here, kernel_size=3 instead of kernel_size=5 is a known bug. (버그 fix: kernel_size 3=>5, padding 1=>2 로 변경)
                                    # Please see https://github.com/pytorch/vision/issues/906 for details.

        self.branch4 = nn.Sequential(nn.MaxPool2d(kernel_size=3, stride=1, padding=1),
                                     BasicConv2d(in_channels, pool_proj, kernel_size=1))

    def forward(self, x):
        branch1 = self.branch1(x)
        branch2 = self.branch2(x)
        branch3 = self.branch3(x)
        branch4 = self.branch4(x)

        outputs = [branch1, branch2, branch3, branch4]
        return torch.cat(outputs,1)

class InceptionAux(nn.Module):
    def __init__(self, in_channels, num_classes, drop_p = 0.7):
        super().__init__()

        self.avgpool = nn.AvgPool2d(kernel_size=5, stride=3)
        self.conv = BasicConv2d(in_channels, 128, kernel_size=1)
        self.fc1 = nn.Linear(2048, 1024)
        self.act = nn.ReLU()
        self.dropout = nn.Dropout(p=drop_p)
        self.fc2 = nn.Linear(1024, num_classes)

    def forward(self, x):
        # aux1: N x 512 x 14 x 14, aux2: N x 528 x 14 x 14
        x = self.avgpool(x)
        # aux1: N x 512 x 4 x 4, aux2: N x 528 x 4 x 4
        x = self.conv(x)
        # N x 128 x 4 x 4
        x = torch.flatten(x, 1)
        # N x 2048
        x = self.fc1(x)
        x = self.act(x)
        x = self.dropout(x)
        # N x 1024
        x = self.fc2(x)
        # N x 1000 (num_classes)
        return x

class Inception_V1(nn.Module):
    def __init__(self, num_classes = 1000, use_aux = True, init_weights = None, drop_p = 0.4, drop_p_aux = 0.7):
        super().__init__()

        self.conv1 = BasicConv2d(3, 64, kernel_size=7, stride=2, padding=3)
        self.maxpool1 = nn.MaxPool2d(3, stride=2, padding=1)
        self.conv2a = BasicConv2d(64, 64, kernel_size=1)
        self.conv2b = BasicConv2d(64, 192, kernel_size=3, padding=1)
        self.maxpool2 = nn.MaxPool2d(3, stride=2, padding=1)
        self.inception3a = Inception(192, 64, 96, 128, 16, 32, 32)
        self.inception3b = Inception(256, 128, 128, 192, 32, 96, 64)
        self.maxpool3 = nn.MaxPool2d(3, stride=2, padding=1)
        self.inception4a = Inception(480, 192, 96, 208, 16, 48, 64)
        self.inception4b = Inception(512, 160, 112, 224, 24, 64, 64)
        self.inception4c = Inception(512, 128, 128, 256, 24, 64, 64)
        self.inception4d = Inception(512, 112, 144, 288, 32, 64, 64)
        self.inception4e = Inception(528, 256, 160, 320, 32, 128, 128)
        self.maxpool4 = nn.MaxPool2d(3, stride=2, padding=1)
        self.inception5a = Inception(832, 256, 160, 320, 32, 128, 128)
        self.inception5b = Inception(832, 384, 192, 384, 48, 128, 128)
        if use_aux:
            self.aux1 = InceptionAux(512, num_classes, drop_p=drop_p_aux)
            self.aux2 = InceptionAux(528, num_classes, drop_p=drop_p_aux)
        else:
            self.aux1 = None
            self.aux2 = None
        self.avgpool = nn.AdaptiveAvgPool2d((1, 1)) # GAP
        self.dropout = nn.Dropout(p=drop_p)
        self.fc = nn.Linear(1024, num_classes)

        if init_weights:
            for m in self.modules():
                if isinstance(m, nn.Conv2d) or isinstance(m, nn.Linear):
                    torch.nn.init.trunc_normal_(m.weight, mean=0.0, std=0.01, a=-2, b=2)

    def forward(self, x):
        # N x 3 x 224 x 224
        x = self.conv1(x)
        # N x 64 x 112 x 112
        x = self.maxpool1(x)
        # N x 64 x 56 x 56
        x = self.conv2a(x)
        # N x 64 x 56 x 56
        x = self.conv2b(x)
        # N x 192 x 56 x 56
        x = self.maxpool2(x)

        # N x 192 x 28 x 28
        x = self.inception3a(x)
        # N x 256 x 28 x 28
        x = self.inception3b(x)
        # N x 480 x 28 x 28
        x = self.maxpool3(x)
        # N x 480 x 14 x 14
        x = self.inception4a(x)
        # N x 512 x 14 x 14
        if self.aux1 is not None and self.training:
            aux1 = self.aux1(x)
        else:
            aux1 = None  # 뭐라도 넣어놔야 not defined error 안 뜸

        x = self.inception4b(x)
        # N x 512 x 14 x 14
        x = self.inception4c(x)
        # N x 512 x 14 x 14
        x = self.inception4d(x)
        # N x 528 x 14 x 14
        if self.aux2 is not None and self.training:
            aux2 = self.aux2(x)
        else:
            aux2 = None
        x = self.inception4e(x)
        # N x 832 x 14 x 14
        x = self.maxpool4(x)
        # N x 832 x 7 x 7
        x = self.inception5a(x)
        # N x 832 x 7 x 7
        x = self.inception5b(x)
        # N x 1024 x 7 x 7

        x = self.avgpool(x)
        # N x 1024 x 1 x 1
        x = torch.flatten(x, 1)
        # N x 1024
        x = self.dropout(x)
        x = self.fc(x)
        # N x 1000 (num_classes)
        return x, aux2, aux1
~~~


<br/>

  - 모델 인스턴스화 및 실행하기
~~~py
x, aux2, aux1 = model(torch.randn(2,3,224,224))
print(x.shape)
print(aux2.shape)
print(aux1.shape)

x, aux2, aux1 = model(torch.randn(2,3,500,500)) # GAP 덕분에 사이즈가 커도 잘 통과됨
print(x.shape)
~~~

###### [CNN](#CNN)
###### [Top](#top)

<br/>
<br/>

# Inception Net V2,V3
  - VGG Net의 아이디어를 수용, 확장해서 반영한 모델
  - Inception Net V1이 base->1x1->5x5, base->1x1->3x3, base->pool->1x1, base->1x1 했다면 여기서 5x5를 3x3두번으로 변경
  - 또한 3x3을 1x3 + 3x1으로 쪼개는 것도 반영

<img width="1408" height="624" alt="image" src="https://github.com/user-attachments/assets/3d8326b2-ee62-4ce1-93b3-a3e2681d3432" />

<br/>

<img width="505" height="591" alt="image" src="https://github.com/user-attachments/assets/3c73ed6b-c379-4285-abe6-2fbd6f489f8e" />

<br/>

<img width="788" height="634" alt="image" src="https://github.com/user-attachments/assets/5f056e4a-6205-44d8-8863-74513478cba5" />

<br/>

  - Inception Net V1에서의 문제점
    - 방법 A (연산량 과부하): 먼저 채널 수를 늘린 뒤(Filter 확장), 나중에 Pooling(Stride=2)으로 크기를 줄인다.
      - 정보 손실은 적지만, 채널이 늘어난 상태에서 연산하므로 계산량이 폭발합니다.
    - 방법 B (병목 현상 발생): 먼저 Pooling으로 크기를 줄인 뒤, 나중에 채널을 늘립니다.
      - 연산량은 적지만, 크기를 줄이는 순간 중요한 정보가 유실되는 Representational Bottleneck이 발생한다.
    - V2/V3 설계자들은 "그럼 반반씩 섞어서 병렬로 처리한 뒤 합치자!"라는 아이디어를 냄
      - 1.오른쪽 갈래: Stride=2인 Convolution 레이어를 사용하여 특징을 추출하면서 크기를 절반으로 줄인다
      - 2.왼쪽 갈래: Stride=2인 Max Pooling 레이어를 사용하여 물리적인 크기를 절반으로 줄인다.
      - 3.합치기(Concat): 이 두 결과를 옆으로 이어 붙인다.
  - auxiliary classifier는 V1과 달리 하나만 사용한다
  - Aux classifier에 BN(Batch Normalization_배치 정규화)도 추가됨

<br/>

<img width="528" height="567" alt="image" src="https://github.com/user-attachments/assets/50d94fe9-8e0c-4265-8e98-7a5475442f23" />

<br/>

  - Label Smoothing이론
    - 레이블 스무딩은 원-핫 인코딩(One-Hot Encoding)의 단점을 보완하기 위한 기법
      - One-Hot Encoding (원-핫 인코딩) : 어떤 분류를 할때, 값을 다르게 세팅 해야 하는데 개(0), 고양이(1), 자동차(2) 이렇게 하면 숫자가 크고 작고가 생기며, 멀고가깝고가 생겨 버리기 때문에 단 하나의 값만 1(Hot)이고 나머지는 모두 0(Cold)인 벡터로 만드는 것
    - 정답인 1을 조금 깎아서 나머지 오답들에게 골고루 나눠줍니다. 즉, 정답 레이블을 부드럽게(Smoothing) 만드는 것
    - 원-핫: [1.0, 0.0, 0.0]
    - 레이블 스무딩: [0.9, 0.05, 0.05]

<br/>

  - Inception Net V2, V3 둘의차이
    - 아래표의 4번째줄에 있는 Inception-v2가 진짜 Inception Net V2이지만, 연구진이 이 V2 뼈대에다가 성능을 영끌하기 위해 여러 가지 최신 훈련 기법(잔기술)들을 하나씩 누적해서 적용해 보기 시작한것. 표의 아래로 내려갈수록 이전 기술이 전부 포함된 상태
      - RMSProp: 학습 속도를 조절하는 더 똑똑한 옵티마이저 적용
      - Label Smoothing: 정답을 너무 맹신하지 않게 해서 과적합을 막는 기법 적용
      - Factorized 7x7: 7x7 필터를 1x7, 7x1로 한 번 더 쪼개서 연산량 줄이기
      - BN-auxiliary: 보조 분류기에 배치 정규화(BN) 달아주기
    - Inception V3는 결국 Inception Net V2에 RMSProp, Label Smoothing, Factorized 7x7, BN-auxiliary을 다합친것을말함(표의 맨 밑에 있는것)

  - Inception Net V 시리즈의 발전과정
<img width="861" height="685" alt="image" src="https://github.com/user-attachments/assets/f9ed6d0f-7775-4cfc-b245-6242c8f6c2c3" />

<br/>
<br/>

  - 전체구조
<img width="599" height="531" alt="image" src="https://github.com/user-attachments/assets/a797e2a4-2b70-44a7-a93f-e3d09f806fe1" />

<br/>

  - Summary
    - 같은 receptive field를 얻기 위한 파라미터 수를 최소화 함
      - 5x5 = 3x3 + 3x3
      - 7x7 = 1x7 + 7x1
    - 특징 맵 size를 줄일 때, bottleneck을 피하기 위해 pooling이 아닌 convolution with stride 2사용(Conv 연산과 Max Pooling을 양갈래(병렬)로 동시에 돌려서 합치는 기가 막힌 꼼수)
      - 따로 pooling해줬던 v1과는 다르다
    - Label Smoothing 제안
    - aux classifier를 두개에서 한개로 줄이고 BN적용

<br/>

<img width="927" height="371" alt="image" src="https://github.com/user-attachments/assets/836181e5-468a-4f17-848f-0d19150a7e8f" />

<br/>

  - 각각의 마지막 번째는 resolution을 줄이기 위해 아래 구조 사용

<img width="262" height="293" alt="image" src="https://github.com/user-attachments/assets/365d08b4-67b1-400c-9dec-b2cb8b7c83bf" />

<br/>

  - 모델 코드 확인하기
~~~py
import torch
from torch import nn

class BasicConv2d(nn.Module):
    def __init__(self, in_channels, out_channels, **kwargs):
        super().__init__()
        self.conv_block = nn.Sequential(nn.Conv2d(in_channels, out_channels, bias=False, **kwargs),
                                        nn.BatchNorm2d(out_channels, eps=0.001),
                                        nn.ReLU())
    def forward(self, x):
        x = self.conv_block(x)
        return x

class InceptionA(nn.Module): # Figure 5
    def __init__(self, in_channels, pool_features):
        super().__init__()

        self.branch1 = nn.Sequential(BasicConv2d(in_channels, 64, kernel_size=1),
                                     BasicConv2d(64, 96, kernel_size=3, padding=1),
                                     BasicConv2d(96, 96, kernel_size=3, padding=1))

        self.branch2 = nn.Sequential(BasicConv2d(in_channels, 48, kernel_size=1),
                                     BasicConv2d(48, 64, kernel_size=3, padding=1))

        self.branch3 = nn.Sequential(nn.AvgPool2d(kernel_size=3, stride=1, padding=1),
                                     BasicConv2d(in_channels, pool_features, kernel_size=1))

        self.branch4 = BasicConv2d(in_channels, 64, kernel_size=1)

    def forward(self, x):
        x = [self.branch1(x), self.branch2(x), self.branch3(x), self.branch4(x)]
        return torch.cat(x,1)

class ReductionA(nn.Module): # Bottleneck 피하면서 grid-size 줄이기
    def __init__(self, in_channels):
        super().__init__()

        self.branch1 = nn.Sequential(BasicConv2d(in_channels, 64, kernel_size=1),
                                     BasicConv2d(64, 96, kernel_size=3, padding=1),
                                     BasicConv2d(96, 96, kernel_size=3, stride=2))

        self.branch2 = nn.Sequential(BasicConv2d(in_channels, 64, kernel_size=1),
                                     BasicConv2d(64, 384, kernel_size=3, stride=2))


        self.branch3 = nn.MaxPool2d(kernel_size=3, stride=2)

    def forward(self, x):
        x = [self.branch1(x), self.branch2(x), self.branch3(x)]
        return torch.cat(x,1)

class InceptionB(nn.Module): # Figure 6
    def __init__(self, in_channels, channels_7x7):
        super().__init__()

        c7 = channels_7x7
        self.branch1 = nn.Sequential(BasicConv2d(in_channels, c7, kernel_size=1),
                                     BasicConv2d(c7, c7, kernel_size=(1, 7), padding=(0, 3)), # 7x1, 1x7 순으로 되어있던 것을 논문이랑 같게 순서 바꿈
                                     BasicConv2d(c7, c7, kernel_size=(7, 1), padding=(3, 0)),
                                     BasicConv2d(c7, c7, kernel_size=(1, 7), padding=(0, 3)),
                                     BasicConv2d(c7, 192, kernel_size=(7, 1), padding=(3, 0)))

        self.branch2 = nn.Sequential(BasicConv2d(in_channels, c7, kernel_size=1),
                                     BasicConv2d(c7, c7, kernel_size=(1, 7), padding=(0, 3)),
                                     BasicConv2d(c7, 192, kernel_size=(7, 1), padding=(3, 0)))

        self.branch3 = nn.Sequential(nn.AvgPool2d(kernel_size=3, stride=1, padding=1),
                                     BasicConv2d(in_channels, 192, kernel_size=1))

        self.branch4 = BasicConv2d(in_channels, 192, kernel_size=1)

    def forward(self, x):
        x = [self.branch1(x), self.branch2(x), self.branch3(x), self.branch4(x)]
        return torch.cat(x,1)

class ReductionB(nn.Module): # Bottleneck 피하면서 grid-size 줄이기
    def __init__(self, in_channels):
        super().__init__()

        self.branch1 = nn.Sequential(BasicConv2d(in_channels, 192, kernel_size=1),
                                     BasicConv2d(192, 192, kernel_size=3, padding=1),
                                     BasicConv2d(192, 192, kernel_size=3, stride=2))

        self.branch2 = nn.Sequential(BasicConv2d(in_channels, 192, kernel_size=1),
                                     BasicConv2d(192, 320, kernel_size=3, stride=2))

        self.branch3 = nn.MaxPool2d(kernel_size=3, stride=2)

    def forward(self, x):
        x = [self.branch1(x), self.branch2(x), self.branch3(x)]
        return torch.cat(x,1)

class InceptionC(nn.Module): # Figure 7
    def __init__(self, in_channels):
        super().__init__()

        self.branch1 = nn.Sequential(BasicConv2d(in_channels, 448, kernel_size=1),
                                     BasicConv2d(448, 384, kernel_size=3, padding=1))
        self.branch1a = BasicConv2d(384, 384, kernel_size=(1, 3), padding=(0, 1))
        self.branch1b = BasicConv2d(384, 384, kernel_size=(3, 1), padding=(1, 0))

        self.branch2 = BasicConv2d(in_channels, 384, kernel_size=1)
        self.branch2a = BasicConv2d(384, 384, kernel_size=(1, 3), padding=(0, 1))
        self.branch2b = BasicConv2d(384, 384, kernel_size=(3, 1), padding=(1, 0))

        self.branch3 = nn.Sequential(nn.AvgPool2d(kernel_size=3, stride=1, padding=1),
                                     BasicConv2d(in_channels, 192, kernel_size=1))

        self.branch4 = BasicConv2d(in_channels, 320, kernel_size=1)

    def forward(self, x):
        branch1 = self.branch1(x)
        branch1 = [self.branch1a(branch1),
                   self.branch1b(branch1)]
        branch1 = torch.cat(branch1, 1)

        branch2 = self.branch2(x)
        branch2 = [self.branch2a(branch2),
                   self.branch2b(branch2)]
        branch2 = torch.cat(branch2, 1)

        branch3 = self.branch3(x)

        branch4 = self.branch4(x)

        outputs = [branch1, branch2, branch3, branch4]
        return torch.cat(outputs,1)

class InceptionAux(nn.Module):
    def __init__(self, in_channels, num_classes):
        super().__init__()

        self.avgpool1 = nn.AvgPool2d(kernel_size=5, stride=3)
        self.conv1 = BasicConv2d(in_channels, 128, kernel_size=1)
        self.fc1 = nn.Linear(128*5*5, 1024)
        self.fc1.stddev = 0.001
        self.fc2 = nn.Linear(1024, num_classes)
        self.fc2.stddev = 0.001

    def forward(self, x):
        # N x 768 x 17 x 17
        x = self.avgpool1(x)
        # N x 768 x 5 x 5
        x = self.conv1(x)
        # N x 128 x 5 x 5
        x = torch.flatten(x, 1)
        # N x 3200
        x = self.fc1(x)
        # N x 1024
        x = self.fc2(x)
        # N x 1000
        return x

class Inception_V3(nn.Module):
    def __init__(self, num_classes = 1000, use_aux = True, init_weights = None, drop_p = 0.5):
        super().__init__()

        self.use_aux = use_aux

        self.conv1a = BasicConv2d(3, 32, kernel_size=3, stride=2)
        self.conv1b = BasicConv2d(32, 32, kernel_size=3)
        self.conv1c = BasicConv2d(32, 64, kernel_size=3, padding=1)
        self.maxpool1 = nn.MaxPool2d(kernel_size=3, stride=2)

        self.conv2a = BasicConv2d(64, 80, kernel_size=3)
        self.conv2b = BasicConv2d(80, 192, kernel_size=3, stride=2)
        self.conv2c = BasicConv2d(192, 288, kernel_size=3, padding=1)

        self.inception3a = InceptionA(288, pool_features=64)
        self.inception3b = InceptionA(288, pool_features=64)
        self.inception3c = ReductionA(288)

        self.inception4a = InceptionB(768, channels_7x7=128)
        self.inception4b = InceptionB(768, channels_7x7=160)
        self.inception4c = InceptionB(768, channels_7x7=160)
        self.inception4d = InceptionB(768, channels_7x7=192)
        if use_aux:
            self.aux = InceptionAux(768, num_classes)
        else:
            self.aux = None
        self.inception4e = ReductionB(768)

        self.inception5a = InceptionC(1280)
        self.inception5b = InceptionC(2048)

        self.avgpool = nn.AdaptiveAvgPool2d((1, 1))
        self.dropout = nn.Dropout(p=drop_p)
        self.fc = nn.Linear(2048, num_classes)

        if init_weights:
            for m in self.modules():
                if isinstance(m, nn.Conv2d) or isinstance(m, nn.Linear):
                    stddev = float(m.stddev) if hasattr(m, "stddev") else 0.1  # type: ignore
                    torch.nn.init.trunc_normal_(m.weight, mean=0.0, std=stddev, a=-2, b=2)

    def forward(self, x):
        # N x 3 x 299 x 299
        x = self.conv1a(x)
        # N x 32 x 149 x 149
        x = self.conv1b(x)
        # N x 32 x 147 x 147
        x = self.conv1c(x)
        # N x 64 x 147 x 147
        x = self.maxpool1(x)
        # N x 64 x 73 x 73
        x = self.conv2a(x)
        # N x 80 x 71 x 71
        x = self.conv2b(x)
        # N x 192 x 35 x 35
        x = self.conv2c(x)
        # N x 288 x 35 x 35
        x = self.inception3a(x)
        # N x 288 x 35 x 35
        x = self.inception3b(x)
        # N x 288 x 35 x 35
        x = self.inception3c(x)
        # N x 768 x 17 x 17
        x = self.inception4a(x)
        # N x 768 x 17 x 17
        x = self.inception4b(x)
        # N x 768 x 17 x 17
        x = self.inception4c(x)
        # N x 768 x 17 x 17
        x = self.inception4d(x)
        # N x 768 x 17 x 17

        if self.aux is not None and self.training:
            aux = self.aux(x)
        else:
            aux = None  # 뭐라도 넣어놔야 not defined error 안 뜸

        x = self.inception4e(x)
        # N x 1280 x 8 x 8
        x = self.inception5a(x)
        # N x 2048 x 8 x 8
        x = self.inception5b(x)
        # N x 2048 x 8 x 8
        x = self.avgpool(x)
        # N x 2048 x 1 x 1
        x = self.dropout(x)
        # N x 2048 x 1 x 1
        x = torch.flatten(x, 1)
        # N x 2048
        x = self.fc(x)
        # N x 1000 (num_classes)
        return x, aux
~~~

<br/>

  - 모델 인스턴스화 및 실행하기
~~~py
model = Inception_V3()
# print(model)
!pip install torchinfo
from torchinfo import summary
summary(model, input_size=(2,3,299,299), device='cpu')

x, aux = model(torch.randn(2,3,299,299))
print(x.shape)
print(aux.shape)
~~~

###### [CNN](#CNN)
###### [Top](#top)

<br/>
<br/>

# Loss Landscape
  - BN+ReLU 콤비로 분명 vanishing gradient 해결 했는데, 그래도 너무 깊으면 training, test error가 같이 커진다
  - No Skip-Connection일 때 깊을수록 loss 모양이 꼬불꼬불해짐
  - ResNet의 skip-connection 이 대표적인 해결 방안 중 하나
    - 출력값에 입력값 x를 다이렉트로 더해주는 방식

<br/>

  - No Skip-Connection (일반적인 방식)
    - 치명적인 문제점: 만약 학습이 덜 됐거나 가중치 문제로 Layer2가 데이터의 특징을 잃어버리고 0에 가까운 값을 반환해버리면, x2 = 0이 되고, Layer3은 0을 받아서 연산하니까 최종 output도 완전히 망가짐

~~~py
x1 = Layer1(input)
x2 = Layer2(x1)
output = Layer3(x2)
~~~

<br/>

  - Skip-Connection (잔차 연결 방식)
    - 원본 데이터(input)를 옆으로 빼서 보관해뒀다가 마지막에 더해주는 구조
    - 만약 학습이 덜 됐거나 가중치 문제로 Layer2가 데이터의 특징을 잃어버리고 0에 가까운 값을 반환해버려도, 최종 결과물에는 최소한 원본 데이터(input)라도 온전히 살아남게됨

~~~py
x1 = Layer1(input)
x2 = Layer2(x1)
output = x2 + input  // 핵심: 원본을 그대로 더함!
~~~

<br/>

  - Skip-Connection이 loss의 꼬불꼬불함을 해결해 준다
    - No Skip-Connection일 때 지형이 꼬이는 이유
      - 일반적으로는 output = Layer3(Layer2(Layer1(input))) 처럼 x가 여러 층을 거치면서 계속 파고들며 가공됨, 각 Layer 안에는 가중치(Weight)를 곱하고, ReLU 같은 비선형 함수를 씌우는 작업이 있어, 가중치를 조금만 변경해도 그 미세한 변화가 곱하기와 비선형 함수를 타고 이리저리 증폭되거나 왜곡됨
    - Skip-Connection이 지형을 다림질하는 원리
      - output = Layer2(x1) + input 처럼, input은 아무런 조작이 가해지지 않은, 가장 안정적이고 예측 가능한 선형적인 값, 반면에 Layer2(x1)은 가중치와 함수들이 얽혀서 꼬불꼬불하고 복잡하게 변형된 값, 이둘을 더하는 것이기 때문에, 가중치 변화에 따라 미친 듯이 요동치려는 Layer2(x1)의 결과값에, 아주 안정적이고 매끄러운 직선 형태의 input이 강제로 섞임 그래서 조금 더 펴지게 되는것

###### [CNN](#CNN)
###### [Top](#top)

<br/>
<br/>

# ResNet
  - 저자 Kaiming He의 생각: Vanishing gradient 해결(BN+ReLU)했는데도, 모델이 깊을수록 training error가 커지는 건 좀 이상하다고 생각
  - 또한, 깊은 층이 깊지 않은 층을 흉내내고 싶다면 나머지 층은 identity mapping(들어온 대로 나가게 하는것)을 하면 된다고 생각했지만, 이상하게 깊을수록 training error가 더 커짐
  - 그래서, shortcut connection (이하 skip-connection)을 제안, identity mapping을 잘 만들 수 있게 해서 이 문제를 해결함
    - 1.training error가 깊을수록 커지지는 않게 함
    - 2.심지어 training, test error가 깊을수록 작아짐

<br/>

  - skip-connection
    - x 가 들어와서 f(x)가 나가는 게 기존이지만, x+f(x) 가 나가게끔 연결해 주는 게 skip-connection
    - 신경망이 깊을때는 입력으로부터 차근차근 조금씩 값을 바꿔 나가는 게 이상적일 것, skip-connection이 있을 때는 input된 데이터를 그대로 더해주기 때문에 비슷한 출력을 잘 만들어냄, 따라서 조금씩만 데이터가 바껴감
      - ResNet은 깊을수록 각 conv layer 의 출력 편차가 작다! => 편차가 크지 않은 게 좋은 모델이다
      - 차이만을 학습한다고 해서 잔차(residual)학습!! -> 변화량만 학습하면 되니까 학습이 쉽다(약간씩 보태주는 개념)
      - 한 층만 skip 해봤을 때는 별 성능 개선이 없었음 -> 논문에서는 두 개 내지 세 개 점프를 사용
      - BN 쓸 땐 : x -> conv -> BN -> ReLU -> conv -> BN -> +x -> ReLU
        - ReLU전에 +x하는 이유 -> ReLU는 양수만 살리는 것이기 때문에 ReLU를 먼저 하면 양수만 남아버리는 상황이라 좋지 않음


<img width="476" height="279" alt="image" src="https://github.com/user-attachments/assets/51dcbca5-9638-4ff3-8783-3f44da305cae" />

<br/>

  - 전체 구조
<img width="1363" height="512" alt="image" src="https://github.com/user-attachments/assets/0866283d-542e-458b-bdd8-6b0a9fd0a77f" />

<br/>

  - 18레이어부터~152레이어 층 까지 가능
  - 첫 pooling 이후 계속 skip-connection 함
  - conv3_1, 4_1, 5_1 의 첫 번째 layer에서 stride=2 로 사이즈를 줄임
  - 블록(Block) 구조: 대괄호 [ ] 안에 있는 것이 하나의 잔차 블록(Residual Block). F(x) + x 연산이 일어나는 기본 단위

<img width="918" height="401" alt="image" src="https://github.com/user-attachments/assets/1ff2d728-d4e0-4950-b6b3-dd0f499afce1" />

<br/>

  - Bottleneck
    - 50층 이상 깊은 ResNet 에선 Bottleneck 구조 사용
    - 기존 block 처럼 3x3만 사용하고 깊게 만들면 파라미터 수가 너무 많아짐
    - 1x1 로 채널 수를 줄인 다음 3x3을 통과시키고 다시 1x1로 채널 수를 키움

<img width="715" height="281" alt="image" src="https://github.com/user-attachments/assets/30fc092f-4a80-4d80-99a2-0c278494acdf" />

<br/>

  - 모델 코드 확인하기
~~~py
import torch
from torch import nn

class BasicBlock(nn.Module):
    expansion = 1 # 클래스 속성
    def __init__(self, in_channels, inner_channels, stride = 1, projection = None):
        super().__init__()

        self.residual = nn.Sequential(nn.Conv2d(in_channels, inner_channels, 3, stride=stride, padding=1, bias=False),
                                      nn.BatchNorm2d(inner_channels),
                                      nn.ReLU(inplace=True),
                                      nn.Conv2d(inner_channels, inner_channels * self.expansion, 3, padding=1, bias=False),
                                      nn.BatchNorm2d(inner_channels))
        self.projection = projection
        self.relu = nn.ReLU(inplace=True)

    def forward(self, x):
        residual = self.residual(x)

        if self.projection is not None:
            shortcut = self.projection(x) # 점선 연결
        else:
            shortcut = x # 실선 연결

        out = self.relu(residual + shortcut) # 여기서 skip-connection
        return out

class Bottleneck(nn.Module):
    expansion = 4 # 클래스 속성
    def __init__(self, in_channels, inner_channels, stride = 1, projection = None):
        super().__init__()

        self.residual = nn.Sequential(nn.Conv2d(in_channels, inner_channels, 1, bias=False),
                                      nn.BatchNorm2d(inner_channels),
                                      nn.ReLU(inplace=True),
                                      nn.Conv2d(inner_channels, inner_channels, 3, stride=stride, padding=1, bias=False),
                                      nn.BatchNorm2d(inner_channels),
                                      nn.ReLU(inplace=True),
                                      nn.Conv2d(inner_channels, inner_channels * self.expansion, 1, bias=False),
                                      nn.BatchNorm2d(inner_channels * self.expansion))

        self.projection = projection
        self.relu = nn.ReLU(inplace=True)

    def forward(self, x):
        residual = self.residual(x)

        if self.projection is not None:
            shortcut = self.projection(x)
        else:
            shortcut = x

        out = self.relu(residual + shortcut) # 여기서 skip-connection
        return out

class ResNet(nn.Module):
    def __init__(self, block, num_block_list, num_classes = 1000, zero_init_residual = True):
        super().__init__()

        self.in_channels = 64

        self.conv1 = nn.Conv2d(3, 64, kernel_size=7, stride=2, padding=3, bias=False)
        self.bn1 = nn.BatchNorm2d(64)
        self.relu = nn.ReLU(inplace=True) # inplace=True: 좀 더 메모리 효율적
        self.maxpool = nn.MaxPool2d(kernel_size=3, stride=2, padding=1)
        self.stage1 = self.make_stage(block, 64, num_block_list[0], stride=1)
        self.stage2 = self.make_stage(block, 128, num_block_list[1], stride=2)
        self.stage3 = self.make_stage(block, 256, num_block_list[2], stride=2)
        self.stage4 = self.make_stage(block, 512, num_block_list[3], stride=2)
        self.avgpool = nn.AdaptiveAvgPool2d((1, 1))
        self.fc = nn.Linear(512 * block.expansion, num_classes)

        for m in self.modules():
            if isinstance(m, nn.Conv2d):
                nn.init.kaiming_normal_(m.weight, mode="fan_out", nonlinearity="relu")

        # Zero-initialize the last BN in each residual branch,
        # so that the residual branch starts with zeros, and each residual block behaves like an identity.
        # This improves the model by 0.2~0.3%p according to https://arxiv.org/abs/1706.02677
        # 아무것도 보태지 않은 상태로 학습을 시작해서 뭘 보태면 좋을지를 알아내라! (더욱 조금만 보태게 학습이 될 것)
        if zero_init_residual:
            for m in self.modules():
                if isinstance(m, block):
                    nn.init.constant_(m.residual[-1].weight, 0)

    def make_stage(self, block, inner_channels, num_blocks, stride = 1):

        if stride != 1 or self.in_channels != inner_channels * block.expansion:
            # stride = 2 면 여기로 무조건 들어옴 즉, stage 2,3,4 는 무조건 여기로 들어옴. (Basic block, BottleNeck 상관없이)
            # stride = 1 이여도 채널 수가 다르면 여기로 들어옴 (resoltion은 그대로, 채널 수만 늘어나는 때)
            # 즉, Basic block 쓰는 18, 34-layer의 stage 1에서만 else로 가고 BottleNeck 쓰는 50, 101, 152-layer는 모든 stage에서 항상 여기로 들어옴
            projection = nn.Sequential(
                nn.Conv2d(self.in_channels, inner_channels * block.expansion, 1, stride=stride, bias=False),
                nn.BatchNorm2d(inner_channels * block.expansion)) # 점선 connection 임
        else:
            projection = None # 실선 connection

        layers = []
        layers += [block(self.in_channels, inner_channels, stride, projection)] # stride=2, 점선 연결은 첫 block에서만
        self.in_channels = inner_channels * block.expansion
        for _ in range(1, num_blocks): # 나머지 block은 실선 연결로 반복
            layers += [block(self.in_channels, inner_channels)]

        return nn.Sequential(*layers)

    def forward(self, x):
        x = self.conv1(x)
        x = self.bn1(x)0
        x = self.relu(x)
        x = self.maxpool(x)

        x = self.stage1(x)
        x = self.stage2(x)
        x = self.stage3(x)
        x = self.stage4(x)

        x = self.avgpool(x)
        x = torch.flatten(x, 1)
        x = self.fc(x)
        return x
~~~

<br/>

  - 모델 인스턴스화 및 실행하기
~~~py
def resnet18(**kwargs):
    return ResNet(BasicBlock, [2, 2, 2, 2], **kwargs)

def resnet34(**kwargs):
    return ResNet(BasicBlock, [3, 4, 6, 3], **kwargs)

def resnet50(**kwargs):
    return ResNet(Bottleneck, [3, 4, 6, 3], **kwargs)

def resnet101(**kwargs):
    return ResNet(Bottleneck, [3, 4, 23, 3], **kwargs)

def resnet152(**kwargs):
    return ResNet(Bottleneck, [3, 8, 36, 3], **kwargs)

model = resnet152()
# print(model)
!pip install torchinfo
from torchinfo import summary
summary(model, input_size=(2,3,224,224), device='cpu')
~~~

<br/>

  - ResNet은 앙상블 모델이다라고 주장하는 사람이 있고, 아닌 사람이 있고
  - 54개 block으로 이루어진 110층 ResNet 에서 각 block을 삭제해 가면서 Test error 관찰했으나, ResNet은 값을 조금씩만 바꿔나가기 때문에 한 블록 정도는 없어도 괜찮게 동작한다
    - VGG에도 비슷한 실험을 했더니 이번엔 난리나는것을 확인
  - 여러 실험을 통해서, 짧은 path (skip 많이한 path)가 유효한 녀석들이고 긴 녀석들은 별 기여가 없다고 해석 가능함

<br/>

  - ResNet 발전_full pre-activation_(2016.03)
    - 기존 것은 ReLU가 길목을 딱 막고 있으니까 gradient가 사라질 위험이 존재 => 길을 터주자
    - act를 Residual 쪽으로 빼서 해결! (post-activation에서 pre-activation으로!)

<img width="1345" height="740" alt="image" src="https://github.com/user-attachments/assets/1daae793-8cf1-4cf5-8a71-00ff5c1c7362" />
  
<br/>

  - 이런저런시도 끝에 (BN도 앞으로 빼는) full pre-activation이 최고

<img width="1735" height="842" alt="image" src="https://github.com/user-attachments/assets/78bf9659-14ee-4a87-9dc3-0217ecc27859" />

<br/>

  - full-pre 로 바꿨을 때 달라지는 두 가지
    - 기존에는 점선 연결 = conv-BN 이었으나, (b)에서 BN을 길목으로 뺀 다음 residual로 보냈기 때문에 점선 연결 = conv 만 한다
  - 마지막 블록 이후의 처리는, 마지막 BottleNeck -> BN-ReLU-GAP-FC 로 처리
    - 기존은 마지막 BottleNeck -> GAP-FC
~~~py
def make_stage함수에서

projection = nn.Sequential(
                nn.Conv2d(self.in_channels, inner_channels * block.expansion, 1, stride=stride, bias=False),
                nn.BatchNorm2d(inner_channels * block.expansion)) # 점선 connection 임

이부분에서 nn.BatchNorm2d(inner_channels * block.expansion)) 이게 빠지게됨
~~~

###### [CNN](#CNN)
###### [Top](#top)

<br/>
<br/>

# Inception Net V4,Inception-ResNet
  - V4, Inception-ResNet V1, V2 이렇게 세 가지가 한 논문에 소개됨
  - Inception Net V4
    - 이전 버전보다 파라미터가 훨씬 많음
    - 이전 버전인 V3에서 모델 구조가 너무 파편화되고 지저분했던 것을, 아주 깔끔하고 규칙적인 격자(Grid) 형태로 싹 리팩토링함
    - 스킵 커넥션(skip-connection을) 없음
    - 보조 분류기 (Aux-classifier) 사용함
  - Inception-ResNet
    - ResNet 의 skip-connection을 활용 해서 성능을 키움
    - aux-classifier 얘기는 쏙 들어감
      - "초기 기울기 소실 방지" 역할을 전혀 수행하지 못한다는 것이 드러남
      - skip-connection의 등장으로 기울기 소실 문제 자체가 구조적으로 완벽하게 해결
    - Residual 에 0.1 ~ 0.3 을 곱해서 더했더니 좀더 낫다는 부분 있지만, Residual 에 0.1 을 곱하는 것은 여기서만 그렇고 다른 논문에선 안 쓰는 방식
    - Inception과 ResNet이라는 당시 최고의 두 모델을 합쳤는데, 기대만큼 엄청난 시너지가 나지 않고 순수 Inception V4와 성능 차이가 크지않았을까 하는생각이 있었음
      - 심한 병목 (Bottleneck)발생이 원인이 있었음

<br/>

  - Inception Net V4 전체구조

<img width="1271" height="1064" alt="image" src="https://github.com/user-attachments/assets/823bb4bf-718d-4154-ba29-dcf1445dc035" />

<br/>

<img width="2075" height="1177" alt="image" src="https://github.com/user-attachments/assets/a4e1ef10-e585-4ed2-8ffd-31860e4ca8b0" />

<br/>

  - Inception-ResNet V2 전체구조

<img width="1617" height="1182" alt="image" src="https://github.com/user-attachments/assets/ddff150d-2ea7-46b6-86bf-70b40a76eaad" />

<br/>

<img width="2078" height="1190" alt="image" src="https://github.com/user-attachments/assets/b4f767d6-f382-46cf-9ee6-d08915a9f2b3" />

<br/>

  - 모델 코드 확인하기(Inception Net V4)
~~~py
import torch
from torch import nn

class BasicConv2d(nn.Module):
    def __init__(self, in_channels, out_channels, **kwargs):
        super().__init__()
        self.conv_block = nn.Sequential(nn.Conv2d(in_channels, out_channels, bias=False, **kwargs),
                                        nn.BatchNorm2d(out_channels, eps=0.001),
                                        nn.ReLU())
    def forward(self, x):
        x = self.conv_block(x)
        return x

class Inception_Stem(nn.Module):
    # Figure 3.
    def __init__(self):
        super().__init__()
        self.conv1 = nn.Sequential(BasicConv2d(3, 32, kernel_size=3, stride=2),
                                   BasicConv2d(32, 32, kernel_size=3),
                                   BasicConv2d(32, 64, kernel_size=3, padding=1))
        self.branch3x3_pool = nn.MaxPool2d(3, stride=2)
        self.branch3x3_conv = BasicConv2d(64, 96, kernel_size=3, stride=2)

        self.branch7x7a = nn.Sequential(BasicConv2d(160, 64, kernel_size=1),
                                        BasicConv2d(64, 96, kernel_size=3))
        self.branch7x7b = nn.Sequential(BasicConv2d(160, 64, kernel_size=1),
                                        BasicConv2d(64, 64, kernel_size=(7, 1), padding=(3, 0)),
                                        BasicConv2d(64, 64, kernel_size=(1, 7), padding=(0, 3)),
                                        BasicConv2d(64, 96, kernel_size=3))

        self.branchpoola = BasicConv2d(192, 192, kernel_size=3, stride=2)
        self.branchpoolb = nn.MaxPool2d(3, stride=2)

    def forward(self, x):
        x = self.conv1(x)
        x = [self.branch3x3_pool(x),
             self.branch3x3_conv(x)]
        x = torch.cat(x, 1)

        x = [self.branch7x7a(x),
             self.branch7x7b(x)]
        x = torch.cat(x, 1)

        x = [self.branchpoola(x),
             self.branchpoolb(x)]
        x = torch.cat(x, 1)
        return x

class InceptionA(nn.Module):
    # Figure 4.
    def __init__(self, input_channels):
        super().__init__()

        self.branchpool = nn.Sequential(nn.AvgPool2d(kernel_size=3, stride=1, padding=1),
                                        BasicConv2d(input_channels, 96, kernel_size=1))

        self.branch1x1 = BasicConv2d(input_channels, 96, kernel_size=1)

        self.branch3x3 = nn.Sequential(BasicConv2d(input_channels, 64, kernel_size=1),
                                       BasicConv2d(64, 96, kernel_size=3, padding=1))

        self.branch3x3dbl = nn.Sequential(BasicConv2d(input_channels, 64, kernel_size=1),
                                          BasicConv2d(64, 96, kernel_size=3, padding=1),
                                          BasicConv2d(96, 96, kernel_size=3, padding=1))

    def forward(self, x):
        x = [self.branchpool(x), self.branch1x1(x), self.branch3x3(x), self.branch3x3dbl(x)]
        return torch.cat(x, 1)

class ReductionA(nn.Module):
    # Figure 7.
    # The k, l, m, n numbers represent filter bank sizes which can be looked up in Table 1.
    def __init__(self, input_channels, k, l, m, n):
        super().__init__()

        self.branchpool = nn.MaxPool2d(kernel_size=3, stride=2)
        self.branch3x3 = BasicConv2d(input_channels, n, kernel_size=3, stride=2)
        self.branch3x3dbl = nn.Sequential(BasicConv2d(input_channels, k, kernel_size=1),
                                          BasicConv2d(k, l, kernel_size=3, padding=1),
                                          BasicConv2d(l, m, kernel_size=3, stride=2))

    def forward(self, x):
        x = [self.branchpool(x), self.branch3x3(x), self.branch3x3dbl(x)]
        return torch.cat(x, 1)

class InceptionB(nn.Module):

    # Figure 5.
    def __init__(self, input_channels):
        super().__init__()

        self.branchpool = nn.Sequential(
            nn.AvgPool2d(3, stride=1, padding=1),
            BasicConv2d(input_channels, 128, kernel_size=1))

        self.branch1x1 = BasicConv2d(input_channels, 384, kernel_size=1)

        self.branch7x7 = nn.Sequential(
            BasicConv2d(input_channels, 192, kernel_size=1),
            BasicConv2d(192, 224, kernel_size=(1, 7), padding=(0, 3)),
            BasicConv2d(224, 256, kernel_size=(7, 1), padding=(3, 0))) # 논문은 여기도 1x7로 되어있음. 하지만 오류일 것으로 추정

        self.branch7x7dbl = nn.Sequential(
            BasicConv2d(input_channels, 192, kernel_size=1),
            BasicConv2d(192, 192, kernel_size=(1, 7), padding=(0, 3)),
            BasicConv2d(192, 224, kernel_size=(7, 1), padding=(3, 0)),
            BasicConv2d(224, 224, kernel_size=(1, 7), padding=(0, 3)),
            BasicConv2d(224, 256, kernel_size=(7, 1), padding=(3, 0)))

    def forward(self, x):
        x = [self.branchpool(x), self.branch1x1(x), self.branch7x7(x), self.branch7x7dbl(x)]
        return torch.cat(x, 1)

class ReductionB(nn.Module):
    # Figure 8.
    def __init__(self, input_channels):
        super().__init__()

        self.branchpool = nn.MaxPool2d(kernel_size=3, stride=2)

        self.branch3x3 = nn.Sequential(
            BasicConv2d(input_channels, 192, kernel_size=1),
            BasicConv2d(192, 192, kernel_size=3, stride=2))

        self.branch7x7 = nn.Sequential(
            BasicConv2d(input_channels, 256, kernel_size=1),
            BasicConv2d(256, 256, kernel_size=(1, 7), padding=(0, 3)),
            BasicConv2d(256, 320, kernel_size=(7, 1), padding=(3, 0)),
            BasicConv2d(320, 320, kernel_size=3, stride=2))

    def forward(self, x):
        x = [self.branchpool(x), self.branch3x3(x), self.branch7x7(x)]
        return torch.cat(x, 1)

class InceptionC(nn.Module):
    # Figure 6.
    def __init__(self, input_channels):
        super().__init__()

        self.branchpool = nn.Sequential(
            nn.AvgPool2d(kernel_size=3, stride=1, padding=1),
            BasicConv2d(input_channels, 256, kernel_size=1))

        self.branch1x1 = BasicConv2d(input_channels, 256, kernel_size=1)

        self.branch3x3 = BasicConv2d(input_channels, 384, kernel_size=1)
        self.branch3x3a = BasicConv2d(384, 256, kernel_size=(1, 3), padding=(0, 1))
        self.branch3x3b = BasicConv2d(384, 256, kernel_size=(3, 1), padding=(1, 0))

        self.branch3x3dbl = nn.Sequential(
            BasicConv2d(input_channels, 384, kernel_size=1),
            BasicConv2d(384, 448, kernel_size=(1, 3), padding=(0, 1)),
            BasicConv2d(448, 512, kernel_size=(3, 1), padding=(1, 0)))
        self.branch3x3dbla = BasicConv2d(512, 256, kernel_size=(3, 1), padding=(1, 0))
        self.branch3x3dblb = BasicConv2d(512, 256, kernel_size=(1, 3), padding=(0, 1))

    def forward(self, x):
        branchpool = self.branchpool(x)

        branch1x1 = self.branch1x1(x)

        branch3x3 = self.branch3x3(x)
        branch3x3 = [self.branch3x3a(branch3x3),
                     self.branch3x3b(branch3x3)]
        branch3x3 = torch.cat(branch3x3, 1)

        branch3x3dbl = self.branch3x3dbl(x)
        branch3x3dbl = [self.branch3x3dbla(branch3x3dbl),
                        self.branch3x3dblb(branch3x3dbl)]
        branch3x3dbl = torch.cat(branch3x3dbl, 1)

        outputs = [branch1x1, branch3x3, branch3x3dbl, branchpool]

        return torch.cat(outputs, 1)

class InceptionV4(nn.Module):
    # Figure 9.
    def __init__(self, A, B, C, k=192, l=224, m=256, n=384, class_nums=1000):
        super().__init__()
        self.stem = Inception_Stem()
        self.inception_a = nn.Sequential(*[InceptionA(384) for _ in range(A)])
        self.reduction_a = ReductionA(384, k, l, m, n)
        self.inception_b = nn.Sequential(*[InceptionB(1024) for _ in range(B)])
        self.reduction_b = ReductionB(1024)
        self.inception_c = nn.Sequential(*[InceptionC(1536) for _ in range(C)])
        self.avgpool = nn.AdaptiveAvgPool2d((1,1))
        self.dropout = nn.Dropout2d(0.2)
        self.linear = nn.Linear(1536, class_nums)

    def forward(self, x):
        x = self.stem(x)
        x = self.inception_a(x)
        x = self.reduction_a(x)
        x = self.inception_b(x)
        x = self.reduction_b(x)
        x = self.inception_c(x)
        x = self.avgpool(x)
        x = self.dropout(x)
        x = torch.flatten(x,1)
        x = self.linear(x)
        return x
~~~

<br/>

  - 모델 인스턴스화 및 실행하기(Inception Net V4)
~~~py
model = InceptionV4(4, 7, 3)
# print(model)
!pip install torchinfo
from torchinfo import summary
summary(model, input_size=(2,3,299,299), device='cpu')

x = model(torch.randn(2,3,299,299))
print(x.shape)
~~~

<br/>

  - 모델 코드 확인하기(Inception-ResNet V2)
~~~py
import torch
from torch import nn

class InceptionResNetA(nn.Module):
    # Figure 16.
    def __init__(self, input_channels):
        super().__init__()

        self.branch1x1 = BasicConv2d(input_channels, 32, kernel_size=1)
        self.branch3x3 = nn.Sequential(
            BasicConv2d(input_channels, 32, kernel_size=1),
            BasicConv2d(32, 32, kernel_size=3, padding=1))
        self.branch3x3dbl = nn.Sequential(
            BasicConv2d(input_channels, 32, kernel_size=1),
            BasicConv2d(32, 48, kernel_size=3, padding=1),
            BasicConv2d(48, 64, kernel_size=3, padding=1))
        self.reduction1x1 = nn.Conv2d(128, 384, kernel_size=1)
        self.bn = nn.BatchNorm2d(384)

        self.shortcut = nn.Sequential(nn.Conv2d(input_channels, 384, kernel_size=1),
                                      nn.BatchNorm2d(384))
        self.relu = nn.ReLU(inplace=True)

    def forward(self, x):
        residual = [self.branch1x1(x),
                    self.branch3x3(x),
                    self.branch3x3dbl(x)]
        residual = torch.cat(residual, 1)
        residual = self.reduction1x1(residual) * 0.1 # Figure 20. 에 맞게 이 모듈에만 0.1이 없길래 추가함
        residual = self.bn(residual)

        shortcut = self.shortcut(x)

        output = self.relu(residual + shortcut)
        return output

class InceptionResNetReductionA(nn.Module):
    # Figure 7.
    # The k, l, m, n numbers represent filter bank sizes which can be looked up in Table 1.
    def __init__(self, input_channels, k, l, m, n):
        super().__init__()

        self.branchpool = nn.MaxPool2d(kernel_size=3, stride=2)
        self.branch3x3 = BasicConv2d(input_channels, n, kernel_size=3, stride=2)
        self.branch3x3dbl = nn.Sequential(BasicConv2d(input_channels, k, kernel_size=1),
                                          BasicConv2d(k, l, kernel_size=3, padding=1),
                                          BasicConv2d(l, m, kernel_size=3, stride=2))

    def forward(self, x):
        x = [self.branchpool(x), self.branch3x3(x), self.branch3x3dbl(x)]
        return torch.cat(x, 1)

class InceptionResNetB(nn.Module):
    # Figure 17.
    def __init__(self, input_channels):
        super().__init__()

        self.branch1x1 = BasicConv2d(input_channels, 192, kernel_size=1)
        self.branch7x7 = nn.Sequential(
            BasicConv2d(input_channels, 128, kernel_size=1),
            BasicConv2d(128, 160, kernel_size=(1, 7), padding=(0, 3)),
            BasicConv2d(160, 192, kernel_size=(7, 1), padding=(3, 0)))
        self.reduction1x1 = nn.Conv2d(384, 1154, kernel_size=1)
        self.bn = nn.BatchNorm2d(1154)

        self.shortcut = nn.Sequential(nn.Conv2d(input_channels, 1154, kernel_size=1),
                                      nn.BatchNorm2d(1154))
        self.relu = nn.ReLU(inplace=True)

    def forward(self, x):
        residual = [self.branch1x1(x),
                    self.branch7x7(x)]
        residual = torch.cat(residual, 1)
        residual = self.reduction1x1(residual) * 0.1 # Figure 20.
        residual = self.bn(residual)

        shortcut = self.shortcut(x)

        output = self.relu(residual + shortcut)
        return output

class InceptionResNetReductionB(nn.Module):
    # Figure 18.
    def __init__(self, input_channels):
        super().__init__()

        self.branchpool = nn.MaxPool2d(3, stride=2)

        self.branch3x3a = nn.Sequential(
            BasicConv2d(input_channels, 256, kernel_size=1),
            BasicConv2d(256, 384, kernel_size=3, stride=2))

        self.branch3x3b = nn.Sequential(
            BasicConv2d(input_channels, 256, kernel_size=1),
            BasicConv2d(256, 288, kernel_size=3, stride=2))

        self.branch3x3dbl = nn.Sequential(
            BasicConv2d(input_channels, 256, kernel_size=1),
            BasicConv2d(256, 288, kernel_size=3, padding=1),
            BasicConv2d(288, 320, kernel_size=3, stride=2))

    def forward(self, x):
        x = [self.branch3x3a(x), self.branch3x3b(x), self.branch3x3dbl(x), self.branchpool(x)]
        return torch.cat(x, 1)

class InceptionResNetC(nn.Module):
    # Figure 19.
    def __init__(self, input_channels):
        super().__init__()

        self.branch1x1 = BasicConv2d(input_channels, 192, kernel_size=1)
        self.branch3x3 = nn.Sequential(
            BasicConv2d(input_channels, 192, kernel_size=1),
            BasicConv2d(192, 224, kernel_size=(1, 3), padding=(0, 1)),
            BasicConv2d(224, 256, kernel_size=(3, 1), padding=(1, 0)))
        self.reduction1x1 = nn.Conv2d(448, 2048, kernel_size=1)
        self.bn = nn.BatchNorm2d(2048)

        self.shortcut = nn.Sequential(nn.Conv2d(input_channels, 2048, kernel_size=1),
                                      nn.BatchNorm2d(2048))
        self.relu = nn.ReLU(inplace=True)

    def forward(self, x):
        residual = [self.branch1x1(x),
                    self.branch3x3(x)]
        residual = torch.cat(residual, 1)
        residual = self.reduction1x1(residual) * 0.1 # Figure 20.
        residual = self.bn(residual)

        shortcut = self.shortcut(x)

        output = self.relu(residual + shortcut)
        return output

class InceptionResNetV2(nn.Module):
    # Figure 15.
    def __init__(self, A, B, C, k=256, l=256, m=384, n=384, class_nums=1000):
        super().__init__()
        self.stem = Inception_Stem()
        self.inception_resnet_a = nn.Sequential(*[InceptionResNetA(384) for _ in range(A)])
        self.reduction_a = InceptionResNetReductionA(384, k, l, m, n)
        self.inception_resnet_b = nn.Sequential(InceptionResNetB(1152),
                                                *[InceptionResNetB(1154) for _ in range(B-1)])
        self.reduction_b = InceptionResNetReductionB(1154)
        self.inception_resnet_c = nn.Sequential(InceptionResNetC(2146),
                                                *[InceptionResNetC(2048) for _ in range(C-1)])
        self.avgpool = nn.AdaptiveAvgPool2d((1, 1))
        self.dropout = nn.Dropout2d(0.2)
        self.linear = nn.Linear(2048, class_nums)

    def forward(self, x):
        x = self.stem(x)
        x = self.inception_resnet_a(x)
        x = self.reduction_a(x)
        x = self.inception_resnet_b(x)
        x = self.reduction_b(x)
        x = self.inception_resnet_c(x)
        x = self.avgpool(x)
        x = self.dropout(x)
        x = torch.flatten(x,1)
        x = self.linear(x)
        return x
~~~

<br/>

  - 모델 인스턴스화 및 실행하기(Inception-ResNet V2)
~~~py
model = InceptionResNetV2(5, 10, 5)
# print(model)
summary(model, input_size=(2,3,299,299), device='cpu')

x = torch.randn(2,3,299,299)
print(model(x).shape)
~~~

###### [CNN](#CNN)
###### [Top](#top)

<br/>
<br/>

# WideResNet
  - 깊게 하지 말고 넓게 해보자라는것
    - a,b는 ResNet
    - c,b는 논문에서 제안하는것(1x1 없이 3x3 두 번으로만 + dropout 사이에 추가)

<img width="1614" height="574" alt="image" src="https://github.com/user-attachments/assets/7e510574-aba9-41c3-885c-ee43ed7af8dc" />

<br/>

  - 전체구조
    - WRN-40-8’ => N=6, k=8 이라는 뜻

<img width="970" height="513" alt="image" src="https://github.com/user-attachments/assets/6da0501a-c0ca-40b2-8e60-5aa5c1a81653" />

<br/>

  - ResNet-1001 과의 비교
    - 28-10 은 파라미터 수가 3.6배니까 더 잘나오는것이 어쩌면 정상
    - 16-8은 파라미터가 비슷한데 성능이 더 좋은것을 알 수 있음
      - 그러나 이것도, dataset (32x32 짜리)이기 때문에 더 깊을 필요가 없음을 시사 하며, ResNet-1001의 1001층짜리가 너무 오버스팩으로 단순한 자료셋에 잘 맞지 않을 수도 있지 않나 생각해볼 수 있음
      - 층을 1001층까지 깊게 쌓는 것을 멈추고 채널을 넓히는 방식으로 얕고 넓게(Shallow & Wide) 가자는 것이 WRN의 주장이지만, 그 실험 결과가 CIFAR-10이라는 아주 작은 해상도의 데이터셋에서 측정되었기 때문에 나온 착시효과일 수도 있다는 맹점
        - 16 층 짜리가 가지는 receptive field를 써도 충분히 커버 가능한 dataset (32x32 짜리) 였다는것
          - receptive field는, 3x3 사이즈의 필터(컨볼루션)를 기준으로, 스트라이드(Stride)는 1이라고 가정하면
          - 1층 통과: 처음 3x3 필터를 거치면 출력된 특성 맵의 픽셀 1개는 원본 이미지의 3x3 픽셀 영역 정보 담고 있음
          - 2층 통과: 그 다음 층에서 다시 3x3 필터를 적용. 방금 만들어진 1층의 픽셀 3x3개를 묶어서 봄, 그런데 1층의 픽셀 하나당 이미 원본의 3칸짜리 시야를 가지고 있으니까, 이걸 엮으면 양옆으로 1칸씩 더 넓어져서 총 5x5 영역의 정보를 담게됨

<img width="1293" height="576" alt="image" src="https://github.com/user-attachments/assets/81c7ec6c-722e-4516-98bc-a631ae3a3b11" />

<br/>

  - 모델 코드 확인하기(Inception-ResNet V2)
~~~py
import torch
from torch import nn

class WiderBlock(nn.Module):
    def __init__(self, in_channels, out_channels, stride=1, projection=None, drop_p=0.3):
        # drop_p = 0.3 for CIFAR, 0.4 for SVHN
        super().__init__()

        self.residual = nn.Sequential(nn.BatchNorm2d(in_channels),
                                      nn.ReLU(inplace=True),
                                      nn.Conv2d(in_channels, out_channels, 3, stride=stride, padding=1, bias = False),
                                      nn.BatchNorm2d(out_channels),
                                      nn.ReLU(inplace=True),
                                      nn.Dropout(drop_p),
                                      nn.Conv2d(out_channels, out_channels, 3, padding=1, bias = False))

        self.projection = projection
    def forward(self, x):

        residual = self.residual(x)

        if self.projection is not None:
            shortcut = self.projection(x)
        else:
            shortcut = x

        out = residual + shortcut # 엉! ReLU 였는데 ReLU 없음!
        return out

class WRN(nn.Module):
    def __init__(self, depth, k, num_classes=1000, init_weights=True):
        super().__init__()
        N = int((depth-4)/3/2)

        self.in_channels = 16

        self.conv1 = nn.Conv2d(3, 16, 3, padding=1, bias = False)
        # pre-act 구조에선 block 들어가기 전에 pool 있으면 conv-BN-relu-pool -> Bottleneck 이렇게
        # pooling이 없을 땐? conv -> Block 으로 바로 들어감 why?
        # conv-bn-relu -> Block 으로 넣으면 Block 에서 bn-relu를 만나서 bn-relu-bn-relu 이렇게 돼버린다!
        # (만약 맨처음에 bn-relu부터 통과시키면? 데이터 전처리에서 할 일을 하게 되는 셈)
        self.stage1 = self.make_stage(16*k, N, stride = 1)
        self.stage2 = self.make_stage(32*k, N, stride = 2)
        self.stage3 = self.make_stage(64*k, N, stride = 2)
        self.bn = nn.BatchNorm2d(64*k)
        self.relu = nn.ReLU(inplace=True)
        self.avg_pool = nn.AdaptiveAvgPool2d((1,1))
        self.fc = nn.Linear(64*k, num_classes)

        # weight initialization
        if init_weights:
            for m in self.modules():
                if isinstance(m, nn.Conv2d):
                    nn.init.kaiming_normal_(m.weight, mode='fan_out', nonlinearity='relu')
                    if m.bias is not None:
                        nn.init.constant_(m.bias, 0)
                elif isinstance(m, nn.Linear):
                    nn.init.normal_(m.weight, 0, 0.01)
                    nn.init.constant_(m.bias, 0)

    def forward(self, x):
        x = self.conv1(x)
        x = self.stage1(x)
        x = self.stage2(x)
        x = self.stage3(x)
        x = self.bn(x)
        x = self.relu(x)
        x = self.avg_pool(x)
        x = torch.flatten(x, start_dim=1)
        x = self.fc(x)
        return x

    def make_stage(self, out_channels, num_blocks, stride):

        if stride != 1 or self.in_channels != out_channels:
            projection = nn.Conv2d(self.in_channels, out_channels, 1, stride=stride, bias = False)
                # nn.BatchNorm2d(inner_channels * block.expansion)) # pre-act 라서 여기선 생략
        else:
            projection = None

        layers = []
        layers += [WiderBlock(self.in_channels, out_channels, stride, projection)] # stride=2, 점선 연결은 첫 block에서만
        self.in_channels = out_channels
        for _ in range(1, num_blocks):
            layers += [WiderBlock(self.in_channels, out_channels)]

        return nn.Sequential(*layers)
~~~

<br/>

  - 모델 인스턴스화 및 실행하기(Inception-ResNet V2)
~~~py
model = WRN(depth=28, k=10, num_classes=10)
# print(model)
!pip install torchinfo
from torchinfo import summary
summary(model, (2,3, 224, 224), device="cpu")

x = torch.randn(2,3,32,32)
print(model(x).shape)
~~~

###### [CNN](#CNN)
###### [Top](#top)

<br/>
<br/>

# ResNeXt
  - ResNet의 BottleNeck 에서 3x3 conv 에 그냥 conv 말고 Grouped conv 를 사용
    - 들어오는 채널을 그룹으로 쪼개서 각 그룹 별로 따로 conv 하는 것(단, 각 그룹은 서로 동일한 개수의 특징 맵을 얻음)
    - 입력 채널 = 128 / nn.Conv2d(128, 512, 3, groups=1) 의 weight shape = 512x128x3x3
    - 입력 채널 = 128 / nn.Conv2d(128, 512, 3, groups=2) 의 weight shape = 2*256x128/2x3x3
      - 128에서 512채널로 바꿔나가고 싶으니까 필터 갯수는 512개여야 겠지 그래서 weight shape 갯수는 512개 그리고, 128개로 채널이 들어오니까 그거에 대응할 수 있어야 하니 128두께어야 하고 그래서 weight shape = 512x128x3x3 이여야 하는데 groups=2이기 때문에, 펄터의 두께 128개를 절반나누고, 그리고 필터도 절반 나눠서 각각 따로 보기 때문에 256x64x3x3이 된다는 거지? 그리고 필터1개당 1개씩 특징이 나오니까 256개 +256개 하면 512되것
      - 즉, 그룹 수만큼 파라미터가 줄어든다 / 512x128x3x3 = 589,824 / 256x64x3x3 + 256x64x3x3 = 294,912
    - Grouped conv 덕에 파라미터를 절약했고 다른 곳에 투자할 수 있게 됨 -> 채널수에 투자를더함! -> Bottleneck 이 줄어듬
      - inner채널쪽에 채널수가 2배가됨
      - Bottleneck
        - 일반적인 방식 (BasicBlock)그냥 무식하게 3x3 필터로 처음부터 끝까지 때려버리면 파라미터가 엄청남. 256 \times 256 \times 3 \times 3 = 589,824개
        - 보틀넥 방식 (Bottleneck)1단계 (1x1 축소): 256 \times 64 \times 1 \times 1 = 16,384개 / 2단계 (3x3 연산): 64 \times 64 \times 3 \times 3 = 36,864개 / 3단계 (1x1 확장): 64 \times 256 \times 1 \times 1 = 16,384개 / 세 단계를 다 합치면 총 69,632개

<img width="1919" height="801" alt="image" src="https://github.com/user-attachments/assets/a934b286-1485-46ee-a3e0-599e24bde3f3" />

<br/>

  - 이전까지 딥러닝 성능을 올리는 방법은 층을 깊게(Depth) 쌓거나, 채널을 넓게(Width) 늘리는 것 두 가지뿐, ResNeXt는 여기에 카디널리티라는 세 번째 차원을 도입한다, 카디널리티는 수학 용어로 집합의 크기라는 뜻인데, 딥러닝에서는 변환 그룹의 수, 즉 한 블록 안에서 데이터를 몇 갈래로 쪼갤 것인가를 의미. 논문에서는 층을 깊게 하거나 넓히는 것보다, 이 갈래(카디널리티)를 늘리는 것이 성능 향상에 훨씬 더 강력하다고 증명함

<br/>

  - 모델 코드 확인하기
~~~py
import torch
from torch import nn

class Bottleneck(nn.Module):
    expansion = 2 # 클래스 속성
    def __init__(self, in_channels, inner_channels, cardinality, stride = 1, projection = None):
        super().__init__()

        self.residual = nn.Sequential(nn.Conv2d(in_channels, inner_channels, 1, bias=False),
                                      nn.BatchNorm2d(inner_channels),
                                      nn.ReLU(inplace=True),
                                      nn.Conv2d(inner_channels, inner_channels, 3, stride=stride, padding=1, groups = cardinality, bias=False),
                                      nn.BatchNorm2d(inner_channels),
                                      nn.ReLU(inplace=True),
                                      nn.Conv2d(inner_channels, inner_channels * self.expansion, 1, bias=False),
                                      nn.BatchNorm2d(inner_channels * self.expansion))

        self.projection = projection
        self.relu = nn.ReLU(inplace=True)

    def forward(self, x):
        residual = self.residual(x)

        if self.projection is not None:
            shortcut = self.projection(x)
        else:
            shortcut = x

        out = self.relu(residual + shortcut)
        return out

class ResNeXt(nn.Module):
    def __init__(self, block, num_block_list, cardinality, num_classes = 1000, zero_init_residual = True):
        super().__init__()

        self.in_channels = 64
        self.cardinality = cardinality

        self.conv1 = nn.Conv2d(3, 64, kernel_size=7, stride=2, padding=3, bias=False)
        self.bn1 = nn.BatchNorm2d(64)
        self.relu = nn.ReLU(inplace=True) # 좀더 메모리 효율적
        self.maxpool = nn.MaxPool2d(kernel_size=3, stride=2, padding=1)
        self.stage1 = self.make_stage(block, 128, num_block_list[0], stride=1)
        self.stage2 = self.make_stage(block, 256, num_block_list[1], stride=2)
        self.stage3 = self.make_stage(block, 512, num_block_list[2], stride=2)
        self.stage4 = self.make_stage(block, 1024, num_block_list[3], stride=2)
        self.avgpool = nn.AdaptiveAvgPool2d((1, 1))
        self.fc = nn.Linear(1024 * block.expansion, num_classes)

        for m in self.modules():
            if isinstance(m, nn.Conv2d):
                nn.init.kaiming_normal_(m.weight, mode="fan_out", nonlinearity="relu")

        # Zero-initialize the last BN in each residual branch,
        # so that the residual branch starts with zeros, and each residual block behaves like an identity.
        # This improves the model by 0.2~0.3% according to https://arxiv.org/abs/1706.02677
        if zero_init_residual:
            for m in self.modules():
                if isinstance(m, block):
                    nn.init.constant_(m.residual[-1].weight, 0)

    def make_stage(self, block, inner_channels, num_blocks, stride = 1):

        if stride != 1 or self.in_channels != inner_channels * block.expansion:
            projection = nn.Sequential(
                nn.Conv2d(self.in_channels, inner_channels * block.expansion, 1, stride=stride, bias=False),
                nn.BatchNorm2d(inner_channels * block.expansion))
        else:
            projection = None

        layers = []
        layers += [block(self.in_channels, inner_channels, self.cardinality, stride, projection)] # projection은 첫 block에서만
        self.in_channels = inner_channels * block.expansion
        for _ in range(1, num_blocks):
            layers += [block(self.in_channels, inner_channels, self.cardinality)]

        return nn.Sequential(*layers)

    def forward(self, x):
        x = self.conv1(x)
        x = self.bn1(x)
        x = self.relu(x)
        x = self.maxpool(x)

        x = self.stage1(x)
        x = self.stage2(x)
        x = self.stage3(x)
        x = self.stage4(x)

        x = self.avgpool(x)
        x = torch.flatten(x, 1)
        x = self.fc(x)
        return x
~~~

<br/>

  - 모델 인스턴스화 및 실행하기
~~~py
def resnext50(**kwargs):
    return ResNeXt(Bottleneck, [3, 4, 6, 3], cardinality=32, **kwargs)

def resnext101(**kwargs):
    return ResNeXt(Bottleneck, [3, 4, 23, 3], cardinality=32, **kwargs)

model = resnext50()
# print(model)
!pip install torchinfo
from torchinfo import summary
summary(model, input_size=(2,3,224,224), device='cpu')

x = torch.randn(2,3,224,224)
print(model(x).shape)
~~~

###### [CNN](#CNN)
###### [Top](#top)

<br/>
<br/>

# DenseNet
  - ResNet의 skip-connection은 더하니까 정보가 뭉개지게 된다
  - 그러면 더하지 말고 concat! 이전의 feature map들을 모두 사용하자
  - 이전 연구를 반영, full pre-activation 사용
  - concat을 계속 하다보면 파라미터가 너무 많아지는 문제발생
    - 해결1 : 새로운 정보의 양을 엄격하게 통제: Growth Rate (k), 그러면 거기서 뽑힌 특징들은 알짜배기만 뽑히게 된다
    - 해결2 : 중간중간 메모리 대청소: Transition Layer, 아무리 $k$를 작게 유지해도, 블록 안에서 덧붙이기를 수십 번 반복하면 결국 데이터 덩어리는 뚱뚱해질 수밖에 없다
      - 1x1 Conv로 채널 압축: 그동안 누적되어 뚱뚱해진 채널의 개수를 절반(0.5배)으로 확 깎아버린다. 보틀넥(Bottleneck) 기법활용 -> 점진적으로 채널을 줄이는 방식을 사용한다
      - Pooling으로 해상도 압축: Average Pooling 연산을 거쳐서 이미지의 가로세로 크기를 절반으로 줄여준다.

<br/>

  - 전체과정
    - k = 32, 첫 conv에서 필터 2k 개 사용, “conv” = BN-ReLU-conv 가 함축된 것
    - 따라서, feature map 개수 추이는 (121 기준),  3 -> 64 -> 256 -> 128 -> 512 -> 256 -> 1024 -> 512 -> 1024

<img width="1824" height="978" alt="image" src="https://github.com/user-attachments/assets/dadd40c4-2c91-435e-bca9-0ef6dd2e09f9" />

<br/>

  - DenseNet모델은 Loss Landscape를 많이 해결한 모델이다, skip-connection 과 비슷한 (혹은 더 좋은?) 효과

<img width="1092" height="476" alt="image" src="https://github.com/user-attachments/assets/64f09f72-fc7f-4a3f-9947-4a72c1c1c6ad" />

<br/>

  - 모델 코드 확인하기
~~~py
import torch
import torch.nn as nn

class Bottleneck(nn.Module):
    def __init__(self, in_channels, k):
        super().__init__()

        self.residual = nn.Sequential(nn.BatchNorm2d(in_channels),
                                      nn.ReLU(inplace=True),
                                      nn.Conv2d(in_channels, 4*k, kernel_size=1, bias=False),
                                      nn.BatchNorm2d(4*k),
                                      nn.ReLU(inplace=True),
                                      nn.Conv2d(4*k, k, kernel_size=3, padding=1, bias=False))

    def forward(self, x):
        return torch.cat([x, self.residual(x)], 1) # x가 바로 직전 채널뿐만 아니라 그 전 것도 모두 가지고 있음

class Transition(nn.Module):
    def __init__(self, in_channels, out_channels):
        super().__init__()

        self.transition = nn.Sequential(nn.BatchNorm2d(in_channels),
                                        nn.ReLU(inplace=True),
                                        nn.Conv2d(in_channels, out_channels, 1, bias=False),
                                        nn.AvgPool2d(2))

    def forward(self, x):
        return self.transition(x)

#DesneNet-BC
#B stands for bottleneck layer(BN-RELU-CONV(1x1)-BN-RELU-CONV(3x3))
#C stands for compression factor(0< theta ≤1)
class DenseNet(nn.Module):
    def __init__(self, num_block_list, growth_rate, reduction=0.5, num_class=1000):
        super().__init__()
        self.k = growth_rate

        inner_channels = 2 * self.k

        self.conv1 = nn.Sequential(nn.Conv2d(3, inner_channels, kernel_size=7, stride=2, padding=3, bias=False),
                                   nn.BatchNorm2d(inner_channels),
                                   nn.ReLU(inplace=True),
                                   nn.MaxPool2d(kernel_size=3, stride=2, padding=1))

        layers = []
        for num_blocks in num_block_list[:-1]:
            layers += [self.make_dense_block(inner_channels, num_blocks)]
            inner_channels +=  num_blocks * self.k

            out_channels = int(reduction * inner_channels)
            layers += [Transition(inner_channels, out_channels)]
            inner_channels = out_channels

        layers += [self.make_dense_block(inner_channels, num_block_list[-1])]
        inner_channels += num_block_list[-1] * self.k

        layers += [nn.BatchNorm2d(inner_channels)]
        layers += [nn.ReLU(inplace=True)]
        self.features = nn.Sequential(*layers)
        self.avgpool = nn.AdaptiveAvgPool2d((1, 1))
        self.linear = nn.Linear(inner_channels, num_class)

        # Official init from torch repo.
        for m in self.modules():
            if isinstance(m, nn.Conv2d):
                nn.init.kaiming_normal_(m.weight)
            elif isinstance(m, nn.Linear):
                nn.init.constant_(m.bias, 0)

    def forward(self, x):
        output = self.conv1(x)
        output = self.features(output)
        output = self.avgpool(output)
        output = torch.flatten(output, start_dim=1)
        output = self.linear(output)
        return output

    def make_dense_block(self, in_channels, nblocks):
        dense_block = []
        for _ in range(nblocks):
            dense_block += [ Bottleneck(in_channels, self.k) ]
            in_channels += self.k
        return nn.Sequential(*dense_block)
~~~

<br/>

  - 모델 인스턴스화 및 실행하기
~~~py
def densenet121(**kwargs):
    return DenseNet([6,12,24,16], growth_rate=32, **kwargs)

def densenet169(**kwargs):
    return DenseNet([6,12,32,32], growth_rate=32, **kwargs)

def densenet201(**kwargs):
    return DenseNet([6,12,48,32], growth_rate=32, **kwargs)

def densenet264(**kwargs):
    return DenseNet([6,12,64,48], growth_rate=32, **kwargs)

model = densenet264()
# print(model)
!pip install torchinfo
from torchinfo import summary
summary(model, input_size=(2,3,224,224), device='cpu')

x = torch.randn(2,3,224,224)
print(model(x).shape)
~~~

###### [CNN](#CNN)
###### [Top](#top)

<br/>
<br/>

# SE Net
  - 기존 네트웍(ResNet 등)에 끼워쓸 수 있는 SE block 제안
  - Squeeze-Excitation 의 약자
    - GAP 하고 (Squeeze) FC 두 층 통과시킨 것 (Excitation) 을 각 특징 맵에다 곱해줌
  - SE 블록의 3단계 동작 원리
    - SE 블록은 크게 세 가지 과정을 거쳐 채널의 가중치를 재조정합니다.
    - 1.Squeeze (압축)
      - 특징 맵의 공간적 정보(H x W)를 1 x 1 크기로 압축합니다. 주로 Global Average Pooling(GAP) 연산을 사용하여, 각 채널이 가진 공간상의 전체적인 통계값을 하나의 숫자로 요약합니다. 이를 통해 전역적인 수용 영역(Global Receptive Field)에 대한 정보를 확보합니다.
    - 2.Excitation (여기/활성화)
      - 압축된 정보를 바탕으로 각 채널 간의 의존성을 파악하고 중요도를 계산합니다. 이 단계에서는 주로 두 개의 Fully Connected(FC) Layer가 사용됩니다. 파라미터 수와 연산량을 줄이기 위해 첫 번째 FC 레이어에서 채널 차원을 일정 비율로 축소(Bottleneck)했다가, 두 번째 FC 레이어에서 원래 채널 수로 복구합니다. 마지막에 Sigmoid 활성화 함수를 통과시켜 0과 1 사이의 가중치 값을 얻어냅니다.
    - 3.Scale / Reweight (재보정)
      - 계산된 가중치(0~1 사이의 값)를 원래의 특징 맵의 각 채널에 각각 곱해줍니다. 이 과정을 거치면 중요한 정보를 담은 채널의 피처 값은 유지되거나 증폭되고, 정보력이 떨어지거나 불필요한 노이즈 채널의 값은 0에 가깝게 억제됩니다.
    - 파라미터가 너무 많이 늘어나는 것을 막기 위해 reduction ratio r = 16 으로 제안

<br/>

<img width="990" height="309" alt="image" src="https://github.com/user-attachments/assets/d991bd4f-0305-483a-9bac-01ad239628f5" />

<br/>

  - 1x1 conv 랑 다른 점
    - 1x1 conv는 Feature map(특징 맵) 간의 weighted sum(가중합) 이지만, SE Net에서 하는 작업은 feature map weighing
    - 1x1 Conv는 채널을 압축하고, Squeeze(GAP)는 공간을 압축

<br/>

  - ResNet 에 적용한다면?
    - Residual 뒤 쪽으로 추가하면 끝

<br/>

<img width="493" height="482" alt="image" src="https://github.com/user-attachments/assets/38d17049-307f-44aa-bb3e-d98646ece373" />

<br/>

  - 전체 구조
    - SE Net은 전체 구조랄게 없긴 하다
    - 아래 사진은 이전에 있었던 SE-ResNet, SE-ResNeXt모델에 SE Net을 적용하는 것을 보여준다, 마지막에 블럭 처럼 끼워 넣는것 fc[~~] 모양이 그것

<br/>

<img width="928" height="417" alt="image" src="https://github.com/user-attachments/assets/1ae09e4b-3d62-49dc-ba95-35ca95d2da74" />

<br/>

  - ResNeXt-50을 기준으로 보면 연산량은 4.24 -> 4.25 로 아주 조금만 늘었는데  4.24 -> 7.99 으로 확 늘린 ResNeXt-101 보다도 성능이 좋다,효율적으로 파라미터 수를 늘렸다는 증거
    - CFLOPs : 연산량
    - 오른쪽에 SENet표아래가 SE Net을 적용한 것이라는것

<br/>

<img width="1065" height="363" alt="image" src="https://github.com/user-attachments/assets/4373330f-1130-49eb-8109-2f7918e48d7e" />

<br/>

  - SE를 넣는 순서에대한 고찰
    - 이리 저리 위치 바꿔보며 비교! 기존 방식이 나쁘지 않다. 앞으로 하면 아주 조금 더 좋다

<br/>

<img width="1027" height="253" alt="image" src="https://github.com/user-attachments/assets/964519c0-41ac-4a07-a1c2-14d1d2fc50a1" />

<br/>

  - 즉, GAP를 채널1장에서 전체 행열에 적용해서 가장 중요한 정보를 남기고, 그 정보를 다시 원래 있는 행렬에 각각 곱합으로써 그 안에서의 중요도를 재 판단하게 해준다


<br/>

  - 모델 코드 확인하기
    - SE_Bottleneck 부분 마지막에 SEBlock 한줄
    - SE_ResNet 부분은 사용시에 SE_ResNet(SE_Bottleneck, ) 이렇게 인자로 넘김
~~~py
import torch
from torch import nn

class SEBlock(nn.Module):
    def __init__(self, in_channels, r = 16):
        super().__init__()
        self.squeeze = nn.AdaptiveAvgPool2d((1,1))
        self.excitation = nn.Sequential(nn.Linear(in_channels, in_channels // r),
                                        nn.ReLU(inplace=True),
                                        nn.Linear(in_channels // r, in_channels),
                                        nn.Sigmoid())

    def forward(self, x):
        SE = self.squeeze(x)
        SE = SE.reshape(x.shape[0],x.shape[1]) # 개x채로 바꿔주기 위함
        SE = self.excitation(SE)
        SE = SE.unsqueeze(dim=2).unsqueeze(dim=3) # 개채11로 만들어주기 위함
        x = x * SE
        return x

class SE_Bottleneck(nn.Module):
    expansion = 4 # 클래스 속성
    def __init__(self, in_channels, inner_channels, stride = 1, projection = None):
        super().__init__()

        self.residual = nn.Sequential(nn.Conv2d(in_channels, inner_channels, 1, bias=False),
                                      nn.BatchNorm2d(inner_channels),
                                      nn.ReLU(inplace=True),
                                      nn.Conv2d(inner_channels, inner_channels, 3, stride=stride, padding=1, bias=False),
                                      nn.BatchNorm2d(inner_channels),
                                      nn.ReLU(inplace=True),
                                      nn.Conv2d(inner_channels, inner_channels * self.expansion, 1, bias=False),
                                      nn.BatchNorm2d(inner_channels * self.expansion))
        self.seblock = SEBlock(inner_channels * self.expansion)

        self.projection = projection
        self.relu = nn.ReLU(inplace=True)

    def forward(self, x):

        residual = self.residual(x)
        residual = self.seblock(residual)

        if self.projection is not None:
            shortcut = self.projection(x)
        else:
            shortcut = x

        out = self.relu(residual + shortcut)
        return out

class SE_ResNet(nn.Module):
    def __init__(self, block, num_block_list, num_classes = 1000, zero_init_residual = True):
        super().__init__()

        self.in_channels = 64

        self.conv1 = nn.Conv2d(3, 64, kernel_size=7, stride=2, padding=3, bias=False)
        self.bn1 = nn.BatchNorm2d(64)
        self.relu = nn.ReLU(inplace=True) # 좀더 메모리 효율적
        self.maxpool = nn.MaxPool2d(kernel_size=3, stride=2, padding=1)
        self.stage1 = self.make_stage(block, 64, num_block_list[0], stride=1)
        self.stage2 = self.make_stage(block, 128, num_block_list[1], stride=2)
        self.stage3 = self.make_stage(block, 256, num_block_list[2], stride=2)
        self.stage4 = self.make_stage(block, 512, num_block_list[3], stride=2)
        self.avgpool = nn.AdaptiveAvgPool2d((1, 1))
        self.fc = nn.Linear(512 * block.expansion, num_classes)

        for m in self.modules():
            if isinstance(m, nn.Conv2d):
                nn.init.kaiming_normal_(m.weight, mode="fan_out", nonlinearity="relu")

        # Zero-initialize the last BN in each residual branch,
        # so that the residual branch starts with zeros, and each residual block behaves like an identity.
        # This improves the model by 0.2~0.3% according to https://arxiv.org/abs/1706.02677
        if zero_init_residual:
            for m in self.modules():
                if isinstance(m, block):
                    nn.init.constant_(m.residual[-1].weight, 0)

    def make_stage(self, block, inner_channels, num_blocks, stride = 1):

        if stride != 1 or self.in_channels != inner_channels * block.expansion:
            projection = nn.Sequential(
                nn.Conv2d(self.in_channels, inner_channels * block.expansion, 1, stride=stride, bias=False),
                nn.BatchNorm2d(inner_channels * block.expansion))
        else:
            projection = None

        layers = []
        layers += [block(self.in_channels, inner_channels, stride, projection)] # projection은 첫 block에서만
        self.in_channels = inner_channels * block.expansion
        for _ in range(1, num_blocks):
            layers += [block(self.in_channels, inner_channels)]

        return nn.Sequential(*layers)

    def forward(self, x):
        x = self.conv1(x)
        x = self.bn1(x)
        x = self.relu(x)
        x = self.maxpool(x)

        x = self.stage1(x)
        x = self.stage2(x)
        x = self.stage3(x)
        x = self.stage4(x)

        x = self.avgpool(x)
        x = torch.flatten(x, 1)
        x = self.fc(x)
        return x
~~~

<br/>

  - 모델 인스턴스화 및 실행하기
~~~py
def se_resnet50(**kwargs):
    return SE_ResNet(SE_Bottleneck, [3, 4, 6, 3], **kwargs)

def se_resnet101(**kwargs):
    return SE_ResNet(SE_Bottleneck, [3, 4, 23, 3], **kwargs)

def se_resnet152(**kwargs):
    return SE_ResNet(SE_Bottleneck, [3, 8, 36, 3], **kwargs)

model = se_resnet152()
# print(model)
!pip install torchinfo
from torchinfo import summary
summary(model, input_size=(2,3,224,224), device='cpu')

x = torch.randn(2,3,224,224)
print(model(x).shape)
~~~

###### [CNN](#CNN)
###### [Top](#top)

<br/>
<br/>

# MobileNet V1
  - Depthwise separable conv 사용, 획기적으로 파라미터 수를 줄임
  - nn.Conv2d(3,16,3)
    - 이건 공간 축, 채널 축 둘 다에 대해서 정보를 엮은 것 인데, 이것을 따로 따로 하면 더 잘하지 않을까란 생각에서 출발
    - 공간 정보를 먼저 엮고 그다음에 채널 정보를 엮자는 생각
    - 파라미터 수 비교: 16 개 out 채널 만들 때 (ex nn.Conv2d(3,16,3))
    - 16x3x3x3 vs 3x3/3x3x3 + 16x3x1x1 -> 거의 6배 차이
    - 구현은?
      - nn.Sequential( nn.Conv2d(3,3,3, groups=3), nn.Conv2d(3,16,1)) 

<br/>

  - 전체 구조
    -  처음 빼고는 전부 DepSepConv
    -  Stride=2(물론 3x3에서)로 down sampling

  - DepSepConv 구조

<img width="226" height="270" alt="image" src="https://github.com/user-attachments/assets/fc82d8d4-d28d-4b46-876c-4c03ada7c9b9" />

<br/>
<br/>

<img width="485" height="554" alt="image" src="https://github.com/user-attachments/assets/1642bbad-a7fe-40b0-bbf6-a72c2fac726d" />

<br/>

  - Depthwise Separable 과 그냥 conv 비교
    - Accuracy는 크게 안 떨어지는 데 파라미터 수 7배차이

<img width="791" height="247" alt="image" src="https://github.com/user-attachments/assets/681d1f10-202b-4548-8b89-8a44d27bc970" />

<br/>

  - 무거운 Net과의 비교

<br/>

<img width="618" height="215" alt="image" src="https://github.com/user-attachments/assets/6ab4af1f-ff1c-4756-9d17-163cc047eb74" />

<br/>

  - 모델 코드 확인하기
~~~py
import torch
from torch import nn

class DepSepConv(nn.Module):
    def __init__(self, in_channels, out_channels, stride=1):
        super().__init__()

        self.depthwise = nn.Sequential(nn.Conv2d(in_channels, in_channels,3, stride = stride, padding = 1, groups = in_channels, bias=False),
                                       nn.BatchNorm2d(in_channels),
                                       nn.ReLU(inplace=True))

        self.pointwise = nn.Sequential(nn.Conv2d(in_channels, out_channels,1, bias=False),
                                       nn.BatchNorm2d(out_channels),
                                       nn.ReLU(inplace=True))
    def forward(self, x):
        x = self.depthwise(x)
        x = self.pointwise(x)
        return x

class MobileNet(nn.Module):
    def __init__(self, alpha, num_classes=1000):
        super().__init__()

        self.conv1 = nn.Conv2d(3, int(32*alpha), 3, stride=2, padding=1, bias=False)
        self.bn1 = nn.BatchNorm2d(int(32*alpha))
        self.relu = nn.ReLU(inplace=True)

        self.conv2 = DepSepConv(int(32*alpha), int(64*alpha), stride=1)
        self.conv3 = nn.Sequential(DepSepConv(int(64*alpha), int(128*alpha), stride=2), # down sample
                                   DepSepConv(int(128*alpha), int(128*alpha)))
        self.conv4 = nn.Sequential(DepSepConv(int(128*alpha), int(256*alpha), stride=2), # down sample
                                   DepSepConv(int(256*alpha), int(256*alpha)))
        self.conv5 = nn.Sequential(DepSepConv(int(256*alpha), int(512*alpha), stride=2), # down sample
                                   *[DepSepConv(int(512*alpha), int(512*alpha)) for i in range(5)])
        self.conv6 = nn.Sequential(DepSepConv(int(512*alpha), int(1024*alpha), stride=2), # down sample
                                   DepSepConv(int(1024*alpha), int(1024*alpha)))

        self.avg_pool = nn.AdaptiveAvgPool2d((1,1))
        self.fc = nn.Linear(int(1024*alpha), num_classes)

        # weights initialization
        for m in self.modules():
            if isinstance(m, nn.Conv2d):
                nn.init.kaiming_normal_(m.weight, mode="fan_out", nonlinearity="relu")

    def forward(self, x):
        x = self.conv1(x)
        x = self.bn1(x)
        x = self.relu(x)
        x = self.conv2(x)
        x = self.conv3(x)
        x = self.conv4(x)
        x = self.conv5(x)
        x = self.conv6(x)
        x = self.avg_pool(x)
        x = torch.flatten(x, 1)
        x = self.fc(x)
        return x
~~~

<br/>

  - 모델 인스턴스화 및 실행하기
~~~py
model = MobileNet(alpha=1)
# print(model)
!pip install torchinfo
from torchinfo import summary
summary(model, input_size=(2,3,224,224), device='cpu')

x = torch.randn(2,3,224,224)
print(model(x).shape)
~~~

###### [CNN](#CNN)
###### [Top](#top)

<br/>
<br/>

# MobileNet V2
  - nn.Sequential(nn.Linear(2, dim), nn.ReLU(), nn.Linear(dim, 2)) 실험을 했을때, nn.Sequential(nn.Linear(2, dim)한다음, nn.Linear(dim, 2)을 하면 그대로 나와야 하는데, 그대로 나오지 않으니 ReLU 가 정보 손실을 야기한다
    - 하지만 ReLU를 쓰더라도 dim이 크면 또 나쁘지 않다
      - 이미 정보가 많다면(dim이 크다면) 정보손실이 어느정도 되도 나쁘지 않다는것

<br/>

<img width="586" height="298" alt="image" src="https://github.com/user-attachments/assets/dc7409fe-bcc2-4d50-b0bd-f1fa7d163353" />

<br/>

  - Residual Block vs Inverted Residual Block
    - 원래는 항상 먼저 conv를 하면서 줄이고 그 이후에 늘리는 것을 했음
      - 이렇게 해왔던 이유는 파라미터 수 때문에
    - 하지만 이번에는 먼저 늘리고, 줄이는 방식을 택함
      - Depthwise conv를 사용함 -> Group conv인데, 그룹의 개수(G)를 입력 채널의 개수(C)와 동일하게 설정한것
      - 하지만, 1) 계속 늘리기만 하면 파라미터 수가 너무 많아지고, 2) 들어온 채널 수로 다시 돌아가야 (실선) skip-connection 연결 가능 하기때문에 다시 채널 수를 줄여줘야함, 하지만 여기에 ReLU까지 쓰면 정보가 너무 많이 손실될것이니 때문에 쓰지 않음 -> 그냥 통과 (linear activation) 시키자는것

<br/>

<img width="925" height="245" alt="image" src="https://github.com/user-attachments/assets/35ef2ec8-3846-4b7a-9d6d-fd151a1d0457" />

<br/>

  - Relu6
    - 일반 Relu는 마이너스인것은 0으로 보내고 플러스 인것은 그냥 두기 때문에 플러스는 무한대이다, 그런데 Relu6은 양수도 6에서 끊어 버린다 최고치가 6이라는것

<br/>

<img width="829" height="487" alt="image" src="https://github.com/user-attachments/assets/8c298ff5-5cca-494a-8e36-405230879ca5" />

<br/>

  - stride=2 는 첫 block의 Dwise 에서 이루어짐
  - stride=1 이고 in_c=out_c 때만 skip-connection
  - 논문에 따르면, 적은 비트 사용에 적합하기 때문에 ReLU6 사용

<br/>

<img width="322" height="338" alt="image" src="https://github.com/user-attachments/assets/8782d9fd-c1be-45d1-9b98-a7f87c41b05e" />

<br/>

  - t : 채널을 몇 배수로 키울지
  - c : output채널수
  - n : 반복횟수
  - s : stride

<img width="701" height="514" alt="image" src="https://github.com/user-attachments/assets/8126cb27-308b-4587-8ede-2035549b57c5" />

<br/>

  - 모델 코드 확인하기
~~~py
import torch
from torch import nn

class DepSepConv(nn.Module):
    def __init__(self, in_channels, out_channels, stride):
        super().__init__()

        self.depthwise = nn.Sequential(nn.Conv2d(in_channels, in_channels,3, stride = stride, padding = 1, groups = in_channels, bias=False),
                                       nn.BatchNorm2d(in_channels),
                                       nn.ReLU6(inplace=True))

        self.pointwise = nn.Sequential(nn.Conv2d(in_channels, out_channels,1, bias=False),
                                       nn.BatchNorm2d(out_channels))
                                       # no activation!!
    def forward(self, x):
        x = self.depthwise(x)
        x = self.pointwise(x)
        return x

class InvertedBlock(nn.Module):
    def __init__(self, in_channels, exp_channels, out_channels, stride):
        super().__init__()

        self.use_skip_connect = (stride==1 and in_channels==out_channels)

        layers = []
        if in_channels != exp_channels: # 채널 안 늘어날 때는 1x1 생략. 즉, 1x1은 채널을 키워야할 때만 존재한다.
            layers += [nn.Sequential(nn.Conv2d(in_channels, exp_channels, 1, bias=False),
                                     nn.BatchNorm2d(exp_channels),
                                     nn.ReLU6(inplace=True))]
        layers += [DepSepConv(exp_channels, out_channels, stride=stride)]

        self.residual = nn.Sequential(*layers)

    def forward(self, x):
        if self.use_skip_connect:
            return x + self.residual(x) # 더하고 ReLU 하지 않는다! 그래야 linear block이 되는 거니까 (근데 그냥 pre-act 구조로 쓴다면 어땠을까?는 약간의 아쉬움)
        else:
            return self.residual(x)

class MobileNetV2(nn.Module):
    def __init__(self, num_classes=1000):
        super().__init__()

        self.configs=[# t, c, n, s
                      [1, 16, 1, 1],
                      [6, 24, 2, 2],
                      [6, 32, 3, 2],
                      [6, 64, 4, 2],
                      [6, 96, 3, 1],
                      [6, 160, 3, 2],
                      [6, 320, 1, 1]]

        self.stem_conv = nn.Sequential(nn.Conv2d(3, 32, 3, padding=1, stride=2, bias=False),
                                       nn.BatchNorm2d(32),
                                       nn.ReLU6(inplace=True))

        in_channels = 32
        layers = []
        for t, c, n, s in self.configs:
            for i in range(n):
                stride = s if i == 0 else 1
                exp_channels = in_channels * t
                layers += [InvertedBlock(in_channels=in_channels, exp_channels=exp_channels, out_channels=c, stride=stride)]
                in_channels = c

        self.layers = nn.Sequential(*layers)

        self.last_conv = nn.Sequential(nn.Conv2d(in_channels, 1280, 1, bias=False),
                                       nn.BatchNorm2d(1280),
                                       nn.ReLU6(inplace=True))

        self.avg_pool = nn.AdaptiveAvgPool2d((1,1))

        self.classifier = nn.Sequential(nn.Dropout(0.2), # 논문에는 상세히 나와있진 않지만 토치 문서에 있어서 포함 -> 채널 축으로 특징들이 놓여있고 그것들을 일부 가려보며 학습하는 의미
                                        nn.Linear(1280, num_classes))

    def forward(self, x):
        x = self.stem_conv(x)
        x = self.layers(x)
        x = self.last_conv(x)
        x = self.avg_pool(x)
        x = torch.flatten(x, 1)
        x = self.classifier(x)
        return x
~~~

<br/>

  - 모델 인스턴스화 및 실행하기
~~~py
model = MobileNetV2()
# print(model)
!pip install torchinfo
from torchinfo import summary
summary(model, input_size=(2,3,224,224), device='cpu')

x = torch.randn(2,3,224,224)
print(model(x).shape)
~~~

###### [CNN](#CNN)
###### [Top](#top)

<br/>

# MobileNet V3
  - SE-block 적용 + 새로운 activation 제안 + 입, 출력 쪽 구조 변경
    - SE-block : reduction ratio r = 4 사용
    - 새로운 activation 제안 : sigmoid -> Hard Sigmoid(ReLU6(x + 3)/6) 사용 및 Hard Swish(x(ReLU6(x + 3)/6)) 제안
      - 실제로, 성능 손해 거의 없이 precision loss 도 없고 메모리 접근 수도 줄여준다

<br/>

<img width="600" height="495" alt="image" src="https://github.com/user-attachments/assets/3cf6587f-e117-47db-b22f-c09ea9f1dacb" />

<br/>

<img width="1031" height="284" alt="image" src="https://github.com/user-attachments/assets/8b14405f-07aa-42bb-a798-04151d74ff92" />

<br/>

  - 전체구조
    - 첫 conv에 H-Swish 사용 : 필터 수를 32->16 으로 줄일 수 있었음
    - Large와 Small 두 가지 제안
    - ReLU6는 안쓰고 도로 ReLU 사용
    - HS(Hard Swish)는 전체가 아닌 모델의 반 정도만 사용
    - 모든 채널을 8의 배수로 맞춤 (for 연산 효율, 메모리 절약)

<br/>

<img width="469" height="385" alt="image" src="https://github.com/user-attachments/assets/32ec77fd-259d-4064-b5f6-2756c1ad9ac3" />

<br/>

<img width="496" height="553" alt="image" src="https://github.com/user-attachments/assets/11d16710-1c89-4e06-bea8-76544d30d3b4" />

<br/>

  - 모델 코드 확인하기
~~~py
import torch
from torch import nn

def _make_divisible(v, divisor, min_value=None):
    """
    This function is taken from the original tf repo.
    It ensures that all layers have a channel number that is divisible by 8
    It can be seen here:
    https://github.com/tensorflow/models/blob/master/research/slim/nets/mobilenet/mobilenet.py
    :param v:
    :param divisor:
    :param min_value:
    :return:
    """
    # 쉽게 말해, 이 함수는 가까운 8의 배수를 찾아줌

    if min_value is None:
        min_value = divisor
    new_v = max(min_value, int(v + divisor / 2) // divisor * divisor) # divisor / 2 는 반올림을 위해 (너무 작아지지 않게)
    # case 1) v=10, divisor = 8 이면 10+4 // 8 * 8 = 8 근데 10 => 8 은 10% 이상 빠지는 거니까 8+8 = 16 으로 조정됨
    # case 2) v=39, divisor = 8 이면 39+4 // 8 * 8 = 40 => 10%보다 빠지지 않았기 때문에 40이 출력됨!

    if new_v < 0.9 * v: # 10% 보다 더 빠지지 않게 조정
        new_v += divisor

    return new_v

class SEBlock(nn.Module):
    def __init__(self, in_channels, r = 4): # mobilenet V3 에서는 reduction ratio r=4로!
        super().__init__()
        self.squeeze = nn.AdaptiveAvgPool2d((1,1))
        self.excitation = nn.Sequential(nn.Linear(in_channels, _make_divisible(in_channels // r, 8)),
                                        nn.ReLU(inplace=True),
                                        nn.Linear(_make_divisible(in_channels // r, 8), in_channels),
                                        nn.Hardsigmoid(inplace=True)) # Hard sigmoid!

    def forward(self, x):
        SE = self.squeeze(x)
        SE = SE.reshape(x.shape[0],x.shape[1])
        SE = self.excitation(SE)
        SE = SE.unsqueeze(dim=2).unsqueeze(dim=3)
        x = x * SE
        return x

class DepSESep(nn.Module):
    def __init__(self, in_channels, out_channels, kernel_size, use_se, use_hs, stride):
        super().__init__()

        self.depthwise = nn.Sequential(nn.Conv2d(in_channels, in_channels, kernel_size, stride = stride, padding = (kernel_size - 1) // 2, groups = in_channels, bias=False),
                                       nn.BatchNorm2d(in_channels, momentum=0.99), # momentum = 0.99 는 논문에서 제시
                                       nn.Hardswish(inplace=True) if use_hs else nn.ReLU(inplace=True)) # hs 아니면 걍 ReLU (ReLU6 아님)

        self.seblock = SEBlock(in_channels) if use_se else None

        self.pointwise = nn.Sequential(nn.Conv2d(in_channels, out_channels,1, bias=False),
                                       nn.BatchNorm2d(out_channels, momentum=0.99))
                                       # no activation!!
    def forward(self, x):
        x = self.depthwise(x)
        if self.seblock is not None:
            x = self.seblock(x)
        x = self.pointwise(x)
        return x

class InvertedBlock(nn.Module):
    def __init__(self, in_channels, exp_channels, out_channels, kernel_size, stride, use_se, use_hs):
        super().__init__()

        self.use_skip_connect = (stride==1 and in_channels==out_channels)

        layers = []
        if in_channels != exp_channels: # 채널 안늘어날 때는 1x1 생략. 즉, 1x1은 채널을 키워야할 때만 존재한다.
            layers += [nn.Sequential(nn.Conv2d(in_channels, exp_channels, 1, bias=False),
                                     nn.BatchNorm2d(exp_channels, momentum=0.99),
                                     nn.Hardswish(inplace=True) if use_hs else nn.ReLU(inplace=True))]
        layers += [DepSESep(exp_channels, out_channels, kernel_size, use_se, use_hs, stride=stride)]

        self.residual = nn.Sequential(*layers)

    def forward(self, x):
        if self.use_skip_connect:
            return x + self.residual(x) # 더하고 ReLU 하지 않는다! 그래야 linear block이 되는 거니까
        else:
            return self.residual(x)

class MobileNetV3(nn.Module):
    def __init__(self, cfgs, last_channels, num_classes=1000, width_mult=1.):
        super().__init__()

        in_channels = _make_divisible(16 * width_mult, 8)

        # building first layer
        self.stem_conv = nn.Sequential(nn.Conv2d(3, in_channels, 3, padding=1, stride=2, bias=False),
                                       nn.BatchNorm2d(in_channels, momentum=0.99),
                                       nn.Hardswish(inplace=True)) # 처음건 무조건 HS, HS를 써서 16으로 줄일 수 있었다 함

        # building inverted residual blocks
        layers=[]
        for k, t, c, use_se, use_hs, s in cfgs:
            exp_channels = _make_divisible(in_channels * t, 8)
            out_channels = _make_divisible(c * width_mult, 8)
            layers += [InvertedBlock(in_channels, exp_channels, out_channels, k, s, use_se, use_hs)]
            in_channels = out_channels
        self.layers = nn.Sequential(*layers)

        # building last several layers
        self.last_conv = nn.Sequential(nn.Conv2d(in_channels, exp_channels, 1, bias=False),
                                       nn.BatchNorm2d(exp_channels, momentum=0.99),
                                       nn.Hardswish(inplace=True))

        self.avgpool = nn.AdaptiveAvgPool2d((1, 1))
        last_channels = _make_divisible(last_channels * width_mult, 8)
        self.classifier = nn.Sequential(nn.Linear(exp_channels, last_channels),
                                        nn.Hardswish(inplace=True),
                                        nn.Dropout(p=0.2, inplace=True),
                                        nn.Linear(last_channels, num_classes)) # MLP 부활

        for m in self.modules():
            if isinstance(m, nn.Conv2d):
                nn.init.kaiming_normal_(m.weight, mode="fan_out")
                if m.bias is not None:
                    nn.init.zeros_(m.bias)
            elif isinstance(m, nn.Linear):
                nn.init.normal_(m.weight, 0, 0.01)
                nn.init.zeros_(m.bias)

    def forward(self, x):
        x = self.stem_conv(x)
        x = self.layers(x)
        x = self.last_conv(x)
        x = self.avgpool(x)
        x = torch.flatten(x, 1)
        x = self.classifier(x)
        return x

def mobilenetv3_large(**kwargs):
    cfgs = [#k,   t,   c,   SE,   HS,   s
            # 이전 output에 t를 곱해서 exp size가 되는 것임!
            [3,   1,  16, False, False, 1],
            [3,   4,  24, False, False, 2],
            [3,   3,  24, False, False, 1],
            [5,   3,  40, True,  False, 2],
            [5,   3,  40, True,  False, 1],
            [5,   3,  40, True,  False, 1],
            [3,   6,  80, False, True,  2],
            [3, 2.5,  80, False, True,  1],
            [3, 2.3,  80, False, True,  1],
            [3, 2.3,  80, False, True,  1],
            [3,   6, 112, True,  True,  1],
            [3,   6, 112, True,  True,  1],
            [5,   6, 160, True,  True,  2],
            [5,   6, 160, True,  True,  1],
            [5,   6, 160, True,  True,  1]]

    return MobileNetV3(cfgs, last_channels=1280, **kwargs)

def mobilenetv3_small(**kwargs):
    cfgs = [#k,    t,   c,  SE,    HS,   s
            [3,    1,  16, True,  False, 2],
            [3,  4.5,  24, False, False, 2],
            [3, 3.67,  24, False, False, 1],
            [5,    4,  40, True,  True,  2],
            [5,    6,  40, True,  True,  1],
            [5,    6,  40, True,  True,  1],
            [5,    3,  48, True,  True,  1],
            [5,    3,  48, True,  True,  1],
            [5,    6,  96, True,  True,  2],
            [5,    6,  96, True,  True,  1],
            [5,    6,  96, True,  True,  1]]

    return MobileNetV3(cfgs, last_channels=1024, **kwargs)
~~~

<br/>

  - 모델 인스턴스화 및 실행하기
~~~py
model = mobilenetv3_large()
# print(model)
!pip install torchinfo
from torchinfo import summary
summary(model, input_size=(2,3,224,224), device='cpu')

x = torch.randn(2,3,224,224)
print(model(x).shape)
~~~

###### [CNN](#CNN)
###### [Top](#top)














