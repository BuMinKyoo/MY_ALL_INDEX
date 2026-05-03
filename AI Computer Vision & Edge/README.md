###### Top

- [그래픽관련tool](#그래픽관련tool)
- [Ai_Agent_API](https://github.com/BuMinKyoo/Ai_Agent_API/tree/main)
  - WPF 기반 LLM 로그 분석 도우미. 장비/시스템에서 발생한 로그·에러 메시지를 LLM API로 보내, 근본 원인 추정과 점검 항목을 자동으로 받아보는 데스크톱 앱
- [OllamaWpfClient](https://github.com/BuMinKyoo/OllamaWpfClient/tree/main)
  - 오프라인 환경에서 로컬 PC에 설치한 Ollama와 REST API로 통신하는 WPF 채팅 클라이언트입니다. 인터넷 연결 없이 127.0.0.1:11434 로컬호스트에서 Llama 3, Qwen 등 LLM 모델을 구동하고 사용하는 것을 목표로 합니다
  - Ollama
    - 명렁어 한번으로 학습이 완료된 인공지능의 뇌 구조가 담긴 거대한 이진 데이터 파일(주로 .gguf 포맷)다운로드
      - 이걸 llama.cpp 엔진이 해석
      - 포맷 .gguf
        - 메타데이터 (조립 설명서): 파일 앞부분에는 이 모델이 어떤 구조인지(예: "나는 Llama 3 구조를 쓰고, 레이어는 32개이며, 입력 차원 수는 4096이다")를 명시하는 메타데이터가 들어있습니다.
        - 텐서 데이터 (가중치/재료): 그 뒤에 엄청난 용량의 실제 숫자 데이터(행렬)들이 들어있습니다
        - llama.cpp 엔진 안에는 "수학적 연산을 하는 방법(레고 블록)"이 C++ 코드로 하드코딩
텐서 데이터 (가중치/재료): 그 뒤에 엄청난 용량의 실제 숫자 데이터(행렬)들이 들어있습니다
    - 파이썬으로 짠 모델을 누군가가 c++로 짰기 때문에(llama.cpp) 복잡한 파이썬 실행환경을 만들 필요가 없음
    - API로 통신할 수 있도록 바로 제공
    - 최적화 제한적
- [Vision.OnnxTester](https://github.com/BuMinKyoo/Vision.OnnxTester/tree/main)
  - WPF (.NET 10) 기반의 ONNX Runtime 학습용 테스트 프로젝트. YOLOv8 모델을 로드해 정적 이미지(CCTV 스냅샷 등)에서 객체를 검출하고, Bounding Box를 시각화한다
  - ONNX
    - ONNX는 특정 모델을 위한 코드가 아니라, "수학적 연산의 실행 순서(Graph)"를 적어놓은 설계도
    - 최적화 자유로움
    - ONNX Runtime은 "이건 Llama야"라고 이해하는 게 아니라, "첫 번째는 행렬 곱셈이고, 두 번째는 Softmax 연산이네? 내가 가진 연산기(Kernels)로 순서대로 실행할게"라고 동작
    - .PT 확장자(파이토치) -> .ONNX 확장자로 포맷 변경
- [Vision.LiveStream.Inference](https://github.com/BuMinKyoo/Vision.LiveStream.Inference/tree/main)
  - WPF (.NET 10) + ONNX Runtime 기반 실시간 RTSP 영상 객체 검출 학습 프로젝트. 선행 프로젝트 Vision.OnnxTester (정적 이미지 + YOLOv8) 의 검출 엔진을 베이스로, RTSP 스트림을 받아 실시간으로 추론하고 화면에 박스를 그리는 것이 목표



<br/>
<br/>

***

# 그래픽관련tool
  - GDI(CPU 전용)
    - 기본 2D 화면 그리기
    - 낡음, 무거움 (MFC 시절의 유산)
  - DirectX(GPU)
    - 고성능 화면 그리기 (윈도우 전용)
    - PC 게임, WPF 렌더링의 뼈대
  - OpenGL(GPU)
    - 범용 화면 그리기 (크로스 플랫폼)
    - 널리 쓰이나 구조가 오래됨
  - Vulkan(GPU)
    - 초고성능 화면 그리기 (크로스 플랫폼)
    - 성능 끝판왕, 그러나 극악의 개발 난이도
  - Metal(GPU)
    - 고성능 화면 그리기 (애플 전용)
    - Mac, iOS 등 애플 기기의 그래픽/연산 핵심
  - WebGL / WebGPU(GPU)
    - 웹 기반 3D 및 고성능 그래픽
    - 웹 브라우저 위에서 별도 프로그램 설치 없이 구동
  - Skia(CPU / GPU 혼용)
    - 2D UI 화면 렌더링
    - 구글 크롬, 안드로이드, 플러터(Flutter)의 뼈대
  - CUDA(GPU 전용 - NVIDIA)
    - 초고속 병렬 수학 연산 (AI 핵심)
    - 화면 안 그림. 오직 엔비디아 GPU용
  - OpenCL(GPU / CPU 범용)
    - 범용 병렬 수학 연산 (크로스 플랫폼)
    - 하드웨어를 가리지 않으나 현재 AI 생태계 주도권은 잃음
  - DirectML(주로 GPU)
    - 머신러닝 연산 가속 (윈도우 전용)
    - 그래픽카드 종류 상관없이 윈도우 앱 내 AI 추론 가속 (최근 NPU도 지원)
  - TensorRT(GPU 전용 - NVIDIA)
    - AI 모델 추론 초고속 최적화
    - 무거운 AI 모델을 엔비디아 GPU에 맞춰 가볍고 빠르게 압축
  - OpenCV(기본 CPU / GPU 가속 지원)
    - 이미지/영상 분석 및 처리
    - 기본 연산은 CPU가 담당하나, 내부적으로 cv::cuda 등을 호출해 GPU로 고속 처리 가능
  - FFmpeg(기본 CPU / GPU 코덱 지원)
    - 비디오/오디오 파일 및 스트림 처리
    - 기본 인코딩/디코딩은 CPU가 담당하나, NVIDIA의 NVENC 같은 GPU 전용 코덱 칩을 활용해 가속 가능

###### [그래픽관련tool](#그래픽관련tool)
###### [Top](#top)





